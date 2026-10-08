/* =========================================================
   DANE: RZĘDY
========================================================= */

const groups = [
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
];

const all = groups.flatMap(group =>
  group.chars.map(([kana, romaji]) => ({
    kana,
    romaji,
    group: group.name,
    groupId: group.id
  }))
);


/* =========================================================
   DANE: KRESKI
   Każdy element tablicy = JEDNA osobna kreska, w kolejności
   rysowania. Opisy są orientacyjne — warto je porównać
   z tabelą kolejności kresek (np. na Wikipedii / w podręczniku).
========================================================= */

const strokeText = {
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
  'ぎ': ['górna pozioma kreska', 'druga pozioma kreska, dłuższa', 'pionowa kreska w dół przecinająca obie poziome', 'łuk na dole', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'ぐ': ['ukośna kreska w dół w lewo, potem ukośnie w dół w prawo', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'げ': ['pionowa kreska po lewej', 'krótka pozioma kreska po prawej', 'długa pionowa kreska po prawej z hakiem', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'ご': ['górna kreska, lekko wygięta', 'dolna kreska, dłuższa, wygięta', 'dwie ukośne kreski dakuten w prawym górnym rogu'],

  // Dakuten S
  'ざ': ['pozioma kreska', 'ukośna kreska w dół z zakrętem', 'łuk na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'じ': ['długa kreska w dół zakończona łukiem w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ず': ['pozioma kreska', 'pionowa kreska w dół z małą pętlą i ogonkiem', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぜ': ['długa pozioma kreska', 'pionowa kreska po prawej', 'pionowa kreska po lewej zakończona łukiem w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぞ': ['ukośna kreska w prawo, zygzak w lewo, na dole długi łuk w prawo', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],

  // Dakuten T
  'だ': ['pozioma kreska', 'ukośna kreska w dół w lewo', 'krótka pozioma kreska po prawej', 'łuk na dole po prawej', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'ぢ': ['krótka pozioma kreska', 'kreska w dół z łukiem w prawo na dole', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'づ': ['jeden łuk: w prawo, potem w dół i w lewo', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'で': ['pozioma kreska w prawo, potem łuk w dół w lewo', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'ど': ['krótka kreska ukośna w dół', 'długa kreska w dół z łukiem w prawo na dole', 'dwie ukośne kreski dakuten w prawym górnym rogu'],

  // Dakuten H
  'ば': ['pionowa kreska po lewej', 'krótka pozioma kreska po prawej', 'pionowa kreska z pętlą na dole', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'び': ['krótka kreska w prawo, potem duży łuk w dół i w górę', 'ukośna kreska dakuten w prawym górnym rogu', 'druga ukośna kreska dakuten'],
  'ぶ': ['krótka kreska u góry', 'mała kreska po lewej', 'mała kreska po prawej', 'kreska po prawej na dole', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'べ': ['łagodna kreska w górę w prawo, potem w dół w prawo', 'dwie ukośne kreski dakuten w prawym górnym rogu'],
  'ぼ': ['pionowa kreska po lewej', 'pozioma kreska', 'druga pozioma kreska', 'pionowa kreska z pętlą na dole', 'dwie ukośne kreski dakuten w prawym górnym rogu'],

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
  'ぎゃ': ['górna pozioma kreska ぎ', 'druga pozioma kreska ぎ', 'pionowa kreska ぎ', 'łuk na dole ぎ', 'dwie kreski dakuten ぎ', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'ぎゅ': ['górna pozioma kreska ぎ', 'druga pozioma kreska ぎ', 'pionowa kreska ぎ', 'łuk na dole ぎ', 'dwie kreski dakuten ぎ', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'ぎょ': ['górna pozioma kreska ぎ', 'druga pozioma kreska ぎ', 'pionowa kreska ぎ', 'łuk na dole ぎ', 'dwie kreski dakuten ぎ', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon J
  'じゃ': ['główna kreska じ', 'dwie kreski dakuten じ', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'じゅ': ['główna kreska じ', 'dwie kreski dakuten じ', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'じょ': ['główna kreska じ', 'dwie kreski dakuten じ', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon B
  'びゃ': ['główna kreska び', 'dwie kreski dakuten び', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'びゅ': ['główna kreska び', 'dwie kreski dakuten び', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'びょ': ['główna kreska び', 'dwie kreski dakuten び', 'pierwsza kreska małego ょ', 'druga kreska małego ょ'],

  // Yōon P
  'ぴゃ': ['główna kreska ぱ', 'kółko handakuten ぱ', 'pierwsza kreska małego ゃ', 'druga kreska małego ゃ', 'trzecia kreska małego ゃ'],
  'ぴゅ': ['główna kreska ぱ', 'kółko handakuten ぱ', 'pierwsza kreska małego ゅ', 'druga kreska małego ゅ'],
  'ぴょ': ['główna kreska ぱ', 'kółko handakuten ぱ', 'pierwsza kreska małego ょ', 'druga kreska małego ょ']
};

const strokeCounts = Object.fromEntries(
  Object.entries(strokeText).map(([kana, strokes]) => [kana, strokes.length])
);


/* =========================================================
   DŹWIĘK (Web Audio API — bez plików zewnętrznych)
========================================================= */

const Audio = (() => {
  let ctx = null;
  let muted = localStorage.getItem('hiragana-muted') === 'true';

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
    get muted() { return muted; },
    toggleMute() {
      muted = !muted;
      localStorage.setItem('hiragana-muted', String(muted));
      return muted;
    }
  };
})();


/* =========================================================
   STAN
========================================================= */

const state = {
  screen: 'menu',
  group: 'a',
  kana: 'あ',
  exam: null,
  theme:
    localStorage.getItem('hiragana-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
};

const app = document.getElementById('app');
const homeBtn = document.getElementById('homeBtn');


/* =========================================================
   POMOCNICZE
========================================================= */

function item(kana) {
  return all.find(x => x.kana === kana);
}

function getGroup(groupId) {
  return groups.find(group => group.id === groupId);
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
    return all.filter(character => exam.kanaList.includes(character.kana));
  }

  return all.filter(character => exam.groups.includes(character.groupId));
}

function strokeListHTML(kana, tag = 'div') {
  return (strokeText[kana] || []).map((description, index) => `
    <${tag} class="stroke-step">
      <span class="number">${index + 1}</span>
      <span>${description}</span>
    </${tag}>
  `).join('');
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

  if (newIndex < 0) {
    // przejdź do poprzedniego rzędu
    const groupIndex = groups.findIndex(g => g.id === state.group);
    const prevGroupIndex = (groupIndex - 1 + groups.length) % groups.length;
    state.group = groups[prevGroupIndex].id;
    const prevGroup = getGroup(state.group);
    state.kana = prevGroup.chars[prevGroup.chars.length - 1][0];
  } else if (newIndex >= kanaList.length) {
    // przejdź do następnego rzędu
    const groupIndex = groups.findIndex(g => g.id === state.group);
    const nextGroupIndex = (groupIndex + 1) % groups.length;
    state.group = groups[nextGroupIndex].id;
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
  all.forEach(c => { counts[masteryLevel(c.kana)]++; });
  const total = all.length;

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
    { color: 'var(--line)', count: counts.new },
  ].filter(s => s.count > 0);

  let offset = 0;
  const circles = segments.map(s => {
    const length = (s.count / total) * circumference;
    const html = `<circle cx="60" cy="60" r="${radius}" fill="none" stroke="${s.color}" stroke-width="10" stroke-dasharray="${length} ${circumference - length}" stroke-dashoffset="${-offset}" stroke-linecap="round" />`;
    offset += length;
    return html;
  }).join('');

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
  hex => `svg/${hex}.svg`   // opcjonalnie: ręcznie pobrane pliki do pracy offline
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
  return Array.from({ length: n }, (_, i) => `
    <span class="order-number">${i + 1}</span>
    ${i < n - 1 ? '<span class="order-arrow">→</span>' : ''}
  `).join('');
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

          const doc = new DOMParser().parseFromString(
            await response.text(),
            'image/svg+xml'
          );

          const paths = [...doc.querySelectorAll('[id^="kvg:StrokePaths"] path')]
            .map(path => path.getAttribute('d'));

          const numbers = [...doc.querySelectorAll('[id^="kvg:StrokeNumbers"] text')]
            .map(text => ({
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

  const strokeStyle = color =>
    `fill:none;stroke:${color};stroke-width:4.5;stroke-linecap:round;stroke-linejoin:round`;

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
        text.setAttribute(
          'transform',
          transform ? `${transform} ${n.transform}` : n.transform
        );
      }

      text.setAttribute(
        'style',
        'font-size:8px;font-weight:700;fill:var(--accent);transition:opacity .2s'
      );

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
 */
async function mountKana(wrap, kana, { autoplay = false, onProgress, onFail } = {}) {
  wrap.innerHTML = '<div class="loading">Ładowanie znaku…</div>';

  const data = await loadKanji(kana);
  if (!wrap.isConnected) return null;   // użytkownik zdążył zmienić ekran

  if (!data) {
    wrap.innerHTML = '';

    const glyph = document.createElement('div');
    glyph.className = 'kana-fallback';
    glyph.textContent = kana;
    glyph.style.cssText =
      `font-size:${Math.round(wrap.clientHeight * 0.8)}px;line-height:1;` +
      'font-family:"Noto Sans JP","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif';
    wrap.appendChild(glyph);

    if (onFail) onFail();
    return null;
  }

  const svg = buildKanjiSvg(data);

  const indicator = document.createElement('div');
  indicator.className = 'stroke-indicator';
  indicator.style.visibility = 'hidden';

  wrap.replaceChildren(svg, indicator);

  const strokes = [...svg.querySelectorAll('.kvg-drawn path')];
  const labels = [...svg.querySelectorAll('.kvg-numbers text')];
  const lengths = strokes.map(path => path.getTotalLength());

  let token = 0;          // zmiana tokenu przerywa trwające odtwarzanie
  let running = null;     // aktualnie trwająca animacja
  let runningIndex = -1;
  let drawn = 0;          // ile kresek jest już w pełni narysowanych

  const emit = (done, active) => { if (onProgress) onProgress(done, active); };

  function showIndicator(i) {
    indicator.className = 'stroke-indicator';
    indicator.style.visibility = 'visible';
    indicator.innerHTML =
      `<span class="stroke-indicator-number">${i}</span><span>Kreska ${i} z ${strokes.length}</span>`;
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
    labels.forEach(label => { label.style.opacity = '0'; });
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
    labels.forEach(label => { label.style.opacity = '1'; });
    drawn = strokes.length;
    indicator.style.visibility = 'hidden';
    emit(0, -1);
  }

  async function drawStroke(i, my) {
    emit(i, i);
    showIndicator(i + 1);
    if (labels[i]) labels[i].style.opacity = '1';

    runningIndex = i;
    running = strokes[i].animate(
      [{ strokeDashoffset: lengths[i] + 2 }, { strokeDashoffset: 0 }],
      {
        duration: Math.min(1000, Math.max(380, lengths[i] * 16)),
        easing: 'ease-in-out',
        fill: 'forwards'
      }
    );

    try {
      await running.finished;
    } catch (error) {
      return false;                       // animacja anulowana
    }

    if (my !== token) return false;

    strokes[i].style.strokeDashoffset = '0';   // zatwierdzamy stan końcowy
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

  return { play, step, showAll, count: strokes.length };
}


/* =========================================================
   MOTYW + DŹWIĘK
========================================================= */

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  localStorage.setItem('hiragana-theme', state.theme);
  updateThemeButton();
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

function createThemeToggle() {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  button.onclick = () => {
    Audio.click();
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme();
  };

  updateThemeButton();
}

function setupMuteToggle() {
  const button = document.getElementById('muteToggle');
  if (!button) return;

  function updateIcon() {
    button.innerHTML = Audio.muted ? '🔇' : '🔊';
    button.title = Audio.muted ? 'Włącz dźwięk' : 'Wycisz';
  }

  button.onclick = () => {
    Audio.toggleMute();
    updateIcon();
  };

  updateIcon();
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

  if (state.screen === 'menu') renderMenu();
  if (state.screen === 'learn') renderLearn();
  if (state.screen === 'exam') renderExam();
}

// zawsze trzeba zatrzymać timer, żeby po wyjściu nie wyskoczyło nowe pytanie
function stopExam() {
  if (state.exam) {
    clearTimeout(state.exam.timer);
    clearInterval(state.exam.timerCountdown);
    state.exam.finished = true;
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
    <section class="menu">
      <button class="menu-card" id="learnCard">
        <div class="menu-icon">✍️</div>
        <h2>Tryb nauki</h2>
        <p>Wybierz rząd hiragany, zobacz znak, liczbę kresek i prawidłową kolejność ich rysowania.</p>
      </button>

      <button class="menu-card" id="examCard">
        <div class="menu-icon">📝</div>
        <h2>Tryb egzaminu</h2>
        <p>Wybierz zakres znaków i ćwicz tak długo, jak chcesz. Błędy dostajesz w formie fiszki.</p>
      </button>
    </section>

    ${masteryDonutHTML()}
  `;

  document.getElementById('learnCard').onclick = () => { Audio.click(); setScreen('learn'); };
  document.getElementById('examCard').onclick = () => {
    Audio.click();
    state.screen = 'exam';
    homeBtn.classList.remove('hidden');
    showExamSetup();
  };
}


/* =========================================================
   TRYB NAUKI
========================================================= */

function renderLearn() {
  const current = item(state.kana);
  const currentGroup = getGroup(state.group);
  const count = strokeCounts[state.kana];

  app.innerHTML = `
    <section class="learner">

      <aside class="sidebar card">
        <h3>Rzędy</h3>
        <div class="group-grid">
          ${groups.map(group => `
            <button class="group-btn ${group.id === state.group ? 'active' : ''}" data-group="${group.id}">
              ${group.shortName}
            </button>
          `).join('')}
        </div>

        <h3 style="margin-top:20px">Znaki</h3>
        <div class="kana-list">
          ${currentGroup.chars.map(([kana, romaji]) => `
            <button class="kana-btn ${kana === state.kana ? 'active' : ''} mastery-${masteryLevel(kana)}" data-kana="${kana}" title="${romaji}">
              ${kana}
            </button>
          `).join('')}
        </div>

        <div class="keyboard-hints">
          <small>← → nawigacja • Spacja/R odtwórz • Enter kreska • A cały znak</small>
        </div>
      </aside>

      <section class="study-card card">

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
            </div>

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

      </section>

    </section>
  `;

  /* przełączanie rzędów */
  document.querySelectorAll('[data-group]').forEach(button => {
    button.onclick = () => {
      Audio.click();
      state.group = button.dataset.group;
      state.kana = getGroup(state.group).chars[0][0];
      renderLearn();
    };
  });

  /* przełączanie znaków */
  document.querySelectorAll('[data-kana]').forEach(button => {
    button.onclick = () => {
      Audio.click();
      state.kana = button.dataset.kana;
      renderLearn();
    };
  });

  /* nawigacja ← → */
  document.getElementById('prevKana').onclick = () => { Audio.click(); navigateKana(-1); };
  document.getElementById('nextKana').onclick = () => { Audio.click(); navigateKana(1); };

  /* Quiz-me: ukryj/pokaż znak */
  document.getElementById('quizMe').onclick = () => {
    Audio.click();
    const wrap = document.getElementById('svgWrap');
    const quizBtn = document.getElementById('quizMe');

    if (wrap.classList.contains('quiz-hidden')) {
      wrap.classList.remove('quiz-hidden');
      quizBtn.textContent = '🧠 Sprawdź się';
    } else {
      wrap.classList.add('quiz-hidden');
      quizBtn.textContent = '👁 Pokaż znak';
    }
  };

  /* animacja kresek */
  const wrap = document.getElementById('svgWrap');
  const note = document.getElementById('kanaNote');

  mountKana(wrap, state.kana, {
    onProgress: (done, active) => {
      document.querySelectorAll('#strokeList .stroke-step').forEach((el, i) => {
        el.classList.toggle('completed', i < done);
        el.classList.toggle('active', i === active);
      });
    },
    onFail: () => {
      note.textContent = 'Nie udało się pobrać animacji (brak internetu?) — pokazuję znak z czcionki.';
    }
  }).then(player => {
    if (!player) return;

    // SVG jest źródłem prawdy dla liczby kresek — zawsze aktualizuj
    if (player.count !== count) {
      document.getElementById('strokeBadge').textContent =
        `${player.count} ${strokeWord(player.count)}`;
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
   POSTĘPY (zapis w localStorage)
   Dla każdego znaku: ile prób, ile poprawnych, ostatnie 6 wyników
   oraz z czym go mylisz.
========================================================= */

const PROGRESS_KEY = 'hiragana-progress';
const SETTINGS_KEY = 'hiragana-exam-settings';

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(PROGRESS_KEY));
    if (data && data.chars) return data;
  } catch (error) {
    /* uszkodzony zapis - zaczynamy od zera */
  }
  return { version: 1, chars: {} };
}

let progress = loadProgress();

function saveProgress() {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    /* np. tryb prywatny - aplikacja działa dalej bez zapisu */
  }
}

function recordAnswer(kana, correct, chosenKana) {
  const entry = progress.chars[kana] ||
    (progress.chars[kana] = { seen: 0, correct: 0, wrong: 0, recent: [], confused: {}, last: 0 });

  entry.seen++;
  if (correct) entry.correct++;
  else entry.wrong++;

  entry.recent.push(correct ? 1 : 0);
  if (entry.recent.length > 6) entry.recent.shift();

  entry.last = Date.now();

  if (!correct && chosenKana) {
    entry.confused[chosenKana] = (entry.confused[chosenKana] || 0) + 1;
  }

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
  if (entry.seen >= 10 && overall >= 0.9 && entry.recent.length >= 5 && entry.recent.slice(-5).every(r => r === 1)) return 'mastered';
  if (entry.recent.length >= 4 && rate === 0) return 'good';
  return 'learning';
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

  const known = all.map(c => c.kana).filter(kana => progress.chars[kana] && progress.chars[kana].seen);

  const hard = known.filter(kana => masteryLevel(kana) === 'hard').sort((a, b) => byDifficulty(b) - byDifficulty(a));

  if (hard.length >= 4) return hard.slice(0, limit);

  const extra = known
    .filter(kana => masteryLevel(kana) === 'learning' && errorRate(kana) > 0)
    .sort((a, b) => byDifficulty(b) - byDifficulty(a));

  return [...hard, ...extra].slice(0, limit);
}

function progressSummary() {
  const entries = Object.values(progress.chars);
  const seen = entries.reduce((sum, e) => sum + e.seen, 0);
  const correct = entries.reduce((sum, e) => sum + e.correct, 0);
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
    timer: 0   // 0 = wyłączony, 5/10/15 = sekundy na pytanie
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
    rest.splice(rest.findIndex(x => x.item === picked), 1);
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

function similarTo(kana) {
  const result = new Set();
  LOOKALIKES.forEach(group => {
    if (group.includes(kana)) group.forEach(k => { if (k !== kana) result.add(k); });
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
  const confused =
    (progress.chars[question.kana] &&
      progress.chars[question.kana].confused) || {};

  const questionCategory = kanaCategory(question);

  const weighted = all
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

function progressPanelHTML() {
  const stats = progressSummary();

  if (!stats.seen) {
    return `
      <div class="progress-panel">
        <h3>Twoje postępy</h3>
        <p style="color:var(--muted);margin:0">
          Statystyki i trudne znaki pojawią się tutaj po pierwszym egzaminie.
        </p>
      </div>
    `;
  }

  const hard = all
    .filter(c => masteryLevel(c.kana) === 'hard')
    .sort((a, b) => errorRate(b.kana) - errorRate(a.kana))
    .slice(0, 8);

  const practiceCount = practiceList().length;

  return `
    <div class="progress-panel">
      <h3>Twoje postępy</h3>

      <div style="color:var(--muted)">
        Odpowiedzi: <b>${stats.seen}</b> • skuteczność: <b>${stats.percent}%</b>
      </div>

      <div class="progress-map">
        ${all.map(c => `
          <span class="map-cell ${masteryLevel(c.kana)}" title="${c.romaji}">
            ${c.kana}<small>${c.romaji}</small>
          </span>
        `).join('')}
      </div>

      <div style="color:var(--muted);font-size:.8rem">
        ⬜ nowe &nbsp; 🟥 trudne &nbsp; 🟨 w trakcie &nbsp; 🟩 dobre &nbsp; ⭐ opanowane
      </div>

      ${hard.length ? `
        <h3 style="margin-top:18px">Sprawiają Ci trudność</h3>
        <div class="mistakes-list" style="justify-content:flex-start">
          ${hard.map(c => {
            const entry = progress.chars[c.kana];
            const confusion = topConfusion(c.kana);
            return `
              <div class="mistake-chip">
                <span class="mistake-kana">${c.kana}</span>
                <span>${c.romaji}</span>
                <small>${entry.wrong}/${entry.seen} błędów${confusion ? ` • myli z ${confusion}` : ''}</small>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}

      <div class="exam-quick" style="margin-top:16px">
        <button class="btn btn-primary" id="practiceHardSetup" ${practiceCount < 2 ? 'disabled' : ''}>
          🎯 Ćwicz trudne znaki
        </button>
        <button class="btn btn-secondary" id="resetProgress">Wyczyść postępy</button>
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
        Zaznacz rzędy hiragany, które chcesz ćwiczyć.
        Egzamin trwa tak długo, jak chcesz. Znaki, które sprawiają Ci trudność,
        będą wracały częściej.
      </p>

      <div class="exam-groups" id="examGroups">
        ${groups.map(group => `
          <label class="exam-group-option">
            <input type="checkbox" value="${group.id}" ${settings.groups.includes(group.id) ? 'checked' : ''}>
            <span>
              <strong>${group.name}</strong>
              <small>${group.chars.map(char => char[0]).join(' ')}</small>
            </span>
          </label>
        `).join('')}
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
            ${[[0,'Bez limitu'],[5,'5'],[10,'10'],[20,'20'],[30,'30']]
              .map(([v,l]) => `<option value="${v}" ${v === settings.limit ? 'selected' : ''}>${l}</option>`)
              .join('')}
          </select>
        </label>

        <label>
          Timer:
          <select id="timerOpt">
            ${[[0,'Wyłączony'],[5,'5s'],[10,'10s'],[15,'15s']].map(([v,l]) => `<option value="${v}" ${v === settings.timer ? 'selected' : ''}>${l}</option>`).join('')}
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

  document.getElementById('onlyA').onclick = () => { Audio.click(); setExamGroups(['a']); };
  document.getElementById('aPlusK').onclick = () => { Audio.click(); setExamGroups(['a', 'k']); };
  document.getElementById('allGroups').onclick = () => { Audio.click(); setExamGroups(groups.map(g => g.id)); };
  document.getElementById('noGroups').onclick = () => { Audio.click(); setExamGroups([]); };

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
      const { selected, options, outside } = readSetup();
      saveExamSettings({ groups: selected.length ? selected : settings.groups, options, outside });
      startExam([], { kanaList: practiceList(), options, outside });
    };
  }

  const resetButton = document.getElementById('resetProgress');
  if (resetButton) {
    resetButton.onclick = () => {
      if (confirm('Na pewno wyczyścić wszystkie zapisane postępy?')) {
        progress = { version: 1, chars: {} };
        saveProgress();
        showExamSetup();
      }
    };
  }
}

function setExamGroups(groupIds) {
  document.querySelectorAll('#examGroups input').forEach(input => {
    input.checked = groupIds.includes(input.value);
  });
}


/* =========================================================
   EGZAMIN: PRZEBIEG
========================================================= */

function startExam(groupIds, { kanaList = null, options, limit, outside, modes, timer: timerSec } = {}) {
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
    timerCountdown: null,     // interwał odliczania
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
    xp: 0                     // punkty doświadczenia w tej sesji
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
        recordAnswer(exam.current.kana, false, null);
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
        document.querySelectorAll('.answer').forEach(a => { a.disabled = true; });
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

      ${exam.timerSec > 0 ? `
        <div class="timer-bar-wrap">
          <div class="timer-bar" id="timerBar"></div>
          <span class="timer-label" id="timerLabel">${exam.timerSec}s</span>
        </div>
      ` : ''}

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
        ${options.map((option, i) => `
          <button class="answer" data-answer="${option.kana}">
            <span class="answer-key">${i + 1}</span>
            ${option.kana}
          </button>
        `).join('')}
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

  document.getElementById('endExam').onclick = () => { Audio.click(); finishExam(); };
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
        ${options.map((option, i) => `
          <button class="answer answer-romaji" data-answer="${option.kana}">
            <span class="answer-key">${i + 1}</span>
            ${option.romaji}
          </button>
        `).join('')}
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

  document.getElementById('endExam').onclick = () => { Audio.click(); finishExam(); };
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
    recordAnswer(question.kana, correct, null);

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

  document.getElementById('endExam').onclick = () => { Audio.click(); finishExam(); };
}


/* =========================================================
   EGZAMIN: ODPOWIEDŹ + FISZKA
========================================================= */

function flashcardHTML(question, chosen) {
  const count = strokeCounts[question.kana];

  return `
    <div class="flashcard">
      <div class="flash-label">✗ Poprawna odpowiedź</div>
      <div class="flash-kana"><div class="svg-wrap flash-svg" id="flashSvg"></div></div>
      <div class="flash-romaji">${question.romaji}</div>
      <div class="flash-meta">Rząd: ${question.group} • ${count} ${strokeWord(count)}</div>
      <div class="flash-meta">${statsText(question.kana)}</div>

      ${chosen ? `
        <div class="flash-chosen">
          Kliknięto: <b>${chosen.kana}</b> — to jest „${chosen.romaji}"
        </div>
      ` : ''}

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
    recordAnswer(question.kana, correct, null);

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
      feedback.innerHTML = `<div style="margin:10px 0;font-weight:700;color:var(--bad)">Poprawna odpowiedź: <span style="font-size:1.4rem">${question.romaji}</span></div>` + flashcardHTML(question, null);
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

  document.getElementById('endExam').onclick = () => { Audio.click(); finishExam(); };
}

/* Punkty doświadczenia za poprawną odpowiedź */
function calcXP(exam) {
  const baseXP = 10;

  // Liczba odpowiedzi
  const optionsMultiplier = {
    4: 1.00,
    6: 1.15,
    8: 1.30
  }[exam.options] || 1.00;

  // Timer
  const timerMultiplier = {
    0: 1.00,
    15: 1.10,
    10: 1.20,
    5: 1.35
  }[exam.timerSec] || 1.00;

  // Wpisywanie zamiast wyboru
  const typingMultiplier =
    exam.currentMode === 'romaji-kana-type' ||
    exam.currentMode === 'kana-romaji-type'
      ? 1.5
      : 1.00;

  // Streak
  let streakMultiplier = 1.00;

  if (exam.streak >= 12) {
    streakMultiplier = 1.50;
  } else if (exam.streak >= 8) {
    streakMultiplier = 1.35;
  } else if (exam.streak >= 5) {
    streakMultiplier = 1.20;
  } else if (exam.streak >= 3) {
    streakMultiplier = 1.10;
  }

  const xp =
    baseXP *
    optionsMultiplier *
    timerMultiplier *
    typingMultiplier *
    streakMultiplier;

  return Math.round(xp);
}

/* Konfetti na ekranie wyniku */
function spawnConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#8d5cf6', '#ff6b35', '#2f9e6d', '#e6a23c', '#d95c67', '#d4a017'];

  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random() * 100 + '%';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1.5 + 's';
    piece.style.animationDuration = (1.5 + Math.random() * 2) + 's';
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

  recordAnswer(question.kana, correct, chosenKana);

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
  if (exam && !exam.answered && !exam.finished && state.screen === 'exam' && exam.currentMode !== 'romaji-kana-type' && exam.currentMode !== 'kana-romaji-type') {
    const num = parseInt(event.key);
    if (num >= 1 && num <= 9) {
      const buttons = [...document.querySelectorAll('[data-answer]')];
      if (buttons[num - 1]) {
        buttons[num - 1].click();
      }
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

      <p style="color:var(--muted)">${resultText(exam.score, exam.total)}</p>

      ${mistakes.length ? `
        <div class="mistakes">
          <h3>Do powtórki</h3>
          <div class="mistakes-list">
            ${mistakes.map(m => `
              <div class="mistake-chip">
                <span class="mistake-kana">${m.kana}</span>
                <span>${m.romaji}</span>
                <small>×${m.times}</small>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

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
      startExam([], { kanaList: practiceList(), options: settings.options, outside: settings.outside });
    };
  }

  document.getElementById('backToMenu').onclick = () => {
    Audio.click();
    stopExam();
    setScreen('menu');
  };
}

function resultText(score, total) {
  if (total === 0) return 'Nie udzielono żadnej odpowiedzi.';

  const ratio = score / total;

  if (ratio === 1) return 'Perfekcyjnie. Hiragana opanowana!';
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

  document.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', e => {
    if (state.screen !== 'learn') return;

    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;

    // tylko poziome swipe'y (i wystarczająco duże)
    if (Math.abs(dx) < MIN_SWIPE || Math.abs(dy) > Math.abs(dx)) return;

    if (dx > 0) navigateKana(-1);  // swipe right = poprzedni
    else navigateKana(1);          // swipe left = następny
  }, { passive: true });
})();


/* =========================================================
   START
========================================================= */

render();
