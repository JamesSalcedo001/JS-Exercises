# Daily Coding Practice

A static JavaScript exercise app with a four-hour beginner flight path. The
original 331 JavaScript exercises remain in `data/tier1-foundations.js` through
`data/tier5-problem-solving.js`. No framework, package installation, backend,
account, or build step is needed.

## Four-hour practice plan

The new path is in `data/flight-practice.js`. Each of its 24 activities includes
a short lesson, starter code, two gradual hints, expected output, one possible
answer, and a follow-up input or question. Estimate your result before running,
try before revealing hints, and explain your code after checking it.

| Block | Time | Skills |
| --- | ---: | --- |
| JavaScript 1 | 35 min | Variables, text, decisions, boundary debugging |
| JavaScript 2 | 35 min | Arrays, loops, totals, counting, filtering |
| JavaScript 3 | 40 min | Functions, objects, travel-budget helper |
| Break | 10 min | Rest before switching languages |
| Python 1 | 35 min | Variables, text, indentation, comparisons |
| Python 2 | 35 min | Lists, range, counters, filtering |
| Python 3 | 40 min | Functions, dictionaries, study-goal helper |
| Review | 10 min | Rewrite a helper without hints; note your next practice topic |

These are pacing estimates, not timers or a requirement to finish. Repeat a
block if needed. Output checks compare printed results, not algorithm correctness;
the follow-up inputs help you check whether your solution generalizes.

Drafts, current positions, and output-check progress save to localStorage in the
same browser on the same device. Resume flight practice returns to your last
flight activity. Private browsing or clearing site data can discard your work.
If storage is unavailable or full, the app displays a warning to copy your code.

## Run locally

```sh
cd /workspace/JS-Exercises
python3 -m http.server 8000 --bind 127.0.0.1
```

On your own computer, use your checkout's directory instead. Open the app at the
local server's address in your browser. ES modules and service workers require
HTTP serving; opening `index.html` as a file is not supported. Hosted installation
requires HTTPS. Codex Cloud's machine and running processes will not be available
on your flight without connectivity; prepare the app on your actual flight device.

## Prepare for the flight

1. Serve or publish **this updated version**, then open it on your flight device
   while connected. Repository edits do not update an existing hosted site.
2. Wait for **Offline ready**. This confirms the local app files and Python runtime
   have been cached. You do not need to open every activity separately.
3. Open a JavaScript and a Python activity and run their starter/answer code.
4. Switch to airplane mode, close and reopen the tab at the **same address**, and
   run both languages again. Confirm your draft resumes before boarding.
5. Use the same browser and address on the flight. Do not clear its site data.

The built-in text editor works offline and supports Tab indentation. Monaco
0.52.2 provides optional online highlighting and formatting; a missing CDN never
blocks the built-in editor. All Python runtime files are stored in the repository
and cached locally. Skulpt 1.2.0 runs the beginner Python activities in Python 3
mode; it is a Python subset, not a full CPython installation with pip packages,
native extensions, or filesystem access. No Python installation is needed to
practice in the app.

New flight activities run in disposable Web Workers with a five-second limit
and a Stop button, so mistaken loops do not freeze the page. The original library
keeps its existing page-context JavaScript execution behavior. This is a personal
coding playground, not a security sandbox for code from strangers.

## Development and validation

`sections.js` combines the original tiers and the new flight blocks. `index.js`
handles navigation, drafts, hints, output checks, and offline readiness;
`editor.js` handles the built-in editor and optional Monaco. `practice-worker.js`
runs the new activities. `sw.js` caches the complete offline app. `exercises.js`
is an older commented-out collection and is not imported.

For a quick manual check, run a solution in each language, change it to an
incorrect result, check hint/answer navigation, reload to verify saved drafts,
and test a fresh tab with networking disabled. Also run an original tier exercise.

The browser regression test uses Python Playwright, Chromium, and Node (to read
the exercise data). These tools are available in the prepared Codex Cloud runtime.
If running elsewhere, install the test tools separately; they are not application
dependencies. Set `CHROMIUM_PATH` if Chromium is at a different location.

```sh
python3 tests/test_flight.py
python3 tests/test_offline_setup.py
```

The test starts its own temporary server, runs all 24 reference answers, checks
incorrect output, Python errors, hints, drafts, loop limits, Stop, and the original
library, then shuts down the server and verifies offline JS/Python in a new tab.
The setup regression test checks upgrades from the old service worker, incomplete
downloads, unavailable browser storage, block transitions, and a 320px viewport.

When changing cached application assets, bump `CACHE_NAME` in `sw.js` so an
existing cache-first installation receives the new files. Keep the vendored
runtime's license and version information in `vendor/skulpt/`.
