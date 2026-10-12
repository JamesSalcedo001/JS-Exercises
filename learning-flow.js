// Keep the recommendation separate from free navigation: learners may still skip ahead.
export function learningRoute(sections, language) {
  const prefix = language === 'python' ? 'py' : 'js';
  const ids = [`flight-${prefix}-basics`, `flight-${prefix}-loops`, `flight-${prefix}-project`,
    ...[8, 9, 10].map(n => `practical-${prefix}-${n}`),
    ...(prefix === 'js' ? ['project-profile', 'practical-js-13', 'project-shopping'] : []),
    `practical-${prefix}-11`, `practical-${prefix}-12`, `project-api-${prefix}`,
    ...[4, 5, 6, 7].map(n => `path-${prefix}-${n}`)];
  return ids.map(id => sections.find(section => section.id === id)).filter(Boolean);
}
export function recommend(sections, state) {
  const route = learningRoute(sections, state.language);
  const last = state.lastLearning?.[state.language];
  const resumed = route.find(section => section.exercises.some(e => e.id === last));
  if (resumed && !state.completed[last] && typeof state.drafts[last] === "string" && state.drafts[last].trim()) {
    return {section:resumed, exercise:resumed.exercises.find(e => e.id === last), resume:true};
  }
  for (const section of route) {
    const exercise = section.exercises.find(e => !state.completed[e.id]);
    if (exercise) return {section, exercise, resume:typeof state.drafts[exercise.id] === "string" && Boolean(state.drafts[exercise.id].trim())};
  }
  return null;
}
export function previousMarkup(sections, state, id) {
  if (!id) return undefined;
  const exercise = sections.flatMap(s => s.exercises).find(e => e.id === id);
  const markup = exercise?.html ? state.checkedDrafts[id] : state.checkedMarkup[id];
  return typeof markup === "string" ? markup : undefined;
}
// Earlier releases saved project positions as numbers. Translate them once so
// inserting a foundation step never opens the wrong saved draft.
export function migrateProjectPositions(sections, state) {
  if (state.projectFlowVersion === 2) return;
  const legacy = {
    'project-profile':['structure','layout','debug','challenge'],
    'project-shopping':['render','create','save','debug','challenge'],
    'project-api-js':['read','create','debug','challenge'],
    'project-api-py':['read','create','debug','challenge'],
  };
  for (const [id, suffixes] of Object.entries(legacy)) {
    const oldIndex = state.positions[id];
    if (!Number.isInteger(oldIndex) || !suffixes[oldIndex]) continue;
    const section = sections.find(s => s.id === id);
    const newIndex = section?.exercises.findIndex(e => e.id === `${id}-${suffixes[oldIndex]}`);
    if (newIndex >= 0) state.positions[id] = newIndex;
  }
  state.projectFlowVersion = 2;
}
