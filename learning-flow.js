// Keep the recommendation separate from free navigation: learners may still skip ahead.
export function learningRoute(sections, language) {
  const prefix = language === 'python' ? 'py' : 'js';
  const ids = [`flight-${prefix}-basics`, `flight-${prefix}-loops`, `flight-${prefix}-project`,
    ...[8, 9, 10].map(n => `practical-${prefix}-${n}`),
    ...(prefix === 'js' ? ['project-profile', 'practical-js-13', 'project-shopping'] : []),
    `practical-${prefix}-11`, `practical-${prefix}-12`, `project-api-${prefix}`,
    `algorithm-${prefix}-basics`,
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
// Number actual activities in the recommended route, including project steps.
export function lessonTrail(sections, language, id) {
  const lessons = learningRoute(sections, language).flatMap(section =>
    section.exercises.map(exercise => ({ section, exercise })));
  const index = lessons.findIndex(item => item.exercise.id === id);
  if (index < 0) return null;
  const current = lessons[index];
  const prefix = language === 'python' ? 'py' : 'js';
  // Explicit tool dependencies: chaining and projects reuse named earlier tasks.
  const tools = {
    'even': [`${prefix}-filter`, `${prefix}-function`],
    'double': [`${prefix}-function`, `${prefix}-pack`],
    'total': [`${prefix}-total`, `${prefix}-sum-function`],
    'even-double': [`practical-${prefix}-even`, `practical-${prefix}-double`],
    'positive-total': [`practical-${prefix}-even`, `practical-${prefix}-total`],
    'names': [`${prefix}-object`, `practical-${prefix}-double`],
    'find': [`${prefix}-object`, `practical-${prefix}-even`],
    'open-titles': [`practical-${prefix}-names`, `practical-${prefix}-even-double`],
    'create': [`practical-${prefix}-names`, `${prefix}-function`],
    'read': [`practical-${prefix}-find`],
    'update': [`practical-${prefix}-find`, `practical-${prefix}-double`],
    'toggle': [`practical-${prefix}-update`],
    'delete': [`practical-${prefix}-even`, `practical-${prefix}-find`],
    'api-list': [`${prefix}-function`, `practical-${prefix}-read`],
    'api-one': [`practical-${prefix}-api-list`, `practical-${prefix}-read`],
    'api-create': [`practical-${prefix}-api-list`, `practical-${prefix}-create`],
    'api-update': [`practical-${prefix}-api-create`, `practical-${prefix}-update`],
    'api-delete': [`practical-${prefix}-api-update`, `practical-${prefix}-delete`],
    'api-workflow': ['api-create', 'api-update', 'api-list'].map(name => `practical-${prefix}-${name}`),
  };
  const dom = {
    'dom-heading': ['project-profile-structure'],
    'dom-render': ['dom-heading', 'practical-js-names'],
    'dom-add': ['dom-render', 'practical-js-create'],
    'dom-toggle': ['dom-add', 'practical-js-all-done'],
    'dom-remove': ['dom-add', 'practical-js-even'],
    'dom-crud': ['dom-add', 'dom-toggle', 'dom-remove'],
  };
  const toolIds = id.startsWith(`practical-${prefix}-`) ? tools[id.slice(`practical-${prefix}-`.length)] : dom[id];
  const dsaFoundations = {
    maximum:['trace','visits'], reverse:['copy'], search:['search'], frequency:['copy'], duplicates:['copy'], anagram:['two-passes'],
    palindrome:['visits'], brackets:['copy'], 'binary-search':['halving'], 'two-sum':['pairs','copy'], 'move-zeros':['two-passes','copy'], window:['trace','two-passes'],
  };
  const dsaSlug = id.startsWith(`path-${prefix}-`) ? id.slice(`path-${prefix}-`.length) : '';
  const foundationIds = (dsaFoundations[dsaSlug] || []).map(slug => `algorithm-${prefix}-${slug}`);
  const sourceIds = [...foundationIds, ...(toolIds || []), current.exercise.continuesFrom, current.exercise.markupFrom,
    ...(current.section.prerequisites || []).map(sectionId =>
      sections.find(section => section.id === sectionId)?.exercises.at(-1)?.id),
    lessons[index - 1]?.exercise.id].filter(Boolean);
  const earlier = [...new Set(sourceIds)].map(sourceId => lessons.findIndex(item => item.exercise.id === sourceId))
    .filter(position => position >= 0 && position < index).sort((a, b) => a - b);
  return { number: index + 1, total: lessons.length,
    reviews: earlier.map(position => ({ ...lessons[position], number: position + 1 })) };
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
