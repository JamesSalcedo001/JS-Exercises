import { sections } from "./exercises.js";

let sectionIndex = 0;
let exerciseIndex = 0;
let monacoEditor;


function renderExercise() {
    const { title } = sections[sectionIndex];
    const { prompt } = sections[sectionIndex].exercises[exerciseIndex];

    document.getElementById("section-title").innerText = title;
    document.getElementById("question-text").innerText = prompt;
    document.getElementById("code-editor").value = "";
    document.getElementById("output").innerText = "";
    document.getElementById("answer-box").style.display = "none";

    if (monacoEditor) {
        monacoEditor.setValue("");
    }
}


function runCode() {
    const code = monacoEditor.getValue();
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

    require.config({ paths: { vs: "https://unpkg.com/monaco-editor@latest/min/vs" } });
    require(["vs/editor/editor.main"], function () {
        monacoEditor = monaco.editor.create(document.getElementById("editor"), {
            value: "// Write your code here...\n",
            language: "javascript",
            theme: "vs-dark",
            automaticLayout: true,
            fontSize: 14,
            wordWrap: "on",
            formatOnType: true,
            autoClosingBrackets: "always",
            tabSize: 2,
        });

        renderExercise();
    })

    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then((reg) => {
                    console.log('✅ Service Worker registered:', reg.scope);
                })
                .catch((err) => {
                    console.error('❌ Service Worker registration failed:', err);
                });
        });
    }
});
