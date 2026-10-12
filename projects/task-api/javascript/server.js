import express from 'express';
import { DatabaseSync } from 'node:sqlite';
import { fileURLToPath } from 'node:url';
import { handleRequest } from './routes.js';

const db = new DatabaseSync(process.env.TASK_DB || fileURLToPath(new URL('./tasks.sqlite', import.meta.url)));
db.exec('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, title TEXT NOT NULL, done INTEGER NOT NULL CHECK(done IN (0,1)))');
const app = express();
app.disable('x-powered-by');
app.use(express.json({limit: '16kb', strict: false}));
app.use(express.static(fileURLToPath(new URL('../web/', import.meta.url))));
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
