# AGENTS.md

Working instructions for coding agents in this repository.

`PROJECT.md` is the project documentation — architecture, feature status,
roadmap, audit points. **This file is not a summary of it.** It describes how
to work here. Where the two disagree about behaviour, the code and `PROJECT.md`
win.

Some sections describe how the project is built *today*. Those are orientation,
not law. Confirm the current shape in the code before relying on it, and prefer
rules that survive a change of architecture over rules that name specific
files.

---

## 1. The project

A static single-page app: vanilla JavaScript, one stylesheet, no framework, no
build step, no dependencies, and **no `package.json`**. It is served as-is over
HTTP and published to GitHub Pages.

```text
index.html                        app shell
app.js                            application logic, in banner-delimited sections
style.css                         styling, themes, animation
sw.js                             service worker — separate global scope
manifest.webmanifest / offline.html / icons/
tests*.html + tests*.js            browser test harnesses (developer tools)
```

`app.js` is a single large file organised into sections. Match the surrounding
section when editing it. Its size is deliberate for now; see 3.2.

---

## 2. Ground rules

Absolute. Do not break these as a side effect of another task. If a task appears
to require breaking one, stop and raise it before writing code.

### 2.1 Scope

1. Make the smallest change that solves the stated problem. No opportunistic
   refactoring, no drive-by cleanups, no renaming for consistency.
2. Do not introduce a framework, a dependency or a build step without explicit
   acceptance. The absence of `package.json` is the design, not an oversight.
3. Do not widen the task. If you notice a separate bug, report it — do not fix
   it in the same commit.
4. Before changing existing behaviour, establish what depends on it: find the
   callers, and check whether an assertion covers it. Functions that no test
   touches are where regressions hide.

### 2.2 Learning logic and stored data

1. Stored progress and daily history are **separate stores answering different
   questions** — "what does this kana look like today" versus "what did I do on
   a given day". They are merged nowhere and must stay that way. Confirm the
   current key names and version constants in the code; do not carry them over
   from memory or from this file.
2. Spaced repetition scheduling and mastery thresholds are load-bearing. The
   current design deliberately returns from `recordAnswer()` before any SRS
   access when the source is an exam timeout: a timeout is not a graded answer
   and must not advance, reset or penalise a schedule. Preserve that separation.
3. Do not change a storage version or the shape of stored data without
   justification, a written migration, and regression tests covering it.
4. Do not adjust mastery thresholds or the review schedule as part of unrelated
   work.
5. **Separate UI bugs from data bugs.** Before calling something a scoring or
   persistence bug, establish whether it can actually change the score, the
   stored progress, or the daily store. If it only affects affordance, focus or
   wording, describe it as such — the severity and the correct fix differ.
6. Legacy mastery and the SRS ladder are **distinct systems**. Do not conflate
   them in logic, in the UI, or in documentation.

### 2.3 Tests

The harnesses are the regression net. They are not optional.

1. Add assertions to the harness covering that area. They rebuild the page from
   the real `index.html` and load the real `app.js`, so they cannot drift from
   the app. Do not create a parallel harness against mocked markup.
2. For every bug fix, add assertions that **fail without the fix**. Revert the
   fix locally, confirm the failure, restore. An assertion that passes both ways
   proves nothing.
3. Run the affected harness after each change; run the full set before
   finishing.
4. Syntax-check every JavaScript file you touched with `node --check <file>`.
5. Review `git diff` before committing.
6. Never claim to have run a test, check or verification you did not run.
   Report the counts you actually observed.

**Running them.** Over HTTP only — `file://` blocks the `fetch()` calls the
harnesses rely on.

```sh
python3 -m http.server 8000
```

| URL | Covers |
| --- | --- |
| `http://localhost:8000/tests.html` | SRS, migration, exam settings, typed-mode timeout |
| `http://localhost:8000/tests-learn.html` | learn panel, layout, motion |
| `http://localhost:8000/tests-daily.html` | daily statistics |

Confirm the current set of harness files before relying on that table. Read the
result from the `<pre id="R">` element: `TOTAL PASS=n FAIL=0` is the pass
condition. The document title becomes `ALL PASS n` or `FAILURES n`.

### 2.4 Service worker and cache

Bumping the cache version is a decision, not a reflex. Decide it deliberately.

**Before you touch it, establish three things by reading `sw.js`:**

1. **The mechanism.** How is the version derived, and what is derived from it?
2. **The blast radius.** What does activation delete, and how expensive is
   rebuilding that?
3. **The scope of your change.** Does anything the service worker serves
   actually change?

**Bump the version only when stale cache must actually be invalidated** — that
is, when users would otherwise keep receiving outdated files after their next
load. A change within the precached set is a reason to consider the question,
not an automatic trigger, and a change outside it does not rule the bump out.

**The cost is real and asymmetric.** Activation removes every cache outside the
current set. In this project that includes the full KanjiVG set and the web
font cache, so an unnecessary bump hands the user an empty offline budget and
a long refetch for no correctness gain. Conversely, a bump you skipped leaves
users on stale code.

State your reasoning when you change the version — or when you decide not to.

Never precache the test harnesses: they are developer tools and have no place
in a user's offline budget. An assertion in the harness suite guards this, so
if you change what gets precached, that assertion must change with you.

The app never forces an update on the user; it surfaces a non-blocking
"Odśwież" prompt so an in-progress session is not interrupted. Do not add an
automatic reload.

### 2.5 Git

1. Before starting, check `git status`, compare `HEAD` with `origin/main`, and
   check for stashes.
2. **Never overwrite uncommitted work.** If the tree is dirty when you begin,
   stop and report rather than stashing, resetting or clobbering.
3. Conventional Commits, English, lowercase subject — for example `feat:`,
   `fix:`, `docs:`, `test:`, `ux:`, `style:`, `refactor:`.
4. One task per commit. Split when it would make testing or reverting easier.
5. Inspect `git diff` before every commit. Confirm the change matches the
   agreed scope and contains nothing incidental.
6. Push only within the agreed scope, and only after verification passes.
7. On an unexpected failure, or on unexpected changes appearing in the tree:
   **stop and report.** Do not work around a failure, and do not let a
   green-looking result hide one.

### 2.6 Documentation

`PROJECT.md` is the project record. Update it when real behaviour or status
changes — not only when a feature is added. A stale record is worse than an
absent one, because it is trusted.

---

## 3. Working practice

Guidance, not law. Adapt it to the task in front of you.

### 3.1 Adding a feature

Work in layers, each one reviewable:

```text
data → rendering → interaction → evaluation → polish
```

Land them as separate steps rather than one large commit.

### 3.2 Large files and splitting

Restructuring `app.js` into modules is reserved until the feature set has
settled. Boundaries drawn before the feature decisions are final have to be
redrawn afterwards. Do not refactor the file merely because it is large.

### 3.3 New UI

Check the DOM structure and CSS architecture sections of `PROJECT.md` before
inventing a pattern, then follow the existing one. Reuse existing class names
and hooks instead of introducing parallel ones.

### 3.4 New data

Decide first whether a field belongs to stored progress or to daily history.
If it changes a stored format, it needs a migration and tests, not just a new
key.

### 3.5 Visual and motion work

The automated harnesses assert wiring and state, not perceived smoothness or
real-browser layout. Automated verification and manual visual confirmation are
different things. Report them separately, and never present the first as
though it were the second.

---

## 4. Reporting

At the end of a task, state:

1. Files changed, and what changed in each.
2. Test results per harness, in PASS/FAIL form.
3. Syntax, Markdown and diff checks actually performed.
4. Commit hash and push status.
5. Working tree state.
6. Everything you did **not** verify, and why.

Distinguish clearly between automated verification, manual checking and visual
inspection. Say plainly what was not confirmed.

---

## 5. Conventions

- Code comments and UI strings: **Polish** — matching the existing files.
- `PROJECT.md`, `README.md`, commit messages and this file: **English**.
- Identifiers: **English**.

This split is the existing convention. Keep it, and match the file you are
editing before assuming it still holds.
