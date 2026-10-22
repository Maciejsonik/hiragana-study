/*
   Testy panelu nauki: accordion, układ boczka, okablowanie animacji.

   Pokryte regresje:
     1. Zwinięta sekcja nie otwierała się sama przy zmianie znaku
        (`openByDefault` był przeliczany przy każdym renderze).
     2. Strzałki nie odsłaniały sekcji, na którą wjechaliśmy.
     3. Najechanie strzałkami zostawiało sekcję rozwiniętą na stałe.
     4. Dwuznakowe kana yōon (きゃ, しゅ, ちょ…) łamały się na dwa wiersze
        w przycisku 37px i wyglądały jak kolumna zamiast wiersza.
     5. Poziomy overflow w oknie 801–946 px i na telefonach (320–414 px):
        siatki `.learner`, `.character-area` i `.controls` nie dawały się
        skurczyć poniżej min-content karty (403 px), a `.svg-wrap` miał
        sztywne 250×250.
     6. Opisy kresek rozjeżdżały się z liczbą kresek z KanjiVG w 32 z 208
        znaków: 21 hiragana miało scalony opis dakuten (jedna pozycja na
        dwie kreski), a 11 katakana miało błędną liczbę opisów. Plakietka
        pokazywała liczbę z SVG, lista opisów — inną.

   Uruchomienie: tests-learn.html (patrz tests-learn.js w tym samym katalogu).

   UWAGA o pomiarach animacji: `getComputedStyle(el, '::details-content')`
   podczas przejścia zwraca wartość SPRZED zmiany, a zawieszone pobrania
   SVG z KanjiVG zatrzymują zegar kompozytora w headless. Dlatego animacji
   NIE mierzymy wysokością — sprawdzamy tylko, czy jest okablowana
   (CSS + przeżywalność elementów <details>). Wysokość i płynność ocenia
   wzrokowo w prawdziwej przeglądarce.
*/
(function () {
  const R = [];
  const ok = (n, c, e) => R.push((c ? 'PASS ' : 'FAIL ') + n + (e !== undefined ? ' :: ' + e : ''));
  const info = (n, v) => R.push('INFO ' + n + ' :: ' + v);
  const wait = ms => new Promise(r => setTimeout(r, ms));

  /*
    Czekanie na warunek zamiast stałego opóźnienia. Po kliknięciu kana lub
    nagłówka sekcji stan jest już ustawiony synchronicznie, więc nie ma
    powodu czekać 350 ms na samą animację CSS — testy sprawdzają stan,
    nie wysokość animacji (patrz komentarz na górze pliku).
  */
  async function waitFor(condition, timeoutMs = 1000, stepMs = 20) {
    const deadline = Date.now() + timeoutMs;
    while (!condition()) {
      if (Date.now() >= deadline) return false;
      await wait(stepMs);
    }
    return true;
  }
  const sec = id => document.querySelector('.learn-section[data-category="' + id + '"]');
  const ids = ['basic', 'dakuten', 'handakuten', 'yoon'];
  const openIds = () => ids.filter(i => sec(i) && sec(i).open);
  const catOf = kana => learnCategoryOf(getGroups().find(g => g.chars.some(c => c[0] === kana)).id);

  // klik z oczekiwaniem na element — scena nie może być wyższa niż render
  async function clickKana(kana, tries) {
    for (let i = 0; i < (tries || 40); i++) {
      const el = document.querySelector('[data-kana="' + kana + '"]');
      if (el) {
        el.click();
        await waitFor(
          () =>
            state.kana === kana &&
            !!document.querySelector('[data-kana="' + kana + '"]') &&
            document.querySelector('[data-kana="' + kana + '"]').classList.contains('active')
        );
        return true;
      }
      await wait(100);
    }
    return false;
  }
  // przeglądarka nie odpala transitionrun dla ::details-content, więc stan
  // po kliknięciu odczytujemy po potwierdzeniu samego atrybutu `open`
  const clickHead = async id => {
    const section = sec(id);
    const target = !section.open;
    section.querySelector('summary').click();
    await waitFor(() => section.open === target);
  };
  const ensureClosed = async id => {
    if (sec(id).open) await clickHead(id);
  };
  const ensureOpen = async id => {
    if (!sec(id).open) await clickHead(id);
  };

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

  (async () => {
    try {
      setScript('hiragana');
      setScreen('learn');
      await waitFor(() => !!sec('basic') && !!document.querySelector('.study-card'), 3000);

      /* =====================================================
         A. STAN DOMYŚLNY I LICZNIKI
         ===================================================== */
      ok('ACC.1 Basic open by default on init', sec('basic').open === true);
      ok('ACC.2 Dakuten closed on init', sec('dakuten').open === false);
      ok('ACC.3 Handakuten closed on init', sec('handakuten').open === false);
      ok('ACC.4 Yōon closed on init', sec('yoon').open === false);

      const count = id => parseInt(sec(id).querySelector('.learn-section-count').textContent.trim(), 10);
      ok('ACC.5 counts 46/20/5/33', ids.map(count).join('/') === '46/20/5/33', ids.map(count).join('/'));
      ok(
        'ACC.6 all 104 kana in sidebar',
        document.querySelectorAll('.sidebar [data-kana]').length === 104,
        String(document.querySelectorAll('.sidebar [data-kana]').length)
      );
      ok(
        'ACC.7 grouping intact (Basic 10 groups, Dakuten 4)',
        getGroups().filter(g => learnCategoryOf(g.id) === 'basic').length === 10 &&
          getGroups().filter(g => learnCategoryOf(g.id) === 'dakuten').length === 4
      );
      ok(
        'ACC.8 category membership (が/ぎ dakuten, か basic)',
        catOf('が') === 'dakuten' && catOf('ぎ') === 'dakuten' && catOf('か') === 'basic'
      );

      /* =====================================================
         B. REGRESJA 1 — zwinięta sekcja nie otwiera się sama
            ===================================================== */
      await clickKana('が'); // wjazd do Dakuten
      ok('ACC.9 switched to が', state.kana === 'が' && state.group === 'dakuten-k', state.kana + '/' + state.group);
      ok('ACC.10 Dakuten open (holds active kana)', sec('dakuten').open === true);
      ok('ACC.11 Basic auto-collapsed (untouched section)', sec('basic').open === false, String(sec('basic').open));

      // wejście do Dakuten zwinęło Basic automatycznie, więc użytkownik
      // najpierw musi go świadomie OTWORZYĆ, a dopiero potem ZWINĄĆ —
      // inaczej klik zwijałby sekcję, która już jest zwinięta
      await ensureOpen('basic');
      ok('ACC.12a Basic re-opened by user', sec('basic').open === true);
      await ensureClosed('basic');
      ok('ACC.12 Basic collapsed by user', sec('basic').open === false);

      await clickKana('ぎ'); // zmiana znaku W TYM SAMYM kat.
      ok('ACC.13 switched to ぎ', state.kana === 'ぎ', state.kana);
      ok(
        'ACC.14 Basic STILL collapsed after same-category switch',
        sec('basic').open === false,
        String(sec('basic').open)
      );

      navigateKana(1);
      await wait(350); // do ぐ, nadal Dakuten
      ok('ACC.15 keyboard nav inside Dakuten moved to ぐ', state.kana === 'ぐ', state.kana);
      ok('ACC.16 Basic still collapsed after keyboard nav', sec('basic').open === false, String(sec('basic').open));

      renderLearn();
      await wait(400); // wymuszony re-render
      ok('ACC.17 explicit re-render preserves state', sec('basic').open === false && sec('dakuten').open === true);

      setScreen('menu');
      await wait(500);
      setScreen('learn');
      await wait(1300);
      ok(
        'ACC.18 Basic still collapsed after leaving+returning',
        sec('basic').open === false,
        String(sec('basic').open)
      );

      await clickHead('basic');
      ok('ACC.19 Basic re-opens on user click', sec('basic').open === true);

      /* =====================================================
         C. REGRESJA 2 — strzałki odsłaniają sekcję, na którą wjechaliśmy
         ===================================================== */
      await clickKana('ん'); // ostatni znak Basic
      await ensureOpen('basic');
      await ensureClosed('dakuten');
      await ensureClosed('handakuten');
      ok('ACC.20 seed: only Basic open', openIds().join(',') === 'basic', openIds().join(','));

      navigateKana(1);
      await wait(400); // wjeżdżamy do Dakuten
      ok('ACC.21 arrows entered Dakuten', state.kana === 'が', state.kana);
      ok('ACC.22 Dakuten AUTO-OPENED on entry', sec('dakuten').open === true);

      navigateKana(1);
      await wait(400);
      ok('ACC.23 stays open while moving inside', sec('dakuten').open === true);

      // wjeżdżamy w zwiniętą sekcję OD TYLKU: dakuten-h -> handakuten-h
      for (let i = 0; i < 40 && state.kana !== 'ぼ'; i++) {
        navigateKana(1);
        await wait(12);
      }
      ok('ACC.24 walked to ぼ (last of Dakuten)', state.kana === 'ぼ', state.kana);
      ok('ACC.25 Handakuten still collapsed before entry', sec('handakuten').open === false);
      navigateKana(1);
      await wait(400); // -> ぱ
      ok('ACC.26 arrows entered Handakuten', state.kana === 'ぱ', state.kana);
      ok('ACC.27 Handakuten AUTO-OPENED on entry', sec('handakuten').open === true, String(sec('handakuten').open));

      /* =====================================================
         D. REGRESJA 3 — najechanie nie zostawia sekcji rozwiniętej
         ===================================================== */
      // czyścimy WSZYSTKIE decyzje użytkownika, ale stojimy na ZNANYM znaku
      // (ostatni znak Basic), bo inaczej „aktywna sekcja" byłaby przypadkowa
      await clickKana('ん');
      Object.keys(learnSectionOpen).forEach(k => delete learnSectionOpen[k]);
      learnSectionStarted = true;
      renderLearn();
      await wait(500);
      ok(
        'ACC.28 clean slate: only the active section is open',
        openIds().join(',') === 'basic',
        openIds().join(',') + ' kana=' + state.kana
      );

      navigateKana(1);
      await wait(400);
      ok('ACC.29 arrows into Dakuten', state.kana === 'が', state.kana);
      ok('ACC.30 Dakuten open, Basic auto-collapsed', openIds().join(',') === 'dakuten', openIds().join(','));

      navigateKana(-1);
      await wait(400); // -> ん (Basic)
      ok(
        'ACC.31 Dakuten collapsed itself, Basic opened',
        openIds().join(',') === 'basic',
        openIds().join(',') + ' kana=' + state.kana
      );
      ok('ACC.32 no stale section left open', openIds().length === 1, openIds().join(','));

      // seria szybkich strzałek: musi osiądąć w jednej sekcji
      for (let i = 0; i < 60; i++) navigateKana(1);
      await wait(900);
      const after = openIds();
      ok('ACC.33 60 rapid arrows settle to one open section', after.length === 1, after.join(','));
      ok(
        'ACC.34 ...and it is the active one',
        after[0] === learnCategoryOf(state.group),
        after[0] + ' vs ' + learnCategoryOf(state.group)
      );

      // decyzja użytkownika ma pierwszeństwo i jest trwała obok sekcji aktywnej
      await clickKana('ん');
      // Basic jest sekcją aktywną, więc `ensureOpen` byłby bezczynnością
      // i NIE zapisałby decyzji użytkownika. Dwa kliknięcia — zamknij
      // i otwórz — zapamiętują jednoznaczne "otwarta na stałe".
      await ensureClosed('basic'); // klik 1 → explicit = false
      await ensureOpen('basic'); // klik 2 → explicit = true
      await ensureClosed('dakuten');
      navigateKana(1);
      await wait(400); // wjech do Dakuten
      ok(
        'ACC.35 user-opened Basic stays open beside the active section',
        state.kana === 'が' && sec('basic').open === true && openIds().length === 2,
        openIds().join(',') + ' kana=' + state.kana
      );

      /* =====================================================
         E. REGRESJA 4 — dwuznakowe kana yōon nie łamią się
            Szerokość sidebara sterujemy przez `grid-template-columns`,
            bo to ona decyduje o szerokości przycisku (`.sidebar` ma
            stałe 280px w desktopie). Szerokość viewportu w headless
            jest zawodna, więc nie udajemy jej.
         ===================================================== */
      const learner = document.querySelector('.learner');
      const baseCols = getComputedStyle(learner).gridTemplateColumns;

      for (const width of [280, 300, 320, 360]) {
        learner.style.gridTemplateColumns = width + 'px 1fr';
        await wait(180);
        ids.forEach(id => {
          sec(id).open = true;
        });
        await wait(250);
        const wrapped = [];
        document.querySelectorAll('.learn-section-body .kana-btn').forEach(el => {
          // kwadratowy przycisk (aspect-ratio 1) = tekst się nie złamał
          if (Math.abs(el.offsetHeight - el.offsetWidth) > 1) wrapped.push(el.textContent.trim());
        });
        ok(
          'LAY.' + width + ' no kana wraps to a second line',
          wrapped.length === 0,
          wrapped.length ? wrapped.slice(0, 5).join(' ') + ' (' + wrapped.length + ')' : '0 z 104'
        );
      }
      learner.style.gridTemplateColumns = baseCols;
      await wait(200);

      const sidebar = document.querySelector('.sidebar');
      ok(
        'LAY.x sidebar has no horizontal overflow',
        sidebar.scrollWidth <= sidebar.clientWidth + 1,
        sidebar.scrollWidth + ' vs ' + sidebar.clientWidth
      );

      // katanaka: te same 104 przyciski, bez łamania
      setScreen('menu');
      await wait(500);
      document.querySelector('#app [data-script="katakana"]').click();
      await wait(700);
      setScreen('learn');
      await wait(1300);
      const katWrapped = [...document.querySelectorAll('.sidebar [data-kana]')].filter(
        el => Math.abs(el.offsetHeight - el.offsetWidth) > 1
      );
      ok(
        'LAY.x katakana: no wrapping either',
        katWrapped.length === 0,
        katWrapped
          .slice(0, 5)
          .map(e => e.textContent.trim())
          .join(' ')
      );
      ok(
        'LAY.x katakana only (codepoint >= 0x30A0)',
        [...document.querySelectorAll('.sidebar [data-kana]')].every(b => b.dataset.kana.codePointAt(0) >= 0x30a0)
      );

      setScreen('menu');
      await wait(500);
      document.querySelector('#app [data-script="hiragana"]').click();
      await wait(700);
      setScreen('learn');
      await wait(1200);

      /* =====================================================
         F. OKABLOWANIE ANIMACJI (bez pomiaru wysokości)
         ===================================================== */
      ok('ANM.1 browser supports ::details-content', CSS.supports('selector(::details-content)'));
      ok(
        'ANM.2 interpolate-size enabled on :root',
        getComputedStyle(document.documentElement).interpolateSize === 'allow-keywords',
        getComputedStyle(document.documentElement).interpolateSize
      );

      const dc = getComputedStyle(sec('basic'), '::details-content');
      ok(
        'ANM.3 ::details-content transitions height',
        dc.transitionProperty.indexOf('height') >= 0,
        dc.transitionProperty
      );
      ok(
        'ANM.4 ::details-content uses allow-discrete',
        dc.transitionProperty.indexOf('content-visibility') >= 0,
        dc.transitionProperty
      );

      const css = await (await fetch('style.css')).text();
      ok(
        'ANM.5 reduced-motion guard present',
        /@media \(prefers-reduced-motion: reduce\)/.test(css) &&
          /\.learn-section::details-content\s*\{[^}]*transition:\s*none/.test(css)
      );

      /*
        Przejście wymaga, żeby element <details> PRZEŻYWAŁ zmianę znaku —
        inaczej trafia w nowy element „urodzony gotowy" i nie ma skąd
        rozpocząć animacji. To właśnie naprawił refaktor panelu.
      */
      const detailsBefore = sec('dakuten');
      await clickKana('さ');
      ok('ANM.6 <details> survives a kana switch (no innerHTML rebuild)', sec('dakuten') === detailsBefore);
      ok(
        'ANM.7 kana buttons are not recreated',
        document.querySelectorAll('.sidebar [data-kana]').length === 104,
        String(document.querySelectorAll('.sidebar [data-kana]').length)
      );

      const activeBtn = document.querySelector('.sidebar .kana-btn.active');
      ok('ANM.8 exactly one active button', document.querySelectorAll('.sidebar .kana-btn.active').length === 1);
      ok(
        'ANM.9 active button is the current kana',
        activeBtn && activeBtn.dataset.kana === state.kana,
        activeBtn && activeBtn.dataset.kana + ' vs ' + state.kana
      );
      ok(
        'ANM.10 every button carries a mastery class',
        [...document.querySelectorAll('.sidebar [data-kana]')].every(b =>
          [...b.classList].some(c => c.indexOf('mastery-') === 0)
        )
      );

      info(
        'ANM.11 wysokości ::details-content',
        'pomiar pominięty — getComputedStyle ' + 'na pseudoelemencie podczas przejścia zwraca stan sprzed zmiany'
      );

      /* =====================================================
         G. UX FIXES PHASE 3 — reset i „Sprawdź się"
         ===================================================== */

      /*
        Pełny panel (z „ćwicz trudne") renderuje się TYLKO przy istniejącym
        postępie — przy pustym `progressSummary().seen` panel pokazuje sam
        stub. Żeby sprawdzać właściwy wariant, najpierw dajemy jeden rekord.
      */
      progress = {
        version: PROGRESS_VERSION,
        chars: {
          あ: {
            seen: 4,
            correct: 3,
            wrong: 1,
            recent: [1, 1, 1, 1],
            confused: {},
            last: 1,
            stage: 1,
            reps: 0,
            due: 0,
            lapses: 0
          }
        }
      };
      saveProgress();

      /* --- martwy kod po toggle'u: sprawdzamy NA EKRANIE NAUKI --- */
      setScreen('learn');
      await wait(900);
      ok('UX19 klasa quiz-hidden zniknęła z DOM', document.querySelectorAll('.quiz-hidden').length === 0);
      ok(
        'UX20 znak nie jest ukryty na starcie nauki',
        !document.querySelector('#svgWrap').classList.contains('quiz-hidden')
      );
      ok(
        'UX22 nawigacja znaków nadal działa w trybie nauki',
        !!document.getElementById('nextKana') && !!document.getElementById('prevKana')
      );

      /* --- reset postępu: tylko w Ustawieniach --- */
      setScreen('exam');
      await wait(800);
      ok('UX1 panel egzaminu NIE ma już #resetProgress', !document.getElementById('resetProgress'));
      ok('UX2 przycisk „ćwicz trudne" został', !!document.getElementById('practiceHardSetup'));
      ok(
        'UX3 kontrole zakresu egzaminu nietknięte',
        document.querySelectorAll('#examGroups input').length === getGroups().length,
        String(document.querySelectorAll('#examGroups input').length)
      );
      ok(
        'UX4 skróty zakresu: zostały tylko „Wszystkie" i „Wyczyść"',
        !document.getElementById('onlyA') &&
          !document.getElementById('aPlusK') &&
          !!document.getElementById('allGroups') &&
          !!document.getElementById('noGroups')
      );

      const groupedSections = [...document.querySelectorAll('#examGroups .exam-group-section')];
      const expectedSections = LEARN_CATEGORIES.map(category => ({
        id: category.id,
        label: category.label,
        ids: examGroupRows()
          .filter(row => learnCategoryOf(row.id) === category.id)
          .map(row => row.id)
      })).filter(section => section.ids.length);
      ok(
        'UX4a rzędy egzaminu są pogrupowane w kategorie',
        groupedSections.length === expectedSections.length &&
          groupedSections.every(
            (section, index) =>
              section.dataset.category === expectedSections[index].id &&
              section.querySelector('.exam-group-heading').textContent.trim() === expectedSections[index].label &&
              [...section.querySelectorAll('input')].map(input => input.value).join(',') ===
                expectedSections[index].ids.join(',')
          ),
        groupedSections
          .map(section => section.dataset.category + '=' + section.querySelectorAll('input').length)
          .join(' ')
      );

      const basicSection = document.querySelector('#examGroups .exam-group-section[data-category="basic"]');
      const basicSelectAll = basicSection.querySelector('.exam-group-select');
      const basicInputs = [...basicSection.querySelectorAll('input[type="checkbox"]')];
      const basicCount = basicSection.querySelector('[data-exam-count]');
      const originalGroups = [...document.querySelectorAll('#examGroups input:checked')].map(input => input.value);

      ok(
        'UX4b kategorie są zwijanymi sekcjami, domyślnie zamkniętymi',
        groupedSections.every(section => section.tagName === 'DETAILS' && !section.open),
        groupedSections.map(section => section.tagName + ':' + section.open).join(' ')
      );
      ok(
        'UX4c „Wszystkie” w nagłówku zaznacza całą kategorię',
        (basicSelectAll.click(),
        basicInputs.every(input => input.checked) &&
          basicSelectAll.getAttribute('aria-pressed') === 'true' &&
          basicSelectAll.textContent.trim() === 'Wyczyść' &&
          basicCount.textContent === `${basicInputs.length}/${basicInputs.length}`),
        `${basicCount.textContent} / ${basicSelectAll.textContent.trim()}`
      );
      ok(
        'UX4d drugi klik czyści całą kategorię',
        (basicSelectAll.click(),
        basicInputs.every(input => !input.checked) &&
          basicSelectAll.getAttribute('aria-pressed') === 'false' &&
          basicSelectAll.textContent.trim() === 'Wszystkie' &&
          basicCount.textContent === `0/${basicInputs.length}`),
        `${basicCount.textContent} / ${basicSelectAll.textContent.trim()}`
      );
      setExamGroups(originalGroups);

      const advanced = document.querySelector('details.exam-advanced');
      const startButton = document.getElementById('startSelectedExam');
      const progressPanel = document.querySelector('.progress-panel');
      ok(
        'UX4e opcje egzaminu mają nowy układ pól i trybów',
        !!advanced &&
          advanced.querySelectorAll('.exam-option-field').length === 4 &&
          advanced.querySelectorAll('.exam-mode-card').length === 4 &&
          !!document.getElementById('optionsCount') &&
          !!document.getElementById('questionLimit') &&
          !!document.getElementById('timerOpt') &&
          !!document.getElementById('outsideOpt'),
        advanced ? advanced.querySelectorAll('.exam-option-field').length + ' pól' : 'brak'
      );
      ok(
        'UX4f start egzaminu jest przed panelem postępów',
        !!startButton &&
          !!progressPanel &&
          !!(startButton.compareDocumentPosition(progressPanel) & Node.DOCUMENT_POSITION_FOLLOWING),
        startButton && progressPanel
          ? startButton.getBoundingClientRect().top + ' < ' + progressPanel.getBoundingClientRect().top
          : 'brak'
      );

      setScreen('settings');
      await wait(600);
      ok('UX5 Ustawienia nadal mają reset postępu', !!document.getElementById('resetProgressBtn'));
      ok('UX6 Ustawienia nadal mają osobne kasowanie statystyk', !!document.getElementById('clearDailyStatsBtn'));
      ok(
        'UX7 oba przyciski są osobne (reset nie kasuje historii)',
        document.getElementById('resetProgressBtn').id !== document.getElementById('clearDailyStatsBtn').id
      );

      /* --- „Sprawdź się" → konfiguracja egzaminu --- */
      setScript('hiragana');
      setScreen('learn');
      await wait(900);
      const quizBtn = document.getElementById('quizMe');
      ok('UX8 przycisk „Sprawdź się" istnieje', !!quizBtn);
      ok(
        'UX9 etykieta przycisku bez zmian',
        quizBtn && quizBtn.textContent.indexOf('Sprawdź się') > 0,
        quizBtn && quizBtn.textContent.trim()
      );

      quizBtn.click();
      await wait(600);
      ok('UX10 klik prowadzi na ekran egzaminu', state.screen === 'exam', state.screen);
      ok(
        'UX11 dociera do konfiguracji (showExamSetup)',
        !!document.getElementById('examGroups') &&
          document.querySelectorAll('#examGroups input').length === getGroups().length
      );
      ok(
        'UX12 NIE uruchamia egzaminu automatycznie',
        state.exam === null,
        state.exam === null ? 'null' : 'egzamin uruchomiony'
      );
      ok('UX13 ekran to setup, nie pytanie', !document.getElementById('svgWrap'));

      /* --- zachowanie alfabetu --- */
      setScript('katakana');
      setScreen('learn');
      await wait(900);
      ok('UX14 Learn w katanace', state.script === 'katakana');
      document.getElementById('quizMe').click();
      await wait(600);
      ok('UX15 alfabet zachowany po przejściu do egzaminu', state.script === 'katakana', state.script);
      const labels = document.getElementById('examGroups').textContent;
      ok('UX16 konfiguracja pokazuje katakany', /カ/.test(labels) && /ア/.test(labels) && !/あ/.test(labels));
      ok(
        'UX17 top bar pokazuje ekran, nie alfabet',
        document.getElementById('appTitle').textContent === 'Egzamin' &&
          document.getElementById('scriptEyebrow').textContent === 'KANA',
        document.getElementById('appTitle').textContent + ' / ' + document.getElementById('scriptEyebrow').textContent
      );

      setScreen('menu');
      await wait(80);
      ok(
        'UX17b hub pokazuje aktywny alfabet',
        document.querySelector('.script-btn.active').textContent.indexOf('Katakana') >= 0,
        document.querySelector('.script-btn.active').textContent.trim()
      );

      setScript('hiragana');
      setScreen('learn');
      await wait(900);
      document.getElementById('quizMe').click();
      await wait(600);
      ok(
        'UX18 powrót do hiragany też zachowany',
        state.script === 'hiragana' && /あ/.test(document.getElementById('examGroups').textContent)
      );

      const cssText = await (await fetch('style.css')).text();
      ok('UX21 CSS nie zawiera już .quiz-hidden', cssText.indexOf('quiz-hidden') < 0);

      /* =====================================================
         F. REGRESJA 5 — układ nauki nie wystaje poza okno
            Siatki `.learner`, `.character-area` i `.controls`
            miały domyślne minimum `auto`, więc nie dawały się
            skurczyć poniżej min-content karty (403 px). Skutek:
            poziomy overflow w oknie 801–946 px i na telefonach
            (320–414 px), ucięty „Następny” i glif wychodzący
            poza panel.

            Test ładuje PRAWDZIWE `index.html` w iframe i mierzy
            układ przy kolejnych szerokościach — media queries,
            breakpointy i realne `app.js` działają jak w aplikacji.
            Sama zmiana szerokości iframe jest tańsza i wierniejsza
            niż podstawianie `grid-template-columns` na sztywno.

            Wysokość iframe (5000 px) jest większa niż najwyższa
            strona (~3450 px), więc w środku nie ma pionowego paska
            przewijania. Pasek zwężałby viewport o ~15 px i przy
            801 px media query przełączyłoby układ na mobilny —
            test mierzyłby wtedy coś innego, niż deklaruje. `LAY.0`
            pilnuje, że viewport iframe równa się zadanej szerokości.
         ===================================================== */
      const holder = document.createElement('div');
      holder.style.cssText =
        'position:fixed;left:0;top:0;width:1px;height:1px;overflow:hidden;opacity:0;pointer-events:none;';
      const frame = document.createElement('iframe');
      frame.style.cssText = 'border:0;display:block;width:820px;height:5000px;';
      frame.src = 'index.html';
      holder.appendChild(frame);
      document.body.appendChild(holder);

      try {
        const appReady = () => !!(frame.contentWindow && typeof frame.contentWindow.setScreen === 'function');
        for (let i = 0; i < 200 && !appReady(); i++) await wait(100);
        if (!appReady()) throw new Error('iframe: index.html nie wczytał się w 20 s');

        frame.contentWindow.setScreen('learn');

        const required = [
          '.learn-nav',
          '.char-panel',
          '.char-panel.stroke-box',
          '.controls',
          '.svg-wrap',
          '.learn-section-body .kana-btn'
        ];
        let missing = required.slice();
        for (let i = 0; i < 100 && missing.length; i++) {
          missing = required.filter(sel => !frame.contentDocument.querySelector(sel));
          if (missing.length) await wait(100);
        }
        if (missing.length) throw new Error('iframe: brak elementów ekranu nauki: ' + missing.join(', '));

        // Glif to albo <svg> z KanjiVG, albo tekstowy `.kana-fallback`.
        // Stan „Ładowanie znaku…” nie jest fixture'em: test ma wtedy
        // zgłosić, że nie mógł zweryfikować układu, a nie zaliczyć go.
        const glyphOf = () => {
          const wrap = frame.contentDocument.querySelector('.svg-wrap');
          return wrap ? wrap.querySelector('svg') || wrap.querySelector('.kana-fallback') : null;
        };
        for (let i = 0; i < 100 && !glyphOf(); i++) await wait(100);
        if (!glyphOf()) {
          const loading = frame.contentDocument.querySelector('.svg-wrap .loading');
          throw new Error(
            loading
              ? 'iframe: glif wciąż w stanie ładowania po 10 s — nie da się zweryfikować układu'
              : 'iframe: brak <svg> i .kana-fallback w .svg-wrap — nieprawidłowy fixture'
          );
        }
        const glyphSource = frame.contentDocument.querySelector('.svg-wrap svg') ? 'svg' : 'fallback';
        await wait(400);

        const widths = [320, 360, 390, 414, 768, 801, 810, 820, 834, 900, 946, 1000, 1280, 1440, 1920];
        const viewportAt = [];
        const overflowAt = [];
        const glyphAt = [];
        const panelAt = [];
        const strokeAt = [];
        const ctrlAt = [];
        const navAt = [];
        const flashAt = [];
        let minKana = Infinity;
        let kanaSamples = 0;
        let minGlyph = Infinity;
        let minContent = Infinity;
        let minStroke = Infinity;

        for (const w of widths) {
          frame.style.width = w + 'px';
          await wait(220);
          const d = frame.contentDocument;
          const win = frame.contentWindow;
          const de = d.documentElement;

          if (de.clientWidth !== w) viewportAt.push(w + ':' + de.clientWidth);
          const over = de.scrollWidth - de.clientWidth;
          if (over > 0) overflowAt.push(w + ':' + over);

          const panel = d.querySelector('.char-panel');
          const stroke = d.querySelector('.char-panel.stroke-box');
          const wrap = d.querySelector('.svg-wrap');
          const controls = d.querySelector('.controls');
          const nav = d.querySelector('.learn-nav');
          if (!panel || !stroke || !wrap || !controls || !nav) {
            throw new Error('iframe: elementy ekranu nauki zniknęły przy ' + w + 'px');
          }

          // Content box: rect minus border i padding. Mierzenie border boxu
          // przepuściłoby glif wchodzący w padding panelu.
          const contentBox = el => {
            const r = el.getBoundingClientRect();
            const s = win.getComputedStyle(el);
            const bl = parseFloat(s.borderLeftWidth);
            const br = parseFloat(s.borderRightWidth);
            const pl = parseFloat(s.paddingLeft);
            const pr = parseFloat(s.paddingRight);
            return {
              left: r.left + bl + pl,
              right: r.right - br - pr,
              width: r.width - bl - br - pl - pr
            };
          };

          const glyph = wrap.querySelector('svg') || wrap.querySelector('.kana-fallback');
          if (!glyph) throw new Error('iframe: brak glifu przy ' + w + 'px');

          const pc = contentBox(panel);
          const sc = contentBox(stroke);
          const wr = wrap.getBoundingClientRect();
          const gr = glyph.getBoundingClientRect();
          if (!(
            gr.width > 0 &&
            gr.height > 0 &&
            wr.left >= pc.left - 0.5 &&
            wr.right <= pc.right + 0.5 &&
            gr.left >= pc.left - 0.5 &&
            gr.right <= pc.right + 0.5
          )) {
            glyphAt.push(w + ':' + Math.round(wr.width) + '/' + Math.round(pc.width));
          }
          if (gr.width < minGlyph) minGlyph = gr.width;

          // Minimum treści: panel kresek musi zmieścić numer kreski (21 px),
          // odstęp (3 px) i najdłuższe słowo opisu (~70 px przy 0.85 rem)
          // plus padding 20 px — razem ~114 px. 120 px to zaokrąglony zapas;
          // dokładne dopasowanie sprawdza LAY.4 na realnych krokach.
          if (!(pc.width > 0 && sc.width > 0 && pc.width >= 120 && sc.width >= 120)) {
            panelAt.push(w + ':' + Math.round(pc.width) + '/' + Math.round(sc.width));
          }
          if (pc.width < minContent) minContent = pc.width;
          if (sc.width < minContent) minContent = sc.width;
          if (sc.width < minStroke) minStroke = sc.width;

          for (const step of stroke.querySelectorAll('.stroke-step')) {
            const sr = step.getBoundingClientRect();
            if (step.scrollWidth - step.clientWidth > 1 || sr.right > sc.right + 0.5) {
              strokeAt.push(w + ':' + step.textContent.trim().slice(0, 24));
              break;
            }
          }

          for (const b of controls.querySelectorAll('button')) {
            const br = b.getBoundingClientRect();
            if (b.scrollWidth - b.clientWidth > 1 || br.right > pc.right + 0.5) {
              ctrlAt.push(w + ':' + b.textContent.trim());
              break;
            }
          }

          for (const b of nav.querySelectorAll('button')) {
            if (b.getBoundingClientRect().right > de.clientWidth + 0.5) {
              navAt.push(w + ':' + b.textContent.trim());
              break;
            }
          }

          for (const b of d.querySelectorAll('.learn-section-body .kana-btn')) {
            const r = b.getBoundingClientRect();
            if (r.width <= 0 || r.height <= 0) continue;
            kanaSamples++;
            const m = Math.min(r.width, r.height);
            if (m < minKana) minKana = m;
          }

          // Fiszka egzaminacyjna używa tych samych klas co panel nauki.
          // `.flash-svg` ma nadpisać bazowy `.svg-wrap`; gdyby przegrał,
          // szerokość dobiłaby do limitu 250 px.
          if (w === 390 || w === 1920) {
            const probe = d.createElement('div');
            probe.className = 'svg-wrap flash-svg';
            probe.style.cssText = 'position:absolute;left:-9999px;top:0;';
            d.body.appendChild(probe);
            const pr = probe.getBoundingClientRect();
            probe.remove();
            if (!(pr.width > 0 && pr.width < 250 && Math.abs(pr.width - pr.height) < 1)) {
              flashAt.push(w + ':' + Math.round(pr.width) + 'x' + Math.round(pr.height));
            }
          }
        }

        if (!kanaSamples) throw new Error('iframe: nie zmierzono żadnego przycisku kana');

        ok('LAY.0 viewport iframe równy szerokości testowej', viewportAt.length === 0, viewportAt.join(' '));
        ok('LAY.1 brak poziomego overflow 320–1920', overflowAt.length === 0, overflowAt.join(' '));
        ok(
          'LAY.2 glif mieści się w treści panelu',
          glyphAt.length === 0,
          glyphAt.length ? glyphAt.join(' ') : 'źródło=' + glyphSource + ', min=' + Math.round(minGlyph) + 'px'
        );
        ok(
          'LAY.3 oba panele mają co najmniej 120 px treści',
          panelAt.length === 0,
          panelAt.length ? panelAt.join(' ') : 'min=' + Math.round(minContent) + 'px'
        );
        ok(
          'LAY.4 opisy kresek mieszczą się bez przycinania',
          strokeAt.length === 0,
          strokeAt.length ? strokeAt.join(' ') : 'min treści=' + Math.round(minStroke) + 'px'
        );
        ok('LAY.5 przyciski sterujące bez przepełnienia', ctrlAt.length === 0, ctrlAt.join(' '));
        ok('LAY.6 nawigacja mieści się w oknie', navAt.length === 0, navAt.join(' '));
        ok('LAY.7 przyciski kana >= 44px', minKana >= 44, 'min=' + minKana.toFixed(1));
        ok('LAY.8 fiszka zachowuje własny rozmiar glifu', flashAt.length === 0, flashAt.join(' '));

        // Ekran Słownictwa ma trzy przyciski akcji i na 320 px nie może
        // przycinać eyebrow ani tytułu. Mierzymy realny topbar, nie CSS.
        frame.style.width = '320px';
        await wait(240);
        frame.contentWindow.setScreen('vocab');
        await wait(160);

        const d = frame.contentDocument;
        const win = frame.contentWindow;
        const eyebrow = d.getElementById('scriptEyebrow');
        const title = d.getElementById('appTitle');
        const actions = d.querySelector('.topbar-actions');
        const topbarIssues = [];
        if (!eyebrow || !title || !actions) {
          topbarIssues.push('brak elementów topbara');
        } else {
          if (eyebrow.scrollWidth > eyebrow.clientWidth + 1) {
            topbarIssues.push('eyebrow ' + eyebrow.scrollWidth + '/' + eyebrow.clientWidth);
          }
          if (actions.getBoundingClientRect().left < eyebrow.getBoundingClientRect().right - 0.5) {
            topbarIssues.push('eyebrow pod akcjami');
          }
          if (title.getBoundingClientRect().height > 26) {
            topbarIssues.push('tytuł ' + Math.round(title.getBoundingClientRect().height) + 'px');
          }
        }
        ok('LAY.9 topbar 320 px bez przycięcia', topbarIssues.length === 0, topbarIssues.join(' '));

        // Pytanie „znaczenie → wyrażenie” musi wygrać specyficznością
        // z `.prompt .question`; inaczej przy 320 px ma 44.8 px i wychodzi.
        const probe = d.createElement('div');
        probe.className = 'prompt';
        probe.style.width = '246px';
        probe.innerHTML = '<div class="question question-vocab-pl">proszę odpowiedzieć</div>';
        d.body.appendChild(probe);
        const promptProbe = probe.querySelector('.question');
        const promptStyle = win.getComputedStyle(promptProbe);
        const fontSize = parseFloat(promptStyle.fontSize);
        const promptOverflow = promptProbe.scrollWidth - promptProbe.clientWidth;
        probe.remove();
        ok(
          'LAY.10 pytanie słownictwa 320 px ma zamierzony rozmiar i nie wystaje',
          fontSize <= 34 && promptOverflow <= 1,
          'font=' + fontSize + 'px overflow=' + promptOverflow
        );
      } finally {
        holder.remove();
      }

      /* =====================================================
         G. DANE KRESEK — opisy zgodne z liczbą kresek (#2, §41)
            Liczba opisów w `strokeText` JEST liczbą kresek, bo
            `getStrokeCounts()` bierze `strokes.length`. Gdy opisy
            się rozjeżdżały, panel pokazywał plakietkę z SVG nad
            listą o innej długości.

            Zbiór i liczby poniżej pochodzą z pomiaru wszystkich
            148 części KanjiVG przez `loadKanji()` — 208 znaków,
            z czego 32 się rozjeżdżało. Test jest offline: nie
            sięga do sieci, żeby nie wymagał internetu.
            ===================================================== */
      try {
        const EXPECTED = {
          hiragana: {
            ぎ: 6,
            ぐ: 3,
            げ: 5,
            ご: 4,
            だ: 6,
            ぢ: 4,
            づ: 3,
            で: 3,
            ど: 4,
            ぶ: 6,
            べ: 3,
            ぼ: 6,
            じゃ: 6,
            じゅ: 5,
            じょ: 5,
            びゃ: 6,
            びゅ: 5,
            びょ: 5,
            ぎゃ: 9,
            ぎゅ: 8,
            ぎょ: 8
          },
          katakana: {
            セ: 2,
            テ: 3,
            フ: 1,
            ヤ: 2,
            レ: 1,
            ン: 2,
            ゼ: 4,
            ヂ: 5,
            デ: 5,
            ブ: 3,
            プ: 2
          }
        };

        const wrong = [];
        for (const script of ['hiragana', 'katakana']) {
          const text = scriptData[script].strokeText;
          for (const [kana, expected] of Object.entries(EXPECTED[script])) {
            const list = text[kana];
            const actual = Array.isArray(list) ? list.length : -1;
            if (actual !== expected) wrong.push(kana + '=' + actual + '(ma być ' + expected + ')');
          }
        }
        ok('STR1 liczby kresek zgadzają się z KanjiVG', wrong.length === 0, wrong.join(' '));

        // Jedna pozycja = jedna kreska. Wcześniej 21 hiragana miało
        // jedną pozycję opisującą dwie kreski dakuten naraz.
        const merged = [];
        const empty = [];
        for (const script of ['hiragana', 'katakana']) {
          for (const [kana, list] of Object.entries(scriptData[script].strokeText)) {
            if (!Array.isArray(list) || list.length === 0) {
              empty.push(kana);
              continue;
            }
            list.forEach((desc, i) => {
              if (/dwie|dwa|dwóch/.test(desc)) merged.push(kana + '#' + (i + 1) + ': ' + desc);
            });
          }
        }
        ok('STR2 żaden opis nie łączy dwóch kresek', merged.length === 0, merged.slice(0, 4).join(' | '));
        ok('STR3 każdy znak ma co najmniej jeden opis', empty.length === 0, empty.join(' '));

        // Liczba opisów jest tym, co widzi użytkownik w plakietce i na
        // liście — dla dwóch znaków sprawdzamy to także przez DOM.
        const dom = [];
        for (const [script, kana] of [
          ['hiragana', 'ぎ'],
          ['katakana', 'フ']
        ]) {
          state.script = script;
          state.kana = kana;
          setScreen('learn');
          const badge = document.getElementById('strokeBadge').textContent;
          const n = document.querySelectorAll('#strokeList .stroke-step').length;
          const expected = EXPECTED[script][kana];
          if (n !== expected) dom.push(kana + ': lista=' + n);
          if (badge.indexOf(String(expected)) !== 0) dom.push(kana + ': plakietka=' + badge);
        }
        ok('STR4 plakietka i lista opisów pokazują tę samą liczbę', dom.length === 0, dom.join(' | '));
      } catch (e) {
        ok('STR dane kresek', false, e.message);
      }

      /* =====================================================
         H. T13 WARSTWA 1 — rysowanie znaku i czyszczenie.
            Sprawdzamy stan początkowy, przełącznik, ślad po
            zdarzeniach wskaźnika, czyszczenie oraz to, że
            podmiana zawartości kontenera przez `mountKana` nie
            zjada canvasa. To warstwa RYSOWANIA — ocena rysunku
            (warstwa 2) jeszcze nie istnieje i tu jej nie ma.
         ===================================================== */
      try {
        state.script = 'hiragana';
        state.kana = 'あ';
        setScreen('learn');

        const wrap = document.getElementById('svgWrap');
        const canvas = document.getElementById('drawCanvas');
        const toggle = document.getElementById('drawToggle');
        const clear = document.getElementById('clearDrawing');
        const playback = document.getElementById('playbackControls');
        const tools = document.getElementById('drawingTools');
        const controls = toggle.closest('.controls');
        const toggleBox = toggle.getBoundingClientRect();

        const pixels = () => {
          const data = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
          let count = 0;
          for (let i = 3; i < data.length; i += 4) if (data[i] > 0) count++;
          return count;
        };

        // `buttons: 1`, bo podmowa kreski kończy rysowanie, gdy przycisk
        // nie jest wciśnięty (puszczenie poza polem).
        const fire = (type, fx, fy) => {
          const box = canvas.getBoundingClientRect();
          canvas.dispatchEvent(
            new PointerEvent(type, {
              bubbles: true,
              cancelable: true,
              pointerId: 1,
              pointerType: 'mouse',
              isPrimary: true,
              buttons: 1,
              clientX: box.left + box.width * fx,
              clientY: box.top + box.height * fy
            })
          );
        };

        ok(
          'D1 canvas rysowania jest w kontenerze znaku',
          !!canvas && wrap.contains(canvas),
          canvas ? 'ok' : 'brak canvasa'
        );
        ok(
          'D2 rysowanie jest domyślnie wyłączone',
          !wrap.classList.contains('drawing') && toggle.getAttribute('aria-pressed') === 'false',
          'klasa="' + wrap.className + '" aria-pressed=' + toggle.getAttribute('aria-pressed')
        );
        ok(
          'D3 „Wyczyść" jest ukryte i zablokowane poza trybem rysowania',
          clear.disabled === true &&
            tools.classList.contains('is-inactive') &&
            getComputedStyle(tools).visibility === 'hidden',
          'disabled=' + clear.disabled + ' inactive=' + tools.classList.contains('is-inactive')
        );

        toggle.click();
        ok(
          'D4 włączenie rysowania oznacza kontener i odblokowuje „Wyczyść"',
          wrap.classList.contains('drawing') &&
            toggle.getAttribute('aria-pressed') === 'true' &&
            clear.disabled === false &&
            !tools.classList.contains('is-inactive'),
          'klasa="' +
            wrap.className +
            '" aria-pressed=' +
            toggle.getAttribute('aria-pressed') +
            ' disabled=' +
            clear.disabled
        );
        ok(
          'D4a tryb rysowania chowa odtwarzanie i podgląd kresek',
          playback.classList.contains('is-inactive') && getComputedStyle(playback).visibility === 'hidden',
          'inactive=' + playback.classList.contains('is-inactive')
        );
        ok(
          'D4b oba zestawy narzędzi zajmują ten sam wiersz siatki',
          getComputedStyle(playback).gridRowStart === getComputedStyle(tools).gridRowStart,
          getComputedStyle(playback).gridRowStart + ' / ' + getComputedStyle(tools).gridRowStart
        );

        const drawingBox = toggle.getBoundingClientRect();
        const controlsWidth = controls.getBoundingClientRect().width;
        ok(
          'D4c „Rysuj” i „Koniec rysowania” zajmują ten sam slot',
          Math.abs(toggleBox.x - drawingBox.x) < 1 &&
            Math.abs(toggleBox.y - drawingBox.y) < 1 &&
            Math.abs(toggleBox.width - drawingBox.width) < 1,
          `przed=${Math.round(toggleBox.x)},${Math.round(toggleBox.y)}x${Math.round(toggleBox.width)} ` +
            `po=${Math.round(drawingBox.x)},${Math.round(drawingBox.y)}x${Math.round(drawingBox.width)}`
        );
        ok(
          'D4d przycisk rysowania zajmuje cały rząd',
          Math.abs(drawingBox.width - controlsWidth) < 1,
          `przycisk=${Math.round(drawingBox.width)} szerokość=${Math.round(controlsWidth)}`
        );
        ok(
          'D5 canvas przechwytuje dotyk (touch-action: none)',
          getComputedStyle(canvas).touchAction === 'none',
          getComputedStyle(canvas).touchAction
        );

        const before = pixels();
        fire('pointerdown', 0.3, 0.3);
        fire('pointermove', 0.5, 0.5);
        fire('pointermove', 0.7, 0.7);
        fire('pointerup', 0.7, 0.7);
        ok('D6 rysowanie zostawia ślad na canvasie', pixels() > before, 'pikseli: ' + before + ' → ' + pixels());

        clear.click();
        ok('D7 „Wyczyść" usuwa ślad', pixels() === 0, 'pikseli: ' + pixels());

        const placeholder = wrap.querySelector('.loading');
        toggle.click();
        ok(
          'D8 wyłączenie rysowania zdejmuje tryb, blokuje i chowa „Wyczyść"',
          !wrap.classList.contains('drawing') &&
            toggle.getAttribute('aria-pressed') === 'false' &&
            clear.disabled === true &&
            tools.classList.contains('is-inactive'),
          'klasa="' +
            wrap.className +
            '" aria-pressed=' +
            toggle.getAttribute('aria-pressed') +
            ' disabled=' +
            clear.disabled
        );
        ok(
          'D8a wyjście z rysowania przywraca odtwarzanie i podgląd kresek',
          !playback.classList.contains('is-inactive'),
          'inactive=' + playback.classList.contains('is-inactive')
        );
        ok(
          'D9 przełączenie trybu nie rusza zawartości kontenera znaku',
          wrap.querySelector('.loading') === placeholder,
          placeholder ? 'element zachowany' : 'brak placeholdera'
        );

        // Ścieżka awaryjna: bez KanjiVG `mountKana` podmienia zawartość
        // kontenera, a canvas musi to przetrwać — inaczej tryb rysowania
        // znikałby dokładnie użytkownikowi bez internetu.
        const holder = document.createElement('div');
        holder.className = 'svg-wrap';
        holder.style.cssText = 'position:relative;width:200px;height:200px';
        document.body.appendChild(holder);
        const probe = document.createElement('canvas');
        probe.id = 'drawProbe';

        const realLoadKanji = loadKanji;
        try {
          loadKanji = async () => null; // symulacja braku dostępu do KanjiVG
          await mountKana(holder, 'あ', { overlay: probe });
          ok(
            'D10 canvas przetrwał awaryjną ścieżkę mountKana',
            holder.contains(probe) && !!holder.querySelector('.kana-fallback'),
            'canvas=' + holder.contains(probe) + ' fallback=' + !!holder.querySelector('.kana-fallback')
          );
        } finally {
          loadKanji = realLoadKanji;
          holder.remove();
        }
      } catch (e) {
        ok('D rysowanie', false, e.message);
      }

      /* =====================================================
         I. T13 WARSTWA 2 — ocena rysunku.
            Funkcje oceny są czyste, więc liczymy je na
            syntetycznych łamanych (S1–S8). Potem cała ścieżka w
            DOM na podstawionym `loadKanji` (S9–S12) — test nie
            zależy od sieci, a to jedyny sposób, żeby „Sprawdź"
            miało wzór kresek.
         ===================================================== */
      try {
        const horizontal = [
          { x: 10, y: 50 },
          { x: 50, y: 50 },
          { x: 90, y: 50 }
        ];
        const referenceLine = resample(horizontal, 24);

        const thinned = resample(horizontal, 4);
        ok(
          'S1 resample zwraca zadaną liczbę punktów i zachowuje końce',
          thinned.length === 5 && thinned[0].x === 10 && thinned[4].x === 90 && thinned[4].y === 50,
          'punktów=' + thinned.length + ' koniec=' + JSON.stringify(thinned[4])
        );

        const above = distanceToSegment({ x: 50, y: 55 }, { x: 0, y: 50 }, { x: 100, y: 50 });
        ok(
          'S2 odległość punktu od odcinka to rzut, nie odległość od wierzchołka',
          Math.abs(above - 5) < 1e-9,
          String(above)
        );

        const same = scoreDrawing([referenceLine], [referenceLine], 200);
        ok('S3 identyczna kreska przechodzi próg', same.score >= 0.85 && same.count === 1, JSON.stringify(same));

        const backwards = resample(
          [
            { x: 90, y: 50 },
            { x: 50, y: 50 },
            { x: 10, y: 50 }
          ],
          24
        );
        const reversed = scoreDrawing([backwards], [referenceLine], 200);
        ok(
          'S4 kreska odwrócona traci na kierunku',
          reversed.direction < 0.1 && reversed.score < same.score,
          'kierunek=' + reversed.direction + ' ocena=' + reversed.score
        );

        const doubled = scoreDrawing([referenceLine, referenceLine], [referenceLine], 200);
        ok(
          'S5 nadmiarowa kreska obniża ocenę i nie przechodzi progu',
          doubled.count === 0 && doubled.made === 2 && doubled.expected === 1 && doubled.score < 0.7,
          JSON.stringify(doubled)
        );

        const blank = scoreDrawing([], [referenceLine], 200);
        ok('S6 pusty rysunek nie przechodzi', blank.score === 0 && blank.made === 0, JSON.stringify(blank));

        const offLine = resample(
          [
            { x: 10, y: 150 },
            { x: 90, y: 150 }
          ],
          24
        );
        const scribble = scoreDrawing([offLine], [referenceLine], 200);
        ok(
          'S7 bazgroły poza znakiem nie dają ani pokrycia, ani precyzji',
          scribble.coverage === 0 && scribble.precision === 0 && scribble.score < 0.7,
          JSON.stringify(scribble)
        );

        ok(
          'S8 werdykt mówi, co poprawić, zamiast samego „nie"',
          /inna liczba kresek/.test(drawVerdict(doubled)) && /kształt znaku/.test(drawVerdict(scribble)),
          drawVerdict(doubled) + ' | ' + drawVerdict(scribble)
        );

        const backwardsScore = scoreDrawing([backwards], [referenceLine], 200);
        ok(
          'S15 odwrócona kreska nie przechodzi i jest wskazana numerem',
          backwardsScore.pairs[0].agreement < 0.25 &&
            backwardsScore.passed === false &&
            /odwrotnie: kreska 1/.test(drawVerdict(backwardsScore)),
          drawVerdict(backwardsScore) + ' passed=' + backwardsScore.passed
        );

        /* --- cała ścieżka w DOM, bez sieci --- */
        const realLoadKanji = loadKanji;
        try {
          loadKanji = async () => [
            { kana: 'い', paths: ['M10 50 L90 50'], numbers: [{ transform: null, label: '1' }] }
          ];

          state.script = 'hiragana';
          state.kana = 'い';
          setScreen('learn');
          await wait(120);

          const wrap = document.getElementById('svgWrap');
          const canvas = document.getElementById('drawCanvas');
          const toggle = document.getElementById('drawToggle');
          const clear = document.getElementById('clearDrawing');
          const check = document.getElementById('checkDrawing');
          const tools = document.getElementById('drawingTools');
          const verdict = document.getElementById('drawResult');

          ok(
            'S9 „Sprawdź" czeka, aż będzie i wzór, i rysunek',
            check.disabled === true && !!canvas && verdict.textContent === '',
            'disabled=' + check.disabled + ' canvas=' + !!canvas
          );

          ok(
            'S16 przycisk oceny nie myli się z egzaminacyjnym „Sprawdź się"',
            /rysunek/.test(check.textContent) && check.id === 'checkDrawing',
            check.textContent
          );

          toggle.click();
          const box = canvas.getBoundingClientRect();
          const stroke = (x1, y1, x2, y2) => {
            const fire = (type, fx, fy) =>
              canvas.dispatchEvent(
                new PointerEvent(type, {
                  bubbles: true,
                  cancelable: true,
                  pointerId: 1,
                  pointerType: 'mouse',
                  isPrimary: true,
                  buttons: 1,
                  clientX: box.left + box.width * fx,
                  clientY: box.top + box.height * fy
                })
              );

            fire('pointerdown', x1, y1);
            for (let i = 1; i <= 8; i++) {
              fire('pointermove', x1 + ((x2 - x1) * i) / 8, y1 + ((y2 - y1) * i) / 8);
            }
            fire('pointerup', x2, y2);
          };

          // wzór to pozioma kreska w połowie wysokości (y = 50/109)
          stroke(0.15, 0.46, 0.85, 0.46);
          ok('S10 kreska zgodna ze wzorem odblokowuje „Sprawdź"', check.disabled === false, String(check.disabled));

          check.click();
          ok(
            'S11 rysunek zgodny ze wzorem jest rozpoznany',
            /Dobrze|Świetnie/.test(verdict.textContent),
            verdict.textContent
          );
          ok('S12 werdykt pozytywny dostaje wyróżnienie', verdict.classList.contains('passed'), verdict.className);

          clear.click();
          ok(
            'S13 czyszczenie cofa werdykt i blokuje „Sprawdź"',
            verdict.textContent === '' && check.disabled === true,
            'tekst="' + verdict.textContent + '" disabled=' + check.disabled
          );

          stroke(0.5, 0.15, 0.5, 0.85); // pion — zły zarówno kierunek, jak i kształt
          check.click();
          ok(
            'S14 kreska o złym kierunku i kształcie nie przechodzi',
            /Jeszcze nie to/.test(verdict.textContent) && !verdict.classList.contains('passed'),
            verdict.textContent
          );

          /* --- ustawienie: wzór ukrywany przy rysowaniu --- */
          const guideOpacity = () => getComputedStyle(wrap.querySelector('svg')).opacity;

          setHideGuide(SETTINGS_DEFAULTS.hideGuide);
          ok(
            'S17 domyślnie wzór przy rysowaniu jest widoczny',
            SETTINGS_DEFAULTS.hideGuide === false && !wrap.classList.contains('hide-guide') && guideOpacity() !== '0',
            'domyślna=' + SETTINGS_DEFAULTS.hideGuide + ' opacity=' + guideOpacity()
          );

          setHideGuide(true);
          ok(
            'S18 „Ukryty" usuwa wzór w trybie rysowania',
            wrap.classList.contains('hide-guide') && guideOpacity() === '0',
            'klasa=' + wrap.classList.contains('hide-guide') + ' opacity=' + guideOpacity()
          );
          ok(
            'S19 wybór przeżywa ponowne wczytanie ustawień',
            loadSettings().hideGuide === true,
            String(loadSettings().hideGuide)
          );

          setHideGuide(false);
          ok(
            'S20 „Widoczny" przywraca bladą podkładkę',
            !wrap.classList.contains('hide-guide') && Number(guideOpacity()) > 0,
            'opacity=' + guideOpacity()
          );

          /* --- skrót w panelu nauki, obok rysowania --- */
          const guideShortcut = document.getElementById('hideGuideToggle');
          ok(
            'S21 skrót do wzoru jest widoczny w trybie rysowania',
            !!guideShortcut &&
              !tools.classList.contains('is-inactive') &&
              getComputedStyle(tools).visibility === 'visible' &&
              guideShortcut.getAttribute('aria-pressed') === 'false' &&
              /Ukryj wzór/.test(guideShortcut.textContent),
            guideShortcut ? guideShortcut.textContent.trim() : 'brak przycisku'
          );

          if (guideShortcut) guideShortcut.click();
          ok(
            'S22 skrót ukrywa wzór, zapisuje wybór i zmienia etykietę',
            settings.hideGuide === true &&
              guideOpacity() === '0' &&
              loadSettings().hideGuide === true &&
              /Pokaż wzór/.test(guideShortcut.textContent),
            'opacity=' + guideOpacity() + ' tekst=' + (guideShortcut ? guideShortcut.textContent.trim() : '')
          );

          // poza trybem rysowania ukrywanie wzoru nic nie zmienia, więc skrót znika
          toggle.click();
          ok(
            'S23 skrót chowa się po wyjściu z rysowania',
            !!guideShortcut &&
              tools.classList.contains('is-inactive') &&
              getComputedStyle(tools).visibility === 'hidden',
            guideShortcut ? 'inactive=' + tools.classList.contains('is-inactive') : 'brak przycisku'
          );
          toggle.click();

          setScreen('settings');
          await wait(400);
          const guideBtn = document.querySelector('[data-hide-guide-set="true"]');
          const guideCard = guideBtn ? guideBtn.closest('.settings-group') : null;
          ok(
            'S24 Ustawienia mają przełącznik wzoru w karcie „Rysowanie"',
            !!guideBtn &&
              guideBtn.getAttribute('aria-pressed') === 'true' &&
              !!guideCard &&
              guideCard.querySelector('h3').textContent === 'Rysowanie',
            guideBtn ? 'aria-pressed=' + guideBtn.getAttribute('aria-pressed') : 'brak przycisku'
          );

          if (guideBtn) guideBtn.click();
          const visibleBtn = document.querySelector('[data-hide-guide-set="false"]');
          if (visibleBtn) visibleBtn.click();
          ok(
            'S25 kliknięcie w „Widoczny" zapisuje wybór',
            settings.hideGuide === false && loadSettings().hideGuide === false,
            'hideGuide=' + settings.hideGuide
          );
          setHideGuide(false);
        } finally {
          loadKanji = realLoadKanji;
        }
      } catch (e) {
        ok('S ocena rysunku', false, e.message);
      }

      /* =====================================================
         SŁOWNICTWO (T19) — fiszki
         ===================================================== */
      try {
        localStorage.removeItem(VOCAB_KEY);
        vocab = loadVocab();
        state.vocab = null;
        setScreen('vocab');
        await wait(400);

        const scopeCount = scope => vocabPool(scope).length;

        ok(
          'F1 wejście w fiszki pokazuje tryb, kierunek, zakres, kolejność i limit',
          !!document.getElementById('vocabStart') &&
            document.querySelectorAll('[data-vocab-mode]').length === 2 &&
            document.querySelectorAll('[data-vocab-direction]').length === 2 &&
            document.querySelectorAll('[data-vocab-scope]').length === 5 &&
            document.querySelectorAll('[data-vocab-order]').length === 2 &&
            document.querySelectorAll('[data-vocab-limit]').length === 3 &&
            !document.getElementById('vocabBack'),
          document.querySelectorAll('[data-vocab-mode]').length +
            '/' +
            document.querySelectorAll('[data-vocab-direction]').length +
            '/' +
            document.querySelectorAll('[data-vocab-scope]').length +
            '/' +
            document.querySelectorAll('[data-vocab-order]').length +
            '/' +
            document.querySelectorAll('[data-vocab-limit]').length
        );

        ok(
          'F1b domyślnie otwiera się nauka, nie test',
          vocabSetup.mode === 'learn' &&
            document.querySelector('[data-vocab-mode="learn"]').classList.contains('active') &&
            document.querySelector('[data-vocab-order="smart"]').classList.contains('active') &&
            document.querySelector('[data-vocab-limit="0"]').classList.contains('active'),
          vocabSetup.mode
        );

        ok(
          'F2 domyślny zakres to wszystko: 20 poleceń, 22 czasowniki, 7 rzeczowników i 8 zwrotów',
          vocabSetup.scope === 'all' &&
            scopeCount('cards') === 20 &&
            scopeCount('verbs') === 22 &&
            scopeCount('words') === 7 &&
            scopeCount('phrases') === 8 &&
            scopeCount('all') === 57,
          ['cards', 'verbs', 'words', 'phrases', 'all'].map(scopeCount).join('/')
        );

        vocabSetup.mode = 'test';
        document.getElementById('vocabStart').click();
        await wait(250);

        const promptEl = document.querySelector('.question-vocab');
        const optionButtons = [...document.querySelectorAll('[data-vocab-choice]')];
        const firstItem = vocabItem(state.vocab.order[0]);

        ok(
          'F3 zestaw startuje od pierwszej karty z czterema odpowiedziami',
          !!promptEl && promptEl.textContent.trim() === firstItem.kana && optionButtons.length === 4,
          optionButtons.length + ' opcji, karta ' + (promptEl ? promptEl.textContent.trim() : 'brak')
        );

        ok(
          'F4 dokładnie jedna odpowiedź jest poprawna',
          optionButtons.filter(button => button.dataset.vocabChoice === firstItem.meaning).length === 1,
          optionButtons.map(button => button.dataset.vocabChoice).join(' | ')
        );

        optionButtons.find(button => button.dataset.vocabChoice === firstItem.meaning).click();
        await wait(150);

        const firstStat = vocabStat(firstItem.id);
        ok(
          'F5 poprawna odpowiedź zapisuje się w magazynie słownictwa',
          firstStat.seen === 1 && firstStat.correct === 1 && state.vocab.correct === 1,
          JSON.stringify(firstStat)
        );
        ok(
          'F5a feedback testu jest ogłaszany czytnikom ekranu',
          document.getElementById('vocabFeedback')?.getAttribute('role') === 'status' &&
            document.getElementById('vocabFeedback')?.getAttribute('aria-live') === 'polite'
        );

        ok(
          'F6 po odpowiedzi widać fiszkę z romaji, a opcje są zablokowane',
          !!document.querySelector('.flashcard') &&
            document.querySelector('.flashcard').textContent.includes(firstItem.romaji) &&
            !!document.querySelector('[data-vocab-choice].correct') &&
            [...document.querySelectorAll('[data-vocab-choice]')].every(button => button.disabled),
          document.querySelector('.flashcard') ? 'fiszka jest' : 'brak fiszki'
        );

        document.getElementById('vocabNext').click();
        await wait(150);

        const secondItem = vocabItem(state.vocab.order[1]);
        const wrongButton = [...document.querySelectorAll('[data-vocab-choice]')].find(
          button => button.dataset.vocabChoice !== secondItem.meaning
        );
        wrongButton.click();
        await wait(150);

        const secondStat = vocabStat(secondItem.id);
        ok(
          'F7 zła odpowiedź trafia do magazynu i jest oznaczona',
          secondStat.seen === 1 &&
            secondStat.wrong === 1 &&
            !!document.querySelector('[data-vocab-choice].wrong') &&
            !!document.querySelector('[data-vocab-choice].correct'),
          JSON.stringify(secondStat)
        );

        // Przechodzimy przez resztę zestawu, żeby zobaczyć ekran wyniku.
        let guard = 0;
        while (state.vocab && !state.vocab.finished && guard++ < 80) {
          const item = vocabItem(state.vocab.order[state.vocab.index]);
          const right = [...document.querySelectorAll('[data-vocab-choice]')].find(
            button => button.dataset.vocabChoice === item.meaning
          );
          if (right && !right.disabled) right.click();
          await wait(40);
          const nextStep = document.getElementById('vocabNext');
          if (nextStep) nextStep.click();
          await wait(40);
        }

        ok(
          'F8 po ostatniej karcie widać wynik zestawu bez osobnego powrotu',
          state.vocab.finished &&
            /Koniec zestawu/.test(app.textContent) &&
            !!document.getElementById('vocabAgain') &&
            !document.getElementById('vocabBack'),
          app.textContent.replace(/\s+/g, ' ').slice(0, 70)
        );

        const storedBefore = Object.keys(vocab.cards).length;
        document.getElementById('vocabAgain').click();
        await wait(250);
        ok(
          'F9 „Jeszcze raz" zaczyna od nowa i nie kasuje zapisu',
          state.vocab.index === 0 && state.vocab.correct === 0 && Object.keys(vocab.cards).length === storedBefore,
          'karty=' + Object.keys(vocab.cards).length
        );

        homeBtn.click();
        await wait(300);
        ok(
          'F10 wyjście z fiszek przez przycisk domu wraca do menu',
          state.screen === 'menu' &&
            state.vocab === null &&
            !!document.getElementById('learnCard') &&
            !document.getElementById('vocabCard'),
          state.screen
        );

        /* --- kierunek „znaczenie → wyrażenie" --- */
        state.vocab = null;
        vocabSetup.mode = 'test';
        vocabSetup.direction = 'meaning-kana';
        vocabSetup.scope = 'cards';
        setScreen('vocab');
        await wait(300);
        document.getElementById('vocabStart').click();
        await wait(250);

        const plPrompt = document.querySelector('.question-vocab-pl');
        const kanaOptions = [...document.querySelectorAll('[data-vocab-choice]')];
        const firstKanaItem = vocabItem(state.vocab.order[0]);
        const kanaOnly = /^[ぁ-んァ-ヶー～（）。\s]+$/;

        ok(
          'F11 kierunek znaczenie → wyrażenie pyta po polsku i odpowiada kana',
          !!plPrompt &&
            plPrompt.textContent.trim() === firstKanaItem.meaning &&
            kanaOptions.length === 4 &&
            kanaOptions.every(button => kanaOnly.test(button.dataset.vocabChoice)),
          (plPrompt ? plPrompt.textContent.trim() : 'brak pytania') +
            ' / ' +
            kanaOptions.map(button => button.dataset.vocabChoice).join(' | ')
        );

        kanaOptions.find(button => button.dataset.vocabChoice === firstKanaItem.kana).click();
        await wait(150);
        ok(
          'F12 poprawna odpowiedź w drugim kierunku zapisuje się',
          state.vocab.correct === 1 && vocabStat(firstKanaItem.id).correct === 1,
          JSON.stringify(vocabStat(firstKanaItem.id))
        );

        /* --- karty czasowników --- */
        state.vocab = null;
        vocabSetup.mode = 'test';
        vocabSetup.direction = 'kana-meaning';
        vocabSetup.scope = 'verbs';
        setScreen('vocab');
        await wait(300);
        document.getElementById('vocabStart').click();
        await wait(250);

        const verbItem = vocabItem(state.vocab.order[0]);
        const sourceItem = vocabItem(verbItem.source);
        [...document.querySelectorAll('[data-vocab-choice]')]
          .find(button => button.dataset.vocabChoice === verbItem.meaning)
          .click();
        await wait(200);

        ok(
          'F13 czasownik ma własną kartę i pokazuje wyrażenie źródłowe',
          verbItem.type === 'verb' &&
            verbItem.source === sourceItem.id &&
            !!document.querySelector('.flashcard') &&
            document.querySelector('.flashcard').textContent.includes(sourceItem.kana),
          verbItem.kana + ' ← ' + sourceItem.kana
        );

        ok(
          'F14 postęp czasownika zapisuje się pod id v01-verb',
          recordVocabAnswer('v01-verb', true) === true && vocabStat('v01-verb').seen >= 1,
          JSON.stringify(vocabStat('v01-verb'))
        );

        /* --- losowa kolejność i limit kart --- */
        state.vocab = null;
        vocabSetup.mode = 'test';
        vocabSetup.scope = 'all';
        vocabSetup.order = 'smart';
        vocabSetup.limit = 0;
        setScreen('vocab');
        await wait(300);

        document.querySelector('[data-vocab-order="shuffle"]').focus();
        document.querySelector('[data-vocab-order="shuffle"]').click();
        await wait(80);
        ok(
          'F15a fokus zostaje na wybranej kolejności po przerysowaniu',
          document.activeElement === document.querySelector('[data-vocab-order="shuffle"]'),
          document.activeElement?.outerHTML?.slice(0, 80) || 'brak fokusu'
        );

        document.querySelector('[data-vocab-limit="10"]').focus();
        document.querySelector('[data-vocab-limit="10"]').click();
        await wait(80);
        ok(
          'F15b fokus zostaje na wybranym limicie po przerysowaniu',
          document.activeElement === document.querySelector('[data-vocab-limit="10"]'),
          document.activeElement?.outerHTML?.slice(0, 80) || 'brak fokusu'
        );

        ok(
          'F15 wybór losowej kolejności i limitu jest widoczny w podsumowaniu',
          vocabSetup.order === 'shuffle' &&
            vocabSetup.limit === 10 &&
            document.querySelector('[data-vocab-order="shuffle"]').classList.contains('active') &&
            document.querySelector('[data-vocab-limit="10"]').classList.contains('active') &&
            document.querySelector('.vocab-summary-item strong').textContent === '10',
          vocabSetup.order + '/' + vocabSetup.limit
        );

        document.getElementById('vocabStart').click();
        await wait(250);
        ok(
          'F16 losowa sesja ma dziesięć unikalnych kart',
          state.vocab.order.length === 10 && new Set(state.vocab.order).size === 10,
          state.vocab.order.join(',')
        );

        /* --- nauka: odkrycie, samoocena i powtórka błędnych --- */
        state.vocab = null;
        vocabSetup.mode = 'learn';
        vocabSetup.scope = 'cards';
        vocabSetup.order = 'smart';
        vocabSetup.limit = 10;
        setScreen('vocab');
        await wait(300);
        document.getElementById('vocabStart').click();
        await wait(250);

        const learnItem = vocabItem(state.vocab.order[0]);
        const learnBefore = vocabStat(learnItem.id);
        ok(
          'F17 nauka pokazuje zakrytą fiszkę bez czterech odpowiedzi',
          state.vocab.mode === 'learn' &&
            !!document.getElementById('vocabReveal') &&
            !document.getElementById('vocabNext') &&
            !document.getElementById('vocabBack') &&
            document.querySelectorAll('[data-vocab-choice]').length === 0,
          state.vocab.mode
        );

        document.getElementById('vocabReveal').click();
        await wait(150);
        ok(
          'F18 odkrycie pokazuje odpowiedź i dwa przyciski samooceny',
          state.vocab.revealed &&
            !!document.querySelector('.vocab-learn-answer') &&
            document.querySelectorAll('[data-vocab-grade]').length === 2,
          document.querySelector('.vocab-learn-answer')?.textContent.trim().slice(0, 40) || 'brak'
        );

        document.querySelector('[data-vocab-grade="wrong"]').click();
        await wait(150);
        ok(
          'F19 samoocena „Nie wiedziałem” zapisuje błąd i pokazuje Dalej',
          state.vocab.answered &&
            state.vocab.wrong === 1 &&
            vocabStat(learnItem.id).wrong === learnBefore.wrong + 1 &&
            vocabStat(learnItem.id).seen === learnBefore.seen + 1 &&
            !!document.getElementById('vocabNext'),
          JSON.stringify(vocabStat(learnItem.id))
        );
        ok(
          'F19a feedback nauki jest ogłaszany czytnikom ekranu',
          document.querySelector('.vocab-learn-feedback')?.getAttribute('role') === 'status' &&
            document.querySelector('.vocab-learn-feedback')?.getAttribute('aria-live') === 'polite'
        );

        state.vocab.index = state.vocab.order.length - 1;
        document.getElementById('vocabNext').click();
        await wait(200);
        ok(
          'F20 wynik oferuje powtórkę błędnych kart',
          state.vocab.finished &&
            !!document.getElementById('vocabRetryWrong') &&
            document.getElementById('vocabRetryWrong').textContent.includes('1'),
          app.textContent.replace(/\s+/g, ' ').slice(0, 80)
        );

        document.getElementById('vocabRetryWrong').click();
        await wait(200);
        ok(
          'F21 powtórka błędnych uruchamia tylko tę jedną kartę',
          state.vocab.order.length === 1 && state.vocab.order[0] === learnItem.id && state.vocab.mode === 'learn',
          state.vocab.order.join(',')
        );

        // Nawigacja z menu z powrotem w Słownictwo nie może pokazać
        // wyniku poprzedniego zestawu.
        state.vocab.finished = true;
        renderVocab();
        await wait(100);
        document.querySelector('[data-nav="kana"]').click();
        await wait(120);
        document.querySelector('[data-nav="vocab"]').click();
        await wait(120);
        ok(
          'F22 wejście w Słownictwo z menu otwiera setup, nie stary wynik',
          state.screen === 'vocab' && state.vocab === null && !!document.getElementById('vocabStart'),
          state.vocab ? 'stary stan sesji' : 'setup'
        );

        state.vocab = { finished: true };
        resetProgressData();
        ok('F23 reset postępu czyści stan fiszek', state.vocab === null, String(state.vocab));

        state.vocab = { finished: true };
        clearAllData();
        ok('F24 czyszczenie danych czyści stan fiszek', state.vocab === null, String(state.vocab));

        vocabSetup.mode = 'learn';
        vocabSetup.direction = 'kana-meaning';
        vocabSetup.scope = 'all';
        vocabSetup.order = 'smart';
        vocabSetup.limit = 0;
        state.vocab = null;
        setScreen('menu');
        await wait(200);
      } catch (e) {
        ok('fiszki słownictwa', false, e.message);
      }

      /* =====================================================
         BOTH. PANEL ZNAKÓW W TRYBIE „OBA"
         -----------------------------------------------------
         Ta sama sekcja kategorii zawiera dwa alfabety, więc granica
         między nimi musi być oznaczona, a klik w katakanę musi ustawić
         klucz grupy z prefiksem `k:` — inaczej nawigacja strzałkami
         chodziłaby po grupie hiragany o tym samym bazowym id.
         ===================================================== */
      try {
        setScript('both');
        setScreen('learn');
        await wait(900);

        const bothSec = id => document.querySelector('.learn-section[data-category="' + id + '"]');
        const bothCounts = ['basic', 'dakuten', 'handakuten', 'yoon'].map(id =>
          parseInt(bothSec(id).querySelector('.learn-section-count').textContent.trim(), 10)
        );
        const scriptLabels = [...document.querySelectorAll('.kana-script-label')].map(el => el.textContent.trim());

        ok(
          'BOTH1 panel pokazuje 208 znaków',
          document.querySelectorAll('.sidebar [data-kana]').length === 208,
          String(document.querySelectorAll('.sidebar [data-kana]').length)
        );
        ok('BOTH2 liczniki sekcji obejmują oba alfabety', bothCounts.join('/') === '92/40/10/66', bothCounts.join('/'));
        ok('BOTH3 każda sekcja ma granicę alfabetów', scriptLabels.length === 8, String(scriptLabels.length));
        ok(
          'BOTH4 granice to Hiragana i Katakana na przemian',
          scriptLabels.join(',') === 'Hiragana,Katakana,Hiragana,Katakana,Hiragana,Katakana,Hiragana,Katakana',
          scriptLabels.join(',')
        );

        document.querySelector('[data-kana="ア"]').click();
        await wait(400);

        ok(
          'BOTH5 klik w katakanę ustawia klucz grupy k:a',
          state.group === 'k:a' && state.kana === 'ア',
          state.group + '/' + state.kana
        );
        ok(
          'BOTH6 aktywny przycisk to ア',
          document.querySelector('.kana-btn.active').textContent.trim() === 'ア',
          document.querySelector('.kana-btn.active').textContent.trim()
        );
        ok(
          'BOTH7 karta pokazuje nazwę grupy, nie skryptu',
          document.querySelector('.study-card .eyebrow').textContent.trim() === 'Samogłoski',
          document.querySelector('.study-card .eyebrow').textContent.trim()
        );

        // powrót do stanu, na którym kończyły poprzednie sekcje
        setScript('hiragana');
        setScreen('menu');
      } catch (e) {
        ok('tryb both w panelu nauki', false, e.message);
      }

      report();
    } catch (e) {
      R.push('FAIL threw :: ' + e.message + ' | ' + String(e.stack).split('\n').slice(0, 3).join(' >> '));
      report();
    }
  })();
})();
