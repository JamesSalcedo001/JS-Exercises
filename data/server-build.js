// A real server from an empty folder; browser route practice comes first.
export const serverBuildSteps = {
  "javascript": [
    {
      "title": "1 \u00b7 Create an empty project folder",
      "why": "A folder groups the files you own. A dependency supplies HTTP plumbing; you will write the decisions. JavaScript needs Node 24+; Python needs Python 3.10+. These steps run on a computer or Codex Cloud. npm init creates the package description and type=module enables import. The package folder keeps project dependencies together.",
      "code": "mkdir my-task-api\ncd my-task-api\nnpm init -y\nnpm pkg set type=module\nnpm install express@5.1.0 --cache /tmp/task-api-npm-cache",
      "check": "The folder contains its package files or Python virtualenv. No project source has been downloaded."
    },
    {
      "title": "2 \u00b7 Start the smallest server",
      "why": "A server listens for requests. /health proves it can receive a request and send one JSON response. Create server.js yourself with this small program. app.get links a URL to a callback; response.json sends JSON; app.listen keeps the process waiting on a port.",
      "code": "// server.js\nimport express from 'express';\nconst app = express();\napp.get('/health', (_request, response) => response.json({ok: true}));\napp.listen(Number(process.env.PORT || 3000), '127.0.0.1');",
      "run": "node server.js",
      "check": "In a second terminal: curl http://127.0.0.1:3000/health \u2192 {\"ok\":true}. Stop and restart after editing."
    },
    {
      "title": "3 \u00b7 Connect the handler YOU built",
      "why": "Save your browser code as routes.js with export before the function. Replace the small server program with this adapter. It supplies method, path, body and stored tasks to your function, then translates its return value into HTTP. The tasks variable is memory: restarting will empty it. express.json turns the JSON body into request.body.",
      "code": "// server.js \u2014 routes.js contains YOUR checked handleRequest, with export.\nimport express from 'express';\nimport {handleRequest} from './routes.js';\nconst app = express();\nlet tasks = [];\napp.use(express.json());\napp.get('/health', (_request, response) => response.json({ok: true}));\napp.use((request, response) => {\n  const result = handleRequest(request.method, request.path, request.body ?? null, tasks);\n  tasks = result.tasks;\n  if (result.status === 204) response.status(204).end();\n  else response.status(result.status).json(result.data);\n});\napp.listen(Number(process.env.PORT || 3000), '127.0.0.1');",
      "run": "node server.js",
      "check": "Start the server. curl http://127.0.0.1:3000/tasks shows []. Then POST a title, GET it, PATCH it, and DELETE it. Use the request examples in the guide."
    },
    {
      "title": "4 \u00b7 Try a database by itself",
      "why": "Run this separate small file before changing the server. Rows are records; columns are id, title and done. CREATE TABLE sets the shape, INSERT adds a row, SELECT reads rows. The ? placeholders supply values separately from SQL. done is stored as 0 or 1. This lesson uses demo.sqlite; the server will use tasks.sqlite.",
      "code": "// database.js\nimport {DatabaseSync} from 'node:sqlite';\nconst db = new DatabaseSync('demo.sqlite');\ndb.exec('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL)');\ndb.prepare('INSERT INTO tasks (title, done) VALUES (?, ?)').run('Read', 0);\nconsole.log(db.prepare('SELECT id, title, done FROM tasks').all());\ndb.close();",
      "run": "node database.js",
      "check": "The terminal prints a Read record. Run it again: you see both saved rows. You have proved persistence without HTTP in the way."
    },
    {
      "title": "5 \u00b7 Connect the database to your working server",
      "why": "Only add a database after in-memory CRUD works. SQLite is a file of rows. Read rows into the same task shape, call your same handler, and save changed records in one transaction. SQL parameters keep values separate from query text. Replace the adapter, not your route logic. BEGIN and COMMIT group the read and save; ROLLBACK cancels an incomplete save. The adapter converts 0/1 back into boolean done values.",
      "code": "import express from 'express';\nimport { DatabaseSync } from 'node:sqlite';\nimport { fileURLToPath } from 'node:url';\nimport { handleRequest } from './routes.js';\n\nconst db = new DatabaseSync(process.env.TASK_DB || fileURLToPath(new URL('./tasks.sqlite', import.meta.url)));\ndb.exec('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL CHECK(done IN (0,1)))');\nconst app = express();\napp.disable('x-powered-by');\napp.use(express.json({limit: '16kb', strict: false}));\napp.use(express.static(fileURLToPath(new URL('./web/', import.meta.url))));\napp.get('/health', (_req, res) => res.json({ok: true}));\napp.use((req, res, next) => {\n  try {\n    db.exec('BEGIN IMMEDIATE');\n    const tasks = db.prepare('SELECT id, title, done FROM tasks ORDER BY id').all().map(t => ({...t, done: Boolean(t.done)}));\n    const result = handleRequest(req.method, req.path, req.body ?? null, tasks);\n    if (JSON.stringify(result.tasks) !== JSON.stringify(tasks)) {\n      db.exec('DELETE FROM tasks');\n      const insert = db.prepare('INSERT INTO tasks (id, title, done) VALUES (?, ?, ?)');\n      for (const task of result.tasks) insert.run(task.id, task.title, Number(task.done));\n    }\n    db.exec('COMMIT');\n    if (result.status === 204) res.status(204).end();\n    else res.status(result.status).json(result.data);\n  } catch (error) { if (db.isTransaction) db.exec('ROLLBACK'); next(error); }\n});\napp.use((error, _req, res, _next) => {\n  if (error.type === 'entity.parse.failed') return res.status(400).json({error: 'Invalid JSON'});\n  if (error.type === 'entity.too.large') return res.status(413).json({error: 'Body too large'});\n  console.error(error.message); res.status(500).json({error: 'Server error'});\n});\nconst server = app.listen(Number(process.env.PORT || 3000), '127.0.0.1', () => console.log('Task API ready on port ' + server.address().port));\nconst stop = () => server.close(() => { db.close(); process.exit(0); });\nprocess.on('SIGTERM', stop); process.on('SIGINT', stop);\n",
      "run": "node server.js",
      "check": "Create a task, stop the server, restart it, and GET /tasks. The record remains. The table rewrite is a simple learning adapter; later you can update only the changed row."
    },
    {
      "title": "6 \u00b7 Connect your own page",
      "why": "Your form already works locally. Now events call fetch instead of changing only a local list. Put your own page in web/index.html. Express serves this folder; Flask serves its index. Serving page and API at the same address avoids a separate CORS lesson at this stage. Start with your basic shopping-list page from before quantity: this API stores id, title, and done. Change render() to render(tasks), remove localStorage load/save, and GET the initial list from the server. After each change, GET again and render the returned records. PATCH and DELETE use the server-returned id. await belongs in the client while it waits for HTTP; your core route function just returns a decision.",
      "code": "async function createTask(title) {\n  const response = await fetch(\"/tasks\", {\n    method: \"POST\",\n    headers: {\"Content-Type\": \"application/json\"},\n    body: JSON.stringify({title})\n  });\n  if (!response.ok) throw Error(\"Could not save the task\");\n  return response.json();\n}",
      "check": "Submit your form, confirm a POST request in DevTools, then GET the list and render it. Handle loading, empty results, and errors before adding extra features."
    }
  ],
  "python": [
    {
      "title": "1 \u00b7 Create an empty project folder",
      "why": "A folder groups the files you own. A dependency supplies HTTP plumbing; you will write the decisions. JavaScript needs Node 24+; Python needs Python 3.10+. These steps run on a computer or Codex Cloud. A virtualenv keeps this project's packages separate from other Python projects.",
      "code": "mkdir my-task-api\ncd my-task-api\npython3 -m venv .venv\n.venv/bin/pip install Flask==3.1.2",
      "check": "The folder contains its package files or Python virtualenv. No project source has been downloaded."
    },
    {
      "title": "2 \u00b7 Start the smallest server",
      "why": "A server listens for requests. /health proves it can receive a request and send one JSON response. Create app.py yourself with this small program. @app.get links the URL to the function below it; Flask turns its returned dictionary into JSON. app.run starts listening.",
      "code": "# app.py\nimport os\nfrom flask import Flask\napp = Flask(__name__)\n@app.get('/health')\ndef health():\n    return {\"ok\": True}\nif __name__ == '__main__':\n    app.run(host='127.0.0.1', port=int(os.environ.get('PORT', '3001')), debug=False)",
      "run": ".venv/bin/python app.py",
      "check": "In a second terminal: curl http://127.0.0.1:3001/health \u2192 {\"ok\":true}. Stop and restart after editing."
    },
    {
      "title": "3 \u00b7 Connect the handler YOU built",
      "why": "Save your browser code as routes.py. Replace the small server program with this adapter. It supplies method, path, body and stored tasks to your function, then translates its return value into HTTP. The tasks variable is memory: restarting will empty it. request.get_json turns the JSON body into a Python dictionary.",
      "code": "# app.py \u2014 routes.py contains YOUR checked handle_request.\nimport os\nfrom flask import Flask, request\nfrom routes import handle_request\napp = Flask(__name__)\ntasks = []\n@app.get('/health')\ndef health():\n    return {\"ok\": True}\n@app.route('/tasks', methods=['GET', 'POST', 'PATCH', 'DELETE', 'PUT'])\n@app.route('/<path:item>', methods=['GET', 'POST', 'PATCH', 'DELETE', 'PUT'])\ndef route(item=None):\n    global tasks\n    body = request.get_json() if request.is_json else None\n    result = handle_request(request.method, request.path, body, tasks)\n    tasks = result['tasks']\n    return ('', 204) if result['status'] == 204 else (result['data'], result['status'])\nif __name__ == '__main__':\n    app.run(host='127.0.0.1', port=int(os.environ.get('PORT', '3001')), debug=False)",
      "run": ".venv/bin/python app.py",
      "check": "Start the server. curl http://127.0.0.1:3001/tasks shows []. Then POST a title, GET it, PATCH it, and DELETE it. Use the request examples in the guide."
    },
    {
      "title": "4 \u00b7 Try a database by itself",
      "why": "Run this separate small file before changing the server. Rows are records; columns are id, title and done. CREATE TABLE sets the shape, INSERT adds a row, SELECT reads rows. The ? placeholders supply values separately from SQL. done is stored as 0 or 1. This lesson uses demo.sqlite; the server will use tasks.sqlite.",
      "code": "# database.py\nimport sqlite3\nwith sqlite3.connect('demo.sqlite') as db:\n    db.execute('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL)')\n    db.execute('INSERT INTO tasks (title, done) VALUES (?, ?)', ('Read', 0))\n    print(db.execute('SELECT id, title, done FROM tasks').fetchall())",
      "run": ".venv/bin/python database.py",
      "check": "The terminal prints a Read record. Run it again: you see both saved rows. You have proved persistence without HTTP in the way."
    },
    {
      "title": "5 \u00b7 Connect the database to your working server",
      "why": "Only add a database after in-memory CRUD works. SQLite is a file of rows. Read rows into the same task shape, call your same handler, and save changed records in one transaction. SQL parameters keep values separate from query text. Replace the adapter, not your route logic. BEGIN and COMMIT group the read and save; ROLLBACK cancels an incomplete save. The adapter converts 0/1 back into boolean done values.",
      "code": "\"\"\"Run with python app.py. Local learning server; not a production deployment.\"\"\"\nimport os\nimport sqlite3\nfrom pathlib import Path\nfrom flask import Flask, jsonify, request, send_from_directory\nfrom werkzeug.exceptions import BadRequest, RequestEntityTooLarge\nfrom routes import handle_request\n\napp = Flask(__name__, static_folder=None)\napp.config[\"MAX_CONTENT_LENGTH\"] = 16 * 1024\nDB_PATH = os.environ.get(\"TASK_DB\", str(Path(__file__).with_name(\"tasks.sqlite\")))\nWEB = Path(__file__).with_name(\"web\")\nwith sqlite3.connect(DB_PATH) as db:\n    db.execute(\"CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL CHECK(done IN (0,1)))\")\n\n@app.get(\"/\")\ndef index():\n    return send_from_directory(WEB, \"index.html\")\n\n@app.get(\"/health\")\ndef health():\n    return jsonify(ok=True)\n\n@app.route(\"/tasks\", methods=[\"GET\", \"POST\", \"PATCH\", \"DELETE\", \"PUT\"])\n@app.route(\"/tasks/<path:item>\", methods=[\"GET\", \"POST\", \"PATCH\", \"DELETE\", \"PUT\"])\n@app.route(\"/<path:item>\", methods=[\"GET\", \"POST\", \"PATCH\", \"DELETE\", \"PUT\"])\ndef tasks(item=None):\n    body = request.get_json() if request.is_json else None\n    with sqlite3.connect(DB_PATH) as db:\n        db.execute(\"BEGIN IMMEDIATE\")\n        records = [{\"id\": row[0], \"title\": row[1], \"done\": bool(row[2])} for row in db.execute(\"SELECT id, title, done FROM tasks ORDER BY id\")]\n        result = handle_request(request.method, request.path, body, records)\n        if result[\"tasks\"] != records:\n            db.execute(\"DELETE FROM tasks\")\n            db.executemany(\"INSERT INTO tasks (id, title, done) VALUES (?, ?, ?)\", [(t[\"id\"], t[\"title\"], int(t[\"done\"])) for t in result[\"tasks\"]])\n    return (\"\", 204) if result[\"status\"] == 204 else (jsonify(result[\"data\"]), result[\"status\"])\n\n@app.errorhandler(BadRequest)\ndef bad_json(_error):\n    return jsonify(error=\"Invalid JSON\"), 400\n\n@app.errorhandler(RequestEntityTooLarge)\ndef too_large(_error):\n    return jsonify(error=\"Body too large\"), 413\n\nif __name__ == \"__main__\":\n    app.run(host=\"127.0.0.1\", port=int(os.environ.get(\"PORT\", \"3001\")), debug=False)\n",
      "run": ".venv/bin/python app.py",
      "check": "Create a task, stop the server, restart it, and GET /tasks. The record remains. The table rewrite is a simple learning adapter; later you can update only the changed row."
    },
    {
      "title": "6 \u00b7 Connect your own page",
      "why": "Your form already works locally. Now events call fetch instead of changing only a local list. Put your own page in web/index.html. Express serves this folder; Flask serves its index. Serving page and API at the same address avoids a separate CORS lesson at this stage. Start with your basic shopping-list page from before quantity: this API stores id, title, and done. Change render() to render(tasks), remove localStorage load/save, and GET the initial list from the server. After each change, GET again and render the returned records. PATCH and DELETE use the server-returned id. await belongs in the client while it waits for HTTP; your core route function just returns a decision. The browser page uses JavaScript in both server tracks. Finish the JavaScript page project before connecting a Python server to it.",
      "code": "async function createTask(title) {\n  const response = await fetch(\"/tasks\", {\n    method: \"POST\",\n    headers: {\"Content-Type\": \"application/json\"},\n    body: JSON.stringify({title})\n  });\n  if (!response.ok) throw Error(\"Could not save the task\");\n  return response.json();\n}",
      "check": "Submit your form, confirm a POST request in DevTools, then GET the list and render it. Handle loading, empty results, and errors before adding extra features."
    }
  ]
};
