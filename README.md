# Daily Coding Practice

A static practice app for building coding independence in JavaScript and Python.
No application packages, account, backend, or build step are required. The original
331 JavaScript exercises and the 24 flight activities remain available.

## Learning path

Choose a language and level from the home-page dropdowns. There are **60 JavaScript
and 54 Python activities**: the existing 24 per language, 30 new everyday-skills
problems per language, and six JavaScript DOM activities.
Start at the beginning to reinforce your fundamentals, or choose a later level.

| Level | Focus |
| --- | --- |
| 1 · Gentle start | Values, text, decisions, boundary bugs |
| 2 · Lists & loops | Totals, counting, filtering, repeated work |
| 3 · Functions & small projects | Parameters, returns, objects/dictionaries |
| 4 · Arrays & strings | Maximum, manual reverse, linear search |
| 5 · Maps & sets | Frequencies, duplicate detection, anagrams |
| 6 · Problem-solving patterns | Two pointers, stacks, binary search |
| 7 · Interview practice | Two sum, stable partitioning, sliding windows |
| 8 · Useful methods | Keep even numbers, double scores, total prices, clean text, membership, pop |
| 9 · Combine steps | Filter then map, split/count words, join labels, sort/slice, sum, unique tags |
| 10 · Records | Names, find one record, every/all, some/any, lookups, unfinished work |
| 11 · CRUD helpers | Create, read, rename, toggle, delete, search tasks |
| 12 · API requests | GET, POST, PATCH, DELETE, error status handling, a multi-request workflow |
| 13 · JavaScript DOM | Heading, render a list, forms, toggles, deletion, a complete small CRUD page |

For everyday coding, try levels 1–3, then 8–12 (and JavaScript 13). Return to
levels 4–7 for DSA practice. The original level numbers and saved work are stable.
All new activities use small word problems and three gradually more specific hints.
Tools are suggestions: correct loops are welcome in the data exercises.

This is a bridge into DSA and interview practice, not a complete algorithms course.
Advanced topics such as trees, graphs, and dynamic programming are later steps.

The workspace keeps the task, editor, and results visible. Concept refreshers,
examples, hints, starter code, and solutions live in closed dropdowns. The default
is a blank editor; starter code is opt-in. You can save a plan before coding,
explain your result afterward, and retry from blank. The previous draft is
recoverable through Editor tools after clearing or restarting.

Checks in levels 1–3 compare printed output. Levels 4–12 call the requested function
on multiple inputs, compare returned values and types, and verify that inputs stay
unchanged. The 24 new JS/Python challenges contain 144 cases in total, including
empty lists, negative values, duplicates, boundaries, and invalid window sizes.
Dictionary/object key order does not matter; array order does. The tests do not
measure complexity or prove correctness for every possible input. Explain the
suggested time/space cost and try extra inputs after passing.

The app records whether a passing attempt used its starter code, hints, or solution.
Retry from blank starts a fresh attempt. Drafts, plans, reflections, progress, and
resume positions save in the same browser on the same device. Private browsing
or clearing site data can discard them. A visible warning appears when storage
is unavailable or full. Existing drafts and output-check progress are preserved.

## Four-hour flight session

The original flight session remains under its own home-page dropdown:

| Block | Time |
| --- | ---: |
| JavaScript foundations 1–3 | 110 min |
| Break | 10 min |
| Python foundations 1–3 | 110 min |
| Rewrite a helper without hints and review | 10 min |

Times are guides. Repeat a level if needed instead of racing to finish. The full
full learning path extends beyond this flight session.

## Run locally

```sh
cd /workspace/JS-Exercises
python3 -m http.server 8000 --bind 127.0.0.1
```

Use your own checkout's directory on your computer. Open the local server's address
in a browser. ES modules and service workers require HTTP serving; opening
`index.html` as a file is not supported. Hosted installation requires HTTPS.

## Before boarding

1. Open the updated site on your actual flight device while connected. Repository
   changes do not update a hosted site until its deployment completes.
2. Wait for **Offline ready** in the header. Open that dropdown for device details.
   If the old layout appears after an update, reload again once the new files save.
3. Run one JavaScript and one Python activity.
4. Switch to airplane mode, close and reopen the tab at the **same address**, and
   run both languages again. Check that your draft resumes.
5. Keep the same browser and address on the flight; do not clear its site data.

Codex Cloud requires connectivity; prepare the actual app on your flight device.
All practice, including the new DSA challenges, runs locally after preparation.

The built-in editor works offline and supports Tab indentation. Monaco 0.52.2 is
an optional online enhancement; a failed CDN cannot block practice. Python runs
through the checked-in Skulpt 1.2.0 runtime in Python 3 mode. It supports the syntax
used here, not a full CPython environment with pip, native extensions, or filesystem
access. You do not need to install Python to use the browser activities.

Data and API activities run in disposable Web Workers with a five-second limit
and a Stop button. DOM activities run in a separate opaque-origin iframe; Run
shows an interactive page and Check tests uses fresh fixtures and real events.
A synchronous infinite loop in DOM code can block the browser thread; if the tab
freezes, close it and reopen (the draft was saved before running). The original library retains page-context JavaScript execution for
DOM access. This is a personal coding playground, not a security sandbox.

## API practice

The API exercises use a deterministic, in-memory task service, not a live backend.
They work offline and reset for each test. JavaScript uses real async `fetch`/
`Response` shapes, intercepted inside the worker. Python imports the provided
`practice_api` module and calls `api.request(method, path, body)`; it returns a
dictionary with `status` and `data`. This module is a learning fixture, not the
standard library or the external `requests` package.

Routes: `GET /tasks`, `GET /tasks/id`, `POST /tasks` (title),
`PATCH /tasks/id` (done), `DELETE /tasks/id`. Creation assigns a new integer id.
Checks verify the returned value, exact request sequence/body, and final records.
The workflow includes blank input, missing records, and unavailable-service cases.
This teaches client requests and CRUD; deploying a server, authentication, and
a persistent database are later steps.

## Repository structure

- `data/tier1-foundations.js` through `tier5-problem-solving.js`: original library.
- `data/flight-practice.js`: the 24 foundation/flight activities.
- `data/problem-solving.js`: 24 JS/Python challenges, cases, hints, and answers.
- `data/practical-skills.js`: 60 word problems covering methods, combinations, records, CRUD, and APIs.
- `data/dom-practice.js`: six browser activities with fixtures and event scenarios.
- `practice-api.js`: matching offline HTTP fixtures for JavaScript and Python.
- `dom-runner.js`: isolated interactive page preview and DOM-case judging.
- `sections.js`: aggregator; original tier order and existing activity IDs stay stable.
- `index.js`: language/level navigation, saved work, help, checks, and offline readiness.
- `editor.js`: built-in editor and optional Monaco.
- `practice-worker.js`: JavaScript/Python execution and function-case judging.
- `sw.js`: complete offline app cache.
- `vendor/skulpt/`: pinned Python runtime and license.
- `exercises.js`: older commented-out collection, not imported by the app.

Bump `CACHE_NAME` in `sw.js` whenever cached application assets change so existing
cache-first installations receive updates. Preserve the vendored runtime license.

## Validation

Tests use Python Playwright, Chromium, and Node to read exercise metadata. These
are available in the Codex Cloud environment and are not application dependencies.
Set `CHROMIUM_PATH` if Chromium is installed somewhere else.

```sh
python3 tests/test_flight.py
python3 tests/test_offline_setup.py
python3 tests/test_learning_path.py
python3 tests/test_practical_skills.py
```

The tests run all 114 guided reference answers; exercise errors, hints, draft
restoration, loop limits, and original-library behavior; check all 144 DSA function
cases and 204 new method/API/DOM cases; and verify a fresh offline tab after stopping the server. Setup checks cover
old service-worker upgrades, incomplete downloads, disabled browser storage,
per-language navigation, and small-screen overflow.
