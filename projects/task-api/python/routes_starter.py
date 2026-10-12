# Implement one branch at a time; tests/test_backends.py checks both servers.
def handle_request(method, path, body, tasks):
    return {"status": 501, "data": {"error": "Not implemented yet"}, "tasks": [dict(task) for task in tasks]}
