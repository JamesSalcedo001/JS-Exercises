// A deterministic offline HTTP fixture. No request leaves this worker.
export function createPracticeAPI(seed = [], forcedStatus = 200, failAt = 0) {
  let records = structuredClone(seed);
  const requests = [];
  return {
    requests,
    get records() { return structuredClone(records); },
    async fetch(path, options = {}) {
      const method = (options.method || 'GET').toUpperCase();
      const body = options.body === undefined ? null : JSON.parse(options.body);
      requests.push({ method, path, body });
      let status = !failAt || requests.length === failAt ? forcedStatus : 200, data = null;
      if (status === 200) {
        const match = /^\/tasks\/(\d+)$/.exec(path);
        const id = match ? Number(match[1]) : null;
        const index = records.findIndex(t => t.id === id);
        if (path === '/tasks' && method === 'GET') data = records;
        else if (path === '/tasks' && method === 'POST' && typeof body?.title === 'string' && body.title.trim()) {
          data = { id: Math.max(0, ...records.map(t => t.id)) + 1, title: body.title, done: false };
          records.push(data); status = 201;
        } else if (match && index >= 0 && method === 'GET') data = records[index];
        else if (match && index >= 0 && method === 'PATCH' && typeof body?.done === 'boolean') {
          records[index] = { ...records[index], done: body.done }; data = records[index];
        } else if (match && index >= 0 && method === 'DELETE') { records.splice(index, 1); status = 204; }
        else status = 404;
      }
      return new Response(status === 204 ? null : JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
    }
  };
}
export const pythonPracticeAPI = `
_records = []
_requests = []
_status = 200
_fail_at = 0

def reset(seed, status, fail_at=0):
    global _records, _requests, _status, _fail_at
    _records = [dict(task) for task in seed]
    _requests = []
    _status = status
    _fail_at = fail_at

def report():
    return {"records": _records, "requests": _requests}

def request(method, path, body=None):
    global _records
    method = method.upper()
    _requests.append({"method": method, "path": path, "body": body})
    if _status != 200 and (not _fail_at or len(_requests) == _fail_at):
        return {"status": _status, "data": None}
    if path == "/tasks" and method == "GET":
        return {"status": 200, "data": [dict(task) for task in _records]}
    if path == "/tasks" and method == "POST" and body and isinstance(body.get("title"), str) and body["title"].strip():
        task = {"id": max([0] + [t["id"] for t in _records]) + 1, "title": body["title"], "done": False}
        _records.append(task)
        return {"status": 201, "data": dict(task)}
    if path.startswith("/tasks/"):
        try:
            wanted = int(path[7:])
        except ValueError:
            return {"status": 404, "data": None}
        for i, task in enumerate(_records):
            if task["id"] == wanted:
                if method == "GET":
                    return {"status": 200, "data": dict(task)}
                if method == "PATCH" and body and isinstance(body.get("done"), bool):
                    task["done"] = body["done"]
                    return {"status": 200, "data": dict(task)}
                if method == "DELETE":
                    _records.pop(i)
                    return {"status": 204, "data": None}
    return {"status": 404, "data": None}
`;
