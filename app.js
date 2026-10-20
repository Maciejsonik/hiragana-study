/* =========================================================
   DANE: SKRYPTY (Hiragana / Katakana)
   ========================================================= */

// prettier-ignore
const scriptData = {
  hiragana: {
    groups: [
      { id: 'a', name: 'Samogłoski', shortName: 'Samo', chars: [['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e'], ['お', 'o']] },
      { id: 'k', name: 'K', shortName: 'K', chars: [['か', 'ka'], ['き', 'ki'], ['く', 'ku'], ['け', 'ke'], ['こ', 'ko']] },
      { id: 's', name: 'S', shortName: 'S', chars: [['さ', 'sa'], ['し', 'shi'], ['す', 'su'], ['せ', 'se'], ['そ', 'so']] },
      { id: 't', name: 'T', shortName: 'T', chars: [['た', 'ta'], ['ち', 'chi'], ['つ', 'tsu'], ['て', 'te'], ['と', 'to']] },
      { id: 'n', name: 'N', shortName: 'N', chars: [['な', 'na'], ['に', 'ni'], ['ぬ', 'nu'], ['ね', 'ne'], ['の', 'no']] },
      { id: 'h', name: 'H', shortName: 'H', chars: [['は', 'ha'], ['ひ', 'hi'], ['ふ', 'fu'], ['へ', 'he'], ['ほ', 'ho']] },
      { id: 'm', name: 'M', shortName: 'M', chars: [['ま', 'ma'], ['み', 'mi'], ['む', 'mu'], ['め', 'me'], ['も', 'mo']] },
      { id: 'y', name: 'Y', shortName: 'Y', chars: [['や', 'ya'], ['ゆ', 'yu'], ['よ', 'yo']] },
      { id: 'r', name: 'R', shortName: 'R', chars: [['ら', 'ra'], ['り', 'ri'], ['る', 'ru'], ['れ', 're'], ['ろ', 'ro']] },
      { id: 'w', name: 'W', shortName: 'W', chars: [['わ', 'wa'], ['を', 'wo'], ['ん', 'n']] },

      { id: 'dakuten-k', name: 'Dakuten K', shortName: 'D K', chars: [['が', 'ga'], ['ぎ', 'gi'], ['ぐ', 'gu'], ['げ', 'ge'], ['ご', 'go']] },
      { id: 'dakuten-s', name: 'Dakuten S', shortName: 'D S', chars: [['ざ', 'za'], ['じ', 'ji'], ['ず', 'zu'], ['ぜ', 'ze'], ['ぞ', 'zo']] },
      { id: 'dakuten-t', name: 'Dakuten T', shortName: 'D T', chars: [['だ', 'da'], ['ぢ', 'ji'], ['づ', 'zu'], ['で', 'de'], ['ど', 'do']] },
      { id: 'dakuten-h', name: 'Dakuten H', shortName: 'D H', chars: [['ば', 'ba'], ['び', 'bi'], ['ぶ', 'bu'], ['べ', 'be'], ['ぼ', 'bo']] },

      { id: 'handakuten-h', name: 'Handakuten H', shortName: 'HD H', chars: [['ぱ', 'pa'], ['ぴ', 'pi'], ['ぷ', 'pu'], ['ぺ', 'pe'], ['ぽ', 'po']] },

      { id: 'yoon-k', name: 'Yōon K', shortName: 'Y K', chars: [['きゃ', 'kya'], ['きゅ', 'kyu'], ['きょ', 'kyo']] },
      { id: 'yoon-s', name: 'Yōon S', shortName: 'Y S', chars: [['しゃ', 'sha'], ['しゅ', 'shu'], ['しょ', 'sho']] },
      { id: 'yoon-t', name: 'Yōon T', shortName: 'Y T', chars: [['ちゃ', 'cha'], ['ちゅ', 'chu'], ['ちょ', 'cho']] },
      { id: 'yoon-n', name: 'Yōon N', shortName: 'Y N', chars: [['にゃ', 'nya'], ['にゅ', 'nyu'], ['にょ', 'nyo']] },
      { id: 'yoon-h', name: 'Yōon H', shortName: 'Y H', chars: [['ひゃ', 'hya'], ['ひゅ', 'hyu'], ['ひょ', 'hyo']] },
      { id: 'yoon-m', name: 'Yōon M', shortName: 'Y M', chars: [['みゃ', 'mya'], ['みゅ', 'myu'], ['みょ', 'myo']] },
      { id: 'yoon-r', name: 'Yōon R', shortName: 'Y R', chars: [['りゃ', 'rya'], ['りゅ', 'ryu'], ['りょ', 'ryo']] },
      { id: 'yoon-g', name: 'Yōon G', shortName: 'Y G', chars: [['ぎゃ', 'gya'], ['ぎゅ', 'gyu'], ['ぎょ', 'gyo']] },
      { id: 'yoon-j', name: 'Yōon J', shortName: 'Y J', chars: [['じゃ', 'ja'], ['じゅ', 'ju'], ['じょ', 'jo']] },
      { id: 'yoon-b', name: 'Yōon B', shortName: 'Y B', chars: [['びゃ', 'bya'], ['びゅ', 'byu'], ['びょ', 'byo']] },
      { id: 'yoon-p', name: 'Yōon P', shortName: 'Y P', chars: [['ぴゃ', 'pya'], ['ぴゅ', 'pyu'], ['ぴょ', 'pyo']] }
    ],
    strokeText: {},
    lookalikes: []
  },
  katakana: {
    groups: [
      { id: 'a', name: 'Samogłoski', shortName: 'Samo', chars: [['ア', 'a'], ['イ', 'i'], ['ウ', 'u'], ['エ', 'e'], ['オ', 'o']] },
      { id: 'k', name: 'K', shortName: 'K', chars: [['カ', 'ka'], ['キ', 'ki'], ['ク', 'ku'], ['ケ', 'ke'], ['コ', 'ko']] },
      { id: 's', name: 'S', shortName: 'S', chars: [['サ', 'sa'], ['シ', 'shi'], ['ス', 'su'], ['セ', 'se'], ['ソ', 'so']] },
      { id: 't', name: 'T', shortName: 'T', chars: [['タ', 'ta'], ['チ', 'chi'], ['ツ', 'tsu'], ['テ', 'te'], ['ト', 'to']] },
      { id: 'n', name: 'N', shortName: 'N', chars: [['ナ', 'na'], ['ニ', 'ni'], ['ヌ', 'nu'], ['ネ', 'ne'], ['ノ', 'no']] },
      { id: 'h', name: 'H', shortName: 'H', chars: [['ハ', 'ha'], ['ヒ', 'hi'], ['フ', 'fu'], ['ヘ', 'he'], ['ホ', 'ho']] },
      { id: 'm', name: 'M', shortName: 'M', chars: [['マ', 'ma'], ['ミ', 'mi'], ['ム', 'mu'], ['メ', 'me'], ['モ', 'mo']] },
      { id: 'y', name: 'Y', shortName: 'Y', chars: [['ヤ', 'ya'], ['ユ', 'yu'], ['ヨ', 'yo']] },
      { id: 'r', name: 'R', shortName: 'R', chars: [['ラ', 'ra'], ['リ', 'ri'], ['ル', 'ru'], ['レ', 're'], ['ロ', 'ro']] },
      { id: 'w', name: 'W', shortName: 'W', chars: [['ワ', 'wa'], ['ヲ', 'wo'], ['ン', 'n']] },

      { id: 'dakuten-k', name: 'Dakuten K', shortName: 'D K', chars: [['ガ', 'ga'], ['ギ', 'gi'], ['グ', 'gu'], ['ゲ', 'ge'], ['ゴ', 'go']] },
      { id: 'dakuten-s', name: 'Dakuten S', shortName: 'D S', chars: [['ザ', 'za'], ['ジ', 'ji'], ['ズ', 'zu'], ['ゼ', 'ze'], ['ゾ', 'zo']] },
      { id: 'dakuten-t', name: 'Dakuten T', shortName: 'D T', chars: [['ダ', 'da'], ['ヂ', 'ji'], ['ヅ', 'zu'], ['デ', 'de'], ['ド', 'do']] },
      { id: 'dakuten-h', name: 'Dakuten H', shortName: 'D H', chars: [['バ', 'ba'], ['ビ', 'bi'], ['ブ', 'bu'], ['ベ', 'be'], ['ボ', 'bo']] },

      { id: 'handakuten-h', name: 'Handakuten H', shortName: 'HD H', chars: [['パ', 'pa'], ['ピ', 'pi'], ['プ', 'pu'], ['ペ', 'pe'], ['ポ', 'po']] },

      { id: 'yoon-k', name: 'Yōon K', shortName: 'Y K', chars: [['キャ', 'kya'], ['キュ', 'kyu'], ['キョ', 'kyo']] },
      { id: 'yoon-s', name: 'Yōon S', shortName: 'Y S', chars: [['シャ', 'sha'], ['シュ', 'shu'], ['ショ', 'sho']] },
      { id: 'yoon-t', name: 'Yōon T', shortName: 'Y T', chars: [['チャ', 'cha'], ['チュ', 'chu'], ['チョ', 'cho']] },
      { id: 'yoon-n', name: 'Yōon N', shortName: 'Y N', chars: [['ニャ', 'nya'], ['ニュ', 'nyu'], ['ニョ', 'nyo']] },
      { id: 'yoon-h', name: 'Yōon H', shortName: 'Y H', chars: [['ヒャ', 'hya'], ['ヒュ', 'hyu'], ['ヒョ', 'hyo']] },
      { id: 'yoon-m', name: 'Yōon M', shortName: 'Y M', chars: [['ミャ', 'mya'], ['ミュ', 'myu'], ['ミョ', 'myo']] },
      { id: 'yoon-r', name: 'Yōon R', shortName: 'Y R', chars: [['リャ', 'rya'], ['リュ', 'ryu'], ['リョ', 'ryo']] },
      { id: 'yoon-g', name: 'Yōon G', shortName: 'Y G', chars: [['ギャ', 'gya'], ['ギュ', 'gyu'], ['ギョ', 'gyo']] },
      { id: 'yoon-j', name: 'Yōon J', shortName: 'Y J', chars: [['ジャ', 'ja'], ['ジュ', 'ju'], ['ジョ', 'jo']] },
      { id: 'yoon-b', name: 'Yōon B', shortName: 'Y B', chars: [['ビャ', 'bya'], ['ビュ', 'byu'], ['ビョ', 'byo']] },
      { id: 'yoon-p', name: 'Yōon P', shortName: 'Y P', chars: [['ピャ', 'pya'], ['ピュ', 'pyu'], ['ピョ', 'pyo']] }
    ],
    strokeText: {},
    lookalikes: []
  }
};

function getGroups() {
  return scriptData[state.script].groups;
}

function getAll() {
  const groups = getGroups();
  return groups.flatMap(group =>
    group.chars.map(([kana, romaji]) => ({
      kana,
      romaji,
      group: group.name,
      groupId: group.id
    }))
  );
}

/*
   Kategorie używane przez zwijane sekcje w trybie nauki.
   Kategoria jest wyprowadzana z istniejącego `group.id`, więc nie duplikujemy
   żadnych danych kana — korzystamy z `scriptData` przez `getGroups()`.
   Kolejność sekcji i kana wewnątrz nich jest zgodna z kolejnością `getGroups()`.
*/
const LEARN_CATEGORIES = [
  { id: 'basic', label: 'Basic', openByDefault: true },
  { id: 'dakuten', label: 'Dakuten' },
  { id: 'handakuten', label: 'Handakuten' },
  { id: 'yoon', label: 'Yōon' }
];

function learnCategoryOf(groupId) {
  if (groupId.startsWith('dakuten')) return 'dakuten';
  if (groupId.startsWith('handakuten')) return 'handakuten';
  if (groupId.startsWith('yoon')) return 'yoon';
  return 'basic';
}

function getStrokeText() {
  return scriptData[state.script].strokeText;
}

function getStrokeCounts() {
  const strokeText = getStrokeText();
  return Object.fromEntries(Object.entries(strokeText).map(([kana, strokes]) => [kana, strokes.length]));
}

function getLookalikes() {
  return scriptData[state.script].lookalikes;
}

/* =========================================================
   USTAWIENIA — jedyne źródło prawdy dla preferencji

   Blok MUSI być zadeklarowany przed `Audio` i `state`, bo obie
   te rzeczy czytają ustawienia w trakcie ewaluacji modułu.
   Walidacja celowo NIE korzysta ze `state` ani `scriptData`,
   bo `state` jeszcze w tym momencie nie istnieje.
   ========================================================= */

const SETTINGS_STORE_KEY = 'hiragana-settings';

// klucze sprzed T26 — pozostają w localStorage, służą do odtworzenia
const LEGACY_THEME_KEY = 'hiragana-theme';
const LEGACY_MUTED_KEY = 'hiragana-muted';

const SETTINGS_DEFAULTS = {
  theme: 'system',
  muted: false,
  script: 'hiragana',
  hideGuide: false
};

const THEME_VALUES = ['light', 'dark', 'system'];
const SCRIPT_VALUES = ['hiragana', 'katakana'];

/*
 * Zwraca `{ theme, muted, script, hideGuide }`, gdzie każde pole to poprawna
 * wartość albo `null`, gdy w źródle jest brak lub błędna wartość.
 * Nieznane pola są odrzucane. Nie zależy od `state` ani `scriptData`.
 */
function validateSettings(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};

  return {
    theme: THEME_VALUES.includes(src.theme) ? src.theme : null,
    muted: typeof src.muted === 'boolean' ? src.muted : null,
    script: SCRIPT_VALUES.includes(src.script) ? src.script : null,
    hideGuide: typeof src.hideGuide === 'boolean' ? src.hideGuide : null
  };
}

function readLegacyTheme() {
  try {
    const value = localStorage.getItem(LEGACY_THEME_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch (error) {
    return null;
  }
}

function readLegacyMuted() {
  try {
    return localStorage.getItem(LEGACY_MUTED_KEY) === 'true';
  } catch (error) {
    return false;
  }
}

/*
 * Odczyt z klucza `hiragana-settings` z odtworzeniem pole po polu:
 * poprawna wartość → klucz sprzed T26 → wartość domyślna.
 * Zapisujemy tylko wtedy, gdy faktycznie coś naprawiliśmy,
 * żeby zwykłe wczytanie nie pisało do localStorage.
 */
function loadSettings() {
  let raw = null;
  let stored = false;

  try {
    const value = localStorage.getItem(SETTINGS_STORE_KEY);
    if (value !== null) {
      stored = true;
      raw = JSON.parse(value);
    }
  } catch (error) {
    raw = null; // uszkodzony JSON — traktujemy jak brak danych
  }

  const valid = validateSettings(raw);

  const normalized = {
    theme: valid.theme || readLegacyTheme() || SETTINGS_DEFAULTS.theme,
    muted: valid.muted !== null ? valid.muted : readLegacyMuted(),
    script: valid.script || SETTINGS_DEFAULTS.script,
    hideGuide: valid.hideGuide !== null ? valid.hideGuide : SETTINGS_DEFAULTS.hideGuide
  };

  let rewrite = !stored;
  if (stored) {
    try {
      rewrite = JSON.stringify(raw) !== JSON.stringify(normalized);
    } catch (error) {
      rewrite = true;
    }
  }

  if (rewrite) saveSettings(normalized);

  return normalized;
}

function saveSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_STORE_KEY, JSON.stringify(settings));
  } catch (error) {
    /* np. tryb prywatny - aplikacja działa dalej bez zapisu */
  }
}

let settings = loadSettings();

/* =========================================================
   DANE: KRESKI (Hiragana)
   Każdy element tablicy = JEDNA osobna kreska, w kolejności
   rysowania. Opisy są orientacyjne — warto je porównać
   z tabelą kolejności kresek (np. na Wikipedii / w podręczniku).
   ========================================================= */

// Hiragana strokeText - moved to scriptData.hiragana.strokeText below
// prettier-ignore
const hiraganaStrokeText = {
  // Samogłoski
  'あ': ['pozioma kreska u góry', 'pionowa kreska w dół, lekko wygięta, przecina poziomą', 'duży łuk z pętlą: od lewej, przez prawą stronę, kończy się na dole'],
  'い': ['lewa kreska w dół, dłuższa, z lekkim hakiem na końcu', 'prawa kreska, krótsza i niższa'],
  'う': ['krótka kreska u góry', 'łuk od góry w prawo, potem w dół i w lewo'],
  'え': ['krótka kreska u góry', 'pozioma kreska w prawo, ukośnie w lewo w dół, na dole zakręt w prawo'],
  'お': ['pozioma kreska', 'pionowa kreska z pętlą na dole', 'krótka kreska (kropka) w prawym górnym rogu'],

  // K
  'か': ['pozioma kreska zagięta w dół z hakiem', 'długa kreska ukośnie w dół w lewo', 'krótka kreska (kropka) po prawej'],
  'き': ['górna pozioma kreska', 'druga pozioma kreska, dłuższa', 'pionowa kreska w dół przecinająca obie poziome', 'łuk na dole'],
  'く': ['jeden ruch: ukośnie w dół w lewo, potem ukośnie w dół w prawo (kształt „<")'],
  'け': ['pionowa kreska po lewej', 'krótka pozioma kreska po prawej', 'długa pionowa kreska po prawej z hakiem'],
  'こ': ['górna kreska, lekko wygięta', 'dolna kreska, dłuższa, wygięta'],

  // S
  'さ': ['pozioma kreska', 'ukośna kreska w dół z zakrętem', 'łuk na dole'],
  'し': ['jedna długa kreska w dół zakończona łukiem w prawo'],
  'す': ['pozioma kreska', 'pionowa kreska w dół z małą pętlą i ogonkiem'],
  'せ': ['długa pozioma kreska', 'pionowa kreska po prawej', 'pionowa kreska po lewej zakończona łukiem w prawo'],
  'そ': ['jeden ruch: ukośna kreska w prawo, zygzak w lewo, na dole długi łuk w prawo'],

  // T
  'た': ['pozioma kreska', 'ukośna kreska w dół w lewo', 'krótka pozioma kreska po prawej', 'łuk na dole po prawej'],
  'ち': ['krótka pozioma kreska', 'kreska w dół z łukiem w prawo na dole'],
  'つ': ['jeden łuk: w prawo, potem w dół i w lewo'],
  'て': ['jeden ruch: pozioma kreska w prawo, potem łuk w dół w lewo'],
  'と': ['krótka kreska ukośna w dół', 'długa kreska w dół z łukiem w prawo na dole'],

  // N
  'な': ['pozioma kreska', 'ukośna kreska w dół w lewo', 'krótka kreska po prawej', 'kreska z pętlą na dole'],
  'に': ['pionowa kreska po lewej', 'krótka pozioma kreska u góry po prawej', 'dolna pozioma kreska po prawej'],
  'ぬ': ['kreska w dół i w lewo (po lewej stronie)', 'długa kreska z pętlą po prawej, kończy się małą pętelką'],
  'ね': ['pionowa kreska po lewej (z poziomym przecięciem)', 'kreska z pętlą po prawej, kończy się pętelką'],
  'の': ['jeden ruch: duży łuk tworzący pętlę'],

  // H
  'は': ['pionowa kreska po lewej', 'krótka pozioma kreska po prawej', 'pionowa kreska z pętlą na dole'],
  'ひ': ['jeden ruch: krótka kreska w prawo, potem duży łuk w dół i w górę'],
  'ふ': ['krótka kreska u góry', 'mała kreska po lewej', 'mała kreska po prawej', 'kreska po prawej na dole'],
  'へ': ['jeden ruch: łagodna kreska w górę w prawo, potem w dół w prawo'],
  'ほ': ['pionowa kreska po lewej', 'pozioma kreska', 'druga pozioma kreska', 'pionowa kreska z pętlą na dole'],

  // M
  'ま': ['górna pozioma kreska', 'dolna pozioma kreska', 'pionowa kreska z pętlą na dole'],
  'み': ['kreska w dół z zakrętem po lewej', 'kreska z pętlą po prawej'],
  'む': ['pozioma kreska', 'pionowa kreska z pętlą na dole', 'krótka kreska (kropka) po prawej'],
  'め': ['kreska w dół po lewej', 'kreska z pętlą po prawej'],
  'も': ['pionowa kreska z zakrętem na dole', 'górna pozioma kreska', 'dolna pozioma kreska'],

  // Y
  'や': ['łuk po lewej z hakiem', 'krótka kreska u góry', 'długa ukośna kreska w dół'],
  'ゆ': ['pionowa kreska po lewej', 'duża pętla po prawej z pionową kreską w środku'],
  'よ': ['krótka pionowa kreska', 'pionowa kreska z pętlą i poziomą kreską na dole'],

  // R
  'ら': ['krótka kreska u góry', 'łuk w dół z zakrętem w prawo'],
  'り': ['lewa kreska, krótsza', 'prawa kreska, dłuższa, zakręt w lewo na dole'],
  'る': ['jeden ruch: kreska w dół z pętlą na końcu'],
  'れ': ['pionowa kreska po lewej', 'kreska w dół z łukiem i zakrętem po prawej'],
  'ろ': ['jeden ruch: kreska w dół z zakrętem (jak „る" bez pętli)'],

  // W
  'わ': ['pionowa kreska po lewej', 'kreska z łukiem i pętlą po prawej'],
  'を': ['pozioma kreska', 'ukośna kreska w dół w lewo', 'łuk na dole'],
  'ん': ['jeden ruch: kreska w dół, potem łuk w prawo z hakiem'],

  // Dakuten K
  'が': ['pozioma kreska zagięta w dół z hakiem', 'długa kreska ukośnie w dół w lewo', 'krótka kreska po prawej', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぎ': ['górna pozioma kreska', 'druga pozioma kreska, dłuższa', 'pionowa kreska w dół przecinająca obie poziome', 'łuk na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぐ': ['ukośna kreska w dół w lewo, potem ukośnie w dół w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'げ': ['pionowa kreska po lewej', 'krótka pozioma kreska po prawej', 'długa pionowa kreska po prawej z hakiem', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ご': ['górna kreska, lekko wygięta', 'dolna kreska, dłuższa, wygięta', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Dakuten S
  'ざ': ['pozioma kreska', 'ukośna kreska w dół z zakrętem', 'łuk na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'じ': ['długa kreska w dół zakończona łukiem w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ず': ['pozioma kreska', 'pionowa kreska w dół z małą pętlą i ogonkiem', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぜ': ['długa pozioma kreska', 'pionowa kreska po prawej', 'pionowa kreska po lewej zakończona łukiem w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぞ': ['ukośna kreska w prawo, zygzak w lewo, na dole długi łuk w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Dakuten T
  'だ': ['pozioma kreska', 'ukośna kreska w dół w lewo', 'krótka pozioma kreska po prawej', 'łuk na dole po prawej', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぢ': ['krótka pozioma kreska', 'kreska w dół z łukiem w prawo na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'づ': ['jeden łuk: w prawo, potem w dół i w lewo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'で': ['pozioma kreska w prawo, potem łuk w dół w lewo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ど': ['krótka kreska ukośna w dół', 'długa kreska w dół z łukiem w prawo na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Dakuten H
  'ば': ['pionowa kreska po lewej', 'krótka pozioma kreska po prawej', 'pionowa kreska z pętlą na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'び': ['krótka kreska w prawo, potem duży łuk w dół i w górę', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぶ': ['krótka kreska u góry', 'mała kreska po lewej', 'mała kreska po prawej', 'kreska po prawej na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'べ': ['łagodna kreska w górę w prawo, potem w dół w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぼ': ['pionowa kreska po lewej', 'pozioma kreska', 'druga pozioma kreska', 'pionowa kreska z pętlą na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Handakuten H
  'ぱ': ['pionowa kreska po lewej', 'krótka pozioma kreska po prawej', 'pionowa kreska z pętlą na dole', 'kółko handakuten w prawym górnym rogu'],
  'ぴ': ['krótka kreska w prawo, potem duży łuk w dół i w górę', 'kółko handakuten w prawym górnym rogu'],
  'ぷ': ['krótka kreska u góry', 'mała kreska po lewej', 'mała kreska po prawej', 'kreska po prawej na dole', 'kółko handakuten w prawym górnym rogu'],
  'ぺ': ['łagodna kreska w górę w prawo, potem w dół w prawo', 'kółko handakuten w prawym górnym rogu'],
  'ぽ': ['pionowa kreska po lewej', 'pozioma kreska', 'druga pozioma kreska', 'pionowa kreska z pętlą na dole', 'kółko handakuten w prawym górnym rogu'],

  // Yōon K
  'きゃ': ['górna pozioma kreska き', 'druga pozioma kreska き', 'pionowa kreska き', 'łuk na dole き', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'きゅ': ['górna pozioma kreska き', 'druga pozioma kreska き', 'pionowa kreska き', 'łuk na dole き', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'きょ': ['górna pozioma kreska き', 'druga pozioma kreska き', 'pionowa kreska き', 'łuk na dole き', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon S
  'しゃ': ['główna kreska し', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'しゅ': ['główna kreska し', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'しょ': ['główna kreska し', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon T
  'ちゃ': ['pierwsza kreska ち', 'druga kreska ち', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'ちゅ': ['pierwsza kreska ち', 'druga kreska ち', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'ちょ': ['pierwsza kreska ち', 'druga kreska ち', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon N
  'にゃ': ['pierwsza kreska に', 'druga kreska に', 'trzecia kreska に', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'にゅ': ['pierwsza kreska に', 'druga kreska に', 'trzecia kreska に', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'にょ': ['pierwsza kreska に', 'druga kreska に', 'trzecia kreska に', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon H
  'ひゃ': ['główna kreska ひ', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'ひゅ': ['główna kreska ひ', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'ひょ': ['główna kreska ひ', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon M
  'みゃ': ['pierwsza kreska み', 'druga kreska み', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'みゅ': ['pierwsza kreska み', 'druga kreska み', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'みょ': ['pierwsza kreska み', 'druga kreska み', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon R
  'りゃ': ['pierwsza kreska り', 'druga kreska り', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'りゅ': ['pierwsza kreska り', 'druga kreska り', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'りょ': ['pierwsza kreska り', 'druga kreska り', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon G
  'ぎゃ': ['górna pozioma kreska ぎ', 'druga pozioma kreska ぎ', 'pionowa kreska ぎ', 'łuk na dole ぎ', 'pierwsza kreska dakuten ぎ', 'druga kreska dakuten ぎ', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'ぎゅ': ['górna pozioma kreska ぎ', 'druga pozioma kreska ぎ', 'pionowa kreska ぎ', 'łuk na dole ぎ', 'pierwsza kreska dakuten ぎ', 'druga kreska dakuten ぎ', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'ぎょ': ['górna pozioma kreska ぎ', 'druga pozioma kreska ぎ', 'pionowa kreska ぎ', 'łuk na dole ぎ', 'pierwsza kreska dakuten ぎ', 'druga kreska dakuten ぎ', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon J
  'じゃ': ['główna kreska じ', 'pierwsza kreska dakuten じ', 'druga kreska dakuten じ', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'じゅ': ['główna kreska じ', 'pierwsza kreska dakuten じ', 'druga kreska dakuten じ', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'じょ': ['główna kreska じ', 'pierwsza kreska dakuten じ', 'druga kreska dakuten じ', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon B
  'びゃ': ['główna kreska び', 'pierwsza kreska dakuten び', 'druga kreska dakuten び', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'びゅ': ['główna kreska び', 'pierwsza kreska dakuten び', 'druga kreska dakuten び', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'びょ': ['główna kreska び', 'pierwsza kreska dakuten び', 'druga kreska dakuten び', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon P
  'ぴゃ': ['główna kreska ぱ', 'kółko handakuten ぱ', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'ぴゅ': ['główna kreska ぱ', 'kółko handakuten ぱ', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'ぴょ': ['główna kreska ぱ', 'kółko handakuten ぱ', 'pierwsza kreska małego ょ', 'druga kreska małego ょ']
};

scriptData.hiragana.strokeText = hiraganaStrokeText;

// prettier-ignore
const katakanaStrokeText = {
  // Samogłoski
  'ア': ['ukośna kreska w dół w lewo', 'ukośna kreska w dół w prawo z zakrętem na dole'],
  'イ': ['krótka kreska ukośna w dół', 'dłuższa pionowa kreska w dół, lekko wygięta'],
  'ウ': ['krótka kreska u góry', 'pionowa kreska w dół po lewej', 'długa kreska z łukiem w prawo na dole'],
  'エ': ['pozioma kreska u góry', 'pionowa kreska w dół', 'długa pozioma kreska na dole'],
  'オ': ['pozioma kreska', 'pionowa kreska przecinająca poziomą, z krótkim zakrętem', 'krótka kreska ukośna w prawym górnym rogu'],

  // K
  'カ': ['pionowa kreska z lekkim zakrętem na dole', 'ukośna kreska w dół w lewo z łukiem na końcu'],
  'キ': ['górna pozioma kreska', 'dolna pozioma kreska', 'pionowa kreska w dół przecinająca obie poziome'],
  'ク': ['krótka kreska ukośna w dół w lewo', 'długa kreska od góry w lewo, potem w dół i w prawo'],
  'ケ': ['krótka kreska ukośna w dół w lewo', 'pionowa kreska w dół', 'długa pozioma kreska z zakrętem w dół'],
  'コ': ['górna pozioma kreska z zakrętem w dół po lewej', 'długa dolna pozioma kreska'],

  // S
  'サ': ['krótka kreska ukośna w dół', 'pionowa kreska w dół', 'długa pozioma kreska z zakrętem na końcu'],
  'シ': ['krótka kreska ukośna u góry', 'krótka kreska ukośna pośrodku', 'długa kreska od lewej w dół i w prawo'],
  'ス': ['ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem łuk w dół w lewo'],
  'セ': ['długa pozioma kreska w prawo z zakrętem w dół', 'pionowa kreska w dół, potem pozioma kreska w prawo'],
  'ソ': ['krótka kreska ukośna w dół', 'długa kreska ukośna w dół w lewo z łukiem na końcu'],

  // T
  'タ': ['krótka kreska ukośna w dół', 'ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem w dół'],
  'チ': ['krótka pozioma kreska', 'długa pozioma kreska', 'pionowa kreska w dół'],
  'ツ': ['krótka kreska ukośna w dół', 'krótka kreska ukośna w dół', 'długa kreska od lewej w dół i w prawo'],
  'テ': ['górna pozioma kreska', 'długa dolna pozioma kreska', 'kreska ukośna w dół w lewo'],
  'ト': ['pionowa kreska w dół', 'krótka kreska ukośna w prawo'],

  // N
  'ナ': ['pozioma kreska', 'pionowa kreska w dół z lekkim zakrętem'],
  'ニ': ['górna pozioma kreska', 'długa dolna pozioma kreska'],
  'ヌ': ['ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem w dół i w lewo z zakrętem'],
  'ネ': ['pozioma kreska', 'pionowa kreska w dół', 'ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem w dół i w lewo'],
  'ノ': ['jeden ruch: długa kreska ukośna z góry w dół w lewo'],

  // H
  'ハ': ['krótka kreska ukośna w dół w lewo', 'długa kreska ukośna w dół w prawo'],
  'ヒ': ['pozioma kreska z zakrętem w dół', 'długa pionowa kreska w dół z zakrętem w lewo'],
  'フ': ['jeden ruch: pozioma kreska w prawo, potem długa kreska ukośna w dół w lewo'],
  'ヘ': ['jeden ruch: łagodna kreska w górę w prawo, potem w dół w prawo'],
  'ホ': ['pionowa kreska', 'pozioma kreska', 'krótka kreska ukośna w dół w lewo', 'krótka kreska ukośna w dół w prawo'],

  // M
  'マ': ['ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem w dół w lewo'],
  'ミ': ['górna pozioma kreska', 'środkowa pozioma kreska', 'dolna pozioma kreska'],
  'ム': ['krótka kreska ukośna w dół', 'długa kreska od lewej w dół w prawo z zakrętem'],
  'メ': ['ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem w dół w lewo'],
  'モ': ['górna pozioma kreska', 'środkowa pozioma kreska', 'pionowa kreska w dół z zakrętem'],

  // Y
  'ヤ': ['krótka pozioma kreska w prawo, potem ukośna kreska w dół w lewo', 'długa kreska ukośna w dół w lewo'],
  'ユ': ['pionowa kreska w dół', 'długa pozioma kreska z zakrętem po prawej'],
  'ヨ': ['górna pozioma kreska', 'środkowa pozioma kreska', 'pionowa kreska z dolną poziomą kreską'],

  // R
  'ラ': ['krótka kreska u góry', 'długa kreska od lewej w dół i w prawo z zakrętem'],
  'リ': ['krótka kreska ukośna w dół', 'długa pionowa kreska w dół z zakrętem w lewo'],
  'ル': ['pionowa kreska w dół', 'ukośna kreska w dół w prawo z zakrętem'],
  'レ': ['jeden ruch: pionowa kreska w dół, potem kreska w prawo w górę'],
  'ロ': ['górna kreska z pionowym zakrętem w dół', 'prawa pionowa kreska', 'dolna pozioma kreska'],

  // W
  'ワ': ['krótka kreska ukośna w dół', 'długa kreska od góry w lewo, potem w dół i w prawo'],
  'ヲ': ['pozioma kreska', 'ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem w dół'],
  'ン': ['krótka kreska ukośna w dół w prawo', 'długa kreska ukośna w dół w lewo z zakrętem w prawo'],

  // Dakuten K
  'ガ': ['pionowa kreska z lekkim zakrętem na dole', 'ukośna kreska w dół w lewo z łukiem na końcu', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ギ': ['górna pozioma kreska', 'dolna pozioma kreska', 'pionowa kreska w dół przecinająca obie poziome', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'グ': ['krótka kreska ukośna w dół w lewo', 'długa kreska od góry w lewo, potem w dół i w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ゲ': ['krótka kreska ukośna w dół w lewo', 'pionowa kreska w dół', 'długa pozioma kreska z zakrętem w dół', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ゴ': ['górna pozioma kreska z zakrętem w dół po lewej', 'długa dolna pozioma kreska', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Dakuten S
  'ザ': ['pozioma kreska', 'pionowa kreska w dół', 'długa pozioma kreska z zakrętem na końcu', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ジ': ['krótka kreska ukośna u góry', 'krótka kreska ukośna pośrodku', 'długa kreska od lewej w dół i w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ズ': ['ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem łuk w dół w lewo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ゼ': ['długa pozioma kreska w prawo z zakrętem w dół', 'pionowa kreska w dół, potem pozioma kreska w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ゾ': ['krótka kreska ukośna w dół', 'długa kreska ukośna w dół w lewo z łukiem na końcu', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Dakuten T
  'ダ': ['krótka kreska ukośna w dół', 'ukośna kreska w dół w lewo', 'długa kreska od góry w prawo, potem w dół', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ヂ': ['krótka pozioma kreska', 'długa pozioma kreska', 'pionowa kreska w dół', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ヅ': ['krótka kreska ukośna w dół', 'krótka kreska ukośna w dół', 'długa kreska od lewej w dół i w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'デ': ['górna pozioma kreska', 'długa dolna pozioma kreska', 'kreska ukośna w dół w lewo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ド': ['pionowa kreska w dół', 'krótka kreska ukośna w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Dakuten H
  'バ': ['krótka kreska ukośna w dół w lewo', 'długa kreska ukośna w dół w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ビ': ['pozioma kreska z zakrętem w dół', 'długa pionowa kreska w dół z zakrętem w lewo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ブ': ['jeden ruch: pozioma kreska w prawo, potem długa kreska ukośna w dół w lewo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ベ': ['łagodna kreska w górę w prawo, potem w dół w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ボ': ['pionowa kreska', 'pozioma kreska', 'krótka kreska ukośna w dół w lewo', 'krótka kreska ukośna w dół w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Handakuten H
  'パ': ['krótka kreska ukośna w dół w lewo', 'długa kreska ukośna w dół w prawo', 'kółko handakuten w prawym górnym rogu'],
  'ピ': ['pozioma kreska z zakrętem w dół', 'długa pionowa kreska w dół z zakrętem w lewo', 'kółko handakuten w prawym górnym rogu'],
  'プ': ['jeden ruch: pozioma kreska w prawo, potem długa kreska ukośna w dół w lewo', 'kółko handakuten w prawym górnym rogu'],
  'ペ': ['łagodna kreska w górę w prawo, potem w dół w prawo', 'kółko handakuten w prawym górnym rogu'],
  'ポ': ['pionowa kreska', 'pozioma kreska', 'krótka kreska ukośna w dół w lewo', 'krótka kreska ukośna w dół w prawo', 'kółko handakuten w prawym górnym rogu'],

  // Yōon K
  'キャ': ['pierwsza kreska キ', 'druga kreska キ', 'trzecia kreska キ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'キュ': ['pierwsza kreska キ', 'druga kreska キ', 'trzecia kreska キ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'キョ': ['pierwsza kreska キ', 'druga kreska キ', 'trzecia kreska キ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon S
  'シャ': ['pierwsza kreska シ', 'druga kreska シ', 'trzecia kreska シ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'シュ': ['pierwsza kreska シ', 'druga kreska シ', 'trzecia kreska シ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ショ': ['pierwsza kreska シ', 'druga kreska シ', 'trzecia kreska シ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon T
  'チャ': ['pierwsza kreska チ', 'druga kreska チ', 'trzecia kreska チ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'チュ': ['pierwsza kreska チ', 'druga kreska チ', 'trzecia kreska チ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'チョ': ['pierwsza kreska チ', 'druga kreska チ', 'trzecia kreska チ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon N
  'ニャ': ['pierwsza kreska ニ', 'druga kreska ニ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'ニュ': ['pierwsza kreska ニ', 'druga kreska ニ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ニョ': ['pierwsza kreska ニ', 'druga kreska ニ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon H
  'ヒャ': ['pierwsza kreska ヒ', 'druga kreska ヒ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'ヒュ': ['pierwsza kreska ヒ', 'druga kreska ヒ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ヒョ': ['pierwsza kreska ヒ', 'druga kreska ヒ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon M
  'ミャ': ['pierwsza kreska ミ', 'druga kreska ミ', 'trzecia kreska ミ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'ミュ': ['pierwsza kreska ミ', 'druga kreska ミ', 'trzecia kreska ミ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ミョ': ['pierwsza kreska ミ', 'druga kreska ミ', 'trzecia kreska ミ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon R
  'リャ': ['pierwsza kreska リ', 'druga kreska リ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'リュ': ['pierwsza kreska リ', 'druga kreska リ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'リョ': ['pierwsza kreska リ', 'druga kreska リ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon G
  'ギャ': ['pierwsza kreska ギ', 'druga kreska ギ', 'trzecia kreska ギ', 'ukośna kreska dakuten ギ', 'druga kreska dakuten ギ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'ギュ': ['pierwsza kreska ギ', 'druga kreska ギ', 'trzecia kreska ギ', 'ukośna kreska dakuten ギ', 'druga kreska dakuten ギ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ギョ': ['pierwsza kreska ギ', 'druga kreska ギ', 'trzecia kreska ギ', 'ukośna kreska dakuten ギ', 'druga kreska dakuten ギ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon J
  'ジャ': ['krótka kreska ukośna u góry ジ', 'krótka kreska ukośna pośrodku ジ', 'długa kreska od lewej w dół i w prawo ジ', 'ukośna kreska dakuten ジ', 'druga ukośna kreska dakuten ジ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'ジュ': ['krótka kreska ukośna u góry ジ', 'krótka kreska ukośna pośrodku ジ', 'długa kreska od lewej w dół i w prawo ジ', 'ukośna kreska dakuten ジ', 'druga ukośna kreska dakuten ジ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ジョ': ['krótka kreska ukośna u góry ジ', 'krótka kreska ukośna pośrodku ジ', 'długa kreska od lewej w dół i w prawo ジ', 'ukośna kreska dakuten ジ', 'druga ukośna kreska dakuten ジ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon B
  'ビャ': ['pierwsza kreska ビ', 'druga kreska ビ', 'ukośna kreska dakuten ビ', 'druga ukośna kreska dakuten ビ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'ビュ': ['pierwsza kreska ビ', 'druga kreska ビ', 'ukośna kreska dakuten ビ', 'druga ukośna kreska dakuten ビ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ビョ': ['pierwsza kreska ビ', 'druga kreska ビ', 'ukośna kreska dakuten ビ', 'druga ukośna kreska dakuten ビ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Yōon P
  'ピャ': ['pierwsza kreska ピ', 'druga kreska ピ', 'kółko handakuten ピ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'ピュ': ['pierwsza kreska ピ', 'druga kreska ピ', 'kółko handakuten ピ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ピョ': ['pierwsza kreska ピ', 'druga kreska ピ', 'kółko handakuten ピ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ']
};

scriptData.katakana.strokeText = katakanaStrokeText;

/* =========================================================
   DANE: SŁOWNICTWO (T19)
   Zeszyt ćwiczeń: „きょうしつで つかう ことば" (1) — wyrażenia,
   których nauczyciel używa na lekcji, i czasowniki, od których
   pochodzą.
   ------------------------------------------------------------
   Znaczenia są PO POLSKU. Źródło ma glosy angielskie, więc to
   tłumaczenie, a nie kopia.
   Romaji bez makronów, tak jak w `scriptData`: długą samogłoskę
   zapisujemy literami, które są w kanie (renshuu, benkyou).
   Pozycje 21–22 to wzorce zdań (`type: 'pattern'`), a nie karty:
   nie mają odpowiednika w magazynie postępu.
   `id` jest trwałe — trafi do zapisu postępu, więc go nie zmieniaj.
   ========================================================= */

// prettier-ignore
const VOCAB_ITEMS = [
  // 1–15 — strona 1 zeszytu
  { id: 'v01', type: 'card', kana: 'きいてください', romaji: 'kiite kudasai', meaning: 'proszę słuchać', verb: 'ききます', verbRomaji: 'kikimasu', verbMeaning: 'słuchać' },
  { id: 'v02', type: 'card', kana: 'いってください', romaji: 'itte kudasai', meaning: 'proszę powiedzieć', verb: 'いいます', verbRomaji: 'iimasu', verbMeaning: 'mówić' },
  // źródło ma urwane „もういちどいいまし" — pełna forma to もういちどいいます
  { id: 'v03', type: 'card', kana: 'もういちどいってください', romaji: 'mou ichido itte kudasai', meaning: 'proszę powiedzieć jeszcze raz', verb: 'もういちどいいます', verbRomaji: 'mou ichido iimasu', verbMeaning: 'powiedzieć jeszcze raz' },
  { id: 'v04', type: 'card', kana: 'くりかえしてください', romaji: 'kurikaeshite kudasai', meaning: 'proszę powtórzyć', verb: 'くりかえします', verbRomaji: 'kurikaeshimasu', verbMeaning: 'powtarzać' },
  { id: 'v05', type: 'card', kana: 'みてください', romaji: 'mite kudasai', meaning: 'proszę patrzeć', verb: 'みます', verbRomaji: 'mimasu', verbMeaning: 'patrzeć / widzieć / oglądać' },
  { id: 'v06', type: 'card', kana: 'よんでください', romaji: 'yonde kudasai', meaning: 'proszę czytać', verb: 'よみます', verbRomaji: 'yomimasu', verbMeaning: 'czytać' },
  { id: 'v07', type: 'card', kana: 'かいてください', romaji: 'kaite kudasai', meaning: 'proszę napisać', verb: 'かきます', verbRomaji: 'kakimasu', verbMeaning: 'pisać' },
  { id: 'v08', type: 'card', kana: 'れんしゅうしてください', romaji: 'renshuu shite kudasai', meaning: 'proszę ćwiczyć', verb: 'れんしゅうします', verbRomaji: 'renshuu shimasu', verbMeaning: 'ćwiczyć' },
  { id: 'v09', type: 'card', kana: 'はじめてください', romaji: 'hajimete kudasai', meaning: 'proszę zaczynać', verb: 'はじめます', verbRomaji: 'hajimemasu', verbMeaning: 'zaczynać' },
  { id: 'v10', type: 'card', kana: 'やめてください', romaji: 'yamete kudasai', meaning: 'proszę przestać', verb: 'やめます', verbRomaji: 'yamemasu', verbMeaning: 'przestawać' },
  { id: 'v11', type: 'card', kana: 'こたえてください', romaji: 'kotaete kudasai', meaning: 'proszę odpowiedzieć', verb: 'こたえます', verbRomaji: 'kotaemasu', verbMeaning: 'odpowiadać' },
  { id: 'v12', type: 'card', kana: 'ひらいてください', romaji: 'hiraite kudasai', meaning: 'proszę otworzyć', verb: 'ひらきます', verbRomaji: 'hirakimasu', verbMeaning: 'otwierać', alt: 'あけてください', altRomaji: 'akete kudasai' },
  { id: 'v13', type: 'card', kana: 'とじてください', romaji: 'tojite kudasai', meaning: 'proszę zamknąć', verb: 'とじます', verbRomaji: 'tojimasu', verbMeaning: 'zamykać', alt: 'しめてください', altRomaji: 'shimete kudasai' },
  { id: 'v14', type: 'card', kana: 'みせてください', romaji: 'misete kudasai', meaning: 'proszę pokazać', verb: 'みせます', verbRomaji: 'misemasu', verbMeaning: 'pokazywać' },
  { id: 'v15', type: 'card', kana: 'えらんでください', romaji: 'erande kudasai', meaning: 'proszę wybrać', verb: 'えらびます', verbRomaji: 'erabimasu', verbMeaning: 'wybierać' },

  // 16–20 — strona 2 zeszytu
  { id: 'v16', type: 'card', kana: 'だしてください', romaji: 'dashite kudasai', meaning: 'proszę wyjąć / oddać', verb: 'だします', verbRomaji: 'dashimasu', verbMeaning: 'wyjmować / oddawać' },
  { id: 'v17', type: 'card', kana: 'たってください', romaji: 'tatte kudasai', meaning: 'proszę wstać', verb: 'たちます', verbRomaji: 'tachimasu', verbMeaning: 'stać / wstawać' },
  { id: 'v18', type: 'card', kana: 'すわってください', romaji: 'suwatte kudasai', meaning: 'proszę usiąść', verb: 'すわります', verbRomaji: 'suwarimasu', verbMeaning: 'siadać / siedzieć' },
  { id: 'v19', type: 'card', kana: 'しずかにしてください', romaji: 'shizuka ni shite kudasai', meaning: 'proszę być cicho', verb: 'しずかにします', verbRomaji: 'shizuka ni shimasu', verbMeaning: 'być cicho' },
  { id: 'v20', type: 'card', kana: 'べんきょうしてください', romaji: 'benkyou shite kudasai', meaning: 'proszę się uczyć', verb: 'べんきょうします', verbRomaji: 'benkyou shimasu', verbMeaning: 'uczyć się' },

  // 21–22 — wzorce; źródło podaje przy 21 jeszcze „わかりにく", ale bez romaji
  // i bez notatki, więc potraktowane jako skaza transkrypcji i pominięte
  { id: 'v21', type: 'pattern', kana: 'わかりますか。', romaji: 'wakarimasu ka', meaning: 'Czy rozumiesz?', answers: [['わかります。', 'wakarimasu', 'rozumiem'], ['わかりません。', 'wakarimasen', 'nie rozumiem']], variants: [['わかりますね。', 'wakarimasu ne', 'rozumiesz, prawda?']] },
  { id: 'v22', type: 'pattern', kana: '～は にほんごで（ポーランドごで）なんですか。', romaji: '~ wa nihongo de (poorandogo de) nan desu ka', meaning: 'Jak się mówi ～ po japońsku (po polsku)?', answers: [['～は にほんごで（ポーランドごで）～です。', '~ wa nihongo de (poorandogo de) ~ desu', '～ po japońsku (po polsku) to ～']] }
];

/* =========================================================
   DŹWIĘK (Web Audio API — bez plików zewnętrznych)
   ========================================================= */

const Audio = (() => {
  let ctx = null;
  let muted = settings.muted;

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, duration, type = 'sine', volume = 0.25, delay = 0) {
    if (muted) return;
    try {
      const c = getCtx();
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(volume, c.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(c.currentTime + delay);
      osc.stop(c.currentTime + delay + duration);
    } catch (e) {
      /* audio not available */
    }
  }

  return {
    correct() {
      tone(523.25, 0.12, 'sine', 0.22);
      tone(659.25, 0.18, 'sine', 0.18, 0.1);
    },
    wrong() {
      tone(233, 0.25, 'triangle', 0.18);
      tone(220, 0.3, 'triangle', 0.12, 0.08);
    },
    click() {
      tone(1200, 0.04, 'sine', 0.08);
    },
    celebrate() {
      tone(523.25, 0.15, 'sine', 0.18, 0);
      tone(659.25, 0.15, 'sine', 0.18, 0.12);
      tone(783.99, 0.15, 'sine', 0.18, 0.24);
      tone(1046.5, 0.25, 'sine', 0.22, 0.36);
    },
    get muted() {
      return muted;
    },
    setMuted(value) {
      muted = !!value;
      return muted;
    }
  };
})();

/* =========================================================
   STAN
========================================================= */

const state = {
  screen: 'menu',
  script: settings.script,
  group: 'a',
  kana: 'あ',
  exam: null,
  vocab: null,
  // preferencja żyje w `settings.theme`; tu trzymamy tę samą wartość surową,
  // bo `updateThemeButton()` rozróżnia 'system' (ikona ◐), a `resolveTheme()`
  // i tak rozstrzyga 'system' przy każdym zastosowaniu motywu
  theme: settings.theme
};

// grupa i znak zawsze muszą należeć do aktywnego skryptu
// (inaczej np. przy starcie w Katakanie `state.kana` wskazywałoby 'あ')
{
  const firstGroup = getGroups()[0];
  state.group = firstGroup.id;
  state.kana = firstGroup.chars[0][0];
}

const app = document.getElementById('app');
const homeBtn = document.getElementById('homeBtn');

/* =========================================================
   POMOCNICZE
========================================================= */

/* Nazwa skryptu w widoku użytkownika — jedno miejsce, bez duplikacji. */
function scriptName(script = state.script) {
  return script === 'katakana' ? 'Katakana' : 'Hiragana';
}

function updateScriptHeader() {
  const eyebrow = document.getElementById('scriptEyebrow');
  const title = document.getElementById('appTitle');

  if (!eyebrow || !title) return;

  if (state.script === 'katakana') {
    eyebrow.textContent = 'JAPOŃSKI • KATAKANA';
  } else {
    eyebrow.textContent = 'JAPOŃSKI • HIRAGANA';
  }
  title.textContent = scriptName();
}

function item(kana) {
  return getAll().find(x => x.kana === kana);
}

function getGroup(groupId) {
  return getGroups().find(group => group.id === groupId);
}

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// 1 kreska, 2-4 kreski, 5+ kresek
function strokeWord(n) {
  if (n === 1) return 'kreska';
  if (n >= 2 && n <= 4) return 'kreski';
  return 'kresek';
}

function getSelectedExamCharacters() {
  const exam = state.exam;
  if (!exam) return [];

  if (exam.kanaList) {
    return getAll().filter(character => exam.kanaList.includes(character.kana));
  }

  return getAll().filter(character => exam.groups.includes(character.groupId));
}

function strokeListHTML(kana, tag = 'div') {
  return (getStrokeText()[kana] || [])
    .map(
      (description, index) => `
    <${tag} class="stroke-step">
      <span class="number">${index + 1}</span>
      <span>${description}</span>
    </${tag}>
  `
    )
    .join('');
}

/**
 * Nawigacja po znakach w trybie nauki.
 * delta: +1 = następny, -1 = poprzedni (z przechodzeniem między rzędami)
 */
function navigateKana(delta) {
  const currentGroup = getGroup(state.group);
  const kanaList = currentGroup.chars.map(c => c[0]);
  const currentIndex = kanaList.indexOf(state.kana);

  let newIndex = currentIndex + delta;

  const allGroups = getGroups();

  if (newIndex < 0) {
    const groupIndex = allGroups.findIndex(g => g.id === state.group);
    const prevGroupIndex = (groupIndex - 1 + allGroups.length) % allGroups.length;
    state.group = allGroups[prevGroupIndex].id;
    const prevGroup = getGroup(state.group);
    state.kana = prevGroup.chars[prevGroup.chars.length - 1][0];
  } else if (newIndex >= kanaList.length) {
    const groupIndex = allGroups.findIndex(g => g.id === state.group);
    const nextGroupIndex = (groupIndex + 1) % allGroups.length;
    state.group = allGroups[nextGroupIndex].id;
    state.kana = getGroup(state.group).chars[0][0];
  } else {
    state.kana = kanaList[newIndex];
  }

  renderLearn();
}

/**
 * Wykres kołowy (donut) z postępami na ekranie menu.
 */
function masteryDonutHTML() {
  const counts = { mastered: 0, good: 0, learning: 0, hard: 0, new: 0 };
  getAll().forEach(c => {
    counts[masteryLevel(c.kana)]++;
  });
  const total = getAll().length;

  const radius = 48;
  const circumference = 2 * Math.PI * radius;

  if (counts.mastered === 0 && counts.good === 0 && counts.learning === 0 && counts.hard === 0) {
    return `
      <div class="mastery-overview">
        <div class="mastery-donut">
          <svg viewBox="0 0 120 120" class="donut-svg">
            <circle cx="60" cy="60" r="${radius}" fill="none" stroke="var(--line)" stroke-width="10" opacity="0.3" />
          </svg>
          <div class="donut-center">
            <div class="donut-number">0</div>
            <div class="donut-label">/ ${total}</div>
          </div>
        </div>
        <p class="mastery-hint">Rozpocznij egzamin, aby śledzić postępy</p>
      </div>
    `;
  }

  const segments = [
    { color: 'var(--mastered)', count: counts.mastered },
    { color: 'var(--good)', count: counts.good },
    { color: 'var(--warn)', count: counts.learning },
    { color: 'var(--bad)', count: counts.hard },
    { color: 'var(--line)', count: counts.new }
  ].filter(s => s.count > 0);

  let offset = 0;
  const circles = segments
    .map(s => {
      const length = (s.count / total) * circumference;
      const html = `<circle cx="60" cy="60" r="${radius}" fill="none" stroke="${s.color}" stroke-width="10" stroke-dasharray="${length} ${circumference - length}" stroke-dashoffset="${-offset}" stroke-linecap="round" />`;
      offset += length;
      return html;
    })
    .join('');

  return `
    <div class="mastery-overview">
      <div class="mastery-donut">
        <svg viewBox="0 0 120 120" class="donut-svg">
          ${circles}
        </svg>
        <div class="donut-center">
          <div class="donut-number">${counts.mastered + counts.good}</div>
          <div class="donut-label">/ ${total}</div>
        </div>
      </div>
      <div class="mastery-legend">
        <span class="legend-item"><span class="legend-dot" style="background:var(--mastered)"></span>Opanowane: ${counts.mastered}</span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--good)"></span>Dobre: ${counts.good}</span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--warn)"></span>W trakcie: ${counts.learning}</span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--bad)"></span>Trudne: ${counts.hard}</span>
        <span class="legend-item"><span class="legend-dot" style="background:var(--line)"></span>Nowe: ${counts.new}</span>
      </div>
    </div>
  `;
}

/* =========================================================
   SVG + ANIMACJA KOLEJNOŚCI KRESEK
   Każda kreska w pliku SVG (źródło: KanjiVG) to osobny <path>,
   w kolejności rysowania. Animujemy je po kolei (stroke-dashoffset).
   Pliki nazywają się kodem Unicode, np. あ = 03042.svg.
   Gdy żadne źródło nie odpowie, pokazujemy znak z czcionki.
========================================================= */

const SVG_SOURCES = [
  hex => `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`,
  hex => `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`,
  hex => `svg/${hex}.svg` // opcjonalnie: ręcznie pobrane pliki do pracy offline
];

const SVG_NS = 'http://www.w3.org/2000/svg';
const kanjiCache = new Map();

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function kanaHex(kana) {
  return kana.codePointAt(0).toString(16).padStart(5, '0');
}

function resolveKanaParts(kana) {
  if (kana.length === 2) {
    return [...kana];
  }

  return [kana];
}

function orderLineHTML(n) {
  return Array.from(
    { length: n },
    (_, i) => `
    <span class="order-number">${i + 1}</span>
    ${i < n - 1 ? '<span class="order-arrow">→</span>' : ''}
  `
  ).join('');
}

async function loadKanji(kana) {
  if (kanjiCache.has(kana)) return kanjiCache.get(kana);

  const promise = (async () => {
    const parts = resolveKanaParts(kana);
    const result = [];

    for (const part of parts) {
      const hex = kanaHex(part);
      let data = null;

      for (const build of SVG_SOURCES) {
        try {
          const response = await fetch(build(hex));
          if (!response.ok) continue;

          const doc = new DOMParser().parseFromString(await response.text(), 'image/svg+xml');

          const paths = [...doc.querySelectorAll('[id^="kvg:StrokePaths"] path')].map(path => path.getAttribute('d'));

          const numbers = [...doc.querySelectorAll('[id^="kvg:StrokeNumbers"] text')].map(text => ({
            transform: text.getAttribute('transform'),
            label: text.textContent.trim()
          }));

          if (paths.length) {
            data = { paths, numbers };
            break;
          }
        } catch (error) {}
      }

      if (!data) return null;

      result.push({
        kana: part,
        ...data
      });
    }

    return result;
  })();

  kanjiCache.set(kana, promise);

  const result = await promise;

  if (!result) {
    kanjiCache.delete(kana);
    return null;
  }

  return result;
}

function buildKanjiSvg(parts) {
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 109 109');

  const strokeStyle = color => `fill:none;stroke:${color};stroke-width:4.5;stroke-linecap:round;stroke-linejoin:round`;

  const ghost = document.createElementNS(SVG_NS, 'g');
  const drawn = document.createElementNS(SVG_NS, 'g');
  const nums = document.createElementNS(SVG_NS, 'g');

  ghost.setAttribute('class', 'kvg-ghost');
  drawn.setAttribute('class', 'kvg-drawn');
  nums.setAttribute('class', 'kvg-numbers');

  const isYoon = parts.length === 2;

  parts.forEach((part, partIndex) => {
    let transform = '';

    if (isYoon) {
      if (partIndex === 0) {
        // Duży znak bazowy po lewej
        transform = 'translate(-8 8) scale(0.78)';
      } else {
        // Mały ゃ/ゅ/ょ w prawym dolnym rogu
        transform = 'translate(55 48) scale(0.42)';
      }
    }

    part.paths.forEach(d => {
      const back = document.createElementNS(SVG_NS, 'path');
      back.setAttribute('d', d);
      back.setAttribute('style', strokeStyle('var(--line)'));

      const front = document.createElementNS(SVG_NS, 'path');
      front.setAttribute('d', d);
      front.setAttribute('style', strokeStyle('var(--ink)'));

      if (transform) {
        back.setAttribute('transform', transform);
        front.setAttribute('transform', transform);
      }

      ghost.appendChild(back);
      drawn.appendChild(front);
    });

    part.numbers.forEach((n, strokeIndex) => {
      const text = document.createElementNS(SVG_NS, 'text');

      if (n.transform) {
        text.setAttribute('transform', transform ? `${transform} ${n.transform}` : n.transform);
      }

      text.setAttribute('style', 'font-size:8px;font-weight:700;fill:var(--accent);transition:opacity .2s');

      const previousStrokes = parts
        .slice(0, partIndex)
        .reduce((sum, previousPart) => sum + previousPart.paths.length, 0);

      text.textContent = String(previousStrokes + strokeIndex + 1);
      nums.appendChild(text);
    });
  });

  svg.append(ghost, drawn, nums);
  return svg;
}

/*
 * Wstawia znak do kontenera `wrap` i zwraca kontroler
 * { play, step, showAll, count } albo null (brak SVG / zmieniono ekran).
 * onProgress(drawn, active): ile kresek jest gotowych i która jest rysowana (-1 = żadna).
 * overlay: element nakładany (np. canvas rysowania), który ma przetrwać
 *   podmianę zawartości `wrap` — trafia pod wskaźnik kreski.
 */
async function mountKana(wrap, kana, { autoplay = false, onProgress, onFail, overlay } = {}) {
  wrap.innerHTML = '<div class="loading">Ładowanie znaku…</div>';

  // `overlay` należy do wołającego (T13: canvas rysowania). Kontener jest
  // czyszczony w trzech miejscach i w każdym musi on wrócić na miejsce —
  // inaczej tryb rysowania znikałby na czas wczytywania znaku.
  if (overlay) wrap.appendChild(overlay);

  const data = await loadKanji(kana);
  if (!wrap.isConnected) return null; // użytkownik zdążył zmienić ekran

  if (!data) {
    wrap.innerHTML = '';

    const glyph = document.createElement('div');
    glyph.className = 'kana-fallback';
    glyph.textContent = kana;
    glyph.style.cssText =
      `font-size:${Math.round(wrap.clientHeight * 0.8)}px;line-height:1;` +
      'font-family:"Noto Sans JP","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif';
    wrap.appendChild(glyph);

    // element nakładany musi przetrwać podmianę zawartości kontenera
    if (overlay) wrap.appendChild(overlay);

    if (onFail) onFail();
    return null;
  }

  const svg = buildKanjiSvg(data);

  const indicator = document.createElement('div');
  indicator.className = 'stroke-indicator';
  indicator.style.visibility = 'hidden';

  // overlay trafia pod wskaźnikiem, żeby numer kreski został czytelny nad rysunkiem
  wrap.replaceChildren(svg, ...(overlay ? [overlay] : []), indicator);

  const strokes = [...svg.querySelectorAll('.kvg-drawn path')];
  const labels = [...svg.querySelectorAll('.kvg-numbers text')];
  const lengths = strokes.map(path => path.getTotalLength());

  let token = 0; // zmiana tokenu przerywa trwające odtwarzanie
  let running = null; // aktualnie trwająca animacja
  let runningIndex = -1;
  let drawn = 0; // ile kresek jest już w pełni narysowanych

  const emit = (done, active) => {
    if (onProgress) onProgress(done, active);
  };

  function showIndicator(i) {
    indicator.className = 'stroke-indicator';
    indicator.style.visibility = 'visible';
    indicator.innerHTML = `<span class="stroke-indicator-number">${i}</span><span>Kreska ${i} z ${strokes.length}</span>`;
  }

  function finish() {
    indicator.className = 'stroke-indicator finished';
    indicator.style.visibility = 'visible';
    indicator.innerHTML = '<span class="stroke-indicator-number">✓</span><span>Gotowe</span>';
    emit(0, -1);
  }

  function cancelRunning() {
    token++;
    if (running) {
      running.cancel();
      running = null;
      if (labels[runningIndex]) labels[runningIndex].style.opacity = '0';
    }
  }

  // wszystkie kreski ukryte (dash dłuższy niż ścieżka, przesunięty poza nią)
  function reset() {
    strokes.forEach((path, i) => {
      path.style.strokeDasharray = String(lengths[i] + 1);
      path.style.strokeDashoffset = String(lengths[i] + 2);
    });
    labels.forEach(label => {
      label.style.opacity = '0';
    });
    drawn = 0;
    indicator.style.visibility = 'hidden';
    emit(0, -1);
  }

  function showAll() {
    cancelRunning();
    strokes.forEach((path, i) => {
      path.style.strokeDasharray = String(lengths[i] + 1);
      path.style.strokeDashoffset = '0';
    });
    labels.forEach(label => {
      label.style.opacity = '1';
    });
    drawn = strokes.length;
    indicator.style.visibility = 'hidden';
    emit(0, -1);
  }

  async function drawStroke(i, my) {
    emit(i, i);
    showIndicator(i + 1);
    if (labels[i]) labels[i].style.opacity = '1';

    runningIndex = i;
    running = strokes[i].animate([{ strokeDashoffset: lengths[i] + 2 }, { strokeDashoffset: 0 }], {
      duration: Math.min(1000, Math.max(380, lengths[i] * 16)),
      easing: 'ease-in-out',
      fill: 'forwards'
    });

    try {
      await running.finished;
    } catch (error) {
      return false; // animacja anulowana
    }

    if (my !== token) return false;

    strokes[i].style.strokeDashoffset = '0'; // zatwierdzamy stan końcowy
    running.cancel();
    running = null;
    drawn = i + 1;

    return true;
  }

  async function play() {
    cancelRunning();
    const my = token;
    reset();

    for (let i = 0; i < strokes.length; i++) {
      if (!(await drawStroke(i, my))) return;
      await sleep(180);
      if (my !== token) return;
    }

    finish();
  }

  async function step() {
    cancelRunning();
    const my = token;

    if (drawn >= strokes.length) reset();

    if (!(await drawStroke(drawn, my))) return;

    if (drawn >= strokes.length) finish();
    else emit(drawn, -1);
  }

  showAll();
  if (autoplay) play();

  return { play, step, showAll, count: strokes.length, paths: strokes };
}

/* =========================================================
   T13 — RYSOWANIE ZNAKU (warstwa 1: rysowanie i czyszczenie)
   ------------------------------------------------------------
   Samodzielny blok: dostaje kontener, zwraca kontroler. Ocena
   rysunku (warstwa 2) dołoży się obok i nie zmieni tego API —
   dlatego już teraz trzymamy kreski jako dane, a nie tylko jako
   piksele. Bez tego blok nie dałby się wynieść do modułu w T16.
========================================================= */
function mountDrawing(wrap) {
  const canvas = document.createElement('canvas');
  canvas.className = 'draw-canvas';
  canvas.id = 'drawCanvas';

  // Wstawiamy od razu, jeszcze przed wczytaniem SVG — rysowanie nie zależy od
  // KanjiVG i musi działać także na awaryjnej ścieżce (brak internetu).
  // `mountKana` dokłada go ponownie po każdej podmianie zawartości kontenera.
  wrap.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  let strokes = []; // [[{x,y}, …], …] w px CSS — zmiana rozmiaru nie gubi rysunku
  let active = null; // kreska rysowana w tej chwili
  let enabled = false;

  // Kontroler powstaje na końcu, ale uchwyty wołają `notify()` — dzięki temu
  // `onChange` wolno przypisać zaraz po montażu, bez wchodzenia w konstruktor.
  let api = null;
  const notify = () => {
    if (api) api.onChange();
  };

  // Grubość rośnie z polem, więc rysunek wygląda tak samo na 210 px i 250 px.
  const lineWidth = () => Math.max(4, Math.round(wrap.clientWidth * 0.03));

  // Kolor bierzemy z motywu, żeby rysunek był widoczny w obu.
  const ink = () => getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#8d5cf6';

  function paint() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = ink();
    ctx.lineWidth = lineWidth();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    strokes.forEach(stroke => {
      if (stroke.length === 1) {
        // jedno dotknięcie bez ruchu — kropka
        ctx.moveTo(stroke[0].x, stroke[0].y);
        ctx.lineTo(stroke[0].x + 0.01, stroke[0].y);
        return;
      }
      stroke.forEach((point, index) => {
        if (index) ctx.lineTo(point.x, point.y);
        else ctx.moveTo(point.x, point.y);
      });
    });
    ctx.stroke();
  }

  let lastBox = null; // poprzedni rozmiar pola — podstawa przeskalowania kresek

  /*
   * Canvas ma własną rozdzielczość (px urządzenia), a rysujemy w px CSS.
   * Bez przeliczenia linia byłaby rozmyta na ekranach o wysokiej gęstości.
   */
  function resize() {
    const width = wrap.clientWidth;
    const height = wrap.clientHeight;
    if (!width || !height) return;

    // Kreski trzymamy w px, więc zmiana rozmiaru pola musi je przeskalować —
    // inaczej po obrocie telefonu rysunek rozjechałby się ze znakiem.
    if (lastBox && (lastBox.width !== width || lastBox.height !== height)) {
      const scaleX = width / lastBox.width;
      const scaleY = height / lastBox.height;
      strokes.forEach(stroke =>
        stroke.forEach(point => {
          point.x *= scaleX;
          point.y *= scaleY;
        })
      );
    }
    lastBox = { width, height };

    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paint();
  }

  const pointOf = event => {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };

  function start(event) {
    if (!enabled || !event.isPrimary) return;
    event.preventDefault();

    // Przechwycenie bywa odrzucane (np. dla zdarzeń syntetycznych) — jego
    // brak nie może przerwać rysowania.
    try {
      canvas.setPointerCapture(event.pointerId);
    } catch (e) {
      /* bez przechwycenia też działa */
    }

    active = [pointOf(event)];
    strokes.push(active);
    paint();
    notify();
  }

  function extend(event) {
    if (!active || !enabled || !event.isPrimary) return;

    // przycisk puszczony poza polem (przechwycenie mogło się nie udać)
    if (event.buttons === 0) {
      active = null;
      notify();
      return;
    }

    event.preventDefault();
    active.push(pointOf(event));
    paint();
  }

  function stop(event) {
    if (!active) return;
    if (event) event.preventDefault();
    active = null;
    notify();
  }

  canvas.addEventListener('pointerdown', start);
  canvas.addEventListener('pointermove', extend);
  canvas.addEventListener('pointerup', stop);
  canvas.addEventListener('pointercancel', stop);

  const observer = new ResizeObserver(resize);
  observer.observe(wrap);
  resize();

  api = {
    canvas,
    onChange: () => {},
    get enabled() {
      return enabled;
    },
    get strokes() {
      return strokes;
    },
    setEnabled(value) {
      enabled = !!value;
      if (!enabled) active = null;
      wrap.classList.toggle('drawing', enabled);
      if (enabled) resize();
      notify();
    },
    clear() {
      strokes = [];
      active = null;
      paint();
      notify();
    },
    destroy() {
      observer.disconnect();
    }
  };

  return api;
}

/* =========================================================
   T13 — OCENA RYSUNKU (warstwa 2)
   ------------------------------------------------------------
   Prosty model, nie recognizer (patrz §35): cztery składniki
   i jeden próg zbiorczy.

     liczność  — czy narysowano tyle kresek, ile wymaga wzór
     kierunek  — czy kreska n ma kierunek kreski n wzoru
     pokrycie  — jaka część WZORU leży blisko rysunku
     precyzja  — jaka część RYSUNKU leży blisko wzoru

   „Pokrycie" i „precyzja" są rozdzielone celowo: pierwsze karze
   pominięte kreski, drugie — bazgroły obok znaku. Wzorem jest
   geometria KanjiVG z `mountKana`; drugiego zbioru danych nie ma
   (§35). Wszystkie odległości liczymy w px pola, więc tolerancja
   skaluje się razem z układem.
   ========================================================= */

const DRAW_PASS_SCORE = 0.7; // próg zbiorczy — poniżej: „jeszcze nie to"
const DRAW_SAMPLES = 24; // punktów na kreskę; więcej nie zmienia werdyktu

// Próbkowanie ścieżki SVG równomiernie po długości.
function samplePath(path, count) {
  const total = path.getTotalLength();
  const points = [];
  for (let i = 0; i <= count; i++) {
    const point = path.getPointAtLength((total * i) / count);
    points.push({ x: point.x, y: point.y });
  }
  return points;
}

/*
 * Ponowne próbkowanie łamanej. Sprowadza ślad wskaźnika i ścieżkę wzoru do
 * tej samej, ograniczonej liczby punktów — dzięki temu koszt oceny nie rośnie
 * z tym, jak wolno ktoś rysował.
 */
function resample(polyline, count) {
  const origin = polyline[0] || { x: 0, y: 0 };
  if (polyline.length < 2) return Array.from({ length: count + 1 }, () => ({ ...origin }));

  const lengths = [0];
  let total = 0;
  for (let i = 1; i < polyline.length; i++) {
    total += Math.hypot(polyline[i].x - polyline[i - 1].x, polyline[i].y - polyline[i - 1].y);
    lengths.push(total);
  }
  if (!total) return Array.from({ length: count + 1 }, () => ({ ...origin }));

  const points = [];
  let index = 0;
  for (let i = 0; i <= count; i++) {
    const target = (total * i) / count;
    while (index < lengths.length - 2 && lengths[index + 1] < target) index++;

    const span = lengths[index + 1] - lengths[index] || 1;
    const t = Math.max(0, Math.min(1, (target - lengths[index]) / span));
    const a = polyline[index];
    const b = polyline[index + 1] || a;
    points.push({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });
  }
  return points;
}

// Odległość punktu od odcinka — podstawa porównania kształtu.
function distanceToSegment(point, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const square = dx * dx + dy * dy;
  if (!square) return Math.hypot(point.x - a.x, point.y - a.y);

  let t = ((point.x - a.x) * dx + (point.y - a.y) * dy) / square;
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(point.x - (a.x + t * dx), point.y - (a.y + t * dy));
}

function distanceToStroke(point, stroke) {
  if (stroke.length < 2) return Math.hypot(point.x - stroke[0].x, point.y - stroke[0].y);

  let best = Infinity;
  for (let i = 1; i < stroke.length; i++) {
    best = Math.min(best, distanceToSegment(point, stroke[i - 1], stroke[i]));
  }
  return best;
}

// Wektor „od początku do końca" — kierunek kreski, odporny na drżenie palca.
function strokeDirection(stroke) {
  const first = stroke[0];
  const last = stroke[stroke.length - 1];
  const dx = last.x - first.x;
  const dy = last.y - first.y;
  const length = Math.hypot(dx, dy);
  if (!length) return { x: 0, y: 0 };
  return { x: dx / length, y: dy / length };
}

/*
 * Zwraca liczby, nie werdykt — o pokazaniu wyniku decyduje UI.
 * `drawn` i `reference` to listy łamanych w tym samym układzie, a `box` to
 * rozmiar pola, z którego liczymy tolerancję.
 */
function scoreDrawing(drawn, reference, box) {
  const expected = reference.length;
  const made = drawn.length;
  const tolerance = Math.max(5, box * 0.09);

  if (!expected || !made) {
    return {
      score: 0,
      passed: false,
      backwards: [],
      count: 0,
      direction: 0,
      coverage: 0,
      precision: 0,
      made,
      expected,
      pairs: []
    };
  }

  const count = Math.max(0, 1 - Math.abs(made - expected) / expected);

  let direction = 0;
  const paired = Math.min(made, expected);
  const pairs = [];
  for (let i = 0; i < paired; i++) {
    const a = strokeDirection(drawn[i]);
    const b = strokeDirection(reference[i]);
    const agreement = (a.x * b.x + a.y * b.y + 1) / 2; // cos kąta → 0..1
    direction += agreement;
    pairs.push({ index: i + 1, agreement });
  }
  direction = paired ? direction / paired : 0;

  const near = (point, strokes) => strokes.some(stroke => distanceToStroke(point, stroke) <= tolerance);

  const referencePoints = reference.flat();
  let covered = 0;
  for (const point of referencePoints) if (near(point, drawn)) covered++;
  const coverage = referencePoints.length ? covered / referencePoints.length : 0;

  const drawnPoints = drawn.flat();
  let precise = 0;
  for (const point of drawnPoints) if (near(point, reference)) precise++;
  const precision = drawnPoints.length ? precise / drawnPoints.length : 0;

  const shape = (coverage + precision) / 2;
  const score = 0.35 * count + 0.25 * direction + 0.4 * shape;

  /*
    Kierunek jest bramką, nie tylko składnikiem sumy. Kreska narysowana wspak
    pokrywa dokładnie te same piksele, więc kształt i liczność jej nie widzą —
    bez tej bramki odwrócona kreska zbierała 0,75 i przechodziła próg.
  */
  const backwards = pairs.filter(pair => pair.agreement < 0.25).map(pair => pair.index);
  const passed = backwards.length === 0 && score >= DRAW_PASS_SCORE;

  return { score, passed, backwards, count, direction, coverage, precision, made, expected, pairs };
}

// „kreska 2", „kreski 2 i 4", „kreski 2, 4 i 7"
function strokeNumbers(numbers) {
  if (numbers.length === 1) return `kreska ${numbers[0]}`;
  if (numbers.length === 2) return `kreski ${numbers[0]} i ${numbers[1]}`;
  return `kreski ${numbers.slice(0, -1).join(', ')} i ${numbers[numbers.length - 1]}`;
}

// Werdykt po polsku. Mówi, co zawiodło, zamiast samego „nie".
function drawVerdict(result) {
  if (!result.made) return 'Najpierw narysuj znak.';
  if (!result.expected) return 'Nie mam wzoru kresek dla tego znaku.';

  if (result.passed && result.score >= 0.85) return 'Świetnie — bardzo blisko wzoru.';
  if (result.passed) return 'Dobrze — znak rozpoznany.';

  // Odwrócone kreski wskazujemy numerem — samo „kierunek" niczego nie uczy.
  const backwards = result.backwards;

  const weaknesses = [
    { value: result.count, text: `inna liczba kresek (masz ${result.made}, wzór ma ${result.expected})` },
    {
      value: result.direction,
      text: backwards.length
        ? `kierunek kresek (odwrotnie: ${strokeNumbers(backwards)})`
        : 'kolejność albo kierunek kresek'
    },
    { value: (result.coverage + result.precision) / 2, text: 'kształt znaku' }
  ];
  weaknesses.sort((a, b) => a.value - b.value);
  return `Jeszcze nie to — popraw: ${weaknesses[0].text}.`;
}

/*
 * Wzór kresek w układzie canvasa. Ścieżki SVG mają własny viewBox, więc
 * przeliczamy je przez macierz ekranu — dzięki temu ocena nie zależy od tego,
 * jak szeroka jest karta ani ile ma akurat px pole znaku.
 */
function referenceOnCanvas(svg, canvas, paths, samples) {
  const matrix = svg.getScreenCTM();
  if (!matrix) return [];

  const box = canvas.getBoundingClientRect();
  return paths.map(path =>
    samplePath(path, samples).map(point => {
      const mapped = svg.createSVGPoint();
      mapped.x = point.x;
      mapped.y = point.y;
      const screen = mapped.matrixTransform(matrix);
      return { x: screen.x - box.left, y: screen.y - box.top };
    })
  );
}

/* =========================================================
   MOTYW + DŹWIĘK
========================================================= */

/*
 * 'system' zamieniamy na konkretny motyw już w T1, żeby zachować
 * dotychczasowe zachowanie i nie ustawiać data-theme="system",
 * którego CSS jeszcze nie obsługuje. T2 doda nasłuch zmiany OS.
 */
function resolveTheme(theme) {
  if (THEME_VALUES.includes(theme) && theme !== 'system') return theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme() {
  document.documentElement.dataset.theme = resolveTheme(state.theme);
  updateThemeButton();
}

/* --- ustawienia: jedyna ścieżka zapisu preferencji --- */

function setTheme(theme) {
  if (!THEME_VALUES.includes(theme)) return;

  settings.theme = theme;
  state.theme = theme;
  saveSettings(settings);
  applyTheme();
}

function setMuted(value) {
  settings.muted = !!value;
  saveSettings(settings);
  Audio.setMuted(settings.muted);
  updateMuteButton();
}

/*
  Ukrywanie wzoru przy rysowaniu jest ustawieniem, nie stanem trybu:
  wybór ma obowiązywać przy kolejnym znaku i po przeładowaniu.
  Klasa ląduje na `#svgWrap`, więc zmiana działa też w otwartym panelu,
  a CSS zdejmuje znak tylko wtedy, gdy tryb rysowania jest włączony.
*/
function applyHideGuide() {
  const wrap = document.getElementById('svgWrap');
  if (wrap) wrap.classList.toggle('hide-guide', !!settings.hideGuide);
}

function setHideGuide(value) {
  settings.hideGuide = !!value;
  saveSettings(settings);
  applyHideGuide();
}

function setScript(script) {
  if (!SCRIPT_VALUES.includes(script)) return;

  settings.script = script;
  state.script = script;

  // zależny stan grupy i znaku musi zawsze należeć do nowego skryptu
  const firstGroup = getGroups()[0];
  state.group = firstGroup.id;
  state.kana = firstGroup.chars[0][0];

  saveSettings(settings);
  updateScriptHeader();
}

function updateThemeButton() {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  if (state.theme === 'dark') {
    button.innerHTML = '☀️';
    button.title = 'Przełącz na jasny motyw';
  } else if (state.theme === 'light') {
    button.innerHTML = '🌙';
    button.title = 'Przełącz na ciemny motyw';
  } else {
    button.innerHTML = '◐';
    button.title = 'Motyw systemowy';
  }
}

function updateMuteButton() {
  const button = document.getElementById('muteToggle');
  if (!button) return;

  button.innerHTML = Audio.muted ? '🔇' : '🔊';
  button.title = Audio.muted ? 'Włącz dźwięk' : 'Wycisz';
}

function createThemeToggle() {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  /*
   * Decyzja idzie po aktualnie *widocznym* motywie, nie po `state.theme`.
   * Przy preferencji 'system' `state.theme` to 'system', więc porównanie
   * `=== 'dark'` dawałoby 'dark' i pierwsze kliknięcie nic by nie zmieniło
   * (martwe kliknięcie, gdy systemowy motyw to ciemny).
   */
  button.onclick = () => {
    Audio.click();
    setTheme(resolveTheme(state.theme) === 'dark' ? 'light' : 'dark');
  };

  updateThemeButton();
}

function setupMuteToggle() {
  const button = document.getElementById('muteToggle');
  if (!button) return;

  button.onclick = () => {
    setMuted(!Audio.muted);
  };

  updateMuteButton();
}

/* =========================================================
   EKRANY
========================================================= */

function setScreen(screen) {
  state.screen = screen;
  homeBtn.classList.toggle('hidden', screen === 'menu');
  render();

  // animacja wejścia
  app.style.animation = 'none';
  void app.offsetHeight;
  app.style.animation = 'fadeSlideIn 0.3s ease';
}

homeBtn.onclick = () => {
  Audio.click();
  stopExam();
  setScreen('menu');
};

function render() {
  createThemeToggle();
  setupMuteToggle();
  applyTheme();
  updateScriptHeader();

  if (state.screen === 'menu') renderMenu();
  if (state.screen === 'learn') renderLearn();
  if (state.screen === 'exam') renderExam();
  if (state.screen === 'review') renderReview();
  if (state.screen === 'vocab') renderVocab();
  if (state.screen === 'settings') renderSettings();
}

// zawsze trzeba zatrzymać timer, żeby po wyjściu nie wyskoczyło nowe pytanie
function stopExam() {
  if (state.exam) {
    clearTimeout(state.exam.timer);
    clearInterval(state.exam.timerCountdown);
    state.exam.finished = true;
    // T15: zamknięcie sesji przez wyjście z egzaminu (Menu, powtórka,
    // czyszczenie danych). `recorded` pilnuje, by zapis poszedł raz.
    recordSessionStats(state.exam);
  }
  state.exam = null;
}

// ekran 'exam' ma osobne funkcje (setup / pytanie / wynik),
// więc render() po prostu wraca do ekranu setupu
function renderExam() {
  showExamSetup();
}

/* =========================================================
   MENU
========================================================= */

function renderMenu() {
  app.innerHTML = `
    <div class="script-switcher">
      <button class="script-btn ${state.script === 'hiragana' ? 'active' : ''}" data-script="hiragana">ひ Hiragana</button>
      <button class="script-btn ${state.script === 'katakana' ? 'active' : ''}" data-script="katakana">カ Katakana</button>
    </div>

    ${masteryDonutHTML()}

    <section class="menu">
      <button class="menu-card" id="learnCard">
        <div class="menu-icon">✍️</div>
        <h2>Tryb nauki</h2>
        <p>Wybierz rząd ${state.script === 'katakana' ? 'katakany' : 'hiragany'}, zobacz znak, liczbę kresek i prawidłową kolejność ich rysowania.</p>
      </button>

      <button class="menu-card" id="examCard">
        <div class="menu-icon">📝</div>
        <h2>Tryb egzaminu</h2>
        <p>Wybierz zakres znaków i ćwicz tak długo, jak chcesz. Błędy dostajesz w formie fiszki.</p>
      </button>

      <button class="menu-card full" id="reviewCard">
        <div class="menu-icon">🔄</div>
        <h2>Powtórki</h2>
        <p>Znaki zaplanowane na dziś — powtórki w rozstawie rosnącym co do dnia.</p>
      </button>

      <button class="menu-card full" id="vocabCard">
        <div class="menu-icon">🎴</div>
        <h2>Słownictwo</h2>
        <p>Fiszki z wyrażeniami z lekcji — wybierz poprawne znaczenie.</p>
      </button>

      <button class="menu-card full" id="settingsCard">
        <div class="menu-icon">⚙️</div>
        <h2>Ustawienia</h2>
        <p>Motyw, efekty dźwiękowe, domyślny skrypt i zarządzanie danymi.</p>
      </button>
    </section>
  `;

  document.getElementById('learnCard').onclick = () => {
    Audio.click();
    setScreen('learn');
  };
  document.getElementById('examCard').onclick = () => {
    Audio.click();
    state.screen = 'exam';
    homeBtn.classList.remove('hidden');
    showExamSetup();
  };
  document.getElementById('reviewCard').onclick = () => {
    Audio.click();
    setScreen('review');
  };
  document.getElementById('vocabCard').onclick = () => {
    Audio.click();
    state.vocab = null; // nowy zestaw za każdym wejściem
    setScreen('vocab');
  };
  document.getElementById('settingsCard').onclick = () => {
    Audio.click();
    setScreen('settings');
  };

  document.querySelectorAll('[data-script]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      setScript(btn.dataset.script);
      renderMenu();
    };
  });
}

/* =========================================================
   PRZEGLĄD — KOLEJKA SRS (T21)
   ========================================================= */

/*
   Świadomy wybór słów: ten ekran NIE używa „Opanowane"/„mastered".
   Słowo „opanowane" należy w aplikacji do `masteryLevel()` (legacy
   statystyka odpowiedzi), a SRS ma własne, inne znaczenie. Zanim
   etykiety nie zostaną ujednolicone (osobne zadanie), ten ekran
   mówi wyłącznie o terminach powtórki.
*/
const REVIEW_STATUS_LABEL = {
  unseen: 'Nowy',
  learning: 'W trakcie nauki',
  review: 'Do powtórki',
  mastered: 'Długi odstęp'
};

function reviewIntervalText(entry) {
  const days = REVIEW_STAGES[entry.stage].intervalDays;
  if (days === 0) return 'w tej sesji';
  if (days === 1) return 'za 1 dzień';
  return `za ${days} dni`;
}

function renderReview() {
  const now = Date.now();
  const due = dueList(now);
  const session = due.slice(0, MAX_REVIEW_PER_SESSION);

  app.innerHTML = `
    <section class="review">
      <div class="eyebrow">PRZEGLĄD</div>
      <h2>Powtórki</h2>

      ${
        due.length === 0
          ? `
        <div class="review-empty card">
          <p class="review-empty-title">Wszystko na czas</p>
          <p>Nie ma tu żadnego znaku zaplanowanego na dziś. Nowe znaki dodasz, ćwicząc w trybie nauki.</p>
          <button class="btn btn-primary" id="reviewGoLearn">Przejdź do nauki</button>
        </div>
      `
          : `
        <p class="review-summary">
          Do powtórki: <strong>${due.length}</strong>${
            due.length > MAX_REVIEW_PER_SESSION ? ` &nbsp;·&nbsp; dziś: ${MAX_REVIEW_PER_SESSION}` : ''
          }
        </p>

        <ul class="review-list">
          ${session
            .map(
              item => `
            <li class="review-row">
              <button class="review-kana ${masteryLevel(item.kana) === 'new' ? '' : `mastery-${masteryLevel(item.kana)}`}" data-review-kana="${item.kana}">${item.kana}</button>
              <span class="review-meta">
                <span class="review-tag">${REVIEW_STATUS_LABEL[deriveStatus(progress.chars[item.kana])]}</span>
                ${
                  progress.chars[item.kana].lapses > 0
                    ? `<span class="review-tag review-tag-warn">Potknięcia: ${progress.chars[item.kana].lapses}</span>`
                    : ''
                }
                <span class="review-tag review-tag-quiet">${reviewIntervalText(progress.chars[item.kana])}</span>
              </span>
            </li>
          `
            )
            .join('')}
        </ul>

        <button class="btn btn-primary review-start" id="reviewStartBtn">Rozpocznij powtórki</button>
      `
      }
    </section>
  `;

  const startBtn = document.getElementById('reviewStartBtn');
  if (startBtn) {
    startBtn.onclick = () => {
      Audio.click();
      const settings = loadExamSettings();
      startExam([], {
        kanaList: session.map(item => item.kana),
        options: settings.options,
        outside: settings.outside,
        kind: 'review'
      });
    };
  }

  document.querySelectorAll('[data-review-kana]').forEach(button => {
    button.onclick = () => {
      Audio.click();
      const kana = button.dataset.reviewKana;
      const character = item(kana);
      if (character) state.group = character.groupId;
      state.kana = kana;
      setScreen('learn');
    };
  });

  const goLearn = document.getElementById('reviewGoLearn');
  if (goLearn)
    goLearn.onclick = () => {
      Audio.click();
      setScreen('learn');
    };
}

/* =========================================================
   SŁOWNICTWO (T19 — warstwa 3: fiszki)
   ------------------------------------------------------------
   Jedna fiszka = jedno pytanie: co znaczy to wyrażenie? Cztery
   odpowiedzi, jedna poprawna — ten sam rytm co w egzaminie, więc
   użytkownik nie uczy się drugiego sposobu klikania.

   Wynik idzie wyłącznie do `hiragana-vocab` (warstwa 2). Nie rusza
   `hiragana-progress` (karta nie jest znakiem) ani `hiragana-daily`
   (odpowiedź na fiszkę nie jest odpowiedzią na kanę).

   Kolejność jest deterministyczna i liczona z liczników: najpierw
   karty nietknięte, potem te z najniższą trafnością, a przy remisie
   kolejność tabeli. Bez losowości — ta sama historia daje ten sam
   zestaw, co czyni zachowanie przewidywalnym i testowalnym.
========================================================= */

const VOCAB_OPTIONS = 4;

function vocabPool() {
  return VOCAB_ITEMS.filter(item => item.type === 'card');
}

function vocabItem(cardId) {
  return vocabPool().find(item => item.id === cardId) || null;
}

function vocabSessionOrder() {
  return vocabPool()
    .map((item, index) => ({ id: item.id, index: index, stat: vocabStat(item.id) }))
    .sort((a, b) => a.stat.seen - b.stat.seen || a.stat.accuracy - b.stat.accuracy || a.index - b.index)
    .map(entry => entry.id);
}

function vocabOptions(item) {
  const chosen = new Set([item.meaning]);
  const distractors = [];
  for (const other of shuffle(vocabPool())) {
    if (other.id === item.id || chosen.has(other.meaning)) continue;
    chosen.add(other.meaning);
    distractors.push(other.meaning);
    if (distractors.length === VOCAB_OPTIONS - 1) break;
  }
  return shuffle([item.meaning, ...distractors]);
}

function startVocabSession() {
  state.vocab = {
    order: vocabSessionOrder(),
    index: 0,
    correct: 0,
    answered: false,
    chosen: null,
    lastCorrect: false,
    options: null,
    finished: false
  };
  renderVocab();
}

function answerVocab(meaning) {
  const session = state.vocab;
  if (!session || session.answered || session.finished) return;

  const item = vocabItem(session.order[session.index]);
  if (!item) return;

  const correct = meaning === item.meaning;
  session.answered = true;
  session.chosen = meaning;
  session.lastCorrect = correct;
  if (correct) session.correct++;

  recordVocabAnswer(item.id, correct);
  if (correct) Audio.correct();
  else Audio.wrong();

  renderVocab();
}

function nextVocab() {
  const session = state.vocab;
  if (!session || !session.answered) return;

  session.index++;
  session.answered = false;
  session.chosen = null;
  session.lastCorrect = false;
  session.options = null;

  if (session.index >= session.order.length) {
    session.finished = true;
    Audio.celebrate();
  }

  renderVocab();
}

function vocabRevealHTML(item, correct) {
  return `
    <div class="flashcard vocab-reveal ${correct ? 'vocab-correct' : ''}">
      <div class="flash-label">${correct ? '✓ Dobrze' : '✗ Poprawna odpowiedź'}</div>
      <div class="flash-kana vocab-kana">${item.kana}</div>
      <div class="flash-romaji">${item.romaji}</div>
      <div class="flash-meta">${item.meaning}</div>
      <div class="flash-meta">
        Czasownik: <b>${item.verb}</b> (${item.verbRomaji}) — ${item.verbMeaning}
      </div>
      <button class="btn btn-primary" id="vocabNext">Dalej → (Enter)</button>
    </div>
  `;
}

function renderVocab() {
  if (!state.vocab) {
    startVocabSession();
    return;
  }

  const session = state.vocab;

  if (session.finished) {
    const total = session.order.length;
    app.innerHTML = `
      <section class="vocab">
        <div class="eyebrow">SŁOWNICTWO</div>
        <h2>Koniec zestawu</h2>

        <div class="card vocab-result">
          <p class="vocab-result-score">${session.correct} / ${total}</p>
          <p>${resultText(session.correct, total, state.script, 'vocab')}</p>
          <button class="btn btn-primary" id="vocabAgain">Jeszcze raz</button>
          <button class="btn btn-secondary" id="vocabBack">Wróć do menu</button>
        </div>
      </section>
    `;

    document.getElementById('vocabAgain').onclick = () => {
      Audio.click();
      startVocabSession();
    };
    document.getElementById('vocabBack').onclick = () => {
      Audio.click();
      state.vocab = null;
      setScreen('menu');
    };
    return;
  }

  const item = vocabItem(session.order[session.index]);
  if (!item) {
    session.finished = true;
    renderVocab();
    return;
  }

  // Opcje losujemy raz na kartę i trzymamy w sesji — inaczej każde
  // przerysowanie po odpowiedzi przestawiałoby przyciski pod palcem.
  if (!session.options) session.options = vocabOptions(item);

  app.innerHTML = `
    <section class="vocab">
      <div class="eyebrow">SŁOWNICTWO</div>
      <h2>Fiszki</h2>

      <p class="vocab-progress">
        <span>Karta <strong>${session.index + 1}</strong> z <strong>${session.order.length}</strong></span>
        <span>Poprawnie: <strong>${session.correct}</strong></span>
      </p>

      <div class="prompt">
        <div class="polish">Co znaczy:</div>
        <div class="question question-vocab">${item.kana}</div>

        <div class="answers answers-text">
          ${session.options
            .map(
              (meaning, i) => `
            <button class="answer answer-text" data-meaning="${meaning}">
              <span class="answer-key">${i + 1}</span>
              ${meaning}
            </button>
          `
            )
            .join('')}
        </div>

        <div class="feedback" id="vocabFeedback"></div>
      </div>

      ${session.answered ? vocabRevealHTML(item, session.lastCorrect) : ''}

      <button class="btn btn-secondary vocab-back" id="vocabBack">Wróć do menu</button>
    </section>
  `;

  document.querySelectorAll('[data-meaning]').forEach(button => {
    if (session.answered) {
      button.disabled = true;
      if (button.dataset.meaning === item.meaning) button.classList.add('correct');
      else if (button.dataset.meaning === session.chosen) button.classList.add('wrong');
      return;
    }
    button.onclick = () => answerVocab(button.dataset.meaning);
  });

  const next = document.getElementById('vocabNext');
  if (next) next.onclick = nextVocab;

  const feedback = document.getElementById('vocabFeedback');
  if (feedback && session.answered) {
    feedback.textContent = session.lastCorrect ? 'Dobrze!' : 'Nie tym razem — poprawna odpowiedź jest niżej.';
  }

  document.getElementById('vocabBack').onclick = () => {
    Audio.click();
    state.vocab = null;
    setScreen('menu');
  };
}

/* =========================================================
   USTAWIENIA
   ========================================================= */

/*
 * Klucze localStorage należące do aplikacji — używane tylko przy "wyczyść wszystko".
 * Funkcja, a nie stała: `PROGRESS_KEY` i `SETTINGS_KEY` są deklarowane niżej
 * w pliku, więc lista musi być budowana dopiero w chwili użycia.
 */
function appStorageKeys() {
  return [
    SETTINGS_STORE_KEY,
    SETTINGS_KEY,
    PROGRESS_KEY,
    DAILY_STATS_KEY,
    VOCAB_KEY,
    LEGACY_THEME_KEY,
    LEGACY_MUTED_KEY
  ];
}

/*
 * `data-focus-key` służy do przywracania fokusu po przerysowaniu
 * (patrz renderSettingsFocused) — dzięki niemu nie trzeba szukać po labelu.
 */
function settingsPill(value, current, label, attr, focusKey) {
  const active = value === current;
  return `<button class="script-btn ${active ? 'active' : ''}" ${attr}="${value}" data-focus-key="${focusKey}" aria-pressed="${active}">${label}</button>`;
}

/*
   Reset postępu NIE rusza historii dziennej. Są to dwie różne rzeczy:
   `hiragana-progress` to stan znaków, `hiragana-daily` to dziennik tego,
   co się działo. Kasowanie jednego nie powinno po cichu kasować drugiego —
   dlatego historia ma własny, jawnie nazwany przycisk w Ustawieniach.

   Słownictwo (T19) jest postępem, nie historią: czyści się tutaj, razem
   ze znakami. Osobnego przycisku nie ma, bo „postęp" jest jeden.
*/
function resetProgressData() {
  progress = { version: PROGRESS_VERSION, chars: {} };
  saveProgress();
  resetVocabData();
}

function resetSettings() {
  setTheme(SETTINGS_DEFAULTS.theme);
  setMuted(SETTINGS_DEFAULTS.muted);
  setScript(SETTINGS_DEFAULTS.script);
  setHideGuide(SETTINGS_DEFAULTS.hideGuide);
}

function clearAllData() {
  stopExam();

  appStorageKeys().forEach(key => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      /* np. tryb prywatny - pomijamy */
    }
  });

  // ponowne wczytanie odtwarza stan świeżej instalacji
  settings = loadSettings();
  progress = loadProgress();
  vocab = loadVocab();

  state.script = settings.script;
  state.theme = settings.theme; // surowa preferencja, tak jak przy starcie
  Audio.setMuted(settings.muted);

  const firstGroup = getGroups()[0];
  state.group = firstGroup.id;
  state.kana = firstGroup.chars[0][0];
}

function renderSettings() {
  app.innerHTML = `
    <section class="settings">
      <div class="eyebrow">USTAWIENIA</div>
      <h2>Ustawienia</h2>

      <div class="settings-group card">
        <h3>Wygląd</h3>
        <div class="settings-row">
          <span class="settings-label" id="themeLabel">Motyw</span>
          <div class="settings-pills" role="group" aria-labelledby="themeLabel">
            ${settingsPill('light', settings.theme, 'Jasny', 'data-theme-set', 'theme-light')}
            ${settingsPill('dark', settings.theme, 'Ciemny', 'data-theme-set', 'theme-dark')}
            ${settingsPill('system', settings.theme, 'Systemowy', 'data-theme-set', 'theme-system')}
          </div>
        </div>
      </div>

      <div class="settings-group card">
        <h3>Dźwięk</h3>
        <div class="settings-row">
          <span class="settings-label" id="soundLabel">Efekty dźwiękowe</span>
          <div class="settings-pills" role="group" aria-labelledby="soundLabel">
            ${settingsPill('false', String(settings.muted), 'Włączone', 'data-muted-set', 'muted-false')}
            ${settingsPill('true', String(settings.muted), 'Wyłączone', 'data-muted-set', 'muted-true')}
          </div>
        </div>
      </div>

      <div class="settings-group card">
        <h3>Nauka</h3>
        <div class="settings-row">
          <span class="settings-label" id="scriptLabel">Domyślny skrypt</span>
          <div class="settings-pills" role="group" aria-labelledby="scriptLabel">
            ${settingsPill('hiragana', settings.script, 'ひ Hiragana', 'data-script-set', 'script-hiragana')}
            ${settingsPill('katakana', settings.script, 'カ Katakana', 'data-script-set', 'script-katakana')}
          </div>
        </div>
      </div>

      <div class="settings-group card">
        <h3>Rysowanie</h3>
        <div class="settings-row">
          <span class="settings-label" id="guideLabel">Znak wzorcowy</span>
          <div class="settings-pills" role="group" aria-labelledby="guideLabel">
            ${settingsPill('false', String(settings.hideGuide), 'Widoczny', 'data-hide-guide-set', 'hide-guide-false')}
            ${settingsPill('true', String(settings.hideGuide), 'Ukryty', 'data-hide-guide-set', 'hide-guide-true')}
          </div>
        </div>
      </div>

      <div class="settings-group card">
        <h3>Dane</h3>
        <div class="settings-actions">
          <button class="btn btn-secondary" id="resetSettingsBtn" data-focus-key="reset-settings">Przywróć ustawienia domyślne</button>
          <button class="btn btn-secondary" id="resetProgressBtn" data-focus-key="reset-progress">Zresetuj postęp</button>
          <button class="btn btn-secondary" id="clearDailyStatsBtn" data-focus-key="clear-stats">Wyczyść statystyki</button>
          <button class="btn btn-danger" id="clearAllDataBtn" data-focus-key="clear-all">Wyczyść wszystkie dane</button>
        </div>
      </div>
    </section>
  `;

  document.querySelectorAll('[data-theme-set]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      setTheme(btn.dataset.themeSet);
      renderSettingsFocused('theme-' + btn.dataset.themeSet);
    };
  });

  document.querySelectorAll('[data-muted-set]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      setMuted(btn.dataset.mutedSet === 'true');
      renderSettingsFocused('muted-' + btn.dataset.mutedSet);
    };
  });

  document.querySelectorAll('[data-script-set]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      setScript(btn.dataset.scriptSet);
      renderSettingsFocused('script-' + btn.dataset.scriptSet);
    };
  });

  document.querySelectorAll('[data-hide-guide-set]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      setHideGuide(btn.dataset.hideGuideSet === 'true');
      renderSettingsFocused('hide-guide-' + btn.dataset.hideGuideSet);
    };
  });

  document.getElementById('resetSettingsBtn').onclick = () => {
    if (confirm('Przywrócić ustawienia domyślne? Postępy i ustawienia egzaminu zostaną bez zmian.')) {
      resetSettings();
      renderSettingsFocused('reset-settings');
    }
  };

  document.getElementById('resetProgressBtn').onclick = () => {
    if (
      confirm(
        'Na pewno wyczyścić wszystkie zapisane postępy?\n\n' +
          'Historia dzienna pozostanie bez zmian — kasujesz stan znaków i słownictwa, nie dziennik nauki.'
      )
    ) {
      resetProgressData();
      renderSettingsFocused('reset-progress');
    }
  };

  // Historia jest nieodwracalna, więc osobny przycisk i osobne pytanie.
  // Świadomie NIE wchodzi w "Zresetuj postęp" — tam użytkownik kasuje
  // stan znaków, a nie dziennik tego, co robił.
  document.getElementById('clearDailyStatsBtn').onclick = () => {
    if (
      confirm(
        'Na pewno wyczyścić całą historię nauki?\n\n' +
          'Znikną dzienniki odpowiedzi, sesji, XP i czasu nauki.\n' +
          'Tej operacji nie da się cofnąć — statystyk nie da się odtworzyć.\n\n' +
          'Postęp znaków pozostanie bez zmian.'
      )
    ) {
      clearDailyStats();
      renderSettingsFocused('clear-stats');
    }
  };

  document.getElementById('clearAllDataBtn').onclick = () => {
    if (
      !confirm(
        'Wyczyść WSZYSTKIE dane aplikacji? Ustawienia, ustawienia egzaminu, postępy i historia nauki zostaną usunięte. Tej operacji nie można cofnąć.'
      )
    )
      return;
    if (!confirm('Na pewno? Zostaniesz z aplikacją jak po świeżej instalacji.')) return;

    clearAllData();
    renderSettingsFocused('clear-all');
  };
}

/*
 * Każde ustawienie zapisuje się natychmiast i przerysowuje ekran, a `render()`
 * podmienia cały `innerHTML` — fokus przepadłby wtedy na `<body>` i osoba
 * obsługująca klawiaturę musiałaby zaczynać Tab od nowa. Dlatego po
 * przerysowaniu przywracamy fokus na tym samym kontrolu.
 */
function renderSettingsFocused(focusKey) {
  render();

  const target = app.querySelector(`[data-focus-key="${focusKey}"]`);
  if (target) target.focus();
}

/* =========================================================
   TRYB NAUKI
   ========================================================= */

/*
   Stan rozwinięcia sekcji (accordion) w panelu znaków.

   `learnSectionOpen` trzyma WYŁĄCZNIE świadome decyzje użytkownika
   (kliknięcie w nagłówek sekcji) i one są trwałe — zwinięta sekcja nie
   skacze sama przy zmianie znaku.

   Sekcja bez takiej decyzji jest zwykła: otwarta jest ta, w której siedzi
   aktywny znak. Dzięki temu w danej chwili otwarta jest najwyżej jedna
   z sekcji nietkniętych, a najechanie strzałkami na inną sekcję nie
   zostawia jej rozwiniętej na stałe — tylko przesuwa rozwinięcie.
   `openByDefault` decyduje wyłącznie o pierwszym renderze (Basic startuje
   rozwinięty); każde późniejsze zwinięcie jest już trwałe.
*/
const learnSectionOpen = {};
let learnSectionStarted = false;

// T13 warstwa 1 — kontroler rysowania bieżącej karty nauki. Trzymamy go, żeby
// przy przebudowie karty rozłączyć obserwator rozmiaru i nie zostawiać go
// przywiązanego do odłączonego elementu.
let learnDrawing = null;

function learnSectionIsOpen(category, activeCategory) {
  // Sekcja z aktywnym znakiem jest otwarta ZAWSZE — inaczej strzałki gnałyby
  // po niewidocznych znakach. To nie koliduje z trwałym zwinięciem: dotyczy
  // sekcji, w której użytkownik właśnie pracuje, a nie tej obok.
  if (category.id === activeCategory) return true;
  const chosen = learnSectionOpen[category.id];
  if (chosen !== undefined) return chosen;
  return !learnSectionStarted && !!category.openByDefault;
}

/*
   Panel znaków (sidebar) budujemy RAZ na skrypt i przy zmianie znaku
   aktualizujemy tylko klasy oraz atrybut `open`.

   Wcześniej `renderLearn()` przebudowywał cały panel przez `innerHTML`, więc
   każde przełączenie znaku tworzyło nowe `<details>` już w stanie docelowym.
   Zmiana `open` trafiała wtedy w element „urodzony gotowy", więc przeglądarka
   nie miała skąd rozpocząć przejścia — żadna animacja nie mogła się odtworzyć
   (działała tylko przy kliknięciu, gdy element przeżywał). Teraz elementy
   przeżywają zmianę znaku, więc `open` to zwykła zmiana atrybutu, a CSS
   obsługuje ją w obie strony — także przy automatycznym zwijaniu.
*/
function learnSidebarHTML() {
  return `
    <h3>Znaki</h3>

    ${LEARN_CATEGORIES.map(category => {
      // grupy w kolejności getGroups() — kolejność znaków bez zmian
      const groups = getGroups().filter(group => learnCategoryOf(group.id) === category.id);
      const count = groups.reduce((sum, group) => sum + group.chars.length, 0);

      return `
        <details class="learn-section" data-category="${category.id}">
          <summary class="learn-section-head">
            <span class="learn-section-label">${category.label}</span>
            <span class="learn-section-count">${count}</span>
          </summary>
          <div class="learn-section-body">
            ${groups
              .map(group =>
                group.chars
                  .map(
                    ([kana, romaji]) => `
              <button class="kana-btn ${kana === state.kana ? 'active' : ''} mastery-${masteryLevel(kana)}" data-kana="${kana}" data-group="${group.id}" title="${romaji}">
                ${kana}
              </button>
            `
                  )
                  .join('')
              )
              .join('')}
          </div>
        </details>
      `;
    }).join('')}

    <div class="keyboard-hints">
      <small>← → nawigacja • Spacja/R odtwórz • Enter kreska • A cały znak</small>
    </div>
  `;
}

function bindSidebar(sidebar) {
  /* Decyzję użytkownika czytamy z KLIKNIĘCIA w nagłówek, a nie z `toggle`.
     `toggle` jest zdarzeniem asynchronicznym i potrafi nadbiegnąć po
     renderze, co zamieszałoby stanem; klik jest jednoznaczny. */
  sidebar.querySelectorAll('.learn-section').forEach(section => {
    section.querySelector('summary').onclick = () => {
      // `onclick` wyprzedza domyślne przełączenie, więc `section.open` to
      // jeszcze stan sprzed kliknięcia — nowy stan jest jego przeciwieństwem.
      learnSectionOpen[section.dataset.category] = !section.open;
    };
  });

  /* wybór znaku — ustawiamy też grupę, bo wszystkie znaki są teraz widoczne
     naraz; samo `state.kana` rozjechałoby się z `state.group` używanym
     przez nawigację i nagłówek karty */
  sidebar.querySelectorAll('[data-kana]').forEach(button => {
    button.onclick = () => {
      Audio.click();
      state.group = button.dataset.group;
      state.kana = button.dataset.kana;
      renderLearn();
    };
  });
}

/* Klamka panelu: aktywny przycisk, poziom opanowania i rozwinięcie sekcji. */
function updateSidebarState(sidebar) {
  const activeCategory = learnCategoryOf(state.group);

  sidebar.querySelectorAll('[data-kana]').forEach(button => {
    const kana = button.dataset.kana;
    button.classList.toggle('active', kana === state.kana);

    // poziom opanowania zmienia się po egzaminie, więc klasy odświeżamy
    const level = masteryLevel(kana);
    Array.from(button.classList)
      .filter(name => name.startsWith('mastery-'))
      .forEach(name => button.classList.remove(name));
    button.classList.add('mastery-' + level);
  });

  sidebar.querySelectorAll('.learn-section').forEach(section => {
    const category = LEARN_CATEGORIES.find(item => item.id === section.dataset.category);
    if (category) section.open = learnSectionIsOpen(category, activeCategory);
  });
}

function renderLearn() {
  const current = item(state.kana);
  const count = getStrokeCounts()[state.kana];

  let sidebar = app.querySelector('.sidebar');
  const studyCard = () => app.querySelector('.study-card');

  if (!sidebar || sidebar.dataset.script !== state.script) {
    app.innerHTML = `
      <section class="learner">
        <aside class="sidebar card" data-script="${state.script}"></aside>
        <section class="study-card card"></section>
      </section>
    `;
    sidebar = app.querySelector('.sidebar');
    sidebar.innerHTML = learnSidebarHTML();
    bindSidebar(sidebar);
  }

  updateSidebarState(sidebar);

  // od teraz `openByDefault` już nie decyduje — zwinięcie przez użytkownika
  // ma pozostać trwałe także po powrocie do tego widoku
  learnSectionStarted = true;

  studyCard().innerHTML = `
    <div class="study-head">
      <div>
        <div class="eyebrow">${current.group}</div>
        <h2 style="margin:4px 0">${current.romaji}</h2>
      </div>
      <div class="badge" id="strokeBadge">${count} ${strokeWord(count)}</div>
    </div>

    <div class="character-area">

      <div class="char-panel">
        <h3>ZNAK</h3>

        <div class="svg-wrap" id="svgWrap"></div>

        <div class="controls">
          <button class="btn btn-primary" id="playStrokes" disabled>▶ Odtwórz</button>
          <button class="btn btn-secondary" id="stepStroke" disabled>Kreska po kresce</button>
          <button class="btn btn-secondary" id="showAllStrokes" disabled>Cały znak</button>
          <button class="btn btn-secondary" id="drawToggle" aria-pressed="false">✍️ Rysuj</button>
          <button class="btn btn-secondary" id="clearDrawing" disabled>Wyczyść</button>
          <button class="btn btn-secondary" id="checkDrawing" disabled>Sprawdź rysunek</button>
          <button class="btn btn-secondary hidden" id="hideGuideToggle" aria-pressed="false">👁 Ukryj wzór</button>
        </div>

        <div class="draw-result" id="drawResult" aria-live="polite"></div>

        <div class="kana-note" id="kanaNote"></div>
      </div>

      <div class="char-panel stroke-box">
        <h3>KOLEJNOŚĆ RYSOWANIA</h3>

        <div class="order-line" id="orderLine">${orderLineHTML(count)}</div>

        <div class="stroke-list" id="strokeList">
          ${strokeListHTML(state.kana)}
        </div>
      </div>

    </div>

    <div class="learn-nav">
      <button class="btn btn-secondary" id="prevKana">← Poprzedni</button>
      <button class="btn btn-secondary" id="quizMe">🧠 Sprawdź się</button>
      <button class="btn btn-secondary" id="nextKana">Następny →</button>
    </div>
  `;

  /* nawigacja ← → */
  document.getElementById('prevKana').onclick = () => {
    Audio.click();
    navigateKana(-1);
  };
  document.getElementById('nextKana').onclick = () => {
    Audio.click();
    navigateKana(1);
  };

  /*
    „Sprawdź się" prowadzi do konfiguracji egzaminu. `setScreen('exam')`
    korzysta z istniejącej ścieżki: ustawia ekran i woła `render()`, który
    przez `renderExam()` trafia do `showExamSetup()`. Nie uruchamiamy egzaminu
    i nie dotykamy `state.script`, więc wybrany alfabet zostaje ten sam.
  */
  document.getElementById('quizMe').onclick = () => {
    Audio.click();
    setScreen('exam');
  };

  /* animacja kresek */
  const wrap = document.getElementById('svgWrap');
  const note = document.getElementById('kanaNote');

  // ustawienie „Znak wzorcowy" musi wejść w życie od razu po wejściu na ekran
  applyHideGuide();

  const drawToggle = document.getElementById('drawToggle');
  const clearDrawing = document.getElementById('clearDrawing');
  const checkDrawing = document.getElementById('checkDrawing');
  const hideGuideToggle = document.getElementById('hideGuideToggle');
  const drawResult = document.getElementById('drawResult');

  /*
    Rysowanie (T13). Canvas jest rodzeństwem SVG wewnątrz #svgWrap, a nie
    osobnym kontenerem — dzięki temu geometria pola znaku zostaje bez zmian,
    więc kontrakt płynnego układu (§28) nadal obowiązuje.
  */
  if (learnDrawing) learnDrawing.destroy();

  const drawing = mountDrawing(wrap);
  learnDrawing = drawing;

  // Ocena (warstwa 2) potrzebuje wzoru kresek, a ten istnieje dopiero po
  // wczytaniu SVG — dlatego „Sprawdź" jest zablokowane, dopóki wzoru nie ma.
  let referencePaths = null;

  const clearVerdict = () => {
    drawResult.textContent = '';
    drawResult.classList.remove('passed');
  };

  drawing.onChange = () => {
    clearVerdict(); // każdy ruch unieważnia poprzedni werdykt
    checkDrawing.disabled = !(referencePaths && drawing.strokes.length);
  };

  const setDrawing = on => {
    drawing.setEnabled(on);
    drawToggle.setAttribute('aria-pressed', String(on));
    drawToggle.textContent = on ? '✍️ Koniec rysowania' : '✍️ Rysuj';
    clearDrawing.disabled = !on;
    // skrót do ustawienia pokazujemy tylko tam, gdzie coś zmienia (patrz niżej)
    hideGuideToggle.classList.toggle('hidden', !on);
  };

  /*
    Skrót w miejscu użycia. Ustawienie ma jedno źródło prawdy
    (`settings.hideGuide`, edytowalne w Ustawieniach), a ten przycisk jest
    tylko drugim wejściem do niego — jak przełącznik motywu w topbarze.
    Pokazujemy go wyłącznie w trybie rysowania: poza nim ukrywanie wzoru
    nie zmienia niczego, więc kliknięcie wyglądałoby na zepsute.
  */
  const syncGuideToggle = () => {
    hideGuideToggle.setAttribute('aria-pressed', String(settings.hideGuide));
    hideGuideToggle.textContent = settings.hideGuide ? '👁 Pokaż wzór' : '👁 Ukryj wzór';
  };

  hideGuideToggle.onclick = () => {
    Audio.click();
    setHideGuide(!settings.hideGuide);
    syncGuideToggle();
  };

  syncGuideToggle();

  drawToggle.onclick = () => {
    Audio.click();
    setDrawing(!drawing.enabled);
  };

  clearDrawing.onclick = () => {
    Audio.click();
    drawing.clear();
  };

  checkDrawing.onclick = () => {
    Audio.click();
    if (!referencePaths) return;

    /*
      Wzór liczymy TERAZ, a nie przy wczytaniu znaku: po zmianie rozmiaru pola
      `resize()` przeskalowuje kreski, więc wzór musi powstać w tym samym
      układzie współrzędnych, co one.
    */
    const reference = referenceOnCanvas(wrap.querySelector('svg'), drawing.canvas, referencePaths, DRAW_SAMPLES);
    const result = scoreDrawing(
      drawing.strokes.map(stroke => resample(stroke, DRAW_SAMPLES)),
      reference,
      wrap.clientWidth
    );

    drawResult.textContent = drawVerdict(result);
    drawResult.classList.toggle('passed', result.passed);
  };

  mountKana(wrap, state.kana, {
    overlay: drawing.canvas,
    onProgress: (done, active) => {
      document.querySelectorAll('#strokeList .stroke-step').forEach((el, i) => {
        el.classList.toggle('completed', i < done);
        el.classList.toggle('active', i === active);
      });
    },
    onFail: () => {
      note.textContent = 'Nie udało się pobrać animacji (brak internetu?) — pokazujemy znak z czcionki.';
    }
  }).then(player => {
    if (!player) return;

    // Wzór dla oceny — ta sama geometria KanjiVG, którą animuje `mountKana`
    // (§35: bez drugiego zbioru danych). Przeliczamy ją dopiero przy
    // „Sprawdź", bo tylko wtedy znamy aktualny układ pola.
    referencePaths = player.paths;
    drawing.onChange();

    // SVG jest źródłem prawdy dla liczby kresek — zawsze aktualizuj
    if (player.count !== count) {
      document.getElementById('strokeBadge').textContent = `${player.count} ${strokeWord(player.count)}`;
      document.getElementById('orderLine').innerHTML = orderLineHTML(player.count);
      // opisy tekstowe zostawiamy jako materiał edukacyjny
    }

    const bind = (id, handler) => {
      const button = document.getElementById(id);
      button.disabled = false;
      button.onclick = () => handler();
    };

    bind('playStrokes', player.play);
    bind('stepStroke', player.step);
    bind('showAllStrokes', player.showAll);
  });
}

/* =========================================================
   SRS — SPACED REPETITION (T21)
   ------------------------------------------------------------
   Harmonogram jest oddzielony od istniejącego `masteryLevel()`:

     masteryLevel()  →  „legacy mastery": statystyka odpowiedzi
     deriveStatus()  →  „SRS status": potwierdzenie przez powtórki w czasie

   To DWA różne znaczenia słowa „opanowane" i celowo nie zostały scalone
   (patrz PROJECT.md, T21). `stage` jest JEDYNYM zapisywanym stanem —
   statusy pochodne liczone są na żądanie, więc nie mogą się ze sobą
   rozjechać.

   Wszystkie funkcje w tej sekcji są czyste: dostają `now` parametrem
   i nie wołają `Date.now()`, `localStorage` ani `progress`.
   ========================================================= */

// Drabinka odstępów. `requiredReps` to liczba poprawnych odpowiedzi
// potrzebna, aby OPUŚCIĆ dany etap (etapy 4-6 wymagają dwóch).
const REVIEW_STAGES = [
  { intervalDays: 0, requiredReps: 1 }, // 0 — powtórka w tej samej sesji
  { intervalDays: 1, requiredReps: 1 }, // 1
  { intervalDays: 3, requiredReps: 1 }, // 2
  { intervalDays: 7, requiredReps: 1 }, // 3
  { intervalDays: 14, requiredReps: 2 }, // 4
  { intervalDays: 30, requiredReps: 2 }, // 5
  { intervalDays: 60, requiredReps: 2 }, // 6
  { intervalDays: 120, requiredReps: 3 } // 7 — MAX_STAGE
];

const MAX_STAGE = REVIEW_STAGES.length - 1;
const MASTERED_REPS = REVIEW_STAGES[MAX_STAGE].requiredReps;
const MAX_REVIEW_PER_SESSION = 20;
const DAY_MS = 86400000;

/*
   Uczeń przesuwa się o jeden stopień dopiero, gdy zbierze
   `requiredReps` poprawnych odpowiedzi na bieżącym stopniu.
   `reps` liczy poprawne odpowiedzi TYLKO na bieżącym stopniu.
*/
function scheduleAnswer(entry, { correct, source, now }) {
  // Przekroczenie czasu nie dotyka harmonogramu — to nie jest porażka
  // retencyjna, tylko za wolne odpowiedź.
  if (source === 'exam-timeout') return entry;

  if (correct) {
    const required = REVIEW_STAGES[entry.stage].requiredReps;
    entry.reps++;

    if (entry.stage === MAX_STAGE) {
      /*
        Ostatni stopień NIE zeruje `reps` — to właśnie `reps` przechowuje
        potwierdzenie opanowania, a `deriveStatus()` czyta je jako
        `reps >= MASTERED_REPS`. Zerowanie cofnęłoby `mastered` natychmiast
        po jego osiągnięciu, przez co status byłby nieosiągalny.

        `reps` zostało już zwiększone powyżej, więc trzy poprawne odpowiedzi
        dają kolejno 1, 2, 3, a czwarte i kolejne tylko odsuwają `due`.
        Błędna odpowiedź spada niżej (patrz niżej) i gubi status.
      */
      entry.reps = Math.min(entry.reps, MASTERED_REPS);
      entry.due = now + REVIEW_STAGES[MAX_STAGE].intervalDays * DAY_MS;
    } else if (entry.reps >= required) {
      entry.reps = 0;
      entry.stage++;
      entry.due = now + REVIEW_STAGES[entry.stage].intervalDays * DAY_MS;
    } else {
      entry.due = now + REVIEW_STAGES[entry.stage].intervalDays * DAY_MS;
    }
  } else {
    // Porażka na etapie 0 to zwykłe uczenie się, nie „potknięcie".
    // Potknięcie liczymy dopiero po wyjściu z nauki w sesji.
    if (entry.stage >= 1) {
      entry.lapses++;
      entry.stage = Math.max(0, entry.stage - 1);
    }
    entry.reps = 0;
    entry.due = now;
  }

  return entry;
}

/*
   Status SRS — wyliczany, nigdy nie zapisywany.
   `mastered` wymaga potwierdzenia powtórkami, a nie tylko wysokiego
   wyniku historycznego.
*/
function deriveStatus(entry) {
  if (!isProgressRecord(entry)) return 'unseen';
  if (entry.stage === 0) return 'learning';
  if (entry.stage === MAX_STAGE && entry.reps >= MASTERED_REPS) return 'mastered';
  return 'review';
}

/* =========================================================
   POSTĘPY (zapis w localStorage)
   Dla każdego znaku: ile prób, ile poprawnych, ostatnie 6 wyników
   oraz z czym go mylisz. Od T21 dokładam stan SRS (patrz wyżej).
========================================================= */

const PROGRESS_KEY = 'hiragana-progress';
const PROGRESS_VERSION = 2;
const SETTINGS_KEY = 'hiragana-exam-settings';

/* =========================================================
   STATYSTYKI DZIENNE (T15 — faza 1: samo zbieranie)
   ------------------------------------------------------------
   OSOBNY klucz localStorage, celowo obok `hiragana-progress`,
   a nie w nim: harmonogram SRS, migracja v1→v2 i `PROGRESS_VERSION`
   pozostają nietknięte. Ten magazyn odpowiada na pytanie "co
   robiłem w dniu X", tamten — "jak wygląda mój znak dziś".

   Dane są nieodwracalnie przydatne: przeszłej historii nie da się
   odtworzyć, więc zbieranie zaczyna się tu, a wykresy (faza 2)
   powstają później.

   Kształt dnia:
     answers, correct        — sumy ze wszystkich źródeł
     examAnswers, reviewAnswers — podział wg źródła, dzięki któremu
                               sumy da się sprawdzić na oko
     exams, reviews, xp, seconds

   `answers` liczy TAKŻE przekroczenia czasu, bo `recordAnswer()`
   zwiększa `seen` również przy timeout — inaczej „dzisiaj" przeczyłoby
   „łącznie". Timeout nigdy nie trafia do `correct` ani do `reviews`
   (ten rośnie wyłącznie na zakończeniu sesji).
========================================================= */

const DAILY_STATS_KEY = 'hiragana-daily';
const DAILY_STATS_VERSION = 1;
const DAILY_STATS_MAX_DAYS = 400;

/*
   Klucz dnia w KALENDARZU LOKALNYM.

   `toISOString()` zwraca UTC, więc odpowiedź o 23:30 trafiłaby do
   następnego dnia. Budujemy datę z rozdzielników, używając czasu
   lokalnego — dzięki temu granica dnia zgadza się z tym, co widzi
   użytkownik, a zmiana strefy czasowej nie przesuwa granicy dnia.
*/
function localDayKey(timestamp = Date.now()) {
  const date = new Date(timestamp);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return date.getFullYear() + '-' + month + '-' + day;
}

/* Pusty, poprawny dzień — wszystkie liczniki zerowe. */
function emptyDailyStats() {
  return {
    answers: 0,
    correct: 0,
    examAnswers: 0,
    reviewAnswers: 0,
    exams: 0,
    reviews: 0,
    xp: 0,
    seconds: 0
  };
}

/*
   Wczytanie jest z założenia OPTYMISTYCZNE przy błędach: uszkodzony
   zapis statystyk to strata historii, nie awaria nauki. Dlatego każda
   niepoprawna struktura sprowadza się do pustego magazynu, a `try`
   nie dopuszcza wyjątku do reszty aplikacji (tryb prywatny itp.).
*/
function loadDailyStats() {
  try {
    const raw = localStorage.getItem(DAILY_STATS_KEY);
    if (!raw) return { version: DAILY_STATS_VERSION, days: {} };

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      return { version: DAILY_STATS_VERSION, days: {} };
    }
    if (!parsed.days || typeof parsed.days !== 'object' || Array.isArray(parsed.days)) {
      return { version: DAILY_STATS_VERSION, days: {} };
    }
    return { version: DAILY_STATS_VERSION, days: parsed.days };
  } catch (error) {
    return { version: DAILY_STATS_VERSION, days: {} };
  }
}

function saveDailyStats(stats) {
  try {
    localStorage.setItem(DAILY_STATS_KEY, JSON.stringify(stats));
  } catch (error) {
    /* np. tryb prywatny — brak zapisu nie może przerwać nauki */
  }
}

/*
   Przycięcie historii. Deterministyczne: granica liczona jest od
   wstrzykniętego `now`, więc test nie musi polegać na zegarku.
   ZAWSZE zostawiamy dzień `now` i `DAILY_STATS_MAX_DAYS` poprzednich.
*/
function pruneDailyStats(stats, now = Date.now()) {
  const cutoff = new Date(now);
  cutoff.setDate(cutoff.getDate() - DAILY_STATS_MAX_DAYS);
  const limit = localDayKey(cutoff.getTime());

  const kept = {};
  Object.keys(stats.days)
    // KLUCZE ROSNĄ z czasem, więc granica to >= (dzień wczoraj ma mniejszy
    // klucz niż dzisiaj i zniknąłby przy odwrotnym porównaniu)
    .filter(key => key >= limit)
    .forEach(key => {
      kept[key] = stats.days[key];
    });

  stats.days = kept;
  return stats;
}

/* Dzień o podanym kluczu, znormalizowany do kompletu liczników. */
function dailyBucket(stats, key) {
  const existing = stats.days[key];
  if (!existing || typeof existing !== 'object' || Array.isArray(existing)) {
    stats.days[key] = emptyDailyStats();
  } else {
    const base = emptyDailyStats();
    Object.keys(base).forEach(field => {
      const value = existing[field];
      if (Number.isFinite(value) && value >= 0) base[field] = Math.floor(value);
    });
    stats.days[key] = base;
  }
  return stats.days[key];
}

/* Odpowiedź — wywoływane z recordAnswer(). */
function recordDailyAnswer(correct, now = Date.now()) {
  const stats = loadDailyStats();
  const bucket = dailyBucket(stats, localDayKey(now));

  /*
    Podziału NIE bierzemy z `source`: WSZYSTKIE pytania ocenione
    przekazują `'exam'` — również w sesji powtórek. Jedynym pewnym
    źródłem wiedzy o tym, że to powtórka, jest trwająca sesja.
  */
  const isReview = !!(state.exam && state.exam.kind === 'review');

  bucket.answers++;
  if (isReview) bucket.reviewAnswers++;
  else bucket.examAnswers++;

  // `correct` jest fałszywe dla timeoutu, więc timeout nigdy nie
  // trafi tutaj — a tym samym nie wliczy się do `correct`
  if (correct) bucket.correct++;

  pruneDailyStats(stats, now);
  saveDailyStats(stats);
}

/*
   Zakończenie sesji. Wywoływane z `finishExam()` i `stopExam()`, bo
   sesja kończy się obydwoma drogami (a `startExam()` sam wywołuje
   `stopExam()`), dlatego zapis jest zabezpieczony flagiem `recorded`
   i wykonuje się dokładnie raz.

   `kind` rozróżnia powtórki od zwykłych egzaminów. Nie da się tu użyć
   `kanaList`: powtórki (app.js: „Rozpocznij powtórki”) i tryb
   „ćwicz trudne" obie przekazują listę znaków.
*/
function recordSessionStats(exam, now = Date.now()) {
  if (!exam || exam.recorded) return;
  exam.recorded = true;

  const startedAt = exam.startedAt;
  const seconds =
    Number.isFinite(startedAt) && startedAt > 0 && now >= startedAt ? Math.round((now - startedAt) / 1000) : 0;

  const stats = loadDailyStats();
  const bucket = dailyBucket(stats, localDayKey(now));

  bucket.exams++;
  if (exam.kind === 'review') bucket.reviews++;

  // XP już policzone przez `calcXP()` w trakcie sesji — tylko je
  // przepisujemy, nigdy nie liczymy drugi raz
  if (Number.isFinite(exam.xp) && exam.xp > 0) bucket.xp += Math.floor(exam.xp);
  bucket.seconds += seconds;

  pruneDailyStats(stats, now);
  saveDailyStats(stats);
}

/* Kasowanie samej historii — postęp znaków zostaje nietknięty. */
function clearDailyStats() {
  try {
    localStorage.removeItem(DAILY_STATS_KEY);
  } catch (error) {
    /* ignorujemy — historia i tak jest best-effort */
  }
}

/* =========================================================
   STATYSTYKI DZIENNE — ODCZYT I PREZENTACJA (T15 faza 2)
   ------------------------------------------------------------
   Wszystko poniżej jest READ-ONLY: nic nie zapisuje do
   `hiragana-daily`. Jedynym zapisem pozostaje `recordDailyAnswer()`
   i `recordSessionStats()` z fazy 1.

   Żadna funkcja nie woła Date.now() — czas dostaje jawnie, dzięki
   czemu wykres i serie dni są deterministyczne i testowalne.
========================================================= */

const DAILY_WINDOW_DAYS = 14;

/* Ile dni ma zapisana historia i jaki jest najstarszy ZACHOWANY dzień. */
function dailyHistoryExtent(stats = loadDailyStats()) {
  const keys = Object.keys(stats.days).sort();
  if (!keys.length) return { count: 0, firstKey: null, lastKey: null };
  return { count: keys.length, firstKey: keys[0], lastKey: keys[keys.length - 1] };
}

/* Przesunięcie `date` o `delta` dni, zwracając znacznik czasu. */
function shiftDay(timestamp, delta) {
  const date = new Date(timestamp);
  date.setDate(date.getDate() + delta);
  return date.getTime();
}

/*
   Okno ostatnich `days` dni — od najstarszego do dzisiejszego.

   Trzy stany, bo „nie zbieraliśmy wtedy danych" i „wtedy nie ćwiczyłeś”
   to dwie różne prawdy i nie wolno ich zlewać:

     'before' — dzień wcześniejszy niż najstarszy ZACHOWANY wpis,
                czyli zanim w ogóle zbierano historię
     'idle'   — dzień już objęty zbieraniem, ale bez zapisanej aktywności
     'active' — dzień z odpowiedziami

   'idle' jest bezpieczne dla dnia bez KLUCZA: faza 1 zapisuje wpis przy
   KAŻDEJ odpowiedzi i przy każdym zakończeniu sesji, więc brak klucza
   w obrębie zbieranego okresu oznacza po prostu brak aktywności.
*/
function dailyWindow(now, days = DAILY_WINDOW_DAYS) {
  const stats = loadDailyStats();
  const extent = dailyHistoryExtent(stats);

  const rows = [];
  for (let offset = days - 1; offset >= 0; offset--) {
    const timestamp = shiftDay(now, -offset);
    const key = localDayKey(timestamp);
    const bucket = extent.count ? stats.days[key] || null : null;
    const answers = bucket && Number.isFinite(bucket.answers) ? bucket.answers : 0;

    let state = 'idle';
    if (!extent.count || key < extent.firstKey) state = 'before';
    else if (answers > 0) state = 'active';

    rows.push({ key, timestamp, bucket, answers, state });
  }
  return { window: rows, extent, stats };
}

/*
   Serie zgodnie z definicją w PROJECT.md:

     "Consecutive local calendar days with `answers > 0`, counting back
      from today. If today has no activity yet, the streak is computed
      from the most recent recorded day and labelled with how many days
      ago that was."

   Czyli:
     • dziś aktywnie  → kotwica = dziś, `live` = true
     • dziś pusto      → kotwica = ostatni aktywny dzień, `live` = false
     • pusto dziś i nigdzie aktywnie → current 0, brak kotwicy

   `current` to ZAWSZE seria kończąca się na kotwicy, a `live` mówi
   wprost, czy liczymy ją dzisiaj — dzięki temu UI nie sugeruje aktywności
   w dniu, w którym jej nie było.

   `best` to najdłuższa seria w ZACHOWANYCH dniach (przycięcie kasuje starsze),
   dlatego etykieta mówi wprost „z zachowanych dni".
*/
function dailyStreaks(now, stats = loadDailyStats()) {
  const keys = Object.keys(stats.days).sort();
  const hasAnswers = key => {
    const bucket = stats.days[key];
    return !!bucket && Number.isFinite(bucket.answers) && bucket.answers > 0;
  };

  const todayKey = localDayKey(now);
  const todayActive = hasAnswers(todayKey);

  // kotwica: dziś, albo ostatni dzień z aktywnością
  let anchorKey = null;
  let daysAgo = null;
  for (let back = 0; back <= DAILY_STATS_MAX_DAYS; back++) {
    const key = localDayKey(shiftDay(now, -back));
    if (hasAnswers(key)) {
      anchorKey = key;
      daysAgo = back;
      break;
    }
  }

  /*
    Seria kończąca się na kotwicy. Idziemy OD kotwicy dalej w tył i liczymy
    kolejne aktywne dni aż do pierwszej przerwy. Kotwica może być dziś
    albo kilka dni wstecz — dlatego startujemy od `daysAgo`, nie od 0.
  */
  let current = 0;
  if (anchorKey) {
    for (let back = daysAgo; back <= daysAgo + DAILY_STATS_MAX_DAYS; back++) {
      if (!hasAnswers(localDayKey(shiftDay(now, -back)))) break;
      current++;
    }
  }

  // najdłuższa seria wśród zachowanych dni
  let best = 0;
  let run = 0;
  let previousKey = null;
  keys.forEach(key => {
    const contiguous =
      previousKey !== null && localDayKey(shiftDay(new Date(previousKey + 'T00:00:00').getTime(), 1)) === key;
    run = hasAnswers(key) ? (contiguous ? run + 1 : 1) : 0;
    if (run > best) best = run;
    previousKey = key;
  });

  return {
    current: current,
    live: todayActive,
    lastActiveKey: anchorKey,
    lastActiveDaysAgo: daysAgo,
    best: best
  };
}

/* Sumy z całej ZACHOWANEJ historii. Niczego nie domyślamy się. */
function dailyTotals(stats = loadDailyStats()) {
  const extent = dailyHistoryExtent(stats);
  const totals = emptyDailyStats();

  Object.keys(stats.days).forEach(key => {
    const bucket = stats.days[key];
    if (!bucket || typeof bucket !== 'object') return;
    Object.keys(totals).forEach(field => {
      const value = bucket[field];
      if (Number.isFinite(value) && value > 0) totals[field] += Math.floor(value);
    });
  });

  return {
    answers: totals.answers,
    correct: totals.correct,
    exams: totals.exams,
    reviews: totals.reviews,
    xp: totals.xp,
    seconds: totals.seconds,
    daysTracked: Object.keys(stats.days).filter(key => {
      const bucket = stats.days[key];
      return bucket && Number.isFinite(bucket.answers) && bucket.answers > 0;
    }).length,
    firstKey: extent.firstKey
  };
}

/*
   Skuteczność w oknie: `correct / answers`.

   Gdy `answers === 0` zwracamy `percent: null`, a nie 0 — „nie było
   odpowiedzi" i „0% poprawnych" to dwie różne informacje, a wykres
   nie może sugerować drugiej.
*/
function dailyAccuracy(now, days = DAILY_WINDOW_DAYS) {
  const { window: rows } = dailyWindow(now, days);
  let answers = 0;
  let correct = 0;
  rows.forEach(row => {
    answers += row.answers;
    if (row.bucket && Number.isFinite(row.bucket.correct)) correct += row.bucket.correct;
  });

  return {
    percent: answers > 0 ? Math.round((correct / answers) * 100) : null,
    answers: answers,
    correct: correct,
    hasData: answers > 0
  };
}

/* Sekundy jako czytelny czas — z polskimi liczbami mnogimi. */
function formatDuration(totalSeconds) {
  const seconds = Number.isFinite(totalSeconds) && totalSeconds > 0 ? Math.floor(totalSeconds) : 0;
  if (seconds < 60) return seconds + ' s';

  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const restMinutes = minutes % 60;

  const hoursLabel = hours + ' ' + (hours === 1 ? 'godzina' : hours < 5 ? 'godziny' : 'godzin');
  // 0 i 5+ -> "minut"; 1 -> "minuta"; 2-4 -> "minuty"
  const minutesWord = restMinutes === 1 ? 'minuta' : restMinutes >= 2 && restMinutes <= 4 ? 'minuty' : 'minut';
  const minutesLabel = restMinutes + ' ' + minutesWord;
  return hours > 0 ? hoursLabel + ' ' + minutesLabel : minutesLabel;
}

/*
   WALIDACJA REKORDÓW POSTĘPU
   ------------------------------------------------------------
   Trzy niezależne reguły, celowo rozdzielone:

   1. isProgressRecord()  — czy to w ogóle zapisany, ćwiczony znak?
      Odzwierciedla dokładnie test używany przez `masteryLevel()`
      (`!entry.seen → 'new'`), więc SRS nie wymyśla własnego
      pojęcia poprawności danych.

   2. normalizeSrs()      — nadpisanie pól SRS w rekordzie, który
      przeszedł (1). Uruchamiane RAZ, przy wczytaniu/migracji.

   3. dueList()           — przy budowaniu kolejki rekord jest tylko
      SPRAWDZANY i ewentualnie POMIJANY. Nigdy nie jest „naprawiany"
      na bieżąco, bo to oznaczałoby wymyślanie stanu przeglądu
      dla uszkodzonych danych.

   Ważne: rekordy, które nie są obiektami, NIE SĄ usuwane — zostają
   w `progress.chars`, są pomijane przez `dueList()` i nie dostają
   pól SRS. Dzięki temu nic nie kasujemy użytkownikowi.
========================================================= */

function isProgressRecord(entry) {
  return !!entry && typeof entry === 'object' && !Array.isArray(entry) && Number.isFinite(entry.seen) && entry.seen > 0;
}

// Używane też przez progressSummary() — nieobiektowy rekord daje 0,
// zamiast zatruć sumę wartością undefined/NaN.
function progressStat(entry, field) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) return 0;
  const value = entry[field];
  return Number.isFinite(value) && value >= 0 ? value : 0;
}

const isPlainInt = value => Number.isFinite(value) && Number.isInteger(value);

/*
   Nadpisuje wyłącznie pola SRS w rekordzie, który przeszedł
   `isProgressRecord()`. Brakujące / źle typowane / ujemne / nieskończone
   wartości dostają default. `stage` spoza zakresu jest przycinany
   (a nie odrzucany), bo rekord wskazuje realnie ćwiczony znak —
   odrzucenie ukryłoby go użytkownikowi.
*/
function normalizeSrs(entry, seededStage) {
  // Ujemne i niecałkowite wartości to uszkodzenie, więc dostają default.
  // Dodatnia wartość PONAD zakresem (np. 99) wygląda jak zbyt zachłanne
  // przejście, więc ją przycinamy zamiast odrzucać — rekord wskazuje
  // realnie ćwiczony znak i nie chcemy go użytkownikowi ukrywać.
  entry.stage = isPlainInt(entry.stage) && entry.stage >= 0 ? Math.min(entry.stage, MAX_STAGE) : seededStage;

  entry.reps = isPlainInt(entry.reps) && entry.reps >= 0 ? Math.min(entry.reps, MASTERED_REPS) : 0;

  entry.due = Number.isFinite(entry.due) && entry.due >= 0 ? entry.due : 0;

  entry.lapses = isPlainInt(entry.lapses) && entry.lapses >= 0 ? entry.lapses : 0;

  return entry;
}

// Defensive check przy budowaniu kolejki: nie ufamy pamięci w trakcie sesji.
function hasUsableSrs(entry) {
  return (
    isProgressRecord(entry) &&
    isPlainInt(entry.stage) &&
    entry.stage >= 0 &&
    entry.stage <= MAX_STAGE &&
    isPlainInt(entry.reps) &&
    entry.reps >= 0 &&
    Number.isFinite(entry.due) &&
    entry.due >= 0 &&
    isPlainInt(entry.lapses) &&
    entry.lapses >= 0
  );
}

/*
   Konserwatywne przesianie ze statystyków legacy na drabinkę SRS.
   Legacy nie zawiera ŻADNEJ informacji o czasie (pole `last` jest
   zapisywane, ale nigdy nie czytane), więc nie możemy uczciwie
   obiecać długiego odstępu — znak potwierdza się realnymi powtórkami.
*/
function legacyStageSeed(kana) {
  switch (masteryLevel(kana)) {
    case 'mastered':
      return 3;
    case 'good':
      return 2;
    case 'learning':
      return 1;
    case 'hard':
      return 0;
    default:
      return 0;
  }
}

function migrateProgress(data) {
  if (data && data.version >= PROGRESS_VERSION) return data;

  const chars = (data && typeof data.chars === 'object' && data.chars) || {};

  for (const kana of Object.keys(chars)) {
    const entry = chars[kana];

    // Rekord nie-obiektowy: zostaje w `chars` nietknięty, ale nie dostaje
    // pól SRS i nie wejdzie do kolejki. Nic nie kasujemy.
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) continue;

    // `seen` poza zakresem → 0, żeby `progressSummary()` nigdy nie zwrócił NaN,
    // a rekord przestał być „ćwiczonym" (`masteryLevel` → 'new').
    if (!Number.isFinite(entry.seen) || entry.seen < 0) entry.seen = 0;

    if (isProgressRecord(entry)) normalizeSrs(entry, legacyStageSeed(kana));
    // Rekord z `seen === 0` celowo NIE dostaje pól SRS — nie był ćwiczony.
  }

  data.chars = chars;
  data.version = PROGRESS_VERSION;
  return data;
}

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    if (data && data.chars) return migrateProgress(data);
  } catch (error) {
    /* uszkodzony zapis - zaczynamy od zera */
  }
  return { version: PROGRESS_VERSION, chars: {} };
}

let progress = loadProgress();

function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    /* np. tryb prywatny - aplikacja działa dalej bez zapisu */
  }
}

/*
   `source` jest BEZ wartości domyślnej celowo — pominięcie go ma być
   widocznym błędem, a nie cichym złym zachowaniem:
     'exam'          — odpowiedź oceniona (podnosi harmonogram SRS)
     'exam-timeout'  — upłynął czas: NIE zmienia SRS, tylko statystyki
*/
function recordAnswer(kana, correct, chosenKana, source) {
  const existing = progress.chars[kana];
  const entry =
    existing || (progress.chars[kana] = { seen: 0, correct: 0, wrong: 0, recent: [], confused: {}, last: 0 });

  entry.seen++;
  if (correct) entry.correct++;
  else entry.wrong++;

  entry.recent.push(correct ? 1 : 0);
  if (entry.recent.length > 6) entry.recent.shift();

  const now = Date.now();
  entry.last = now;

  if (!correct && chosenKana) {
    entry.confused[chosenKana] = (entry.confused[chosenKana] || 0) + 1;
  }

  /*
    Przekroczenie czasu kończy się TUTAJ — przed jakimkolwiek dostępem do SRS.
    Nie chcemy nawet inicjalizować pól harmonogramu, bo timeout nie jest
    odpowiedzią ocenioną: nie awansuje, nie resetuje, nie nalicza potknięcia.
  */
  if (source === 'exam-timeout') {
    recordDailyAnswer(false, now);
    saveProgress();
    return;
  }

  // Rekord świeży dostaje stage 0; istniejący zapis w formacie legacy
  // bez pól SRS dziedziczy etap ze swojej dotychczasowej oceny, żeby migracja
  // dawała ten sam wynik niezależnie od tego, kiedy SRS zostało dodane.
  if (!hasUsableSrs(entry)) {
    normalizeSrs(entry, existing ? legacyStageSeed(kana) : 0);
  }
  scheduleAnswer(entry, { correct: correct, source: source, now: now });

  recordDailyAnswer(correct, now);
  saveProgress();
}

// odsetek błędów w ostatnich próbach (0..1)
function errorRate(kana) {
  const entry = progress.chars[kana];
  if (!entry || !entry.recent.length) return 0;
  return 1 - entry.recent.reduce((a, b) => a + b, 0) / entry.recent.length;
}

// new / hard / learning / good / mastered
function masteryLevel(kana) {
  const entry = progress.chars[kana];
  if (!entry || !entry.seen) return 'new';

  const rate = errorRate(kana);
  const overall = entry.correct / entry.seen;

  if (entry.recent.length >= 4 && rate >= 0.5) return 'hard';
  if (entry.seen >= 10 && overall >= 0.9 && entry.recent.length >= 5 && entry.recent.slice(-5).every(r => r === 1))
    return 'mastered';
  if (entry.recent.length >= 4 && rate === 0) return 'good';
  return 'learning';
}

/* =========================================================
   POSTĘPY SŁOWNICTWA (T19 — warstwa 2: magazyn)
   ------------------------------------------------------------
   TRZECI klucz, rozłączny z `hiragana-progress` i `hiragana-daily`.
   Odpowiada na pytanie „jak idzie mi ta karta", a nie „jak wygląda
   ta kana" ani „co robiłem we wtorek" — i dlatego nie jest częścią
   żadnego z tamtych magazynów.

   Kształt karty (`v01`–`v20`, czyli wyłącznie `type: 'card'`):
     seen, correct, wrong  — liczniki prób
     recent               — ostatnie `VOCAB_MAX_RECENT` wyników
     last                 — znacznik czasu ostatniej odpowiedzi

   Czego tu celowo NIE MA:
     - SRS. Karty nie mają harmonogramu; kolejność fiszek (warstwa 3)
       liczymy z liczników, zamiast ją zapisywać.
     - wpisów dla wzorców (`type: 'pattern'`, v21–v22). Wzorzec nie
       jest kartą, więc nie dostaje rekordu.
     - `hiragana-daily`. Odpowiedź na fiszkę nie jest odpowiedzią na
       znak: historia dzienna liczy kany i egzamin, nie słownictwo.

   Wersja to 1 i jest pierwsza — nie ma z czego migrować. Podniesienie
   jej bez migracji wyrzuciłoby użytkownikowi postęp, więc traktuj to
   jak zmianę formatu, nie jak porządek.
========================================================= */

const VOCAB_KEY = 'hiragana-vocab';
const VOCAB_VERSION = 1;
const VOCAB_MAX_RECENT = 6;

// Karta istnieje tylko wtedy, gdy jest w tabeli danych i nie jest wzorcem.
function vocabCard(cardId) {
  const item = VOCAB_ITEMS.find(entry => entry.id === cardId);
  return item && item.type === 'card' ? item : null;
}

function isVocabRecord(entry) {
  return (
    !!entry &&
    typeof entry === 'object' &&
    !Array.isArray(entry) &&
    Number.isFinite(entry.seen) &&
    entry.seen > 0 &&
    Number.isFinite(entry.correct) &&
    Number.isFinite(entry.wrong) &&
    Array.isArray(entry.recent)
  );
}

/*
   Czytanie jest optymistyczne: uszkodzony zapis to strata postępu
   słownictwa, a nie awaria aplikacji. Każdy niepoprawny kształt kończy
   się pustym magazynem, nigdy wyjątkiem.
*/
function loadVocab() {
  const empty = { version: VOCAB_VERSION, cards: {} };
  try {
    const data = JSON.parse(localStorage.getItem(VOCAB_KEY));
    if (!data || typeof data !== 'object' || Array.isArray(data)) return empty;
    if (data.version !== VOCAB_VERSION) return empty;
    if (!data.cards || typeof data.cards !== 'object' || Array.isArray(data.cards)) return empty;
    return { version: VOCAB_VERSION, cards: data.cards };
  } catch (error) {
    /* brak klucza albo uszkodzony JSON */
    return empty;
  }
}

let vocab = loadVocab();

function saveVocab() {
  try {
    localStorage.setItem(VOCAB_KEY, JSON.stringify(vocab));
  } catch (error) {
    /* np. tryb prywatny - aplikacja działa dalej bez zapisu */
  }
}

/*
   Zwraca `false` dla nieznanej karty i dla wzorca: literówka w `id`
   nie może utworzyć rekordu, którego nic nigdy nie wyświetli.
   Rekord o niepoprawnym kształcie zastępujemy świeżym — alternatywą
   są liczniki `NaN`, które zatruwają każdy późniejszy odczyt.
*/
function recordVocabAnswer(cardId, correct) {
  if (!vocabCard(cardId)) return false;

  if (!isVocabRecord(vocab.cards[cardId])) {
    vocab.cards[cardId] = { seen: 0, correct: 0, wrong: 0, recent: [], last: 0 };
  }

  const entry = vocab.cards[cardId];
  entry.seen++;
  if (correct) entry.correct++;
  else entry.wrong++;
  entry.recent.push(correct ? 1 : 0);
  if (entry.recent.length > VOCAB_MAX_RECENT) entry.recent.shift();
  entry.last = Date.now();

  saveVocab();
  return true;
}

/*
   Odczyt przez `progressStat()`, żeby uszkodzone pole dało 0, a nie
   `undefined` w obliczeniach warstwy 3.
*/
function vocabStat(cardId) {
  const entry = vocab.cards[cardId];
  const seen = progressStat(entry, 'seen');
  const correct = progressStat(entry, 'correct');
  return {
    seen: seen,
    correct: correct,
    wrong: progressStat(entry, 'wrong'),
    accuracy: seen ? correct / seen : 0,
    recent: entry && Array.isArray(entry.recent) ? entry.recent : [],
    last: progressStat(entry, 'last')
  };
}

/* Postęp słownictwa ma jedno wejście kasowania: „Zresetuj postęp". */
function resetVocabData() {
  vocab = { version: VOCAB_VERSION, cards: {} };
  saveVocab();
}

/*
   KOLEJKA PRZEGLĄDU (T21)
   ------------------------------------------------------------
   Budujemy ją wyłącznie z rekordów, które przechodzą walidację
   (`isProgressRecord` + `hasUsableSrs`). Rekord uszkodzony jest
   POMIJANY — nigdy nie zamieniamy go w „znak do powtórki".

   Kolejność jest w pełni deterministyczna (4 klucze), więc ten sam
   stan zawsze daje tę samą listę:
     1. `due` rosnąco   — najbardziej zaległe najpierw
     2. `lapses` malejąco — najbardziej wiotkie najpierw
     3. `stage` rosnąco — najsłabsze najpierw
     4. kodepoint znaku  — ostatni, całkowity tiebreak

   Kolejka jest z natury per-skrypt: `getAll()` to `scriptData[state.script]`.
*/
function dueList(now = Date.now()) {
  return getAll()
    .map(character => ({ kana: character.kana, entry: progress.chars[character.kana] }))
    .filter(item => hasUsableSrs(item.entry) && item.entry.due <= now)
    .sort(
      (a, b) =>
        a.entry.due - b.entry.due ||
        b.entry.lapses - a.entry.lapses ||
        a.entry.stage - b.entry.stage ||
        a.kana.codePointAt(0) - b.kana.codePointAt(0)
    )
    .map(item => ({
      kana: item.kana,
      stage: item.entry.stage,
      reps: item.entry.reps,
      due: item.entry.due,
      lapses: item.entry.lapses
    }));
}

function dueCount(now = Date.now()) {
  return dueList(now).length;
}

// Znaków w jednej sesji nie przycinamy do „dueList().length", tylko do limitu.
function reviewSession(now = Date.now()) {
  return dueList(now)
    .slice(0, MAX_REVIEW_PER_SESSION)
    .map(item => item.kana);
}

function topConfusion(kana) {
  const confused = (progress.chars[kana] && progress.chars[kana].confused) || {};
  const sorted = Object.entries(confused).sort((a, b) => b[1] - a[1]);
  return sorted.length ? sorted[0][0] : null;
}

function statsText(kana) {
  const entry = progress.chars[kana];
  if (!entry) return '';
  return `Twoja skuteczność: ${entry.correct}/${entry.seen}`;
}

// znaki do ćwiczenia: najpierw trudne, ewentualnie uzupełnione tymi, w których zdarzają się błędy
function practiceList(limit = 12) {
  const byDifficulty = kana => errorRate(kana) * 100 + progress.chars[kana].wrong;

  const known = getAll()
    .map(c => c.kana)
    .filter(kana => progress.chars[kana] && progress.chars[kana].seen);

  const hard = known.filter(kana => masteryLevel(kana) === 'hard').sort((a, b) => byDifficulty(b) - byDifficulty(a));

  if (hard.length >= 4) return hard.slice(0, limit);

  const extra = known
    .filter(kana => masteryLevel(kana) === 'learning' && errorRate(kana) > 0)
    .sort((a, b) => byDifficulty(b) - byDifficulty(a));

  return [...hard, ...extra].slice(0, limit);
}

function progressSummary() {
  // Liczymy tylko rekordy, które przechodzą `isProgressRecord()`.
  // Dzięki temu `seen` i `correct` pochodzą z tego samego zbioru, więc
  // procent nie może przekroczyć 100 mimo uszkodzonych wpisów.
  // Dla poprawnych danych wynik jest identyczny jak przed T21.
  const entries = Object.values(progress.chars).filter(isProgressRecord);
  const seen = entries.reduce((sum, e) => sum + progressStat(e, 'seen'), 0);
  const correct = entries.reduce((sum, e) => sum + progressStat(e, 'correct'), 0);
  return { seen, correct, percent: seen ? Math.round((correct / seen) * 100) : 0 };
}

function loadExamSettings() {
  const defaults = {
    groups: ['a'],
    options: 6,
    limit: 0, // 0 = bez limitu
    outside: true,
    modes: {
      romajiKanaPick: true,
      kanaRomajiPick: false,
      romajiKanaType: false,
      kanaRomajiType: false
    },
    timer: 0 // 0 = wyłączony, 5/10/15 = sekundy na pytanie
  };

  try {
    const saved = JSON.parse(localStorage.getItem(SETTINGS_KEY));

    if (saved) {
      const validGroups = (saved.groups || []).filter(id => getGroup(id));
      const modes = saved.modes || {};

      const parsedModes = {
        romajiKanaPick: modes.romajiKanaPick !== false,
        kanaRomajiPick: !!modes.kanaRomajiPick,
        romajiKanaType: !!modes.romajiKanaType,
        kanaRomajiType: !!modes.kanaRomajiType
      };

      // przynajmniej jeden tryb musi być aktywny
      if (
        !parsedModes.romajiKanaPick &&
        !parsedModes.kanaRomajiPick &&
        !parsedModes.romajiKanaType &&
        !parsedModes.kanaRomajiType
      ) {
        parsedModes.romajiKanaPick = true;
      }

      return {
        groups: validGroups.length ? validGroups : defaults.groups,
        options: [4, 6, 8].includes(saved.options) ? saved.options : defaults.options,
        limit: [0, 5, 10, 20, 30].includes(saved.limit) ? saved.limit : defaults.limit,
        outside: saved.outside !== false,
        modes: parsedModes,
        timer: [0, 5, 10, 15].includes(saved.timer) ? saved.timer : defaults.timer
      };
    }
  } catch (error) {
    /* domyślne */
  }

  return defaults;
}

function saveExamSettings(settings) {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch (error) {
    /* ignorujemy */
  }
}

/* =========================================================
   LOSOWANIE WAŻONE + ROZPRASZACZE
========================================================= */

function weightedPick(list) {
  const total = list.reduce((sum, x) => sum + x.w, 0);
  let r = Math.random() * total;

  for (const x of list) {
    r -= x.w;
    if (r <= 0) return x.item;
  }

  return list[list.length - 1].item;
}

function weightedSample(list, n) {
  const rest = [...list];
  const result = [];

  while (result.length < n && rest.length) {
    const picked = weightedPick(rest);
    result.push(picked);
    rest.splice(
      rest.findIndex(x => x.item === picked),
      1
    );
  }

  return result;
}

/*
 * Waga pytania = (czas od ostatniego razu)^1.5 × mnożnik trudności.
 * - znak, którego jeszcze nie było w tej sesji, ma największą wagę,
 * - znak sprzed chwili ma wagę bliską zera (poprzedni jest wykluczony),
 * - znaki, które Ci nie wychodzą, są losowane do 3x częściej,
 *   a opanowane rzadziej.
 */
function difficultyMultiplier(kana) {
  const level = masteryLevel(kana);

  if (level === 'new') return 1.5;
  if (level === 'good') return 0.7;
  return 1 + 2 * errorRate(kana);
}

function pickQuestion(pool, exam) {
  let candidates = pool.filter(c => c.kana !== (exam.current && exam.current.kana));
  if (!candidates.length) candidates = pool;

  const cap = pool.length * 3;

  const weighted = candidates.map(c => {
    const last = exam.asked[c.kana];
    const age = last === undefined ? cap : Math.min(exam.serial - last, cap);

    return { item: c, w: Math.pow(age, 1.5) * difficultyMultiplier(c.kana) };
  });

  return weightedPick(weighted);
}

// znaki podobne wizualnie - dobre "pułapki" w odpowiedziach
// prettier-ignore
const LOOKALIKES = [
  // podstawowe hiragana
  ['ぬ', 'め', 'ね', 'れ', 'わ'],
  ['る', 'ろ', 'ら'],
  ['さ', 'ち', 'き'],
  ['は', 'ほ', 'ま'],
  ['い', 'り'],
  ['こ', 'に'],
  ['あ', 'お', 'す', 'む'],
  ['う', 'え'],
  ['の', 'め', 'あ'],
  ['へ', 'く'],
  ['し', 'つ'],
  ['か', 'や'],
  ['た', 'な'],
  ['ま', 'よ'],
  ['ゆ', 'わ'],
  ['と', 'こ'],

  // dakuten / handakuten
  ['か', 'が'],
  ['き', 'ぎ'],
  ['く', 'ぐ'],
  ['け', 'げ'],
  ['こ', 'ご'],
  ['さ', 'ざ'],
  ['し', 'じ'],
  ['す', 'ず'],
  ['せ', 'ぜ'],
  ['そ', 'ぞ'],
  ['た', 'だ'],
  ['ち', 'ぢ'],
  ['つ', 'づ'],
  ['て', 'で'],
  ['と', 'ど'],
  ['は', 'ば', 'ぱ'],
  ['ひ', 'び', 'ぴ'],
  ['ふ', 'ぶ', 'ぷ'],
  ['へ', 'べ', 'ぺ'],
  ['ほ', 'ぼ', 'ぽ'],

  // yōon
  ['きゃ', 'ぎゃ'],
  ['きゅ', 'ぎゅ'],
  ['きょ', 'ぎょ'],
  ['しゃ', 'じゃ'],
  ['しゅ', 'じゅ'],
  ['しょ', 'じょ'],
  ['ちゃ', 'じゃ'],
  ['ちゅ', 'じゅ'],
  ['ちょ', 'じょ'],
  ['にゃ', 'みゃ'],
  ['にゅ', 'みゅ'],
  ['にょ', 'みょ'],
  ['ひゃ', 'びゃ', 'ぴゃ'],
  ['ひゅ', 'びゅ', 'ぴゅ'],
  ['ひょ', 'びょ', 'ぴょ'],
  ['みゃ', 'びゃ'],
  ['みゅ', 'びゅ'],
  ['みょ', 'びょ'],
  ['りゃ', 'りゅ', 'りょ'],
  ['ぎゃ', 'じゃ'],
  ['ぎゅ', 'じゅ'],
  ['ぎょ', 'じょ'],
  ['びゃ', 'ぴゃ'],
  ['びゅ', 'ぴゅ'],
  ['びょ', 'ぴょ']
];

scriptData.hiragana.lookalikes = LOOKALIKES;

// prettier-ignore
const katakanaLookalikes = [
  // podstawowe katakana
  ['シ', 'ツ'],
  ['ツ', 'ソ'],
  ['ソ', 'ン'],
  ['ク', 'ケ'],
  ['ウ', 'ワ'],
  ['ヌ', 'ス'],
  ['ヌ', 'ネ', 'メ'],
  ['レ', 'ル'],
  ['ミ', 'ヨ'],
  ['コ', 'ヨ'],
  ['サ', 'タ'],

  // dakuten / handakuten
  ['カ', 'ガ'], ['キ', 'ギ'], ['ク', 'グ'], ['ケ', 'ゲ'], ['コ', 'ゴ'],
  ['サ', 'ザ'], ['シ', 'ジ'], ['ス', 'ズ'], ['セ', 'ゼ'], ['ソ', 'ゾ'],
  ['タ', 'ダ'], ['チ', 'ヂ'], ['ツ', 'ヅ'], ['テ', 'デ'], ['ト', 'ド'],
  ['ハ', 'バ', 'パ'], ['ヒ', 'ビ', 'ピ'], ['フ', 'ブ', 'プ'],
  ['ヘ', 'ベ', 'ペ'], ['ホ', 'ボ', 'ポ'],

  // yōon
  ['キャ', 'ギャ'], ['キュ', 'ギュ'], ['キョ', 'ギョ'],
  ['シャ', 'ジャ'], ['シュ', 'ジュ'], ['ショ', 'ジョ'],
  ['チャ', 'ジャ'], ['チュ', 'ジュ'], ['チョ', 'ジョ'],
  ['ニャ', 'ミャ'], ['ニュ', 'ミュ'], ['ニョ', 'ミョ'],
  ['ヒャ', 'ビャ', 'ピャ'], ['ヒュ', 'ビュ', 'ピュ'], ['ヒョ', 'ビョ', 'ピョ'],
  ['ミャ', 'ビャ'], ['ミュ', 'ビュ'], ['ミョ', 'ビョ'],
  ['リャ', 'リュ', 'リョ'],
  ['ギャ', 'ジャ'], ['ギュ', 'ジュ'], ['ギョ', 'ジョ'],
  ['ビャ', 'ピャ'], ['ビュ', 'ピュ'], ['ビョ', 'ピョ']
];

scriptData.katakana.lookalikes = katakanaLookalikes;

function similarTo(kana) {
  const result = new Set();
  getLookalikes().forEach(group => {
    if (group.includes(kana))
      group.forEach(k => {
        if (k !== kana) result.add(k);
      });
  });
  return result;
}

function kanaCategory(c) {
  const groupId = c.groupId;

  if (groupId.startsWith('yoon-')) return 'yoon';
  if (groupId.startsWith('handakuten-')) return 'handakuten';
  if (groupId.startsWith('dakuten-')) return 'dakuten';

  return 'basic';
}

/*
 * Rozpraszacze: znaki z wybranego zakresu (waga 2), opcjonalnie spoza zakresu (0.6),
 * z premią za podobny wygląd i za znaki, z którymi już to pytanie pomyliłeś.
 */
function pickDistractors(question, count, pool, outside) {
  const inPool = new Set(pool.map(c => c.kana));
  const similar = similarTo(question.kana);
  const confused = (progress.chars[question.kana] && progress.chars[question.kana].confused) || {};

  const questionCategory = kanaCategory(question);

  const weighted = getAll()
    .filter(c => c.kana !== question.kana)
    .map(c => {
      const isInPool = inPool.has(c.kana);

      if (!isInPool && !outside) return null;

      const category = kanaCategory(c);

      let w;

      if (isInPool) {
        w = 2;
      } else if (category === questionCategory) {
        w = 0.8;
      } else {
        w = 0.08;
      }

      if (similar.has(c.kana)) {
        w += category === questionCategory ? 4 : 0.5;
      }

      w += (confused[c.kana] || 0) * 3;

      return { item: c, w };
    })
    .filter(Boolean);

  return weightedSample(weighted, count);
}

/* =========================================================
   EGZAMIN: WYBÓR ZAKRESU
========================================================= */

/* "2026-10-10" -> "10.10.2026" */
function formatDayLabel(key) {
  const parts = String(key).split('-');
  if (parts.length !== 3) return key;
  return parts[2] + '.' + parts[1] + '.' + parts[0];
}

/* Opis jednego słupka dla `title`/`aria-label`. */
function describeDay(row) {
  const label = formatDayLabel(row.key);
  if (row.state === 'before') return label + ' — historia nie była jeszcze zbierana';
  if (row.state === 'idle') return label + ' — bez aktywności';
  return label + ' — ' + row.answers + (row.answers === 1 ? ' odpowiedź' : ' odpowiedzi');
}

/*
   Sekcja statystyk dziennych. Zwraca '' gdy nie ma żadnej historii —
   nowy użytkownik wciąż widzi dokładnie ten sam panel co wcześniej.
*/
function dailyStatsHTML(now = Date.now()) {
  const { window: rows, extent } = dailyWindow(now);

  if (!extent.count) {
    return `
      <div class="daily-block daily-empty">
        <p class="daily-hint">
          Statystyki nauki zaczynają się zbierać od teraz. Jeszcze nie ma
          żadnych zapisanych dni.
        </p>
      </div>
    `;
  }

  const streaks = dailyStreaks(now);
  const totals = dailyTotals();
  const accuracy = dailyAccuracy(now);
  const active = rows.filter(row => row.state === 'active');
  const maxAnswers = rows.reduce((max, row) => Math.max(max, row.answers), 0);
  const bestActive = active.reduce((best, row) => (!best || row.answers > best.answers ? row : best), null);

  /*
    Etykieta niesie CAŁY stan, żeby nie sugerować aktywności dziś:
      • live  → liczymy dzisiaj
      • !live → seria przeniesiona z poprzedniego aktywnego dnia
      • 0 z kotwicą → seria przerwana
  */
  const daysAgoText = streaks.lastActiveDaysAgo === 1 ? 'wczoraj' : streaks.lastActiveDaysAgo + ' dni temu';

  let streakLabel;
  if (streaks.current > 0 && streaks.live) {
    streakLabel = 'dni z rzędu';
  } else if (streaks.current > 0) {
    streakLabel = 'dni z rzędu · przeniesiony z ' + daysAgoText;
  } else if (streaks.lastActiveKey) {
    streakLabel = 'Seria przerwana · ostatnio ' + daysAgoText;
  } else {
    streakLabel = 'Brak aktywności w zapisanej historii';
  }

  // UWAGA: `accuracy.answers` to liczba z OKNA, nie suma z całej historii.
  // Podanie `totals.answers` kłamałoby ("ostatnie 14 dni: 512 odpowiedzi").
  const summaryText =
    'Ostatnie ' +
    DAILY_WINDOW_DAYS +
    ' dni: ' +
    accuracy.answers +
    ' odpowiedzi' +
    (bestActive
      ? ', najwięcej ' + bestActive.answers + ' w dniu ' + formatDayLabel(bestActive.key)
      : ', bez aktywności');

  const bars = rows
    .map(row => {
      const height =
        row.state === 'active' && maxAnswers > 0 ? Math.max(6, Math.round((row.answers / maxAnswers) * 100)) : 0;
      const described = describeDay(row);
      return `
      <div class="daily-bar-slot ${row.state}" title="${described}" aria-label="${described}">
        <div class="daily-bar-track">
          <div class="daily-bar" style="height:${height}%"></div>
        </div>
        <span class="daily-bar-label">${formatDayLabel(row.key).slice(0, 5)}</span>
      </div>`;
    })
    .join('');

  return `
    <div class="daily-block">
      <h3>Statystyki nauki</h3>

      <div class="daily-streak-row">
        <div class="daily-streak">
          <span class="daily-streak-value${streaks.live ? ' live' : ''}">${streaks.current}</span>
          <span class="daily-streak-label">${streakLabel}</span>
        </div>
        <div class="daily-streak muted">
          <span class="daily-streak-value">${streaks.best}</span>
          <span class="daily-streak-label">najlepszy (z zachowanych dni)</span>
        </div>
      </div>

      <div class="daily-chart" role="img" aria-label="${summaryText}" title="${summaryText}">
        ${bars}
      </div>
      <div class="daily-grid">
        <div class="daily-stat"><b>${totals.answers}</b><span>odpowiedzi</span></div>
        <div class="daily-stat"><b>${accuracy.hasData ? accuracy.percent + '%' : '—'}</b><span>skuteczność (14 dni)</span></div>
        <div class="daily-stat"><b>${totals.exams}</b><span>egzaminów</span></div>
        <div class="daily-stat"><b>${totals.reviews}</b><span>powtórek</span></div>
        <div class="daily-stat"><b>${totals.xp}</b><span>XP</span></div>
        <div class="daily-stat"><b>${formatDuration(totals.seconds)}</b><span>czas nauki</span></div>
      </div>

      <p class="daily-hint">
        Dane od <b>${formatDayLabel(totals.firstKey)}</b> · przechowujemy ${DAILY_STATS_MAX_DAYS} dni
      </p>
    </div>
  `;
}

function progressPanelHTML() {
  const stats = progressSummary();

  /*
    Sekcja dzienna liczona ZAWSZE. `resetProgressData()` czyści postęp,
    a historię zostawia, więc „brak postępu + obecna historia" to stan
    osiągalny — statystyki nie mogą zniknąć razem ze starym `if`.
  */
  const daily = dailyStatsHTML();

  if (!stats.seen) {
    return `
      <div class="progress-panel">
        <h3>Twoje postępy</h3>
        ${daily}
        <p style="color:var(--muted);margin:0">
          Statystyki i trudne znaki pojawią się tutaj po pierwszym egzaminie.
        </p>
      </div>
    `;
  }

  const hard = getAll()
    .filter(c => masteryLevel(c.kana) === 'hard')
    .sort((a, b) => errorRate(b.kana) - errorRate(a.kana))
    .slice(0, 8);

  const practiceCount = practiceList().length;

  return `
    <div class="progress-panel">
      <h3>Twoje postępy</h3>

      ${daily}

      <div style="color:var(--muted)">
        Odpowiedzi: <b>${stats.seen}</b> • skuteczność: <b>${stats.percent}%</b>
      </div>

      <div class="progress-map">
        ${getAll()
          .map(
            c => `
          <span class="map-cell ${masteryLevel(c.kana)}" title="${c.romaji}">
            ${c.kana}<small>${c.romaji}</small>
          </span>
        `
          )
          .join('')}
      </div>

      <div style="color:var(--muted);font-size:.8rem">
        ⬜ nowe &nbsp; 🟥 trudne &nbsp; 🟨 w trakcie &nbsp; 🟩 dobre &nbsp; ⭐ opanowane
      </div>

      ${
        hard.length
          ? `
        <h3 style="margin-top:18px">Sprawiają Ci trudność</h3>
        <div class="mistakes-list" style="justify-content:flex-start">
          ${hard
            .map(c => {
              const entry = progress.chars[c.kana];
              const confusion = topConfusion(c.kana);
              return `
              <div class="mistake-chip">
                <span class="mistake-kana">${c.kana}</span>
                <span>${c.romaji}</span>
                <small>${entry.wrong}/${entry.seen} błędów${confusion ? ` • myli z ${confusion}` : ''}</small>
              </div>
            `;
            })
            .join('')}
        </div>
      `
          : ''
      }

      <div class="exam-quick" style="margin-top:16px">
        <button class="btn btn-primary" id="practiceHardSetup" ${practiceCount < 2 ? 'disabled' : ''}>
          🎯 Ćwicz trudne znaki
        </button>
      </div>
    </div>
  `;
}

function readSetup() {
  return {
    selected: [...document.querySelectorAll('#examGroups input:checked')].map(input => input.value),
    options: Number(document.getElementById('optionsCount').value),
    limit: Number(document.getElementById('questionLimit').value),
    outside: document.getElementById('outsideOpt').checked,
    modes: {
      romajiKanaPick: document.getElementById('modeA').checked,
      kanaRomajiPick: document.getElementById('modeB').checked,
      romajiKanaType: document.getElementById('modeC').checked,
      kanaRomajiType: document.getElementById('modeD').checked
    },
    timer: Number(document.getElementById('timerOpt').value)
  };
}

function showExamSetup() {
  const settings = loadExamSettings();

  app.innerHTML = `
    <section class="exam card">

      <div class="eyebrow">EGZAMIN</div>
      <h2>Wybierz zakres</h2>

      <p style="color:var(--muted)">
        Zaznacz rzędy ${state.script === 'katakana' ? 'katakany' : 'hiragany'}, które chcesz ćwiczyć.
        Egzamin trwa tak długo, jak chcesz. Znaki, które sprawiają Ci trudność,
        będą wracały częściej.
      </p>

      <div class="exam-groups" id="examGroups">
        ${getGroups()
          .map(
            group => `
          <label class="exam-group-option">
            <input type="checkbox" value="${group.id}" ${settings.groups.includes(group.id) ? 'checked' : ''}>
            <span>
              <strong>${group.name}</strong>
              <small>${group.chars.map(char => char[0]).join(' ')}</small>
            </span>
          </label>
        `
          )
          .join('')}
      </div>

      <div class="exam-quick">
        <button class="btn btn-secondary" id="onlyA">Tylko samogłoski</button>
        <button class="btn btn-secondary" id="aPlusK">Samogłoski + K</button>
        <button class="btn btn-secondary" id="allGroups">Wszystkie</button>
        <button class="btn btn-secondary" id="noGroups">Wyczyść</button>
      </div>

      <div class="exam-settings">
        <label>
          Liczba odpowiedzi:
          <select id="optionsCount">
            ${[4, 6, 8].map(n => `<option value="${n}" ${n === settings.options ? 'selected' : ''}>${n}</option>`).join('')}
          </select>
        </label>

        <label>
          Liczba pytań:
          <select id="questionLimit">
            ${[
              [0, 'Bez limitu'],
              [5, '5'],
              [10, '10'],
              [20, '20'],
              [30, '30']
            ]
              .map(([v, l]) => `<option value="${v}" ${v === settings.limit ? 'selected' : ''}>${l}</option>`)
              .join('')}
          </select>
        </label>

        <label>
          Timer:
          <select id="timerOpt">
            ${[
              [0, 'Wyłączony'],
              [5, '5s'],
              [10, '10s'],
              [15, '15s']
            ]
              .map(([v, l]) => `<option value="${v}" ${v === settings.timer ? 'selected' : ''}>${l}</option>`)
              .join('')}
          </select>
        </label>

        <label class="exam-check">
          <input type="checkbox" id="outsideOpt" ${settings.outside ? 'checked' : ''}>
          Dodawaj mylące znaki spoza wybranego zakresu
        </label>
      </div>

      <div class="exam-settings" style="margin-top:4px">
        <strong style="font-size:.85rem">Tryby pytań:</strong>
        <label class="exam-check">
          <input type="checkbox" id="modeA" ${settings.modes.romajiKanaPick ? 'checked' : ''}>
          Romaji → wybierz kana
        </label>
        <label class="exam-check">
          <input type="checkbox" id="modeB" ${settings.modes.kanaRomajiPick ? 'checked' : ''}>
          Kana → wybierz romaji
        </label>
        <label class="exam-check">
          <input type="checkbox" id="modeC" ${settings.modes.romajiKanaType ? 'checked' : ''}>
          Romaji → wpisz kana
        </label>
        <label class="exam-check">
          <input type="checkbox" id="modeD" ${settings.modes.kanaRomajiType ? 'checked' : ''}>
          Kana → wpisz romaji
        </label>
      </div>

      ${progressPanelHTML()}

      <div id="examSetupError" class="feedback"></div>

      <button class="btn btn-primary" id="startSelectedExam">Rozpocznij egzamin →</button>

    </section>
  `;

  document.getElementById('onlyA').onclick = () => {
    Audio.click();
    setExamGroups(['a']);
  };
  document.getElementById('aPlusK').onclick = () => {
    Audio.click();
    setExamGroups(['a', 'k']);
  };
  document.getElementById('allGroups').onclick = () => {
    Audio.click();
    setExamGroups(getGroups().map(g => g.id));
  };
  document.getElementById('noGroups').onclick = () => {
    Audio.click();
    setExamGroups([]);
  };

  document.getElementById('startSelectedExam').onclick = () => {
    const { selected, options, limit, outside, modes, timer } = readSetup();

    if (!selected.length) {
      document.getElementById('examSetupError').textContent = 'Wybierz przynajmniej jeden rząd.';
      return;
    }

    if (!modes.romajiKanaPick && !modes.kanaRomajiPick && !modes.romajiKanaType && !modes.kanaRomajiType) {
      document.getElementById('examSetupError').textContent = 'Wybierz przynajmniej jeden tryb pytań.';
      return;
    }

    Audio.click();
    saveExamSettings({ groups: selected, options, limit, outside, modes, timer });
    startExam(selected, { options, limit, outside, modes, timer });
  };

  const practiceButton = document.getElementById('practiceHardSetup');
  if (practiceButton) {
    practiceButton.onclick = () => {
      Audio.click();
      const { selected, options, limit, outside, modes, timer } = readSetup();
      saveExamSettings({
        groups: selected.length ? selected : settings.groups,
        options,
        limit,
        outside,
        modes,
        timer
      });
      startExam([], {
        kanaList: practiceList(),
        options,
        limit,
        outside,
        modes,
        timer,
        kind: 'practice'
      });
    };
  }

  // Reset postępu i kasowanie statystyk są dostępne WYŁĄCZNIE w Ustawieniach
  // (`#resetProgressBtn` / `#clearDailyStatsBtn`). Powtórzenie tego przycisku
  // tutaj było drugim miejscem kasującym te same dane — usuwamy, żeby reset
  // miał jeden, jasno opisany punkt wejścia.
}

function setExamGroups(groupIds) {
  document.querySelectorAll('#examGroups input').forEach(input => {
    input.checked = groupIds.includes(input.value);
  });
}

/* =========================================================
   EGZAMIN: PRZEBIEG
========================================================= */

function startExam(groupIds, { kanaList = null, options, limit, outside, modes, timer: timerSec, kind = 'exam' } = {}) {
  stopExam();

  const settings = loadExamSettings();
  const useModes = modes || settings.modes;

  // zbierz aktywne tryby
  const enabledModes = [];
  if (useModes.romajiKanaPick) enabledModes.push('romaji-kana-pick');
  if (useModes.kanaRomajiPick) enabledModes.push('kana-romaji-pick');
  if (useModes.romajiKanaType) enabledModes.push('romaji-kana-type');
  if (useModes.kanaRomajiType) enabledModes.push('kana-romaji-type');
  if (!enabledModes.length) enabledModes.push('romaji-kana-pick');

  state.exam = {
    groups: groupIds,
    kanaList,
    options: options || settings.options,
    limit: limit !== undefined ? limit : settings.limit,
    outside: outside === undefined ? settings.outside : outside,
    enabledModes,
    currentMode: null,
    timerSec: timerSec !== undefined ? timerSec : settings.timer,
    timerCountdown: null, // interwał odliczania
    timerRemaining: 0,
    current: null,
    score: 0,
    wrong: 0,
    total: 0,
    serial: 0,
    asked: {},
    answered: false,
    waiting: false,
    finished: false,
    timer: null,
    mistakes: {},
    streak: 0,
    bestStreak: 0,
    xp: 0, // punkty doświadczenia w tej sesji
    // T15: start sesji liczony RAZ. Czas na ekranie wyniku oraz poza
    // sesją nie wchodzi do `seconds` — domykamy go w finishExam/stopExam.
    startedAt: Date.now(),
    kind, // 'exam' | 'review' | 'practice'
    recorded: false // zabezpieczenie przed podwójnym zapisem
  };

  state.screen = 'exam';
  homeBtn.classList.remove('hidden');

  nextExamQuestion();
}

function pickExamMode(exam) {
  return exam.enabledModes[Math.floor(Math.random() * exam.enabledModes.length)];
}

function nextExamQuestion() {
  const exam = state.exam;
  if (!exam || exam.finished) return;

  if (exam.limit > 0 && exam.total >= exam.limit) {
    finishExam();
    return;
  }

  clearTimeout(exam.timer);
  clearInterval(exam.timerCountdown);

  const available = getSelectedExamCharacters();
  if (!available.length) return;

  exam.serial++;

  exam.current = pickQuestion(available, exam);
  exam.asked[exam.current.kana] = exam.serial;
  exam.currentMode = pickExamMode(exam);

  exam.answered = false;
  exam.waiting = false;

  renderExamQuestion(exam.current);

  // timer
  if (exam.timerSec > 0) startQuestionTimer(exam);
}

function startQuestionTimer(exam) {
  exam.timerRemaining = exam.timerSec;
  updateTimerDisplay(exam.timerRemaining, exam.timerSec);

  exam.timerCountdown = setInterval(() => {
    exam.timerRemaining--;
    updateTimerDisplay(exam.timerRemaining, exam.timerSec);

    if (exam.timerRemaining <= 0) {
      clearInterval(exam.timerCountdown);
      if (!exam.answered) {
        // czas minął — traktuj jako błąd
        exam.answered = true;
        exam.total++;
        exam.wrong++;
        exam.streak = 0;
        exam.mistakes[exam.current.kana] = (exam.mistakes[exam.current.kana] || 0) + 1;
        exam.waiting = true;
        recordAnswer(exam.current.kana, false, null, 'exam-timeout');
        Audio.wrong();

        const feedback = document.getElementById('feedback');
        if (feedback) {
          feedback.innerHTML = flashcardHTML(exam.current, null);
          document.getElementById('nextQuestion').onclick = nextExamQuestion;
          const flashWrap = document.getElementById('flashSvg');
          mountKana(flashWrap, exam.current.kana, { autoplay: true }).then(player => {
            if (!player) return;
            flashWrap.style.cursor = 'pointer';
            flashWrap.onclick = () => player.play();
          });
        }

        // wyłącz przyciski odpowiedzi
        document.querySelectorAll('.answer').forEach(a => {
          a.disabled = true;
        });
        ['kanaInput', 'checkKana', 'romajiInput', 'checkRomaji'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.disabled = true;
        });

        const correctBtn = document.querySelector(`[data-answer="${exam.current.kana}"]`);
        if (correctBtn) correctBtn.classList.add('correct');
      }
    }
  }, 1000);
}

function updateTimerDisplay(remaining, total) {
  const bar = document.getElementById('timerBar');
  if (bar) {
    bar.style.width = `${(remaining / total) * 100}%`;
    bar.classList.toggle('timer-urgent', remaining <= 3);
  }
  const label = document.getElementById('timerLabel');
  if (label) label.textContent = `${remaining}s`;
}

function examChromeHTML(exam, contentHTML) {
  const percentage = exam.total === 0 ? 0 : Math.round((exam.score / exam.total) * 100);

  return `
    <section class="exam card">

      <div class="exam-top">
        <div>
          <div class="eyebrow">EGZAMIN</div>
          <h2 style="margin:4px 0">Pytanie ${exam.total + 1}</h2>
        </div>
        <div style="display:flex;gap:10px;align-items:center">
          ${exam.xp > 0 ? `<span class="xp-badge">⭐ ${exam.xp} XP</span>` : ''}
          ${exam.streak >= 3 ? `<span class="streak-badge">🔥 ${exam.streak}</span>` : ''}
          <div class="badge">${exam.score} ✓ &nbsp; ${exam.wrong} ✗</div>
        </div>
      </div>

      <div class="progress"><div style="width:${percentage}%"></div></div>

      ${
        exam.timerSec > 0
          ? `
        <div class="timer-bar-wrap">
          <div class="timer-bar" id="timerBar"></div>
          <span class="timer-label" id="timerLabel">${exam.timerSec}s</span>
        </div>
      `
          : ''
      }

      <div style="text-align:center;color:var(--muted);margin:10px 0 28px;">
        ${exam.total === 0 ? 'Zaczynamy!' : `${exam.score}/${exam.total} poprawnych`}
      </div>

      ${contentHTML}

    </section>
  `;
}

function examProgressHTML() {
  const exam = state.exam;

  if (!exam || exam.limit <= 0) return '';

  return `
    <div class="exam-progress">
      Pytanie ${exam.total + 1} / ${exam.limit}
    </div>
  `;
}

function renderExamQuestion(question) {
  const exam = state.exam;
  const mode = exam.currentMode;

  if (mode === 'kana-romaji-pick') {
    renderKanaToRomajiPick(question);
  } else if (mode === 'romaji-kana-type') {
    renderRomajiToKanaType(question);
  } else if (mode === 'kana-romaji-type') {
    renderKanaToRomajiType(question);
  } else {
    renderRomajiToKanaPick(question);
  }
}

/* Tryb A: romaji → wybierz kana (oryginalny) */
function renderRomajiToKanaPick(question) {
  const exam = state.exam;
  const available = getSelectedExamCharacters();

  const wrongOptions = pickDistractors(question, exam.options - 1, available, exam.outside);
  const options = shuffle([question, ...wrongOptions]);

  const content = `
    ${examProgressHTML()}

    <div class="prompt">
      <div class="polish">Jaki znak oznacza:</div>
      <div class="question">${question.romaji}</div>

      <div class="answers" data-n="${options.length}">
        ${options
          .map(
            (option, i) => `
          <button class="answer" data-answer="${option.kana}">
            <span class="answer-key">${i + 1}</span>
            ${option.kana}
          </button>
        `
          )
          .join('')}
      </div>

      <div class="feedback" id="feedback"></div>

      <button class="btn btn-secondary" id="endExam" style="margin-top:20px">
        Zakończ egzamin
      </button>
    </div>
  `;

  app.innerHTML = examChromeHTML(exam, content);

  document.querySelectorAll('[data-answer]').forEach(button => {
    button.onclick = () => answerExam(button, question);
  });

  document.getElementById('endExam').onclick = () => {
    Audio.click();
    finishExam();
  };
}

/* Tryb B: kana → wybierz romaji */
function renderKanaToRomajiPick(question) {
  const exam = state.exam;
  const available = getSelectedExamCharacters();

  const wrongOptions = pickDistractors(question, exam.options - 1, available, exam.outside);
  const options = shuffle([question, ...wrongOptions]);

  const content = `
    ${examProgressHTML()}

    <div class="prompt">
      <div class="polish">Jakie romaji odpowiada temu znakowi:</div>
      <div class="question question-kana">${question.kana}</div>

      <div class="answers" data-n="${options.length}">
        ${options
          .map(
            (option, i) => `
          <button class="answer answer-romaji" data-answer="${option.kana}">
            <span class="answer-key">${i + 1}</span>
            ${option.romaji}
          </button>
        `
          )
          .join('')}
      </div>

      <div class="feedback" id="feedback"></div>

      <button class="btn btn-secondary" id="endExam" style="margin-top:20px">
        Zakończ egzamin
      </button>
    </div>
  `;

  app.innerHTML = examChromeHTML(exam, content);

  document.querySelectorAll('[data-answer]').forEach(button => {
    button.onclick = () => answerExam(button, question);
  });

  document.getElementById('endExam').onclick = () => {
    Audio.click();
    finishExam();
  };
}

/* Tryb C: romaji → wpisz kana */
function renderRomajiToKanaType(question) {
  const exam = state.exam;

  const content = `
    ${examProgressHTML()}

    <div class="prompt">
      <div class="polish">Wpisz znak kana dla:</div>
      <div class="question">${question.romaji}</div>

      <div class="type-input-wrap">
        <input type="text" id="kanaInput" class="kana-input" autocomplete="off" autofocus
               placeholder="ここに入力" lang="ja">
        <button class="btn btn-primary" id="checkKana">Sprawdź (Enter)</button>
      </div>

      <div class="feedback" id="feedback"></div>

      <button class="btn btn-secondary" id="endExam" style="margin-top:20px">
        Zakończ egzamin
      </button>
    </div>
  `;

  app.innerHTML = examChromeHTML(exam, content);

  const input = document.getElementById('kanaInput');
  const checkBtn = document.getElementById('checkKana');

  function submitTypedAnswer() {
    if (exam.answered) return;
    const typed = input.value.trim();
    if (!typed) return;

    exam.answered = true;
    exam.total++;
    clearInterval(exam.timerCountdown);

    const correct = typed === question.kana;
    recordAnswer(question.kana, correct, null, 'exam');

    input.disabled = true;
    checkBtn.disabled = true;

    const feedback = document.getElementById('feedback');

    if (correct) {
      exam.score++;
      exam.streak = (exam.streak || 0) + 1;
      if (exam.streak > (exam.bestStreak || 0)) exam.bestStreak = exam.streak;
      exam.xp += calcXP(exam);

      Audio.correct();
      input.classList.add('input-correct');
      feedback.textContent = '✓ Dobrze!';
      if (exam.streak >= 3) feedback.textContent = `✓ Dobrze! 🔥 Seria: ${exam.streak}`;

      exam.timer = setTimeout(nextExamQuestion, 850);
    } else {
      exam.wrong++;
      exam.streak = 0;
      exam.mistakes[question.kana] = (exam.mistakes[question.kana] || 0) + 1;
      exam.waiting = true;

      Audio.wrong();
      input.classList.add('input-wrong');
      feedback.innerHTML = flashcardHTML(question, null);
      document.getElementById('nextQuestion').onclick = nextExamQuestion;

      const flashWrap = document.getElementById('flashSvg');
      mountKana(flashWrap, question.kana, { autoplay: true }).then(player => {
        if (!player) return;
        flashWrap.style.cursor = 'pointer';
        flashWrap.onclick = () => player.play();
      });
    }
  }

  checkBtn.onclick = submitTypedAnswer;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (exam.waiting) nextExamQuestion();
      else submitTypedAnswer();
    }
  });

  setTimeout(() => input.focus(), 50);

  document.getElementById('endExam').onclick = () => {
    Audio.click();
    finishExam();
  };
}

/* =========================================================
   EGZAMIN: ODPOWIEDŹ + FISZKA
========================================================= */

function flashcardHTML(question, chosen) {
  const count = getStrokeCounts()[question.kana];

  return `
    <div class="flashcard">
      <div class="flash-label">✗ Poprawna odpowiedź</div>
      <div class="flash-kana"><div class="svg-wrap flash-svg" id="flashSvg"></div></div>
      <div class="flash-romaji">${question.romaji}</div>
      <div class="flash-meta">Rząd: ${question.group} • ${count} ${strokeWord(count)}</div>
      <div class="flash-meta">${statsText(question.kana)}</div>

      ${
        chosen
          ? `
        <div class="flash-chosen">
          Kliknięto: <b>${chosen.kana}</b> — to jest „${chosen.romaji}"
        </div>
      `
          : ''
      }

      <div class="stroke-list">${strokeListHTML(question.kana)}</div>

      <button class="btn btn-primary" id="nextQuestion">Dalej → (Enter)</button>
    </div>
  `;
}
/* Tryb D: kana → wpisz romaji */
function renderKanaToRomajiType(question) {
  const exam = state.exam;

  const content = `
    ${examProgressHTML()}

    <div class="prompt">
      <div class="polish">Wpisz romaji dla tego znaku:</div>
      <div class="question question-kana">${question.kana}</div>

      <div class="type-input-wrap">
        <input type="text" id="romajiInput" class="romaji-input" autocomplete="off" autofocus
               placeholder="romaji">
        <button class="btn btn-primary" id="checkRomaji">Sprawdź (Enter)</button>
      </div>

      <div class="feedback" id="feedback"></div>

      <button class="btn btn-secondary" id="endExam" style="margin-top:20px">
        Zakończ egzamin
      </button>
    </div>
  `;

  app.innerHTML = examChromeHTML(exam, content);

  const input = document.getElementById('romajiInput');
  const checkBtn = document.getElementById('checkRomaji');

  function submitTypedAnswer() {
    if (exam.answered) return;
    const typed = input.value.trim().toLowerCase();
    if (!typed) return;

    exam.answered = true;
    exam.total++;
    clearInterval(exam.timerCountdown);

    const correct = typed === question.romaji;
    recordAnswer(question.kana, correct, null, 'exam');

    input.disabled = true;
    checkBtn.disabled = true;

    const feedback = document.getElementById('feedback');

    if (correct) {
      exam.score++;
      exam.streak = (exam.streak || 0) + 1;
      if (exam.streak > (exam.bestStreak || 0)) exam.bestStreak = exam.streak;
      exam.xp += calcXP(exam);

      Audio.correct();
      input.classList.add('input-correct');
      feedback.textContent = '✓ Dobrze!';
      if (exam.streak >= 3) feedback.textContent = `✓ Dobrze! 🔥 Seria: ${exam.streak}`;

      exam.timer = setTimeout(nextExamQuestion, 850);
    } else {
      exam.wrong++;
      exam.streak = 0;
      exam.mistakes[question.kana] = (exam.mistakes[question.kana] || 0) + 1;
      exam.waiting = true;

      Audio.wrong();
      input.classList.add('input-wrong');
      feedback.innerHTML =
        `<div style="margin:10px 0;font-weight:700;color:var(--bad)">Poprawna odpowiedź: <span style="font-size:1.4rem">${question.romaji}</span></div>` +
        flashcardHTML(question, null);
      document.getElementById('nextQuestion').onclick = nextExamQuestion;

      const flashWrap = document.getElementById('flashSvg');
      mountKana(flashWrap, question.kana, { autoplay: true }).then(player => {
        if (!player) return;
        flashWrap.style.cursor = 'pointer';
        flashWrap.onclick = () => player.play();
      });
    }
  }

  checkBtn.onclick = submitTypedAnswer;
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      if (exam.waiting) nextExamQuestion();
      else submitTypedAnswer();
    }
  });

  setTimeout(() => input.focus(), 50);

  document.getElementById('endExam').onclick = () => {
    Audio.click();
    finishExam();
  };
}

/* Punkty doświadczenia za poprawną odpowiedź */
function calcXP(exam) {
  const baseXP = 10;

  // Liczba odpowiedzi
  const optionsMultiplier =
    {
      4: 1.0,
      6: 1.15,
      8: 1.3
    }[exam.options] || 1.0;

  // Timer
  const timerMultiplier =
    {
      0: 1.0,
      15: 1.1,
      10: 1.2,
      5: 1.35
    }[exam.timerSec] || 1.0;

  // Wpisywanie zamiast wyboru
  const typingMultiplier =
    exam.currentMode === 'romaji-kana-type' || exam.currentMode === 'kana-romaji-type' ? 1.5 : 1.0;

  // Streak
  let streakMultiplier = 1.0;

  if (exam.streak >= 12) {
    streakMultiplier = 1.5;
  } else if (exam.streak >= 8) {
    streakMultiplier = 1.35;
  } else if (exam.streak >= 5) {
    streakMultiplier = 1.2;
  } else if (exam.streak >= 3) {
    streakMultiplier = 1.1;
  }

  const xp = baseXP * optionsMultiplier * timerMultiplier * typingMultiplier * streakMultiplier;

  return Math.round(xp);
}

/* Konfetti na ekranie wyniku */
function spawnConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['var(--accent)', 'var(--good)', 'var(--warn)', 'var(--bad)', 'var(--mastered)'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1.5 + 's';
    piece.style.animationDuration = 1.5 + Math.random() * 2 + 's';
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 4000);
}

function answerExam(button, question) {
  const exam = state.exam;
  if (!exam || exam.answered) return;

  exam.answered = true;
  exam.total++;
  clearInterval(exam.timerCountdown);

  const chosenKana = button.dataset.answer;
  const correct = chosenKana === question.kana;

  recordAnswer(question.kana, correct, chosenKana, 'exam');

  document.querySelectorAll('.answer').forEach(answer => {
    answer.disabled = true;
    if (answer.dataset.answer === question.kana) answer.classList.add('correct');
  });

  const feedback = document.getElementById('feedback');

  if (correct) {
    exam.score++;
    exam.streak = (exam.streak || 0) + 1;
    if (exam.streak > (exam.bestStreak || 0)) exam.bestStreak = exam.streak;
    exam.xp += calcXP(exam);

    Audio.correct();
    button.classList.add('answer-correct-anim');
    feedback.textContent = '✓ Dobrze!';

    if (exam.streak >= 3) {
      feedback.textContent = `✓ Dobrze! 🔥 Seria: ${exam.streak}`;
    }

    exam.timer = setTimeout(nextExamQuestion, 850);
    return;
  }

  // zła odpowiedź: fiszka, bez automatycznego przejścia dalej
  exam.wrong++;
  exam.streak = 0;
  exam.mistakes[question.kana] = (exam.mistakes[question.kana] || 0) + 1;
  exam.waiting = true;

  Audio.wrong();
  button.classList.add('wrong');
  button.classList.add('answer-wrong-anim');
  feedback.innerHTML = flashcardHTML(question, item(chosenKana));

  document.getElementById('nextQuestion').onclick = nextExamQuestion;

  // fiszka: znak sam rysuje się kreska po kresce, kliknięcie odtwarza ponownie
  const flashWrap = document.getElementById('flashSvg');

  mountKana(flashWrap, question.kana, { autoplay: true }).then(player => {
    if (!player) return;
    flashWrap.style.cursor = 'pointer';
    flashWrap.title = 'Kliknij, aby odtworzyć ponownie';
    flashWrap.onclick = () => player.play();
  });
}

/* =========================================================
   KLAWIATURA
========================================================= */

document.addEventListener('keydown', event => {
  // Escape → menu
  if (event.key === 'Escape' && state.screen !== 'menu') {
    Audio.click();
    stopExam();
    setScreen('menu');
    return;
  }

  const exam = state.exam;

  // Enter → następne pytanie po złej odpowiedzi
  if (event.key === 'Enter' && exam && exam.waiting && !exam.finished) {
    nextExamQuestion();
    return;
  }

  // Klawisze 1-9 → wybór odpowiedzi w egzaminie (ale nie w trybie wpisywania)
  if (
    exam &&
    !exam.answered &&
    !exam.finished &&
    state.screen === 'exam' &&
    exam.currentMode !== 'romaji-kana-type' &&
    exam.currentMode !== 'kana-romaji-type'
  ) {
    const num = parseInt(event.key);
    if (num >= 1 && num <= 9) {
      const buttons = [...document.querySelectorAll('[data-answer]')];
      if (buttons[num - 1]) {
        buttons[num - 1].click();
      }
      return;
    }
  }

  // Fiszki słownictwa: cyfry wybierają odpowiedź, Enter przechodzi dalej
  if (state.screen === 'vocab' && state.vocab && !state.vocab.finished) {
    if (state.vocab.answered && event.key === 'Enter') {
      nextVocab();
      return;
    }
    if (!state.vocab.answered) {
      const num = parseInt(event.key);
      if (num >= 1 && num <= VOCAB_OPTIONS) {
        const buttons = [...document.querySelectorAll('[data-meaning]')];
        if (buttons[num - 1]) buttons[num - 1].click();
        return;
      }
    }
  }

  // Tryb nauki: nawigacja
  if (state.screen === 'learn') {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault();
      navigateKana(1);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault();
      navigateKana(-1);
    } else if (event.key === ' ' || event.key.toLowerCase() === 'r') {
      event.preventDefault();
      const playBtn = document.getElementById('playStrokes');
      if (playBtn && !playBtn.disabled) playBtn.click();
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const stepBtn = document.getElementById('stepStroke');
      if (stepBtn && !stepBtn.disabled) stepBtn.click();
    } else if (event.key.toLowerCase() === 'a') {
      event.preventDefault();
      const showBtn = document.getElementById('showAllStrokes');
      if (showBtn && !showBtn.disabled) showBtn.click();
    }
  }
});

/* =========================================================
   EGZAMIN: KONIEC
========================================================= */

function finishExam() {
  const exam = state.exam;
  if (!exam) return;

  clearTimeout(exam.timer);
  clearInterval(exam.timerCountdown);
  exam.finished = true;

  // T15: koniec mierzalnej sesji. Zapisujemy PRZED ekranem wyniku,
  // żeby czas spędzony na czytaniu wyniku nie liczył się jako nauka.
  recordSessionStats(exam);

  renderExamResult();
}

function renderExamResult() {
  const exam = state.exam;
  const percentage = exam.total === 0 ? 0 : Math.round((exam.score / exam.total) * 100);

  // dźwięk celebracji + konfetti przy dobrym wyniku
  if (percentage >= 80 && exam.total >= 3) {
    Audio.celebrate();
    spawnConfetti();
  }

  const mistakes = Object.entries(exam.mistakes)
    .sort((a, b) => b[1] - a[1])
    .map(([kana, times]) => ({ ...item(kana), times }));

  app.innerHTML = `
    <section class="exam card result">

      <div class="eyebrow">KONIEC EGZAMINU</div>
      <h2>Wynik</h2>

      <div class="score">${exam.score}/${exam.total}</div>
      <div style="font-size:1.2rem;font-weight:700;margin:10px 0 20px;">${percentage}%</div>

      ${exam.xp > 0 ? `<div class="xp-result">⭐ ${exam.xp} XP zdobytych</div>` : ''}
      ${exam.bestStreak >= 3 ? `<div class="result-streak">🔥 Najlepsza seria: ${exam.bestStreak} z rzędu</div>` : ''}

      <p style="color:var(--muted)">${resultText(exam.score, exam.total, state.script, exam.kind)}</p>

      ${
        mistakes.length
          ? `
        <div class="mistakes">
          <h3>Do powtórki</h3>
          <div class="mistakes-list">
            ${mistakes
              .map(
                m => `
              <div class="mistake-chip">
                <span class="mistake-kana">${m.kana}</span>
                <span>${m.romaji}</span>
                <small>×${m.times}</small>
              </div>
            `
              )
              .join('')}
          </div>
        </div>
      `
          : ''
      }

      <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:25px;">
        <button class="btn btn-primary" id="again">Spróbuj jeszcze raz</button>
        ${practiceList().length >= 2 ? '<button class="btn btn-secondary" id="practiceHard">🎯 Ćwicz trudne znaki</button>' : ''}
        <button class="btn btn-secondary" id="backToMenu">← Menu</button>
      </div>

    </section>
  `;

  document.getElementById('again').onclick = () => {
    Audio.click();
    stopExam();
    showExamSetup();
  };

  const practiceButton = document.getElementById('practiceHard');
  if (practiceButton) {
    practiceButton.onclick = () => {
      Audio.click();
      const settings = loadExamSettings();
      stopExam();
      startExam([], {
        kanaList: practiceList(),
        options: settings.options,
        outside: settings.outside,
        kind: 'practice'
      });
    };
  }

  document.getElementById('backToMenu').onclick = () => {
    Audio.click();
    stopExam();
    setScreen('menu');
  };
}

/*
   `kind` rozróżnia sesje, bo `finishExam()` jest wspólny dla egzaminu,
   powtórek i „ćwicz trudne". Tylko zwykły egzamin dotyczy całego skryptu,
   więc tylko on może mówić o jego opanowaniu — powtórki dotyczą pojedynczych
   znaków i takiej deklaracji by nie uzasadniały.
*/
function resultText(score, total, script = state.script, kind = 'exam') {
  if (total === 0) return 'Nie udzielono żadnej odpowiedzi.';

  const ratio = score / total;

  if (ratio === 1) {
    return kind === 'exam' ? 'Perfekcyjnie. ' + scriptName(script) + ' opanowana!' : 'Perfekcyjnie!';
  }
  if (ratio >= 0.8) return 'Bardzo dobrze — jeszcze trochę praktyki i będzie super.';
  if (ratio >= 0.6) return 'Dobry wynik. Warto powtórzyć trudniejsze znaki.';
  return 'Warto wrócić do trybu nauki i zrobić jeszcze kilka powtórek.';
}

/* =========================================================
   TOUCH: SWIPE W TRYBIE NAUKI
========================================================= */

(function setupTouchGestures() {
  let startX = 0;
  let startY = 0;
  const MIN_SWIPE = 50;

  document.addEventListener(
    'touchstart',
    e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    { passive: true }
  );

  document.addEventListener(
    'touchend',
    e => {
      if (state.screen !== 'learn') return;

      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;

      // tylko poziome swipe'y (i wystarczająco duże)
      if (Math.abs(dx) < MIN_SWIPE || Math.abs(dy) > Math.abs(dx)) return;

      if (dx > 0)
        navigateKana(-1); // swipe right = poprzedni
      else navigateKana(1); // swipe left = następny
    },
    { passive: true }
  );
})();

/* =========================================================
   START
========================================================= */

render();

/* =========================================================
   T14 — OFFLINE PWA
   ------------------------------------------------------------
   Tylko rejestracja Service Workera i komunikat o nowej wersji.
   Świadomie nie dotyka: setScript, settings, localStorage, Audio,
   render/setScreen. Dzięki temu aktywna sesja (np. trwający Exam)
   nigdy nie jest przerywana automatycznym reloadem.
   ========================================================= */

function showUpdateBanner(registration) {
  if (document.getElementById('updateBanner')) return;

  const banner = document.createElement('div');
  banner.id = 'updateBanner';

  // style inline, żeby style.css pozostał nietknięty (T14)
  banner.style.cssText = [
    'position:fixed',
    'left:12px',
    'right:12px',
    'bottom:12px',
    'z-index:9999',
    'display:flex',
    'align-items:center',
    'gap:12px',
    'flex-wrap:wrap',
    'padding:12px 14px',
    'border-radius:16px',
    'border:1px solid var(--line)',
    'background:var(--card-solid)',
    'color:var(--ink)',
    'box-shadow:var(--shadow)',
    'font-size:.9rem',
    'font-weight:600',
    'max-width:520px',
    'margin:0 auto'
  ].join(';');

  const text = document.createElement('span');
  text.style.cssText = 'flex:1 1 180px';
  text.textContent = 'Nowa wersja dostępna — Odśwież';

  const reloadBtn = document.createElement('button');
  reloadBtn.type = 'button';
  reloadBtn.textContent = 'Odśwież';
  reloadBtn.style.cssText = [
    'font:inherit',
    'font-weight:700',
    'cursor:pointer',
    'padding:8px 18px',
    'border-radius:999px',
    'border:2px solid var(--accent)',
    'background:var(--accent)',
    'color:#fff'
  ].join(';');

  // Reload TYLKO na świadome kliknięcie — nigdy automatycznie.
  reloadBtn.onclick = () => {
    const waiting = registration.waiting;
    if (waiting) {
      waiting.postMessage('SKIP_WAITING');
      waiting.addEventListener('statechange', function onChange(e) {
        if (e.target.state === 'activated') location.reload();
      });
    } else {
      location.reload();
    }
  };

  banner.append(text, reloadBtn);
  document.body.appendChild(banner);
}

function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  // `sw.js` leży obok index.html, więc scope = katalog aplikacji
  // (/hiragana-study/ na GitHub Pages, / na localhost).
  navigator.serviceWorker
    .register('sw.js')
    .then(registration => {
      registration.addEventListener('updatefound', () => {
        const installing = registration.installing;
        if (!installing) return;

        installing.addEventListener('statechange', () => {
          // `controller` istnieje = to nie pierwsza instalacja,
          // więc nowy SW przejmuje kontrolę dopiero po reloadzie.
          if (installing.state === 'installed' && navigator.serviceWorker.controller) {
            showUpdateBanner(registration);
          }
        });
      });
    })
    .catch(() => {
      /* np. brak secure context — aplikacja działa jak dotąd */
    });
}

if (document.readyState === 'complete') {
  registerServiceWorker();
} else {
  window.addEventListener('load', registerServiceWorker, { once: true });
}
