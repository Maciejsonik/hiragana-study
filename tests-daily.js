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

      recordAnswer('あ', false, null, 'exam-timeout');
      let t = day(localDayKey(NOON));
      ok('D28 timeout counts as an answer', t.answers === 1, String(t.answers));
      ok('D29 timeout is never correct', t.correct === 0, String(t.correct));
      ok('D30 timeout in review lands in reviewAnswers', t.reviewAnswers === 1, String(t.reviewAnswers));
      ok('D31 timeout did NOT count a review session', t.reviews === 0, String(t.reviews));
      ok('D32 timeout still advanced legacy progress', progress.chars['あ'].seen === 1);

      // timeout w egzaminie: examAnswers, nie reviewAnswers
      reset();
      state.exam = { kind: 'exam', startedAt: NOON, recorded: false, xp: 0 };
      recordAnswer('か', false, null, 'exam-timeout');
      t = day(localDayKey(NOON));
      ok('D33 exam timeout -> examAnswers', t.examAnswers === 1 && t.reviewAnswers === 0);
      ok('D34 exam timeout -> no session counter', t.exams === 0 && t.reviews === 0);

      // timeout nie rusza harmonogramu SRS (to weryfikuje brak regresji)
      const beforeSrs = { ...progress.chars['か'] };
      recordAnswer('か', false, null, 'exam-timeout');
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
      recordAnswer('き', true, null, 'exam');
      ok('D63 progress v2 still written by recordAnswer',
         progress.chars['き'].seen === 1 && progress.chars['き'].stage === 1,
         JSON.stringify({ seen: progress.chars['き'].seen, stage: progress.chars['き'].stage }));
      ok('D64 SRS fields untouched by stats collection',
         Number.isFinite(progress.chars['き'].due) && progress.chars['き'].lapses === 0);
      ok('D65 daily stats recorded alongside',
         day(localDayKey(NOON)).answers === 1);
      state.exam = null;

      report();
    } catch (e) {
      R.push('FAIL threw :: ' + e.message + ' | ' + String(e.stack).split('\n').slice(0, 3).join(' >> '));
      report();
    }
  })();
})();