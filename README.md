# Kana — nauka japońskiej kany

Aplikacja do nauki japońskiej kany: **hiragana i katakana**, z animacją kolejności kresek, trybem nauki, trybem egzaminu, śledzeniem postępu i ekranem ustawień.

Działa jako zwykła strona (bez build stepu) i jako **PWA** — po pierwszym poprawnym załadowaniu online cała aplikacja działa offline.

## Uruchomienie lokalnie

W katalogu projektu:

```bash
python3 -m http.server 8000
```

Następnie otwórz:

```
http://localhost:8000
```

Aplikacja jest w pełni statyczna — nie wymaga npm, bundlera ani kroku budowania. Wystarczy dowolny serwer plików statycznych.

## GitHub Pages

Aplikacja jest publikowana przez GitHub Pages:

```
https://maciejsonik.github.io/hiragana-study/
```

Deployment odbywa się automatycznie po każdym pushu na `main` (GitHub Actions, `.github/workflows/deploy.yml`).

Uwaga: aplikacja jest hostowana w **podkatalogu** `/hiragana-study/`, a nie w domenie głównej. Wszystkie ścieżki w kodzie (manifest, Service Worker, ikony) są **względne**, żeby działać poprawnie w obu przypadkach — lokalnie i na Pages.

## PWA / Offline

Aplikacja korzysta z Web App Manifest i Service Workera.

- `manifest.webmanifest` — nazwa, ikony (192, 512, maskable), `display: standalone`, `theme_color`, `background_color`, ścieżki `start_url` / `scope` / `id` ustawione **względnie** (`./`).
- `sw.js` — Service Worker w katalogu aplikacji, więc jego scope pokrywa cały katalog (na Pages: `/hiragana-study/`).
- `icons/` — ikony aplikacji, w tym `maskable` (Android) i `apple-touch-icon` (iOS).

### Co działa offline

Po pierwszym poprawnym załadowaniu online Service Worker zapisuje w Cache Storage:

- **powłokę aplikacji** — `index.html`, `app.js`, `style.css`, manifest, ikony, `offline.html`,
- **148 plików SVG z KanjiVG** (74 części hiragany + 74 części katakany — razem pokrywają wszystkie 104 znaki obu skryptów, wraz z kana dwuczęściowymi: dakuten, handakuten, yōon),
- **Google Fonts** (Inter + Noto Sans JP).

Od tego momentu aplikacja uruchamia się i działa bez sieci: tryb nauki (z animacją kolejności kresek), tryb egzaminu, postęp, ustawienia, motyw i dźwięk.

Dźwięk jest generowany przez Web Audio (oscylatory), więc nie wymaga pobierania żadnych plików audio.

### Zachowanie aktualizacji

Aplikacja nigdy nie wymusza automatycznego przeładowania. Gdy pojawi się nowa wersja Service Workera, użytkownik widzi nieblokujący komunikat:

> Nowa wersja dostępna — Odśwież

Przeładowanie następuje dopiero po świadomym kliknięciu — dzięki temu trwająca sesja, np. w trakcie egzaminu, nie zostaje przerwana.

Cache są wersjonowane (`shell-v1`, `kanjivg-v1`, `fonts-v1`); po aktywacji nowej wersji stare cache są usuwane.

### Localhost a Service Worker

Service Worker wymaga **bezpiecznego kontekstu** (secure context). `http://localhost` jest uznawany za bezpieczny i Service Worker zarejestruje się poprawnie.

Jeśli otworzysz aplikację z innego urządzenia w sieci lokalnej, np. `http://192.168.x.x:8000`, Service Worker **nie** zarejestruje się — ale sama aplikacja będzie działać normalnie (po prostu bez offline). Do testowania na telefonie użyj HTTPS albo przekierowanie portu.

## Ważne

Animacje kolejności kresek są pobierane z publicznego repozytorium **KanjiVG** przez jsDelivr:

```
https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/{kod-unicode}.svg
```

Dzięki temu nie trzeba przechowywać plików SVG w repozytorium. Aplikacja ma trzy źródła SVG (jsDelivr → raw.githubusercontent → lokalny katalog `svg/`) i używa pierwszego, które odpowie.

Po pierwszym załadowaniu online potrzebne pliki SVG trafiają do Cache Storage, dzięki czemu animacja kresek działa również offline. Gdy plik SVG jest niedostępny (np. pierwsze użycie offline bez wcześniejszego pobrania), aplikacja pokazuje znak jako czcionkę zamiast animacji — pozostałe funkcje nadal działają.

Źródło danych SVG: [KanjiVG](https://github.com/KanjiVG/kanjivg) (CC BY-SA 3.0) — japońskie kana SVG z animowalnymi kreskami, przygotowane z myślą o nauce pisania.

## Zawartość projektu

```text
hiragana-study/
├── index.html            powłoka aplikacji + bootstrap motywu przed pierwszym renderem
├── app.js                cała logika: dane, stan, rendering, nauka, egzamin, postęp, audio, ustawienia
├── style.css             style, motywy, layout, animacje, responsywność
├── sw.js                 Service Worker (cache + strategie fetch)
├── manifest.webmanifest  manifest PWA
├── offline.html          fallback nawigacji, gdy dokument nie jest w cache
├── icons/                ikony aplikacji (192, 512, maskable, apple-touch-icon)
├── README.md
└── PROJECT.md            dokumentacja projektu
```