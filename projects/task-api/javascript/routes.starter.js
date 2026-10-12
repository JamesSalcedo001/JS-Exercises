// Replace this response one route at a time. Use npm test to check your work.
export function handleRequest(method, path, body, tasks) {
  return {status: 501, data: {error: 'Not implemented yet'}, tasks: tasks.map(task => ({...task}))};
}
