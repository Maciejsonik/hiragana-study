# Hiragana Study — Project Documentation

## 1. Project Overview

**Hiragana Study** is a local, vanilla JavaScript web application for learning the 46 basic hiragana characters plus `ん`.

The app currently provides:

- hiragana learning mode,
- animated stroke order using KanjiVG,
- stroke descriptions,
- per-character mastery/progress tracking,
- adaptive exam question selection,
- multiple exam question types,
- configurable answer counts,
- configurable exam timer,
- optional exam question limit,
- XP and streak system,
- exam results and hard-character practice,
- confetti celebration,
- dark/light theme,
- sound feedback,
- mobile swipe navigation.

The application is intentionally simple and currently consists of three main source files.

---

## 2. Files

```text
/
├── index.html
├── app.js
├── style.css
├── sw.js
├── manifest.webmanifest
├── offline.html
├── icons/
│   ├── icon-192.png
│   ├── icon-512.png
│   ├── maskable-512.png
│   └── apple-touch-icon.png
├── .github/
│   └── workflows/
│       └── deploy.yml
├── PROJECT.md
└── README.md
```

### `index.html`

Contains:

- document metadata,
- PWA metadata (`manifest`, icons, `theme-color` per OS theme),
- Google Fonts,
- initial theme detection (pre-paint bootstrap, see section 44),
- application shell,
- header,
- theme/mute buttons,
- main `#app` container,
- footer,
- `app.js` and `style.css` references.

### `app.js`

Contains essentially all application logic:

- data,
- application state,
- rendering,
- navigation,
- KanjiVG loading,
- learning mode,
- progress/mastery,
- exam configuration,
- question generation,
- exam modes,
- timer,
- question limit,
- XP,
- result screen,
- audio,
- keyboard controls,
- touch gestures,
- centralized user settings (see section 45),
- Service Worker registration and update banner.

### `style.css`

Contains all visual styling:

- themes,
- layout,
- buttons,
- cards,
- learning UI,
- exam UI,
- result UI,
- progress UI,
- animations,
- timer,
- typing mode,
- confetti,
- responsive behavior.

### `sw.js`

Service Worker registered from `app.js`. See section 44.

### `manifest.webmanifest`

Web App Manifest. See section 44.

### `offline.html`

Minimal navigation fallback, shown only when the document itself is missing
from Cache Storage and the browser is offline. In normal offline use the
Service Worker serves the cached `index.html`.

### `icons/`

Application icons: 192×192, 512×512, a 512×512 `maskable` variant (Android
adaptive icons) and a 180×180 `apple-touch-icon` (iOS home screen).

---

# 3. Architecture

The application is currently a **single-page vanilla JS application**.

There is no framework and no build system.

The main architecture is:

```text
index.html
    ↓
app.js
    ├── data
    ├── audio
    ├── state
    ├── helpers
    ├── KanjiVG
    ├── rendering
    ├── progress
    ├── exam settings
    ├── question selection
    ├── exam flow
    ├── answer handling
    ├── result handling
    ├── settings / personalization
    ├── service worker registration
    └── keyboard/touch controls
    ↓
style.css
```

`sw.js` runs alongside as a separate service worker global scope and never
shares state with the page.

T16 will eventually introduce modules/code splitting, but **do not prematurely refactor the current architecture while implementing earlier feature work**.

---

# 4. Hiragana Data

The base dataset is stored in:

```js
const groups = [...]
```

Groups:

```text
a — Samogłoski
k — K
s — S
t — T
n — N
h — H
m — M
y — Y
r — R
w — W
```

Characters are represented as:

```js
[kana, romaji]
```

and transformed into:

```js
{
  kana,
  romaji,
  group,
  groupId
}
```

The flattened dataset is:

```js
const all = groups.flatMap(...)
```

Current character set:

```text
あ い う え お
か き く け こ
さ し す せ そ
た ち つ て と
な に ぬ ね の
は ひ ふ へ ほ
ま み む め も
や ゆ よ
ら り る れ ろ
わ を ん
```

Total: **46 basic kana + ん**.

This section documents the **hiragana** base dataset. Katakana follows exactly
the same group/char structure in `scriptData.katakana` (see section 33), and
the same sections apply to it: 46 basic + ん, dakuten, handakuten and yōon
groups, 104 characters in total.

---

# 5. Stroke Data

`strokeText` contains manually written Polish descriptions of stroke order.

`strokeCounts` are derived from those descriptions.

The manual descriptions are still useful as educational/fallback content.

However:

> **KanjiVG is the actual source of truth for SVG stroke count and order.**

When KanjiVG loads successfully, the application updates the displayed stroke count/badge using the actual SVG data.

The description lists are kept in sync with that count: **one entry is one stroke**, so
`strokeCounts`, the badge and the list always agree. The 32 characters that disagreed
are fixed — see §41 item 2 — and STR1–STR3 in `tests-learn.html` guard the invariant
offline.

This behavior was introduced in T6.

---

# 6. KanjiVG Integration

KanjiVG sources:

```js
const SVG_SOURCES = [
  hex => `https://cdn.jsdelivr.net/gh/KanjiVG/kanjivg@master/kanji/${hex}.svg`,
  hex => `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`,
  hex => `svg/${hex}.svg`
];
```

The application:

1. converts kana to Unicode hex,
2. fetches SVG,
3. parses the SVG,
4. extracts stroke paths,
5. extracts stroke number labels,
6. caches the result,
7. builds an SVG for the UI,
8. animates strokes through the Web Animations API.

Important functions:

```text
kanaHex()
orderLineHTML()
loadKanji()
buildKanjiSvg()
mountKana()
```

`loadKanji()` uses:

```text
[kvg:StrokePaths]
[kvg:StrokeNumbers]
```

to obtain actual stroke data.

`mountKana()` returns controls equivalent to:

```text
play()
step()
showAll()
count
```

There is also fallback rendering using the normal kana font if KanjiVG cannot be loaded.

---

# 7. Application State

Main state:

```js
const state = {
  screen: 'menu',
  group: 'a',
  kana: 'あ',
  exam: null,
  theme: ...
};
```

Possible screens:

```text
menu
learn
exam
```

Global references include:

```text
app
homeBtn
```

---

# 8. Learning Mode

Learning mode contains:

- group selector,
- kana selector,
- current kana,
- romaji,
- stroke count,
- animated KanjiVG SVG,
- stroke descriptions,
- previous/next navigation,
- replay,
- step-through-strokes,
- show-all,
- self-test (leads to the exam setup).

"Sprrawdź się" navigates to the existing exam setup through
`setScreen('exam')`. It does not start an exam and does not change
`state.script`, so the selected alphabet carries over. It previously toggled a
blurred "hide character" view instead; that toggle and its `.quiz-hidden` CSS
were removed, and no keyboard shortcut referenced them.

Keyboard shortcuts:

```text
← / →  navigation
Space / R  replay
Enter  next stroke
A  show entire character
```

On mobile, horizontal swipe navigation is supported.

---

# 9. Progress System

Progress is stored in:

```text
localStorage:
hiragana-progress
```

Character entry structure:

```js
{
  seen,
  correct,
  wrong,
  recent: [],
  confused: {},
  last
}
```

`recent` contains the latest six binary results.

Example:

```text
1 = correct
0 = incorrect
```

The system also stores confusion information for distractor selection.

---

# 10. Mastery Levels

Current mastery levels:

```text
NEW
LEARNING
GOOD
HARD
MASTERED
```

Current logic:

```js
if (!entry || !entry.seen) return 'new';

const rate = errorRate(kana);
const overall = entry.correct / entry.seen;

if (entry.recent.length >= 4 && rate >= 0.5) return 'hard';

if (
  entry.seen >= 10 &&
  overall >= 0.9 &&
  entry.recent.length >= 5 &&
  entry.recent.slice(-5).every(r => r === 1)
) return 'mastered';

if (entry.recent.length >= 4 && rate === 0) return 'good';

return 'learning';
```

### Important audit point

`hard` currently has priority over `mastered`.

This means a character with enough historical errors can potentially remain `hard` even if it later satisfies the `mastered` criteria.

This should be reconsidered during a future audit/refinement.

---

# 11. Exam Settings

Saved under:

```text
hiragana-exam-settings
```

Current/default structure:

```js
{
  groups: ['a'],
  options: 6,
  outside: true,

  modes: {
    romajiKanaPick: true,
    kanaRomajiPick: false,
    romajiKanaType: false,
    kanaRomajiType: false
  },

  timer: 0,

  questionLimit: 0
}
```

### Answer counts

Available answer counts:

```text
4
6
8
```

### Per-question timer

Available values:

```text
OFF
5 seconds
10 seconds
15 seconds
```

### Question limit

Available values should support:

```text
No limit
10 questions
20 questions
30 questions
50 questions
```

Internally:

```text
0 = no question limit
```

The question limit is optional.

The user can always manually end the exam before reaching the limit.

### Timer and question limit are independent

Examples:

```text
No question limit + no timer
20 questions + no timer
No question limit + 10s per question
20 questions + 10s per question
```

These settings should work independently.

If the question limit is reached, the exam automatically finishes after the final question has been processed.

The implementation must avoid off-by-one errors when determining whether the final question has been answered.

At least one exam mode must be enabled.

---

# 12. Exam Question Modes

The original T7 specification described three modes.

The actual implementation currently supports **four**:

### Mode A

```text
Romaji → choose Kana
```

Example:

```text
shi
↓
し
```

### Mode B

```text
Kana → choose Romaji
```

Example:

```text
し
↓
shi
```

### Mode C

```text
Romaji → type Kana
```

Example:

```text
shi
↓
[ し ]
```

### Mode D

```text
Kana → type Romaji
```

Example:

```text
し
↓
[ shi ]
```

The active mode is randomly selected for every question from the enabled modes.

---

# 13. Exam State

Exam state contains approximately:

```js
{
  groups,
  kanaList,
  options,
  outside,
  enabledModes,

  currentMode,

  timerSec,
  timerCountdown,
  timerRemaining,

  questionLimit,

  current,

  score,
  wrong,
  total,

  serial,
  asked,

  answered,
  waiting,
  finished,

  timer,

  mistakes,

  streak,
  bestStreak,

  xp
}
```

`questionLimit` represents the maximum number of questions for the current exam.

A value of `0` means unlimited questions.

---

# 14. Question Selection

The application uses weighted adaptive selection.

Important functions:

```text
weightedPick()
weightedSample()
difficultyMultiplier()
pickQuestion()
pickDistractors()
similarTo()
```

Question selection considers:

- how recently a character was asked,
- mastery,
- error rate,
- whether the character is new,
- previous confusion,
- visual/phonetic similarity.

New characters receive increased priority.

Characters with higher error rates receive increased priority.

Previously confused characters can become stronger distractors.

---

# 15. Distractors

Distractors can come from:

1. the selected study groups,
2. outside groups if enabled,
3. similar characters,
4. characters previously confused with the current character.

Current implementation uses:

```text
in-pool base weight: 2
outside weight: 0.6
similarity bonus: +4
confusion bonus: +3 per confusion
```

The implementation explicitly removes invalid distractors using:

```js
.filter(Boolean)
```

This was part of T5.

---

# 16. Exam Timer

Timer is optional.

Available values:

```text
OFF
5s
10s
15s
```

The timer:

- displays remaining time,
- animates a progress bar,
- enters an urgent state near expiration,
- automatically fails the question at zero.

On timeout:

- question becomes answered,
- wrong count increases,
- streak resets,
- mistake is recorded,
- audio feedback plays,
- feedback is displayed,
- answer controls are disabled.

The timer applies independently to the optional overall question limit.

### Known issue

Typed modes do not have `.answer` buttons.

Therefore timeout behavior currently needs additional verification for typing questions, especially:

- disabling the text input,
- showing the expected answer,
- preventing input after timeout.

This should be checked during the next audit or relevant exam refactor.

---

# 17. Question Limit / Automatic Exam Completion

The exam can optionally end automatically after a specified number of questions.

Example:

```text
Question limit: 20
```

After question 20 has been fully processed, the application automatically calls the exam completion flow.

The user can still manually finish the exam earlier.

The intended behavior is:

```text
questionLimit = 0
→ unlimited

questionLimit = 20
→ maximum 20 answered questions
→ automatically finish after question 20
```

This feature should integrate with:

- timer,
- streaks,
- XP,
- mistakes,
- result calculation,
- confetti,
- retry,
- hard-character practice.

A future implementation must ensure that a timed-out question counts as an answered question for the purpose of reaching the limit.

---

# 18. Answer Handling

Main answer function:

```text
answerExam()
```

For pick modes it:

1. prevents duplicate answers,
2. clears timer,
3. records the answer,
4. disables buttons,
5. highlights correct/incorrect answers,
6. updates score,
7. updates streak,
8. updates XP,
9. plays audio,
10. shows feedback,
11. advances automatically on correct answers.

Wrong answers wait for the user to continue.

Typed modes use their own validation path.

When a question limit is active, the final question must not advance into another question after it has been fully processed.

---

# 19. XP System

Current XP:

```text
Correct answer: +10 XP
Typing answer: +20 XP
Streak >= 5: +5 XP
Streak >= 10: +10 XP
Timer question: +5 XP
```

XP is stored in the current exam session.

It is displayed in the exam header.

There is currently no long-term XP profile system.

---

# 20. Confetti

On exam completion:

```text
score >= 80%
and
at least 3 questions
```

triggers celebration/confetti.

The implementation creates approximately 60 particles.

Confetti is purely visual and does not affect application state.

---

# 21. Result Screen

The result screen displays:

- final score,
- percentage,
- mistakes,
- relevant feedback,
- options to retry,
- practice hard characters,
- return to menu.

`resultText()` takes the score, the total, the script and the session kind.
Only a perfect score in a regular exam names the script as mastered
("Perfekcyjnie. Katakana opanowana!"), because only then is the statement
about the whole alphabet true. Reviews and "practice hard" run through the same
`finishExam()`, so they get the neutral "Perfekcyjnie!" instead. The remaining
messages do not depend on the script. `scriptName()` is the single source for
the display name and is also used by the header.

The result system uses:

```text
resultText()
finishExam()
renderExamResult()
```

The result system must work for both:

- manually terminated exams,
- automatically terminated exams caused by the question limit.

---

# 22. Hard Character Practice

The application can generate a practice set from:

```text
practiceList()
```

The list prioritizes:

1. hard characters,
2. learning characters.

The current implementation uses a limit of 12.

### Known issue

The "practice hard" path saves only part of the exam settings:

```text
groups
options
outside
```

and does not explicitly preserve all mode/timer settings.

This should be audited later.

---

# 23. Progress Panel

Exam setup contains a progress panel showing:

- daily statistics (T15),
- overall statistics,
- mastery map,
- hard characters,
- practice-hard action.

Progress can be completely reset through the UI — but only from Settings.
The panel used to carry a second "Wyczyść postępy" button, so the same data
could be wiped from two places. It was removed; Settings keeps "Zresetuj postęp"
and the separate "Wyczyść statystyki", each with its own confirmation.

---

# 24. Theme

Theme is stored in the centralized settings store (see section 45):

```text
hiragana-settings = { theme, muted, script, hideGuide }
```

Supported themes:

```text
light
dark
system
```

The initial theme is selected from:

1. saved localStorage preference,
2. legacy `hiragana-theme` preference (migration only),
3. system preference.

The pre-paint bootstrap in `index.html` resolves the theme before the first
paint, so there is no flash of the wrong theme.

The `<html>` element receives:

```html
data-theme="light"
```

or:

```html
data-theme="dark"
```

### Resolved audit point

The previously unreachable "system" branch is now used: `system` is a real,
user-selectable preference (T26), the theme button shows a dedicated `◐` glyph
for it, and the quick toggle flips between light and dark based on the
currently **visible** theme so a click is never a no-op.

---

# 25. Audio

Audio currently uses the Web Audio API and does not require external sound files.

Stored setting (inside the settings store, see section 45):

```text
hiragana-settings = { ..., muted, ... }
```

The legacy `hiragana-muted` key is read once during migration and is never
written again.

Available sounds:

```text
correct()
wrong()
click()
celebrate()
```

The module is implemented as an IIFE and exposes:

```text
muted
toggleMute()
correct()
wrong()
click()
celebrate()
```

### Current state

The audio system is functional but intentionally basic.

The current sound effects are simple generated Web Audio tones.

Future audio work should **extend the existing system rather than replace it unnecessarily**.

Planned future improvements include:

- richer success/error sounds,
- better UI interaction sounds,
- separate SFX and music volume,
- master volume,
- optional background music,
- focus/lo-fi mode,
- audio settings,
- optional user-provided local audio files,
- improved mute/volume persistence.

Copyrighted external music should not be bundled without appropriate permission/licensing.

---

# 26. DOM Structure

Main permanent elements:

```text
.app-shell
.topbar
#homeBtn
#muteToggle
#themeToggle
#app
footer
```

Most learning/exam DOM is dynamically rendered by JavaScript.

Important dynamic classes/IDs include:

```text
.learner
.sidebar
.study-card
.character-area
.char-panel
.svg-wrap
.stroke-indicator
.learn-nav
.stroke-info
.exam
.answers
.answer
.flashcard
.exam-setup
.progress-panel
.kana-input
.romaji-input
.answer-romaji
.question-kana
.xp-badge
.confetti
.timer-bar
```

Added by later phases:

```text
.script-switcher      menu script selector
.mastery-overview     progress chart on the menu
.settings             Settings screen
.settings-group       settings sections
.settings-pills       segmented preference controls
#updateBanner         non-blocking service worker update notice
```

---

# 27. CSS Architecture

`style.css` is currently organized into:

```text
CUSTOM PROPERTIES
DARK MODE
RESET / GLOBAL
APP SHELL
HEADER
FOOTER
ICON BUTTONS
CARDS
BUTTONS
GHOST BUTTON
MENU
MASTERY DONUT
LEARNER
SIDEBAR
STUDY CARD
CHARACTER AREA
SVG ANIMATION
STROKE INDICATOR
LEARN NAVIGATION
STROKE INFORMATION
EXAM
STREAK BADGE
FLASHCARD
RESULT
EXAM SETUP
PROGRESS PANEL
ANIMATIONS
TIMER BAR
TYPING MODE
MODE B
XP BADGE
CONFETTI
UTILITY
RESPONSIVE TABLET
RESPONSIVE MOBILE
```

Primary visual language:

- warm off-white background,
- purple accent,
- rounded cards,
- soft shadows,
- Inter for UI,
- Noto Sans JP for Japanese,
- dark theme with purple accents.

---

# 28. Responsive Design

Desktop:

```text
max-width: 1120px
learner: sidebar + content
character area: two columns
```

Tablet:

```text
single-column learner
sidebar below content
character area single-column
```

Mobile:

```text
compact shell
smaller typography
two-column answer grid retained
minimum 44px interactive controls
keyboard hints hidden
learning navigation becomes vertical
typing controls become vertical
```

Fluid layout contract:

`.learner` and `.character-area` use `minmax(0, 1fr)` tracks and every panel
sets `min-width: 0`, so the grid can shrink below the content's min-content
width instead of pushing the page wider than the viewport. The glyph
(`.svg-wrap`) is fluid — `width: 100%` capped at `max-width: 250px`, square —
and `.controls` uses `repeat(auto-fit, minmax(80px, 1fr))` with wrapping
labels, so three buttons share a row only when they actually fit.

Measured at 15 widths from 320 to 1920 px, with no horizontal overflow:

```text
≤480 px      glyph fixed at 210px by the `max-width: 480px` block, so the
             phone glyph is wider than the tablet one
481–800 px   single-column learner, glyph fluid up to 250px
801–946 px   two equal, shrinkable panels; single-column controls;
             glyph 148–220 px
1000 px+     glyph caps at 250px
```

The narrowest panel content box is 148 px (at 801 px). The 120 px content floor
and the absence of overflow are asserted by LAY.0–LAY.8 in `tests-learn.html`.

Touch support:

```text
swipe left  → next kana
swipe right → previous kana
```

---

# 29. Accessibility / Interaction Notes

Current minimum touch target is approximately 44px in mobile styles.

Keyboard interaction is intentionally supported.

Potential interaction conflict:

The global `keydown` listener handles:

```text
Escape
Enter
1–9
learning shortcuts
```

while typed modes contain their own Enter handling.

This should be checked carefully when modifying keyboard behavior.

---

# 30. Completed Tasks

## Phase 1

```text
T1  mastery thresholds                 DONE
T2  MASTERED level                     DONE
T3  learning keyboard shortcuts        DONE
T4  KanjiVG comments                   DONE
T5  distractor filtering               DONE
T6  KanjiVG source of truth            DONE
```

## Phase 2

```text
T7  multi-mode exam                    DONE
T8  dakuten / handakuten / yōon        DONE
T9  exam timer                         DONE
```

## Phase 3

```text
T10 XP system                          DONE
T11 mobile touch gestures              DONE
T12 confetti                           DONE
```

## Phase 4

```text
T17 katakana mode                      DONE
T26 settings / personalization        DONE
T14 offline PWA                        DONE
T21 spaced repetition engine          DONE
```

### T9 extension

T9 is considered functionally complete for the current timer implementation.

However, the exam system is planned to receive a configuration/limits extension:

```text
T9 extension:
- optional question limit
- automatic completion after N questions
- manual early termination remains available
- question limit independent from per-question timer
```

---

# 31. Remaining Roadmap

The roadmap has been reordered around feature value and learning-system completeness.

## Already shipped

```text
T8  Dakuten / Handakuten / Yōon      DONE
T17 Katakana mode                   DONE
T26 Settings / Personalization     DONE
T14 Offline PWA                    DONE
T21 Spaced repetition              DONE
T15 Long-term statistics           DONE
```

These are implemented and live. Sections 32 (T8), 33 (T17), 37 (T14),
39 (T26), 44 (Offline architecture), 45 (Settings architecture) and
46 (Spaced repetition) describe the shipped behaviour; the daily statistics
store and its read-only aggregation are documented under
"Daily statistics (T15)".

## Next major priorities

```text
T19 Vocabulary
T16 Code splitting
```

Recommended order:

```text
T19 → T16
```

### Rationale

**T19 — Vocabulary**

The next item that adds learner value rather than maintenance: it builds on the kana the learner already knows instead of adding plumbing. It goes before T16 for the same reason T13 did — feature decisions first.

**T13 — Canvas drawing mode — SHIPPED**

Shipped in three layers (§35). Listed above only while the roadmap is re-read.

**T16 — Code splitting**

Technical architecture work should happen after the feature set has stabilized. `app.js` is now a single large bundle; splitting it is worth doing, but only once the remaining feature decisions are settled, so that boundaries do not have to be redrawn afterwards.

---

# 32. T8 — Dakuten / Handakuten / Yōon

Goal:

> Expand the learning and exam system beyond the 46 basic kana into common modified hiragana sounds.

Planned content includes:

### Dakuten

```text
が ぎ ぐ げ ご
ざ じ ず ぜ ぞ
だ ぢ づ で ど
ば び ぶ べ ぼ
```

### Handakuten

```text
ぱ ぴ ぷ ぺ ぽ
```

### Yōon

Examples:

```text
きゃ きゅ きょ
しゃ しゅ しょ
ちゃ ちゅ ちょ
にゃ にゅ にょ
ひゃ ひゅ ひょ
みゃ みゅ みょ
りゃ りゅ りょ
ぎゃ ぎゅ ぎょ
じゃ じゅ じょ
びゃ びゅ びょ
ぴゃ ぴゅ ぴょ
```

The implementation should preserve the existing adaptive-learning architecture.

Important future considerations:

- data representation for multi-character kana,
- KanjiVG compatibility,
- stroke animation for combined kana,
- exam question generation,
- distractor generation,
- progress tracking,
- mastery,
- similarity/confusion logic.

T8 should be implemented as an extension of the current data model where practical, not as a completely separate learning system.

---

# 33. T17 — Katakana Mode

Status: **SHIPPED**.

Goal:

> Add katakana as a second Japanese script while preserving the existing learning architecture.

Implemented functionality:

- katakana dataset (`scriptData.katakana`, same group/char structure),
- 26 groups / 104 characters, mirroring hiragana,
- katakana stroke descriptions and counts,
- katakana KanjiVG stroke animation,
- katakana progress and mastery,
- katakana exam questions and distractors,
- 56 lookalike groups (vs 61 for hiragana),
- script selection: menu switcher plus a default-script setting (see section 45).

Katakana shares the existing learning/exam code — it is selected through
`scriptData[state.script]` rather than duplicated logic.

The implementation avoided duplicating large amounts of existing learning/exam logic.

Future combined-script practice can eventually allow:

```text
Hiragana
Katakana
Mixed
```

---

# 34. T15 — Long-Term Statistics

Goal:

> Turn the existing per-character progress system into useful long-term learning statistics.

Potential statistics:

- total questions answered,
- total correct,
- total mistakes,
- accuracy,
- study sessions,
- characters practiced,
- mastery distribution,
- strongest characters,
- weakest characters,
- streak history,
- XP history,
- progress over time.

Potential future UI:

```text
Statistics
├── Overview
├── Accuracy
├── Mastery
├── Weak characters
├── Strong characters
└── History
```

The existing localStorage data should be reused where possible.

---

# 35. T13 — Canvas Drawing Mode

T13 was built in layers. **Layers 1–3 — the drawing surface, its scoring and
the polish — are shipped.**

Goal:

> Allow the user to draw kana using mouse or finger and evaluate the drawing.

Requirements:

- mouse support,
- touch support,
- drawing canvas,
- clear/reset action,
- finish/check action,
- stroke count detection,
- stroke order detection,
- stroke direction estimation,
- approximate shape comparison,
- use existing KanjiVG path data as reference,
- work with existing learning mode,
- preserve existing KanjiVG animation,
- do not break exam/progress systems.

## Shipped so far

**Layer 1 — drawing surface — SHIPPED.**

A canvas sits inside `.svg-wrap` as a sibling of the KanjiVG `<svg>`, not in a
container of its own, so the field's geometry is unchanged and the fluid-layout
contract (§28) still holds. It is created by `mountDrawing(wrap)`, which owns
the pointer handlers (mouse, touch and pen via Pointer Events), device-pixel
scaling and a `ResizeObserver`, and returns
`{ canvas, enabled, strokes, setEnabled, clear, destroy }`. Strokes are kept as
data, not only as pixels, so scoring can be added without changing that API.

"✍️ Rysuj" toggles the mode and dims the character into a tracing guide;
"Wyczyść" clears the drawing. `mountKana()` now takes an optional `overlay` and
re-appends it at each of the three points where it rewrites the container, so
the drawing surface does not depend on the KanjiVG fetch succeeding. Covered by
D1–D10 in `tests-learn.js`.

**Layer 2 — scoring — SHIPPED.**

`scoreDrawing(drawn, reference, box)` returns numbers, not a verdict, and weighs
four components into one score:

| component | question | weight |
| --- | --- | --- |
| count | were as many strokes drawn as the pattern needs | 0.35 |
| direction | does stroke *n* point where stroke *n* of the pattern points | 0.25 |
| coverage | how much of the **pattern** lies near the drawing | 0.40 |
| precision | how much of the **drawing** lies near the pattern | — |

Coverage and precision are kept apart on purpose: the first punishes missing
strokes, the second punishes scribbling beside the character, and their mean is
the "shape" term. The pass mark is one number, `DRAW_PASS_SCORE = 0.7`. A
faithful reproduction scores 1, a duplicated stroke 0.65, a correct stroke drawn
in the wrong place 0.6.

**Direction is a gate, not only a term in the sum.** A stroke drawn backwards
covers exactly the same pixels, so neither count nor shape can tell it apart
from a correct one: it scored 0.75 and passed the threshold. `scoreDrawing()`
therefore returns `passed` as `backwards.length === 0 && score >= DRAW_PASS_SCORE`,
where `backwards` lists the numbers of paired strokes whose direction agreement
fell below 0.25. The verdict and the highlight both read that one field, so the
rule lives in a single place.

The pattern is the KanjiVG geometry `mountKana` already animates — `mountKana`
now returns `paths`, and `referenceOnCanvas()` maps the viewBox into the canvas
through the SVG's screen matrix, so scoring does not depend on how wide the card
is. The reference is computed when "Sprawdź rysunek" is pressed rather than when
the character loads, because `resize()` rescales stored strokes along with the
field.

The canvas is hidden with `visibility`, not `display`: a `display: none` element
reports a zero rectangle, and the pattern silently landed in screen coordinates
instead of the canvas ones.

`drawVerdict()` names the weakest component rather than saying only "no".
Covered by S1–S16 in `tests-learn.js`: S1–S8 and S15 exercise the pure
functions, S9–S14 and S16 run the whole path in the DOM against a stubbed
`loadKanji`, so they need no network.

**Layer 3 — polish — SHIPPED.**

- The check button is "Sprawdź rysunek", not "Sprawdź": the learn panel also
  has an exam button "🔍 Sprawdź się", and two buttons starting with the same
  word in the same card read as the same action.
- A failure caused by direction names the strokes: "kierunek kresek (odwrotnie:
  kreska 2)" instead of only "kolejność albo kierunek kresek". `scoreDrawing()`
  returns a `pairs` entry per matched stroke (`{ index, agreement }`) and
  `strokeNumbers()` inflects the list in Polish.
- S15 and S16 guard both, and S15 fails without the gate: with the direction
  check removed, a reversed stroke reports `passed: true`.

**Setting: hiding the reference character.**

"Znak wzorcowy" in Settings → Rysowanie (`hideGuide`, default "Widoczny")
removes the character while drawing, for practising from memory. It is a
preference, not a mode: it survives a reload and applies to the next character
too. `applyHideGuide()` puts the class on `#svgWrap` and the CSS rule is scoped
to `.svg-wrap.drawing`, so outside drawing mode the preview is untouched. The
stroke numbers are `<text>` inside the same SVG, so they disappear with it.

It has two entrances and one store, like the theme's topbar toggle: the Settings
card, and a "👁 Ukryj wzór" button in the drawing controls that appears **only
while drawing mode is on**. Hidden outside it on purpose — there the setting
changes nothing, so a click would look broken. The button reads its state from
`settings.hideGuide` on every render, so the two entrances cannot disagree.

One consequence worth knowing: with the guide hidden, "Odtwórz", "Kreska po
kresce" and "Cały znak" animate something invisible. That is the point of
drawing from memory, and turning drawing off brings the character back.

Covered by S17–S25; S18 measures the computed opacity (0.16 → 0) and fails
when the CSS rule is removed, and S21 fails when the button stops being
revealed by the drawing toggle.

Not verified: real touch hardware. The harness synthesises Pointer Events and
asserts the wiring, not how drawing with a finger feels. The field was measured
in a real browser at 320 px — the six buttons keep three rows and the document
has no horizontal overflow — but that is a measurement of one layout, not a
promise about every width. The weights (0.35 / 0.25 / 0.40) and the 0.7 pass
mark are a judgement call, not a calibrated result: nothing has measured how
often they agree with a human judge.

Important:

T13 should **reuse the existing KanjiVG data pipeline where possible**.

Do not create a second unrelated kana dataset.

The current KanjiVG stroke paths should become the reference geometry for drawing validation.

The first implementation should favor a robust/simple scoring model over a mathematically perfect handwriting recognizer.

---

# 36. T13 Architectural Constraint

Do not turn T13 into a full rewrite.

The current application works.

The goal is to add a drawing layer on top of the existing learning architecture.

Preferred conceptual structure:

```text
Learning Mode
    ↓
Study Card
    ├── KanjiVG animation
    ├── Stroke descriptions
    └── Drawing mode
          ├── Canvas
          ├── User strokes
          ├── Reference strokes
          └── Evaluation
```

The drawing evaluator should remain isolated enough that it can later be moved into a module during T16.

---

# 37. T14 — Offline PWA

Status: **SHIPPED**.

Goal:

> Make the app installable and usable offline.

Delivered:

- web app manifest (`manifest.webmanifest`) with icons, `standalone` display,
  theme/background colours,
- service worker (`sw.js`) with versioned caches,
- precached application shell,
- precached CSS/JS,
- offline navigation fallback (`offline.html`),
- local progress persistence (unchanged — stored in `localStorage`),
- **148 precached KanjiVG assets** — all stroke data required by both scripts.

The original dependency on remote KanjiVG sources was resolved by precaching
all 148 required SVG files in the Cache Storage rather than by bundling them
into the repository. The full cache/fetch architecture is documented in
section 44.

---

# 38. T16 — Code Splitting

Goal:

> Improve maintainability without changing application behavior.

Potential module boundaries:

```text
data
audio
state
progress
mastery
kanjivg
learning
exam
questions
statistics
drawing
ui
utils
```

T16 should be performed only after the major feature architecture has stabilized.

The existing single-file architecture should not be prematurely fragmented.

---

# 39. Future Feature Roadmap

These features are intentionally outside the immediate roadmap.

They represent the longer-term direction of Hiragana Study.

---

## T18 — Kanji

Goal:

> Extend Hiragana Study from kana learning into introductory Japanese kanji learning.

Potential scope:

- kanji dataset,
- JLPT-based organization,
- readings,
- meanings,
- stroke order,
- KanjiVG animation,
- handwriting,
- per-kanji progress,
- adaptive kanji questions,
- kanji recognition,
- example vocabulary.

Kanji should build on the existing learning engine rather than create an entirely separate application.

---

## T19 — Vocabulary

Potential functionality:

- Japanese vocabulary,
- kana readings,
- meanings,
- example words,
- kanji + kana combinations,
- vocabulary quizzes,
- recognition questions,
- typing questions.

Vocabulary should eventually connect naturally with kanji and grammar.

### Status: data layer shipped

`VOCAB_ITEMS` in `app.js` holds the 22 items of the class worksheet
"きょうしつで つかう ことば" (1) — 20 request expressions with the verb each
comes from, plus two sentence patterns. Every item carries a stable `id`
(`v01`–`v22`), and items of `type: 'pattern'` are deliberately **not** cards:
they have no counterpart in the progress store.

Meanings are **Polish**; the source worksheet glosses in English, so the table
is a translation, not a copy. Romaji follows `scriptData` and carries no
macrons. The table is not read by any screen yet — it is the first of four
layers (data → progress store → cards → patterns), so nothing here changes
what the app does.

Covered by VO1–VO7 in `tests.js`: counts, id sequence, required fields, kana
fields free of Latin text, romaji free of macrons, unique kana, and the shape
of the two patterns. VO5 fails when a macron is introduced.

Nothing has verified the translations against a Polish teacher; they are my
own reading of the worksheet.

---

## T20 — Grammar

Potential functionality:

- basic Japanese grammar concepts,
- particles,
- sentence patterns,
- examples,
- recognition exercises,
- sentence construction,
- grammar quizzes.

This should be treated as a much larger learning-system expansion than a simple additional quiz mode.

---

## T21 — Spaced Repetition / Learning Engine

Goal:

> Evolve the current adaptive weighting system into a more formal long-term learning engine.

Potential functionality:

- spaced repetition,
- review scheduling,
- retention estimates,
- difficulty adjustment,
- forgotten-character recovery,
- due-review queue,
- learning intervals,
- personalized practice sessions.

The existing:

```text
mastery
recent answers
error rate
confusion data
weighted selection
```

should provide a foundation for this system.

---

## T22 — Daily Practice / Goals

Potential functionality:

- daily question goal,
- daily study streak,
- daily XP goal,
- session length,
- daily review,
- weekly goals,
- progress toward targets.

The feature should remain optional and avoid unnecessary pressure.

---

## T23 — Achievements

Potential functionality:

- first perfect exam,
- 100 questions answered,
- all basic hiragana learned,
- all characters mastered,
- long streaks,
- handwriting milestones,
- katakana milestones,
- kanji milestones.

Achievements should complement learning rather than dominate the UI.

---

## T24 — Custom Study Sets

Allow the user to create custom practice sets.

Potential examples:

```text
Difficult kana
My mistakes
Katakana only
JLPT N5
Custom characters
```

Potential future support:

- saved sets,
- renamed sets,
- imported sets,
- exam configuration per set.

---

## T25 — Advanced Audio & Focus / Lo-fi

The existing Web Audio system should eventually evolve into a richer audio subsystem.

Potential functionality:

### Sound Effects

- richer correct-answer sounds,
- richer wrong-answer sounds,
- subtle UI feedback,
- streak sounds,
- level/mastery sounds,
- exam completion sounds.

### Music

- optional background music,
- lo-fi/focus mode,
- separate music volume,
- SFX volume,
- master volume,
- fade in/out,
- pause music during certain screens if desired.

### Focus Mode

Potential concept:

```text
Focus Mode
├── study session
├── optional lo-fi
├── reduced distractions
├── configurable session length
└── session result
```

### Custom Audio

Potentially allow the user to select local audio files for personal use.

Preferred formats may include:

```text
.mp3
.ogg
.wav
```

User-provided local audio should remain local and should not require uploading files to a server.

---

## T26 — Settings / Personalization

Status: **SHIPPED**. Full architecture is documented in section 45.

Goal:

> Give the user a single, centralized place for persistent preferences.

Delivered:

- centralized settings store (`hiragana-settings`),
- light / dark / system theme preference,
- sound effects on/off preference,
- default script (Hiragana / Katakana) preference,
- migration from the legacy `hiragana-theme` / `hiragana-muted` keys,
- pre-paint theme bootstrap,
- Settings screen with appearance / sound / learning / data sections,
- Reset Settings, Reset Progress and Clear All Data.

---

# 40. Development Rules

Working rules for coding agents — scope, testing, cache versioning, Git and
reporting — live in `AGENTS.md`. The rules below are domain invariants:
properties of the application itself that any change has to preserve.

## Rule 1 — User data is authoritative

For current application behavior, existing source code is the source of truth.

Do not invent structures that are not present.

## Rule 2 — KanjiVG is stroke truth

Manual `strokeText` remains educational content.

Actual SVG path data determines:

- stroke count,
- stroke order,
- reference geometry.

## Rule 3 — Preserve existing behaviour

A change must not silently alter behaviour outside its stated scope.

There is deliberately no enumeration of features to preserve here: such a list
goes stale the first time a feature is added, and a stale list is worse than
none. The test harnesses are the mechanical guard — extend them, and run them
before finishing.

---

# 41. Known Audit Points

These are not necessarily bugs; they are items to verify.

Status of each item: **fixed** — behaviour or markup changed; **covered** —
correct already, now protected by tests; **no defect** — checked, nothing to
change; **accepted** — a decision, not a bug.

## Fixed in the 2026-10 audit round

- **3. Timer timeout in typed modes — RESOLVED.** The timeout disabled only `.answer` buttons, which typed modes do not have, so the text field and "Sprawdź" stayed enabled after time expired. Both pairs are now disabled. Grading was never at risk: the timeout sets `exam.answered`, and `submitTypedAnswer()` returns early on it, so a late submission could not affect the score or daily stats. Covered by the TYP assertions in `tests.js`.
- **4. Hard-practice settings preservation — RESOLVED.** The practice-hard button saved only `{groups, options, outside}`, and `saveExamSettings()` overwrites wholesale, so `limit`, `modes` and `timer` were lost on every use — four question modes collapsed to one, timer and limit reset to 0. `readSetup()` already returned every field; the caller now passes the full set to both `saveExamSettings()` and `startExam()`. Covered by the CFG assertions in `tests.js`.
- **9. Unused CSS/JS hooks — RESOLVED, no test added.** Two dead rules removed: `.sound` and `.stroke-title`. Verified by literal search across `app.js`, `index.html`, all three harnesses and `sw.js`, by checking class attributes and `classList` use, and by confirming no concatenation can produce either name. Of the six `stroke-*` classes, the other five are in use. **Not covered by a test** — a CSS-scanner test would have to reimplement the detection and would break on any new dynamic class name. An earlier count of six unused classes was wrong: it missed the `mastery-*` classes, which are built at runtime as `mastery-${masteryLevel(kana)}`.
- **11. Confetti hardcoded colors — RESOLVED, was a real bug.** `spawnConfetti()` set inline colors from six literals. Four matched theme tokens but only their light-theme values, so in dark mode the result screen threw light-theme confetti; two more had no token at all. Now references `--accent`, `--good`, `--warn`, `--bad`, `--mastered` — five colors instead of six, accepted rather than worked around. `var()` resolves in an inline style, so no `getComputedStyle` and no new variable. Covered by CF1–CF6 in `tests.js`; four of them fail against the old palette.
- **2. Manual stroke counts vs KanjiVG — RESOLVED, 32 of 208 were wrong, and the manual data was the wrong side in every one.** All 148 KanjiVG parts were fetched through `loadKanji()`; 176 characters agreed. **21 hiragana** — `ぎ ぐ げ ご じゃ じゅ じょ だ ぢ づ で ど びゃ びゅ びょ ぶ べ ぼ ぎゃ ぎゅ ぎょ` — were short by exactly one, because their dakuten was written as a single entry covering both marks (`dwie ukośne kreski dakuten…`), while the count is `strokes.length`. The earlier note blamed KanjiVG for drawing the mark with three strokes; **that was wrong**. Measured: `き` is 4 and `ぎ` is 6, `く` is 1 and `ぐ` is 3 — the dakuten contributes two, which is the conventional count. **11 katakana were wrong in both directions**: `フ 4→1`, `ブ 6→3`, `プ 5→2`, `セ 3→2`, `ゼ 5→4`, `ヤ 3→2`, `レ 2→1`, `ン 1→2`, `テ 2→3`, `デ 4→5`, `ヂ 4→5`. The affected lists were regrouped onto the real stroke boundaries — for katakana against the measured KanjiVG geometry (`getPointAtLength`, including each stroke's direction), not by guesswork. `チ`'s third description was a placeholder (`trzecia kreska チ`) and is now the real stroke; its count was already correct. The runtime reconciliation in `mountKana` (`if (player.count !== count)`) is unchanged and is now a no-op for all 208 characters. Covered by STR1–STR4 in `tests-learn.js`; STR1, STR2 and STR4 fail against the old data.
## Verified correct, now covered by tests

- **13. Question-limit off-by-one — VERIFIED CORRECT, now covered.** The limit is checked at the top of `nextExamQuestion()`, so after the Nth answer the exam finishes with `total === N` and never renders an extra question. Covered by LIM1–LIM8; verified by mutating `>=` to `>`.
- **14. Automatic completion after a timed-out final question — VERIFIED CORRECT, now covered.** The timeout counts once as wrong, sets `waiting`, and does **not** finish by itself; the exam completes when the user advances. Covered by LIM9–LIM16; verified by mutating the `waiting` flag and by making `finishExam()` recount.
- **16. Interaction with the wrong-answer feedback flow — VERIFIED CORRECT, now covered.** This is the asymmetry, and it is distinct from 13 and 14: a correct answer schedules `nextExamQuestion` after 850 ms and therefore completes the exam with no user action, while a wrong answer and a timeout both show the answer card with no auto-advance. Covered by LIM17–LIM23. Verified by mutating the wrong-answer path to auto-advance — detected **only** by LIM20 and LIM21, which confirms this is tested on its own terms.
## Checked, no change needed

- **15. Retry preserving timer/limit — NOT A BUG.** "Spróbuj jeszcze raz" calls `showExamSetup()` and saves nothing, so stored settings are untouched.
- **1. `masteryLevel()` ordering of `hard` vs `mastered` — CORRECT, no bug.** The branches are mutually exclusive given the size of `recent`. `hard` needs `errorRate >= 0.5` over the whole window; `mastered` needs the last five entries to all be correct. With `recent` capped at 6, five correct entries in the last five give a rate of 0.167, so both cannot hold. The cap is only enforced on write, never on read — nothing trims a longer array — but `git log -S` shows `entry.recent.length > 6` has existed since the initial commit, which is the same commit that introduced `recent`. A window longer than 6 is therefore unreachable except by hand-editing `localStorage` or importing data.
- **5. Theme system branch — MINOR GAP, not a defect.** `resolveTheme()` calls `window.matchMedia('(prefers-color-scheme: dark)')` once per render and there is no `change` listener. With the theme set to `system`, switching the OS appearance while the app is open does not re-theme it until the next render or reload. Nothing is wrong with the branch itself.
- **6. `mountKana().finish()` — NOT A BUG, the item rests on a wrong premise.** `mountKana()` returns `{ play, step, showAll, count }`. There is no `finish` on the returned object; `finish` is a local function inside `mountKana`, called by `step()` and `play()` when the last stroke completes, and never exposed. `player.finish` is not referenced anywhere in the app or the harnesses.
- **7. Global keyboard listener vs text inputs — NO DEFECT FOUND.** Typed inputs attach their own `keydown` handler that calls `e.stopPropagation()` for Enter, so the global listener never sees it. Digit shortcuts are additionally guarded by `exam.currentMode !== 'romaji-kana-type' && exam.currentMode !== 'kana-romaji-type'`, so typing digits into the field selects nothing. Escape reaches the global handler and returns to the menu, which is intended. Worth remembering: that guard is positional — any input added to Learn mode later will need its own handling.
## Accepted — deliberate decisions, not bugs

- **10. `color-mix()` support — ACCEPTED.** Used 28 times. The property is widely available in current browsers; supporting older engines would mean rewriting the theme layer for no gain on the platforms this app targets. Not verified against specific legacy browsers.
- **12. KanjiVG loaded from a CDN — ACCEPTED.** The app needs one online load before it is fully offline. Vendoring all 148 stroke SVGs would remove that dependency at the cost of a much larger repository, and KanjiVG data changes rarely. `SVG_SOURCES` tries three locations in order, and Google Fonts are cached by the service worker with a system-font stack in `style.css` as the fallback, so a single failed host does not break the app.
## Still open, **not evaluated in this round**

8. Four exam modes vs original T7 specification.

## Open, forward-looking

17. Future multi-character kana representation for yōon.
18. KanjiVG compatibility for combined kana and future kanji data.
19. Separation of music/SFX/master volume when advanced audio is implemented.

---


# 42. Current Project State

As of the current roadmap revision:

```text
Application status: functional
Architecture: vanilla JS SPA + service worker
Source files: app.js, style.css, index.html, sw.js, manifest.webmanifest,
              offline.html, icons/

Learning mode: implemented
KanjiVG animation: implemented
Progress: implemented
Adaptive exam: implemented
4 exam modes: implemented
Per-question timer: implemented
Optional question limit: implemented
XP: implemented
Touch gestures: implemented
Confetti: implemented

Dakuten / Handakuten / Yōon: implemented
Katakana: implemented
Settings / personalization: implemented
Offline support (PWA): implemented

Long-term statistics: implemented
Drawing mode: NOT implemented
Code splitting: NOT implemented
Kanji: NOT implemented
Vocabulary: NOT implemented
Grammar: NOT implemented
Spaced repetition engine: implemented
Daily goals: NOT implemented
Achievements: NOT implemented
Custom study sets: NOT implemented
Advanced audio / lo-fi: NOT implemented
```

### Current active task

```text
T19 Vocabulary — next
```

T21 (spaced repetition) and T15 (long-term statistics) are both shipped and
documented. For what has been fixed, verified or deliberately accepted so
far, see §41 rather than a list here — an enumeration in this section would
go stale on the next round. T13 is complete: the drawing surface, its scoring
and the polish are shipped (§35).

### Current recommended roadmap

```text
T19
↓
T16
```

Long-term:

```text
T18 Kanji
T19 Vocabulary
T20 Grammar
T22 Daily Practice / Goals
T23 Achievements
T24 Custom Study Sets
T25 Advanced Audio & Focus / Lo-fi
```

---

# 43. Deployment

Repository:

- GitHub: `Maciejsonik/hiragana-study`
- Local path: `/Users/maciek/Code/hiragana-study`

GitHub Pages:

- Site: `https://maciejsonik.github.io/hiragana-study/`
- Deployment: GitHub Actions, triggered by push to `main`
- Workflow: `.github/workflows/deploy.yml`
- Pages source: GitHub Actions
- Published path: the repository is served from the **`/hiragana-study/` subpath**, not from the domain root

Important:

- The application is hosted under a subpath. All runtime paths (manifest
  `start_url` / `scope` / `id`, Service Worker registration, icons, stylesheet
  and script references) are **relative** for this reason. Do not introduce
  root-absolute (`/…`) paths.
- The current workflow uploads the whole directory.
- Therefore `PROJECT.md` and `README.md` are also currently publicly accessible
  through Pages.

This is currently acceptable, but the deployment workflow can later be changed to publish only the files required by the application if a cleaner public surface is desired.

---

# 44. Offline / PWA Architecture

Status: **SHIPPED** (T14).

## Manifest

`manifest.webmanifest` uses relative paths throughout:

```text
id         ./
start_url  ./
scope      ./
display    standalone
theme_color #121116      (dark, the default)
```

Icons: 192×192 `any`, 512×512 `any`, 512×512 `maskable`. `apple-touch-icon` is
linked from HTML rather than the manifest, because Safari ignores manifest icons
for the home screen.

`index.html` additionally declares two `theme-color` values scoped by
`media="(prefers-color-scheme: …)"` so the browser chrome matches the active
theme.

## Service Worker

`sw.js` sits next to `index.html`, so its scope is the application directory —
`/hiragana-study/` on GitHub Pages, `/` on localhost. No `Service-Worker-Allowed`
header is required.

Same-origin URLs are resolved against `self.registration.scope`, so nothing
assumes deployment at the domain root.

## Versioned caches

```text
shell-v<N>      application shell
kanjivg-v<N>    KanjiVG stroke data
fonts-v<N>      Google Fonts
```

`<N>` is the `VERSION` constant in `sw.js`. Any change to `sw.js` makes the
browser fetch it again and install a new worker, which is what drives updates.

On `activate` the worker deletes every cache that is not one of the three
current ones, so stale versions cannot accumulate or be served.

## Fetch strategies

| Request | Strategy | Reason |
|---|---|---|
| navigation / HTML | network-first → cache → `offline.html` | the document must never be stale |
| same-origin JS / CSS / icons | stale-while-revalidate | instant, updates in background |
| `cdn.jsdelivr.net/gh/KanjiVG/…` | cache-first | per-kana stroke data is stable and small |
| `fonts.googleapis.com`, `fonts.gstatic.com` | cache-first | decorative, but removes a third-party dependency |
| anything else | not intercepted | let the browser handle it |

`raw.githubusercontent.com` is deliberately **not** intercepted: it is only the
second fallback in `SVG_SOURCES` and is never reached while jsDelivr works.

## Precache

On `install`:

- the shell (`./`, `index.html`, `style.css`, `app.js`, manifest, icons,
  `offline.html`) via `cache.addAll`,
- **all 148 KanjiVG SVG files** required by both scripts,
- the Google Fonts stylesheet.

The KanjiVG fill is deliberately tolerant: requests run with limited
concurrency and a second retry pass, so a single failed CDN request can never
abort the installation and a partially filled cache cannot become permanent.
A missing SVG still degrades gracefully through the existing font-glyph fallback
in `mountKana()`.

## Update UX

`skipWaiting()` and `clients.claim()` are used so a new worker activates
promptly, but **the page is never reloaded automatically**. On `updatefound`
→ `installed` with an existing controller, the page shows a small non-blocking
banner:

```text
Nowa wersja dostępna — Odśwież
```

The reload happens only after the user clicks it. This protects in-progress
sessions — for example an active exam — from being interrupted by a deploy.

## Relationship to application state

The service worker never touches `localStorage`. `hiragana-settings`,
`hiragana-progress` and `hiragana-exam-settings` belong to the application
(see section 45) and are entirely unaffected by cache versioning.

---

# 45. Settings Architecture

Status: **SHIPPED** (T26).

## Store

There is no settings framework, store library or event bus. Settings are a
single plain object plus four setter functions.

```text
hiragana-settings = { theme, muted, script, hideGuide }
```

- `theme`  — `light` | `dark` | `system`
- `muted`  — boolean
- `script` — `hiragana` | `katakana`
- `hideGuide` — boolean; hides the reference character while drawing (see §35)

## Centralized setters

`setTheme()`, `setMuted()`, `setScript()` and `setHideGuide()` are the only
write paths. Each updates the `settings` object, synchronizes the matching
runtime mirror (`state.theme`, `Audio.muted`, `state.script`) and persists.

`setHideGuide()` has no mirror to update: it toggles the `hide-guide` class on
`#svgWrap` through `applyHideGuide()`, which tolerates the element being absent
(the setting can be changed from another screen). The CSS rule is scoped to
`.svg-wrap.drawing`, so the character is hidden only while drawing mode is
active — outside it the setting changes nothing. The learn panel also carries a
quick toggle for it, shown only in drawing mode (§35).

`setScript()` additionally resets `state.group` / `state.kana` to the first
group of the newly active script, so script-dependent state can never leak
across scripts.

## Loading and migration

`loadSettings()` reads `hiragana-settings` and resolves each field
independently:

```text
valid value in hiragana-settings  →  legacy key  →  default
```

- legacy keys: `hiragana-theme`, `hiragana-muted`
- unknown fields are discarded, wrong types are rejected
- corrupt JSON is recovered from the legacy keys
- the store is rewritten only when normalization actually changed something,
  so a plain read does not write
- legacy keys are **read only** — they are never written again, and are not
  deleted

## Pre-paint bootstrap

`index.html` contains a small synchronous script that sets
`data-theme` on `<html>` before the first paint, using the same resolution
order (`hiragana-settings` → legacy `hiragana-theme` → `system`). This
prevents a light/dark flash. It performs **no writes**; migration belongs to
`loadSettings()`.

## Screens

`renderSettings()` renders five sections:

```text
Wygląd     theme: light / dark / system
Dźwięk     sound effects: on / off
Nauka      default script: hiragana / katakana
Rysowanie  reference character while drawing: visible / hidden
Dane       Reset Settings / Reset Progress / Clear All Data
```

Every control is a native `<button>` and applies immediately. Because each
change re-renders the screen, focus is restored to the control that was
activated (via `data-focus-key`).

Destructive actions are confirmed:

- Reset Settings — one confirmation,
- Reset Progress — one confirmation,
- Clear All Data — two confirmations.

"Clear All Data" removes exactly the six application keys
(`hiragana-settings`, `hiragana-exam-settings`, `hiragana-progress`,
`hiragana-daily`, `hiragana-theme`, `hiragana-muted`) and leaves unrelated
`localStorage` keys untouched. Four are current stores, two are the legacy
keys described above; the daily-history key is removed too, which the
confirmation says out loud.

## Interaction with other systems

- **Theme:** `applyTheme()` resolves `system` through the OS
  `prefers-color-scheme`; `data-theme` never becomes the literal `system`.
  The topbar quick toggle flips between light and dark based on the currently
  *visible* theme, so a `system` preference never produces a no-op click.
- **Audio:** `Audio.muted` mirrors `settings.muted`; audio is synthesized with
  Web Audio oscillators and needs no asset files.
- **Progress / exam:** untouched. `hiragana-progress` and
  `hiragana-exam-settings` are separate stores with their own reset actions.

# 46. Spaced Repetition (T21)

Shipped alongside the existing adaptive weighting. SRS is deliberately kept
**separate from legacy mastery** — see "Legacy vs SRS mastery" below.

## Storage

```text
localStorage:
  hiragana-progress  version 2
```

```js
{
  version: 2,
  chars: {
    "あ": {
      // legacy fields (unchanged, still drive chart/practice/exam)
      seen, correct, wrong, recent, confused, last,
      // SRS fields (new)
      stage, reps, due, lapses
    }
  }
}
```

## Ladder

`stage` is an index into a fixed ladder. `reps` counts correct answers **on the
current stage only**, so `dueReps` is a progress-through-rung counter.

| stage | interval | reps to advance |
| ----- | -------- | ---------------- |
| 0     | 0 d      | 1                |
| 1     | 1 d      | 1                |
| 2     | 3 d      | 1                |
| 3     | 7 d      | 1                |
| 4     | 14 d     | 2                |
| 5     | 30 d     | 2                |
| 6     | 60 d     | 2                |
| 7     | 120 d    | 3 (`MAX_STAGE`) |

A wrong answer drops one stage and counts a `lapse`, except at stage 0 — failing
the very first rung is ordinary learning, not a retention loss.

## Status

`deriveStatus()` is computed on read and never stored:

| status     | condition                                | label          |
| ---------- | ---------------------------------------- | -------------- |
| `unseen`   | no valid progress record                 | —              |
| `learning` | stage 0                                  | W trakcie nauki |
| `review`   | any stage below max, or max without reps | Do powtórki    |
| `mastered` | stage `MAX_STAGE` **and** `reps >= 3`    | Długi odstęp   |

`mastered` requires confirmation **on** the top rung. `scheduleAnswer()` must
therefore cap `reps` at `MAX_STAGE` rather than zeroing it — zeroing there makes
`mastered` unreachable, because the status would be revoked on the very answer
that earned it. Wrong answers still drop a stage, so mastery is lost and must be
re-earned.

The review screen deliberately avoids "Opanowane"/"mastered" wording, so a status
derived from spaced repetition is never mistaken for the legacy level.

## Migration (v1 → v2)

`migrateProgress()` runs on load. Missing SRS fields on an otherwise valid record
are seeded from the legacy level, so a user's existing history is preserved
rather than reset:

| legacy level | seeded stage |
| ------------ | ------------ |
| mastered     | 3            |
| good         | 2            |
| learning     | 1            |
| hard         | 0            |

Fresh records seed stage 0. `due` is 0, `reps` and `lapses` are 0.

Corruption handling: negative and non-integer values are treated as damage and
replaced by the seed, while a positive out-of-range `stage` (e.g. 99) is clamped
to `MAX_STAGE` — an overshoot still points at a genuinely practised kana and
should not be hidden. Non-object entries are **kept** in `chars` (no data loss)
but excluded from the queue and from `progressSummary()`.

`progressSummary()` sums only records passing `isProgressRecord()`, so `seen` and
`correct` come from the same set and the percentage cannot exceed 100 or become
`NaN` on damaged data.

## Queue

```js
dueList(now)      // every due kana, sorted due → lapses → stage → codepoint
dueCount(now)     // length of the queue
reviewSession()   // queue capped at MAX_REVIEW_PER_SESSION (20)
```

Only Exam feeds the schedule. Learn stays browse-only, and `exam-timeout` updates
legacy stats but never touches SRS — a timeout is not a retention failure.

## Legacy vs SRS mastery

Two independent systems coexist on purpose:

| | legacy `masteryLevel()` | SRS `deriveStatus()` |
| - | ----------------------- | -------------------- |
| input | `seen`, `correct`, `recent` | `stage`, `reps` |
| time | historical accuracy | schedule position |
| used by | progress chart, `practiceList()`, `difficultyMultiplier()`, exam weighting, kana colours | review screen only |

Do not merge them. Exam weighting must not shift because a kana reached a long
SRS interval — that would change existing practice behaviour as a side effect of
adding review.

## Daily statistics (T15)

```text
localStorage:
  hiragana-daily  version 1
```

A **separate** key from `hiragana-progress`, deliberately: that one answers
"what does this kana look like today", this one answers "what did I do on a
given day". SRS scheduling, `PROGRESS_VERSION` and the v1→v2 migration are
untouched by anything here.

```js
{ version: 1, days: {
    "2026-10-10": {
      answers, correct,            // totals across sources
      examAnswers, reviewAnswers,  // attribution split
      exams, reviews, xp, seconds
    } } }
```

### Field semantics

| field | definition |
| ----- | ---------- |
| `answers` | every `recordAnswer()` call on that local calendar day, **timeouts included** |
| `correct` | of those, graded correct — `exam-timeout` never is |
| `examAnswers` / `reviewAnswers` | the same calls split by session kind, so the totals are auditable |
| `exams` | non-review sessions that **ended** |
| `reviews` | review sessions that **ended** |
| `xp` | `exam.xp` read once at session end — never recomputed, never awarded twice |
| `seconds` | `endedAt - startedAt`; result screen and time outside a session excluded; missing or invalid → `0` |

### Rules that are easy to get wrong

- **A timeout counts as an answer.** `recordAnswer()` also increments legacy
  `seen` on timeout, so excluding it would make "today" contradict the lifetime
  total. It is never counted as `correct`, and it can never increment `reviews`
  — that moves only when a session ends.
- **The source argument cannot identify a review.** Every graded answer passes
  `'exam'`, including during a review session. Attribution therefore comes from
  the live session's `kind`, which is why `startExam()` gained one.
- **`kind`, not `kanaList`.** Both review sessions and "practice hard" pass a
  kana list, so the list cannot tell them apart; `practice` is its own kind.
- **Sessions end through two paths** — `finishExam()` and `stopExam()` — and
  `startExam()` itself calls `stopExam()`. Recording is guarded by a `recorded`
  flag so it happens exactly once.
- **Day keys are local.** Built from `getFullYear/getMonth/getDate`, never
  `toISOString()`, which is UTC and would file a late-evening session under the
  next day.

### Streak definition

Consecutive local calendar days with `answers > 0`, counting back from today. If
today has no activity yet, the streak is computed from the most recent recorded
day and labelled with how many days ago that was. Never inferred from lifetime
kana counters.

### Reset semantics

| action | progress | history |
| ------ | -------- | ------- |
| "Zresetuj postęp" | cleared | **kept** |
| "Wyczyść statystyki" | kept | cleared (explicit confirmation) |
| "Wyczyść wszystkie dane" | cleared | cleared |

The two stores are registered together in `appStorageKeys()`, so "clear all"
cannot leave history behind.

Writes are best-effort: a failed `localStorage` write or read is swallowed, so
private-browsing never breaks the learning experience. History is pruned to
`DAILY_STATS_MAX_DAYS` (400) days using an injectable clock, so the cutoff is
deterministic and testable.

Phase 2 is described in full below. Both phases are shipped.

---

### Phase 2 — presentation

Read-only. Nothing here writes to `hiragana-daily`; the only writers remain
`recordDailyAnswer()` and `recordSessionStats()`.

The section lives **inside the existing progress panel**, above the mastery map,
and is rendered **regardless of legacy progress**: "Zresetuj postęp" clears
kana records while keeping history, so "no progress but history" is a normal,
reachable state and the statistics must not vanish with the old early return.
The legacy lifetime line, mastery map and hard-characters list are unchanged.

| helper | returns |
| ------ | ------- |
| `dailyWindow(now, days = 14)` | 14 rows, oldest → newest, each `{key, answers, state}` where state is `before` \| `idle` \| `active` |
| `dailyStreaks(now)` | `{current, live, lastActiveKey, lastActiveDaysAgo, best}` |
| `dailyTotals()` | the eight stored counters plus `daysTracked` and `firstKey` |
| `dailyAccuracy(now, days = 14)` | `{percent, answers, correct, hasData}` |
| `formatDuration(seconds)` | `"0 s"`, `"1 minuta"`, `"2 godziny 15 minut"` … |

All take `now` explicitly — no `Date.now()` inside — so the chart and streaks
are deterministic and testable.

**Chart.** 14 local days, bar height proportional to that day's `answers`.
Three visually distinct states, because "we were not collecting yet" and
"you did not study that day" are different facts:

- `before` — earlier than the oldest retained day: a hatched slot and **no bar**
- `idle` — inside the collected period but no recorded activity: a flat bar
- `active` — a real bar

A missing key at or after the oldest retained day counts as `idle`, not
`unknown`: phase 1 writes a key on every answer and every session end.

**Streaks.** Exactly the definition above, with one addition the UI needs:
`live` is `true` only when **today** is active. When today is idle the streak is
carried over from the most recent active day and the label says so explicitly
("przeniesiony z wczoraj") rather than implying activity today. A zero-activity
day between two runs breaks the run. `best` is the longest run **among retained
days** and is labelled as such, because pruning drops anything older than
`DAILY_STATS_MAX_DAYS`.

**Accuracy.** Rolling 14-day `correct / answers`. With no answers in the window
`percent` is `null` and the UI renders "—", never 0%: "no answers" and "0%
correct" are different statements.

**Start date.** `firstKey` is the oldest **retained** day, not the day the user
started. The panel says "Dane od … · przechowujemy 400 dni" so retention is
visible rather than implied. Nothing is backfilled or estimated.

---

## Tests

Three dependency-free harnesses, no build step. All three rebuild the page
from the real `index.html` and load the real `app.js`, so they cannot drift
from the app.

```text
tests.html       + tests.js        SRS / migration / queue, exam settings,
                                   typed-mode timeout, confetti, exam
                                   completion, vocabulary data (252 assertions)
tests-learn.html + tests-learn.js  learn panel / layout / motion, stroke
                                   descriptions vs KanjiVG, drawing
                                   surface and scoring (T13)            (123 assertions)
tests-daily.html + tests-daily.js  daily statistics (collect+read)    (170 assertions)
```

The counts are a snapshot, not a contract — read the total from the run
output rather than expecting these numbers. Sections 18 and 19 wait on
real timers, so `tests.html` takes noticeably longer than the other two.

Run them over HTTP — `file://` blocks `fetch('index.html')` and
`fetch('style.css')`:

```sh
python3 -m http.server 8000
# http://localhost:8000/tests.html
# http://localhost:8000/tests-learn.html
```

Result lands in a `<pre id="R">` as `TOTAL PASS=n FAIL=0`, and the page title
becomes `ALL PASS` or `FAILURES`, so it is scriptable.

`tests-learn.html` additionally loads `style.css`: its layout assertions (kana
wrapping, section heights) are meaningless without real CSS.

Both are dev tools: not in `SHELL_ASSETS`, never precached.

### What these tests do NOT cover

Animation is not measured by height. `getComputedStyle(el, '::details-content')`
returns the **before-change** value while a transition is running, and pending
KanjiVG SVG fetches stall the compositor clock in headless. The tests therefore
check that the animation is **wired** (CSS, `::details-content`, `allow-discrete`,
`prefers-reduced-motion`) and that `<details>` survives a kana switch — without
which a transition could not replay at all. Smoothness and appearance still need
a human eye in a real browser.

The stroke-description checks (`STR1`–`STR3`) compare `strokeText` against a
frozen table of the 32 characters that disagreed with KanjiVG, not against
KanjiVG live — the harness stays offline. Drift in a character outside that set
would not be caught, and re-counting all 208 means re-running the comparison
described in §41 item 2.

---
