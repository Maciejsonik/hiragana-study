/* =========================================================
   T14 — SERVICE WORKER (offline PWA)
   ------------------------------------------------------------
   Zakres:  cały katalog, w którym leży ten plik
            (na GitHub Pages: /hiragana-study/)

   Strategie per typ zasobu:
     nawigacja / HTML  → network-first → cache → offline.html
     JS / CSS          → stale-while-revalidate
     KanjiVG SVG       → cache-first  (dane są stabilne)
     Google Fonts      → cache-first  (dekoracyjne, ale tanie)

   Wersjonowanie: nazwy cache zawsze kończą się na `-v<VERSION>`.
   Po zmianie `VERSION` przeglądarka pobiera nowy sw.js, tworzy nowe
   cache, a `activate` usuwa wszystkie pozostałe wersje. Dzięki temu
   shell (HTML+JS+CSS+manifest) zawsze pochodzi z jednej wersji —
   nie da się dostać nowego HTML przy starym JS.

   Service Worker NIGDY nie dotyka localStorage — klucze
   hiragana-settings / hiragana-progress / hiragana-exam-settings
   należą do aplikacji (T26) i są w pełni niezależne od cache.
   ========================================================= */

const VERSION = 'v4';

const SHELL_CACHE = `shell-${VERSION}`;
const KANJIVG_CACHE = `kanjivg-${VERSION}`;
const FONTS_CACHE = `fonts-${VERSION}`;

/* Shell: wszystko, bez czego aplikacja się nie uruchomi. */
const SHELL_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './offline.html'
];

/* Dokładnie ten sam URL, którego używa aplikacja w `SVG_SOURCES`
   (app.js) — dzięki temu odpowiedź z cache zaspokoi jej fetch(). */
const KANJIVG_BASE = 'https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/';

/*
   148 unikalnych części kana (74 hiragana + 74 katakana) po rozkładzie
   znaków dwuczęściowych (dakuten / handakuten / yōon) — dokładnie to, co
   rozwiązuje `resolveKanaParts()` w app.js. Wyprowadzone z danych
   `scriptData`, nie wpisane z ręki.
*/
const KANJIVG_HEX = [
  '03042', '03044', '03046', '03048', '0304a', '0304b', '0304c', '0304d', '0304e', '0304f', '03050', '03051',
  '03052', '03053', '03054', '03055', '03056', '03057', '03058', '03059', '0305a', '0305b', '0305c', '0305d',
  '0305e', '0305f', '03060', '03061', '03062', '03064', '03065', '03066', '03067', '03068', '03069', '0306a',
  '0306b', '0306c', '0306d', '0306e', '0306f', '03070', '03071', '03072', '03073', '03074', '03075', '03076',
  '03077', '03078', '03079', '0307a', '0307b', '0307c', '0307d', '0307e', '0307f', '03080', '03081', '03082',
  '03083', '03084', '03085', '03086', '03087', '03088', '03089', '0308a', '0308b', '0308c', '0308d', '0308f',
  '03092', '03093', '030a2', '030a4', '030a6', '030a8', '030aa', '030ab', '030ac', '030ad', '030ae', '030af',
  '030b0', '030b1', '030b2', '030b3', '030b4', '030b5', '030b6', '030b7', '030b8', '030b9', '030ba', '030bb',
  '030bc', '030bd', '030be', '030bf', '030c0', '030c1', '030c2', '030c4', '030c5', '030c6', '030c7', '030c8',
  '030c9', '030ca', '030cb', '030cc', '030cd', '030ce', '030cf', '030d0', '030d1', '030d2', '030d3', '030d4',
  '030d5', '030d6', '030d7', '030d8', '030d9', '030da', '030db', '030dc', '030dd', '030de', '030df', '030e0',
  '030e1', '030e2', '030e3', '030e4', '030e5', '030e6', '030e7', '030e8', '030e9', '030ea', '030eb', '030ec',
  '030ed', '030ef', '030f2', '030f3'
];

const GOOGLE_FONTS_CSS = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Noto+Sans+JP:wght@400;500;600;700;900&display=swap';

const kanjivgUrls = KANJIVG_HEX.map(hex => `${KANJIVG_BASE}${hex}.svg`);

const scopeUrl = path => new URL(path, self.registration.scope).href;

/* CDN uprzejmy: 148 równoległych requestów potrafi zostać odrzucone
   albo przekroczyć limit, przez co pojedynczy kana wypadał z cache. */
const FETCH_CONCURRENCY = 8;

async function mapWithConcurrency(items, limit, worker) {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (queue.length) {
      const item = queue.shift();
      try {
        await worker(item);
      } catch (error) {
        /* pojedynczy błąd nie może przerwać całej instalacji */
      }
    }
  });
  await Promise.all(workers);
}


/* =========================================================
   INSTALL
   ========================================================= */

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const shell = await caches.open(SHELL_CACHE);

    // Shell: addAll jest atomowy, ale liczba plików jest mała i wszystkie
    // są w tym samym origin — bezpiecznie.
    await shell.addAll(SHELL_ASSETS.map(scopeUrl));

    // KanjiVG: tolerant fill. Jeden nieudany request NIE może anulować
    // całej instalacji, bo wtedy użytkownik zostałby bez offline.
    // Brakujące SVG obsługi istniejący fallback `mountKana()`.
    //
    // Robimy to w dwóch przebiegach: pierwszy normalny, drugi tylko dla
    // tego, co jeszcze zabrakło. Bez tego pojedynczy chwilowy błąd CDN
    // (albo limit requestów przy 148 plikach) zostawiałby kana bez
    // kolejności kresek na zawsze w danej instalacji.
    const kanjivg = await caches.open(KANJIVG_CACHE);

    const cacheOne = async url => {
      const response = await fetch(url, { mode: 'cors', credentials: 'omit' });
      if (response && response.ok) await kanjivg.put(url, response);
    };

    await mapWithConcurrency(kanjivgUrls, FETCH_CONCURRENCY, cacheOne);

    const missing = (await kanjivg.keys())
      .map(entry => entry.url)
      .filter(url => kanjivgUrls.indexOf(url) === -1);

    if (missing.length) {
      await mapWithConcurrency(missing, 4, cacheOne);
    }

    // Google Fonts CSS: cacheujemy od razu, żeby pierwsza wizyta
    // wystarczała do pracy offline (sama strona nie jest kontrolowana
    // przez SW podczas instalacji, więc bez tego fontów nie ma w cache).
    const fonts = await caches.open(FONTS_CACHE);
    try {
      const fontCss = await fetch(GOOGLE_FONTS_CSS, { mode: 'cors', credentials: 'omit' });
      if (fontCss && fontCss.ok) await fonts.put(GOOGLE_FONTS_CSS, fontCss);
    } catch (error) {
      /* kosmetyka — aplikacja ma fallback font-stack */
    }

    await self.skipWaiting();
  })());
});


/* =========================================================
   ACTIVATE — usuń wszystkie nieaktualne wersje cache
   ========================================================= */

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keep = new Set([SHELL_CACHE, KANJIVG_CACHE, FONTS_CACHE]);
    const names = await caches.keys();

    await Promise.all(
      names
        .filter(name => !keep.has(name))
        .map(name => caches.delete(name))
    );

    await self.clients.claim();
  })());
});


/* =========================================================
   FETCH
   ========================================================= */

function isKanjivg(url) {
  return url.hostname === 'cdn.jsdelivr.net' && url.pathname.includes('/KanjiVG/');
}

function isGoogleFont(url) {
  return url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
}

async function networkFirstNavigation(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(SHELL_CACHE);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await caches.match(request, { ignoreSearch: true });
    if (cached) return cached;

    const shell = await caches.open(SHELL_CACHE);
    const fallback = await shell.match(scopeUrl('./index.html'));
    if (fallback) return fallback;

    const offline = await shell.match(scopeUrl('./offline.html'));
    if (offline) return offline;

    return new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain' } });
  }
}

async function staleWhileRevalidate(request) {
  const cache = await caches.open(SHELL_CACHE);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then(response => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => null);

  return cached || (await network) || new Response('', { status: 504 });
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;

  const response = await fetch(request);
  if (response && response.ok) cache.put(request, response.clone());
  return response;
}

self.addEventListener('fetch', event => {
  const { request } = event;

  // tylko GET; POST itd. zostaje przeglądarce
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Nawigacja: network-first, żeby dokument nigdy nie był stary.
  if (request.mode === 'navigate') {
    event.respondWith(networkFirstNavigation(request));
    return;
  }

  // KanjiVG: cache-first — dane kana są stabilne, a kolejność kresek
  // to sedno Learn, więc musi działać bez sieci.
  if (isKanjivg(url)) {
    event.respondWith(cacheFirst(request, KANJIVG_CACHE));
    return;
  }

  // Google Fonts: cache-first, kosmetyka (`font-display: swap` + fallback).
  if (isGoogleFont(url)) {
    event.respondWith(cacheFirst(request, FONTS_CACHE));
    return;
  }

  // Same-origin JS/CSS/ikony: stale-while-revalidate.
  // `raw.githubusercontent.com` celowo NIE jest obsługiwany — to tylko
  // drugi fallback w SVG_SOURCES, nigdy nieosiągany gdy jsDelivr działa.
  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(request));
  }
});


/* =========================================================
   MESSAGE — pozwól stronie wymusić update (przycisk "Odśwież")
   ========================================================= */

self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});