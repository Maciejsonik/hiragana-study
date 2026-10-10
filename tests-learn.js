/*
   Testy panelu nauki: accordion, układ boczka, okablowanie animacji.

   Pokryte regresje:
     1. Zwinięta sekcja nie otwierała się sama przy zmianie znaku
        (`openByDefault` był przeliczany przy każdym renderze).
     2. Strzałki nie odsłaniały sekcji, na którą wjechaliśmy.
     3. Najechanie strzałkami zostawiało sekcję rozwiniętą na stałe.
     4. Dwuznakowe kana yōon (きゃ, しゅ, ちょ…) łamały się na dwa wiersze
        w przycisku 37px i wyglądały jak kolumna zamiast wiersza.

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
  const sec = id => document.querySelector('.learn-section[data-category="' + id + '"]');
  const ids = ['basic', 'dakuten', 'handakuten', 'yoon'];
  const openIds = () => ids.filter(i => sec(i) && sec(i).open);
  const catOf = kana => learnCategoryOf(getGroups().find(g => g.chars.some(c => c[0] === kana)).id);

  // klik z oczekiwaniem na element — scena nie może być wyższa niż render
  async function clickKana(kana, tries) {
    for (let i = 0; i < (tries || 40); i++) {
      const el = document.querySelector('[data-kana="' + kana + '"]');
      if (el) { el.click(); await wait(350); return true; }
      await wait(100);
    }
    return false;
  }
  // przeglądarka nie odpala transitionrun dla ::details-content, więc stan
  // po kliknięciu odczytujemy po krótkiej chwili
  const clickHead = async id => { sec(id).querySelector('summary').click(); await wait(350); };
  const ensureClosed = async id => { if (sec(id).open) await clickHead(id); };
  const ensureOpen = async id => { if (!sec(id).open) await clickHead(id); };

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
      await wait(1500);

      /* =====================================================
         A. STAN DOMYŚLNY I LICZNIKI
         ===================================================== */
      ok('ACC.1 Basic open by default on init', sec('basic').open === true);
      ok('ACC.2 Dakuten closed on init', sec('dakuten').open === false);
      ok('ACC.3 Handakuten closed on init', sec('handakuten').open === false);
      ok('ACC.4 Yōon closed on init', sec('yoon').open === false);

      const count = id => parseInt(sec(id).querySelector('.learn-section-count').textContent.trim(), 10);
      ok('ACC.5 counts 46/20/5/33',
         ids.map(count).join('/') === '46/20/5/33', ids.map(count).join('/'));
      ok('ACC.6 all 104 kana in sidebar',
         document.querySelectorAll('.sidebar [data-kana]').length === 104,
         String(document.querySelectorAll('.sidebar [data-kana]').length));
      ok('ACC.7 grouping intact (Basic 10 groups, Dakuten 4)',
         getGroups().filter(g => learnCategoryOf(g.id) === 'basic').length === 10
         && getGroups().filter(g => learnCategoryOf(g.id) === 'dakuten').length === 4);
      ok('ACC.8 category membership (が/ぎ dakuten, か basic)',
         catOf('が') === 'dakuten' && catOf('ぎ') === 'dakuten' && catOf('か') === 'basic');

      /* =====================================================
         B. REGRESJA 1 — zwinięta sekcja nie otwiera się sama
            ===================================================== */
      await clickKana('が');                      // wjazd do Dakuten
      ok('ACC.9 switched to が', state.kana === 'が' && state.group === 'dakuten-k',
         state.kana + '/' + state.group);
      ok('ACC.10 Dakuten open (holds active kana)', sec('dakuten').open === true);
      ok('ACC.11 Basic auto-collapsed (untouched section)', sec('basic').open === false,
         String(sec('basic').open));

      // wejście do Dakuten zwinęło Basic automatycznie, więc użytkownik
      // najpierw musi go świadomie OTWORZYĆ, a dopiero potem ZWINĄĆ —
      // inaczej klik zwijałby sekcję, która już jest zwinięta
      await ensureOpen('basic');
      ok('ACC.12a Basic re-opened by user', sec('basic').open === true);
      await ensureClosed('basic');
      ok('ACC.12 Basic collapsed by user', sec('basic').open === false);

      await clickKana('ぎ');                      // zmiana znaku W TYM SAMYM kat.
      ok('ACC.13 switched to ぎ', state.kana === 'ぎ', state.kana);
      ok('ACC.14 Basic STILL collapsed after same-category switch',
         sec('basic').open === false, String(sec('basic').open));

      navigateKana(1); await wait(350);           // do ぐ, nadal Dakuten
      ok('ACC.15 keyboard nav inside Dakuten moved to ぐ', state.kana === 'ぐ', state.kana);
      ok('ACC.16 Basic still collapsed after keyboard nav', sec('basic').open === false,
         String(sec('basic').open));

      renderLearn(); await wait(400);             // wymuszony re-render
      ok('ACC.17 explicit re-render preserves state',
         sec('basic').open === false && sec('dakuten').open === true);

      setScreen('menu'); await wait(500);
      setScreen('learn'); await wait(1300);
      ok('ACC.18 Basic still collapsed after leaving+returning',
         sec('basic').open === false, String(sec('basic').open));

      await clickHead('basic');
      ok('ACC.19 Basic re-opens on user click', sec('basic').open === true);

      /* =====================================================
         C. REGRESJA 2 — strzałki odsłaniają sekcję, na którą wjechaliśmy
         ===================================================== */
      await clickKana('ん');                      // ostatni znak Basic
      await ensureOpen('basic');
      await ensureClosed('dakuten');
      await ensureClosed('handakuten');
      ok('ACC.20 seed: only Basic open', openIds().join(',') === 'basic', openIds().join(','));

      navigateKana(1); await wait(400);           // wjeżdżamy do Dakuten
      ok('ACC.21 arrows entered Dakuten', state.kana === 'が', state.kana);
      ok('ACC.22 Dakuten AUTO-OPENED on entry', sec('dakuten').open === true);

      navigateKana(1); await wait(400);
      ok('ACC.23 stays open while moving inside', sec('dakuten').open === true);

      // wjeżdżamy w zwiniętą sekcję OD TYLKU: dakuten-h -> handakuten-h
      for (let i = 0; i < 40 && state.kana !== 'ぼ'; i++) { navigateKana(1); await wait(12); }
      ok('ACC.24 walked to ぼ (last of Dakuten)', state.kana === 'ぼ', state.kana);
      ok('ACC.25 Handakuten still collapsed before entry', sec('handakuten').open === false);
      navigateKana(1); await wait(400);           // -> ぱ
      ok('ACC.26 arrows entered Handakuten', state.kana === 'ぱ', state.kana);
      ok('ACC.27 Handakuten AUTO-OPENED on entry', sec('handakuten').open === true,
         String(sec('handakuten').open));

      /* =====================================================
         D. REGRESJA 3 — najechanie nie zostawia sekcji rozwiniętej
         ===================================================== */
      // czyścimy WSZYSTKIE decyzje użytkownika, ale stojimy na ZNANYM znaku
      // (ostatni znak Basic), bo inaczej „aktywna sekcja" byłaby przypadkowa
      await clickKana('ん');
      Object.keys(learnSectionOpen).forEach(k => delete learnSectionOpen[k]);
      learnSectionStarted = true;
      renderLearn(); await wait(500);
      ok('ACC.28 clean slate: only the active section is open',
         openIds().join(',') === 'basic', openIds().join(',') + ' kana=' + state.kana);

      navigateKana(1); await wait(400);
      ok('ACC.29 arrows into Dakuten', state.kana === 'が', state.kana);
      ok('ACC.30 Dakuten open, Basic auto-collapsed', openIds().join(',') === 'dakuten',
         openIds().join(','));

      navigateKana(-1); await wait(400);          // -> ん (Basic)
      ok('ACC.31 Dakuten collapsed itself, Basic opened', openIds().join(',') === 'basic',
         openIds().join(',') + ' kana=' + state.kana);
      ok('ACC.32 no stale section left open', openIds().length === 1, openIds().join(','));

      // seria szybkich strzałek: musi osiądąć w jednej sekcji
      for (let i = 0; i < 60; i++) navigateKana(1);
      await wait(900);
      const after = openIds();
      ok('ACC.33 60 rapid arrows settle to one open section', after.length === 1, after.join(','));
      ok('ACC.34 ...and it is the active one',
         after[0] === learnCategoryOf(state.group), after[0] + ' vs ' + learnCategoryOf(state.group));

      // decyzja użytkownika ma pierwszeństwo i jest trwała obok sekcji aktywnej
      await clickKana('ん');
      // Basic jest sekcją aktywną, więc `ensureOpen` byłby bezczynnością
      // i NIE zapisałby decyzji użytkownika. Dwa kliknięcia — zamknij
      // i otwórz — zapamiętują jednoznaczne "otwarta na stałe".
      await ensureClosed('basic');      // klik 1 → explicit = false
      await ensureOpen('basic');        // klik 2 → explicit = true
      await ensureClosed('dakuten');
      navigateKana(1); await wait(400); // wjech do Dakuten
      ok('ACC.35 user-opened Basic stays open beside the active section',
         state.kana === 'が' && sec('basic').open === true && openIds().length === 2,
         openIds().join(',') + ' kana=' + state.kana);

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
        ids.forEach(id => { sec(id).open = true; });
        await wait(250);
        const wrapped = [];
        document.querySelectorAll('.learn-section-body .kana-btn').forEach(el => {
          // kwadratowy przycisk (aspect-ratio 1) = tekst się nie złamał
          if (Math.abs(el.offsetHeight - el.offsetWidth) > 1) wrapped.push(el.textContent.trim());
        });
        ok('LAY.' + width + ' no kana wraps to a second line', wrapped.length === 0,
           wrapped.length ? wrapped.slice(0, 5).join(' ') + ' (' + wrapped.length + ')' : '0 z 104');
      }
      learner.style.gridTemplateColumns = baseCols;
      await wait(200);

      const sidebar = document.querySelector('.sidebar');
      ok('LAY.x sidebar has no horizontal overflow',
         sidebar.scrollWidth <= sidebar.clientWidth + 1,
         sidebar.scrollWidth + ' vs ' + sidebar.clientWidth);

      // katanaka: te same 104 przyciski, bez łamania
      setScreen('menu'); await wait(500);
      document.querySelector('#app [data-script="katakana"]').click();
      await wait(700);
      setScreen('learn'); await wait(1300);
      const katWrapped = [...document.querySelectorAll('.sidebar [data-kana]')]
        .filter(el => Math.abs(el.offsetHeight - el.offsetWidth) > 1);
      ok('LAY.x katakana: no wrapping either', katWrapped.length === 0,
         katWrapped.slice(0, 5).map(e => e.textContent.trim()).join(' '));
      ok('LAY.x katakana only (codepoint >= 0x30A0)',
         [...document.querySelectorAll('.sidebar [data-kana]')]
           .every(b => b.dataset.kana.codePointAt(0) >= 0x30A0));

      setScreen('menu'); await wait(500);
      document.querySelector('#app [data-script="hiragana"]').click();
      await wait(700);
      setScreen('learn'); await wait(1200);

      /* =====================================================
         F. OKABLOWANIE ANIMACJI (bez pomiaru wysokości)
         ===================================================== */
      ok('ANM.1 browser supports ::details-content',
         CSS.supports('selector(::details-content)'));
      ok('ANM.2 interpolate-size enabled on :root',
         getComputedStyle(document.documentElement).interpolateSize === 'allow-keywords',
         getComputedStyle(document.documentElement).interpolateSize);

      const dc = getComputedStyle(sec('basic'), '::details-content');
      ok('ANM.3 ::details-content transitions height',
         dc.transitionProperty.indexOf('height') >= 0, dc.transitionProperty);
      ok('ANM.4 ::details-content uses allow-discrete',
         dc.transitionProperty.indexOf('content-visibility') >= 0, dc.transitionProperty);

      const css = await (await fetch('style.css')).text();
      ok('ANM.5 reduced-motion guard present',
         /@media \(prefers-reduced-motion: reduce\)/.test(css) && /\.learn-section::details-content\s*\{[^}]*transition:\s*none/.test(css));

      /*
        Przejście wymaga, żeby element <details> PRZEŻYWAŁ zmianę znaku —
        inaczej trafia w nowy element „urodzony gotowy" i nie ma skąd
        rozpocząć animacji. To właśnie naprawił refaktor panelu.
      */
      const detailsBefore = sec('dakuten');
      await clickKana('さ');
      ok('ANM.6 <details> survives a kana switch (no innerHTML rebuild)',
         sec('dakuten') === detailsBefore);
      ok('ANM.7 kana buttons are not recreated',
         document.querySelectorAll('.sidebar [data-kana]').length === 104,
         String(document.querySelectorAll('.sidebar [data-kana]').length));

      const activeBtn = document.querySelector('.sidebar .kana-btn.active');
      ok('ANM.8 exactly one active button',
         document.querySelectorAll('.sidebar .kana-btn.active').length === 1);
      ok('ANM.9 active button is the current kana',
         activeBtn && activeBtn.dataset.kana === state.kana,
         activeBtn && activeBtn.dataset.kana + ' vs ' + state.kana);
      ok('ANM.10 every button carries a mastery class',
         [...document.querySelectorAll('.sidebar [data-kana]')]
           .every(b => [...b.classList].some(c => c.indexOf('mastery-') === 0)));

      info('ANM.11 wysokości ::details-content', 'pomiar pominięty — getComputedStyle ' +
           'na pseudoelemencie podczas przejścia zwraca stan sprzed zmiany');

      report();
    } catch (e) {
      R.push('FAIL threw :: ' + e.message + ' | ' + String(e.stack).split('\n').slice(0, 3).join(' >> '));
      report();
    }
  })();
})();