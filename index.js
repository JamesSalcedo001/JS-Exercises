import { sections } from "./sections.js";
import { createEditor } from "./editor.js";

const $ = (id) => document.getElementById(id);
const flightSections = sections.filter((section) => section.id?.startsWith("flight-"));
const storageKey = "daily-coding-practice-v1";
let state = { drafts: {}, completed: {}, positions: {}, lastFlight: null };
let storageAvailable = true;
try {
  const saved = JSON.parse(localStorage.getItem(storageKey));
  if (saved && typeof saved === "object") {
    for (const key of ["drafts", "completed", "positions"]) {
      if (saved[key] && typeof saved[key] === "object" && !Array.isArray(saved[key])) state[key] = saved[key];
    }
    state.lastFlight = typeof saved.lastFlight === "string" ? saved.lastFlight : null;
  }
} catch { storageAvailable = false; }
let sectionIndex = 0;
let exerciseIndex = 0;
let inExercise = false;
let editor;
let hintIndex = 0;
let activeRun;
const currentSection = () => sections[sectionIndex];
const currentExercise = () => currentSection().exercises[exerciseIndex];
const currentKey = () => currentExercise().id || `legacy:${sectionIndex}:${exerciseIndex}`;
const isFlight = () => Boolean(currentExercise().id);

function persist() {
  try { localStorage.setItem(storageKey, JSON.stringify(state)); storageAvailable = true; }
  catch { storageAvailable = false; }
  $("save-status").textContent = storageAvailable
    ? "Drafts and output-check progress save in this browser on this device."
    : "Browser storage is unavailable or full. Your latest edits may not be saved; copy your code before closing.";
}
function busy(value) {
  $("run-btn").disabled = value;
  $("check-btn").disabled = value;
  $("stop-btn").hidden = !value;
}
function cancelRun() { if (activeRun) activeRun.finish(null); }
function updateProgress() {
  const total = flightSections.reduce((n, section) => n + section.exercises.length, 0);
  const done = flightSections.reduce((n, section) => n + section.exercises.filter((e) => state.completed[e.id]).length, 0);
  $("flight-progress").textContent = `${done} of ${total} activity outputs checked · 220 minutes of practice + 20 minutes of breaks/review`;
  $("resume-flight").textContent = state.lastFlight ? "Resume flight practice" : "Start flight practice";
}
function renderSectionCards() {
  $("section-list").replaceChildren();
  $("flight-section-list").replaceChildren();
  sections.forEach((section, index) => {
    const card = document.createElement("button");
    card.className = "section-card";
    const label = document.createElement("strong");
    label.textContent = section.title;
    card.appendChild(label);
    const detail = document.createElement("span");
    if (section.id) {
      const done = section.exercises.filter((e) => state.completed[e.id]).length;
      detail.textContent = `${section.minutes} min · ${done}/${section.exercises.length} checked\n${section.description}`;
    } else detail.textContent = `${section.exercises.length} exercises`;
    card.appendChild(detail);
    card.addEventListener("click", () => {
      sectionIndex = index;
      const position = state.positions[section.id || `legacy:${index}`];
      exerciseIndex = Number.isInteger(position) && position >= 0 && position < section.exercises.length ? position : 0;
      openExercise();
    });
    $(section.id ? "flight-section-list" : "section-list").appendChild(card);
  });
  updateProgress();
}
function showExerciseUI(show) {
  $("home-wrapper").hidden = show;
  $("home-wrapper").style.display = show ? "none" : "flex";
  for (const id of ["section-title", "exercise-progress", "question-text", "code-editor", "editor-status", "save-status", "output", "dom-output", "touch-controls", "back-to-home", "check-result"]) {
    $(id).style.display = show ? (id === "touch-controls" ? "flex" : "block") : "none";
  }
  document.querySelector(".button-row").style.display = show ? "flex" : "none";
  $("learning-panel").hidden = !show || !isFlight();
  if (!show) $("answer-box").style.display = "none";
}
function openExercise() {
  cancelRun();
  inExercise = true;
  showExerciseUI(true);
  renderExercise();
}
function renderExercise() {
  const section = currentSection();
  const exercise = currentExercise();
  $("section-title").textContent = section.title;
  $("exercise-progress").textContent = `Exercise ${exerciseIndex + 1} of ${section.exercises.length}${exercise.minutes ? ` · about ${exercise.minutes} min · ${section.language === "python" ? "Python" : "JavaScript"}` : ""}${state.completed[currentKey()] ? " · output checked ✓" : ""}`;
  $("question-text").textContent = exercise.title ? `${exercise.title}\n\n${exercise.prompt}` : exercise.prompt;
  $("output").textContent = "";
  $("dom-output").replaceChildren();
  $("answer-box").style.display = "none";
  $("check-result").textContent = "";
  $("copy-snippet-btn").style.display = exercise.snippet ? "inline-flex" : "none";
  $("check-btn").hidden = !isFlight();
  $("learning-panel").hidden = !isFlight();
  $("lesson").textContent = exercise.lesson || "";
  $("expected-output").textContent = exercise.expected || "";
  $("stretch").textContent = exercise.stretch ? `Try another input: ${exercise.stretch}` : "";
  $("hints").replaceChildren();
  hintIndex = 0;
  $("hint-btn").disabled = false;
  $("hint-btn").textContent = "Show a hint";
  $("previous-btn").disabled = exerciseIndex === 0;
  $("next-btn").disabled = Boolean(section.id) && exerciseIndex === section.exercises.length - 1;
  const blockFinished = Boolean(section.id) && exerciseIndex === section.exercises.length - 1;
  $("next-block-btn").hidden = !blockFinished || sectionIndex === sections.length - 1;
  $("block-note").textContent = !blockFinished ? "" : section.id === "flight-js-project"
    ? "Last JavaScript activity. Take a 10-minute break before the Python blocks."
    : section.id === "flight-py-project"
      ? "Last Python activity. Spend the final 10 minutes rewriting a helper without hints and noting what to practice next."
      : "Last activity in this block. When you are ready, continue to the next block or return home to choose one.";
  editor.setLanguage(section.language || "javascript");
  const draft = state.drafts[currentKey()];
  editor.setValue(typeof draft === "string" ? draft : (isFlight() ? exercise.snippet || "" : ""));
  state.positions[section.id || `legacy:${sectionIndex}`] = exerciseIndex;
  if (isFlight()) state.lastFlight = exercise.id;
  persist();
}
function executeWorker(code, language) {
  return new Promise((resolve) => {
    let worker;
    try { worker = new Worker(new URL("./practice-worker.js", import.meta.url)); }
    catch (error) { resolve({ output: "", error: String(error) }); return; }
    const run = { worker, timer: null, finish(result) {
      clearTimeout(run.timer);
      worker.terminate();
      if (activeRun === run) { activeRun = null; busy(false); }
      resolve(result);
    } };
    activeRun = run;
    busy(true);
    run.timer = setTimeout(() => run.finish({ output: "", error: "Stopped after 5 seconds. Check the loop condition and try a smaller input." }), 5000);
    worker.onmessage = ({ data }) => run.finish(data);
    worker.onerror = (event) => run.finish({ output: "", error: event.message || "Could not start the local runtime. Reload while online to prepare offline files." });
    worker.postMessage({ code, language });
  });
}
async function runCode(check = false) {
  const key = currentKey();
  const code = editor.getValue();
  $("dom-output").replaceChildren();
  $("check-result").textContent = "";
  let result;
  if (isFlight()) {
    $("output").textContent = "Running…";
    result = await executeWorker(code, currentSection().language);
    if (!result || !inExercise || currentKey() !== key) return;
  } else {
    // Preserve page-context execution for the original library's DOM exercises.
    let output = "";
    const originalLog = console.log;
    console.log = (...args) => { output += args.join(" ") + "\n"; };
    try { eval(code); result = { output }; }
    catch (error) { result = { output, error: error.message }; }
    finally { console.log = originalLog; }
  }
  $("output").textContent = result.error ? `${result.output || ""}Error:\n${result.error}` : result.output || "[No Output]";
  if (check) {
    const normalize = (text) => String(text).replace(/\r\n/g, "\n").trimEnd();
    const passed = !result.error && normalize(result.output) === normalize(currentExercise().expected);
    state.completed[key] = passed;
    $("check-result").textContent = passed
      ? "Output matches ✓ Now try the extra input and explain your approach before moving on."
      : "Not a match yet. Compare the expected output, check the error if shown, and try a hint.";
    persist();
    updateProgress();
    $("exercise-progress").textContent = `Exercise ${exerciseIndex + 1} of ${currentSection().exercises.length} · about ${currentExercise().minutes} min${passed ? " · output checked ✓" : ""}`;
  }
}
function nextExercise() {
  if (exerciseIndex < currentSection().exercises.length - 1) exerciseIndex++;
  else if (!currentSection().id && sectionIndex < 4) { sectionIndex++; exerciseIndex = 0; }
  else { $("check-result").textContent = "Section complete. Return home to choose the next block or take a break."; return; }
  openExercise();
}
async function prepareOffline() {
  const status = $("offline-status");
  if (!("serviceWorker" in navigator) || !window.isSecureContext) {
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
    status.textContent = ready
      ? "Offline ready · JavaScript and Python saved. Before boarding, switch to airplane mode and reload this same address to check."
      : "Offline files are not fully saved yet. Reopen while online and wait for Offline ready.";
  } catch {
    status.textContent = "Offline preparation failed. Keep this tab open; reconnect and reload before your flight.";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  editor = createEditor($("code-editor"), (value) => {
    if (!inExercise) return;
    state.drafts[currentKey()] = value;
    $("check-result").textContent = "";
    persist();
  });
  $("run-btn").addEventListener("click", () => runCode());
  $("check-btn").addEventListener("click", () => runCode(true));
  $("stop-btn").addEventListener("click", () => { cancelRun(); $("output").textContent = "Stopped. Your draft is still here."; });
  $("next-btn").addEventListener("click", nextExercise);
  $("next-block-btn").addEventListener("click", () => {
    if (isFlight() && sectionIndex < sections.length - 1) { sectionIndex++; exerciseIndex = 0; openExercise(); }
  });
  $("previous-btn").addEventListener("click", () => { if (exerciseIndex > 0) { exerciseIndex--; openExercise(); } });
  $("answer-btn").addEventListener("click", () => {
    $("answer-box").textContent = "One possible answer:\n" + currentExercise().answer;
    $("answer-box").style.display = $("answer-box").style.display === "none" ? "block" : "none";
  });
  $("hint-btn").addEventListener("click", () => {
    const hints = currentExercise().hints || [];
    if (hintIndex >= hints.length) return;
    const item = document.createElement("li");
    item.textContent = hints[hintIndex++];
    $("hints").appendChild(item);
    $("hint-btn").disabled = hintIndex >= hints.length;
    $("hint-btn").textContent = hintIndex >= hints.length ? "All hints shown" : "Show another hint";
  });
  $("cursor-left").addEventListener("click", () => editor.move(-1));
  $("cursor-right").addEventListener("click", () => editor.move(1));
  $("clear-editor").addEventListener("click", () => { editor.setValue(""); state.drafts[currentKey()] = ""; persist(); });
  $("copy-snippet-btn").addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(currentExercise().snippet); $("check-result").textContent = "Starter snippet copied."; }
    catch { $("check-result").textContent = "Clipboard unavailable. Starter snippet:\n" + currentExercise().snippet; }
  });
  $("back-to-home").addEventListener("click", () => {
    cancelRun(); inExercise = false; showExerciseUI(false); renderSectionCards();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  $("resume-flight").addEventListener("click", () => {
    sectionIndex = sections.findIndex((s) => s.exercises.some((e) => e.id === state.lastFlight));
    if (sectionIndex < 0) sectionIndex = sections.indexOf(flightSections[0]);
    exerciseIndex = Math.max(0, currentSection().exercises.findIndex((e) => e.id === state.lastFlight));
    openExercise();
  });
  showExerciseUI(false);
  renderSectionCards();
  persist();
  prepareOffline();
});
