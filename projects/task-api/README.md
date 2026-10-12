# Build a real task API

Start in the app's **Build projects** drawer. Choose the Task API for your selected
language. Browser checks call your route handler with example requests; they do
not run Express, Flask, or SQLite. Then choose ONE backend below to run real HTTP.

You can also download the source bundle from the app, unzip it, and enter
`task-api/javascript` or `task-api/python` instead of the repository paths below.
The bundle includes standalone handler tests in both languages. The cross-server
test command below requires the full repository checkout.

You need internet for the first dependency installation. Once installed, both
servers run locally without internet. Node 24+ is required for built-in SQLite;
Python 3.10+ is required for the Flask project. The main practice app still needs
no application dependencies.

## JavaScript / Express

From the repository root:

```sh
cd projects/task-api/javascript
npm ci
npm test
npm start
```

If your cloud home directory is read-only, add `--cache /tmp/task-api-npm-cache`
to `npm ci`. The terminal prints the local server port (default 3000).

## Python / Flask

From the repository root:

```sh
cd projects/task-api/python
python3 -m venv .venv
.venv/bin/pip install -r requirements.txt
.venv/bin/python app.py
```

Check the handler with `.venv/bin/python -m unittest test_routes.py`.

Default port: 3001. On Windows use `.venv\Scripts\python` and
`.venv\Scripts\pip` instead. This is Flask's local development server.

Open the chosen server's address in your browser. Each server serves the same
small task-list page and its own API at the same origin, so no CORS setup is needed.
The page supports adding, reading, renaming, toggling, and deleting tasks.

## Understand the pieces

1. `web/index.html`: the client. Events trigger fetch; responses update the page.
2. `javascript/routes.js` or `python/routes.py`: a pure route handler. It returns
   `{status, data, tasks}` and does not mutate its inputs. This is what you wrote
   in the browser projects.
3. `javascript/server.js` or `python/app.py`: the adapter. It reads HTTP requests,
   loads records, calls the handler, and sends a response.
4. `tasks.sqlite`: the database. Records survive server restarts. A transaction
   groups the read and save together. Values are passed through SQL parameters.

The reference implementation works immediately. To practice, back up your own
route file, then copy `routes.starter.js` over `routes.js` (JavaScript) or
`routes_starter.py` over `routes.py` (Python). The starter returns 501 until you
implement it. Copy your browser handler into the route file, keeping the
JavaScript `export`. Restart the server after changing code. Reference solutions
are also available through the app's solution drawer and Git history.

## Build one small step

1. GET `/tasks`: return an empty list, then a list with records.
2. POST `/tasks`: validate title, trim it, create a record, return 201.
3. GET `/tasks/id`: distinguish a missing route from a missing record.
4. PATCH `/tasks/id`: validate a title and/or boolean done; reject unknown fields.
5. DELETE `/tasks/id`: return 204 with no body. Do not call response.json() on it.
6. Connect the page. Watch one request in browser DevTools → Network.
7. Restart the server. Confirm your records are still there.

`GET /health` reports startup readiness. The API contract and edge cases live in
`javascript/routes.test.js` and the app's project Examples drawer.

## Your independent challenge

Add an optional `priority` field ("low", "normal", "high"). Plan the changes to
validation, the database schema, the page, and tests before coding. Reject an
invalid priority without changing the record. Give old records a sensible default.
Do not change the existing id of a task.

Write tests for a valid update, an invalid update, a missing task, and a restart.
Then add a priority filter on the page. Explain which work belongs on the client
and which work belongs on the server.

## Check both real servers

Install both sets of dependencies, then from the repository root:

```sh
TASK_API_PYTHON=projects/task-api/python/.venv/bin/python python3 tests/test_backends.py
```

The test creates temporary databases, starts both servers, checks real HTTP CRUD,
invalid JSON, validation, and persistence after restart, then stops its servers.

These are local single-user learning apps. Later projects cover authentication,
authorization, migrations, pagination, and production deployment. The adapter
currently rewrites the small task table after a change to keep the pure-handler
exercise understandable; a later refactor should update just the affected row.
