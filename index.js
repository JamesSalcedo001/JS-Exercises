import { sections } from "./exercises.js";

let sectionIndex = 0;
let exerciseIndex = 0;
let editor;




// Load Monaco and initialize editor
window.addEventListener("load", () => {
    if (window.require) {
        window.require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/npm/monaco-editor@latest/min/vs' } });

        window.require(['vs/editor/editor.main'], () => {
            editor = monaco.editor.create(document.getElementById('code-editor'), {
                value: '',
                language: 'javascript',
                theme: 'vs-dark',
                automaticLayout: true,
                formatOnType: true,
                formatOnPaste: true,
                minimap: { enabled: false },
                wordWrap: 'on',
                lineNumbersMinChars: 2,
                padding: { top: 10, bottom: 10 },
                renderLineHighlight: 'none',
                cursorBlinking: "phase",
                cursorStyle: 'line',
                fontSize: 14,                
            });

            renderExercise();
        });
    }

    // Register SW only in production
    if ('serviceWorker' in navigator && location.hostname !== 'localhost') {
        navigator.serviceWorker.register('./sw.js')
            .then((reg) => console.log('✅ Service Worker registered:', reg.scope))
            .catch((err) => console.error('❌ Service Worker registration failed:', err));
    }
});


function renderExercise() {
    const { title } = sections[sectionIndex];
    const { prompt } = sections[sectionIndex].exercises[exerciseIndex];

    document.getElementById("section-title").innerText = title;
    document.getElementById("question-text").innerText = prompt;
    // document.getElementById("code-editor").value = "";
    document.getElementById("output").innerText = "";
    document.getElementById("answer-box").style.display = "none";

    if (editor) editor.setValue("");
}


function runCode() {
    const code = editor.getValue();
    // const code = document.getElementById("code-editor").value;
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
};


function clearEditor() {
    if (editor) editor.setValue('');
}


function moveCursor(direction) {
    const pos = editor.getPosition();
    if (!pos) return;

    const newPos = {
        lineNumber: pos.lineNumber,
        column: Math.max(1, direction === "left" ? pos.column - 1 : pos.column + 1)
    };

    editor.setPosition(newPos);
    editor.focus();

    if (!navigator.maxTouchPoints || navigator.maxTouchPoints === 0) {
    editor.focus();
  }
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
};


// attach event listeners after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("run-btn").addEventListener("click", runCode);
    document.getElementById("next-btn").addEventListener("click", nextExercise);
    document.getElementById("answer-btn").addEventListener("click", toggleAnswer);
    document.getElementById("cursor-left").addEventListener("click", () => moveCursor("left"));
    document.getElementById("cursor-right").addEventListener("click", () => moveCursor("right"));
    document.getElementById("clear-editor").addEventListener("click", clearEditor);

});
