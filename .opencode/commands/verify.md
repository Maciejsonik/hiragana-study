---
description: Run the browser test harnesses and report PASS/FAIL per harness
---

Verify the current state of the app with its browser test harnesses. Follow
`AGENTS.md` (§2.3 and §4) exactly.

1. If nothing is serving the repo yet, start `python3 -m http.server 8000` in
   the background from the repo root.
2. Confirm the current set of harness files, then open each one over HTTP and
   read the result from the `<pre id="R">` element (per `AGENTS.md` §2.3) —
   the pass condition is `TOTAL PASS=n FAIL=0`; the document title becomes
   `ALL PASS n` or `FAILURES n`:
   - http://localhost:8000/tests.html
   - http://localhost:8000/tests-learn.html
   - http://localhost:8000/tests-daily.html
   Use the browser tools available to you (e.g. Playwright). If you cannot
   open a browser, say so explicitly — do not guess results.
3. Run `node --check` on every JavaScript file you touched (all `*.js` if this
   is a full check).
4. Report per harness: PASS/FAIL with the actual counts, the syntax-check
   results, and anything you did not verify.
