// Reference implementation. Copy routes.starter.js over this file to practice.
// The same handler can be checked in the browser without running Express.
export function handleRequest(method, path, body, tasks) {
  const records = tasks.map(task => ({...task}));
  const reply = (status, data) => ({status, data, tasks: records});
  if (path === '/tasks') {
    if (method === 'GET') return reply(200, records.map(task => ({...task})));
    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});
    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});
    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};
    records.push(task);
    return reply(201, {...task});
  }
  const match = /^\/tasks\/([1-9]\d*)$/.exec(path);
  if (!match) return reply(404, {error: 'Route not found'});
  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});
  const index = records.findIndex(task => task.id === Number(match[1]));
  if (index < 0) return reply(404, {error: 'Task not found'});
  if (method === 'GET') return reply(200, {...records[index]});
  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }
  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});
  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});
  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});
  if ('title' in body) records[index].title = body.title.trim();
  if ('done' in body) records[index].done = body.done;
  return reply(200, {...records[index]});
}
