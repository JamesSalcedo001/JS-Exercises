# Build from an empty folder

Do the browser route steps first. They work on an iPhone. A real Express/Flask
process needs a computer or Codex Cloud; an iPhone browser does not run those
server processes. Downloads are optional reference material, not the starting point.

## JavaScript / Express

### 1 · Create an empty project folder

A folder groups the files you own. A dependency supplies HTTP plumbing; you will write the decisions. JavaScript needs Node 24+; Python needs Python 3.10+. These steps run on a computer or Codex Cloud. npm init creates the package description and type=module enables import. The package folder keeps project dependencies together.

```
mkdir my-task-api
cd my-task-api
npm init -y
npm pkg set type=module
npm install express@5.1.0 --cache /tmp/task-api-npm-cache
```

The folder contains its package files or Python virtualenv. No project source has been downloaded.

### 2 · Start the smallest server

A server listens for requests. /health proves it can receive a request and send one JSON response. Create server.js yourself with this small program. app.get links a URL to a callback; response.json sends JSON; app.listen keeps the process waiting on a port.

```
// server.js
import express from 'express';
const app = express();
app.get('/health', (_request, response) => response.json({ok: true}));
app.listen(Number(process.env.PORT || 3000), '127.0.0.1');
```

Run in the terminal:

```sh
node server.js
```

In a second terminal: curl http://127.0.0.1:3000/health → {"ok":true}. Stop and restart after editing.

### 3 · Connect the handler YOU built

Save your browser code as routes.js with export before the function. Replace the small server program with this adapter. It supplies method, path, body and stored tasks to your function, then translates its return value into HTTP. The tasks variable is memory: restarting will empty it. express.json turns the JSON body into request.body.

```
// server.js — routes.js contains YOUR checked handleRequest, with export.
import express from 'express';
import {handleRequest} from './routes.js';
const app = express();
let tasks = [];
app.use(express.json());
app.get('/health', (_request, response) => response.json({ok: true}));
app.use((request, response) => {
  const result = handleRequest(request.method, request.path, request.body ?? null, tasks);
  tasks = result.tasks;
  if (result.status === 204) response.status(204).end();
  else response.status(result.status).json(result.data);
});
app.listen(Number(process.env.PORT || 3000), '127.0.0.1');
```

Run in the terminal:

```sh
node server.js
```

Start the server. curl http://127.0.0.1:3000/tasks shows []. Then POST a title, GET it, PATCH it, and DELETE it. Use the request examples in the guide.

### 4 · Try a database by itself

Run this separate small file before changing the server. Rows are records; columns are id, title and done. CREATE TABLE sets the shape, INSERT adds a row, SELECT reads rows. The ? placeholders supply values separately from SQL. done is stored as 0 or 1. This lesson uses demo.sqlite; the server will use tasks.sqlite.

```
// database.js
import {DatabaseSync} from 'node:sqlite';
const db = new DatabaseSync('demo.sqlite');
db.exec('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL)');
db.prepare('INSERT INTO tasks (title, done) VALUES (?, ?)').run('Read', 0);
console.log(db.prepare('SELECT id, title, done FROM tasks').all());
db.close();
```

Run in the terminal:

```sh
node database.js
```

The terminal prints a Read record. Run it again: you see both saved rows. You have proved persistence without HTTP in the way.

### 5 · Connect the database to your working server

Only add a database after in-memory CRUD works. SQLite is a file of rows. Read rows into the same task shape, call your same handler, and save changed records in one transaction. SQL parameters keep values separate from query text. Replace the adapter, not your route logic. BEGIN and COMMIT group the read and save; ROLLBACK cancels an incomplete save. The adapter converts 0/1 back into boolean done values.

```
import express from 'express';
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';
import { handleRequest } from './routes.js';

const db = new DatabaseSync(process.env.TASK_DB || fileURLToPath(new URL('./tasks.sqlite', import.meta.url)));
db.exec('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL CHECK(done IN (0,1)))');
const app = express();
app.disable('x-powered-by');
app.use(express.json({limit: '16kb', strict: false}));
app.use(express.static(fileURLToPath(new URL('./web/', import.meta.url))));
app.get('/health', (_req, res) => res.json({ok: true}));
app.use((req, res, next) => {
  try {
    db.exec('BEGIN IMMEDIATE');
    const tasks = db.prepare('SELECT id, title, done FROM tasks ORDER BY id').all().map(t => ({...t, done: Boolean(t.done)}));
    const result = handleRequest(req.method, req.path, req.body ?? null, tasks);
    if (JSON.stringify(result.tasks) !== JSON.stringify(tasks)) {
      db.exec('DELETE FROM tasks');
      const insert = db.prepare('INSERT INTO tasks (id, title, done) VALUES (?, ?, ?)');
      for (const task of result.tasks) insert.run(task.id, task.title, Number(task.done));
    }
    db.exec('COMMIT');
    if (result.status === 204) res.status(204).end();
    else res.status(result.status).json(result.data);
  } catch (error) { if (db.isTransaction) db.exec('ROLLBACK'); next(error); }
});
app.use((error, _req, res, _next) => {
  if (error.type === 'entity.parse.failed') return res.status(400).json({error: 'Invalid JSON'});
  if (error.type === 'entity.too.large') return res.status(413).json({error: 'Body too large'});
  console.error(error.message); res.status(500).json({error: 'Server error'});
});
const server = app.listen(Number(process.env.PORT || 3000), '127.0.0.1', () => console.log('Task API ready on port ' + server.address().port));
const stop = () => server.close(() => { db.close(); process.exit(0); });
process.on('SIGTERM', stop); process.on('SIGINT', stop);

```

Run in the terminal:

```sh
node server.js
```

Create a task, stop the server, restart it, and GET /tasks. The record remains. The table rewrite is a simple learning adapter; later you can update only the changed row.

### 6 · Connect your own page

Your form already works locally. Now events call fetch instead of changing only a local list. Put your own page in web/index.html. Express serves this folder; Flask serves its index. Serving page and API at the same address avoids a separate CORS lesson at this stage. Start with your basic shopping-list page from before quantity: this API stores id, title, and done. Change render() to render(tasks), remove localStorage load/save, and GET the initial list from the server. After each change, GET again and render the returned records. PATCH and DELETE use the server-returned id. await belongs in the client while it waits for HTTP; your core route function just returns a decision.

```
async function createTask(title) {
  const response = await fetch("/tasks", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({title})
  });
  if (!response.ok) throw Error("Could not save the task");
  return response.json();
}
```

Submit your form, confirm a POST request in DevTools, then GET the list and render it. Handle loading, empty results, and errors before adding extra features.

Example requests (use a second terminal while the server runs):

```sh
curl http://127.0.0.1:3000/tasks
curl -X POST http://127.0.0.1:3000/tasks -H 'Content-Type: application/json' -d '{"title": "Read"}'
curl -X PATCH http://127.0.0.1:3000/tasks/1 -H 'Content-Type: application/json' -d '{"done": true}'
curl -X DELETE http://127.0.0.1:3000/tasks/1
```

## Python / Flask

### 1 · Create an empty project folder

A folder groups the files you own. A dependency supplies HTTP plumbing; you will write the decisions. JavaScript needs Node 24+; Python needs Python 3.10+. These steps run on a computer or Codex Cloud. A virtualenv keeps this project's packages separate from other Python projects.

```
mkdir my-task-api
cd my-task-api
python3 -m venv .venv
.venv/bin/pip install Flask==3.1.2
```

The folder contains its package files or Python virtualenv. No project source has been downloaded.

### 2 · Start the smallest server

A server listens for requests. /health proves it can receive a request and send one JSON response. Create app.py yourself with this small program. @app.get links the URL to the function below it; Flask turns its returned dictionary into JSON. app.run starts listening.

```
# app.py
import os
from flask import Flask
app = Flask(__name__)
@app.get('/health')
def health():
    return {"ok": True}
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=int(os.environ.get('PORT', '3001')), debug=False)
```

Run in the terminal:

```sh
.venv/bin/python app.py
```

In a second terminal: curl http://127.0.0.1:3001/health → {"ok":true}. Stop and restart after editing.

### 3 · Connect the handler YOU built

Save your browser code as routes.py. Replace the small server program with this adapter. It supplies method, path, body and stored tasks to your function, then translates its return value into HTTP. The tasks variable is memory: restarting will empty it. request.get_json turns the JSON body into a Python dictionary.

```
# app.py — routes.py contains YOUR checked handle_request.
import os
from flask import Flask, request
from routes import handle_request
app = Flask(__name__)
tasks = []
@app.get('/health')
def health():
    return {"ok": True}
@app.route('/tasks', methods=['GET', 'POST', 'PATCH', 'DELETE', 'PUT'])
@app.route('/<path:item>', methods=['GET', 'POST', 'PATCH', 'DELETE', 'PUT'])
def route(item=None):
    global tasks
    body = request.get_json() if request.is_json else None
    result = handle_request(request.method, request.path, body, tasks)
    tasks = result['tasks']
    return ('', 204) if result['status'] == 204 else (result['data'], result['status'])
if __name__ == '__main__':
    app.run(host='127.0.0.1', port=int(os.environ.get('PORT', '3001')), debug=False)
```

Run in the terminal:

```sh
.venv/bin/python app.py
```

Start the server. curl http://127.0.0.1:3001/tasks shows []. Then POST a title, GET it, PATCH it, and DELETE it. Use the request examples in the guide.

### 4 · Try a database by itself

Run this separate small file before changing the server. Rows are records; columns are id, title and done. CREATE TABLE sets the shape, INSERT adds a row, SELECT reads rows. The ? placeholders supply values separately from SQL. done is stored as 0 or 1. This lesson uses demo.sqlite; the server will use tasks.sqlite.

```
# database.py
import sqlite3
with sqlite3.connect('demo.sqlite') as db:
    db.execute('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL)')
    db.execute('INSERT INTO tasks (title, done) VALUES (?, ?)', ('Read', 0))
    print(db.execute('SELECT id, title, done FROM tasks').fetchall())
```

Run in the terminal:

```sh
.venv/bin/python database.py
```

The terminal prints a Read record. Run it again: you see both saved rows. You have proved persistence without HTTP in the way.

### 5 · Connect the database to your working server

Only add a database after in-memory CRUD works. SQLite is a file of rows. Read rows into the same task shape, call your same handler, and save changed records in one transaction. SQL parameters keep values separate from query text. Replace the adapter, not your route logic. BEGIN and COMMIT group the read and save; ROLLBACK cancels an incomplete save. The adapter converts 0/1 back into boolean done values.

```
"""Run with python app.py. Local learning server; not a production deployment."""
import os
import sqlite3
from pathlib import Path
from flask import Flask, jsonify, request, send_from_directory
from werkzeug.exceptions import BadRequest, RequestEntityTooLarge
from routes import handle_request

app = Flask(__name__, static_folder=None)
app.config["MAX_CONTENT_LENGTH"] = 16 * 1024
DB_PATH = os.environ.get("TASK_DB", str(Path(__file__).with_name("tasks.sqlite")))
WEB = Path(__file__).with_name("web")
with sqlite3.connect(DB_PATH) as db:
    db.execute("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL CHECK(done IN (0,1)))")

@app.get("/")
def index():
    return send_from_directory(WEB, "index.html")

@app.get("/health")
def health():
    return jsonify(ok=True)

@app.route("/tasks", methods=["GET", "POST", "PATCH", "DELETE", "PUT"])
@app.route("/tasks/<path:item>", methods=["GET", "POST", "PATCH", "DELETE", "PUT"])
@app.route("/<path:item>", methods=["GET", "POST", "PATCH", "DELETE", "PUT"])
def tasks(item=None):
    body = request.get_json() if request.is_json else None
    with sqlite3.connect(DB_PATH) as db:
        db.execute("BEGIN IMMEDIATE")
        records = [{"id": row[0], "title": row[1], "done": bool(row[2])} for row in db.execute("SELECT id, title, done FROM tasks ORDER BY id")]
        result = handle_request(request.method, request.path, body, records)
        if result["tasks"] != records:
            db.execute("DELETE FROM tasks")
            db.executemany("INSERT INTO tasks (id, title, done) VALUES (?, ?, ?)", [(t["id"], t["title"], int(t["done"])) for t in result["tasks"]])
    return ("", 204) if result["status"] == 204 else (jsonify(result["data"]), result["status"])

@app.errorhandler(BadRequest)
def bad_json(_error):
    return jsonify(error="Invalid JSON"), 400

@app.errorhandler(RequestEntityTooLarge)
def too_large(_error):
    return jsonify(error="Body too large"), 413

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=int(os.environ.get("PORT", "3001")), debug=False)

```

Run in the terminal:

```sh
.venv/bin/python app.py
```

Create a task, stop the server, restart it, and GET /tasks. The record remains. The table rewrite is a simple learning adapter; later you can update only the changed row.

### 6 · Connect your own page

Your form already works locally. Now events call fetch instead of changing only a local list. Put your own page in web/index.html. Express serves this folder; Flask serves its index. Serving page and API at the same address avoids a separate CORS lesson at this stage. Start with your basic shopping-list page from before quantity: this API stores id, title, and done. Change render() to render(tasks), remove localStorage load/save, and GET the initial list from the server. After each change, GET again and render the returned records. PATCH and DELETE use the server-returned id. await belongs in the client while it waits for HTTP; your core route function just returns a decision. The browser page uses JavaScript in both server tracks. Finish the JavaScript page project before connecting a Python server to it.

```
async function createTask(title) {
  const response = await fetch("/tasks", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({title})
  });
  if (!response.ok) throw Error("Could not save the task");
  return response.json();
}
```

Submit your form, confirm a POST request in DevTools, then GET the list and render it. Handle loading, empty results, and errors before adding extra features.

Example requests (use a second terminal while the server runs):

```sh
curl http://127.0.0.1:3001/tasks
curl -X POST http://127.0.0.1:3001/tasks -H 'Content-Type: application/json' -d '{"title": "Read"}'
curl -X PATCH http://127.0.0.1:3001/tasks/1 -H 'Content-Type: application/json' -d '{"done": true}'
curl -X DELETE http://127.0.0.1:3001/tasks/1
```

## What to understand before moving on

Explain one request all the way through: form → fetch → HTTP server → your handler → validation → records/database → status and JSON → render. Trace the same request when the title is blank. Only then try the priority-field extension in README.md.
