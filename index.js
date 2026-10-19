import { recommend, previousMarkup, migrateProjectPositions, lessonTrail, learningRoute, topicName, topicBridge, studyRoute } from "./learning-flow.js";
import { taskGuide, studyPaths, reviewExample } from './lesson-guide.js';
import { formatCode } from './format-code.js';
import { recordPractice, reviewQueue } from "./review.js";
import { mountAlgorithmGuide } from "./algorithm-guide.js";
import { conceptFor, dataShapes } from "./data/concept-lessons.js";
import { serverBuildSteps } from "./data/server-build.js";
import { sections } from "./sections.js";
import { runDOM } from "./dom-runner.js";
import { createEditor } from "./editor.js";
const $ = (id) => document.getElementById(id);
const flightSections = sections.filter((section) => section.id?.startsWith("flight-"));
// Stable content IDs and stage numbers; the learning route introduces tools before DSA.
const pathFor = language => learningRoute(sections, language);
const stepTitle = section => section.id
  ? `Topic ${pathFor(section.language).indexOf(section) + 1} · ${topicName(section)}`
  : section.title;
const storageKey = "daily-coding-practice-v1"; // Keep existing drafts and completion records.
let reviewOrigin = null;
let recallAttempt = null;
let state = { drafts: {}, completed: {}, positions: {}, plans: {}, reflections: {}, independent: {}, helpUsage: {}, backups: {}, lastPractice: {}, lastProject: {}, lastLearning: {}, checkedDrafts: {}, checkedMarkup: {}, markupDrafts: {}, reviews: {}, experiments: {}, projectFlowVersion: 2, lastFlight: null, language: "javascript", useStarter: false };
let storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved && typeof saved === "object") {
    for (const key of ["drafts", "completed", "positions", "plans", "reflections", "independent", "helpUsage", "backups", "lastPractice", "lastProject", "lastLearning", "checkedDrafts", "checkedMarkup", "markupDrafts", "reviews", "experiments", "paths"]) {
      if (saved[key] && typeof saved[key] === "object" && !Array.isArray(saved[key])) state[key] = saved[key];
    }
    state.lastFlight = typeof saved.lastFlight === "string" ? saved.lastFlight : null;
    state.language = saved.language === "python" ? "python" : "javascript";
    state.useStarter = saved.useStarter === true;
    state.projectFlowVersion = saved.projectFlowVersion;
  }
} catch { storageAvailable = false; }
migrateProjectPositions(sections, state);
const oldResume = sections.find((s) => s.exercises.some((e) => e.id && e.id === state.lastFlight));
if (oldResume && !state.lastPractice[oldResume.language]) state.lastPractice[oldResume.language] = state.lastFlight;
let sectionIndex = 0, exerciseIndex = 0, hintIndex = 0;
let inExercise = false, changingExercise = false;
let editor, activeRun;
let touchTarget = "code";
const markupHistory = [];
let navigationMode = "path";
const currentSection = () => sections[sectionIndex];
const currentExercise = () => currentSection().exercises[exerciseIndex];
const currentKey = () => currentExercise().id || `legacy:${sectionIndex}:${exerciseIndex}`;
const isGuided = () => Boolean(currentExercise().id);
const help = () => state.helpUsage[currentKey()] || (state.helpUsage[currentKey()] = { hints: 0, solution: false, starter: false });
const format = (value, language = "javascript") => {
  const text = JSON.stringify(value);
  if (text === undefined) return "undefined";
  if (language !== "python") return text;
  // Preserve string contents: translate only standalone JSON values for Python examples.
  if (value === null) return "None";
  if (value === true) return "True";
  if (value === false) return "False";
  if (Array.isArray(value)) return "[" + value.map((v) => format(v, language)).join(", ") + "]";
  if (value && typeof value === "object") return "{" + Object.entries(value).map(([k, v]) => `${JSON.stringify(k)}: ${format(v, language)}`).join(", ") + "}";
  return text;
};
function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); storageAvailable = true; }
  catch { storageAvailable = false; }
  const warning = "Browser storage is unavailable or full. Your latest edits may not be saved; copy your code before closing.";
  $("save-status").textContent = storageAvailable ? "Drafts, plans, and progress save in this browser on this device." : warning;
  $("save-warning").hidden = storageAvailable;
  $("save-warning").textContent = warning;
}
function busy(value) {
  $("experiment-run").disabled = value;
  $("run-btn").disabled = value; $("check-btn").disabled = value; $("stop-btn").hidden = !value;
}
function cancelRun() { if (activeRun) activeRun.finish(null); }
function updateProgress() {
  const exercises = flightSections.flatMap((s) => s.exercises);
  $("flight-progress").textContent = `${exercises.filter((e) => state.completed[e.id]).length} of ${exercises.length} outputs checked`;
  $("resume-flight").textContent = state.lastFlight ? "Resume flight practice" : "Start flight practice";
  const selected = sections.find(s => s.id === $("level-select").value);
  const track = selected?.exercises || [];
  $("path-progress").textContent = `${track.filter(e => state.completed[e.id]).length} of ${track.length} practiced in this step`;
}
function selectLevel() {
  const section = sections.find((s) => s.id === $("level-select").value);
  if (!section) return;
  $("level-label").textContent = section.level || "Build a project";
  $("level-description").textContent = section.description;
  $("start-practice").textContent = Number.isInteger(state.positions[section.id]) ? "Continue this step →" : "Start this step →";
  const lastId = state.lastLearning[state.language] || state.lastPractice[state.language];
  $("resume-practice").hidden = !lastId || section.exercises.some(e => e.id === lastId);
  updateProgress();
}
function makeCard(section, index, mode) {
  const card = document.createElement("button");
  card.className = "section-card";
  const title = document.createElement("strong"); title.textContent = mode === "path" ? stepTitle(section) : section.title;
  const detail = document.createElement("span");
  detail.textContent = section.id ? `${section.exercises.filter((e) => state.completed[e.id]).length}/${section.exercises.length} checked` : `${section.exercises.length} exercises`;
  card.append(title, detail);
  card.addEventListener("click", () => enterSection(index, section.kind === "project" ? "project" : mode));
  return card;
}
function renderPathPicker() {
  state.paths ||= {};
  if (!$("study-path").options.length) for (const [key, path] of Object.entries(studyPaths)) {
    const option = document.createElement('option'); option.value = key; option.textContent = path.title; $("study-path").append(option);
  }
  $("study-path").value = state.paths[state.language] || 'all';
  $("study-path").querySelector('option[value=pages]').disabled = state.language === 'python';
  $("study-path-description").textContent = studyPaths[$("study-path").value].description;
  renderDataShape();
  $("track-select").value = state.language;
  $("use-starter").checked = state.useStarter;
  const previous = $("level-select").value;
  const track = studyRoute(sections, state.language, state.paths[state.language]);
  $("level-select").replaceChildren();
  $("path-section-list").replaceChildren();
  for (const section of track) {
    const option = document.createElement("option"); option.value = section.id;
    option.textContent = stepTitle(section);
    $("level-select").appendChild(option);
    $("path-section-list").appendChild(makeCard(section, sections.indexOf(section), "path"));
  }
  const lastId = state.lastLearning[state.language] || state.lastPractice[state.language];
  const resumeSection = track.find((s) => s.exercises.some((e) => e.id === lastId));
  if (resumeSection) $("level-select").value = resumeSection.id;
  else if (track.some((s) => s.id === previous)) $("level-select").value = previous;
  $("resume-practice").hidden = !resumeSection;
  $("resume-practice").textContent = resumeSection ? `Resume saved exercise` : "Resume my practice";
  selectLevel(); updateProgress();
}
function renderDataShape() {
  const select = $("data-shape");
  if (!select.options.length) for (const [key, item] of Object.entries(dataShapes)) {
    const option = document.createElement("option"); option.value = key; option.textContent = item.title; select.append(option);
  }
  const item = dataShapes[select.value];
  $("shape-why").textContent = item.why;
  $("shape-example").textContent = state.language === "python" ? item.py : item.js;
  $("shape-practice").dataset.exercise = state.language === "python" ? item.pyId : item.jsId;
}
function renderRecommendation() {
  const next = recommend(sections, state);
  const lesson = next && lessonTrail(sections, state.language, next.exercise.id);
  $("recommended-title").textContent = next ? `${next.resume ? "Continue" : "Next"}: ${next.exercise.title}` : "You have practiced this path";
  $("recommended-description").textContent = next ? `Lesson ${lesson.number} · ${topicName(next.section)}. Learn the idea, try one change, then check it.` : "Choose another learning path, review an earlier lesson, or practice the other language.";
  $("recommended-start").hidden = !next;
  $("recommended-start").textContent = next?.resume ? "Continue learning →" : "Start this step →";
  const queue = reviewQueue(learningRoute(sections, state.language), state);
  $("review-count").textContent = queue.length ? `${queue.length} ready` : "None due";
  $("recall-list").replaceChildren();
  for (const item of queue.slice(0, 3)) {
    const button = document.createElement("button");
    const trail = lessonTrail(sections, state.language, item.exercise.id);
    button.textContent = `Retry lesson ${trail.number}: ${item.exercise.title}`;
    button.addEventListener("click", () => {
      enterSection(sections.indexOf(item.section), item.section.kind === "project" ? "project" : "path", item.exercise.id);
      $("retry-blank").click(); recallAttempt = item.exercise.id;
    });
    $("recall-list").append(button);
  }
  $("recall-empty").hidden = Boolean(queue.length);
}
function renderProjects() {
  $("project-list").replaceChildren();
  for (const section of sections.filter(s => s.kind === "project" && (!s.backend || s.language === state.language))) {
    $("project-list").appendChild(makeCard(section, sections.indexOf(section), "project"));
  }
  const review = sections.flatMap((section, index) => section.exercises.map(exercise => ({section, index, exercise})))
    .filter(({section, exercise}) => section.kind === "project" && state.completed[exercise.id] && !state.independent[exercise.id]);
  $("review-list").replaceChildren(); $("review-empty").textContent = review.length ? "Try one from blank. Your previous draft stays recoverable under Editor tools." : "When you pass a project step with hints or a solution, it appears here for a later retry.";
  for (const {section, index, exercise} of review) {
    const button = document.createElement("button"); button.className = "section-card";
    button.textContent = `${section.title} · ${exercise.title}`;
    button.addEventListener("click", () => { enterSection(index, "project", exercise.id); $("reflection-details").open = true; });
    $("review-list").append(button);
  }
}
function renderSectionCards() {
  $("section-list").replaceChildren(); $("flight-section-list").replaceChildren();
  sections.forEach((section, index) => {
    if (!section.id) $("section-list").appendChild(makeCard(section, index, "legacy"));
    else if (section.id.startsWith("flight-")) $("flight-section-list").appendChild(makeCard(section, index, "flight"));
  });
  renderPathPicker(); renderProjects(); renderRecommendation();
}
function enterSection(index, mode, activityId) {
  recallAttempt = null;
  sectionIndex = index; navigationMode = mode;
  const section = currentSection();
  const position = state.positions[section.id || `legacy:${index}`];
  const specific = activityId ? section.exercises.findIndex((e) => e.id === activityId) : -1;
  exerciseIndex = specific >= 0 ? specific : Number.isInteger(position) && position >= 0 && position < section.exercises.length ? position : 0;
  openExercise();
}
function nextSection() {
  const selected = studyRoute(sections, currentSection().language, state.paths?.[currentSection().language]);
  const order = navigationMode === "flight" ? flightSections : ["path", "project"].includes(navigationMode) ? selected.includes(currentSection()) ? selected : learningRoute(sections,currentSection().language) : [];
  return order[order.indexOf(currentSection()) + 1];
}
function showExerciseUI(show) {
  $("home-wrapper").hidden = show;
  $("practice-workspace").hidden = !show;
}
function openExercise() {
  cancelRun(); inExercise = true; showExerciseUI(true); renderExercise();
  window.scrollTo({ top: 0, behavior: "auto" });
}
function updateStarterControl() {
  updateTaskStart();
  $("load-snippet-btn").disabled = Boolean(editor.getValue().trim());
  $("starter-note").textContent = editor.getValue().trim() ? "Your draft stays intact. Clear the editor before loading a starter." : "A starter gives you structure, not the solution.";
  $("restore-draft").hidden = typeof state.backups[currentKey()] !== "string";
}
function updateTaskStart() {
  $("task-use-start").disabled = Boolean(editor.getValue().trim());
}
function renderExercise() {
  changingExercise = true; touchTarget = "code"; markupHistory.length = 0;
  for (const detail of document.querySelectorAll("#phone-code-tools details")) detail.open = false;
  const section = currentSection(), exercise = currentExercise();
  const trail = lessonTrail(sections, section.language, exercise.id);
  $("lesson-position").hidden = !trail;
  $("lesson-position").textContent = trail ? `Lesson ${trail.number} of ${trail.total} · ${section.language === "python" ? "Python" : "JavaScript"}` : "";
  $("return-to-lesson").hidden = !reviewOrigin || reviewOrigin.id === exercise.id;
  $("earlier-lessons").hidden = !trail?.reviews.length;
  $("earlier-lessons").open = false;
  $("lesson-review-list").replaceChildren();
  for (const item of trail?.reviews || []) {
    const button = document.createElement("button");
    button.textContent = `Lesson ${item.number}: ${item.exercise.title}`;
    button.addEventListener("click", () => {
      reviewOrigin ||= { index: sectionIndex, mode: navigationMode, id: exercise.id };
      enterSection(sections.indexOf(item.section), item.section.kind === "project" ? "project" : "path", item.exercise.id);
    });
    $("lesson-review-list").append(button);
  }
  if (section.language) state.language = section.language;
  $("section-title").textContent = ["path", "project"].includes(navigationMode) ? `${section.language === "python" ? "Python" : "JavaScript"} · ${stepTitle(section)}` : section.title;
  $("activity-title").textContent = exercise.title || `Exercise ${exerciseIndex + 1}`;
  $("exercise-progress").textContent = `${exerciseIndex + 1} / ${section.exercises.length}${exercise.minutes ? ` · ~${exercise.minutes} min` : ""}${state.completed[currentKey()] ? state.independent[currentKey()] ? " · Solved without help" : " · Checked" : ""}`;
  $("question-text").textContent = exercise.prompt;
  const guide = taskGuide(exercise, section.language);
  $("task-contract").textContent = guide.contract;
  $("task-setup").textContent = guide.setup;
  $("task-start").hidden = !guide.setup;
  $("task-call").textContent = guide.example; $("task-call").hidden = !guide.example;
  $("task-fixture").hidden = !exercise.dom || exercise.html || section.kind === 'project';
  $("task-fixture-code").textContent = exercise.fixture || '';
  $("planning-example").textContent = guide.focus + (guide.worked ? '\n' + guide.worked + '\nMy plan: first I ___, then I ___. I will check the empty or missing-input case by ___.' : '\nMy plan: name the starting values, calculate or compare ___, then print ___.');
  $("reflection-example").textContent = guide.reflection;
  $("review-example").textContent = reviewExample(exercise, section.language, section);
  $("review-example-box").hidden = !$("review-example").textContent;
  $("topic-bridge").hidden = !section.id || exerciseIndex !== 0;
  $("topic-bridge").textContent = topicBridge(section);
  $("learn-step").hidden = !exercise.lesson;
  $("learn-step").open = Boolean(exercise.lesson && section.kind !== "project" && !state.completed[exercise.id] && !(typeof state.drafts[exercise.id] === "string" && state.drafts[exercise.id].trim()));
  $("step-why").hidden = !exercise.why; $("step-why").textContent = exercise.why ? "Why this step: " + exercise.why : "";
  const algorithmTopic = section.stage === 14 || (section.stage >= 4 && section.stage <= 7);
  $("algorithm-guide").hidden = !algorithmTopic; $("algorithm-guide").open = false;
  if (algorithmTopic) mountAlgorithmGuide($("algorithm-guide-body"), section.language);
  $("answer-analysis").hidden = true;
  $("answer-analysis").textContent = exercise.analysis ? "Cost of the reference approach: " + exercise.analysis : "";
  const ownMarkup = previousMarkup(sections, state, exercise.markupFrom);
  if (exercise.dom && !exercise.html) {
    if (typeof state.markupDrafts[exercise.id] !== "string") state.markupDrafts[exercise.id] = ownMarkup ?? exercise.fixture;
    $("markup-editor").value = state.markupDrafts[exercise.id];
  }
  $("project-markup").hidden = section.kind !== "project" || !exercise.dom || exercise.html;
  $("project-markup").open = false;
  const checkedSource = exercise.continuesFrom && state.checkedDrafts[exercise.continuesFrom];
  const sourceCode = typeof checkedSource === "string" ? checkedSource : undefined;
  $("continuity-note").hidden = !exercise.continuesFrom;
  $("continuity-note").textContent = sourceCode !== undefined ? "Build on your last passing version. Your later edits stay saved in their original step." : "Check the previous step to carry your own code forward. You can still work here from blank.";
  const earlier = section.kind === "project" ? section.exercises.slice(0,exerciseIndex).find(e => !state.completed[e.id] && typeof state.checkedDrafts[e.id] !== "string") : undefined;
  const neededPrevious = earlier?.id || (exercise.continuesFrom && sourceCode === undefined ? exercise.continuesFrom : undefined);
  $("previous-project-step").hidden = !neededPrevious;
  $("previous-project-step").dataset.exercise = neededPrevious || "";
  const prerequisiteStep = section.exercises.find(e => e.id === neededPrevious);
  $("previous-project-step").textContent = prerequisiteStep ? "Build first: " + prerequisiteStep.title : "Build the previous step first";
  const missing = (section.prerequisites || []).map(id => sections.find(s => s.id === id)).find(s => s && s.exercises.some(e => !state.completed[e.id]));
  $("project-ready").hidden = !missing;
  $("project-prerequisite").textContent = missing ? "Helpful before this project: " + missing.title + ". You can review it or continue if you know it." : "";
  $("practice-prerequisite").dataset.section = missing?.id || "";
  $("server-build-steps").replaceChildren();
  if (section.backend) for (const step of serverBuildSteps[section.language]) {
    const details = document.createElement("details"), summary = document.createElement("summary"), why = document.createElement("p"), code = document.createElement("pre"), test = document.createElement("p");
    summary.textContent = step.title; why.textContent = step.why; code.textContent = step.code; test.textContent = (step.run ? "Run in the terminal: " + step.run + ". " : "") + "Check: " + step.check;
    details.append(summary, why, code, test); $("server-build-steps").append(details);
  }
  $("project-guide").hidden = !exercise.guide?.length;
  $("project-guide").open = exercise.mode === "guided" || exercise.mode === "debug";
  if (exercise.mode === "guided" || exercise.mode === "debug") help().guide = true;
  $("project-guide-title").textContent = exercise.mode === "debug" ? "Debug one small step" : "Build one small step";
  $("project-steps").replaceChildren();
  for (const step of exercise.guide || []) { const li = document.createElement("li"); li.textContent = step; $("project-steps").append(li); }
  $("backend-guide").hidden = !section.backend; $("backend-guide").open = false;
  $("backend-commands").textContent = section.language === "python" ? "cd projects/task-api/python\npython3 -m venv .venv\n.venv/bin/pip install -r requirements.txt\n.venv/bin/python app.py" : "cd projects/task-api/javascript\nnpm ci\nnpm start";
  $("export-project").hidden = section.kind !== "project";
  $("export-project").textContent = exercise.dom ? "Save runnable page" : "Save my route file";
  $("function-signature").hidden = !exercise.signature;
  $("function-signature").textContent = exercise.signature || "";
  $("return-note").hidden = !exercise.tests;
  $("return-note").textContent = exercise.html ? "Write HTML and CSS. Run previews your page; checks inspect the layout." : exercise.dom ? "Change the fixture page. Check tests tries real clicks and forms; no return value is needed." : "Return the result. Keep the inputs unchanged.";
  $("task-example").hidden = true;
  $("task-example").textContent = exercise.dom ? "Run opens your page. Check tests tries the actions in Examples." : exercise.tests ? `${exercise.functionName}(${exercise.tests[0].args.map((arg) => format(arg, section.language)).join(", ")}) → ${format(exercise.tests[0].expected, section.language)}` : "";
  $("results-panel").hidden = true;
  $("format-message").textContent = '';
  $("experiment-details").hidden = !exercise.tests || exercise.dom || exercise.api;
  $("experiment-details").open = false;
  const experiment = state.experiments[exercise.id];
  $("experiment-args").value = typeof experiment?.args === "string" ? experiment.args : "";
  $("experiment-expected").value = typeof experiment?.expected === "string" ? experiment.expected : "";
  $("experiment-result").textContent = "";
  $("experiment-example").textContent = exercise.tests && !exercise.dom && !exercise.api ? `Example: arguments ${JSON.stringify(exercise.tests[0].args)} → expected ${JSON.stringify(exercise.tests[0].expected)}. Change the input and predict its result.` : "";
  $("debug-coach").hidden = true;
  $("output").textContent = "Run your code to see output here."; $("dom-output").replaceChildren(); $("check-result").textContent = "";
  $("answer-box").hidden = true; $("answer-btn").textContent = "Reveal solution";
  $("case-results").hidden = true; $("case-list").replaceChildren();
  for (const detail of document.querySelectorAll("#support-panel details, #planning-details, #reflection-details, #case-results")) detail.open = false;
  $("check-btn").hidden = !isGuided();
  $("check-btn").textContent = exercise.tests ? "Check tests" : "Check output";
  $("learning-panel").hidden = !isGuided();
  const concept = conceptFor(exercise, section.language);
  $("lesson").textContent = concept?.lesson || exercise.lesson || "";
  $("concept-use-case").hidden = !concept;
  $("concept-use-case").open = false;
  $("concept-use").textContent = concept ? "Use case: " + concept.use : "";
  $("concept-mistake").textContent = concept ? "Watch for: " + concept.mistake : "";
  $("plan-input").placeholder = concept?.plan || guide.focus;
  $("constraints").replaceChildren();
  $("concept-details").hidden = !exercise.constraints?.length;
  for (const text of exercise.constraints || []) { const item = document.createElement("li"); item.textContent = text; $("constraints").appendChild(item); }
  $("expected-output").hidden = Boolean(exercise.tests);
  $("expected-output").textContent = exercise.expected || "";
  $("example-list").replaceChildren();
  for (const test of exercise.tests || []) {
    const row = document.createElement("p"); row.className = "case-row";
    row.textContent = `${test.args.map((arg) => format(arg, section.language)).join(", ")} → ${format(test.expected, section.language)}`;
    if (exercise.dom) row.textContent = "Input: " + format(test.args, section.language) + "\n" + (test.actions.length ? test.actions.map(action => action.type === "submit" ? `Type ${JSON.stringify(action.value)} and submit the form.` : action.type === "input" ? `Type ${JSON.stringify(action.value)} into the input.` : `Click item ${action.index + 1} matching ${action.selector}.`).join("\n") : "No clicks needed.") + "\nPage should show: " + format(test.expected, section.language);
    if (test.assertions) row.textContent = (test.args.length ? "Input: " + format(test.args, section.language) + "\n" : "") + (test.width ? `At ${test.width}px: ` : "Check: ") + test.assertions.map(assertion => assertion.label + ("value" in assertion ? ": " + format(assertion.value, section.language) : "")).join(" · ") + (test.actions.length ? "\nTry: " + test.actions.map(action => action.type === "submit" ? `submit ${JSON.stringify(action.value)}` : action.type === "reload" ? "reload the saved list" : action.type === "change" ? "toggle the checkbox" : action.type === "input" ? `type ${JSON.stringify(action.value)}` : `click ${action.selector}`).join(", ") : "");
    if (exercise.api) row.textContent += "\nStarting tasks: " + JSON.stringify(test.seed) + " · Service status: " + test.apiStatus + (test.failAt ? " on request " + test.failAt : "");
    $("example-list").appendChild(row);
  }
  if (exercise.dom && !exercise.html) { const fixture = document.createElement("pre"); fixture.textContent = exercise.fixture; $("example-list").prepend(fixture); }
  $("check-explanation").textContent = exercise.html ? "Checks inspect your HTML and layout at the listed screen widths. Keyboard use and visual quality still need your own review." : exercise.dom ? "Each test starts with a fresh fixture, calls setupDOM, tries the listed actions, and checks the page." : exercise.api ? "Each test starts with fresh tasks. Checks compare your return value, requests, and saved records. This API runs locally." : exercise.tests ? "Checks call your function on each input and compare the returned value. They do not measure algorithmic complexity." : "Checks compare printed output. Try another input to test your reasoning.";
  $("stretch").textContent = exercise.stretch || "Explain your approach, then try a different input.";
  $("plan-input").value = typeof state.plans[currentKey()] === "string" ? state.plans[currentKey()] : "";
  document.querySelector("label[for=reflection-input]").textContent = algorithmTopic ? "Name n. Trace a tiny input. Count visits as n grows. What extra data do you store?" : "Walk through one input. What changes at each step?";
  $("reflection-input").value = typeof state.reflections[currentKey()] === "string" ? state.reflections[currentKey()] : "";
  $("transfer-challenge").open = false;
  $("hints").replaceChildren(); hintIndex = 0; $("hint-btn").disabled = false; $("hint-btn").textContent = "Show a hint";
  $("starter-details").hidden = !exercise.snippet;
  $("starter-code").textContent = exercise.snippet || "";
  $("previous-btn").disabled = exerciseIndex === 0;
  const last = exerciseIndex === section.exercises.length - 1;
  $("next-btn").disabled = Boolean(section.id) && last;
  $("next-btn").hidden = Boolean(section.id) && last;
  $("next-block-btn").hidden = !last || !nextSection();
  $("next-block-btn").textContent = nextSection() ? `Next: ${topicName(nextSection())} →` : "Next block →";
  $("block-note").textContent = !last ? "" : navigationMode === "flight" && section.id === "flight-js-project"
    ? "Take a 10-minute break before Python."
    : navigationMode === "flight" && section.id === "flight-py-project" ? "Use the last 10 minutes to rewrite a helper without hints."
      : nextSection() ? `Next topic: ${topicBridge(nextSection())} Before moving on, explain one example in your own words.` : "You reached the end of this path. Rebuild an earlier solution from blank or try the other language.";
  $("exercise-select").replaceChildren();
  section.exercises.forEach((entry, i) => { const option = document.createElement("option"); option.value = i; option.textContent = `${i + 1}. ${entry.title || entry.prompt.slice(0, 65)}`; $("exercise-select").appendChild(option); });
  $("exercise-select").value = exerciseIndex;
  editor.setLanguage(exercise.html ? "html" : section.language || "javascript");
  const draft = state.drafts[currentKey()];
  const starter = (state.useStarter || exercise.mode === "debug") && isGuided() ? exercise.snippet || "" : "";
  editor.setValue(typeof draft === "string" ? draft : sourceCode ?? starter);
  if (typeof draft !== "string" && sourceCode !== undefined) state.drafts[exercise.id] = sourceCode;
  if (typeof draft !== "string" && sourceCode === undefined && starter) help().starter = true;
  if (exercise.mode === "debug") { $("continuity-note").hidden = false; $("continuity-note").textContent = typeof draft === "string" ? "Your debugging draft is restored. Check it, then explain the fix." : "The broken version is ready in the editor. Predict the bug before changing it."; }
  state.positions[section.id || `legacy:${sectionIndex}`] = exerciseIndex;
  if (isGuided()) {
    state.lastLearning[section.language] = exercise.id;
    if (section.kind === "project") state.lastProject[section.language] = exercise.id;
    else state.lastPractice[section.language] = exercise.id;
    if (section.id.startsWith("flight-")) state.lastFlight = exercise.id;
  }
  changingExercise = false;
  updateStarterControl(); persist();
}
function executeWorker(code, exercise, check) {
  return new Promise((resolve) => {
    let worker;
    try { worker = new Worker(new URL("./practice-worker.js", import.meta.url)); }
    catch (error) { resolve({ output: "", error: String(error) }); return; }
    const run = { worker, timer: null, finish(result) {
      clearTimeout(run.timer); worker.terminate();
      if (activeRun === run) { activeRun = null; busy(false); }
      resolve(result);
    } };
    activeRun = run; busy(true);
    run.timer = setTimeout(() => run.finish({ output: "", error: "Stopped after 5 seconds. Check the loop condition and try a smaller input." }), 5000);
    worker.onmessage = ({ data }) => run.finish(data);
    worker.onerror = (event) => run.finish({ output: "", error: event.message || "Could not start the local runtime. Reload online to prepare offline files." });
    worker.postMessage({ code, language: currentSection().language, tests: check ? exercise.tests : undefined, functionName: exercise.functionName, preserveInput: exercise.preserveInput, api: exercise.api });
  });
}
function renderCaseResults(results) {
  $("case-list").replaceChildren(); $("case-results").hidden = false;
  const firstFailure = results.findIndex(result => !result.passed);
  $("case-results").open = firstFailure >= 0;
  const remaining = document.createElement("details"), summary = document.createElement("summary");
  remaining.id = "remaining-cases";
  summary.textContent = `See the other ${results.length - 1} test cases`;
  remaining.append(summary);
  for (const [i, result] of results.entries()) {
    const row = document.createElement("div"); row.className = `case-row ${result.passed ? "case-pass" : "case-fail"}`;
    row.textContent = `${result.passed ? "PASS" : "FAIL"} ${i + 1} · Input: ${result.args.map((arg) => format(arg, currentSection().language)).join(", ")}\nExpected: ${format(result.expected, currentSection().language)} · ${currentExercise().dom ? "Page" : "Returned"}: ${format(result.actual, currentSection().language)}${result.error ? "\n" + result.error : ""}`;
    row.style.whiteSpace = "pre-wrap";
    if (firstFailure >= 0 && i !== firstFailure) remaining.append(row);
    else $("case-list").append(row);
  }
  if (firstFailure >= 0 && results.length > 1) $("case-list").append(remaining);
}
async function runExperiment() {
  const exercise = currentExercise(), key = currentKey();
  if (!exercise.tests || exercise.dom || exercise.api) return;
  let args, expected;
  try {
    args = JSON.parse($("experiment-args").value);
    expected = JSON.parse($("experiment-expected").value);
    if (!Array.isArray(args)) throw Error("Arguments must be a JSON list.");
  } catch (error) {
    $("experiment-result").textContent = "Check the input format: use a JSON list for arguments and a JSON value for the expected answer. " + error.message;
    return;
  }
  $("experiment-result").textContent = "Running your test…";
  const result = await executeWorker(editor.getValue(), { ...exercise, tests: [{ args, expected }] }, true);
  if (!result || !inExercise || currentKey() !== key) return;
  const test = result.results?.[0];
  $("experiment-result").textContent = result.error || test?.error
    ? "Error: " + (result.error || test.error)
    : test?.passed ? "Your prediction matches. Try an empty input, a boundary, or a repeated value next."
      : `Prediction: ${format(expected, currentSection().language)}. Actual: ${format(test?.actual, currentSection().language)}. Trace one step to find the difference.`;
}
async function runCode(check = false) {
  const key = currentKey(), exercise = currentExercise(), code = editor.getValue();
  $("results-panel").hidden = false;
  $("dom-output").replaceChildren(); $("check-result").textContent = ""; $("case-results").hidden = true;
  let result;
  if (isGuided()) {
    $("output").textContent = "Running…"; result = exercise.dom
      ? await runDOM(code, {...exercise, fixture:state.markupDrafts[exercise.id] ?? exercise.fixture}, check, $("dom-output"), busy, run => { activeRun = run; })
      : await executeWorker(code, exercise, check);
    if (!result || !inExercise || currentKey() !== key) return;
  } else {
    // Preserve the original library's page-context execution, including DOM access.
    let output = ""; const originalLog = console.log;
    console.log = (...args) => { output += args.join(" ") + "\n"; };
    try { eval(code); result = { output }; }
    catch (error) { result = { output, error: error.message }; }
    finally { console.log = originalLog; }
  }
  $("output").textContent = result.error ? `${result.output || ""}Error:\n${result.error}` : result.output || (exercise.dom ? "Your page is below. Try the controls yourself." : exercise.tests ? "No printed output. Use Check tests to call your function." : "[No Output]");
  if (!check) return;
  const normalize = (text) => String(text).replace(/\r\n/g, "\n").trimEnd();
  const passed = !result.error && (exercise.tests ? result.results?.length === exercise.tests.length && result.results.every((r) => r.passed) : normalize(result.output) === normalize(exercise.expected));
  if (result.results) renderCaseResults(result.results);
  if (passed) $("reflection-details").open = true;
  state.completed[key] = Boolean(passed);
  if (passed) { state.checkedDrafts[key] = code; if (exercise.dom && !exercise.html) state.checkedMarkup[key] = state.markupDrafts[key] ?? exercise.fixture; }
  state.independent[key] = Boolean(passed && help().hints === 0 && !help().solution && !help().starter && !help().guide);
  if (passed || recallAttempt === key) state.reviews[key] = recordPractice(state.reviews[key], { passed, independent: state.independent[key], recall: recallAttempt === key });
  $("debug-coach").hidden = passed;
  if (passed) recallAttempt = null;
  $("check-result").textContent = exercise.tests
    ? passed ? `${result.results.length}/${exercise.tests.length} tests passed. Explain one example, then continue when ready.` : `${result.results?.filter((r) => r.passed).length || 0}/${exercise.tests.length} tests passed. Start with the first failing case.`
    : passed ? "Output matches ✓ Try another input, then explain your approach." : "Not a match yet. Compare the expected output or try one hint.";
  if (exercise.tests && passed && !result.output) $("output").textContent = exercise.dom ? "The page passed every tested action." : "All tested inputs returned the expected values.";
  $("exercise-progress").textContent = `${exerciseIndex + 1} / ${currentSection().exercises.length}${passed ? state.independent[key] ? " · Solved without help" : " · Checked with help" : ""}`;
  persist(); updateProgress();
}
function replaceCode(value, backup = true) {
  cancelRun();
  if (backup && editor.getValue()) state.backups[currentKey()] = editor.getValue();
  editor.setValue(value); state.drafts[currentKey()] = value;
  $("experiment-result").textContent = ""; $("debug-coach").hidden = true;
  $("check-result").textContent = ""; updateStarterControl(); persist();
}
function nextExercise() {
  if (exerciseIndex < currentSection().exercises.length - 1) exerciseIndex++;
  else if (!currentSection().id && sectionIndex < 4) { sectionIndex++; exerciseIndex = 0; }
  else { $("check-result").textContent = "Level finished. Reflect, retry, or choose the next level."; return; }
  openExercise();
}
async function prepareOffline() {
  const status = $("offline-status");
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
    $("offline-badge").textContent = "Online only ▾";
    status.textContent = "Offline reload needs HTTPS (or localhost). Open the hosted app online before your flight.";
    return;
  }
  try {
    const existing = await navigator.serviceWorker.getRegistration();
    let installed = existing;
    if (navigator.onLine || !existing?.active) {
      try { installed = await navigator.serviceWorker.register("./sw.js"); }
      catch (error) { if (!existing?.active) throw error; }
    }
    // Registering the same URL can return the existing worker before its
    // background update starts. Force the update check for an existing install.
    if (navigator.onLine && installed.active && !installed.installing) {
      try { await installed.update(); }
      catch { /* An existing complete cache can still be checked while offline. */ }
    }
    // ready can resolve to the old worker during an upgrade. Wait for this
    // installation to activate before checking the new offline files.
    const updating = installed.installing || installed.waiting;
    if (updating && updating.state !== "activated") {
      await new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error("Offline installation timed out")), 30000);
        const changed = () => {
          if (updating.state === "activated" || updating.state === "redundant") {
            clearTimeout(timer);
            updating.removeEventListener("statechange", changed);
            if (updating.state === "activated") resolve();
            else reject(new Error("Offline installation did not complete"));
          }
        };
        updating.addEventListener("statechange", changed);
        changed();
      });
    }
    const registration = await navigator.serviceWorker.ready;
    const channel = new MessageChannel();
    const ready = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error("Offline check timed out")), 15000);
      channel.port1.onmessage = ({ data }) => { clearTimeout(timer); resolve(data.ready); };
      registration.active.postMessage({ type: "CHECK_OFFLINE" }, [channel.port2]);
    });
    $("offline-badge").textContent = ready ? "Offline ready ▾" : "Offline not ready ▾";
    $("device-menu").classList.toggle("ready", ready);
    status.textContent = ready
      ? "Offline ready · JavaScript and Python saved. Before boarding, switch to airplane mode and reload this same address to check."
      : "Offline files are not fully saved yet. Reopen while online and wait for Offline ready.";
  } catch {
    $("offline-badge").textContent = "Offline not ready ▾";
    status.textContent = "Offline preparation failed. Keep this tab open; reconnect and reload before your flight.";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  editor = createEditor($("code-editor"), (value) => {
    if (!inExercise || changingExercise) return;
    cancelRun();
    state.drafts[currentKey()] = value;
    $("experiment-result").textContent = ""; $("debug-coach").hidden = true;
    $("check-result").textContent = ""; $("case-results").hidden = true;
    $("results-panel").hidden = true; $("dom-output").replaceChildren();
    updateStarterControl(); persist();
  });
  $("recommended-start").addEventListener("click", () => { const next = recommend(sections, state); if (next) enterSection(sections.indexOf(next.section), next.section.kind === "project" ? "project" : "path", next.exercise.id); });
  $("start-algorithms").addEventListener("click", () => {
    const index = sections.findIndex(s => s.id === `algorithm-${state.language === "python" ? "py" : "js"}-basics`);
    enterSection(index, "path", sections[index].exercises[0].id);
  });
  $("data-shape").addEventListener("change", renderDataShape);
  $("shape-practice").addEventListener("click", () => {
    const id = $("shape-practice").dataset.exercise;
    const index = sections.findIndex(s => s.exercises.some(e => e.id === id));
    if (index >= 0) enterSection(index, "path", id);
  });
  $("return-to-lesson").addEventListener("click", () => {
    const origin = reviewOrigin; reviewOrigin = null;
    if (origin) enterSection(origin.index, origin.mode, origin.id);
  });
  $("experiment-run").addEventListener("click", runExperiment);
  for (const id of ["experiment-args", "experiment-expected"]) $(id).addEventListener("input", () => {
    cancelRun(); $("experiment-result").textContent = "";
    state.experiments[currentKey()] = { args: $("experiment-args").value, expected: $("experiment-expected").value }; persist();
  });
  $("previous-project-step").addEventListener("click", () => { const id = $("previous-project-step").dataset.exercise; if (id) enterSection(sectionIndex, "project", id); });
  $("practice-prerequisite").addEventListener("click", () => { const section = sections.find(s => s.id === $("practice-prerequisite").dataset.section); if (section) enterSection(sections.indexOf(section), "path", section.exercises.find(e => !state.completed[e.id])?.id); });
  $("markup-editor").addEventListener("focus", () => { touchTarget = "markup"; });
  $("code-editor").addEventListener("focusin", () => { touchTarget = "code"; });
  $("markup-editor").addEventListener("beforeinput", () => { const field = $("markup-editor"); markupHistory.push({value:field.value,start:field.selectionStart,end:field.selectionEnd}); if (markupHistory.length > 50) markupHistory.shift(); });
  $("markup-editor").addEventListener("input", () => { cancelRun(); state.markupDrafts[currentKey()] = $("markup-editor").value; $("dom-output").replaceChildren(); $("case-results").hidden = true; $("results-panel").hidden = true; $("check-result").textContent = ""; persist(); });
  $("track-select").addEventListener("change", () => { state.language = $("track-select").value; renderPathPicker(); renderProjects(); renderRecommendation(); persist(); });
  $("study-path").addEventListener('change', () => { state.paths[state.language] = $("study-path").value; renderPathPicker(); renderRecommendation(); persist(); });
  $("task-use-start").addEventListener('click', () => { if (!editor.getValue().trim()) { replaceCode(currentExercise().snippet || ''); updateTaskStart(); } });
  $("enable-monaco").addEventListener('click', () => editor.enableMonaco());
  $("format-code").addEventListener('click', async () => {
    const key=currentKey(), before=editor.getValue();
    $("format-message").textContent='Formatting…';
    try { const formatted=await formatCode(before,currentExercise().html?'html':currentSection().language||'javascript');
      if(currentKey()!==key || editor.getValue()!==before) return;
      replaceCode(formatted); $("format-message").textContent='Formatted. Your previous code is under Editor tools.';
    } catch(error) { $("format-message").textContent='Could not format this code. Your draft is unchanged. '+error.message; }
  });
  $("level-select").addEventListener("change", selectLevel);
  $("use-starter").addEventListener("change", () => { state.useStarter = $("use-starter").checked; persist(); });
  $("start-practice").addEventListener("click", () => { const index = sections.findIndex(s => s.id === $("level-select").value); enterSection(index, sections[index].kind === "project" ? "project" : "path"); });
  $("resume-practice").addEventListener("click", () => {
    const id = state.lastLearning[state.language] || state.lastPractice[state.language];
    const index = sections.findIndex((s) => s.exercises.some((e) => e.id === id));
    if (index >= 0) enterSection(index, sections[index].kind === "project" ? "project" : "path", id);
  });
  $("exercise-select").addEventListener("change", () => { exerciseIndex = Number($("exercise-select").value); openExercise(); });
  $("plan-input").addEventListener("input", () => { state.plans[currentKey()] = $("plan-input").value; persist(); });
  $("reflection-input").addEventListener("input", () => { state.reflections[currentKey()] = $("reflection-input").value; persist(); });
  $("run-btn").addEventListener("click", () => { if (matchMedia("(pointer: coarse)").matches) editor.blur(); runCode(); }); $("check-btn").addEventListener("click", () => { if (matchMedia("(pointer: coarse)").matches) editor.blur(); runCode(true); });
  for (const button of document.querySelectorAll("#phone-code-tools button")) {
    button.addEventListener("pointerdown", event => event.preventDefault());
    button.addEventListener("click", () => {
      if (touchTarget === "markup" && !$("project-markup").hidden) {
        const field = $("markup-editor"), start = field.selectionStart, end = field.selectionEnd;
        if (button.dataset.codeAction === "undo") { const saved = markupHistory.pop(); if (!saved) return; field.value = saved.value; field.setSelectionRange(saved.start, saved.end); }
        else {
          markupHistory.push({value:field.value,start,end}); if (markupHistory.length > 50) markupHistory.shift();
          const pair = button.dataset.codePair;
          const text = pair ? pair[0] + field.value.slice(start,end) + pair[1] : button.dataset.codeAction === "indent" ? "    " + field.value.slice(start,end).replace(/\n/g, "\n    ") : button.dataset.codeAction === "newline" ? "\n" : button.dataset.codeInsert;
          field.setRangeText(text,start,end,"end"); if (pair) field.setSelectionRange(start+1,end+1);
        }
        field.focus({preventScroll:true}); field.dispatchEvent(new Event("input", {bubbles:true})); return;
      }
      if (button.dataset.codePair) editor.insertPair(button.dataset.codePair);
      else if (button.dataset.codeAction === "undo") editor.undo();
      else if (button.dataset.codeAction === "indent") editor.indent();
      else editor.insert(button.dataset.codeAction === "indent" ? "    " : button.dataset.codeAction === "newline" ? "\n" : button.dataset.codeInsert);
    });
  }
  $("stop-btn").addEventListener("click", () => { cancelRun(); $("output").textContent = "Stopped. Your draft is still here."; });
  $("next-btn").addEventListener("click", nextExercise);
  $("next-block-btn").addEventListener("click", () => {
    const next = nextSection();
    if (next) enterSection(sections.indexOf(next), navigationMode === "flight" ? "flight" : next.kind === "project" ? "project" : "path", next.exercises[0].id);
  });
  $("previous-btn").addEventListener("click", () => { if (exerciseIndex > 0) { exerciseIndex--; openExercise(); } });
  $("answer-btn").addEventListener("click", () => {
    $("answer-box").textContent = currentExercise().answer;
    $("answer-box").hidden = !$("answer-box").hidden;
    $("answer-analysis").hidden = $("answer-box").hidden || !currentExercise().analysis;
    $("answer-btn").textContent = $("answer-box").hidden ? "Reveal solution" : "Hide solution";
    if (!$("answer-box").hidden) help().solution = true;
    persist();
  });
  $("project-guide").addEventListener("toggle", () => { if (inExercise && $("project-guide").open) { help().guide = true; persist(); } });
  $("algorithm-guide").addEventListener("toggle", () => { if (inExercise && $("algorithm-guide").open) { help().guide = true; persist(); } });
  $("hint-btn").addEventListener("click", () => {
    const hints = currentExercise().hints || []; if (hintIndex >= hints.length) return;
    const item = document.createElement("li"); item.textContent = hints[hintIndex++]; $("hints").appendChild(item);
    help().hints++; $("hint-btn").disabled = hintIndex >= hints.length;
    $("hint-btn").textContent = hintIndex >= hints.length ? "All hints shown" : "Show another hint"; persist();
  });
  $("export-project").addEventListener("click", () => {
    const exercise = {...currentExercise(), fixture:state.markupDrafts[currentKey()] ?? currentExercise().fixture};
    const code = editor.getValue();
    if (!exercise.dom) {
      const javascript = currentSection().language === "javascript";
      const content = javascript ? code + "\nexport { handleRequest };\n" : code;
      const url = URL.createObjectURL(new Blob([content], {type:javascript ? "text/javascript" : "text/x-python"}));
      const link = document.createElement("a"); link.href = url; link.download = javascript ? "routes.js" : "routes.py"; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000); return;
    }
    let page = code;
    if (!exercise.html) {
      const document = new DOMParser().parseFromString(exercise.fixture, "text/html");
      if (!document.querySelector('meta[charset]')) { const meta = document.createElement('meta'); meta.setAttribute('charset','utf-8'); document.head.append(meta); }
      if (!document.querySelector('meta[name=viewport]')) { const meta = document.createElement('meta'); meta.name = 'viewport'; meta.content = 'width=device-width,initial-scale=1'; document.head.append(meta); }
      if (!document.documentElement.lang) document.documentElement.lang = 'en';
      if (!document.title) document.title = 'My practice project';
      const script = document.createElement('script');
      script.textContent = (`const practiceStorage = localStorage;\n${code}\nsetupDOM(...${JSON.stringify(exercise.tests[0].args)});`).replace(/<\/script/gi, "<\\/script");
      document.body.append(script); page = '<!doctype html>\n' + document.documentElement.outerHTML;
    } else if (!/<html(?:\s|>)/i.test(code)) {
      page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>My practice page</title></head><body>${code}</body></html>`;
    }
    const url = URL.createObjectURL(new Blob([page], {type:"text/html"}));
    const link = document.createElement("a"); link.href = url; link.download = currentSection().id + ".html"; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $("cursor-left").addEventListener("click", () => editor.move(-1)); $("cursor-right").addEventListener("click", () => editor.move(1));
  $("clear-editor").addEventListener("click", () => replaceCode(""));
  $("restore-draft").addEventListener("click", () => { const previous = state.backups[currentKey()]; if (typeof previous === "string") { replaceCode(previous); help().starter = true; persist(); } });
  $("retry-blank").addEventListener("click", () => {
    replaceCode(""); $("project-guide").open = false; state.helpUsage[currentKey()] = { hints: 0, solution: false, starter: false };
    for (const detail of document.querySelectorAll("#support-panel details")) detail.open = false;
    $("hints").replaceChildren(); hintIndex = 0;
    $("hint-btn").disabled = false; $("hint-btn").textContent = "Show a hint";
    $("answer-box").hidden = true; $("answer-btn").textContent = "Reveal solution";
    $("answer-analysis").hidden = true;
    $("check-result").textContent = "Fresh attempt. Your previous draft is under Editor tools."; persist(); editor.focus();
  });
  $("load-snippet-btn").addEventListener("click", () => { if (!editor.getValue().trim()) { replaceCode(currentExercise().snippet || ""); help().starter = true; persist(); } });
  $("copy-snippet-btn").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(currentExercise().snippet); $("starter-note").textContent = "Starter copied."; help().starter = true; persist(); }
    catch { $("starter-note").textContent = "Clipboard unavailable. Select and copy the starter above."; }
  });
  $("back-to-home").addEventListener("click", () => { reviewOrigin = null; cancelRun(); inExercise = false; showExerciseUI(false); renderSectionCards(); window.scrollTo({ top: 0, behavior: "auto" }); });
  $("resume-flight").addEventListener("click", () => {
    const section = flightSections.find((s) => s.exercises.some((e) => e.id === state.lastFlight)) || flightSections[0];
    enterSection(sections.indexOf(section), "flight", state.lastFlight);
  });
  showExerciseUI(false); renderSectionCards(); persist(); prepareOffline();
});
