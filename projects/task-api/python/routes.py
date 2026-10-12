"""Reference handler, also usable in the browser's Python runtime."""
import re


def handle_request(method, path, body, tasks):
    records = [dict(task) for task in tasks]

    def reply(status, data):
        return {"status": status, "data": data, "tasks": records}

    if path == "/tasks":
        if method == "GET":
            return reply(200, [dict(task) for task in records])
        if method != "POST":
            return reply(405, {"error": "Method not allowed"})
        if not isinstance(body, dict) or not isinstance(body.get("title"), str) or not body["title"].strip():
            return reply(400, {"error": "Title is required"})
        task = {"id": max([0] + [t["id"] for t in records]) + 1, "title": body["title"].strip(), "done": False}
        records.append(task)
        return reply(201, dict(task))
    match = re.match(r"^/tasks/([1-9]\d*)$", path)
    if not match:
        return reply(404, {"error": "Route not found"})
    if method not in ["GET", "PATCH", "DELETE"]:
        return reply(405, {"error": "Method not allowed"})
    index = next((i for i, task in enumerate(records) if task["id"] == int(match.group(1))), -1)
    if index == -1:
        return reply(404, {"error": "Task not found"})
    if method == "GET":
        return reply(200, dict(records[index]))
    if method == "DELETE":
        records.pop(index)
        return reply(204, None)
    if not isinstance(body, dict) or not body or any(key not in ["title", "done"] for key in body):
        return reply(400, {"error": "Invalid update"})
    if "title" in body and (not isinstance(body["title"], str) or not body["title"].strip()):
        return reply(400, {"error": "Invalid update"})
    if "done" in body and not isinstance(body["done"], bool):
        return reply(400, {"error": "Invalid update"})
    if "title" in body:
        records[index]["title"] = body["title"].strip()
    if "done" in body:
        records[index]["done"] = body["done"]
    return reply(200, dict(records[index]))
