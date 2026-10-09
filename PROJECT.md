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
- self-test/hide character.

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

- overall statistics,
- mastery map,
- hard characters,
- practice-hard action,
- reset progress action.

Progress can be completely reset through the UI.

---

# 24. Theme

Theme is stored in the centralized settings store (see section 45):

```text
hiragana-settings = { theme, muted, script }
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
```

These are implemented and live. Sections 32 (T8), 33 (T17), 37 (T14),
39 (T26), 44 (Offline architecture) and 45 (Settings architecture) describe
the shipped behaviour.

## Next major priorities

```text
T21 Spaced repetition / learning engine
T15 Long-term statistics
T13 Canvas drawing mode
T16 Code splitting
```

Recommended order:

```text
T21 → T15 → T13 → T16
```

### Rationale

**T21 — Spaced repetition / learning engine**

The natural next step: the progress/mastery data already collected can drive
scheduling instead of only weighting distractors.

**T15 — Long-term statistics**

Builds on the existing progress/mastery data without requiring a fundamentally different architecture.

**T13 — Canvas drawing mode**

Adds an interactive handwriting layer and makes use of the existing KanjiVG stroke data.

**T16 — Code splitting**

Technical architecture work should happen after the feature set has stabilized.

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

T13 remains planned, but is no longer the immediate next task.

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

## Rule 1 — User data is authoritative

For current application behavior, existing source code is the source of truth.

Do not invent structures that are not present.

## Rule 2 — KanjiVG is stroke truth

Manual `strokeText` remains educational content.

Actual SVG path data determines:

- stroke count,
- stroke order,
- reference geometry.

## Rule 3 — Incremental development

Implement one TODO task at a time.

Current active roadmap task:

```text
T8
```

Do not implement T17/T15/T13/T14/T16 simultaneously.

## Rule 4 — Avoid premature refactoring

T16 is explicitly reserved for code splitting.

Do not restructure the whole app merely because `app.js` is large.

## Rule 5 — Preserve existing functionality

Every feature change must preserve:

- learning mode,
- KanjiVG animation,
- progress,
- mastery,
- exam modes,
- timer,
- question limit,
- XP,
- result screen,
- theme,
- audio,
- mobile gestures.

## Rule 6 — Keep documentation synchronized

After major feature work:

```text
PROJECT.md
README.md
```

should reflect the current state.

## Rule 7 — Prefer small, testable changes

For large features:

```text
data
→ rendering
→ interaction
→ evaluation
→ polish
```

rather than one enormous rewrite.

---

# 41. Known Audit Points

These are not necessarily bugs; they are items to verify.

1. `masteryLevel()` ordering of `hard` vs `mastered`.
2. Manual stroke counts vs KanjiVG actual counts.
3. Timer timeout behavior in typed modes.
4. Hard-practice settings preservation.
5. Theme system branch.
6. `mountKana().finish()` behavior.
7. Global keyboard listener interaction with text inputs.
8. Four exam modes vs original T7 specification.
9. Potential unused CSS/JS hooks.
10. Browser support of newer CSS features such as `color-mix()`.
11. Confetti currently uses hardcoded colors in JavaScript.
12. KanjiVG remote dependency means the application is not currently fully offline.
13. Question-limit off-by-one behavior when the final question is answered.
14. Automatic exam completion after a timed-out final question.
15. Preservation of timer/question-limit settings when retrying an exam.
16. Interaction between automatic exam completion and the existing wrong-answer feedback flow.
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

Long-term statistics: NOT implemented
Drawing mode: NOT implemented
Code splitting: NOT implemented
Kanji: NOT implemented
Vocabulary: NOT implemented
Grammar: NOT implemented
Spaced repetition engine: NOT implemented
Daily goals: NOT implemented
Achievements: NOT implemented
Custom study sets: NOT implemented
Advanced audio / lo-fi: NOT implemented
```

### Current active task

```text
T21 — Spaced Repetition / Learning Engine
```

### Current recommended roadmap

```text
T21
↓
T15
↓
T13
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
single plain object plus three setter functions.

```text
hiragana-settings = { theme, muted, script }
```

- `theme`  — `light` | `dark` | `system`
- `muted`  — boolean
- `script` — `hiragana` | `katakana`

## Centralized setters

`setTheme()`, `setMuted()` and `setScript()` are the only write paths. Each
updates the `settings` object, synchronizes the matching runtime mirror
(`state.theme`, `Audio.muted`, `state.script`), persists, and refreshes the UI.

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

`renderSettings()` renders four sections:

```text
Wygląd     theme: light / dark / system
Dźwięk     sound effects: on / off
Nauka      default script: hiragana / katakana
Dane       Reset Settings / Reset Progress / Clear All Data
```

Every control is a native `<button>` and applies immediately. Because each
change re-renders the screen, focus is restored to the control that was
activated (via `data-focus-key`).

Destructive actions are confirmed:

- Reset Settings — one confirmation,
- Reset Progress — one confirmation,
- Clear All Data — two confirmations.

"Clear All Data" removes exactly the five application keys
(`hiragana-settings`, `hiragana-exam-settings`, `hiragana-progress`,
`hiragana-theme`, `hiragana-muted`) and leaves unrelated `localStorage` keys
untouched.

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

## Tests

`tests.html` + `tests.js` are a dependency-free harness. They rebuild the page
from the real `index.html` and load the real `app.js`, so they cannot drift from
the app. They are a dev tool: not in `SHELL_ASSETS`, never precached.

---
