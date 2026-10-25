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
      { id: 'yoon-p', name: 'Yōon P', shortName: 'Y P', chars: [['ピャ', 'pya'], ['ピュ', 'pyu'], ['ピョ', 'pyo']] },

      { id: 'special-v', name: 'Special V', shortName: 'Sp V', chars: [['ヴ', 'vu'], ['ヴァ', 'va'], ['ヴィ', 'vi'], ['ヴェ', 've'], ['ヴォ', 'vo']] },
      { id: 'special-vy', name: 'Special Vy', shortName: 'Sp Vy', chars: [['ヴャ', 'vya'], ['ヴュ', 'vyu'], ['ヴョ', 'vyo']] },
      { id: 'special-w', name: 'Special W / Y', shortName: 'Sp W/Y', chars: [['ウィ', 'wi'], ['ウェ', 'we'], ['イェ', 'ye']] },
      { id: 'special-f', name: 'Special F', shortName: 'Sp F', chars: [['ファ', 'fa'], ['フィ', 'fi'], ['フェ', 'fe'], ['フォ', 'fo']] },
      { id: 'special-fy', name: 'Special Fy', shortName: 'Sp Fy', chars: [['フャ', 'fya'], ['フュ', 'fyu'], ['フョ', 'fyo']] },
      { id: 'special-t', name: 'Special T / D', shortName: 'Sp T/D', chars: [['ティ', 'ti'], ['トゥ', 'tu'], ['ディ', 'di'], ['ドゥ', 'du']] },
      { id: 'special-ty', name: 'Special Ty / Dy', shortName: 'Sp Ty/Dy', chars: [['テャ', 'tya'], ['テュ', 'tyu'], ['テョ', 'tyo'], ['デャ', 'dya'], ['デュ', 'dyu'], ['デョ', 'dyo']] },
      { id: 'special-ts', name: 'Special Ts', shortName: 'Sp Ts', chars: [['ツァ', 'tsa'], ['ツィ', 'tsi'], ['ツェ', 'tse'], ['ツォ', 'tso']] },
      { id: 'special-sh', name: 'Special Sh / J / Ch', shortName: 'Sp Sh', chars: [['シェ', 'she'], ['ジェ', 'je'], ['チェ', 'che']] },
      { id: 'special-kw', name: 'Special Kw / Gw', shortName: 'Sp Kw', chars: [['クヮ', 'kwa'], ['クィ', 'kwi'], ['クェ', 'kwe'], ['クォ', 'kwo'], ['グヮ', 'gwa'], ['グィ', 'gwi'], ['グェ', 'gwe'], ['グォ', 'gwo']] }
    ],
    strokeText: {},
    lookalikes: []
  }
};

/*
   Skrypty aktywne w danym trybie. `both` to nie trzeci zestaw danych —
   to ten sam `scriptData` czytany dwa razy, więc nie duplikujemy znaków
   ani kresek.
*/
function activeScripts() {
  return state.script === 'both' ? ['hiragana', 'katakana'] : [state.script];
}

/*
   Grupa ma trzy tożsamości i każda ma inne zadanie:
     id     — bazowe (`a`, `dakuten-k`), wspólne dla obu skryptów; po nim
              filtruje egzamin, więc wybór rzędów działa niezależnie
              od tego, czy uczymy się jednego alfabetu, czy obu;
     key    — unikalne w danej sesji (`h:a`, `k:a` przy `both`); po nim
              chodzą `state.group` i panel znaków, bo samo `id` wskazywałoby
              dwie grupy jednocześnie;
     script — z którego alfabetu pochodzi grupa.
   W trybie jednego skryptu `key` równa się `id`, więc stary stan i stare
   asercje zachowują się bez zmian.
*/
function getGroups() {
  return activeScripts().flatMap(script =>
    scriptData[script].groups.map(group => ({
      ...group,
      script,
      key: state.script === 'both' ? (script === 'hiragana' ? 'h:' : 'k:') + group.id : group.id
    }))
  );
}

function getAll() {
  const groups = getGroups();
  return groups.flatMap(group =>
    group.chars.map(([kana, romaji]) => ({
      kana,
      romaji,
      group: group.name,
      groupId: group.id,
      key: group.key,
      script: group.script
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
  { id: 'yoon', label: 'Yōon' },
  { id: 'special', label: 'Special' }
];

function learnCategoryOf(groupId) {
  // `state.group` to `key`, więc w trybie `both` przychodzi `h:dakuten-k`.
  // Kategoria zawsze zależy od bazowego id.
  const base = String(groupId).split(':').pop();

  if (base.startsWith('dakuten')) return 'dakuten';
  if (base.startsWith('handakuten')) return 'handakuten';
  if (base.startsWith('yoon')) return 'yoon';
  if (base.startsWith('special')) return 'special';
  return 'basic';
}

function getStrokeText() {
  if (state.script !== 'both') return scriptData[state.script].strokeText;

  // klucze to znaki (あ / ア), więc scalenie jest bezkolizyjne
  return { ...scriptData.hiragana.strokeText, ...scriptData.katakana.strokeText };
}

function getStrokeCounts() {
  const strokeText = getStrokeText();
  return Object.fromEntries(Object.entries(strokeText).map(([kana, strokes]) => [kana, strokes.length]));
}

function getLookalikes() {
  if (state.script !== 'both') return scriptData[state.script].lookalikes;
  return [...scriptData.hiragana.lookalikes, ...scriptData.katakana.lookalikes];
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
  // `both` jest domyślne: słownictwo miesza oba alfabety (katakana w
  // zapożyczeniach), więc nauka od razu obejmuje oba. Wybór jednego
  // alfabetu nadal jest w pełni wspierany.
  script: 'both',
  hideGuide: false,
  dailyGoal: 20,
  masterVolume: 80,
  sfxVolume: 80,
  ambientVolume: 50,
  ambientSound: 'rain'
};

const THEME_VALUES = ['light', 'dark', 'system'];
const SCRIPT_VALUES = ['hiragana', 'katakana', 'both'];
const DAILY_GOAL_VALUES = [10, 20, 30, 50];
const AMBIENT_SOUND_VALUES = ['rain', 'bamboo', 'waves', 'off'];

function validateVolume(val) {
  if (val === null || val === undefined || val === '') return null;
  const num = Number(val);
  if (isNaN(num)) return null;
  return Math.max(0, Math.min(100, Math.round(num)));
}

/*
 * Zwraca `{ theme, muted, script, hideGuide, dailyGoal, masterVolume, sfxVolume, ambientVolume, ambientSound }`,
 * gdzie każde pole to poprawna wartość albo `null`, gdy w źródle jest brak lub błędna wartość.
 * Nieznane pola są odrzucane. Nie zależy od `state` ani `scriptData`.
 */
function validateSettings(raw) {
  const src = raw && typeof raw === 'object' ? raw : {};

  return {
    theme: THEME_VALUES.includes(src.theme) ? src.theme : null,
    muted: typeof src.muted === 'boolean' ? src.muted : null,
    script: SCRIPT_VALUES.includes(src.script) ? src.script : null,
    hideGuide: typeof src.hideGuide === 'boolean' ? src.hideGuide : null,
    dailyGoal: DAILY_GOAL_VALUES.includes(Number(src.dailyGoal)) ? Number(src.dailyGoal) : null,
    masterVolume: validateVolume(src.masterVolume),
    sfxVolume: validateVolume(src.sfxVolume),
    ambientVolume: validateVolume(src.ambientVolume),
    ambientSound: AMBIENT_SOUND_VALUES.includes(src.ambientSound) ? src.ambientSound : null
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
    hideGuide: valid.hideGuide !== null ? valid.hideGuide : SETTINGS_DEFAULTS.hideGuide,
    dailyGoal: valid.dailyGoal || SETTINGS_DEFAULTS.dailyGoal,
    masterVolume: valid.masterVolume !== null ? valid.masterVolume : SETTINGS_DEFAULTS.masterVolume,
    sfxVolume: valid.sfxVolume !== null ? valid.sfxVolume : SETTINGS_DEFAULTS.sfxVolume,
    ambientVolume: valid.ambientVolume !== null ? valid.ambientVolume : SETTINGS_DEFAULTS.ambientVolume,
    ambientSound: valid.ambientSound || SETTINGS_DEFAULTS.ambientSound
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

function setDailyGoal(goal) {
  const parsed = Number(goal);
  if (!DAILY_GOAL_VALUES.includes(parsed)) return;
  settings.dailyGoal = parsed;
  saveSettings(settings);
}

function setAudioVolume(type, val) {
  const clamped = validateVolume(val);
  if (clamped === null) return;
  if (type === 'master') settings.masterVolume = clamped;
  else if (type === 'sfx') settings.sfxVolume = clamped;
  else if (type === 'ambient') settings.ambientVolume = clamped;
  saveSettings(settings);
  if (typeof Audio !== 'undefined' && Audio.updateVolumes) {
    Audio.updateVolumes();
  }
}

function setAmbientSound(preset) {
  if (!AMBIENT_SOUND_VALUES.includes(preset)) return;
  settings.ambientSound = preset;
  saveSettings(settings);
  if (typeof Audio !== 'undefined' && Audio.ambient) {
    if (preset === 'off') {
      Audio.ambient.stop();
    } else if (Audio.ambient.isPlaying()) {
      Audio.ambient.setPreset(preset);
    }
  }
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
  'ピョ': ['pierwsza kreska ピ', 'druga kreska ピ', 'kółko handakuten ピ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Special Katakana: V
  'ヴ': ['krótka kreska u góry ヴ', 'pionowa kreska w dół po lewej ヴ', 'długa pozioma kreska z łukiem w prawo i w dół ヴ', 'ukośna kreska dakuten ヴ', 'druga kreska dakuten ヴ'],
  'ヴァ': ['krótka kreska u góry ヴ', 'pionowa kreska w dół po lewej ヴ', 'długa pozioma kreska z łukiem w prawo i w dół ヴ', 'ukośna kreska dakuten ヴ', 'druga kreska dakuten ヴ', 'pierwsza kreska małego ァ', 'druga kreska małego ァ'],
  'ヴィ': ['krótka kreska u góry ヴ', 'pionowa kreska w dół po lewej ヴ', 'długa pozioma kreska z łukiem w prawo i w dół ヴ', 'ukośna kreska dakuten ヴ', 'druga kreska dakuten ヴ', 'pierwsza kreska małego ィ', 'druga kreska małego ィ'],
  'ヴェ': ['krótka kreska u góry ヴ', 'pionowa kreska w dół po lewej ヴ', 'długa pozioma kreska z łukiem w prawo i w dół ヴ', 'ukośna kreska dakuten ヴ', 'druga kreska dakuten ヴ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],
  'ヴォ': ['krótka kreska u góry ヴ', 'pionowa kreska w dół po lewej ヴ', 'długa pozioma kreska z łukiem w prawo i w dół ヴ', 'ukośna kreska dakuten ヴ', 'druga kreska dakuten ヴ', 'pierwsza kreska małego ォ', 'druga kreska małego ォ', 'trzecia kreska małego ォ'],

  // Special Katakana: Vy
  'ヴャ': ['krótka kreska u góry ヴ', 'pionowa kreska w dół po lewej ヴ', 'długa pozioma kreska z łukiem w prawo i w dół ヴ', 'ukośna kreska dakuten ヴ', 'druga kreska dakuten ヴ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'ヴュ': ['krótka kreska u góry ヴ', 'pionowa kreska w dół po lewej ヴ', 'długa pozioma kreska z łukiem w prawo i w dół ヴ', 'ukośna kreska dakuten ヴ', 'druga kreska dakuten ヴ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'ヴョ': ['krótka kreska u góry ヴ', 'pionowa kreska w dół po lewej ヴ', 'długa pozioma kreska z łukiem w prawo i w dół ヴ', 'ukośna kreska dakuten ヴ', 'druga kreska dakuten ヴ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Special Katakana: W / Y
  'ウィ': ['krótka kreska u góry ウ', 'pionowa kreska w dół po lewej ウ', 'długa kreska z łukiem w prawo na dole ウ', 'pierwsza kreska małego ィ', 'druga kreska małego ィ'],
  'ウェ': ['krótka kreska u góry ウ', 'pionowa kreska w dół po lewej ウ', 'długa kreska z łukiem w prawo na dole ウ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],
  'イェ': ['kreska ukośna w dół i w lewo イ', 'pionowa kreska w dół イ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],

  // Special Katakana: F
  'ファ': ['kreska z załamaniem w lewo フ', 'pierwsza kreska małego ァ', 'druga kreska małego ァ'],
  'フィ': ['kreska z załamaniem w lewo フ', 'pierwsza kreska małego ィ', 'druga kreska małego ィ'],
  'フェ': ['kreska z załamaniem w lewo フ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],
  'フォ': ['kreska z załamaniem w lewo フ', 'pierwsza kreska małego ォ', 'druga kreska małego ォ', 'trzecia kreska małego ォ'],

  // Special Katakana: Fy
  'フャ': ['kreska z załamaniem w lewo フ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'フュ': ['kreska z załamaniem w lewo フ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'フョ': ['kreska z załamaniem w lewo フ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Special Katakana: T / D
  'ティ': ['pozioma kreska u góry テ', 'dłuższa pozioma kreska pośrodku テ', 'łukowata kreska w dół i w lewo テ', 'pierwsza kreska małego ィ', 'druga kreska małego ィ'],
  'トゥ': ['pionowa kreska w dół ト', 'ukośna kreska w dół w prawo ト', 'pierwsza kreska małego ゥ', 'druga kreska małego ゥ', 'trzecia kreska małego ゥ'],
  'ディ': ['pozioma kreska u góry デ', 'dłuższa pozioma kreska pośrodku デ', 'łukowata kreska w dół i w lewo デ', 'ukośna kreska dakuten デ', 'druga kreska dakuten デ', 'pierwsza kreska małego ィ', 'druga kreska małego ィ'],
  'ドゥ': ['pionowa kreska w dół ド', 'ukośna kreska w dół w prawo ド', 'ukośna kreska dakuten ド', 'druga kreska dakuten ド', 'pierwsza kreska małego ゥ', 'druga kreska małego ゥ', 'trzecia kreska małego ゥ'],

  // Special Katakana: Ty / Dy
  'テャ': ['pozioma kreska u góry テ', 'dłuższa pozioma kreska pośrodku テ', 'łukowata kreska w dół i w lewo テ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'テュ': ['pozioma kreska u góry テ', 'dłuższa pozioma kreska pośrodku テ', 'łukowata kreska w dół i w lewo テ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'テョ': ['pozioma kreska u góry テ', 'dłuższa pozioma kreska pośrodku テ', 'łukowata kreska w dół i w lewo テ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],
  'デャ': ['pozioma kreska u góry デ', 'dłuższa pozioma kreska pośrodku デ', 'łukowata kreska w dół i w lewo デ', 'ukośna kreska dakuten デ', 'druga kreska dakuten デ', 'pierwsza kreska małego ャ', 'druga kreska małego ャ'],
  'デュ': ['pozioma kreska u góry デ', 'dłuższa pozioma kreska pośrodku デ', 'łukowata kreska w dół i w lewo デ', 'ukośna kreska dakuten デ', 'druga kreska dakuten デ', 'pierwsza kreska małego ュ', 'druga kreska małego ュ'],
  'デョ': ['pozioma kreska u góry デ', 'dłuższa pozioma kreska pośrodku デ', 'łukowata kreska w dół i w lewo デ', 'ukośna kreska dakuten デ', 'druga kreska dakuten デ', 'pierwsza kreska małego ョ', 'druga kreska małego ョ', 'trzecia kreska małego ョ'],

  // Special Katakana: Ts
  'ツァ': ['krótka kreska u góry po lewej ツ', 'druga krótka kreska pośrodku ツ', 'długa kreska z prawej w dół i w lewo ツ', 'pierwsza kreska małego ァ', 'druga kreska małego ァ'],
  'ツィ': ['krótka kreska u góry po lewej ツ', 'druga krótka kreska pośrodku ツ', 'długa kreska z prawej w dół i w lewo ツ', 'pierwsza kreska małego ィ', 'druga kreska małego ィ'],
  'ツェ': ['krótka kreska u góry po lewej ツ', 'druga krótka kreska pośrodku ツ', 'długa kreska z prawej w dół i w lewo ツ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],
  'ツォ': ['krótka kreska u góry po lewej ツ', 'druga krótka kreska pośrodku ツ', 'długa kreska z prawej w dół i w lewo ツ', 'pierwsza kreska małego ォ', 'druga kreska małego ォ', 'trzecia kreska małego ォ'],

  // Special Katakana: Sh / J / Ch
  'シェ': ['krótka kreska ukośna u góry シ', 'krótka kreska ukośna pośrodku シ', 'długa kreska od lewej w dół i w prawo シ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],
  'ジェ': ['krótka kreska ukośna u góry ジ', 'krótka kreska ukośna pośrodku ジ', 'długa kreska od lewej w dół i w prawo ジ', 'ukośna kreska dakuten ジ', 'druga ukośna kreska dakuten ジ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],
  'チェ': ['krótka kreska ukośna u góry チ', 'pozioma kreska pośrodku チ', 'łukowata kreska w dół i w lewo チ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],

  // Special Katakana: Kw / Gw
  'クヮ': ['kreska w lewo u góry ク', 'pozioma kreska z łukiem w dół i w lewo ク', 'pierwsza kreska małego ヮ', 'druga kreska małego ヮ'],
  'クィ': ['kreska w lewo u góry ク', 'pozioma kreska z łukiem w dół i w lewo ク', 'pierwsza kreska małego ィ', 'druga kreska małego ィ'],
  'クェ': ['kreska w lewo u góry ク', 'pozioma kreska z łukiem w dół i w lewo ク', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],
  'クォ': ['kreska w lewo u góry ク', 'pozioma kreska z łukiem w dół i w lewo ク', 'pierwsza kreska małego ォ', 'druga kreska małego ォ', 'trzecia kreska małego ォ'],
  'グヮ': ['kreska w lewo u góry グ', 'pozioma kreska z łukiem w dół i w lewo グ', 'ukośna kreska dakuten グ', 'druga kreska dakuten グ', 'pierwsza kreska małego ヮ', 'druga kreska małego ヮ'],
  'グィ': ['kreska w lewo u góry グ', 'pozioma kreska z łukiem w dół i w lewo グ', 'ukośna kreska dakuten グ', 'druga kreska dakuten グ', 'pierwsza kreska małego ィ', 'druga kreska małego ィ'],
  'グェ': ['kreska w lewo u góry グ', 'pozioma kreska z łukiem w dół i w lewo グ', 'ukośna kreska dakuten グ', 'druga kreska dakuten グ', 'pierwsza kreska małego ェ', 'druga kreska małego ェ', 'trzecia kreska małego ェ'],
  'グォ': ['kreska w lewo u góry グ', 'pozioma kreska z łukiem w dół i w lewo グ', 'ukośna kreska dakuten グ', 'druga kreska dakuten グ', 'pierwsza kreska małego ォ', 'druga kreska małego ォ', 'trzecia kreska małego ォ']
};

scriptData.katakana.strokeText = katakanaStrokeText;

/* =========================================================
   TAXONOMIA TEMATYCZNA (wspólna dla T19 / T20 / T18)
   ------------------------------------------------------------
   Kategoria to TEMAT — „jedzenie", „szkoła", „transport" — a nie typ
   gramatyczny. Typ zostaje w `type` i nadal steruje tym, z czego biorą
   się rozpraszacze. Są to dwie ortogonalne osie: typ mówi, CZYM jest
   pozycja, kategoria mówi, O CZYM jest.

   Identyfikatory są wspólne dla wszystkich modułów: kanji z kategorii
   „jedzenie" i słowo z kategorii „jedzenie" mają ten sam identyfikator,
   więc filtr z T19 ma przedłużenie w T18 (kanji) i T20 (gramatyka)
   bez osobnej taksonomii w każdym module.

   Lista jest zamknięta. Nowa kategoria to zmiana w kodzie, a nie
   dowolny string w danych — inaczej literówka („jedzenie" i „jedzenia")
   rozjechałaby liczniki w UI na dwie niezależne kategorie.
   ========================================================= */

const CATEGORY_ALL = 'all';
const CATEGORY_NONE = 'none';

/* Kolejność deklaracji jest kolejnością w UI — nie alfabetyczna,
   tylko od najbliższych tematów do dalszych. */
const TOPIC_CATEGORIES = {
  school: 'Szkoła',
  people: 'Ludzie',
  food: 'Jedzenie',
  drink: 'Napoje',
  home: 'Dom',
  time: 'Czas',
  body: 'Ciało',
  clothes: 'Ubrania',
  nature: 'Przyroda',
  transport: 'Transport',
  work: 'Praca',
  place: 'Miejsca',
  number: 'Liczby',
  direction: 'Kierunki'
};

function isKnownCategory(id) {
  return id === CATEGORY_NONE || Object.prototype.hasOwnProperty.call(TOPIC_CATEGORIES, id);
}

function categoryLabel(id) {
  if (id === CATEGORY_NONE) return 'Bez kategorii';
  return TOPIC_CATEGORIES[id] || id;
}

/*
   Brak pola `category` oznacza „bez kategorii", a nie brak pozycji:
   pozycja istnieje, tylko nie ma tematu. Dzięki temu filtrowanie jest
   pełne — suma kategorii i koszyka „bez kategorii" daje zawsze
   wielkość zakresu.

   Nieznany identyfikator traktujemy tak samo jak brak tematu: literówka
   w danych nie może stworzyć nowej, niewidocznej kategorii. Test
   pilnuje, żeby takich literówek w tabeli nie było.
*/
function itemCategory(item) {
  if (!item || !item.category) return CATEGORY_NONE;
  return isKnownCategory(item.category) ? item.category : CATEGORY_NONE;
}

function filterByCategory(items, category) {
  if (!category || category === CATEGORY_ALL) return items;
  return items.filter(item => itemCategory(item) === category);
}

/*
   Tylko kategorie, które w danym zbiorze coś mają, w kolejności
   taksonomii. „Bez kategorii" zawsze na końcu, bo to koszyk
   uzupełniający, a nie temat.
*/
function categoriesIn(items) {
  const counts = new Map();
  for (const item of items) {
    const id = itemCategory(item);
    counts.set(id, (counts.get(id) || 0) + 1);
  }

  const present = Object.keys(TOPIC_CATEGORIES).filter(id => counts.has(id));
  if (counts.has(CATEGORY_NONE)) present.push(CATEGORY_NONE);

  return present.map(id => ({ id, label: categoryLabel(id), count: counts.get(id) }));
}

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
  { id: 'v02', type: 'card', kana: 'いってください', romaji: 'itte kudasai', meaning: 'proszę powiedzieć', verb: 'いいます', verbRomaji: 'iimasu', verbMeaning: 'mówić / powiedzieć' },
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
  { id: 'v16', type: 'card', kana: 'だしてください', romaji: 'dashite kudasai', meaning: 'proszę wyjąć / przynieść / oddać', verb: 'だします', verbRomaji: 'dashimasu', verbMeaning: 'wyjmować / wystawiać / oddawać' },
  { id: 'v17', type: 'card', kana: 'たってください', romaji: 'tatte kudasai', meaning: 'proszę wstać', verb: 'たちます', verbRomaji: 'tachimasu', verbMeaning: 'stać / wstawać' },
  { id: 'v18', type: 'card', kana: 'すわってください', romaji: 'suwatte kudasai', meaning: 'proszę usiąść', verb: 'すわります', verbRomaji: 'suwarimasu', verbMeaning: 'siadać / siedzieć' },
  { id: 'v19', type: 'card', kana: 'しずかにしてください', romaji: 'shizuka ni shite kudasai', meaning: 'proszę być cicho', verb: 'しずかにします', verbRomaji: 'shizuka ni shimasu', verbMeaning: 'być cicho' },
  { id: 'v20', type: 'card', kana: 'べんきょうしてください', romaji: 'benkyou shite kudasai', meaning: 'proszę się uczyć', verb: 'べんきょうします', verbRomaji: 'benkyou shimasu', verbMeaning: 'uczyć się' },

  // 21–22 — wzorce z sekcji „Rozumienie i odpowiedzi"
  { id: 'v21', type: 'pattern', kana: 'わかりますか。', romaji: 'wakarimasu ka', meaning: 'Czy rozumiesz?', answers: [['はい、わかります。', 'hai, wakarimasu', 'tak, rozumiem'], ['いいえ、わかりません。', 'iie, wakarimasen', 'nie, nie rozumiem']], variants: [['わかります。', 'wakarimasu', 'rozumiem'], ['わかりません。', 'wakarimasen', 'nie rozumiem'], ['わかりますね。', 'wakarimasu ne', 'rozumiesz, prawda?']] },
  { id: 'v22', type: 'pattern', kana: '～は にほんごで（ポーランドごで）なんですか。', romaji: '~ wa nihongo de (poorandogo de) nan desu ka', meaning: 'Jak się mówi ～ po japońsku (po polsku)?', answers: [['～は にほんごで ～です。', '~ wa nihongo de ~ desu', '～ po japońsku to ～'], ['～は ポーランドごで ～です。', '~ wa poorandogo de ~ desu', '～ po polsku to ～']] },

  // 23–24 — czasowniki z tabeli 2, które nie mają osobnego polecenia w tabeli 1
  { id: 'v23', type: 'verb', kana: 'あけます', romaji: 'akemasu', meaning: 'otwierać (np. drzwi lub pudełko)' },
  { id: 'v24', type: 'verb', kana: 'しめます', romaji: 'shimemasu', meaning: 'zamykać (np. drzwi)' },

  // Rzeczowniki i zwroty z sekcji „Przydatne rzeczowniki" oraz „Rzeczownik + を + czasownik"
  { id: 'n01', type: 'word', lesson: '0', category: 'people', kana: 'なまえ', romaji: 'namae', meaning: 'imię' },
  { id: 'n02', type: 'word', lesson: '0', kana: 'これ', romaji: 'kore', meaning: 'to' },
  { id: 'n03', type: 'word', lesson: '1ka', category: 'school', kana: 'ほん', kanji: '本', romaji: 'hon', meaning: 'książka' },
  { id: 'n04', type: 'word', lesson: '0', category: 'school', kana: 'きょうかしょ', romaji: 'kyoukasho', meaning: 'podręcznik' },
  { id: 'n05', type: 'word', lesson: '0', category: 'school', kana: 'しゅくだい', romaji: 'shukudai', meaning: 'praca domowa' },
  { id: 'n06', type: 'word', lesson: '0', category: 'school', kana: 'にほんご', kanji: '日本語', romaji: 'nihongo', meaning: 'język japoński' },
  { id: 'n07', type: 'word', lesson: '0', category: 'school', kana: 'ポーランドご', kanji: 'ポーランド語', romaji: 'poorandogo', meaning: 'język polski' },

  // Słówka 1か (Lekcja 1 z Shokyū Nihongo)
  { id: 'n08', type: 'word', lesson: '1ka', category: 'place', kana: 'マレーシア', romaji: 'mareeshia', meaning: 'Malezja' },
  { id: 'n09', type: 'word', lesson: '1ka', category: 'school', kana: 'がくせい', kanji: '学生', romaji: 'gakusei', meaning: 'uczeń / student' },
  { id: 'n10', type: 'word', lesson: '1ka', category: 'place', kana: 'タイ', romaji: 'tai', meaning: 'Tajlandia' },
  { id: 'n11', type: 'word', lesson: '1ka', category: 'people', kana: 'ひと', kanji: '人', romaji: 'hito', meaning: 'człowiek' },
  { id: 'n12', type: 'word', lesson: '1ka', category: 'place', kana: 'フィリピン', romaji: 'firipin', meaning: 'Filipiny' },
  { id: 'n13', type: 'word', lesson: '1ka', category: 'school', kana: 'せんせい', kanji: '先生', romaji: 'sensei', meaning: 'nauczyciel' },
  { id: 'n14', type: 'word', lesson: '1ka', category: 'people', kana: '～じん', kanji: '～人', romaji: '~jin', meaning: 'obywatel / mieszkaniec kraju' },
  { id: 'n15', type: 'word', lesson: '1ka', category: 'home', kana: 'かぎ', kanji: '鍵', romaji: 'kagi', meaning: 'klucz / klucze' },
  { id: 'n16', type: 'word', lesson: '1ka', category: 'home', kana: 'カメラ', romaji: 'kamera', meaning: 'aparat fotograficzny' },
  { id: 'n17', type: 'word', lesson: '1ka', category: 'home', kana: 'かばん', kanji: '鞄', romaji: 'kaban', meaning: 'torba' },
  { id: 'n18', type: 'word', lesson: '1ka', category: 'home', kana: 'レコード', romaji: 'rekoodo', meaning: 'płyta winylowa' },
  { id: 'n19', type: 'word', lesson: '1ka', category: 'home', kana: 'へや', kanji: '部屋', romaji: 'heya', meaning: 'pokój' },
  { id: 'n20', type: 'word', lesson: '1ka', category: 'place', kana: 'イギリス', romaji: 'igirisu', meaning: 'Wielka Brytania / Anglia' },
  { id: 'n21', type: 'word', lesson: '1ka', category: 'school', kana: 'えいご', kanji: '英語', romaji: 'eigo', meaning: 'język angielski' },
  { id: 'n22', type: 'word', lesson: '1ka', category: 'place', kana: 'ちゅうごく', kanji: '中国', romaji: 'chuugoku', meaning: 'Chiny' },
  { id: 'n23', type: 'word', lesson: '1ka', category: 'place', kana: 'アメリカ', romaji: 'amerika', meaning: 'USA / Ameryka' },
  { id: 'n24', type: 'word', lesson: '1ka', category: 'home', kana: 'テレビ', romaji: 'terebi', meaning: 'telewizor' },
  { id: 'n25', type: 'word', lesson: '1ka', category: 'home', kana: 'ラジオ', romaji: 'rajio', meaning: 'radio' },
  { id: 'n26', type: 'word', lesson: '1ka', category: 'time', kana: 'とけい', kanji: '時計', romaji: 'tokei', meaning: 'zegarek' },
  { id: 'n27', type: 'word', lesson: '1ka', category: 'school', kana: 'しんぶん', kanji: '新聞', romaji: 'shinbun', meaning: 'gazeta' },
  { id: 'n28', type: 'word', lesson: '1ka', category: 'school', kana: 'テープ', romaji: 'teepu', meaning: 'taśma klejąca' },
  { id: 'n29', type: 'word', lesson: '1ka', category: 'transport', kana: 'じどうしゃ', kanji: '自動車', romaji: 'jidousha', meaning: 'samochód (pojazd)' },
  { id: 'n30', type: 'word', lesson: '1ka', category: 'transport', kana: 'くるま', kanji: '車', romaji: 'kuruma', meaning: 'samochód / auto' },
  { id: 'n31', type: 'word', lesson: '1ka', category: 'transport', kana: 'じてんしゃ', kanji: '自転車', romaji: 'jitensha', meaning: 'rower' },
  { id: 'n32', type: 'word', lesson: '1ka', category: 'school', kana: 'ノート', romaji: 'nooto', meaning: 'zeszyt' },
  { id: 'n33', type: 'word', lesson: '1ka', category: 'home', kana: 'きって', kanji: '切手', romaji: 'kitte', meaning: 'znaczek pocztowy' },
  { id: 'n34', type: 'word', lesson: '1ka', category: 'school', kana: 'つくえ', kanji: '机', romaji: 'tsukue', meaning: 'biurko' },
  { id: 'n35', type: 'word', lesson: '1ka', category: 'school', kana: 'ボールペン', romaji: 'boorupen', meaning: 'długopis' },
  { id: 'n36', type: 'word', lesson: '1ka', category: 'school', kana: 'えんぴつ', kanji: '鉛筆', romaji: 'enpitsu', meaning: 'ołówek' },
  { id: 'n37', type: 'word', lesson: '1ka', category: 'place', kana: 'ポーランド', romaji: 'poorando', meaning: 'Polska' },
  { id: 'n38', type: 'word', lesson: '1ka', category: 'people', kana: 'おんなのひと', kanji: '女の人', romaji: 'onna no hito', meaning: 'kobieta' },

  // Słówka 2か (Lekcja 2 z Shokyū Nihongo — rzeczowniki)
  { id: 'n39', type: 'word', lesson: '2ka', category: 'place', kana: 'じむしつ', kanji: '事務室', romaji: 'jimushitsu', meaning: 'biuro / sekretariat' },
  { id: 'n40', type: 'word', lesson: '2ka', category: 'place', kana: 'としょしつ', kanji: '図書室', romaji: 'toshoshitsu', meaning: 'czytelnia / biblioteka (wnętrze)' },
  { id: 'n41', type: 'word', lesson: '2ka', category: 'place', kana: 'トイレ', romaji: 'toire', meaning: 'toaleta' },
  { id: 'n42', type: 'word', lesson: '2ka', category: 'home', kana: 'うち', kanji: '家', romaji: 'uchi', meaning: 'dom' },
  { id: 'n43', type: 'word', lesson: '2ka', category: 'drink', kana: 'ジュース', romaji: 'juusu', meaning: 'sok' },
  { id: 'n44', type: 'word', lesson: '2ka', category: 'place', kana: 'レストラン', romaji: 'resutoran', meaning: 'restauracja' },
  { id: 'n45', type: 'word', lesson: '2ka', category: 'food', kana: 'さかな', kanji: '魚', romaji: 'sakana', meaning: 'ryba' },
  { id: 'n46', type: 'word', lesson: '2ka', category: 'food', kana: 'スープ', romaji: 'suupu', meaning: 'zupa' },
  { id: 'n47', type: 'word', lesson: '2ka', category: 'place', kana: 'としょかん', kanji: '図書館', romaji: 'toshokan', meaning: 'biblioteka (budynek)' },
  { id: 'n48', type: 'word', lesson: '2ka', category: 'school', kana: 'かみ', kanji: '紙', romaji: 'kami', meaning: 'papier' },
  { id: 'n49', type: 'word', lesson: '2ka', category: 'food', kana: 'しょっけん', kanji: '食券', romaji: 'shokken', meaning: 'kupon na jedzenie' },
  { id: 'n50', type: 'word', lesson: '2ka', category: 'nature', kana: 'やま', kanji: '山', romaji: 'yama', meaning: 'góra' },
  { id: 'n51', type: 'word', lesson: '2ka', category: 'place', kana: 'たいいくかん', kanji: '体育館', romaji: 'taiikukan', meaning: 'sala gimnastyczna' },
  { id: 'n52', type: 'word', lesson: '2ka', category: 'number', kana: 'えん', kanji: '円', romaji: 'en', meaning: 'jen' },
  { id: 'n53', type: 'word', lesson: '2ka', category: 'food', kana: 'パン', romaji: 'pan', meaning: 'chleb / pieczywo' },
  { id: 'n54', type: 'word', lesson: '2ka', category: 'drink', kana: 'ぎゅうにゅう', kanji: '牛乳', romaji: 'gyuunyuu', meaning: 'mleko krowie' },
  { id: 'n55', type: 'word', lesson: '2ka', category: 'place', kana: 'がっこう', kanji: '学校', romaji: 'gakkou', meaning: 'szkoła' },
  { id: 'n56', type: 'word', lesson: '2ka', category: 'home', kana: 'にわ', kanji: '庭', romaji: 'niwa', meaning: 'ogród' },
  { id: 'n57', type: 'word', lesson: '2ka', category: 'place', kana: 'たてもの', kanji: '建物', romaji: 'tatemono', meaning: 'budynek' },
  { id: 'n58', type: 'word', lesson: '2ka', category: 'place', kana: 'びょういん', kanji: '病院', romaji: 'byouin', meaning: 'szpital' },
  { id: 'n59', type: 'word', lesson: '2ka', category: 'place', kana: 'しょくどう', kanji: '食堂', romaji: 'shokudou', meaning: 'stołówka' },
  { id: 'n60', type: 'word', lesson: '2ka', category: 'place', kana: 'りょう', kanji: '寮', romaji: 'ryou', meaning: 'akademik' },
  { id: 'n61', type: 'word', lesson: '2ka', category: 'place', kana: 'きょうしつ', kanji: '教室', romaji: 'kyoushitsu', meaning: 'sala lekcyjna' },
  { id: 'n62', type: 'word', lesson: '2ka', category: 'school', kana: 'クラス', romaji: 'kurasu', meaning: 'klasa / rocznik' },
  { id: 'n63', type: 'word', lesson: '2ka', category: 'time', kana: '～じ', kanji: '～時', romaji: '~ji', meaning: 'godzina (np. 1:00)' },
  { id: 'n64', type: 'word', lesson: '2ka', category: 'time', kana: '～ふん', kanji: '～分', romaji: '~fun', meaning: 'minuta (np. 5 minut)' },

  // Dni tygodnia (z Shokyū Nihongo L03)
  { id: 'n65', type: 'word', lesson: '2ka', category: 'time', kana: 'にちようび', kanji: '日曜日', romaji: 'nichiyoubi', meaning: 'niedziela' },
  { id: 'n66', type: 'word', lesson: '2ka', category: 'time', kana: 'げつようび', kanji: '月曜日', romaji: 'getsuyoubi', meaning: 'poniedziałek' },
  { id: 'n67', type: 'word', lesson: '2ka', category: 'time', kana: 'かようび', kanji: '火曜日', romaji: 'kayoubi', meaning: 'wtorek' },
  { id: 'n68', type: 'word', lesson: '2ka', category: 'time', kana: 'すいようび', kanji: '水曜日', romaji: 'suiyoubi', meaning: 'środa' },
  { id: 'n69', type: 'word', lesson: '2ka', category: 'time', kana: 'もくようび', kanji: '木曜日', romaji: 'mokuyoubi', meaning: 'czwartek' },
  { id: 'n70', type: 'word', lesson: '2ka', category: 'time', kana: 'きんようび', kanji: '金曜日', romaji: 'kinyoubi', meaning: 'piątek' },
  { id: 'n71', type: 'word', lesson: '2ka', category: 'time', kana: 'どようび', kanji: '土曜日', romaji: 'doyoubi', meaning: 'sobota' },

  // Czas i pory roku (z Shokyū Nihongo L03, L05, L08)
  { id: 'n72', type: 'word', lesson: '2ka', category: 'time', kana: 'きょう', kanji: '今日', romaji: 'kyou', meaning: 'dzisiaj' },
  { id: 'n73', type: 'word', lesson: '2ka', category: 'time', kana: 'あした', kanji: '明日', romaji: 'ashita', meaning: 'jutro' },
  { id: 'n74', type: 'word', lesson: '2ka', category: 'time', kana: 'きのう', kanji: '昨日', romaji: 'kinou', meaning: 'wczoraj' },
  { id: 'n75', type: 'word', lesson: '2ka', category: 'time', kana: 'いま', kanji: '今', romaji: 'ima', meaning: 'teraz' },
  { id: 'n76', type: 'word', lesson: '2ka', category: 'time', kana: 'あさ', kanji: '朝', romaji: 'asa', meaning: 'rano / poranek' },
  { id: 'n77', type: 'word', lesson: '2ka', category: 'time', kana: 'ひる', kanji: '昼', romaji: 'hiru', meaning: 'południe / dzień' },
  { id: 'n78', type: 'word', lesson: '2ka', category: 'time', kana: 'よる', kanji: '夜', romaji: 'yoru', meaning: 'noc' },
  { id: 'n79', type: 'word', lesson: '2ka', category: 'time', kana: 'ばん', kanji: '晩', romaji: 'ban', meaning: 'wieczór' },
  { id: 'n80', type: 'word', lesson: '2ka', category: 'time', kana: 'ゆうがた', kanji: '夕方', romaji: 'yuugata', meaning: 'późne popołudnie' },
  { id: 'n81', type: 'word', lesson: '2ka', category: 'time', kana: 'はる', kanji: '春', romaji: 'haru', meaning: 'wiosna' },
  { id: 'n82', type: 'word', lesson: '2ka', category: 'time', kana: 'なつ', kanji: '夏', romaji: 'natsu', meaning: 'lato' },
  { id: 'n83', type: 'word', lesson: '2ka', category: 'time', kana: 'あき', kanji: '秋', romaji: 'aki', meaning: 'jesień' },
  { id: 'n84', type: 'word', lesson: '2ka', category: 'time', kana: 'ふゆ', kanji: '冬', romaji: 'fuyu', meaning: 'zima' },
  { id: 'n85', type: 'word', lesson: '2ka', category: 'time', kana: 'やすみ', kanji: '休み', romaji: 'yasumi', meaning: 'odpoczynek / wakacje' },

  // Liczby (z Shokyū Nihongo L02)
  { id: 'n86', type: 'word', lesson: '2ka', category: 'number', kana: 'いち', kanji: '一', romaji: 'ichi', meaning: 'jeden' },
  { id: 'n87', type: 'word', lesson: '2ka', category: 'number', kana: 'に', kanji: '二', romaji: 'ni', meaning: 'dwa' },
  { id: 'n88', type: 'word', lesson: '2ka', category: 'number', kana: 'さん', kanji: '三', romaji: 'san', meaning: 'trzy' },
  { id: 'n89', type: 'word', lesson: '2ka', category: 'number', kana: 'よん', kanji: '四', romaji: 'yon', meaning: 'cztery' },
  { id: 'n90', type: 'word', lesson: '2ka', category: 'number', kana: 'ご', kanji: '五', romaji: 'go', meaning: 'pięć' },
  { id: 'n91', type: 'word', lesson: '2ka', category: 'number', kana: 'ろく', kanji: '六', romaji: 'roku', meaning: 'sześć' },
  { id: 'n92', type: 'word', lesson: '2ka', category: 'number', kana: 'なな', kanji: '七', romaji: 'nana', meaning: 'siedem' },
  { id: 'n93', type: 'word', lesson: '2ka', category: 'number', kana: 'はち', kanji: '八', romaji: 'hachi', meaning: 'osiem' },
  { id: 'n94', type: 'word', lesson: '2ka', category: 'number', kana: 'きゅう', kanji: '九', romaji: 'kyuu', meaning: 'dziewięć' },
  { id: 'n95', type: 'word', lesson: '2ka', category: 'number', kana: 'じゅう', kanji: '十', romaji: 'juu', meaning: 'dziesięć' },
  { id: 'n96', type: 'word', lesson: '2ka', category: 'number', kana: 'ひゃく', kanji: '百', romaji: 'hyaku', meaning: 'sto' },
  { id: 'n97', type: 'word', lesson: '2ka', category: 'number', kana: 'せん', kanji: '千', romaji: 'sen', meaning: 'tysiąc' },
  { id: 'n98', type: 'word', lesson: '2ka', category: 'number', kana: 'まん', kanji: '万', romaji: 'man', meaning: 'dziesięć tysięcy' },

  // Rodzina i ludzie (z Shokyū Nihongo L04, L08)
  { id: 'n99', type: 'word', lesson: '2ka', category: 'people', kana: 'おとうさん', kanji: 'お父さん', romaji: 'otousan', meaning: 'ojciec (czyjś)' },
  { id: 'n100', type: 'word', lesson: '2ka', category: 'people', kana: 'ちち', kanji: '父', romaji: 'chichi', meaning: '(mój) ojciec' },
  { id: 'n101', type: 'word', lesson: '2ka', category: 'people', kana: 'おかあさん', kanji: 'お母さん', romaji: 'okaasan', meaning: 'matka (czyjaś)' },
  { id: 'n102', type: 'word', lesson: '2ka', category: 'people', kana: 'はは', kanji: '母', romaji: 'haha', meaning: '(moja) matka' },
  { id: 'n103', type: 'word', lesson: '2ka', category: 'people', kana: 'おにいさん', kanji: 'お兄さん', romaji: 'oniisan', meaning: 'starszy brat (czyjś)' },
  { id: 'n104', type: 'word', lesson: '2ka', category: 'people', kana: 'あに', kanji: '兄', romaji: 'ani', meaning: '(mój) starszy brat' },
  { id: 'n105', type: 'word', lesson: '2ka', category: 'people', kana: 'おねえさん', kanji: 'お姉さん', romaji: 'oneesan', meaning: 'starsza siostra (czyjaś)' },
  { id: 'n106', type: 'word', lesson: '2ka', category: 'people', kana: 'あね', kanji: '姉', romaji: 'ane', meaning: '(moja) starsza siostra' },
  { id: 'n107', type: 'word', lesson: '2ka', category: 'people', kana: 'こども', kanji: '子ども', romaji: 'kodomo', meaning: 'dziecko / dzieci' },
  { id: 'n108', type: 'word', lesson: '2ka', category: 'people', kana: 'おとこのひと', kanji: '男の人', romaji: 'otoko no hito', meaning: 'mężczyzna' },
  { id: 'n109', type: 'word', lesson: '2ka', category: 'people', kana: 'おとこのこ', kanji: '男の子', romaji: 'otoko no ko', meaning: 'chłopiec' },
  { id: 'n110', type: 'word', lesson: '2ka', category: 'people', kana: 'おんなのこ', kanji: '女の子', romaji: 'onna no ko', meaning: 'dziewczynka' },
  { id: 'n111', type: 'word', lesson: '2ka', category: 'people', kana: 'ともだち', kanji: '友だち', romaji: 'tomodachi', meaning: 'przyjaciel / kolega' },

  // Zwierzęta i natura (z Shokyū Nihongo L06, L07)
  { id: 'n112', type: 'word', lesson: '2ka', category: 'nature', kana: 'いぬ', kanji: '犬', romaji: 'inu', meaning: 'pies' },
  { id: 'n113', type: 'word', lesson: '2ka', category: 'nature', kana: 'ねこ', kanji: '猫', romaji: 'neko', meaning: 'kot' },
  { id: 'n114', type: 'word', lesson: '2ka', category: 'nature', kana: 'とり', kanji: '鳥', romaji: 'tori', meaning: 'ptak' },
  { id: 'n115', type: 'word', lesson: '2ka', category: 'nature', kana: 'うま', kanji: '馬', romaji: 'uma', meaning: 'koń' },
  { id: 'n116', type: 'word', lesson: '2ka', category: 'nature', kana: 'うし', kanji: '牛', romaji: 'ushi', meaning: 'krowa' },
  { id: 'n117', type: 'word', lesson: '2ka', category: 'nature', kana: 'てんき', kanji: '天気', romaji: 'tenki', meaning: 'pogoda' },
  { id: 'n118', type: 'word', lesson: '2ka', category: 'nature', kana: 'あめ', kanji: '雨', romaji: 'ame', meaning: 'deszcz' },
  { id: 'n119', type: 'word', lesson: '2ka', category: 'nature', kana: 'ゆき', kanji: '雪', romaji: 'yuki', meaning: 'śnieg' },
  { id: 'n120', type: 'word', lesson: '2ka', category: 'nature', kana: 'かわ', kanji: '川', romaji: 'kawa', meaning: 'rzeka' },
  { id: 'n121', type: 'word', lesson: '2ka', category: 'nature', kana: 'いけ', kanji: '池', romaji: 'ike', meaning: 'staw' },
  { id: 'n122', type: 'word', lesson: '2ka', category: 'nature', kana: 'はやし', kanji: '林', romaji: 'hayashi', meaning: 'lasek' },

  // Kierunki i pozycje (z Shokyū Nihongo L06, L07)
  { id: 'n123', type: 'word', lesson: '2ka', category: 'direction', kana: 'うえ', kanji: '上', romaji: 'ue', meaning: 'na / góra / nad' },
  { id: 'n124', type: 'word', lesson: '2ka', category: 'direction', kana: 'した', kanji: '下', romaji: 'shita', meaning: 'pod / dół' },
  { id: 'n125', type: 'word', lesson: '2ka', category: 'direction', kana: 'なか', kanji: '中', romaji: 'naka', meaning: 'w / wewnątrz / środek' },
  { id: 'n126', type: 'word', lesson: '2ka', category: 'direction', kana: 'そと', kanji: '外', romaji: 'soto', meaning: 'na zewnątrz / poza' },
  { id: 'n127', type: 'word', lesson: '2ka', category: 'direction', kana: 'あいだ', kanji: '間', romaji: 'aida', meaning: 'pomiędzy / między' },
  { id: 'n128', type: 'word', lesson: '2ka', category: 'direction', kana: 'ひがし', kanji: '東', romaji: 'higashi', meaning: 'wschód' },
  { id: 'n129', type: 'word', lesson: '2ka', category: 'direction', kana: 'にし', kanji: '西', romaji: 'nishi', meaning: 'zachód' },
  { id: 'n130', type: 'word', lesson: '2ka', category: 'direction', kana: 'みなみ', kanji: '南', romaji: 'minami', meaning: 'południe' },
  { id: 'n131', type: 'word', lesson: '2ka', category: 'direction', kana: 'きた', kanji: '北', romaji: 'kita', meaning: 'północ' },

  // Ciało (z Shokyū Nihongo L07, L12)
  { id: 'n132', type: 'word', lesson: '2ka', category: 'body', kana: 'て', kanji: '手', romaji: 'te', meaning: 'ręka / dłoń' },
  { id: 'n133', type: 'word', lesson: '2ka', category: 'body', kana: 'め', kanji: '目', romaji: 'me', meaning: 'oko' },
  { id: 'n134', type: 'word', lesson: '2ka', category: 'body', kana: 'くち', kanji: '口', romaji: 'kuchi', meaning: 'usta' },

  { id: 'p01', type: 'phrase', lesson: '0', category: 'people', kana: 'なまえを いってください', romaji: 'namae o itte kudasai', meaning: 'proszę podać imię' },
  { id: 'p02', type: 'phrase', lesson: '0', category: 'people', kana: 'なまえを かいてください', romaji: 'namae o kaite kudasai', meaning: 'proszę napisać imię' },
  { id: 'p03', type: 'phrase', lesson: '0', kana: 'これを みてください', romaji: 'kore o mite kudasai', meaning: 'proszę na to spojrzeć' },
  { id: 'p04', type: 'phrase', lesson: '0', category: 'school', kana: 'ほんを よんでください', romaji: 'hon o yonde kudasai', meaning: 'proszę przeczytać książkę' },
  { id: 'p05', type: 'phrase', lesson: '0', category: 'school', kana: 'きょうかしょを だしてください', romaji: 'kyoukasho o dashite kudasai', meaning: 'proszę wyjąć / przygotować podręcznik' },
  { id: 'p06', type: 'phrase', lesson: '0', category: 'school', kana: 'しゅくだいを だしてください', romaji: 'shukudai o dashite kudasai', meaning: 'proszę oddać pracę domową' },

  // Słówka 2か (Lekcja 2 z Shokyū Nihongo — i-przymiotniki)
  { id: 'a01', type: 'adjective', lesson: '2ka', kana: 'あたらしい', kanji: '新しい', romaji: 'atarashii', meaning: 'nowy' },
  { id: 'a02', type: 'adjective', lesson: '2ka', kana: 'ふるい', kanji: '古い', romaji: 'furui', meaning: 'stary' },
  { id: 'a03', type: 'adjective', lesson: '2ka', kana: 'たかい', kanji: '高い', romaji: 'takai', meaning: 'wysoki / drogi' },
  { id: 'a04', type: 'adjective', lesson: '2ka', kana: 'ひくい', kanji: '低い', romaji: 'hikui', meaning: 'niski' },
  { id: 'a05', type: 'adjective', lesson: '2ka', kana: 'やすい', kanji: '安い', romaji: 'yasui', meaning: 'tani' },
  { id: 'a06', type: 'adjective', lesson: '2ka', kana: 'おおきい', kanji: '大きい', romaji: 'ookii', meaning: 'duży' },
  { id: 'a07', type: 'adjective', lesson: '2ka', kana: 'ちいさい', kanji: '小さい', romaji: 'chiisai', meaning: 'mały' },
  { id: 'a08', type: 'adjective', lesson: '2ka', kana: 'あかるい', kanji: '明るい', romaji: 'akarui', meaning: 'jasny' },
  { id: 'a09', type: 'adjective', lesson: '2ka', kana: 'くらい', kanji: '暗い', romaji: 'kurai', meaning: 'ciemny' },
  { id: 'a10', type: 'adjective', lesson: '2ka', kana: 'しろい', kanji: '白い', romaji: 'shiroi', meaning: 'biały' },
  { id: 'a11', type: 'adjective', lesson: '2ka', kana: 'くろい', kanji: '黒い', romaji: 'kuroi', meaning: 'czarny' },
  { id: 'a12', type: 'adjective', lesson: '2ka', kana: 'あかい', kanji: '赤い', romaji: 'akai', meaning: 'czerwony' },
  { id: 'a13', type: 'adjective', lesson: '2ka', kana: 'あおい', kanji: '青い', romaji: 'aoi', meaning: 'niebieski' },
  { id: 'a14', type: 'adjective', lesson: '2ka', kana: 'きいろい', kanji: '黄色い', romaji: 'kiiroi', meaning: 'żółty' },

  // Kolejne i-przymiotniki (z Shokyū Nihongo L07, L09, L10)
  { id: 'a15', type: 'adjective', lesson: '2ka', kana: 'ふとい', kanji: '太い', romaji: 'futoi', meaning: 'gruby' },
  { id: 'a16', type: 'adjective', lesson: '2ka', kana: 'おおい', kanji: '多い', romaji: 'ooi', meaning: 'liczny / dużo' },
  { id: 'a17', type: 'adjective', lesson: '2ka', kana: 'すくない', kanji: '少ない', romaji: 'sukunai', meaning: 'nieliczny / mało' },
  { id: 'a18', type: 'adjective', lesson: '2ka', kana: 'ひろい', kanji: '広い', romaji: 'hiroi', meaning: 'szeroki / przestronny' },
  { id: 'a19', type: 'adjective', lesson: '2ka', kana: 'せまい', kanji: '狭い', romaji: 'semai', meaning: 'wąski / ciasny' },
  { id: 'a20', type: 'adjective', lesson: '2ka', kana: 'わかい', kanji: '若い', romaji: 'wakai', meaning: 'młody' }
];

/*
   Karty czasowników nie są drugą tabelą danych: powstają z pól
   `verb` / `verbRomaji` / `verbMeaning` kart wyrażeń. Jedno źródło,
   dwa zestawy do nauki — zmiana formy czasownika w tabeli zmienia
   obie karty naraz i nie da się ich rozjechać.

   Identyfikator `v01-verb` jest stabilny i addytywny: `hiragana-vocab`
   kluczuje rekordy po id, więc nowy materiał nie wymaga migracji ani
   podbicia `VOCAB_VERSION`. Rzeczowniki (`word`), przymiotniki (`adjective`),
   zwroty (`phrase`) oraz wzorce (`pattern`) są osobnymi typami, ale wszystkie
   należą do materiału do nauki i dostają własny rekord postępu.
*/
const VOCAB_CARDS = VOCAB_ITEMS.filter(item => item.type === 'card');
const VOCAB_WORDS = VOCAB_ITEMS.filter(item => item.type === 'word');
const VOCAB_ADJECTIVES = VOCAB_ITEMS.filter(item => item.type === 'adjective');
const VOCAB_PHRASES = VOCAB_ITEMS.filter(item => item.type === 'phrase');
const VOCAB_PATTERNS = VOCAB_ITEMS.filter(item => item.type === 'pattern');
const VOCAB_EXTRA_VERBS = VOCAB_ITEMS.filter(item => item.type === 'verb');

const VOCAB_VERB_ITEMS = [
  ...VOCAB_CARDS.map(item => ({
    id: item.id + '-verb',
    type: 'verb',
    kana: item.verb,
    romaji: item.verbRomaji,
    meaning: item.verbMeaning,
    source: item.id,
    lesson: item.lesson || '0'
  })),
  ...VOCAB_EXTRA_VERBS
];

const VOCAB_PHRASE_ITEMS = [...VOCAB_PHRASES, ...VOCAB_PATTERNS];

const VOCAB_LEARN_ITEMS = [
  ...VOCAB_CARDS,
  ...VOCAB_VERB_ITEMS,
  ...VOCAB_WORDS,
  ...VOCAB_ADJECTIVES,
  ...VOCAB_PHRASES,
  ...VOCAB_PATTERNS
];

/* =========================================================
   DANE: KANJI (T18)
   Zestaw z podręcznika Shokyū Nihongo (L01–L10) + dopełnienie N5.
   ========================================================= */

// prettier-ignore
const KANJI_LESSONS = [
  { id: 'all', label: 'Wszystkie', count: 599 },
  { id: 'L01', label: 'L01 · Człowiek', desc: 'Podstawowe pojęcie człowieka i narodowości' },
  { id: 'L02', label: 'L02 · Liczby i natura', desc: 'Liczebniki 1–10 000, góra i biel' },
  { id: 'L03', label: 'L03 · Dni i żywioły', desc: 'Dni tygodnia, słońce, księżyc, ogień, woda, drzewo, złoto' },
  { id: 'L04', label: 'L04 · Szkoła i wiek', desc: 'Nauka, uczeń, dziecko, wiek, jen' },
  { id: 'L05', label: 'L05 · Pory roku i czas', desc: 'Wiosna, jesień, zima, świątynia, wcześnie' },
  { id: 'L06', label: 'L06 · Położenie i zwierzęta', desc: 'Góra, dół, środek, mały, duży, koń, krowa, pies, książka' },
  { id: 'L07', label: 'L07 · Kierunki i pogoda', desc: 'Kierunki świata, deszcz, śnieg, rzeka, ręka, niebo' },
  { id: 'L08', label: 'L08 · Rodzina i czas', desc: 'Ojciec, matka, brat, kobieta, czas, spotkanie' },
  { id: 'L09', label: 'L09 · Ruch i cechy', desc: 'Iść, przychodzić, odpoczywać, prąd, dużo, mało, młody' },
  { id: 'L10', label: 'L10 · Relacje i opozycje', desc: 'Prawy, lewy, otwierać, zamykać, przyjaciel, kraj, lekarz' },
  { id: 'L11', label: 'L11 · Miasto i podróż', desc: 'Mapa, stacja, morze, wysoki, ptak, pływać, dom, wchodzić, ważyć' },
  { id: 'L12', label: 'L12 · Kolory i percepcja', desc: 'Ciemny, dźwięk, numer, czarny, jajko, oko, usta, czerwony, zdrowy' },
  { id: 'L13', label: 'L13 · Zakupy i miejsca', desc: 'Sprzedawać, teraz, rzecz, sklep, wiedzieć, miejsce, stać, brązowy, ubranie, statek' },
  { id: 'L14', label: 'L14 · Społeczeństwo i sztuka', desc: 'Zdjęcie, lubić, malarz, używać, park, sport, kwiat, mężczyzna, mięso, jedzenie, firma' },
  { id: 'L15', label: 'L15 · Praca i instytucje', desc: 'Sam/połowa, życie, robić, martwić się, ciało, płacić, legitymacja, ambasada, praca, wysyłać' },
  { id: 'L16', label: 'L16 · Społeczeństwo i handel', desc: 'Zajazd, droga, specjalny, pociąg, kupować, rozmowa, prefektura, Tokio, Kioto' },
  { id: 'L17', label: 'L17 · Przyroda i ruch', desc: 'Szybki, jezioro, las, ryż, myć, posiłek, trawa, smak, niebo, niebieski, spacer' },
  { id: 'L18', label: 'L18 · Ciało i zdrowie', desc: 'Nos, szyja, ucho, noga, siła, plecy, świat, gorączka, szpital, długi, bliski' },
  { id: 'L19', label: 'L19 · Człowiek i rodzina', desc: 'Najmłodsze dziecko, wieś, kawaler, wychowanie, muzyka, mieszkać' },
  { id: 'L20', label: 'L20 · Nauka i społeczeństwo', desc: 'Przyszłość, praca dyplomowa, badania, most, rząd, małżeństwo' },
  { id: 'L21', label: 'L21 · Umiejętności i warunki', desc: 'Konsultacja, ćwiczenie, powód, wiatr, cena, odpowiedź, lato' },
  { id: 'L22', label: 'L22 · Miasto i podróże', desc: 'Festiwal, propozycja, towary, portfel, biegać, przewodnik' },
  { id: 'L23', label: 'L23 · Przyroda i zjawiska', desc: 'Shinkansen, pora roku, piękno, materiał, skóra, gwiazda, lekarstwo' },
  { id: 'L24', label: 'L24 · Życie i relacje', desc: 'Dawne czasy, zamek, świątynia, noc, rodzice, śpiew, pokój' },
  { id: 'L25', label: 'L25 · Praca i technika', desc: 'Sen, rzeczywistość, maszyny, nauka, myślenie, praca' },
  { id: 'L26', label: 'L26 · Społeczeństwo i zasady', desc: 'Prawo, odpowiedzialność, zasady, rodzina, uczucia' },
  { id: 'L27', label: 'L27 · Nauka i pomiary', desc: 'Specjalizacja, badania, temperatura, uczeń, proporcje' },
  { id: 'L28', label: 'L28 · Wizyta i formy uprzejme', desc: 'Wizyta, obietnica, formy keigo, goście, nocleg' },
  { id: 'N5',  label: 'N5 · Dopełnienie', desc: 'Znaki uzupełniające JLPT N5 (po, czytać)' }
];

// prettier-ignore
const KANJI_ITEMS = [
  // L01
  { id: 'k001', kanji: '人', meaning: 'człowiek', onyomi: ['ジン', 'ニン'], kunyomi: ['ひと'], strokes: 2, lesson: 'L01', category: 'people', grade: 'N5', examples: [{ word: '人', reading: 'ひと', meaning: 'człowiek' }, { word: '日本人', reading: 'にほんじん', meaning: 'Japończyk' }, { word: '学生', reading: 'がくせい', meaning: 'uczeń' }, { word: '外国人', reading: 'がいこくじん', meaning: 'obcokrajowiec' }] },

  // L02
  { id: 'k002', kanji: '一', meaning: 'jeden', onyomi: ['イチ', 'イツ'], kunyomi: ['ひと-つ'], strokes: 1, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '一', reading: 'いち', meaning: 'jeden' }, { word: '一つ', reading: 'ひとつ', meaning: 'jeden (sztuka)' }, { word: '一人', reading: 'ひとり', meaning: 'jedna osoba' }] },
  { id: 'k003', kanji: '二', meaning: 'dwa', onyomi: ['ニ'], kunyomi: ['ふた-つ'], strokes: 2, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '二', reading: 'に', meaning: 'dwa' }, { word: '二つ', reading: 'ふたつ', meaning: 'dwa (sztuka)' }, { word: '二人', reading: 'ふたり', meaning: 'dwie osoby' }] },
  { id: 'k004', kanji: '三', meaning: 'trzy', onyomi: ['サン'], kunyomi: ['みっ-つ'], strokes: 3, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '三', reading: 'さん', meaning: 'trzy' }, { word: '三つ', reading: 'みっつ', meaning: 'trzy (sztuka)' }, { word: '三人', reading: 'さんにん', meaning: 'trzy osoby' }] },
  { id: 'k005', kanji: '四', meaning: 'cztery', onyomi: ['シ'], kunyomi: ['よ', 'よん', 'よっ-つ'], strokes: 5, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '四', reading: 'よん', meaning: 'cztery' }, { word: '四つ', reading: 'よっつ', meaning: 'cztery (sztuka)' }, { word: '四月', reading: 'しがつ', meaning: 'kwiecień' }] },
  { id: 'k006', kanji: '五', meaning: 'pięć', onyomi: ['ゴ'], kunyomi: ['いつ-つ'], strokes: 4, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '五', reading: 'ご', meaning: 'pięć' }, { word: '五つ', reading: 'いつつ', meaning: 'pięć (sztuka)' }, { word: '五月', reading: 'ごがつ', meaning: 'maj' }] },
  { id: 'k007', kanji: '六', meaning: 'sześć', onyomi: ['ロク'], kunyomi: ['むっ-つ'], strokes: 4, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '六', reading: 'ろく', meaning: 'sześć' }, { word: '六つ', reading: 'むっつ', meaning: 'sześć (sztuka)' }, { word: '六月', reading: 'ろくがつ', meaning: 'czerwiec' }] },
  { id: 'k008', kanji: '七', meaning: 'siedem', onyomi: ['シチ'], kunyomi: ['なな', 'なな-つ'], strokes: 2, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '七', reading: 'なな', meaning: 'siedem' }, { word: '七つ', reading: 'ななつ', meaning: 'siedem (sztuka)' }, { word: '七月', reading: 'しちがつ', meaning: 'lipiec' }] },
  { id: 'k009', kanji: '八', meaning: 'osiem', onyomi: ['ハチ'], kunyomi: ['やっ-つ'], strokes: 2, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '八', reading: 'はち', meaning: 'osiem' }, { word: '八つ', reading: 'やっつ', meaning: 'osiem (sztuka)' }, { word: '八月', reading: 'はちがつ', meaning: 'sierpień' }] },
  { id: 'k010', kanji: '九', meaning: 'dziewięć', onyomi: ['キュウ', 'ク'], kunyomi: ['ここの-つ'], strokes: 2, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '九', reading: 'きゅう', meaning: 'dziewięć' }, { word: '九つ', reading: 'ここのつ', meaning: 'dziewięć (sztuka)' }, { word: '九月', reading: 'くがつ', meaning: 'wrzesień' }] },
  { id: 'k011', kanji: '十', meaning: 'dziesięć', onyomi: ['ジュウ'], kunyomi: ['とお'], strokes: 2, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '十', reading: 'じゅう', meaning: 'dziesięć' }, { word: '十日', reading: 'とおか', meaning: 'dziesiąty dzień miesiąca' }, { word: '十月', reading: 'じゅうがつ', meaning: 'październik' }] },
  { id: 'k012', kanji: '百', meaning: 'sto', onyomi: ['ヒャク'], kunyomi: [], strokes: 6, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '百', reading: 'ひゃく', meaning: 'sto' }, { word: '三百', reading: 'さんびゃく', meaning: 'trzysta' }, { word: '六百', reading: 'ろっぴゃく', meaning: 'sześćset' }] },
  { id: 'k013', kanji: '千', meaning: 'tysiąc', onyomi: ['セン'], kunyomi: ['ち'], strokes: 3, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '千', reading: 'せん', meaning: 'tysiąc' }, { word: '三千', reading: 'さんぜん', meaning: 'trzy tysiące' }, { word: '千円', reading: 'せんえん', meaning: 'tysiąc jenów' }] },
  { id: 'k014', kanji: '万', meaning: 'dziesięć tysięcy', onyomi: ['マン', 'バン'], kunyomi: [], strokes: 3, lesson: 'L02', category: 'number', grade: 'N5', examples: [{ word: '一万', reading: 'いちまん', meaning: 'dziesięć tysięcy' }, { word: '万国', reading: 'ばんこく', meaning: 'wszystkie kraje' }] },
  { id: 'k015', kanji: '白', meaning: 'biały', onyomi: ['ハク'], kunyomi: ['しろ', 'しろ-い'], strokes: 5, lesson: 'L02', category: 'nature', grade: 'N5', examples: [{ word: '白い', reading: 'しろい', meaning: 'biały' }, { word: '白人', reading: 'はくじん', meaning: 'osoba rasy białej' }] },
  { id: 'k016', kanji: '山', meaning: 'góra', onyomi: ['サン'], kunyomi: ['やま'], strokes: 3, lesson: 'L02', category: 'nature', grade: 'N5', examples: [{ word: '山', reading: 'やま', meaning: 'góra' }, { word: '富士山', reading: 'ふじさん', meaning: 'góra Fuji' }, { word: '火山', reading: 'かざん', meaning: 'wulkan' }] },

  // L03
  { id: 'k017', kanji: '明', meaning: 'jasny', onyomi: ['メイ', 'ミョウ'], kunyomi: ['あか-るい'], strokes: 8, lesson: 'L03', category: 'nature', grade: 'N5', examples: [{ word: '明るい', reading: 'あかるい', meaning: 'jasny' }, { word: '明日', reading: 'あした', meaning: 'jutro' }, { word: '説明', reading: 'せつめい', meaning: 'wyjaśnienie' }] },
  { id: 'k018', kanji: '日', meaning: 'dzień / słońce', onyomi: ['ニチ', 'ジツ'], kunyomi: ['ひ', 'か'], strokes: 4, lesson: 'L03', category: 'time', grade: 'N5', examples: [{ word: '日曜日', reading: 'にちようび', meaning: 'niedziela' }, { word: '日本', reading: 'にほん', meaning: 'Japonia' }, { word: '毎日', reading: 'まいにち', meaning: 'codziennie' }] },
  { id: 'k019', kanji: '土', meaning: 'ziemia / sobota', onyomi: ['ド', 'ト'], kunyomi: ['つち'], strokes: 3, lesson: 'L03', category: 'nature', grade: 'N5', examples: [{ word: '土曜日', reading: 'どようび', meaning: 'sobota' }, { word: '土地', reading: 'とち', meaning: 'ziemia / grunt' }] },
  { id: 'k020', kanji: '月', meaning: 'księżyc / miesiąc', onyomi: ['ゲツ', 'ガツ'], kunyomi: ['つき'], strokes: 4, lesson: 'L03', category: 'time', grade: 'N5', examples: [{ word: '月曜日', reading: 'げつようび', meaning: 'poniedziałek' }, { word: '一月', reading: 'いちがつ', meaning: 'styczeń' }, { word: '今月', reading: 'こんげつ', meaning: 'ten miesiąc' }] },
  { id: 'k021', kanji: '火', meaning: 'ogień / wtorek', onyomi: ['カ'], kunyomi: ['ひ'], strokes: 4, lesson: 'L03', category: 'nature', grade: 'N5', examples: [{ word: '火曜日', reading: 'かようび', meaning: 'wtorek' }, { word: '火', reading: 'ひ', meaning: 'ogień' }, { word: '火山', reading: 'かざん', meaning: 'wulkan' }] },
  { id: 'k022', kanji: '水', meaning: 'woda / środa', onyomi: ['スイ'], kunyomi: ['みず'], strokes: 4, lesson: 'L03', category: 'nature', grade: 'N5', examples: [{ word: '水曜日', reading: 'すいようび', meaning: 'środa' }, { word: '水', reading: 'みず', meaning: 'woda' }, { word: '水泳', reading: 'すいえい', meaning: 'pływanie' }] },
  { id: 'k023', kanji: '木', meaning: 'drzewo / czwartek', onyomi: ['モク', 'ボク'], kunyomi: ['き'], strokes: 4, lesson: 'L03', category: 'nature', grade: 'N5', examples: [{ word: '木曜日', reading: 'もくようび', meaning: 'czwartek' }, { word: '木', reading: 'き', meaning: 'drzewo' }] },
  { id: 'k024', kanji: '金', meaning: 'złoto / pieniądze / piątek', onyomi: ['キン', 'コン'], kunyomi: ['かね'], strokes: 8, lesson: 'L03', category: 'nature', grade: 'N5', examples: [{ word: '金曜日', reading: 'きんようび', meaning: 'piątek' }, { word: 'お金', reading: 'おかね', meaning: 'pieniądze' }, { word: '金', reading: 'きん', meaning: 'złoto' }] },

  // L04
  { id: 'k025', kanji: '子', meaning: 'dziecko', onyomi: ['シ', 'ス'], kunyomi: ['こ'], strokes: 3, lesson: 'L04', category: 'people', grade: 'N5', examples: [{ word: '子ども', reading: 'こども', meaning: 'dziecko' }, { word: '女の子', reading: 'おんなのこ', meaning: 'dziewczynka' }, { word: '男の子', reading: 'おとこのこ', meaning: 'chłopiec' }] },
  { id: 'k026', kanji: '円', meaning: 'jen / okrąg', onyomi: ['エン'], kunyomi: ['まる-い'], strokes: 4, lesson: 'L04', category: 'number', grade: 'N5', examples: [{ word: '百円', reading: 'ひゃくえん', meaning: 'sto jenów' }, { word: '円', reading: 'えん', meaning: 'jen' }] },
  { id: 'k027', kanji: '方', meaning: 'kierunek / osoba', onyomi: ['ホウ'], kunyomi: ['かた'], strokes: 4, lesson: 'L04', category: 'people', grade: 'N5', examples: [{ word: 'あの方', reading: 'あのかた', meaning: 'tamta osoba' }, { word: '夕方', reading: 'ゆうがた', meaning: 'wieczór' }, { word: '方法', reading: 'ほうほう', meaning: 'sposób' }] },
  { id: 'k028', kanji: '学', meaning: 'nauka / studiowanie', onyomi: ['ガク'], kunyomi: ['まな-ぶ'], strokes: 8, lesson: 'L04', category: 'school', grade: 'N5', examples: [{ word: '学生', reading: 'がくせい', meaning: 'uczeń / student' }, { word: '学校', reading: 'がっこう', meaning: 'szkoła' }, { word: '大学', reading: 'だいがく', meaning: 'uniwersytet' }] },
  { id: 'k029', kanji: '生', meaning: 'życie / rodzić się', onyomi: ['セイ', 'ショウ'], kunyomi: ['い-きる', 'う-まれる'], strokes: 5, lesson: 'L04', category: 'school', grade: 'N5', examples: [{ word: '先生', reading: 'せんせい', meaning: 'nauczyciel' }, { word: '学生', reading: 'がくせい', meaning: 'uczeń' }, { word: '生まれる', reading: 'うまれる', meaning: 'rodzić się' }] },
  { id: 'k030', kanji: '才', meaning: 'wiek / lata', onyomi: ['サイ'], kunyomi: [], strokes: 3, lesson: 'L04', category: 'people', grade: 'N5', examples: [{ word: '何才', reading: 'なんさい', meaning: 'ile lat' }, { word: '二十才', reading: 'はたち', meaning: 'dwadzieścia lat' }] },
  { id: 'k031', kanji: '年', meaning: 'rok / wiek', onyomi: ['ネン'], kunyomi: ['とし'], strokes: 6, lesson: 'L04', category: 'time', grade: 'N5', examples: [{ word: '今年', reading: 'ことし', meaning: 'ten rok' }, { word: '去年', reading: 'きょねん', meaning: 'zeszły rok' }, { word: '一年', reading: 'いちねん', meaning: 'jeden rok' }] },

  // L05
  { id: 'k032', kanji: '夕', meaning: 'wieczór', onyomi: ['セキ'], kunyomi: ['ゆう'], strokes: 3, lesson: 'L05', category: 'time', grade: 'N5', examples: [{ word: '夕方', reading: 'ゆうがた', meaning: 'wieczór' }, { word: '夕日', reading: 'ゆうひ', meaning: 'zachodzące słońce' }] },
  { id: 'k033', kanji: '古', meaning: 'stary', onyomi: ['コ'], kunyomi: ['ふる-い'], strokes: 5, lesson: 'L05', category: 'nature', grade: 'N5', examples: [{ word: '古い', reading: 'ふるい', meaning: 'stary' }, { word: '中古', reading: 'ちゅうこ', meaning: 'używany' }] },
  { id: 'k034', kanji: '寺', meaning: 'świątynia buddyjska', onyomi: ['ジ'], kunyomi: ['てら'], strokes: 6, lesson: 'L05', category: 'place', grade: 'N5', examples: [{ word: 'お寺', reading: 'おてら', meaning: 'świątynia buddyjska' }, { word: '金閣寺', reading: 'きんかくじ', meaning: 'Złoty Pawilon' }] },
  { id: 'k035', kanji: '早', meaning: 'wczesny / szybko', onyomi: ['ソウ'], kunyomi: ['はや-い'], strokes: 6, lesson: 'L05', category: 'time', grade: 'N5', examples: [{ word: '早い', reading: 'はやい', meaning: 'wczesny' }, { word: '早く', reading: 'haku', meaning: 'wcześnie' }] },
  { id: 'k036', kanji: '冬', meaning: 'zima', onyomi: ['トウ'], kunyomi: ['ふゆ'], strokes: 5, lesson: 'L05', category: 'time', grade: 'N5', examples: [{ word: '冬', reading: 'ふゆ', meaning: 'zima' }, { word: '冬休み', reading: 'ふゆやすみ', meaning: 'ferie zimowe' }] },
  { id: 'k037', kanji: '春', meaning: 'wiosna', onyomi: ['シュン'], kunyomi: ['はる'], strokes: 9, lesson: 'L05', category: 'time', grade: 'N5', examples: [{ word: '春', reading: 'はる', meaning: 'wiosna' }, { word: '春休み', reading: 'はるやすみ', meaning: 'przerwa wiosenna' }] },
  { id: 'k038', kanji: '秋', meaning: 'jesień', onyomi: ['シュウ'], kunyomi: ['あき'], strokes: 9, lesson: 'L05', category: 'time', grade: 'N5', examples: [{ word: '秋', reading: 'あき', meaning: 'jesień' }, { word: '秋分', reading: 'しゅうぶん', meaning: 'równonoc jesienna' }] },

  // L06
  { id: 'k039', kanji: '中', meaning: 'środek / wewnątrz', onyomi: ['チュウ'], kunyomi: ['なか'], strokes: 4, lesson: 'L06', category: 'direction', grade: 'N5', examples: [{ word: '中', reading: 'なか', meaning: 'środek' }, { word: '一日中', reading: 'いちにちじゅう', meaning: 'cały dzień' }, { word: '中国', reading: 'ちゅうごく', meaning: 'Chiny' }] },
  { id: 'k040', kanji: '大', meaning: 'duży', onyomi: ['ダイ', 'タイ'], kunyomi: ['おお-きい'], strokes: 3, lesson: 'L06', category: 'nature', grade: 'N5', examples: [{ word: '大きい', reading: 'おおきい', meaning: 'duży' }, { word: '大学', reading: 'だいがく', meaning: 'uniwersytet' }, { word: '大人', reading: 'おとな', meaning: 'dorosły' }] },
  { id: 'k041', kanji: '門', meaning: 'brama', onyomi: ['モン'], kunyomi: ['かど'], strokes: 8, lesson: 'L06', category: 'place', grade: 'N5', examples: [{ word: '門', reading: 'もん', meaning: 'brama' }, { word: '専門', reading: 'せんもん', meaning: 'specjalizacja' }] },
  { id: 'k042', kanji: '池', meaning: 'staw', onyomi: ['チ'], kunyomi: ['いけ'], strokes: 6, lesson: 'L06', category: 'nature', grade: 'N5', examples: [{ word: '池', reading: 'いけ', meaning: 'staw' }, { word: '電池', reading: 'でんち', meaning: 'bateria' }] },
  { id: 'k043', kanji: '小', meaning: 'mały', onyomi: ['ショウ'], kunyomi: ['ちい-さい', 'こ'], strokes: 3, lesson: 'L06', category: 'nature', grade: 'N5', examples: [{ word: '小さい', reading: 'ちいさい', meaning: 'mały' }, { word: '小学校', reading: 'しょうがっこう', meaning: 'szkoła podstawowa' }, { word: '小鳥', reading: 'ことり', meaning: 'ptaszek' }] },
  { id: 'k044', kanji: '外', meaning: 'na zewnątrz / obcy', onyomi: ['ガイ', 'ゲ'], kunyomi: ['そと', 'ほか'], strokes: 5, lesson: 'L06', category: 'direction', grade: 'N5', examples: [{ word: '外', reading: 'そと', meaning: 'na zewnątrz' }, { word: '外国', reading: 'がいこく', meaning: 'zagranica' }, { word: '外国人', reading: 'がいこくじん', meaning: 'obcokrajowiec' }] },
  { id: 'k045', kanji: '上', meaning: 'góra / nad', onyomi: ['ジョウ'], kunyomi: ['うえ', 'あ-がる'], strokes: 3, lesson: 'L06', category: 'direction', grade: 'N5', examples: [{ word: '上', reading: 'うえ', meaning: 'góra / na' }, { word: '上がる', reading: 'あがる', meaning: 'wznosić się' }, { word: '上手', reading: 'じょうず', meaning: 'biegły / zdolny' }] },
  { id: 'k046', kanji: '下', meaning: 'dół / pod', onyomi: ['カ', 'ゲ'], kunyomi: ['した', 'さ-がる'], strokes: 3, lesson: 'L06', category: 'direction', grade: 'N5', examples: [{ word: '下', reading: 'した', meaning: 'dół / pod' }, { word: '下がる', reading: 'さがる', meaning: 'opuszczać się' }, { word: '下手', reading: 'へた', meaning: 'słaby w czymś' }] },
  { id: 'k047', kanji: '馬', meaning: 'koń', onyomi: ['バ'], kunyomi: ['うま'], strokes: 10, lesson: 'L06', category: 'nature', grade: 'N5', examples: [{ word: '馬', reading: 'うま', meaning: 'koń' }, { word: '子馬', reading: 'こうま', meaning: 'źrebię' }] },
  { id: 'k048', kanji: '牛', meaning: 'krowa / byk', onyomi: ['ギュウ'], kunyomi: ['うし'], strokes: 4, lesson: 'L06', category: 'nature', grade: 'N5', examples: [{ word: '牛', reading: 'うし', meaning: 'krowa' }, { word: '牛乳', reading: 'ぎゅうにゅう', meaning: 'mleko' }, { word: '牛肉', reading: 'ぎゅうにく', meaning: 'wołowina' }] },
  { id: 'k049', kanji: '犬', meaning: 'pies', onyomi: ['ケン'], kunyomi: ['いぬ'], strokes: 4, lesson: 'L06', category: 'nature', grade: 'N5', examples: [{ word: '犬', reading: 'いぬ', meaning: 'pies' }, { word: '子犬', reading: 'こいぬ', meaning: 'szczeniak' }] },
  { id: 'k050', kanji: '本', meaning: 'książka / źródło', onyomi: ['ホン'], kunyomi: ['もと'], strokes: 5, lesson: 'L06', category: 'school', grade: 'N5', examples: [{ word: '本', reading: 'ほん', meaning: 'książka' }, { word: '日本', reading: 'にほん', meaning: 'Japonia' }, { word: '山本', reading: 'やまもと', meaning: 'Yamamoto' }] },
  { id: 'k051', kanji: '間', meaning: 'między / przedział czasu', onyomi: ['カン', 'ケン'], kunyomi: ['あいだ', 'ま'], strokes: 12, lesson: 'L06', category: 'time', grade: 'N5', examples: [{ word: '間', reading: 'あいだ', meaning: 'między' }, { word: '時間', reading: 'じかん', meaning: 'czas / godzina' }, { word: '間に合う', reading: 'まニアう', meaning: 'zdążyć' }] },

  // L07
  { id: 'k052', kanji: '天', meaning: 'niebo / niebiosa', onyomi: ['テン'], kunyomi: ['あめ'], strokes: 4, lesson: 'L07', category: 'nature', grade: 'N5', examples: [{ word: '天気', reading: 'てんき', meaning: 'pogoda' }, { word: '天国', reading: 'てんごく', meaning: 'raj / niebiosa' }] },
  { id: 'k053', kanji: '気', meaning: 'duch / energia / nastrój', onyomi: ['キ'], kunyomi: [], strokes: 6, lesson: 'L07', category: 'nature', grade: 'N5', examples: [{ word: '天気', reading: 'てんき', meaning: 'pogoda' }, { word: '元気', reading: 'げんき', meaning: 'zdrowy / pełen energii' }, { word: '電気', reading: 'でんき', meaning: 'prąd' }] },
  { id: 'k054', kanji: '雨', meaning: 'deszcz', onyomi: ['ウ'], kunyomi: ['あめ'], strokes: 8, lesson: 'L07', category: 'nature', grade: 'N5', examples: [{ word: '雨', reading: 'あめ', meaning: 'deszcz' }, { word: '大雨', reading: 'おおあめ', meaning: 'ulewa' }] },
  { id: 'k055', kanji: '川', meaning: 'rzeka', onyomi: ['セン'], kunyomi: ['かわ'], strokes: 3, lesson: 'L07', category: 'nature', grade: 'N5', examples: [{ word: '川', reading: 'かわ', meaning: 'rzeka' }, { word: '小川', reading: 'おがわ', meaning: 'strumyk' }] },
  { id: 'k056', kanji: '手', meaning: 'ręka', onyomi: ['シュ'], kunyomi: ['て'], strokes: 4, lesson: 'L07', category: 'body', grade: 'N5', examples: [{ word: '手', reading: 'て', meaning: 'ręka' }, { word: '上手', reading: 'じょうず', meaning: 'zdolny' }, { word: '下手', reading: 'へた', meaning: 'niezdarny' }] },
  { id: 'k057', kanji: '東', meaning: 'wschód', onyomi: ['トウ'], kunyomi: ['ひがし'], strokes: 8, lesson: 'L07', category: 'direction', grade: 'N5', examples: [{ word: '東', reading: 'ひがし', meaning: 'wschód' }, { word: '東京', reading: 'とうきょう', meaning: 'Tokio' }, { word: '東口', reading: 'ひがしぐち', meaning: 'wyjście wschodnie' }] },
  { id: 'k058', kanji: '林', meaning: 'lasek', onyomi: ['リン'], kunyomi: ['はやし'], strokes: 8, lesson: 'L07', category: 'nature', grade: 'N5', examples: [{ word: '林', reading: 'はやし', meaning: 'lasek' }, { word: '小林', reading: 'こばやし', meaning: 'Kobayashi' }] },
  { id: 'k059', kanji: '雪', meaning: 'śnieg', onyomi: ['セツ'], kunyomi: ['ゆき'], strokes: 11, lesson: 'L07', category: 'nature', grade: 'N5', examples: [{ word: '雪', reading: 'ゆき', meaning: 'śnieg' }, { word: '大雪', reading: 'おおゆき', meaning: 'śnieżyca' }] },
  { id: 'k060', kanji: '太', meaning: 'gruby', onyomi: ['タイ'], kunyomi: ['ふと-い'], strokes: 4, lesson: 'L07', category: 'nature', grade: 'N5', examples: [{ word: '太い', reading: 'ふとい', meaning: 'gruby' }, { word: '太陽', reading: 'たいよう', meaning: 'słońce' }] },
  { id: 'k061', kanji: '南', meaning: 'południe', onyomi: ['ナン'], kunyomi: ['みなみ'], strokes: 9, lesson: 'L07', category: 'direction', grade: 'N5', examples: [{ word: '南', reading: 'みなみ', meaning: 'południe' }, { word: '南口', reading: 'みなみぐち', meaning: 'wyjście południowe' }] },
  { id: 'k062', kanji: '北', meaning: 'północ', onyomi: ['ホク'], kunyomi: ['きた'], strokes: 5, lesson: 'L07', category: 'direction', grade: 'N5', examples: [{ word: '北', reading: 'きた', meaning: 'północ' }, { word: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' }, { word: '北口', reading: 'きたぐち', meaning: 'wyjście północne' }] },
  { id: 'k063', kanji: '西', meaning: 'zachód', onyomi: ['セイ', 'サイ'], kunyomi: ['にし'], strokes: 6, lesson: 'L07', category: 'direction', grade: 'N5', examples: [{ word: '西', reading: 'にし', meaning: 'zachód' }, { word: '西口', reading: 'にしぐち', meaning: 'wyjście zachodnie' }] },

  // L08
  { id: 'k064', kanji: '時', meaning: 'czas / godzina', onyomi: ['ジ'], kunyomi: ['とき'], strokes: 10, lesson: 'L08', category: 'time', grade: 'N5', examples: [{ word: '時間', reading: 'じかん', meaning: 'czas' }, { word: '時', reading: 'とき', meaning: 'kiedy / czas' }, { word: '時計', reading: 'とけい', meaning: 'zegarek' }] },
  { id: 'k065', kanji: '女', meaning: 'kobieta', onyomi: ['ジョ'], kunyomi: ['おんな'], strokes: 3, lesson: 'L08', category: 'people', grade: 'N5', examples: [{ word: '女の人', reading: 'おんなのひと', meaning: 'kobieta' }, { word: '女の子', reading: 'おんなのこ', meaning: 'dziewczynka' }] },
  { id: 'k066', kanji: '会', meaning: 'spotykać / zebranie', onyomi: ['カイ'], kunyomi: ['あ-う'], strokes: 6, lesson: 'L08', category: 'people', grade: 'N5', examples: [{ word: '会う', reading: 'あう', meaning: 'spotykać' }, { word: '会社', reading: 'かいしゃ', meaning: 'firma' }, { word: '会話', reading: 'かいわ', meaning: 'rozmowa' }] },
  { id: 'k067', kanji: '父', meaning: 'ojciec', onyomi: ['フ'], kunyomi: ['ちち'], strokes: 4, lesson: 'L08', category: 'people', grade: 'N5', examples: [{ word: '父', reading: 'ちち', meaning: 'mój ojciec' }, { word: 'お父さん', reading: 'おとうさん', meaning: 'ojciec' }] },
  { id: 'k068', kanji: '母', meaning: 'matka', onyomi: ['ボ'], kunyomi: ['はは'], strokes: 5, lesson: 'L08', category: 'people', grade: 'N5', examples: [{ word: '母', reading: 'はは', meaning: 'moja matka' }, { word: 'お母さん', reading: 'おかあさん', meaning: 'matka' }] },
  { id: 'k069', kanji: '先', meaning: 'poprzedni / przód', onyomi: ['セン'], kunyomi: ['さき'], strokes: 6, lesson: 'L08', category: 'people', grade: 'N5', examples: [{ word: '先生', reading: 'せんせい', meaning: 'nauczyciel' }, { word: '先週', reading: 'せんしゅう', meaning: 'ubiegły tydzień' }, { word: 'お先に', reading: 'おさきに', meaning: 'przodem / do zobaczenia' }] },
  { id: 'k070', kanji: '兄', meaning: 'starszy brat', onyomi: ['ケイ', 'キョウ'], kunyomi: ['あに'], strokes: 5, lesson: 'L08', category: 'people', grade: 'N5', examples: [{ word: '兄', reading: 'あに', meaning: 'mój starszy brat' }, { word: 'お兄さん', reading: 'おにいさん', meaning: 'starszy brat' }] },
  { id: 'k071', kanji: '別', meaning: 'inny / rozdzielać', onyomi: ['ベツ'], kunyomi: ['わか-れる'], strokes: 7, lesson: 'L08', category: 'people', grade: 'N5', examples: [{ word: '別れる', reading: 'わかれる', meaning: 'rozstawać się' }, { word: '特別', reading: 'とくべつ', meaning: 'specjalny' }] },

  // L09
  { id: 'k072', kanji: '電', meaning: 'prąd / elektryczność', onyomi: ['デン'], kunyomi: [], strokes: 13, lesson: 'L09', category: 'nature', grade: 'N5', examples: [{ word: '電気', reading: 'でんき', meaning: 'prąd / światło' }, { word: '電車', reading: 'でんしゃ', meaning: 'pociąg' }, { word: '電話', reading: 'でんわ', meaning: 'telefon' }] },
  { id: 'k073', kanji: '工', meaning: 'rzemiosło / inżynieria', onyomi: ['コウ', 'ク'], kunyomi: [], strokes: 3, lesson: 'L09', category: 'school', grade: 'N5', examples: [{ word: '工学', reading: 'こうがく', meaning: 'inżynieria' }, { word: '工場', reading: 'こうじょう', meaning: 'fabryka' }] },
  { id: 'k074', kanji: '行', meaning: 'iść / jechać', onyomi: ['コウ', 'ギョウ'], kunyomi: ['い-く', 'ゆ-く'], strokes: 6, lesson: 'L09', category: 'transport', grade: 'N5', examples: [{ word: '行く', reading: 'いく', meaning: 'iść' }, { word: '旅行', reading: 'りょこう', meaning: 'podróż' }, { word: '銀行', reading: 'ぎんこう', meaning: 'bank' }] },
  { id: 'k075', kanji: '来', meaning: 'przychodzić / przyszły', onyomi: ['ライ'], kunyomi: ['く-る'], strokes: 7, lesson: 'L09', category: 'transport', grade: 'N5', examples: [{ word: '来る', reading: 'くる', meaning: 'przychodzić' }, { word: '来週', reading: 'らいしゅう', meaning: 'przyszły tydzień' }, { word: '来年', reading: 'らいねん', meaning: 'przyszły rok' }] },
  { id: 'k076', kanji: '休', meaning: 'odpoczywać', onyomi: ['キュウ'], kunyomi: ['やす-む'], strokes: 6, lesson: 'L09', category: 'people', grade: 'N5', examples: [{ word: '休む', reading: 'やすむ', meaning: 'odpoczywać' }, { word: '休み', reading: 'やすみ', meaning: 'odpoczynek / urlop' }, { word: '夏休み', reading: 'なつやすみ', meaning: 'wakacje' }] },
  { id: 'k077', kanji: '多', meaning: 'dużo / liczny', onyomi: ['タ'], kunyomi: ['おお-い'], strokes: 6, lesson: 'L09', category: 'nature', grade: 'N5', examples: [{ word: '多い', reading: 'おおい', meaning: 'dużo' }, { word: '多分', reading: 'たぶん', meaning: 'prawdopodobnie' }] },
  { id: 'k078', kanji: '文', meaning: 'zdanie / literatura', onyomi: ['ブン', 'モン'], kunyomi: ['ふみ'], strokes: 4, lesson: 'L09', category: 'school', grade: 'N5', examples: [{ word: '文学', reading: 'ぶんがく', meaning: 'literatura' }, { word: '文法', reading: 'ぶんぽう', meaning: 'gramatyka' }, { word: '作文', reading: 'さくぶん', meaning: 'wypracowanie' }] },
  { id: 'k079', kanji: '正', meaning: 'poprawny / prawy', onyomi: ['セイ', 'ショウ'], kunyomi: ['ただ-しい'], strokes: 5, lesson: 'L09', category: 'nature', grade: 'N5', examples: [{ word: '正しい', reading: 'ただしい', meaning: 'poprawny' }, { word: 'お正月', reading: 'おしょうがつ', meaning: 'Nowy Rok' }] },
  { id: 'k080', kanji: '死', meaning: 'śmierć', onyomi: ['シ'], kunyomi: ['し-ぬ'], strokes: 6, lesson: 'L09', category: 'people', grade: 'N5', examples: [{ word: '死ぬ', reading: 'しぬ', meaning: 'umierać' }, { word: '死', reading: 'し', meaning: 'śmierć' }] },
  { id: 'k081', kanji: '広', meaning: 'szeroki / przestronny', onyomi: ['コウ'], kunyomi: ['ひろ-い'], strokes: 5, lesson: 'L09', category: 'nature', grade: 'N5', examples: [{ word: '広い', reading: 'ひろい', meaning: 'szeroki' }, { word: '広島', reading: 'ひろしま', meaning: 'Hiroszima' }] },
  { id: 'k082', kanji: '少', meaning: 'mało / trochę', onyomi: ['ショウ'], kunyomi: ['すく-ない', 'すこ-し'], strokes: 4, lesson: 'L09', category: 'nature', grade: 'N5', examples: [{ word: '少ない', reading: 'すくない', meaning: 'mało' }, { word: '少し', reading: 'すこし', meaning: 'trochę' }, { word: '少年', reading: 'しょうねん', meaning: 'chłopiec' }] },
  { id: 'k083', kanji: '若', meaning: 'młody', onyomi: ['ジャク'], kunyomi: ['わか-い'], strokes: 8, lesson: 'L09', category: 'people', grade: 'N5', examples: [{ word: '若い', reading: 'わかい', meaning: 'młody' }, { word: '若者', reading: 'わかもの', meaning: 'młodzież' }] },
  { id: 'k084', kanji: '化', meaning: 'zmiana / przekształcenie', onyomi: ['カ', 'ケ'], kunyomi: ['ば-ける'], strokes: 4, lesson: 'L09', category: 'school', grade: 'N5', examples: [{ word: '化学', reading: 'かがく', meaning: 'chemia' }, { word: '文化', reading: 'ぶんか', meaning: 'kultura' }] },
  { id: 'k085', kanji: '安', meaning: 'tani / spokojny', onyomi: ['アン'], kunyomi: ['やす-い'], strokes: 6, lesson: 'L09', category: 'nature', grade: 'N5', examples: [{ word: '安い', reading: 'やすい', meaning: 'tani' }, { word: '安心', reading: 'あんしん', meaning: 'spokój ducha' }, { word: '安全', reading: 'あんぜん', meaning: 'bezpieczeństwo' }] },
  { id: 'k086', kanji: '全', meaning: 'cały / wszystko', onyomi: ['ゼン'], kunyomi: ['まった-く'], strokes: 6, lesson: 'L09', category: 'nature', grade: 'N5', examples: [{ word: '全部', reading: 'ぜんぶ', meaning: 'wszystko' }, { word: '安全', reading: 'あんぜん', meaning: 'bezpieczny' }, { word: '全国', reading: 'ぜんこく', meaning: 'cały kraj' }] },

  // L10
  { id: 'k087', kanji: '医', meaning: 'medycyna / lekarz', onyomi: ['イ'], kunyomi: [], strokes: 7, lesson: 'L10', category: 'people', grade: 'N5', examples: [{ word: '医者', reading: 'いしゃ', meaning: 'lekarz' }, { word: '医学', reading: 'いがく', meaning: 'medycyna' }] },
  { id: 'k088', kanji: '者', meaning: 'osoba / specjalista', onyomi: ['シャ'], kunyomi: ['もの'], strokes: 8, lesson: 'L10', category: 'people', grade: 'N5', examples: [{ word: '医者', reading: 'いしゃ', meaning: 'lekarz' }, { word: '学者', reading: 'がくしゃ', meaning: 'uczony' }, { word: '若者', reading: 'わかもの', meaning: 'młodzież' }] },
  { id: 'k089', kanji: '言', meaning: 'mówić / słowo', onyomi: ['ゲン', 'ゴン'], kunyomi: ['い-う', 'こと'], strokes: 7, lesson: 'L10', category: 'people', grade: 'N5', examples: [{ word: '言う', reading: 'いう', meaning: 'mówić' }, { word: '言葉', reading: 'ことば', meaning: 'słowo / język' }] },
  { id: 'k090', kanji: '反', meaning: 'przeciw / anty-', onyomi: ['ハン'], kunyomi: ['そ-る'], strokes: 4, lesson: 'L10', category: 'nature', grade: 'N5', examples: [{ word: '反対', reading: 'はんたい', meaning: 'przeciwieństwo / sprzeciw' }, { word: '反省', reading: 'はんせい', meaning: 'refleksja / skrucha' }] },
  { id: 'k091', kanji: '対', meaning: 'naprzeciw / para', onyomi: ['タイ', 'ツイ'], kunyomi: [], strokes: 7, lesson: 'L10', category: 'nature', grade: 'N5', examples: [{ word: '反対', reading: 'はんたい', meaning: 'przeciwny' }, { word: '対決', reading: 'たいけつ', meaning: 'konfrontacja' }] },
  { id: 'k092', kanji: '良', meaning: 'dobry', onyomi: ['リョウ'], kunyomi: ['よ-い'], strokes: 7, lesson: 'L10', category: 'nature', grade: 'N5', examples: [{ word: '良い', reading: 'よい', meaning: 'dobry' }, { word: '仲良し', reading: 'なかよし', meaning: 'dobry przyjaciel' }] },
  { id: 'k093', kanji: '右', meaning: 'prawy', onyomi: ['ウ', 'ユウ'], kunyomi: ['みぎ'], strokes: 5, lesson: 'L10', category: 'direction', grade: 'N5', examples: [{ word: '右', reading: 'みぎ', meaning: 'prawy' }, { word: '右手', reading: 'みぎて', meaning: 'prawa ręka' }, { word: '右側', reading: 'みぎがわ', meaning: 'prawa strona' }] },
  { id: 'k094', kanji: '左', meaning: 'lewy', onyomi: ['サ'], kunyomi: ['ひだり'], strokes: 5, lesson: 'L10', category: 'direction', grade: 'N5', examples: [{ word: '左', reading: 'ひだり', meaning: 'lewy' }, { word: '左手', reading: 'ひだりて', meaning: 'lewa ręka' }, { word: '左右', reading: 'さゆう', meaning: 'lewo i prawo' }] },
  { id: 'k095', kanji: '玉', meaning: 'kula / moneta / klejnot', onyomi: ['ギョク'], kunyomi: ['たま'], strokes: 5, lesson: 'L10', category: 'nature', grade: 'N5', examples: [{ word: '百円玉', reading: 'ひゃくえんだま', meaning: 'moneta 100-jenowa' }, { word: '目玉', reading: 'めだま', meaning: 'gałka oczna' }] },
  { id: 'k096', kanji: '戸', meaning: 'drzwi', onyomi: ['コ'], kunyomi: ['と'], strokes: 4, lesson: 'L10', category: 'place', grade: 'N5', examples: [{ word: '戸', reading: 'と', meaning: 'drzwi' }, { word: '神戸', reading: 'こうべ', meaning: 'Kobe' }] },
  { id: 'k097', kanji: '開', meaning: 'otwierać', onyomi: ['カイ'], kunyomi: ['あ-ける', 'ひら-く'], strokes: 12, lesson: 'L10', category: 'home', grade: 'N5', examples: [{ word: '開ける', reading: 'あける', meaning: 'otwierać' }, { word: '開く', reading: 'ひらく', meaning: 'otwierać (książkę)' }] },
  { id: 'k098', kanji: '石', meaning: 'kamień', onyomi: ['セキ'], kunyomi: ['いし'], strokes: 5, lesson: 'L10', category: 'nature', grade: 'N5', examples: [{ word: '石', reading: 'いし', meaning: 'kamień' }, { word: '石油', reading: 'せきゆ', meaning: 'ropa naftowa' }] },
  { id: 'k099', kanji: '閉', meaning: 'zamykać', onyomi: ['ヘイ'], kunyomi: ['し-める', 'と-じる'], strokes: 11, lesson: 'L10', category: 'home', grade: 'N5', examples: [{ word: '閉める', reading: 'しめる', meaning: 'zamykać' }, { word: '閉じる', reading: 'とじる', meaning: 'zamykać (książkę)' }] },
  { id: 'k100', kanji: '友', meaning: 'przyjaciel', onyomi: ['ユウ'], kunyomi: ['とも'], strokes: 4, lesson: 'L10', category: 'people', grade: 'N5', examples: [{ word: '友達', reading: 'ともだち', meaning: 'przyjaciel' }, { word: '友人', reading: 'ゆうじん', meaning: 'przyjaciel (formalnie)' }] },
  { id: 'k101', kanji: '国', meaning: 'kraj / państwo', onyomi: ['コク'], kunyomi: ['くに'], strokes: 8, lesson: 'L10', category: 'place', grade: 'N5', examples: [{ word: '国', reading: 'くに', meaning: 'kraj' }, { word: '外国', reading: 'がいこく', meaning: 'zagranica' }, { word: '中国', reading: 'ちゅうごく', meaning: 'Chiny' }] },

  // N5 Essentials & Cross-lesson additions
  { id: 'k102', kanji: '前', meaning: 'przed / z przodu', onyomi: ['ゼン'], kunyomi: ['まえ'], strokes: 9, lesson: 'L11', category: 'direction', grade: 'N5', examples: [{ word: '前', reading: 'まえ', meaning: 'przed / przód' }, { word: '名前', reading: 'なまえ', meaning: 'imię' }, { word: '午前', reading: 'ごぜん', meaning: 'przed południem' }] },
  { id: 'k103', kanji: '後', meaning: 'po / z tyłu', onyomi: ['ゴ', 'コウ'], kunyomi: ['うし-ろ', 'あと'], strokes: 9, lesson: 'N5', category: 'direction', grade: 'N5', examples: [{ word: '後ろ', reading: 'うしろ', meaning: 'z tyłu' }, { word: '午後', reading: 'ごご', meaning: 'po południu' }, { word: '後で', reading: 'あとで', meaning: 'później' }] },
  { id: 'k104', kanji: '車', meaning: 'samochód / pojazd', onyomi: ['シャ'], kunyomi: ['くるま'], strokes: 7, lesson: 'L11', category: 'transport', grade: 'N5', examples: [{ word: '車', reading: 'くるま', meaning: 'samochód' }, { word: '電車', reading: 'でんしゃ', meaning: 'pociąg' }, { word: '自転車', reading: 'じてんしゃ', meaning: 'rower' }] },
  { id: 'k105', kanji: '校', meaning: 'szkoła', onyomi: ['コウ'], kunyomi: [], strokes: 10, lesson: 'L14', category: 'school', grade: 'N5', examples: [{ word: '学校', reading: 'がっこう', meaning: 'szkoła' }, { word: '高校', reading: 'こうこう', meaning: 'liceum' }] },
  { id: 'k106', kanji: '見', meaning: 'widzieć / patrzeć', onyomi: ['ケン'], kunyomi: ['み-る'], strokes: 7, lesson: 'L12', category: 'people', grade: 'N5', examples: [{ word: '見る', reading: 'みる', meaning: 'widzieć / patrzeć' }, { word: '見せる', reading: 'みせる', meaning: 'pokazywać' }, { word: '見学', reading: 'けんがく', meaning: 'oglądanie edukacyjne' }] },
  { id: 'k107', kanji: '書', meaning: 'pisać / pismo', onyomi: ['ショ'], kunyomi: ['か-く'], strokes: 10, lesson: 'L12', category: 'school', grade: 'N5', examples: [{ word: '書く', reading: 'かく', meaning: 'pisać' }, { word: '教科書', reading: 'きょうかしょ', meaning: 'podręcznik' }, { word: '辞書', reading: 'じしょ', meaning: 'słownik' }] },
  { id: 'k108', kanji: '読', meaning: 'czytać', onyomi: ['ドク'], kunyomi: ['よ-む'], strokes: 14, lesson: 'N5', category: 'school', grade: 'N5', examples: [{ word: '読む', reading: 'よむ', meaning: 'czytać' }, { word: '読書', reading: 'どくしょ', meaning: 'czytanie' }] },
  { id: 'k109', kanji: '語', meaning: 'język / słowo', onyomi: ['ゴ'], kunyomi: ['かた-る'], strokes: 14, lesson: 'L12', category: 'school', grade: 'N5', examples: [{ word: '日本語', reading: 'にほんご', meaning: 'język japoński' }, { word: '英語', reading: 'えいご', meaning: 'język angielski' }, { word: '単語', reading: 'たんご', meaning: 'słówko' }] },
  { id: 'k110', kanji: '何', meaning: 'co / ile', onyomi: ['カ'], kunyomi: ['なに', 'なん'], strokes: 7, lesson: 'L13', category: 'nature', grade: 'N5', examples: [{ word: '何', reading: 'なに', meaning: 'co' }, { word: '何時', reading: 'なんじ', meaning: 'która godzina' }, { word: '何人', reading: 'なんにん', meaning: 'ile osób' }] },

  // L11
  { id: 'k111', kanji: '地', meaning: 'ziemia / grunt', onyomi: ["チ","ジ"], kunyomi: [], strokes: 6, lesson: 'L11', category: 'place', grade: 'N5', examples: [{"word":"地図","reading":"ちず","meaning":"mapa"},{"word":"土地","reading":"とち","meaning":"ziemia / grunt"},{"word":"地下鉄","reading":"ちかてつ","meaning":"metro"}] },
  { id: 'k112', kanji: '図', meaning: 'rysunek / plan / mapa', onyomi: ["ズ","ト"], kunyomi: ["はか-る"], strokes: 7, lesson: 'L11', category: 'place', grade: 'N5', examples: [{"word":"地図","reading":"ちず","meaning":"mapa"},{"word":"図書館","reading":"としょかん","meaning":"biblioteka"},{"word":"図書室","reading":"としょしつ","meaning":"czytelnia"}] },
  { id: 'k113', kanji: '駅', meaning: 'stacja / dworzec', onyomi: ["エキ"], kunyomi: [], strokes: 14, lesson: 'L11', category: 'transport', grade: 'N5', examples: [{"word":"駅","reading":"えき","meaning":"stacja / dworzec"},{"word":"駅員","reading":"えきいん","meaning":"pracownik stacji"},{"word":"駅前","reading":"えきまえ","meaning":"przed stacją"}] },
  { id: 'k114', kanji: '半', meaning: 'pół / połowa', onyomi: ["ハン"], kunyomi: ["なか-ば"], strokes: 5, lesson: 'L11', category: 'time', grade: 'N5', examples: [{"word":"二時半","reading":"にじはん","meaning":"wpół do trzeciej"},{"word":"半分","reading":"はんぶん","meaning":"połowa"},{"word":"半年","reading":"はんとし","meaning":"pół roku"}] },
  { id: 'k115', kanji: '海', meaning: 'morze', onyomi: ["カイ"], kunyomi: ["うみ"], strokes: 9, lesson: 'L11', category: 'nature', grade: 'N5', examples: [{"word":"海","reading":"うみ","meaning":"morze"},{"word":"海外","reading":"かいがい","meaning":"zagranica"},{"word":"海岸","reading":"かいがん","meaning":"wybrzeże"}] },
  { id: 'k116', kanji: '高', meaning: 'wysoki / drogi', onyomi: ["コウ"], kunyomi: ["たか-い"], strokes: 10, lesson: 'L11', category: 'nature', grade: 'N5', examples: [{"word":"高い","reading":"たかい","meaning":"wysoki / drogi"},{"word":"高校","reading":"こうこう","meaning":"liceum"},{"word":"円高","reading":"えんだか","meaning":"silny jen"}] },
  { id: 'k117', kanji: '鳥', meaning: 'ptak', onyomi: ["チョウ"], kunyomi: ["とり"], strokes: 11, lesson: 'L11', category: 'nature', grade: 'N5', examples: [{"word":"鳥","reading":"とり","meaning":"ptak"},{"word":"小鳥","reading":"ことり","meaning":"ptaszek"},{"word":"焼き鳥","reading":"やきとり","meaning":"pieczony kurczak"}] },
  { id: 'k118', kanji: '泳', meaning: 'pływać', onyomi: ["エイ"], kunyomi: ["およ-ぐ"], strokes: 8, lesson: 'L11', category: 'nature', grade: 'N5', examples: [{"word":"泳ぐ","reading":"およぐ","meaning":"pływać"},{"word":"水泳","reading":"すいえい","meaning":"pływanie"}] },
  { id: 'k119', kanji: '岩', meaning: 'skała', onyomi: ["ガン"], kunyomi: ["いわ"], strokes: 8, lesson: 'L11', category: 'nature', grade: 'N5', examples: [{"word":"岩","reading":"いわ","meaning":"skała"},{"word":"岩山","reading":"いわやま","meaning":"skalista góra"}] },
  { id: 'k120', kanji: '入', meaning: 'wchodzić / wkładać', onyomi: ["ニュウ"], kunyomi: ["はい-る","い-れる"], strokes: 2, lesson: 'L11', category: 'direction', grade: 'N5', examples: [{"word":"入る","reading":"はいる","meaning":"wchodzić"},{"word":"入れる","reading":"いれる","meaning":"wkładać"},{"word":"入口","reading":"いりぐち","meaning":"wejście"}] },
  { id: 'k121', kanji: '家', meaning: 'dom / rodzina', onyomi: ["カ","ケ"], kunyomi: ["いえ","や"], strokes: 10, lesson: 'L11', category: 'home', grade: 'N5', examples: [{"word":"家","reading":"いえ","meaning":"dom"},{"word":"家族","reading":"かぞく","meaning":"rodzina"},{"word":"家内","reading":"かない","meaning":"moja żona"}] },
  { id: 'k122', kanji: '毎', meaning: 'każdy / co', onyomi: ["マイ"], kunyomi: [], strokes: 6, lesson: 'L11', category: 'time', grade: 'N5', examples: [{"word":"毎日","reading":"まいにち","meaning":"codziennie"},{"word":"毎朝","reading":"まいあさ","meaning":"co rano"},{"word":"毎週","reading":"まいしゅう","meaning":"co tydzień"}] },
  { id: 'k123', kanji: '重', meaning: 'ciężki / ważny', onyomi: ["ジュウ","チョウ"], kunyomi: ["おも-い","かさ-ねる"], strokes: 9, lesson: 'L11', category: 'nature', grade: 'N5', examples: [{"word":"重い","reading":"おもい","meaning":"ciężki"},{"word":"体重","reading":"たいじゅう","meaning":"waga ciała"},{"word":"重要","reading":"じゅうよう","meaning":"ważny"}] },
  { id: 'k124', kanji: '計', meaning: 'mierzyć / plan', onyomi: ["ケイ"], kunyomi: ["はか-る"], strokes: 9, lesson: 'L11', category: 'nature', grade: 'N5', examples: [{"word":"時計","reading":"とけい","meaning":"zegarek"},{"word":"計画","reading":"けいかく","meaning":"plan"},{"word":"計算","reading":"けいさん","meaning":"obliczenia"}] },
  { id: 'k125', kanji: '室', meaning: 'pokój / sala', onyomi: ["シツ"], kunyomi: ["むろ"], strokes: 9, lesson: 'L11', category: 'place', grade: 'N5', examples: [{"word":"教室","reading":"きょうしつ","meaning":"sala lekcyjna"},{"word":"図書室","reading":"としょしつ","meaning":"czytelnia"},{"word":"研究室","reading":"けんきゅうしつ","meaning":"gabinet / laboratorium"}] },
  { id: 'k126', kanji: '名', meaning: 'imię / nazwisko / sława', onyomi: ["メイ","ミョウ"], kunyomi: ["な"], strokes: 6, lesson: 'L11', category: 'people', grade: 'N5', examples: [{"word":"名前","reading":"なまえ","meaning":"imię / nazwisko"},{"word":"有名","reading":"ゆうめい","meaning":"sławny"},{"word":"名字","reading":"みょうじ","meaning":"nazwisko"}] },
  { id: 'k127', kanji: '字', meaning: 'znak / litera', onyomi: ["ジ"], kunyomi: ["あざ"], strokes: 6, lesson: 'L11', category: 'school', grade: 'N5', examples: [{"word":"字","reading":"じ","meaning":"znak / litera"},{"word":"漢字","reading":"かんじ","meaning":"znaki kanji"},{"word":"文字","reading":"もじ","meaning":"litera / pismo"}] },

  // L12
  { id: 'k128', kanji: '暗', meaning: 'ciemny', onyomi: ["アン"], kunyomi: ["くら-い"], strokes: 13, lesson: 'L12', category: 'nature', grade: 'N5', examples: [{"word":"暗い","reading":"くらい","meaning":"ciemny"},{"word":"暗記","reading":"あんき","meaning":"zapamiętywanie"}] },
  { id: 'k129', kanji: '音', meaning: 'dźwięk', onyomi: ["オン","イン"], kunyomi: ["おと","ね"], strokes: 9, lesson: 'L12', category: 'nature', grade: 'N5', examples: [{"word":"音","reading":"おと","meaning":"dźwięk"},{"word":"発音","reading":"はつおん","meaning":"wymowa"},{"word":"音楽","reading":"おんがく","meaning":"muzyka"}] },
  { id: 'k130', kanji: '説', meaning: 'wyjaśniać / teoria', onyomi: ["セツ","ゼツ"], kunyomi: ["と-く"], strokes: 14, lesson: 'L12', category: 'school', grade: 'N5', examples: [{"word":"説明","reading":"せつめい","meaning":"wyjaśnienie"},{"word":"小説","reading":"しょうせつ","meaning":"powieść"}] },
  { id: 'k131', kanji: '番', meaning: 'numer / kolej', onyomi: ["バン"], kunyomi: [], strokes: 12, lesson: 'L12', category: 'number', grade: 'N5', examples: [{"word":"番号","reading":"ばんごう","meaning":"numer"},{"word":"一番","reading":"いちばん","meaning":"numer jeden / najbardziej"},{"word":"交番","reading":"こうばん","meaning":"posterunek policji"}] },
  { id: 'k132', kanji: '号', meaning: 'numer / oznaczenie', onyomi: ["ゴウ"], kunyomi: [], strokes: 5, lesson: 'L12', category: 'number', grade: 'N5', examples: [{"word":"番号","reading":"ばんごう","meaning":"numer"},{"word":"電話番号","reading":"でんわばんごう","meaning":"numer telefonu"},{"word":"信号","reading":"しんごう","meaning":"sygnalizacja świetlna"}] },
  { id: 'k133', kanji: '引', meaning: 'ciągnąć / odejmować', onyomi: ["イン"], kunyomi: ["ひ-く","ひ-ける"], strokes: 4, lesson: 'L12', category: 'nature', grade: 'N5', examples: [{"word":"引く","reading":"ひく","meaning":"ciągnąć"},{"word":"引き出し","reading":"ひきだし","meaning":"szuflada"},{"word":"引き分け","reading":"ひきわけ","meaning":"remis"}] },
  { id: 'k134', kanji: '黒', meaning: 'czarny', onyomi: ["コク"], kunyomi: ["くろ","くろ-い"], strokes: 11, lesson: 'L12', category: 'nature', grade: 'N5', examples: [{"word":"黒い","reading":"くろい","meaning":"czarny"},{"word":"黒板","reading":"こくばん","meaning":"tablica szkolna"}] },
  { id: 'k135', kanji: '卵', meaning: 'jajko', onyomi: ["ラン"], kunyomi: ["たまご"], strokes: 7, lesson: 'L12', category: 'nature', grade: 'N5', examples: [{"word":"卵","reading":"たまご","meaning":"jajko"},{"word":"卵焼き","reading":"たまごやき","meaning":"omlet japoński"}] },
  { id: 'k136', kanji: '板', meaning: 'deska / tablica', onyomi: ["ハン","バン"], kunyomi: ["いた"], strokes: 8, lesson: 'L12', category: 'home', grade: 'N5', examples: [{"word":"黒板","reading":"こくばん","meaning":"tablica szkolna"},{"word":"板","reading":"いた","meaning":"deska"},{"word":"看板","reading":"かんばん","meaning":"szyld"}] },
  { id: 'k137', kanji: '目', meaning: 'oko / punkt widzenia', onyomi: ["モク","ボク"], kunyomi: ["め"], strokes: 5, lesson: 'L12', category: 'body', grade: 'N5', examples: [{"word":"目","reading":"め","meaning":"oko"},{"word":"目次","reading":"もくじ","meaning":"spis treści"},{"word":"一日目","reading":"いちにちめ","meaning":"pierwszy dzień"}] },
  { id: 'k138', kanji: '口', meaning: 'usta / wejście / otwór', onyomi: ["コウ","ク"], kunyomi: ["くち"], strokes: 3, lesson: 'L12', category: 'body', grade: 'N5', examples: [{"word":"口","reading":"くち","meaning":"usta"},{"word":"入口","reading":"いりぐち","meaning":"wejście"},{"word":"出口","reading":"でぐち","meaning":"wyjście"}] },
  { id: 'k139', kanji: '赤', meaning: 'czerwony', onyomi: ["セキ","シャク"], kunyomi: ["あか","あか-い"], strokes: 7, lesson: 'L12', category: 'nature', grade: 'N5', examples: [{"word":"赤い","reading":"あかい","meaning":"czerwony"},{"word":"赤ちゃん","reading":"あかちゃん","meaning":"niemowlę"},{"word":"赤字","reading":"あかじ","meaning":"deficyt"}] },
  { id: 'k140', kanji: '元', meaning: 'początek / źródło / zdrowy', onyomi: ["ゲン","ガン"], kunyomi: ["もと"], strokes: 4, lesson: 'L12', category: 'people', grade: 'N5', examples: [{"word":"元気","reading":"げんき","meaning":"zdrowy / pełen energii"},{"word":"元日","reading":"がんじつ","meaning":"Nowy Rok"},{"word":"足元","reading":"あしもと","meaning":"pod nogami"}] },

  // L13
  { id: 'k141', kanji: '売', meaning: 'sprzedawać', onyomi: ["バイ"], kunyomi: ["う-る","う-れる"], strokes: 7, lesson: 'L13', category: 'place', grade: 'N5', examples: [{"word":"売る","reading":"うる","meaning":"sprzedawać"},{"word":"売り場","reading":"うりば","meaning":"stoisko / dział"},{"word":"売店","reading":"ばいてん","meaning":"kiosk"}] },
  { id: 'k142', kanji: '今', meaning: 'teraz / obecny', onyomi: ["コン","キン"], kunyomi: ["いま"], strokes: 4, lesson: 'L13', category: 'time', grade: 'N5', examples: [{"word":"今","reading":"いま","meaning":"teraz"},{"word":"今日","reading":"きょう","meaning":"dzisiaj"},{"word":"今月","reading":"こんげつ","meaning":"ten miesiąc"},{"word":"今年","reading":"ことし","meaning":"ten rok"}] },
  { id: 'k143', kanji: '物', meaning: 'rzecz / przedmiot / istota', onyomi: ["ブツ","モツ"], kunyomi: ["もの"], strokes: 8, lesson: 'L13', category: 'home', grade: 'N5', examples: [{"word":"物","reading":"もの","meaning":"rzecz"},{"word":"食べ物","reading":"たべもの","meaning":"jedzenie"},{"word":"飲み物","reading":"のみもの","meaning":"napój"},{"word":"買い物","reading":"かいもの","meaning":"zakupy"}] },
  { id: 'k144', kanji: '店', meaning: 'sklep', onyomi: ["テン"], kunyomi: ["みせ"], strokes: 8, lesson: 'L13', category: 'place', grade: 'N5', examples: [{"word":"店","reading":"みせ","meaning":"sklep"},{"word":"店員","reading":"てんいん","meaning":"sprzedawca / ekspedient"},{"word":"喫茶店","reading":"きっさてん","meaning":"kawiarnia"}] },
  { id: 'k145', kanji: '知', meaning: 'wiedzieć / znać', onyomi: ["チ"], kunyomi: ["し-る"], strokes: 8, lesson: 'L13', category: 'people', grade: 'N5', examples: [{"word":"知る","reading":"しる","meaning":"wiedzieć / znać"},{"word":"知人","reading":"ちじん","meaning":"znajomy"},{"word":"知らせる","reading":"しらせる","meaning":"powiadamiać"}] },
  { id: 'k146', kanji: '場', meaning: 'miejsce / plac', onyomi: ["ジョウ"], kunyomi: ["ば"], strokes: 12, lesson: 'L13', category: 'place', grade: 'N5', examples: [{"word":"場所","reading":"ばしょ","meaning":"miejsce"},{"word":"売り場","reading":"うりば","meaning":"stoisko"},{"word":"広場","reading":"ひろば","meaning":"plac"}] },
  { id: 'k147', kanji: '所', meaning: 'miejsce', onyomi: ["ショ"], kunyomi: ["ところ"], strokes: 8, lesson: 'L13', category: 'place', grade: 'N5', examples: [{"word":"所","reading":"ところ","meaning":"miejsce"},{"word":"場所","reading":"ばしょ","meaning":"miejsce"},{"word":"住所","reading":"じゅうしょ","meaning":"adres"},{"word":"台所","reading":"だいどころ","meaning":"kuchnia"}] },
  { id: 'k148', kanji: '立', meaning: 'stać / wstawać', onyomi: ["リツ","リュウ"], kunyomi: ["た-つ","た-てる"], strokes: 5, lesson: 'L13', category: 'direction', grade: 'N5', examples: [{"word":"立つ","reading":"たつ","meaning":"wstawać / stać"},{"word":"国立","reading":"こくりつ","meaning":"państwowy"},{"word":"役に立つ","reading":"やくにたつ","meaning":"być przydatnym"}] },
  { id: 'k149', kanji: '茶', meaning: 'herbata', onyomi: ["チャ","サ"], kunyomi: [], strokes: 9, lesson: 'L13', category: 'nature', grade: 'N5', examples: [{"word":"お茶","reading":"おちゃ","meaning":"zielona herbata"},{"word":"紅茶","reading":"こうちゃ","meaning":"czarna herbata"},{"word":"茶色","reading":"ちゃいろ","meaning":"kolor brązowy"}] },
  { id: 'k150', kanji: '色', meaning: 'kolor', onyomi: ["ショク","シキ"], kunyomi: ["いろ"], strokes: 6, lesson: 'L13', category: 'nature', grade: 'N5', examples: [{"word":"色","reading":"いろ","meaning":"kolor"},{"word":"茶色","reading":"ちゃいろ","meaning":"kolor brązowy"},{"word":"色々","reading":"いろいろ","meaning":"różny / rozmaity"}] },
  { id: 'k151', kanji: '黄', meaning: 'żółty', onyomi: ["コウ","オウ"], kunyomi: ["き","こ"], strokes: 11, lesson: 'L13', category: 'nature', grade: 'N5', examples: [{"word":"黄色い","reading":"きいろい","meaning":"żółty"},{"word":"黄色","reading":"きいろ","meaning":"kolor żółty"}] },
  { id: 'k152', kanji: '着', meaning: 'ubierać / docierać', onyomi: ["チャク","ジャク"], kunyomi: ["き-る","つ-く"], strokes: 12, lesson: 'L13', category: 'home', grade: 'N5', examples: [{"word":"着る","reading":"きる","meaning":"ubierać (na siebie)"},{"word":"着く","reading":"つく","meaning":"docierać (na miejsce)"},{"word":"上着","reading":"うわぎ","meaning":"okrycie wierzchnie"}] },
  { id: 'k153', kanji: '私', meaning: 'ja / prywatny', onyomi: ["シ"], kunyomi: ["わたし","わたくし"], strokes: 7, lesson: 'L13', category: 'people', grade: 'N5', examples: [{"word":"私","reading":"わたし","meaning":"ja"},{"word":"私立","reading":"しりつ","meaning":"prywatny"},{"word":"私鉄","reading":"してつ","meaning":"kolej prywatna"}] },
  { id: 'k154', kanji: '船', meaning: 'statek / łódź', onyomi: ["セン"], kunyomi: ["ふね","ふな"], strokes: 11, lesson: 'L13', category: 'transport', grade: 'N5', examples: [{"word":"船","reading":"ふね","meaning":"statek / łódź"},{"word":"船便","reading":"ふなびん","meaning":"poczta morska"},{"word":"風船","reading":"ふうせん","meaning":"balon"}] },
  { id: 'k155', kanji: '動', meaning: 'poruszać się', onyomi: ["ドウ"], kunyomi: ["うご-く","うご-かす"], strokes: 11, lesson: 'L13', category: 'transport', grade: 'N5', examples: [{"word":"動く","reading":"うごく","meaning":"ruszać się"},{"word":"動物","reading":"どうぶつ","meaning":"zwierzę"},{"word":"運動","reading":"うんどう","meaning":"ćwiczenia fizyczne"}] },
  { id: 'k156', kanji: '竹', meaning: 'bambus', onyomi: ["チク"], kunyomi: ["たけ"], strokes: 6, lesson: 'L13', category: 'nature', grade: 'N5', examples: [{"word":"竹","reading":"たけ","meaning":"bambus"},{"word":"竹の子","reading":"たけのこ","meaning":"pędy bambusa"}] },
  { id: 'k157', kanji: '町', meaning: 'miasto / miasteczko', onyomi: ["チョウ"], kunyomi: ["まち"], strokes: 7, lesson: 'L13', category: 'place', grade: 'N5', examples: [{"word":"町","reading":"まち","meaning":"miasteczko / miasto"},{"word":"下町","reading":"したまち","meaning":"stara dzielnica miasta"}] },
  { id: 'k158', kanji: '丁', meaning: 'kwartał miejski / znak porządkowy', onyomi: ["チョウ","テイ"], kunyomi: [], strokes: 2, lesson: 'L13', category: 'place', grade: 'N5', examples: [{"word":"丁目","reading":"ちょうめ","meaning":"kwartał (w adresie)"},{"word":"丁寧","reading":"ていねい","meaning":"uprzejmy / staranny"}] },

  // L14
  { id: 'k159', kanji: '写', meaning: 'fotografować / kopiować', onyomi: ["シャ"], kunyomi: ["うつ-す","うつ-る"], strokes: 5, lesson: 'L14', category: 'home', grade: 'N5', examples: [{"word":"写真","reading":"しゃしん","meaning":"zdjęcie"},{"word":"写す","reading":"うつす","meaning":"fotografować / kopiować"}] },
  { id: 'k160', kanji: '真', meaning: 'prawda / rzeczywistość', onyomi: ["シン"], kunyomi: ["ま","まこと"], strokes: 10, lesson: 'L14', category: 'nature', grade: 'N5', examples: [{"word":"写真","reading":"しゃしん","meaning":"zdjęcie"},{"word":"真ん中","reading":"まんなか","meaning":"sam środek"},{"word":"真っ白","reading":"まっしろ","meaning":"śnieżnobiały"}] },
  { id: 'k161', kanji: '好', meaning: 'lubić / upodobanie', onyomi: ["コウ"], kunyomi: ["す-き","この-む"], strokes: 6, lesson: 'L14', category: 'people', grade: 'N5', examples: [{"word":"好き","reading":"すき","meaning":"lubić"},{"word":"大好き","reading":"だいすき","meaning":"bardzo lubić"},{"word":"好物","reading":"こうぶつ","meaning":"ulubiona potrawa"}] },
  { id: 'k162', kanji: '画', meaning: 'obraz / pociągnięcie pędzla', onyomi: ["ガ","カク"], kunyomi: [], strokes: 8, lesson: 'L14', category: 'school', grade: 'N5', examples: [{"word":"映画","reading":"えいが","meaning":"film"},{"word":"画家","reading":"がか","meaning":"malarz"},{"word":"計画","reading":"けいかく","meaning":"plan"}] },
  { id: 'k163', kanji: '使', meaning: 'używać / posłaniec', onyomi: ["シ"], kunyomi: ["つか-う"], strokes: 8, lesson: 'L14', category: 'home', grade: 'N5', examples: [{"word":"使う","reading":"つかう","meaning":"używać"},{"word":"大使","reading":"たいし","meaning":"ambasador"},{"word":"大使館","reading":"たいしかん","meaning":"ambasada"}] },
  { id: 'k164', kanji: '公', meaning: 'publiczny / wspólny', onyomi: ["コウ","ク"], kunyomi: ["おおやけ"], strokes: 4, lesson: 'L14', category: 'place', grade: 'N5', examples: [{"word":"公園","reading":"こうえん","meaning":"park"},{"word":"公開","reading":"こうかい","meaning":"otwarcie publiczne"}] },
  { id: 'k165', kanji: '園', meaning: 'ogród / park', onyomi: ["エン"], kunyomi: ["その"], strokes: 13, lesson: 'L14', category: 'place', grade: 'N5', examples: [{"word":"公園","reading":"こうえん","meaning":"park"},{"word":"動物園","reading":"どうぶつえん","meaning":"zoo"},{"word":"庭園","reading":"ていえん","meaning":"ogród"}] },
  { id: 'k166', kanji: '運', meaning: 'transportować / ruch / los', onyomi: ["ウン"], kunyomi: ["はこ-ぶ"], strokes: 12, lesson: 'L14', category: 'transport', grade: 'N5', examples: [{"word":"運動","reading":"うんどう","meaning":"ćwiczenia fizyczne"},{"word":"運転","reading":"うんてん","meaning":"prowadzenie pojazdu"},{"word":"運ぶ","reading":"はこぶ","meaning":"transportować"}] },
  { id: 'k167', kanji: '花', meaning: 'kwiat', onyomi: ["カ"], kunyomi: ["はな"], strokes: 7, lesson: 'L14', category: 'nature', grade: 'N5', examples: [{"word":"花","reading":"はな","meaning":"kwiat"},{"word":"花火","reading":"はなび","meaning":"fajerwerki"},{"word":"花見","reading":"はなみ","meaning":"podziwianie kwitnących wiśni"}] },
  { id: 'k168', kanji: '向', meaning: 'kierunek / zwracać się ku', onyomi: ["コウ"], kunyomi: ["む-く","む-かう"], strokes: 6, lesson: 'L14', category: 'direction', grade: 'N5', examples: [{"word":"向く","reading":"むく","meaning":"obracać się w stronę"},{"word":"向かう","reading":"むかう","meaning":"udawać się ku"},{"word":"方向","reading":"ほうこう","meaning":"kierunek"}] },
  { id: 'k169', kanji: '交', meaning: 'krzyżować się / wymiana', onyomi: ["コウ"], kunyomi: ["まじ-わる","か-わす"], strokes: 6, lesson: 'L14', category: 'transport', grade: 'N5', examples: [{"word":"交通","reading":"こうつう","meaning":"ruch drogowy / komunikacja"},{"word":"交番","reading":"こうばん","meaning":"posterunek policji"},{"word":"外交","reading":"がいこう","meaning":"dyplomacja"}] },
  { id: 'k170', kanji: '官', meaning: 'urząd / urzędnik', onyomi: ["カン"], kunyomi: [], strokes: 8, lesson: 'L14', category: 'people', grade: 'N5', examples: [{"word":"警官","reading":"けいかん","meaning":"policjant"},{"word":"外交官","reading":"がいこうかん","meaning":"dyplomata"},{"word":"裁判官","reading":"さいばんかん","meaning":"sędzia"}] },
  { id: 'k171', kanji: '男', meaning: 'mężczyzna', onyomi: ["ダン","ナン"], kunyomi: ["おとこ"], strokes: 7, lesson: 'L14', category: 'people', grade: 'N5', examples: [{"word":"男","reading":"おとこ","meaning":"mężczyzna"},{"word":"男の子","reading":"おとこのこ","meaning":"chłopiec"},{"word":"男性","reading":"だんせい","meaning":"mężczyzna (formalnie)"}] },
  { id: 'k172', kanji: '羊', meaning: 'owca', onyomi: ["ヨウ"], kunyomi: ["ひつじ"], strokes: 6, lesson: 'L14', category: 'nature', grade: 'N5', examples: [{"word":"羊","reading":"ひつじ","meaning":"owca"},{"word":"羊毛","reading":"ようもう","meaning":"wełna"}] },
  { id: 'k173', kanji: '記', meaning: 'zapisywać / kronika', onyomi: ["キ"], kunyomi: ["しる-す"], strokes: 10, lesson: 'L14', category: 'school', grade: 'N5', examples: [{"word":"日記","reading":"にっき","meaning":"pamiętnik"},{"word":"記事","reading":"きじ","meaning":"artykuł"},{"word":"記者","reading":"きしゃ","meaning":"reporter"}] },
  { id: 'k174', kanji: '殺', meaning: 'zabijać', onyomi: ["サツ","サイ"], kunyomi: ["ころ-す"], strokes: 10, lesson: 'L14', category: 'nature', grade: 'N5', examples: [{"word":"殺す","reading":"ころす","meaning":"zabijać"},{"word":"自殺","reading":"じさつ","meaning":"samobójstwo"}] },
  { id: 'k175', kanji: '肉', meaning: 'mięso', onyomi: ["ニク"], kunyomi: [], strokes: 6, lesson: 'L14', category: 'nature', grade: 'N5', examples: [{"word":"肉","reading":"にく","meaning":"mięso"},{"word":"牛肉","reading":"ぎゅうにく","meaning":"wołowina"},{"word":"鳥肉","reading":"とりにく","meaning":"drób"},{"word":"豚肉","reading":"ぶたにく","meaning":"wieprzowina"}] },
  { id: 'k176', kanji: '科', meaning: 'dziedzina / wydział / przedmiot', onyomi: ["カ"], kunyomi: [], strokes: 9, lesson: 'L14', category: 'school', grade: 'N5', examples: [{"word":"科目","reading":"かもく","meaning":"przedmiot szkolny"},{"word":"科学","reading":"かがく","meaning":"nauka"},{"word":"教科書","reading":"きょうかしょ","meaning":"podręcznik"}] },
  { id: 'k177', kanji: '食', meaning: 'jeść / jedzenie', onyomi: ["ショク","ジキ"], kunyomi: ["た-べる","く-う"], strokes: 9, lesson: 'L14', category: 'nature', grade: 'N5', examples: [{"word":"食べる","reading":"たべる","meaning":"jeść"},{"word":"食事","reading":"しょくじ","meaning":"posiłek"},{"word":"食堂","reading":"しょくどう","meaning":"stołówka"},{"word":"食べ物","reading":"たべもの","meaning":"jedzenie"}] },
  { id: 'k178', kanji: '社', meaning: 'spółka / świątynia shintō', onyomi: ["シャ"], kunyomi: ["やしろ"], strokes: 7, lesson: 'L14', category: 'place', grade: 'N5', examples: [{"word":"会社","reading":"かいしゃ","meaning":"firma"},{"word":"社会","reading":"しゃかい","meaning":"społeczeństwo"},{"word":"神社","reading":"じんじゃ","meaning":"chram shintō"}] },
  { id: 'k179', kanji: '役', meaning: 'rola / urząd / służba', onyomi: ["ヤク","エキ"], kunyomi: [], strokes: 7, lesson: 'L14', category: 'people', grade: 'N5', examples: [{"word":"役人","reading":"やくにん","meaning":"urzędnik"},{"word":"役に立つ","reading":"やくにたつ","meaning":"być przydatnym"},{"word":"市役所","reading":"しやくしょ","meaning":"urząd miasta"}] },

  // L15
  { id: 'k180', kanji: '自', meaning: 'samemu / własny', onyomi: ["ジ","シ"], kunyomi: ["みずか-ら"], strokes: 6, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"自分","reading":"じぶん","meaning":"samemu / siebie"},{"word":"自動車","reading":"じどうしゃ","meaning":"samochód"},{"word":"自転車","reading":"じてんしゃ","meaning":"rower"},{"word":"自由","reading":"じゆう","meaning":"wolność"}] },
  { id: 'k181', kanji: '分', meaning: 'minuta / część / rozumieć', onyomi: ["ブン","フン","ブ"], kunyomi: ["わ-かる","わ-ける"], strokes: 4, lesson: 'L15', category: 'time', grade: 'N5', examples: [{"word":"分かる","reading":"わかる","meaning":"rozumieć"},{"word":"半分","reading":"はんぶん","meaning":"połowa"},{"word":"五分","reading":"ごふん","meaning":"pięć minut"}] },
  { id: 'k182', kanji: '活', meaning: 'żywy / aktywny', onyomi: ["カツ"], kunyomi: [], strokes: 9, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"生活","reading":"せいかつ","meaning":"życie codzienne"},{"word":"活動","reading":"かつどう","meaning":"działalność / aktywność"}] },
  { id: 'k183', kanji: '事', meaning: 'sprawa / rzecz niematerialna', onyomi: ["ジ","ズ"], kunyomi: ["こと"], strokes: 8, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"仕事","reading":"しごと","meaning":"praca"},{"word":"食事","reading":"しょくじ","meaning":"posiłek"},{"word":"火事","reading":"かじ","meaning":"pożar"},{"word":"事故","reading":"じこ","meaning":"wypadek"}] },
  { id: 'k184', kanji: '作', meaning: 'tworzyć / robić', onyomi: ["サク","サ"], kunyomi: ["つく-る"], strokes: 7, lesson: 'L15', category: 'home', grade: 'N5', examples: [{"word":"作る","reading":"つくる","meaning":"robić / przygotowywać"},{"word":"作文","reading":"さくぶん","meaning":"wypracowanie"},{"word":"作品","reading":"さくひん","meaning":"dzieło"}] },
  { id: 'k185', kanji: '心', meaning: 'serce / umysł', onyomi: ["シン"], kunyomi: ["こころ"], strokes: 4, lesson: 'L15', category: 'body', grade: 'N5', examples: [{"word":"心","reading":"こころ","meaning":"serce / umysł"},{"word":"心配","reading":"しんぱい","meaning":"zmartwienie"},{"word":"安心","reading":"あんしん","meaning":"spokój ducha"}] },
  { id: 'k186', kanji: '配', meaning: 'rozdzielać / dostarczać', onyomi: ["ハイ"], kunyomi: ["くば-る"], strokes: 10, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"心配","reading":"しんぱい","meaning":"zmartwienie"},{"word":"配る","reading":"くばる","meaning":"rozdawać"},{"word":"配達","reading":"はいたつ","meaning":"doręczenie"}] },
  { id: 'k187', kanji: '体', meaning: 'ciało', onyomi: ["タイ","テイ"], kunyomi: ["からだ"], strokes: 7, lesson: 'L15', category: 'body', grade: 'N5', examples: [{"word":"体","reading":"からだ","meaning":"ciało"},{"word":"体重","reading":"たいじゅう","meaning":"waga ciała"},{"word":"体操","reading":"たいそう","meaning":"gimnastyka"}] },
  { id: 'k188', kanji: '払', meaning: 'płacić / usuwać', onyomi: ["フツ"], kunyomi: ["はら-う"], strokes: 5, lesson: 'L15', category: 'home', grade: 'N5', examples: [{"word":"払う","reading":"はらう","meaning":"płacić"},{"word":"支払い","reading":"しはらい","meaning":"płatność"}] },
  { id: 'k189', kanji: '証', meaning: 'dowód / zaświadczenie', onyomi: ["ショウ"], kunyomi: [], strokes: 12, lesson: 'L15', category: 'school', grade: 'N5', examples: [{"word":"学生証","reading":"がくせいしょう","meaning":"legitymacja studencka"},{"word":"証明書","reading":"しょうめいしょ","meaning":"zaświadczenie"}] },
  { id: 'k190', kanji: '受', meaning: 'odbierać / przyjmować', onyomi: ["ジュ"], kunyomi: ["う-ける","う-けとる"], strokes: 8, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"受ける","reading":"うける","meaning":"otrzymywać / zdawać egzamin"},{"word":"受け取る","reading":"うけとる","meaning":"odbierać"},{"word":"受験","reading":"じゅけん","meaning":"przystępowanie do egzaminu"}] },
  { id: 'k191', kanji: '登', meaning: 'wspinać się / rejestrować', onyomi: ["トウ","ト"], kunyomi: ["のぼ-る"], strokes: 12, lesson: 'L15', category: 'nature', grade: 'N5', examples: [{"word":"登る","reading":"のぼる","meaning":"wspinać się"},{"word":"登山","reading":"とざん","meaning":"wspinaczka górska"},{"word":"登録","reading":"とうろく","meaning":"rejestracja"}] },
  { id: 'k192', kanji: '録', meaning: 'zapis / rejestr', onyomi: ["ロク"], kunyomi: [], strokes: 16, lesson: 'L15', category: 'school', grade: 'N5', examples: [{"word":"登録","reading":"とうろく","meaning":"rejestracja"},{"word":"記録","reading":"きろく","meaning":"rekord / zapis"},{"word":"録音","reading":"ろくおん","meaning":"nagranie dźwięku"}] },
  { id: 'k193', kanji: '鉄', meaning: 'żelazo / stal / kolej', onyomi: ["テツ"], kunyomi: [], strokes: 13, lesson: 'L15', category: 'transport', grade: 'N5', examples: [{"word":"地下鉄","reading":"ちかてつ","meaning":"metro"},{"word":"私鉄","reading":"してつ","meaning":"kolej prywatna"},{"word":"鉄道","reading":"てつどう","meaning":"kolej żelazna"}] },
  { id: 'k194', kanji: '館', meaning: 'gmach / budynek / rezydencja', onyomi: ["カン"], kunyomi: ["やかた"], strokes: 16, lesson: 'L15', category: 'place', grade: 'N5', examples: [{"word":"図書館","reading":"としょかん","meaning":"biblioteka"},{"word":"大使館","reading":"たいしかん","meaning":"ambasada"},{"word":"映画館","reading":"えいがかん","meaning":"kino"}] },
  { id: 'k195', kanji: '出', meaning: 'wychodzić / wyjmować', onyomi: ["シュツ","スイ"], kunyomi: ["で-る","だ-す"], strokes: 5, lesson: 'L15', category: 'direction', grade: 'N5', examples: [{"word":"出る","reading":"でる","meaning":"wychodzić"},{"word":"出す","reading":"だす","meaning":"wyjmować / wysyłać"},{"word":"出口","reading":"でぐち","meaning":"wyjście"},{"word":"外出","reading":"がいしゅつ","meaning":"wyjście z domu"}] },
  { id: 'k196', kanji: '員', meaning: 'członek / pracownik', onyomi: ["イン"], kunyomi: [], strokes: 10, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"駅員","reading":"えきいん","meaning":"pracownik stacji"},{"word":"店員","reading":"てんいん","meaning":"sprzedawca"},{"word":"会社員","reading":"かいしゃいん","meaning":"pracownik firmy"}] },
  { id: 'k197', kanji: '光', meaning: 'światło / promień', onyomi: ["コウ"], kunyomi: ["ひかり","ひか-る"], strokes: 6, lesson: 'L15', category: 'nature', grade: 'N5', examples: [{"word":"光","reading":"ひかり","meaning":"światło"},{"word":"光る","reading":"ひかる","meaning":"świecić"},{"word":"日光","reading":"にっこう","meaning":"światło słoneczne"}] },
  { id: 'k198', kanji: '平', meaning: 'płaski / spokojny', onyomi: ["ヘイ","ビョウ"], kunyomi: ["たい-ら","ひら"], strokes: 5, lesson: 'L15', category: 'nature', grade: 'N5', examples: [{"word":"平和","reading":"へいわ","meaning":"pokój na świecie"},{"word":"平日","reading":"へいじつ","meaning":"dzień powszedni"},{"word":"平ら","reading":"たいら","meaning":"płaski"}] },
  { id: 'k199', kanji: '和', meaning: 'pokój / harmonia / japoński', onyomi: ["ワ","オ"], kunyomi: ["やわ-らぐ","なご-む"], strokes: 8, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"平和","reading":"へいわ","meaning":"pokój"},{"word":"和食","reading":"わしょく","meaning":"kuchnia japońska"},{"word":"和室","reading":"わしつ","meaning":"pokój w stylu japońskim"}] },
  { id: 'k200', kanji: '氷', meaning: 'lód', onyomi: ["ヒョウ"], kunyomi: ["こおり","ひ"], strokes: 5, lesson: 'L15', category: 'nature', grade: 'N5', examples: [{"word":"氷","reading":"こおり","meaning":"lód"},{"word":"氷山","reading":"ひょうざん","meaning":"góra lodowa"}] },
  { id: 'k201', kanji: '同', meaning: 'taki sam / jednakowy', onyomi: ["ドウ"], kunyomi: ["おな-じ"], strokes: 6, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"同じ","reading":"おなじ","meaning":"taki sam"},{"word":"同僚","reading":"どうりょう","meaning":"kolega z pracy"},{"word":"同時","reading":"どうじ","meaning":"jednocześnie"}] },
  { id: 'k202', kanji: '仕', meaning: 'służyć / sprawa', onyomi: ["シ","ジ"], kunyomi: ["つか-える"], strokes: 5, lesson: 'L15', category: 'people', grade: 'N5', examples: [{"word":"仕事","reading":"しごと","meaning":"praca"},{"word":"仕方","reading":"しかた","meaning":"sposób"}] },
  { id: 'k203', kanji: '発', meaning: 'wyruszać / emitować / początek', onyomi: ["ハツ","ホツ"], kunyomi: [], strokes: 9, lesson: 'L15', category: 'transport', grade: 'N5', examples: [{"word":"出発","reading":"しゅっぱつ","meaning":"wyruszenie / odjazd"},{"word":"発音","reading":"はつおん","meaning":"wymowa"},{"word":"発見","reading":"はっけん","meaning":"odkrycie"}] },
  { id: 'k204', kanji: '送', meaning: 'wysyłać / odprowadzać', onyomi: ["ソウ"], kunyomi: ["おく-る"], strokes: 9, lesson: 'L15', category: 'transport', grade: 'N5', examples: [{"word":"送る","reading":"おくる","meaning":"wysyłać / odprowadzać"},{"word":"送金","reading":"そうきん","meaning":"przelew pieniężny"},{"word":"見送る","reading":"みおくる","meaning":"odprowadzać kogoś"}] },

  // L16
  { id: 'k205', kanji: '民', meaning: 'lud / obywatel', onyomi: ['ミン'], kunyomi: ['たみ'], strokes: 5, lesson: 'L16', category: 'people', grade: 'N5', examples: [{ word: '民宿', reading: 'みんしゅく', meaning: 'kwatera prywatna' }, { word: '国民', reading: 'こくみん', meaning: 'naród / obywatele' }, { word: '市民', reading: 'しみん', meaning: 'mieszkaniec miasta' }] },
  { id: 'k206', kanji: '宿', meaning: 'zajazd / nocleg', onyomi: ['シュク'], kunyomi: ['やど', 'やど-る'], strokes: 11, lesson: 'L16', category: 'place', grade: 'N5', examples: [{ word: '民宿', reading: 'みんしゅく', meaning: 'kwatera prywatna' }, { word: '新宿', reading: 'しんじゅく', meaning: 'Shinjuku' }, { word: '宿題', reading: 'しゅくだい', meaning: 'praca domowa' }] },
  { id: 'k207', kanji: '道', meaning: 'droga / ulica / ścieżka', onyomi: ['ドウ', 'トウ'], kunyomi: ['みち'], strokes: 12, lesson: 'L16', category: 'place', grade: 'N5', examples: [{ word: '道', reading: 'みち', meaning: 'droga / ulica' }, { word: '北海道', reading: 'ほっかいどう', meaning: 'Hokkaido' }, { word: '柔道', reading: 'じゅうどう', meaning: 'judo' }] },
  { id: 'k208', kanji: '特', meaning: 'specjalny / szczególny', onyomi: ['トク'], kunyomi: [], strokes: 10, lesson: 'L16', category: 'nature', grade: 'N5', examples: [{ word: '特別な', reading: 'とくべつな', meaning: 'specjalny' }, { word: '特急', reading: 'とっきゅう', meaning: 'pociąg ekspresowy' }, { word: '特に', reading: 'とくに', meaning: 'szczególnie' }] },
  { id: 'k209', kanji: '急', meaning: 'nagły / spieszyć się', onyomi: ['キュウ'], kunyomi: ['いそ-ぐ'], strokes: 9, lesson: 'L16', category: 'transport', grade: 'N5', examples: [{ word: '急ぐ', reading: 'いそぐ', meaning: 'spieszyć się' }, { word: '急行', reading: 'きゅうこう', meaning: 'pociąg pospieszny' }, { word: '特急', reading: 'とっきゅう', meaning: 'pociąg ekspresowy' }] },
  { id: 'k210', kanji: '転', meaning: 'obracać / toczyć', onyomi: ['テン'], kunyomi: ['ころ-ぶ', 'ころ-がる'], strokes: 11, lesson: 'L16', category: 'transport', grade: 'N5', examples: [{ word: '自転車', reading: 'じてんしゃ', meaning: 'rower' }, { word: '運転する', reading: 'うんてんする', meaning: 'prowadzić pojazd' }, { word: '転ぶ', reading: 'ころぶ', meaning: 'przewrócić się' }] },
  { id: 'k211', kanji: '業', meaning: 'praca / branża / zawód', onyomi: ['ギョウ', 'ゴウ'], kunyomi: ['わざ'], strokes: 13, lesson: 'L16', category: 'school', grade: 'N5', examples: [{ word: '授業', reading: 'じゅぎょう', meaning: 'lekcja / zajęcia' }, { word: '工業', reading: 'こうぎょう', meaning: 'przemysł' }, { word: '商業', reading: 'しょうぎょう', meaning: 'handel' }] },
  { id: 'k212', kanji: '漁', meaning: 'rybołówstwo / połów', onyomi: ['ギョ', 'リョウ'], kunyomi: ['あさ-る'], strokes: 14, lesson: 'L16', category: 'nature', grade: 'N5', examples: [{ word: '漁業', reading: 'ぎょぎょう', meaning: 'rybołówstwo' }, { word: '漁船', reading: 'ぎょせん', meaning: 'łódź rybacka' }] },
  { id: 'k213', kanji: '代', meaning: 'koszt / opłata / pokolenie', onyomi: ['ダイ', 'タイ'], kunyomi: ['か-わる', 'よ'], strokes: 5, lesson: 'L16', category: 'number', grade: 'N5', examples: [{ word: '食事代', reading: 'しょくじだい', meaning: 'opłata za posiłki' }, { word: '部屋代', reading: 'へやだい', meaning: 'czynsz za pokój' }, { word: '時代', reading: 'じだい', meaning: 'epoka / czasy' }] },
  { id: 'k214', kanji: '氏', meaning: 'pan/pani / ród / nazwisko', onyomi: ['シ'], kunyomi: ['うじ'], strokes: 4, lesson: 'L16', category: 'people', grade: 'N5', examples: [{ word: '氏名', reading: 'しめい', meaning: 'nazwisko i imię' }, { word: '田中氏', reading: 'たなかし', meaning: 'pan Tanaka' }] },
  { id: 'k215', kanji: '貝', meaning: 'muszla / małż', onyomi: ['バイ'], kunyomi: ['かい'], strokes: 7, lesson: 'L16', category: 'nature', grade: 'N5', examples: [{ word: '貝', reading: 'かい', meaning: 'muszla / małż' }, { word: '貝がら', reading: 'かいがら', meaning: 'muszelka' }] },
  { id: 'k216', kanji: '買', meaning: 'kupować', onyomi: ['バイ'], kunyomi: ['か-う'], strokes: 12, lesson: 'L16', category: 'home', grade: 'N5', examples: [{ word: '買う', reading: 'かう', meaning: 'kupować' }, { word: '買い物', reading: 'かいもの', meaning: 'zakupy' }, { word: '売買', reading: 'ばいばい', meaning: 'handel / kupno-sprzedaż' }] },
  { id: 'k217', kanji: '話', meaning: 'mówić / rozmowa', onyomi: ['ワ'], kunyomi: ['はな-す', 'はなし'], strokes: 13, lesson: 'L16', category: 'people', grade: 'N5', examples: [{ word: '話す', reading: 'はなす', meaning: 'rozmawiać' }, { word: '会話', reading: 'かいわ', meaning: 'rozmowa' }, { word: '電話', reading: 'でんわ', meaning: 'telefon' }] },
  { id: 'k218', kanji: '不', meaning: 'nie- / anty- / bez-', onyomi: ['フ', 'ブ'], kunyomi: [], strokes: 4, lesson: 'L16', category: 'nature', grade: 'N5', examples: [{ word: '不便な', reading: 'ふべんな', meaning: 'niewygodny' }, { word: '不安な', reading: 'ふあんな', meaning: 'niespokojny' }, { word: '不足', reading: 'ふそく', meaning: 'brak / niedobór' }] },
  { id: 'k219', kanji: '便', meaning: 'wygoda / poczta / kurs', onyomi: ['ベン', 'ビン'], kunyomi: ['たよ-り'], strokes: 9, lesson: 'L16', category: 'transport', grade: 'N5', examples: [{ word: '便利な', reading: 'べんりな', meaning: 'wygodny' }, { word: '郵便局', reading: 'ゆうびんきょく', meaning: 'poczta' }, { word: '航空便', reading: 'こうくうびん', meaning: 'poczta lotnicza' }] },
  { id: 'k220', kanji: '利', meaning: 'korzyść / zysk', onyomi: ['リ'], kunyomi: ['き-く'], strokes: 7, lesson: 'L16', category: 'nature', grade: 'N5', examples: [{ word: '便利な', reading: 'べんりな', meaning: 'wygodny' }, { word: '利用する', reading: 'りようする', meaning: 'korzystać' }, { word: '利子', reading: 'りし', meaning: 'odsetki' }] },
  { id: 'k221', kanji: '持', meaning: 'trzymać / posiadać', onyomi: ['ジ'], kunyomi: ['も-つ'], strokes: 9, lesson: 'L16', category: 'home', grade: 'N5', examples: [{ word: '持つ', reading: 'もつ', meaning: 'trzymać / mieć' }, { word: 'お金持ち', reading: 'おかねもち', meaning: 'bogacz' }, { word: '気持ち', reading: 'きもち', meaning: 'samopoczucie / uczucie' }] },
  { id: 'k222', kanji: '両', meaning: 'oba / obydwa', onyomi: ['リョウ'], kunyomi: ['てる'], strokes: 6, lesson: 'L16', category: 'number', grade: 'N5', examples: [{ word: '両方', reading: 'りょうほう', meaning: 'obydwie strony' }, { word: '両親', reading: 'りょうしん', meaning: 'rodzice' }, { word: '両手', reading: 'りょうて', meaning: 'obie ręce' }] },
  { id: 'k223', kanji: '王', meaning: 'król', onyomi: ['オウ'], kunyomi: [], strokes: 4, lesson: 'L16', category: 'people', grade: 'N5', examples: [{ word: '国王', reading: 'こくおう', meaning: 'król' }, { word: '女王', reading: 'じょおう', meaning: 'królowa' }, { word: '王子', reading: 'おうじ', meaning: 'książę' }] },
  { id: 'k224', kanji: '府', meaning: 'prefektura miejska / zarząd', onyomi: ['フ'], kunyomi: [], strokes: 8, lesson: 'L16', category: 'place', grade: 'N5', examples: [{ word: '大阪府', reading: 'おおさかふ', meaning: 'prefektura Osaka' }, { word: '京都府', reading: 'きょうとふ', meaning: 'prefektura Kioto' }, { word: '政府', reading: 'せいふ', meaning: 'rząd' }] },
  { id: 'k225', kanji: '県', meaning: 'prefektura', onyomi: ['ケン'], kunyomi: [], strokes: 9, lesson: 'L16', category: 'place', grade: 'N5', examples: [{ word: '青森県', reading: 'あおもりけん', meaning: 'prefektura Aomori' }, { word: '県知事', reading: 'けんちじ', meaning: 'gubernator prefektury' }, { word: '県立', reading: 'けんりつ', meaning: 'prefekturalny' }] },
  { id: 'k226', kanji: '都', meaning: 'stolica / metropolia', onyomi: ['ト', 'ツ'], kunyomi: ['みやこ'], strokes: 11, lesson: 'L16', category: 'place', grade: 'N5', examples: [{ word: '東京都', reading: 'とうきょうと', meaning: 'metropolia Tokio' }, { word: '首都', reading: 'しゅと', meaning: 'stolica' }, { word: '都合', reading: 'つごう', meaning: 'okoliczności / wygoda' }] },
  { id: 'k227', kanji: '京', meaning: 'stolica', onyomi: ['キョウ', 'ケイ'], kunyomi: ['みやこ'], strokes: 8, lesson: 'L16', category: 'place', grade: 'N5', examples: [{ word: '東京', reading: 'とうきょう', meaning: 'Tokio' }, { word: '京都', reading: 'きょうと', meaning: 'Kioto' }, { word: '上京', reading: 'じょうきょう', meaning: 'przyjazd do stolicy' }] },
  { id: 'k228', kanji: '区', meaning: 'dzielnica / okręg', onyomi: ['ク'], kunyomi: [], strokes: 4, lesson: 'L16', category: 'place', grade: 'N5', examples: [{ word: '区', reading: 'く', meaning: 'dzielnica' }, { word: '新宿区', reading: 'しんじゅくく', meaning: 'dzielnica Shinjuku' }, { word: '区役所', reading: 'くやくしょ', meaning: 'urząd dzielnicy' }] },
  { id: 'k229', kanji: '商', meaning: 'handel / kupiec', onyomi: ['ショウ'], kunyomi: ['あきな-う'], strokes: 11, lesson: 'L16', category: 'school', grade: 'N5', examples: [{ word: '商業', reading: 'しょうぎょう', meaning: 'handel' }, { word: '商品', reading: 'しょうひん', meaning: 'towar / artykuł' }, { word: '商店', reading: 'しょうてん', meaning: 'sklep handlowy' }] },
  { id: 'k230', kanji: '産', meaning: 'produkcja / urodzić', onyomi: ['サン'], kunyomi: ['う-む', 'う-まれる'], strokes: 11, lesson: 'L16', category: 'school', grade: 'N5', examples: [{ word: '産業', reading: 'さんぎょう', meaning: 'przemysł' }, { word: '生産', reading: 'せいさん', meaning: 'produkcja' }, { word: 'お土産', reading: 'おみやげ', meaning: 'pamiątka' }] },
  { id: 'k231', kanji: '軽', meaning: 'lekki', onyomi: ['ケイ'], kunyomi: ['かる-い'], strokes: 12, lesson: 'L16', category: 'nature', grade: 'N5', examples: [{ word: '軽い', reading: 'かるい', meaning: 'lekki' }, { word: '手軽な', reading: 'てがるな', meaning: 'prosty / poręczny' }, { word: '軽食', reading: 'けいしょく', meaning: 'lekka przekąska' }] },
  { id: 'k232', kanji: '思', meaning: 'myśleć / uważać', onyomi: ['シ'], kunyomi: ['おも-う'], strokes: 9, lesson: 'L16', category: 'people', grade: 'N5', examples: [{ word: '思う', reading: 'おもう', meaning: 'myśleć / uważać' }, { word: '思い出す', reading: 'おもいだす', meaning: 'przypominać sobie' }, { word: '思い出', reading: 'おもいで', meaning: 'wspomnienie' }] },
  { id: 'k233', kanji: '法', meaning: 'prawo / metoda / zasada', onyomi: ['ホウ', 'ハッ', 'ホッ'], kunyomi: [], strokes: 8, lesson: 'L16', category: 'school', grade: 'N5', examples: [{ word: '方法', reading: 'ほうほう', meaning: 'sposób / metoda' }, { word: '文法', reading: 'ぶんぽう', meaning: 'gramatyka' }, { word: '法律', reading: 'ほうりつ', meaning: 'prawo' }] },

  // L17
  { id: 'k234', kanji: '器', meaning: 'naczynie / narzędzie', onyomi: ['キ'], kunyomi: ['うつわ'], strokes: 16, lesson: 'L17', category: 'home', grade: 'N5', examples: [{ word: '食器', reading: 'しょっき', meaning: 'naczynia / sztućce' }, { word: '楽器', reading: 'がっき', meaning: 'instrument muzyczny' }] },
  { id: 'k235', kanji: '席', meaning: 'miejsce / siedzenie', onyomi: ['セキ'], kunyomi: [], strokes: 10, lesson: 'L17', category: 'place', grade: 'N5', examples: [{ word: '席', reading: 'せき', meaning: 'miejsce' }, { word: '出席する', reading: 'しゅっせきする', meaning: 'być obecnym' }, { word: '指定席', reading: 'していせき', meaning: 'miejsce rezerwowane' }] },
  { id: 'k236', kanji: '速', meaning: 'szybki / prędkość', onyomi: ['ソク'], kunyomi: ['はや-い', 'すみ-やか'], strokes: 10, lesson: 'L17', category: 'transport', grade: 'N5', examples: [{ word: '速い', reading: 'はやい', meaning: 'szybki' }, { word: '速度', reading: 'そくど', meaning: 'prędkość' }, { word: '高速道路', reading: 'こうそくどうろ', meaning: 'autostrada' }] },
  { id: 'k237', kanji: '湖', meaning: 'jezioro', onyomi: ['コ'], kunyomi: ['みずうみ'], strokes: 12, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '湖', reading: 'みずうみ', meaning: 'jezioro' }, { word: 'びわ湖', reading: 'びわこ', meaning: 'jezioro Biwa' }, { word: '山中湖', reading: 'やまなかこ', meaning: 'jezioro Yamanaka' }] },
  { id: 'k238', kanji: '止', meaning: 'zatrzymywać się', onyomi: ['シ'], kunyomi: ['と-まる', 'と-める'], strokes: 4, lesson: 'L17', category: 'transport', grade: 'N5', examples: [{ word: '止まる', reading: 'とまる', meaning: 'zatrzymywać się' }, { word: '止める', reading: 'とめる', meaning: 'zatrzymywać coś' }, { word: '中止', reading: 'ちゅうし', meaning: 'odwołanie / przerwanie' }] },
  { id: 'k239', kanji: '用', meaning: 'sprawa / użycie', onyomi: ['ヨウ'], kunyomi: ['もち-いる'], strokes: 5, lesson: 'L17', category: 'school', grade: 'N5', examples: [{ word: '用意する', reading: 'よういする', meaning: 'przygotować' }, { word: '用事', reading: 'ようじ', meaning: 'sprawa do załatwienia' }, { word: '利用', reading: 'りよう', meaning: 'użycie / wykorzystanie' }] },
  { id: 'k240', kanji: '意', meaning: 'myśl / zamiar / sens', onyomi: ['イ'], kunyomi: [], strokes: 13, lesson: 'L17', category: 'people', grade: 'N5', examples: [{ word: '意味', reading: 'いみ', meaning: 'znaczenie / sens' }, { word: '意見', reading: 'いけん', meaning: 'opinia' }, { word: '用意', reading: 'ようい', meaning: 'przygotowanie' }] },
  { id: 'k241', kanji: '森', meaning: 'las / puszcza', onyomi: ['シン'], kunyomi: ['もり'], strokes: 12, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '森', reading: 'もり', meaning: 'las' }, { word: '森林', reading: 'しんりん', meaning: 'lasy / lasostan' }] },
  { id: 'k242', kanji: '米', meaning: 'ryż / Ameryka', onyomi: ['ベイ', 'マイ'], kunyomi: ['こめ'], strokes: 6, lesson: 'L17', category: 'food', grade: 'N5', examples: [{ word: '米', reading: 'こめ', meaning: 'ryż (ziarno)' }, { word: '米国', reading: 'べいこく', meaning: 'USA' }, { word: '白米', reading: 'はくまい', meaning: 'biały ryż' }] },
  { id: 'k243', kanji: '洗', meaning: 'myć / prać', onyomi: ['セン'], kunyomi: ['あら-う'], strokes: 9, lesson: 'L17', category: 'home', grade: 'N5', examples: [{ word: '洗う', reading: 'あらう', meaning: 'myć' }, { word: '洗濯する', reading: 'せんたくする', meaning: 'robić pranie' }, { word: 'お手洗い', reading: 'おてあらい', meaning: 'toaleta' }] },
  { id: 'k244', kanji: '切', meaning: 'ciąć / kroić', onyomi: ['セツ', 'サイ'], kunyomi: ['き-る', 'き-れる'], strokes: 4, lesson: 'L17', category: 'home', grade: 'N5', examples: [{ word: '切る', reading: 'きる', meaning: 'ciąć / kroić' }, { word: '切手', reading: 'きって', meaning: 'znaczek pocztowy' }, { word: '大切', reading: 'たいせつ', meaning: 'ważny / cenny' }] },
  { id: 'k245', kanji: '飯', meaning: 'ugotowany ryż / posiłek', onyomi: ['ハン'], kunyomi: ['めし'], strokes: 12, lesson: 'L17', category: 'food', grade: 'N5', examples: [{ word: 'ご飯', reading: 'ごはん', meaning: 'ugotowany ryż / posiłek' }, { word: '朝ご飯', reading: 'あさごはん', meaning: 'śniadanie' }, { word: '晩ご飯', reading: 'ばんごはん', meaning: 'kolacja' }] },
  { id: 'k246', kanji: '草', meaning: 'trawa / roślina zielna', onyomi: ['ソウ'], kunyomi: ['くさ'], strokes: 9, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '草', reading: 'くさ', meaning: 'trawa' }, { word: '草花', reading: 'くさばな', meaning: 'kwiaty polne' }] },
  { id: 'k247', kanji: '虫', meaning: 'owad / robak', onyomi: ['チュウ'], kunyomi: ['むし'], strokes: 6, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '虫', reading: 'むし', meaning: 'owad / robak' }, { word: '虫歯', reading: 'むしば', meaning: 'ząb z próchnicą' }] },
  { id: 'k248', kanji: '声', meaning: 'głos', onyomi: ['セイ', 'ショウ'], kunyomi: ['こえ'], strokes: 7, lesson: 'L17', category: 'people', grade: 'N5', examples: [{ word: '声', reading: 'こえ', meaning: 'głos' }, { word: '大声', reading: 'おおごえ', meaning: 'donośny głos' }, { word: '音声', reading: 'おんせい', meaning: 'dźwięk / audio' }] },
  { id: 'k249', kanji: '味', meaning: 'smak', onyomi: ['ミ'], kunyomi: ['あじ', 'あじ-わう'], strokes: 8, lesson: 'L17', category: 'food', grade: 'N5', examples: [{ word: '味', reading: 'あじ', meaning: 'smak' }, { word: '意味', reading: 'いみ', meaning: 'znaczenie' }, { word: '趣味', reading: 'しゅみ', meaning: 'hobby' }] },
  { id: 'k250', kanji: '坂', meaning: 'stok / wzgórze / zbocze', onyomi: ['ハン'], kunyomi: ['さか'], strokes: 7, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '坂', reading: 'さか', meaning: 'zbocze / wzgórze' }, { word: '坂道', reading: 'さかみち', meaning: 'droga pod górę' }] },
  { id: 'k251', kanji: '曲', meaning: 'skręcać / utwór muzyczny', onyomi: ['キョク'], kunyomi: ['ま-がる', 'ま-げる'], strokes: 6, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '曲がる', reading: 'まがる', meaning: 'skręcać' }, { word: '曲', reading: 'きょく', meaning: 'melodia / utwór' }] },
  { id: 'k252', kanji: '野', meaning: 'pole / równina / dziki', onyomi: ['ヤ'], kunyomi: ['の'], strokes: 11, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '野菜', reading: 'やさい', meaning: 'warzywa' }, { word: '野原', reading: 'のはら', meaning: 'łąka' }, { word: '野球', reading: 'やきゅう', meaning: 'baseball' }] },
  { id: 'k253', kanji: '原', meaning: 'równina / pole / pierwotny', onyomi: ['ゲン'], kunyomi: ['はら'], strokes: 10, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '野原', reading: 'のはら', meaning: 'łąka' }, { word: '原因', reading: 'げんいん', meaning: 'przyczyna' }, { word: '高原', reading: 'こうげん', meaning: 'płaskowyż' }] },
  { id: 'k254', kanji: '回', meaning: 'obracać / raz (licznik)', onyomi: ['カイ', 'エ'], kunyomi: ['まわ-る', 'まわ-す'], strokes: 6, lesson: 'L17', category: 'number', grade: 'N5', examples: [{ word: '回る', reading: 'まわる', meaning: 'obracać się' }, { word: '一回', reading: 'いっかい', meaning: 'jeden raz' }, { word: '何回', reading: 'なんかい', meaning: 'ile razy' }] },
  { id: 'k255', kanji: '谷', meaning: 'dolina', onyomi: ['コク'], kunyomi: ['たに'], strokes: 7, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '谷', reading: 'たに', meaning: 'dolina' }, { word: '渋谷', reading: 'しぶや', meaning: 'Shibuya' }] },
  { id: 'k256', kanji: '流', meaning: 'płynąć / nurt', onyomi: ['リュウ', 'ル'], kunyomi: ['なが-れる', 'なが-す'], strokes: 10, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '流れる', reading: 'ながれる', meaning: 'płynąć' }, { word: '流行', reading: 'りゅうこう', meaning: 'moda / trend' }] },
  { id: 'k257', kanji: '空', meaning: 'niebo / pusty', onyomi: ['クウ'], kunyomi: ['そら', 'あ-く', 'から'], strokes: 8, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '空', reading: 'そら', meaning: 'niebo' }, { word: '空港', reading: 'くうこう', meaning: 'lotnisko' }, { word: '空気', reading: 'くうき', meaning: 'powietrze / atmosfera' }] },
  { id: 'k258', kanji: '青', meaning: 'niebieski / błękitny', onyomi: ['セイ', 'ショウ'], kunyomi: ['あお', 'あお-い'], strokes: 8, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '青い', reading: 'あおい', meaning: 'niebieski' }, { word: '青空', reading: 'あおぞら', meaning: 'błękitne niebo' }, { word: '青年', reading: 'せいねん', meaning: 'młodzieniec' }] },
  { id: 'k259', kanji: '歩', meaning: 'chodzić / krok', onyomi: ['ホ', 'ポ', 'ブ'], kunyomi: ['ある-く', 'あゆ-む'], strokes: 8, lesson: 'L17', category: 'transport', grade: 'N5', examples: [{ word: '歩く', reading: 'あるく', meaning: 'chodzić' }, { word: '散歩する', reading: 'さんぽする', meaning: 'spacerować' }, { word: '歩道', reading: 'ほどう', meaning: 'chodnik' }] },
  { id: 'k260', kanji: '鳴', meaning: 'wydawać dźwięk / dzwonić', onyomi: ['メイ'], kunyomi: ['な-く', 'な-る'], strokes: 14, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '鳴く', reading: 'なく', meaning: 'wydawać głos (zwierzę)' }, { word: '鳴る', reading: 'なる', meaning: 'dzwonić (dzwonek)' }] },
  { id: 'k261', kanji: '通', meaning: 'przechodzić / dojeżdżać', onyomi: ['ツウ'], kunyomi: ['とお-る', 'かよ-う'], strokes: 10, lesson: 'L17', category: 'transport', grade: 'N5', examples: [{ word: '通る', reading: 'とおる', meaning: 'przechodzić / mijać' }, { word: '通う', reading: 'かよう', meaning: 'uczęszczać / dojeżdżać' }, { word: '通り', reading: 'とおり', meaning: 'ulica' }] },
  { id: 'k262', kanji: '晴', meaning: 'pogodny / rozpogadzać się', onyomi: ['セイ'], kunyomi: ['は-れる', 'は-らす'], strokes: 12, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '晴れる', reading: 'はれる', meaning: 'rozpogadzać się' }, { word: '晴れ', reading: 'はれ', meaning: 'pogodnie' }, { word: '快晴', reading: 'かいせい', meaning: 'bezchmurne niebo' }] },
  { id: 'k263', kanji: '料', meaning: 'opłata / materiał', onyomi: ['リョウ'], kunyomi: [], strokes: 10, lesson: 'L17', category: 'food', grade: 'N5', examples: [{ word: '料理', reading: 'りょうり', meaning: 'gotowanie / potrawa' }, { word: '食料', reading: 'しょくりょう', meaning: 'żywność' }, { word: '料金', reading: 'りょうきん', meaning: 'opłata' }] },
  { id: 'k264', kanji: '数', meaning: 'liczba / liczyć', onyomi: ['スウ'], kunyomi: ['かず', 'かぞ-える'], strokes: 13, lesson: 'L17', category: 'number', grade: 'N5', examples: [{ word: '数', reading: 'かず', meaning: 'liczba' }, { word: '数える', reading: 'かぞえる', meaning: 'liczyć' }, { word: '数学', reading: 'すうがく', meaning: 'matematyka' }] },
  { id: 'k265', kanji: '由', meaning: 'przyczyna / powód', onyomi: ['ユ', 'ユウ'], kunyomi: ['よし'], strokes: 5, lesson: 'L17', category: 'nature', grade: 'N5', examples: [{ word: '自由', reading: 'じゆう', meaning: 'wolność' }, { word: '自由に', reading: 'じゆうに', meaning: 'swobodnie' }, { word: '理由', reading: 'りゆう', meaning: 'powód' }] },
  { id: 'k266', kanji: '乗', meaning: 'wsiadać / jechać', onyomi: ['ジョウ'], kunyomi: ['の-る', 'の-せる'], strokes: 9, lesson: 'L17', category: 'transport', grade: 'N5', examples: [{ word: '乗る', reading: 'のる', meaning: 'wsiadać / jechać pojazdem' }, { word: '乗り物', reading: 'のりもの', meaning: 'pojazd' }, { word: '乗客', reading: 'じょうきゃく', meaning: 'pasażer' }] },

  // L18
  { id: 'k267', kanji: '央', meaning: 'środek / centrum', onyomi: ['オウ'], kunyomi: [], strokes: 5, lesson: 'L18', category: 'place', grade: 'N5', examples: [{ word: '中央', reading: 'ちゅうおう', meaning: 'centrum / środek' }, { word: '中央口', reading: 'ちゅうおうぐち', meaning: 'wyjście centralne' }] },
  { id: 'k268', kanji: '台', meaning: 'podstawa / licznik maszyn', onyomi: ['ダイ', 'タイ'], kunyomi: [], strokes: 5, lesson: 'L18', category: 'home', grade: 'N5', examples: [{ word: '台', reading: 'だい', meaning: 'podstawa / postument' }, { word: '台所', reading: 'だいどころ', meaning: 'kuchnia' }, { word: '一台', reading: 'いちだい', meaning: 'jedna maszyna / pojazd' }] },
  { id: 'k269', kanji: '横', meaning: 'bok / w poprzek', onyomi: ['オウ'], kunyomi: ['よこ'], strokes: 15, lesson: 'L18', category: 'direction', grade: 'N5', examples: [{ word: '横', reading: 'よこ', meaning: 'bok / poziomo' }, { word: '横断歩道', reading: 'おうだんほどう', meaning: 'przejście dla pieszych' }] },
  { id: 'k270', kanji: '固', meaning: 'twardy / zastygać', onyomi: ['コ'], kunyomi: ['かた-い', 'かた-まる'], strokes: 8, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '固い', reading: 'かたい', meaning: 'twardy' }, { word: '固定する', reading: 'こていする', meaning: 'mocować / unieruchamiać' }] },
  { id: 'k271', kanji: '象', meaning: 'słoń / zjawisko', onyomi: ['ゾウ', 'ショウ'], kunyomi: [], strokes: 12, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '象', reading: 'ぞう', meaning: 'słoń' }, { word: '印象', reading: 'いんしょう', meaning: 'wrażenie' }] },
  { id: 'k272', kanji: '鼻', meaning: 'nos', onyomi: ['ビ'], kunyomi: ['はな'], strokes: 14, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '鼻', reading: 'はな', meaning: 'nos' }, { word: '鼻水', reading: 'はなみず', meaning: 'katar' }] },
  { id: 'k273', kanji: '首', meaning: 'szyja / głowa / przywódca', onyomi: ['シュ'], kunyomi: ['くび'], strokes: 9, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '首', reading: 'くび', meaning: 'szyja' }, { word: '手首', reading: 'てくび', meaning: 'nadgarstek' }, { word: '首相', reading: 'しゅしょう', meaning: 'premier' }] },
  { id: 'k274', kanji: '耳', meaning: 'ucho', onyomi: ['ジ'], kunyomi: ['みみ'], strokes: 6, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '耳', reading: 'みみ', meaning: 'ucho' }, { word: '初耳', reading: 'はつみみ', meaning: 'coś słyszanego po raz pierwszy' }] },
  { id: 'k275', kanji: '丸', meaning: 'okrągły / koło', onyomi: ['ガン'], kunyomi: ['まる', 'まる-い'], strokes: 3, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '丸い', reading: 'まるい', meaning: 'okrągły' }, { word: '丸', reading: 'まる', meaning: 'koło / okrąg' }, { word: '弾丸', reading: 'だんがん', meaning: 'kula / pocisk' }] },
  { id: 'k276', kanji: '毛', meaning: 'włos / sierść / wełna', onyomi: ['モウ'], kunyomi: ['け'], strokes: 4, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '毛', reading: 'け', meaning: 'włos / sierść' }, { word: '毛布', reading: 'もうふ', meaning: 'koc' }, { word: '髪の毛', reading: 'かみのけ', meaning: 'włosy na głowie' }] },
  { id: 'k277', kanji: '足', meaning: 'noga / stopa / wystarczać', onyomi: ['ソク'], kunyomi: ['あし', 'た-りる', 'た-す'], strokes: 7, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '足', reading: 'あし', meaning: 'noga / stopa' }, { word: '足りる', reading: 'たりる', meaning: 'wystarczać' }, { word: '遠足', reading: 'えんそく', meaning: 'wycieczka' }] },
  { id: 'k278', kanji: '角', meaning: 'róg / kąt', onyomi: ['カク'], kunyomi: ['かど', 'つの'], strokes: 7, lesson: 'L18', category: 'direction', grade: 'N5', examples: [{ word: '角', reading: 'かど', meaning: 'róg ulicy' }, { word: '三角', reading: 'さんかく', meaning: 'trójkąt' }, { word: '四角', reading: 'しかく', meaning: 'czworokąt' }] },
  { id: 'k279', kanji: '力', meaning: 'siła / moc', onyomi: ['リョク', 'リキ'], kunyomi: ['ちから'], strokes: 2, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '力', reading: 'ちから', meaning: 'siła' }, { word: '体力', reading: 'たいりょく', meaning: 'siła fizyczna' }, { word: '電力', reading: 'でんりょく', meaning: 'energia elektryczna' }] },
  { id: 'k280', kanji: '身', meaning: 'ciało / osoba / status', onyomi: ['シン'], kunyomi: ['み'], strokes: 7, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '身長', reading: 'しんちょう', meaning: 'wzrost' }, { word: '出身', reading: 'しゅっしん', meaning: 'pochodzenie' }, { word: '自身', reading: 'じしん', meaning: 'sam / osobiście' }] },
  { id: 'k281', kanji: '背', meaning: 'plecy / wzrost', onyomi: ['ハイ'], kunyomi: ['せ', 'せい', 'そむ-く'], strokes: 9, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '背', reading: 'せ', meaning: 'plecy / wzrost' }, { word: '背が高い', reading: 'せがたかい', meaning: 'wysoki (o osobie)' }, { word: '背景', reading: 'はいけい', meaning: 'tło' }] },
  { id: 'k282', kanji: '比', meaning: 'porównywać', onyomi: ['ヒ'], kunyomi: ['くら-べる'], strokes: 4, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '比べる', reading: 'くらべる', meaning: 'porównywać' }, { word: '比較', reading: 'ひかく', meaning: 'porównanie' }] },
  { id: 'k283', kanji: '世', meaning: 'świat / pokolenie', onyomi: ['セイ', 'セ'], kunyomi: ['よ'], strokes: 5, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '世界', reading: 'せかい', meaning: 'świat' }, { word: '世話', reading: 'せわ', meaning: 'opieka' }, { word: '世の中', reading: 'よのなか', meaning: 'świat / społeczeństwo' }] },
  { id: 'k284', kanji: '界', meaning: 'świat / granica', onyomi: ['カイ'], kunyomi: [], strokes: 9, lesson: 'L18', category: 'place', grade: 'N5', examples: [{ word: '世界', reading: 'せかい', meaning: 'świat' }, { word: '限界', reading: 'げんかい', meaning: 'granica / limit' }] },
  { id: 'k285', kanji: '熱', meaning: 'gorączka / ciepło', onyomi: ['ネツ'], kunyomi: ['あつ-い'], strokes: 15, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '熱', reading: 'ねつ', meaning: 'gorączka' }, { word: '熱い', reading: 'あつい', meaning: 'gorący (w dotyku)' }, { word: '熱心な', reading: 'ねっしんな', meaning: 'gorliwy' }] },
  { id: 'k286', kanji: '病', meaning: 'choroba', onyomi: ['ビョウ', 'ヘイ'], kunyomi: ['や-む'], strokes: 10, lesson: 'L18', category: 'people', grade: 'N5', examples: [{ word: '病気', reading: 'びょうき', meaning: 'choroba' }, { word: '病院', reading: 'びょういん', meaning: 'szpital' }, { word: '病人', reading: 'びょうにん', meaning: 'chory' }] },
  { id: 'k287', kanji: '院', meaning: 'instytucja / szpital / parlament', onyomi: ['イン'], kunyomi: [], strokes: 10, lesson: 'L18', category: 'place', grade: 'N5', examples: [{ word: '病院', reading: 'びょういん', meaning: 'szpital' }, { word: '大学院', reading: 'だいがくいん', meaning: 'studia magisterskie/doktoranckie' }, { word: '医院', reading: 'いいん', meaning: 'przychodnia' }] },
  { id: 'k288', kanji: '遠', meaning: 'daleki', onyomi: ['エン', 'オン'], kunyomi: ['とお-い'], strokes: 13, lesson: 'L18', category: 'direction', grade: 'N5', examples: [{ word: '遠い', reading: 'とおい', meaning: 'daleki' }, { word: '遠足', reading: 'えんそく', meaning: 'wycieczka' }, { word: '永遠', reading: 'えいえん', meaning: 'wieczność' }] },
  { id: 'k289', kanji: '寒', meaning: 'zimny (o pogodzie)', onyomi: ['カン'], kunyomi: ['さむ-い'], strokes: 12, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '寒い', reading: 'さむい', meaning: 'zimny (pogoda)' }, { word: '寒気', reading: 'さむけ', meaning: 'dreszcze' }] },
  { id: 'k290', kanji: '変', meaning: 'dziwny / zmieniać', onyomi: ['ヘン'], kunyomi: ['か-わる', 'か-える'], strokes: 9, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '変な', reading: 'へんな', meaning: 'dziwny' }, { word: '変わる', reading: 'かわる', meaning: 'zmieniać się' }, { word: '大変', reading: 'たいへん', meaning: 'trudny / straszny' }] },
  { id: 'k291', kanji: '度', meaning: 'stopień / raz / miara', onyomi: ['ド', 'ト', 'タク'], kunyomi: ['たび'], strokes: 9, lesson: 'L18', category: 'number', grade: 'N5', examples: [{ word: '一度', reading: 'いちど', meaning: 'jeden raz' }, { word: '今度', reading: 'こんど', meaning: 'następnym razem' }, { word: '温度', reading: 'おんど', meaning: 'temperatura' }] },
  { id: 'k292', kanji: '長', meaning: 'długi / szef', onyomi: ['チョウ'], kunyomi: ['なが-い'], strokes: 8, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '長い', reading: 'ながい', meaning: 'długi' }, { word: '社長', reading: 'しゃちょう', meaning: 'prezes firmy' }, { word: '校長', reading: 'こうちょう', meaning: 'dyrektor szkoły' }] },
  { id: 'k293', kanji: '近', meaning: 'bliski', onyomi: ['キン'], kunyomi: ['ちか-い'], strokes: 7, lesson: 'L18', category: 'direction', grade: 'N5', examples: [{ word: '近い', reading: 'ちかい', meaning: 'bliski' }, { word: '近く', reading: 'ちかく', meaning: 'w pobliżu' }, { word: '近所', reading: 'きんじょ', meaning: 'sąsiedztwo' }] },
  { id: 'k294', kanji: '低', meaning: 'niski', onyomi: ['テイ'], kunyomi: ['ひく-い'], strokes: 7, lesson: 'L18', category: 'nature', grade: 'N5', examples: [{ word: '低い', reading: 'ひくい', meaning: 'niski' }, { word: '低下する', reading: 'ていかする', meaning: 'spadać / obniżać się' }, { word: '最低', reading: 'さいてい', meaning: 'najniższy / najgorszy' }] },

  // L19
  { id: 'k295', kanji: '末', meaning: 'koniec / wierzchołek', onyomi: ['マツ', 'バツ'], kunyomi: ['すえ'], strokes: 5, lesson: 'L19', category: 'time', grade: 'N5', examples: [{ word: '末っ子', reading: 'すえっこ', meaning: 'najmłodsze dziecko' }, { word: '週末', reading: 'しゅうまつ', meaning: 'weekend' }, { word: '月末', reading: 'げつまつ', meaning: 'koniec miesiąca' }] },
  { id: 'k296', kanji: '村', meaning: 'wieś / wioska', onyomi: ['ソン'], kunyomi: ['むら'], strokes: 7, lesson: 'L19', category: 'place', grade: 'N5', examples: [{ word: '村', reading: 'むら', meaning: 'wieś' }, { word: '村人', reading: 'むらびと', meaning: 'mieszkaniec wsi' }] },
  { id: 'k297', kanji: '独', meaning: 'sam / pojedynczy / Niemcy', onyomi: ['ドク'], kunyomi: ['ひと-り'], strokes: 9, lesson: 'L19', category: 'people', grade: 'N5', examples: [{ word: '独身', reading: 'どくしん', meaning: 'stan wolny / kawaler / panna' }, { word: '独立', reading: 'どくりつ', meaning: 'niepodległość' }] },
  { id: 'k298', kanji: '育', meaning: 'wychowywać / rosnąć', onyomi: ['イク'], kunyomi: ['そだ-つ', 'そだ-てる'], strokes: 8, lesson: 'L19', category: 'school', grade: 'N5', examples: [{ word: '育つ', reading: 'そだつ', meaning: 'wychowywać się / rosnąć' }, { word: '教育', reading: 'きょういく', meaning: 'edukacja' }] },
  { id: 'k299', kanji: '汽', meaning: 'para / parowóz', onyomi: ['キ'], kunyomi: [], strokes: 7, lesson: 'L19', category: 'transport', grade: 'N5', examples: [{ word: '汽車', reading: 'きしゃ', meaning: 'parowóz / pociąg parowy' }, { word: '汽船', reading: 'きせん', meaning: 'statek parowy' }] },
  { id: 'k300', kanji: '術', meaning: 'sztuka / technika / metoda', onyomi: ['ジュツ'], kunyomi: ['すべ'], strokes: 11, lesson: 'L19', category: 'school', grade: 'N5', examples: [{ word: '手術', reading: 'しゅじゅつ', meaning: 'operacja chirurgiczna' }, { word: '美術', reading: 'びじゅつ', meaning: 'sztuki piękne' }, { word: '技術', reading: 'ぎじゅつ', meaning: 'technologia / technika' }] },
  { id: 'k301', kanji: '信', meaning: 'wierzyć / wiadomość / sygnał', onyomi: ['シン'], kunyomi: [], strokes: 9, lesson: 'L19', category: 'transport', grade: 'N5', examples: [{ word: '信号', reading: 'しんごう', meaning: 'światła drogowe / sygnalizacja' }, { word: '信じる', reading: 'しんじる', meaning: 'wierzyć / ufać' }] },
  { id: 'k302', kanji: '岸', meaning: 'brzeg / wybrzeże', onyomi: ['ガン'], kunyomi: ['きし'], strokes: 8, lesson: 'L19', category: 'nature', grade: 'N5', examples: [{ word: '海岸', reading: 'かいがん', meaning: 'wybrzeże morskie / plaża' }, { word: '岸', reading: 'きし', meaning: 'brzeg rzeki' }] },
  { id: 'k303', kanji: '主', meaning: 'pan / główny / właściciel', onyomi: ['シュ', 'ス'], kunyomi: ['おも', 'ぬし'], strokes: 5, lesson: 'L19', category: 'people', grade: 'N5', examples: [{ word: '主人', reading: 'しゅじん', meaning: 'mąż / gospodarz' }, { word: '主に', reading: 'おもに', meaning: 'głównie' }] },
  { id: 'k304', kanji: '祖', meaning: 'przodek', onyomi: ['ソ'], kunyomi: [], strokes: 9, lesson: 'L19', category: 'people', grade: 'N5', examples: [{ word: '祖父', reading: 'そふ', meaning: 'dziadek' }, { word: '祖母', reading: 'そぼ', meaning: 'babcia' }, { word: '先祖', reading: 'せんぞ', meaning: 'przodkowie' }] },
  { id: 'k305', kanji: '聞', meaning: 'słuchać / pytać / słyszeć', onyomi: ['ブン', 'モン'], kunyomi: ['き-く', 'き-こえる'], strokes: 14, lesson: 'L19', category: 'school', grade: 'N5', examples: [{ word: '聞く', reading: 'きく', meaning: 'słuchać / pytać' }, { word: '新聞', reading: 'しんぶん', meaning: 'gazeta' }] },
  { id: 'k306', kanji: '弱', meaning: 'słaby', onyomi: ['ジャク'], kunyomi: ['よわ-い'], strokes: 10, lesson: 'L19', category: 'nature', grade: 'N5', examples: [{ word: '弱い', reading: 'よわい', meaning: 'słaby' }, { word: '弱点', reading: 'じゃくてん', meaning: 'słaby punkt' }] },
  { id: 'k307', kanji: '弟', meaning: 'młodszy brat', onyomi: ['テイ', 'ダイ'], kunyomi: ['おとうと'], strokes: 7, lesson: 'L19', category: 'people', grade: 'N5', examples: [{ word: '弟', reading: 'おとうと', meaning: 'młodszy brat' }, { word: '兄弟', reading: 'きょうだい', meaning: 'rodzeństwo' }] },
  { id: 'k308', kanji: '映', meaning: 'odbijać / film', onyomi: ['エイ'], kunyomi: ['うつ-る', 'うつ-す'], strokes: 9, lesson: 'L19', category: 'school', grade: 'N5', examples: [{ word: '映画', reading: 'えいが', meaning: 'film' }, { word: '映画館', reading: 'えいがかん', meaning: 'kino' }] },
  { id: 'k309', kanji: '集', meaning: 'zbierać / gromadzić', onyomi: ['シュウ'], kunyomi: ['あつ-まる', 'あつ-める'], strokes: 12, lesson: 'L19', category: 'people', grade: 'N5', examples: [{ word: '集まる', reading: 'あつまる', meaning: 'zbierać się / gromadzić' }, { word: '集合', reading: 'しゅうごう', meaning: 'zbiórka' }] },
  { id: 'k310', kanji: '楽', meaning: 'muzyka / przyjemny / łatwy', onyomi: ['ガク', 'ラク'], kunyomi: ['たの-しい'], strokes: 13, lesson: 'L19', category: 'school', grade: 'N5', examples: [{ word: '音楽', reading: 'おんがく', meaning: 'muzyka' }, { word: '楽しい', reading: 'たのしい', meaning: 'przyjemny / wesoły' }, { word: '気楽', reading: 'きらく', meaning: 'swobodny' }] },
  { id: 'k311', kanji: '渡', meaning: 'przechodzić / przekraczać', onyomi: ['ト'], kunyomi: ['わた-る', 'わた-す'], strokes: 12, lesson: 'L19', category: 'transport', grade: 'N5', examples: [{ word: '渡る', reading: 'わたる', meaning: 'przechodzić (np. przez most)' }, { word: '渡す', reading: 'わたす', meaning: 'przekazywać / wręczać' }] },
  { id: 'k312', kanji: '農', meaning: 'rolnictwo / uprawa', onyomi: ['ノウ'], kunyomi: [], strokes: 13, lesson: 'L19', category: 'place', grade: 'N5', examples: [{ word: '農業', reading: 'のうぎょう', meaning: 'rolnictwo' }, { word: '農家', reading: 'のうか', meaning: 'gospodarstwo rolne / rolnik' }] },
  { id: 'k313', kanji: '朝', meaning: 'rano / poranek', onyomi: ['チョウ'], kunyomi: ['あさ'], strokes: 12, lesson: 'L19', category: 'time', grade: 'N5', examples: [{ word: '朝', reading: 'あさ', meaning: 'rano / poranek' }, { word: '今朝', reading: 'けさ', meaning: 'dziś rano' }, { word: '朝食', reading: 'ちょうしょく', meaning: 'śniadanie' }] },
  { id: 'k314', kanji: '始', meaning: 'zaczynać / początek', onyomi: ['シ'], kunyomi: ['はじ-まる', 'はじ-める'], strokes: 8, lesson: 'L19', category: 'time', grade: 'N5', examples: [{ word: '始まる', reading: 'はじまる', meaning: 'zaczynać się' }, { word: '始める', reading: 'はじめる', meaning: 'rozpoczynać coś' }, { word: '開始', reading: 'かいし', meaning: 'rozpoczęcie' }] },
  { id: 'k315', kanji: '住', meaning: 'mieszkać / zamieszkiwać', onyomi: ['ジュウ'], kunyomi: ['す-む', 'す-まう'], strokes: 7, lesson: 'L19', category: 'place', grade: 'N5', examples: [{ word: '住む', reading: 'すむ', meaning: 'mieszkać' }, { word: '住所', reading: 'じゅうしょ', meaning: 'adres zamieszkania' }] },

  // L20
  { id: 'k316', kanji: '将', meaning: 'generał / w przyszłości', onyomi: ['ショウ'], kunyomi: [], strokes: 10, lesson: 'L20', category: 'time', grade: 'N5', examples: [{ word: '将来', reading: 'しょうらい', meaning: 'przyszłość' }, { word: '将軍', reading: 'しょうぐん', meaning: 'szogun' }] },
  { id: 'k317', kanji: '卒', meaning: 'absolwent / kończyć szkołę', onyomi: ['ソツ'], kunyomi: [], strokes: 8, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '卒業', reading: 'そつぎょう', meaning: 'ukończenie szkoły' }, { word: '卒業生', reading: 'そつぎょうせい', meaning: 'absolwent' }] },
  { id: 'k318', kanji: '論', meaning: 'teoria / dyskusja / rozprawa', onyomi: ['ロン'], kunyomi: [], strokes: 15, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '論文', reading: 'ろんぶん', meaning: 'praca naukowa / esej' }, { word: '討論', reading: 'とうろん', meaning: 'debata' }] },
  { id: 'k319', kanji: '統', meaning: 'zarządzać / jednoczyć', onyomi: ['トウ'], kunyomi: ['す-べる'], strokes: 12, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '統計', reading: 'とうけい', meaning: 'statystyka' }, { word: '大統領', reading: 'だいとうりょう', meaning: 'prezydent' }] },
  { id: 'k320', kanji: '資', meaning: 'kapitał / zasoby / dane', onyomi: ['シ'], kunyomi: [], strokes: 13, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '資料', reading: 'しりょう', meaning: 'materiały / dane' }, { word: '資本', reading: 'しほん', meaning: 'kapitał' }] },
  { id: 'k321', kanji: '経', meaning: 'upływać / zarządzać / ekonomia', onyomi: ['ケイ', 'キョウ'], kunyomi: ['へ-る'], strokes: 11, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '経済', reading: 'けいざい', meaning: 'ekonomia / gospodarka' }, { word: '経験', reading: 'けいけん', meaning: 'doświadczenie' }] },
  { id: 'k322', kanji: '営', meaning: 'prowadzić interes / zarządzać', onyomi: ['エイ'], kunyomi: ['いとな-む'], strokes: 12, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '経営', reading: 'けいえい', meaning: 'zarządzanie przedsiębiorstwem' }, { word: '営業', reading: 'えいぎょう', meaning: 'biznes / sprzedaż' }] },
  { id: 'k323', kanji: '専', meaning: 'specjalność / wyłączny', onyomi: ['セン'], kunyomi: ['もっぱ-ら'], strokes: 9, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '専門', reading: 'せんもん', meaning: 'specjalizacja / specjalność' }, { word: '専攻', reading: 'せんこう', meaning: 'kierunek studiów' }] },
  { id: 'k324', kanji: '進', meaning: 'posuwać się naprzód / awansować', onyomi: ['シン'], kunyomi: ['すす-む', 'すす-める'], strokes: 11, lesson: 'L20', category: 'direction', grade: 'N5', examples: [{ word: '進む', reading: 'すすむ', meaning: 'iść do przodu / robić postępy' }, { word: '進行', reading: 'しんこう', meaning: 'postęp' }] },
  { id: 'k325', kanji: '留', meaning: 'zatrzymywać / przebywać za granicą', onyomi: ['リュウ', 'ル'], kunyomi: ['と-まる', 'と-める'], strokes: 10, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '留学生', reading: 'りゅうがくせい', meaning: 'student zagraniczny' }, { word: '留学', reading: 'りゅうがく', meaning: 'studia za granicą' }] },
  { id: 'k326', kanji: '政', meaning: 'polityka / rządy', onyomi: ['セイ', 'ショウ'], kunyomi: ['まつりごと'], strokes: 9, lesson: 'L20', category: 'people', grade: 'N5', examples: [{ word: '政治', reading: 'せいじ', meaning: 'polityka' }, { word: '政府', reading: 'せいふ', meaning: 'rząd' }] },
  { id: 'k327', kanji: '研', meaning: 'szlifować / badać', onyomi: ['ケン'], kunyomi: ['と-ぐ'], strokes: 9, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '研究', reading: 'けんきゅう', meaning: 'badania naukowe' }, { word: '研究所', reading: 'けんきゅうじょ', meaning: 'instytut badawczy' }] },
  { id: 'k328', kanji: '究', meaning: 'zgłębiać / dociekać', onyomi: ['キュウ'], kunyomi: ['きわ-める'], strokes: 7, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '研究者', reading: 'けんきゅうしゃ', meaning: 'naukowiec / badacz' }, { word: '研究', reading: 'けんきゅう', meaning: 'badania' }] },
  { id: 'k329', kanji: '的', meaning: 'cel / przyrostek przymiotnikowy', onyomi: ['テキ'], kunyomi: ['まと'], strokes: 8, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '目的', reading: 'もくてき', meaning: 'cel' }, { word: '的', reading: 'まと', meaning: 'tarcza / cel' }] },
  { id: 'k330', kanji: '橋', meaning: 'most', onyomi: ['キョウ'], kunyomi: ['はし'], strokes: 16, lesson: 'L20', category: 'place', grade: 'N5', examples: [{ word: '橋', reading: 'はし', meaning: 'most' }, { word: '歩道橋', reading: 'ほどうきょう', meaning: 'kładka dla pieszych' }] },
  { id: 'k331', kanji: '表', meaning: 'powierzchnia / tablica / wyrażać', onyomi: ['ヒョウ'], kunyomi: ['おもて', 'あらわ-す'], strokes: 8, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '表', reading: 'おもて', meaning: 'wierzch / przód' }, { word: '発表', reading: 'はっぴょう', meaning: 'prezentacja / ogłoszenie' }] },
  { id: 'k332', kanji: '放', meaning: 'uwalniać / puszczać', onyomi: ['ホウ'], kunyomi: ['はな-す', 'はな-つ'], strokes: 8, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '放送', reading: 'ほうそう', meaning: 'transmisja / nadawanie' }, { word: '放す', reading: 'はなす', meaning: 'puszczać / uwalniać' }] },
  { id: 'k333', kanji: '局', meaning: 'biuro / wydział / stacja', onyomi: ['キョク'], kunyomi: [], strokes: 7, lesson: 'L20', category: 'place', grade: 'N5', examples: [{ word: '郵便局', reading: 'ゆうびんきょく', meaning: 'poczta' }, { word: '薬局', reading: 'やっきょく', meaning: 'apteka' }] },
  { id: 'k334', kanji: '史', meaning: 'historia / kronika', onyomi: ['シ'], kunyomi: [], strokes: 5, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '歴史', reading: 'れきし', meaning: 'historia' }, { word: '日本史', reading: 'にほんし', meaning: 'historia Japonii' }] },
  { id: 'k335', kanji: '新', meaning: 'nowy', onyomi: ['シン'], kunyomi: ['あたら-しい', 'あら-た'], strokes: 13, lesson: 'L20', category: 'nature', grade: 'N5', examples: [{ word: '新しい', reading: 'あたらしい', meaning: 'nowy' }, { word: '新年', reading: 'しんねん', meaning: 'Nowy Rok' }, { word: '新幹線', reading: 'しんかんせん', meaning: 'Shinkansen' }] },
  { id: 'k336', kanji: '帰', meaning: 'wracać do domu', onyomi: ['キ'], kunyomi: ['かえ-る', 'かえ-す'], strokes: 10, lesson: 'L20', category: 'transport', grade: 'N5', examples: [{ word: '帰る', reading: 'かえる', meaning: 'wracać' }, { word: '帰国', reading: 'きこく', meaning: 'powrót do ojczyzny' }] },
  { id: 'k337', kanji: '暑', meaning: 'gorący (o klimacie/pogodzie)', onyomi: ['ショ'], kunyomi: ['あつ-い'], strokes: 12, lesson: 'L20', category: 'time', grade: 'N5', examples: [{ word: '暑い', reading: 'あつい', meaning: 'gorący' }, { word: '残暑', reading: 'ざんしょ', meaning: 'późnoletnie upały' }] },
  { id: 'k338', kanji: '英', meaning: 'Anglia / wybitny / bohater', onyomi: ['エイ'], kunyomi: [], strokes: 8, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '英語', reading: 'えいご', meaning: 'język angielski' }, { word: '英国', reading: 'えいこく', meaning: 'Wielka Brytania' }] },
  { id: 'k339', kanji: '組', meaning: 'grupa / składać / zestaw', onyomi: ['ソ'], kunyomi: ['く-む', 'くみ'], strokes: 11, lesson: 'L20', category: 'people', grade: 'N5', examples: [{ word: '組', reading: 'くみ', meaning: 'klasa / grupa' }, { word: '番組', reading: 'ばんぐみ', meaning: 'program telewizyjny' }] },
  { id: 'k340', kanji: '返', meaning: 'oddawać / zwracać', onyomi: ['ヘン'], kunyomi: ['かえ-す', 'かえ-る'], strokes: 7, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '返す', reading: 'かえす', meaning: 'zwracać / oddawać' }, { word: '返事', reading: 'へんじ', meaning: 'odpowiedź' }] },
  { id: 'k341', kanji: '等', meaning: 'równy / i tak dalej / klasa', onyomi: ['トウ'], kunyomi: ['ひと-しい'], strokes: 12, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '高等', reading: 'こうとう', meaning: 'wyższy / zaawansowany' }, { word: '平等', reading: 'びょうどう', meaning: 'równość' }] },
  { id: 'k342', kanji: '洋', meaning: 'ocean / zachodni', onyomi: ['ヨウ'], kunyomi: [], strokes: 9, lesson: 'L20', category: 'place', grade: 'N5', examples: [{ word: '洋服', reading: 'ようふく', meaning: 'ubranie w stylu zachodnim' }, { word: '太平洋', reading: 'たいへいよう', meaning: 'Ocean Spokojny' }] },
  { id: 'k343', kanji: '服', meaning: 'ubranie / odzież', onyomi: ['フク'], kunyomi: [], strokes: 8, lesson: 'L20', category: 'people', grade: 'N5', examples: [{ word: '服', reading: 'ふく', meaning: 'ubranie' }, { word: '和服', reading: 'わふく', meaning: 'tradycyjny strój japoński' }] },
  { id: 'k344', kanji: '危', meaning: 'niebezpieczny', onyomi: ['キ'], kunyomi: ['あぶ-ない', 'あや-うい'], strokes: 6, lesson: 'L20', category: 'nature', grade: 'N5', examples: [{ word: '危ない', reading: 'あぶない', meaning: 'niebezpieczny' }, { word: '危機', reading: 'きき', meaning: 'kryzys' }] },
  { id: 'k345', kanji: '結', meaning: 'wiązać / łączyć', onyomi: ['ケツ', 'ケチ'], kunyomi: ['むす-ぶ', 'ゆ-う'], strokes: 12, lesson: 'L20', category: 'people', grade: 'N5', examples: [{ word: '結婚', reading: 'けっこん', meaning: 'małżeństwo' }, { word: '結ぶ', reading: 'むすぶ', meaning: 'wiązać' }, { word: '結果', reading: 'けっか', meaning: 'rezultat / wynik' }] },
  { id: 'k346', kanji: '婚', meaning: 'małżeństwo', onyomi: ['コン'], kunyomi: [], strokes: 11, lesson: 'L20', category: 'people', grade: 'N5', examples: [{ word: '結婚する', reading: 'けっこんする', meaning: 'brać ślub' }, { word: '婚約', reading: 'こんやく', meaning: 'zaręczyny' }] },
  { id: 'k347', kanji: '失', meaning: 'tracić / błąd', onyomi: ['シツ'], kunyomi: ['うしな-う'], strokes: 5, lesson: 'L20', category: 'people', grade: 'N5', examples: [{ word: '失礼', reading: 'しつれい', meaning: 'nieuprzejmość / przepraszam' }, { word: '失敗', reading: 'しっぱい', meaning: 'porażka' }] },
  { id: 'k348', kanji: '礼', meaning: 'etykieta / ukłon / wdzięczność', onyomi: ['レイ', 'ライ'], kunyomi: [], strokes: 5, lesson: 'L20', category: 'people', grade: 'N5', examples: [{ word: 'お礼', reading: 'おれい', meaning: 'podziękowanie' }, { word: '失礼します', reading: 'しつれいします', meaning: 'przepraszam' }] },
  { id: 'k349', kanji: '訳', meaning: 'tłumaczenie / powód', onyomi: ['ヤク'], kunyomi: ['わけ'], strokes: 11, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '通訳', reading: 'つうやく', meaning: 'tłumacz ustny' }, { word: '翻訳', reading: 'ほんやく', meaning: 'tłumaczenie pisemne' }] },
  { id: 'k350', kanji: '絵', meaning: 'obraz / rysunek', onyomi: ['カイ', 'エ'], kunyomi: [], strokes: 12, lesson: 'L20', category: 'school', grade: 'N5', examples: [{ word: '絵', reading: 'え', meaning: 'obraz / rysunek' }, { word: '絵画', reading: 'かいが', meaning: 'malarstwo' }] },
  { id: 'k351', kanji: '糸', meaning: 'nić', onyomi: ['シ'], kunyomi: ['いと'], strokes: 6, lesson: 'L20', category: 'nature', grade: 'N5', examples: [{ word: '糸', reading: 'いと', meaning: 'nić' }, { word: '毛糸', reading: 'けいと', meaning: 'włóczka' }] },
  { id: 'k352', kanji: '面', meaning: 'twarz / powierzchnia / maska', onyomi: ['メン', 'ベン'], kunyomi: ['おもて', 'つら'], strokes: 9, lesson: 'L20', category: 'people', grade: 'N5', examples: [{ word: '面接', reading: 'めんせつ', meaning: 'rozmowa kwalifikacyjna' }, { word: '方面', reading: 'ほうめん', meaning: 'kierunek' }] },

  // L21
  { id: 'k353', kanji: '相', meaning: 'wzajemny / minister', onyomi: ['ソウ', 'ショウ'], kunyomi: ['あい'], strokes: 9, lesson: 'L21', category: 'people', grade: 'N5', examples: [{ word: '相談', reading: 'そうだん', meaning: 'konsultacja / narada' }, { word: '相手', reading: 'あいて', meaning: 'partner / rozmówca' }] },
  { id: 'k354', kanji: '談', meaning: 'rozmawiać / dyskutować', onyomi: ['ダン'], kunyomi: [], strokes: 15, lesson: 'L21', category: 'people', grade: 'N5', examples: [{ word: '相談する', reading: 'そうだんする', meaning: 'konsultować się' }, { word: '対談', reading: 'たいだん', meaning: 'dialog' }] },
  { id: 'k355', kanji: '議', meaning: 'obradować / debatować', onyomi: ['ギ'], kunyomi: [], strokes: 20, lesson: 'L21', category: 'people', grade: 'N5', examples: [{ word: '会議', reading: 'かいぎ', meaning: 'konferencja / zebranie' }, { word: '議員', reading: 'ぎいん', meaning: 'poseł / parlamentarzysta' }] },
  { id: 'k356', kanji: '呼', meaning: 'wołać / nazywać', onyomi: ['コ'], kunyomi: ['よ-ぶ'], strokes: 8, lesson: 'L21', category: 'people', grade: 'N5', examples: [{ word: '呼ぶ', reading: 'よぶ', meaning: 'wołać / zapraszać' }, { word: '呼吸', reading: 'こきゅう', meaning: 'oddychanie' }] },
  { id: 'k357', kanji: '覚', meaning: 'pamiętać / budzić się', onyomi: ['カク'], kunyomi: ['おぼ-える', 'さ-ます', 'さ-める'], strokes: 12, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '覚える', reading: 'おぼえる', meaning: 'zapamiętywać' }, { word: '目が覚める', reading: 'めがさめる', meaning: 'budzić się' }] },
  { id: 'k358', kanji: '練', meaning: 'ćwiczyć / doskonalić', onyomi: ['レン'], kunyomi: ['ね-る'], strokes: 14, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '練習', reading: 'れんしゅう', meaning: 'ćwiczenie' }, { word: '訓練', reading: 'くんれん', meaning: 'trening' }] },
  { id: 'k359', kanji: '続', meaning: 'kontynuować / trwać', onyomi: ['ゾク'], kunyomi: ['つづ-く', 'つづ-ける'], strokes: 13, lesson: 'L21', category: 'time', grade: 'N5', examples: [{ word: '続く', reading: 'つづく', meaning: 'trwać / ciągnąć się' }, { word: '続ける', reading: 'つづける', meaning: 'kontynuować' }] },
  { id: 'k360', kanji: '苦', meaning: 'gorzki / cierpienie / ból', onyomi: ['ク'], kunyomi: ['くる-しい', 'にが-い'], strokes: 8, lesson: 'L21', category: 'nature', grade: 'N5', examples: [{ word: '苦い', reading: 'にがい', meaning: 'gorzki' }, { word: '苦しい', reading: 'くるしい', meaning: 'bolesny / ciężki' }] },
  { id: 'k361', kanji: '系', meaning: 'system / linia / powiązanie', onyomi: ['ケイ'], kunyomi: [], strokes: 7, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '体系', reading: 'たいけい', meaning: 'system' }, { word: '日系', reading: 'にっけい', meaning: 'pochodzenia japońskiego' }] },
  { id: 'k362', kanji: '理', meaning: 'logika / rozum / zasada', onyomi: ['リ'], kunyomi: [], strokes: 11, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '料理', reading: 'りょうり', meaning: 'gotowanie / kuchnia' }, { word: '理由', reading: 'りゆう', meaning: 'powód / przyczyna' }] },
  { id: 'k363', kanji: '条', meaning: 'artykuł / paragraf / pas', onyomi: ['ジョウ'], kunyomi: [], strokes: 7, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '条件', reading: 'じょうけん', meaning: 'warunek' }, { word: '第一条', reading: 'だいいちじょう', meaning: 'artykuł pierwszy' }] },
  { id: 'k364', kanji: '件', meaning: 'sprawa / przypadek', onyomi: ['ケン'], kunyomi: [], strokes: 6, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '事件', reading: 'じけん', meaning: 'incydent / sprawa kryminalna' }, { word: '件名', reading: 'けんめい', meaning: 'temat (sprawy/listu)' }] },
  { id: 'k365', kanji: '復', meaning: 'powrót / powtarzać', onyomi: ['フク'], kunyomi: [], strokes: 12, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '復習', reading: 'ふくしゅう', meaning: 'powtórka materiału' }, { word: '往復', reading: 'おうふく', meaning: 'bilet w obie strony' }] },
  { id: 'k366', kanji: '風', meaning: 'wiatr / styl', onyomi: ['フウ', 'フ'], kunyomi: ['かぜ'], strokes: 9, lesson: 'L21', category: 'nature', grade: 'N5', examples: [{ word: '風', reading: 'かぜ', meaning: 'wiatr' }, { word: '台風', reading: 'たいふう', meaning: 'tajfun' }] },
  { id: 'k367', kanji: '価', meaning: 'wartość / cena', onyomi: ['カ'], kunyomi: ['あたい'], strokes: 8, lesson: 'L21', category: 'number', grade: 'N5', examples: [{ word: '物価', reading: 'ぶっか', meaning: 'ceny towarów' }, { word: '価格', reading: 'かかく', meaning: 'cena' }] },
  { id: 'k368', kanji: '答', meaning: 'odpowiedź / odpowiadać', onyomi: ['トウ'], kunyomi: ['こた-える', 'こた-え'], strokes: 12, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '答える', reading: 'こたえる', meaning: 'odpowiadać' }, { word: '答え', reading: 'こたえ', meaning: 'odpowiedź' }] },
  { id: 'k369', kanji: '漢', meaning: 'chiński / dynastia Han', onyomi: ['カン'], kunyomi: [], strokes: 13, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '漢字', reading: 'かんじ', meaning: 'znaki kanji' }, { word: '漢方薬', reading: 'かんぽうやく', meaning: 'tradycyjne leki chińskie' }] },
  { id: 'k370', kanji: '険', meaning: 'stromy / niebezpieczny', onyomi: ['ケン'], kunyomi: ['けわ-しい'], strokes: 11, lesson: 'L21', category: 'nature', grade: 'N5', examples: [{ word: '保険', reading: 'ほけん', meaning: 'ubezpieczenie' }, { word: '危険', reading: 'きけん', meaning: 'niebezpieczeństwo' }] },
  { id: 'k371', kanji: '困', meaning: 'kłopot / trudność', onyomi: ['コン'], kunyomi: ['こま-る'], strokes: 7, lesson: 'L21', category: 'people', grade: 'N5', examples: [{ word: '困る', reading: 'こまる', meaning: 'mieć kłopoty / nie wiedzieć co zrobić' }, { word: '困難', reading: 'こんなん', meaning: 'trudność' }] },
  { id: 'k372', kanji: '習', meaning: 'uczyć się / nawyk', onyomi: ['シュウ'], kunyomi: ['なら-う'], strokes: 11, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '習う', reading: 'ならう', meaning: 'uczyć się (od kogoś)' }, { word: '習慣', reading: 'しゅうかん', meaning: 'zwyczaj' }] },
  { id: 'k373', kanji: '午', meaning: 'południe (pora dnia)', onyomi: ['ゴ'], kunyomi: [], strokes: 4, lesson: 'L21', category: 'time', grade: 'N5', examples: [{ word: '午前', reading: 'ごぜん', meaning: 'przedpołudnie (AM)' }, { word: '午後', reading: 'ごご', meaning: 'popołudnie (PM)' }, { word: '正午', reading: 'しょうご', meaning: 'dokładnie południe (12:00)' }] },
  { id: 'k374', kanji: '終', meaning: 'koniec / kończyć', onyomi: ['シュウ'], kunyomi: ['お-わる', 'お-える'], strokes: 11, lesson: 'L21', category: 'time', grade: 'N5', examples: [{ word: '終わる', reading: 'おわる', meaning: 'kończyć się' }, { word: '終電', reading: 'しゅうでん', meaning: 'ostatni pociąg' }] },
  { id: 'k375', kanji: '丈', meaning: 'miara / wzrost / silny', onyomi: ['ジョウ'], kunyomi: ['たけ'], strokes: 3, lesson: 'L21', category: 'people', grade: 'N5', examples: [{ word: '大丈夫', reading: 'だいじょうぶ', meaning: 'w porządku / bezpiecznie' }, { word: '丈夫な', reading: 'じょうぶな', meaning: 'wytrzymały / silny' }] },
  { id: 'k376', kanji: '夫', meaning: 'mąż / mężczyzna', onyomi: ['フ', 'フウ'], kunyomi: ['おっと'], strokes: 4, lesson: 'L21', category: 'people', grade: 'N5', examples: [{ word: '夫', reading: 'おっと', meaning: 'mąż' }, { word: '夫婦', reading: 'ふうふ', meaning: 'małżeństwo' }] },
  { id: 'k377', kanji: '待', meaning: 'czekać', onyomi: ['タイ'], kunyomi: ['ま-つ'], strokes: 9, lesson: 'L21', category: 'time', grade: 'N5', examples: [{ word: '待つ', reading: 'まつ', meaning: 'czekać' }, { word: '招待', reading: 'しょうたい', meaning: 'zaproszenie' }] },
  { id: 'k378', kanji: '教', meaning: 'nauka / religia / uczyć', onyomi: ['キョウ'], kunyomi: ['おし-える', 'おそ-わる'], strokes: 11, lesson: 'L21', category: 'school', grade: 'N5', examples: [{ word: '教える', reading: 'おしえる', meaning: 'uczyć kogoś / objaśniać' }, { word: '教室', reading: 'きょうしつ', meaning: 'sala lekcyjna' }] },
  { id: 'k379', kanji: '予', meaning: 'wcześniej / z góry', onyomi: ['ヨ'], kunyomi: ['あらかじ-め'], strokes: 4, lesson: 'L21', category: 'time', grade: 'N5', examples: [{ word: '予定', reading: 'よてい', meaning: 'plan / harmonogram' }, { word: '予約', reading: 'よやく', meaning: 'rezerwacja' }] },
  { id: 'k380', kanji: '定', meaning: 'ustalać / decydować', onyomi: ['テイ', 'ジョウ'], kunyomi: ['さだ-める', 'さだ-まる'], strokes: 8, lesson: 'L21', category: 'time', grade: 'N5', examples: [{ word: '定期', reading: 'ていき', meaning: 'okresowy / bilet miesięczny' }, { word: '定食', reading: 'ていしょく', meaning: 'zestaw obiadowy' }] },
  { id: 'k381', kanji: '夏', meaning: 'lato', onyomi: ['カ', 'ゲ'], kunyomi: ['なつ'], strokes: 10, lesson: 'L21', category: 'time', grade: 'N5', examples: [{ word: '夏', reading: 'なつ', meaning: 'lato' }, { word: '夏休み', reading: 'なつやすみ', meaning: 'wakacje letnie' }] },

  // L22
  { id: 'k382', kanji: '祭', meaning: 'festiwal / święto', onyomi: ['サイ'], kunyomi: ['まつ-り', 'まつ-る'], strokes: 11, lesson: 'L22', category: 'place', grade: 'N5', examples: [{ word: '祭り', reading: 'まつり', meaning: 'tradycyjny festiwal matsuri' }, { word: '文化祭', reading: 'ぶんかさい', meaning: 'festiwal kultury' }] },
  { id: 'k383', kanji: '害', meaning: 'szkoda / uszczerbek', onyomi: ['ガイ'], kunyomi: [], strokes: 10, lesson: 'L22', category: 'nature', grade: 'N5', examples: [{ word: '公害', reading: 'こうがい', meaning: 'zanieczyszczenie środowiska' }, { word: '損害', reading: 'そんがい', meaning: 'strata / szkoda' }] },
  { id: 'k384', kanji: '然', meaning: 'taki jak / tak więc / natura', onyomi: ['ゼン', 'ネン'], kunyomi: [], strokes: 12, lesson: 'L22', category: 'nature', grade: 'N5', examples: [{ word: '自然', reading: 'しぜん', meaning: 'natura / przyroda' }, { word: '全然', reading: 'ぜんぜん', meaning: 'wcale / zupełnie' }] },
  { id: 'k385', kanji: '案', meaning: 'plan / propozycja / myśl', onyomi: ['アン'], kunyomi: [], strokes: 10, lesson: 'L22', category: 'school', grade: 'N5', examples: [{ word: '案内', reading: 'あんない', meaning: 'oprowadzanie / przewodnik' }, { word: '提案', reading: 'ていあん', meaning: 'propozycja' }] },
  { id: 'k386', kanji: '内', meaning: 'wewnątrz / dom', onyomi: ['ナイ', 'ダイ'], kunyomi: ['うち'], strokes: 4, lesson: 'L22', category: 'direction', grade: 'N5', examples: [{ word: '案内所', reading: 'あんないじょ', meaning: 'punkt informacji' }, { word: '国内', reading: 'こくない', meaning: 'krajowy / wewnątrz kraju' }] },
  { id: 'k387', kanji: '直', meaning: 'prosty / naprawiać / bezpośredni', onyomi: ['チョク', 'ジキ'], kunyomi: ['ただ-ちに', 'なお-す', 'なお-る'], strokes: 8, lesson: 'L22', category: 'direction', grade: 'N5', examples: [{ word: '直す', reading: 'なおす', meaning: 'poprawiać / naprawiać' }, { word: '直ぐに', reading: 'すぐに', meaning: 'zaraz / natychmiast' }] },
  { id: 'k388', kanji: '喜', meaning: 'cieszyć się / radość', onyomi: ['キ'], kunyomi: ['よろこ-ぶ'], strokes: 12, lesson: 'L22', category: 'people', grade: 'N5', examples: [{ word: '喜ぶ', reading: 'よろこぶ', meaning: 'cieszyć się' }, { word: '大喜び', reading: 'おおよろこび', meaning: 'wielka radość' }] },
  { id: 'k389', kanji: '並', meaning: 'stawiać w rzędzie / zwykły', onyomi: ['ヘイ'], kunyomi: ['なら-ぶ', 'なら-べる', 'なみ'], strokes: 8, lesson: 'L22', category: 'direction', grade: 'N5', examples: [{ word: '並ぶ', reading: 'ならぶ', meaning: 'stać w kolejce' }, { word: '並べる', reading: 'ならべる', meaning: 'układać w rzędzie' }] },
  { id: 'k390', kanji: '品', meaning: 'towar / jakość', onyomi: ['ヒン'], kunyomi: ['しな'], strokes: 9, lesson: 'L22', category: 'place', grade: 'N5', examples: [{ word: '品物', reading: 'しなもの', meaning: 'towar / artykuł' }, { word: '作品', reading: 'さくひん', meaning: 'dzieło' }] },
  { id: 'k391', kanji: '招', meaning: 'zapraszać / wzywać', onyomi: ['ショウ'], kunyomi: ['まね-く'], strokes: 8, lesson: 'L22', category: 'people', grade: 'N5', examples: [{ word: '招く', reading: 'まねく', meaning: 'zapraszać' }, { word: '招待', reading: 'しょうたい', meaning: 'zaproszenie' }] },
  { id: 'k392', kanji: '念', meaning: 'myśl / troska / uwaga', onyomi: ['ネン'], kunyomi: [], strokes: 8, lesson: 'L22', category: 'school', grade: 'N5', examples: [{ word: '記念', reading: 'きねん', meaning: 'pamiątka' }, { word: '残念', reading: 'ざんねん', meaning: 'szkoda / żal' }] },
  { id: 'k393', kanji: '助', meaning: 'pomagać / ratować', onyomi: ['ジョ'], kunyomi: ['たす-ける', 'たす-かる'], strokes: 7, lesson: 'L22', category: 'people', grade: 'N5', examples: [{ word: '助ける', reading: 'たすける', meaning: 'pomagać / ratować' }, { word: '助かる', reading: 'たすかる', meaning: 'być uratowanym' }] },
  { id: 'k394', kanji: '財', meaning: 'majątek / finanse', onyomi: ['ザイ', 'サイ'], kunyomi: [], strokes: 10, lesson: 'L22', category: 'number', grade: 'N5', examples: [{ word: '財布', reading: 'さいふ', meaning: 'portfel' }, { word: '財産', reading: 'ざいさん', meaning: 'majątek' }] },
  { id: 'k395', kanji: '布', meaning: 'tkanina / płótno', onyomi: ['フ'], kunyomi: ['ぬの'], strokes: 5, lesson: 'L22', category: 'nature', grade: 'N5', examples: [{ word: '布', reading: 'ぬの', meaning: 'tkanina' }, { word: '財布', reading: 'さいふ', meaning: 'portfel' }] },
  { id: 'k396', kanji: '合', meaning: 'pasować / łączyć / spotykać', onyomi: ['ゴウ', 'ガッ'], kunyomi: ['あ-う', 'あ-わせる'], strokes: 6, lesson: 'L22', category: 'people', grade: 'N5', examples: [{ word: '合う', reading: 'あう', meaning: 'pasować / zgadzać się' }, { word: '都合', reading: 'つごう', meaning: 'okoliczności / wygoda' }] },
  { id: 'k397', kanji: '当', meaning: 'trafiać / obecny / właściwy', onyomi: ['トウ'], kunyomi: ['あ-たる', 'あ-てる'], strokes: 6, lesson: 'L22', category: 'school', grade: 'N5', examples: [{ word: '本当', reading: 'ほんとう', meaning: 'prawda' }, { word: '当たる', reading: 'あたる', meaning: 'trafiać / wygrywać' }] },
  { id: 'k398', kanji: '走', meaning: 'biegać', onyomi: ['ソウ'], kunyomi: ['はし-る'], strokes: 7, lesson: 'L22', category: 'transport', grade: 'N5', examples: [{ word: '走る', reading: 'はしる', meaning: 'biegać' }, { word: 'ごちそう', reading: 'ごちそう', meaning: 'poczęstunek' }] },
  { id: 'k399', kanji: '注', meaning: 'wlewać / skupiać uwagę', onyomi: ['チュウ'], kunyomi: ['そそ-ぐ'], strokes: 8, lesson: 'L22', category: 'school', grade: 'N5', examples: [{ word: '注意', reading: 'ちゅうい', meaning: 'uwaga / ostrzeżenie' }, { word: '注文', reading: 'ちゅうもん', meaning: 'zamówienie' }] },
  { id: 'k400', kanji: '題', meaning: 'temat / tytuł / zadanie', onyomi: ['ダイ'], kunyomi: [], strokes: 18, lesson: 'L22', category: 'school', grade: 'N5', examples: [{ word: '問題', reading: 'もんだい', meaning: 'problem / zadanie' }, { word: '話題', reading: 'わだい', meaning: 'temat rozmowy' }] },
  { id: 'k401', kanji: '指', meaning: 'palec / wskazywać', onyomi: ['シ'], kunyomi: ['ゆび', 'さ-す'], strokes: 9, lesson: 'L22', category: 'people', grade: 'N5', examples: [{ word: '指', reading: 'ゆび', meaning: 'palec' }, { word: '指輪', reading: 'ゆびわ', meaning: 'pierścionek' }, { word: '指定', reading: 'してい', meaning: 'rezerwacja miejsca' }] },
  { id: 'k402', kanji: '輪', meaning: 'koło / pierścień', onyomi: ['リン'], kunyomi: ['わ'], strokes: 15, lesson: 'L22', category: 'nature', grade: 'N5', examples: [{ word: '指輪', reading: 'ゆびわ', meaning: 'pierścionek' }, { word: '車輪', reading: 'しゃりん', meaning: 'koło pojazdu' }] },
  { id: 'k403', kanji: '堂', meaning: 'sala / gmach świątynny', onyomi: ['ドウ'], kunyomi: [], strokes: 11, lesson: 'L22', category: 'place', grade: 'N5', examples: [{ word: '食堂', reading: 'しょくどう', meaning: 'stołówka' }, { word: '講堂', reading: 'こうどう', meaning: 'aula' }] },
  { id: 'k404', kanji: '守', meaning: 'chronić / pilnować / przestrzegać', onyomi: ['シュ', 'ス'], kunyomi: ['まも-る', 'もり'], strokes: 6, lesson: 'L22', category: 'people', grade: 'N5', examples: [{ word: '守る', reading: 'まもる', meaning: 'chronić / dotrzymywać' }, { word: 'お守り', reading: 'おまもり', meaning: 'amulet' }] },
  { id: 'k405', kanji: '旅', meaning: 'podróż', onyomi: ['リョ'], kunyomi: ['たび'], strokes: 10, lesson: 'L22', category: 'transport', grade: 'N5', examples: [{ word: '旅行', reading: 'りょこう', meaning: 'podróż / wycieczka' }, { word: '旅', reading: 'たび', meaning: 'wędrówka' }] },
  { id: 'k406', kanji: '晩', meaning: 'wieczór / noc', onyomi: ['バン'], kunyomi: [], strokes: 12, lesson: 'L22', category: 'time', grade: 'N5', examples: [{ word: '今晩', reading: 'こんばん', meaning: 'dziś wieczorem' }, { word: '晩ご飯', reading: 'ばんごはん', meaning: 'kolacja' }] },
  { id: 'k407', kanji: '昼', meaning: 'dzień / południe', onyomi: ['チュウ'], kunyomi: ['ひる'], strokes: 9, lesson: 'L22', category: 'time', grade: 'N5', examples: [{ word: '昼', reading: 'ひる', meaning: 'pora południowa' }, { word: '昼ご飯', reading: 'ひるごはん', meaning: 'obiad' }, { word: '昼休み', reading: 'ひるやすみ', meaning: 'przerwa obiadowa' }] },
  { id: 'k408', kanji: '消', meaning: 'gasić / znikać / wyłączać', onyomi: ['ショウ'], kunyomi: ['き-える', 'け-す'], strokes: 10, lesson: 'L22', category: 'nature', grade: 'N5', examples: [{ word: '消す', reading: 'けす', meaning: 'gasić / wyłączać' }, { word: '消しゴム', reading: 'けしごむ', meaning: 'gumka do ścierania' }] },

  // L23
  { id: 'k409', kanji: '幹', meaning: 'pień / trzon / główny', onyomi: ['カン'], kunyomi: ['みき'], strokes: 13, lesson: 'L23', category: 'transport', grade: 'N5', examples: [{ word: '新幹線', reading: 'しんかんせん', meaning: 'superszybki pociąg' }, { word: '幹事', reading: 'かんじ', meaning: 'organizator / koordynator' }] },
  { id: 'k410', kanji: '線', meaning: 'linia / tor', onyomi: ['セン'], kunyomi: [], strokes: 15, lesson: 'L23', category: 'transport', grade: 'N5', examples: [{ word: '線', reading: 'せん', meaning: 'linia kolejowa / kreska' }, { word: '山手線', reading: 'やまのてせん', meaning: 'linia Yamanote' }] },
  { id: 'k411', kanji: '初', meaning: 'pierwszy / początek', onyomi: ['ショ'], kunyomi: ['はじ-め', 'はつ', 'うい'], strokes: 7, lesson: 'L23', category: 'time', grade: 'N5', examples: [{ word: '初めて', reading: 'はじめて', meaning: 'po raz pierwszy' }, { word: '初級', reading: 'しょきゅう', meaning: 'poziom początkujący' }] },
  { id: 'k412', kanji: '荷', meaning: 'bagaż / ładunek', onyomi: ['カ'], kunyomi: ['に'], strokes: 10, lesson: 'L23', category: 'transport', grade: 'N5', examples: [{ word: '荷物', reading: 'にもつ', meaning: 'bagaż / paczka' }, { word: '重荷', reading: 'おもに', meaning: 'ciężki ładunek' }] },
  { id: 'k413', kanji: '季', meaning: 'pora roku', onyomi: ['キ'], kunyomi: [], strokes: 8, lesson: 'L23', category: 'time', grade: 'N5', examples: [{ word: '季節', reading: 'きせつ', meaning: 'pora roku' }, { word: '四季', reading: 'しき', meaning: 'cztery pory roku' }] },
  { id: 'k414', kanji: '節', meaning: 'węzeł / pora / oszczędność', onyomi: ['セツ', 'セチ'], kunyomi: ['ふし'], strokes: 13, lesson: 'L23', category: 'time', grade: 'N5', examples: [{ word: '季節', reading: 'きせつ', meaning: 'pora roku' }, { word: '節約', reading: 'せつやく', meaning: 'oszczędzanie' }] },
  { id: 'k415', kanji: '美', meaning: 'piękny', onyomi: ['ビ', 'ミ'], kunyomi: ['うつく-しい'], strokes: 9, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '美しい', reading: 'うつくしい', meaning: 'piękny' }, { word: '美術', reading: 'びじゅつ', meaning: 'sztuka' }] },
  { id: 'k416', kanji: '以', meaning: 'od / poprzez / za pomocą', onyomi: ['イ'], kunyomi: [], strokes: 5, lesson: 'L23', category: 'number', grade: 'N5', examples: [{ word: '以上', reading: 'いじょう', meaning: 'więcej niż / koniec' }, { word: '以下', reading: 'いか', meaning: 'mniej niż' }] },
  { id: 'k417', kanji: '側', meaning: 'strona / bok', onyomi: ['ソク'], kunyomi: ['がわ', 'そば'], strokes: 11, lesson: 'L23', category: 'direction', grade: 'N5', examples: [{ word: '右側', reading: 'みぎがわ', meaning: 'prawa strona' }, { word: '外側', reading: 'そとがわ', meaning: 'zewnętrzna strona' }] },
  { id: 'k418', kanji: '制', meaning: 'system / kontrolować', onyomi: ['セイ'], kunyomi: [], strokes: 8, lesson: 'L23', category: 'school', grade: 'N5', examples: [{ word: '制度', reading: 'せいど', meaning: 'system / ustrój' }, { word: '制作', reading: 'せいさく', meaning: 'produkcja' }] },
  { id: 'k419', kanji: '修', meaning: 'studiować / naprawiać', onyomi: ['シュウ', 'シュ'], kunyomi: ['おさ-める'], strokes: 10, lesson: 'L23', category: 'school', grade: 'N5', examples: [{ word: '修理', reading: 'しゅうり', meaning: 'naprawa' }, { word: '研修', reading: 'けんしゅう', meaning: 'szkolenie' }] },
  { id: 'k420', kanji: '材', meaning: 'materiał / drewno / talent', onyomi: ['ザイ'], kunyomi: [], strokes: 7, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '材料', reading: 'ざいりょう', meaning: 'składniki / materiały' }, { word: '教材', reading: 'きょうざい', meaning: 'materiały dydaktyczne' }] },
  { id: 'k421', kanji: '皮', meaning: 'skóra / kora', onyomi: ['ヒ'], kunyomi: ['かわ'], strokes: 5, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '皮', reading: 'かわ', meaning: 'skórka (owocu) / kora' }, { word: '毛皮', reading: 'けがわ', meaning: 'futro' }] },
  { id: 'k422', kanji: '葉', meaning: 'liść', onyomi: ['ヨウ'], kunyomi: ['は'], strokes: 12, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '言葉', reading: 'ことば', meaning: 'słowo / język' }, { word: '葉', reading: 'は', meaning: 'liść' }] },
  { id: 'k423', kanji: '皿', meaning: 'talerz', onyomi: ['ベイ'], kunyomi: ['さら'], strokes: 5, lesson: 'L23', category: 'place', grade: 'N5', examples: [{ word: '皿', reading: 'さら', meaning: 'talerz' }, { word: '灰皿', reading: 'はいざら', meaning: 'popielniczka' }] },
  { id: 'k424', kanji: '悲', meaning: 'smutny / żal', onyomi: ['ヒ'], kunyomi: ['かな-しい'], strokes: 12, lesson: 'L23', category: 'people', grade: 'N5', examples: [{ word: '悲しい', reading: 'かなしい', meaning: 'smutny' }, { word: '悲劇', reading: 'ひげき', meaning: 'tragedia' }] },
  { id: 'k425', kanji: '眠', meaning: 'sen / spać', onyomi: ['ミン'], kunyomi: ['ねむ-る', 'ねむ-い'], strokes: 10, lesson: 'L23', category: 'people', grade: 'N5', examples: [{ word: '眠い', reading: 'ねむい', meaning: 'senny' }, { word: '眠る', reading: 'ねむる', meaning: 'spać' }] },
  { id: 'k426', kanji: '血', meaning: 'krew', onyomi: ['ケツ'], kunyomi: ['ち'], strokes: 6, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '血', reading: 'ち', meaning: 'krew' }, { word: '輸血', reading: 'ゆけつ', meaning: 'transfuzja krwi' }] },
  { id: 'k427', kanji: '破', meaning: 'rozdzierać / psuć', onyomi: ['ハ'], kunyomi: ['やぶ-る', 'やぶ-れる'], strokes: 10, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '破る', reading: 'やぶる', meaning: 'drzeć / łamać (obietnicę)' }, { word: '破壊', reading: 'はかい', meaning: 'zniszczenie' }] },
  { id: 'k428', kanji: '油', meaning: 'olej / ropa', onyomi: ['ユ'], kunyomi: ['あぶら'], strokes: 8, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '油', reading: 'あぶら', meaning: 'olej' }, { word: '石油', reading: 'せきゆ', meaning: 'ropa naftowa' }] },
  { id: 'k429', kanji: '刀', meaning: 'miecz / nóż', onyomi: ['トウ'], kunyomi: ['かたな'], strokes: 2, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '刀', reading: 'かたな', meaning: 'miecz japoński' }, { word: '日本刀', reading: 'にほんとう', meaning: 'miecz japoński' }] },
  { id: 'k430', kanji: '羽', meaning: 'pióro / skrzydło', onyomi: ['ウ'], kunyomi: ['は', 'わ', 'はね'], strokes: 6, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '羽', reading: 'はね', meaning: 'pióra / skrzydła' }, { word: '羽毛', reading: 'うもう', meaning: 'puch / pióra' }] },
  { id: 'k431', kanji: '銀', meaning: 'srebro', onyomi: ['ギン'], kunyomi: [], strokes: 14, lesson: 'L23', category: 'place', grade: 'N5', examples: [{ word: '銀行', reading: 'ぎんこう', meaning: 'bank' }, { word: '銀', reading: 'ぎん', meaning: 'srebro' }] },
  { id: 'k432', kanji: '乳', meaning: 'mleko / pierś', onyomi: ['ニュウ'], kunyomi: ['ちち', 'ち'], strokes: 8, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '牛乳', reading: 'ぎゅうにゅう', meaning: 'mleko krowie' }, { word: '母乳', reading: 'ぼにゅう', meaning: 'mleko matki' }] },
  { id: 'k433', kanji: '麦', meaning: 'pszenica / jęczmień', onyomi: ['バク'], kunyomi: ['むぎ'], strokes: 7, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '小麦', reading: 'こむぎ', meaning: 'pszenica' }, { word: '麦茶', reading: 'むぎちゃ', meaning: 'herbata jęczmienna' }] },
  { id: 'k434', kanji: '実', meaning: 'owoc / prawda / rzeczywistość', onyomi: ['ジツ'], kunyomi: ['み', 'みの-る'], strokes: 8, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '実は', reading: 'じつは', meaning: 'tak naprawdę' }, { word: '実', reading: 'み', meaning: 'owoc' }] },
  { id: 'k435', kanji: '豆', meaning: 'fasola / groszek', onyomi: ['トウ', 'ズ'], kunyomi: ['まめ'], strokes: 7, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '豆', reading: 'まめ', meaning: 'fasola' }, { word: '豆腐', reading: 'とうふ', meaning: 'tofu' }] },
  { id: 'k436', kanji: '形', meaning: 'kształt / forma', onyomi: ['ケイ', 'ギョウ'], kunyomi: ['かたち', 'かた'], strokes: 7, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '形', reading: 'かたち', meaning: 'kształt' }, { word: '人形', reading: 'にんぎょう', meaning: 'lalka' }] },
  { id: 'k437', kanji: '取', meaning: 'brać / chwytać', onyomi: ['シュ'], kunyomi: ['と-る'], strokes: 8, lesson: 'L23', category: 'people', grade: 'N5', examples: [{ word: '取る', reading: 'とる', meaning: 'brać / podawać' }, { word: '取得', reading: 'しゅとく', meaning: 'nabycie' }] },
  { id: 'k438', kanji: '必', meaning: 'na pewno / nieodzowny', onyomi: ['ヒツ'], kunyomi: ['かなら-ず'], strokes: 5, lesson: 'L23', category: 'school', grade: 'N5', examples: [{ word: '必ず', reading: 'かならず', meaning: 'na pewno / bez wątpienia' }, { word: '必要', reading: 'ひつよう', meaning: 'potrzebny' }] },
  { id: 'k439', kanji: '要', meaning: 'potrzebować / kluczowy', onyomi: ['ヨウ'], kunyomi: ['い-る'], strokes: 9, lesson: 'L23', category: 'school', grade: 'N5', examples: [{ word: '必要', reading: 'ひつよう', meaning: 'potrzebny' }, { word: '要る', reading: 'いる', meaning: 'być potrzebnym' }] },
  { id: 'k440', kanji: '顔', meaning: 'twarz', onyomi: ['ガン'], kunyomi: ['かお'], strokes: 18, lesson: 'L23', category: 'people', grade: 'N5', examples: [{ word: '顔', reading: 'かお', meaning: 'twarz' }, { word: '笑顔', reading: 'えがお', meaning: 'uśmiechnięta twarz' }] },
  { id: 'k441', kanji: '星', meaning: 'gwiazda', onyomi: ['セイ', 'ショウ'], kunyomi: ['ほし'], strokes: 9, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '星', reading: 'ほし', meaning: 'gwiazda' }, { word: '火星', reading: 'かせい', meaning: 'Mars' }] },
  { id: 'k442', kanji: '冷', meaning: 'chłodny / stygnąć', onyomi: ['レイ'], kunyomi: ['つめ-たい', 'ひ-える', 'さ-める'], strokes: 7, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '冷たい', reading: 'つめたい', meaning: 'chłodny / zimny' }, { word: '冷蔵庫', reading: 'れいぞうこ', meaning: 'lodówka' }] },
  { id: 'k443', kanji: '雲', meaning: 'chmura', onyomi: ['ウン'], kunyomi: ['くも'], strokes: 12, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '雲', reading: 'くも', meaning: 'chmura' }, { word: '雨雲', reading: 'あまぐも', meaning: 'chmura deszczowa' }] },
  { id: 'k444', kanji: '点', meaning: 'punkt / kropka / ocena', onyomi: ['テン'], kunyomi: [], strokes: 9, lesson: 'L23', category: 'number', grade: 'N5', examples: [{ word: '点', reading: 'てん', meaning: 'punkt' }, { word: '交差点', reading: 'こうさてん', meaning: 'skrzyżowanie' }] },
  { id: 'k445', kanji: '割', meaning: 'dzielić / proporcja', onyomi: ['カツ'], kunyomi: ['わ-る', 'わり', 'わ-れる'], strokes: 12, lesson: 'L23', category: 'number', grade: 'N5', examples: [{ word: '割る', reading: 'わる', meaning: 'dzielić / tłuc' }, { word: '割引', reading: 'わりびき', meaning: 'zniżka' }] },
  { id: 'k446', kanji: '頭', meaning: 'głowa', onyomi: ['トウ', 'ズ'], kunyomi: ['あたま', 'かしら'], strokes: 16, lesson: 'L23', category: 'people', grade: 'N5', examples: [{ word: '頭', reading: 'あたま', meaning: 'głowa' }, { word: '頭痛', reading: 'ずつう', meaning: 'ból głowy' }] },
  { id: 'k447', kanji: '薬', meaning: 'lekarstwo', onyomi: ['ヤク'], kunyomi: ['くすり'], strokes: 16, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '薬', reading: 'くすり', meaning: 'lekarstwo' }, { word: '薬局', reading: 'やっきょく', meaning: 'apteka' }] },
  { id: 'k448', kanji: '細', meaning: 'cienki / drobny', onyomi: ['サイ'], kunyomi: ['ほそ-い', 'こま-かい'], strokes: 11, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '細い', reading: 'ほそい', meaning: 'chudy / cienki' }, { word: '細かい', reading: 'こまかい', meaning: 'drobny' }] },
  { id: 'k449', kanji: '波', meaning: 'fala', onyomi: ['ハ'], kunyomi: ['なみ'], strokes: 8, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '波', reading: 'なみ', meaning: 'fala' }, { word: '津波', reading: 'つなみ', meaning: 'tsunami' }] },
  { id: 'k450', kanji: '族', meaning: 'plemię / rodzina', onyomi: ['ゾク'], kunyomi: [], strokes: 11, lesson: 'L23', category: 'people', grade: 'N5', examples: [{ word: '家族', reading: 'かぞく', meaning: 'rodzina' }, { word: '民族', reading: 'みんぞく', meaning: 'naród / grupa etniczna' }] },
  { id: 'k451', kanji: '植', meaning: 'sadzić / roślina', onyomi: ['ショク'], kunyomi: ['う-える'], strokes: 12, lesson: 'L23', category: 'nature', grade: 'N5', examples: [{ word: '植物', reading: 'しょくぶつ', meaning: 'rośliny' }, { word: '植える', reading: 'うえる', meaning: 'sadzić' }] },
  { id: 'k452', kanji: '降', meaning: 'opadać / wysiadać', onyomi: ['コウ'], kunyomi: ['お-りる', 'ふ-る'], strokes: 10, lesson: 'L23', category: 'transport', grade: 'N5', examples: [{ word: '降りる', reading: 'おりる', meaning: 'wysiadać' }, { word: '降る', reading: 'ふる', meaning: 'padać (o deszczu/śniegu)' }] },

  // L24
  { id: 'k453', kanji: '部', meaning: 'część / sekcja / klub', onyomi: ['ブ'], kunyomi: [], strokes: 11, lesson: 'L24', category: 'school', grade: 'N5', examples: [{ word: '部屋', reading: 'へや', meaning: 'pokój' }, { word: '学部', reading: 'がくぶ', meaning: 'wydział uniwersytecki' }] },
  { id: 'k454', kanji: '昔', meaning: 'dawno temu / przeszłość', onyomi: ['セキ', 'シャク'], kunyomi: ['むかし'], strokes: 8, lesson: 'L24', category: 'time', grade: 'N5', examples: [{ word: '昔', reading: 'むかし', meaning: 'dawne czasy' }, { word: '昔話', reading: 'むかしばなし', meaning: 'dawna opowieść / baśń' }] },
  { id: 'k455', kanji: '残', meaning: 'zostawać / reszta', onyomi: ['ザン'], kunyomi: ['のこ-る', 'のこ-す'], strokes: 10, lesson: 'L24', category: 'time', grade: 'N5', examples: [{ word: '残る', reading: 'のこる', meaning: 'zostawać' }, { word: '残念', reading: 'ざんねん', meaning: 'szkoda' }] },
  { id: 'k456', kanji: '宮', meaning: 'pałac / chram shinto', onyomi: ['キュウ', 'グウ'], kunyomi: ['みや'], strokes: 10, lesson: 'L24', category: 'place', grade: 'N5', examples: [{ word: 'お宮', reading: 'おみや', meaning: 'chram shintō' }, { word: '宮殿', reading: 'きゅうでん', meaning: 'pałac' }] },
  { id: 'k457', kanji: '神', meaning: 'bóg / bóstwo kami', onyomi: ['シン', 'ジン'], kunyomi: ['かみ'], strokes: 9, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '神社', reading: 'じんじゃ', meaning: 'świątynia shintō' }, { word: '神様', reading: 'かみさま', meaning: 'Bóg / bóstwo' }] },
  { id: 'k458', kanji: '押', meaning: 'naciskać / pchać', onyomi: ['オウ'], kunyomi: ['お-す', 'お-さえる'], strokes: 8, lesson: 'L24', category: 'nature', grade: 'N5', examples: [{ word: '押す', reading: 'おす', meaning: 'pchać / naciskać' }, { word: '押入れ', reading: 'おしいれ', meaning: 'szafa ścienna oshiire' }] },
  { id: 'k459', kanji: '泣', meaning: 'płakać', onyomi: ['キュウ'], kunyomi: ['な-く'], strokes: 8, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '泣く', reading: 'なく', meaning: 'płakać' }, { word: '泣き声', reading: 'なきごえ', meaning: 'płacz / łkanie' }] },
  { id: 'k460', kanji: '各', meaning: 'każdy', onyomi: ['カク'], kunyomi: ['おのおの'], strokes: 6, lesson: 'L24', category: 'school', grade: 'N5', examples: [{ word: '各地', reading: 'かくち', meaning: 'każde miejsce / różne miejsca' }, { word: '各員', reading: 'かくいん', meaning: 'każdy członek' }] },
  { id: 'k461', kanji: '様', meaning: 'sposób / stan / pan, pani (-sama)', onyomi: ['ヨウ'], kunyomi: ['さま'], strokes: 14, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '皆様', reading: 'みなさま', meaning: 'wszyscy państwo' }, { word: '様子', reading: 'ようす', meaning: 'stan / wygląd' }] },
  { id: 'k462', kanji: '皆', meaning: 'wszyscy', onyomi: ['カイ'], kunyomi: ['みな'], strokes: 9, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '皆さん', reading: 'みなさん', meaning: 'wszyscy państwo' }, { word: '皆', reading: 'みんな', meaning: 'wszyscy' }] },
  { id: 'k463', kanji: '期', meaning: 'okres / semestr', onyomi: ['キ', 'ゴ'], kunyomi: [], strokes: 12, lesson: 'L24', category: 'time', grade: 'N5', examples: [{ word: '学期', reading: 'がっき', meaning: 'semestr' }, { word: '期待', reading: 'きたい', meaning: 'oczekiwanie' }] },
  { id: 'k464', kanji: '追', meaning: 'gonić / ścigać', onyomi: ['ツイ'], kunyomi: ['お-う'], strokes: 9, lesson: 'L24', category: 'transport', grade: 'N5', examples: [{ word: '追いかける', reading: 'おいかける', meaning: 'gonić / ścigać' }, { word: '追試', reading: 'ついし', meaning: 'egzamin poprawkowy' }] },
  { id: 'k465', kanji: '愛', meaning: 'miłość', onyomi: ['アイ'], kunyomi: [], strokes: 13, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '愛する', reading: 'あいする', meaning: 'kochać' }, { word: '愛情', reading: 'あいじょう', meaning: 'uczucie' }] },
  { id: 'k466', kanji: '建', meaning: 'budować', onyomi: ['ケン', 'コン'], kunyomi: ['た-てる', 'た-つ'], strokes: 9, lesson: 'L24', category: 'place', grade: 'N5', examples: [{ word: '建てる', reading: 'たてる', meaning: 'budować' }, { word: '建物', reading: 'たてもの', meaning: 'budynek' }] },
  { id: 'k467', kanji: '亡', meaning: 'umierać / ginąć', onyomi: ['ボウ', 'モウ'], kunyomi: ['な-くなる'], strokes: 3, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '亡くなる', reading: 'なくなる', meaning: 'umierać / odchodzić' }, { word: '亡命', reading: 'ぼうめい', meaning: 'emigracja / ucieczka' }] },
  { id: 'k468', kanji: '灯', meaning: 'światło / lampa', onyomi: ['トウ'], kunyomi: ['ひ'], strokes: 6, lesson: 'L24', category: 'place', grade: 'N5', examples: [{ word: '電灯', reading: 'でんとう', meaning: 'lampa elektryczna' }, { word: '街灯', reading: 'がいとう', meaning: 'latarnia uliczna' }] },
  { id: 'k469', kanji: '故', meaning: 'przyczyna / zmarły / dawny', onyomi: ['コ'], kunyomi: ['ゆえ'], strokes: 9, lesson: 'L24', category: 'school', grade: 'N5', examples: [{ word: '事故', reading: 'じこ', meaning: 'wypadek' }, { word: '故人', reading: 'こじん', meaning: 'zmarły' }] },
  { id: 'k470', kanji: '吸', meaning: 'wdychać / ssać / palić', onyomi: ['キュウ'], kunyomi: ['す-う'], strokes: 6, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '吸う', reading: 'すう', meaning: 'wdychać / palić papierosy' }, { word: '吸水', reading: 'きゅうすい', meaning: 'wchłanianie wody' }] },
  { id: 'k471', kanji: '酒', meaning: 'alkohol / sake', onyomi: ['シュ'], kunyomi: ['さけ', 'さか'], strokes: 10, lesson: 'L24', category: 'nature', grade: 'N5', examples: [{ word: 'お酒', reading: 'おさけ', meaning: 'alkohol / sake' }, { word: '居酒屋', reading: 'いざかや', meaning: 'japoński pub izakaya' }] },
  { id: 'k472', kanji: '借', meaning: 'pożyczać (od kogoś)', onyomi: ['シャク'], kunyomi: ['か-りる'], strokes: 10, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '借りる', reading: 'かりる', meaning: 'pożyczać' }, { word: '借金', reading: 'しゃっきん', meaning: 'dług' }] },
  { id: 'k473', kanji: '短', meaning: 'krótki', onyomi: ['タン'], kunyomi: ['みじか-い'], strokes: 12, lesson: 'L24', category: 'nature', grade: 'N5', examples: [{ word: '短い', reading: 'みじかい', meaning: 'krótki' }, { word: '短所', reading: 'たんしょ', meaning: 'wada' }] },
  { id: 'k474', kanji: '夜', meaning: 'noc / wieczór', onyomi: ['ヤ'], kunyomi: ['よ', 'よる'], strokes: 8, lesson: 'L24', category: 'time', grade: 'N5', examples: [{ word: '夜', reading: 'よる', meaning: 'noc' }, { word: '今夜', reading: 'こんや', meaning: 'dziś w nocy' }] },
  { id: 'k475', kanji: '去', meaning: 'odchodzić / miniony', onyomi: ['キョ', 'コ'], kunyomi: ['さ-る'], strokes: 5, lesson: 'L24', category: 'time', grade: 'N5', examples: [{ word: '去年', reading: 'きょねん', meaning: 'zeszły rok' }, { word: '去る', reading: 'さる', meaning: 'odchodzić' }] },
  { id: 'k476', kanji: '階', meaning: 'piętro / stopień', onyomi: ['カイ'], kunyomi: [], strokes: 12, lesson: 'L24', category: 'place', grade: 'N5', examples: [{ word: '二階', reading: 'にかい', meaning: 'drugie piętro' }, { word: '階段', reading: 'かいだん', meaning: 'schody' }] },
  { id: 'k477', kanji: '忘', meaning: 'zapominać', onyomi: ['ボウ'], kunyomi: ['わす-れる'], strokes: 7, lesson: 'L24', category: 'school', grade: 'N5', examples: [{ word: '忘れる', reading: 'わすれる', meaning: 'zapominać' }, { word: '忘れ物', reading: 'わすれもの', meaning: 'rzecz zgubiona' }] },
  { id: 'k478', kanji: '歌', meaning: 'piosenka / śpiewać', onyomi: ['カ'], kunyomi: ['うた', 'うた-う'], strokes: 14, lesson: 'L24', category: 'school', grade: 'N5', examples: [{ word: '歌', reading: 'うた', meaning: 'piosenka' }, { word: '歌う', reading: 'うたう', meaning: 'śpiewać' }] },
  { id: 'k479', kanji: '問', meaning: 'pytanie / pytać', onyomi: ['モン'], kunyomi: ['と-う', 'と-い'], strokes: 11, lesson: 'L24', category: 'school', grade: 'N5', examples: [{ word: '質問', reading: 'しつもん', meaning: 'pytanie' }, { word: '問題', reading: 'もんだい', meaning: 'problem' }] },
  { id: 'k480', kanji: '親', meaning: 'rodzic / bliski / zażyły', onyomi: ['シン'], kunyomi: ['おや', 'した-しい'], strokes: 16, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '両親', reading: 'りょうしん', meaning: 'rodzice' }, { word: '親切', reading: 'しんせつ', meaning: 'uprzejmy' }] },
  { id: 'k481', kanji: '類', meaning: 'rodzaj / kategoria', onyomi: ['ルイ'], kunyomi: [], strokes: 18, lesson: 'L24', category: 'school', grade: 'N5', examples: [{ word: '親類', reading: 'しんるい', meaning: 'krewni' }, { word: '書類', reading: 'しょるい', meaning: 'dokumenty' }] },
  { id: 'k482', kanji: '連', meaning: 'łączyć / zabierać ze sobą', onyomi: ['レン'], kunyomi: ['つ-れる', 'つら-なる'], strokes: 10, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '連れて行く', reading: 'つれていく', meaning: 'zabrać ze sobą (kogoś)' }, { word: '連絡', reading: 'れんらく', meaning: 'kontakt' }] },
  { id: 'k483', kanji: '忙', meaning: 'zajęty', onyomi: ['ボウ'], kunyomi: ['いそが-しい'], strokes: 6, lesson: 'L24', category: 'time', grade: 'N5', examples: [{ word: '忙しい', reading: 'いそがしい', meaning: 'zajęty' }, { word: '多忙', reading: 'たぼう', meaning: 'bardzo zajęty' }] },
  { id: 'k484', kanji: '願', meaning: 'prosić / życzenie', onyomi: ['ガン'], kunyomi: ['ねが-う'], strokes: 19, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: 'お願いします', reading: 'おねがいします', meaning: 'proszę' }, { word: '願い', reading: 'ねがい', meaning: 'życzenie' }] },
  { id: 'k485', kanji: '戦', meaning: 'wojna / walka', onyomi: ['セン'], kunyomi: ['たたか-う', 'いくさ'], strokes: 16, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '戦争', reading: 'せんそう', meaning: 'wojna' }, { word: '戦う', reading: 'たたかう', meaning: 'walczyć' }] },
  { id: 'k486', kanji: '争', meaning: 'spierać się / konflikt', onyomi: ['ソウ'], kunyomi: ['あらそ-う'], strokes: 6, lesson: 'L24', category: 'people', grade: 'N5', examples: [{ word: '争う', reading: 'あらそう', meaning: 'spierać się' }, { word: '戦争', reading: 'せんそう', meaning: 'wojna' }] },
  { id: 'k487', kanji: '成', meaning: 'stawać się / osiągać', onyomi: ['セイ', 'ジョウ'], kunyomi: ['な-る', 'な-す'], strokes: 6, lesson: 'L24', category: 'time', grade: 'N5', examples: [{ word: '平成', reading: 'へいせい', meaning: 'era Heisei' }, { word: '成功', reading: 'せいこう', meaning: 'sukces' }] },

  // Uzupełnienia wcześniejszych lekcji
  { id: 'k488', kanji: '魚', meaning: 'ryba', onyomi: ['ギョ'], kunyomi: ['さかな', 'うお'], strokes: 11, lesson: 'L16', category: 'nature', grade: 'N5', examples: [{ word: '魚', reading: 'さかな', meaning: 'ryba' }, { word: '金魚', reading: 'きんぎょ', meaning: 'złota rybka' }, { word: '魚屋', reading: 'さかなや', meaning: 'sklep rybny' }] },
  { id: 'k489', kanji: '庭', meaning: 'ogród / podwórze', onyomi: ['テイ'], kunyomi: ['にわ'], strokes: 10, lesson: 'L17', category: 'place', grade: 'N5', examples: [{ word: '庭', reading: 'にわ', meaning: 'ogród' }, { word: '校庭', reading: 'こうてい', meaning: 'dziedziniec szkolny' }, { word: '日本庭園', reading: 'にほんていえん', meaning: 'ogród japoński' }] },
  { id: 'k490', kanji: '紙', meaning: 'papier', onyomi: ['シ'], kunyomi: ['かみ'], strokes: 10, lesson: 'L23', category: 'school', grade: 'N5', examples: [{ word: '紙', reading: 'かみ', meaning: 'papier' }, { word: '手紙', reading: 'てがみ', meaning: 'list' }, { word: '折り紙', reading: 'おりがみ', meaning: 'origami' }] },

  // L25
  { id: 'k491', kanji: '寝', meaning: 'spać / kłaść się', onyomi: ['シン'], kunyomi: ['ね-る', 'ね-かす'], strokes: 13, lesson: 'L25', category: 'people', grade: 'N5', examples: [{ word: '寝る', reading: 'ねる', meaning: 'spać' }, { word: '昼寝', reading: 'ひるね', meaning: 'drzemka' }] },
  { id: 'k492', kanji: '現', meaning: 'teraźniejszość / pojawiać się', onyomi: ['ゲン'], kunyomi: ['あらわ-れる', 'あらわ-す'], strokes: 11, lesson: 'L25', category: 'time', grade: 'N5', examples: [{ word: '現実', reading: 'げんじつ', meaning: 'rzeczywistość' }, { word: '現在', reading: 'げんざい', meaning: 'teraźniejszość / obecnie' }] },
  { id: 'k493', kanji: '非', meaning: 'błąd / zaprzeczenie / zło', onyomi: ['ヒ'], kunyomi: [], strokes: 8, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '非常に', reading: 'ひじょうに', meaning: 'bardzo / niezwykle' }, { word: '非常口', reading: 'ひじょうぐち', meaning: 'wyjście ewakuacyjne' }] },
  { id: 'k494', kanji: '常', meaning: 'stały / zwyczajny / zawsze', onyomi: ['ジョウ'], kunyomi: ['つね'], strokes: 11, lesson: 'L25', category: 'time', grade: 'N5', examples: [{ word: '日常', reading: 'にちじょう', meaning: 'codzienność' }, { word: '常に', reading: 'つねに', meaning: 'zawsze / stale' }] },
  { id: 'k495', kanji: '屋', meaning: 'dach / dom / sklep', onyomi: ['オク'], kunyomi: ['や'], strokes: 9, lesson: 'L25', category: 'place', grade: 'N5', examples: [{ word: '屋根', reading: 'やね', meaning: 'dach' }, { word: '部屋', reading: 'へや', meaning: 'pokój' }, { word: '本屋', reading: 'ほんや', meaning: 'księgarnia' }] },
  { id: 'k496', kanji: '根', meaning: 'korzeń / podstawa', onyomi: ['コン'], kunyomi: ['ね'], strokes: 10, lesson: 'L25', category: 'nature', grade: 'N5', examples: [{ word: '屋根', reading: 'やね', meaning: 'dach' }, { word: '大根', reading: 'だいこん', meaning: 'rzodkiew japońska daikon' }] },
  { id: 'k497', kanji: '積', meaning: 'nawarstwiać się / gromadzić', onyomi: ['セキ'], kunyomi: ['つ-もる', 'つ-む'], strokes: 16, lesson: 'L25', category: 'nature', grade: 'N5', examples: [{ word: '積もる', reading: 'つもる', meaning: 'nawarstwiać się (np. śnieg)' }, { word: '積雪', reading: 'せきせつ', meaning: 'pokrywa śnieżna' }] },
  { id: 'k498', kanji: '列', meaning: 'rząd / szereg / pociąg', onyomi: ['レツ'], kunyomi: [], strokes: 6, lesson: 'L25', category: 'transport', grade: 'N5', examples: [{ word: '列車', reading: 'れっしゃ', meaning: 'pociąg' }, { word: '行列', reading: 'ぎょうれつ', meaning: 'kolejka / orszak' }] },
  { id: 'k499', kanji: '田', meaning: 'pole ryżowe', onyomi: ['デン'], kunyomi: ['た'], strokes: 5, lesson: 'L25', category: 'nature', grade: 'N5', examples: [{ word: '田', reading: 'た', meaning: 'pole ryżowe' }, { word: '水田', reading: 'すいでん', meaning: 'pole ryżowe z wodą' }, { word: '田中', reading: 'たなか', meaning: 'Tanaka (nazwisko)' }] },
  { id: 'k500', kanji: '畑', meaning: 'pole uprawne', onyomi: [], kunyomi: ['はたけ', 'はた'], strokes: 9, lesson: 'L25', category: 'nature', grade: 'N5', examples: [{ word: '畑', reading: 'はたけ', meaning: 'pole uprawne' }, { word: '花畑', reading: 'はなばたけ', meaning: 'pole kwiatowe' }] },
  { id: 'k501', kanji: '最', meaning: 'najbardziej / w najwyższym stopniu', onyomi: ['サイ'], kunyomi: ['もっと-も'], strokes: 12, lesson: 'L25', category: 'time', grade: 'N5', examples: [{ word: '最近', reading: 'さいきん', meaning: 'ostatnio / niedawno' }, { word: '最も', reading: 'もっとも', meaning: 'najbardziej' }, { word: '最高', reading: 'さいこう', meaning: 'najwyższy / najlepszy' }] },
  { id: 'k502', kanji: '機', meaning: 'maszyna / mechanizm / okazja', onyomi: ['キ'], kunyomi: ['はた'], strokes: 16, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '機械', reading: 'きかい', meaning: 'maszyna' }, { word: '飛行機', reading: 'ひこうき', meaning: 'samolot' }] },
  { id: 'k503', kanji: '械', meaning: 'urządzenie / przyrząd', onyomi: ['カイ'], kunyomi: [], strokes: 11, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '機械', reading: 'きかい', meaning: 'maszyna' }, { word: '器械', reading: 'きかい', meaning: 'aparatura / przyrząd' }] },
  { id: 'k504', kanji: '除', meaning: 'usuwać / wykluczać', onyomi: ['ジョ', 'ジ'], kunyomi: ['のぞ-く'], strokes: 10, lesson: 'L25', category: 'people', grade: 'N5', examples: [{ word: '除く', reading: 'のぞく', meaning: 'usuwać / wykluczać' }, { word: '掃除', reading: 'そうじ', meaning: 'sprzątanie' }] },
  { id: 'k505', kanji: '減', meaning: 'maleć / ubywać / zmniejszać', onyomi: ['ゲン'], kunyomi: ['へ-る', 'へ-らす'], strokes: 12, lesson: 'L25', category: 'number', grade: 'N5', examples: [{ word: '減る', reading: 'へる', meaning: 'zmniejszać się' }, { word: '減らす', reading: 'へらす', meaning: 'zmniejszać' }] },
  { id: 'k506', kanji: '遊', meaning: 'bawić się / spędzać czas', onyomi: ['ユウ'], kunyomi: ['あそ-ぶ'], strokes: 12, lesson: 'L25', category: 'people', grade: 'N5', examples: [{ word: '遊ぶ', reading: 'あそぶ', meaning: 'bawić się' }, { word: '遊園地', reading: 'ゆうえんち', meaning: 'wesołe miasteczko' }] },
  { id: 'k507', kanji: '欲', meaning: 'chcieć / pragnąć', onyomi: ['ヨク'], kunyomi: ['ほ-しい', 'ほっ-する'], strokes: 11, lesson: 'L25', category: 'people', grade: 'N5', examples: [{ word: '欲しい', reading: 'ほしい', meaning: 'chcieć / pożądany' }, { word: '食欲', reading: 'しょくよく', meaning: 'apetyt' }] },
  { id: 'k508', kanji: '奨', meaning: 'zachęcać / nagradzać', onyomi: ['ショウ'], kunyomi: ['すす-める'], strokes: 13, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '奨学金', reading: 'しょうがくきん', meaning: 'stypendium' }, { word: '推奨', reading: 'すいしょう', meaning: 'rekomendacja' }] },
  { id: 'k509', kanji: '増', meaning: 'rosnąć / zwiększać się', onyomi: ['ゾウ'], kunyomi: ['ふ-える', 'ふ-やす', 'ま-す'], strokes: 14, lesson: 'L25', category: 'number', grade: 'N5', examples: [{ word: '増える', reading: 'ふえる', meaning: 'rosnąć / zwiększać się' }, { word: '増加', reading: 'ぞうか', meaning: 'wzrost / przyrost' }] },
  { id: 'k510', kanji: '例', meaning: 'przykład / zwyczaj', onyomi: ['レイ'], kunyomi: ['たと-える'], strokes: 8, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '例えば', reading: 'たとえば', meaning: 'na przykład' }, { word: '例文', reading: 'れいぶん', meaning: 'zdanie przykładowe' }] },
  { id: 'k511', kanji: '考', meaning: 'myśleć / rozważać', onyomi: ['コウ'], kunyomi: ['かんが-える'], strokes: 6, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '考える', reading: 'かんがえる', meaning: 'myśleć / zastanawiać się' }, { word: '考え', reading: 'かんがえ', meaning: 'pomysł / myśl' }] },
  { id: 'k512', kanji: '質', meaning: 'jakość / pytanie / zastaw', onyomi: ['シツ', 'シチ'], kunyomi: [], strokes: 15, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '質問', reading: 'しつもん', meaning: 'pytanie' }, { word: '質', reading: 'しつ', meaning: 'jakość' }] },
  { id: 'k513', kanji: '静', meaning: 'cichy / spokojny', onyomi: ['セイ', 'ジョウ'], kunyomi: ['しず-か', 'しず-まる'], strokes: 14, lesson: 'L25', category: 'nature', grade: 'N5', examples: [{ word: '静か', reading: 'しずか', meaning: 'cichy / spokojny' }, { word: '冷静', reading: 'れいせい', meaning: 'spokój / opanowanie' }] },
  { id: 'k514', kanji: '技', meaning: 'umiejętność / sztuka / technika', onyomi: ['ギ'], kunyomi: ['わざ'], strokes: 7, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '技術', reading: 'ぎじゅつ', meaning: 'technika / technologia' }, { word: '特技', reading: 'とくぎ', meaning: 'specjalna umiejętność' }] },
  { id: 'k515', kanji: '起', meaning: 'wstawać / budzić się', onyomi: ['キ'], kunyomi: ['お-きる', 'お-こす', 'お-こる'], strokes: 10, lesson: 'L25', category: 'people', grade: 'N5', examples: [{ word: '起きる', reading: 'おきる', meaning: 'wstawać / budzić się' }, { word: '早起き', reading: 'はやおき', meaning: 'wczesne wstawanie' }] },
  { id: 'k516', kanji: '勉', meaning: 'starać się / pilny', onyomi: ['ベン'], kunyomi: ['つと-める'], strokes: 10, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '勉強', reading: 'べんきょう', meaning: 'nauka' }, { word: '勉強する', reading: 'べんきょうする', meaning: 'uczyć się' }] },
  { id: 'k517', kanji: '強', meaning: 'silny / mocny', onyomi: ['キョウ', 'ゴウ'], kunyomi: ['つよ-い', 'つよ-まる', 'し-いる'], strokes: 11, lesson: 'L25', category: 'school', grade: 'N5', examples: [{ word: '強い', reading: 'つよい', meaning: 'silny / mocny' }, { word: '強風', reading: 'きょうふう', meaning: 'silny wiatr' }] },
  { id: 'k518', kanji: '普', meaning: 'powszechny / zwykły', onyomi: ['フ'], kunyomi: [], strokes: 12, lesson: 'L25', category: 'time', grade: 'N5', examples: [{ word: '普通', reading: 'ふつう', meaning: 'zwykły / normalny' }, { word: '普及', reading: 'ふきゅう', meaning: 'rozpowszechnienie' }] },
  { id: 'k519', kanji: '働', meaning: 'pracować', onyomi: ['ドウ'], kunyomi: ['はたら-く'], strokes: 13, lesson: 'L25', category: 'people', grade: 'N5', examples: [{ word: '働く', reading: 'はたらく', meaning: 'pracować' }, { word: '労働', reading: 'ろうどう', meaning: 'praca fizyczna' }] },

  // L26
  { id: 'k520', kanji: '祝', meaning: 'świętować / gratulować', onyomi: ['シュク'], kunyomi: ['いわ-う'], strokes: 9, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: 'お祝い', reading: 'おいわい', meaning: 'świętowanie / podarunek' }, { word: '祝日', reading: 'しゅくじつ', meaning: 'święto państwowe' }] },
  { id: 'k521', kanji: '務', meaning: 'obowiązek / zadanie', onyomi: ['ム'], kunyomi: ['つと-める'], strokes: 11, lesson: 'L26', category: 'place', grade: 'N5', examples: [{ word: '事務室', reading: 'じむしつ', meaning: 'sekretariat / biuro' }, { word: '事務所', reading: 'じむしょ', meaning: 'biuro' }] },
  { id: 'k522', kanji: '市', meaning: 'miasto / targ', onyomi: ['シ'], kunyomi: ['いち'], strokes: 5, lesson: 'L26', category: 'place', grade: 'N5', examples: [{ word: '市役所', reading: 'しやくしょ', meaning: 'urząd miasta' }, { word: '市民', reading: 'しみん', meaning: 'mieszkańcy miasta / obywatele' }] },
  { id: 'k523', kanji: '式', meaning: 'ceremonia / wzór / styl', onyomi: ['シキ'], kunyomi: [], strokes: 6, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '成人式', reading: 'せいじんしき', meaning: 'ceremonia dorosłości' }, { word: '卒業式', reading: 'そつぎょうしき', meaning: 'rozdanie świadectw' }] },
  { id: 'k524', kanji: '験', meaning: 'test / sprawdzian / doświadczenie', onyomi: ['ケン', 'ゲン'], kunyomi: ['ため-す'], strokes: 18, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '経験', reading: 'けいけん', meaning: 'doświadczenie' }, { word: '試験', reading: 'しけん', meaning: 'egzamin' }] },
  { id: 'k525', kanji: '迎', meaning: 'witać / wychodzić naprzeciw', onyomi: ['ゲイ'], kunyomi: ['むか-える'], strokes: 7, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '迎える', reading: 'むかえる', meaning: 'witać / odbierać kogoś' }, { word: '出迎え', reading: 'でむかえ', meaning: 'powitanie' }] },
  { id: 'k526', kanji: '律', meaning: 'prawo / przepis / rytm', onyomi: ['リツ', 'リチ'], kunyomi: [], strokes: 9, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '法律', reading: 'ほうりつ', meaning: 'prawo / ustawa' }, { word: '規律', reading: 'きりつ', meaning: 'dyscyplina / porządek' }] },
  { id: 'k527', kanji: '許', meaning: 'pozwalać / wybaczać', onyomi: ['キョ'], kunyomi: ['ゆる-す'], strokes: 11, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '許す', reading: 'ゆるす', meaning: 'wybaczać / pozwalać' }, { word: '許可', reading: 'きょか', meaning: 'pozwolenie / zezwolenie' }] },
  { id: 'k528', kanji: '責', meaning: 'odpowiedzialność / winić', onyomi: ['セキ'], kunyomi: ['せ-める'], strokes: 11, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '責任', reading: 'せきにん', meaning: 'odpowiedzialność' }, { word: '責める', reading: 'せめる', meaning: 'winić / oskarżać' }] },
  { id: 'k529', kanji: '任', meaning: 'powierzać / obowiązek', onyomi: ['ニン'], kunyomi: ['まか-せる', 'まか-す'], strokes: 6, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '責任', reading: 'せきにん', meaning: 'odpowiedzialność' }, { word: '任せる', reading: 'まかせる', meaning: 'powierzać zadanie' }] },
  { id: 'k530', kanji: '途', meaning: 'droga / w trakcie', onyomi: ['ト'], kunyomi: ['みち'], strokes: 10, lesson: 'L26', category: 'transport', grade: 'N5', examples: [{ word: '途中で', reading: 'とちゅうで', meaning: 'po drodze / w trakcie' }, { word: '用途', reading: 'ようと', meaning: 'zastosowanie' }] },
  { id: 'k531', kanji: '寄', meaning: 'podchodzić / wpadać po drodze', onyomi: ['キ'], kunyomi: ['よ-る', 'よ-せる'], strokes: 11, lesson: 'L26', category: 'transport', grade: 'N5', examples: [{ word: '寄る', reading: 'よる', meaning: 'wpadać z wizytą / zbliżać się' }, { word: '立ち寄る', reading: 'たちよる', meaning: 'wstąpić na chwilę' }] },
  { id: 'k532', kanji: '性', meaning: 'płeć / natura / cecha', onyomi: ['セイ', 'ショウ'], kunyomi: [], strokes: 8, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '女性', reading: 'じょせい', meaning: 'kobieta' }, { word: '男性', reading: 'だんせい', meaning: 'mężczyzna' }] },
  { id: 'k533', kanji: '未', meaning: 'jeszcze nie / przyszłość', onyomi: ['ミ'], kunyomi: ['いま-だ'], strokes: 5, lesson: 'L26', category: 'time', grade: 'N5', examples: [{ word: '未成年者', reading: 'みせいねんしゃ', meaning: 'niepełnoletni' }, { word: '未来', reading: 'みらい', meaning: 'przyszłość' }] },
  { id: 'k534', kanji: '規', meaning: 'reguła / wzorzec', onyomi: ['キ'], kunyomi: [], strokes: 11, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '規則', reading: 'きそく', meaning: 'zasady / przepisy' }, { word: '定規', reading: 'じょうぎ', meaning: 'linijka' }] },
  { id: 'k535', kanji: '則', meaning: 'reguła / zasada', onyomi: ['ソク'], kunyomi: ['のっと-る'], strokes: 9, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '規則', reading: 'きそく', meaning: 'zasady' }, { word: '法則', reading: 'ほうそく', meaning: 'prawo / prawidło' }] },
  { id: 'k536', kanji: '命', meaning: 'życie / przeznaczenie / rozkaz', onyomi: ['メイ', 'ミョウ'], kunyomi: ['いのち'], strokes: 8, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '命令', reading: 'めいれい', meaning: 'rozkaz / polecenie' }, { word: '生命', reading: 'せいめい', meaning: 'życie' }] },
  { id: 'k537', kanji: '令', meaning: 'rozkaz / zarządzenie', onyomi: ['レイ'], kunyomi: [], strokes: 5, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '命令', reading: 'めいれい', meaning: 'rozkaz' }, { word: '法令', reading: 'ほうれい', meaning: 'przepisy prawa' }] },
  { id: 'k538', kanji: '頼', meaning: 'prosić / polegać', onyomi: ['ライ'], kunyomi: ['たの-む', 'たよ-る'], strokes: 16, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '頼む', reading: 'たのむ', meaning: 'prosić' }, { word: '頼り', reading: 'たより', meaning: 'wsparcie / oparcie' }] },
  { id: 'k539', kanji: '授', meaning: 'nauczać / wręczać', onyomi: ['ジュ'], kunyomi: ['さず-ける', 'さず-かる'], strokes: 11, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '授業', reading: 'じゅぎょう', meaning: 'zajęcia / lekcja' }, { word: '教授', reading: 'きょうじゅ', meaning: 'profesor' }] },
  { id: 'k540', kanji: '欠', meaning: 'brakować / opuszczać', onyomi: ['ケツ'], kunyomi: ['か-ける', 'か-く'], strokes: 4, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '欠席', reading: 'けっせき', meaning: 'nieobecność' }, { word: '欠点', reading: 'けってん', meaning: 'wada / mankament' }] },
  { id: 'k541', kanji: '仏', meaning: 'Budda / Francja', onyomi: ['ブツ', 'フツ'], kunyomi: ['ほとけ'], strokes: 4, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '仏教', reading: 'ぶっきょう', meaning: 'buddyzm' }, { word: '大仏', reading: 'だいぶつ', meaning: 'Wielki Budda' }] },
  { id: 'k542', kanji: '幸', meaning: 'szczęście', onyomi: ['コウ'], kunyomi: ['さいわ-い', 'しあわ-せ'], strokes: 8, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '幸せ', reading: 'しあわせ', meaning: 'szczęście' }, { word: '不幸', reading: 'ふこう', meaning: 'nieszczęście' }] },
  { id: 'k543', kanji: '宗', meaning: 'religia / odłam / ród', onyomi: ['シュウ', 'ソウ'], kunyomi: [], strokes: 8, lesson: 'L26', category: 'place', grade: 'N5', examples: [{ word: '宗教', reading: 'しゅうきょう', meaning: 'religia' }, { word: '宗派', reading: 'しゅうは', meaning: 'odłam / sekta' }] },
  { id: 'k544', kanji: '治', meaning: 'rządzić / leczyć', onyomi: ['ジ', 'チ'], kunyomi: ['おさ-める', 'なお-る', 'なお-す'], strokes: 8, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '政治', reading: 'せいじ', meaning: 'polityka' }, { word: '治る', reading: 'なおる', meaning: 'zdrowieć' }] },
  { id: 'k545', kanji: '深', meaning: 'głęboki', onyomi: ['シン'], kunyomi: ['ふか-い', 'ふか-まる'], strokes: 11, lesson: 'L26', category: 'nature', grade: 'N5', examples: [{ word: '深い', reading: 'ふかい', meaning: 'głęboki' }, { word: '深夜', reading: 'しんや', meaning: 'środek nocy' }] },
  { id: 'k546', kanji: '完', meaning: 'zakończyć / kompletny', onyomi: ['カン'], kunyomi: [], strokes: 7, lesson: 'L26', category: 'time', grade: 'N5', examples: [{ word: '完成', reading: 'かんせい', meaning: 'ukończenie / realizacja' }, { word: '完全', reading: 'かんぜん', meaning: 'doskonały / kompletny' }] },
  { id: 'k547', kanji: '委', meaning: 'powierzać / komitet', onyomi: ['イ'], kunyomi: ['ゆだ-ねる'], strokes: 8, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '委員', reading: 'いいん', meaning: 'członek komisji' }, { word: '委員会', reading: 'いいんかい', meaning: 'komisja / komitet' }] },
  { id: 'k548', kanji: '周', meaning: 'obwód / dookoła', onyomi: ['シュウ'], kunyomi: ['まわ-り'], strokes: 8, lesson: 'L26', category: 'direction', grade: 'N5', examples: [{ word: '一周', reading: 'いっしゅう', meaning: 'jedno okrążenie' }, { word: '周囲', reading: 'しゅうい', meaning: 'otoczenie' }] },
  { id: 'k549', kanji: '港', meaning: 'port / przystań', onyomi: ['コウ'], kunyomi: ['みなと'], strokes: 12, lesson: 'L26', category: 'place', grade: 'N5', examples: [{ word: '港', reading: 'みなと', meaning: 'port' }, { word: '空港', reading: 'くうこう', meaning: 'lotnisko' }] },
  { id: 'k550', kanji: '痛', meaning: 'ból / boleć', onyomi: ['ツウ'], kunyomi: ['いた-い', 'いた-む'], strokes: 12, lesson: 'L26', category: 'body', grade: 'N5', examples: [{ word: '痛い', reading: 'いたい', meaning: 'bolesny / boli' }, { word: '頭痛', reading: 'ずつう', meaning: 'ból głowy' }] },
  { id: 'k551', kanji: '過', meaning: 'przemijać / przekraczać', onyomi: ['カ'], kunyomi: ['す-ぎる', 'す-ごす', 'あやま-つ'], strokes: 12, lesson: 'L26', category: 'time', grade: 'N5', examples: [{ word: '過去', reading: 'かこ', meaning: 'przeszłość' }, { word: '過ぎる', reading: 'すぎる', meaning: 'mijać / przesadzać' }] },
  { id: 'k552', kanji: '落', meaning: 'spadać / gubić', onyomi: ['ラク'], kunyomi: ['お-ちる', 'お-とす'], strokes: 12, lesson: 'L26', category: 'nature', grade: 'N5', examples: [{ word: '落とす', reading: 'おとす', meaning: 'upuszczać / gubić' }, { word: '落ちる', reading: 'おちる', meaning: 'spadać' }] },
  { id: 'k553', kanji: '関', meaning: 'bariera / związek', onyomi: ['カン'], kunyomi: ['せき', 'かか-わる'], strokes: 14, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '関係', reading: 'かんけい', meaning: 'relacja / związek' }, { word: '玄関', reading: 'げんかん', meaning: 'przedsionek genkan' }] },
  { id: 'k554', kanji: '係', meaning: 'związek / osoba odpowiedzialna', onyomi: ['ケイ'], kunyomi: ['かか-る', 'かかり'], strokes: 9, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '係', reading: 'かかり', meaning: 'odpowiedzialny / dyżurny' }, { word: '関係', reading: 'かんけい', meaning: 'związek' }] },
  { id: 'k555', kanji: '決', meaning: 'decydować / ustalać', onyomi: ['ケツ'], kunyomi: ['き-める', 'き-まる'], strokes: 7, lesson: 'L26', category: 'school', grade: 'N5', examples: [{ word: '決める', reading: 'きめる', meaning: 'decydować' }, { word: '決して', reading: 'けっして', meaning: 'nigdy / w żadnym wypadku' }] },
  { id: 'k556', kanji: '姉', meaning: 'starsza siostra', onyomi: ['シ'], kunyomi: ['あね'], strokes: 8, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '姉', reading: 'あね', meaning: 'starsza siostra' }, { word: 'お姉さん', reading: 'おねえさん', meaning: 'starsza siostra' }] },
  { id: 'k557', kanji: '妹', meaning: 'młodsza siostra', onyomi: ['マイ'], kunyomi: ['いもうと'], strokes: 8, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '妹', reading: 'いもうと', meaning: 'młodsza siostra' }, { word: '姉妹', reading: 'しまい', meaning: 'siostry' }] },
  { id: 'k558', kanji: '飲', meaning: 'pić', onyomi: ['イン'], kunyomi: ['の-む'], strokes: 12, lesson: 'L26', category: 'nature', grade: 'N5', examples: [{ word: '飲む', reading: 'のむ', meaning: 'pić' }, { word: '飲み物', reading: 'のみもの', meaning: 'napój' }] },
  { id: 'k559', kanji: '辺', meaning: 'okolica / strona', onyomi: ['ヘン'], kunyomi: ['あた-り', 'べ'], strokes: 5, lesson: 'L26', category: 'place', grade: 'N5', examples: [{ word: 'この辺', reading: 'このへん', meaning: 'ta okolica' }, { word: '辺り', reading: 'あたり', meaning: 'okolica / pobliże' }] },
  { id: 'k560', kanji: '有', meaning: 'istnieć / posiadać', onyomi: ['ユウ', 'ウ'], kunyomi: ['あ-る'], strokes: 6, lesson: 'L26', category: 'people', grade: 'N5', examples: [{ word: '有名な', reading: 'ゆうめいな', meaning: 'sławny / znany' }, { word: '有名', reading: 'ゆうめい', meaning: 'sława' }] },

  // L27
  { id: 'k561', kanji: '攻', meaning: 'atakować / badać / studiować', onyomi: ['コウ'], kunyomi: ['せ-める'], strokes: 7, lesson: 'L27', category: 'school', grade: 'N5', examples: [{ word: '専攻', reading: 'せんこう', meaning: 'specjalizacja / kierunek studiów' }, { word: '攻撃', reading: 'こうげき', meaning: 'atak' }] },
  { id: 'k562', kanji: '紹', meaning: 'przedstawiać / łączyć', onyomi: ['ショウ'], kunyomi: [], strokes: 11, lesson: 'L27', category: 'people', grade: 'N5', examples: [{ word: '紹介', reading: 'しょうかい', meaning: 'przedstawienie / zapoznanie' }, { word: '自己紹介', reading: 'じこしょうかい', meaning: 'autoprezentacja' }] },
  { id: 'k563', kanji: '介', meaning: 'pośredniczyć / asystować', onyomi: ['カイ'], kunyomi: [], strokes: 4, lesson: 'L27', category: 'people', grade: 'N5', examples: [{ word: '紹介', reading: 'しょうかい', meaning: 'przedstawienie' }, { word: '介助', reading: 'かいじょ', meaning: 'pomoc / opieka' }] },
  { id: 'k564', kanji: '温', meaning: 'ciepły / temperatura', onyomi: ['オン'], kunyomi: ['あたた-かい', 'あたた-まる'], strokes: 12, lesson: 'L27', category: 'nature', grade: 'N5', examples: [{ word: '温度', reading: 'おんど', meaning: 'temperatura' }, { word: '温かい', reading: 'あたたかい', meaning: 'ciepły' }, { word: '温泉', reading: 'おんせん', meaning: 'gorące źródła onsen' }] },
  { id: 'k565', kanji: '順', meaning: 'kolejność / porządek', onyomi: ['ジュン'], kunyomi: [], strokes: 12, lesson: 'L27', category: 'number', grade: 'N5', examples: [{ word: '順番', reading: 'じゅんばん', meaning: 'kolej / porządek' }, { word: '順調', reading: 'じゅんちょう', meaning: 'pomyślny przebieg' }] },
  { id: 'k566', kanji: '試', meaning: 'próbować / testować', onyomi: ['シ'], kunyomi: ['こころ-みる', 'ため-す'], strokes: 13, lesson: 'L27', category: 'school', grade: 'N5', examples: [{ word: '試験', reading: 'しけん', meaning: 'egzamin' }, { word: '試合', reading: 'しあい', meaning: 'mecz / zawody' }] },
  { id: 'k567', kanji: '管', meaning: 'rura / zarządzać', onyomi: ['カン'], kunyomi: ['くだ'], strokes: 14, lesson: 'L27', category: 'school', grade: 'N5', examples: [{ word: '試験管', reading: 'しけんかん', meaning: 'probówka' }, { word: '管理', reading: 'かんり', meaning: 'zarządzanie' }] },
  { id: 'k568', kanji: '塩', meaning: 'sól', onyomi: ['エン'], kunyomi: ['しお'], strokes: 13, lesson: 'L27', category: 'nature', grade: 'N5', examples: [{ word: '塩', reading: 'しお', meaning: 'sól' }, { word: '食塩', reading: 'しょくえん', meaning: 'sól kuchenna' }] },
  { id: 'k569', kanji: '果', meaning: 'owoc / wynik / rezultat', onyomi: ['カ'], kunyomi: ['は-たす', 'は-てる'], strokes: 8, lesson: 'L27', category: 'nature', grade: 'N5', examples: [{ word: '結果', reading: 'けっか', meaning: 'wynik / rezultat' }, { word: '果物', reading: 'くだもの', meaning: 'owoce' }] },
  { id: 'k570', kanji: '倍', meaning: 'wielokrotność / podwójnie', onyomi: ['バイ'], kunyomi: [], strokes: 10, lesson: 'L27', category: 'number', grade: 'N5', examples: [{ word: '倍', reading: 'ばい', meaning: 'podwójnie / raz więcej' }, { word: '二倍', reading: 'にばい', meaning: 'dwukrotnie' }] },
  { id: 'k571', kanji: '徒', meaning: 'uczeń / pieszo', onyomi: ['ト'], kunyomi: [], strokes: 10, lesson: 'L27', category: 'school', grade: 'N5', examples: [{ word: '生徒', reading: 'せいと', meaning: 'uczeń' }, { word: '徒歩', reading: 'とほ', meaning: 'pieszo' }] },
  { id: 'k572', kanji: '課', meaning: 'lekcja / rozdział / sekcja', onyomi: ['カ'], kunyomi: [], strokes: 15, lesson: 'L27', category: 'school', grade: 'N5', examples: [{ word: '放課後', reading: 'ほうかご', meaning: 'po lekcjach' }, { word: '課長', reading: 'かちょう', meaning: 'kierownik sekcji' }] },
  { id: 'k573', kanji: '第', meaning: 'przedrostek liczebnika porządkowego', onyomi: ['ダイ'], kunyomi: [], strokes: 11, lesson: 'L27', category: 'number', grade: 'N5', examples: [{ word: '第三', reading: 'だいさん', meaning: 'numer 3 / trzeci' }, { word: '第一', reading: 'だいいち', meaning: 'po pierwsze / numer jeden' }] },
  { id: 'k574', kanji: '他', meaning: 'inny / obcy', onyomi: ['タ'], kunyomi: ['ほか'], strokes: 5, lesson: 'L27', category: 'people', grade: 'N5', examples: [{ word: '他人', reading: 'たにん', meaning: 'obca osoba' }, { word: '他に', reading: 'ほかに', meaning: 'oprócz tego / ponadto' }] },
  { id: 'k575', kanji: '程', meaning: 'stopień / miara / około', onyomi: ['テイ'], kunyomi: ['ほど'], strokes: 12, lesson: 'L27', category: 'number', grade: 'N5', examples: [{ word: '程度', reading: 'ていど', meaning: 'stopień / zakres' }, { word: '日程', reading: 'にってい', meaning: 'harmonogram' }] },
  { id: 'k576', kanji: '給', meaning: 'dostarczać / płaca', onyomi: ['キュウ'], kunyomi: ['たま-う'], strokes: 12, lesson: 'L27', category: 'school', grade: 'N5', examples: [{ word: '給食', reading: 'きゅうしょく', meaning: 'posiłek szkolny' }, { word: '給料', reading: 'きゅうりょう', meaning: 'pensja / wynagrodzenie' }] },
  { id: 'k577', kanji: '共', meaning: 'razem / wspólny', onyomi: ['キョウ'], kunyomi: ['とも'], strokes: 6, lesson: 'L27', category: 'people', grade: 'N5', examples: [{ word: '共に', reading: 'ともに', meaning: 'razem / wspólnie' }, { word: '共通', reading: 'きょうつう', meaning: 'wspólny' }] },
  { id: 'k578', kanji: '因', meaning: 'przyczyna / zależeć', onyomi: ['イン'], kunyomi: ['よ-る'], strokes: 6, lesson: 'L27', category: 'school', grade: 'N5', examples: [{ word: '原因', reading: 'げんいん', meaning: 'przyczyna / powód' }, { word: '要因', reading: 'よういん', meaning: 'czynnik' }] },
  { id: 'k579', kanji: '師', meaning: 'nauczyciel / mistrz', onyomi: ['シ'], kunyomi: [], strokes: 10, lesson: 'L27', category: 'people', grade: 'N5', examples: [{ word: '教師', reading: 'きょうし', meaning: 'nauczyciel' }, { word: '医師', reading: 'いし', meaning: 'lekarz' }] },
  { id: 'k580', kanji: '無', meaning: 'nie ma / brak / nicość', onyomi: ['ム', 'ブ'], kunyomi: ['な-い'], strokes: 12, lesson: 'L27', category: 'number', grade: 'N5', examples: [{ word: '無い', reading: 'ない', meaning: 'nie ma / brak' }, { word: '無理', reading: 'むり', meaning: 'niemożliwe / ponad siły' }, { word: '無料', reading: 'むりょう', meaning: 'bezpłatny' }] },
  { id: 'k581', kanji: '算', meaning: 'liczyć / rachunki', onyomi: ['サン'], kunyomi: [], strokes: 14, lesson: 'L27', category: 'number', grade: 'N5', examples: [{ word: '計算', reading: 'けいさん', meaning: 'obliczenia / rachunki' }, { word: '予算', reading: 'よさん', meaning: 'budżet' }] },
  { id: 'k582', kanji: '調', meaning: 'badać / nastrój / ton', onyomi: ['チョウ'], kunyomi: ['しら-べる', 'ととの-う'], strokes: 15, lesson: 'L27', category: 'school', grade: 'N5', examples: [{ word: '調べる', reading: 'しらべる', meaning: 'sprawdzać / szukać informacji' }, { word: '調査', reading: 'ちょうさ', meaning: 'badanie / dochodzenie' }] },

  // L28
  { id: 'k583', kanji: '訪', meaning: 'odwiedzać', onyomi: ['ホウ'], kunyomi: ['おとず-れる', 'たず-ねる'], strokes: 11, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: '訪問', reading: 'ほうもん', meaning: 'wizyta / odwiedziny' }, { word: '訪ねる', reading: 'たずねる', meaning: 'odwiedzać' }] },
  { id: 'k584', kanji: '宅', meaning: 'dom / rezydencja', onyomi: ['タク'], kunyomi: [], strokes: 6, lesson: 'L28', category: 'place', grade: 'N5', examples: [{ word: 'お宅', reading: 'おたく', meaning: 'pański dom / czyjś dom' }, { word: '帰宅', reading: 'きたく', meaning: 'powrót do domu' }] },
  { id: 'k585', kanji: '約', meaning: 'obietnica / około', onyomi: ['ヤク'], kunyomi: [], strokes: 9, lesson: 'L28', category: 'time', grade: 'N5', examples: [{ word: '約束', reading: 'やくそく', meaning: 'obietnica / umowa' }, { word: '予約', reading: 'よやく', meaning: 'rezerwacja' }] },
  { id: 'k586', kanji: '束', meaning: 'wiązać / pęczek', onyomi: ['ソク'], kunyomi: ['たば'], strokes: 7, lesson: 'L28', category: 'nature', grade: 'N5', examples: [{ word: '約束', reading: 'やくそく', meaning: 'obietnica' }, { word: '花束', reading: 'はなたば', meaning: 'bukiet kwiatów' }] },
  { id: 'k587', kanji: '感', meaning: 'czuć / wrażenie', onyomi: ['カン'], kunyomi: [], strokes: 13, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: '感心する', reading: 'かんしんする', meaning: 'podziwiać' }, { word: '感動', reading: 'かんどう', meaning: 'wzruszenie' }] },
  { id: 'k588', kanji: '召', meaning: 'wzywać / jeść (honorif.)', onyomi: ['ショウ'], kunyomi: ['め-す'], strokes: 5, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: '召し上がる', reading: 'めしあがる', meaning: 'jeść / pić (uprzejmie)' }, { word: '召集', reading: 'しょうしゅう', meaning: 'zwołanie' }] },
  { id: 'k589', kanji: '次', meaning: 'następny / kolejny', onyomi: ['ジ', 'シ'], kunyomi: ['つぎ', 'つ-ぐ'], strokes: 6, lesson: 'L28', category: 'time', grade: 'N5', examples: [{ word: '次', reading: 'つぎ', meaning: 'następny' }, { word: '目次', reading: 'もくじ', meaning: 'spis treści' }] },
  { id: 'k590', kanji: '御', meaning: 'uprzejmy przedrostek / czcigodny', onyomi: ['ギョ', 'ゴ'], kunyomi: ['おん', 'お'], strokes: 12, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: '御覧になる', reading: 'ごらんになる', meaning: 'oglądać / widzieć (uprzejmie)' }, { word: '御飯', reading: 'ごはん', meaning: 'posiłek / ryż' }] },
  { id: 'k591', kanji: '参', meaning: 'iść / odwiedzać (uniżone)', onyomi: ['サン'], kunyomi: ['まい-る'], strokes: 8, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: '参る', reading: 'まいる', meaning: 'iść / przychodzić (skromnie)' }, { word: '参加', reading: 'さんか', meaning: 'uczestnictwo' }] },
  { id: 'k592', kanji: '申', meaning: 'mówić (uniżone)', onyomi: ['シン'], kunyomi: ['もう-す'], strokes: 5, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: '申す', reading: 'もうす', meaning: 'mówić / nazywać się (skromnie)' }, { word: '申し込む', reading: 'もうしこむ', meaning: 'składać wniosek / zapisywać się' }] },
  { id: 'k593', kanji: '勝', meaning: 'wygrywać / zwyciężać', onyomi: ['ショウ'], kunyomi: ['か-つ', 'まさ-る'], strokes: 12, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: '勝つ', reading: 'かつ', meaning: 'wygrywać' }, { word: '優勝', reading: 'ゆうしょう', meaning: 'zwycięstwo / mistrzostwo' }] },
  { id: 'k594', kanji: '負', meaning: 'przegrywać / ulegać', onyomi: ['フ'], kunyomi: ['ま-ける', 'お-う'], strokes: 9, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: '負ける', reading: 'まける', meaning: 'przegrywać' }, { word: '勝負', reading: 'しょうぶ', meaning: 'mecz / pojedynek' }] },
  { id: 'k595', kanji: '具', meaning: 'narzędzie / sprzęt', onyomi: ['グ'], kunyomi: [], strokes: 8, lesson: 'L28', category: 'home', grade: 'N5', examples: [{ word: '家具', reading: 'かぐ', meaning: 'meble' }, { word: '道具', reading: 'どうぐ', meaning: 'narzędzia' }] },
  { id: 'k596', kanji: '息', meaning: 'oddech / syn', onyomi: ['ソク'], kunyomi: ['いき'], strokes: 10, lesson: 'L28', category: 'body', grade: 'N5', examples: [{ word: '息', reading: 'いき', meaning: 'oddech' }, { word: '息子', reading: 'むすこ', meaning: 'syn' }] },
  { id: 'k597', kanji: '位', meaning: 'pozycja / ranga / stopień', onyomi: ['イ'], kunyomi: ['くらい'], strokes: 7, lesson: 'L28', category: 'number', grade: 'N5', examples: [{ word: '一位', reading: 'いちい', meaning: 'pierwsze miejsce' }, { word: '位置', reading: 'いち', meaning: 'położenie / lokalizacja' }] },
  { id: 'k598', kanji: '泊', meaning: 'nocować / zatrzymać się', onyomi: ['ハク'], kunyomi: ['と-まる', 'と-める'], strokes: 8, lesson: 'L28', category: 'place', grade: 'N5', examples: [{ word: '泊まる', reading: 'とまる', meaning: 'nocować / zatrzymywać się na noc' }, { word: '一泊', reading: 'いっぱく', meaning: 'jeden nocleg' }] },
  { id: 'k599', kanji: '客', meaning: 'gość / klient', onyomi: ['キャク', 'カク'], kunyomi: [], strokes: 9, lesson: 'L28', category: 'people', grade: 'N5', examples: [{ word: 'お客様', reading: 'おきゃくさま', meaning: 'klient / gość' }, { word: '乗客', reading: 'じょうきゃく', meaning: 'pasażer' }] },
];

// prettier-ignore
const KANJI_LESSON_WORDS = [
  // Słówka 1か
  { id: 'kw01', lesson: '1ka', kana: 'がくせい', kanji: '学生', romaji: 'gakusei', meaning: 'uczeń' },
  { id: 'kw02', lesson: '1ka', kana: 'せんせい', kanji: '先生', romaji: 'sensei', meaning: 'nauczyciel' },
  { id: 'kw03', lesson: '1ka', kana: 'ひと', kanji: '人', romaji: 'hito', meaning: 'człowiek' },
  { id: 'kw04', lesson: '1ka', kana: 'ほん', kanji: '本', romaji: 'hon', meaning: 'książka' },
  { id: 'kw05', lesson: '1ka', kana: 'しんぶん', kanji: '新聞', romaji: 'shinbun', meaning: 'gazeta' },
  { id: 'kw06', lesson: '1ka', kana: 'じどうしゃ', kanji: '自動車', romaji: 'jidousha', meaning: 'samochód' },
  { id: 'kw07', lesson: '1ka', kana: 'くるま', kanji: '車', romaji: 'kuruma', meaning: 'samochód' },
  { id: 'kw08', lesson: '1ka', kana: 'じてんしゃ', kanji: '自転車', romaji: 'jitensha', meaning: 'rower' },
  { id: 'kw09', lesson: '1ka', kana: 'えいご', kanji: '英語', romaji: 'eigo', meaning: 'język angielski' },
  { id: 'kw10', lesson: '1ka', kana: 'ちゅうごく', kanji: '中国', romaji: 'chuugoku', meaning: 'Chiny' },
  { id: 'kw11', lesson: '1ka', kana: 'おんなのひと', kanji: '女の人', romaji: 'onna no hito', meaning: 'kobieta' },
  { id: 'kw12', lesson: '1ka', kana: 'へや', kanji: '部屋', romaji: 'heya', meaning: 'pokój' },
  { id: 'kw13', lesson: '1ka', kana: 'つくえ', kanji: '机', romaji: 'tsukue', meaning: 'biurko' },
  { id: 'kw14', lesson: '1ka', kana: 'とけい', kanji: '時計', romaji: 'tokei', meaning: 'zegarek' },
  { id: 'kw15', lesson: '1ka', kana: 'かぎ', kanji: '鍵', romaji: 'kagi', meaning: 'klucze' },
  { id: 'kw16', lesson: '1ka', kana: 'かばん', kanji: '鞄', romaji: 'kaban', meaning: 'torba' },
  { id: 'kw17', lesson: '1ka', kana: 'えんぴつ', kanji: '鉛筆', romaji: 'enpitsu', meaning: 'ołówek' },
  { id: 'kw18', lesson: '1ka', kana: 'きって', kanji: '切手', romaji: 'kitte', meaning: 'znaczek pocztowy' },
  { id: 'kw19', lesson: '1ka', kana: 'ポーランド', kanji: 'ポーランド', romaji: 'poorando', meaning: 'Polska' },
  { id: 'kw20', lesson: '1ka', kana: 'アメリカ', kanji: 'アメリカ', romaji: 'amerika', meaning: 'USA' },
  { id: 'kw21', lesson: '1ka', kana: 'イギリス', kanji: 'イギリス', romaji: 'igirisu', meaning: 'Anglia' },
  { id: 'kw22', lesson: '1ka', kana: 'タイ', kanji: 'タイ', romaji: 'tai', meaning: 'Tajlandia' },
  { id: 'kw23', lesson: '1ka', kana: 'フィリピン', kanji: 'フィリピン', romaji: 'firipin', meaning: 'Filipiny' },
  { id: 'kw24', lesson: '1ka', kana: 'マレーシア', kanji: 'マレーシア', romaji: 'mareeshia', meaning: 'Malezja' },
  { id: 'kw25', lesson: '1ka', kana: 'テレビ', kanji: 'テレビ', romaji: 'terebi', meaning: 'telewizor' },
  { id: 'kw26', lesson: '1ka', kana: 'ラジオ', kanji: 'ラジオ', romaji: 'rajio', meaning: 'radio' },
  { id: 'kw27', lesson: '1ka', kana: 'カメラ', kanji: 'カメラ', romaji: 'kamera', meaning: 'aparat fotograficzny' },
  { id: 'kw28', lesson: '1ka', kana: 'ノート', kanji: 'ノート', romaji: 'nooto', meaning: 'zeszyt' },
  { id: 'kw29', lesson: '1ka', kana: 'ボールペン', kanji: 'ボールペン', romaji: 'boorupen', meaning: 'długopis' },
  { id: 'kw30', lesson: '1ka', kana: 'テープ', kanji: 'テープ', romaji: 'teepu', meaning: 'taśma klejąca' },
  { id: 'kw31', lesson: '1ka', kana: 'レコード', kanji: 'レコード', romaji: 'rekoodo', meaning: 'płyta winylowa' },

  // Słówka 2か
  { id: 'kw32', lesson: '2ka', kana: 'やま', kanji: '山', romaji: 'yama', meaning: 'góra' },
  { id: 'kw33', lesson: '2ka', kana: 'さかな', kanji: '魚', romaji: 'sakana', meaning: 'ryba' },
  { id: 'kw34', lesson: '2ka', kana: 'がっこう', kanji: '学校', romaji: 'gakkou', meaning: 'szkoła' },
  { id: 'kw35', lesson: '2ka', kana: 'きょうしつ', kanji: '教室', romaji: 'kyoushitsu', meaning: 'sala lekcyjna' },
  { id: 'kw36', lesson: '2ka', kana: 'としょかん', kanji: '図書館', romaji: 'toshokan', meaning: 'biblioteka (budynek)' },
  { id: 'kw37', lesson: '2ka', kana: 'としょしつ', kanji: '図書室', romaji: 'toshoshitsu', meaning: 'czytelnia / biblioteka (wnętrze)' },
  { id: 'kw38', lesson: '2ka', kana: 'じむしつ', kanji: '事務室', romaji: 'jimushitsu', meaning: 'biuro / sekretariat' },
  { id: 'kw39', lesson: '2ka', kana: 'しょくどう', kanji: '食堂', romaji: 'shokudou', meaning: 'stołówka' },
  { id: 'kw40', lesson: '2ka', kana: 'たいいくかん', kanji: '体育館', romaji: 'taiikukan', meaning: 'sala gimnastyczna' },
  { id: 'kw41', lesson: '2ka', kana: 'びょういん', kanji: '病院', romaji: 'byouin', meaning: 'szpital' },
  { id: 'kw42', lesson: '2ka', kana: 'うち', kanji: '家', romaji: 'uchi', meaning: 'dom' },
  { id: 'kw43', lesson: '2ka', kana: 'たてもの', kanji: '建物', romaji: 'tatemono', meaning: 'budynek' },
  { id: 'kw44', lesson: '2ka', kana: 'にわ', kanji: '庭', romaji: 'niwa', meaning: 'ogród' },
  { id: 'kw45', lesson: '2ka', kana: 'りょう', kanji: '寮', romaji: 'ryou', meaning: 'akademik' },
  { id: 'kw46', lesson: '2ka', kana: 'かみ', kanji: '紙', romaji: 'kami', meaning: 'papier' },
  { id: 'kw47', lesson: '2ka', kana: 'えん', kanji: '円', romaji: 'en', meaning: 'jen' },
  { id: 'kw48', lesson: '2ka', kana: 'ぎゅうにゅう', kanji: '牛乳', romaji: 'gyuunyuu', meaning: 'mleko krowie' },
  { id: 'kw49', lesson: '2ka', kana: 'おおきい', kanji: '大きい', romaji: 'ookii', meaning: 'duży' },
  { id: 'kw50', lesson: '2ka', kana: 'ちいさい', kanji: '小さい', romaji: 'chiisai', meaning: 'mały' },
  { id: 'kw51', lesson: '2ka', kana: 'あかるい', kanji: '明るい', romaji: 'akarui', meaning: 'jasny' },
  { id: 'kw52', lesson: '2ka', kana: 'くらい', kanji: '暗い', romaji: 'kurai', meaning: 'ciemny' },
  { id: 'kw53', lesson: '2ka', kana: 'あたらしい', kanji: '新しい', romaji: 'atarashii', meaning: 'nowy' },
  { id: 'kw54', lesson: '2ka', kana: 'ふるい', kanji: '古い', romaji: 'furui', meaning: 'stary' },
  { id: 'kw55', lesson: '2ka', kana: 'たかい', kanji: '高い', romaji: 'takai', meaning: 'wysoki / drogi' },
  { id: 'kw56', lesson: '2ka', kana: 'ひくい', kanji: '低い', romaji: 'hikui', meaning: 'niski' },
  { id: 'kw57', lesson: '2ka', kana: 'やすい', kanji: '安い', romaji: 'yasui', meaning: 'tani' },
  { id: 'kw58', lesson: '2ka', kana: 'しろい', kanji: '白い', romaji: 'shiroi', meaning: 'biały' },
  { id: 'kw59', lesson: '2ka', kana: 'くろい', kanji: '黒い', romaji: 'kuroi', meaning: 'czarny' },
  { id: 'kw60', lesson: '2ka', kana: 'あかい', kanji: '赤い', romaji: 'akai', meaning: 'czerwony' },
  { id: 'kw61', lesson: '2ka', kana: 'あおい', kanji: '青い', romaji: 'aoi', meaning: 'niebieski' },
  { id: 'kw62', lesson: '2ka', kana: 'きいろい', kanji: '黄色い', romaji: 'kiiroi', meaning: 'żółty' },
  { id: 'kw63', lesson: '2ka', kana: 'パン', kanji: 'パン', romaji: 'pan', meaning: 'chleb / pieczywo' },
  { id: 'kw64', lesson: '2ka', kana: 'スープ', kanji: 'スープ', romaji: 'suupu', meaning: 'zupa' },
  { id: 'kw65', lesson: '2ka', kana: 'ジュース', kanji: 'ジュース', romaji: 'juusu', meaning: 'sok' },
  { id: 'kw66', lesson: '2ka', kana: 'レストラン', kanji: 'レストラン', romaji: 'resutoran', meaning: 'restauracja' },
  { id: 'kw67', lesson: '2ka', kana: 'トイレ', kanji: 'トイレ', romaji: 'toire', meaning: 'toaleta' },
  { id: 'kw68', lesson: '2ka', kana: 'クラス', kanji: 'クラス', romaji: 'kurasu', meaning: 'klasa' },
  { id: 'kw69', lesson: '2ka', kana: 'しょっけん', kanji: '食券', romaji: 'shokken', meaning: 'kupon na jedzenie' }
];

/* =========================================================
   DŹWIĘK (Web Audio API — bez plików zewnętrznych)
   ========================================================= */

const Audio = (() => {
  let ctx = null;
  let muted = settings.muted;
  let currentAudio = null;

  let masterGain = null;
  let sfxGain = null;
  let ambientGain = null;

  // Ambient procedural generator state
  let noiseBuffer = null;
  let ambientSource = null;
  let ambientFilter1 = null;
  let ambientFilter2 = null;
  let ambientLfo = null;
  let ambientLfoGain = null;
  let ambientPlaying = false;
  let activeAmbientPreset = settings.ambientSound !== 'off' ? settings.ambientSound : 'rain';

  function updateVolumes() {
    if (!ctx || !masterGain) return;
    try {
      const masterLevel = muted ? 0 : (settings.masterVolume ?? 80) / 100;
      const sfxLevel = (settings.sfxVolume ?? 80) / 100;
      const ambientLevel = (settings.ambientVolume ?? 50) / 100;
      const now = ctx.currentTime;

      masterGain.gain.cancelScheduledValues(now);
      masterGain.gain.setValueAtTime(masterLevel, now);

      sfxGain.gain.cancelScheduledValues(now);
      sfxGain.gain.setValueAtTime(sfxLevel, now);

      ambientGain.gain.cancelScheduledValues(now);
      ambientGain.gain.setValueAtTime(ambientLevel, now);
    } catch (e) {}
  }

  function getCtx() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        ctx = new AudioCtx();
        masterGain = ctx.createGain();
        sfxGain = ctx.createGain();
        ambientGain = ctx.createGain();

        sfxGain.connect(masterGain);
        ambientGain.connect(masterGain);
        masterGain.connect(ctx.destination);
        updateVolumes();
      }
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  function getNoiseBuffer(c) {
    if (noiseBuffer) return noiseBuffer;
    const sampleRate = c.sampleRate || 44100;
    const bufferSize = sampleRate * 8; // 8 seconds of seamless stereo pink noise
    const buf = c.createBuffer(2, bufferSize, sampleRate);

    for (let ch = 0; ch < 2; ch++) {
      const data = buf.getChannelData(ch);
      let b0 = 0,
        b1 = 0,
        b2 = 0,
        b3 = 0,
        b4 = 0,
        b5 = 0,
        b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        // Paul Kellet's filtered pink noise algorithm
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.969 * b2 + white * 0.153852;
        b3 = 0.8665 * b3 + white * 0.3104856;
        b4 = 0.55 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.016898;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
        b6 = white * 0.115926;
      }
    }
    noiseBuffer = buf;
    return noiseBuffer;
  }

  function configureAmbientNodes(preset) {
    if (!ctx || !ambientFilter1 || !ambientFilter2 || !ambientLfo || !ambientLfoGain) return;
    const now = ctx.currentTime;
    activeAmbientPreset = preset;

    if (preset === 'rain') {
      // Łagodny deszcz w świątynnym ogrodzie (filtr dolnoprzepustowy z miękkim szumem kropel)
      ambientFilter1.type = 'lowpass';
      ambientFilter1.frequency.setTargetAtTime(850, now, 0.4);
      ambientFilter1.Q.setTargetAtTime(1.2, now, 0.4);

      ambientFilter2.type = 'peaking';
      ambientFilter2.frequency.setTargetAtTime(1400, now, 0.4);
      ambientFilter2.Q.setTargetAtTime(1.0, now, 0.4);
      ambientFilter2.gain.setTargetAtTime(3, now, 0.4);

      ambientLfo.frequency.setTargetAtTime(0.25, now, 0.4);
      ambientLfoGain.gain.setTargetAtTime(60, now, 0.4);
    } else if (preset === 'bamboo') {
      // Wiatr przez bambusowy las (rezonans pasmowy z powolnym powiewem)
      ambientFilter1.type = 'bandpass';
      ambientFilter1.frequency.setTargetAtTime(450, now, 0.4);
      ambientFilter1.Q.setTargetAtTime(2.2, now, 0.4);

      ambientFilter2.type = 'lowpass';
      ambientFilter2.frequency.setTargetAtTime(750, now, 0.4);
      ambientFilter2.Q.setTargetAtTime(1.5, now, 0.4);
      ambientFilter2.gain.setTargetAtTime(0, now, 0.4);

      ambientLfo.frequency.setTargetAtTime(0.09, now, 0.4);
      ambientLfoGain.gain.setTargetAtTime(140, now, 0.4);
    } else if (preset === 'waves') {
      // Spokojne fale morskie (głębokie, powolne 10-sekundowe przypływy)
      ambientFilter1.type = 'lowpass';
      ambientFilter1.frequency.setTargetAtTime(320, now, 0.4);
      ambientFilter1.Q.setTargetAtTime(0.8, now, 0.4);

      ambientFilter2.type = 'lowpass';
      ambientFilter2.frequency.setTargetAtTime(550, now, 0.4);
      ambientFilter2.Q.setTargetAtTime(1.0, now, 0.4);
      ambientFilter2.gain.setTargetAtTime(0, now, 0.4);

      ambientLfo.frequency.setTargetAtTime(0.1, now, 0.4);
      ambientLfoGain.gain.setTargetAtTime(180, now, 0.4);
    }
  }

  function startAmbient(preset = settings.ambientSound) {
    if (preset === 'off') {
      stopAmbient();
      return;
    }
    try {
      const c = getCtx();
      if (!c) return;
      if (ambientPlaying) {
        configureAmbientNodes(preset);
        return;
      }

      const buf = getNoiseBuffer(c);
      ambientSource = c.createBufferSource();
      ambientSource.buffer = buf;
      ambientSource.loop = true;

      ambientFilter1 = c.createBiquadFilter();
      ambientFilter2 = c.createBiquadFilter();
      ambientLfo = c.createOscillator();
      ambientLfoGain = c.createGain();

      ambientLfo.connect(ambientLfoGain);
      ambientLfoGain.connect(ambientFilter1.frequency);

      ambientSource.connect(ambientFilter1);
      ambientFilter1.connect(ambientFilter2);

      const fadeGain = c.createGain();
      fadeGain.gain.setValueAtTime(0.0001, c.currentTime);
      fadeGain.gain.exponentialRampToValueAtTime(1.0, c.currentTime + 1.2);

      ambientFilter2.connect(fadeGain);
      fadeGain.connect(ambientGain);

      configureAmbientNodes(preset);
      ambientLfo.start();
      ambientSource.start();
      ambientPlaying = true;
    } catch (e) {
      ambientPlaying = false;
    }
  }

  function stopAmbient() {
    if (!ambientPlaying || !ctx) return;
    try {
      if (ambientSource) {
        ambientSource.stop(ctx.currentTime + 0.8);
      }
      if (ambientLfo) {
        ambientLfo.stop(ctx.currentTime + 0.8);
      }
      setTimeout(() => {
        ambientPlaying = false;
        ambientSource = null;
        ambientFilter1 = null;
        ambientFilter2 = null;
        ambientLfo = null;
        ambientLfoGain = null;
      }, 900);
    } catch (e) {
      ambientPlaying = false;
    }
  }

  function tone(freq, duration, type = 'sine', volume = 0.25, delay = 0) {
    if (muted) return;
    try {
      const c = getCtx();
      if (!c) return;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(volume, c.currentTime + delay);
      gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + delay + duration);
      osc.connect(gain);
      gain.connect(sfxGain || c.destination);
      osc.start(c.currentTime + delay);
      osc.stop(c.currentTime + delay + duration);
    } catch (e) {}
  }

  // Organiczny dzwonek świątynny Suzu / Rin (poprawna odpowiedź)
  function playSuzu() {
    if (muted) return;
    try {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      // Ton podstawowy: 528 Hz (czysty, harmonijny rezonans)
      const osc1 = c.createOscillator();
      const g1 = c.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(528, now);
      g1.gain.setValueAtTime(0.32, now);
      g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
      osc1.connect(g1);
      g1.connect(sfxGain || c.destination);
      osc1.start(now);
      osc1.stop(now + 0.7);

      // Czysty alikwot: 1056 Hz (oktawa)
      const osc2 = c.createOscillator();
      const g2 = c.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1056, now);
      g2.gain.setValueAtTime(0.16, now);
      g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);
      osc2.connect(g2);
      g2.connect(sfxGain || c.destination);
      osc2.start(now);
      osc2.stop(now + 0.45);
    } catch (e) {}
  }

  // Organiczne uderzenie drewniane Hyōshigi (błędna odpowiedź, niekarzące)
  function playHyoshigi() {
    if (muted) return;
    try {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      // Klocki drewniane (pasmo 420 Hz i 320 Hz z szybkim tłumieniem)
      const osc1 = c.createOscillator();
      const f1 = c.createBiquadFilter();
      const g1 = c.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(420, now);
      f1.type = 'bandpass';
      f1.frequency.setValueAtTime(420, now);
      f1.Q.setValueAtTime(4, now);
      g1.gain.setValueAtTime(0.28, now);
      g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      osc1.connect(f1);
      f1.connect(g1);
      g1.connect(sfxGain || c.destination);
      osc1.start(now);
      osc1.stop(now + 0.15);

      const osc2 = c.createOscillator();
      const f2 = c.createBiquadFilter();
      const g2 = c.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(320, now + 0.03);
      f2.type = 'bandpass';
      f2.frequency.setValueAtTime(320, now + 0.03);
      f2.Q.setValueAtTime(5, now + 0.03);
      g2.gain.setValueAtTime(0.2, now + 0.03);
      g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
      osc2.connect(f2);
      f2.connect(g2);
      g2.connect(sfxGain || c.destination);
      osc2.start(now + 0.03);
      osc2.stop(now + 0.21);
    } catch (e) {}
  }

  // Drewniany klik dotykowy Ki
  function playKi() {
    if (muted) return;
    try {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;
      const osc = c.createOscillator();
      const filter = c.createBiquadFilter();
      const gain = c.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(750, now);
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(750, now);
      filter.Q.setValueAtTime(6, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(sfxGain || c.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    } catch (e) {}
  }

  // Pentatoniczny arpeggio w skali Hirajōshi (dla serii poprawnych odpowiedzi)
  function playStreakFlourish() {
    if (muted) return;
    try {
      const notes = [587.33, 622.25, 783.99, 880.0]; // D5, Eb5, G5, A5
      notes.forEach((freq, idx) => {
        tone(freq, 0.22, 'sine', 0.16, idx * 0.08);
      });
    } catch (e) {}
  }

  // Głęboki dzwon świątynny z akordem gongowym (celebracja, ukończenie sesji)
  function playTempleGong() {
    if (muted) return;
    try {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;
      // Dzwon C3 (130.8 Hz) + G3 (196 Hz) + E4 (329.6 Hz) + C5 (523.2 Hz)
      const freqs = [130.81, 196.0, 329.63, 523.25];
      freqs.forEach((freq, idx) => {
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        const startVol = 0.25 / (idx + 1);
        g.gain.setValueAtTime(startVol, now);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);
        osc.connect(g);
        g.connect(sfxGain || c.destination);
        osc.start(now);
        osc.stop(now + 1.8);
      });
    } catch (e) {}
  }

  function stopPlayback() {
    if (currentAudio) {
      try {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      } catch (e) {}
      currentAudio = null;
    }
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  function getTtsUrl(text) {
    return 'https://translate.google.com/translate_tts?ie=UTF-8&tl=ja&client=tw-ob&q=' + encodeURIComponent(text);
  }

  function speakSystem(text, { lang = 'ja-JP', rate = 0.85 } = {}) {
    if (typeof window === 'undefined' || !window.speechSynthesis) return false;
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = lang;
      utter.rate = rate;
      if (window.speechSynthesis.getVoices) {
        const voices = window.speechSynthesis.getVoices() || [];
        const jaVoice =
          voices.find(v => v.lang === 'ja-JP' || v.lang === 'ja_JP') ||
          voices.find(v => v.lang && v.lang.startsWith('ja'));
        if (jaVoice) {
          try {
            utter.voice = jaVoice;
          } catch (err) {}
        }
      }
      window.speechSynthesis.speak(utter);
      return true;
    } catch (e) {
      return false;
    }
  }

  function speak(text, { lang = 'ja-JP', rate = 0.85, forceSystem = false } = {}) {
    if (muted || !text) return false;
    stopPlayback();

    if (forceSystem) {
      return speakSystem(text, { lang, rate });
    }

    // Głos japoński Google Translate TTS (wysoka jakość, naturalna wymowa)
    if (typeof window !== 'undefined' && typeof window.Audio !== 'undefined') {
      try {
        const url = getTtsUrl(text);
        const audio = new window.Audio(url);
        currentAudio = audio;

        // Skalowanie głośności TTS zgodnie z ustawieniami
        const sfxVol = (settings.sfxVolume ?? 80) / 100;
        const masterVol = (settings.masterVolume ?? 80) / 100;
        audio.volume = Math.max(0, Math.min(1, sfxVol * masterVol));

        audio.onerror = () => {
          if (currentAudio === audio) {
            currentAudio = null;
            speakSystem(text, { lang, rate });
          }
        };

        audio.onended = () => {
          if (currentAudio === audio) {
            currentAudio = null;
          }
        };

        const playPromise = audio.play();
        if (playPromise !== undefined && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {
            // W razie braku sieci lub blokady autoplay przechodzimy na Web Speech API
            if (currentAudio === audio) {
              currentAudio = null;
              speakSystem(text, { lang, rate });
            }
          });
        }
        return true;
      } catch (err) {
        return speakSystem(text, { lang, rate });
      }
    }

    return speakSystem(text, { lang, rate });
  }

  return {
    correct() {
      playSuzu();
    },
    wrong() {
      playHyoshigi();
    },
    click() {
      playKi();
    },
    streak() {
      playStreakFlourish();
    },
    celebrate() {
      playTempleGong();
    },
    tone,
    speak,
    speakSystem,
    getTtsUrl,
    stop() {
      stopPlayback();
    },
    isSpeaking() {
      const audioSpeaking = !!(currentAudio && !currentAudio.paused && !currentAudio.ended);
      const synthSpeaking =
        typeof window !== 'undefined' && !!window.speechSynthesis && window.speechSynthesis.speaking;
      return audioSpeaking || !!synthSpeaking;
    },
    get muted() {
      return muted;
    },
    setMuted(value) {
      muted = !!value;
      if (muted) {
        stopPlayback();
        stopAmbient();
      }
      updateVolumes();
      return muted;
    },
    updateVolumes,
    ambient: {
      start(preset) {
        startAmbient(preset);
      },
      stop() {
        stopAmbient();
      },
      setPreset(preset) {
        configureAmbientNodes(preset);
      },
      isPlaying() {
        return ambientPlaying;
      },
      currentPreset() {
        return activeAmbientPreset;
      }
    }
  };
})();

/* =========================================================
   STAN
========================================================= */

const state = {
  screen: 'dashboard',
  script: settings.script,
  group: 'a',
  kana: 'あ',
  exam: null,
  vocab: null,
  // preferencja żyje w `settings.theme`; tu trzymamy tę samą wartość surową,
  // bo `updateThemeButton()` rozróżnia 'system' (ikona kontrastu), a
  // `resolveTheme()` i tak rozstrzyga 'system' przy każdym zastosowaniu motywu
  theme: settings.theme
};

// grupa i znak zawsze muszą należeć do aktywnego skryptu
// (inaczej np. przy starcie w Katakanie `state.kana` wskazywałoby 'あ')
{
  const firstGroup = getGroups()[0];
  state.group = firstGroup.key;
  state.kana = firstGroup.chars[0][0];
}

const app = document.getElementById('app');
const homeBtn = document.getElementById('homeBtn');

/* =========================================================
   POMOCNICZE
========================================================= */

/* Nazwa skryptu w widoku użytkownika — jedno miejsce, bez duplikacji. */
function scriptName(script = state.script) {
  if (script === 'katakana') return 'Katakana';
  if (script === 'both') return 'Hiragana i katakana';
  return 'Hiragana';
}

/* Czy w danym trybie trzeba pokazywać, z którego alfabetu jest znak. */
function showsScriptLabels() {
  return state.script === 'both';
}

/*
   IKONY
   ------------------------------------------------------------
   Jeden zestaw SVG zamiast emoji. Emoji renderują się różnie na
   każdym systemie i wyglądają nieprofesjonalnie obok typografii
   interfejsu; kreska dziedziczy `currentColor`, więc ikony same
   dostosowują się do motywu.
*/
const ICONS = {
  learn: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  exam: '<path d="M9 4h6a1 1 0 0 1 1 1v1h1.5A2.5 2.5 0 0 1 20 8.5v9A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-9A2.5 2.5 0 0 1 6.5 6H8V5a1 1 0 0 1 1-1Z"/><path d="M8 6V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1"/><path d="M8 11h8"/><path d="M8 15h5"/>',
  review: '<path d="M21 12a9 9 0 1 1-2.64-6.36"/><path d="M21 3v6h-6"/>',
  vocab: '<rect x="4" y="3" width="14" height="18" rx="2"/><path d="M8 7h6"/><path d="M8 11h6"/><path d="M8 15h4"/>',
  settings:
    '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1.08 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
  moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>',
  contrast: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/>',
  volume: '<path d="M11 5 6 9H3v6h3l5 4Z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  'volume-off': '<path d="M11 5 6 9H3v6h3l5 4Z"/><path d="m17 9 5 6"/><path d="m22 9-5 6"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off':
    '<path d="m3 3 18 18"/><path d="M10.6 5.2A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2"/><path d="M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7a10 10 0 0 0 4.4-1"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  quiz: '<circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  star: '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9Z"/>',
  flame:
    '<path d="M12 3s4 4 4 8a4 4 0 0 1-8 0c0-1 .3-2 1-3-2 1-4 3.5-4 6.5A7 7 0 0 0 12 21a7 7 0 0 0 7-6.5c0-4-3-8-7-11.5Z"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  x: '<path d="M6 6l12 12"/><path d="M18 6 6 18"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  'chevron-left': '<polyline points="15 18 9 12 15 6"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  list: '<line x1="3" y1="5" x2="18" y2="5"/><line x1="3" y1="9" x2="18" y2="9"/><line x1="3" y1="13" x2="18" y2="13"/>',
  folder:
    '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  play: '<path d="m7 4 13 8-13 8Z"/>',
  keyboard:
    '<rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6.01" y2="8"/><line x1="10" y1="8" x2="10.01" y2="8"/><line x1="14" y1="8" x2="14.01" y2="8"/><line x1="18" y1="8" x2="18.01" y2="8"/><line x1="6" y1="12" x2="6.01" y2="12"/><line x1="10" y1="12" x2="10.01" y2="12"/><line x1="14" y1="12" x2="14.01" y2="12"/><line x1="18" y1="12" x2="18.01" y2="12"/><line x1="7" y1="16" x2="17" y2="16"/>',
  grammar:
    '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10M6 14h6"/>',
  download:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  upload:
    '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>'
};

/* Jeden sposób wstawiania ikony: spójny viewBox, grubość kreski i brak
   wpływu na dostępność (etykietę niesie przycisk/title). */
function icon(name, className = 'icon') {
  const paths = ICONS[name];
  if (!paths) return '';
  return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;
}

/* =========================================================
   SHELL: NAWIGACJA I TOP BAR
======================================================== */

/*
   Jedno miejsce decydujące o tym, co jest modułem. Dodanie gramatyki czy
   kanji to wpis w `NAV_ITEMS` i etykieta w `MODULE_LABELS` — bez zmian
   w renderze ekranów i bez placeholderów „wkrótce" w interfejsie.
*/
const NAV_ITEMS = [
  {
    id: 'dashboard',
    label: 'Pulpit',
    screen: 'dashboard',
    icon: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>'
  },
  {
    id: 'kana',
    label: 'Kana',
    screen: 'menu',
    icon: '<path d="M12 6.5C10 4.8 7 4 4 4v14c3 0 6 .8 8 2.5 2-1.7 5-2.5 8-2.5V4c-3 0-6 .8-8 2.5Z"/><path d="M12 6.5v14"/>'
  },
  {
    id: 'vocab',
    label: 'Słownictwo',
    screen: 'vocab',
    icon: '<rect x="3" y="7" width="11" height="14" rx="2"/><path d="M8 4h11a2 2 0 0 1 2 2v11"/>'
  },
  {
    id: 'kanji',
    label: 'Kanji',
    screen: 'kanji',
    icon: '<path d="M4 7h16M12 7v14M7 12h10M5 18h14"/>'
  },
  {
    id: 'grammar',
    label: 'Gramatyka',
    screen: 'grammar',
    icon: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10M6 14h6"/>'
  }
];

const SCREEN_TITLES = {
  dashboard: 'Pulpit',
  menu: 'Kana',
  learn: 'Nauka',
  exam: 'Egzamin',
  review: 'Powtórki',
  vocab: 'Słownictwo',
  kanji: 'Kanji',
  grammar: 'Gramatyka',
  settings: 'Ustawienia',
  focus: 'Tryb Skupienia'
};

const MODULE_LABELS = {
  dashboard: 'KOTO',
  kana: 'KANA',
  vocab: 'SŁOWNICTWO',
  kanji: 'KANJI',
  grammar: 'GRAMATYKA',
  settings: 'APLIKACJA',
  focus: 'SKUPIENIE'
};

/* Ekran → moduł. Ekrany kany (hub, nauka, egzamin, powtórki) dzielą jeden
   moduł, więc nawigacja nie udaje, że są osobnymi miejscami. */
function screenModule(screen = state.screen) {
  if (screen === 'dashboard') return 'dashboard';
  if (screen === 'vocab') return 'vocab';
  if (screen === 'kanji') return 'kanji';
  if (screen === 'grammar') return 'grammar';
  if (screen === 'settings') return 'settings';
  if (screen === 'focus') return 'focus';
  return 'kana';
}

/*
   Focus mode to SESJA W TOKU, nie sam ekran. `screen === 'exam'` obejmuje
   też konfigurację, a `screen === 'vocab'` ekran wyboru kierunku — żaden
   z nich nie może ukrywać nawigacji. Sesję poznajemy po niezakończonym
   obiekcie stanu, co jest tym samym warunkiem, którego używa render.
*/
function isFocusMode() {
  if (state.screen === 'focus') return !!(focusSession && !focusSession.finished);
  if (state.screen === 'learn') return true;
  if (state.screen === 'exam') return !!(state.exam && !state.exam.finished);
  if (state.screen === 'vocab') return !!(state.vocab && !state.vocab.finished);
  if (state.screen === 'kanji') {
    return !!(
      state.kanji &&
      (state.kanji.mode === 'flashcard' || state.kanji.mode === 'quiz') &&
      !state.kanji.finished
    );
  }
  if (state.screen === 'grammar') {
    return !!(state.grammar && state.grammar.mode === 'practice' && !state.grammar.finished);
  }
  return false;
}

function screenTitle() {
  if (state.screen === 'vocab') {
    if (vocabTopicNav.view === 'topics') return 'Tematy';
    if (vocabTopicNav.view === 'detail') return categoryLabel(vocabTopicNav.topic);
    if (!state.vocab) return 'Słownictwo';
    return state.vocab.finished ? 'Wynik' : 'Fiszki';
  }
  if (state.screen === 'kanji') {
    if (!state.kanji || state.kanji.mode === 'hub') return 'Kanji';
    if (state.kanji.mode === 'catalog') return 'Katalog znaków';
    if (state.kanji.mode === 'detail') return 'Szczegóły znaku';
    if (state.kanji.mode === 'flashcard') return state.kanji.finished ? 'Wynik' : 'Fiszki Kanji';
    if (state.kanji.mode === 'quiz') return state.kanji.finished ? 'Wynik' : 'Quiz Kanji';
    return 'Kanji';
  }
  if (state.screen === 'grammar') {
    if (!state.grammar || state.grammar.mode === 'hub') return 'Gramatyka';
    if (state.grammar.mode === 'detail') {
      const p = grammarItem(state.grammar.particleId);
      if (!p) return 'Szczegóły zagadnienia';
      const cat = p.category || 'particle';
      const prefix = cat === 'particle' ? 'Partykuła' : cat === 'adjective' ? 'Przymiotnik' : 'Czasownik';
      return `${prefix} ${p.kana}`;
    }
    if (state.grammar.mode === 'practice') {
      return state.grammar.practice && state.grammar.practice.finished ? 'Wynik' : 'Trening luk';
    }
    return 'Gramatyka';
  }
  return SCREEN_TITLES[state.screen] || 'Kana';
}

/* Pasek i szyna powstają raz, poza #app, więc render() ich nie kasuje. */
function renderNav() {
  const nav = document.getElementById('appNav');
  if (!nav) return;

  nav.innerHTML = `
    <span class="app-nav-brand" aria-hidden="true">
      <span class="app-nav-logo"></span>
      <span class="app-nav-brand-name">Koto</span>
    </span>
    <div class="app-nav-items">
      ${NAV_ITEMS.map(
        item => `
        <button class="app-nav-item" type="button" data-nav="${item.id}">
          <svg class="app-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
            aria-hidden="true" focusable="false">${item.icon}</svg>
          <span class="app-nav-label">${item.label}</span>
        </button>`
      ).join('')}
    </div>
  `;

  nav.querySelectorAll('[data-nav]').forEach(button => {
    button.onclick = () => {
      // W trakcie sesji nawigacja jest ukryta; guard chroni też przed
      // programowym kliknięciem, które przerwałoby sesję.
      if (isFocusMode()) return;

      const target = NAV_ITEMS.find(item => item.id === button.dataset.nav);
      if (!target) return;

      // Wejście z menu w Słownictwo zawsze zaczyna od setupu, nie od
      // wyniku poprzedniego zestawu.
      if (target.screen === 'vocab') {
        state.vocab = null;
        vocabTopicNav.view = 'setup';
        vocabTopicNav.topic = null;
        vocabTopicNav.scope = vocabSetup.scope;
      }

      if (target.screen === 'kanji') {
        kanjiSession.mode = 'hub';
        kanjiSession.lesson = 'all';
        kanjiSession.charId = null;
        state.kanji = kanjiSession;
      }

      if (target.screen === 'grammar') {
        grammarSession.mode = 'hub';
        grammarSession.particleId = null;
        grammarSession.practice = null;
        state.grammar = grammarSession;
      }

      if (state.screen === target.screen) {
        if (target.screen === 'vocab') renderVocab();
        if (target.screen === 'grammar') renderGrammar();
        return;
      }

      Audio.click();
      setScreen(target.screen);
    };
  });
}

function confirmVocabExit() {
  return !isFocusMode() || window.confirm('Czy zakończyć bieżącą sesję fiszek?');
}

function escapeHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* Jedno miejsce aktualizacji chromu: tytuł, etykieta modułu, powrót,
   aktywna pozycja i widoczność nawigacji. */
function refreshChrome() {
  const eyebrow = document.getElementById('scriptEyebrow');
  const title = document.getElementById('appTitle');
  const focus = isFocusMode();

  if (eyebrow) eyebrow.textContent = MODULE_LABELS[screenModule()];
  if (title) title.textContent = screenTitle();

  document.body.classList.toggle('focus-mode', focus);

  if (homeBtn) {
    homeBtn.classList.toggle('is-hidden', state.screen === 'dashboard');
    homeBtn.setAttribute('aria-label', 'Wróć');
  }

  const settingsToggle = document.getElementById('settingsToggle');
  if (settingsToggle) {
    settingsToggle.hidden = focus;
    settingsToggle.tabIndex = focus ? -1 : 0;
  }

  const nav = document.getElementById('appNav');
  if (!nav) return;

  if (focus) nav.setAttribute('aria-hidden', 'true');
  else nav.removeAttribute('aria-hidden');

  nav.querySelectorAll('[data-nav]').forEach(button => {
    const active = button.dataset.nav === screenModule();

    button.classList.toggle('active', active);
    button.tabIndex = focus ? -1 : 0;

    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
}

function item(kana) {
  return getAll().find(x => x.kana === kana);
}

function getGroup(groupKey) {
  return getGroups().find(group => group.key === groupKey);
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
    const groupIndex = allGroups.findIndex(g => g.key === state.group);
    const prevGroupIndex = (groupIndex - 1 + allGroups.length) % allGroups.length;
    state.group = allGroups[prevGroupIndex].key;
    const prevGroup = getGroup(state.group);
    state.kana = prevGroup.chars[prevGroup.chars.length - 1][0];
  } else if (newIndex >= kanaList.length) {
    const groupIndex = allGroups.findIndex(g => g.key === state.group);
    const nextGroupIndex = (groupIndex + 1) % allGroups.length;
    state.group = allGroups[nextGroupIndex].key;
    state.kana = getGroup(state.group).chars[0][0];
  } else {
    state.kana = kanaList[newIndex];
  }

  renderLearn();
}

/**
 * Wykres kołowy (donut) z postępami na ekranie menu.
 */
/*
   Pasek opanowania (zastąpił donut).
   Ten sam `masteryLevel()` co lista znaków, więc liczby muszą się zgadzać
   z kolorami w panelu nauki. Pasek pokazuje rozkład, a jedno zdanie —
   tylko liczbę opanowanych, bo reszta jest w pasku i w dymkach segmentów.
   Nowe znaki to tło paska, a nie osobny segment: puste miejsce czyta się
   lepiej niż szary prostokąt.
*/
function masteryStripHTML() {
  const counts = { mastered: 0, good: 0, learning: 0, hard: 0, new: 0 };
  const all = getAll();
  all.forEach(character => {
    counts[masteryLevel(character.kana)]++;
  });

  const total = all.length;

  const segments = [
    { key: 'mastered', label: 'opanowane', count: counts.mastered },
    { key: 'good', label: 'dobre', count: counts.good },
    { key: 'learning', label: 'w trakcie', count: counts.learning },
    { key: 'hard', label: 'trudne', count: counts.hard }
  ].filter(segment => segment.count > 0);

  const described = segments.length
    ? segments.map(segment => segment.label + ': ' + segment.count).join(', ') + ', nowe: ' + counts.new
    : 'brak odpowiedzi, nowe: ' + total;

  /*
     Puste miejsce musi być osobnym elementem listy, nie tłem paska:
     `flex` normalizuje szerokości do sumy dzieci, więc bez tego jeden
     ćwiczony znak rozciągał swój segment na całą szerokość i pasek
     wyglądał, jakby wszystkie znaki były „w trakcie".
  */
  const spacer =
    counts.new > 0 ? `<span class="mastery-spacer" style="flex:${counts.new}" aria-hidden="true"></span>` : '';

  return `
    <div class="mastery-strip">
      <div class="mastery-strip-bar" role="img" aria-label="Opanowanie znaków — ${described}">
        ${segments
          .map(
            segment =>
              `<span class="mastery-seg ${segment.key}" style="flex:${segment.count}" title="${segment.label}: ${segment.count}"></span>`
          )
          .join('')}${spacer}
      </div>
      <p class="mastery-strip-text">
        ${
          segments.length
            ? `Opanowane <strong>${counts.mastered}</strong> z <strong>${total}</strong>`
            : `Zacznij naukę albo egzamin — <strong>${total}</strong> znaków czeka`
        }
      </p>
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
  const ink = () => getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#c93b1e';

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
  state.group = firstGroup.key;
  state.kana = firstGroup.chars[0][0];

  saveSettings(settings);
}

function updateThemeButton() {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  if (state.theme === 'dark') {
    button.innerHTML = icon('sun');
    button.title = 'Przełącz na jasny motyw';
  } else if (state.theme === 'light') {
    button.innerHTML = icon('moon');
    button.title = 'Przełącz na ciemny motyw';
  } else {
    button.innerHTML = icon('contrast');
    button.title = 'Motyw systemowy';
  }
}

function updateMuteButton() {
  const button = document.getElementById('muteToggle');
  if (!button) return;

  button.innerHTML = icon(Audio.muted ? 'volume-off' : 'volume');
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

function setupSettingsToggle() {
  const button = document.getElementById('settingsToggle');
  if (!button) return;

  button.innerHTML = icon('settings');
  button.title = 'Ustawienia';
  button.onclick = () => {
    // W trakcie sesji nawigacja jest ukryta, więc gear nie może przerwać
    // ćwiczenia. `refreshChrome()` chowa go również wizualnie.
    if (isFocusMode()) return;

    Audio.click();
    setScreen('settings');
  };
}

/* =========================================================
   EKRANY I NAWIGACJA
========================================================= */

const screenHistory = [];

function setScreen(screen, { isBack = false } = {}) {
  if (state.screen !== screen) {
    if (!isBack) {
      if (['dashboard', 'menu', 'vocab', 'kanji', 'grammar'].includes(screen)) {
        if (screen === 'dashboard') {
          screenHistory.length = 0;
        } else {
          screenHistory.length = 0;
          screenHistory.push('dashboard');
        }
      } else {
        screenHistory.push(state.screen);
      }
    }
    state.screen = screen;
  }
  render();

  // animacja wejścia
  app.style.animation = 'none';
  void app.offsetHeight;
  app.style.animation = 'fadeSlideIn 0.3s ease';
}

homeBtn.onclick = () => {
  Audio.click();

  if (state.screen === 'focus') {
    if (focusSession && !focusSession.finished) {
      if (!confirm('Czy na pewno chcesz przerwać sesję skupienia?')) return;
    }
    exitFocusSession();
    return;
  }

  if (state.screen === 'kanji') {
    if (!confirmKanjiExit()) return;
    const mode = state.kanji ? state.kanji.mode : 'hub';
    if (mode === 'detail') {
      kanjiSession.mode = 'catalog';
      state.kanji = kanjiSession;
      render();
      return;
    }
    if (mode === 'catalog' || mode === 'flashcard' || mode === 'quiz') {
      kanjiSession.mode = 'hub';
      state.kanji = kanjiSession;
      render();
      return;
    }
    const target = screenHistory.pop() || 'dashboard';
    setScreen(target, { isBack: true });
    return;
  }

  if (state.screen === 'vocab') {
    const wasActive = !!state.vocab;
    if (!confirmVocabExit()) return;
    stopExam();
    state.vocab = null;
    vocabTopicNav.view = 'setup';
    vocabTopicNav.topic = null;
    if (wasActive) {
      setScreen('menu');
    } else {
      const target = screenHistory.pop() || 'dashboard';
      setScreen(target, { isBack: true });
    }
    return;
  }

  if (state.screen === 'grammar') {
    if (state.grammar && state.grammar.mode === 'practice' && !state.grammar.finished) {
      if (!confirm('Czy na pewno chcesz przerwać ćwiczenia gramatyki?')) return;
    }
    if (state.grammar && state.grammar.mode === 'detail') {
      grammarSession.mode = 'hub';
      state.grammar = grammarSession;
      render();
      return;
    }
    if (state.grammar && state.grammar.mode === 'practice') {
      grammarSession.mode = 'hub';
      state.grammar = grammarSession;
      render();
      return;
    }
    state.grammar = null;
    const target = screenHistory.pop() || 'dashboard';
    setScreen(target, { isBack: true });
    return;
  }

  if (state.screen === 'menu') {
    const target = screenHistory.pop() || 'dashboard';
    setScreen(target, { isBack: true });
    return;
  }

  if (state.screen === 'learn' || state.screen === 'exam' || state.screen === 'review') {
    stopExam();
    const target = screenHistory.pop() || 'menu';
    setScreen(target, { isBack: true });
    return;
  }

  if (state.screen === 'settings') {
    const target = screenHistory.pop() || 'dashboard';
    setScreen(target, { isBack: true });
    return;
  }

  stopExam();
  const target = screenHistory.pop() || 'dashboard';
  setScreen(target, { isBack: true });
};

function render() {
  createThemeToggle();
  setupMuteToggle();
  setupSettingsToggle();
  applyTheme();
  refreshChrome();

  if (state.screen === 'dashboard') renderDashboard();
  if (state.screen === 'menu') renderMenu();
  if (state.screen === 'learn') renderLearn();
  if (state.screen === 'exam') renderExam();
  if (state.screen === 'review') renderReview();
  if (state.screen === 'vocab') renderVocab();
  if (state.screen === 'kanji') renderKanji();
  if (state.screen === 'grammar') renderGrammar();
  if (state.screen === 'focus') renderFocus();
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
   PULPIT GŁÓWNY (DASHBOARD)
   ========================================================= */

function getKanaSummaryStats() {
  const counts = { mastered: 0, good: 0, learning: 0, hard: 0, new: 0 };
  const all = getAll();
  all.forEach(c => {
    counts[masteryLevel(c.kana)]++;
  });
  const seen = counts.mastered + counts.good + counts.learning + counts.hard;
  const percent = all.length ? Math.round((counts.mastered / all.length) * 100) : 0;
  return {
    total: all.length,
    mastered: counts.mastered,
    learning: counts.learning + counts.good + counts.hard,
    seen,
    due: dueList().length,
    percent
  };
}

function getVocabSummaryStats() {
  const cards = vocab && vocab.cards ? vocab.cards : {};
  let seenCount = 0;
  let masteredCount = 0;
  for (const entry of Object.values(cards)) {
    if (entry && entry.seen > 0) {
      seenCount++;
      if (entry.correct >= 3 && entry.correct / entry.seen >= 0.8) {
        masteredCount++;
      }
    }
  }
  const total = typeof VOCAB_LEARN_ITEMS !== 'undefined' ? VOCAB_LEARN_ITEMS.length : 150;
  const percent = total ? Math.round((masteredCount / total) * 100) : 0;
  return {
    total,
    seen: seenCount,
    mastered: masteredCount,
    percent
  };
}

function renderDashboard() {
  const kana = getKanaSummaryStats();
  const vocabStats = getVocabSummaryStats();
  const kanji = getKanjiSummaryStats('all');
  const grammarStats = getGrammarSummaryStats();

  const streaks = dailyStreaks(Date.now());
  const daily = loadDailyStats();
  const todayKey = localDayKey(Date.now());
  const todayRecord = daily.days && daily.days[todayKey] ? daily.days[todayKey] : null;
  const todayAnswers = todayRecord && Number.isFinite(todayRecord.answers) ? todayRecord.answers : 0;
  const dailyGoal = settings.dailyGoal || 20;
  const goalPercent = Math.min(100, Math.round((todayAnswers / dailyGoal) * 100));
  const isGoalCompleted = todayAnswers >= dailyGoal;

  const totalDue = kana.due + kanji.due;
  checkAchievements();
  const unlockedCount = Object.keys(achievements.unlocked).length;

  const hour = new Date().getHours();
  let greeting = 'Dzień dobry';
  if (hour < 5) greeting = 'Spokojnej nocy';
  else if (hour >= 18) greeting = 'Dobry wieczór';

  app.innerHTML = `
    <div class="dashboard-screen animate-fade">
      <div class="dashboard-hero">
        <div class="dashboard-hero-watermark" aria-hidden="true">琴</div>
        <div class="dashboard-hero-content">
          <span class="dashboard-eyebrow">SYSTEM NAUKI KOTO · JAPOŃSKI OD PODSTAW</span>
          <h1 class="dashboard-title">${greeting}!</h1>
          <p class="dashboard-desc">
            Śledź swoje postępy w czterech filarach nauki: alfabecie Kana, słownictwie, znakach Kanji oraz gramatyce.
          </p>

          <div class="dashboard-activity-bar">
            <div class="dashboard-activity-badge is-streak">
              <span class="dashboard-activity-icon">${icon('flame')}</span>
              <div class="dashboard-activity-info">
                <span class="dashboard-activity-value">${streaks.current > 0 ? `${streaks.current} dni serii` : 'Zacznij serię!'}</span>
                <span class="dashboard-activity-sub">${streaks.best > 0 ? `Rekord: ${streaks.best} dni` : 'Ucz się codziennie'}</span>
              </div>
            </div>

            <div class="dashboard-activity-badge is-goal ${isGoalCompleted ? 'is-completed' : ''}">
              <span class="dashboard-activity-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                  <circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>
                </svg>
              </span>
              <div class="dashboard-activity-info">
                <span class="dashboard-activity-value">${todayAnswers} / ${dailyGoal} ćwiczeń</span>
                <span class="dashboard-activity-sub">${isGoalCompleted ? 'Cel na dziś osiągnięty! 🎉' : `Cel dzienny (${goalPercent}%)`}</span>
              </div>
              <div class="dashboard-mini-progress">
                <div class="dashboard-mini-progress-fill" style="width: ${goalPercent}%"></div>
              </div>
            </div>

            <div class="dashboard-activity-badge is-achievements" role="button" tabindex="0" id="btnDashboardAchievements" title="Zobacz odznaki i osiągnięcia">
              <span class="dashboard-activity-icon">🏆</span>
              <div class="dashboard-activity-info">
                <span class="dashboard-activity-value">${unlockedCount} / 12</span>
                <span class="dashboard-activity-sub">Osiągnięcia</span>
              </div>
            </div>

            ${
              totalDue > 0
                ? `
              <div class="dashboard-activity-badge is-due">
                <span class="dashboard-activity-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                </span>
                <div class="dashboard-activity-info">
                  <span class="dashboard-activity-value">${totalDue} powtórek</span>
                  <span class="dashboard-activity-sub">Czeka w harmonogramie</span>
                </div>
              </div>
            `
                : ''
            }
          </div>
        </div>
      </div>

      <div class="dashboard-smart-card ${totalDue > 0 ? 'has-due' : ''}">
        <div class="dashboard-smart-info">
          <span class="dashboard-smart-kicker">${totalDue > 0 ? 'ZALECANA AKCJA NA DZIŚ' : 'TWÓJ KOLEJNY KROK'}</span>
          <h2 class="dashboard-smart-title">
            ${totalDue > 0 ? `Powtórki czekają na Ciebie (${totalDue})` : todayAnswers > 0 ? 'Świetna robota, kontynuuj naukę!' : 'Zacznij dzisiejszą sesję nauki'}
          </h2>
          <p class="dashboard-smart-desc">
            ${
              totalDue > 0
                ? 'Algorytm SRS wyznaczył elementy wymagające powtórzenia. Utrwal wiedzę przed nauką nowego materiału.'
                : 'Wybierz dowolny moduł poniżej lub przejdź do nauki znaków Kana, aby utrwalić kolejną partię wiedzy.'
            }
          </p>
        </div>
        <button class="dashboard-smart-btn" id="btnDashboardSmartAction" type="button">
          ${totalDue > 0 ? (kana.due > 0 ? 'Powtórz Kanę →' : 'Powtórz Kanji →') : 'Ucz się Kany →'}
        </button>
      </div>

      <!-- TRYB SKUPIENIA ZEN CARD (T25) -->
      <div class="dashboard-focus-card">
        <div class="dashboard-focus-watermark" aria-hidden="true">禅</div>
        <div class="dashboard-focus-info">
          <div class="dashboard-focus-kicker-wrap">
            <span class="dashboard-focus-badge">TRYB SKUPIENIA · ZEN POMODORO</span>
            <span class="dashboard-focus-ambient-badge">
              <span class="focus-ambient-dot ${settings.ambientSound === 'off' ? 'is-off' : ''}"></span>
              ${settings.ambientSound !== 'off' ? `Tło: ${focusAmbientLabel(settings.ambientSound)}` : 'Dźwięki natury'}
            </span>
          </div>
          <h2 class="dashboard-focus-title">Głęboka sesja skupienia bez rozpraszaczy</h2>
          <p class="dashboard-focus-desc">
            Uruchom sesję z organicznym dźwiękiem tła (ambient), czasem odliczania (15, 20 lub 25 min) i miksem ćwiczeń dostosowanym do Twojego poziomu.
          </p>
        </div>
        <button class="dashboard-focus-btn" id="btnDashboardFocusOpen" type="button">
          Rozpocznij skupienie ⏳
        </button>
      </div>

      <div class="dashboard-modules-header">
        <h2 class="dashboard-modules-title">Moduły nauki</h2>
        <span class="dashboard-modules-hint">Przeglądaj postępy i uruchamiaj tryby</span>
      </div>

      <div class="dashboard-modules-grid">
        <!-- MODUŁ 1: KANA -->
        <div class="dashboard-module-card" data-module-card="kana">
          <div class="dashboard-module-watermark" aria-hidden="true">あ</div>
          <div class="dashboard-module-head">
            <div class="dashboard-module-icon kana-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                <path d="M12 6.5C10 4.8 7 4 4 4v14c3 0 6 .8 8 2.5 2-1.7 5-2.5 8-2.5V4c-3 0-6 .8-8 2.5Z"/><path d="M12 6.5v14"/>
              </svg>
            </div>
            <div class="dashboard-module-headings">
              <span class="dashboard-module-tag">ALFABET</span>
              <h3 class="dashboard-module-name">Kana (Hiragana & Katakana)</h3>
            </div>
          </div>

          <p class="dashboard-module-desc">
            251 znaków sylabariuszy z interaktywną kolejnością kresek, audio wymowy i egzaminem.
          </p>

          <div class="dashboard-module-metrics">
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${kana.mastered}</span>
              <span class="dashboard-metric-lbl">Opanowane</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${kana.learning}</span>
              <span class="dashboard-metric-lbl">W nauce</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${kana.due}</span>
              <span class="dashboard-metric-lbl">Do powtórki</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${kana.total}</span>
              <span class="dashboard-metric-lbl">Wszystkich</span>
            </div>
          </div>

          <div class="dashboard-progress-wrap">
            <div class="dashboard-progress-bar" style="width: ${kana.percent}%"></div>
          </div>
          <span class="dashboard-progress-text">${kana.mastered} z ${kana.total} opanowanych (${kana.percent}%)</span>

          <div class="dashboard-module-actions">
            <button class="dashboard-action-btn primary" id="btnDashKanaOpen" type="button">
              Otwórz moduł Kana →
            </button>
            <div class="dashboard-action-chips">
              <button class="dashboard-chip-btn" id="btnDashKanaLearn" type="button">Nauka</button>
              <button class="dashboard-chip-btn" id="btnDashKanaExam" type="button">Egzamin</button>
              <button class="dashboard-chip-btn" id="btnDashKanaReview" type="button">Powtórki</button>
            </div>
          </div>
        </div>

        <!-- MODUŁ 2: SŁOWNICTWO -->
        <div class="dashboard-module-card" data-module-card="vocab">
          <div class="dashboard-module-watermark" aria-hidden="true">語</div>
          <div class="dashboard-module-head">
            <div class="dashboard-module-icon vocab-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                <rect x="3" y="7" width="11" height="14" rx="2"/><path d="M8 4h11a2 2 0 0 1 2 2v11"/>
              </svg>
            </div>
            <div class="dashboard-module-headings">
              <span class="dashboard-module-tag">SŁOWNICTWO</span>
              <h3 class="dashboard-module-name">Słownictwo (Fiszki i Tematy)</h3>
            </div>
          </div>

          <p class="dashboard-module-desc">
            Kategorie tematyczne: liczebniki, kolory, czasowniki, zwroty codzienne i szkoła.
          </p>

          <div class="dashboard-module-metrics">
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${vocabStats.mastered}</span>
              <span class="dashboard-metric-lbl">Opanowane</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${vocabStats.seen}</span>
              <span class="dashboard-metric-lbl">Poznane</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${categoriesIn(VOCAB_LEARN_ITEMS).filter(c => c.id !== CATEGORY_NONE).length}</span>
              <span class="dashboard-metric-lbl">Kategorii</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${vocabStats.total}</span>
              <span class="dashboard-metric-lbl">W bazie</span>
            </div>
          </div>

          <div class="dashboard-progress-wrap">
            <div class="dashboard-progress-bar" style="width: ${vocabStats.percent}%"></div>
          </div>
          <span class="dashboard-progress-text">${vocabStats.mastered} z ${vocabStats.total} opanowanych (${vocabStats.percent}%)</span>

          <div class="dashboard-module-actions">
            <button class="dashboard-action-btn primary" id="btnDashVocabOpen" type="button">
              Otwórz Słownictwo →
            </button>
            <div class="dashboard-action-chips">
              <button class="dashboard-chip-btn" id="btnDashVocabFlashcards" type="button">Fiszki</button>
              <button class="dashboard-chip-btn" id="btnDashVocabTopics" type="button">Katalog tematów</button>
            </div>
          </div>
        </div>

        <!-- MODUŁ 3: KANJI -->
        <div class="dashboard-module-card" data-module-card="kanji">
          <div class="dashboard-module-watermark" aria-hidden="true">漢</div>
          <div class="dashboard-module-head">
            <div class="dashboard-module-icon kanji-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                <path d="M4 7h16M12 7v14M7 12h10M5 18h14"/>
              </svg>
            </div>
            <div class="dashboard-module-headings">
              <span class="dashboard-module-tag">KANJI</span>
              <h3 class="dashboard-module-name">Kanji (Shokyū Nihongo & N5)</h3>
            </div>
          </div>

          <p class="dashboard-module-desc">
            ${KANJI_ITEMS.length} znaków z animacjami kresek, rysowaniem na canvasie, fiszkami SRS i quizem.
          </p>

          <div class="dashboard-module-metrics">
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${kanji.mastered}</span>
              <span class="dashboard-metric-lbl">Opanowane</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${kanji.seen}</span>
              <span class="dashboard-metric-lbl">Poznane</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${kanji.due}</span>
              <span class="dashboard-metric-lbl">Do powtórki</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${kanji.total}</span>
              <span class="dashboard-metric-lbl">Znaków</span>
            </div>
          </div>

          <div class="dashboard-progress-wrap">
            <div class="dashboard-progress-bar" style="width: ${kanji.total ? Math.round((kanji.seen / kanji.total) * 100) : 0}%"></div>
          </div>
          <span class="dashboard-progress-text">${kanji.seen} z ${kanji.total} poznanych (${kanji.total ? Math.round((kanji.seen / kanji.total) * 100) : 0}%)</span>

          <div class="dashboard-module-actions">
            <button class="dashboard-action-btn primary" id="btnDashKanjiOpen" type="button">
              Otwórz moduł Kanji →
            </button>
            <div class="dashboard-action-chips">
              <button class="dashboard-chip-btn" id="btnDashKanjiCatalog" type="button">Katalog</button>
              <button class="dashboard-chip-btn" id="btnDashKanjiFlashcards" type="button">Fiszki SRS</button>
              <button class="dashboard-chip-btn" id="btnDashKanjiQuiz" type="button">Quiz</button>
            </div>
          </div>
        </div>

        <!-- MODUŁ 4: GRAMATYKA -->
        <div class="dashboard-module-card" data-module-card="grammar">
          <div class="dashboard-module-watermark" aria-hidden="true">文</div>
          <div class="dashboard-module-head">
            <div class="dashboard-module-icon grammar-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10M6 14h6"/>
              </svg>
            </div>
            <div class="dashboard-module-headings">
              <span class="dashboard-module-tag">GRAMATYKA</span>
              <h3 class="dashboard-module-name">Gramatyka (Partykuły N5)</h3>
            </div>
          </div>

          <p class="dashboard-module-desc">
            10 kluczowych partykuł języka japońskiego, schematy zdań i interaktywny trening uzupełniania luk.
          </p>

          <div class="dashboard-module-metrics">
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${grammarStats.mastered}</span>
              <span class="dashboard-metric-lbl">Opanowane</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${grammarStats.learning}</span>
              <span class="dashboard-metric-lbl">W nauce</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${grammarStats.total}</span>
              <span class="dashboard-metric-lbl">Partykuł</span>
            </div>
            <div class="dashboard-metric-item">
              <span class="dashboard-metric-val">${grammarStats.totalAnswers}</span>
              <span class="dashboard-metric-lbl">Ćwiczeń</span>
            </div>
          </div>

          <div class="dashboard-progress-wrap">
            <div class="dashboard-progress-bar" style="width: ${grammarStats.percent}%"></div>
          </div>
          <span class="dashboard-progress-text">${grammarStats.mastered} z ${grammarStats.total} opanowanych (${grammarStats.percent}%)</span>

          <div class="dashboard-module-actions">
            <button class="dashboard-action-btn primary" id="btnDashGrammarOpen" type="button">
              Otwórz Gramatykę →
            </button>
            <div class="dashboard-action-chips">
              <button class="dashboard-chip-btn" id="btnDashGrammarGuide" type="button">Przewodnik</button>
              <button class="dashboard-chip-btn" id="btnDashGrammarPractice" type="button">Trening luk</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Handlery przycisków
  const btnSmart = document.getElementById('btnDashboardSmartAction');
  if (btnSmart) {
    btnSmart.onclick = () => {
      Audio.click();
      if (totalDue > 0) {
        if (kana.due > 0) setScreen('review');
        else {
          startKanjiSession({ mode: 'flashcard' });
          setScreen('kanji');
        }
      } else {
        setScreen('learn');
      }
    };
  }

  const btnAch = document.getElementById('btnDashboardAchievements');
  if (btnAch) {
    btnAch.onclick = () => {
      Audio.click();
      openAchievementsModal();
    };
    btnAch.onkeydown = e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        Audio.click();
        openAchievementsModal();
      }
    };
  }

  // Tryb Skupienia Zen
  const btnFocusOpen = document.getElementById('btnDashboardFocusOpen');
  if (btnFocusOpen) {
    btnFocusOpen.onclick = () => {
      Audio.click();
      openFocusSetupModal();
    };
  }

  // Kana actions
  document.getElementById('btnDashKanaOpen').onclick = () => {
    Audio.click();
    setScreen('menu');
  };
  document.getElementById('btnDashKanaLearn').onclick = () => {
    Audio.click();
    setScreen('learn');
  };
  document.getElementById('btnDashKanaExam').onclick = () => {
    Audio.click();
    setScreen('exam');
  };
  document.getElementById('btnDashKanaReview').onclick = () => {
    Audio.click();
    setScreen('review');
  };

  // Vocab actions
  document.getElementById('btnDashVocabOpen').onclick = () => {
    Audio.click();
    state.vocab = null;
    vocabTopicNav.view = 'setup';
    setScreen('vocab');
  };
  document.getElementById('btnDashVocabFlashcards').onclick = () => {
    Audio.click();
    state.vocab = null;
    vocabTopicNav.view = 'setup';
    setScreen('vocab');
  };
  document.getElementById('btnDashVocabTopics').onclick = () => {
    Audio.click();
    state.vocab = null;
    vocabTopicNav.view = 'topics';
    setScreen('vocab');
  };

  // Kanji actions
  document.getElementById('btnDashKanjiOpen').onclick = () => {
    Audio.click();
    kanjiSession.mode = 'hub';
    state.kanji = kanjiSession;
    setScreen('kanji');
  };
  document.getElementById('btnDashKanjiCatalog').onclick = () => {
    Audio.click();
    kanjiSession.mode = 'catalog';
    state.kanji = kanjiSession;
    setScreen('kanji');
  };
  document.getElementById('btnDashKanjiFlashcards').onclick = () => {
    Audio.click();
    startKanjiSession({ mode: 'flashcard' });
    setScreen('kanji');
  };
  document.getElementById('btnDashKanjiQuiz').onclick = () => {
    Audio.click();
    startKanjiSession({ mode: 'quiz' });
    setScreen('kanji');
  };

  // Grammar actions
  document.getElementById('btnDashGrammarOpen').onclick = () => {
    Audio.click();
    grammarSession.mode = 'hub';
    state.grammar = grammarSession;
    setScreen('grammar');
  };
  document.getElementById('btnDashGrammarGuide').onclick = () => {
    Audio.click();
    grammarSession.mode = 'hub';
    state.grammar = grammarSession;
    setScreen('grammar');
  };
  document.getElementById('btnDashGrammarPractice').onclick = () => {
    Audio.click();
    startGrammarPractice();
    setScreen('grammar');
  };
}

/* =========================================================
   MENU
========================================================= */

function renderMenu() {
  const dueCount = dueList(Date.now()).length;
  const streaks = dailyStreaks(Date.now());
  const streakLabel = streaks.current > 0 ? `${streaks.current} dni serii` : 'Zacznij serię';

  app.innerHTML = `
    <div class="script-switcher" role="group" aria-label="Skrypt">
      <button class="script-btn ${state.script === 'hiragana' ? 'active' : ''}" data-script="hiragana" aria-pressed="${state.script === 'hiragana'}">ひ Hiragana</button>
      <button class="script-btn ${state.script === 'both' ? 'active' : ''}" data-script="both" aria-pressed="${state.script === 'both'}">ひカ Oba</button>
      <button class="script-btn ${state.script === 'katakana' ? 'active' : ''}" data-script="katakana" aria-pressed="${state.script === 'katakana'}">カ Katakana</button>
    </div>

    <section class="hub-summary" aria-labelledby="hubSummaryLabel">
      <div class="hub-summary-head">
        <div class="hub-head-info">
          <span class="hub-kicker" id="hubSummaryLabel">Postęp</span>
          <span class="hub-script">${scriptName()}</span>
        </div>
        <div class="hub-streak-badge" aria-label="Seria aktywności">
          <span class="hub-streak-icon" aria-hidden="true">${icon('flame')}</span>
          <span>${streakLabel}</span>
        </div>
      </div>
      ${masteryStripHTML()}
    </section>

    <section class="menu">
      <button class="menu-card tile tile-primary" id="learnCard">
        <span class="tile-watermark" aria-hidden="true">${state.kana}</span>
        <span class="menu-icon">${icon('learn')}</span>
        <span class="tile-title">Nauka</span>
        <span class="tile-cta">Kontynuuj ${state.kana}</span>
      </button>

      <button class="menu-card tile" id="examCard">
        <span class="tile-watermark" aria-hidden="true">試</span>
        <span class="menu-icon">${icon('exam')}</span>
        <span class="tile-title">Egzamin</span>
        <span class="tile-sub">Szybki test wiedzy</span>
      </button>

      <button class="menu-card tile" id="reviewCard">
        <span class="tile-watermark" aria-hidden="true">復</span>
        <span class="menu-icon">${icon('review')}</span>
        <span class="tile-title">Powtórki</span>
        <span class="tile-sub">${dueCount > 0 ? dueCount + ' czeka' : 'Wszystko powtórzone'}</span>
        ${dueCount > 0 ? `<span class="tile-badge" aria-label="${dueCount} znaków do powtórki">${dueCount}</span>` : ''}
      </button>
    </section>
  `;

  document.getElementById('learnCard').onclick = () => {
    Audio.click();
    setScreen('learn');
  };
  document.getElementById('examCard').onclick = () => {
    Audio.click();
    setScreen('exam');
  };
  document.getElementById('reviewCard').onclick = () => {
    Audio.click();
    setScreen('review');
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
          <div class="review-empty-icon" aria-hidden="true">${icon('check')}</div>
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
      if (character) state.group = character.key;
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

   Domyślna kolejność jest deterministyczna i liczona z liczników: najpierw
   karty nietknięte, potem te z najniższą trafnością, a przy remisie
   kolejność tabeli. Tryb losowy celowo ją zastępuje — to wybór użytkownika,
   a nie inny algorytm nauki.
========================================================= */

const VOCAB_OPTIONS = 4;

/*
   Wybór zestawu (kierunek, zakres) jest sesyjny, nie zapisany: to decyzja
   na jedną sesję, jak wybór zakresu egzaminu, a nie preferencja aplikacji.
   Dzięki temu nie ruszamy formatu `hiragana-vocab`.
*/
const VOCAB_MODES = ['learn', 'test', 'type'];
const VOCAB_ORDERS = ['smart', 'shuffle'];
const VOCAB_LIMITS = [0, 10, 20];
const VOCAB_DIRECTIONS = ['kana-meaning', 'meaning-kana'];
const VOCAB_SCOPES = ['cards', 'verbs', 'words', 'adjectives', 'phrases', 'all'];

const VOCAB_MODE_LABELS = {
  learn: 'Nauka',
  test: 'Test',
  type: 'Wpisywanie'
};

const VOCAB_ORDER_LABELS = {
  smart: 'Inteligentna',
  shuffle: 'Losowa'
};

const VOCAB_DIRECTION_LABELS = {
  'kana-meaning': 'Japoński → znaczenie',
  'meaning-kana': 'Znaczenie → japoński'
};

const VOCAB_SCOPE_LABELS = {
  cards: 'Polecenia',
  verbs: 'Czasowniki',
  words: 'Rzeczowniki',
  adjectives: 'Przymiotniki',
  phrases: 'Zwroty',
  all: 'Wszystko'
};

const VOCAB_LESSONS = ['all', '0', '1ka', '2ka'];

const VOCAB_LESSON_LABELS = {
  all: 'Wszystkie',
  0: 'Klasa',
  '1ka': '1か (Lekcja 1)',
  '2ka': '2か (Lekcja 2)'
};

const VOCAB_LIMIT_LABELS = {
  0: 'Wszystkie',
  10: '10 kart',
  20: '20 kart'
};

/* Nawigacja tematów słownictwa (T19 list/detail) — sesyjna, nie zapisana. */
let vocabTopicNav = { view: 'setup', topic: null, scope: 'all' };

const vocabSetup = {
  mode: 'learn',
  direction: 'kana-meaning',
  scope: 'all',
  lesson: 'all',
  category: CATEGORY_ALL,
  order: 'smart',
  limit: 0
};

/* Zbiór pojedynczego zakresu (typu) — bez filtra kategorii i lekcji. */
function vocabScopePool(scope) {
  if (scope === 'cards') return VOCAB_CARDS;
  if (scope === 'verbs') return VOCAB_VERB_ITEMS;
  if (scope === 'words') return VOCAB_WORDS;
  if (scope === 'adjectives') return VOCAB_ADJECTIVES;
  if (scope === 'phrases') return VOCAB_PHRASE_ITEMS;
  return VOCAB_LEARN_ITEMS;
}

function filterByLesson(items, lesson = 'all') {
  if (!lesson || lesson === 'all') return items;
  return items.filter(item => (item.lesson || '0') === lesson);
}

/* Temat i lekcja zawężają zestaw do nauki. Rozpraszacze nadal biorą się z całej
   puli typu, bo wąski temat lub lekcja nie mogą ograniczać czterech odpowiedzi. */
function vocabPool(scope, category = CATEGORY_ALL, lesson = vocabSetup?.lesson || 'all') {
  const scopeItems = vocabScopePool(scope);
  const lessonItems = filterByLesson(scopeItems, lesson);
  return filterByCategory(lessonItems, category);
}

function renderVocabTopics() {
  refreshChrome();

  if (vocabTopicNav.view === 'topics') {
    const scope = vocabTopicNav.scope || vocabSetup.scope || 'all';
    const categories = categoriesIn(vocabScopePool(scope));
    let cardsHTML = '';

    if (categories.length === 0) {
      cardsHTML = '<p class="vocab-lead vocab-topics-empty">Brak tematów w wybranym zakresie.</p>';
    } else {
      for (const cat of categories) {
        const pool = filterByCategory(vocabScopePool(scope), cat.id);
        const stats = pool.map(i => vocabStat(i.id));
        const started = stats.filter(s => s.seen > 0).length;
        const totalSeen = stats.reduce((sum, s) => sum + s.seen, 0);
        const totalCorrect = stats.reduce((sum, s) => sum + s.correct, 0);
        const accuracyStr = totalSeen ? Math.round((totalCorrect / totalSeen) * 100) + '%' : '—';

        cardsHTML += `
          <button class="vocab-topics-card" type="button" data-vocab-topic="${cat.id}" data-focus-key="topic-${cat.id}">
            <div class="vocab-topics-header">
              <span class="vocab-topics-label">${categoryLabel(cat.id)}</span>
              <span class="vocab-pill-count">${pool.length}</span>
            </div>
            <div class="vocab-topics-sub">${pool.length} kart · ${started} rozpoczętych · ${accuracyStr}</div>
          </button>
        `;
      }
    }

    app.innerHTML = `
      <section class="vocab vocab-hub">
        <div class="card vocab-hub-hero">
          <span class="vocab-hub-watermark" aria-hidden="true">題</span>
          <div class="vocab-hub-top">
            <div class="eyebrow"><span class="accent-dot"></span> SŁOWNICTWO · KATALOG TEMATÓW</div>
            <div class="vocab-heading">
              <h2>Tematy słownictwa</h2>
              <p class="vocab-lead">Zakres: ${VOCAB_SCOPE_LABELS[scope]}. Wybierz temat, by poznać dedykowane słownictwo i rozpocząć naukę.</p>
            </div>
          </div>

          <div class="vocab-setup-group vocab-topics-scope-group">
            <div class="vocab-group-header">
              <span class="settings-label" id="vocabTopicScopeLabel">${icon('list')} Zakres materiału</span>
              <small class="vocab-group-desc">Filtruj tematy według typu kart</small>
            </div>
            <div class="vocab-pills" role="group" aria-labelledby="vocabTopicScopeLabel">
              ${VOCAB_SCOPES.map(
                s => `
                <button class="vocab-pill ${s === scope ? 'active' : ''}" type="button" data-vocab-topic-scope="${s}" data-focus-key="topic-scope-${s}" aria-pressed="${s === scope}">
                  <span>${VOCAB_SCOPE_LABELS[s]}</span> <span class="vocab-pill-count">${vocabScopePool(s).length}</span>
                </button>`
              ).join('')}
            </div>
          </div>
        </div>

        <div class="vocab-topics-grid">
          ${cardsHTML}
        </div>

        <div class="vocab-topic-actions">
          <button class="btn btn-secondary vocab-topics-back" type="button" data-vocab-topics-back data-focus-key="back-from-topics">
            ${icon('chevron-left')} Wróć do konfiguracji
          </button>
        </div>
      </section>
    `;

    document.querySelectorAll('[data-vocab-topic-scope]').forEach(button => {
      button.onclick = () => {
        Audio.click();
        const newScope = button.dataset.vocabTopicScope;
        vocabTopicNav.scope = newScope;
        vocabSetup.scope = newScope;
        renderVocabTopics();
        app.querySelector(`[data-focus-key="topic-scope-${newScope}"]`)?.focus();
      };
    });

    document.querySelectorAll('[data-vocab-topic]').forEach(button => {
      button.onclick = () => {
        Audio.click();
        vocabTopicNav.topic = button.dataset.vocabTopic;
        vocabTopicNav.view = 'detail';
        renderVocabTopics();
        app.querySelector('[data-vocab-topic-start]')?.focus();
      };
    });

    document.querySelector('[data-vocab-topics-back]').onclick = () => {
      Audio.click();
      vocabTopicNav.view = 'setup';
      vocabTopicNav.topic = null;
      renderVocab();
      app.querySelector('#vocabTopicsBtn')?.focus();
    };
    return;
  }

  // Detail view
  const topicId = vocabTopicNav.topic;
  const scope = vocabTopicNav.scope || vocabSetup.scope || 'all';
  const pool = filterByCategory(vocabScopePool(scope), topicId);
  const stats = pool.map(item => vocabStat(item.id));
  const started = stats.filter(s => s.seen > 0).length;
  const totalSeen = stats.reduce((sum, s) => sum + s.seen, 0);
  const totalCorrect = stats.reduce((sum, s) => sum + s.correct, 0);
  const accuracyStr = totalSeen ? Math.round((totalCorrect / totalSeen) * 100) + '%' : '—';

  const rows = pool
    .map(item => {
      const stat = vocabStat(item.id);
      const seenStr = stat.seen ? `${stat.seen} powt. · ${Math.round(stat.accuracy * 100)}%` : 'nie rozpoczęte';
      return `<div class="vocab-item-row"><div class="vocab-item-lead"><div class="vocab-item-title-row"><button type="button" class="vocab-star-btn ${isBookmarked('vocab', item.id) ? 'bookmarked' : ''}" data-star-type="vocab" data-star-id="${item.id}" aria-label="Ulubione" title="Przełącz ulubione">★</button><strong>${item.kana}</strong></div><span class="vocab-item-romaji">${item.romaji}</span></div><div class="vocab-item-meaning-cell"><span class="vocab-item-meaning">${item.meaning}</span></div><div class="vocab-item-stat">${seenStr}</div></div>`;
    })
    .join('');

  const content = `
    <section class="vocab vocab-hub">
      <div class="card vocab-hub-hero">
        <span class="vocab-hub-watermark" aria-hidden="true">語</span>
        <div class="vocab-hub-top">
          <div class="eyebrow"><span class="accent-dot"></span> SŁOWNICTWO · TEMAT</div>
          <div class="vocab-heading">
            <h2>${categoryLabel(topicId)}</h2>
            <p class="vocab-lead">${pool.length} kart w wybranym zakresie (${VOCAB_SCOPE_LABELS[scope]}). Sprawdź wyrażenia lub rozpocznij sesję.</p>
          </div>
        </div>

        <div class="vocab-summary" aria-label="Podsumowanie tematu">
          <div class="vocab-summary-item">
            <span class="vocab-summary-icon" aria-hidden="true">${icon('vocab')}</span>
            <div class="vocab-summary-text">
              <strong>${pool.length}</strong>
              <span>kart w temacie</span>
            </div>
          </div>
          <div class="vocab-summary-item">
            <span class="vocab-summary-icon" aria-hidden="true">${icon('target')}</span>
            <div class="vocab-summary-text">
              <strong>${started}</strong>
              <span>rozpoczętych</span>
            </div>
          </div>
          <div class="vocab-summary-item">
            <span class="vocab-summary-icon" aria-hidden="true">${icon('star')}</span>
            <div class="vocab-summary-text">
              <strong>${accuracyStr}</strong>
              <span>trafność</span>
            </div>
          </div>
        </div>

        <div class="vocab-topic-actions">
          <button class="btn btn-primary vocab-start" type="button" data-vocab-topic-start data-focus-key="start-topic">
            ${icon('play')} Rozpocznij temat · ${pool.length} kart
          </button>
          <button class="btn btn-secondary vocab-topics-back" type="button" data-vocab-topics-back data-focus-key="back-to-topics">
            ${icon('chevron-left')} Wróć do tematów
          </button>
        </div>
      </div>

      <div class="card vocab-topic-detail-card">
        <div class="vocab-group-header">
          <span class="settings-label">${icon('list')} Słówka w tym temacie</span>
          <small class="vocab-group-desc">Lista kart i historia Twoich dotychczasowych odpowiedzi</small>
        </div>
        <div class="vocab-topic-meta">${pool.length} kart · ${started} rozpoczętych · trafność ${accuracyStr}</div>
        <div class="vocab-topic-list" role="list">
          ${rows}
        </div>
      </div>
    </section>
  `;
  app.innerHTML = content;

  document.querySelector('[data-vocab-topic-start]').onclick = () => {
    Audio.click();
    const ids = vocabSessionOrder(scope, topicId, {
      order: vocabSetup.order,
      limit: vocabSetup.limit
    });
    vocabTopicNav.view = 'setup';
    vocabTopicNav.topic = null;
    startVocabSession({ ids, scope, category: topicId });
  };

  document.querySelector('[data-vocab-topics-back]').onclick = () => {
    Audio.click();
    vocabTopicNav.view = 'topics';
    vocabTopicNav.topic = null;
    renderVocabTopics();
    app.querySelector(`[data-vocab-topic="${topicId}"]`)?.focus();
  };
}

function vocabItem(cardId) {
  return VOCAB_LEARN_ITEMS.find(item => item.id === cardId) || null;
}

/* Limit jest tylko skróceniem wybranego zakresu — nigdy nie powiększa go
   ponad liczbę dostępnych kart. */
function vocabCardCount(scope, category, limit, lesson = vocabSetup?.lesson || 'all') {
  const total = vocabPool(scope, category, lesson).length;
  return limit > 0 ? Math.min(limit, total) : total;
}

function vocabSessionOrder(scope, category, { order = 'smart', limit = 0, lesson = vocabSetup?.lesson || 'all' } = {}) {
  let entries = vocabPool(scope, category, lesson).map((item, index) => ({
    id: item.id,
    index: index,
    stat: vocabStat(item.id)
  }));

  if (order === 'shuffle') {
    entries = shuffle(entries);
  } else {
    entries.sort((a, b) => a.stat.seen - b.stat.seen || a.stat.accuracy - b.stat.accuracy || a.index - b.index);
  }

  const count = vocabCardCount(scope, category, limit, lesson);
  return entries.slice(0, count).map(entry => entry.id);
}

/*
   Rozpraszacze pochodzą z tego samego typu materiału co pytanie: przy
   czasownikach polskie znaczenia to bezokoliczniki („słuchać"), a przy
   wyrażeniach prośby („proszę słuchać"). Wymieszanie ich dawałoby odpowiedzi,
   które różnią się tylko gramatyczną formą, a nie znaczeniem.
*/
function vocabOptions(item, direction) {
  const field = direction === 'meaning-kana' ? 'kana' : 'meaning';
  const poolScope =
    item.type === 'verb'
      ? 'verbs'
      : item.type === 'word'
        ? 'words'
        : item.type === 'adjective'
          ? 'adjectives'
          : item.type === 'phrase' || item.type === 'pattern'
            ? 'phrases'
            : 'cards';
  const pool = vocabPool(poolScope, CATEGORY_ALL, 'all');
  const chosen = new Set([item[field]]);
  const distractors = [];

  for (const other of shuffle(pool)) {
    if (other.id === item.id || chosen.has(other[field])) continue;
    chosen.add(other[field]);
    distractors.push(other[field]);
    if (distractors.length === VOCAB_OPTIONS - 1) break;
  }

  return shuffle([item[field], ...distractors]);
}

/* Mapowanie romaji na hiragana dla wpisywania z klawiatury */
const ROMAJI_TO_HIRA = (() => {
  const map = {};
  if (typeof scriptData !== 'undefined' && scriptData.hiragana && scriptData.hiragana.groups) {
    scriptData.hiragana.groups.forEach(g => {
      g.chars.forEach(([k, r]) => {
        map[r] = k;
      });
    });
  }
  // Dodatkowe warianty transkrypcji (Hepburn / Kunrei)
  map['si'] = 'し';
  map['ti'] = 'ち';
  map['tu'] = 'つ';
  map['hu'] = 'ふ';
  map['zi'] = 'じ';
  map['di'] = 'ぢ';
  map['du'] = 'づ';
  return map;
})();

function transliterateRomajiToKana(text) {
  if (!text) return '';
  let res = '';
  let i = 0;
  const s = text.toLowerCase();
  while (i < s.length) {
    const three = s.slice(i, i + 3);
    if (ROMAJI_TO_HIRA[three]) {
      res += ROMAJI_TO_HIRA[three];
      i += 3;
      continue;
    }
    const two = s.slice(i, i + 2);
    if (two === 'nn') {
      res += 'ん';
      i += 2;
      continue;
    }
    if (ROMAJI_TO_HIRA[two]) {
      res += ROMAJI_TO_HIRA[two];
      i += 2;
      continue;
    }
    // Sokuon: podwójna spółgłoska
    if (s[i] === s[i + 1] && s[i] !== 'n' && !'aeiou'.includes(s[i])) {
      res += 'っ';
      i += 1;
      continue;
    }
    const one = s[i];
    if (ROMAJI_TO_HIRA[one]) {
      res += ROMAJI_TO_HIRA[one];
      i += 1;
      continue;
    }
    res += s[i];
    i += 1;
  }
  return res;
}

function matchVocabJapanese(typed, item) {
  if (!typed || !item) return false;
  const clean = s =>
    (s || '')
      .trim()
      .toLowerCase()
      .replace(/[\s\-_・]/g, '');
  const t = clean(typed);
  if (!t) return false;

  const normKana = clean(item.kana);
  const normRomaji = clean(item.romaji);
  const normKanji = clean(item.kanji);

  // Bezpośrednie dopasowanie kana, romaji lub kanji
  if (t === normKana || t === normRomaji || (normKanji && t === normKanji)) return true;

  // Normalizacja makronów
  const expandMacron = s =>
    s.replace(/ō/g, 'ou').replace(/ū/g, 'uu').replace(/ā/g, 'aa').replace(/ē/g, 'ee').replace(/ī/g, 'ii');

  if (expandMacron(t) === expandMacron(normRomaji)) return true;

  // Transliteracja romaji -> kana
  const transliterated = clean(transliterateRomajiToKana(t));
  if (transliterated === normKana) return true;

  // Warianty alternatywne
  if (item.alt && clean(item.alt) === t) return true;
  if (item.altRomaji && clean(item.altRomaji) === t) return true;

  return false;
}

function matchVocabMeaning(typed, meaning) {
  if (!typed || !meaning) return false;
  const clean = s =>
    (s || '')
      .toLowerCase()
      .trim()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  const strip = s =>
    (s || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/ł/g, 'l')
      .replace(/Ł/g, 'L');

  const t = clean(typed);
  if (!t) return false;
  const tStrip = strip(t);

  const m = clean(meaning);
  const mStrip = strip(m);

  if (t === m || tStrip === mStrip) return true;

  const candidates = [];
  // Całość bez zawartości nawiasów
  const noParens = clean(meaning.replace(/\([^)]*\)/g, ' '));
  if (noParens) candidates.push(noParens);
  // Całość ze słowami z nawiasów
  const flatParens = clean(meaning.replace(/[()]/g, ' '));
  if (flatParens) candidates.push(flatParens);

  // Części rozdzielone przecinkami, średnikami, ukośnikami
  meaning.split(/[,;/]+/).forEach(part => {
    const pClean = clean(part);
    if (pClean) candidates.push(pClean);
    const pNoParens = clean(part.replace(/\([^)]*\)/g, ' '));
    if (pNoParens) candidates.push(pNoParens);
  });

  // Zawartość wewnątrz nawiasów
  const parenMatches = meaning.match(/\(([^)]+)\)/g);
  if (parenMatches) {
    parenMatches.forEach(pm => {
      const inside = clean(pm.replace(/[()]/g, ' '));
      if (inside) candidates.push(inside);
      inside.split(/[,;/]+/).forEach(p => {
        const pc = clean(p);
        if (pc) candidates.push(pc);
      });
    });
  }

  for (const cand of candidates) {
    if (cand === t || strip(cand) === tStrip) return true;
  }

  return false;
}

function startVocabSession({
  ids = null,
  scope = vocabSetup.scope,
  lesson = vocabSetup.lesson || 'all',
  category = vocabSetup.category,
  mode = vocabSetup.mode,
  direction = vocabSetup.direction,
  order = vocabSetup.order,
  limit = vocabSetup.limit
} = {}) {
  const sessionOrder = ids ? [...ids] : vocabSessionOrder(scope, category, { order, limit, lesson });

  state.vocab = {
    mode,
    direction,
    scope,
    lesson,
    category,
    order: sessionOrder,
    limit,
    index: 0,
    correct: 0,
    wrong: 0,
    wrongIds: [],
    answered: false,
    revealed: false,
    chosen: null,
    lastCorrect: false,
    options: null,
    finished: false
  };
  renderVocab();
}

function recordVocabResult(session, item, correct) {
  session.answered = true;
  session.lastCorrect = correct;
  if (correct) session.correct++;
  else {
    session.wrong++;
    session.wrongIds.push(item.id);
  }

  recordVocabAnswer(item.id, correct);
  if (correct) Audio.correct();
  else Audio.wrong();
}

function answerVocab(choice) {
  const session = state.vocab;
  if (!session || session.mode !== 'test' || session.answered || session.finished) return;

  const item = vocabItem(session.order[session.index]);
  if (!item) return;

  const expected = session.direction === 'meaning-kana' ? item.kana : item.meaning;
  session.chosen = choice;
  recordVocabResult(session, item, choice === expected);
  renderVocab();
}

function answerVocabTyped(typed) {
  const session = state.vocab;
  if (!session || session.mode !== 'type' || session.answered || session.finished) return;

  const item = vocabItem(session.order[session.index]);
  if (!item) return;

  session.typedValue = (typed || '').trim();
  const asksKana = session.direction === 'meaning-kana';
  const correct = asksKana
    ? matchVocabJapanese(session.typedValue, item)
    : matchVocabMeaning(session.typedValue, item.meaning);

  recordVocabResult(session, item, correct);
  renderVocab();
}

/*
   Nauka jest dwustopniowa: najpierw odkrycie odpowiedzi, potem samoocena.
   Dzięki temu karta nie udaje testu z czterema odpowiedziami, a użytkownik
   sam decyduje, czy ją znał — bez automatycznego zgadywania.
*/
function revealVocab() {
  const session = state.vocab;
  if (!session || session.mode !== 'learn' || session.revealed || session.answered || session.finished) return;

  session.revealed = true;
  Audio.click();
  renderVocab();
}

function gradeVocab(correct) {
  const session = state.vocab;
  if (!session || session.mode !== 'learn' || !session.revealed || session.answered || session.finished) return;

  const item = vocabItem(session.order[session.index]);
  if (!item) return;

  recordVocabResult(session, item, correct);
  renderVocab();
}

function nextVocab() {
  const session = state.vocab;
  if (!session || !session.answered) return;

  session.index++;
  session.answered = false;
  session.revealed = false;
  session.chosen = null;
  session.lastCorrect = false;
  session.options = null;
  session.typedValue = '';

  if (session.index >= session.order.length) {
    session.finished = true;
    Audio.celebrate();
  }

  renderVocab();
}

/* Wspólne „skąd przyszła ta karta” dla obu trybów. */
function vocabAnswerDetailsHTML(item) {
  const source = item.type === 'verb' && item.source ? vocabItem(item.source) : null;
  let detail = '';

  if (source) {
    detail = `<div class="flash-meta">Wyrażenie: <b>${source.kana}</b> (${source.romaji}) — ${source.meaning}</div>`;
  } else if (item.type === 'card') {
    detail = `<div class="flash-meta">Czasownik: <b>${item.verb}</b> (${item.verbRomaji}) — ${item.verbMeaning}</div>`;
  } else if (item.type === 'pattern' && item.answers) {
    detail = `<div class="flash-meta">Odpowiedzi:<br>${item.answers
      .map(answer => `<b>${answer[0]}</b> (${answer[1]}) — ${answer[2]}`)
      .join('<br>')}</div>`;
    if (item.variants) {
      detail += `<div class="flash-meta">Warianty:<br>${item.variants
        .map(variant => `<b>${variant[0]}</b> (${variant[1]}) — ${variant[2]}`)
        .join('<br>')}</div>`;
    }
  }

  if (item.kanji && item.type !== 'card') {
    detail += `<div class="flash-meta vocab-kanji-meta">Kanji: <b>${item.kanji}</b></div>`;
  }

  const variant = item.alt ? `<div class="flash-meta">Wariant: <b>${item.alt}</b> (${item.altRomaji})</div>` : '';
  return `${detail}${variant}`;
}

function vocabRevealHTML(item, correct) {
  return `
    <div class="flashcard vocab-reveal ${correct ? 'vocab-correct' : ''}">
      <div class="flash-label">${correct ? '✓ Dobrze' : '✗ Poprawna odpowiedź'}</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:8px">
        <div class="flash-kana vocab-kana">${item.kana}</div>
        <button class="btn-speak" data-speak="${escapeHtml(item.kana)}" type="button" title="Odsłuchaj wymowę" aria-label="Odsłuchaj wymowę">${icon('volume')}</button>
      </div>
      <div class="flash-romaji">${item.romaji}</div>
      <div class="flash-meta">${item.meaning}</div>
      ${vocabAnswerDetailsHTML(item)}
      <button class="btn btn-primary" id="vocabNext">Dalej <span class="key-hint">Enter</span> ${icon('chevron-right')}</button>
    </div>
  `;
}

function vocabLearnAnswerHTML(item, asksKana) {
  return `
    <div class="vocab-learn-answer">
      <div class="vocab-learn-label">Odpowiedź</div>
      <div style="display:flex;align-items:center;justify-content:center;gap:8px">
        <div class="${asksKana ? 'question-vocab' : 'question-vocab-pl'}">${asksKana ? item.kana : item.meaning}</div>
        <button class="btn-speak" data-speak="${escapeHtml(item.kana)}" type="button" title="Odsłuchaj wymowę" aria-label="Odsłuchaj wymowę">${icon('volume')}</button>
      </div>
      <div class="flash-romaji">${item.romaji}</div>
      ${vocabAnswerDetailsHTML(item)}
    </div>
  `;
}

/* Ekran wyboru: tryb, kierunek, zakres, kolejność i długość sesji. Wszystkie
   decyzje są sesyjne, więc nie ruszają formatu `hiragana-vocab`. */
function renderVocabSetup() {
  const { mode, direction, scope, lesson = 'all', category, order, limit } = vocabSetup;
  const pool = vocabPool(scope, category, lesson);
  const count = vocabCardCount(scope, category, limit, lesson);
  const attempts = pool.reduce((sum, item) => sum + vocabStat(item.id).seen, 0);
  const correct = pool.reduce((sum, item) => sum + vocabStat(item.id).correct, 0);
  const accuracy = attempts ? `${Math.round((correct / attempts) * 100)}%` : '—';
  const started = pool.filter(item => vocabStat(item.id).seen > 0).length;

  const directionHint =
    direction === 'meaning-kana'
      ? 'Widzisz polskie znaczenie, a po odkryciu lub odpowiedzi — japońskie wyrażenie.'
      : 'Widzisz japońskie wyrażenie, a po odkryciu lub odpowiedzi — polskie znaczenie.';

  const modeHint =
    mode === 'learn'
      ? 'Odkrywasz odpowiedź i sam decydujesz, czy ją znasz.'
      : mode === 'type'
        ? 'Wpisujesz odpowiedź z pamięci — po japońsku lub po polsku.'
        : 'Cztery odpowiedzi i natychmiastowa informacja zwrotna.';

  app.innerHTML = `
    <section class="vocab vocab-hub">
      <div class="card vocab-hub-hero">
        <span class="vocab-hub-watermark" aria-hidden="true">語</span>
        <div class="vocab-hub-top">
          <div class="eyebrow"><span class="accent-dot"></span> SŁOWNICTWO · 語彙</div>
          <div class="vocab-heading">
            <h2>Fiszki i słownictwo</h2>
            <p class="vocab-lead">${modeHint}</p>
          </div>
        </div>

        <div class="vocab-summary" aria-label="Podsumowanie wybranego zestawu">
          <div class="vocab-summary-item">
            <span class="vocab-summary-icon" aria-hidden="true">${icon('vocab')}</span>
            <div class="vocab-summary-text">
              <strong>${count}</strong>
              <span>kart w sesji</span>
            </div>
          </div>
          <div class="vocab-summary-item">
            <span class="vocab-summary-icon" aria-hidden="true">${icon('target')}</span>
            <div class="vocab-summary-text">
              <strong>${started}</strong>
              <span>rozpoczętych</span>
            </div>
          </div>
          <div class="vocab-summary-item">
            <span class="vocab-summary-icon" aria-hidden="true">${icon('star')}</span>
            <div class="vocab-summary-text">
              <strong>${accuracy}</strong>
              <span>trafność</span>
            </div>
          </div>
        </div>

        <button class="btn btn-primary vocab-start" id="vocabStart" ${count === 0 ? 'disabled' : ''}>
          ${icon(mode === 'learn' ? 'learn' : mode === 'type' ? 'keyboard' : 'quiz')}
          ${count === 0 ? 'Brak kart w wybranym filtrze' : (mode === 'learn' ? 'Zacznij naukę' : mode === 'type' ? 'Zacznij wpisywanie' : 'Zacznij test') + ' · ' + count + ' ' + (count === 1 ? 'karta' : count > 1 && count < 5 ? 'karty' : 'kart')}
        </button>
      </div>

      <div class="vocab-smart-banner">
        <button class="btn btn-secondary vocab-smart-btn" id="btnVocabSmartPractice" type="button">
          ⭐ Inteligentna powtórka (${getSmartPracticePool('vocab').length} słówek z gwiazdką lub &lt; 60%)
        </button>
      </div>

      <div class="vocab-mode-grid" role="group" aria-label="Tryb nauki">
        ${VOCAB_MODES.map(
          id => `
          <button class="vocab-mode-card ${id === mode ? 'active' : ''}" data-vocab-mode="${id}" data-focus-key="vocab-mode-${id}" aria-pressed="${id === mode}">
            <span class="vocab-mode-icon" aria-hidden="true">${icon(id === 'learn' ? 'learn' : id === 'type' ? 'keyboard' : 'quiz')}</span>
            <span class="vocab-mode-body">
              <span class="vocab-mode-badge">${id === 'learn' ? 'Fiszki' : id === 'type' ? 'Klawiatura' : 'Quiz'}</span>
              <strong>${VOCAB_MODE_LABELS[id]}</strong>
              <small>${id === 'learn' ? 'Odkrycie odpowiedzi i samoocena wiedzy' : id === 'type' ? 'Wpisywanie odpowiedzi z pamięci' : 'Cztery odpowiedzi, natychmiastowy wynik'}</small>
            </span>
          </button>`
        ).join('')}
      </div>

      <div class="vocab-setup-grid">
        <div class="card vocab-setup-panel">
          <div class="vocab-setup-group">
            <div class="vocab-group-header">
              <span class="settings-label" id="vocabLessonLabel">${icon('book')} Lekcja</span>
              <small class="vocab-group-desc">Wybierz zakres materiału</small>
            </div>
            <div class="vocab-pills" role="group" aria-labelledby="vocabLessonLabel">
              ${VOCAB_LESSONS.map(
                id => `
                <button class="vocab-pill ${id === lesson ? 'active' : ''}" data-vocab-lesson="${id}" data-focus-key="vocab-lesson-${id}" aria-pressed="${id === lesson}">
                  <span>${VOCAB_LESSON_LABELS[id]}</span> <span class="vocab-pill-count">${vocabPool(scope, category, id).length}</span>
                </button>`
              ).join('')}
            </div>
          </div>

          <div class="vocab-setup-group">
            <div class="vocab-group-header">
              <span class="settings-label" id="vocabScopeLabel">${icon('list')} Zakres materiału</span>
              <small class="vocab-group-desc">Wybierz grupę słówek do ćwiczenia</small>
            </div>
            <div class="vocab-pills" role="group" aria-labelledby="vocabScopeLabel">
              ${VOCAB_SCOPES.map(
                id => `
                <button class="vocab-pill ${id === scope ? 'active' : ''}" data-vocab-scope="${id}" data-focus-key="vocab-scope-${id}" aria-pressed="${id === scope}">
                  <span>${VOCAB_SCOPE_LABELS[id]}</span> <span class="vocab-pill-count">${vocabPool(id, category, lesson).length}</span>
                </button>`
              ).join('')}
            </div>
          </div>

          <div class="vocab-setup-group vocab-topics-promo">
            <button class="vocab-topics-tile" id="vocabTopicsBtn" data-focus-key="vocab-topics" type="button">
              <div class="vocab-topics-tile-left">
                <span class="vocab-topics-tile-icon" aria-hidden="true">${icon('folder')}</span>
                <div class="vocab-topics-tile-body">
                  <strong>Wybierz temat</strong>
                  <small>Karty tematyczne: szkoła, jedzenie, transport...</small>
                </div>
              </div>
              <span class="vocab-topics-tile-arrow" aria-hidden="true">${icon('chevron-right')}</span>
            </button>
          </div>
        </div>

        <div class="card vocab-setup-panel">
          <div class="vocab-setup-group">
            <div class="vocab-group-header">
              <span class="settings-label" id="vocabDirectionLabel">${icon('review')} Kierunek nauki</span>
            </div>
            <div class="vocab-pills" role="group" aria-labelledby="vocabDirectionLabel">
              ${VOCAB_DIRECTIONS.map(
                id => `
                <button class="vocab-pill ${id === direction ? 'active' : ''}" data-vocab-direction="${id}" data-focus-key="vocab-direction-${id}" aria-pressed="${id === direction}">
                  ${VOCAB_DIRECTION_LABELS[id]}
                </button>`
              ).join('')}
            </div>
            <small class="vocab-hint">${directionHint}</small>
          </div>

          <div class="vocab-setup-pair">
            <div class="vocab-setup-group">
              <span class="settings-label" id="vocabOrderLabel">Kolejność</span>
              <div class="vocab-pills" role="group" aria-labelledby="vocabOrderLabel">
                ${VOCAB_ORDERS.map(
                  id => `
                  <button class="vocab-pill ${id === order ? 'active' : ''}" data-vocab-order="${id}" data-focus-key="vocab-order-${id}" aria-pressed="${id === order}">
                    ${VOCAB_ORDER_LABELS[id]}
                  </button>`
                ).join('')}
              </div>
            </div>

            <div class="vocab-setup-group">
              <span class="settings-label" id="vocabLimitLabel">Liczba kart</span>
              <div class="vocab-pills" role="group" aria-labelledby="vocabLimitLabel">
                ${VOCAB_LIMITS.map(
                  id => `
                  <button class="vocab-pill ${id === limit ? 'active' : ''}" data-vocab-limit="${id}" data-focus-key="vocab-limit-${id}" aria-pressed="${id === limit}">
                    ${VOCAB_LIMIT_LABELS[id]}
                  </button>`
                ).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const rerender = (field, value, focusKey) => {
    Audio.click();
    vocabSetup[field] = value;
    if (field === 'scope') vocabSetup.category = CATEGORY_ALL;
    renderVocab();

    // Pełny `innerHTML` gubi fokus; przywracamy go na tym samym kontrolu.
    const target = app.querySelector(`[data-focus-key="${focusKey}"]`);
    if (target) target.focus();
  };

  document.querySelectorAll('[data-vocab-mode]').forEach(button => {
    button.onclick = () => rerender('mode', button.dataset.vocabMode, 'vocab-mode-' + button.dataset.vocabMode);
  });

  document.querySelectorAll('[data-vocab-direction]').forEach(button => {
    button.onclick = () =>
      rerender('direction', button.dataset.vocabDirection, 'vocab-direction-' + button.dataset.vocabDirection);
  });

  document.querySelectorAll('[data-vocab-lesson]').forEach(button => {
    button.onclick = () => rerender('lesson', button.dataset.vocabLesson, 'vocab-lesson-' + button.dataset.vocabLesson);
  });

  document.querySelectorAll('[data-vocab-scope]').forEach(button => {
    button.onclick = () => rerender('scope', button.dataset.vocabScope, 'vocab-scope-' + button.dataset.vocabScope);
  });

  document.querySelectorAll('[data-vocab-order]').forEach(button => {
    button.onclick = () => rerender('order', button.dataset.vocabOrder, 'vocab-order-' + button.dataset.vocabOrder);
  });

  document.querySelectorAll('[data-vocab-limit]').forEach(button => {
    button.onclick = () =>
      rerender('limit', Number(button.dataset.vocabLimit), 'vocab-limit-' + button.dataset.vocabLimit);
  });

  document.getElementById('vocabTopicsBtn').onclick = () => {
    Audio.click();
    vocabTopicNav.view = 'topics';
    vocabTopicNav.topic = null;
    vocabTopicNav.scope = vocabSetup.scope;
    renderVocab();
  };
  document.getElementById('vocabStart').onclick = () => {
    Audio.click();
    startVocabSession();
  };

  const btnVocabSmart = document.getElementById('btnVocabSmartPractice');
  if (btnVocabSmart) {
    btnVocabSmart.onclick = () => {
      Audio.click();
      const pool = getSmartPracticePool('vocab');
      if (!pool.length) {
        showAchievementToast({
          icon: '⭐',
          title: 'Brak trudnych słówek',
          desc: 'Oznacz słówka gwiazdką w widoku tematów, aby utworzyć własną powtórkę.'
        });
      } else {
        startVocabSession({ ids: pool.map(v => v.id) });
      }
    };
  }
}

function renderVocab() {
  refreshChrome();

  if (vocabTopicNav.view !== 'setup') {
    renderVocabTopics();
    return;
  }
  if (!state.vocab) {
    renderVocabSetup();
    return;
  }

  const session = state.vocab;

  if (session.finished) {
    const total = session.order.length;
    const percentage = total === 0 ? 0 : Math.round((session.correct / total) * 100);

    app.innerHTML = `
      <section class="vocab">
        <div class="eyebrow">SŁOWNICTWO</div>
        <h2>Koniec zestawu</h2>

        <div class="card vocab-result">
          <p class="vocab-result-score">${session.correct} / ${total}</p>
          <div class="vocab-result-bar" role="progressbar" aria-label="Skuteczność zestawu"
            aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percentage}">
            <div style="width:${percentage}%"></div>
          </div>
          <p>${resultText(session.correct, total, state.script, 'vocab')}</p>
          <div class="vocab-result-stats">
            <span><b>${session.correct}</b> dobrze</span>
            <span><b>${session.wrong}</b> błędnie</span>
            <span><b>${percentage}%</b> trafności</span>
          </div>

          <div class="vocab-result-actions">
            ${
              session.wrongIds.length
                ? `<button class="btn btn-primary" id="vocabRetryWrong">Powtórz błędne (${session.wrongIds.length})</button>`
                : ''
            }
            <button class="btn btn-secondary" id="vocabAgain">Jeszcze raz</button>
            <button class="btn btn-secondary" id="vocabNew">Nowy zestaw</button>
          </div>
        </div>
      </section>
    `;

    document.getElementById('vocabAgain').onclick = () => {
      Audio.click();
      startVocabSession({
        ids: session.sessionOrder || session.order,
        scope: session.scope,
        lesson: session.lesson,
        category: session.category,
        mode: session.mode,
        direction: session.direction,
        limit: session.limit
      });
    };

    const retry = document.getElementById('vocabRetryWrong');
    if (retry) {
      retry.onclick = () => {
        Audio.click();
        startVocabSession({
          ids: session.wrongIds,
          scope: session.scope,
          lesson: session.lesson,
          category: session.category,
          mode: session.mode,
          direction: session.direction,
          limit: session.limit
        });
      };
    }

    document.getElementById('vocabNew').onclick = () => {
      Audio.click();
      state.vocab = null;
      renderVocab();
    };
    return;
  }

  const item = vocabItem(session.order[session.index]);
  if (!item) {
    session.finished = true;
    renderVocab();
    return;
  }

  const asksKana = session.direction === 'meaning-kana';
  const expected = asksKana ? item.kana : item.meaning;
  const total = session.order.length;
  const percentage = total === 0 ? 0 : Math.round((session.index / total) * 100);
  const modeLabel = VOCAB_MODE_LABELS[session.mode] || 'Fiszki';

  const stats = `
    <span class="session-position">Karta <strong>${session.index + 1}</strong> z <strong>${total}</strong></span>
    <div class="badge session-score-badge" aria-label="Wynik: ${session.correct} dobrze, ${session.wrong} błędnie">
      <span class="score-correct">${session.correct} ✓</span> &nbsp; <span class="score-wrong">${session.wrong} ✗</span>
    </div>
  `;

  const progress = `
    <div class="progress session-progress" role="progressbar" aria-label="Postęp zestawu"
      aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percentage}">
      <div style="width:${percentage}%"></div>
    </div>
  `;

  if (session.mode === 'learn') {
    const front = asksKana ? item.meaning : item.kana;
    const frontClass = asksKana ? 'question-vocab-pl' : 'question-vocab';
    const sideLabel = asksKana ? 'POLSKI' : 'JAPOŃSKI';

    app.innerHTML = sessionFrameHTML({
      eyebrow: 'SŁOWNICTWO',
      title: modeLabel,
      stats,
      content: `
        ${progress}

        <div class="vocab-learn ${session.revealed ? 'is-revealed' : ''}">
          <div class="vocab-learn-instruction">
            ${session.revealed ? 'Sprawdź odpowiedź i oceń, czy ją znasz.' : 'Przypomnij sobie odpowiedź, a potem ją odkryj.'}
          </div>

          <div class="vocab-learn-card">
            <span class="vocab-card-watermark" aria-hidden="true">${item.kanji ? item.kanji.charAt(0) : item.kana ? item.kana.charAt(0) : '語'}</span>
            <div class="vocab-learn-side">${sideLabel}</div>
            <div style="display:flex;align-items:center;justify-content:center;gap:8px">
              <div class="${frontClass} vocab-learn-front">${front}</div>
              ${
                !asksKana
                  ? `<button class="btn-speak" data-speak="${escapeHtml(item.kana)}" type="button" title="Odsłuchaj wymowę" aria-label="Odsłuchaj wymowę">${icon('volume')}</button>`
                  : ''
              }
              <button class="vocab-card-star-btn ${isBookmarked('vocab', item.id) ? 'bookmarked' : ''}" data-star-type="vocab" data-star-id="${item.id}" type="button" title="Przełącz ulubione" aria-label="Ulubione">★</button>
            </div>
            ${
              session.revealed
                ? vocabLearnAnswerHTML(item, asksKana)
                : `<div class="vocab-learn-placeholder">
                    <span class="vocab-placeholder-eye" aria-hidden="true">${icon('eye')}</span>
                    <span class="vocab-placeholder-text">Odpowiedź jest ukryta</span>
                    <small class="vocab-placeholder-tip">Sprawdź pamięć przed odkryciem</small>
                  </div>`
            }
          </div>

          ${
            !session.revealed
              ? `<button class="btn btn-primary vocab-learn-action" id="vocabReveal">${icon('eye')} Pokaż odpowiedź <span class="key-hint">Space</span></button>`
              : ''
          }

          ${
            session.revealed && !session.answered
              ? `
                <div class="vocab-grade-actions">
                  <button class="btn btn-danger vocab-grade-wrong" data-vocab-grade="wrong">
                    <span class="vocab-grade-icon" aria-hidden="true">${icon('x')}</span>
                    <span class="vocab-grade-text">Nie wiedziałem</span>
                    <span class="key-hint">1</span>
                  </button>
                  <button class="btn btn-primary vocab-grade-correct" data-vocab-grade="correct">
                    <span class="vocab-grade-icon" aria-hidden="true">${icon('check')}</span>
                    <span class="vocab-grade-text">Wiedziałem</span>
                    <span class="key-hint">2</span>
                  </button>
                </div>
              `
              : ''
          }

          ${
            session.answered
              ? `
                <div class="vocab-learn-feedback ${session.lastCorrect ? 'is-correct' : 'is-wrong'}" role="status" aria-live="polite">
                  <span class="vocab-feedback-icon" aria-hidden="true">${icon(session.lastCorrect ? 'check' : 'x')}</span>
                  <span>${session.lastCorrect ? 'Dobrze' : 'Nie tym razem'}</span>
                </div>
                <button class="btn btn-primary vocab-learn-action" id="vocabNext">Dalej <span class="key-hint">Enter</span> ${icon('chevron-right')}</button>
              `
              : ''
          }
        </div>
      `,
      className: 'vocab-session'
    });

    const reveal = document.getElementById('vocabReveal');
    if (reveal) reveal.onclick = revealVocab;

    document.querySelectorAll('[data-vocab-grade]').forEach(button => {
      button.onclick = () => gradeVocab(button.dataset.vocabGrade === 'correct');
    });
  } else if (session.mode === 'type') {
    const promptLabel = asksKana ? 'Jak powiesz / napiszesz po japońsku:' : 'Co znaczy:';
    const placeholder = asksKana
      ? 'Wpisz romaji lub kana (np. ' + (item.romaji || '...') + ')'
      : 'Wpisz polskie znaczenie...';

    app.innerHTML = sessionFrameHTML({
      eyebrow: 'SŁOWNICTWO',
      title: modeLabel,
      stats,
      content: `
        ${progress}

        <div class="prompt vocab-type-prompt">
          <div class="polish">${promptLabel}</div>
          ${
            asksKana
              ? `<div class="question question-vocab-pl">${item.meaning}</div>`
              : `<div style="display:flex;align-items:center;justify-content:center;gap:8px">
                  <div class="question question-vocab">${item.kana}</div>
                  <button class="btn-speak" data-speak="${escapeHtml(item.kana)}" type="button" title="Odsłuchaj wymowę" aria-label="Odsłuchaj wymowę">${icon('volume')}</button>
                </div>`
          }

          <div class="type-input-wrap vocab-type-input-wrap">
            <input type="text" id="vocabTypedInput" class="vocab-input ${asksKana ? 'font-japanese' : ''} ${session.answered ? (session.lastCorrect ? 'input-correct' : 'input-wrong') : ''}"
                   autocomplete="off" autofocus placeholder="${placeholder}"
                   value="${escapeHtml(session.typedValue || '')}"
                   ${session.answered ? 'disabled' : ''}>
            <button class="btn btn-primary" id="vocabTypedCheck" ${session.answered ? 'disabled' : ''}>
              Sprawdź (Enter)
            </button>
          </div>

          <div class="feedback vocab-type-feedback" id="vocabFeedback" role="status" aria-live="polite">
            ${
              session.answered
                ? session.lastCorrect
                  ? `<div class="feedback-correct">✓ Dobrze!</div>`
                  : `<div class="feedback-wrong">✗ Niepoprawnie — poprawna odpowiedź poniżej.</div>`
                : ''
            }
          </div>
        </div>

        ${session.answered ? vocabRevealHTML(item, session.lastCorrect) : ''}
      `,
      className: 'vocab-session'
    });

    const input = document.getElementById('vocabTypedInput');
    const checkBtn = document.getElementById('vocabTypedCheck');

    if (input && !session.answered) {
      setTimeout(() => input.focus(), 30);
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          answerVocabTyped(input.value);
        }
      });
    }

    if (checkBtn && !session.answered) {
      checkBtn.onclick = () => {
        answerVocabTyped(input.value);
      };
    }
  } else {
    // Opcje losujemy raz na kartę i trzymamy w sesji — inaczej każde
    // przerysowanie po odpowiedzi przestawiałoby przyciski pod palcem.
    if (!session.options) session.options = vocabOptions(item, session.direction);

    app.innerHTML = sessionFrameHTML({
      eyebrow: 'SŁOWNICTWO',
      title: modeLabel,
      stats,
      content: `
        ${progress}

        <div class="prompt">
          <div class="polish">${asksKana ? 'Jak powiesz po japońsku:' : 'Co znaczy:'}</div>
          ${
            asksKana
              ? `<div class="question question-vocab-pl">${item.meaning}</div>`
              : `<div style="display:flex;align-items:center;justify-content:center;gap:8px"><div class="question question-vocab">${item.kana}</div><button class="btn-speak" data-speak="${escapeHtml(item.kana)}" type="button" title="Odsłuchaj wymowę" aria-label="Odsłuchaj wymowę">${icon('volume')}</button></div>`
          }

          <div class="answers ${asksKana ? '' : 'answers-text'}">
            ${session.options
              .map(
                (choice, i) => `
              <button class="answer ${asksKana ? 'answer-kana' : 'answer-text'}" data-vocab-choice="${choice}">
                <span class="answer-key">${i + 1}</span>
                ${choice}
              </button>
            `
              )
              .join('')}
          </div>

          <div class="feedback" id="vocabFeedback" role="status" aria-live="polite"></div>
        </div>

        ${session.answered ? vocabRevealHTML(item, session.lastCorrect) : ''}
      `,
      className: 'vocab-session'
    });

    document.querySelectorAll('[data-vocab-choice]').forEach(button => {
      const choice = button.dataset.vocabChoice;

      if (session.answered) {
        button.disabled = true;
        if (choice === expected) button.classList.add('correct');
        else if (choice === session.chosen) button.classList.add('wrong');
        return;
      }

      button.onclick = () => answerVocab(choice);
    });

    const feedback = document.getElementById('vocabFeedback');
    if (feedback && session.answered) {
      feedback.textContent = session.lastCorrect ? 'Dobrze!' : 'Nie tym razem — poprawna odpowiedź jest niżej.';
    }
  }

  const next = document.getElementById('vocabNext');
  if (next) next.onclick = nextVocab;
}

/* =========================================================
   MODUŁ KANJI (T18) — IMPLEMENTACJA UI I LOGIKI
   ========================================================= */

let kanjiSession = {
  mode: 'hub', // 'hub' | 'catalog' | 'detail' | 'flashcard' | 'quiz'
  lesson: 'all',
  filter: 'all',
  search: '',
  charId: null,
  items: [],
  index: 0,
  score: 0,
  answers: [],
  finished: false,
  showBack: false,
  options: [],
  selected: null,
  submitted: false,
  drawingEnabled: false
};

function confirmKanjiExit() {
  if (!state.kanji) return true;
  if (state.kanji.mode !== 'flashcard' && state.kanji.mode !== 'quiz') return true;
  if (state.kanji.finished) return true;
  return window.confirm('Przerwać bieżącą sesję Kanji?');
}

function getKanjiSummaryStats(lesson = 'all') {
  const items = lesson === 'all' ? KANJI_ITEMS : KANJI_ITEMS.filter(k => k.lesson === lesson);
  const now = Date.now();
  let seenCount = 0;
  let masteredCount = 0;
  let dueCount = 0;
  let totalCorrect = 0;
  let totalSeen = 0;

  for (const item of items) {
    const s = kanjiStat(item.id);
    if (s.seen > 0) {
      seenCount++;
      totalCorrect += s.correct;
      totalSeen += s.seen;
      if (s.status === 'mastered') masteredCount++;
      if (s.due > 0 && s.due <= now) dueCount++;
    }
  }

  return {
    total: items.length,
    seen: seenCount,
    mastered: masteredCount,
    due: dueCount,
    accuracy: totalSeen ? Math.round((totalCorrect / totalSeen) * 100) : 0
  };
}

function startKanjiSession({ mode = 'flashcard', lesson = 'all', items = null } = {}) {
  let pool =
    items && items.length
      ? [...items]
      : lesson === 'all'
        ? [...KANJI_ITEMS]
        : KANJI_ITEMS.filter(k => k.lesson === lesson);
  if (!pool.length) pool = [...KANJI_ITEMS];

  pool = shuffle([...pool]);
  if (mode === 'quiz' && pool.length > 20) {
    pool = pool.slice(0, 20);
  }

  kanjiSession = {
    mode,
    lesson,
    filter: 'all',
    search: '',
    charId: null,
    items: pool,
    index: 0,
    score: 0,
    answers: [],
    finished: false,
    showBack: false,
    options: [],
    selected: null,
    submitted: false,
    drawingEnabled: false
  };

  state.kanji = kanjiSession;
  if (mode === 'quiz') {
    setupKanjiQuizQuestion();
  }
  render();
}

function setupKanjiQuizQuestion() {
  const s = kanjiSession;
  if (!s || s.index >= s.items.length) return;
  const current = s.items[s.index];

  const others = shuffle(KANJI_ITEMS.filter(k => k.id !== current.id)).slice(0, 3);
  const choices = shuffle([current, ...others]);

  const type = Math.random() < 0.5 ? 'kanjiToMeaning' : 'meaningToKanji';

  s.options = choices.map(c => ({
    id: c.id,
    kanji: c.kanji,
    meaning: c.meaning,
    onyomi: c.onyomi.join(', '),
    kunyomi: c.kunyomi.join(', '),
    isCorrect: c.id === current.id
  }));
  s.questionType = type;
  s.selected = null;
  s.submitted = false;
}

function renderKanji() {
  if (!state.kanji) {
    state.kanji = kanjiSession;
  }
  const mode = state.kanji.mode || 'hub';

  if (mode === 'hub') renderKanjiHub();
  else if (mode === 'catalog') renderKanjiCatalog();
  else if (mode === 'detail') renderKanjiDetail();
  else if (mode === 'flashcard') renderKanjiFlashcard();
  else if (mode === 'quiz') renderKanjiQuiz();
  else renderKanjiHub();
}

/* =========================================================
   A. WIDOK: KANJI HUB
   ========================================================= */
function renderKanjiHub() {
  const stats = getKanjiSummaryStats('all');

  app.innerHTML = `
    <div class="kanji-hub-screen animate-fade">
      <div class="kanji-hero-card">
        <div class="kanji-hero-watermark" aria-hidden="true">漢</div>
        <div class="kanji-hero-content">
          <span class="kanji-eyebrow">JAPOŃSKI · POZIOM N5 / SHOKYŪ NIHONGO</span>
          <h1 class="kanji-hero-title">Moduł Kanji (漢字)</h1>
          <p class="kanji-hero-desc">
            Poznaj ${KANJI_ITEMS.length} znaków języka japońskiego z podręcznika Shokyū Nihongo
            (lekcje L01–L28) oraz bazy JLPT N5. Naucz się animacji kresek, rysowania i słownictwa.
          </p>

          <div class="kanji-hero-stats">
            <div class="kanji-stat-badge">
              <span class="kanji-stat-num">${stats.total}</span>
              <span class="kanji-stat-lbl">Znaków</span>
            </div>
            <div class="kanji-stat-badge">
              <span class="kanji-stat-num">${stats.seen}</span>
              <span class="kanji-stat-lbl">Poznanych</span>
            </div>
            <div class="kanji-stat-badge ${stats.due > 0 ? 'is-due' : ''}">
              <span class="kanji-stat-num">${stats.due}</span>
              <span class="kanji-stat-lbl">Do powtórki</span>
            </div>
            <div class="kanji-stat-badge is-mastered">
              <span class="kanji-stat-num">${stats.mastered}</span>
              <span class="kanji-stat-lbl">Opanowanych</span>
            </div>
          </div>
        </div>
      </div>

      <div class="kanji-actions-grid">
        <div class="kanji-action-card" id="btnKanjiCatalog">
          <div class="kanji-action-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7" rx="1.5"/>
              <rect x="14" y="3" width="7" height="7" rx="1.5"/>
              <rect x="14" y="14" width="7" height="7" rx="1.5"/>
              <rect x="3" y="14" width="7" height="7" rx="1.5"/>
            </svg>
          </div>
          <div class="kanji-action-info">
            <h2 class="kanji-action-title">Katalog Znaków</h2>
            <p class="kanji-action-desc">Przeglądaj wszystkie ${KANJI_ITEMS.length} znaków, czytania On/Kun, liczbę kresek oraz interaktywne animacje pisowni.</p>
          </div>
          <button class="kanji-action-btn" type="button">Otwórz katalog →</button>
        </div>

        <div class="kanji-action-card" id="btnKanjiFlashcards">
          <div class="kanji-action-icon accent">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 3H8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z"/>
            </svg>
          </div>
          <div class="kanji-action-info">
            <h2 class="kanji-action-title">Fiszki SRS</h2>
            <p class="kanji-action-desc">System powtórek w odstępach czasowych (Spaced Repetition). Sprawdzaj znajomość znaczeń i czytań.</p>
          </div>
          <button class="kanji-action-btn accent" type="button">Rozpocznij fiszki →</button>
        </div>

        <div class="kanji-action-card" id="btnKanjiQuiz">
          <div class="kanji-action-icon quiz">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div class="kanji-action-info">
            <h2 class="kanji-action-title">Quiz Wyboru</h2>
            <p class="kanji-action-desc">Szybki test wiedzy z 4 opcjami odpowiedzi. Rozpoznawaj znaki pod presją czasu i utrwalaj pamięć.</p>
          </div>
          <button class="kanji-action-btn quiz" type="button">Rozpocznij quiz →</button>
        </div>

        <div class="kanji-action-card" id="btnKanjiSmartPractice">
          <div class="kanji-action-icon" style="color:#f59e0b">
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div class="kanji-action-info">
            <h2 class="kanji-action-title">Inteligentna Powtórka</h2>
            <p class="kanji-action-desc">Skup się na trudnych i ulubionych znakach (${getSmartPracticePool('kanji').length} znaków z gwiazdką lub dokładnością &lt; 60%).</p>
          </div>
          <button class="kanji-action-btn" type="button" style="border-color:#f59e0b;color:#f59e0b">Ćwicz trudne znaki →</button>
        </div>
      </div>

      <div class="kanji-lessons-panel">
        <div class="kanji-lessons-header">
          <h2 class="kanji-lessons-title">Wybierz zakres lekcji</h2>
          <span class="kanji-lessons-hint">Filtruj lub uruchom naukę wybranej lekcji</span>
        </div>
        <div class="kanji-lessons-grid">
          ${KANJI_LESSONS.map(l => {
            const lStats = getKanjiSummaryStats(l.id);
            const count = l.id === 'all' ? KANJI_ITEMS.length : KANJI_ITEMS.filter(k => k.lesson === l.id).length;
            const pct = count ? Math.round((lStats.seen / count) * 100) : 0;
            return `
              <div class="kanji-lesson-card" data-lesson="${l.id}">
                <div class="kanji-lesson-top">
                  <span class="kanji-lesson-tag">${l.id === 'all' ? 'Wszystko' : l.id}</span>
                  <span class="kanji-lesson-count">${count} znaków</span>
                </div>
                <div class="kanji-lesson-label">${l.label}</div>
                ${l.desc ? `<div class="kanji-lesson-desc">${l.desc}</div>` : ''}
                <div class="kanji-lesson-progress-wrap">
                  <div class="kanji-lesson-bar" style="width: ${pct}%"></div>
                </div>
                <div class="kanji-lesson-footer">
                  <span class="kanji-lesson-progress-text">${lStats.seen}/${count} poznanych (${pct}%)</span>
                  <span class="kanji-lesson-arrow">→</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnKanjiCatalog').onclick = () => {
    Audio.click();
    kanjiSession.mode = 'catalog';
    state.kanji = kanjiSession;
    render();
  };

  document.getElementById('btnKanjiFlashcards').onclick = () => {
    Audio.click();
    startKanjiSession({ mode: 'flashcard', lesson: kanjiSession.lesson || 'all' });
  };

  document.getElementById('btnKanjiQuiz').onclick = () => {
    Audio.click();
    startKanjiSession({ mode: 'quiz', lesson: kanjiSession.lesson || 'all' });
  };

  const btnSmart = document.getElementById('btnKanjiSmartPractice');
  if (btnSmart) {
    btnSmart.onclick = () => {
      Audio.click();
      const pool = getSmartPracticePool('kanji');
      if (!pool.length) {
        showAchievementToast({
          icon: '⭐',
          title: 'Brak trudnych znaków',
          desc: 'Oznacz znaki gwiazdką w katalogu, aby rozpocząć powtórkę ulubionych.'
        });
      } else {
        startKanjiSession({ mode: 'flashcard', items: pool });
      }
    };
  }

  app.querySelectorAll('[data-lesson]').forEach(card => {
    card.onclick = () => {
      Audio.click();
      const lessonId = card.dataset.lesson;
      kanjiSession.lesson = lessonId;
      kanjiSession.mode = 'catalog';
      state.kanji = kanjiSession;
      render();
    };
  });
}

/* =========================================================
   B. WIDOK: KATALOG ZNAKÓW
   ========================================================= */
function renderKanjiCatalog() {
  const currentLesson = kanjiSession.lesson || 'all';
  const currentCategory = kanjiSession.filter || 'all';
  const searchQuery = (kanjiSession.search || '').trim().toLowerCase();
  const onlyStarred = !!kanjiSession.onlyStarred;

  let filtered = KANJI_ITEMS;
  if (onlyStarred) {
    filtered = filtered.filter(k => isBookmarked('kanji', k.id));
  }
  if (currentLesson !== 'all') {
    filtered = filtered.filter(k => k.lesson === currentLesson);
  }
  if (currentCategory !== 'all') {
    filtered = filtered.filter(k => k.category === currentCategory);
  }
  if (searchQuery) {
    filtered = filtered.filter(k => {
      return (
        k.kanji.includes(searchQuery) ||
        k.meaning.toLowerCase().includes(searchQuery) ||
        k.onyomi.some(on => on.toLowerCase().includes(searchQuery)) ||
        k.kunyomi.some(kun => kun.toLowerCase().includes(searchQuery)) ||
        (k.examples &&
          k.examples.some(ex => ex.word.includes(searchQuery) || ex.meaning.toLowerCase().includes(searchQuery)))
      );
    });
  }

  const categories = [
    { id: 'all', label: 'Wszystkie kategorie' },
    { id: 'number', label: 'Liczby' },
    { id: 'direction', label: 'Kierunki' },
    { id: 'nature', label: 'Przyroda' },
    { id: 'people', label: 'Ludzie' },
    { id: 'school', label: 'Szkoła' },
    { id: 'time', label: 'Czas' },
    { id: 'place', label: 'Miejsca' },
    { id: 'transport', label: 'Transport' }
  ];

  app.innerHTML = `
    <div class="kanji-catalog-screen animate-fade">
      <div class="kanji-catalog-header">
        <button class="kanji-back-btn" id="btnBackToHub" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Menu Kanji
        </button>
        <div class="kanji-catalog-title-area">
          <h1 class="kanji-catalog-title">Katalog Znaków Kanji</h1>
          <span class="kanji-catalog-counter">Pokazano ${filtered.length} z ${KANJI_ITEMS.length} znaków</span>
        </div>
        <div class="kanji-catalog-quick-actions">
          <button class="kanji-catalog-btn star-filter-btn ${onlyStarred ? 'active' : ''}" id="btnFilterStarredKanji" type="button" title="Pokaż tylko oznaczone gwiazdką">
            ★ Ulubione (${bookmarks.kanji.length})
          </button>
          <button class="kanji-catalog-btn accent" id="btnStartLessonFlashcards" type="button">
            Fiszki (${filtered.length})
          </button>
          <button class="kanji-catalog-btn quiz" id="btnStartLessonQuiz" type="button">
            Quiz
          </button>
        </div>
      </div>

      <div class="kanji-filter-bar">
        <div class="kanji-search-wrap">
          <svg class="kanji-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="search"
            class="kanji-search-input"
            id="kanjiSearchInput"
            placeholder="Szukaj znaku, znaczenia lub czytania (np. 人, człowiek, hito, jin)…"
            value="${escapeHtml(kanjiSession.search || '')}"
          />
        </div>

        <div class="kanji-pills-row">
          <span class="kanji-pills-label">Lekcja:</span>
          <div class="kanji-pills-list">
            ${KANJI_LESSONS.map(
              l => `
              <button
                type="button"
                class="kanji-pill ${l.id === currentLesson ? 'active' : ''}"
                data-filter-lesson="${l.id}"
              >
                ${l.id === 'all' ? 'Wszystkie' : l.id}
              </button>
            `
            ).join('')}
          </div>
        </div>

        <div class="kanji-pills-row">
          <span class="kanji-pills-label">Kategoria:</span>
          <div class="kanji-pills-list">
            ${categories
              .map(
                c => `
              <button
                type="button"
                class="kanji-pill ${c.id === currentCategory ? 'active' : ''}"
                data-filter-cat="${c.id}"
              >
                ${c.label}
              </button>
            `
              )
              .join('')}
          </div>
        </div>
      </div>

      ${
        filtered.length === 0
          ? `
        <div class="kanji-empty-state">
          <div class="kanji-empty-glyph">無</div>
          <h3>Brak wyników wyszukiwania</h3>
          <p>Nie znaleziono znaków odpowiadających wybranym kryteriom filtra.</p>
          <button class="kanji-btn-reset-filter" id="btnResetFilters" type="button">Zresetuj filtry</button>
        </div>
      `
          : `
        <div class="kanji-grid">
          ${filtered
            .map(k => {
              const stat = kanjiStat(k.id);
              return `
              <div class="kanji-card" data-kanji-id="${k.id}">
                <div class="kanji-card-badges">
                  <button type="button" class="kanji-card-star ${isBookmarked('kanji', k.id) ? 'bookmarked' : ''}" data-star-type="kanji" data-star-id="${k.id}" title="Przełącz ulubione" aria-label="Ulubione">★</button>
                  <span class="kanji-card-strokes">${k.strokes} 画</span>
                  <span class="kanji-card-lesson">${k.lesson}</span>
                  <span class="kanji-card-status status-${stat.status}" title="Status: ${stat.status}"></span>
                </div>
                <div class="kanji-card-glyph font-japanese">${k.kanji}</div>
                <div class="kanji-card-meaning">${escapeHtml(k.meaning)}</div>
                <div class="kanji-card-readings">
                  ${k.onyomi.length ? `<span class="kanji-card-on">${escapeHtml(k.onyomi.slice(0, 2).join('・'))}</span>` : ''}
                  ${k.kunyomi.length ? `<span class="kanji-card-kun">${escapeHtml(k.kunyomi.slice(0, 2).join('・'))}</span>` : ''}
                </div>
              </div>
            `;
            })
            .join('')}
        </div>
      `
      }
    </div>
  `;

  document.getElementById('btnBackToHub').onclick = () => {
    Audio.click();
    kanjiSession.mode = 'hub';
    state.kanji = kanjiSession;
    render();
  };

  const btnFilterStarred = document.getElementById('btnFilterStarredKanji');
  if (btnFilterStarred) {
    btnFilterStarred.onclick = () => {
      Audio.click();
      kanjiSession.onlyStarred = !kanjiSession.onlyStarred;
      renderKanjiCatalog();
    };
  }

  const btnStartFlashcards = document.getElementById('btnStartLessonFlashcards');
  if (btnStartFlashcards) {
    btnStartFlashcards.onclick = () => {
      Audio.click();
      startKanjiSession({ mode: 'flashcard', items: filtered });
    };
  }

  const btnStartQuiz = document.getElementById('btnStartLessonQuiz');
  if (btnStartQuiz) {
    btnStartQuiz.onclick = () => {
      Audio.click();
      startKanjiSession({ mode: 'quiz', items: filtered });
    };
  }

  const searchInput = document.getElementById('kanjiSearchInput');
  if (searchInput) {
    searchInput.oninput = () => {
      kanjiSession.search = searchInput.value;
      renderKanjiCatalog();
      const updatedInput = document.getElementById('kanjiSearchInput');
      if (updatedInput) {
        updatedInput.focus();
        updatedInput.setSelectionRange(updatedInput.value.length, updatedInput.value.length);
      }
    };
  }

  app.querySelectorAll('[data-filter-lesson]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      kanjiSession.lesson = btn.dataset.filterLesson;
      renderKanjiCatalog();
    };
  });

  app.querySelectorAll('[data-filter-cat]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      kanjiSession.filter = btn.dataset.filterCat;
      renderKanjiCatalog();
    };
  });

  const resetBtn = document.getElementById('btnResetFilters');
  if (resetBtn) {
    resetBtn.onclick = () => {
      Audio.click();
      kanjiSession.lesson = 'all';
      kanjiSession.filter = 'all';
      kanjiSession.search = '';
      kanjiSession.onlyStarred = false;
      renderKanjiCatalog();
    };
  }

  app.querySelectorAll('[data-kanji-id]').forEach(card => {
    card.onclick = e => {
      if (e.target.closest('[data-star-type]')) return;
      Audio.click();
      kanjiSession.charId = card.dataset.kanjiId;
      kanjiSession.mode = 'detail';
      state.kanji = kanjiSession;
      render();
    };
  });
}

/* =========================================================
   C. WIDOK: KARTA SZCZEGÓŁÓW ZNAKU & ANIMACJA KANJIVG & CANVAS
   ========================================================= */
function renderKanjiDetail() {
  const item = kanjiItem(kanjiSession.charId || 'k001') || KANJI_ITEMS[0];
  const stat = kanjiStat(item.id);

  // Znajdź poprzedni i następny znak w zestawie
  const currentIndex = KANJI_ITEMS.findIndex(k => k.id === item.id);
  const prevItem = currentIndex > 0 ? KANJI_ITEMS[currentIndex - 1] : null;
  const nextItem = currentIndex < KANJI_ITEMS.length - 1 ? KANJI_ITEMS[currentIndex + 1] : null;

  // Dopasuj słówka lekcyjne z KANJI_LESSON_WORDS zawierające ten znak
  const matchingLessonWords = KANJI_LESSON_WORDS.filter(w => w.kanji.includes(item.kanji));

  app.innerHTML = `
    <div class="kanji-detail-screen animate-fade">
      <div class="kanji-detail-nav">
        <button class="kanji-back-btn" id="btnBackToCatalog" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Katalog
        </button>

        <div class="kanji-detail-step-buttons">
          <button class="kanji-detail-star-btn ${isBookmarked('kanji', item.id) ? 'bookmarked' : ''}" id="btnStarKanjiDetail" data-star-type="kanji" data-star-id="${item.id}" type="button" title="Przełącz ulubione">
            ★ ${isBookmarked('kanji', item.id) ? 'W ulubionych' : 'Dodaj do ulubionych'}
          </button>
          <button class="kanji-step-nav-btn" id="btnPrevKanji" type="button" ${!prevItem ? 'disabled' : ''}>
            ← ${prevItem ? prevItem.kanji : ''}
          </button>
          <span class="kanji-detail-pos">${currentIndex + 1} / ${KANJI_ITEMS.length}</span>
          <button class="kanji-step-nav-btn" id="btnNextKanji" type="button" ${!nextItem ? 'disabled' : ''}>
            ${nextItem ? nextItem.kanji : ''} →
          </button>
        </div>
      </div>

      <div class="kanji-detail-layout">
        <!-- Lewa kolumna: Scena animacji KanjiVG i płótno Canvas -->
        <div class="kanji-stage-col">
          <div class="kanji-stage-card">
            <div class="kanji-svg-container" id="kanjiSvgStage">
              <!-- mountKana i mountDrawing wstrzykują tutaj SVG i Canvas -->
            </div>

            <div class="kanji-stage-controls">
              <button class="kanji-ctrl-btn" id="btnKanjiPlay" type="button" title="Odtwórz animację">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Odtwórz
              </button>
              <button class="kanji-ctrl-btn" id="btnKanjiStep" type="button" title="Kolejna kreska">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <polygon points="5 4 15 12 5 20 5 4"/>
                  <line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2.5"/>
                </svg>
                Krok
              </button>
              <button class="kanji-ctrl-btn" id="btnKanjiReset" type="button" title="Wszystkie kreski">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M1 4v6h6M23 20v-6h-6"/>
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
                </svg>
                Wszystko
              </button>
              <button class="kanji-ctrl-btn ${kanjiSession.drawingEnabled ? 'active' : ''}" id="btnToggleDrawing" type="button">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
                  <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                  <path d="M2 2l7.586 7.586"/>
                  <circle cx="11" cy="11" r="2"/>
                </svg>
                ${kanjiSession.drawingEnabled ? 'Schowaj rysowanie' : 'Rysuj'}
              </button>
            </div>

            <div class="kanji-drawing-panel ${kanjiSession.drawingEnabled ? 'is-visible' : 'is-hidden'}" id="kanjiDrawingBar">
              <div class="kanji-drawing-actions">
                <button class="kanji-draw-action-btn ${kanjiSession.drawingBlind ? 'active' : ''}" id="btnToggleBlind" type="button" title="Przełącz widoczność wzoru znaku">
                  ${icon(kanjiSession.drawingBlind ? 'eye-off' : 'eye')} ${kanjiSession.drawingBlind ? 'Ślepy szkic (ukryj wzór)' : 'Wzór widoczny'}
                </button>
                <button class="kanji-draw-action-btn" id="btnDrawClear" type="button">Wyczyść</button>
                <button class="kanji-draw-action-btn primary" id="btnDrawCheck" type="button">Sprawdź rysunek</button>
              </div>
              <div class="kanji-draw-feedback" id="kanjiDrawFeedback"></div>
            </div>
          </div>
        </div>

        <!-- Prawa kolumna: Informacje o znaku, czytania i przykłady -->
        <div class="kanji-info-col">
          <div class="kanji-info-card">
            <div class="kanji-info-header">
              <div class="kanji-info-badges">
                <span class="kanji-badge-pill">${item.lesson}</span>
                <span class="kanji-badge-pill strokes">${item.strokes} kresek (画)</span>
                <span class="kanji-badge-pill category">${categoryLabel(item.category)}</span>
                <span class="kanji-badge-pill status status-${stat.status}">${stat.status.toUpperCase()}</span>
              </div>
              <h2 class="kanji-info-meaning">${escapeHtml(item.meaning)}</h2>
            </div>

            <div class="kanji-readings-section">
              <h3 class="kanji-section-heading">Czytania</h3>
              <div class="kanji-readings-grid">
                <div class="kanji-reading-box onyomi">
                  <span class="kanji-reading-label">On'yomi (音読み)</span>
                  <div class="kanji-reading-values">
                    ${item.onyomi.length ? item.onyomi.map(on => `<button class="kanji-reading-tag on btn-speak-reading" data-speak="${escapeHtml(on)}" type="button" title="Odsłuchaj ${escapeHtml(on)}">${escapeHtml(on)} <span class="speak-tag-icon">${icon('volume')}</span></button>`).join('') : '<span class="kanji-reading-none">—</span>'}
                  </div>
                </div>

                <div class="kanji-reading-box kunyomi">
                  <span class="kanji-reading-label">Kun'yomi (訓読み)</span>
                  <div class="kanji-reading-values">
                    ${item.kunyomi.length ? item.kunyomi.map(kun => `<button class="kanji-reading-tag kun btn-speak-reading" data-speak="${escapeHtml(kun.replace(/\./g, ''))}" type="button" title="Odsłuchaj ${escapeHtml(kun)}">${escapeHtml(kun)} <span class="speak-tag-icon">${icon('volume')}</span></button>`).join('') : '<span class="kanji-reading-none">—</span>'}
                  </div>
                </div>
              </div>
            </div>

            ${
              item.examples && item.examples.length
                ? `
              <div class="kanji-examples-section">
                <h3 class="kanji-section-heading">Złożenia i słownictwo (Jukugo)</h3>
                <div class="kanji-examples-list">
                  ${item.examples
                    .map(
                      ex => `
                    <div class="kanji-example-item">
                      <div class="kanji-example-word font-japanese">${escapeHtml(ex.word)}</div>
                      <div class="kanji-example-reading">${escapeHtml(ex.reading)}</div>
                      <div class="kanji-example-meaning">${escapeHtml(ex.meaning)}</div>
                      <button class="btn-speak btn-speak-sm" data-speak="${escapeHtml(ex.reading || ex.word)}" type="button" title="Odsłuchaj ${escapeHtml(ex.reading || ex.word)}" aria-label="Odsłuchaj ${escapeHtml(ex.reading || ex.word)}">
                        ${icon('volume')}
                      </button>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `
                : ''
            }

            ${
              matchingLessonWords.length
                ? `
              <div class="kanji-lesson-words-section">
                <h3 class="kanji-section-heading">Słówka z podręcznika Shokyū Nihongo</h3>
                <div class="kanji-lesson-words-list">
                  ${matchingLessonWords
                    .map(
                      w => `
                    <div class="kanji-lesson-word-item">
                      <span class="kanji-lesson-word-badge">${w.lesson}</span>
                      <span class="kanji-lesson-word-kanji font-japanese">${escapeHtml(w.kanji)}</span>
                      <span class="kanji-lesson-word-kana">${escapeHtml(w.kana)}</span>
                      <span class="kanji-lesson-word-gloss">${escapeHtml(w.meaning)}</span>
                      <button class="btn-speak btn-speak-sm" data-speak="${escapeHtml(w.kana)}" type="button" title="Odsłuchaj ${escapeHtml(w.kana)}" aria-label="Odsłuchaj ${escapeHtml(w.kana)}">
                        ${icon('volume')}
                      </button>
                    </div>
                  `
                    )
                    .join('')}
                </div>
              </div>
            `
                : ''
            }

            <div class="kanji-info-actions">
              <button class="kanji-action-btn accent" id="btnPracticeThisCard" type="button">
                Ćwicz ten znak w fiszkach →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnBackToCatalog').onclick = () => {
    Audio.click();
    kanjiSession.mode = 'catalog';
    state.kanji = kanjiSession;
    render();
  };

  const prevBtn = document.getElementById('btnPrevKanji');
  if (prevBtn && prevItem) {
    prevBtn.onclick = () => {
      Audio.click();
      kanjiSession.charId = prevItem.id;
      renderKanjiDetail();
    };
  }

  const nextBtn = document.getElementById('btnNextKanji');
  if (nextBtn && nextItem) {
    nextBtn.onclick = () => {
      Audio.click();
      kanjiSession.charId = nextItem.id;
      renderKanjiDetail();
    };
  }

  document.getElementById('btnPracticeThisCard').onclick = () => {
    Audio.click();
    startKanjiSession({ mode: 'flashcard', lesson: item.lesson });
  };

  // Okablowanie animacji kresek KanjiVG i Canvasu
  const stage = document.getElementById('kanjiSvgStage');
  const drawFeedback = document.getElementById('kanjiDrawFeedback');
  const drawing = mountDrawing(stage);
  drawing.setEnabled(kanjiSession.drawingEnabled);
  drawing.onChange = () => {
    drawFeedback.textContent = kanjiSession.drawingBlind ? 'Rysuj znak z pamięci bez podglądu kresek.' : '';
    drawFeedback.className = 'kanji-draw-feedback';
  };

  let player = null;
  let referencePaths = null;

  mountKana(stage, item.kanji, {
    autoplay: false,
    overlay: drawing.canvas
  }).then(p => {
    player = p;
    if (player) {
      referencePaths = player.paths;
      player.showAll();
    }
  });

  document.getElementById('btnKanjiPlay').onclick = () => {
    Audio.click();
    if (player) player.play();
  };

  document.getElementById('btnKanjiStep').onclick = () => {
    Audio.click();
    if (player) player.step();
  };

  document.getElementById('btnKanjiReset').onclick = () => {
    Audio.click();
    if (player) player.showAll();
  };

  const toggleDrawingBtn = document.getElementById('btnToggleDrawing');
  const drawingBar = document.getElementById('kanjiDrawingBar');
  toggleDrawingBtn.onclick = () => {
    Audio.click();
    kanjiSession.drawingEnabled = !kanjiSession.drawingEnabled;
    drawing.setEnabled(kanjiSession.drawingEnabled);
    toggleDrawingBtn.classList.toggle('active', kanjiSession.drawingEnabled);
    toggleDrawingBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
      ${kanjiSession.drawingEnabled ? 'Schowaj rysowanie' : 'Rysuj'}
    `;
    drawingBar.classList.toggle('is-visible', kanjiSession.drawingEnabled);
    drawingBar.classList.toggle('is-hidden', !kanjiSession.drawingEnabled);
  };

  stage.classList.toggle('is-blind', !!kanjiSession.drawingBlind);
  stage.classList.remove('revealed');

  const toggleBlindBtn = document.getElementById('btnToggleBlind');
  if (toggleBlindBtn) {
    toggleBlindBtn.onclick = () => {
      Audio.click();
      kanjiSession.drawingBlind = !kanjiSession.drawingBlind;
      stage.classList.toggle('is-blind', !!kanjiSession.drawingBlind);
      stage.classList.remove('revealed');
      toggleBlindBtn.classList.toggle('active', kanjiSession.drawingBlind);
      toggleBlindBtn.innerHTML = `${icon(kanjiSession.drawingBlind ? 'eye-off' : 'eye')} ${kanjiSession.drawingBlind ? 'Ślepy szkic (ukryj wzór)' : 'Wzór widoczny'}`;
      drawFeedback.textContent = kanjiSession.drawingBlind ? 'Rysuj znak z pamięci bez podglądu kresek.' : '';
      drawFeedback.className = 'kanji-draw-feedback';
    };
  }

  document.getElementById('btnDrawClear').onclick = () => {
    Audio.click();
    drawing.clear();
    stage.classList.remove('revealed');
    drawFeedback.textContent = kanjiSession.drawingBlind ? 'Rysuj znak z pamięci bez podglądu kresek.' : '';
    drawFeedback.className = 'kanji-draw-feedback';
  };

  document.getElementById('btnDrawCheck').onclick = () => {
    Audio.click();
    if (kanjiSession.drawingBlind) {
      stage.classList.add('revealed');
      if (player) player.showAll();
    }

    if (!referencePaths || !stage.querySelector('svg')) return;

    const reference = referenceOnCanvas(stage.querySelector('svg'), drawing.canvas, referencePaths, DRAW_SAMPLES);
    const result = scoreDrawing(
      drawing.strokes.map(stroke => resample(stroke, DRAW_SAMPLES)),
      reference,
      stage.clientWidth
    );

    const verdict = drawVerdict(result);
    const accuracy = Math.round(result.score * 100);
    drawFeedback.textContent = `${verdict} (Zgodność: ${accuracy}%, Kreski: ${drawing.strokes.length}/${referencePaths.length})`;
    drawFeedback.className = `kanji-draw-feedback ${result.passed ? 'passed' : 'failed'}`;

    achievements.drawingsCount = (achievements.drawingsCount || 0) + 1;
    saveAchievements();
    checkAchievements();

    if (result.passed) {
      Audio.correct();
      recordKanjiAnswer(item.id, true);
    } else {
      Audio.wrong();
    }
  };
}

/* =========================================================
   D. WIDOK: FISZKI KANJI (SRS)
   ========================================================= */
function renderKanjiFlashcard() {
  const s = kanjiSession;
  if (!s || s.finished || s.index >= s.items.length) {
    renderKanjiSessionSummary('flashcard');
    return;
  }

  const current = s.items[s.index];
  const progressPct = Math.round(((s.index + 1) / s.items.length) * 100);

  app.innerHTML = `
    <div class="kanji-session-screen animate-fade">
      <div class="kanji-session-header">
        <button class="kanji-exit-btn" id="btnExitSession" type="button">
          ✕ Przerwij
        </button>
        <div class="kanji-session-progress-area">
          <span class="kanji-session-count">Karta ${s.index + 1} z ${s.items.length}</span>
          <div class="kanji-session-bar-wrap">
            <div class="kanji-session-bar" style="width: ${progressPct}%"></div>
          </div>
        </div>
        <span class="kanji-session-lesson-badge">${current.lesson}</span>
      </div>

      <div class="kanji-flashcard-wrap">
        <div class="kanji-flashcard ${s.showBack ? 'is-flipped' : ''}" id="kanjiCard">
          ${
            !s.showBack
              ? `
            <!-- Awers -->
            <div class="kanji-card-front">
              <span class="kanji-card-strokes-hint">${current.strokes} kresek</span>
              <div class="kanji-card-front-glyph font-japanese">${current.kanji}</div>
              <p class="kanji-card-front-prompt">Jakie jest znaczenie i czytanie tego znaku?</p>
              <button class="kanji-flip-btn" id="btnFlipCard" type="button">
                Pokaż odpowiedź (kliknij kartę lub Spacja)
              </button>
            </div>
          `
              : `
            <!-- Rewers -->
            <div class="kanji-card-back">
              <div class="kanji-card-back-header">
                <span class="kanji-card-back-glyph font-japanese">${current.kanji}</span>
                <div class="kanji-card-back-title">
                  <div style="display:flex;align-items:center;gap:8px">
                    <h2 class="kanji-card-back-meaning" style="margin:0">${escapeHtml(current.meaning)}</h2>
                    <button class="btn-speak" data-speak="${escapeHtml(current.kunyomi[0]?.replace(/\./g, '') || current.onyomi[0] || current.kanji)}" type="button" title="Odsłuchaj czytanie" aria-label="Odsłuchaj czytanie">
                      ${icon('volume')}
                    </button>
                  </div>
                  <span class="kanji-card-back-strokes">${current.strokes} kresek · ${categoryLabel(current.category)}</span>
                </div>
              </div>

              <div class="kanji-card-back-readings">
                <div class="kanji-reading-item">
                  <span class="lbl">On'yomi:</span>
                  <span class="val on">${current.onyomi.length ? escapeHtml(current.onyomi.join(', ')) : '—'}</span>
                </div>
                <div class="kanji-reading-item">
                  <span class="lbl">Kun'yomi:</span>
                  <span class="val kun">${current.kunyomi.length ? escapeHtml(current.kunyomi.join(', ')) : '—'}</span>
                </div>
              </div>

              ${
                current.examples && current.examples.length
                  ? `
                <div class="kanji-card-back-examples">
                  <span class="lbl">Przykłady:</span>
                  <div class="kanji-back-example-tags">
                    ${current.examples
                      .slice(0, 3)
                      .map(
                        ex => `
                      <span class="kanji-back-tag">
                        <strong>${escapeHtml(ex.word)}</strong> (${escapeHtml(ex.reading)}) — ${escapeHtml(ex.meaning)}
                        <button class="btn-speak-inline" data-speak="${escapeHtml(ex.reading || ex.word)}" type="button" title="Odsłuchaj" aria-label="Odsłuchaj ${escapeHtml(ex.reading || ex.word)}">
                          ${icon('volume')}
                        </button>
                      </span>
                    `
                      )
                      .join('')}
                  </div>
                </div>
              `
                  : ''
              }

              <div class="kanji-srs-rating-bar">
                <span class="kanji-srs-label">Oceń swoją odpowiedź:</span>
                <div class="kanji-srs-buttons">
                  <button class="kanji-srs-btn srs-again" data-srs="again" type="button">
                    <span class="srs-key">[1]</span> Powtórz
                  </button>
                  <button class="kanji-srs-btn srs-hard" data-srs="hard" type="button">
                    <span class="srs-key">[2]</span> Trudne
                  </button>
                  <button class="kanji-srs-btn srs-good" data-srs="good" type="button">
                    <span class="srs-key">[3]</span> Dobre
                  </button>
                  <button class="kanji-srs-btn srs-easy" data-srs="easy" type="button">
                    <span class="srs-key">[4]</span> Łatwe
                  </button>
                </div>
              </div>
            </div>
          `
          }
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnExitSession').onclick = () => {
    if (confirmKanjiExit()) {
      Audio.click();
      kanjiSession.mode = 'hub';
      state.kanji = kanjiSession;
      render();
    }
  };

  const card = document.getElementById('kanjiCard');
  if (card && !s.showBack) {
    card.onclick = () => {
      Audio.click();
      s.showBack = true;
      renderKanjiFlashcard();
    };
  }

  const flipBtn = document.getElementById('btnFlipCard');
  if (flipBtn) {
    flipBtn.onclick = e => {
      e.stopPropagation();
      Audio.click();
      s.showBack = true;
      renderKanjiFlashcard();
    };
  }

  app.querySelectorAll('[data-srs]').forEach(btn => {
    btn.onclick = () => {
      const rating = btn.dataset.srs;
      const isCorrect = rating !== 'again';
      if (isCorrect) Audio.correct();
      else Audio.wrong();

      recordKanjiAnswer(current.id, isCorrect);
      s.answers.push({ item: current, rating, isCorrect });
      if (isCorrect) s.score++;

      s.index++;
      s.showBack = false;

      if (s.index >= s.items.length) {
        s.finished = true;
      }
      renderKanjiFlashcard();
    };
  });
}

/* =========================================================
   E. WIDOK: QUIZ KANJI (4 OPCJE)
   ========================================================= */
function renderKanjiQuiz() {
  const s = kanjiSession;
  if (!s || s.finished || s.index >= s.items.length) {
    renderKanjiSessionSummary('quiz');
    return;
  }

  const current = s.items[s.index];
  const progressPct = Math.round(((s.index + 1) / s.items.length) * 100);

  app.innerHTML = `
    <div class="kanji-session-screen animate-fade">
      <div class="kanji-session-header">
        <button class="kanji-exit-btn" id="btnExitQuiz" type="button">
          ✕ Przerwij
        </button>
        <div class="kanji-session-progress-area">
          <span class="kanji-session-count">Pytanie ${s.index + 1} z ${s.items.length}</span>
          <div class="kanji-session-bar-wrap">
            <div class="kanji-session-bar" style="width: ${progressPct}%"></div>
          </div>
        </div>
        <span class="kanji-session-score-pill">Wynik: ${s.score}/${s.index}</span>
      </div>

      <div class="kanji-quiz-card">
        <div class="kanji-quiz-prompt">
          ${
            s.questionType === 'kanjiToMeaning'
              ? `
            <span class="kanji-quiz-eyebrow">Wybierz poprawne znaczenie znaku:</span>
            <div class="kanji-quiz-glyph font-japanese">${current.kanji}</div>
            <span class="kanji-quiz-subprompt">${current.strokes} kresek</span>
          `
              : `
            <span class="kanji-quiz-eyebrow">Który znak Kanji odpowiada znaczeniu:</span>
            <div class="kanji-quiz-meaning-prompt">${escapeHtml(current.meaning)}</div>
            <span class="kanji-quiz-subprompt">Lekcja: ${current.lesson}</span>
          `
          }
        </div>

        <div class="kanji-quiz-options">
          ${s.options
            .map((opt, i) => {
              let stateClass = '';
              if (s.submitted) {
                if (opt.isCorrect) stateClass = 'is-correct';
                else if (s.selected === i) stateClass = 'is-wrong';
              }
              return `
              <button
                class="kanji-quiz-option-btn ${stateClass}"
                data-option-idx="${i}"
                type="button"
                ${s.submitted ? 'disabled' : ''}
              >
                <span class="kanji-quiz-option-key">[${i + 1}]</span>
                ${
                  s.questionType === 'kanjiToMeaning'
                    ? `
                  <div class="kanji-quiz-option-content">
                    <span class="kanji-quiz-option-main">${escapeHtml(opt.meaning)}</span>
                    <span class="kanji-quiz-option-sub">${opt.onyomi ? escapeHtml(opt.onyomi) : ''} ${opt.kunyomi ? escapeHtml(opt.kunyomi) : ''}</span>
                  </div>
                `
                    : `
                  <div class="kanji-quiz-option-content">
                    <span class="kanji-quiz-option-glyph font-japanese">${opt.kanji}</span>
                    <span class="kanji-quiz-option-sub">${opt.onyomi ? escapeHtml(opt.onyomi) : ''}</span>
                  </div>
                `
                }
              </button>
            `;
            })
            .join('')}
        </div>

        ${
          s.submitted
            ? `
          <div class="kanji-quiz-advance-bar">
            <button class="kanji-action-btn accent" id="btnNextQuizQuestion" type="button">
              ${s.index + 1 >= s.items.length ? 'Zobacz podsumowanie →' : 'Następne pytanie →'}
            </button>
          </div>
        `
            : ''
        }
      </div>
    </div>
  `;

  document.getElementById('btnExitQuiz').onclick = () => {
    if (confirmKanjiExit()) {
      Audio.click();
      kanjiSession.mode = 'hub';
      state.kanji = kanjiSession;
      render();
    }
  };

  app.querySelectorAll('[data-option-idx]').forEach(btn => {
    btn.onclick = () => {
      if (s.submitted) return;
      const idx = parseInt(btn.dataset.optionIdx, 10);
      s.selected = idx;
      s.submitted = true;

      const chosen = s.options[idx];
      const isCorrect = chosen.isCorrect;

      if (isCorrect) {
        Audio.correct();
        s.score++;
      } else {
        Audio.wrong();
      }

      recordKanjiAnswer(current.id, isCorrect);
      s.answers.push({ item: current, isCorrect, chosen });

      renderKanjiQuiz();
    };
  });

  const nextBtn = document.getElementById('btnNextQuizQuestion');
  if (nextBtn) {
    nextBtn.onclick = () => {
      Audio.click();
      s.index++;
      if (s.index >= s.items.length) {
        s.finished = true;
      } else {
        setupKanjiQuizQuestion();
      }
      renderKanjiQuiz();
    };
  }
}

/* =========================================================
   F. WIDOK: PODSUMOWANIE SESJI KANJI
   ========================================================= */
function renderKanjiSessionSummary(mode) {
  const s = kanjiSession;
  const total = s.items.length;
  const correct = s.score;
  const pct = total ? Math.round((correct / total) * 100) : 0;

  app.innerHTML = `
    <div class="kanji-summary-screen animate-fade">
      <div class="kanji-summary-card">
        <div class="kanji-summary-trophy">${pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
        <h1 class="kanji-summary-title">
          ${pct >= 80 ? 'Świetny wynik!' : pct >= 50 ? 'Dobra robota!' : 'Warto powtórzyć!'}
        </h1>
        <p class="kanji-summary-desc">
          Ukończono sesję ${mode === 'flashcard' ? 'Fiszek Kanji' : 'Quizu Kanji'}.
        </p>

        <div class="kanji-summary-score-box">
          <div class="kanji-summary-score-num">${correct} / ${total}</div>
          <div class="kanji-summary-score-pct">${pct}% poprawnych odpowiedzi</div>
        </div>

        <div class="kanji-summary-items-list">
          <h3 class="kanji-summary-items-heading">Szczegóły odpowiedzi:</h3>
          ${s.answers
            .map(
              a => `
            <div class="kanji-summary-item ${a.isCorrect ? 'is-correct' : 'is-wrong'}">
              <span class="kanji-summary-item-glyph font-japanese">${a.item.kanji}</span>
              <div class="kanji-summary-item-info">
                <span class="kanji-summary-item-meaning">${escapeHtml(a.item.meaning)}</span>
                <span class="kanji-summary-item-reading">${a.item.onyomi.join(', ')} / ${a.item.kunyomi.join(', ')}</span>
              </div>
              <span class="kanji-summary-item-badge">${a.isCorrect ? '✓' : '✗'}</span>
            </div>
          `
            )
            .join('')}
        </div>

        <div class="kanji-summary-actions">
          <button class="kanji-action-btn accent" id="btnRestartSession" type="button">
            Powtórz sesję
          </button>
          <button class="kanji-action-btn" id="btnSummaryBackToHub" type="button">
            Wróć do menu Kanji
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnRestartSession').onclick = () => {
    Audio.click();
    startKanjiSession({ mode, lesson: s.lesson });
  };

  document.getElementById('btnSummaryBackToHub').onclick = () => {
    Audio.click();
    kanjiSession.mode = 'hub';
    state.kanji = kanjiSession;
    render();
  };
}

/* =========================================================
   T20 — MODUŁ GRAMATYKI (JAPANESE GRAMMAR & PARTICLES)
   ========================================================= */

const GRAMMAR_KEY = 'hiragana-grammar';
const GRAMMAR_VERSION = 1;

// prettier-ignore
const GRAMMAR_ITEMS = [
  {
    id: 'wa',
    kana: 'は',
    romaji: 'wa',
    label: 'Temat zdania (Topic)',
    pattern: '[Rzeczownik] は [Opis / Cecha] です',
    description: 'Wskazuje temat wypowiedzi („jeśli chodzi o...”, „co do...”). Wymawiana jako „wa”, lecz zapisywana znakiem hiragany は (ha). Oddziela to, o czym mówimy, od reszty orzeczenia.',
    notes: 'Uwaga na wymowę i pisownię: czytamy „wa”, ale piszemy „は”. Częsty dylemat は vs が: は skupia uwagę na tym, co następuje PO partykule (orzeczeniu), natomiast が kładzie nacisk na podmiot PRZED nią.',
    examples: [
      { japanese: 'わたしは がくせいです。', romaji: 'Watashi wa gakusei desu.', polish: 'Ja jestem studentem/uczniem.' },
      { japanese: 'これは にほんごの ほんです。', romaji: 'Kore wa nihongo no hon desu.', polish: 'To jest książka do japońskiego.' },
      { japanese: 'たなかさんは せんせいです。', romaji: 'Tanaka-san wa sensei desu.', polish: 'Pan Tanaka jest nauczycielem.' }
    ],
    questions: [
      {
        sentence: 'わたし [?] がくせいです。',
        full: 'わたしは がくせいです。',
        polish: 'Ja jestem studentem/uczniem.',
        answer: 'は',
        distractors: ['が', 'を', 'に'],
        explanation: 'Partykuła は (wa) wskazuje temat zdania: „O mnie mowa – jestem studentem”.'
      },
      {
        sentence: 'これ [?] ほんです。',
        full: 'これは ほんです。',
        polish: 'To jest książka.',
        answer: 'は',
        distractors: ['も', 'で', 'へ'],
        explanation: 'Partykuła は (wa) definiuje temat wypowiedzi: „Jeśli chodzi o to – to jest książka”.'
      },
      {
        sentence: 'たなかさん [?] せんせいです。',
        full: 'たなかさんは せんせいです。',
        polish: 'Pan Tanaka jest nauczycielem.',
        answer: 'は',
        distractors: ['を', 'に', 'と'],
        explanation: 'Partykuła は (wa) oznacza temat: „Pan Tanaka jest nauczycielem”.'
      }
    ]
  },
  {
    id: 'ka',
    kana: 'か',
    romaji: 'ka',
    label: 'Pytanie (Question marker)',
    pattern: '[Zdanie twierdzące] + か',
    description: 'Stawiana na samym końcu zdania przekształca je w pytanie. W języku japońskim pełni rolę znaku zapytania w stylu uprzejmym (zastępuje lub uzupełnia znak „?”).',
    notes: 'W stylu formalnym (z desu / masu) nie zmienia się szyk wyrazów w zdaniu – wystarczy dodać „か” na końcu.',
    examples: [
      { japanese: 'それは くるまですか。', romaji: 'Sore wa kuruma desu ka.', polish: 'Czy to jest samochód?' },
      { japanese: 'おげんきですか。', romaji: 'O-genki desu ka.', polish: 'Jak się masz? (Czy czujesz się dobrze?)' },
      { japanese: 'いま なんじですか。', romaji: 'Ima nanji desu ka.', polish: 'Która jest teraz godzina?' }
    ],
    questions: [
      {
        sentence: 'それは くるまです [?]。',
        full: 'それは くるまですか。',
        polish: 'Czy to jest samochód?',
        answer: 'か',
        distractors: ['は', 'ね', 'よ'],
        explanation: 'Partykuła か na końcu zdania tworzy pytanie: „Czy to jest samochód?”.'
      },
      {
        sentence: 'おげんきです [?]。',
        full: 'おげんきですか。',
        polish: 'Jak się masz? (Czy u Ciebie wszystko dobrze?)',
        answer: 'か',
        distractors: ['の', 'も', 'を'],
        explanation: 'Końcówka か zamienia uprzejme stwierdzenie w pytanie o samopoczucie.'
      },
      {
        sentence: 'いま なんじです [?]。',
        full: 'いま なんじですか。',
        polish: 'Która jest teraz godzina?',
        answer: 'か',
        distractors: ['が', 'に', 'と'],
        explanation: 'Pytania szczegółowe ze słówkami pytającymi (nanji - która godzina) również kończymy partykułą か.'
      }
    ]
  },
  {
    id: 'no',
    kana: 'の',
    romaji: 'no',
    label: 'Przynależność i modyfikator (Possessive)',
    pattern: '[Rzeczownik A] の [Rzeczownik B]',
    description: 'Łączy dwa rzeczowniki. Najczęściej wyraża przynależność (odpowiednik dopełniacza: czyj? czego?), ale także pochodzenie, materiał lub rodzaj (np. „książka do japońskiego”).',
    notes: 'Szyk jest odwrotny niż po polsku: najpierw właściciel/określenie, potem の, a na końcu rzeczownik określany (np. watashi no kaban = moja torba).',
    examples: [
      { japanese: 'これは わたしの かばんです。', romaji: 'Kore wa watashi no kaban desu.', polish: 'To jest moja torba.' },
      { japanese: 'にほんごの ほん。', romaji: 'Nihongo no hon.', polish: 'Książka do języka japońskiego.' },
      { japanese: 'とうきょうの だいがく。', romaji: 'Toukyou no daigaku.', polish: 'Uniwersytet w Tokio.' }
    ],
    questions: [
      {
        sentence: 'これは わたし [?] かばんです。',
        full: 'これは わたしの かばんです。',
        polish: 'To jest moja torba.',
        answer: 'の',
        distractors: ['は', 'を', 'に'],
        explanation: 'Partykuła の wyraża przynależność: わたし の かばん = moja torba (torba należąca do mnie).'
      },
      {
        sentence: 'にほんご [?] ほんを よみます。',
        full: 'にほんごの ほんを よみます。',
        polish: 'Czytam książkę do japońskiego.',
        answer: 'の',
        distractors: ['と', 'で', 'も'],
        explanation: 'の łączy rzeczowniki: にほんご の ほん = książka do japońskiego.'
      },
      {
        sentence: 'だれ [?] かさですか。',
        full: 'だれの かさですか。',
        polish: 'Czyj to jest parasol?',
        answer: 'の',
        distractors: ['か', 'は', 'が'],
        explanation: 'だれ の = czyj / czyja / czyje. だれの かさ = czyj parasol.'
      }
    ]
  },
  {
    id: 'mo',
    kana: 'も',
    romaji: 'mo',
    label: 'Włączenie (Also / Too)',
    pattern: '[Rzeczownik] も [Cecha / Czasownik]',
    description: 'Odpowiednik polskiego „też”, „również”, „także”. Zastępuje partykuły は (wa) oraz を (o) po dodaniu nowego elementu spełniającego ten sam warunek.',
    notes: 'Nigdy nie łączymy „は も” ani „を も” – partykuła も całkowicie je zastępuje.',
    examples: [
      { japanese: 'わたしも がくせいです。', romaji: 'Watashi mo gakusei desu.', polish: 'Ja też jestem studentem.' },
      { japanese: 'これも 100えんです。', romaji: 'Kore mo hyakuen desu.', polish: 'To też kosztuje 100 jenów.' },
      { japanese: 'すずきさんも きました。', romaji: 'Suzuki-san mo kimashita.', polish: 'Pan Suzuki też przyszedł.' }
    ],
    questions: [
      {
        sentence: 'たなかさんは がくせいです。わたし [?] がくせいです。',
        full: 'たなかさんは がくせいです。わたしも がくせいです。',
        polish: 'Pan Tanaka jest studentem. Ja też jestem studentem.',
        answer: 'も',
        distractors: ['は', 'の', 'を'],
        explanation: 'も oznacza „również/też”: skoro pan Tanaka jest studentem, ja TEŻ nim jestem.'
      },
      {
        sentence: 'これは 100えんです。それ [?] 100えんです。',
        full: 'これは 100えんです。それも 100えんです。',
        polish: 'To kosztuje 100 jenów. Tamto też kosztuje 100 jenów.',
        answer: 'も',
        distractors: ['が', 'で', 'に'],
        explanation: 'Partykuła も zastępuje は i wskazuje, że druga rzecz również kosztuje 100 jenów.'
      },
      {
        sentence: 'おちゃを のみます。みず [?] のみます。',
        full: 'おちゃを のみます。みずも のみます。',
        polish: 'Piję herbatę. Wodę też piję.',
        answer: 'も',
        distractors: ['を', 'へ', 'と'],
        explanation: 'Piję herbatę, a wodę TEŻ piję – partykuła も zastępuje partykułę biernika を.'
      }
    ]
  },
  {
    id: 'o',
    kana: 'を',
    romaji: 'o',
    label: 'Dopełnienie bliższe (Direct Object)',
    pattern: '[Rzeczownik] を [Czasownik przechodni]',
    description: 'Wskazuje bezpośredni obiekt czynności (kogo? co? – biernik). Wymawiana jako „o”, lecz zapisywana wyłącznie specjalnym znakiem hiragany を (wo).',
    notes: 'Znak を służy we współczesnym japońskim niemal wyłącznie jako ta jedna partykuła gramatyczna.',
    examples: [
      { japanese: 'みずを のみます。', romaji: 'Mizu o nomimasu.', polish: 'Piję wodę.' },
      { japanese: 'ほんを よみます。', romaji: 'Hon o yomimasu.', polish: 'Czytam książkę.' },
      { japanese: 'あさごはんを たべます。', romaji: 'Asagohan o tabemasu.', polish: 'Jem śniadanie.' }
    ],
    questions: [
      {
        sentence: 'みず [?] のみます。',
        full: 'みずを のみます。',
        polish: 'Piję wodę.',
        answer: 'を',
        distractors: ['は', 'が', 'で'],
        explanation: 'Partykuła を (pisana を, wymawiana o) łączy dopełnienie z czynnością: pić (co?) wodę.'
      },
      {
        sentence: 'ほん [?] よみます。',
        full: 'ほんを よみます。',
        polish: 'Czytam książkę.',
        answer: 'を',
        distractors: ['に', 'へ', 'と'],
        explanation: 'Biernik (kogo? co?): czytać książkę -> ほん を よみます.'
      },
      {
        sentence: 'テレビ [?] みます。',
        full: 'テレビを みます。',
        polish: 'Oglądam telewizję.',
        answer: 'を',
        distractors: ['で', 'の', 'も'],
        explanation: 'Oglądać (co?) telewizję -> テレビ を みます.'
      }
    ]
  },
  {
    id: 'ni',
    kana: 'に',
    romaji: 'ni',
    label: 'Czas, cel i miejsce istnienia (Target / Time)',
    pattern: '[Czas] に [Czynność] / [Miejsce] に [います/あります/いきます]',
    description: 'Wskazuje konkretny punkt w czasie (np. o 7:00), cel/kierunek przemieszczania się (do szkoły) lub statyczne miejsce pobytu/istnienia (w pokoju).',
    notes: 'Partykuły に używamy przy konkretnych godzinach i dniach tygodnia (7じに, げつようびに), ale NIE używamy przy określeniach względnych (np. kyou - dzisiaj, ashita - jutro).',
    examples: [
      { japanese: '7じに おきます。', romaji: 'Shichiji ni okimasu.', polish: 'Wstaję o siódmej.' },
      { japanese: 'がっこうに いきます。', romaji: 'Gakkou ni ikimasu.', polish: 'Idę do szkoły.' },
      { japanese: 'へやに ねこが います。', romaji: 'Heya ni neko ga imasu.', polish: 'W pokoju jest kot.' }
    ],
    questions: [
      {
        sentence: '7じ [?] おきます。',
        full: '7じに おきます。',
        polish: 'Wstaję o siódmej.',
        answer: 'に',
        distractors: ['で', 'を', 'は'],
        explanation: 'Partykuła に oznacza konkretny punkt w czasie: o której godzinie -> 7じ に (o 7:00).'
      },
      {
        sentence: 'がっこう [?] いきます。',
        full: 'がっこうに いきます。',
        polish: 'Idę do szkoły.',
        answer: 'に',
        distractors: ['で', 'を', 'の'],
        explanation: 'Partykuła に wskazuje cel ruchu z czasownikami ikimasu/kimasu: iść (dokąd?) do szkoły.'
      },
      {
        sentence: 'きょうしつ [?] せんせいが います。',
        full: 'きょうしつに せんせいが います。',
        polish: 'W klasie jest nauczyciel.',
        answer: 'に',
        distractors: ['で', 'へ', 'と'],
        explanation: 'Z czasownikiem istnienia (imasu/arimasu) miejsce pobytu oznaczamy partykułą に.'
      }
    ]
  },
  {
    id: 'de',
    kana: 'で',
    romaji: 'de',
    label: 'Miejsce akcji i narzędzie (Action location / Means)',
    pattern: '[Miejsce] で [Akcja] / [Środek] で [Czynność]',
    description: 'Wskazuje miejsce, w którym dynamicznie odbywa się dana czynność (np. uczyć się w bibliotece), albo narzędzie, metodę, środek transportu i język (np. autobusem, pałeczkami, po japońsku).',
    notes: 'Różnica に vs で: に to statyczne istnienie (gdzie ktoś jest), a で to miejsce dynamicznego działania (gdzie ktoś coś robi).',
    examples: [
      { japanese: 'としょかんで べんきょうします。', romaji: 'Toshokan de benkyou shimasu.', polish: 'Uczę się w bibliotece.' },
      { japanese: 'バスで いきます。', romaji: 'Basu de ikimasu.', polish: 'Jadę autobusem.' },
      { japanese: 'はしで たべます。', romaji: 'Hashi de tabemasu.', polish: 'Jem pałeczkami.' }
    ],
    questions: [
      {
        sentence: 'としょかん [?] べんきょうします。',
        full: 'としょかんで べんきょうします。',
        polish: 'Uczę się w bibliotece.',
        answer: 'で',
        distractors: ['に', 'を', 'へ'],
        explanation: 'Partykuła で oznacza miejsce wykonywania czynności (uczę się GDZIE? w bibliotece).'
      },
      {
        sentence: 'バス [?] いきます。',
        full: 'バスで いきます。',
        polish: 'Jadę autobusem.',
        answer: 'で',
        distractors: ['に', 'を', 'と'],
        explanation: 'Partykuła で wskazuje środek transportu / narzędzie: jadę (czym?) autobusem.'
      },
      {
        sentence: 'にほんご [?] はなします。',
        full: 'にほんごで はなします。',
        polish: 'Rozmawiam po japońsku.',
        answer: 'で',
        distractors: ['は', 'の', 'に'],
        explanation: 'Partykuła で określa język / sposób wypowiedzi: rozmawiać (za pomocą czego?) po japońsku.'
      }
    ]
  },
  {
    id: 'e',
    kana: 'へ',
    romaji: 'e',
    label: 'Kierunek ruchu (Direction)',
    pattern: '[Miejsce / Cel] へ [Czasownik ruchu]',
    description: 'Wskazuje kierunek przemieszczania się („w kierunku”, „w stronę”). Wymawiana jako „e”, lecz zapisywana znakiem hiragany へ (he).',
    notes: 'W kontekście czasowników ruchu (ikimasu, kimasu, kaerimasu) partykuły へ oraz に są często stosowane zamiennie. へ kładzie większy akcent na kierunek drogi.',
    examples: [
      { japanese: 'うちへ かえります。', romaji: 'Uchi e kaerimasu.', polish: 'Wracam do domu.' },
      { japanese: 'にほんへ いきます。', romaji: 'Nihon e ikimasu.', polish: 'Jadę do Japonii.' },
      { japanese: 'きょうとへ いきました。', romaji: 'Kyouto e ikimashita.', polish: 'Pojechałem do Kioto.' }
    ],
    questions: [
      {
        sentence: 'うち [?] かえります。',
        full: 'うちへ かえります。',
        polish: 'Wracam do domu.',
        answer: 'へ',
        distractors: ['で', 'を', 'の'],
        explanation: 'Partykuła へ (pisana へ, czytana e) wskazuje kierunek ruchu: wracam (dokąd?) w stronę domu.'
      },
      {
        sentence: 'にほん [?] いきます。',
        full: 'にほんへ いきます。',
        polish: 'Jadę do Japonii.',
        answer: 'へ',
        distractors: ['で', 'を', 'と'],
        explanation: 'Kierunek podróży z czasownikiem ikimasu: jadę do Japonii -> にほん へ いきます.'
      },
      {
        sentence: 'どこ [?] いきますか。',
        full: 'どこへ いきますか。',
        polish: 'Dokąd idziesz?',
        answer: 'へ',
        distractors: ['で', 'は', 'を'],
        explanation: 'Pytanie o kierunek: Dokąd idziesz? -> どこ へ いきますか.'
      }
    ]
  },
  {
    id: 'to',
    kana: 'と',
    romaji: 'to',
    label: 'Spójnik „i” oraz towarzysz (With / And)',
    pattern: '[Rzeczownik A] と [Rzeczownik B] / [Osoba] と [Czynność]',
    description: 'Łączy rzeczowniki w wyczerpujące wyliczenie („i”, „oraz”) lub wskazuje osobę, z którą wspólnie wykonuje się daną czynność („z kimś”).',
    notes: 'Partykuła と służy do wyczerpującego wymieniania (A i B i nikt więcej). W odróżnieniu od polskiego „i”, と łączy TYLKO rzeczowniki, nigdy całe zdania.',
    examples: [
      { japanese: 'ペンと ノート。', romaji: 'Pen to nooto.', polish: 'Długopis i notes.' },
      { japanese: 'ともだちと はなします。', romaji: 'Tomodachi to hanashimasu.', polish: 'Rozmawiam z przyjacielem.' },
      { japanese: 'かぞくと ごはんを たべます。', romaji: 'Kazoku to gohan o tabemasu.', polish: 'Jem posiłek z rodziną.' }
    ],
    questions: [
      {
        sentence: 'ペン [?] ノートが あります。',
        full: 'ペンと ノートが あります。',
        polish: 'Jest długopis i zeszyt.',
        answer: 'と',
        distractors: ['の', 'に', 'で'],
        explanation: 'Partykuła と łączy dwa rzeczowniki: długopis ORAZ zeszyt.'
      },
      {
        sentence: 'ともだち [?] えいがを みます。',
        full: 'ともだちと えいがを みます。',
        polish: 'Oglądam film z przyjacielem.',
        answer: 'と',
        distractors: ['を', 'へ', 'に'],
        explanation: 'Partykuła と oznacza towarzysza czynności: oglądam film Z przyjacielem.'
      },
      {
        sentence: 'だれ [?] いきますか。',
        full: 'だれと いきますか。',
        polish: 'Z kim idziesz?',
        answer: 'と',
        distractors: ['で', 'を', 'は'],
        explanation: 'Pytanie o towarzysza: Z kim idziesz? -> だれ と いきますか.'
      }
    ]
  },
  {
    id: 'ga',
    kana: 'が',
    romaji: 'ga',
    label: 'Podmiot i istnienie (Subject / Senses)',
    pattern: '[Rzeczownik] が [あります/います/すきです]',
    description: 'Wskazuje gramatyczny podmiot zdania. Obowiązkowa przy czasownikach istnienia (arimasu, imasu), przymiotnikach upodobań (suki, kirai) i umiejętności (jouzu, heta).',
    notes: 'Kluczowa reguła: z czasownikami あります / います to, co istnieje, ZAWSZE oznaczamy przez が (np. ねこが います). Podobnie z suki desu: すしが すきです (lubię sushi).',
    examples: [
      { japanese: 'いぬが います。', romaji: 'Inu ga imasu.', polish: 'Jest pies (znajduje się tu pies).' },
      { japanese: 'すしが すきです。', romaji: 'Sushi ga suki desu.', polish: 'Lubię sushi.' },
      { japanese: 'じかんが ありません。', romaji: 'Jikan ga arimasen.', polish: 'Nie ma czasu.' }
    ],
    questions: [
      {
        sentence: 'ねこ [?] います。',
        full: 'ねこが います。',
        polish: 'Jest kot.',
        answer: 'が',
        distractors: ['を', 'に', 'で'],
        explanation: 'Przy czasowniku istnienia istoty żywej (います) podmiot oznaczamy partykułą が.'
      },
      {
        sentence: 'すし [?] すきです。',
        full: 'すしが すきです。',
        polish: 'Lubię sushi.',
        answer: 'が',
        distractors: ['を', 'は', 'の'],
        explanation: 'Z przymiotnikiem すき (lubiany) obiekt upodobania łączy się za pomocą が (lubię sushi).'
      },
      {
        sentence: 'じかん [?] ありません。',
        full: 'じかんが ありません。',
        polish: 'Nie ma czasu.',
        answer: 'が',
        distractors: ['を', 'に', 'へ'],
        explanation: 'Przy czasowniku braku/nieistnienia (ありません) rzecz oznaczamy partykułą が.'
      }
    ]
  },
  {
    id: 'v_masu',
    category: 'verb',
    kana: '〜ます',
    speakKana: 'ます',
    romaji: '-masu',
    label: 'Czas teraźniejszy/przyszły twierdzący',
    pattern: '[Rdzeń czasownika] + ます',
    description: 'Wyraża czynność wykonywaną regularnie, nawykowo lub czynność, która nastąpi w przyszłości w uprzejmym stylu formalnym (teineigo). Język japoński nie posiada osobnego czasu przyszłego — czas teraźniejszy (ます) pełni obie te role zależnie od kontekstu.',
    notes: 'Forma ます jest formą uprzejmą używaną w rozmowach z nieznajomymi, przełożonymi, nauczycielami oraz w codziennej uprzejmej komunikacji. Tworzy się ją przez dodanie ます do tematu czasownika (np. たべ・ます, のみ・ます, かき・ます).',
    examples: [
      { japanese: 'まいにち にほんごを べんきょうします。', romaji: 'Mainichi nihongo o benkyou shimasu.', polish: 'Codziennie uczę się japońskiego.' },
      { japanese: 'あした としょかんへ いきます。', romaji: 'Ashita toshokan e ikimasu.', polish: 'Jutro pójdę do biblioteki.' },
      { japanese: 'あさごはんを たべます。', romaji: 'Asagohan o tabemasu.', polish: 'Jem śniadanie.' }
    ],
    questions: [
      {
        sentence: 'あした ともだちと えいがを [?]。',
        full: 'あした ともだちと えいがを みます。',
        polish: 'Jutro z przyjacielem obejrzę film.',
        answer: 'みます',
        distractors: ['みました', 'みません', 'みませんでした'],
        explanation: 'Okolicznik czasu „あした” (jutro) wskazuje na czynność przyszłą twierdzącą, więc poprawna forma to みます (obejrzę).'
      },
      {
        sentence: 'まいにち みずを [?]。',
        full: 'まいにち みずを のみます。',
        polish: 'Codziennie piję wodę.',
        answer: 'のみます',
        distractors: ['のみました', 'のみませんでした', 'のまない'],
        explanation: 'Nawykowa czynność codzienna (まいにち) w czasie teraźniejszym uprzejmym wymaga końcówki 〜ます (のみます).'
      },
      {
        sentence: 'わたしは 6じに [?]。',
        full: 'わたしは 6じに おきます。',
        polish: 'Wstaję o 6:00.',
        answer: 'おきます',
        distractors: ['おきました', 'おきませんでした', 'おき'],
        explanation: 'Czynność rutynowa w czasie teraźniejszym twierdzącym w stylu uprzejmym przyjmuje formę おきます.'
      }
    ]
  },
  {
    id: 'v_masen',
    category: 'verb',
    kana: '〜ません',
    speakKana: 'ません',
    romaji: '-masen',
    label: 'Czas teraźniejszy/przyszły przeczący',
    pattern: '[Rdzeń czasownika] + ません',
    description: 'Oznacza przeczenie czynności teraźniejszej, nawykowej lub przyszłej w stylu uprzejmym („nie robię”, „nie zrobię”). Zastępuje twierdzącą końcówkę 〜ます końcówką 〜ません.',
    notes: 'Pamiętaj, że w japońskim zaprzecza się końcówkę czasownika na końcu zdania, a nie całe orzeczenie osobnym słówkiem typu „nie”. Nie używamy polskiego „nie” przed czasownikiem — zamiast たべます mówimy たべません.',
    examples: [
      { japanese: 'あさ コーヒーを のみません。', romaji: 'Asa koohii o nomimasen.', polish: 'Rano nie piję kawy.' },
      { japanese: 'きょうは どこへも いきません。', romaji: 'Kyou wa doko e mo ikimasen.', polish: 'Dzisiaj nigdzie nie idę.' },
      { japanese: 'わたしは にくを たべません。', romaji: 'Watashi wa niku o tabemasen.', polish: 'Nie jem mięsa.' }
    ],
    questions: [
      {
        sentence: 'わたしは おさけを [?]。',
        full: 'わたしは おさけを のみません。',
        polish: 'Nie piję alkoholu.',
        answer: 'のみません',
        distractors: ['のみます', 'のみました', 'のみませんでした'],
        explanation: 'Przeczenie czynności nawykowej w czasie teraźniejszym uprzejmym tworzy końcówka 〜ません (のみません).'
      },
      {
        sentence: 'あしたは がっこうへ [?]。やすみです。',
        full: 'あしたは がっこうへ いきません。やすみです。',
        polish: 'Jutro nie idę do szkoły. Jest wolne.',
        answer: 'いきません',
        distractors: ['いきます', 'いきました', 'いかない'],
        explanation: 'Czynność przyszła przecząca („jutro nie idę”) przyjmuje formę いきません.'
      },
      {
        sentence: 'あさごはんを [?]。おなかが すきました。',
        full: 'あさごはんを たべません。おなかが すきました。',
        polish: 'Nie jem śniadania. Zgłodniałem.',
        answer: 'たべません',
        distractors: ['たべます', 'たべました', 'たべる'],
        explanation: 'Przeczenie teraźniejsze w stylu uprzejmym wymaga formy たべません.'
      }
    ]
  },
  {
    id: 'v_mashita',
    category: 'verb',
    kana: '〜ました',
    speakKana: 'ました',
    romaji: '-mashita',
    label: 'Czas przeszły twierdzący',
    pattern: '[Rdzeń czasownika] + ました',
    description: 'Oznacza czynność zakończoną w przeszłości („zrobiłem / zrobiłam”) w uprzejmym stylu formalnym. Zastępuje teraźniejszą końcówkę 〜ます formą 〜ました.',
    notes: 'Wymowa końcówki: samogłoska „i” w „shita” jest często bezdźwięczna (szeptana) w naturalnym japońskim, brzmiąc niemal jak „masz-ta”. Zwróć uwagę na okoliczniki przeszłości w zdaniu, takie jak きのう (wczoraj), けさ (dziś rano), せんしゅう (w zeszłym tygodniu).',
    examples: [
      { japanese: 'きのう 8じかん ねました。', romaji: 'Kinou hachi-jikan nemashita.', polish: 'Wczoraj spałem 8 godzin.' },
      { japanese: 'けさ パンを たべました。', romaji: 'Kesa pan o tabemashita.', polish: 'Dziś rano zjadłem pieczywo.' },
      { japanese: 'せんしゅう きょうとへ いきました。', romaji: 'Senshuu Kyouto e ikimashita.', polish: 'W zeszłym tygodniu pojechałem do Kioto.' }
    ],
    questions: [
      {
        sentence: 'きのうの ばん、テレビを [?]。',
        full: 'きのうの ばん、テレビを みました。',
        polish: 'Wczoraj wieczorem oglądałem telewizję.',
        answer: 'みました',
        distractors: ['みます', 'みません', 'みませんでした'],
        explanation: 'Czynność z przeszłości („きのうの ばん” – wczoraj wieczorem) twierdząca wymaga końcówki 〜ました (みました).'
      },
      {
        sentence: 'さっき としょかんで ほんを [?]。',
        full: 'さっき としょかんで ほんを よみました。',
        polish: 'Przed chwilą przeczytałem książkę w bibliotece.',
        answer: 'よみました',
        distractors: ['よみます', 'よみません', 'よむ'],
        explanation: 'Określenie „さっき” (przed chwilą) wskazuje na czas przeszły dokonany twierdzący: よみました.'
      },
      {
        sentence: 'きのう 7じに [?]。',
        full: 'きのう 7じに おきました。',
        polish: 'Wczoraj wstałem o 7:00.',
        answer: 'おきました',
        distractors: ['おきます', 'おきません', 'おき'],
        explanation: 'Zdarzenie z wczoraj (きのう) w czasie przeszłym twierdzącym przyjmuje formę おきました.'
      }
    ]
  },
  {
    id: 'v_masendeshita',
    category: 'verb',
    kana: '〜ませんでした',
    speakKana: 'ませんでした',
    romaji: '-masendeshita',
    label: 'Czas przeszły przeczący',
    pattern: '[Rdzeń czasownika] + ませんでした',
    description: 'Oznacza czynność, która nie miała miejsca w przeszłości („nie zrobiłem / nie zrobiłam”) w uprzejmym stylu formalnym. Powstaje przez dodanie przeszłego wariantu でした do formy przeczącej ません.',
    notes: 'Długa, ale niezwykle regularna końcówka: rdzeń + ませんでした. Jest to formalne zaprzeczenie czasu przeszłego. W mowie potocznej odpowiada jej końcówka 〜なかった (nakatta).',
    examples: [
      { japanese: 'きのう べんきょうしませんでした。', romaji: 'Kinou benkyou shimasendeshita.', polish: 'Wczoraj się nie uczyłem.' },
      { japanese: 'けさ なにも たべませんでした。', romaji: 'Kesa nani mo tabemasendeshita.', polish: 'Dziś rano niczego nie zjadłem.' },
      { japanese: 'にちようびは どこへも いきませんでした。', romaji: 'Nichiyoubi wa doko e mo ikimasendeshita.', polish: 'W niedzielę nigdzie nie pojechałem.' }
    ],
    questions: [
      {
        sentence: 'きのうは いそがしくて、あさごはんを [?]。',
        full: 'きのうは いそがしくて、あさごはんを たべませんでした。',
        polish: 'Wczoraj byłem zajęty i nie zjadłem śniadania.',
        answer: 'たべませんでした',
        distractors: ['たべません', 'たべました', 'たべます'],
        explanation: 'Przeczenie czynności zakończonej w przeszłości (きのう – wczoraj) wymaga formy 〜ませんでした (たべませんでした).'
      },
      {
        sentence: 'せんしゅうの テストを [?]。',
        full: 'せんしゅうの テストを うけませんでした。',
        polish: 'Nie pisałem testu w zeszłym tygodniu.',
        answer: 'うけませんでした',
        distractors: ['うけます', 'うけました', 'うけません'],
        explanation: 'Czynność z przeszłości (せんしゅう – w zeszłym tygodniu) w formie przeczącej to うけませんでした.'
      },
      {
        sentence: 'ゆうべは なにも [?]。',
        full: 'ゆうべは なにも のみませんでした。',
        polish: 'Wczorajszej nocy niczego nie piłem.',
        answer: 'のみませんでした',
        distractors: ['のみません', 'のみました', 'のみます'],
        explanation: 'Czas przeszły przeczący (ゆうべ – wczoraj wieczorem/w nocy) w połączeniu z なにも (nic) wymaga końcówki 〜ませんでした.'
      }
    ]
  },
  {
    id: 'arimasu',
    category: 'existence',
    kana: 'あります',
    speakKana: 'あります',
    romaji: 'arimasu',
    label: 'Istnienie rzeczy i roślin (ある)',
    pattern: '[Miejsce] に [Rzecz nieożywiona / roślina] が あります',
    description: 'Wyraża istnienie, znajdowanie się lub posiadanie rzeczy nieożywionych, przedmiotów, budynków, roślin oraz pojęć abstrakcyjnych (np. czasu, pieniędzy, wydarzeń). Formą przeczącą jest ありません (nie ma).',
    notes: 'Kluczowa zasada N5: あります stosujemy do rzeczy, które nie poruszają się z własnej woli (książki, samochody, drzewa, kwiaty, czas, pieniądze). Nawet żywe rośliny (drzewa, kwiaty) używają あります! Do ludzi i zwierząt stosujemy います.',
    examples: [
      { japanese: 'つくえの うえに ほんが あります。', romaji: 'Tsukue no ue ni hon ga arimasu.', polish: 'Na biurku jest książka.' },
      { japanese: 'へやに テレビが あります。', romaji: 'Heya ni terebi ga arimasu.', polish: 'W pokoju jest telewizor.' },
      { japanese: 'きょうは じかんが ありません。', romaji: 'Kyou wa jikan ga arimasen.', polish: 'Dzisiaj nie mam czasu.' }
    ],
    questions: [
      {
        sentence: 'あそこに くるまが [?]。',
        full: 'あそこに くるまが あります。',
        polish: 'Tam stoi samochód.',
        answer: 'あります',
        distractors: ['います', 'でした', 'します'],
        explanation: 'Samochód (くるま) to rzecz nieożywiona, dlatego jego obecność opisujemy czasownikiem あります, a nie います.'
      },
      {
        sentence: 'こうえんに おおきな きが [?]。',
        full: 'こうえんに おおきな きが あります。',
        polish: 'W parku jest duże drzewo.',
        answer: 'あります',
        distractors: ['います', 'いらっしゃいます', 'です'],
        explanation: 'Drzewo (き) to roślina — w języku japońskim rośliny łączą się z czasownikiem あります.'
      },
      {
        sentence: 'いま おかねが [?]。',
        full: 'いま おかねが ありません。',
        polish: 'Teraz nie mam pieniędzy.',
        answer: 'ありません',
        distractors: ['いません', 'ないでした', 'でした'],
        explanation: 'Brak rzeczy nieożywionej lub pojęcia (pieniądze – おかね) wyraża przeczenie ありません.'
      }
    ]
  },
  {
    id: 'imasu',
    category: 'existence',
    kana: 'います',
    speakKana: 'います',
    romaji: 'imasu',
    label: 'Istnienie istot żywych (いる)',
    pattern: '[Miejsce] に [Osoba / Zwierzę] が います',
    description: 'Wyraża obecność, znajdowanie się lub istnienie istot żywych poruszających się samodzielnie: ludzi, zwierząt, ryb, owadów. Formą przeczącą jest いません (nie ma / nie jest obecny).',
    notes: 'Niezwykle częsty błąd początkujących: mylenie あります i います. Pamiętaj: pies, kot, uczeń, rodzina -> zawsze います / いません. Jeśli masz wątpliwość: czy istota ma własną wolę poruszania się? Jeśli tak, użyj います.',
    examples: [
      { japanese: 'にわに ねこが います。', romaji: 'Niwa ni neko ga imasu.', polish: 'W ogrodzie jest kot.' },
      { japanese: 'きょうしつに せんせいが います。', romaji: 'Kyoushitsu ni sensei ga imasu.', polish: 'W klasie jest nauczyciel.' },
      { japanese: 'いま へやに だれも いません。', romaji: 'Ima heya ni dare mo imasen.', polish: 'Teraz w pokoju nikogo nie ma.' }
    ],
    questions: [
      {
        sentence: 'あそこに かわいい いぬが [?]。',
        full: 'あそこに かわいい いぬが います。',
        polish: 'Tam jest uroczy pies.',
        answer: 'います',
        distractors: ['あります', 'です', 'します'],
        explanation: 'Pies (いぬ) to zwierzę (istota żywa), dlatego jego obecność opisujemy za pomocą います.'
      },
      {
        sentence: 'きょうしつに がくせいが 10にん [?]。',
        full: 'きょうしつに がくせいが 10にん います。',
        polish: 'W klasie jest 10 uczniów.',
        answer: 'います',
        distractors: ['あります', 'でした', 'なります'],
        explanation: 'Uczniowie (がくせい) to ludzie, więc poprawnym czasownikiem istnienia jest います.'
      },
      {
        sentence: 'いけに さかなが [?]。',
        full: 'いけに さかなが います。',
        polish: 'W stawie są ryby.',
        answer: 'います',
        distractors: ['あります', 'ある', 'だ'],
        explanation: 'Ryby (さかな) są istotami żywymi poruszającymi się, więc używamy います.'
      }
    ]
  },
  {
    id: 'adj_i',
    category: 'adjective',
    kana: '〜い / 〜くない',
    speakKana: 'たかい',
    romaji: 'i-keiyoushi',
    label: 'Przymiotniki typu I (koniugacja)',
    pattern: '[Przymiotnik-i] - い + くないです / かったです',
    description: 'Przymiotniki kończące się na sylabę 〜い (np. たかい, やすい, あたらしい). Odmieniają się same przez zmianę końcowego „い”: przeczenie to 〜くないです, czas przeszły to 〜かったです, a przeszły przeczący to 〜くなかったです.',
    notes: 'Najważniejszy wyjątek w N5: przymiotnik いい (dobry) w odmianie ZAWSZE zmienia rdzeń na よい: よくないです (nie jest dobry), よかったです (był dobry), よくなかったです (nie był dobry). Nigdy nie mów „いくない”!',
    examples: [
      { japanese: 'この くるまは あたらしいです。', romaji: 'Kono kuruma wa atarashii desu.', polish: 'Ten samochód jest nowy.' },
      { japanese: 'きのうの テストは むずかしくなかったです。', romaji: 'Kinou no tesuto wa muzukashikunakatta desu.', polish: 'Wczorajszy test nie był trudny.' },
      { japanese: 'てんきが よかったです。', romaji: 'Tenki ga yokatta desu.', polish: 'Pogoda była dobra.' }
    ],
    questions: [
      {
        sentence: 'この レストランは [?]。とても やすいです。',
        full: 'この レストランは たかくないです。とても やすいです。',
        polish: 'Ta restauracja nie jest droga. Jest bardzo tania.',
        answer: 'たかくないです',
        distractors: ['たかいじゃないです', 'たかかったです', 'たかいでした'],
        explanation: 'Przeczenie przymiotnika-i (たかい) tworzy się przez zamianę końcowego -い na -くないです (たかくないです).'
      },
      {
        sentence: 'きのうの えいがは とても [?]。',
        full: 'きのうの えいがは とても おもしろかったです。',
        polish: 'Wczorajszy film był bardzo ciekawy.',
        answer: 'おもしろかったです',
        distractors: ['おもしろいです', 'おもしろいでした', 'おもしろくないです'],
        explanation: 'Czas przeszły twierdzący od przymiotnika-i (きのう – wczoraj) tworzy końcówka -かったです (おもしろかったです).'
      },
      {
        sentence: 'きょうは てんきが [?]。あめが ふっています。',
        full: 'きょうは てんきが よくないです。あめが ふっています。',
        polish: 'Dzisiaj pogoda nie jest dobra. Pada deszcz.',
        answer: 'よくないです',
        distractors: ['いくないです', 'いいじゃないです', 'よかったです'],
        explanation: 'Wyjątek: przymiotnik いい (dobry) w przeczeniu przyjmuje formę よくないです (nie: ikunai).'
      }
    ]
  },
  {
    id: 'adj_na',
    category: 'adjective',
    kana: '〜な / 〜です',
    speakKana: 'しずかな',
    romaji: 'na-keiyoushi',
    label: 'Przymiotniki typu NA (koniugacja)',
    pattern: '[Przymiotnik-na] な + [Rzeczownik] / [Przymiotnik-na] です',
    description: 'Przymiotniki łączące się z rzeczownikiem za pomocą łącznika 〜な (np. しずかな まち – ciche miasto). Jako orzeczenie na końcu zdania odmieniają się identycznie jak rzeczowniki za pomocą łącznika です: です / じゃありません / でした / じゃありませんでした.',
    notes: 'Uwaga na pułapkę: przymiotniki きれい (piękny/czysty) oraz ゆうめい (sławny) kończą się fonetycznie na „-i”, ale gramatycznie są przymiotnikami typu NA! Dlatego mówimy: きれいな まち, きれいじゃありません (nie: kireikunai!).',
    examples: [
      { japanese: 'ここは しずかな へやです。', romaji: 'Koko wa shizuka na heya desu.', polish: 'Tutaj jest cichy pokój.' },
      { japanese: 'この まちは にぎやかじゃありません。', romaji: 'Kono machi wa nigiyaka ja arimasen.', polish: 'To miasto nie jest tętniące życiem / głośne.' },
      { japanese: 'きょうとは ゆうめいな まちです。', romaji: 'Kyouto wa yuumei na machi desu.', polish: 'Kioto to słynne miasto.' }
    ],
    questions: [
      {
        sentence: 'ここは とても [?] まちです。',
        full: 'ここは とても しずかな まちです。',
        polish: 'Tutaj jest bardzo ciche miasto.',
        answer: 'しずかな',
        distractors: ['しずかい', 'しずか', 'しずかで'],
        explanation: 'Przymiotnik-na przed rzeczownikiem (まち – miasto) wymaga łącznika な (しずかな まち).'
      },
      {
        sentence: 'かのじょは とても [?] ひとです。',
        full: 'かのじょは とても きれいな ひとです。',
        polish: 'Ona jest bardzo piękną osobą.',
        answer: 'きれいな',
        distractors: ['きれいい', 'きれいに', 'きれい'],
        explanation: 'Pułapka: きれい to przymiotnik-na (mimo zapisu i wymowy), więc łączy się z rzeczownikiem przez な (きれいな ひと).'
      },
      {
        sentence: 'むかし この まちは [?]。いまは にぎやかです。',
        full: 'むかし この まちは しずかでした。いまは にぎやかです。',
        polish: 'Dawniej to miasto było ciche. Teraz tętni życiem.',
        answer: 'しずかでした',
        distractors: ['しずかかったです', 'しずかでしたくない', 'しずかです'],
        explanation: 'Czas przeszły twierdzący przymiotnika-na (むかし – dawniej) tworzy forma でした (しずかでした).'
      }
    ]
  },
  {
    id: 'te_form',
    category: 'verb',
    kana: '〜て / 〜で',
    speakKana: 'たべて',
    romaji: 'te-kei',
    label: 'Forma łącząca czasowników (〜て / 〜で)',
    pattern: '[Czasownik w formie te]: rdzeń + て / で',
    description: 'Forma 〜て (te-kei) to jedna z najważniejszych form w języku japońskim. Służy do łączenia czynności w czasie („robię A, a potem B”), tworzenia próśb (〜てください), czynności trwających (〜ています) oraz konstrukcji zezwolenia (〜てもいい). Odmiana zależy od grupy czasownika (Ichidan, Godan, Nieregularne).',
    notes: 'Zasady tworzenia formy te:\n• Grupa II (Ichidan): odrzuć る i dodaj て (たべる → たべて, みる → みて).\n• Grupa III (Nieregularne): する → して, くる → きて.\n• Grupa I (Godan): końcówki u, tsu, ru → って (かう → かって, まつ → まって); mu, bu, nu → んで (のむ → のんで, よむ → よんで); ku → いて (きく → きいて); gu → いで (およぐ → およいで); su → して (はなす → はなして).\n★ WAŻNY WYJĄTEK: czasownik いく (iść) odmienia się nieregularnie na いって (nie: iite)!',
    examples: [
      { japanese: 'あさ おきて、コーヒーを のみます。', romaji: 'Asa okite, koohii o nomimasu.', polish: 'Rano wstaję i piję kawę (łączenie czynności).' },
      { japanese: 'ほんを よんで、ねました。', romaji: 'Hon o yonde, nemashita.', polish: 'Przeczytałem książkę i poszedłem spać.' },
      { japanese: 'ぎんこうへ いって、おかねを だします。', romaji: 'Ginkou e itte, okane o dashimasu.', polish: 'Pójdę do banku i wypłacę pieniądze (wyjątek: いく → いって).' }
    ],
    questions: [
      {
        sentence: 'あさ 7じに [?]、あさごはんを たべます。',
        full: 'あさ 7じに おきて、あさごはんを たべます。',
        polish: 'Rano wstaję o 7:00 i jem śniadanie.',
        answer: 'おきて',
        distractors: ['おきます', 'おきた', 'おきって'],
        explanation: 'Łączenie czynności w czasie wymaga formy -te. Czasownik おきる to grupa II (Ichidan), więc odrzucamy る i dodajemy て: おきて.'
      },
      {
        sentence: 'きょうは としょかんへ [?]、べんきょうします。',
        full: 'きょうは としょかんへ いって、べんきょうします。',
        polish: 'Dzisiaj pójdę do biblioteki i będę się uczyć.',
        answer: 'いって',
        distractors: ['いいて', 'いきて', 'いった'],
        explanation: 'Wyjątek formy te: czasownik いく (iść) tworzy formę いって (z geminatą って, a nie iite).'
      },
      {
        sentence: 'ジュースを [?]、パンを たべました。',
        full: 'ジュースを のんで、パンを たべました。',
        polish: 'Napiłem się soku i zjadłem chleb.',
        answer: 'のんで',
        distractors: ['のみて', 'のって', 'のんだ'],
        explanation: 'Czasownik のむ (pić, grupa I z końcówką む) w formie -te przyjmuje końcówkę んで: のんで.'
      }
    ]
  },
  {
    id: 'te_kudasai',
    category: 'verb',
    kana: '〜てください',
    speakKana: 'みてください',
    romaji: 'te kudasai',
    label: 'Uprzejme prośby i polecenia (〜てください)',
    pattern: '[Czasownik-te] + ください',
    description: 'Konstrukcja służąca do uprzejmej prośby lub życzliwego polecenia: „proszę (coś zrobić)”. Tworzy się ją przez dodanie ください (kudasai) do formy 〜て czasownika.',
    notes: 'Używane wobec osób równych statusem lub gdy udzielamy instrukcji (np. w sklepie, na lekcji: „proszę posłuchać”, „proszę napisać”). Wobec przełożonych lub osób starszych w formalnym keigo stosuje się jeszcze wyższe formy, ale 〜てください to standardowy uprzejmy zwrot na poziomie N5.',
    examples: [
      { japanese: 'ここに なまえを かいてください。', romaji: 'Koko ni namae o kaite kudasai.', polish: 'Proszę tutaj napisać swoje nazwisko / imię.' },
      { japanese: 'ちょっと まってください。', romaji: 'Chotto matte kudasai.', polish: 'Proszę chwilę poczekać.' },
      { japanese: 'CDを きいてください。', romaji: 'CD o kiite kudasai.', polish: 'Proszę posłuchać płyty CD.' }
    ],
    questions: [
      {
        sentence: 'すこし [?] ください。すぐ もどります。',
        full: 'すこし まってください。すぐ もどります。',
        polish: 'Proszę chwilę poczekać. Zaraz wracam.',
        answer: 'まって',
        distractors: ['まちて', 'まつて', 'また'],
        explanation: 'Czasownik まつ (czekać) to grupa I z końcówką つ, która w formie -te przechodzi w って: まってください.'
      },
      {
        sentence: 'ゆっくり [?] ください。',
        full: 'ゆっくり はなしてください。',
        polish: 'Proszę mówić powoli.',
        answer: 'はなして',
        distractors: ['はなすて', 'はなしてで', 'はなした'],
        explanation: 'Czasownik はなす (mówić) w formie te przyjmuje końcówkę して: はなしてください.'
      },
      {
        sentence: 'この えいがを [?] ください。とても おもしろいです。',
        full: 'この えいがを みてください。とても おもしろいです。',
        polish: 'Proszę obejrzeć ten film. Jest bardzo ciekawy.',
        answer: 'みて',
        distractors: ['みるて', 'みって', 'みた'],
        explanation: 'Czasownik みる (oglądać, grupa II) odrzuca る i przyjmuje て: みてください.'
      }
    ]
  },
  {
    id: 'te_imasu',
    category: 'verb',
    kana: '〜ています',
    speakKana: 'たべています',
    romaji: 'te imasu',
    label: 'Czynności trwające i stan (〜ています)',
    pattern: '[Czasownik-te] + います / いません',
    description: 'Konstrukcja wyrażająca dwa kluczowe znaczenia: 1) czynność odbywającą się w tej chwili (odpowiednik angielskiego Present Continuous: „właśnie jem/czytam”), oraz 2) stan trwający jako rezultat wcześniejszej czynności (np. mieszkanie w danym mieście, małżeństwo, posiadanie wiedzy).',
    notes: 'Kluczowe czasowniki stanu w N5:\n• すんでいます (すむ → mieszkam w...)\n• しっています (しる → znam / wiem; uwaga: przeczenie to しりません, nie shitteimasen!)\n• けっこんしています (jestem w związku małżeńskim)\n• もっています (posiadam / mam przy sobie).',
    examples: [
      { japanese: 'いま にほんごを べんきょうしています。', romaji: 'Ima nihongo o benkyou shite imasu.', polish: 'W tej chwili uczę się japońskiego (czynność trwająca).' },
      { japanese: 'わたしは とうきょうに すんでいます。', romaji: 'Watashi wa Toukyou ni sunde imasu.', polish: 'Mieszkam w Tokio (trwały stan/rezultat).' },
      { japanese: 'たなかさんは くるまを もっています。', romaji: 'Tanaka-san wa kuruma o motte imasu.', polish: 'Pan Tanaka ma (posiada) samochód.' }
    ],
    questions: [
      {
        sentence: 'いま なにを [?] いますか。',
        full: 'いま なにを して いますか。',
        polish: 'Co teraz robisz (w tej chwili)?',
        answer: 'して',
        distractors: ['する', 'した', 'し'],
        explanation: 'Pytanie o trwającą czynność wymaga formy -te czasownika: する → して いますか.'
      },
      {
        sentence: 'わたしは きょうとに [?] います。',
        full: 'わたしは きょうとに すんで います。',
        polish: 'Mieszkam w Kioto.',
        answer: 'すんで',
        distractors: ['すみて', 'すむで', 'すんだ'],
        explanation: 'Czasownik すむ (mieszkać) w formie te przyjmuje んで: すんでいます wyraża stan zamieszkiwania w danym miejscu.'
      },
      {
        sentence: 'あ、あめが [?] いますよ。',
        full: 'あ、あめが ふって いますよ。',
        polish: 'O, pada deszcz!',
        answer: 'ふって',
        distractors: ['ふりて', 'ふて', 'ふった'],
        explanation: 'Czasownik ふる (padać) ma końcówkę る z grupy I, więc w formie te daje ふって: ふっています (właśnie pada).'
      }
    ]
  },
  {
    id: 'te_mo_ii',
    category: 'verb',
    kana: '〜てもいい',
    speakKana: 'はいってもいい',
    romaji: 'te mo ii',
    label: 'Pozwolenie i zakaz (〜てもいい / 〜てはいけません)',
    pattern: '[Czasownik-te] + もいいですか / はいけません',
    description: '〜てもいいですか (te mo ii desu ka) służy do pytania o pozwolenie: „Czy mogę...? / Czy wolno mi...?”. Odpowiedź twierdząca to 〜てもいいです („możesz / wolno ci”). Z kolei konstrukcja 〜てはいけません (te wa ikemasen) oznacza bezwzględny zakaz: „nie wolno ci / nie można”.',
    notes: 'W mowie potocznej ですか jest często pomijane z intonacją pytającą: 〜てもいい？ W przeczeniu pamiętaj: „は” w 〜てはいけません wymawia się „wa”, ponieważ pełni rolę partykuły tematu po formie te.',
    examples: [
      { japanese: 'しゃしんを とっても いいですか。', romaji: 'Shashin o totte mo ii desu ka.', polish: 'Czy wolno mi zrobić zdjęcie?' },
      { japanese: 'ここで たばこを すっては いけません。', romaji: 'Koko de tabako o sutte wa ikemasen.', polish: 'Tutaj nie wolno palić papierosów (zakaz).' },
      { japanese: 'へやに はいっても いいですよ。', romaji: 'Heya ni haitte mo ii desu yo.', polish: 'Możesz wejść do pokoju (udzielenie pozwolenia).' }
    ],
    questions: [
      {
        sentence: 'ここで しゃしんを [?] も いいですか。',
        full: 'ここで しゃしんを とっても いいですか。',
        polish: 'Czy mogę tutaj zrobić zdjęcie?',
        answer: 'とって',
        distractors: ['とりて', 'とるて', 'とった'],
        explanation: 'Pozwolenie wymaga formy -te + もいいですか. Czasownik とる (robić zdjęcie) w formie te to とって.'
      },
      {
        sentence: 'びじゅつかんで えに さわっては [?]。',
        full: 'びじゅつかんで えに さわっては いけません。',
        polish: 'W muzeum sztuki nie wolno dotykać obrazów.',
        answer: 'いけません',
        distractors: ['いいです', 'ありません', 'いません'],
        explanation: 'Wyrażenie bezwzględnego zakazu („nie wolno”) tworzy konstrukcja 〜てはいけません.'
      },
      {
        sentence: 'この みずを [?] も いいですか。',
        full: 'この みずを のんでも いいですか。',
        polish: 'Czy mogę napić się tej wody?',
        answer: 'のんで',
        distractors: ['のみて', 'のむで', 'のんて'],
        explanation: 'Czasownik のむ (pić) w formie te przyjmuje końcówkę んで: のんでもいいですか.'
      }
    ]
  },
  {
    id: 'ta_form',
    category: 'verb',
    kana: '〜た / 〜だ',
    speakKana: 'たべた',
    romaji: 'ta-kei',
    label: 'Czas przeszły prosty / potoczny (〜た / 〜だ)',
    pattern: '[Czasownik w formie ta]: zamień て na た / で na だ',
    description: 'Forma 〜た (ta-kei) to czas przeszły dokonany w stylu prostym (potocznym / futsuutai). Odpowiada uprzejmej formie 〜ました. Zasady tworzenia formy ta są DOKŁADNIE IDENTYCZNE jak formy te: wszędzie tam, gdzie wstawia się て, wstawiamy た, a zamiast で – だ (np. たべて → たべた, のんで → のんだ).',
    notes: 'Forma ta jest fundamentem wielu konstrukcji gramatycznych poziomu N5/N4:\n• 〜た ことがあります (doświadczenie: „kiedyś już to robiłem”)\n• 〜た あとで (po zrobieniu czegoś)\n• 〜たり 〜たり します (wyliczanie czynności).\nWyjątek: いく → いった (jak itte).',
    examples: [
      { japanese: 'きのう えいがを みた。', romaji: 'Kinou eiga o mita.', polish: 'Wczoraj obejrzałem film (styl potoczny = mimashita).' },
      { japanese: 'あさごはんを たべた？', romaji: 'Asagohan o tabeta?', polish: 'Jadłeś śniadanie? (pytanie w stylu swobodnym).' },
      { japanese: 'せんしゅう ともだちと あそんだ。', romaji: 'Senshuu tomodachi to asonda.', polish: 'W zeszłym tygodniu spotkałem się / bawiłem z przyjaciółmi.' }
    ],
    questions: [
      {
        sentence: 'きのう なにを [?]？',
        full: 'きのう なにを たべた？',
        polish: 'Co wczoraj jadłeś? (styl swobodny)',
        answer: 'たべた',
        distractors: ['たべて', 'たべだ', 'たべ'],
        explanation: 'Czasownik たべる (grupa II) w czasie przeszłym prostym przyjmuje formę たべた (końcówka -ta jak -te: たべて → たべta).'
      },
      {
        sentence: 'きょねん にほんへ [?]。',
        full: 'きょねん にほんへ いった。',
        polish: 'W zeszłym roku pojechałem do Japonii.',
        answer: 'いった',
        distractors: ['いいた', 'いきた', 'いくた'],
        explanation: 'Czasownik いく (iść/jechać) to wyjątek: odmienia się na いった (podobnie jak forma te: いって).'
      },
      {
        sentence: 'きのうは たくさん [?]。',
        full: 'きのうは たくさん のんだ。',
        polish: 'Wczoraj dużo wypiłem.',
        answer: 'のんだ',
        distractors: ['のんた', 'のみた', 'のむた'],
        explanation: 'Czasowniki kończące się na む (のむ) w formie -te mają んで, a w formie -ta przyjmują końcówkę んだ: のんだ.'
      }
    ]
  },
  {
    id: 'ta_koto_ga_aru',
    category: 'verb',
    kana: '〜た ことが ある',
    speakKana: 'いったことがある',
    romaji: 'ta koto ga aru',
    label: 'Doświadczenie życiowe (〜た ことがあります)',
    pattern: '[Czasownik-ta] + ことが あります / ありません',
    description: 'Konstrukcja służąca do mówienia o życiowych doświadczeniach: „zdarzyło mi się już kiedyś (coś zrobić)” lub „miałem okazję (coś zrobić)”. Przeczenie: 〜た ことが ありません oznacza „nigdy w życiu tego nie robiłem”.',
    notes: 'Uwaga: konstrukcji tej NIE używa się do zwykłych, rutynowych czynności z wczoraj czy z dziś (np. „zjadłem obiad”). Służy wyłącznie do mówienia o unikalnych doświadczeniach w perspektywie całego dotychczasowego życia (np. byłem w Japonii, jadłem sushi, wspiąłem się na Fudżi).',
    examples: [
      { japanese: 'にほんへ いった ことが あります。', romaji: 'Nihon e itta koto ga arimasu.', polish: 'Byłem kiedyś w Japonii (mam takie doświadczenie życiowe).' },
      { japanese: 'すしを たべた ことが ありますか。', romaji: 'Sushi o tabeta koto ga arimasu ka.', polish: 'Czy kiedykolwiek jadłeś sushi?' },
      { japanese: 'ふじさんに のぼった ことが ありません。', romaji: 'Fuji-san ni nobotta koto ga arimasen.', polish: 'Nigdy nie wspinałem się na górę Fudżi.' }
    ],
    questions: [
      {
        sentence: 'にほんへ [?] ことが ありますか。',
        full: 'にほんへ いった ことが ありますか。',
        polish: 'Czy kiedykolwiek byłeś w Japonii?',
        answer: 'いった',
        distractors: ['いく', 'いって', 'いきたい'],
        explanation: 'Konstrukcja doświadczenia życiowego wymaga czasownika w czasie przeszłym prostym (forma -ta): いく → いった ことがあります.'
      },
      {
        sentence: 'さしみを [?] ことが ありません。',
        full: 'さしみを たべた ことが ありません。',
        polish: 'Nigdy nie jadłem sashimi.',
        answer: 'たべた',
        distractors: ['たべる', 'たべて', 'たべない'],
        explanation: 'Przeczenie doświadczenia również łączy się z formą -ta czasownika: たべた ことが ありません (nigdy nie jadłem).'
      },
      {
        sentence: 'きもの（着物）を [?] ことが あります。',
        full: 'きもの（着物）を きた ことが あります。',
        polish: 'Miałem okazję nosić kimono.',
        answer: 'きた',
        distractors: ['きる', 'きて', 'きった'],
        explanation: 'Czasownik きる (nosić ubranie, grupa II) w formie ta to きた: きた ことがあります.'
      }
    ]
  },
  {
    id: 'v_nakatta',
    category: 'verb',
    kana: '〜なかった',
    speakKana: 'いかなかった',
    romaji: 'nakatta',
    label: 'Czas przeszły przeczący (〜なかった / 〜ませんでした)',
    pattern: '[Czasownik w formie nai] - い + かった (styl potoczny)',
    description: 'Czas przeszły przeczący wyrażający „nie zrobiłem czegoś”. W stylu uprzejmym jest to 〜ませんでした (v_masendeshita). W stylu prostym (potocznym) tworzy się go od formy przeczącej 〜ない (nai-kei), zamieniając końcowe い na かった: 〜なかった (np. いかない → いかなかった, たべない → たべなかった).',
    notes: 'Odmiana formy nai i nakatta:\n• Grupa I (Godan): samogłoska u → a + なかった (いく → いかない → いかなかった, かく → かかなかった, のむ → のまなかった).\n• Grupa II (Ichidan): odrzuć る + なかった (たべる → たべなかった, みる → みなかった).\n• Grupa III: する → しなかった, くる → こなかった.\n★ Wyjątek: czasownik ある (być / mieć) w przeczeniu to po prostu ない, a w czasie przeszłym なかった (nie: aranakatta)!',
    examples: [
      { japanese: 'きのうは どこへも いかなかった。', romaji: 'Kinou wa doko e mo ikanakatta.', polish: 'Wczoraj nigdzie nie poszedłem (styl potoczny).' },
      { japanese: 'あさごはんを たべなかった。', romaji: 'Asagohan o tabenakatta.', polish: 'Nie zjadłem śniadania.' },
      { japanese: 'きのうは べんきょうしなかった。', romaji: 'Kinou wa benkyou shinakatta.', polish: 'Wczoraj się nie uczyłem (suru → shinakatta).' }
    ],
    questions: [
      {
        sentence: 'きのうは あめだったから、でかけ[?]。',
        full: 'きのうは あめだったから、でかけなかった。',
        polish: 'Ponieważ wczoraj padał deszcz, nie wyszedłem z domu.',
        answer: 'なかった',
        distractors: ['ない', 'ませんでした', 'なくて'],
        explanation: 'Czas przeszły przeczący w stylu potocznym od でかける (grupa II) to でかけ + なかった.'
      },
      {
        sentence: 'きのうは なにも [?]。',
        full: 'きのうは なにも たべなかった。',
        polish: 'Wczoraj nic nie zjadłem.',
        answer: 'たべなかった',
        distractors: ['たべない', 'たべた', 'たべなくて'],
        explanation: 'Wczoraj (きのう) + なにも (nic) wymaga czasu przeszłego przeczącego: たべなかった.'
      },
      {
        sentence: 'じかんが [?] から、テレビを みませんでした。',
        full: 'じかんが なかった から、テレビを みませんでした。',
        polish: 'Ponieważ nie miałem czasu, nie oglądałem telewizji.',
        answer: 'なかった',
        distractors: ['あらなかった', 'ない', 'なくて'],
        explanation: 'Czasownik ある (mieć / istnieć) odmienia się nieregularnie: przeczenie to ない, a w czasie przeszłym なかった (forma aranai/aranakatta nie istnieje!).'
      }
    ]
  },
  {
    id: 'v_tai',
    category: 'conversation',
    kana: '〜たい / 〜たくない',
    speakKana: 'たべたい',
    romaji: 'tai / takunai',
    label: 'Chęci i pragnienia (〜たい / 〜たくない)',
    pattern: '[Temat masu] + たい (chcę) / たくない (nie chcę)',
    description: 'Konstrukcja służy do wyrażania pragnień osoby mówiącej („chcę zrobić coś...”, „nie chcę...”). Tworzy się ją, zastępując końcówkę -masu końcówką -tai. Cała forma odmienia się syntaktycznie jak przymiotnik typu i (czas przeszły: 〜たかった, przeszłe przeczenie: 〜たくなかった).',
    notes: 'Ważna reguła partykuł: dopełnienie w konstrukcji z 〜たい może zachować partykułę を, lecz bardzo naturalnie przyjmuje partykułę が (np. みずを のみたい lub みずが のみたい). Uwaga kulturowa: 〜たい stosujemy tylko do siebie lub w pytaniach do rozmówcy („Czy chcesz...?”). Do opisu chęci osób trzecich stosuje się 〜たがっている.',
    examples: [
      { japanese: 'にほんへ いきたいです。', romaji: 'Nihon e ikitai desu.', polish: 'Chcę pojechać do Japonii.' },
      { japanese: 'つめたい みずが のみたいです。', romaji: 'Tsumetai mizu ga nomitai desu.', polish: 'Chcę napić się zimnej wody.' },
      { japanese: 'きょうは なにも たべたくないです。', romaji: 'Kyou wa nani mo tabetakunai desu.', polish: 'Dzisiaj nie chcę nic jeść.' }
    ],
    questions: [
      {
        sentence: 'わたしは あたらしい カメラを [?] です。',
        full: 'わたしは あたらしい カメラを かいたいです。',
        polish: 'Chcę kupić nowy aparat fotograficzny.',
        answer: 'かいたい',
        distractors: ['かうたい', 'かいて', 'かった'],
        explanation: 'Formę chęci tworzy temat czasownika (stem formy masu: かい) + たい: かいたい.'
      },
      {
        sentence: 'きょうは つかれたから、どこへも [?] です。',
        full: 'きょうは つかれたから、どこへも いきたくない です。',
        polish: 'Jestem dziś zmęczony, więc nigdzie nie chcę iść.',
        answer: 'いきたくない',
        distractors: ['いかないたい', 'いくない', 'いきたかった'],
        explanation: 'Przeczenie formy chęci („nie chcę iść”) tworzy końcówka 〜たくない: いきたくない.'
      },
      {
        sentence: 'なに [?] のみたいですか。',
        full: 'なにが のみたいですか。',
        polish: 'Czego chciałbyś się napić?',
        answer: 'が',
        distractors: ['に', 'で', 'へ'],
        explanation: 'W pytaniach i zdaniach z formą 〜たい obiekt pragnienia bardzo często łączy się z partykułą が: なにが のみたいですか.'
      }
    ]
  },
  {
    id: 'tsumori',
    category: 'conversation',
    kana: '〜つもり',
    speakKana: 'いく つもり',
    romaji: 'tsumori',
    label: 'Zamiary i plany (〜つもり / 〜予定)',
    pattern: '[Czasownik forma słownikowa / forma nai] + つもりです',
    description: 'Wyraża zamiar lub intencję podjęcia działania („mam zamiar...”, „planuję...”). Łączy się bezpośrednio z formą słownikową czasownika (twierdzenie) lub formą przeczącą -nai (przeczenie: „nie mam zamiaru...”).',
    notes: 'Różnica つもり vs 予定 (よてい): つもり to subiektywny zamiar mówiącego, natomiast 予定 oznacza obiektywny plan lub harmonogram (np. odlot samolotu, zaplanowane spotkanie). W zdaniach z osobami trzecimi używa się 〜つもりだそうです („podobno ma zamiar”).',
    examples: [
      { japanese: 'らいねん にほんへ いく つもりです。', romaji: 'Rainen Nihon e iku tsumori desu.', polish: 'Mam zamiar pojechać w przyszłym roku do Japonii.' },
      { japanese: 'きょうは テレビを みない つもりです。', romaji: 'Kyou wa terebi o minai tsumori desu.', polish: 'Dzisiaj nie mam zamiaru oglądać telewizji.' },
      { japanese: 'あしたは ともだちと あう よていです。', romaji: 'Ashita wa tomodachi to au yotei desu.', polish: 'Jutro w planach mam spotkanie z przyjacielem.' }
    ],
    questions: [
      {
        sentence: 'だいがくで にほんごを [?] つもりです。',
        full: 'だいがくで にほんごを べんきょうする つもりです。',
        polish: 'Mam zamiar studiować japoński na uniwersytecie.',
        answer: 'べんきょうする',
        distractors: ['べんきょうして', 'べんきょうした', 'べんきょうし'],
        explanation: 'Przed つもり używa się formy prostej (słownikowej) czasownika: べんきょうする つもり.'
      },
      {
        sentence: 'あしたは どこへも [?] つもりです。',
        full: 'あしたは どこへも いかない つもりです。',
        polish: 'Jutro nie mam zamiaru nigdzie wychodzić.',
        answer: 'いかない',
        distractors: ['いくない', 'いかないで', 'いって'],
        explanation: 'Zamiar powstrzymania się od czynności wyraża forma przecząca -nai + つもり: いかない つもり.'
      },
      {
        sentence: 'らいしゅう ひこうきで [?] よていです。',
        full: 'らいしゅう ひこうきで かえる よていです。',
        polish: 'W przyszłym tygodniu mam zaplanowany powrót samolotem.',
        answer: 'かえる',
        distractors: ['かえり', 'かえって', 'かえった'],
        explanation: 'Konstrukcja planu (予定, よてい) łączy się z formą słownikową czasownika: かえる よてい.'
      }
    ]
  },
  {
    id: 'te_ageru_kureru',
    category: 'conversation',
    kana: '〜てあげる / 〜てくれる',
    speakKana: 'おしえてあげる',
    romaji: 'te ageru / te kureru',
    label: 'Wyświadczanie przysług (〜てあげる / 〜てくれる)',
    pattern: '[Czasownik-te] + あげる (robię dla kogoś) / くれる (ktoś robi dla mnie)',
    description: 'Fundamentalne japońskie konstrukcje dobrodziejstwa i uprzejmości. 〜てあげる oznacza zrobienie czegoś dobrego dla kogoś innego („zrobić komuś przysługę”). Z kolei 〜てくれる oznacza, że ktoś wyświadcza przysługę mówiącemu lub komuś z jego najbliższego kręgu.',
    notes: 'Kierunek przysługi w japońskim jest rygorystyczny! Nigdy nie mów, że ktoś „てあげる dla mnie” – gdy akcja zmierza w Twoją stronę, ZAWSZE używaj 〜てくれる lub 〜てもらう. Pamiętaj też: mówienie przełożonemu 〜てあげます może brzmieć protekcjonalnie („robię panu łaskę”), dlatego w sytuacjach formalnych stosuje się formy honoryfikatywne.',
    examples: [
      { japanese: 'わたしは いもうとに えいごを おしえて あげました。', romaji: 'Watashi wa imouto ni eigo o oshiete agemashita.', polish: 'Nauczyłem młodszą siostrę angielskiego (wyświadczyłem jej przysługę).' },
      { japanese: 'たなかさんは わたしに ほんを かして くれました。', romaji: 'Tanaka-san wa watashi ni hon o kashite kuremashita.', polish: 'Pan Tanaka pożyczył mi książkę (wyświadczył mi przysługę).' },
      { japanese: 'ともだちが えきまで おくって くれました。', romaji: 'Tomodachi ga eki made okutte kuremashita.', polish: 'Przyjaciel podwiózł / odprowadził mnie na stację.' }
    ],
    questions: [
      {
        sentence: 'わたしは おとうとに じてんしゃを なおして [?]。',
        full: 'わたしは おとうとに じてんしゃを なおして あげました。',
        polish: 'Naprawiłem młodszemu bratu rower (dla niego).',
        answer: 'あげました',
        distractors: ['くれました', 'もらいました', 'いました'],
        explanation: 'Mówiący wykonuje przysługę dla innej osoby (młodszego brata) – właściwą formą jest 〜てあげました.'
      },
      {
        sentence: 'やまださんは わたしに えきへの みちを [?] くれました。',
        full: 'やまださんは わたしに えきへの みちを おしえて くれました。',
        polish: 'Pan Yamada wskazał mi drogę na stację.',
        answer: 'おしえて',
        distractors: ['おしえ', 'おしえる', 'おしえた'],
        explanation: 'Konstrukcja wyświadczania przysługi wymaga formy te: おしえて くれました.'
      },
      {
        sentence: 'せんせいが わたしの さくぶんを [?] くれました。',
        full: 'せんせいが わたしの さくぶんを みて くれました。',
        polish: 'Nauczyciel zechciał sprawdzić / przeczytać moje wypracowanie.',
        answer: 'みて',
        distractors: ['み', 'みる', 'みた'],
        explanation: 'Gdy ktoś wyświadcza przysługę mówiącemu, czasownik występuje w formie -te + くれる: みて くれました.'
      }
    ]
  },
  {
    id: 'te_morau',
    category: 'conversation',
    kana: '〜てもらう',
    speakKana: 'なおしてもらう',
    romaji: 'te morau',
    label: 'Otrzymywanie przysługi na prośbę (〜てもらう)',
    pattern: '[Odbiorca] は [Wykonawca] に [Czasownik-te] + もらう / もらいました',
    description: 'Wyraża uzyskanie od kogoś przysługi, często w wyniku własnej prośby („poprosiłem kogoś i otrzymałem pomoc”). W odróżnieniu od 〜てくれる, w tej konstrukcji podmiotem zdania (z は) jest biorca/mówiący, a wykonawcę przysługi oznacza partykuła に.',
    notes: 'Kluczowe rozróżnienie: [Osoba] が [czynność]-てくれた (ktoś sam z siebie mi pomógł) vs わたしは [Osoba] に [czynność]-てもらった (zwróciłem się do kogoś i uzyskałem jego życzliwą pomoc).',
    examples: [
      { japanese: 'わたしは せんせいに さくぶんを なおして もらいました。', romaji: 'Watashi wa sensei ni sakubun o naoshite moraimashita.', polish: 'Nauczyciel poprawił mi wypracowanie (otrzymałem pomoc nauczyciela).' },
      { japanese: 'すずきさんに しゃしんを とって もらいました。', romaji: 'Suzuki-san ni shashin o totte moraimashita.', polish: 'Pan Suzuki zrobił mi zdjęcie (poprosiłem go o to).' },
      { japanese: 'やまださんに えいごを おしえて もらいます。', romaji: 'Yamada-san ni eigo o oshiete moraimasu.', polish: 'Poproszę pana Yamadę o lekcję angielskiego.' }
    ],
    questions: [
      {
        sentence: 'わたしは たなかさん [?] にほんごを おしえて もらいました。',
        full: 'わたしは たなかさんに にほんごを おしえて もらいました。',
        polish: 'Pan Tanaka uczył mnie japońskiego (otrzymałem od niego pomoc).',
        answer: 'に',
        distractors: ['を', 'で', 'へ'],
        explanation: 'W konstrukcji 〜てもらう osoba wyświadczająca przysługę (darczyńca) jest oznaczana partykułą に.'
      },
      {
        sentence: 'ともだちに にもつを [?] もらいました。',
        full: 'ともだちに にもつを もって もらいました。',
        polish: 'Przyjaciel poniósł mi bagaż.',
        answer: 'もって',
        distractors: ['もち', 'もつ', 'もった'],
        explanation: 'Czasownik もつ (trzymać/nieść) w połączeniu z 〜てもらう wymaga formy te: もって もらいました.'
      },
      {
        sentence: 'わたしは いしゃに くすりを [?] もらいました。',
        full: 'わたしは いしゃに くすりを だして もらいました。',
        polish: 'Lekarz przepisał mi leki.',
        answer: 'だして',
        distractors: ['だし', 'だす', 'だした'],
        explanation: 'Forma -te od だす (wypisać/wydać) to だして: だして もらいました.'
      }
    ]
  },
  {
    id: 'v_mashou',
    category: 'conversation',
    kana: '〜ましょう / 〜ませんか',
    speakKana: 'いきましょう',
    romaji: 'mashou / masen ka',
    label: 'Propozycje i zaproszenia (〜ましょう / 〜ませんか)',
    pattern: '[Temat masu] + ましょう (zróbmy!) / ませんか (czy nie zrobilibyśmy...?)',
    description: 'Podstawowe formuły dialogowe służące do proponowania wspólnych działań. 〜ましょう to zdecydowana propozycja („Zróbmy to razem!” lub zaoferowanie pomocy: „Czy mam pomóc?”), natomiast 〜ませんか to uprzejme, nienarzucające się zaproszenie dające rozmówcy pełną swobodę odpowiedzi.',
    notes: 'W japońskiej etykiecie zaproszenie w formie przeczącej pytającej (〜ませんか) jest znacznie bardziej eleganckie niż bezpośrednie stwierdzenie, gdyż nie stawia rozmówcy pod presją akceptacji.',
    examples: [
      { japanese: 'いっしょに ひるごはんを たべませんか。', romaji: 'Issho ni hirugohan o tabemasen ka.', polish: 'Może zjedlibyśmy razem obiad? (uprzejme zaproszenie)' },
      { japanese: 'ちょっと やすみましょう。', romaji: 'Chotto yasumimashou.', polish: 'Odpocznijmy chwilę! (propozycja)' },
      { japanese: 'にもつを もちましょうか。', romaji: 'Nimotsu o mochimashou ka.', polish: 'Czy ponieść ci bagaż? (zaoferowanie pomocy)' }
    ],
    questions: [
      {
        sentence: 'ロビーで コーヒーを [?]。ええ、そうしましょう。',
        full: 'ロビーで コーヒーを のみませんか。ええ、そうしましょう。',
        polish: 'Może napijemy się kawy w holu? – Tak, zróbmy tak.',
        answer: 'のみませんか',
        distractors: ['のみます', 'のまない', 'のめ'],
        explanation: 'Uprzejme zaproszenie rozmówcy do wspólnego napicia się kawy tworzy końcówka 〜ませんか.'
      },
      {
        sentence: 'じかんが ありますから、あるいて [?]。',
        full: 'じかんが ありますから、あるいて いきましょう。',
        polish: 'Mamy czas, więc pójdźmy pieszo!',
        answer: 'いきましょう',
        distractors: ['いきます', 'いく', 'いって'],
        explanation: 'Entuzjastyczną propozycję wspólnego działania tworzy forma 〜ましょう: いきましょう.'
      },
      {
        sentence: 'まどを [?] か。すずしい かぜが はいりますよ。',
        full: 'まどを あけましょうか。すずしい かぜが はいりますよ。',
        polish: 'Czy otworzyć okno? Wpadnie chłodny wietrzyk.',
        answer: 'あけましょう',
        distractors: ['あけます', 'あけて', 'あける'],
        explanation: 'Zaoferowanie pomocy lub podjęcie inicjatywy („Czy mam zrobić...?”) tworzy zwrot 〜ましょうか.'
      }
    ]
  },
  {
    id: 'purpose_ni_iku',
    category: 'conversation',
    kana: '〜に行く / 〜に来る',
    speakKana: 'かいにいく',
    romaji: 'ni iku / ni kuru',
    label: 'Cel przemieszczania się (〜に 行く / 来る / 帰る)',
    pattern: '[Miejsce] へ [Temat masu / Rzeczownik czynnościowy] に [行く / 来る / 帰る]',
    description: 'Konstrukcja gramatyczna wyrażająca cel przemieszczania się („idę / przychodzę / wracam, żeby zrobić coś...”). Temat czasownika w formie masu (masu-stem) lub rzeczownik czynnościowy łączy się z partykułą celu に oraz czasownikiem ruchu (いく, くる, かえる).',
    notes: 'Gdy celem jest rzeczownik oznaczający czynność (np. かいもの – zakupy, りょこう – podróż, しょくじ – posiłek), łączy się go z partykułą に bezpośrednio: かいもの に いく (iść na zakupy).',
    examples: [
      { japanese: 'スーパーへ パンを かいに いきます。', romaji: 'Suupaa e pan o kai ni ikimasu.', polish: 'Idę do supermarketu kupić chleb.' },
      { japanese: 'としょかんへ べんきょうしに いきました。', romaji: 'Toshokan e benkyoushi ni ikimashita.', polish: 'Poszedłem do biblioteki uczyć się.' },
      { japanese: 'にほんへ なにを しに きましたか。', romaji: 'Nihon e nani o shi ni kimashita ka.', polish: 'W jakim celu przybyłeś do Japonii? (co przyjechałeś robić?)' }
    ],
    questions: [
      {
        sentence: 'ゆうびんきょくへ きってを [?] に いきます。',
        full: 'ゆうびんきょくへ きってを かいに いきます。',
        polish: 'Idę na pocztę kupić znaczki.',
        answer: 'かい',
        distractors: ['かう', 'かって', 'かった'],
        explanation: 'Przed partykułą celu に w konstrukcji z czasownikiem ruchu używamy tematu formy masu (かう -> かいます -> かい).'
      },
      {
        sentence: 'きょうとへ [?] に いきたいです。',
        full: 'きょうとへ りょこうに いきたいです。',
        polish: 'Chcę pojechać do Kioto w celach turystycznych / na wycieczkę.',
        answer: 'りょこう',
        distractors: ['りょこうする', 'りょこうして', 'りょこうした'],
        explanation: 'Rzeczownik czynnościowy りょこう (podróż) łączy się z partykułą に bezpośrednio: りょこうに いく.'
      },
      {
        sentence: 'しょくどうへ ひるごはんを たべ [?] いきました。',
        full: 'しょくどうへ ひるごはんを たべに いきました。',
        polish: 'Poszedłem do stołówki zjeść obiad.',
        answer: 'に',
        distractors: ['を', 'で', 'へ'],
        explanation: 'Cel przemieszczania się („w celu zjedzenia”) po temacie czasownika たべ wyraża partykuła に.'
      }
    ]
  }
];

let grammarProgress = loadGrammar();

function loadGrammar() {
  try {
    const raw = localStorage.getItem(GRAMMAR_KEY);
    if (!raw) return { version: GRAMMAR_VERSION, particles: {}, totalAnswers: 0, lastPracticed: null };
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === GRAMMAR_VERSION && typeof parsed.particles === 'object') {
      return parsed;
    }
  } catch (e) {}
  return { version: GRAMMAR_VERSION, particles: {}, totalAnswers: 0, lastPracticed: null };
}

function saveGrammar() {
  try {
    localStorage.setItem(GRAMMAR_KEY, JSON.stringify(grammarProgress));
  } catch (e) {}
}

function resetGrammarData() {
  grammarProgress = { version: GRAMMAR_VERSION, particles: {}, totalAnswers: 0, lastPracticed: null };
  saveGrammar();
}

function grammarItem(id) {
  return GRAMMAR_ITEMS.find(item => item.id === id);
}

function grammarParticleStat(id) {
  if (!grammarProgress.particles[id]) {
    grammarProgress.particles[id] = { seen: 0, correct: 0, wrong: 0, mastered: false };
  }
  return grammarProgress.particles[id];
}

function recordGrammarAnswer(particleId, isCorrect) {
  const stat = grammarParticleStat(particleId);
  stat.seen++;
  if (isCorrect) stat.correct++;
  else stat.wrong++;

  if (stat.correct >= 3 && stat.correct / stat.seen >= 0.8) {
    stat.mastered = true;
  } else if (stat.wrong >= 2 && stat.correct / stat.seen < 0.7) {
    stat.mastered = false;
  }

  grammarProgress.totalAnswers = (grammarProgress.totalAnswers || 0) + 1;
  grammarProgress.lastPracticed = Date.now();
  saveGrammar();
  recordDailyAnswer(isCorrect);
}

function getGrammarSummaryStats() {
  let mastered = 0;
  let learning = 0;
  let unpracticed = 0;

  GRAMMAR_ITEMS.forEach(p => {
    const stat = grammarProgress.particles[p.id];
    if (stat && stat.mastered) mastered++;
    else if (stat && stat.seen > 0) learning++;
    else unpracticed++;
  });

  const total = GRAMMAR_ITEMS.length;
  const percent = total ? Math.round((mastered / total) * 100) : 0;
  const totalAnswers = grammarProgress.totalAnswers || 0;

  return { mastered, learning, unpracticed, total, percent, totalAnswers };
}

const grammarSession = {
  mode: 'hub',
  particleId: null,
  category: 'all',
  practice: null
};

function startGrammarPractice({ particleId = null, category = grammarSession.category || 'all' } = {}) {
  let pool = [];
  if (particleId) {
    const p = grammarItem(particleId);
    if (p && p.questions) {
      pool = p.questions.map(q => ({ ...q, particleId: p.id }));
    }
  } else {
    GRAMMAR_ITEMS.forEach(p => {
      const cat = p.category || 'particle';
      const matches =
        category === 'all' || cat === category || (category === 'verb' && (cat === 'verb' || cat === 'existence'));
      if (matches && p.questions) {
        p.questions.forEach(q => pool.push({ ...q, particleId: p.id }));
      }
    });
  }

  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 10);

  const prepared = selected.map(q => {
    const opts = [q.answer, ...q.distractors].sort(() => Math.random() - 0.5);
    return {
      ...q,
      options: opts
    };
  });

  state.screen = 'grammar';
  grammarSession.mode = 'practice';
  grammarSession.particleId = particleId;
  grammarSession.category = category;
  grammarSession.practice = {
    questions: prepared,
    index: 0,
    score: 0,
    answered: false,
    chosen: null,
    isCorrect: false,
    finished: false,
    particleId,
    category
  };

  state.grammar = grammarSession;
  render();
}

function answerGrammarPractice(choice) {
  const s = grammarSession.practice;
  if (!s || s.answered || s.finished) return;

  const currentQ = s.questions[s.index];
  if (!currentQ) return;

  s.chosen = choice;
  s.isCorrect = choice === currentQ.answer;
  s.answered = true;

  if (s.isCorrect) {
    s.score++;
    Audio.correct();
  } else {
    Audio.wrong();
  }

  recordGrammarAnswer(currentQ.particleId, s.isCorrect);
  render();
}

function nextGrammarQuestion() {
  const s = grammarSession.practice;
  if (!s || !s.answered) return;

  s.index++;
  s.answered = false;
  s.chosen = null;
  s.isCorrect = false;

  if (s.index >= s.questions.length) {
    s.finished = true;
    Audio.celebrate();
  }

  render();
}

function renderGrammar() {
  if (!state.grammar) {
    grammarSession.mode = 'hub';
    state.grammar = grammarSession;
  }

  if (state.grammar.mode === 'detail') {
    renderGrammarDetail(state.grammar.particleId);
  } else if (state.grammar.mode === 'practice') {
    renderGrammarPractice();
  } else {
    renderGrammarHub();
  }
}

function renderGrammarHub() {
  const stats = getGrammarSummaryStats();
  const activeCat = grammarSession.category || 'all';

  const countAll = GRAMMAR_ITEMS.length;
  const countParticles = GRAMMAR_ITEMS.filter(p => !p.category || p.category === 'particle').length;
  const countVerbs = GRAMMAR_ITEMS.filter(p => p.category === 'verb' || p.category === 'existence').length;
  const countAdjectives = GRAMMAR_ITEMS.filter(p => p.category === 'adjective').length;
  const countConversation = GRAMMAR_ITEMS.filter(p => p.category === 'conversation').length;

  const filteredItems = GRAMMAR_ITEMS.filter(p => {
    const cat = p.category || 'particle';
    if (activeCat === 'all') return true;
    if (activeCat === 'particle') return cat === 'particle';
    if (activeCat === 'verb') return cat === 'verb' || cat === 'existence';
    if (activeCat === 'adjective') return cat === 'adjective';
    if (activeCat === 'conversation') return cat === 'conversation';
    return true;
  });

  let sectionTitle = `Katalog zagadnień gramatycznych (${filteredItems.length})`;
  if (activeCat === 'particle') sectionTitle = `Partykuły japońskie (${countParticles})`;
  else if (activeCat === 'verb') sectionTitle = `Koniugacja czasowników i formy (${countVerbs})`;
  else if (activeCat === 'adjective') sectionTitle = `Przymiotniki typu I oraz NA (${countAdjectives})`;
  else if (activeCat === 'conversation') sectionTitle = `Konstrukcje konwersacyjne i dialogi (${countConversation})`;

  app.innerHTML = `
    <div class="grammar-screen animate-fade">
      <div class="grammar-hero">
        <div class="grammar-hero-watermark" aria-hidden="true">文</div>
        <div class="grammar-hero-content">
          <span class="grammar-eyebrow">GRAMATYKA JAPOŃSKA · N5</span>
          <h1 class="grammar-title">Partykuły, Czasowniki i Dialogi</h1>
          <p class="grammar-desc">
            Kluczowe zagadnienia gramatyczne poziomu N5.
            Opanuj partykuły (助詞), formy czasowników (ます, て, た), przymiotniki oraz konstrukcje konwersacyjne (たい, つもり, てあげる/くれる, zaproszenia) i trenuj uzupełnianie zdań.
          </p>

          <div class="grammar-activity-bar">
            <div class="grammar-stat-chip">
              <span class="grammar-stat-val">${stats.mastered} / ${stats.total}</span>
              <span class="grammar-stat-lbl">Opanowane zagadnienia</span>
            </div>
            <div class="grammar-stat-chip">
              <span class="grammar-stat-val">${stats.learning}</span>
              <span class="grammar-stat-lbl">W trakcie nauki</span>
            </div>
            <div class="grammar-stat-chip">
              <span class="grammar-stat-val">${stats.totalAnswers}</span>
              <span class="grammar-stat-lbl">Rozwiązanych ćwiczeń</span>
            </div>
            <div class="grammar-stat-chip progress-chip">
              <span class="grammar-stat-val">${stats.percent}%</span>
              <span class="grammar-stat-lbl">Całkowity postęp</span>
              <div class="grammar-mini-progress">
                <div class="grammar-mini-progress-fill" style="width: ${stats.percent}%"></div>
              </div>
            </div>
          </div>

          <div class="grammar-hero-actions">
            <button class="btn btn-primary grammar-hero-btn" id="btnStartGrammarCloze" type="button">
              ${icon('quiz')} Rozpocznij trening luk (10 pytań)
            </button>
            <button class="btn btn-secondary grammar-hero-btn" id="btnScrollToParticles" type="button">
              ${icon('list')} Przeglądaj katalog
            </button>
          </div>
        </div>
      </div>

      <div class="grammar-category-pills" role="tablist" aria-label="Kategorie gramatyczne">
        <button class="grammar-pill ${activeCat === 'all' ? 'active' : ''}" data-cat="all" role="tab" type="button">
          Wszystko <span class="grammar-pill-count">${countAll}</span>
        </button>
        <button class="grammar-pill ${activeCat === 'particle' ? 'active' : ''}" data-cat="particle" role="tab" type="button">
          Partykuły <span class="grammar-pill-count">${countParticles}</span>
        </button>
        <button class="grammar-pill ${activeCat === 'verb' ? 'active' : ''}" data-cat="verb" role="tab" type="button">
          Czasowniki i formy <span class="grammar-pill-count">${countVerbs}</span>
        </button>
        <button class="grammar-pill ${activeCat === 'adjective' ? 'active' : ''}" data-cat="adjective" role="tab" type="button">
          Przymiotniki <span class="grammar-pill-count">${countAdjectives}</span>
        </button>
        <button class="grammar-pill ${activeCat === 'conversation' ? 'active' : ''}" data-cat="conversation" role="tab" type="button">
          Konwersacja <span class="grammar-pill-count">${countConversation}</span>
        </button>
      </div>

      <div class="grammar-section-header" id="grammarParticlesSection">
        <h2 class="grammar-section-title">${sectionTitle}</h2>
        <span class="grammar-section-hint">Kliknij pozycję, aby otworzyć szczegóły, reguły i przykłady</span>
      </div>

      <div class="grammar-particle-grid">
        ${filteredItems
          .map(p => {
            const stat = grammarParticleStat(p.id);
            const badgeClass = stat.mastered ? 'badge-mastered' : stat.seen > 0 ? 'badge-learning' : 'badge-new';
            const badgeText = stat.mastered ? 'Opanowane' : stat.seen > 0 ? 'W nauce' : 'Nowe';
            const isLong = p.kana.length > 3;

            return `
            <div class="grammar-particle-card" data-particle-id="${p.id}" tabindex="0" role="button" aria-label="Zagadnienie ${escapeHtml(p.kana)}">
              <div class="grammar-card-head">
                <div class="grammar-card-kana font-japanese ${isLong ? 'is-long' : ''}">${p.kana}</div>
                <div class="grammar-card-headings">
                  <span class="grammar-card-romaji">${escapeHtml(p.romaji)}</span>
                  <h3 class="grammar-card-label">${escapeHtml(p.label)}</h3>
                </div>
                <span class="grammar-card-badge ${badgeClass}">${badgeText}</span>
              </div>
              <div class="grammar-card-pattern">
                <code>${escapeHtml(p.pattern)}</code>
              </div>
              <p class="grammar-card-snippet">
                ${escapeHtml(p.description)}
              </p>
              <div class="grammar-card-footer">
                <span class="grammar-card-link">Szczegóły i przykłady →</span>
                <span class="grammar-card-score">${stat.seen > 0 ? `Trafność: ${stat.seen ? Math.round((stat.correct / stat.seen) * 100) : 0}% (${stat.correct}/${stat.seen})` : 'Niećwiczone'}</span>
              </div>
            </div>
          `;
          })
          .join('')}
      </div>
    </div>
  `;

  document.getElementById('btnStartGrammarCloze').onclick = () => {
    Audio.click();
    startGrammarPractice({ category: grammarSession.category });
  };

  document.getElementById('btnScrollToParticles').onclick = () => {
    Audio.click();
    const section = document.getElementById('grammarParticlesSection');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  document.querySelectorAll('[data-cat]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      grammarSession.category = btn.dataset.cat;
      renderGrammarHub();
    };
  });

  document.querySelectorAll('[data-particle-id]').forEach(card => {
    const open = () => {
      Audio.click();
      grammarSession.mode = 'detail';
      grammarSession.particleId = card.dataset.particleId;
      state.grammar = grammarSession;
      render();
    };
    card.onclick = open;
    card.onkeydown = e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    };
  });
}

function renderGrammarDetail(particleId = (state.grammar && state.grammar.particleId) || grammarSession.particleId) {
  const p = grammarItem(particleId);
  if (!p) {
    grammarSession.mode = 'hub';
    if (state.grammar) state.grammar.mode = 'hub';
    renderGrammarHub();
    return;
  }

  const stat = grammarParticleStat(p.id);
  const badgeClass = stat.mastered ? 'badge-mastered' : stat.seen > 0 ? 'badge-learning' : 'badge-new';
  const badgeText = stat.mastered ? 'Opanowane' : stat.seen > 0 ? 'W nauce' : 'Nowe';
  const speakText = p.speakKana || p.kana.replace(/[〜~]/g, '').split('/')[0].trim();
  const isLong = p.kana.length > 3;

  app.innerHTML = `
    <div class="grammar-detail-screen animate-fade">
      <div class="grammar-detail-nav">
        <button class="btn btn-secondary btn-sm" id="btnGrammarBackToHub" type="button">
          ${icon('chevron-left')} Wróć do listy zagadnień
        </button>
      </div>

      <div class="grammar-detail-card card">
        <div class="grammar-detail-head">
          <div class="grammar-detail-kana-wrap ${isLong ? 'is-long' : ''}">
            <span class="grammar-detail-kana font-japanese ${isLong ? 'is-long' : ''}">${p.kana}</span>
            <button class="btn-speak" data-speak="${escapeHtml(speakText)}" type="button" title="Odsłuchaj ${escapeHtml(p.kana)}" aria-label="Odsłuchaj ${escapeHtml(p.kana)}">
              ${icon('volume')}
            </button>
          </div>
          <div class="grammar-detail-meta">
            <div class="grammar-detail-eyebrow">GRAMATYKA JAPOŃSKA · N5 · ${escapeHtml(p.romaji.toUpperCase())}</div>
            <h1 class="grammar-detail-title">${escapeHtml(p.label)}</h1>
            <span class="grammar-card-badge ${badgeClass}">${badgeText} · ${stat.seen > 0 ? `Trafność: ${stat.seen ? Math.round((stat.correct / stat.seen) * 100) : 0}% (${stat.correct}/${stat.seen})` : 'Brak prób'}</span>
          </div>
        </div>

        <div class="grammar-pattern-box">
          <div class="grammar-box-kicker">Wzór zdania / Struktura składniowa:</div>
          <div class="grammar-pattern-formula"><code>${escapeHtml(p.pattern)}</code></div>
        </div>

        <div class="grammar-detail-section">
          <h2 class="grammar-section-subtitle">Rola gramatyczna i opis</h2>
          <p class="grammar-detail-text">${escapeHtml(p.description)}</p>
        </div>

        ${
          p.notes
            ? `
          <div class="grammar-pitfalls-box">
            <div class="grammar-pitfalls-title">⚠️ Ważna uwaga / Częste pułapki:</div>
            <p class="grammar-pitfalls-text">${escapeHtml(p.notes)}</p>
          </div>
        `
            : ''
        }

        <div class="grammar-examples-section">
          <h2 class="grammar-section-subtitle">Przykłady zdań z wymową audio</h2>
          <div class="grammar-examples-list">
            ${p.examples
              .map(
                ex => `
              <div class="grammar-example-item">
                <div class="grammar-example-content">
                  <div class="grammar-example-jp font-japanese">${escapeHtml(ex.japanese)}</div>
                  <div class="grammar-example-romaji">${escapeHtml(ex.romaji)}</div>
                  <div class="grammar-example-pl">${escapeHtml(ex.polish)}</div>
                </div>
                <button class="btn-speak btn-speak-sm" data-speak="${escapeHtml(ex.japanese)}" type="button" title="Odsłuchaj zdanie" aria-label="Odsłuchaj zdanie">
                  ${icon('volume')}
                </button>
              </div>
            `
              )
              .join('')}
          </div>
        </div>

        <div class="grammar-detail-footer">
          <button class="btn btn-primary" id="btnPracticeThisParticle" type="button">
            ${icon('quiz')} Ćwicz to zagadnienie (trening dedykowany)
          </button>
          <button class="btn btn-secondary" id="btnGrammarBackToHubBottom" type="button">
            Wróć do listy
          </button>
        </div>
      </div>
    </div>
  `;

  const back = () => {
    Audio.click();
    grammarSession.mode = 'hub';
    state.grammar = grammarSession;
    render();
  };

  document.getElementById('btnGrammarBackToHub').onclick = back;
  document.getElementById('btnGrammarBackToHubBottom').onclick = back;
  document.getElementById('btnPracticeThisParticle').onclick = () => {
    Audio.click();
    startGrammarPractice({ particleId: p.id });
  };
}

function renderGrammarPractice() {
  const s = grammarSession.practice;
  if (!s) {
    grammarSession.mode = 'hub';
    renderGrammarHub();
    return;
  }

  if (s.finished) {
    const total = s.questions.length;
    const correct = s.score;
    const pct = total ? Math.round((correct / total) * 100) : 0;

    app.innerHTML = `
      <div class="grammar-summary-screen animate-fade">
        <div class="grammar-summary-card card">
          <div class="grammar-summary-trophy">${pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪'}</div>
          <h1 class="grammar-summary-title">
            ${pct >= 80 ? 'Wspaniale!' : pct >= 50 ? 'Dobra robota!' : 'Warto poćwiczyć jeszcze raz!'}
          </h1>
          <p class="grammar-summary-desc">
            Ukończono trening luk gramatycznych.
          </p>

          <div class="grammar-summary-score-box">
            <div class="grammar-summary-score-num">${correct} / ${total}</div>
            <div class="grammar-summary-score-pct">${pct}% poprawnych odpowiedzi</div>
          </div>

          <div class="grammar-summary-actions">
            <button class="btn btn-primary" id="btnGrammarRestartPractice" type="button">
              Powtórz trening luk
            </button>
            <button class="btn btn-secondary" id="btnGrammarSummaryBack" type="button">
              Wróć do Gramatyki
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btnGrammarRestartPractice').onclick = () => {
      Audio.click();
      startGrammarPractice({
        particleId: s.particleId || grammarSession.particleId,
        category: s.category || grammarSession.category
      });
    };
    document.getElementById('btnGrammarSummaryBack').onclick = () => {
      Audio.click();
      grammarSession.mode = 'hub';
      state.grammar = grammarSession;
      render();
    };
    return;
  }

  const q = s.questions[s.index];
  const total = s.questions.length;
  const currentNum = s.index + 1;
  const pct = Math.round(((currentNum - 1) / total) * 100);

  const clozeDisplay = s.answered
    ? escapeHtml(q.sentence).replace(
        '[?]',
        `<span class="grammar-cloze-filled ${s.isCorrect ? 'is-correct' : 'is-wrong'}">${escapeHtml(s.chosen)}</span>`
      )
    : escapeHtml(q.sentence).replace('[?]', '<span class="grammar-cloze-gap">?</span>');

  const stats = `
    <span class="session-position">Pytanie <strong>${currentNum}</strong> z <strong>${total}</strong></span>
    <div class="badge session-score-badge" aria-label="Wynik: ${s.score} poprawnych">
      <span class="score-correct">${s.score} ✓</span>
    </div>
  `;

  const progress = `
    <div class="session-progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100">
      <div class="session-progress-fill" style="width: ${pct}%"></div>
    </div>
  `;

  app.innerHTML = sessionFrameHTML({
    eyebrow: 'GRAMATYKA JAPOŃSKA',
    title: 'Trening uzupełniania luk',
    stats,
    content: `
      ${progress}

      <div class="prompt grammar-cloze-prompt">
        <div class="polish">Uzupełnij lukę w zdaniu:</div>

        <div class="grammar-cloze-sentence-wrap">
          <div class="grammar-cloze-sentence font-japanese">${clozeDisplay}</div>
          <button class="btn-speak" data-speak="${escapeHtml(q.full)}" type="button" title="Odsłuchaj pełne zdanie" aria-label="Odsłuchaj pełne zdanie">
            ${icon('volume')}
          </button>
        </div>

        <div class="grammar-cloze-translation">
          ${escapeHtml(q.polish)}
        </div>

        <div class="grammar-choices-grid">
          ${q.options
            .map((opt, i) => {
              let stateClass = '';
              if (s.answered) {
                if (opt === q.answer) stateClass = 'choice-correct';
                else if (opt === s.chosen) stateClass = 'choice-wrong';
                else stateClass = 'choice-disabled';
              }
              return `
                <button class="grammar-choice-btn font-japanese ${stateClass}" data-grammar-choice="${escapeHtml(opt)}" ${s.answered ? 'disabled' : ''} type="button">
                  <span class="grammar-choice-idx">${i + 1}</span>
                  <span class="grammar-choice-kana">${escapeHtml(opt)}</span>
                </button>
              `;
            })
            .join('')}
        </div>

        ${
          s.answered
            ? `
          <div class="grammar-feedback-box animate-fade ${s.isCorrect ? 'is-correct' : 'is-wrong'}" role="status" aria-live="polite">
            <div class="grammar-feedback-status">
              ${s.isCorrect ? '✓ Poprawnie!' : `✗ Niepoprawnie — poprawna odpowiedź: <strong>${escapeHtml(q.answer)}</strong>`}
            </div>
            <div class="grammar-feedback-explanation">
              ${escapeHtml(q.explanation)}
            </div>
            <button class="btn btn-primary grammar-next-btn" id="btnGrammarNext" type="button" autofocus>
              Dalej (Enter) →
            </button>
          </div>
        `
            : ''
        }
      </div>
    `,
    className: 'grammar-session'
  });

  if (!s.answered) {
    document.querySelectorAll('[data-grammar-choice]').forEach(btn => {
      btn.onclick = () => answerGrammarPractice(btn.dataset.grammarChoice);
    });

    const onKey = e => {
      const idx = parseInt(e.key, 10);
      if (idx >= 1 && idx <= q.options.length) {
        e.preventDefault();
        window.removeEventListener('keydown', onKey);
        answerGrammarPractice(q.options[idx - 1]);
      }
    };
    window.addEventListener('keydown', onKey, { once: true });
  } else {
    const nextBtn = document.getElementById('btnGrammarNext');
    if (nextBtn) {
      nextBtn.onclick = () => nextGrammarQuestion();
      const onEnter = e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.removeEventListener('keydown', onEnter);
          nextGrammarQuestion();
        }
      };
      window.addEventListener('keydown', onEnter, { once: true });
    }
  }
}

const ACHIEVEMENTS_KEY = 'hiragana-achievements';
const ACHIEVEMENTS_VERSION = 1;
const BOOKMARKS_KEY = 'hiragana-bookmarks';
const BOOKMARKS_VERSION = 1;

function appStorageKeys() {
  return [
    SETTINGS_STORE_KEY,
    SETTINGS_KEY,
    PROGRESS_KEY,
    DAILY_STATS_KEY,
    VOCAB_KEY,
    KANJI_KEY,
    GRAMMAR_KEY,
    ACHIEVEMENTS_KEY,
    BOOKMARKS_KEY,
    LEGACY_THEME_KEY,
    LEGACY_MUTED_KEY
  ];
}

const BACKUP_APP_NAME = 'koto';
const BACKUP_SCHEMA_VERSION = 1;

function createBackupData() {
  const keys = appStorageKeys();
  const stores = {};
  keys.forEach(key => {
    try {
      const raw = localStorage.getItem(key);
      if (raw !== null) {
        try {
          stores[key] = JSON.parse(raw);
        } catch (e) {
          stores[key] = raw;
        }
      }
    } catch (e) {}
  });

  return {
    app: BACKUP_APP_NAME,
    version: BACKUP_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    stores
  };
}

function exportBackup() {
  try {
    const data = createBackupData();
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const date = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `koto-backup-${date}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return true;
  } catch (err) {
    console.error('Błąd podczas eksportu kopii zapasowej:', err);
    return false;
  }
}

function validateBackup(data) {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Plik nie zawiera poprawnego obiektu JSON.' };
  }
  if (data.app !== BACKUP_APP_NAME) {
    return { valid: false, error: 'Wybrany plik nie jest kopią zapasową aplikacji Koto.' };
  }
  if (typeof data.version !== 'number' || data.version < 1) {
    return { valid: false, error: 'Nieobsługiwana wersja pliku kopii zapasowej.' };
  }
  if (!data.stores || typeof data.stores !== 'object') {
    return { valid: false, error: 'Plik kopii zapasowej nie zawiera wymaganych magazynów danych.' };
  }
  return { valid: true };
}

function applyBackup(data) {
  const validation = validateBackup(data);
  if (!validation.valid) {
    throw new Error(validation.error);
  }

  const allowedKeys = appStorageKeys();

  // Najpierw usuwamy bieżące klucze
  allowedKeys.forEach(key => {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  });

  // Zapisujemy klucze z pliku kopii (tylko dozwolone klucze aplikacji)
  Object.keys(data.stores).forEach(key => {
    if (allowedKeys.includes(key)) {
      const val = data.stores[key];
      if (val !== undefined && val !== null) {
        const serialized = typeof val === 'string' ? val : JSON.stringify(val);
        try {
          localStorage.setItem(key, serialized);
        } catch (e) {}
      }
    }
  });

  // Przeładuj stan w pamięci
  settings = loadSettings();
  examSettings = loadExamSettings();
  progress = loadProgress();
  dailyStats = loadDailyStats();
  vocab = loadVocab();
  kanjiProgress = loadKanjiProgress();
  grammarProgress = loadGrammar();

  state.script = settings.script;
  state.theme = settings.theme;
  Audio.setMuted(settings.muted);

  applyTheme();

  return true;
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
  resetKanjiData();
  resetGrammarData();
  resetAchievementsData();
  resetBookmarksData();
  state.vocab = null;
  state.grammar = null;
  if (state.kanji) state.kanji.mode = 'hub';
}

function resetSettings() {
  setTheme(SETTINGS_DEFAULTS.theme);
  setMuted(SETTINGS_DEFAULTS.muted);
  setScript(SETTINGS_DEFAULTS.script);
  setHideGuide(SETTINGS_DEFAULTS.hideGuide);
  setDailyGoal(SETTINGS_DEFAULTS.dailyGoal);
}

function clearAllData() {
  stopExam();
  state.vocab = null;
  state.grammar = null;
  if (state.kanji) state.kanji.mode = 'hub';

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
  kanjiProgress = loadKanjiProgress();
  grammarProgress = loadGrammar();
  achievements = loadAchievements();
  bookmarks = loadBookmarks();

  state.script = settings.script;
  state.theme = settings.theme; // surowa preferencja, tak jak przy starcie
  Audio.setMuted(settings.muted);

  const firstGroup = getGroups()[0];
  state.group = firstGroup.key;
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
        <h3>Dźwięk i Ambient</h3>
        <div class="settings-row">
          <span class="settings-label" id="soundLabel">Wyciszenie dźwięku</span>
          <div class="settings-pills" role="group" aria-labelledby="soundLabel">
            ${settingsPill('false', String(settings.muted), 'Włączone', 'data-muted-set', 'muted-false')}
            ${settingsPill('true', String(settings.muted), 'Wyciszone', 'data-muted-set', 'muted-true')}
          </div>
        </div>
        <div class="settings-row" style="margin-top: 14px">
          <span class="settings-label" id="masterVolumeLabel">Głośność główna</span>
          <div class="settings-slider-wrapper">
            <input type="range" min="0" max="100" step="5" value="${settings.masterVolume ?? 80}" id="sliderMasterVolume" aria-labelledby="masterVolumeLabel" class="settings-slider" />
            <span class="settings-slider-value" id="valMasterVolume">${settings.masterVolume ?? 80}%</span>
          </div>
        </div>
        <div class="settings-row" style="margin-top: 14px">
          <span class="settings-label" id="sfxVolumeLabel">Efekty i wymowa (SFX)</span>
          <div class="settings-slider-wrapper">
            <input type="range" min="0" max="100" step="5" value="${settings.sfxVolume ?? 80}" id="sliderSfxVolume" aria-labelledby="sfxVolumeLabel" class="settings-slider" />
            <span class="settings-slider-value" id="valSfxVolume">${settings.sfxVolume ?? 80}%</span>
          </div>
        </div>
        <div class="settings-row" style="margin-top: 14px">
          <span class="settings-label" id="ambientSoundLabel">Dźwięk tła (Ambient)</span>
          <div class="settings-pills" role="group" aria-labelledby="ambientSoundLabel">
            ${settingsPill('rain', settings.ambientSound, '🌧️ Deszcz', 'data-ambient-set', 'ambient-rain')}
            ${settingsPill('bamboo', settings.ambientSound, '🎋 Bambus', 'data-ambient-set', 'ambient-bamboo')}
            ${settingsPill('waves', settings.ambientSound, '🌊 Fale', 'data-ambient-set', 'ambient-waves')}
            ${settingsPill('off', settings.ambientSound, 'Wył.', 'data-ambient-set', 'ambient-off')}
          </div>
        </div>
        <div class="settings-row" style="margin-top: 14px">
          <span class="settings-label" id="ambientVolumeLabel">Głośność tła</span>
          <div class="settings-slider-wrapper">
            <input type="range" min="0" max="100" step="5" value="${settings.ambientVolume ?? 50}" id="sliderAmbientVolume" aria-labelledby="ambientVolumeLabel" class="settings-slider" />
            <span class="settings-slider-value" id="valAmbientVolume">${settings.ambientVolume ?? 50}%</span>
          </div>
        </div>
      </div>

      <div class="settings-group card">
        <h3>Nauka</h3>
        <div class="settings-row">
          <span class="settings-label" id="scriptLabel">Domyślny skrypt</span>
          <div class="settings-pills" role="group" aria-labelledby="scriptLabel">
            ${settingsPill('hiragana', settings.script, 'ひ Hiragana', 'data-script-set', 'script-hiragana')}
            ${settingsPill('both', settings.script, 'ひカ Oba', 'data-script-set', 'script-both')}
            ${settingsPill('katakana', settings.script, 'カ Katakana', 'data-script-set', 'script-katakana')}
          </div>
        </div>
        <div class="settings-row" style="margin-top: 14px">
          <span class="settings-label" id="dailyGoalLabel">Cel dzienny</span>
          <div class="settings-pills" role="group" aria-labelledby="dailyGoalLabel">
            ${settingsPill('10', String(settings.dailyGoal), '10 pytań', 'data-daily-goal-set', 'goal-10')}
            ${settingsPill('20', String(settings.dailyGoal), '20 pytań', 'data-daily-goal-set', 'goal-20')}
            ${settingsPill('30', String(settings.dailyGoal), '30 pytań', 'data-daily-goal-set', 'goal-30')}
            ${settingsPill('50', String(settings.dailyGoal), '50 pytań', 'data-daily-goal-set', 'goal-50')}
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

      <div class="settings-group card" id="backupGroup">
        <h3>Kopia zapasowa</h3>
        <p class="settings-hint">
          Eksportuj wszystkie swoje postępy (Kana, Słownictwo, Kanji, Gramatyka, statystyki dzienne, serie i ustawienia) do pliku JSON lub przywróć je na innym urządzeniu.
        </p>
        <div class="settings-actions">
          <button class="btn btn-secondary" id="btnExportBackup" data-focus-key="export-backup">
            ${icon('download')} Eksportuj kopię (JSON)
          </button>
          <button class="btn btn-secondary" id="btnImportBackup" data-focus-key="import-backup">
            ${icon('upload')} Przywróć z pliku JSON
          </button>
          <input type="file" id="importBackupFile" accept=".json,application/json" style="display: none" />
        </div>
        <div id="backupStatusMsg" class="backup-status-msg" aria-live="polite"></div>
      </div>

      <div class="settings-group card" id="aboutApp">
        <h3>O aplikacji</h3>
        <div class="about-copy">
          <p>
            <strong>Koto</strong> to lokalna aplikacja do nauki japońskiej kany. Działa w przeglądarce — bez konta
            i bez serwera. Ustawienia i postęp są zapisywane wyłącznie na tym urządzeniu, a po pierwszym
            załadowaniu aplikacja działa również offline.
          </p>
          <p>Zakres: hiragana i katakana — znaki podstawowe oraz modyfikowane (dakuten, handakuten, yōon).</p>
          <p>
            Kształty znaków i animacje kresek:
            <a href="https://github.com/KanjiVG/kanjivg" target="_blank" rel="noopener noreferrer">KanjiVG</a>,
            licencja
            <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank" rel="noopener noreferrer"
              >CC BY-SA 3.0</a
            >. Pliki SVG są pobierane z publicznego repozytorium KanjiVG przez jsDelivr.
          </p>
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

  const masterSlider = document.getElementById('sliderMasterVolume');
  if (masterSlider) {
    masterSlider.oninput = e => {
      const val = parseInt(e.target.value, 10);
      const valSpan = document.getElementById('valMasterVolume');
      if (valSpan) valSpan.textContent = val + '%';
      setAudioVolume('master', val);
    };
  }

  const sfxSlider = document.getElementById('sliderSfxVolume');
  if (sfxSlider) {
    sfxSlider.oninput = e => {
      const val = parseInt(e.target.value, 10);
      const valSpan = document.getElementById('valSfxVolume');
      if (valSpan) valSpan.textContent = val + '%';
      setAudioVolume('sfx', val);
    };
    sfxSlider.onchange = () => {
      Audio.click();
    };
  }

  const ambientSlider = document.getElementById('sliderAmbientVolume');
  if (ambientSlider) {
    ambientSlider.oninput = e => {
      const val = parseInt(e.target.value, 10);
      const valSpan = document.getElementById('valAmbientVolume');
      if (valSpan) valSpan.textContent = val + '%';
      setAudioVolume('ambient', val);
    };
  }

  document.querySelectorAll('[data-ambient-set]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      setAmbientSound(btn.dataset.ambientSet);
      renderSettingsFocused('ambient-' + btn.dataset.ambientSet);
    };
  });

  document.querySelectorAll('[data-script-set]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      setScript(btn.dataset.scriptSet);
      renderSettingsFocused('script-' + btn.dataset.scriptSet);
    };
  });

  document.querySelectorAll('[data-daily-goal-set]').forEach(btn => {
    btn.onclick = () => {
      Audio.click();
      setDailyGoal(btn.dataset.dailyGoalSet);
      renderSettingsFocused('goal-' + btn.dataset.dailyGoalSet);
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

  const exportBtn = document.getElementById('btnExportBackup');
  if (exportBtn) {
    exportBtn.onclick = () => {
      Audio.click();
      const ok = exportBackup();
      const statusEl = document.getElementById('backupStatusMsg');
      if (statusEl) {
        if (ok) {
          statusEl.className = 'backup-status-msg is-success';
          statusEl.textContent = 'Kopia zapasowa została pomyślnie wyeksportowana i pobrana!';
        } else {
          statusEl.className = 'backup-status-msg is-error';
          statusEl.textContent = 'Nie udało się wyeksportować kopii zapasowej.';
        }
      }
    };
  }

  const importBtn = document.getElementById('btnImportBackup');
  const importInput = document.getElementById('importBackupFile');
  if (importBtn && importInput) {
    importBtn.onclick = () => {
      Audio.click();
      importInput.value = '';
      importInput.click();
    };

    importInput.onchange = e => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;

      const statusEl = document.getElementById('backupStatusMsg');

      const reader = new FileReader();
      reader.onload = evt => {
        try {
          const parsed = JSON.parse(evt.target.result);
          const validation = validateBackup(parsed);
          if (!validation.valid) {
            if (statusEl) {
              statusEl.className = 'backup-status-msg is-error';
              statusEl.textContent = validation.error;
            }
            return;
          }

          const dateStr = parsed.exportedAt ? new Date(parsed.exportedAt).toLocaleString() : 'nieznanej daty';
          if (
            !confirm(
              `Przywrócić kopię zapasową utworzoną: ${dateStr}?\n\n` +
                'Uwaga: Wszystkie bieżące postępy na tym urządzeniu zostaną zastąpione danymi z pliku kopii.'
            )
          ) {
            return;
          }

          applyBackup(parsed);
          renderSettingsFocused('import-backup');

          const newStatus = document.getElementById('backupStatusMsg');
          if (newStatus) {
            newStatus.className = 'backup-status-msg is-success';
            newStatus.textContent = 'Kopia zapasowa została pomyślnie przywrócona!';
          }
        } catch (err) {
          if (statusEl) {
            statusEl.className = 'backup-status-msg is-error';
            statusEl.textContent = 'Błąd odczytu pliku kopii: ' + (err.message || 'nieprawidłowy format JSON');
          }
        }
      };

      reader.onerror = () => {
        if (statusEl) {
          statusEl.className = 'backup-status-msg is-error';
          statusEl.textContent = 'Błąd odczytu pliku z dysku.';
        }
      };

      reader.readAsText(file);
    };
  }
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
   OSIĄGNIĘCIA I KAMIENIE MILOWE (T23)
   ------------------------------------------------------------
   12 zdefiniowanych odznak motywacyjnych. Odznaki wspierają
   naukę we wszystkich modułach (Kana, Słownictwo, Kanji, Gramatyka)
   oraz nagradzają regularność bez wprowadzania presji.
========================================================= */

const ACHIEVEMENT_DEFINITIONS = [
  {
    id: 'first_step',
    icon: '🌱',
    title: 'Pierwszy Krok',
    desc: 'Ukończ swoje pierwsze ćwiczenie w dowolnym module.',
    target: 1,
    check: ctx => ctx.totalAnswers >= 1,
    progress: ctx => Math.min(ctx.totalAnswers, 1) + ' / 1'
  },
  {
    id: 'hiragana_master',
    icon: '🌸',
    title: 'Mistrz Hiragany',
    desc: 'Opanuj wszystkie 46 podstawowych znaków Hiragany.',
    target: 46,
    check: ctx => ctx.hiraganaMastered >= 46,
    progress: ctx => Math.min(ctx.hiraganaMastered, 46) + ' / 46'
  },
  {
    id: 'katakana_master',
    icon: '⚡',
    title: 'Mistrz Katakany',
    desc: 'Opanuj wszystkie 46 podstawowych znaków Katakany.',
    target: 46,
    check: ctx => ctx.katakanaMastered >= 46,
    progress: ctx => Math.min(ctx.katakanaMastered, 46) + ' / 46'
  },
  {
    id: 'calligrapher',
    icon: '🖌️',
    title: 'Kaligraf',
    desc: 'Wykonaj swój pierwszy rysunek znaku Kanji na płótnie.',
    target: 1,
    check: ctx => ctx.drawingsCount >= 1,
    progress: ctx => Math.min(ctx.drawingsCount, 1) + ' / 1'
  },
  {
    id: 'brush_master',
    icon: '🎨',
    title: 'Mistrz Pędzla',
    desc: 'Wykonaj i oceń co najmniej 20 rysunków znaków Kanji.',
    target: 20,
    check: ctx => ctx.drawingsCount >= 20,
    progress: ctx => Math.min(ctx.drawingsCount, 20) + ' / 20'
  },
  {
    id: 'vocab_scholar',
    icon: '📖',
    title: 'Znawca Słów',
    desc: 'Poćwicz co najmniej 30 słówek w module Słownictwa.',
    target: 30,
    check: ctx => ctx.vocabSeen >= 30,
    progress: ctx => Math.min(ctx.vocabSeen, 30) + ' / 30'
  },
  {
    id: 'kanji_n5_base',
    icon: '⛩️',
    title: 'Baza Kanji N5',
    desc: 'Przerób w nauce co najmniej 30 znaków Kanji.',
    target: 30,
    check: ctx => ctx.kanjiSeen >= 30,
    progress: ctx => Math.min(ctx.kanjiSeen, 30) + ' / 30'
  },
  {
    id: 'grammarian',
    icon: '📜',
    title: 'Gramatyk',
    desc: 'Opanuj co najmniej 5 zagadnień gramatycznych.',
    target: 5,
    check: ctx => ctx.grammarMastered >= 5,
    progress: ctx => Math.min(ctx.grammarMastered, 5) + ' / 5'
  },
  {
    id: 'perfectionist',
    icon: '🎯',
    title: 'Perfekcja',
    desc: 'Ukończ sesję egzaminacyjną lub quiz ze 100% poprawnych odpowiedzi.',
    target: 1,
    check: ctx => ctx.perfectExams >= 1,
    progress: ctx => Math.min(ctx.perfectExams, 1) + ' / 1'
  },
  {
    id: 'streak_3',
    icon: '🔥',
    title: 'Regularność (3 dni)',
    desc: 'Utrzymaj serię nauki przez co najmniej 3 dni z rzędu.',
    target: 3,
    check: ctx => ctx.streakDays >= 3,
    progress: ctx => Math.min(ctx.streakDays, 3) + ' / 3 dni'
  },
  {
    id: 'streak_7',
    icon: '⭐',
    title: 'Żelazna Wola (7 dni)',
    desc: 'Utrzymaj serię nauki przez 7 dni z rzędu.',
    target: 7,
    check: ctx => ctx.streakDays >= 7,
    progress: ctx => Math.min(ctx.streakDays, 7) + ' / 7 dni'
  },
  {
    id: 'century',
    icon: '💯',
    title: 'Setka na Liczniku',
    desc: 'Udziel łącznie 100 poprawnych odpowiedzi w aplikacji.',
    target: 100,
    check: ctx => ctx.totalCorrect >= 100,
    progress: ctx => Math.min(ctx.totalCorrect, 100) + ' / 100'
  }
];

function loadAchievements() {
  try {
    const raw = localStorage.getItem(ACHIEVEMENTS_KEY);
    if (!raw) return { version: ACHIEVEMENTS_VERSION, unlocked: {}, drawingsCount: 0, perfectExams: 0 };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.unlocked === 'object') {
      return {
        version: ACHIEVEMENTS_VERSION,
        unlocked: parsed.unlocked || {},
        drawingsCount: Number(parsed.drawingsCount) || 0,
        perfectExams: Number(parsed.perfectExams) || 0
      };
    }
  } catch (e) {}
  return { version: ACHIEVEMENTS_VERSION, unlocked: {}, drawingsCount: 0, perfectExams: 0 };
}

let achievements = loadAchievements();

function saveAchievements() {
  try {
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
  } catch (e) {}
}

function resetAchievementsData() {
  achievements = { version: ACHIEVEMENTS_VERSION, unlocked: {}, drawingsCount: 0, perfectExams: 0 };
  saveAchievements();
}

function getAchievementContext() {
  const daily = loadDailyStats();
  let totalAnswers = 0;
  let totalCorrect = 0;
  if (daily && daily.days) {
    Object.values(daily.days).forEach(d => {
      totalAnswers += Number(d.answers) || 0;
      totalCorrect += Number(d.correct) || 0;
    });
  }

  const streaks = dailyStreaks(Date.now());
  const streakDays = Math.max(streaks.current || 0, streaks.best || 0);

  let hiraganaMastered = 0;
  let katakanaMastered = 0;
  const chars = (progress && progress.chars) || {};
  const BASIC_ROMAJI = [
    'a',
    'i',
    'u',
    'e',
    'o',
    'ka',
    'ki',
    'ku',
    'ke',
    'ko',
    'sa',
    'shi',
    'su',
    'se',
    'so',
    'ta',
    'chi',
    'tsu',
    'te',
    'to',
    'na',
    'ni',
    'nu',
    'ne',
    'no',
    'ha',
    'hi',
    'fu',
    'he',
    'ho',
    'ma',
    'mi',
    'mu',
    'me',
    'mo',
    'ya',
    'yu',
    'yo',
    'ra',
    'ri',
    'ru',
    're',
    'ro',
    'wa',
    'wo',
    'n'
  ];

  BASIC_ROMAJI.forEach(r => {
    const hStat = chars['h:' + r];
    if (hStat && (hStat.level >= 5 || hStat.mastered)) hiraganaMastered++;
    const kStat = chars['k:' + r];
    if (kStat && (kStat.level >= 5 || kStat.mastered)) katakanaMastered++;
  });

  const vocabSeen = vocab && vocab.cards ? Object.values(vocab.cards).filter(c => c.seen > 0).length : 0;
  const kanjiSeen =
    kanjiProgress && kanjiProgress.items ? Object.values(kanjiProgress.items).filter(k => k.seen > 0).length : 0;
  const grammarStats = getGrammarSummaryStats();
  const grammarMastered = grammarStats ? grammarStats.mastered : 0;

  return {
    totalAnswers,
    totalCorrect,
    streakDays,
    hiraganaMastered,
    katakanaMastered,
    vocabSeen,
    kanjiSeen,
    grammarMastered,
    drawingsCount: achievements.drawingsCount || 0,
    perfectExams: achievements.perfectExams || 0
  };
}

function checkAchievements() {
  const ctx = getAchievementContext();
  const newlyUnlocked = [];

  ACHIEVEMENT_DEFINITIONS.forEach(def => {
    if (!achievements.unlocked[def.id] && def.check(ctx)) {
      achievements.unlocked[def.id] = Date.now();
      newlyUnlocked.push(def);
    }
  });

  if (newlyUnlocked.length > 0) {
    saveAchievements();
    newlyUnlocked.forEach(def => {
      showAchievementToast(def);
    });
  }

  return achievements;
}

function openAchievementsModal() {
  checkAchievements();
  const ctx = getAchievementContext();
  const unlockedCount = Object.keys(achievements.unlocked).length;
  const totalCount = ACHIEVEMENT_DEFINITIONS.length;
  const percent = Math.round((unlockedCount / totalCount) * 100);

  let backdrop = document.getElementById('achievementsModalBackdrop');
  if (backdrop) backdrop.remove();

  backdrop = document.createElement('div');
  backdrop.id = 'achievementsModalBackdrop';
  backdrop.className = 'achievements-backdrop animate-fade';

  const cardsHtml = ACHIEVEMENT_DEFINITIONS.map(def => {
    const isUnlocked = !!achievements.unlocked[def.id];
    const unlockedDate = isUnlocked ? new Date(achievements.unlocked[def.id]).toLocaleDateString('pl-PL') : null;
    const progressText = def.progress ? def.progress(ctx) : isUnlocked ? 'Ukończono' : 'Do zdobycia';

    return `
      <div class="achievement-badge-card ${isUnlocked ? 'is-unlocked' : 'is-locked'}">
        <div class="achievement-badge-icon-wrap">
          <span class="achievement-badge-icon">${def.icon}</span>
        </div>
        <div class="achievement-badge-info">
          <div class="achievement-badge-title">${escapeHtml(def.title)}</div>
          <div class="achievement-badge-desc">${escapeHtml(def.desc)}</div>
          <div class="achievement-badge-status">
            ${
              isUnlocked
                ? `<span class="achievement-pill is-unlocked">${icon('check')} Zdobyto ${unlockedDate}</span>`
                : `<span class="achievement-pill is-locked">W trakcie: ${escapeHtml(progressText)}</span>`
            }
          </div>
        </div>
      </div>
    `;
  }).join('');

  backdrop.innerHTML = `
    <div class="achievements-modal animate-slide-up" role="dialog" aria-modal="true" aria-labelledby="achievementsModalTitle">
      <div class="achievements-modal-head">
        <div class="achievements-modal-head-titles">
          <span class="achievements-modal-eyebrow">KOTO · KAMIENIE MILOWE</span>
          <h2 class="achievements-modal-title" id="achievementsModalTitle">Osiągnięcia (${unlockedCount} / ${totalCount})</h2>
        </div>
        <button class="achievements-modal-close" id="btnCloseAchievementsModal" type="button" aria-label="Zamknij osiągnięcia">
          ${icon('x')}
        </button>
      </div>

      <div class="achievements-modal-progress-wrap">
        <div class="achievements-modal-progress-bar">
          <div class="achievements-modal-progress-fill" style="width: ${percent}%"></div>
        </div>
        <span class="achievements-modal-progress-label">${percent}% odblokowanych odznak</span>
      </div>

      <div class="achievements-grid">
        ${cardsHtml}
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  const close = () => {
    backdrop.classList.add('is-closing');
    setTimeout(() => backdrop.remove(), 250);
    window.removeEventListener('keydown', onKeyDown);
  };

  const onKeyDown = e => {
    if (e.key === 'Escape') close();
  };

  backdrop.onclick = e => {
    if (e.target === backdrop) close();
  };

  document.getElementById('btnCloseAchievementsModal').onclick = close;
  window.addEventListener('keydown', onKeyDown);
}

function showAchievementToast(def) {
  let container = document.getElementById('achievementToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'achievementToastContainer';
    container.className = 'achievement-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'achievement-toast animate-slide-up';
  toast.innerHTML = `
    <span class="achievement-toast-icon">${def.icon}</span>
    <div class="achievement-toast-body">
      <div class="achievement-toast-kicker">Zdobyto osiągnięcie!</div>
      <div class="achievement-toast-title">${escapeHtml(def.title)}</div>
    </div>
  `;
  container.appendChild(toast);

  try {
    Audio.celebrate();
  } catch (e) {}

  setTimeout(() => {
    toast.classList.add('is-hiding');
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}

/* =========================================================
   ZAKŁADKI I ULUBIONE / TRUDNE ZNAKI (T24)
   ------------------------------------------------------------
   Klucz: `hiragana-bookmarks`, wersja: 1.
   Pozwala oznaczać gwiazdką trudne lub ulubione elementy
   we wszystkich modułach: Kana, Słownictwo, Kanji.
========================================================= */

function loadBookmarks() {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    if (!raw) return { version: BOOKMARKS_VERSION, kana: [], kanji: [], vocab: [] };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return {
        version: BOOKMARKS_VERSION,
        kana: Array.isArray(parsed.kana) ? parsed.kana : [],
        kanji: Array.isArray(parsed.kanji) ? parsed.kanji : [],
        vocab: Array.isArray(parsed.vocab) ? parsed.vocab : []
      };
    }
  } catch (e) {}
  return { version: BOOKMARKS_VERSION, kana: [], kanji: [], vocab: [] };
}

let bookmarks = loadBookmarks();

function saveBookmarks() {
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
  } catch (e) {}
}

function resetBookmarksData() {
  bookmarks = { version: BOOKMARKS_VERSION, kana: [], kanji: [], vocab: [] };
  saveBookmarks();
}

function isBookmarked(type, id) {
  if (!bookmarks[type] || !Array.isArray(bookmarks[type])) return false;
  return bookmarks[type].includes(id);
}

function toggleBookmark(type, id) {
  if (!bookmarks[type] || !Array.isArray(bookmarks[type])) {
    bookmarks[type] = [];
  }
  const idx = bookmarks[type].indexOf(id);
  if (idx >= 0) {
    bookmarks[type].splice(idx, 1);
  } else {
    bookmarks[type].push(id);
  }
  saveBookmarks();
  return isBookmarked(type, id);
}

function getSmartPracticePool(type) {
  if (type === 'kanji') {
    const bookmarked = KANJI_ITEMS.filter(k => isBookmarked('kanji', k.id));
    const lowAccuracy = KANJI_ITEMS.filter(k => {
      const s = kanjiStat(k.id);
      return (s.seen > 0 && s.accuracy < 0.6) || s.status === 'learning';
    });
    const combined = [...bookmarked];
    for (const item of lowAccuracy) {
      if (!combined.some(k => k.id === item.id)) combined.push(item);
    }
    return combined;
  }
  if (type === 'vocab') {
    const bookmarked = VOCAB_ITEMS.filter(v => isBookmarked('vocab', v.id));
    const lowAccuracy = VOCAB_ITEMS.filter(v => {
      const s = vocabStat(v.id);
      return s.seen > 0 && s.accuracy < 0.6;
    });
    const combined = [...bookmarked];
    for (const item of lowAccuracy) {
      if (!combined.some(v => v.id === item.id)) combined.push(item);
    }
    return combined;
  }
  if (type === 'kana') {
    const chars = allChars();
    const bookmarked = chars.filter(c => isBookmarked('kana', c));
    const lowAccuracy = chars.filter(c => {
      const p = progress.chars[c];
      if (!p || !p.answers) return false;
      const acc = p.correct / p.answers;
      return acc < 0.6;
    });
    const combined = [...bookmarked];
    for (const c of lowAccuracy) {
      if (!combined.includes(c)) combined.push(c);
    }
    return combined;
  }
  return [];
}

/* =========================================================
   TRYB SKUPIENIA · ZEN FOCUS POMODORO (T25)
   ------------------------------------------------------------
   Głęboka sesja skupienia bez rozpraszaczy z generatorem
   organicznego tła dźwiękowego (deszcz, bambus, fale),
   timerem (15/20/25 min) i dynamicznym miksem pytań.
   Odpowiedzi aktualizują standardowe harmonogramy SRS i dziennik.
========================================================= */

let focusSession = null;

function formatFocusTimer(seconds) {
  const m = Math.floor(Math.max(0, seconds) / 60);
  const s = Math.max(0, seconds) % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function focusAmbientLabel(preset) {
  if (preset === 'rain') return '🌧️ Deszcz';
  if (preset === 'bamboo') return '🎋 Bambus';
  if (preset === 'waves') return '🌊 Fale';
  return 'Brak tła';
}

function buildFocusPool(scope = 'smart') {
  const pool = [];

  function pickDistractors(correctVal, fullList, count = 3) {
    const available = fullList.filter(item => item !== correctVal);
    const shuffled = [...available].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  function makeKanaItem(c) {
    const allRomaji = getAll().map(k => k.romaji);
    const distractors = pickDistractors(c.romaji, allRomaji, 3);
    const choices = [c.romaji, ...distractors].sort(() => Math.random() - 0.5);
    return {
      type: 'kana',
      id: c.kana,
      question: c.kana,
      promptSub: c.type ? `${c.type} · ${c.group || ''}` : 'Znak Kana',
      answer: c.romaji,
      choices,
      audioText: c.kana
    };
  }

  function makeVocabItem(v) {
    const meaning = v.meaning || v.pl || '';
    const allMeanings = VOCAB_LEARN_ITEMS.map(i => i.meaning || i.pl).filter(Boolean);
    const distractors = pickDistractors(meaning, allMeanings, 3);
    const choices = [meaning, ...distractors].sort(() => Math.random() - 0.5);
    return {
      type: 'vocab',
      id: v.id,
      question: v.kana,
      promptSub: v.kanji ? `${v.kanji} (${v.romaji})` : v.romaji,
      answer: meaning,
      choices,
      audioText: v.kana
    };
  }

  function makeKanjiItem(k) {
    const meaning = k.meaning || k.pl || '';
    const allMeanings = KANJI_ITEMS.map(i => i.meaning || i.pl).filter(Boolean);
    const distractors = pickDistractors(meaning, allMeanings, 3);
    const choices = [meaning, ...distractors].sort(() => Math.random() - 0.5);
    const subParts = [];
    if (Array.isArray(k.onyomi) && k.onyomi.length) subParts.push(k.onyomi.join(', '));
    else if (typeof k.onyomi === 'string') subParts.push(k.onyomi);
    if (Array.isArray(k.kunyomi) && k.kunyomi.length) subParts.push(k.kunyomi.join(', '));
    else if (typeof k.kunyomi === 'string') subParts.push(k.kunyomi);
    return {
      type: 'kanji',
      id: k.id,
      question: k.kanji,
      promptSub: subParts.join(' · ') || 'Kanji N5',
      answer: meaning,
      choices,
      audioText: null
    };
  }

  if (scope === 'kana') {
    const all = getAll().sort(() => Math.random() - 0.5);
    all.forEach(c => pool.push(makeKanaItem(c)));
    return pool;
  }

  if (scope === 'vocab') {
    const all = [...VOCAB_LEARN_ITEMS].sort(() => Math.random() - 0.5);
    all.forEach(v => pool.push(makeVocabItem(v)));
    return pool;
  }

  if (scope === 'kanji') {
    const all = [...KANJI_ITEMS].sort(() => Math.random() - 0.5);
    all.forEach(k => pool.push(makeKanjiItem(k)));
    return pool;
  }

  // scope === 'smart' (Inteligentny miks)
  // 1. Priorytet: elementy zaległe SRS (due)
  const dueKana = dueList();
  dueKana.slice(0, 15).forEach(kanaStr => {
    const charObj = item(kanaStr);
    if (charObj) pool.push(makeKanaItem(charObj));
  });

  if (typeof dueKanjiList === 'function') {
    const dueKanji = dueKanjiList();
    dueKanji.slice(0, 10).forEach(k => {
      pool.push(makeKanjiItem(k));
    });
  }

  // 2. Dodaj zrównoważony miks ze wszystkich trzech filarów
  const randomKana = getAll()
    .sort(() => Math.random() - 0.5)
    .slice(0, 25);
  randomKana.forEach(c => {
    if (!pool.some(p => p.id === c.kana)) pool.push(makeKanaItem(c));
  });

  const randomVocab = [...VOCAB_LEARN_ITEMS].sort(() => Math.random() - 0.5).slice(0, 20);
  randomVocab.forEach(v => {
    if (!pool.some(p => p.id === v.id)) pool.push(makeVocabItem(v));
  });

  const randomKanji = [...KANJI_ITEMS].sort(() => Math.random() - 0.5).slice(0, 15);
  randomKanji.forEach(k => {
    if (!pool.some(p => p.id === k.id)) pool.push(makeKanjiItem(k));
  });

  return pool.sort(() => Math.random() - 0.5);
}

function openFocusSetupModal() {
  closeFocusSetupModal();

  let selectedDuration = 20;
  let selectedScope = 'smart';
  let selectedAmbient = settings.ambientSound || 'rain';

  const backdrop = document.createElement('div');
  backdrop.id = 'focusModalBackdrop';
  backdrop.className = 'focus-modal-backdrop animate-fade';

  function renderModalContent() {
    backdrop.innerHTML = `
      <div class="focus-setup-modal animate-slide-up" role="dialog" aria-modal="true" aria-labelledby="focusModalTitle">
        <div class="focus-modal-head">
          <div class="focus-modal-brand">
            <span class="focus-modal-icon">⏳</span>
            <span class="focus-modal-eyebrow">SESJA SKUPIENIA · ZEN POMODORO</span>
          </div>
          <button class="focus-modal-close" id="btnFocusModalClose" aria-label="Zamknij">✕</button>
        </div>

        <div class="focus-modal-body">
          <h2 class="focus-modal-title" id="focusModalTitle">Tryb Głębokiego Skupienia</h2>
          <p class="focus-modal-desc">
            Uruchom wyciszoną sesję nauki bez rozpraszaczy z organicznym generatorem tła dźwiękowego,
            odliczaniem czasu i płynnym przepływem pytań.
          </p>

          <div class="focus-modal-section">
            <label class="focus-section-label" id="lblFocusDuration">Czas trwania sesji</label>
            <div class="focus-pills" role="group" aria-labelledby="lblFocusDuration">
              <button type="button" class="focus-pill ${selectedDuration === 15 ? 'is-active' : ''}" data-focus-time="15">15 min</button>
              <button type="button" class="focus-pill ${selectedDuration === 20 ? 'is-active' : ''}" data-focus-time="20">20 min</button>
              <button type="button" class="focus-pill ${selectedDuration === 25 ? 'is-active' : ''}" data-focus-time="25">25 min (Pomodoro)</button>
            </div>
          </div>

          <div class="focus-modal-section">
            <label class="focus-section-label" id="lblFocusScope">Materiał do nauki</label>
            <div class="focus-pills" role="group" aria-labelledby="lblFocusScope">
              <button type="button" class="focus-pill ${selectedScope === 'smart' ? 'is-active' : ''}" data-focus-scope="smart">✨ Inteligentny miks</button>
              <button type="button" class="focus-pill ${selectedScope === 'kana' ? 'is-active' : ''}" data-focus-scope="kana">ひ/カ Tylko Kana</button>
              <button type="button" class="focus-pill ${selectedScope === 'vocab' ? 'is-active' : ''}" data-focus-scope="vocab">語 Słownictwo</button>
              <button type="button" class="focus-pill ${selectedScope === 'kanji' ? 'is-active' : ''}" data-focus-scope="kanji">漢 Kanji</button>
            </div>
          </div>

          <div class="focus-modal-section">
            <label class="focus-section-label" id="lblFocusAmbient">Tło dźwiękowe (Ambient)</label>
            <div class="focus-pills" role="group" aria-labelledby="lblFocusAmbient">
              <button type="button" class="focus-pill ${selectedAmbient === 'rain' ? 'is-active' : ''}" data-focus-ambient="rain">🌧️ Deszcz</button>
              <button type="button" class="focus-pill ${selectedAmbient === 'bamboo' ? 'is-active' : ''}" data-focus-ambient="bamboo">🎋 Bambus</button>
              <button type="button" class="focus-pill ${selectedAmbient === 'waves' ? 'is-active' : ''}" data-focus-ambient="waves">🌊 Fale</button>
              <button type="button" class="focus-pill ${selectedAmbient === 'off' ? 'is-active' : ''}" data-focus-ambient="off">Brak</button>
            </div>
          </div>

          <div class="focus-modal-actions">
            <button class="btn btn-primary focus-start-btn" id="btnFocusModalStart">
              Rozpocznij skupienie ⏳
            </button>
          </div>
        </div>
      </div>
    `;

    const btnClose = backdrop.querySelector('#btnFocusModalClose');
    if (btnClose) {
      btnClose.onclick = () => {
        Audio.click();
        closeFocusSetupModal();
      };
    }

    backdrop.querySelectorAll('[data-focus-time]').forEach(btn => {
      btn.onclick = () => {
        Audio.click();
        selectedDuration = parseInt(btn.dataset.focusTime, 10);
        renderModalContent();
      };
    });

    backdrop.querySelectorAll('[data-focus-scope]').forEach(btn => {
      btn.onclick = () => {
        Audio.click();
        selectedScope = btn.dataset.focusScope;
        renderModalContent();
      };
    });

    backdrop.querySelectorAll('[data-focus-ambient]').forEach(btn => {
      btn.onclick = () => {
        Audio.click();
        selectedAmbient = btn.dataset.focusAmbient;
        renderModalContent();
      };
    });

    const btnStart = backdrop.querySelector('#btnFocusModalStart');
    if (btnStart) {
      btnStart.onclick = () => {
        Audio.click();
        startFocusSession({
          durationMinutes: selectedDuration,
          scope: selectedScope,
          ambient: selectedAmbient
        });
      };
    }
  }

  document.body.appendChild(backdrop);
  renderModalContent();

  const onKey = e => {
    if (e.key === 'Escape') {
      closeFocusSetupModal();
      window.removeEventListener('keydown', onKey);
    }
  };
  window.addEventListener('keydown', onKey);
}

function closeFocusSetupModal() {
  const backdrop = document.getElementById('focusModalBackdrop');
  if (backdrop) backdrop.remove();
}

function startFocusSession(opts = {}) {
  const duration = Number(opts.durationMinutes) || 20;
  const scope = opts.scope || 'smart';
  const ambient = opts.ambient || settings.ambientSound || 'rain';

  closeFocusSetupModal();

  const pool = buildFocusPool(scope);
  if (!pool || pool.length === 0) {
    alert('Nie udało się utworzyć zestawu pytań dla wybranego zakresu.');
    return;
  }

  focusSession = {
    durationMinutes: duration,
    totalSeconds: duration * 60,
    secondsLeft: duration * 60,
    scope: scope,
    ambientSound: ambient,
    isPaused: false,
    finished: false,
    currentIndex: 0,
    pool: pool,
    answeredThisCard: false,
    timerInterval: null,
    stats: {
      answered: 0,
      correct: 0,
      streak: 0,
      bestStreak: 0,
      startTime: Date.now()
    }
  };

  // Uruchomienie tła dźwiękowego
  if (ambient !== 'off' && typeof Audio !== 'undefined' && Audio.ambient) {
    Audio.ambient.start(ambient);
  }

  // Uruchomienie timera
  focusSession.timerInterval = setInterval(() => {
    if (!focusSession || focusSession.isPaused || focusSession.finished) return;
    focusSession.secondsLeft--;
    updateFocusTimerDisplay();
    if (focusSession.secondsLeft <= 0) {
      finishFocusSession();
    }
  }, 1000);

  setScreen('focus');
}

function updateFocusTimerDisplay() {
  if (!focusSession) return;
  const timeText = document.getElementById('focusTimerText');
  if (timeText) {
    timeText.textContent = formatFocusTimer(focusSession.secondsLeft);
  }
  const progFill = document.getElementById('focusTimerProgressFill');
  if (progFill && focusSession.totalSeconds > 0) {
    const elapsedPercent = Math.min(
      100,
      Math.round(((focusSession.totalSeconds - focusSession.secondsLeft) / focusSession.totalSeconds) * 100)
    );
    progFill.style.width = elapsedPercent + '%';
  }
}

function toggleFocusPause() {
  if (!focusSession || focusSession.finished) return;
  Audio.click();
  focusSession.isPaused = !focusSession.isPaused;
  if (focusSession.isPaused) {
    if (typeof Audio !== 'undefined' && Audio.ambient) {
      Audio.ambient.stop();
    }
  } else {
    if (focusSession.ambientSound !== 'off' && typeof Audio !== 'undefined' && Audio.ambient) {
      Audio.ambient.start(focusSession.ambientSound);
    }
  }
  renderFocus();
}

function cycleFocusAmbient() {
  if (!focusSession || focusSession.finished) return;
  Audio.click();
  const presets = ['rain', 'bamboo', 'waves', 'off'];
  const curIdx = presets.indexOf(focusSession.ambientSound);
  const nextPreset = presets[(curIdx + 1) % presets.length];
  focusSession.ambientSound = nextPreset;

  if (typeof Audio !== 'undefined' && Audio.ambient) {
    if (nextPreset === 'off') {
      Audio.ambient.stop();
    } else {
      Audio.ambient.start(nextPreset);
    }
  }

  const lbl = document.getElementById('focusAmbientLabel');
  if (lbl) lbl.textContent = focusAmbientLabel(nextPreset);
  const indicator = document.querySelector('.focus-ambient-indicator');
  if (indicator) indicator.classList.toggle('is-off', nextPreset === 'off');
}

function exitFocusSession() {
  if (focusSession) {
    if (focusSession.timerInterval) clearInterval(focusSession.timerInterval);
    if (typeof Audio !== 'undefined' && Audio.ambient) Audio.ambient.stop();
    focusSession = null;
  }
  const target = screenHistory.pop() || 'dashboard';
  setScreen(target, { isBack: true });
}

function finishFocusSession() {
  if (!focusSession || focusSession.finished) return;
  focusSession.finished = true;
  if (focusSession.timerInterval) clearInterval(focusSession.timerInterval);
  if (typeof Audio !== 'undefined' && Audio.ambient) Audio.ambient.stop();

  if (typeof Audio !== 'undefined' && Audio.celebrate) {
    Audio.celebrate();
  }

  showFocusSummaryModal();
}

function renderFocus() {
  if (!focusSession) {
    setScreen('dashboard');
    return;
  }

  const elapsedPercent = Math.min(
    100,
    Math.round(((focusSession.totalSeconds - focusSession.secondsLeft) / focusSession.totalSeconds) * 100)
  );

  app.innerHTML = `
    <div class="focus-screen animate-fade">
      <div class="focus-progress-line">
        <div class="focus-progress-line-fill" id="focusTimerProgressFill" style="width: ${elapsedPercent}%"></div>
      </div>

      <div class="focus-header">
        <button class="focus-header-btn exit" id="btnFocusExit" type="button" title="Zakończ sesję skupienia">
          ${icon('chevron-left')} Zakończ
        </button>

        <div class="focus-timer-badge">
          <span class="focus-timer-icon">⏳</span>
          <span id="focusTimerText" class="focus-timer-text">${formatFocusTimer(focusSession.secondsLeft)}</span>
        </div>

        <div class="focus-header-controls">
          <button class="focus-ambient-toggle" id="btnFocusAmbientToggle" type="button" title="Przełącz tło dźwiękowe">
            <span class="focus-ambient-indicator ${focusSession.ambientSound === 'off' ? 'is-off' : ''}"></span>
            <span id="focusAmbientLabel">${focusAmbientLabel(focusSession.ambientSound)}</span>
          </button>

          <button class="focus-header-btn pause ${focusSession.isPaused ? 'is-active' : ''}" id="btnFocusPause" type="button" title="${focusSession.isPaused ? 'Wznów' : 'Wstrzymaj'}">
            ${focusSession.isPaused ? '▶️ Wznów' : '⏸️'}
          </button>
        </div>
      </div>

      <div class="focus-meta-bar">
        <span class="focus-meta-item">
          🔥 Seria: <strong id="focusStreakVal">${focusSession.stats.streak}</strong>
        </span>
        <span class="focus-meta-divider">·</span>
        <span class="focus-meta-item">
          Wynik: <strong id="focusScoreVal">${focusSession.stats.correct} / ${focusSession.stats.answered}</strong>
        </span>
      </div>

      <div id="focusCardContainer" class="focus-card-area ${focusSession.isPaused ? 'is-paused' : ''}">
        ${
          focusSession.isPaused
            ? `
          <div class="focus-paused-overlay animate-fade">
            <div class="focus-paused-icon">⏸️</div>
            <h3 class="focus-paused-title">Sesja wstrzymana</h3>
            <p class="focus-paused-desc">Odpocznij chwilę i wróć do skupienia, gdy będziesz gotowy.</p>
            <button class="btn btn-primary" id="btnFocusResumeBig">Wznów sesję skupienia</button>
          </div>
        `
            : ''
        }
      </div>
    </div>
  `;

  document.getElementById('btnFocusExit').onclick = () => {
    Audio.click();
    if (!focusSession.finished) {
      if (!confirm('Czy na pewno chcesz zakończyć sesję skupienia?')) return;
    }
    exitFocusSession();
  };

  document.getElementById('btnFocusPause').onclick = toggleFocusPause;
  document.getElementById('btnFocusAmbientToggle').onclick = cycleFocusAmbient;

  const btnResumeBig = document.getElementById('btnFocusResumeBig');
  if (btnResumeBig) {
    btnResumeBig.onclick = toggleFocusPause;
  }

  if (!focusSession.isPaused) {
    renderFocusCard();
  }
}

function renderFocusCard() {
  const container = document.getElementById('focusCardContainer');
  if (!container || !focusSession || focusSession.isPaused) return;

  if (focusSession.currentIndex >= focusSession.pool.length) {
    const more = buildFocusPool(focusSession.scope);
    focusSession.pool.push(...more);
  }

  const item = focusSession.pool[focusSession.currentIndex];
  if (!item) {
    finishFocusSession();
    return;
  }

  focusSession.answeredThisCard = false;

  const typeLabel = item.type === 'kana' ? 'KANA' : item.type === 'vocab' ? 'SŁOWNICTWO' : 'KANJI';

  container.innerHTML = `
    <div class="focus-card animate-slide-up">
      <div class="focus-card-top">
        <span class="focus-card-type-tag">${typeLabel}</span>
        ${
          item.audioText
            ? `
          <button class="focus-audio-btn" id="btnFocusSpeak" type="button" title="Odsłuchaj wymowę (klawisz V lub Spacja)">
            ${icon('speaker')}
          </button>
        `
            : ''
        }
      </div>

      <div class="focus-question-wrap">
        <div class="focus-question-glyph">${escapeHtml(item.question)}</div>
        ${item.promptSub ? `<div class="focus-question-sub">${escapeHtml(item.promptSub)}</div>` : ''}
      </div>

      <div class="focus-choices-grid">
        ${item.choices
          .map(
            (choice, idx) => `
          <button class="focus-choice-btn" data-choice-idx="${idx}" data-choice-val="${escapeHtml(choice)}" type="button">
            <span class="focus-choice-idx">${idx + 1}</span>
            <span class="focus-choice-label">${escapeHtml(choice)}</span>
          </button>
        `
          )
          .join('')}
      </div>
    </div>
  `;

  const btnSpeak = document.getElementById('btnFocusSpeak');
  if (btnSpeak && item.audioText) {
    btnSpeak.onclick = () => {
      Audio.speak(item.audioText);
    };
  }

  container.querySelectorAll('.focus-choice-btn').forEach(btn => {
    btn.onclick = () => {
      const choiceVal = btn.dataset.choiceVal;
      handleFocusAnswer(choiceVal, item.answer, btn, item);
    };
  });
}

function handleFocusAnswer(selectedChoice, correctChoice, clickedBtn, item) {
  if (!focusSession || focusSession.answeredThisCard || focusSession.isPaused) return;
  focusSession.answeredThisCard = true;

  const isCorrect = selectedChoice === correctChoice;
  focusSession.stats.answered++;

  if (isCorrect) {
    focusSession.stats.correct++;
    focusSession.stats.streak++;
    if (focusSession.stats.streak > focusSession.stats.bestStreak) {
      focusSession.stats.bestStreak = focusSession.stats.streak;
    }
    clickedBtn.classList.add('is-correct');

    if (focusSession.stats.streak % 5 === 0 && focusSession.stats.streak > 0) {
      if (typeof Audio !== 'undefined' && Audio.streak) Audio.streak();
    } else {
      if (typeof Audio !== 'undefined' && Audio.correct) Audio.correct();
    }
  } else {
    focusSession.stats.streak = 0;
    clickedBtn.classList.add('is-wrong');

    // Podświetlenie poprawnej odpowiedzi
    document.querySelectorAll('.focus-choice-btn').forEach(btn => {
      if (btn.dataset.choiceVal === correctChoice) {
        btn.classList.add('is-correct');
      }
    });

    if (typeof Audio !== 'undefined' && Audio.wrong) Audio.wrong();
  }

  // Aktualizacja liczników w UI
  const streakVal = document.getElementById('focusStreakVal');
  if (streakVal) streakVal.textContent = focusSession.stats.streak;
  const scoreVal = document.getElementById('focusScoreVal');
  if (scoreVal) scoreVal.textContent = `${focusSession.stats.correct} / ${focusSession.stats.answered}`;

  // Zapis odpowiedzi do właściwego magazynu i historii dziennej
  try {
    if (item.type === 'kana') {
      recordAnswer(item.id, isCorrect, !isCorrect ? selectedChoice : null, 'focus');
    } else if (item.type === 'vocab') {
      recordVocabAnswer(item.id, isCorrect);
    } else if (item.type === 'kanji') {
      recordKanjiAnswer(item.id, isCorrect);
    }
  } catch (e) {}

  // Przejście do następnej karty
  const delay = isCorrect ? 500 : 950;
  setTimeout(() => {
    if (!focusSession || focusSession.finished) return;
    focusSession.currentIndex++;
    renderFocusCard();
  }, delay);
}

function showFocusSummaryModal() {
  const backdrop = document.createElement('div');
  backdrop.id = 'focusSummaryModalBackdrop';
  backdrop.className = 'focus-modal-backdrop animate-fade';

  const timeMinutes = Math.max(1, Math.round((focusSession.totalSeconds - focusSession.secondsLeft) / 60));
  const accuracy = focusSession.stats.answered
    ? Math.round((focusSession.stats.correct / focusSession.stats.answered) * 100)
    : 100;

  backdrop.innerHTML = `
    <div class="focus-summary-modal animate-slide-up" role="dialog" aria-modal="true" aria-labelledby="focusSummaryTitle">
      <div class="focus-summary-head">
        <span class="focus-summary-icon">🌸</span>
        <h2 class="focus-summary-title" id="focusSummaryTitle">Sesja Skupienia Zakończona</h2>
        <p class="focus-summary-subtitle">Doskonałe skupienie. Każdy krok buduje mistrzostwo.</p>
      </div>

      <div class="focus-summary-metrics">
        <div class="focus-summary-metric">
          <span class="focus-summary-val">${timeMinutes} min</span>
          <span class="focus-summary-lbl">Czas skupienia</span>
        </div>
        <div class="focus-summary-metric">
          <span class="focus-summary-val">${focusSession.stats.answered}</span>
          <span class="focus-summary-lbl">Ćwiczeń</span>
        </div>
        <div class="focus-summary-metric">
          <span class="focus-summary-val">${accuracy}%</span>
          <span class="focus-summary-lbl">Skuteczność</span>
        </div>
        <div class="focus-summary-metric">
          <span class="focus-summary-val">🔥 ${focusSession.stats.bestStreak}</span>
          <span class="focus-summary-lbl">Najlepsza seria</span>
        </div>
      </div>

      <p class="focus-summary-quote">
        „Spokojny umysł widzi znaki takimi, jakimi są w istocie.”
      </p>

      <div class="focus-summary-actions">
        <button class="btn btn-primary" id="btnFocusSummaryDone">
          Wróć do pulpitu →
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  document.getElementById('btnFocusSummaryDone').onclick = () => {
    Audio.click();
    backdrop.remove();
    exitFocusSession();
  };
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
      if (!count) return '';

      // W trybie `both` ta sama sekcja zawiera dwa alfabety. Bez nagłówka
      // 20 znaków hiragany przechodziłoby w 20 znaków katakany bez żadnej
      // granicy, a to dwie różne listy, nie jedna dłuższa.
      let lastScript = null;

      return `
        <details class="learn-section" data-category="${category.id}">
          <summary class="learn-section-head">
            <span class="learn-section-label">${category.label}</span>
            <span class="learn-section-count">${count}</span>
          </summary>
          <div class="learn-section-body">
            ${groups
              .map(group => {
                const scriptHead =
                  showsScriptLabels() && group.script !== lastScript
                    ? `<span class="kana-script-label">${scriptName(group.script)}</span>`
                    : '';
                lastScript = group.script;

                return (
                  scriptHead +
                  group.chars
                    .map(
                      ([kana, romaji]) => `
              <button class="kana-btn ${kana === state.kana ? 'active' : ''} mastery-${masteryLevel(kana)}" data-kana="${kana}" data-group="${group.key}" title="${romaji}">
                ${kana}
              </button>
            `
                    )
                    .join('')
                );
              })
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
        <div style="display:inline-flex;align-items:center;gap:8px;margin:4px 0">
          <h2 style="margin:0">${current.romaji}</h2>
          <button class="btn-speak" id="speakKana" data-speak="${escapeHtml(state.kana)}" type="button" title="Odsłuchaj wymowę (S)" aria-label="Odsłuchaj wymowę ${current.romaji}">
            ${icon('volume')}
          </button>
          <button class="btn-star-kana ${isBookmarked('kana', state.kana) ? 'bookmarked' : ''}" id="btnStarKana" data-star-type="kana" data-star-id="${escapeHtml(state.kana)}" type="button" title="${isBookmarked('kana', state.kana) ? 'Usuń z ulubionych' : 'Dodaj do ulubionych'}" aria-label="Przełącz gwiazdkę">
            ★
          </button>
        </div>
      </div>
      <div class="badge" id="strokeBadge">${count} ${strokeWord(count)}</div>
    </div>

    <div class="character-area">

      <div class="char-panel">
        <h3>ZNAK</h3>

        <div class="svg-wrap" id="svgWrap"></div>

        <div class="controls">
          <!-- Oba zestawy leżą w tym samym wierszu siatki. Nieaktywny jest
               tylko ukryty wizualnie, więc wysokość rzędu nie zmienia się
               przy przełączaniu trybu i „Rysuj"/„Koniec rysowania" zostaje
               dokładnie w tym samym miejscu. -->
          <div class="control-set playback" id="playbackControls">
            <button class="btn btn-primary" id="playStrokes" disabled>${icon('play')} Odtwórz</button>
            <button class="btn btn-secondary" id="stepStroke" disabled>Kreska po kresce</button>
            <button class="btn btn-secondary" id="showAllStrokes" disabled>Cały znak</button>
          </div>
          <div class="control-set drawing-tools is-inactive" id="drawingTools">
            <button class="btn btn-secondary" id="hideGuideToggle" aria-pressed="false" disabled>${icon('eye')} Ukryj wzór</button>
            <button class="btn btn-secondary" id="clearDrawing" disabled>Wyczyść</button>
            <button class="btn btn-secondary" id="checkDrawing" disabled>Sprawdź rysunek</button>
          </div>
          <button class="btn btn-secondary" id="drawToggle" aria-pressed="false">${icon('learn')} Rysuj</button>
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
      <button class="btn btn-secondary" id="quizMe">${icon('quiz')} Sprawdź się</button>
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
  const playbackControls = document.getElementById('playbackControls');
  const drawingTools = document.getElementById('drawingTools');
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
    checkDrawing.disabled = !(drawing.enabled && referencePaths && drawing.strokes.length);
  };

  const setDrawing = on => {
    drawing.setEnabled(on);
    drawToggle.setAttribute('aria-pressed', String(on));
    drawToggle.innerHTML = on ? `${icon('learn')} Koniec rysowania` : `${icon('learn')} Rysuj`;

    /*
      Grupy leżą w jednym wierszu siatki. Nieaktywna zostaje w układzie
      (tylko `visibility: hidden`), żeby wysokość rzędu — a więc pozycja
      przycisku Rysuj/Koniec — nie zależała od tego, która jest widoczna.
    */
    playbackControls.classList.toggle('is-inactive', on);
    drawingTools.classList.toggle('is-inactive', !on);
    drawResult.classList.toggle('hidden', !on);

    clearDrawing.disabled = !on;
    // skrót do ustawienia pokazujemy tylko tam, gdzie coś zmienia (patrz niżej)
    hideGuideToggle.disabled = !on;
    checkDrawing.disabled = !(on && referencePaths && drawing.strokes.length);
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
    hideGuideToggle.innerHTML = settings.hideGuide ? `${icon('eye')} Pokaż wzór` : `${icon('eye-off')} Ukryj wzór`;
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
  const isReview = !!(
    (state.exam && state.exam.kind === 'review') ||
    (state.kanji && state.kanji.mode === 'flashcards') ||
    (state.vocab && state.vocab.view === 'learn')
  );

  bucket.answers++;
  if (isReview) bucket.reviewAnswers++;
  else bucket.examAnswers++;

  // `correct` jest fałszywe dla timeoutu, więc timeout nigdy nie
  // trafi tutaj — a tym samym nie wliczy się do `correct`
  if (correct) bucket.correct++;

  pruneDailyStats(stats, now);
  saveDailyStats(stats);
  checkAchievements();
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
   Naprawia kształt rekordu legacy/current bez ruszania pól SRS.
   Częściowy rekord (np. `seen` bez `recent`) wcześniej wywracał render
   menu i odpowiedź. Nieobiektowe wpisy nadal zostają w `chars`, ale
   zapis odpowiedzi zastąpi je świeżym rekordem.
*/
function normalizeProgressRecord(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) return entry;

  if (!Number.isFinite(entry.seen) || entry.seen < 0) entry.seen = 0;
  if (!Number.isFinite(entry.correct) || entry.correct < 0) entry.correct = 0;
  if (!Number.isFinite(entry.wrong) || entry.wrong < 0) entry.wrong = 0;

  entry.recent = Array.isArray(entry.recent)
    ? entry.recent.slice(-6).map(value => (value === 1 || value === '1' ? 1 : 0))
    : [];

  if (!entry.confused || typeof entry.confused !== 'object' || Array.isArray(entry.confused)) entry.confused = {};
  if (!Number.isFinite(entry.last) || entry.last < 0) entry.last = 0;

  return entry;
}

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
  const chars = (data && typeof data.chars === 'object' && data.chars) || {};
  const sourceVersion = data && Number.isFinite(Number(data.version)) ? Number(data.version) : 0;
  const needsSrsMigration = sourceVersion < PROGRESS_VERSION;

  for (const kana of Object.keys(chars)) {
    const entry = normalizeProgressRecord(chars[kana]);

    // Rekord nie-obiektowy: zostaje w `chars` nietknięty, ale nie dostaje
    // pól SRS i nie wejdzie do kolejki. Nic nie kasujemy.
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) continue;

    if (needsSrsMigration && isProgressRecord(entry)) normalizeSrs(entry, legacyStageSeed(kana));
    // Rekord z `seen === 0` celowo NIE dostaje pól SRS — nie był ćwiczony.
  }

  data.chars = chars;
  // Wersji przyszłej nie obniżamy: starsza aplikacja nie może po odczycie
  // nowszego formatu zapisać go jako starszej wersji.
  data.version = Math.max(sourceVersion, PROGRESS_VERSION);
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
  const hasRecord = !!(existing && typeof existing === 'object' && !Array.isArray(existing));
  const entry = hasRecord
    ? existing
    : (progress.chars[kana] = { seen: 0, correct: 0, wrong: 0, recent: [], confused: {}, last: 0 });

  normalizeProgressRecord(entry);

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
    normalizeSrs(entry, hasRecord ? legacyStageSeed(kana) : 0);
  }
  scheduleAnswer(entry, { correct: correct, source: source, now: now });

  recordDailyAnswer(correct, now);
  saveProgress();
}

// odsetek błędów w ostatnich próbach (0..1)
function errorRate(kana) {
  const entry = progress.chars[kana];
  if (!entry || !Array.isArray(entry.recent) || !entry.recent.length) return 0;
  return 1 - entry.recent.reduce((a, b) => a + b, 0) / entry.recent.length;
}

// new / hard / learning / good / mastered
function masteryLevel(kana) {
  const entry = progress.chars[kana];
  if (!entry || !entry.seen) return 'new';

  const recent = Array.isArray(entry.recent) ? entry.recent : [];
  const rate = errorRate(kana);
  const overall = progressStat(entry, 'correct') / entry.seen;

  if (recent.length >= 4 && rate >= 0.5) return 'hard';
  if (entry.seen >= 10 && overall >= 0.9 && recent.length >= 5 && recent.slice(-5).every(r => r === 1))
    return 'mastered';
  if (recent.length >= 4 && rate === 0) return 'good';
  return 'learning';
}

/* =========================================================
   POSTĘPY SŁOWNICTWA (T19 — warstwa 2: magazyn)
   ------------------------------------------------------------
   TRZECI klucz, rozłączny z `hiragana-progress` i `hiragana-daily`.
   Odpowiada na pytanie „jak idzie mi ta karta", a nie „jak wygląda
   ta kana" ani „co robiłem we wtorek" — i dlatego nie jest częścią
   żadnego z tamtych magazynów.

   Kształt rekordu (`VOCAB_LEARN_ITEMS` — polecenia, czasowniki,
   rzeczowniki, frazy i wzorce; id `v01`–`v24`, `n01`–`n07`, `p01`–`p06`):
     seen, correct, wrong  — liczniki prób
     recent               — ostatnie `VOCAB_MAX_RECENT` wyników
     last                 — znacznik czasu ostatniej odpowiedzi

   Czego tu celowo NIE MA:
     - SRS. Karty nie mają harmonogramu; kolejność fiszek (warstwa 3)
       liczymy z liczników, zamiast ją zapisywać.
     - `hiragana-daily`. Odpowiedź na fiszkę nie jest odpowiedzią na
       znak: historia dzienna liczy kany i egzamin, nie słownictwo.

   Wersja to 1 i jest pierwsza — nie ma z czego migrować. Podniesienie
   jej bez migracji wyrzuciłoby użytkownikowi postęp, więc traktuj to
   jak zmianę formatu, nie jak porządek.
========================================================= */

const VOCAB_KEY = 'hiragana-vocab';
const VOCAB_VERSION = 1;
const VOCAB_MAX_RECENT = 6;

/*
   Karta istnieje wtedy, gdy jest materiałem do nauki. Wszystkie typy z
   `VOCAB_LEARN_ITEMS` — polecenia, czasowniki, rzeczowniki, zwroty i wzorce
   — dostają rekord postępu. Literówka w id nadal nie utworzy wpisu.
*/
function vocabCard(cardId) {
  return VOCAB_LEARN_ITEMS.find(entry => entry.id === cardId) || null;
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
   Zwraca `false` dla nieznanej karty: literówka w `id` nie może utworzyć
   rekordu, którego nic nigdy nie wyświetli. Rekord o niepoprawnym kształcie
   zastępujemy świeżym — alternatywą są liczniki `NaN`, które zatruwają
   każdy późniejszy odczyt.
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
  recordDailyAnswer(correct);
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

/* =========================================================
   POSTĘPY KANJI (T18 — magazyn)
   ------------------------------------------------------------
   CZWARTY klucz, rozłączny z `hiragana-progress`, `hiragana-vocab` i `hiragana-daily`.
   Klucz: `hiragana-kanji`, wersja: 1.
========================================================= */

const KANJI_KEY = 'hiragana-kanji';
const KANJI_VERSION = 1;
const KANJI_MAX_RECENT = 6;

function kanjiItem(idOrChar) {
  return KANJI_ITEMS.find(k => k.id === idOrChar || k.kanji === idOrChar) || null;
}

function isKanjiRecord(entry) {
  return (
    !!entry &&
    typeof entry === 'object' &&
    !Array.isArray(entry) &&
    Number.isFinite(entry.seen) &&
    Number.isFinite(entry.correct) &&
    Number.isFinite(entry.wrong) &&
    Array.isArray(entry.recent)
  );
}

function loadKanjiProgress() {
  const empty = { version: KANJI_VERSION, items: {} };
  try {
    const raw = localStorage.getItem(KANJI_KEY);
    if (!raw) return empty;
    const data = JSON.parse(raw);
    if (!data || typeof data !== 'object' || Array.isArray(data)) return empty;
    if (data.version !== KANJI_VERSION) return empty;
    if (!data.items || typeof data.items !== 'object' || Array.isArray(data.items)) return empty;
    return { version: KANJI_VERSION, items: data.items };
  } catch (e) {
    return empty;
  }
}

let kanjiProgress = loadKanjiProgress();

function saveKanjiProgress() {
  try {
    localStorage.setItem(KANJI_KEY, JSON.stringify(kanjiProgress));
  } catch (e) {}
}

function recordKanjiAnswer(idOrChar, correct) {
  const item = kanjiItem(idOrChar);
  if (!item) return false;
  const id = item.id;
  if (!isKanjiRecord(kanjiProgress.items[id])) {
    kanjiProgress.items[id] = {
      seen: 0,
      correct: 0,
      wrong: 0,
      recent: [],
      last: 0,
      interval: 0,
      due: 0
    };
  }
  const entry = kanjiProgress.items[id];
  entry.seen++;
  if (correct) entry.correct++;
  else entry.wrong++;
  entry.recent.push(correct ? 1 : 0);
  if (entry.recent.length > KANJI_MAX_RECENT) entry.recent.shift();
  entry.last = Date.now();

  const DAY_MS = 86400000;
  if (!correct) {
    entry.interval = 1;
    entry.due = entry.last + DAY_MS;
  } else {
    if (!entry.interval || entry.interval < 1) entry.interval = 1;
    else if (entry.interval === 1) entry.interval = 3;
    else entry.interval = Math.round(entry.interval * 2.2);
    entry.due = entry.last + entry.interval * DAY_MS;
  }

  saveKanjiProgress();
  recordDailyAnswer(correct);
  return true;
}

function kanjiStat(idOrChar) {
  const item = kanjiItem(idOrChar);
  if (!item) return { seen: 0, correct: 0, wrong: 0, accuracy: 0, recent: [], interval: 0, due: 0, status: 'new' };
  const entry = kanjiProgress.items[item.id];
  const seen = entry && Number.isFinite(entry.seen) ? entry.seen : 0;
  const correct = entry && Number.isFinite(entry.correct) ? entry.correct : 0;
  const wrong = entry && Number.isFinite(entry.wrong) ? entry.wrong : 0;
  const interval = entry && Number.isFinite(entry.interval) ? entry.interval : 0;
  const due = entry && Number.isFinite(entry.due) ? entry.due : 0;
  const recent = entry && Array.isArray(entry.recent) ? entry.recent : [];
  let status = 'new';
  if (seen > 0) {
    if (interval >= 7 && correct / seen >= 0.8) status = 'mastered';
    else if (wrong > correct) status = 'hard';
    else status = 'learning';
  }
  return {
    seen,
    correct,
    wrong,
    accuracy: seen ? correct / seen : 0,
    recent,
    interval,
    due,
    status
  };
}

/* Postęp słownictwa ma jedno wejście kasowania: „Zresetuj postęp". */
function resetVocabData() {
  vocab = { version: VOCAB_VERSION, cards: {} };
  saveVocab();
}

function resetKanjiData() {
  kanjiProgress = { version: KANJI_VERSION, items: {} };
  saveKanjiProgress();
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
   Cztery znaki mają ten sam zapis romaji, choć różne znaki:
   ji → じ ぢ ジ ヂ, zu → ず づ ズ ヅ. Nie da się tego „naprawić" tabelą,
   bo to prawdziwa ortografia. Reguła jest więc taka:
     • pytanie o romaji (A/C) akceptuje każdy znak tego samego alfabetu
       o tym samym romaji — inaczej poprawna odpowiedź byłaby oznaczana
       jako błąd zależnie od tego, który wariant wypadł w losowaniu;
     • rozpraszacze o tym samym romaji są wycinane, żeby w trybie B nie
       stały obok siebie dwa identyczne przyciski „ji".
*/
function sameReading(a, b) {
  return !!a && !!b && a.romaji === b.romaji;
}

// Dodatkowe zapisy akceptowane przy wpisywaniu romaji (Hepburn + Kunrei).
const ROMAJI_ALTERNATES = {
  ぢ: ['di'],
  づ: ['du'],
  ヂ: ['di'],
  ヅ: ['du']
};

/*
 * Rozpraszacze: znaki z wybranego zakresu (waga 2), opcjonalnie spoza zakresu (0.6),
 * z premią za podobny wygląd i za znaki, z którymi już to pytanie pomyliłeś.
 */
function pickDistractors(question, count, pool, outside, { sameScript = false } = {}) {
  const inPool = new Set(pool.map(c => c.kana));
  const similar = similarTo(question.kana);
  const confused = (progress.chars[question.kana] && progress.chars[question.kana].confused) || {};

  const questionCategory = kanaCategory(question);

  const weighted = getAll()
    .filter(c => c.kana !== question.kana)
    // ten sam romaji = dwa równie poprawne przyciski, więc nie jest to pułapka
    .filter(c => !sameReading(c, question))
    // w trybie `both` opcje trybu romaji→kana muszą być z jednego alfabetu,
    // inaczej „ji" miałoby cztery poprawne znaki naraz
    .filter(c => !sameScript || c.script === question.script)
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

  /*
     Jedna czytanka = jedna odpowiedź. Bez tego ず i づ stawały obok siebie
     jako dwa identyczne przyciski „zu" (a w trybie `both` także か i カ),
     więc użytkownik wybierał między dwiema etykietami o tym samym tekście.
     Zostawiamy wariant o wyższej wadze — reszta rozkładu się nie zmienia,
     bo duplikaty czytanek dotyczą tylko nielicznych znaków.
  */
  const byReading = new Map();
  weighted.forEach(entry => {
    const previous = byReading.get(entry.item.romaji);
    if (!previous || entry.w > previous.w) byReading.set(entry.item.romaji, entry);
  });

  return weightedSample([...byReading.values()], count);
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
        <p class="progress-panel-empty">
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

      <div class="progress-panel-summary">
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

      <div class="legend-row">
        <span class="legend-item"><span class="legend-swatch new"></span> nowe</span>
        <span class="legend-item"><span class="legend-swatch hard"></span> trudne</span>
        <span class="legend-item"><span class="legend-swatch learning"></span> w trakcie</span>
        <span class="legend-item"><span class="legend-swatch good"></span> dobre</span>
        <span class="legend-item">${icon('star')} opanowane</span>
      </div>

      ${
        hard.length
          ? `
        <h3 class="progress-panel-subhead">Sprawiają Ci trudność</h3>
        <div class="mistakes-list mistakes-list-start">
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

      <div class="exam-quick exam-quick-progress">
        <button class="btn btn-primary" id="practiceHardSetup" ${practiceCount < 2 ? 'disabled' : ''}>
          ${icon('target')} Ćwicz trudne znaki
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

/*
   Stan rozwinięcia „Opcji egzaminu" jest sesyjny, nie zapisany: to rzecz,
   którą otwiera się na chwilę, a nie preferencja.
*/
let examAdvancedOpen = false;

/*
   Kategorie zakresu również są rozwijane sesyjnie. Domyślnie są zwinięte:
   cztery nagłówki z licznikami zastępują 26 wierszy, więc przycisk startu
   nie ucieka pod koniec ekranu. Użytkownik otwiera tylko tę kategorię,
   którą chce edytować.
*/
let examCategoryOpen = {};

/*
   Rzędy egzaminu to bazowe id grup — wspólne dla obu skryptów. Dzięki temu
   wybór „Samogłoski" znaczy to samo w hiraganie, katakanie i w trybie `both`,
   a zapisany wybór (`hiragana-exam-settings`) nie wymaga migracji.
   W trybie `both` dochodzi podgląd obu alfabetów i znacznik „＋ カ".
*/
function examGroupRows() {
  const rows = new Map();

  getGroups().forEach(group => {
    if (!rows.has(group.id)) {
      rows.set(group.id, { id: group.id, name: group.name, previews: [] });
    }
    rows.get(group.id).previews.push(group.chars.map(char => char[0]).join(' '));
  });

  return [...rows.values()];
}

/*
   Egzamin używa tego samego podziału co panel nauki. Kategorie są tylko
   widokiem na istniejące `group.id`, więc nie powstaje drugie źródło prawdy
   ani nowy format zapisu wyboru zakresu.
*/
function examGroupSections() {
  const rows = examGroupRows();

  return LEARN_CATEGORIES.map(category => ({
    ...category,
    rows: rows.filter(row => learnCategoryOf(row.id) === category.id)
  })).filter(section => section.rows.length);
}

/*
   Podsumowanie opcji w nagłówku `<details>`. Jedno źródło tekstu dla
   pierwszego renderu i dla zmian na żywo — inaczej nagłówek rozjeżdżał
   się z faktycznie wybranymi wartościami.
*/
function examOptionsLabel({ options, limit, timer }) {
  const limitLabel = limit === 0 ? 'bez limitu' : limit + ' pytań';
  const timerLabel = timer === 0 ? 'bez timera' : 'timer ' + timer + ' s';
  return `${options} odpowiedzi · ${limitLabel} · ${timerLabel}`;
}

function showExamSetup() {
  refreshChrome();

  const settings = loadExamSettings();
  const sections = examGroupSections();
  const scriptHint =
    state.script === 'both'
      ? 'Zaznacz rzędy — w trybie „Oba" każdy rząd obejmuje hiraganę i katakanę.'
      : `Zaznacz rzędy ${state.script === 'katakana' ? 'katakany' : 'hiragany'}, które chcesz ćwiczyć.`;

  const settingsLabel = examOptionsLabel(settings);

  app.innerHTML = `
    <section class="exam exam-hub card">
      <div class="exam-hero">
        <span class="exam-watermark" aria-hidden="true">試</span>
        <div class="exam-hero-top">
          <div class="eyebrow"><span class="accent-dot"></span> EGZAMIN · テスト</div>
          <div class="exam-heading">
            <h2>Wybierz zakres</h2>
            <p class="exam-lead">
              ${scriptHint}
              Rozwiń kategorię, aby wybrać pojedyncze rzędy, albo zaznacz całą sekcję.
              Egzamin trwa tak długo, jak chcesz. Znaki, które sprawiają Ci trudność,
              będą wracały częściej.
            </p>
          </div>
        </div>

        <div class="exam-quick">
          <button class="btn btn-secondary" id="allGroups">${icon('check')} Wszystkie</button>
          <button class="btn btn-secondary" id="noGroups">${icon('x')} Wyczyść</button>
        </div>
      </div>

      <div class="exam-groups" id="examGroups">
        ${sections
          .map(section => {
            const selected = section.rows.filter(row => settings.groups.includes(row.id)).length;
            const allSelected = selected === section.rows.length;

            return `
          <details class="exam-group-section" data-category="${section.id}" ${examCategoryOpen[section.id] ? 'open' : ''}>
            <summary class="exam-group-summary">
              <span class="exam-group-heading" id="examCategory-${section.id}" role="heading" aria-level="3">${section.label}</span>
              <span class="exam-group-count" data-exam-count>${selected}/${section.rows.length}</span>
              <button class="exam-group-select" type="button" data-exam-category="${section.id}" aria-pressed="${allSelected}" aria-label="${allSelected ? 'Odznacz' : 'Zaznacz'} całą sekcję ${section.label}">${allSelected ? 'Wyczyść' : 'Wszystkie'}</button>
              <span class="exam-group-chevron" aria-hidden="true">${icon('chevron-down')}</span>
            </summary>
            <div class="exam-group-grid">
              ${section.rows
                .map(
                  row => `
                <label class="exam-group-option">
                  <input type="checkbox" value="${row.id}" ${settings.groups.includes(row.id) ? 'checked' : ''}>
                  <span>
                    <strong>${row.name}</strong>
                    <small>${row.previews[0]}</small>
                  </span>
                  ${row.previews.length > 1 ? '<small class="exam-group-scripts" title="Oba alfabety">＋ カ</small>' : ''}
                </label>
              `
                )
                .join('')}
            </div>
          </details>
        `;
          })
          .join('')}
      </div>

      <details class="exam-advanced" ${examAdvancedOpen ? 'open' : ''}>
        <summary class="exam-advanced-summary">
          <span class="exam-advanced-title">Opcje egzaminu</span>
          <small id="examSummary" class="exam-advanced-hint">${settingsLabel}</small>
          <span class="exam-advanced-chevron" aria-hidden="true">${icon('chevron-down')}</span>
        </summary>

        <div class="exam-advanced-body">
          <div class="exam-option-grid">
            <label class="exam-option-field">
              <span class="exam-option-label">Liczba odpowiedzi</span>
              <select id="optionsCount" class="exam-select">
                ${[4, 6, 8].map(n => `<option value="${n}" ${n === settings.options ? 'selected' : ''}>${n}</option>`).join('')}
              </select>
            </label>

            <label class="exam-option-field">
              <span class="exam-option-label">Liczba pytań</span>
              <select id="questionLimit" class="exam-select">
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

            <label class="exam-option-field">
              <span class="exam-option-label">Timer</span>
              <select id="timerOpt" class="exam-select">
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

            <label class="exam-option-field exam-option-toggle">
              <span class="exam-option-label">Mylące znaki</span>
              <span class="exam-check-row">
                <input type="checkbox" id="outsideOpt" ${settings.outside ? 'checked' : ''}>
                <span>Dodawaj znaki spoza wybranego zakresu</span>
              </span>
            </label>
          </div>

          <div class="exam-modes">
            <span class="exam-option-label">Tryby pytań</span>
            <div class="exam-mode-grid">
              <label class="exam-mode-card">
                <input type="checkbox" id="modeA" ${settings.modes.romajiKanaPick ? 'checked' : ''}>
                <span>Romaji → wybierz kana</span>
              </label>
              <label class="exam-mode-card">
                <input type="checkbox" id="modeB" ${settings.modes.kanaRomajiPick ? 'checked' : ''}>
                <span>Kana → wybierz romaji</span>
              </label>
              <label class="exam-mode-card">
                <input type="checkbox" id="modeC" ${settings.modes.romajiKanaType ? 'checked' : ''}>
                <span>Romaji → wpisz kana</span>
              </label>
              <label class="exam-mode-card">
                <input type="checkbox" id="modeD" ${settings.modes.kanaRomajiType ? 'checked' : ''}>
                <span>Kana → wpisz romaji</span>
              </label>
            </div>
          </div>
        </div>
      </details>

      <div id="examSetupError" class="feedback"></div>

      <button class="btn btn-primary exam-start" id="startSelectedExam">Rozpocznij egzamin →</button>

      ${progressPanelHTML()}

    </section>
  `;

  document.getElementById('allGroups').onclick = () => {
    Audio.click();
    setExamGroups(examGroupRows().map(row => row.id));
  };
  document.getElementById('noGroups').onclick = () => {
    Audio.click();
    setExamGroups([]);
  };

  document.querySelectorAll('#examGroups .exam-group-section').forEach(section => {
    section.addEventListener('toggle', () => {
      examCategoryOpen[section.dataset.category] = section.open;
    });
  });

  document.querySelectorAll('#examGroups input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', syncExamGroupSections);
  });

  document.querySelectorAll('.exam-group-select').forEach(button => {
    button.onclick = event => {
      event.stopPropagation();

      const section = button.closest('.exam-group-section');
      const inputs = [...section.querySelectorAll('input[type="checkbox"]')];
      const allSelected = inputs.length > 0 && inputs.every(input => input.checked);

      inputs.forEach(input => {
        input.checked = !allSelected;
      });

      Audio.click();
      syncExamGroupSections();
    };
  });

  syncExamGroupSections();

  const advanced = app.querySelector('.exam-advanced');
  advanced.addEventListener('toggle', () => {
    examAdvancedOpen = advanced.open;
  });

  /*
     Zmiana opcji ma natychmiast odbicie w nagłówku i w zapisie — inaczej
     podsumowanie pokazywało wartości z wejścia na ekran, a wybór przepadał
     przy powrocie. Grupy celowo zostają zapisywane dopiero przy starcie:
     puste zaznaczenie jest chwilowym stanem edycji, nie trwałą preferencją.
  */
  advanced.addEventListener('change', () => {
    const current = readSetup();
    document.getElementById('examSummary').textContent = examOptionsLabel(current);
    saveExamSettings({
      groups: settings.groups,
      options: current.options,
      limit: current.limit,
      outside: current.outside,
      modes: current.modes,
      timer: current.timer
    });
  });

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

/*
   Nagłówek kategorii pokazuje, ile jej rzędów jest zaznaczonych, a przycisk
   „Wszystkie"/„Wyczyść" działa na całą sekcję. Jedna funkcja synchronizuje
   oba stany po każdym kliknięciu — indywidualnym, zbiorczym i globalnym.
*/
function syncExamGroupSections() {
  document.querySelectorAll('#examGroups .exam-group-section').forEach(section => {
    const inputs = [...section.querySelectorAll('input[type="checkbox"]')];
    const selected = inputs.filter(input => input.checked).length;
    const count = section.querySelector('[data-exam-count]');
    const button = section.querySelector('.exam-group-select');
    const label = section.querySelector('.exam-group-heading')?.textContent.trim() || '';

    if (count) count.textContent = `${selected}/${inputs.length}`;

    if (!button) return;

    const allSelected = inputs.length > 0 && selected === inputs.length;
    button.textContent = allSelected ? 'Wyczyść' : 'Wszystkie';
    button.setAttribute('aria-pressed', String(allSelected));
    button.setAttribute('aria-label', `${allSelected ? 'Odznacz' : 'Zaznacz'} całą sekcję ${label}`);
  });
}

function setExamGroups(groupIds) {
  document.querySelectorAll('#examGroups input').forEach(input => {
    input.checked = groupIds.includes(input.value);
  });
  syncExamGroupSections();
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

/*
   Wspólna rama sesji: nagłówek z tytułem i licznikami, treść oraz stopka.
   Egzamin i fiszki mają różne silniki, ale użytkownik widzi ten sam rytm:
   gdzie jest, ile już zrobił i jak wyjść.
*/
function sessionFrameHTML({ eyebrow, title, stats = '', content = '', footer = '', className = '' }) {
  return `
    <section class="session card ${className}">
      <header class="session-head">
        <div class="session-title">
          <div class="eyebrow">${eyebrow}</div>
          <h2>${title}</h2>
        </div>
        ${stats ? `<div class="session-stats">${stats}</div>` : ''}
      </header>
      <div class="session-body">${content}</div>
      ${footer ? `<footer class="session-foot">${footer}</footer>` : ''}
    </section>
  `;
}

function examChromeHTML(exam, contentHTML) {
  const percentage = exam.total === 0 ? 0 : Math.round((exam.score / exam.total) * 100);
  const stats = `
    ${exam.xp > 0 ? `<span class="xp-badge">${icon('star')} ${exam.xp} XP</span>` : ''}
    ${exam.streak >= 3 ? `<span class="streak-badge">${icon('flame')} ${exam.streak}</span>` : ''}
    <div class="badge">${exam.score} ✓ &nbsp; ${exam.wrong} ✗</div>
  `;
  const progress = `
    <div class="progress session-progress" role="progressbar" aria-label="Postęp egzaminu"
      aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percentage}">
      <div style="width:${percentage}%"></div>
    </div>
  `;
  const timer =
    exam.timerSec > 0
      ? `
        <div class="timer-bar-wrap">
          <div class="timer-bar" id="timerBar"></div>
          <span class="timer-label" id="timerLabel">${exam.timerSec}s</span>
        </div>
      `
      : '';
  const summary = `
    <div class="session-summary">
      ${exam.total === 0 ? 'Zaczynamy!' : `${exam.score}/${exam.total} poprawnych`}
    </div>
  `;

  return sessionFrameHTML({
    eyebrow: 'EGZAMIN',
    title: `Pytanie ${exam.total + 1}`,
    stats,
    content: `${progress}${timer}${summary}${contentHTML}`,
    footer: '<button class="btn btn-secondary" id="endExam">Zakończ egzamin</button>',
    className: 'exam'
  });
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
  refreshChrome();

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

  const wrongOptions = pickDistractors(question, exam.options - 1, available, exam.outside, { sameScript: true });
  const options = shuffle([question, ...wrongOptions]);

  const scriptWord = question.script === 'katakana' ? 'katakana' : 'hiragana';
  const promptText = showsScriptLabels() ? `Jaki znak ${scriptWord} oznacza:` : 'Jaki znak oznacza:';

  const content = `
    ${examProgressHTML()}

    <div class="prompt">
      <div class="polish">${promptText}</div>
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
      <div class="polish">${
        showsScriptLabels()
          ? `Wpisz znak ${question.script === 'katakana' ? 'katakana' : 'hiragana'} dla:`
          : 'Wpisz znak kana dla:'
      }</div>
      <div class="question">${question.romaji}</div>

      <div class="type-input-wrap">
        <input type="text" id="kanaInput" class="kana-input" autocomplete="off" autofocus
               placeholder="ここに入力" lang="ja">
        <button class="btn btn-primary" id="checkKana">Sprawdź (Enter)</button>
      </div>

      <div class="feedback" id="feedback"></div>

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

    // ten sam romaji w tym samym alfabecie to ta sama odpowiedź (じ / ぢ)
    const typedItem = getAll().find(c => c.kana === typed);
    const correct =
      typed === question.kana ||
      (typedItem && typedItem.script === question.script && sameReading(typedItem, question));
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
      if (exam.streak >= 3) feedback.innerHTML = `✓ Dobrze! ${icon('flame')} Seria: ${exam.streak}`;

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

    const acceptedReadings = [question.romaji, ...(ROMAJI_ALTERNATES[question.kana] || [])];
    const correct = acceptedReadings.includes(typed);
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
      if (exam.streak >= 3) feedback.innerHTML = `✓ Dobrze! ${icon('flame')} Seria: ${exam.streak}`;

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
  const chosen = item(chosenKana);
  const correct =
    chosenKana === question.kana || (chosen && chosen.script === question.script && sameReading(chosen, question));

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
      feedback.innerHTML = `✓ Dobrze! ${icon('flame')} Seria: ${exam.streak}`;
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
  // Escape → powrót
  if (event.key === 'Escape' && state.screen !== 'dashboard') {
    homeBtn.click();
    return;
  }

  // Obsługa klawiatury dla Trybu Skupienia (T25)
  if (state.screen === 'focus' && focusSession && !focusSession.finished) {
    if (event.key.toLowerCase() === 'p') {
      event.preventDefault();
      toggleFocusPause();
      return;
    }
    if (!focusSession.isPaused && !focusSession.answeredThisCard) {
      const num = parseInt(event.key, 10);
      if (num >= 1 && num <= 4) {
        event.preventDefault();
        document.querySelector(`.focus-choice-btn[data-choice-idx="${num - 1}"]`)?.click();
        return;
      }
      if (event.key === ' ' || event.key.toLowerCase() === 'v' || event.key.toLowerCase() === 's') {
        event.preventDefault();
        document.getElementById('btnFocusSpeak')?.click();
        return;
      }
    }
    return;
  }

  // Obsługa klawiatury dla modułu Kanji (T18)
  if (state.screen === 'kanji' && state.kanji && !state.kanji.finished) {
    const ks = state.kanji;
    if (ks.mode === 'flashcard') {
      if (!ks.showBack && (event.key === ' ' || event.key === 'Enter')) {
        event.preventDefault();
        ks.showBack = true;
        renderKanjiFlashcard();
        return;
      }
      if (ks.showBack) {
        if (event.key.toLowerCase() === 's' || event.key.toLowerCase() === 'v') {
          event.preventDefault();
          document.querySelector('#kanjiCard [data-speak]')?.click();
          return;
        }
        if (event.key === '1') {
          document.querySelector('[data-srs="again"]')?.click();
          return;
        }
        if (event.key === '2') {
          document.querySelector('[data-srs="hard"]')?.click();
          return;
        }
        if (event.key === '3') {
          document.querySelector('[data-srs="good"]')?.click();
          return;
        }
        if (event.key === '4') {
          document.querySelector('[data-srs="easy"]')?.click();
          return;
        }
      }
    } else if (ks.mode === 'quiz') {
      if (!ks.submitted) {
        const num = parseInt(event.key, 10);
        if (num >= 1 && num <= 4) {
          event.preventDefault();
          document.querySelector(`[data-option-idx="${num - 1}"]`)?.click();
          return;
        }
      } else if (event.key === 'Enter') {
        event.preventDefault();
        document.getElementById('btnNextQuizQuestion')?.click();
        return;
      }
    } else if (ks.mode === 'detail') {
      if (event.key === 'ArrowLeft') {
        document.getElementById('btnPrevKanji')?.click();
        return;
      }
      if (event.key === 'ArrowRight') {
        document.getElementById('btnNextKanji')?.click();
        return;
      }
      if (event.key === ' ') {
        document.getElementById('btnKanjiPlay')?.click();
        return;
      }
    }
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

  // Fiszki słownictwa: w teście cyfry wybierają odpowiedź, a w nauce
  // Space/Enter odkrywa kartę i 1/2 ją ocenia.
  if (state.screen === 'vocab' && state.vocab && !state.vocab.finished) {
    const vocabSession = state.vocab;

    if (vocabSession.mode === 'learn') {
      if (!vocabSession.revealed && (event.key === ' ' || event.key === 'Enter')) {
        event.preventDefault();
        revealVocab();
        return;
      }

      if (vocabSession.revealed && !vocabSession.answered) {
        if (event.key.toLowerCase() === 's' || event.key.toLowerCase() === 'v') {
          event.preventDefault();
          document.querySelector('.vocab-learn-card [data-speak], .vocab-learn-answer [data-speak]')?.click();
          return;
        }
        if (event.key === '1') {
          event.preventDefault();
          gradeVocab(false);
          return;
        }
        if (event.key === '2') {
          event.preventDefault();
          gradeVocab(true);
          return;
        }
      }
    } else if (!vocabSession.answered) {
      const num = parseInt(event.key);
      if (num >= 1 && num <= VOCAB_OPTIONS) {
        const buttons = [...document.querySelectorAll('[data-vocab-choice]')];
        if (buttons[num - 1]) buttons[num - 1].click();
        return;
      }
    }

    if (vocabSession.answered && event.key === 'Enter') {
      nextVocab();
      return;
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
    } else if (event.key.toLowerCase() === 's' || event.key.toLowerCase() === 'v') {
      event.preventDefault();
      document.getElementById('speakKana')?.click();
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
  refreshChrome();

  const exam = state.exam;
  const percentage = exam.total === 0 ? 0 : Math.round((exam.score / exam.total) * 100);

  // dźwięk celebracji + konfetti przy dobrym wyniku
  if (percentage >= 80 && exam.total >= 3) {
    Audio.celebrate();
    spawnConfetti();
  }

  if (percentage === 100 && exam.total >= 3) {
    achievements.perfectExams = (achievements.perfectExams || 0) + 1;
    saveAchievements();
    checkAchievements();
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

      ${exam.xp > 0 ? `<div class="xp-result">${icon('star')} ${exam.xp} XP zdobytych</div>` : ''}
      ${exam.bestStreak >= 3 ? `<div class="result-streak">${icon('flame')} Najlepsza seria: ${exam.bestStreak} z rzędu</div>` : ''}

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
        ${practiceList().length >= 2 ? `<button class="btn btn-secondary" id="practiceHard">${icon('target')} Ćwicz trudne znaki</button>` : ''}
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
    homeBtn.click();
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
    if (kind !== 'exam') return 'Perfekcyjnie!';
    if (script === 'both') return 'Perfekcyjnie. Hiragana i katakana opanowane!';
    return 'Perfekcyjnie. ' + scriptName(script) + ' opanowana!';
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
   WYMOWA AUDIO (Google Translate TTS + Web Speech API — delegacja [data-speak])
========================================================= */

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-speak]');
  if (!btn) return;
  e.stopPropagation();
  const text = btn.getAttribute('data-speak');
  if (text) {
    Audio.speak(text);
    btn.classList.add('is-speaking');
    setTimeout(() => btn.classList.remove('is-speaking'), 400);
  }
});

/* =========================================================
   ULUBIONE I GWIAZDKI (delegacja [data-star-type])
========================================================= */

document.addEventListener('click', e => {
  const btn = e.target.closest('[data-star-type]');
  if (!btn) return;
  e.stopPropagation();
  e.preventDefault();
  const type = btn.getAttribute('data-star-type');
  const id = btn.getAttribute('data-star-id');
  if (type && id) {
    const isNow = toggleBookmark(type, id);
    Audio.click();
    btn.classList.toggle('bookmarked', isNow);
    if (btn.id === 'btnStarKanjiDetail') {
      btn.textContent = `★ ${isNow ? 'W ulubionych' : 'Dodaj do ulubionych'}`;
    }
    if (btn.id === 'btnStarKana') {
      btn.title = isNow ? 'Usuń z ulubionych' : 'Dodaj do ulubionych';
    }
    const starFilterBtn = document.getElementById('btnFilterStarredKanji');
    if (starFilterBtn && bookmarks.kanji) {
      starFilterBtn.textContent = `★ Ulubione (${bookmarks.kanji.length})`;
    }
  }
});

/* =========================================================
   START
========================================================= */

renderNav();
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
          // `controller` istnieje = to nie pierwsza instalacja. Nowy SW
          // aktywuje się od razu (`skipWaiting`), ale strona nie jest
          // przeładowywana automatycznie — baner tylko proponuje reload.
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
