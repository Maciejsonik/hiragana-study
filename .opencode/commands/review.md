---
description: Review the current changes with the read-only reviewer subagent
---

Launch the `reviewer` subagent on the current changes in **this** repository —
`hiragana-study`, not the outer `Code` workspace.

## Running Git here

Run every Git command in the session's current directory, which is this
repository's root. **Do not use `git -C hiragana-study`** — from inside this
repository that path does not exist, and the `reviewer` subagent's shell
allowlist rejects `git -C` outright.

## Scope

Establish the base first, then hand it to the subagent explicitly:

1. Unstaged changes (`git diff`), then staged changes (`git diff --cached`).
2. If a tracking base exists and `HEAD` has commits on top of it, also review
   `git diff origin/main...HEAD`.
   **If that base does not exist or is not the right base, say so and review
   only the working-tree changes.** Do not guess a base, and do not substitute
   one silently.

The subagent cannot run `git rev-parse` or `git merge-base`, so it cannot work
this out itself — you must tell it, or tell it that there is no base.

Ask it to weigh the changes against the rules in this project's `AGENTS.md` —
especially §2.1 scope, §2.2 stored data and SRS separation, §2.3 tests, and
§2.4 service worker cache.

## Reporting

Relay the subagent's findings in two separate sections, keeping them apart:

1. **Confirmed defects** — `file:line`, what is wrong, why it matters.
2. **Potential concerns** — each with the evidence that would settle it.

Per §4, state which checks were actually performed and which were not.

Do not fix anything as part of this command. I will decide what to change.