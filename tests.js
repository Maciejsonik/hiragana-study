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
    results.push((condition ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? ' :: ' + detail : ''));
  }
  function info(message) {
    results.push('INFO ' + message);
  }
  function eq(name, actual, expected) {
    ok(name, actual === expected, 'actual=' + JSON.stringify(actual) + ' expected=' + JSON.stringify(expected));
  }
  function deepEq(name, actual, expected) {
    const a = JSON.stringify(actual),
      b = JSON.stringify(expected);
    ok(name, a === b, a === b ? '' : a + ' != ' + b);
  }

  /*
    Czekanie na stan zamiast stałego `setTimeout(6000)`. Timer egzaminu
    nadal działa w realnym czasie (5 s), ale test nie dokłada sekundy
    zapasu, gdy warunek jest już spełniony. Limit 7 s chroni przed
    zawieszeniem, gdyby timeout w ogóle nie wystartował.
  */
  async function waitFor(condition, timeoutMs = 7000, stepMs = 50) {
    const deadline = Date.now() + timeoutMs;
    while (!condition()) {
      if (Date.now() >= deadline) return false;
      await new Promise(r => setTimeout(r, stepMs));
    }
    return true;
  }

  // stan SRS: kana ćwiczona (seen>0), etap `stage`, `reps` poprawnych na tym etapie
  function entry(over) {
    return Object.assign(
      {
        seen: 5,
        correct: 4,
        wrong: 1,
        recent: [1, 1, 1, 0],
        confused: {},
        last: 1,
        stage: 0,
        reps: 0,
        due: 0,
        lapses: 0
      },
      over || {}
    );
  }

  // reset izolowany między testami: nadpisujemy postęp w pamięci i w localStorage
  function setProgress(chars, version) {
    progress = { version: version === undefined ? PROGRESS_VERSION : version, chars: chars || {} };
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {}
  }
  function clearProgress() {
    setProgress({}, 1);
  }

  /* =====================================================
     1. DRABINKA I STAŁE
     ===================================================== */
  try {
    eq('ladder has 8 stages', REVIEW_STAGES.length, 8);
    eq('MAX_STAGE', MAX_STAGE, 7);
    eq('MASTERED_REPS', MASTERED_REPS, 3);
    eq('MAX_REVIEW_PER_SESSION', MAX_REVIEW_PER_SESSION, 20);
    deepEq(
      'ladder intervals',
      REVIEW_STAGES.map(s => s.intervalDays),
      [0, 1, 3, 7, 14, 30, 60, 120]
    );
    deepEq(
      'ladder requiredReps',
      REVIEW_STAGES.map(s => s.requiredReps),
      [1, 1, 1, 1, 2, 2, 2, 3]
    );
  } catch (e) {
    ok('ladder constants', false, e.message);
  }

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
  } catch (e) {
    ok('time injection', false, e.message);
  }

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
    const lost = scheduleAnswer(entry({ stage: MAX_STAGE, reps: MASTERED_REPS, lapses: 1 }), {
      correct: false,
      source: 'exam',
      now: 0
    });
    eq('wrong at MAX drops a stage', lost.stage, MAX_STAGE - 1);
    eq('wrong at MAX resets reps', lost.reps, 0);
    eq('wrong at MAX -> review again', deriveStatus(lost), 'review');
    eq('wrong at MAX counts a lapse', lost.lapses, 2);

    // migracja nie może wygenerować reps powyżej progu
    eq('normalizeSrs caps reps at MASTERED_REPS', normalizeSrs(entry({ reps: 50 }), 0).reps, MASTERED_REPS);
    eq(
      'clamped stage 99 + max reps normalises to mastered',
      deriveStatus(normalizeSrs(entry({ reps: MASTERED_REPS, stage: 99 }), 0)),
      'mastered'
    );

    // etykieta statusu: świadomie BEZ słowa „Opanowane/mastered"
    eq('label for mastered SRS status', REVIEW_STATUS_LABEL.mastered, 'Długi odstęp');
    ok(
      'no label leaks the word "mastered"',
      Object.values(REVIEW_STATUS_LABEL).every(v => v.toLowerCase().indexOf('mastered') < 0),
      Object.values(REVIEW_STATUS_LABEL).join(' / ')
    );
    ok(
      'no label says "Opanowane"',
      Object.values(REVIEW_STATUS_LABEL).every(v => v.toLowerCase().indexOf('opanowane') < 0),
      Object.values(REVIEW_STATUS_LABEL).join(' / ')
    );
  } catch (e) {
    ok('correct transitions', false, e.message);
  }

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
  } catch (e) {
    ok('wrong transitions', false, e.message);
  }

  /* =====================================================
     5. TIMEOUT NIE RUSZA SRS
     ===================================================== */
  try {
    const before = entry({ stage: 4, reps: 1, due: 999, lapses: 2 });
    const after = scheduleAnswer(JSON.parse(JSON.stringify(before)), {
      correct: false,
      source: 'exam-timeout',
      now: 123456
    });
    eq('timeout: stage unchanged', after.stage, before.stage);
    eq('timeout: reps unchanged', after.reps, before.reps);
    eq('timeout: due unchanged', after.due, before.due);
    eq('timeout: lapses unchanged', after.lapses, before.lapses);
    deepEq('timeout: whole entry unchanged', after, before);
  } catch (e) {
    ok('timeout exclusion', false, e.message);
  }

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
  } catch (e) {
    ok('record validation', false, e.message);
  }

  /* =====================================================
     7. NORMALIZACJA pól SRS
     ===================================================== */
  try {
    // `entry()` dostarcza stage:0 domyślnie, więc pola MUSIMY naprawdę usunąć,
    // żeby test „brakujące pole" coś testował.
    const bare = entry({});
    delete bare.stage;
    delete bare.reps;
    delete bare.due;
    delete bare.lapses;
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
  } catch (e) {
    ok('srs normalization', false, e.message);
  }

  /* =====================================================
     8. MIGRACJA v1 -> v2
     ===================================================== */
  try {
    // --- ważne: prawidłowy rekord bez pól SRS MUSI trafić do kolejki ---
    const rich = {
      seen: 12,
      correct: 11,
      wrong: 1,
      recent: [1, 1, 1, 1, 1],
      confused: { い: 2 },
      last: 1700000000000
    };
    clearProgress();
    progress = { version: 1, chars: { あ: JSON.parse(JSON.stringify(rich)) } };
    const migrated = migrateProgress(progress);
    eq('migration sets version 2', migrated.version, 2);
    eq('valid record got a stage', typeof migrated.chars['あ'].stage, 'number');
    eq('valid record due immediately', migrated.chars['あ'].due, 0);
    deepEq(
      'all legacy fields preserved',
      {
        seen: migrated.chars['あ'].seen,
        correct: migrated.chars['あ'].correct,
        wrong: migrated.chars['あ'].wrong,
        recent: migrated.chars['あ'].recent,
        confused: migrated.chars['あ'].confused,
        last: migrated.chars['あ'].last
      },
      rich
    );

    // seedowanie zgadza się z masteryLevel()
    ok(
      'mastered seeds stage 3',
      (function () {
        const chars = { あ: { seen: 12, correct: 11, wrong: 1, recent: [1, 1, 1, 1, 1], confused: {}, last: 1 } };
        setProgress(chars, 1);
        const m = migrateProgress(progress);
        return m.chars['あ'].stage === 3;
      })(),
      ''
    );
    ok(
      'good seeds stage 2',
      (function () {
        setProgress({ あ: { seen: 6, correct: 6, wrong: 0, recent: [1, 1, 1, 1], confused: {}, last: 1 } }, 1);
        return migrateProgress(progress).chars['あ'].stage === 2;
      })(),
      ''
    );
    ok(
      'hard seeds stage 0',
      (function () {
        setProgress({ あ: { seen: 6, correct: 3, wrong: 3, recent: [1, 0, 0, 0], confused: {}, last: 1 } }, 1);
        return migrateProgress(progress).chars['あ'].stage === 0;
      })(),
      ''
    );
    ok(
      'learning seeds stage 1',
      (function () {
        setProgress({ あ: { seen: 1, correct: 1, wrong: 0, recent: [1], confused: {}, last: 1 } }, 1);
        return migrateProgress(progress).chars['あ'].stage === 1;
      })(),
      ''
    );

    // --- idempotencja ---
    setProgress({ あ: JSON.parse(JSON.stringify(rich)) }, 1);
    migrateProgress(progress);
    const once = JSON.stringify(progress);
    migrateProgress(progress);
    ok('migration is idempotent', JSON.stringify(progress) === once, '');

    // --- przyszła wersja nie może zostać obniżona ---
    const future = migrateProgress({ version: PROGRESS_VERSION + 1, chars: { あ: JSON.parse(JSON.stringify(rich)) } });
    eq('future progress version preserved', future.version, PROGRESS_VERSION + 1);
    eq('future progress record preserved', future.chars['あ'].seen, rich.seen);

    // --- rekordy nie-obiektowe są ZACHOWANE, nie usunięte ---
    setProgress({ あ: JSON.parse(JSON.stringify(rich)), い: 5, う: null, え: 'x', お: [] }, 1);
    const kept = migrateProgress(progress);
    eq('non-object entries kept (count)', Object.keys(kept.chars).length, 5);
    ok('numeric entry preserved', kept.chars['い'] === 5, JSON.stringify(kept.chars['い']));
    ok('null entry preserved', 'う' in kept.chars && kept.chars['う'] === null, '');
    ok('string entry preserved', kept.chars['え'] === 'x', '');
    ok('array entry preserved', Array.isArray(kept.chars['お']), '');
    ok('non-object entry got NO srs fields', kept.chars['い'].stage === undefined, '');

    // --- seen poza zakresem -> 0, rekord zachowany, bez pól SRS ---
    setProgress({ か: { seen: 'nope', correct: 3, recent: [1, 1], confused: {}, last: 1 } }, 1);
    const fixed = migrateProgress(progress);
    eq('invalid seen coerced to 0', fixed.chars['か'].seen, 0);
    eq('record kept despite bad seen', fixed.chars['か'].correct, 3);
    ok('no SRS fields on non-seen record', fixed.chars['か'].stage === undefined, '');
    ok('not a progress record', !isProgressRecord(fixed.chars['か']), '');

    // --- uszkodzony JSON obsługiwany przez loadProgress ---
    try {
      localStorage.setItem(PROGRESS_KEY, '{to nie jest json');
      const loaded = loadProgress();
      eq(
        'corrupt JSON -> empty v2 store',
        JSON.stringify(loaded),
        JSON.stringify({ version: PROGRESS_VERSION, chars: {} })
      );
    } catch (e) {
      ok('corrupt JSON', false, e.message);
    }

    // --- brak version (stary zapis) ---
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify({ chars: { あ: rich } }));
      const noVersion = loadProgress();
      eq('missing version migrated', noVersion.version, 2);
      ok('missing version still seeds SRS', typeof noVersion.chars['あ'].stage === 'number');
    } catch (e) {
      ok('missing version', false, e.message);
    }
  } catch (e) {
    ok('migration', false, e.message);
  }

  /* =====================================================
     8b. CZĘŚCIOWE REKORDY POSTĘPU
     ===================================================== */
  try {
    // Bieżąca wersja też musi przejść naprawę kształtu: wcześniejszy
    // wczesny `return` zostawiał rekord bez `recent` i wywracał render.
    setProgress({ あ: { seen: 5, correct: 5, wrong: 0, last: 1 } }, PROGRESS_VERSION);
    const partial = migrateProgress(progress).chars['あ'];
    ok('partial current record gets recent array', Array.isArray(partial.recent), JSON.stringify(partial.recent));
    ok('partial current record gets confused object', !!partial.confused && typeof partial.confused === 'object');
    eq('partial current record keeps seen', partial.seen, 5);
    eq('partial current record mastery is safe', masteryLevel('あ'), 'learning');

    // Rekord nie-obiektowy jest zastępowany dopiero przy zapisie odpowiedzi.
    setProgress({ あ: 5 }, PROGRESS_VERSION);
    let answered = true;
    try {
      recordAnswer('あ', true, null, 'exam');
    } catch (e) {
      answered = false;
    }
    ok(
      'recordAnswer replaces non-object record',
      answered && progress.chars['あ'].seen === 1 && Array.isArray(progress.chars['あ'].recent),
      answered ? JSON.stringify(progress.chars['あ']) : 'threw'
    );

    // Rekord z brakującym `recent` jest naprawiany także bez migracji.
    setProgress({ い: { seen: 5, correct: 4, wrong: 1, last: 1 } }, PROGRESS_VERSION);
    let repaired = true;
    try {
      recordAnswer('い', true, null, 'exam');
    } catch (e) {
      repaired = false;
    }
    ok(
      'recordAnswer repairs missing recent',
      repaired && Array.isArray(progress.chars['い'].recent) && progress.chars['い'].recent.length === 1,
      repaired ? JSON.stringify(progress.chars['い']) : 'threw'
    );
  } catch (e) {
    ok('partial progress records', false, e.message);
  }

  /* =====================================================
     9. KOLEJKA: granica, kolejność, limit
     ===================================================== */
  try {
    setScript('hiragana');
    const NOW = 1700000000000;

    // granica: due === now wchodzi, due === now+1 nie
    setProgress({ あ: entry({ due: NOW }), い: entry({ due: NOW + 1 }) });
    eq('due === now is included', dueList(NOW).length, 1);
    eq('due === now included kana', dueList(NOW)[0].kana, 'あ');
    eq('due === now+1 excluded', dueList(NOW + 1).length, 2);

    // kolejność: overdue najpierw, potem lapses malejąco, potem stage rosnąco
    setProgress({
      あ: entry({ due: NOW - 3000, lapses: 0, stage: 5 }),
      い: entry({ due: NOW - 2000, lapses: 3, stage: 2 }),
      う: entry({ due: NOW - 2000, lapses: 1, stage: 4 }),
      え: entry({ due: NOW - 1000, lapses: 9, stage: 1 })
    });
    deepEq(
      'ordering: due asc, lapses desc, stage asc',
      dueList(NOW).map(x => x.kana),
      ['あ', 'い', 'う', 'え']
    );

    // limit sesji
    const many = {};
    getAll().forEach(c => {
      many[c.kana] = entry({ due: 0 });
    });
    setProgress(many);
    eq('all 104 due', dueCount(NOW), 104);
    eq('session capped at 20', reviewSession(NOW).length, MAX_REVIEW_PER_SESSION);
    eq('dueCount not capped', dueCount(NOW), 104);

    // nieznane/śmieciowe rekordy NIE trafiają do kolejki
    setProgress({
      あ: entry({ due: 0 }),
      い: 5,
      う: null,
      え: 'x',
      お: [],
      か: { seen: 5, stage: 'x', due: null, reps: undefined, lapses: null },
      き: { seen: 5, stage: 2, due: -5 },
      く: { seen: 'x', stage: 1, due: 0 }
    });
    const q = dueList(NOW).map(x => x.kana);
    deepEq('only the valid record is queued', q, ['あ']);
    ok('garbage never fabricated into stage 0', q.indexOf('い') < 0, '');

    // niewidziane: kana z poprawnym SRS, ale ukryte przed regresją?
    setProgress(
      {
        あ: JSON.parse(
          JSON.stringify({ seen: 12, correct: 11, wrong: 1, recent: [1, 1, 1, 1, 1], confused: {}, last: 1 })
        )
      },
      1
    );
    migrateProgress(progress);
    deepEq(
      'valid migrated kana is NOT hidden',
      dueList(NOW).map(x => x.kana),
      ['あ']
    );
  } catch (e) {
    ok('review queue', false, e.message);
  }

  /* =====================================================
     10. SEPARACJA HIRAGANA / KATAKANA
     ===================================================== */
  try {
    const NOW = 1700000000000;
    const mixed = {};
    mixed['あ'] = entry({ due: 0 }); // hiragana
    mixed['ア'] = entry({ due: 0 }); // katakana
    setProgress(mixed);

    setScript('hiragana');
    deepEq(
      'hiragana queue only hiragana',
      dueList(NOW).map(x => x.kana),
      ['あ']
    );
    setScript('katakana');
    deepEq(
      'katakana queue only katakana',
      dueList(NOW).map(x => x.kana),
      ['ア']
    );

    // brak kolizji kodepointów — listy zbieramy jawnie z danych,
    // bo getAll() zależy od AKTYWNEGO skryptu
    const hira = scriptData.hiragana.groups.flatMap(g => g.chars.map(c => c[0]));
    const kata = scriptData.katakana.groups.flatMap(g => g.chars.map(c => c[0]));
    eq('hiragana dataset size', hira.length, 104);
    eq('katakana dataset size', kata.length, 104);
    eq('no kana shared between scripts', hira.filter(k => kata.includes(k)).length, 0);
    setScript('hiragana');
  } catch (e) {
    ok('script separation', false, e.message);
  }

  /* =====================================================
     11. progressSummary NIGDY NIE ZWRACA NaN/Infinity
     ===================================================== */
  try {
    setProgress({
      あ: { seen: 10, correct: 9, wrong: 1, recent: [1, 1, 1, 1, 1], confused: {}, last: 1 },
      い: 5,
      う: null,
      え: 'x',
      お: [],
      か: { seen: 'nope', correct: 3, recent: [1], confused: {}, last: 1 },
      き: { seen: NaN, correct: 2, recent: [], confused: {}, last: 1 }
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
  } catch (e) {
    ok('progressSummary guard', false, e.message);
  }

  /* =====================================================
     12. BRAK REGRESJI W LEGACYCH
     ===================================================== */
  try {
    const fixture = {
      あ: { seen: 12, correct: 11, wrong: 1, recent: [1, 1, 1, 1, 1], confused: { い: 2 }, last: 5 },
      い: { seen: 6, correct: 3, wrong: 3, recent: [1, 0, 0, 0], confused: {}, last: 5 },
      う: { seen: 6, correct: 6, wrong: 0, recent: [1, 1, 1, 1], confused: {}, last: 5 },
      え: { seen: 1, correct: 1, wrong: 0, recent: [1], confused: {}, last: 5 },
      お: { seen: 11, correct: 10, wrong: 1, recent: [1, 1, 1, 1, 1, 0], confused: {}, last: 5 }
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
  } catch (e) {
    ok('legacy regression', false, e.message);
  }

  /* =====================================================
     13. RESET
     ===================================================== */
  try {
    setProgress({ あ: entry() }, PROGRESS_VERSION);
    window.confirm = () => true;
    resetProgressData();
    eq('reset -> empty chars', Object.keys(progress.chars).length, 0);
    eq('reset -> version 2', progress.version, PROGRESS_VERSION);
    eq('reset persisted', JSON.parse(localStorage.getItem(PROGRESS_KEY)).chars !== undefined, true);
    eq('queue empty after reset', dueList(Date.now()).length, 0);
  } catch (e) {
    ok('reset', false, e.message);
  }

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
    ok(
      'cache names derive from VERSION with Koto namespace',
      /const SHELL_CACHE\s*=\s*`koto-shell-\$\{VERSION\}`/.test(swSrc) &&
        /const KANJIVG_CACHE\s*=\s*`koto-kanjivg-\$\{VERSION\}`/.test(swSrc) &&
        /const FONTS_CACHE\s*=\s*`koto-fonts-\$\{VERSION\}`/.test(swSrc)
    );
    ok('activate removes old cache versions', /activate/.test(swSrc) && /delete/.test(swSrc));
    ok(
      'activate only touches Koto cache prefixes',
      /const CACHE_PREFIXES = \['koto-shell-', 'koto-kanjivg-', 'koto-fonts-'\]/.test(swSrc) &&
        /name\.startsWith\(prefix\)/.test(swSrc) &&
        /names\.filter/.test(swSrc)
    );
    ok(
      'KanjiVG retry selects expected URLs missing from cache',
      /const cached = new Set/.test(swSrc) && /kanjivgUrls\.filter\(url => !cached\.has\(url\)\)/.test(swSrc)
    );

    // pliki testowe to narzędzia deweloperskie — nigdy nie w precache
    ok('tests not precached', swSrc.indexOf('tests.js') < 0 && swSrc.indexOf('tests.html') < 0, '');
    ok('learn-panel tests not precached', swSrc.indexOf('tests-learn.js') < 0 && swSrc.indexOf('tests-learn.html') < 0);
  } catch (e) {
    ok('service worker version', false, e.message);
  }

  /* =====================================================
     14b. LOGO — przezroczysty asset i jego podłączenie
     ===================================================== */
  try {
    const logoSwSrc = await (await fetch('sw.js')).text();
    const logoCssSrc = await (await fetch('style.css')).text();

    ok(
      'LOGO1 logo.png jest w precache',
      logoSwSrc.indexOf("'./logo.png'") >= 0,
      (logoSwSrc.match(/'\.\/logo\.[a-z]+'/g) || []).join(', ')
    );
    ok(
      "LOGO2 stary logo.jpg nie jest precache'owany",
      logoSwSrc.indexOf("'./logo.jpg'") < 0,
      (logoSwSrc.match(/'\.\/logo\.[a-z]+'/g) || []).join(', ')
    );
    ok(
      'LOGO3 CSS wskazuje logo.png, nie logo.jpg',
      /\.app-nav-logo\s*\{[^}]*logo\.png/.test(logoCssSrc) && logoCssSrc.indexOf('logo.jpg') < 0
    );

    const logoImg = await new Promise((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error('logo.png nie wczytuje się'));
      el.src = 'logo.png';
    });

    ok(
      'LOGO4 logo.png ma 512×512',
      logoImg.naturalWidth === 512 && logoImg.naturalHeight === 512,
      logoImg.naturalWidth + '×' + logoImg.naturalHeight
    );

    const logoCanvas = document.createElement('canvas');
    logoCanvas.width = logoImg.naturalWidth;
    logoCanvas.height = logoImg.naturalHeight;
    const logoCtx = logoCanvas.getContext('2d', { willReadFrequently: true });
    logoCtx.drawImage(logoImg, 0, 0);
    const px = logoCtx.getImageData(0, 0, logoCanvas.width, logoCanvas.height).data;
    const alphaAt = (x, y) => px[(y * logoCanvas.width + x) * 4 + 3];

    let opaque = 0;
    let semi = 0;
    let vermilion = 0;
    for (let i = 0; i < px.length; i += 4) {
      const a = px[i + 3];
      if (a === 255) {
        opaque++;
        if (px[i] > 180 && px[i + 1] >= 40 && px[i + 1] <= 90 && px[i + 2] <= 60) vermilion++;
      } else if (a > 0) {
        semi++;
      }
    }

    ok(
      'LOGO5 narożniki są w pełni przezroczyste',
      alphaAt(0, 0) === 0 &&
        alphaAt(logoCanvas.width - 1, 0) === 0 &&
        alphaAt(0, logoCanvas.height - 1) === 0 &&
        alphaAt(logoCanvas.width - 1, logoCanvas.height - 1) === 0
    );
    ok('LOGO6 znak ma nieprzezroczyste piksele', opaque > 10000, 'opaque=' + opaque);
    ok('LOGO7 krawędzie mają częściową alfa', semi > 1000, 'semi=' + semi);
    ok('LOGO8 kolor znaku pozostał wermilionowy', vermilion > 1000, 'vermilion=' + vermilion);
  } catch (e) {
    ok('logo — asset i podłączenie', false, e.message);
  }

  /* =====================================================
     14c. BRANDING KOTO I INFORMACJE Z FOOTERA
     ===================================================== */
  try {
    const brandHtml = await (await fetch('index.html')).text();
    const brandManifest = JSON.parse(await (await fetch('manifest.webmanifest')).text());
    const brandOffline = await (await fetch('offline.html')).text();
    const brandCss = await (await fetch('style.css')).text();

    ok('BRAND1 tytuł dokumentu to Koto', /<title>Koto — nauka i egzamin<\/title>/.test(brandHtml));
    ok(
      'BRAND2 manifest: nazwa i skrót Koto',
      brandManifest.name === 'Koto — nauka i egzamin' && brandManifest.short_name === 'Koto',
      brandManifest.name + ' / ' + brandManifest.short_name
    );
    ok('BRAND3 apple-mobile-web-app-title = Koto', /apple-mobile-web-app-title" content="Koto"/.test(brandHtml));
    ok(
      'BRAND4 favicon i ikona Apple z wersjonowaniem ?v=koto',
      /icons\/icon-192\.png\?v=koto/.test(brandHtml) && /icons\/apple-touch-icon\.png\?v=koto/.test(brandHtml)
    );
    ok(
      'BRAND5 manifest: wszystkie ikony z ?v=koto',
      brandManifest.icons.length === 3 && brandManifest.icons.every(icon => /\?v=koto$/.test(icon.src)),
      brandManifest.icons.map(icon => icon.src).join(' ')
    );
    ok('BRAND6 offline.html mówi Koto', /<title>Offline — Koto<\/title>/.test(brandOffline));
    ok(
      'BRAND7 brak starej nazwy produktu w powłoce i manifeście',
      brandHtml.indexOf('Hiragana Study') < 0 &&
        brandHtml.indexOf('Kana — nauka') < 0 &&
        brandManifest.name.indexOf('Kana') < 0
    );
    ok('BRAND8 brak <footer> w powłoce i w DOM', !/<\/?footer\b/i.test(brandHtml) && !document.querySelector('footer'));
    ok('BRAND9 CSS nie ma już reguł footer', !/(^|\n)\s*footer\s*\{/.test(brandCss));
    ok(
      'BRAND10 nazwa marki w szynie to Koto',
      (document.querySelector('.app-nav-brand-name') || {}).textContent?.trim() === 'Koto'
    );

    setScreen('settings');
    await new Promise(r => setTimeout(r, 60));

    const about = document.getElementById('aboutApp');
    const aboutText = about ? about.textContent : '';
    ok('BRAND11 Ustawienia mają kartę O aplikacji', !!about && /O aplikacji/.test(aboutText));
    ok(
      'BRAND12 informacja o lokalnym działaniu',
      /lokalna aplikacja/.test(aboutText) && /wyłącznie na tym urządzeniu/.test(aboutText)
    );
    ok(
      'BRAND13 zakres znaków przeniesiony z footera',
      /hiragana i katakana/.test(aboutText) && /dakuten, handakuten, yōon/.test(aboutText)
    );
    ok('BRAND14 atrybucja KanjiVG i licencja', /KanjiVG/.test(aboutText) && /CC BY-SA 3\.0/.test(aboutText));

    const aboutLinks = about ? [...about.querySelectorAll('a')].map(link => link.href) : [];
    ok(
      'BRAND15 linki do źródła i licencji',
      aboutLinks.some(url => url.indexOf('github.com/KanjiVG/kanjivg') >= 0) &&
        aboutLinks.some(url => url.indexOf('creativecommons.org/licenses/by-sa/3.0') >= 0),
      aboutLinks.join(' ')
    );

    const iconImg = await new Promise((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error('icons/icon-192.png nie wczytuje się'));
      el.src = 'icons/icon-192.png?v=koto';
    });
    const iconCanvas = document.createElement('canvas');
    iconCanvas.width = iconImg.naturalWidth;
    iconCanvas.height = iconImg.naturalHeight;
    const iconCtx = iconCanvas.getContext('2d', { willReadFrequently: true });
    iconCtx.drawImage(iconImg, 0, 0);
    const iconPx = iconCtx.getImageData(0, 0, iconCanvas.width, iconCanvas.height).data;
    let iconVermilion = 0;
    for (let i = 0; i < iconPx.length; i += 4) {
      if (iconPx[i] > 170 && iconPx[i + 1] < 110 && iconPx[i + 2] < 90) iconVermilion++;
    }
    ok(
      'BRAND16 nowa ikona 192 px zawiera wermilionowy znak',
      iconImg.naturalWidth === 192 && iconImg.naturalHeight === 192 && iconVermilion > 1000,
      iconImg.naturalWidth + '×' + iconImg.naturalHeight + ', px=' + iconVermilion
    );

    const maskImg = await new Promise((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error('icons/maskable-512.png nie wczytuje się'));
      el.src = 'icons/maskable-512.png?v=koto';
    });
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = maskImg.naturalWidth;
    maskCanvas.height = maskImg.naturalHeight;
    const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
    maskCtx.drawImage(maskImg, 0, 0);
    const maskPx = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height).data;
    let outsideSafeZone = 0;
    for (let y = 0; y < maskCanvas.height; y++) {
      for (let x = 0; x < maskCanvas.width; x++) {
        const i = (y * maskCanvas.width + x) * 4;
        const differsFromBg =
          Math.abs(maskPx[i] - 18) + Math.abs(maskPx[i + 1] - 17) + Math.abs(maskPx[i + 2] - 22) > 30;
        const dx = x + 0.5 - maskCanvas.width / 2;
        const dy = y + 0.5 - maskCanvas.height / 2;
        if (differsFromBg && Math.hypot(dx, dy) > maskCanvas.width * 0.4) outsideSafeZone++;
      }
    }
    ok(
      'BRAND17 maskable trzyma znak w strefie bezpiecznej 80%',
      maskImg.naturalWidth === 512 && maskImg.naturalHeight === 512 && outsideSafeZone === 0,
      'px poza strefą=' + outsideSafeZone
    );

    setScreen('menu');
  } catch (e) {
    ok('branding Koto i informacje z footera', false, e.message);
  }

  /* =====================================================
     15. WIDOCZNOŚĆ EKRANU PRZEGLĄDU
     ===================================================== */
  try {
    clearProgress();
    setScreen('menu');
    await new Promise(r => setTimeout(r, 60));
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
    getAll()
      .slice(0, 25)
      .forEach(c => {
        many[c.kana] = entry({ due: 0, stage: 2, lapses: 1 });
      });
    setProgress(many);
    setScreen('review');
    await new Promise(r => setTimeout(r, 60));
    ok('due count rendered', document.body.textContent.indexOf('Do powtórki: 25') >= 0, '');
    ok('session cap shown', document.body.textContent.indexOf('dziś: 20') >= 0, '');
    eq('20 rows rendered', document.querySelectorAll('.review-row').length, 20);
    ok('uses "Potknięcia" wording', document.body.textContent.indexOf('Potknięcia: 1') >= 0, '');
    ok('uses "Do powtórki" tag', document.body.textContent.indexOf('Do powtórki') >= 0, '');
    ok('review still avoids "Opanowane"', document.querySelector('.review').textContent.indexOf('Opanowan') < 0, '');

    document.getElementById('reviewStartBtn').click();
    await new Promise(r => setTimeout(r, 80));
    ok(
      'start reuses existing exam engine',
      !!state.exam && state.exam.kanaList.length === 20,
      state.exam ? state.exam.kanaList.length : 'no exam'
    );
    stopExam();

    // powrót do menu
    setScreen('menu');
    await new Promise(r => setTimeout(r, 60));
    ok(
      'menu has the three study tiles',
      ['learnCard', 'examCard', 'reviewCard'].every(function (id) {
        const el = document.getElementById(id);
        return !!el && el.classList.contains('menu-card') && el.classList.contains('tile');
      }) &&
        document.querySelectorAll('.menu .menu-card.tile').length === 3 &&
        !document.getElementById('vocabCard'),
      String(document.querySelectorAll('.menu .menu-card').length)
    );
    ok(
      'settings live in the top bar, not among the study modes',
      !!document.querySelector('.topbar-actions #settingsToggle') &&
        !document.querySelector('#settingsCard') &&
        !document.querySelector('.menu-tools'),
      ''
    );
    ok(
      'menu shows a mastery strip instead of the donut',
      !!document.querySelector('.mastery-strip') &&
        !document.querySelector('.mastery-donut') &&
        !document.querySelector('.mastery-legend'),
      ''
    );
    ok(
      'hub summary wraps the mastery strip with the current script',
      document.querySelector('.hub-summary .mastery-strip') !== null &&
        document.querySelector('.hub-summary .hub-script').textContent.trim() === scriptName(),
      document.querySelector('.hub-summary .hub-script')?.textContent.trim()
    );
    ok(
      'learn is the primary hub action with the current kana',
      document.getElementById('learnCard').classList.contains('tile-primary') &&
        document.querySelector('#learnCard .tile-cta').textContent.trim().indexOf(state.kana) >= 0,
      document.querySelector('#learnCard .tile-cta')?.textContent.trim()
    );
    ok(
      'chart still above cards',
      (function () {
        return document.querySelector('#app').firstElementChild.classList.contains('script-switcher');
      })(),
      ''
    );

    // Klasa modyfikatora karty pełnoszerokiej: `.menu-card.full`.
    // Dawniej było to osobna klasa `.menu-card-full` — pilnujemy, żeby
    // nie wróciła. Żadna karta już jej nie używa, ale reguła
    // zostaje jako gotowy modyfikator.
    ok(
      'no element carries the legacy full-width class',
      document.querySelectorAll('.menu-card-full').length === 0,
      String(document.querySelectorAll('.menu-card-full').length)
    );

    const cssText = await (await fetch('style.css')).text();
    ok('style.css defines .menu-card.full', /\.menu-card\.full\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/.test(cssText));
    ok('style.css has no stale .menu-card-full selector', cssText.indexOf('.menu-card-full') < 0);
    ok(
      'style.css keeps .menu-card.tile and the mastery strip',
      cssText.indexOf('.menu-card.tile') >= 0 && cssText.indexOf('.mastery-strip-bar') >= 0,
      ''
    );
    ok(
      'style.css has no stale .menu-tools row',
      cssText.indexOf('.menu-tools') < 0 && cssText.indexOf('.menu-tool') < 0,
      ''
    );
  } catch (e) {
    ok('review UI', false, e.message);
  }

  /* =====================================================
     16. USTAWIENIA EGZAMINU — „ćwicz trudne" nie może ich gubić
     ===================================================== */
  try {
    const full = {
      groups: ['a'],
      options: 4,
      limit: 10,
      outside: false,
      modes: {
        romajiKanaPick: true,
        kanaRomajiPick: true,
        romajiKanaType: true,
        kanaRomajiType: true
      },
      timer: 15
    };

    // dwa znaki „hard", żeby przycisk „ćwicz trudne" był aktywny
    const hard = { seen: 8, correct: 3, wrong: 5, recent: [0, 0, 0, 1, 1, 0], confused: {}, last: 1 };
    progress = { version: PROGRESS_VERSION, chars: { あ: { ...hard }, い: { ...hard } } };
    saveProgress();

    saveExamSettings(JSON.parse(JSON.stringify(full)));
    showExamSetup();
    await new Promise(r => setTimeout(r, 120));

    ok(
      'CFG1 przycisk „ćwicz trudne" aktywny przy 2 trudnych znakach',
      !!document.getElementById('practiceHardSetup') && !document.getElementById('practiceHardSetup').disabled
    );

    document.getElementById('practiceHardSetup').click();
    await new Promise(r => setTimeout(r, 120));

    const stored = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');

    // to jest właśnie regresja: wcześniej zapisywano tylko {groups, options, outside}
    ok(
      'CFG2 tryby pytań przetrwały „ćwicz trudne"',
      stored.modes &&
        stored.modes.romajiKanaPick &&
        stored.modes.kanaRomajiPick &&
        stored.modes.romajiKanaType &&
        stored.modes.kanaRomajiType,
      JSON.stringify(stored.modes)
    );
    ok('CFG3 limit pytań przetrwał', stored.limit === 10, String(stored.limit));
    ok('CFG4 timer przetrwał', stored.timer === 15, String(stored.timer));
    ok('CFG5 liczba odpowiedzi przetrwała', stored.options === 4, String(stored.options));
    ok('CFG6 „dodawaj spoza zakresu" przetrwało', stored.outside === false, String(stored.outside));

    const reloaded = loadExamSettings();
    ok('CFG7 loadExamSettings odtwarza limit', reloaded.limit === 10, String(reloaded.limit));
    ok('CFG8 loadExamSettings odtwarza timer', reloaded.timer === 15, String(reloaded.timer));
    ok(
      'CFG9 loadExamSettings odtwarza wszystkie tryby',
      reloaded.modes.romajiKanaPick &&
        reloaded.modes.kanaRomajiPick &&
        reloaded.modes.romajiKanaType &&
        reloaded.modes.kanaRomajiType
    );

    // sesja „ćwicz trudne" ma używać tych samych ustawień
    const ex = state.exam;
    ok('CFG10 sesja dostała timer', ex && ex.timerSec === 15, ex && String(ex.timerSec));
    ok('CFG11 sesja dostała limit', ex && ex.limit === 10, ex && String(ex.limit));
    ok('CFG12 sesja dostała liczbę odpowiedzi', ex && ex.options === 4, ex && String(ex.options));
    ok(
      'CFG13 sesja dostała 4 tryby',
      ex && Object.values(ex.enabledModes).filter(Boolean).length === 4,
      ex && JSON.stringify(ex.enabledModes)
    );
    ok('CFG14 sesja jest typu practice', ex && ex.kind === 'practice', ex && ex.kind);
    ok(
      'CFG15 sesja ma listę znaków do ćwiczenia',
      ex && Array.isArray(ex.kanaList) && ex.kanaList.length === 2,
      ex && ex.kanaList && String(ex.kanaList.length)
    );

    stopExam();
    progress = { version: PROGRESS_VERSION, chars: {} };
    saveProgress();
  } catch (e) {
    ok('ustawienia egzaminu', false, e.message);
  }

  /* =====================================================
     16a. PODSUMOWANIE OPCJI EGZAMINU — aktualizuje się na żywo
     ===================================================== */
  try {
    saveExamSettings({
      groups: ['a'],
      options: 4,
      limit: 0,
      outside: false,
      modes: { romajiKanaPick: true, kanaRomajiPick: false, romajiKanaType: false, kanaRomajiType: false },
      timer: 0
    });
    showExamSetup();
    await new Promise(r => setTimeout(r, 60));

    const optionsSelect = document.getElementById('optionsCount');
    optionsSelect.value = '8';
    optionsSelect.dispatchEvent(new Event('change', { bubbles: true }));

    const summary = document.getElementById('examSummary');
    ok(
      'CFG16 podsumowanie opcji aktualizuje się od razu',
      !!summary && summary.textContent.indexOf('8 odpowiedzi') === 0,
      summary ? summary.textContent : 'brak #examSummary'
    );

    const storedOptions = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}');
    ok(
      'CFG17 zmiana opcji zapisuje się bez startu egzaminu',
      storedOptions.options === 8,
      String(storedOptions.options)
    );
  } catch (e) {
    ok('podsumowanie opcji egzaminu', false, e.message);
  }

  /* =====================================================
     16b. PASEK OPANOWANIA — „nowe" rezerwuje miejsce
     ===================================================== */
  try {
    const kana = getAll()[0].kana;
    setProgress({ [kana]: { seen: 1, correct: 1, wrong: 0, recent: [1], confused: {}, last: 1 } });
    setScreen('menu');
    await new Promise(r => setTimeout(r, 60));

    const seg = document.querySelector('.mastery-seg.learning');
    const spacer = document.querySelector('.mastery-spacer');
    const expectedNew = getAll().length - 1;

    ok('MST1 jeden ćwiczony znak daje segment „learning"', !!seg, seg ? seg.className : 'brak');
    ok(
      'MST2 pasek rezerwuje miejsce dla nowych znaków',
      !!spacer && Number(spacer.style.flexGrow) === expectedNew,
      spacer ? 'flex-grow=' + spacer.style.flexGrow + ' expected=' + expectedNew : 'brak spacera'
    );
    ok(
      'MST3 ćwiczony segment nie rozciąga się na całą szerokość',
      !!seg && Number(seg.style.flexGrow) === 1,
      seg ? 'flex-grow=' + seg.style.flexGrow : 'brak'
    );

    setProgress({});
  } catch (e) {
    ok('pasek opanowania', false, e.message);
  }

  /* =====================================================
     16c. IKONY — menu i górny pasek bez emoji
     ===================================================== */
  try {
    setScreen('menu');
    await new Promise(r => setTimeout(r, 60));

    const learnIcon = document.querySelector('#learnCard .menu-icon svg.icon');
    const examIcon = document.querySelector('#examCard .menu-icon svg.icon');
    const settingsIcon = document.querySelector('#settingsToggle svg.icon');
    const themeIcon = document.querySelector('#themeToggle svg.icon');
    const muteIcon = document.querySelector('#muteToggle svg.icon');

    ok('ICO1 kafelki menu używają SVG', !!learnIcon && !!examIcon, '');
    ok(
      'ICO2 gear Ustawień w górnym pasku używa SVG',
      !!settingsIcon && !!document.querySelector('.topbar-actions #settingsToggle'),
      ''
    );
    ok(
      'ICO3 ikona kafelka nie jest emoji',
      !!learnIcon && document.querySelector('#learnCard .menu-icon').textContent.trim() === '',
      document.querySelector('#learnCard .menu-icon')?.textContent.trim()
    );
    ok('ICO4 przełączniki górnego paska używają SVG', !!themeIcon && !!muteIcon && !!settingsIcon, '');
  } catch (e) {
    ok('ikony interfejsu', false, e.message);
  }

  /* =====================================================
     17. TIMEOUT W TRYBACH TEKSTOWYCH
     ===================================================== */
  try {
    const groups = [getGroups()[0].id];

    /* `romajiKanaType` = widzisz romaji, wpisujesz KANA -> #kanaInput / #checkKana
       `kanaRomajiType` = widzisz kana, wpisujesz ROMAJI -> #romajiInput / #checkRomaji */

    // --- tryb: widzisz romaji, wpisujesz kana
    startExam(groups, {
      options: 4,
      limit: 0,
      outside: false,
      modes: { romajiKanaPick: false, kanaRomajiPick: false, romajiKanaType: true, kanaRomajiType: false },
      timer: 5
    });
    await new Promise(r => setTimeout(r, 200));

    const ex = state.exam;
    ok('TYP1 tryb romaji->kana wystartował', !!ex && ex.currentMode === 'romaji-kana-type', ex && ex.currentMode);
    ok(
      'TYP2 #kanaInput istnieje i jest aktywny',
      !!document.getElementById('kanaInput') && !document.getElementById('kanaInput').disabled
    );
    ok(
      'TYP3 #checkKana istnieje i jest aktywny',
      !!document.getElementById('checkKana') && !document.getElementById('checkKana').disabled
    );

    const totalBefore = ex.total,
      wrongBefore = ex.wrong,
      scoreBefore = ex.score;
    await waitFor(() => ex.total === totalBefore + 1);

    ok(
      'TYP4 timeout zaliczył pytanie jako błędne',
      ex.total === totalBefore + 1 && ex.wrong === wrongBefore + 1,
      'total ' + totalBefore + '->' + ex.total + ', wrong ' + wrongBefore + '->' + ex.wrong
    );
    ok('TYP5 timeout NIE dodał punktów', ex.score === scoreBefore, String(ex.score));
    ok('TYP6 #kanaInput zablokowany po timeoutie', document.getElementById('kanaInput').disabled === true);
    ok('TYP7 #checkKana zablokowany po timeoutie', document.getElementById('checkKana').disabled === true);

    // ponowne wysłanie odpowiedzi nie może nic dodać
    const wrongNow = ex.wrong;
    document.getElementById('checkKana').click();
    ok(
      'TYP8 ponowne wysłanie po timeoutie nie zmienia wyniku',
      ex.wrong === wrongNow && ex.score === scoreBefore,
      'wrong ' + wrongNow + ', score ' + ex.score
    );
    stopExam();

    // --- tryb: widzisz kana, wpisujesz romaji
    startExam(groups, {
      options: 4,
      limit: 0,
      outside: false,
      modes: { romajiKanaPick: false, kanaRomajiPick: false, romajiKanaType: false, kanaRomajiType: true },
      timer: 5
    });
    await new Promise(r => setTimeout(r, 200));
    ok(
      'TYP9 tryb kana->romaji wystartował',
      !!state.exam && state.exam.currentMode === 'kana-romaji-type',
      state.exam && state.exam.currentMode
    );
    await waitFor(() => {
      const input = document.getElementById('romajiInput');
      return !!input && input.disabled;
    });
    ok('TYP10 #romajiInput zablokowany po timeoutie', document.getElementById('romajiInput').disabled === true);
    ok('TYP11 #checkRomaji zablokowany po timeoutie', document.getElementById('checkRomaji').disabled === true);
    stopExam();

    // --- tryb wyboru nadal blokuje .answer (regresja w obie strony)
    startExam(groups, {
      options: 4,
      limit: 0,
      outside: false,
      modes: { romajiKanaPick: true, kanaRomajiPick: true, romajiKanaType: false, kanaRomajiType: false },
      timer: 5
    });
    await new Promise(r => setTimeout(r, 200));
    ok('TYP12 tryb wyboru pokazuje przyciski .answer', document.querySelectorAll('.answer').length > 0);
    await waitFor(() => {
      const answers = [...document.querySelectorAll('.answer')];
      return answers.length > 0 && answers.every(a => a.disabled);
    });
    ok(
      'TYP13 przyciski .answer zablokowane po timeoutie',
      [...document.querySelectorAll('.answer')].every(a => a.disabled)
    );
    stopExam();
    setScreen('menu');
  } catch (e) {
    ok('timeout w trybach tekstowych', false, e.message);
  }

  /* =====================================================
     18. KONFETTI PODĄŻA ZA MOTYWEM (#11)
     ===================================================== */
  try {
    // tests.html wstawia tylko <body> z index.html, więc <link> do
    // style.css nie istnieje i tokeny motywu nie są zdefiniowane.
    // Wstrzykujemy arkusz na czas tej sekcji, żeby mierzyć realne
    // kolory, a nie nierozwiązane referencje.
    const cssText = await (await fetch('style.css')).text();
    const styleEl = document.createElement('style');
    styleEl.textContent = cssText;
    document.head.appendChild(styleEl);

    const prevTheme = document.documentElement.dataset.theme;
    const TOKENS = ['var(--accent)', 'var(--good)', 'var(--warn)', 'var(--bad)', 'var(--mastered)'];

    function collectConfettiColors() {
      spawnConfetti();
      const container = document.querySelector('.confetti-container');
      const pieces = [...container.querySelectorAll('.confetti-piece')];
      const inline = pieces.map(p => p.style.background);
      // computed MUSI być czytane w DOM — oderwany element zwraca ''
      const computed = [...new Set(pieces.map(p => getComputedStyle(p).backgroundColor))];
      container.remove();
      return { count: pieces.length, inline, computed };
    }

    document.documentElement.dataset.theme = 'light';
    const light = collectConfettiColors();

    ok('CF1 konfetti tworzy 60 elementów', light.count === 60, String(light.count));
    ok(
      'CF2 każdy kolor to referencja do tokenu, nie literał',
      light.inline.every(c => c.indexOf('var(--') === 0),
      [...new Set(light.inline)].slice(0, 3).join(' ')
    );
    ok(
      'CF3 użyte wyłącznie dozwolone tokeny',
      light.inline.every(c => TOKENS.indexOf(c) !== -1),
      [...new Set(light.inline)].filter(c => TOKENS.indexOf(c) === -1).join(',') || 'brak obcych'
    );

    document.documentElement.dataset.theme = 'dark';
    const dark = collectConfettiColors();

    // właściwa regresja: przy zakodowanych hexach obie wartości byłyby
    // identyczne, bo paleta nie zależała od motywu
    const shared = light.computed.filter(c => dark.computed.indexOf(c) !== -1);
    ok('CF4 ciemny motyw daje inne kolory niż jasny', shared.length === 0, 'wspólne: ' + (shared.join(', ') || 'brak'));
    ok(
      'CF5 kolory faktycznie się rozwiązują',
      light.computed.length === 5 && dark.computed.length === 5,
      'jasny ' + light.computed.length + ' [' + light.computed.join(' ') + ']'
    );
    ok(
      'CF6 każdy kolor jest nieprzezroczysty',
      [...light.computed, ...dark.computed].every(c => c && c !== 'rgba(0, 0, 0, 0)'),
      light.computed.concat(dark.computed).join(' ')
    );

    if (prevTheme) document.documentElement.dataset.theme = prevTheme;
    else delete document.documentElement.dataset.theme;
    styleEl.remove();
  } catch (e) {
    ok('konfetti', false, e.message);
  }

  /* =====================================================
     19. GRANICA LIMITU I ZAKOŃCZENIE EGZAMINU (#13, #14, #16)
     ===================================================== */
  try {
    const bGroups = [getGroups()[0].id];
    const PICK = { romajiKanaPick: true, kanaRomajiPick: false, romajiKanaType: false, kanaRomajiType: false };
    const settle = () => new Promise(r => setTimeout(r, 950));

    function clickAnswer(correct) {
      const kana = state.exam.current.kana;
      const btn = correct
        ? document.querySelector('[data-answer="' + kana + '"]')
        : [...document.querySelectorAll('[data-answer]')].find(b => b.dataset.answer !== kana);
      if (btn) btn.click();
      return !!btn;
    }

    // --- #13: granica limitu pytań -------------------------------
    startExam(bGroups, { options: 4, limit: 3, outside: false, modes: PICK, timer: 0 });
    await new Promise(r => setTimeout(r, 200));

    ok(
      'LIM1 pierwsze pytanie wyświetlone',
      !!state.exam.current && document.querySelectorAll('[data-answer]').length === 4,
      String(document.querySelectorAll('[data-answer]').length)
    );

    clickAnswer(true);
    await settle();
    clickAnswer(true);
    await settle();

    const ex = state.exam;
    ok(
      'LIM2 po 2 odpowiedziach egzamin trwa',
      ex.finished === false && ex.total === 2,
      'total ' + ex.total + ', finished ' + ex.finished
    );
    ok(
      'LIM3 trzecie pytanie jest dostępne',
      !!ex.current && document.querySelectorAll('[data-answer]').length > 0,
      ex.current && ex.current.kana
    );
    ok(
      'LIM4 wynik zgadza się z liczbą odpowiedzi',
      ex.score === 2 && ex.wrong === 0,
      'score ' + ex.score + ', wrong ' + ex.wrong
    );

    clickAnswer(true);
    await settle();

    ok('LIM5 egzamin zakończył się dokładnie po N odpowiedziach', ex.total === 3, 'total ' + ex.total);
    ok('LIM6 egzamin jest zakończony', ex.finished === true, String(ex.finished));
    ok(
      'LIM7 nie ma dodatkowego pytania po limicie',
      !ex.current || document.querySelectorAll('[data-answer]').length === 0,
      String(document.querySelectorAll('[data-answer]').length)
    );
    ok(
      'LIM8 wynik policzony dokładnie raz',
      ex.score === 3 && ex.wrong === 0,
      'score ' + ex.score + ', wrong ' + ex.wrong
    );

    // --- #14: timeout na pytaniu ostatnim -------------------------
    startExam(bGroups, { options: 4, limit: 3, outside: false, modes: PICK, timer: 5 });
    await new Promise(r => setTimeout(r, 200));
    clickAnswer(true);
    await settle();
    clickAnswer(true);
    await settle();

    const t = state.exam;
    const beforeTimeout = { total: t.total, wrong: t.wrong, score: t.score };
    ok('LIM9 przed timeoutem na ostatnim pytaniu', beforeTimeout.total === 2, JSON.stringify(beforeTimeout));

    await waitFor(() => t.total === 3 && t.wrong === 1);

    ok(
      'LIM10 timeout policzył pytanie jako błędne dokładnie raz',
      t.total === 3 && t.wrong === 1,
      'total ' + t.total + ', wrong ' + t.wrong
    );
    ok('LIM11 timeout nie dodał punktów', t.score === 2, 'score ' + t.score);
    ok('LIM12 stan oczekiwania na „Dalej" ustawiony', t.waiting === true, String(t.waiting));
    ok('LIM13 timeout NIE kończy egzaminu sam z siebie', t.finished === false, String(t.finished));
    ok(
      'LIM14 czasu nie ma — sterowanie zablokowane',
      [...document.querySelectorAll('[data-answer]')].every(b => b.disabled),
      [...document.querySelectorAll('[data-answer]')].filter(b => !b.disabled).length + ' aktywnych'
    );

    nextExamQuestion();

    ok('LIM15 „Dalej" kończy egzamin', t.finished === true, String(t.finished));
    ok(
      'LIM16 zakończenie nie przelicza odpowiedzi',
      t.total === 3 && t.wrong === 1 && t.score === 2,
      'total ' + t.total + ', wrong ' + t.wrong + ', score ' + t.score
    );

    // --- #16: błędna odpowiedź a automatyczne zakończenie ---------
    startExam(bGroups, { options: 4, limit: 3, outside: false, modes: PICK, timer: 0 });
    await new Promise(r => setTimeout(r, 200));
    clickAnswer(true);
    await settle();
    clickAnswer(true);
    await settle();

    const w = state.exam;
    clickAnswer(false);
    await new Promise(r => setTimeout(r, 200));

    ok(
      'LIM17 błędna odpowiedź na ostatnim pytaniu policzona',
      w.total === 3 && w.wrong === 1,
      'total ' + w.total + ', wrong ' + w.wrong
    );
    ok('LIM18 błędna odpowiedź otwiera przegląd odpowiedzi', w.waiting === true, String(w.waiting));
    ok(
      'LIM19 przycisk „Dalej" jest dostępny',
      !!document.getElementById('nextQuestion'),
      document.getElementById('nextQuestion') ? 'jest' : 'brak'
    );

    await new Promise(r => setTimeout(r, 1600));

    ok('LIM20 błędna odpowiedź NIE kończy egzaminu automatycznie', w.finished === false, String(w.finished));
    ok(
      'LIM21 przegląd odpowiedzi nie zniknął po oknie auto-przejścia',
      w.waiting === true && !!document.getElementById('nextQuestion'),
      'waiting ' + w.waiting
    );

    nextExamQuestion();
    ok('LIM22 „Dalej" po błędnej odpowiedzi kończy egzamin', w.finished === true, String(w.finished));
    ok(
      'LIM23 zakończenie po błędnej odpowiedzi nie przelicza wyniku',
      w.total === 3 && w.wrong === 1 && w.score === 2,
      'total ' + w.total + ', wrong ' + w.wrong + ', score ' + w.score
    );

    stopExam();
    clearProgress();
    localStorage.removeItem(DAILY_STATS_KEY);
    setScreen('menu');
  } catch (e) {
    ok('granica limitu i zakończenie', false, e.message);
  }

  /* =====================================================
     SŁOWNICTWO (T19) — dane
     ===================================================== */
  try {
    const items = VOCAB_ITEMS;
    const cards = items.filter(item => item.type === 'card');
    const patterns = items.filter(item => item.type === 'pattern');
    const kanaOnly = /^[ぁ-んァ-ヶー～（）。\s]+$/;

    const words = items.filter(item => item.type === 'word');
    const adjectives = items.filter(item => item.type === 'adjective');
    const phrases = items.filter(item => item.type === 'phrase');
    const extraVerbs = items.filter(item => item.type === 'verb');

    ok(
      'VO1 jest 20 poleceń, 2 wzorce, 64 rzeczowniki, 14 przymiotników, 6 zwrotów i 2 czasowniki',
      cards.length === 20 &&
        patterns.length === 2 &&
        words.length === 64 &&
        adjectives.length === 14 &&
        phrases.length === 6 &&
        extraVerbs.length === 2,
      [cards.length, patterns.length, words.length, adjectives.length, phrases.length, extraVerbs.length].join(' / ')
    );

    const expectedIds = [
      ...Array.from({ length: 24 }, (_, index) => 'v' + String(index + 1).padStart(2, '0')),
      ...Array.from({ length: 64 }, (_, index) => 'n' + String(index + 1).padStart(2, '0')),
      ...Array.from({ length: 6 }, (_, index) => 'p' + String(index + 1).padStart(2, '0')),
      ...Array.from({ length: 14 }, (_, index) => 'a' + String(index + 1).padStart(2, '0'))
    ].join(',');
    ok(
      'VO2 identyfikatory są stabilne i uporządkowane',
      items.map(item => item.id).join(',') === expectedIds,
      items.map(item => item.id).join(',')
    );

    ok(
      'VO3 każda karta ma japoński, romaji, znaczenie i czasownik',
      cards.every(card => card.kana && card.romaji && card.meaning && card.verb && card.verbRomaji && card.verbMeaning),
      cards
        .filter(card => !(card.kana && card.romaji && card.meaning && card.verb && card.verbRomaji && card.verbMeaning))
        .map(card => card.id)
        .join(',')
    );

    ok(
      'VO4 pola japońskie nie zawierają łaciny',
      items.every(item => kanaOnly.test(item.kana)) && cards.every(card => kanaOnly.test(card.verb)),
      items
        .filter(item => !kanaOnly.test(item.kana))
        .map(item => item.id)
        .join(',')
    );

    const romaji = [];
    for (const item of items) {
      romaji.push(item.romaji, item.verbRomaji, item.altRomaji);
      for (const answer of item.answers || []) romaji.push(answer[1]);
      for (const variant of item.variants || []) romaji.push(variant[1]);
    }
    const filled = romaji.filter(Boolean);
    ok(
      'VO5 romaji jest wszędzie i bez makronów',
      filled.length >= 20 && filled.every(text => !/[āīūēō]/.test(text)),
      filled.filter(text => /[āīūēō]/.test(text)).join(' | ')
    );

    ok(
      'VO6 karty mają unikalne kana',
      new Set(cards.map(card => card.kana)).size === cards.length,
      String(cards.length)
    );

    ok(
      'VO7 wzorce mają odpowiedzi i warianty, w tym polski wzór odpowiedzi',
      patterns.every(pattern => pattern.answers && pattern.answers.length === 2) &&
        patterns[0].variants.length === 3 &&
        patterns[1].answers.some(answer => answer[1].includes('poorandogo')),
      patterns.map(pattern => pattern.id + ':' + pattern.answers.length).join(' ')
    );

    /*
       Karty czasowników są wyprowadzane, nie wpisane drugi raz. Test pilnuje
       właśnie tego: 20 kart, stabilne id `<id>-verb`, unikalna kana i pola
       przepisane z karty wyrażenia. Dopisanie czasownika do tabeli bez
       uzupełnienia pól wyrażenia złamie VO10, a nie tylko UI.
    */
    ok(
      'VO8 czasowniki powstają z poleceń, a dwa mają własny wpis',
      VOCAB_VERB_ITEMS.length === 22 &&
        VOCAB_VERB_ITEMS.filter(item => item.source).length === 20 &&
        VOCAB_VERB_ITEMS.filter(item => !item.source).length === 2 &&
        VOCAB_VERB_ITEMS.filter(item => item.source).every(
          item => item.type === 'verb' && item.id.endsWith('-verb') && item.source === item.id.replace('-verb', '')
        ),
      VOCAB_VERB_ITEMS.length + ' czasowników'
    );

    ok(
      'VO9 wszystkie 128 kart nauki mają unikalną kana',
      VOCAB_LEARN_ITEMS.length === 128 &&
        new Set(VOCAB_LEARN_ITEMS.map(item => item.kana)).size === VOCAB_LEARN_ITEMS.length,
      new Set(VOCAB_LEARN_ITEMS.map(item => item.kana)).size + '/' + VOCAB_LEARN_ITEMS.length
    );

    ok(
      'VO10 czasownik powtarza formę, romaji i znaczenie z karty wyrażenia',
      VOCAB_CARDS.every(card => {
        const verb = VOCAB_VERB_ITEMS.find(entry => entry.source === card.id);
        return (
          !!verb &&
          verb.kana === card.verb &&
          verb.romaji === card.verbRomaji &&
          verb.meaning === card.verbMeaning &&
          kanaOnly.test(verb.kana)
        );
      }),
      VOCAB_CARDS.filter(card => !VOCAB_VERB_ITEMS.some(entry => entry.source === card.id))
        .map(card => card.id)
        .join(',')
    );

    ok(
      'VO11 vocabCard przyjmuje każdy typ materiału, a nieznany identyfikator odrzuca',
      vocabCard('v01-verb')?.type === 'verb' &&
        vocabCard('v21')?.type === 'pattern' &&
        vocabCard('n01')?.type === 'word' &&
        vocabCard('a01')?.type === 'adjective' &&
        vocabCard('p01')?.type === 'phrase' &&
        vocabCard('v99') === null,
      String(vocabCard('a01')?.type)
    );

    /*
       Kategorie tematyczne: identyfikatory muszą pochodzić z zamkniętej
       taksonomii, a podział ma być pełny — suma kategorii i koszyka
       „bez kategorii" zawsze daje wielkość zakresu.
    */
    const categorised = VOCAB_LEARN_ITEMS.filter(item => item.category);
    ok(
      'VO12 każda kategoria pochodzi z taksonomii',
      categorised.length > 0 &&
        categorised.every(item => isKnownCategory(item.category)) &&
        categorised.every(item => item.category !== CATEGORY_NONE),
      categorised
        .filter(item => !isKnownCategory(item.category))
        .map(item => item.id + ':' + item.category)
        .join(',')
    );

    ok(
      'VO13 kategoria jest tylko tematem rzeczownika i zwrotu',
      categorised.every(item => item.type === 'word' || item.type === 'phrase') &&
        VOCAB_CARDS.every(card => !card.category) &&
        VOCAB_VERB_ITEMS.every(verb => !verb.category) &&
        VOCAB_ADJECTIVES.every(adj => !adj.category),
      categorised.map(item => item.id + ':' + item.type).join(',')
    );

    const themeCounts = categoriesIn(VOCAB_LEARN_ITEMS);
    const themedTotal = themeCounts
      .filter(category => category.id !== CATEGORY_NONE)
      .reduce((sum, category) => sum + category.count, 0);
    const noneTotal = themeCounts.find(category => category.id === CATEGORY_NONE)?.count || 0;
    ok(
      'VO14 podział na kategorie jest pełny i zgodny z tabelą',
      themedTotal + noneTotal === VOCAB_LEARN_ITEMS.length &&
        themedTotal === categorised.length &&
        themeCounts.filter(category => category.id !== CATEGORY_NONE).length >= 2,
      themeCounts.map(category => category.id + ':' + category.count).join(' ')
    );

    ok(
      'VO15 filtr kategorii zwęża zakres, a suma kategorii daje jego wielkość',
      vocabPool('words', 'school').length === 16 &&
        vocabPool('words', 'people').length === 4 &&
        vocabPool('words', CATEGORY_NONE).length === 1 &&
        vocabPool('words').length === 64 &&
        vocabPool('words', 'school').every(item => item.category === 'school'),
      ['school', 'people', CATEGORY_NONE].map(id => id + '=' + vocabPool('words', id).length).join(' ')
    );

    const adjCard = vocabCard('a01');
    const adjOpts = vocabOptions(adjCard, 'meaning-kana');
    ok(
      'VO16 opcje przymiotnika w quizie to wyłącznie inne przymiotniki',
      adjOpts.length === 4 &&
        adjOpts.includes(adjCard.kana) &&
        adjOpts.every(kana => VOCAB_ADJECTIVES.some(adj => adj.kana === kana)),
      adjOpts.join(' | ')
    );

    const l1Words = vocabPool('words', CATEGORY_ALL, '1ka');
    const l2Words = vocabPool('words', CATEGORY_ALL, '2ka');
    const l2Adj = vocabPool('adjectives', CATEGORY_ALL, '2ka');
    ok(
      'VO17 filtr lekcji poprawnie izoluje zasoby 1か i 2か',
      l1Words.length === 32 &&
        l2Words.length === 26 &&
        l2Adj.length === 14 &&
        l1Words.every(item => item.lesson === '1ka') &&
        l2Words.every(item => item.lesson === '2ka'),
      'L1=' + l1Words.length + ' L2=' + l2Words.length + ' Adj=' + l2Adj.length
    );
  } catch (e) {
    ok('dane słownictwa', false, e.message);
  }

  /* T19 list/detail (nowe aserty) */
  try {
    state.vocab = null;
    state.screen = 'vocab';
    renderNav();
    refreshChrome();
    vocabTopicNav.view = 'topics';
    renderVocab();
    vocabTopicNav.scope = 'all';
    ok(
      'T19 list renders themed and unthemed cards',
      document.querySelectorAll('.vocab-topics-card').length >= 3 &&
        [...document.querySelectorAll('.vocab-topics-card .vocab-topics-label')].some(
          el => el.textContent === 'Bez kategorii'
        ),
      'cards=' + document.querySelectorAll('.vocab-topics-card').length
    );
    vocabTopicNav.topic = 'school';
    vocabTopicNav.view = 'detail';
    renderVocabTopics();
    ok(
      'T19 detail shows items',
      document.querySelectorAll('.vocab-item-row').length > 0,
      'rows=' + document.querySelectorAll('.vocab-item-row').length
    );
    vocabTopicNav.topic = null;
    vocabTopicNav.view = 'topics';
    vocabTopicNav.scope = 'words';
    renderVocabTopics();
    ok(
      'T19 topic folder follows selected scope',
      document.querySelectorAll('.vocab-topics-card').length === 11 &&
        document.querySelector('.vocab-lead').textContent.includes('Rzeczowniki') &&
        vocabTopicNav.scope === 'words',
      'cards=' + document.querySelectorAll('.vocab-topics-card').length
    );
    ok(
      'T19 topic folder renders scope pills',
      document.querySelectorAll('[data-vocab-topic-scope]').length === 6 &&
        document.querySelector('[data-vocab-topic-scope="words"]').classList.contains('active'),
      'pills=' + document.querySelectorAll('[data-vocab-topic-scope]').length
    );
    document.querySelector('[data-vocab-topic-scope="all"]').click();
    ok(
      'T19 topic folder scope pills update scope and cards',
      vocabTopicNav.scope === 'all' && document.querySelectorAll('.vocab-topics-card').length >= 3,
      'scope=' + vocabTopicNav.scope + ' cards=' + document.querySelectorAll('.vocab-topics-card').length
    );
    vocabTopicNav.topic = 'school';
    vocabTopicNav.view = 'detail';
    renderVocabTopics();
    ok(
      'T19 detail view title matches category and has back action',
      screenTitle() === 'Szkoła' && !!document.querySelector('[data-vocab-topics-back]'),
      'title=' + screenTitle()
    );
    document.querySelector('[data-vocab-topics-back]').click();
    ok(
      'T19 detail back button returns to topics folder',
      vocabTopicNav.view === 'topics' && !vocabTopicNav.topic && screenTitle() === 'Tematy',
      'view=' + vocabTopicNav.view
    );
    document.querySelector('[data-nav="vocab"]').click();
    ok(
      'T19 vocabulary nav returns to setup from topics',
      vocabTopicNav.view === 'setup' && !vocabTopicNav.topic && !state.vocab && !!document.getElementById('vocabStart'),
      'screen=' + state.screen
    );
    const schoolIds = vocabPool('all', 'school').map(i => i.id);
    startVocabSession({ ids: schoolIds });
    ok(
      'T19 session starts from topic',
      state.vocab && state.vocab.order.length === schoolIds.length,
      'order=' + (state.vocab ? state.vocab.order.length : 0) + ' expected=' + schoolIds.length
    );
    ok('T19 home exit guard is available to top bar', typeof confirmVocabExit === 'function');
  } catch (e) {
    ok('T19 list/detail', false, e.message);
  }

  /* =====================================================
     SŁOWNICTWO (T19) — magazyn postępu
     ===================================================== */
  try {
    localStorage.removeItem(VOCAB_KEY);
    vocab = loadVocab();

    ok(
      'V1 pusty magazyn startuje bez kart',
      vocab.version === VOCAB_VERSION && Object.keys(vocab.cards).length === 0,
      JSON.stringify(vocab)
    );

    ok(
      'V2 poprawna odpowiedź tworzy rekord karty',
      recordVocabAnswer('v01', true) === true &&
        vocabStat('v01').seen === 1 &&
        vocabStat('v01').correct === 1 &&
        vocabStat('v01').wrong === 0,
      JSON.stringify(vocab.cards.v01)
    );

    recordVocabAnswer('v01', false);
    ok(
      'V3 błędna odpowiedź liczy się osobno',
      vocabStat('v01').seen === 2 && vocabStat('v01').correct === 1 && vocabStat('v01').wrong === 1,
      JSON.stringify(vocab.cards.v01)
    );

    ok(
      'V4 nieznana karta nie tworzy rekordu, a wzorzec jest kartą nauki',
      recordVocabAnswer('v99', true) === false &&
        recordVocabAnswer('v21', true) === true &&
        !vocab.cards.v99 &&
        vocabStat('v21').seen === 1,
      Object.keys(vocab.cards).join(',')
    );

    for (let i = 0; i < 8; i++) recordVocabAnswer('v02', true);
    ok(
      'V5 historia odpowiedzi jest przycięta do szóstki',
      vocab.cards.v02.recent.length === VOCAB_MAX_RECENT && vocab.cards.v02.seen === 8,
      'recent=' + vocab.cards.v02.recent.length + ' seen=' + vocab.cards.v02.seen
    );

    vocab = loadVocab();
    ok(
      'V6 zapis przeżywa ponowne wczytanie',
      vocabStat('v01').seen === 2 && vocabStat('v02').seen === 8,
      Object.keys(vocab.cards).join(',')
    );

    localStorage.setItem(VOCAB_KEY, '{nie json');
    vocab = loadVocab();
    ok('V7 uszkodzony zapis daje pusty magazyn', Object.keys(vocab.cards).length === 0, JSON.stringify(vocab));

    localStorage.setItem(VOCAB_KEY, JSON.stringify({ version: VOCAB_VERSION + 1, cards: { v01: { seen: 4 } } }));
    vocab = loadVocab();
    ok(
      'V8 magazyn w obcej wersji nie jest czytany po cichu',
      Object.keys(vocab.cards).length === 0 && vocab.version === VOCAB_VERSION,
      JSON.stringify(vocab)
    );

    localStorage.setItem(VOCAB_KEY, JSON.stringify({ version: VOCAB_VERSION, cards: { v03: { seen: 3 } } }));
    vocab = loadVocab();
    const recovered = recordVocabAnswer('v03', true);
    ok(
      'V9 niepełny rekord jest zastępowany, a nie wywala zapisu',
      recovered === true && vocabStat('v03').seen === 1 && vocabStat('v03').recent.length === 1,
      JSON.stringify(vocab.cards.v03)
    );

    const dailyBefore = localStorage.getItem(DAILY_STATS_KEY);
    recordVocabAnswer('v01', true);
    recordVocabAnswer('v01', false);
    ok(
      'V10 odpowiedzi słownictwa nie ruszają historii dziennej',
      localStorage.getItem(DAILY_STATS_KEY) === dailyBefore,
      'przed=' + String(dailyBefore) + ' po=' + String(localStorage.getItem(DAILY_STATS_KEY))
    );

    resetProgressData();
    ok(
      'V11 „Zresetuj postęp" czyści słownictwo i zostawia klucz na liście',
      Object.keys(vocab.cards).length === 0 && appStorageKeys().indexOf(VOCAB_KEY) >= 0,
      'karty=' + Object.keys(vocab.cards).length
    );

    setScreen('settings');
    const resetMessages = [];
    const realResetConfirm = window.confirm;
    window.confirm = message => {
      resetMessages.push(String(message));
      return false; // nic nie kasujemy — sprawdzamy tylko treść
    };
    try {
      const resetBtn = document.getElementById('resetProgressBtn');
      if (resetBtn) resetBtn.click();
    } finally {
      window.confirm = realResetConfirm;
    }
    ok(
      'V12 komunikat resetu postępu mówi też o słownictwie',
      resetMessages.length === 1 && /słownictw/i.test(resetMessages[0]),
      resetMessages[0] || 'brak komunikatu'
    );
  } catch (e) {
    ok('magazyn słownictwa', false, e.message);
  }

  /* =====================================================
     20. TRYB „OBA" — HIRAGANA + KATAKANA
     -----------------------------------------------------
     `both` nie jest trzecim zestawem danych: to ten sam `scriptData`
     czytany dwa razy. Dlatego tutaj pilnujemy trzech rzeczy:
       • tożsamości grup (bazowe id dla egzaminu, unikalny key dla stanu),
       • tego, że postęp zostaje per znak (あ i ア to osobne rekordy),
       • rozstrzygania zduplikowanych czytanek (ji/zu) w pytaniach.
     ===================================================== */
  try {
    ok('M1 SCRIPT_VALUES zawiera both', SCRIPT_VALUES.indexOf('both') >= 0, SCRIPT_VALUES.join(','));
    ok('M2 domyślny skrypt to both', SETTINGS_DEFAULTS.script === 'both', SETTINGS_DEFAULTS.script);

    setScript('both');
    const groups = getGroups();
    const all = getAll();

    ok('M3 both daje 52 grupy', groups.length === 52, String(groups.length));
    ok(
      'M4 klucze grup są unikalne',
      new Set(groups.map(group => group.key)).size === groups.length,
      String(new Set(groups.map(group => group.key)).size)
    );
    ok(
      'M5 klucze mają prefiks alfabetu',
      groups[0].key === 'h:a' && groups[groups.length - 1].key === 'k:yoon-p',
      groups[0].key + ' … ' + groups[groups.length - 1].key
    );
    ok(
      'M6 both daje 208 unikalnych znaków',
      all.length === 208 && new Set(all.map(character => character.kana)).size === 208,
      String(all.length)
    );
    ok(
      'M7 あ i ア mają wspólne bazowe id grupy',
      item('あ').groupId === 'a' && item('ア').groupId === 'a',
      item('あ').groupId + '/' + item('ア').groupId
    );
    ok(
      'M8 あ i ア należą do różnych skryptów',
      item('あ').script === 'hiragana' && item('ア').script === 'katakana',
      item('あ').script + '/' + item('ア').script
    );
    ok(
      'M9 kategoria wynika z bazowego id, nie z prefiksu',
      learnCategoryOf('h:dakuten-k') === 'dakuten' &&
        learnCategoryOf('k:yoon-p') === 'yoon' &&
        learnCategoryOf('h:a') === 'basic',
      learnCategoryOf('h:dakuten-k') + '/' + learnCategoryOf('k:yoon-p')
    );
    ok(
      'M10 opisy kresek obejmują oba alfabety',
      Object.keys(getStrokeText()).length === 208 && !!getStrokeText()['あ'] && !!getStrokeText()['ア'],
      String(Object.keys(getStrokeText()).length)
    );
    ok('M11 stan startowy w both należy do hiragany', state.group === 'h:a' && state.kana === 'あ', state.group);

    // egzamin: wybór rzędów jest wspólny, więc bazowe id obejmuje oba alfabety
    const savedExam = state.exam;
    state.exam = { groups: ['a'], kanaList: null };
    const scope = getSelectedExamCharacters().map(character => character.kana);
    state.exam = savedExam;
    ok(
      'M12 zakres „a" obejmuje oba alfabety',
      scope.length === 10 && scope.indexOf('あ') >= 0 && scope.indexOf('ア') >= 0,
      scope.join('')
    );

    // postęp: osobne rekordy dla あ i ア, bez migracji i bez scalania
    setProgress({}, 1);
    recordAnswer('あ', true, null, 'exam');
    recordAnswer('ア', false, null, 'exam');
    ok(
      'M13 postęp liczy あ i ア osobno',
      !!progress.chars['あ'] &&
        !!progress.chars['ア'] &&
        progress.chars['あ'].seen === 1 &&
        progress.chars['ア'].seen === 1 &&
        progress.chars['あ'] !== progress.chars['ア'],
      String(Object.keys(progress.chars).length)
    );
    clearProgress();

    /*
       Rozpraszacze testujemy na małej, zamkniętej puli, nie na losowym
       egzaminie. Przy 104 znakach losowanie mogłoby przypadkiem nie trafić
       w duplikat i asercja przechodziłaby także z błędem — a test, który
       przechodzi oba warianty, niczego nie pilnuje.
    */
    const readingPool = [item('じ'), item('ぢ'), item('ず'), item('づ')];
    const readingPicks = pickDistractors(item('じ'), 10, readingPool, false);
    const readingLabels = readingPicks.map(pick => pick.romaji);
    ok(
      'M14 rozpraszacze nie powtarzają czytanki',
      readingLabels.length > 0 &&
        readingLabels.indexOf('ji') < 0 &&
        new Set(readingLabels).size === readingLabels.length,
      readingLabels.join(',')
    );

    // tryb A: pytanie jest romaji, więc opcje muszą być z jednego alfabetu
    const scriptPool = [item('あ'), item('ア'), item('い'), item('イ')];
    const scriptPicks = pickDistractors(item('あ'), 10, scriptPool, false, { sameScript: true });
    ok(
      'M15 tryb A w both losuje opcje z jednego alfabetu',
      scriptPicks.length > 0 && scriptPicks.every(pick => pick.script === 'hiragana'),
      scriptPicks.map(pick => pick.kana).join('')
    );

    /*
       Kontrola M15: ta sama pula, ale bez ograniczenia skryptu, przepuszcza
       katakanę. Pula jest wyłącznie katakańska, więc wynik nie zależy od
       losowania ani od tego, który wariant czytanki wygra wagą.
    */
    const katakanaPool = [item('ア'), item('イ'), item('ウ')];
    const unconstrained = pickDistractors(item('あ'), 10, katakanaPool, false);
    const constrained = pickDistractors(item('あ'), 10, katakanaPool, false, { sameScript: true });
    ok(
      'M16 bez ograniczenia skryptu opcje się mieszają, z ograniczeniem nie',
      unconstrained.length > 0 && unconstrained.every(pick => pick.script === 'katakana') && constrained.length === 0,
      unconstrained.map(pick => pick.kana).join('') + ' / ' + constrained.length
    );

    // tryb C (wpisz kana): ぢ jest tą samą odpowiedzią co じ, ず już nie
    async function typeKana(typed) {
      startExam([], {
        kanaList: ['じ'],
        options: 4,
        limit: 0,
        outside: false,
        modes: { romajiKanaPick: false, kanaRomajiPick: false, romajiKanaType: true, kanaRomajiType: false },
        timer: 0
      });
      await new Promise(r => setTimeout(r, 220));
      state.exam.currentMode = 'romaji-kana-type';
      state.exam.current = item('じ');
      renderExamQuestion(state.exam.current);
      await new Promise(r => setTimeout(r, 80));
      document.getElementById('kanaInput').value = typed;
      document.getElementById('checkKana').click();
      await new Promise(r => setTimeout(r, 80));
      const score = state.exam.score;
      stopExam();
      return score;
    }

    ok('M17 tryb C akceptuje ぢ za じ (ta sama czytanka)', (await typeKana('ぢ')) === 1);
    ok('M18 tryb C odrzuca ず za じ (inna czytanka)', (await typeKana('ず')) === 0);

    // tryb D (wpisz romaji): ぢ przyjmuje „ji" i „di"
    async function typeRomaji(kana, typed) {
      startExam([], {
        kanaList: [kana],
        options: 4,
        limit: 0,
        outside: false,
        modes: { romajiKanaPick: false, kanaRomajiPick: false, romajiKanaType: false, kanaRomajiType: true },
        timer: 0
      });
      await new Promise(r => setTimeout(r, 220));
      state.exam.currentMode = 'kana-romaji-type';
      state.exam.current = item(kana);
      renderExamQuestion(state.exam.current);
      await new Promise(r => setTimeout(r, 80));
      document.getElementById('romajiInput').value = typed;
      document.getElementById('checkRomaji').click();
      await new Promise(r => setTimeout(r, 80));
      const score = state.exam.score;
      stopExam();
      return score;
    }

    ok('M19 tryb D akceptuje ji dla ぢ', (await typeRomaji('ぢ', 'ji')) === 1);
    ok('M20 tryb D akceptuje di dla ぢ', (await typeRomaji('ぢ', 'di')) === 1);
    ok('M21 tryb D akceptuje du dla づ', (await typeRomaji('づ', 'du')) === 1);
    ok('M22 tryb D odrzuca zu dla ぢ', (await typeRomaji('ぢ', 'zu')) === 0);

    // menu i ustawienia: trzy stany skryptu, nie dwa
    setScript('both');
    setScreen('menu');
    await new Promise(r => setTimeout(r, 250));
    ok(
      'M23 menu ma trzy stany skryptu',
      document.querySelectorAll('.script-switcher .script-btn').length === 3,
      String(document.querySelectorAll('.script-switcher .script-btn').length)
    );
    ok(
      'M23a kolejność skryptów: Hiragana, Oba, Katakana',
      [...document.querySelectorAll('.script-switcher .script-btn')].map(button => button.dataset.script).join(',') ===
        'hiragana,both,katakana',
      [...document.querySelectorAll('.script-switcher .script-btn')].map(button => button.dataset.script).join(',')
    );
    const scriptGroup = document.querySelector('.script-switcher');
    const scriptButtons = [...document.querySelectorAll('.script-switcher .script-btn')];
    ok(
      'M23b wybór skryptu jest dostępny i ma stan aria-pressed',
      scriptGroup.getAttribute('role') === 'group' &&
        scriptGroup.getAttribute('aria-label') === 'Skrypt' &&
        scriptButtons.every(
          button => button.getAttribute('aria-pressed') === String(button.classList.contains('active'))
        ) &&
        scriptButtons.filter(button => button.getAttribute('aria-pressed') === 'true').length === 1,
      scriptButtons.map(button => button.dataset.script + '=' + button.getAttribute('aria-pressed')).join(',')
    );

    setScreen('settings');
    await new Promise(r => setTimeout(r, 200));
    ok('M24 Ustawienia mają wybór „Oba"', !!document.querySelector('[data-script-set="both"]'), '');
    ok(
      'M24a Ustawienia mają tę samą kolejność skryptów',
      [...document.querySelectorAll('[data-script-set]')].map(button => button.dataset.scriptSet).join(',') ===
        'hiragana,both,katakana',
      [...document.querySelectorAll('[data-script-set]')].map(button => button.dataset.scriptSet).join(',')
    );

    setScript('hiragana');
    clearProgress();
    setScreen('menu');
  } catch (e) {
    ok('tryb both', false, e.message);
  }

  /* =====================================================
     CZYSZCZENIE DANYCH — komplet kluczy i komunikat
     ===================================================== */
  try {
    const keys = appStorageKeys();
    const expected = [
      SETTINGS_STORE_KEY,
      SETTINGS_KEY,
      PROGRESS_KEY,
      DAILY_STATS_KEY,
      VOCAB_KEY,
      KANJI_KEY,
      GRAMMAR_KEY,
      LEGACY_THEME_KEY,
      LEGACY_MUTED_KEY
    ];
    ok(
      'CLR1 „Wyczyść wszystkie dane" obejmuje wszystkie dziewięć kluczy aplikacji',
      keys.length === 9 && expected.every(key => keys.indexOf(key) >= 0),
      keys.join(', ')
    );

    setScreen('settings');
    const messages = [];
    const realConfirm = window.confirm;
    window.confirm = message => {
      messages.push(String(message));
      return false; // nic nie kasujemy — sprawdzamy tylko treść
    };
    try {
      const clearAll = document.getElementById('clearAllDataBtn');
      if (clearAll) clearAll.click();
    } finally {
      window.confirm = realConfirm;
    }

    ok(
      'CLR2 komunikat wspomina historię nauki, nie tylko postępy',
      messages.length === 1 && /histori/i.test(messages[0]) && /postępy/i.test(messages[0]),
      messages[0] || 'brak komunikatu'
    );
  } catch (e) {
    ok('czyszczenie danych', false, e.message);
  }

  /* =====================================================
     SHELL — nawigacja, top bar, focus mode
     ===================================================== */
  try {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const nav = document.getElementById('appNav');
    const navButtons = () => [...document.querySelectorAll('#appNav [data-nav]')];
    const navButton = id => navButtons().find(button => button.dataset.nav === id);
    const navHidden = () =>
      document.body.classList.contains('focus-mode') &&
      document.getElementById('appNav').getAttribute('aria-hidden') === 'true';
    const navShown = () =>
      !document.body.classList.contains('focus-mode') &&
      document.getElementById('appNav').getAttribute('aria-hidden') === null;
    const title = () => document.getElementById('appTitle').textContent;

    ok('NAV1 nawigacja istnieje poza #app', !!nav && !document.getElementById('app').contains(nav));
    eq('NAV2 pięć pozycji nawigacji', navButtons().length, 5);
    deepEq(
      'NAV3 etykiety modułów',
      navButtons().map(button => button.querySelector('.app-nav-label').textContent),
      ['Pulpit', 'Kana', 'Słownictwo', 'Kanji', 'Gramatyka']
    );
    ok(
      'NAV4 ikony to inline SVG, nie emoji',
      navButtons().every(button => !!button.querySelector('svg.app-nav-icon')) &&
        !/\p{Extended_Pictographic}/u.test(nav.textContent),
      nav.textContent.trim()
    );

    /* Pulpit (Dashboard) — dedykowane menu główne */
    setScreen('dashboard');
    await sleep(30);
    eq('DASH1 pulpit jako ekran startowy', state.screen, 'dashboard');
    eq('DASH2 tytuł pulpitu', title(), 'Pulpit');
    eq('DASH3 aktywna pozycja nawigacji dla pulpitu', navButton('dashboard').getAttribute('aria-current'), 'page');
    ok('DASH4 powrót ukryty na pulpicie', homeBtn.classList.contains('is-hidden'));
    ok('DASH5 obecne karty czterech modułów', document.querySelectorAll('.dashboard-module-card').length === 4);

    setScreen('menu');
    await sleep(30);
    eq('NAV5 start na hubie kany', state.screen, 'menu');
    eq('NAV6 tytuł huba', title(), 'Kana');
    eq('NAV7 aktywna pozycja na hubie', navButton('kana').getAttribute('aria-current'), 'page');
    ok('NAV8 powrót widoczny na hubie kany', !homeBtn.classList.contains('is-hidden'));
    ok('NAV8a obecny przycisk powrotu do pulpitu na hubie kany', !!document.getElementById('btnKanaBackToDashboard'));
    homeBtn.click();
    await sleep(30);
    eq('NAV8b kliknięcie powrotu z huba kany prowadzi do pulpitu', state.screen, 'dashboard');
    setScreen('menu');
    await sleep(30);

    /* Słownictwo — wejście przez nawigację i zachowanie magazynu. */
    const cardsBefore = JSON.stringify(vocab.cards);
    state.vocab = null;
    navButton('vocab').click();
    await sleep(30);
    eq('NAV9 klik prowadzi do słownictwa', state.screen, 'vocab');
    eq('NAV10 tytuł słownictwa', title(), 'Słownictwo');
    eq('NAV11 aktywna pozycja słownictwa', navButton('vocab').getAttribute('aria-current'), 'page');
    ok('NAV12 konfiguracja fiszek ma nawigację', navShown());
    ok('NAV13 powrót widoczny poza hubem', !homeBtn.classList.contains('is-hidden'));

    navButton('kana').click();
    await sleep(30);
    eq('NAV14 powrót do kany przez nawigację', state.screen, 'menu');
    navButton('vocab').click();
    await sleep(30);
    ok(
      'NAV15 vocab.cards bez zmian po Kana → Słownictwo',
      JSON.stringify(vocab.cards) === cardsBefore,
      JSON.stringify(vocab.cards)
    );

    /* Kanji — wejście przez nawigację */
    navButton('kanji').click();
    await sleep(30);
    eq('NAV15a klik prowadzi do kanji', state.screen, 'kanji');
    eq('NAV15b tytuł huba kanji', title(), 'Kanji');
    eq('NAV15c aktywna pozycja kanji', navButton('kanji').getAttribute('aria-current'), 'page');
    ok('NAV15d powrót widoczny poza hubem kany', !homeBtn.classList.contains('is-hidden'));

    /* Gramatyka — wejście przez nawigację */
    navButton('grammar').click();
    await sleep(30);
    eq('NAV15e klik prowadzi do gramatyki', state.screen, 'grammar');
    eq('NAV15f tytuł huba gramatyki', title(), 'Gramatyka');
    eq('NAV15g aktywna pozycja gramatyki', navButton('grammar').getAttribute('aria-current'), 'page');
    ok('NAV15h powrót widoczny poza hubem kany', !homeBtn.classList.contains('is-hidden'));

    ok('NAV16 nawigacja nie zawiera pozycji Ustawienia', !navButton('settings'));
    setScreen('settings');
    await sleep(30);
    eq('NAV17 tytuł ustawień', title(), 'Ustawienia');
    ok(
      'NAV18 ustawienia nie mają aktywnej pozycji w nawigacji modułów',
      navButtons().every(button => button.getAttribute('aria-current') !== 'page')
    );

    setScreen('menu');
    await sleep(30);
    document.getElementById('settingsToggle').click();
    await sleep(30);
    eq('NAV18a gear w górnym pasku prowadzi do ustawień', state.screen, 'settings');
    setScreen('learn');
    await sleep(60);
    ok('NAV18b gear jest ukryty w trybie nauki', document.getElementById('settingsToggle').hidden);
    setScreen('menu');
    await sleep(30);
    ok('NAV18c gear wraca po wyjściu z sesji', !document.getElementById('settingsToggle').hidden);

    /* Egzamin: konfiguracja ≠ sesja. */
    setScreen('exam');
    await sleep(30);
    ok('NAV19 konfiguracja egzaminu ma nawigację', navShown(), 'exam=' + !!state.exam);

    const dailyBefore = localStorage.getItem(DAILY_STATS_KEY);
    try {
      startExam(['a'], { options: 4, limit: 1, outside: false, timer: 0, modes: { romajiKanaPick: true } });
      await sleep(30);
      ok('NAV20 trwający egzamin ukrywa nawigację', isFocusMode() && navHidden());
      ok('NAV21 powrót zostaje w sesji', !homeBtn.classList.contains('is-hidden'));
    } finally {
      stopExam();
      if (dailyBefore === null) localStorage.removeItem(DAILY_STATS_KEY);
      else localStorage.setItem(DAILY_STATS_KEY, dailyBefore);
      setScreen('menu');
      await sleep(30);
    }

    /* Fiszki: konfiguracja ≠ sesja. */
    state.vocab = null;
    setScreen('vocab');
    await sleep(30);
    ok('NAV22 konfiguracja fiszek ma nawigację', navShown());

    startVocabSession();
    await sleep(30);
    ok('NAV23 sesja fiszek ukrywa nawigację', isFocusMode() && navHidden());
    eq('NAV24 tytuł sesji fiszek', title(), 'Fiszki');
    state.vocab = null;
    setScreen('vocab');
    await sleep(30);

    /* Nauka: zawsze pełny focus. */
    setScreen('learn');
    await sleep(60);
    ok('NAV25 nauka ukrywa nawigację', isFocusMode() && navHidden());
    eq('NAV26 tytuł nauki', title(), 'Nauka');
    setScreen('menu');
    await sleep(30);
    ok('NAV27 powrót do huba przywraca nawigację', navShown());
  } catch (e) {
    ok('shell — nawigacja', false, e.message);
  }

  /* =====================================================
     SHELL — układ: brak overflow, pasek vs szyna
     ===================================================== */
  try {
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    const holder = document.createElement('div');
    holder.style.cssText =
      'position:fixed;left:0;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;';
    const frame = document.createElement('iframe');
    frame.style.cssText = 'border:0;display:block;width:320px;height:900px;';
    frame.src = 'index.html';
    holder.appendChild(frame);
    document.body.appendChild(holder);
    await new Promise(resolve => frame.addEventListener('load', resolve, { once: true }));
    await sleep(150);

    const win = frame.contentWindow;
    const doc = frame.contentDocument;

    try {
      for (const width of [320, 390, 600, 768, 1024, 1280]) {
        frame.style.width = width + 'px';
        await sleep(120);

        for (const screen of ['dashboard', 'menu', 'vocab', 'kanji', 'settings']) {
          win.setScreen(screen);
          await sleep(40);
          const overflow = doc.documentElement.scrollWidth - doc.documentElement.clientWidth;
          ok('LAYOUT nawigacja: ' + screen + ' ' + width + 'px bez overflow', overflow <= 0, 'overflow=' + overflow);
        }

        if (width === 320) {
          win.setScreen('menu');
          await sleep(40);
          const tops = [...doc.querySelectorAll('.script-switcher .script-btn')].map(button =>
            Math.round(button.getBoundingClientRect().top)
          );
          ok('LAYOUT script switcher 320px mieści się w jednym rzędzie', new Set(tops).size === 1, tops.join(','));
        }

        const nav = doc.getElementById('appNav');
        const style = win.getComputedStyle(nav);
        const rect = nav.getBoundingClientRect();

        if (width >= 1024) {
          /* Krótki hub musi mieścić się w ekranie — `height: 100vh`
             na szynie rozpychało siatkę i wypychało dół treści poza
             dolną krawędź. */
          win.setScreen('menu');
          await sleep(40);
          const scroll = doc.documentElement.scrollHeight - doc.documentElement.clientHeight;
          ok('LAYOUT hub bez przewijania ' + width + 'px', scroll <= 0, 'scroll=' + scroll);
          ok(
            'LAYOUT szyna ' + width + 'px ma 232px',
            Math.abs(rect.width - 232) <= 1 && style.position === 'sticky',
            rect.width.toFixed(1) + 'px ' + style.position
          );
        } else {
          ok(
            'LAYOUT dolny pasek ' + width + 'px',
            style.position === 'fixed' && Math.abs(rect.bottom - doc.documentElement.clientHeight) <= 1,
            style.position + ' bottom=' + rect.bottom.toFixed(1)
          );
          const padding = parseFloat(win.getComputedStyle(doc.querySelector('.app-shell')).paddingBottom);
          ok('LAYOUT treść nie chowa się pod paskiem ' + width + 'px', padding >= 56, 'padding-bottom=' + padding);
        }
      }

      /* Logo w szynie korzysta z przezroczystego pliku i zachowuje slot 34 px. */
      const logoBox = doc.querySelector('.app-nav-logo');
      const logoStyle = win.getComputedStyle(logoBox);
      const logoRect = logoBox.getBoundingClientRect();
      ok(
        'LAYOUT logo w szynie: logo.png, 34×34',
        /logo\.png/.test(logoStyle.backgroundImage) &&
          Math.round(logoRect.width) === 34 &&
          Math.round(logoRect.height) === 34,
        logoStyle.backgroundImage + ' ' + logoRect.width.toFixed(1) + '×' + logoRect.height.toFixed(1)
      );

      /* Focus mode jest zależny od stanu, nie od szerokości — sprawdzamy
         realne `display` na ekranie nauki, bo tests.html nie ładuje CSS. */
      frame.style.width = '390px';
      await sleep(120);
      win.setScreen('learn');
      await sleep(60);
      ok(
        'LAYOUT nauka ukrywa nawigację',
        win.getComputedStyle(doc.getElementById('appNav')).display === 'none',
        win.getComputedStyle(doc.getElementById('appNav')).display
      );
      win.setScreen('menu');
      await sleep(60);
      ok(
        'LAYOUT hub przywraca nawigację',
        win.getComputedStyle(doc.getElementById('appNav')).display !== 'none',
        win.getComputedStyle(doc.getElementById('appNav')).display
      );
    } finally {
      holder.remove();
    }
  } catch (e) {
    ok('shell — układ', false, e.message);
  }

  /* =====================================================
     T18: KANJI — DANE, MAGAZYN I WIDOKI
     ===================================================== */
  try {
    ok(
      'KJ1 KANJI_ITEMS zawiera 204 znaki',
      Array.isArray(KANJI_ITEMS) && KANJI_ITEMS.length === 204,
      String(KANJI_ITEMS.length)
    );

    const kanjiIds = new Set(KANJI_ITEMS.map(k => k.id));
    eq('KJ2 unikalne ID znaków k001..k204', kanjiIds.size, 204);

    const kanjiChars = new Set(KANJI_ITEMS.map(k => k.kanji));
    eq('KJ3 unikalne glify kanji', kanjiChars.size, 204);

    const lessonsPresent = [
      'L01',
      'L02',
      'L03',
      'L04',
      'L05',
      'L06',
      'L07',
      'L08',
      'L09',
      'L10',
      'L11',
      'L12',
      'L13',
      'L14',
      'L15',
      'N5'
    ];
    ok(
      'KJ4 wszystkie 16 lekcji Shokyū Nihongo L01-L15 i N5 są obecne',
      lessonsPresent.every(l => KANJI_ITEMS.some(k => k.lesson === l))
    );

    ok(
      'KJ5 każdy znak ma poprawną liczbę kresek > 0',
      KANJI_ITEMS.every(k => Number.isInteger(k.strokes) && k.strokes > 0)
    );

    ok(
      'KJ6 każdy znak ma polskie znaczenie i tablice czytań',
      KANJI_ITEMS.every(
        k =>
          typeof k.meaning === 'string' && k.meaning.length > 0 && Array.isArray(k.onyomi) && Array.isArray(k.kunyomi)
      )
    );

    ok(
      'KJ7 KANJI_LESSON_WORDS zawiera 69 słówek z lekcji 1か i 2か',
      Array.isArray(KANJI_LESSON_WORDS) && KANJI_LESSON_WORDS.length === 69,
      String(KANJI_LESSON_WORDS.length)
    );

    // Testy magazynu hiragana-kanji
    const testChar = '人';
    const testItem = kanjiItem(testChar);
    ok('KJ8 kanjiItem znajduje znak po znaku lub ID', testItem && testItem.id === 'k001' && testItem.kanji === '人');

    // Czysty start
    localStorage.removeItem(KANJI_KEY);
    kanjiProgress = loadKanjiProgress();
    eq('KJ9 pusty magazyn kanji ma wersję 1', kanjiProgress.version, 1);
    eq('KJ10 początkowy stan znaku to new', kanjiStat(testChar).status, 'new');

    recordKanjiAnswer(testChar, true);
    const statAfter1 = kanjiStat(testChar);
    eq('KJ11 po poprawnej odpowiedzi seen=1, correct=1', statAfter1.seen, 1);
    eq('KJ12 correct=1', statAfter1.correct, 1);
    ok('KJ13 interwał SRS został ustawiony', statAfter1.interval >= 1);

    recordKanjiAnswer(testChar, false);
    const statAfter2 = kanjiStat(testChar);
    eq('KJ14 po błędnej odpowiedzi seen=2, wrong=1', statAfter2.seen, 2);
    eq('KJ15 wrong=1', statAfter2.wrong, 1);
    eq('KJ16 błędna odpowiedź resetuje interwał do 1', statAfter2.interval, 1);

    ok('KJ17 nieznany znak nie tworzy rekordu', recordKanjiAnswer('xyz999', true) === false);

    // Izolacja magazynów
    ok('KJ18 zapis kanji pod dedykowanym kluczem hiragana-kanji', localStorage.getItem(KANJI_KEY) !== null);

    // Lekcje L11-L15
    const l11_15 = ['L11', 'L12', 'L13', 'L14', 'L15'];
    ok(
      'KJ19 lekcje L11-L15 posiadają kompletną liczbę znaków',
      KANJI_ITEMS.filter(k => k.lesson === 'L11').length === 19 &&
        KANJI_ITEMS.filter(k => k.lesson === 'L12').length === 16 &&
        KANJI_ITEMS.filter(k => k.lesson === 'L13').length === 19 &&
        KANJI_ITEMS.filter(k => k.lesson === 'L14').length === 22 &&
        KANJI_ITEMS.filter(k => k.lesson === 'L15').length === 25,
      l11_15.map(l => l + '=' + KANJI_ITEMS.filter(k => k.lesson === l).length).join(' ')
    );

    ok(
      'KJ20 każdy nowy znak ma przykłady słówek z odczytaniem',
      KANJI_ITEMS.every(
        k =>
          Array.isArray(k.examples) && k.examples.length >= 2 && k.examples.every(e => e.word && e.reading && e.meaning)
      )
    );

    // Czyszczenie po teście
    localStorage.removeItem(KANJI_KEY);
    kanjiProgress = loadKanjiProgress();
  } catch (e) {
    ok('T18 kanji moduł', false, e.message);
  }

  /* =====================================================
     AU. JAPOŃSKA WYMOWA AUDIO (Google Translate TTS + Web Speech API)
     ===================================================== */
  try {
    ok('AU1 Audio.speak jest funkcją', typeof Audio.speak === 'function');
    ok('AU2 Audio.isSpeaking jest funkcją', typeof Audio.isSpeaking === 'function');
    ok('AU3 Audio.getTtsUrl jest funkcją', typeof Audio.getTtsUrl === 'function');
    ok('AU4 Audio.speakSystem jest funkcją', typeof Audio.speakSystem === 'function');

    // Test wyciszenia
    const prevMuted = Audio.muted;
    Audio.setMuted(true);
    ok('AU5 Audio.speak zwraca false gdy muted=true', Audio.speak('あ') === false);

    // Test generowania adresu URL Google Translate TTS (Opcja 1)
    const ttsUrl = Audio.getTtsUrl('ねこ');
    ok(
      'AU6 Audio.getTtsUrl generuje poprawny URL z parametrem tl=ja i zakodowanym tekstem',
      ttsUrl.includes('translate.google.com/translate_tts') &&
        ttsUrl.includes('tl=ja') &&
        ttsUrl.includes(encodeURIComponent('ねこ'))
    );

    // Test odtwarzania przez Audio (Google Translate TTS)
    let playedUrl = null;
    let audioPlayCalled = false;
    let audioPaused = false;
    const origAudio = window.Audio;

    function MockAudio(src) {
      playedUrl = src;
      this.src = src;
      this.paused = false;
      this.ended = false;
      this.play = function () {
        audioPlayCalled = true;
        return Promise.resolve();
      };
      this.pause = function () {
        audioPaused = true;
        this.paused = true;
      };
    }

    window.Audio = MockAudio;
    Audio.setMuted(false);
    const speakRes = Audio.speak('ねこ');
    ok('AU7 Audio.speak uruchamia odtwarzanie Google Translate TTS', speakRes === true && audioPlayCalled === true);
    ok(
      'AU8 Audio.speak tworzy instancję Audio ze wskazanym adresem TTS',
      playedUrl &&
        playedUrl.includes('translate.google.com/translate_tts') &&
        playedUrl.includes(encodeURIComponent('ねこ'))
    );
    ok('AU9 Audio.isSpeaking zwraca true w trakcie aktywnego odtwarzania audio', Audio.isSpeaking() === true);

    // Wyciszenie zatrzymuje audio
    Audio.setMuted(true);
    ok('AU10 Audio.setMuted(true) zatrzymuje trwające audio', audioPaused === true);
    ok('AU11 Audio.isSpeaking po wyciszeniu zwraca false', Audio.isSpeaking() === false);

    // Przywrócenie Audio
    window.Audio = origAudio;

    // Test fallbacku do Web Speech API (speakSystem oraz forceSystem)
    const ss = window.speechSynthesis;
    let spokenUtter = null;
    let cancelled = false;
    const origCancel = ss ? ss.cancel : null;
    const origSpeak = ss ? ss.speak : null;
    const origGetVoices = ss ? ss.getVoices : null;

    if (ss) {
      ss.cancel = function () {
        cancelled = true;
      };
      ss.speak = function (utter) {
        spokenUtter = utter;
      };
      ss.getVoices = function () {
        return [
          { lang: 'ja-JP', name: 'Kyoko' },
          { lang: 'en-US', name: 'Alex' }
        ];
      };
    }

    Audio.setMuted(false);
    cancelled = false;
    spokenUtter = null;
    const sysRes = Audio.speak('ねこ', { forceSystem: true });
    ok('AU12 Audio.speak z forceSystem zwraca true przy aktywnym speech', sysRes === true);
    ok('AU13 Audio.speak anulowało poprzednią mowę przed startem', cancelled === true);
    ok(
      'AU14 utterance ma język ja-JP i tekst ねこ',
      spokenUtter && spokenUtter.lang === 'ja-JP' && spokenUtter.text === 'ねこ'
    );
    ok('AU15 utterance ma właściwe tempo mowy 0.85', spokenUtter && Math.abs(spokenUtter.rate - 0.85) < 0.01);

    // Test automatycznego fallbacku przy odrzuceniu play() w Audio
    function ErrorAudio(src) {
      this.src = src;
      this.play = function () {
        return Promise.reject(new Error('Autoplay blocked'));
      };
    }
    window.Audio = ErrorAudio;
    cancelled = false;
    spokenUtter = null;
    Audio.setMuted(false);
    Audio.speak('いぬ');
    await Promise.resolve(); // oczekiwanie na microtask Promise.catch
    ok(
      'AU16 Audio.speak automatycznie przechodzi na Web Speech API po błędzie odtwarzacza',
      spokenUtter && spokenUtter.text === 'いぬ'
    );
    window.Audio = origAudio;

    // Wyciszenie anuluje mowę syntetyzatora
    cancelled = false;
    Audio.setMuted(true);
    ok('AU17 Audio.setMuted(true) anuluje trwającą syntezę Web Speech', cancelled === true);

    // Przywrócenie stanu Audio i speechSynthesis
    Audio.setMuted(prevMuted);
    if (ss) {
      ss.cancel = origCancel;
      ss.speak = origSpeak;
      ss.getVoices = origGetVoices;
    }

    // Test przycisku #speakKana w widoku nauki
    setScreen('learn');
    const speakKanaBtn = document.getElementById('speakKana');
    ok(
      'AU18 #speakKana istnieje w widoku nauki kana',
      !!speakKanaBtn && speakKanaBtn.getAttribute('data-speak') === state.kana
    );

    // Test obecności przycisków [data-speak] w widoku detali Kanji
    setScreen('kanji');
    kanjiSession.mode = 'detail';
    kanjiSession.detailKanji = 'k01';
    renderKanjiDetail();
    const kanjiSpeaks = document.querySelectorAll('.kanji-detail-screen [data-speak]');
    ok(
      'AU19 widok detali kanji posiada przyciski [data-speak] dla czytań i złożeń',
      kanjiSpeaks.length >= 3,
      'znaleziono ' + kanjiSpeaks.length
    );

    // Przywrócenie ekranu
    kanjiSession.mode = 'hub';
    setScreen('menu');
  } catch (e) {
    ok('AU wymowa audio', false, e.message);
  }

  /* =====================================================
     TY. NOWE TRYBY ĆWICZEŃ: WPISYWANIE SŁOWNICTWA I ŚLEPY KANJI
     ===================================================== */
  try {
    ok('TY1 VOCAB_MODES zawiera tryb wpisywania (type)', VOCAB_MODES.includes('type'));
    ok('TY2 etykieta trybu wpisywania istnieje', VOCAB_MODE_LABELS.type === 'Wpisywanie');

    // Test transliteracji romaji -> kana
    ok('TY3 transliteracja neko -> ねこ', transliterateRomajiToKana('neko') === 'ねこ');
    ok(
      'TY4 transliteracja podwójnej spółgłoski (sokuon) gakkou -> がっこう',
      transliterateRomajiToKana('gakkou') === 'がっこう'
    );
    ok('TY5 transliteracja yōon i n: shokken -> しょっけん', transliterateRomajiToKana('shokken') === 'しょっけん');

    // Test dopasowywania japońskiego dla słownictwa
    const testVocab = {
      id: 'test_neko',
      kana: 'ねこ',
      romaji: 'neko',
      kanji: '猫',
      meaning: 'kot, kotek'
    };
    ok('TY6 matchVocabJapanese dopasowuje dokładne kana', matchVocabJapanese('ねこ', testVocab) === true);
    ok('TY7 matchVocabJapanese dopasowuje romaji', matchVocabJapanese('neko', testVocab) === true);
    ok('TY8 matchVocabJapanese dopasowuje kanji', matchVocabJapanese('猫', testVocab) === true);
    ok('TY9 matchVocabJapanese odrzuca błędne słowo', matchVocabJapanese('inu', testVocab) === false);

    // Test dopasowywania znaczenia (język polski, synonimy, brak diakrytyków)
    ok('TY10 matchVocabMeaning dopasowuje dokładne znaczenie', matchVocabMeaning('kot', 'kot') === true);
    ok('TY11 matchVocabMeaning dopasowuje synonim po przecinku', matchVocabMeaning('kotek', 'kot, kotek') === true);
    ok('TY12 matchVocabMeaning dopasowuje synonim z nawiasu', matchVocabMeaning('wc', 'toaleta (wc)') === true);
    ok('TY13 matchVocabMeaning toleruje brak polskich znaków', matchVocabMeaning('zolty', 'żółty') === true);
    ok(
      'TY14 matchVocabMeaning toleruje brak znaków w synonimach',
      matchVocabMeaning('uczen', 'uczeń, student') === true
    );

    // Test sesji wpisywania słownictwa
    startVocabSession({
      ids: ['v01'],
      mode: 'type',
      direction: 'meaning-kana'
    });
    ok('TY15 sesja słownictwa startuje w trybie type', state.vocab && state.vocab.mode === 'type');

    const itemV01 = vocabItem('v01');
    answerVocabTyped(itemV01 ? itemV01.romaji : 'test');
    ok(
      'TY16 answerVocabTyped ocenia poprawną odpowiedź',
      state.vocab.answered === true && state.vocab.lastCorrect === true
    );
    ok('TY17 licznik poprawnych odpowiedzi zwiększony', state.vocab.correct === 1);

    nextVocab();
    ok('TY18 nextVocab resetuje typedValue', state.vocab.typedValue === '');

    // Test ślepego rysowania Kanji
    setScreen('kanji');
    kanjiSession.mode = 'detail';
    kanjiSession.detailKanji = 'k01';
    kanjiSession.drawingBlind = true;
    renderKanjiDetail();

    const stage = document.getElementById('kanjiSvgStage');
    ok(
      'TY19 stage kanji otrzymuje klasę is-blind przy aktywnym drawingBlind',
      stage && stage.classList.contains('is-blind')
    );

    const toggleBlindBtn = document.getElementById('btnToggleBlind');
    ok('TY20 przycisk btnToggleBlind istnieje w panelu rysowania kanji', !!toggleBlindBtn);

    // Kliknięcie sprawdź rysunek odsłania wzór (.revealed)
    const checkBtn = document.getElementById('btnDrawCheck');
    if (checkBtn) checkBtn.click();
    ok(
      'TY21 sprawdzenie rysunku w trybie ślepym dodaje klasę revealed do wzorca',
      stage && stage.classList.contains('revealed')
    );

    // Kliknięcie wyczyść usuwa klasę revealed
    const clearBtn = document.getElementById('btnDrawClear');
    if (clearBtn) clearBtn.click();
    ok('TY22 wyczyszczenie rysunku usuwa klasę revealed', stage && !stage.classList.contains('revealed'));

    // Przywrócenie stanu
    kanjiSession.drawingBlind = false;
    kanjiSession.mode = 'hub';
    state.vocab = null;
    setScreen('menu');
  } catch (e) {
    ok('TY nowe tryby ćwiczeń', false, e.message);
  }

  /* =====================================================
     GRAMATYKA (T20) — partykuły N5, baza wiedzy i quizy luk
     ===================================================== */
  try {
    // GR1: Komplet 18 zagadnień w bazie
    eq('GR1 baza gramatyki zawiera 18 pozycji', GRAMMAR_ITEMS.length, 18);

    // GR2: Każde zagadnienie ma wymagane pola, minimum 3 przykłady i 3 pytania cloze
    const validItems = GRAMMAR_ITEMS.every(item => {
      const hasFields =
        typeof item.id === 'string' &&
        typeof item.kana === 'string' &&
        typeof item.romaji === 'string' &&
        typeof item.label === 'string' &&
        typeof item.pattern === 'string' &&
        typeof item.description === 'string';
      const hasExamples =
        Array.isArray(item.examples) &&
        item.examples.length >= 3 &&
        item.examples.every(ex => ex.japanese && ex.romaji && ex.polish);
      const hasQuestions =
        Array.isArray(item.questions) &&
        item.questions.length >= 3 &&
        item.questions.every(
          q =>
            q.sentence &&
            q.full &&
            q.polish &&
            typeof q.answer === 'string' &&
            q.answer.length > 0 &&
            Array.isArray(q.distractors) &&
            q.distractors.length >= 3 &&
            !q.distractors.includes(q.answer) &&
            q.explanation
        );
      return hasFields && hasExamples && hasQuestions;
    });
    ok('GR2 wszystkie zagadnienia mają kompletne pola, przykłady i pytania cloze', validItems);

    // GR3: Magazyn i serializacja loadGrammar/saveGrammar
    resetGrammarData();
    eq('GR3 stan początkowy magazynu gramatyki', grammarProgress.totalAnswers, 0);
    grammarProgress.totalAnswers = 5;
    saveGrammar();
    const reloaded = loadGrammar();
    eq('GR4 loadGrammar poprawnie deserializuje dane z localStorage', reloaded.totalAnswers, 5);

    // GR4 & GR5: recordGrammarAnswer i statystyki mastery
    recordGrammarAnswer('wa', true);
    recordGrammarAnswer('wa', true);
    recordGrammarAnswer('wa', true);
    const waStat = grammarParticleStat('wa');
    ok(
      'GR5 recordGrammarAnswer awansuje partykułę do mastered',
      waStat.seen === 3 && waStat.correct === 3 && waStat.mastered === true
    );

    const stats = getGrammarSummaryStats();
    eq('GR6 getGrammarSummaryStats poprawnie zlicza opanowane partykuły', stats.mastered, 1);
    eq('GR7 getGrammarSummaryStats oblicza procent opanowania', stats.percent, 6);

    // GR8: Inicjalizacja sesji quizu startGrammarPractice
    startGrammarPractice();
    ok(
      'GR8 startGrammarPractice tworzy sesję z 10 pytaniami',
      grammarSession.practice && grammarSession.practice.questions.length === 10
    );
    eq('GR9 sesja quizu posiada stan początkowy', grammarSession.practice.index, 0);
    ok(
      'GR10 każde pytanie w sesji ma 4 warianty odpowiedzi',
      grammarSession.practice.questions[0].options.length === 4
    );

    // GR11: Odpowiedź w quizie answerGrammarPractice
    const currentQ = grammarSession.practice.questions[0];
    answerGrammarPractice(currentQ.answer);
    ok(
      'GR11 answerGrammarPractice oznacza poprawną odpowiedź i zwiększa wynik',
      grammarSession.practice.answered === true && grammarSession.practice.score === 1
    );

    // GR12: Przejście do kolejnego pytania i zakończenie sesji
    nextGrammarQuestion();
    eq('GR12 nextGrammarQuestion przesuwa indeks pytania', grammarSession.practice.index, 1);
    eq('GR13 stan pytania jest resetowany na nowym pytaniu', grammarSession.practice.answered, false);

    // Szybkie ukończenie pozostałych pytań
    while (grammarSession.practice.index < grammarSession.practice.questions.length) {
      answerGrammarPractice(grammarSession.practice.questions[grammarSession.practice.index].answer);
      nextGrammarQuestion();
    }
    ok(
      'GR14 sesja zostaje oznaczona jako zakończona po przejściu wszystkich pytań',
      grammarSession.practice.finished === true
    );

    // GR15: Renderowanie ekranu hub gramatyki
    grammarSession.category = 'all';
    const backBtn = document.getElementById('btnGrammarSummaryBack');
    if (backBtn) backBtn.click();
    else {
      grammarSession.mode = 'hub';
      grammarSession.practice = null;
      render();
    }
    const particleCards = document.querySelectorAll('.grammar-particle-card');
    eq('GR15 ekran hub gramatyki renderuje 18 kart w widoku ogólnym', particleCards.length, 18);

    // GR16: Nawigacja do widoku szczegółowego partykuły
    const firstCard = particleCards[0];
    if (firstCard) firstCard.click();
    eq('GR16 kliknięcie karty partykuły przełącza tryb na detail', grammarSession.mode, 'detail');
    const formulaEl = document.querySelector('.grammar-pattern-formula');
    ok('GR17 widok szczegółowy renderuje wzorzec gramatyczny', !!formulaEl && formulaEl.textContent.length > 0);

    // GR18: Rozpoczęcie ćwiczenia dla pojedynczej partykuły
    const practiceDetailBtn = document.getElementById('btnPracticeThisParticle');
    if (practiceDetailBtn) practiceDetailBtn.click();
    eq('GR18 przycisk ćwiczenia w detail przełącza sesję w practice dla partykuły', grammarSession.mode, 'practice');
    ok(
      'GR19 sesja ćwiczenia posiada pytania powiązane z wybraną partykułą',
      grammarSession.practice && grammarSession.practice.questions.length > 0
    );

    // GR20: resetProgressData i czyszczenie
    resetProgressData();
    eq('GR20 resetProgressData resetuje statystyki gramatyki', grammarProgress.totalAnswers, 0);

    // GR21-GR23: Filtrowanie kart wg kategorii
    grammarSession.mode = 'hub';
    grammarSession.category = 'particle';
    renderGrammarHub();
    const particleCardsFiltered = document.querySelectorAll('.grammar-particle-card');
    eq('GR21 filtr partykuł renderuje 10 kart', particleCardsFiltered.length, 10);

    grammarSession.category = 'verb';
    renderGrammarHub();
    const verbCardsFiltered = document.querySelectorAll('.grammar-particle-card');
    eq('GR22 filtr czasowników i istnienia renderuje 6 kart', verbCardsFiltered.length, 6);

    grammarSession.category = 'adjective';
    renderGrammarHub();
    const adjCardsFiltered = document.querySelectorAll('.grammar-particle-card');
    eq('GR23 filtr przymiotników renderuje 2 karty', adjCardsFiltered.length, 2);

    // GR24-GR25: startGrammarPractice z filtrem kategorii
    startGrammarPractice({ category: 'verb' });
    const allVerbQ = grammarSession.practice.questions.every(q => {
      const it = grammarItem(q.particleId);
      return it && (it.category === 'verb' || it.category === 'existence');
    });
    ok('GR24 quiz dla kategorii czasowników zawiera wyłącznie pytania o czasowniki i istnienie', allVerbQ);

    startGrammarPractice({ category: 'adjective' });
    const allAdjQ = grammarSession.practice.questions.every(q => {
      const it = grammarItem(q.particleId);
      return it && it.category === 'adjective';
    });
    ok('GR25 quiz dla kategorii przymiotników zawiera wyłącznie pytania o przymiotniki', allAdjQ);

    // Przywrócenie stanu
    grammarSession.mode = 'hub';
    grammarSession.particleId = null;
    grammarSession.category = 'all';
    grammarSession.practice = null;
    state.grammar = null;
    setScreen('menu');
  } catch (e) {
    ok('GR moduł gramatyki', false, e.message);
  }

  /* =====================================================
     KOPIA ZAPASOWA (KROK 6) — eksport i import danych JSON
     ===================================================== */
  try {
    // BK1: Generowanie poprawnego obiektu kopii zapasowej
    const backup = createBackupData();
    ok('BK1 createBackupData tworzy obiekt z app=koto', backup && backup.app === 'koto');
    eq('BK1a wersja kopii to 1', backup.version, 1);
    ok(
      'BK1b obecny znacznik czasu ISO',
      typeof backup.exportedAt === 'string' && !isNaN(Date.parse(backup.exportedAt))
    );
    ok('BK1c stores jest obiektem', typeof backup.stores === 'object' && backup.stores !== null);

    // BK2: Walidacja poprawnej kopii
    const valOk = validateBackup(backup);
    ok('BK2 validateBackup akceptuje poprawny obiekt kopii zapasowej', valOk.valid === true);

    // BK3 - BK6: Walidacja błędnych danych
    eq('BK3 odrzucenie wartości null/nie-obiektu', validateBackup(null).valid, false);
    eq('BK4 odrzucenie pliku z innej aplikacji', validateBackup({ app: 'other', version: 1, stores: {} }).valid, false);
    eq('BK5 odrzucenie nieobsługiwanej wersji', validateBackup({ app: 'koto', version: 0, stores: {} }).valid, false);
    eq('BK6 odrzucenie braku obiektu stores', validateBackup({ app: 'koto', version: 1 }).valid, false);

    // BK7: Przywracanie danych przez applyBackup
    const testBackup = {
      app: 'koto',
      version: 1,
      exportedAt: new Date().toISOString(),
      stores: {
        [PROGRESS_KEY]: { version: PROGRESS_VERSION, chars: { a: { level: 4, nextReview: 9999999 } } },
        [VOCAB_KEY]: { version: 1, cards: { n01: { seen: 5, correct: 4 } } },
        [KANJI_KEY]: { version: 1, items: { k01: { stage: 3, nextReview: 8888888 } } },
        [GRAMMAR_KEY]: {
          version: 1,
          particles: { wa: { seen: 3, correct: 3, mastered: true } },
          totalAnswers: 12
        },
        [DAILY_STATS_KEY]: { version: 1, days: { '2026-10-24': { answers: 10, correct: 9 } } },
        [SETTINGS_STORE_KEY]: { theme: 'light', muted: true, script: 'both', hideGuide: true }
      }
    };

    applyBackup(testBackup);
    ok('BK7 applyBackup przywraca postęp kany', progress.chars.a && progress.chars.a.level === 4);
    ok('BK7a applyBackup przywraca postęp słownictwa', vocab.cards.n01 && vocab.cards.n01.seen === 5);
    ok('BK7b applyBackup przywraca postęp kanji', kanjiProgress.items.k01 && kanjiProgress.items.k01.stage === 3);
    ok(
      'BK7c applyBackup przywraca postęp gramatyki',
      grammarProgress.particles.wa && grammarProgress.particles.wa.mastered === true
    );
    eq('BK7d applyBackup przywraca łączną liczbę ćwiczeń gramatyki', grammarProgress.totalAnswers, 12);
    ok(
      'BK7e applyBackup przywraca historię dni w statystykach',
      dailyStats.days['2026-10-24'] && dailyStats.days['2026-10-24'].answers === 10
    );
    eq('BK7f applyBackup przywraca motyw ustawień', settings.theme, 'light');
    eq('BK7g applyBackup przywraca stan wyciszenia', settings.muted, true);

    // BK8: Odrzucenie uszkodzonej kopii bez psucia stanu
    let threw = false;
    try {
      applyBackup({ app: 'bad' });
    } catch (err) {
      threw = true;
    }
    ok('BK8 applyBackup rzuca błąd przy uszkodzonym pliku', threw);

    // BK9: Elementy UI w widoku Ustawień
    setScreen('settings');
    const backupCard = document.getElementById('backupGroup');
    ok('BK9 sekcja kopii zapasowej obecna w Ustawieniach', !!backupCard);
    const exportBtn = document.getElementById('btnExportBackup');
    const importBtn = document.getElementById('btnImportBackup');
    const importInput = document.getElementById('importBackupFile');
    ok('BK9a przycisk eksportu obecny w DOM', !!exportBtn);
    ok('BK9b przycisk importu obecny w DOM', !!importBtn);
    ok('BK9c ukryty input pliku obecny w DOM', !!importInput && importInput.type === 'file');
    eq('BK10 input akceptuje pliki JSON', importInput.getAttribute('accept'), '.json,application/json');

    // Przywrócenie czystego stanu
    resetProgressData();
    resetSettings();
    setScreen('menu');
  } catch (e) {
    ok('BK kopia zapasowa', false, e.message);
  }

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
