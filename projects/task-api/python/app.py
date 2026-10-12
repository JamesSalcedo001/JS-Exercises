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
WEB = Path(__file__).resolve().parents[1] / "web"
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
