/* =========================================================
   T21 — testy deterministyczne (scheduler SRS + migracja)
   ------------------------------------------------------------
   Brak frameworka, brak zależności, brak kroku budowania.

   Ten plik ładuje się PO app.js jako zwykły skrypt, więc ma dostęp do
   `const`/`let` zadeklarowanych na najwyższym poziomie app.js (ta sama
   globalna zakres leksykalna). Dzięki temu NIE eksportujemy niczego
   na potrzeby testów i NIE wydzielamy osobnego pliku — funkcje
   harmonogramu są testowane dokładnie takie, jakie używa aplikacja.

   Determinizm:
     • `now` jest wstrzykiwany parametrem (w kodzie nie ma Date.now()),
     • `Math.random` jest podmieniany tylko w testach kolejności.
   ========================================================= */

(async function () {
  const results = [];
  const DAY = 86400000;

  function ok(name, condition, detail) {
    results.push((condition ? 'PASS ' : 'FAIL ') + name +
      (detail !== undefined ? ' :: ' + detail : ''));
  }
  function info(message) { results.push('INFO ' + message); }
  function eq(name, actual, expected) {
    ok(name, actual === expected, 'actual=' + JSON.stringify(actual) +
      ' expected=' + JSON.stringify(expected));
  }
  function deepEq(name, actual, expected) {
    const a = JSON.stringify(actual), b = JSON.stringify(expected);
    ok(name, a === b, a === b ? '' : a + ' != ' + b);
  }

  // stan SRS: kana ćwiczona (seen>0), etap `stage`, `reps` poprawnych na tym etapie
  function entry(over) {
    return Object.assign(
      { seen: 5, correct: 4, wrong: 1, recent: [1, 1, 1, 0], confused: {}, last: 1,
        stage: 0, reps: 0, due: 0, lapses: 0 },
      over || {}
    );
  }

  // reset izolowany między testami: nadpisujemy postęp w pamięci i w localStorage
  function setProgress(chars, version) {
    progress = { version: version === undefined ? PROGRESS_VERSION : version, chars: chars || {} };
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (e) {}
  }
  function clearProgress() { setProgress({}, 1); }

  /* =====================================================
     1. DRABINKA I STAŁE
     ===================================================== */
  try {
    eq('ladder has 8 stages', REVIEW_STAGES.length, 8);
    eq('MAX_STAGE', MAX_STAGE, 7);
    eq('MASTERED_REPS', MASTERED_REPS, 3);
    eq('MAX_REVIEW_PER_SESSION', MAX_REVIEW_PER_SESSION, 20);
    deepEq('ladder intervals', REVIEW_STAGES.map(s => s.intervalDays), [0, 1, 3, 7, 14, 30, 60, 120]);
    deepEq('ladder requiredReps', REVIEW_STAGES.map(s => s.requiredReps), [1, 1, 1, 1, 2, 2, 2, 3]);
  } catch (e) { ok('ladder constants', false, e.message); }

  /* =====================================================
     2. WSTRZYKIWANIE CZASU
     ===================================================== */
  try {
    const T0 = 1700000000000;
    const a = scheduleAnswer(entry({ stage: 1 }), { correct: true, source: 'exam', now: T0 });
    const b = scheduleAnswer(entry({ stage: 1 }), { correct: true, source: 'exam', now: T0 });
    deepEq('determinism: same inputs -> same result', a, b);
    // requiredReps[1] === 1, więc poprawna odpowiedź AWANSUJE do stage 2 (3 dni)
    eq('now is injected, not Date.now()', a.due, T0 + 3 * DAY);

    const z = scheduleAnswer(entry({ stage: 1 }), { correct: true, source: 'exam', now: 0 });
    eq('now=0 edge works', z.due, 3 * DAY);
  } catch (e) { ok('time injection', false, e.message); }

  /* =====================================================
     3. PRZEJŚCIA POPRAWNE
     ===================================================== */
  try {
    // stage 0: jeden rep i awans na stage 1, odstęp 0 dni (ta sama sesja)
    let e = scheduleAnswer(entry({ stage: 0, reps: 0 }), { correct: true, source: 'exam', now: 1000 });
    eq('stage0 +correct -> stage 1', e.stage, 1);
    eq('stage0 +correct -> reps reset', e.reps, 0);
    eq('stage0 +correct -> due +1d', e.due, 1000 + DAY);

    // stage 0 ma requiredReps 1, więc każda poprawna odpowiedź awansuje
    e = scheduleAnswer(entry({ stage: 0, reps: 0 }), { correct: true, source: 'exam', now: 0 });
    eq('stage0 interval is 0 (same session)', REVIEW_STAGES[0].intervalDays, 0);

    // stage 3 -> 4 (requiredReps 1)
    e = scheduleAnswer(entry({ stage: 3, reps: 0 }), { correct: true, source: 'exam', now: 0 });
    eq('stage3 +1rep -> stage 4', e.stage, 4);
    eq('stage4 interval 14d', e.due, 14 * DAY);

    // stage 4 wymaga 2 repów: pierwsza poprawna NIE awansuje
    e = scheduleAnswer(entry({ stage: 4, reps: 0 }), { correct: true, source: 'exam', now: 0 });
    eq('stage4 rep1 stays stage 4', e.stage, 4);
    eq('stage4 rep1 counted', e.reps, 1);
    eq('stage4 rep1 due +14d', e.due, 14 * DAY);

    // druga poprawna awansuje na 5
    e = scheduleAnswer(e, { correct: true, source: 'exam', now: 0 });
    eq('stage4 rep2 -> stage 5', e.stage, 5);
    eq('stage5 rep reset', e.reps, 0);
    eq('stage5 interval 30d', e.due, 30 * DAY);

    // stage MAX: repy nie awansują poza 7, tylko przedłużają odstęp
    e = entry({ stage: MAX_STAGE, reps: 2 });
    e = scheduleAnswer(e, { correct: true, source: 'exam', now: 0 });
    eq('MAX rep3 does NOT exceed MAX_STAGE', e.stage, MAX_STAGE);
    eq('MAX rep3 CAPS reps at MASTERED_REPS (nie zeruje)', e.reps, MASTERED_REPS);
    eq('MAX keeps 120d interval', e.due, 120 * DAY);

    // stan mastery: dopiero po MASTERED_REPS
    eq('not mastered before threshold', deriveStatus(entry({ stage: MAX_STAGE, reps: 2 })), 'review');
    eq('mastered at threshold', deriveStatus(entry({ stage: MAX_STAGE, reps: MASTERED_REPS })), 'mastered');
    eq('mastered requires max stage too', deriveStatus(entry({ stage: 6, reps: MASTERED_REPS })), 'review');
    eq('learning at stage 0', deriveStatus(entry({ stage: 0 })), 'learning');
    eq('review at stage 3', deriveStatus(entry({ stage: 3 })), 'review');
    eq('unseen without entry', deriveStatus(undefined), 'unseen');

    /*
      `mastered` musi być OSIĄGALNY i TRWAŁY. Wcześniej `scheduleAnswer()`
      zerował `reps` również na MAX_STAGE, więc `reps >= MASTERED_REPS`
      nigdy nie było prawdziwe i status nie pojawiał się wcale.
    */
    // trzy poprawne odpowiedzi na MAX_STAGE prowadzą do opanowania
    let m = entry({ stage: MAX_STAGE, reps: 0 });
    m = scheduleAnswer(m, { correct: true, source: 'exam', now: 0 });
    eq('MAX rep1 -> not mastered yet', deriveStatus(m), 'review');
    eq('MAX rep1 counts', m.reps, 1);
    m = scheduleAnswer(m, { correct: true, source: 'exam', now: 0 });
    eq('MAX rep2 -> not mastered yet', deriveStatus(m), 'review');
    eq('MAX rep2 counts', m.reps, 2);
    m = scheduleAnswer(m, { correct: true, source: 'exam', now: 0 });
    eq('MAX rep3 -> MASTERED', deriveStatus(m), 'mastered');
    eq('MAX rep3 == MASTERED_REPS', m.reps, MASTERED_REPS);

    // kolejne poprawne NIE cofają opanowania, tylko odsuwają termin
    const dueBefore = m.due;
    m = scheduleAnswer(m, { correct: true, source: 'exam', now: 10 * DAY });
    eq('mastery is stable after further correct', deriveStatus(m), 'mastered');
    eq('reps capped, not grown', m.reps, MASTERED_REPS);
    eq('further correct only pushes due out', m.due, 10 * DAY + 120 * DAY);
    ok('due moved forward', m.due > dueBefore, dueBefore + ' -> ' + m.due);

    // błędna odpowiedź na MAX_STAGE gubi opanowanie
    const lost = scheduleAnswer(entry({ stage: MAX_STAGE, reps: MASTERED_REPS, lapses: 1 }),
      { correct: false, source: 'exam', now: 0 });
    eq('wrong at MAX drops a stage', lost.stage, MAX_STAGE - 1);
    eq('wrong at MAX resets reps', lost.reps, 0);
    eq('wrong at MAX -> review again', deriveStatus(lost), 'review');
    eq('wrong at MAX counts a lapse', lost.lapses, 2);

    // migracja nie może wygenerować reps powyżej progu
    eq('normalizeSrs caps reps at MASTERED_REPS',
       normalizeSrs(entry({ reps: 50 }), 0).reps, MASTERED_REPS);
    eq('clamped stage 99 + max reps normalises to mastered',
       deriveStatus(normalizeSrs(entry({ reps: MASTERED_REPS, stage: 99 }), 0)), 'mastered');

    // etykieta statusu: świadomie BEZ słowa „Opanowane/mastered"
    eq('label for mastered SRS status', REVIEW_STATUS_LABEL.mastered, 'Długi odstęp');
    ok('no label leaks the word "mastered"',
       Object.values(REVIEW_STATUS_LABEL).every(v => v.toLowerCase().indexOf('mastered') < 0),
       Object.values(REVIEW_STATUS_LABEL).join(' / '));
    ok('no label says "Opanowane"',
       Object.values(REVIEW_STATUS_LABEL).every(v => v.toLowerCase().indexOf('opanowane') < 0),
       Object.values(REVIEW_STATUS_LABEL).join(' / '));
  } catch (e) { ok('correct transitions', false, e.message); }

  /* =====================================================
     4. PRZEJŚCIA BŁĘDNE + LAPSE
     ===================================================== */
  try {
    // stage 0: błąd nie jest potknięciem
    let e = scheduleAnswer(entry({ stage: 0, reps: 0 }), { correct: false, source: 'exam', now: 5 });
    eq('stage0 wrong stays stage 0', e.stage, 0);
    eq('stage0 wrong resets reps', e.reps, 0);
    eq('stage0 wrong due now', e.due, 5);
    eq('stage0 wrong is NOT a lapse', e.lapses, 0);

    // stage >= 1: błąd to potknięcie, spadek o jeden stopień
    e = scheduleAnswer(entry({ stage: 3, reps: 0, lapses: 0 }), { correct: false, source: 'exam', now: 7 });
    eq('stage3 wrong -> stage 2', e.stage, 2);
    eq('stage3 wrong counts lapse', e.lapses, 1);
    eq('lapse resets reps', e.reps, 0);
    eq('lapse due now', e.due, 7);

    // stage 1 spada do 0, ale nadal jest potknięciem
    e = scheduleAnswer(entry({ stage: 1, reps: 1, lapses: 2 }), { correct: false, source: 'exam', now: 0 });
    eq('stage1 wrong -> stage 0', e.stage, 0);
    eq('stage1 wrong counts lapse', e.lapses, 3);

    // po spadku na stage 0 kolejne błędy NIE są już potknięciami
    // (etap 0 to zwykła nauka, nie utrata retencji)
    e = scheduleAnswer(e, { correct: false, source: 'exam', now: 0 });
    eq('stage0 lapse count frozen at 3', e.lapses, 3);
    eq('stage0 wrong keeps stage 0', e.stage, 0);
    e = scheduleAnswer(e, { correct: false, source: 'exam', now: 0 });
    eq('stage0 lapse count still frozen', e.lapses, 3);
  } catch (e) { ok('wrong transitions', false, e.message); }

  /* =====================================================
     5. TIMEOUT NIE RUSZA SRS
     ===================================================== */
  try {
    const before = entry({ stage: 4, reps: 1, due: 999, lapses: 2 });
    const after = scheduleAnswer(JSON.parse(JSON.stringify(before)), {
      correct: false, source: 'exam-timeout', now: 123456
    });
    eq('timeout: stage unchanged', after.stage, before.stage);
    eq('timeout: reps unchanged', after.reps, before.reps);
    eq('timeout: due unchanged', after.due, before.due);
    eq('timeout: lapses unchanged', after.lapses, before.lapses);
    deepEq('timeout: whole entry unchanged', after, before);
  } catch (e) { ok('timeout exclusion', false, e.message); }

  /* =====================================================
     6. WALIDACJA REKORDÓW
     ===================================================== */
  try {
    ok('valid record', isProgressRecord(entry()));
    ok('seen as string is invalid', !isProgressRecord(entry({ seen: '10' })));
    ok('seen null is invalid', !isProgressRecord(entry({ seen: null })));
    ok('seen NaN is invalid', !isProgressRecord(entry({ seen: NaN })));
    ok('seen Infinity is invalid', !isProgressRecord(entry({ seen: Infinity })));
    ok('seen 0 is invalid', !isProgressRecord(entry({ seen: 0 })));
    ok('seen -3 is invalid', !isProgressRecord(entry({ seen: -3 })));
    ok('number entry is invalid', !isProgressRecord(5));
    ok('null entry is invalid', !isProgressRecord(null));
    ok('undefined entry is invalid', !isProgressRecord(undefined));
    ok('string entry is invalid', !isProgressRecord('あ'));
    ok('array entry is invalid', !isProgressRecord([1, 2]));

    eq('progressStat on number entry', progressStat(5, 'seen'), 0);
    eq('progressStat on valid entry', progressStat(entry({ seen: 7 }), 'seen'), 7);
    eq('progressStat on bad type', progressStat(entry({ seen: '7' }), 'seen'), 0);
    eq('progressStat negative', progressStat(entry({ seen: -7 }), 'seen'), 0);
  } catch (e) { ok('record validation', false, e.message); }

  /* =====================================================
     7. NORMALIZACJA pól SRS
     ===================================================== */
  try {
    // `entry()` dostarcza stage:0 domyślnie, więc pola MUSIMY naprawdę usunąć,
    // żeby test „brakujące pole" coś testował.
    const bare = entry({});
    delete bare.stage; delete bare.reps; delete bare.due; delete bare.lapses;
    let e = normalizeSrs(bare, 3);
    eq('missing stage -> seed', e.stage, 3);
    eq('missing reps -> 0', e.reps, 0);
    eq('missing due -> 0', e.due, 0);
    eq('missing lapses -> 0', e.lapses, 0);

    ['3', true, null, [], {}].forEach(function (bad) {
      const n = normalizeSrs(entry({ stage: bad }), 2);
      eq('wrong-typed stage ' + JSON.stringify(bad) + ' -> seed', n.stage, 2);
    });

    eq('negative stage -> seed', normalizeSrs(entry({ stage: -1 }), 4).stage, 4);
    eq('negative reps -> 0', normalizeSrs(entry({ reps: -4 }), 0).reps, 0);
    eq('negative due -> 0', normalizeSrs(entry({ due: -1 }), 0).due, 0);
    eq('negative lapses -> 0', normalizeSrs(entry({ lapses: -2 }), 0).lapses, 0);

    eq('NaN stage -> seed', normalizeSrs(entry({ stage: NaN }), 1).stage, 1);
    eq('Infinity due -> 0', normalizeSrs(entry({ due: Infinity }), 0).due, 0);
    eq('-Infinity due -> 0', normalizeSrs(entry({ due: -Infinity }), 0).due, 0);

    eq('out-of-range stage 99 clamped', normalizeSrs(entry({ stage: 99 }), 0).stage, MAX_STAGE);
    eq('fractional stage floored? no -> seed', normalizeSrs(entry({ stage: 1.7 }), 2).stage, 2);
    eq('huge reps clamped', normalizeSrs(entry({ reps: 50 }), 0).reps, MASTERED_REPS);
    eq('large future due preserved', normalizeSrs(entry({ due: 9e15 }), 0).due, 9e15);

    ok('normalized entry passes hasUsableSrs', hasUsableSrs(normalizeSrs(entry({}), 0)));
    ok('raw garbage entry fails hasUsableSrs', !hasUsableSrs({ seen: 5, stage: 'x', due: null }));
  } catch (e) { ok('srs normalization', false, e.message); }

  /* =====================================================
     8. MIGRACJA v1 -> v2
     ===================================================== */
  try {
    // --- ważne: prawidłowy rekord bez pól SRS MUSI trafić do kolejki ---
    const rich = {
      seen: 12, correct: 11, wrong: 1, recent: [1, 1, 1, 1, 1],
      confused: { い: 2 }, last: 1700000000000
    };
    clearProgress();
    progress = { version: 1, chars: { 'あ': JSON.parse(JSON.stringify(rich)) } };
    const migrated = migrateProgress(progress);
    eq('migration sets version 2', migrated.version, 2);
    eq('valid record got a stage', typeof migrated.chars['あ'].stage, 'number');
    eq('valid record due immediately', migrated.chars['あ'].due, 0);
    deepEq('all legacy fields preserved',
      {
        seen: migrated.chars['あ'].seen, correct: migrated.chars['あ'].correct,
        wrong: migrated.chars['あ'].wrong, recent: migrated.chars['あ'].recent,
        confused: migrated.chars['あ'].confused, last: migrated.chars['あ'].last
      }, rich);

    // seedowanie zgadza się z masteryLevel()
    ok('mastered seeds stage 3', (function () {
      const chars = { 'あ': { seen: 12, correct: 11, wrong: 1, recent: [1, 1, 1, 1, 1], confused: {}, last: 1 } };
      setProgress(chars, 1);
      const m = migrateProgress(progress);
      return m.chars['あ'].stage === 3;
    })(), '');
    ok('good seeds stage 2', (function () {
      setProgress({ 'あ': { seen: 6, correct: 6, wrong: 0, recent: [1, 1, 1, 1], confused: {}, last: 1 } }, 1);
      return migrateProgress(progress).chars['あ'].stage === 2;
    })(), '');
    ok('hard seeds stage 0', (function () {
      setProgress({ 'あ': { seen: 6, correct: 3, wrong: 3, recent: [1, 0, 0, 0], confused: {}, last: 1 } }, 1);
      return migrateProgress(progress).chars['あ'].stage === 0;
    })(), '');
    ok('learning seeds stage 1', (function () {
      setProgress({ 'あ': { seen: 1, correct: 1, wrong: 0, recent: [1], confused: {}, last: 1 } }, 1);
      return migrateProgress(progress).chars['あ'].stage === 1;
    })(), '');

    // --- idempotencja ---
    setProgress({ 'あ': JSON.parse(JSON.stringify(rich)) }, 1);
    migrateProgress(progress);
    const once = JSON.stringify(progress);
    migrateProgress(progress);
    ok('migration is idempotent', JSON.stringify(progress) === once, '');

    // --- rekordy nie-obiektowe są ZACHOWANE, nie usunięte ---
    setProgress({ 'あ': JSON.parse(JSON.stringify(rich)), 'い': 5, 'う': null, 'え': 'x', 'お': [] }, 1);
    const kept = migrateProgress(progress);
    eq('non-object entries kept (count)', Object.keys(kept.chars).length, 5);
    ok('numeric entry preserved', kept.chars['い'] === 5, JSON.stringify(kept.chars['い']));
    ok('null entry preserved', 'う' in kept.chars && kept.chars['う'] === null, '');
    ok('string entry preserved', kept.chars['え'] === 'x', '');
    ok('array entry preserved', Array.isArray(kept.chars['お']), '');
    ok('non-object entry got NO srs fields', kept.chars['い'].stage === undefined, '');

    // --- seen poza zakresem -> 0, rekord zachowany, bez pól SRS ---
    setProgress({ 'か': { seen: 'nope', correct: 3, recent: [1, 1], confused: {}, last: 1 } }, 1);
    const fixed = migrateProgress(progress);
    eq('invalid seen coerced to 0', fixed.chars['か'].seen, 0);
    eq('record kept despite bad seen', fixed.chars['か'].correct, 3);
    ok('no SRS fields on non-seen record', fixed.chars['か'].stage === undefined, '');
    ok('not a progress record', !isProgressRecord(fixed.chars['か']), '');

    // --- uszkodzony JSON obsługiwany przez loadProgress ---
    try {
      localStorage.setItem(PROGRESS_KEY, '{to nie jest json');
      const loaded = loadProgress();
      eq('corrupt JSON -> empty v2 store', JSON.stringify(loaded), JSON.stringify({ version: PROGRESS_VERSION, chars: {} }));
    } catch (e) { ok('corrupt JSON', false, e.message); }

    // --- brak version (stary zapis) ---
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify({ chars: { 'あ': rich } }));
      eq('missing version migrated', loadProgress().version, 2);
    } catch (e) { ok('missing version', false, e.message); }
  } catch (e) { ok('migration', false, e.message); }

  /* =====================================================
     9. KOLEJKA: granica, kolejność, limit
     ===================================================== */
  try {
    setScript('hiragana');
    const NOW = 1700000000000;

    // granica: due === now wchodzi, due === now+1 nie
    setProgress({ 'あ': entry({ due: NOW }), 'い': entry({ due: NOW + 1 }) });
    eq('due === now is included', dueList(NOW).length, 1);
    eq('due === now included kana', dueList(NOW)[0].kana, 'あ');
    eq('due === now+1 excluded', dueList(NOW + 1).length, 2);

    // kolejność: overdue najpierw, potem lapses malejąco, potem stage rosnąco
    setProgress({
      'あ': entry({ due: NOW - 3000, lapses: 0, stage: 5 }),
      'い': entry({ due: NOW - 2000, lapses: 3, stage: 2 }),
      'う': entry({ due: NOW - 2000, lapses: 1, stage: 4 }),
      'え': entry({ due: NOW - 1000, lapses: 9, stage: 1 })
    });
    deepEq('ordering: due asc, lapses desc, stage asc',
      dueList(NOW).map(x => x.kana), ['あ', 'い', 'う', 'え']);

    // limit sesji
    const many = {};
    getAll().forEach(c => { many[c.kana] = entry({ due: 0 }); });
    setProgress(many);
    eq('all 104 due', dueCount(NOW), 104);
    eq('session capped at 20', reviewSession(NOW).length, MAX_REVIEW_PER_SESSION);
    eq('dueCount not capped', dueCount(NOW), 104);

    // nieznane/śmieciowe rekordy NIE trafiają do kolejki
    setProgress({
      'あ': entry({ due: 0 }),
      'い': 5, 'う': null, 'え': 'x', 'お': [],
      'か': { seen: 5, stage: 'x', due: null, reps: undefined, lapses: null },
      'き': { seen: 5, stage: 2, due: -5 },
      'く': { seen: 'x', stage: 1, due: 0 }
    });
    const q = dueList(NOW).map(x => x.kana);
    deepEq('only the valid record is queued', q, ['あ']);
    ok('garbage never fabricated into stage 0', q.indexOf('い') < 0, '');

    // niewidziane: kana z poprawnym SRS, ale ukryte przed regresją?
    setProgress({ 'あ': JSON.parse(JSON.stringify({ seen: 12, correct: 11, wrong: 1, recent: [1,1,1,1,1], confused: {}, last: 1 })) }, 1);
    migrateProgress(progress);
    deepEq('valid migrated kana is NOT hidden', dueList(NOW).map(x => x.kana), ['あ']);
  } catch (e) { ok('review queue', false, e.message); }

  /* =====================================================
     10. SEPARACJA HIRAGANA / KATAKANA
     ===================================================== */
  try {
    const NOW = 1700000000000;
    const mixed = {};
    mixed['あ'] = entry({ due: 0 });   // hiragana
    mixed['ア'] = entry({ due: 0 });   // katakana
    setProgress(mixed);

    setScript('hiragana');
    deepEq('hiragana queue only hiragana', dueList(NOW).map(x => x.kana), ['あ']);
    setScript('katakana');
    deepEq('katakana queue only katakana', dueList(NOW).map(x => x.kana), ['ア']);

    // brak kolizji kodepointów — listy zbieramy jawnie z danych,
    // bo getAll() zależy od AKTYWNEGO skryptu
    const hira = scriptData.hiragana.groups.flatMap(g => g.chars.map(c => c[0]));
    const kata = scriptData.katakana.groups.flatMap(g => g.chars.map(c => c[0]));
    eq('hiragana dataset size', hira.length, 104);
    eq('katakana dataset size', kata.length, 104);
    eq('no kana shared between scripts', hira.filter(k => kata.includes(k)).length, 0);
    setScript('hiragana');
  } catch (e) { ok('script separation', false, e.message); }

  /* =====================================================
     11. progressSummary NIGDY NIE ZWRACA NaN/Infinity
     ===================================================== */
  try {
    setProgress({
      'あ': { seen: 10, correct: 9, wrong: 1, recent: [1, 1, 1, 1, 1], confused: {}, last: 1 },
      'い': 5, 'う': null, 'え': 'x', 'お': [],
      'か': { seen: 'nope', correct: 3, recent: [1], confused: {}, last: 1 },
      'き': { seen: NaN, correct: 2, recent: [], confused: {}, last: 1 }
    });
    const sum = progressSummary();
    ok('summary seen is finite', Number.isFinite(sum.seen), String(sum.seen));
    ok('summary correct is finite', Number.isFinite(sum.correct), String(sum.correct));
    ok('summary percent is finite', Number.isFinite(sum.percent), String(sum.percent));
    eq('summary counts only valid records (seen)', sum.seen, 10);
    // rekordy z błędnym `seen` (か seen:'nope', き seen:NaN) nie wnoszą
    // już `correct`, więc procent nie przekracza 100
    eq('summary correct excludes invalid records', sum.correct, 9);
    eq('summary percent correct', sum.percent, 90);
    ok('summary percent never exceeds 100', sum.percent <= 100, String(sum.percent));

    // pusty / uszkodzony store
    setProgress({});
    eq('empty summary', JSON.stringify(progressSummary()), JSON.stringify({ seen: 0, correct: 0, percent: 0 }));
  } catch (e) { ok('progressSummary guard', false, e.message); }

  /* =====================================================
     12. BRAK REGRESJI W LEGACYCH
     ===================================================== */
  try {
    const fixture = {
      'あ': { seen: 12, correct: 11, wrong: 1, recent: [1, 1, 1, 1, 1], confused: { い: 2 }, last: 5 },
      'い': { seen: 6, correct: 3, wrong: 3, recent: [1, 0, 0, 0], confused: {}, last: 5 },
      'う': { seen: 6, correct: 6, wrong: 0, recent: [1, 1, 1, 1], confused: {}, last: 5 },
      'え': { seen: 1, correct: 1, wrong: 0, recent: [1], confused: {}, last: 5 },
      'お': { seen: 11, correct: 10, wrong: 1, recent: [1, 1, 1, 1, 1, 0], confused: {}, last: 5 }
    };
    const clone = o => JSON.parse(JSON.stringify(o));

    // stan legacy PRZED migracją
    setProgress(clone(fixture), 1);
    const before = {
      levels: Object.fromEntries(Object.keys(fixture).map(k => [k, masteryLevel(k)])),
      errors: Object.fromEntries(Object.keys(fixture).map(k => [k, errorRate(k)])),
      summary: progressSummary(),
      practice: practiceList(),
      multipliers: Object.fromEntries(Object.keys(fixture).map(k => [k, difficultyMultiplier(k)]))
    };

    migrateProgress(progress);

    // stan legacy PO migracji — musi być identyczny
    const after = {
      levels: Object.fromEntries(Object.keys(fixture).map(k => [k, masteryLevel(k)])),
      errors: Object.fromEntries(Object.keys(fixture).map(k => [k, errorRate(k)])),
      summary: progressSummary(),
      practice: practiceList(),
      multipliers: Object.fromEntries(Object.keys(fixture).map(k => [k, difficultyMultiplier(k)]))
    };

    deepEq('masteryLevel unchanged by migration', after.levels, before.levels);
    deepEq('errorRate unchanged by migration', after.errors, before.errors);
    deepEq('progressSummary unchanged by migration', after.summary, before.summary);
    deepEq('practiceList unchanged by migration', after.practice, before.practice);
    deepEq('difficultyMultiplier unchanged by migration', after.multipliers, before.multipliers);

    // poziomy legacy nadal się zgadzają
    eq('fixture: あ is mastered (legacy)', after.levels['あ'], 'mastered');
    eq('fixture: う is good (legacy)', after.levels['う'], 'good');
    eq('fixture: い is hard (legacy)', after.levels['い'], 'hard');
    eq('fixture: え is learning (legacy)', after.levels['え'], 'learning');
    // 1 błąd na 6 -> rate ≈ 0.17: ani 'hard' (wymaga rate >= 0.5),
    // ani 'good' (wymaga rate === 0), więc 'learning'
    eq('fixture: お is learning (1 error in last 6)', after.levels['お'], 'learning');
  } catch (e) { ok('legacy regression', false, e.message); }

  /* =====================================================
     13. RESET
     ===================================================== */
  try {
    setProgress({ 'あ': entry() }, PROGRESS_VERSION);
    window.confirm = () => true;
    resetProgressData();
    eq('reset -> empty chars', Object.keys(progress.chars).length, 0);
    eq('reset -> version 2', progress.version, PROGRESS_VERSION);
    eq('reset persisted', JSON.parse(localStorage.getItem(PROGRESS_KEY)).chars !== undefined, true);
    eq('queue empty after reset', dueList(Date.now()).length, 0);
  } catch (e) { ok('reset', false, e.message); }

  /* =====================================================
     14. SERVICE WORKER
     ===================================================== */
  try {
    const swSrc = await (await fetch('sw.js')).text();

    /*
      NIE wpisujemy tu konkretnej wersji ('v3', 'v4', ...) — każdy bump
      potem by łamał ten test. Sprawdzamy MECHANIZM wersjonowania:
      VERSION ma kształt vN, a nazwy cache są od niej wyprowadzane.
    */
    const version = (swSrc.match(/const VERSION = '(v\d+)'/) || [])[1];
    ok('sw.js declares VERSION as vN', !!version, version || 'brak');
    ok('cache names derive from VERSION',
       /const SHELL_CACHE\s*=\s*`shell-\$\{VERSION\}`/.test(swSrc)
       && /const KANJIVG_CACHE\s*=\s*`kanjivg-\$\{VERSION\}`/.test(swSrc));
    ok('activate removes old cache versions', /activate/.test(swSrc) && /delete/.test(swSrc));

    // pliki testowe to narzędzia deweloperskie — nigdy nie w precache
    ok('tests not precached', swSrc.indexOf('tests.js') < 0 && swSrc.indexOf('tests.html') < 0, '');
    ok('learn-panel tests not precached',
       swSrc.indexOf('tests-learn.js') < 0 && swSrc.indexOf('tests-learn.html') < 0);
  } catch (e) { ok('service worker version', false, e.message); }

  /* =====================================================
     15. WIDOCZNOŚĆ EKRANU PRZEGLĄDU
     ===================================================== */
  try {
    clearProgress();
    setScreen('menu'); await new Promise(r => setTimeout(r, 60));
    document.getElementById('reviewCard').click();
    await new Promise(r => setTimeout(r, 60));
    ok('review screen renders', state.screen === 'review' && !!document.querySelector('.review'), state.screen);
    ok('empty state shown when nothing due', document.body.textContent.indexOf('Wszystko na czas') >= 0, '');

    // brak słowa "Opanowane" na ekranie przeglądu
    const reviewText = document.querySelector('.review').textContent;
    ok('review never says "Opanowane"', reviewText.indexOf('Opanowan') < 0, '');
    ok('review never says "mastered"', reviewText.toLowerCase().indexOf('mastered') < 0, '');

    // z tekstem w kolejce
    const many = {};
    getAll().slice(0, 25).forEach(c => { many[c.kana] = entry({ due: 0, stage: 2, lapses: 1 }); });
    setProgress(many);
    setScreen('review'); await new Promise(r => setTimeout(r, 60));
    ok('due count rendered', document.body.textContent.indexOf('Do powtórki: 25') >= 0, '');
    ok('session cap shown', document.body.textContent.indexOf('dziś: 20') >= 0, '');
    eq('20 rows rendered', document.querySelectorAll('.review-row').length, 20);
    ok('uses "Potknięcia" wording', document.body.textContent.indexOf('Potknięcia: 1') >= 0, '');
    ok('uses "Do powtórki" tag', document.body.textContent.indexOf('Do powtórki') >= 0, '');
    ok('review still avoids "Opanowane"', document.querySelector('.review').textContent.indexOf('Opanowan') < 0, '');

    document.getElementById('reviewStartBtn').click();
    await new Promise(r => setTimeout(r, 80));
    ok('start reuses existing exam engine', !!state.exam && state.exam.kanaList.length === 20,
       state.exam ? state.exam.kanaList.length : 'no exam');
    stopExam();

    // powrót do menu
    setScreen('menu'); await new Promise(r => setTimeout(r, 60));
    ok('menu still has all cards', !!document.getElementById('learnCard') &&
      !!document.getElementById('examCard') && !!document.getElementById('reviewCard') &&
      !!document.getElementById('settingsCard'), '');
    ok('chart still above cards', (function () {
      return document.querySelector('#app').firstElementChild.classList.contains('script-switcher');
    })(), '');

    // klasa modyfikatora karty pełnoszerokiej: `.menu-card.full`.
    // Dawniej było to osobna klasa `.menu-card-full` — pilnujemy, żeby
    // nie wróciła i żeby obie karty (Przegląd i Ustawienia) ją miały.
    ['reviewCard', 'settingsCard'].forEach(function (id) {
      const el = document.getElementById(id);
      ok(id + ' uses .menu-card.full',
         el.classList.contains('menu-card') && el.classList.contains('full'),
         el.className);
      ok(id + ' has no stale .menu-card-full', !el.classList.contains('menu-card-full'), el.className);
    });
    ok('no element carries the legacy full-width class',
       document.querySelectorAll('.menu-card-full').length === 0,
       String(document.querySelectorAll('.menu-card-full').length));

    const cssText = await (await fetch('style.css')).text();
    ok('style.css defines .menu-card.full',
       /\.menu-card\.full\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/.test(cssText));
    ok('style.css has no stale .menu-card-full selector',
       cssText.indexOf('.menu-card-full') < 0);
  } catch (e) { ok('review UI', false, e.message); }

  /* =====================================================
     PODSUMOWANIE
     ===================================================== */
  clearProgress();
  const passed = results.filter(r => r.indexOf('PASS ') === 0).length;
  const failed = results.filter(r => r.indexOf('FAIL ') === 0).length;
  results.push('');
  results.push('TOTAL PASS=' + passed + ' FAIL=' + failed);

  const out = document.createElement('pre');
  out.id = 'R';
  out.textContent = results.join('\n');
  document.body.appendChild(out);
  document.title = failed === 0 ? 'ALL PASS ' + passed : 'FAILURES ' + failed;
})();