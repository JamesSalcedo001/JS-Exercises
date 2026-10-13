const DAY = 24 * 60 * 60 * 1000;
const gaps = [1, 3, 7, 14, 30];

export function recordPractice(previous, { passed, independent, recall }, now = Date.now()) {
  const count = Number.isInteger(previous?.recalls) && previous.recalls >= 0 ? Math.min(previous.recalls, gaps.length - 1) : 0;
  if (!passed) return { recalls: count, due: now, last: now };
  const recalls = recall && independent ? Math.min(count + 1, gaps.length - 1) : count;
  const days = independent ? gaps[recalls] : 1;
  return { recalls, due: now + days * DAY, last: now };
}

export function reviewQueue(route, state, now = Date.now()) {
  return route.flatMap(section => section.exercises.map(exercise => ({ section, exercise })))
    .filter(({ exercise }) => state.completed[exercise.id] && exercise.mode !== 'debug')
    .map(item => ({ ...item, due: Number.isFinite(state.reviews?.[item.exercise.id]?.due) ? state.reviews[item.exercise.id].due : 0 }))
    .filter(item => item.due <= now)
    .sort((a, b) => a.due - b.due);
}
