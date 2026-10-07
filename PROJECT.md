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
├── TODO.md
├── PROJECT.md
└── CHANGELOG.md
```

### `index.html`

Contains:

- document metadata,
- Google Fonts,
- initial theme detection,
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
- touch gestures.

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
    └── keyboard/touch controls
    ↓
style.css
```

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

Theme is stored in:

```text
hiragana-theme
```

Supported themes:

```text
light
dark
```

The initial theme is selected from:

1. saved localStorage preference,
2. system preference.

The `<html>` element receives:

```html
data-theme="light"
```

or:

```html
data-theme="dark"
```

### Known audit point

There appears to be an unreachable/unused "system" branch in the theme button/update logic, while the actual toggle only switches between light and dark.

This should be cleaned up if still present after the next audit.

---

# 25. Audio

Audio currently uses the Web Audio API and does not require external sound files.

Stored setting:

```text
hiragana-muted
```

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
T8  dakuten / handakuten / yōon        DEFERRED
T9  exam timer                         DONE
```

## Phase 3

```text
T10 XP system                          DONE
T11 mobile touch gestures              DONE
T12 confetti                           DONE
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

## Immediate priority

```text
T8  Dakuten / Handakuten / Yōon
```

This expands the basic hiragana system into voiced, semi-voiced and combined sounds.

## Next major priorities

```text
T17 Katakana mode
T15 Long-term statistics
T13 Canvas drawing mode
T14 Offline PWA
T16 Code splitting
```

Recommended order:

```text
T8 → T17 → T15 → T13 → T14 → T16
```

### Rationale

**T8 — Dakuten / Handakuten / Yōon**

Makes the hiragana learning system substantially more complete before moving to another script.

**T17 — Katakana**

Natural second script once the core hiragana system is sufficiently complete.

**T15 — Long-term statistics**

Builds on the existing progress/mastery data without requiring a fundamentally different architecture.

**T13 — Canvas drawing mode**

Adds an interactive handwriting layer and makes use of the existing KanjiVG stroke data.

**T14 — Offline PWA**

Adds installation/offline capabilities after the core feature set is more stable.

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

Goal:

> Add katakana as a second Japanese script while preserving the existing learning architecture.

Expected functionality:

- katakana dataset,
- katakana groups,
- katakana learning mode,
- katakana stroke animation,
- katakana progress,
- katakana mastery,
- katakana exam questions,
- script selection.

The implementation should avoid duplicating large amounts of existing learning/exam logic.

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

Goal:

> Make Hiragana Study installable and usable offline.

Potential functionality:

- web app manifest,
- service worker,
- cached application shell,
- cached CSS/JS,
- offline fallback,
- local progress persistence,
- cached KanjiVG data.

Important dependency:

The current application relies on remote KanjiVG sources.

Therefore true offline learning requires either:

1. bundling/cacheable local SVG data, or
2. a deliberate caching strategy for previously loaded KanjiVG assets.

This should be designed carefully rather than simply adding a service worker.

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

Potential centralized settings system.

Potential categories:

```text
Appearance
Audio
Learning
Exam
Accessibility
Data
```

Possible settings:

- theme,
- sound effects,
- music,
- volume,
- animation intensity,
- reduced motion,
- default exam settings,
- default answer count,
- default timer,
- default question limit,
- learning preferences,
- reset/export/import data.

This feature should eventually become the central location for persistent user preferences.

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
TODO.md
CHANGELOG.md
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
Architecture: vanilla JS SPA
Source files: 3

Learning mode: implemented
KanjiVG animation: implemented
Progress: implemented
Adaptive exam: implemented
4 exam modes: implemented
Per-question timer: implemented
Optional question limit: planned extension
XP: implemented
Touch gestures: implemented
Confetti: implemented

Dakuten / Handakuten / Yōon: NOT implemented
Katakana: NOT implemented
Long-term statistics: NOT implemented
Drawing mode: NOT implemented
Offline support: NOT implemented
Code splitting: NOT implemented
Kanji: NOT implemented
Vocabulary: NOT implemented
Grammar: NOT implemented
Spaced repetition engine: NOT implemented
Daily goals: NOT implemented
Achievements: NOT implemented
Custom study sets: NOT implemented
Advanced audio / lo-fi: NOT implemented
Settings / personalization: NOT implemented
```

### Current active task

```text
T8 — Dakuten / Handakuten / Yōon
```

### Current recommended roadmap

```text
T8
↓
T17
↓
T15
↓
T13
↓
T14
↓
T16
```

Long-term:

```text
T18 Kanji
T19 Vocabulary
T20 Grammar
T21 Spaced Repetition / Learning Engine
T22 Daily Practice / Goals
T23 Achievements
T24 Custom Study Sets
T25 Advanced Audio & Focus / Lo-fi
T26 Settings / Personalization
```

---

# 43. Deployment

Repository:

- GitHub: `Maciejsonik/Code`
- Repository is private.

GitHub Pages:

- Site: `https://maciejsonik.github.io/Code/`
- Deployment: GitHub Actions
- Workflow: `.github/workflows/deploy-hiragana.yml`
- Published source: `hiragana-study/`
- Pages source: GitHub Actions

Important:

- Other repository projects are not deployed.
- Current workflow copies the whole `hiragana-study/` directory.
- Therefore `PROJECT.md` and `README.md` are also currently publicly accessible through Pages.

This is currently acceptable, but the deployment workflow can later be changed to publish only the files required by the application if a cleaner public surface is desired.