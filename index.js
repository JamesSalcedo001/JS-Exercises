// import { sections } from "./exercises.js";

// let sectionIndex = 0;
// let exerciseIndex = 0;
// let editor;




// // Load Monaco and initialize editor
// window.addEventListener("load", () => {
//     if (window.require) {
//         window.require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' } });

//         window.require(['vs/editor/editor.main'], () => {
//             editor = monaco.editor.create(document.getElementById('code-editor'), {
//                 value: '',
//                 language: 'javascript',
//                 theme: 'vs-dark',
//                 automaticLayout: true,
//                 formatOnType: true,
//                 formatOnPaste: true,
//                 minimap: { enabled: false },
//                 wordWrap: 'on',
//                 lineNumbersMinChars: 2,
//                 padding: { top: 10, bottom: 10 },
//                 renderLineHighlight: 'none',
//                 cursorBlinking: "phase",
//                 cursorStyle: 'line',
//                 fontSize: 14,                
//             });

//             renderExercise();
//         });
//     }

//     // Register SW only in production
//     if ('serviceWorker' in navigator && location.hostname !== 'localhost') {
//         navigator.serviceWorker.register('./sw.js')
//             .then((reg) => console.log('✅ Service Worker registered:', reg.scope))
//             .catch((err) => console.error('❌ Service Worker registration failed:', err));
//     }
// });


// function renderExercise() {
//     const { title } = sections[sectionIndex];
//     const { prompt } = sections[sectionIndex].exercises[exerciseIndex];

//     document.getElementById("section-title").innerText = title;
//     document.getElementById("question-text").innerText = prompt;
//     // document.getElementById("code-editor").value = "";
//     document.getElementById("output").innerText = "";
//     document.getElementById("answer-box").style.display = "none";

//     if (editor) editor.setValue("");
// }


// function runCode() {
//     const code = editor.getValue();
//     // const code = document.getElementById("code-editor").value;
//     const outputDiv = document.getElementById("output");
//     const domOutputDiv = document.getElementById("dom-output");

//     let output = "";
//     domOutputDiv.innerHTML = "";
//     const originalLog = console.log;
//     console.log = function (...args) {
//         output += args.join(" ") + "\n";
//     };

//     try {
//         eval(code);
//         outputDiv.innerText = output || "[No Output]";
//     } catch (err) {
//         outputDiv.innerText = "Error:\n" + err.message;
//     }

//     console.log = originalLog;
// };


// function clearEditor() {
//     if (editor) editor.setValue('');
// }


// function moveCursor(direction) {
//   const pos = editor.getPosition();
//   if (!pos) return;

//   const newPos = {
//     lineNumber: pos.lineNumber,
//     column: Math.max(1, direction === "left" ? pos.column - 1 : pos.column + 1)
//   };

//   editor.setPosition(newPos);

//   const isTouch = navigator.maxTouchPoints > 0;

//   if (!isTouch) {
//     editor.focus();
//   }
// }



// function nextExercise() {
//     if (exerciseIndex < sections[sectionIndex].exercises.length - 1) {
//         exerciseIndex++;
//     } else if (sectionIndex < sections.length - 1) {
//         sectionIndex++;
//         exerciseIndex = 0;
//     } else {
//         alert("You've completed all sections!");
//         return;
//     }
//     renderExercise();
// }



// function toggleAnswer() {
//     const answer = sections[sectionIndex].exercises[exerciseIndex].answer;
//     const answerBox = document.getElementById("answer-box");
//     if (answerBox.style.display === "none") {
//         answerBox.innerText = "Answer:\n" + answer;
//         answerBox.style.display = "block";
//     } else {
//         answerBox.style.display = "none";
//     }
// };


// // attach event listeners after DOM loads
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("run-btn").addEventListener("click", runCode);
//     document.getElementById("next-btn").addEventListener("click", nextExercise);
//     document.getElementById("answer-btn").addEventListener("click", toggleAnswer);
//     document.getElementById("cursor-left").addEventListener("click", () => moveCursor("left"));
//     document.getElementById("cursor-right").addEventListener("click", () => moveCursor("right"));
//     document.getElementById("clear-editor").addEventListener("click", clearEditor);

// });



import { sections } from "./exercises.js";

let sectionIndex = 0;
let exerciseIndex = 0;
let editor;

let fakeCursorDecoration = [];
let editorIsFocused = true;

// Load Monaco and initialize editor
window.addEventListener("load", () => {
  if (window.require) {
    window.require.config({
      paths: {
        vs: "https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs",
      },
    });

    window.require(["vs/editor/editor.main"], () => {
      editor = monaco.editor.create(document.getElementById("code-editor"), {
        value: "",
        language: "javascript",
        theme: "vs-dark",
        automaticLayout: true,
        formatOnType: true,
        formatOnPaste: true,
        minimap: { enabled: false },
        wordWrap: "on",
        lineNumbersMinChars: 2,
        padding: { top: 10, bottom: 10 },
        renderLineHighlight: "none",
        cursorBlinking: "phase",
        cursorStyle: "line",
        fontSize: 14,
      });

      // Handle focus/blur to show fake cursor
      editor.onDidBlurEditorWidget(() => {
        editorIsFocused = false;
        showFakeCursor();
      });

      editor.onDidFocusEditorWidget(() => {
        editorIsFocused = true;
        clearFakeCursor();
      });

      renderExercise();
    });
  }

  // Register SW only in production
  if ("serviceWorker" in navigator && location.hostname !== "localhost") {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) =>
        console.log("✅ Service Worker registered:", reg.scope)
      )
      .catch((err) =>
        console.error("❌ Service Worker registration failed:", err)
      );
  }
});

function renderExercise() {
  const { title } = sections[sectionIndex];
  const { prompt } = sections[sectionIndex].exercises[exerciseIndex];

  document.getElementById("section-title").innerText = title;
  document.getElementById("question-text").innerText = prompt;
  document.getElementById("output").innerText = "";
  document.getElementById("answer-box").style.display = "none";

  if (editor) editor.setValue("");
}

function runCode() {
  const code = editor.getValue();
  const outputDiv = document.getElementById("output");
  const domOutputDiv = document.getElementById("dom-output");

  let output = "";
  domOutputDiv.innerHTML = "";
  const originalLog = console.log;
  console.log = function (...args) {
    output += args.join(" ") + "\n";
  };

  try {
    eval(code);
    outputDiv.innerText = output || "[No Output]";
  } catch (err) {
    outputDiv.innerText = "Error:\n" + err.message;
  }

  console.log = originalLog;
}

function clearEditor() {
  if (editor) editor.setValue("");
  showFakeCursor(); // keep fake cursor visible after clear
}

function moveCursor(direction) {
  const pos = editor.getPosition();
  if (!pos) return;

  const newPos = {
    lineNumber: pos.lineNumber,
    column:
      direction === "left"
        ? Math.max(1, pos.column - 1)
        : pos.column + 1,
  };

  editor.setPosition(newPos);

  const isTouch = navigator.maxTouchPoints > 0;

  // Only focus if not on mobile or if already focused
  if (!isTouch || editorIsFocused) {
    editor.focus();
  } else {
    showFakeCursor();
  }
}

function showFakeCursor() {
  const pos = editor.getPosition();
  if (!pos) return;

  fakeCursorDecoration = editor.deltaDecorations(fakeCursorDecoration, [
    {
      range: new monaco.Range(pos.lineNumber, pos.column, pos.lineNumber, pos.column),
      options: {
        className: "fake-cursor",
        stickiness: monaco.editor.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges,
      },
    },
  ]);
}

function clearFakeCursor() {
  fakeCursorDecoration = editor.deltaDecorations(fakeCursorDecoration, []);
}

function nextExercise() {
  if (exerciseIndex < sections[sectionIndex].exercises.length - 1) {
    exerciseIndex++;
  } else if (sectionIndex < sections.length - 1) {
    sectionIndex++;
    exerciseIndex = 0;
  } else {
    alert("You've completed all sections!");
    return;
  }
  renderExercise();
}

function toggleAnswer() {
  const answer = sections[sectionIndex].exercises[exerciseIndex].answer;
  const answerBox = document.getElementById("answer-box");
  if (answerBox.style.display === "none") {
    answerBox.innerText = "Answer:\n" + answer;
    answerBox.style.display = "block";
  } else {
    answerBox.style.display = "none";
  }
}

// Attach event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("run-btn").addEventListener("click", runCode);
  document
    .getElementById("next-btn")
    .addEventListener("click", nextExercise);
  document
    .getElementById("answer-btn")
    .addEventListener("click", toggleAnswer);
  document
    .getElementById("cursor-left")
    .addEventListener("click", () => moveCursor("left"));
  document
    .getElementById("cursor-right")
    .addEventListener("click", () => moveCursor("right"));
  document
    .getElementById("clear-editor")
    .addEventListener("click", clearEditor);
});
