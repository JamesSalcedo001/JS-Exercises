import { sections } from "./exercises.js";

let sectionIndex = 0;
let exerciseIndex = 0;

function renderExercise() {
    const { title } = sections[sectionIndex];
    const { prompt } = sections[sectionIndex].exercises[exerciseIndex];

    document.getElementById("section-title").innerText = title;
    document.getElementById("question-text").innerText = prompt;
    document.getElementById("code-editor").value = "";
    document.getElementById("output").innerText = "";
    document.getElementById("answer-box").style.display = "none";
}


window.runCode = function () {
    const code = document.getElementById("code-editor")
}