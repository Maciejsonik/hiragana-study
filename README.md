# Hiragana — lokalna aplikacja do nauki

## Uruchomienie

W terminalu wejdź do tego folderu i uruchom:

```bash
python3 -m http.server 8000
```

Potem otwórz:

http://localhost:8000

## Ważne

Aplikacja jest lokalna, ale animacje kolejności kresek są pobierane z publicznego repozytorium `zhengkyl/strokesvg` przez jsDelivr. Dzięki temu nie trzeba ręcznie przechowywać 46 plików SVG w projekcie.

Źródło danych SVG: strokesvg — japońskie kana SVG z animowalnymi kreskami, przygotowane z myślą o nauce pisania.
