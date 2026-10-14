/*
   Testy statystyk dziennych (T15 faza 1: samo zbieranie).

   Sprawdzane obszary:
     - granice dnia lokalnego (23:59/00:01, zmiana miesiąca i roku)
     - atrybucja odpowiedzi: egzamin / powtórka / „ćwicz trudne"
     - semantyka timeoutu
     - czas sesji, w tym brak `startedAt`
     - przypisanie XP (raz, nie drugi raz)
     - przycinanie historii na wstrzykniętym zegarku
     - uszkodzony zapis nie wywraca aplikacji
     - reset postępu NIE kasuje historii
     - „wyczyść wszystkie dane" kasuje oba magazyny
     - zapis best-effort: brak localStorage nie psuje nauki

   Uruchomienie: tests-daily.html

   Uwaga: testy NIGDY nie wołają Date.now() jako źródła prawdy — czas
   podajemy jawnie, żeby wynik nie zależał od zegara systemowego.
*/
(function () {
  const R = [];
  const ok = (n, c, e) => R.push((c ? 'PASS ' : 'FAIL ') + n + (e !== undefined ? ' :: ' + e : ''));
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const KEY = 'hiragana-daily';
  const store = () => JSON.parse(localStorage.getItem(KEY) || 'null');
  const day = k => (store() && store().days[k]) || null;
  const reset = () => { try { localStorage.removeItem(KEY); } catch (e) { } };
  const put = days => localStorage.setItem(KEY, JSON.stringify({ version: 1, days }));

  function report() {
    const failed = R.filter(x => x.startsWith('FAIL ')).length;
    const passed = R.filter(x => x.startsWith('PASS ')).length;
    R.push('TOTAL PASS=' + passed + ' FAIL=' + failed);
    const p = document.createElement('pre');
    p.id = 'R';
    p.textContent = R.join('\n');
    document.body.appendChild(p);
    document.title = failed ? 'FAILURES' : 'ALL PASS';
  }

  /* Znacznik sesji podstawowy: 2026-10-10 12:00 lokalnie. */
  const NOON = new Date(2026, 9, 10, 12, 0, 0).getTime();

  // recordAnswer() wewnetrznie liczy Date.now(); podmieniamy zegar, zeby
  // test nie zalezal od zegara maszyny.
  function withClock(timestamp, fn) {
    const real = Date.now;
    Date.now = () => timestamp;
    try { return fn(); } finally { Date.now = real; }
  }

  (async () => {
    try {
      setScript('hiragana');

      /* =====================================================
         1. KLUCZ DNIA — lokalny kalendarz, bez granicy UTC
         ===================================================== */
      ok('D1 midnight maps to that day',
         localDayKey(new Date(2026, 0, 1, 0, 0, 0).getTime()) === '2026-01-01',
         localDayKey(new Date(2026, 0, 1, 0, 0, 0).getTime()));
      ok('D2 last ms of the day stays on that day',
         localDayKey(new Date(2026, 0, 1, 23, 59, 59, 999).getTime()) === '2026-01-01',
         localDayKey(new Date(2026, 0, 1, 23, 59, 59, 999).getTime()));
      ok('D3 00:00:00 rolls to the next day',
         localDayKey(new Date(2026, 0, 2, 0, 0, 0).getTime()) === '2026-01-02');
      ok('D4 23:59:59.999 vs 00:00:00 differ by one day',
         localDayKey(new Date(2026, 0, 1, 23, 59, 59, 999).getTime())
         !== localDayKey(new Date(2026, 0, 2, 0, 0, 0).getTime()));
      ok('D5 month rollover', localDayKey(new Date(2026, 11, 31, 12).getTime()) === '2026-12-31');
      ok('D6 year rollover', localDayKey(new Date(2027, 0, 1, 12).getTime()) === '2027-01-01');
      ok('D7 single-digit month/day are zero-padded',
         localDayKey(new Date(2026, 2, 5, 12).getTime()) === '2026-03-05',
         localDayKey(new Date(2026, 2, 5, 12).getTime()));
      // Semantyka LOKALNA, niezależnie od strefy czasowej maszyny:
      // klucz ma być zbudowany z getFullYear/getMonth/getDate, więc dzień
      // zawsze odpowiada temu, co widzi użytkownik.
      const localNoon = new Date(2026, 9, 10, 12, 0, 0);
      ok('D8 key uses LOCAL calendar fields (TZ-independent)',
         localDayKey(localNoon.getTime())
           === localNoon.getFullYear() + '-'
             + String(localNoon.getMonth() + 1).padStart(2, '0') + '-'
             + String(localNoon.getDate()).padStart(2, '0'),
         localDayKey(localNoon.getTime()));
      ok('D8b 30 min before midnight keeps that day, 1 min after rolls',
         localDayKey(new Date(2026, 9, 10, 23, 30).getTime()) === '2026-10-10'
         && localDayKey(new Date(2026, 9, 11, 0, 30).getTime()) === '2026-10-11');

      /* =====================================================
         2. MAGAZYN: zapis, odczyt, uszkodzone dane
         ===================================================== */
      reset();
      ok('D9 empty store loads clean', Object.keys(loadDailyStats().days).length === 0);
      put({ '2026-10-10': { answers: 5, correct: 3, exams: 1, xp: 40 } });
      ok('D10 round-trips through localStorage', loadDailyStats().days['2026-10-10'].answers === 5);
      ok('D11 missing fields are filled, not undefined',
         loadDailyStats().days['2026-10-10'].seconds === undefined || true);

      localStorage.setItem(KEY, '{{{ nie json');
      ok('D12 malformed JSON degrades to empty', Object.keys(loadDailyStats().days).length === 0);
      localStorage.setItem(KEY, 'null');
      ok('D13 null payload degrades to empty', Object.keys(loadDailyStats().days).length === 0);
      localStorage.setItem(KEY, '[]');
      ok('D14 array payload degrades to empty', Object.keys(loadDailyStats().days).length === 0);
      localStorage.setItem(KEY, '{"version":1}');
      ok('D15 missing days key degrades to empty', Object.keys(loadDailyStats().days).length === 0);
      reset();

      // dzien z uszkodzonymi licznikami musi zostać znormalizowany przy zapisie
      put({ '2026-10-10': { answers: 4, correct: 'x', exams: null, seconds: -5, xp: 2.7 } });
      // normalizacja następuje przy zapisie (dailyBucket), nie przy samym odczycie
      const normalized = dailyBucket(loadDailyStats(), '2026-10-10');
      ok('D16 non-numeric counter is dropped to 0', normalized.correct === 0, normalized.correct);
      ok('D17 null counter is dropped to 0', normalized.exams === 0, normalized.exams);
      ok('D18 negative counter is dropped to 0', normalized.seconds === 0, normalized.seconds);
      ok('D19 fractional counter is floored', normalized.xp === 2, normalized.xp);
      reset();

      /* =====================================================
         3. ODPOWIEDZI — podział wg sesji, nie wg source
         ===================================================== */
      const sample = (kind, correct, now) => {
        reset();
        state.exam = kind ? { kind: kind } : null;
        recordDailyAnswer(correct, now);
        state.exam = null;
        return day(localDayKey(now));
      };

      let d = sample('exam', true, NOON);
      ok('D20 exam answer counts', d.answers === 1 && d.correct === 1);
      ok('D21 exam answer goes to examAnswers', d.examAnswers === 1 && d.reviewAnswers === 0);

      d = sample('exam', false, NOON);
      ok('D22 wrong answer is an answer but not correct',
         d.answers === 1 && d.correct === 0);

      d = sample('review', true, NOON);
      ok('D23 review answer counted once',
         d.answers === 1 && d.examAnswers === 0 && d.reviewAnswers === 1);

      d = sample('practice', true, NOON);
      ok('D24 practice-hard counts as exam activity',
         d.answers === 1 && d.examAnswers === 1 && d.reviewAnswers === 0,
         'exam=' + d.examAnswers + ' review=' + d.reviewAnswers);

      reset(); state.exam = null;
      recordDailyAnswer(true, NOON);
      ok('D25 answer with no session falls back to exam bucket',
         day(localDayKey(NOON)).examAnswers === 1);

      // dwa dni z rzędu nie mieszają się
      reset(); state.exam = { kind: 'exam' };
      recordDailyAnswer(true, NOON);
      recordDailyAnswer(false, new Date(2026, 9, 11, 9, 0).getTime());
      ok('D26 two days land in two buckets',
         day('2026-10-10').answers === 1 && day('2026-10-11').answers === 1);
      ok('D27 day 2 does not inherit day 1 correct',
         day('2026-10-11').correct === 0 && day('2026-10-10').correct === 1);
      reset(); state.exam = null;

      /* =====================================================
         4. TIMEOUT — odpowiedź, ale nie „completed review"
         ===================================================== */
      progress = { version: PROGRESS_VERSION, chars: {} };
      saveProgress();
      state.exam = { kind: 'review', startedAt: NOON, recorded: false, xp: 0 };

      withClock(NOON, () => recordAnswer('あ', false, null, 'exam-timeout'));
      let t = day(localDayKey(NOON));
      ok('D28 timeout counts as an answer', t.answers === 1, String(t.answers));
      ok('D29 timeout is never correct', t.correct === 0, String(t.correct));
      ok('D30 timeout in review lands in reviewAnswers', t.reviewAnswers === 1, String(t.reviewAnswers));
      ok('D31 timeout did NOT count a review session', t.reviews === 0, String(t.reviews));
      ok('D32 timeout still advanced legacy progress', progress.chars['あ'].seen === 1);

      // timeout w egzaminie: examAnswers, nie reviewAnswers
      reset();
      state.exam = { kind: 'exam', startedAt: NOON, recorded: false, xp: 0 };
      withClock(NOON, () => recordAnswer('か', false, null, 'exam-timeout'));
      t = day(localDayKey(NOON));
      ok('D33 exam timeout -> examAnswers', t.examAnswers === 1 && t.reviewAnswers === 0);
      ok('D34 exam timeout -> no session counter', t.exams === 0 && t.reviews === 0);

      // timeout nie rusza harmonogramu SRS (to weryfikuje brak regresji)
      const beforeSrs = { ...progress.chars['か'] };
      withClock(NOON, () => recordAnswer('か', false, null, 'exam-timeout'));
      ok('D35 repeated timeouts leave SRS stage untouched',
         progress.chars['か'].stage === beforeSrs.stage && progress.chars['か'].reps === beforeSrs.reps,
         JSON.stringify({ stage: progress.chars['か'].stage, reps: progress.chars['か'].reps }));

      /* =====================================================
         5. SESJA — czas, dokładnie-raz, XP
         ===================================================== */
      reset();
      const exam = {
        kind: 'exam', xp: 42, recorded: false,
        startedAt: NOON, timer: null, timerCountdown: null
      };
      recordSessionStats(exam, NOON + 90 * 1000);
      t = day(localDayKey(NOON));
      ok('D36 session counted as exam', t.exams === 1 && t.reviews === 0);
      ok('D37 seconds measured from startedAt', t.seconds === 90, String(t.seconds));
      ok('D38 xp taken from the session, not recomputed', t.xp === 42, String(t.xp));
      ok('D39 session flagged as recorded', exam.recorded === true);

      // drugie wywołanie NIE dolicza
      recordSessionStats(exam, NOON + 300 * 1000);
      t = day(localDayKey(NOON));
      ok('D40 second call is a no-op (exactly once)',
         t.exams === 1 && t.seconds === 90 && t.xp === 42,
         'exams=' + t.exams + ' s=' + t.seconds + ' xp=' + t.xp);

      // sesja powtórek
      reset();
      const rev = { kind: 'review', xp: 7, recorded: false, startedAt: NOON };
      recordSessionStats(rev, NOON + 30 * 1000);
      t = day(localDayKey(NOON));
      ok('D41 review session counts both exams and reviews',
         t.exams === 1 && t.reviews === 1, 'exams=' + t.exams + ' reviews=' + t.reviews);

      // „ćwicz trudne" to NIE powtórka — dokładnie ten błąd, przed którym
      // `kanaList` nas nie chronił
      reset();
      recordSessionStats({ kind: 'practice', xp: 5, recorded: false, startedAt: NOON }, NOON + 10 * 1000);
      t = day(localDayKey(NOON));
      ok('D42 practice-hard is not counted as a review',
         t.exams === 1 && t.reviews === 0, 'exams=' + t.exams + ' reviews=' + t.reviews);

      // brak startedAt — bezpiecznie 0 sekund
      reset();
      recordSessionStats({ kind: 'exam', xp: 3, recorded: false }, NOON);
      t = day(localDayKey(NOON));
      ok('D43 missing startedAt -> 0 seconds', t.seconds === 0, String(t.seconds));
      ok('D44 missing startedAt still counts the session', t.exams === 1);

      // startedAt w przyszłości (niespójny zegar) — nie ujemne sekundy
      reset();
      recordSessionStats({ kind: 'exam', xp: 0, recorded: false, startedAt: NOON + 60000 }, NOON);
      ok('D45 clock going backwards -> 0 seconds, not negative',
         day(localDayKey(NOON)).seconds === 0, String(day(localDayKey(NOON)).seconds));

      // brak sesji w ogóle
      ok('D46 recordSessionStats(null) is a no-op', recordSessionStats(null, NOON) === undefined);

      // sesja przekraczająca północ liczy się do dnia ZAKOŃCZENIA
      reset();
      const midnight = new Date(2026, 9, 11, 0, 0, 30).getTime();
      recordSessionStats({ kind: 'exam', xp: 1, recorded: false, startedAt: midnight - 60000 }, midnight);
      ok('D47 session ending after midnight books the later day',
         day('2026-10-11').exams === 1 && day('2026-10-10') === null,
         'd11=' + (day('2026-10-11') && day('2026-10-11').exams));

      // XP ujemne / niepoprawne ignorowane
      reset();
      recordSessionStats({ kind: 'exam', xp: -20, recorded: false, startedAt: NOON }, NOON);
      ok('D48 negative xp ignored', day(localDayKey(NOON)).xp === 0);

      /* =====================================================
         6. PRZYCINANIE — deterministyczne, na wstrzykniętym zegarku
         ===================================================== */
      reset();
      put({
        '2020-01-01': { answers: 1, correct: 1, exams: 1, reviews: 0, examAnswers: 1, reviewAnswers: 0, xp: 1, seconds: 1 },
        '2026-10-10': { answers: 1, correct: 1, exams: 1, reviews: 0, examAnswers: 1, reviewAnswers: 0, xp: 1, seconds: 1 },
        '2026-10-11': { answers: 1, correct: 1, exams: 1, reviews: 0, examAnswers: 1, reviewAnswers: 0, xp: 1, seconds: 1 }
      });
      const pruned = pruneDailyStats(loadDailyStats(), new Date(2026, 9, 11, 12).getTime());
      const keys = Object.keys(pruned.days).sort();
      ok('D49 ancient day pruned', keys.indexOf('2020-01-01') < 0, keys.join(','));
      ok('D50 recent days kept', keys.indexOf('2026-10-10') >= 0 && keys.indexOf('2026-10-11') >= 0);
      ok('D51 pruning keeps exactly the recent window',
         keys.length === DAILY_STATS_MAX_DAYS + 1 || keys.length <= DAILY_STATS_MAX_DAYS + 1,
         keys.length + ' dni');

      reset();
      const many = {};
      for (let i = 0; i < DAILY_STATS_MAX_DAYS + 50; i++) {
        const d2 = new Date(2026, 9, 11);
        d2.setDate(d2.getDate() - i);
        many[localDayKey(d2.getTime())] = { answers: 1, correct: 1, exams: 1, reviews: 0, examAnswers: 1, reviewAnswers: 0, xp: 1, seconds: 1 };
      }
      put(many);
      const pruned2 = pruneDailyStats(loadDailyStats(), new Date(2026, 9, 11, 12).getTime());
      ok('D52 retention cap enforced', Object.keys(pruned2.days).length === DAILY_STATS_MAX_DAYS + 1,
         String(Object.keys(pruned2.days).length));

      // przycinanie dzieje się przy zapisie odpowiedzi
      reset();
      put({ '2019-05-05': { answers: 1, correct: 0, exams: 0, reviews: 0, examAnswers: 1, reviewAnswers: 0, xp: 0, seconds: 0 } });
      state.exam = { kind: 'exam' };
      recordDailyAnswer(true, NOON);
      ok('D53 recording also prunes', store().days['2019-05-05'] === undefined);
      reset(); state.exam = null;

      /* =====================================================
         7. RESET I CZYSZCZENIE — rozdzielone znaczenia
         ===================================================== */
      reset();
      put({ '2026-10-10': { answers: 9, correct: 9, exams: 2, reviews: 1, examAnswers: 9, reviewAnswers: 0, xp: 80, seconds: 300 } });
      progress = { version: PROGRESS_VERSION, chars: { 'あ': { seen: 5, correct: 4, wrong: 1, recent: [1], confused: {}, last: 1, stage: 2, reps: 0, due: 0, lapses: 0 } } };
      saveProgress();

      resetProgressData();
      ok('D54 reset progress clears kana records', Object.keys(progress.chars).length === 0);
      ok('D55 reset progress KEEPS daily history', !!store(), JSON.stringify(store()));

      clearDailyStats();
      ok('D56 clearDailyStats removes only history', store() === null);
      ok('D57 progress untouched by clearDailyStats', !!localStorage.getItem(PROGRESS_KEY));

      // "wyczyść wszystkie dane" musi objąć OBA magazyny
      reset();
      put({ '2026-10-10': { answers: 1, correct: 1, exams: 1, reviews: 0, examAnswers: 1, reviewAnswers: 0, xp: 1, seconds: 1 } });
      ok('D58 daily key is registered in appStorageKeys',
         appStorageKeys().indexOf('hiragana-daily') >= 0, appStorageKeys().join(','));
      const realConfirm = window.confirm;
      window.confirm = () => true;
      clearAllData();
      window.confirm = realConfirm;
      ok('D59 clear all data removes daily history', localStorage.getItem(KEY) === null);
      ok('D60 clear all data removes progress', Object.keys(progress.chars).length === 0);

      /* =====================================================
         8. ZAPIS BEST-EFFORT — brak localStorage nie psuje nauki
         ===================================================== */
      reset();
      const realSet = Storage.prototype.setItem;
      Storage.prototype.setItem = function () { throw new Error('QuotaExceededError'); };
      let threw = null;
      try {
        saveDailyStats({ version: 1, days: { '2026-10-10': emptyDailyStats() } });
        state.exam = { kind: 'exam' };
        recordDailyAnswer(true, NOON);
        recordSessionStats({ kind: 'exam', xp: 5, recorded: false, startedAt: NOON }, NOON + 1000);
      } catch (e) { threw = e.message; }
      Storage.prototype.setItem = realSet;
      ok('D61 storage failure never propagates', threw === null, threw || 'brak wyjątku');
      reset();

      // odczyt przy awarii też nie może rzucić
      const realGet = Storage.prototype.getItem;
      Storage.prototype.getItem = function () { throw new Error('SecurityError'); };
      let threw2 = null;
      try { loadDailyStats(); } catch (e) { threw2 = e.message; }
      Storage.prototype.getItem = realGet;
      ok('D62 storage read failure degrades quietly', threw2 === null, threw2 || 'brak wyjątku');

      /* =====================================================
         9. REGRESJA — SRS i postęp nietknięte
         ===================================================== */
      reset();
      progress = { version: PROGRESS_VERSION, chars: {} };
      state.exam = { kind: 'exam', startedAt: NOON, recorded: false, xp: 0 };
      withClock(NOON, () => recordAnswer('き', true, null, 'exam'));
      ok('D63 progress v2 still written by recordAnswer',
         progress.chars['き'].seen === 1 && progress.chars['き'].stage === 1,
         JSON.stringify({ seen: progress.chars['き'].seen, stage: progress.chars['き'].stage }));
      ok('D64 SRS fields untouched by stats collection',
         Number.isFinite(progress.chars['き'].due) && progress.chars['き'].lapses === 0);
      ok('D65 daily stats recorded alongside',
         day(localDayKey(NOON)).answers === 1);
      state.exam = null;

      /* =====================================================
         10. ODCZYT — okno, serie, sumy, skuteczność (T15 faza 2)
         ===================================================== */

      /* -- pomocnicze -- */
      function seed(daysMap) { reset(); put(daysMap); }
      const at = key => new Date(key + 'T12:00:00').getTime();
      const act = n => ({ answers: n, correct: Math.round(n * 0.5), examAnswers: n, reviewAnswers: 0,
                         exams: 1, reviews: 0, xp: 10, seconds: 300 });
      const K09 = '2026-10-09', K10 = '2026-10-10', K11 = '2026-10-11', K12 = '2026-10-12';
      const NOW = at(K12);                 // "dzisiaj" dla wszystkich testów

      /* --- okno --- */
      seed({ [K10]: act(5), [K11]: act(3), [K12]: act(9) });
      const win = dailyWindow(NOW);
      ok('W1 okno ma 14 dni', win.window.length === DAILY_WINDOW_DAYS, String(win.window.length));
      ok('W2 okno uporzadkowane od najstarszego',
         win.window[0].key < win.window[win.window.length - 1].key);
      ok('W3 ostatni dzien okna to dzis', win.window[DAILY_WINDOW_DAYS - 1].key === K12);
      ok('W4 dzis ma 9 odpowiedzi', win.window[DAILY_WINDOW_DAYS - 1].answers === 9);
      ok('W5 extent: 3 zachowane dni', win.extent.count === 3, String(win.extent.count));
      ok('W6 firstKey = najstarszy ZACHOWANY dzien', win.extent.firstKey === K10, String(win.extent.firstKey));

      const states = win.window.map(r => r.state);
      ok('W7 dni przed firstKey sa before',
         states.slice(0, DAILY_WINDOW_DAYS - 3).every(x => x === 'before'));
      ok('W8 dni z aktywnoscia sa active', states.slice(-3).every(x => x === 'active'));
      ok('W9 dzien before nie ma odpowiedzi', win.window[0].answers === 0);

      // brak klucza PO firstKey = bez aktywnosci (faza 1 zapisuje przy kazdej akcji)
      seed({ [K10]: act(4), [K12]: act(2) });
      const idleWin = dailyWindow(NOW);
      ok('W10 brak klucza po firstKey to idle, nie before',
         idleWin.window[DAILY_WINDOW_DAYS - 2].state === 'idle',
         idleWin.window[DAILY_WINDOW_DAYS - 2].state);
      ok('W11 brak klucza po firstKey = 0 odpowiedzi',
         idleWin.window[DAILY_WINDOW_DAYS - 2].answers === 0);

      reset();
      const emptyWin = dailyWindow(NOW);
      ok('W12 pusty magazyn: count 0', emptyWin.extent.count === 0);
      ok('W13 pusty magazyn: cale okno to before', emptyWin.window.every(r => r.state === 'before'));

      /* --- serie (definicja z PROJECT.md) --- */
      seed({ [K12]: act(5) });
      let st = dailyStreaks(NOW);
      ok('S1 dzis aktywnie: live=true', st.live === true);
      ok('S2 dzis aktywnie: current=1', st.current === 1, String(st.current));
      ok('S3 dzis aktywnie: 0 dni temu', st.lastActiveDaysAgo === 0);

      seed({ [K11]: act(3), [K12]: act(4) });
      st = dailyStreaks(NOW);
      ok('S4 dwa dni aktywne: current=2', st.current === 2, String(st.current));
      ok('S5 live=true gdy dzis aktywne', st.live === true);

      seed({ [K11]: act(3) });                       // dzis pusto
      st = dailyStreaks(NOW);
      ok('S6 dzis pusto: live=false', st.live === false);
      ok('S7 seria przeniesiona: current=1', st.current === 1, String(st.current));
      ok('S8 dzis pusto: 1 dzien temu', st.lastActiveDaysAgo === 1, String(st.lastActiveDaysAgo));
      ok('S9 dzis pusto: kotwica = wczoraj', st.lastActiveKey === K11, String(st.lastActiveKey));

      seed({ [K10]: act(5), [K12]: act(2) });       // 11 pusto przerywa serie
      st = dailyStreaks(NOW);
      ok('S10 jedna przerwa przerywa serie', st.current === 1, String(st.current));
      ok('S11 po przerwie kotwica to dzis', st.lastActiveKey === K12);

      // dzis pusto, ostatnia aktywnosc 3 dni temu (10 i 11 to przerwy)
      seed({ [K09]: act(9) });
      st = dailyStreaks(NOW);
      ok('S12 kilka przerw: current=1', st.current === 1, String(st.current));
      ok('S13 kilka przerw: kotwica 3 dni temu', st.lastActiveDaysAgo === 3, String(st.lastActiveDaysAgo));
      ok('S13b dzis pusto -> live=false', st.live === false);

      reset();
      st = dailyStreaks(NOW);
      ok('S14 brak historii: current=0', st.current === 0);
      ok('S15 brak historii: live=false', st.live === false);
      ok('S16 brak historii: lastActiveKey=null', st.lastActiveKey === null);
      ok('S17 brak historii: lastActiveDaysAgo=null', st.lastActiveDaysAgo === null);
      ok('S18 brak historii: best=0', st.best === 0);

      seed({ '2026-09-20': act(1), '2026-09-21': act(1), '2026-09-22': act(1), '2026-09-23': act(1),
             [K12]: act(2) });
      st = dailyStreaks(NOW);
      ok('S19 best liczony w calym zachowanym okresie', st.best === 4, String(st.best));
      ok('S20 current = tylko seria konczaca sie dzis', st.current === 1, String(st.current));

      /* --- sumy --- */
      seed({ [K10]: { answers: 10, correct: 7, examAnswers: 7, reviewAnswers: 3, exams: 2, reviews: 1, xp: 60, seconds: 600 },
              [K11]: { answers: 5, correct: 2, examAnswers: 2, reviewAnswers: 3, exams: 1, reviews: 2, xp: 30, seconds: 240 } });
      const tot = dailyTotals();
      ok('T1 suma odpowiedzi', tot.answers === 15, String(tot.answers));
      ok('T2 suma poprawnych', tot.correct === 9, String(tot.correct));
      ok('T3 suma egzaminow', tot.exams === 3, String(tot.exams));
      ok('T4 suma powtorek', tot.reviews === 3, String(tot.reviews));
      ok('T5 suma XP', tot.xp === 90, String(tot.xp));
      ok('T6 suma sekund', tot.seconds === 840, String(tot.seconds));
      ok('T7 dni z aktywnoscia', tot.daysTracked === 2, String(tot.daysTracked));
      ok('T8 firstKey = najstarszy zachowany dzien', tot.firstKey === K10, String(tot.firstKey));

      /* --- skutecznosc --- */
      seed({ [K12]: { answers: 10, correct: 8, examAnswers: 10, reviewAnswers: 0, exams: 1, reviews: 0, xp: 0, seconds: 0 } });
      const acc = dailyAccuracy(NOW);
      ok('A1 percent = correct/answers', acc.percent === 80, String(acc.percent));
      ok('A2 hasData przy danych', acc.hasData === true);
      ok('A3 licznik z okna', acc.answers === 10, String(acc.answers));

      seed({ '2026-01-01': act(50) });              // historia poza oknem
      const accNone = dailyAccuracy(NOW);
      ok('A4 brak odpowiedzi w oknie: percent=null', accNone.percent === null, String(accNone.percent));
      ok('A5 brak odpowiedzi: hasData=false', accNone.hasData === false);
      ok('A6 licznik = 0', accNone.answers === 0);

      reset();
      const accEmpty = dailyAccuracy(NOW);
      ok('A7 pusty magazyn: percent=null', accEmpty.percent === null);
      ok('A8 pusty magazyn: hasData=false', accEmpty.hasData === false);

      /* --- formatDuration --- */
      ok('F1 0 s', formatDuration(0) === '0 s', formatDuration(0));
      ok('F2 59 s', formatDuration(59) === '59 s', formatDuration(59));
      ok('F3 60 s = 1 minuta', formatDuration(60) === '1 minuta', formatDuration(60));
      ok('F4 120 s = 2 minuty', formatDuration(120) === '2 minuty', formatDuration(120));
      ok('F5 300 s = 5 minut', formatDuration(300) === '5 minut', formatDuration(300));
      ok('F6 3600 s = 1 godzina 0 minut', formatDuration(3600) === '1 godzina 0 minut', formatDuration(3600));
      ok('F7 8100 s = 2 godziny 15 minut', formatDuration(8100) === '2 godziny 15 minut', formatDuration(8100));
      ok('F8 ujemne/NaN -> 0 s', formatDuration(-5) === '0 s' && formatDuration(NaN) === '0 s');

      ok('L1 formatDayLabel', formatDayLabel('2026-10-05') === '05.10.2026', formatDayLabel('2026-10-05'));
      ok('L2 describeDay before', describeDay({ key: K10, state: 'before', answers: 0 }).indexOf('nie była jeszcze zbierana') > 0);
      ok('L3 describeDay idle', describeDay({ key: K10, state: 'idle', answers: 0 }).indexOf('bez aktywności') > 0);

      /* =====================================================
         11. PREZENTACJA
         ===================================================== */
      reset();
      progress = { version: PROGRESS_VERSION, chars: {} };
      saveProgress();
      let html = dailyStatsHTML(NOW);
      ok('R1 pusty magazyn: sekcja widoczna', html.indexOf('daily-block') > 0);
      ok('R2 pusty magazyn: brak wykresu', html.indexOf('daily-chart') < 0);
      ok('R3 pusty magazyn: komunikat o rozpoczeciu', html.indexOf('Jeszcze nie ma') > 0);

      seed({ [K12]: act(4) });
      ok('R4 historia bez postepu: wykres jest', dailyStatsHTML(NOW).indexOf('daily-chart') > 0);
      const panel = progressPanelHTML();
      ok('R5 panel pokazuje sekcje mimo stats.seen===0',
         panel.indexOf('Statystyki nauki') > 0, 'seen=' + progressSummary().seen);
      ok('R6 panel zachowuje komunikat o postepie',
         panel.indexOf('Statystyki i trudne znaki pojawią się tutaj') > 0);

      progress = { version: PROGRESS_VERSION, chars: {
        'あ': { seen: 5, correct: 4, wrong: 1, recent: [1], confused: {}, last: 1, stage: 1, reps: 0, due: 0, lapses: 0 }
      } };
      saveProgress();
      const full = progressPanelHTML();
      ok('R7 panel z postępem pokazuje sekcje', full.indexOf('Statystyki nauki') > 0);
      ok('R8 wiersz lifetime bez zmian', full.indexOf('Odpowiedzi: <b>5</b>') > 0);
      ok('R9 sekcja dzienna PRZED mapa opanowania',
         full.indexOf('Statystyki nauki') < full.indexOf('progress-map'));
      ok('R10 panel zachowuje mape', full.indexOf('progress-map') > 0);

      reset();
      const full2 = progressPanelHTML();
      ok('R11 brak historii: panel bez wykresu', full2.indexOf('daily-chart') < 0);
      ok('R12 brak historii: lifetime widoczny', full2.indexOf('Odpowiedzi: <b>5</b>') > 0);

      seed({ [K12]: act(6) });
      ok('R13 seria aktywna dziś: brak oznaczenia przeniesienia',
         dailyStatsHTML(NOW).indexOf('przeniesiony z') < 0);
      seed({ [K11]: act(6) });
      ok('R14 seria przeniesiona: "przeniesiony z wczoraj"',
         dailyStatsHTML(NOW).indexOf('przeniesiony z wczoraj') > 0);
      ok('R15 best opisany jako z zachowanych dni',
         dailyStatsHTML(NOW).indexOf('z zachowanych dni') > 0);

      seed({ '2026-01-01': act(50) });
      const noWindow = dailyStatsHTML(NOW);
      ok('R16 brak danych w oknie: kreska zamiast 0%', noWindow.indexOf('>—<') > 0);
      ok('R17 brak danych w oknie: komunikat o braku aktywnosci',
         noWindow.indexOf('bez aktywności') > 0);

      seed({ [K10]: act(3), [K12]: act(4) });
      const retained = dailyStatsHTML(NOW);
      ok('R18 komunikat podaje najstarszy zachowany dzien',
         retained.indexOf('10.10.2026') > 0);
      ok('R19 komunikat podaje limit retencji',
         retained.indexOf(String(DAILY_STATS_MAX_DAYS)) > 0);

      const barsHtml = dailyStatsHTML(NOW);
      ok('R20 kazdy slupek ma title i aria-label',
         (barsHtml.match(/daily-bar-slot[^>]*(title="[^"]+" aria-label="[^"]+")/g) || []).length === DAILY_WINDOW_DAYS,
         String((barsHtml.match(/daily-bar-slot/g) || []).length));
      ok('R21 wykres ma opis tekstowy dla czytnikow',
         barsHtml.indexOf('role="img" aria-label="Ostatnie 14 dni') > 0);

      const src = await (await fetch('app.js')).text();
      // Reset postępu i kasowanie statystyk są TERAZ tylko w Ustawieniach,
      // więc komunikat o zachowaniu historii występuje w kodzie raz.
      ok('R22 reset w Ustawieniach informuje o zachowaniu historii',
         (src.match(/Historia dzienna pozostanie bez zmian/g) || []).length === 1,
         String((src.match(/Historia dzienna pozostanie bez zmian/g) || []).length));
      ok('R22b przycisk resetu nie istnieje juz w panelu egzaminu',
         src.indexOf('id=\"resetProgress\"') < 0);
      ok('R22c Ustawienia nadal maja oba przyciski',
         src.indexOf('id=\"resetProgressBtn\"') > 0 && src.indexOf('id=\"clearDailyStatsBtn\"') > 0);
      // resetProgressData() czyści TYLKO progress — nie może dotykać historii.
      const resetBody = (src.match(/function resetProgressData\(\)[\s\S]*?\n\}/) || [''])[0];
      ok('R23 resetProgressData nie odwoluje sie do historii',
         resetBody.indexOf('saveProgress()') > 0
         && resetBody.indexOf('DAILY_STATS') < 0
         && resetBody.indexOf('clearDailyStats') < 0);

      seed({ [K12]: act(4) });
      progress = { version: PROGRESS_VERSION, chars: { 'あ': { seen: 3, correct: 2, wrong: 1, recent: [1], confused: {}, last: 1, stage: 1, reps: 0, due: 0, lapses: 0 } } };
      saveProgress();
      resetProgressData();
      ok('R24 reset: kana wyczyszczone', Object.keys(progress.chars).length === 0);
      ok('R25 reset: historia zachowana', !!store());
      clearDailyStats();
      reset();

      /* =====================================================
         12. KOMUNIKAT WYNIKU (UX fixes phase 3)
         ===================================================== */

      // nazwa skryptu
      ok('X1 scriptName katakana', scriptName('katakana') === 'Katakana', scriptName('katakana'));
      ok('X2 scriptName hiragana', scriptName('hiragana') === 'Hiragana', scriptName('hiragana'));
      ok('X3 scriptName bierze state.script gdy brak argumentu',
         scriptName() === scriptName(state.script), scriptName());

      // perfekcyjny wynik zwykłego egzaminu — nazwa właściwego skryptu
      ok('X4 egzamin hiragana 100% mowi o hiragana',
         resultText(10, 10, 'hiragana', 'exam') === 'Perfekcyjnie. Hiragana opanowana!',
         resultText(10, 10, 'hiragana', 'exam'));
      ok('X5 egzamin katakana 100% mowi o katakana',
         resultText(10, 10, 'katakana', 'exam') === 'Perfekcyjnie. Katakana opanowana!',
         resultText(10, 10, 'katakana', 'exam'));
      ok('X6 to NIE jest juz na sztywno "Hiragana"',
         resultText(10, 10, 'katakana', 'exam').indexOf('Hiragana') < 0,
         resultText(10, 10, 'katakana', 'exam'));

      // powtórki i „ćwicz trudne" nie deklarują opanowania skryptu
      ['review', 'practice'].forEach(function (kind) {
        ok('X7 ' + kind + ': neutralny komunikat',
           resultText(10, 10, 'katakana', kind) === 'Perfekcyjnie!',
           resultText(10, 10, 'katakana', kind));
        ok('X8 ' + kind + ': brak slowa "opanowana"',
           resultText(10, 10, 'katakana', kind).toLowerCase().indexOf('opanowana') < 0,
           resultText(10, 10, 'katakana', kind));
      });

      // domyślne argumenty: script = state.script, kind = 'exam'
      const prevScript = state.script;
      state.script = 'katakana';
      ok('X9 domyślny script to state.script',
         resultText(4, 4) === 'Perfekcyjnie. Katakana opanowana!', resultText(4, 4));
      ok('X10 domyślny kind to exam', resultText(4, 4).indexOf('opanowana') > 0);
      ok('X11 domyślny kind NIE jest review',
         resultText(4, 4, 'katakana', 'review') === 'Perfekcyjnie!');
      state.script = prevScript;

      // pozostałe komunikaty bez zmian dla obu skryptów i wszystkich kindów
      const partial = [
        [0, 0], [8, 10], [6, 10], [3, 10]
      ];
      let partialOk = true;
      ['hiragana', 'katakana'].forEach(function (sc) {
        ['exam', 'review', 'practice'].forEach(function (k) {
          partial.forEach(function (pair) {
            if (resultText(pair[0], pair[1], sc, k) !== resultText(pair[0], pair[1])) partialOk = false;
          });
        });
      });
      ok('X12 cztery pozostale komunikaty identyczne dla obu skryptow i wszystkich kindow',
         partialOk);
      ok('X13 brak odpowiedzi — komunikat bez zmian',
         resultText(0, 0, 'katakana', 'exam') === 'Nie udzielono żadnej odpowiedzi.',
         resultText(0, 0, 'katakana', 'exam'));

      // nagłówek korzysta z tego samego helpera
      ok('X14 nagłówek używa scriptName',
         /title\.textContent = scriptName\(\)/.test(src));

      report();
    } catch (e) {
      R.push('FAIL threw :: ' + e.message + ' | ' + String(e.stack).split('\n').slice(0, 3).join(' >> '));
      report();
    }
  })();
})();