export const domSections = [
  {
    "id": "practical-js-13",
    "title": "JavaScript 13 \u00b7 Build a page with DOM",
    "language": "javascript",
    "stage": 13,
    "level": "Browser practice",
    "description": "A heading, a list, events, then a tiny CRUD app.",
    "exercises": [
      {
        "id": "dom-heading",
        "title": "Change one heading",
        "prompt": "Set the heading text to \"Ready to practice\". Use textContent. Write setupDOM(). The page fixture is in Examples.",
        "signature": "setupDOM()",
        "functionName": "setupDOM",
        "dom": true,
        "fixture": "<h2 id=\"heading\">Tasks</h2><form id=\"task-form\"><input id=\"task-title\" aria-label=\"Task title\"><button>Add</button></form><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "tests": [
          {
            "args": [],
            "actions": [],
            "expected": {
              "heading": "Ready to practice"
            }
          }
        ],
        "snippet": "function setupDOM() {\n  // Work with the page here.\n}",
        "answer": "function setupDOM() {\n  document.querySelector(\"#heading\").textContent = \"Ready to practice\";\n}",
        "lesson": "Tool to try: querySelector + textContent. Run shows your page. Check tests starts with a fresh page for every case and tries clicks or form submissions.",
        "constraints": [
          "DOM exercises change the page; they do not need a return value.",
          "Fixture: #heading, #task-form, #task-title, #tasks (ul), #count.",
          "Use textContent for user text. The preview is separate from the practice app."
        ],
        "hints": [
          "Find the element you need with querySelector.",
          "Try one small change first. For a click or submit, register an event listener.",
          "Use createElement for each new row. Keep the row in a variable so its buttons can change or remove it."
        ],
        "stretch": "Use Run and try the page yourself. Explain which event changes which element."
      },
      {
        "id": "dom-render",
        "title": "Show task titles",
        "prompt": "Show one li inside #tasks for each title. Use textContent so a title like <b>Read</b> stays plain text. Clear old items before rendering. Write setupDOM(titles). The page fixture is in Examples.",
        "signature": "setupDOM(titles)",
        "functionName": "setupDOM",
        "dom": true,
        "fixture": "<h2 id=\"heading\">Tasks</h2><form id=\"task-form\"><input id=\"task-title\" aria-label=\"Task title\"><button>Add</button></form><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "tests": [
          {
            "args": [
              [
                "Read",
                "Code"
              ]
            ],
            "actions": [],
            "expected": {
              "titles": [
                "Read",
                "Code"
              ]
            }
          },
          {
            "args": [
              []
            ],
            "actions": [],
            "expected": {
              "titles": []
            }
          },
          {
            "args": [
              [
                "<b>Read</b>"
              ]
            ],
            "actions": [],
            "expected": {
              "titles": [
                "<b>Read</b>"
              ],
              "markup": false
            }
          }
        ],
        "snippet": "function setupDOM(titles) {\n  // Work with the page here.\n}",
        "answer": "function setupDOM(titles) {\n  const list = document.querySelector(\"#tasks\"); list.replaceChildren(); for (const title of titles) { const li = document.createElement(\"li\"); li.textContent = title; list.append(li); }\n}",
        "lesson": "Tool to try: createElement + textContent + append. Run shows your page. Check tests starts with a fresh page for every case and tries clicks or form submissions.",
        "constraints": [
          "DOM exercises change the page; they do not need a return value.",
          "Fixture: #heading, #task-form, #task-title, #tasks (ul), #count.",
          "Use textContent for user text. The preview is separate from the practice app."
        ],
        "hints": [
          "Find the element you need with querySelector.",
          "Try one small change first. For a click or submit, register an event listener.",
          "Use createElement for each new row. Keep the row in a variable so its buttons can change or remove it."
        ],
        "stretch": "Use Run and try the page yourself. Explain which event changes which element."
      },
      {
        "id": "dom-add",
        "title": "Add a task from a form",
        "prompt": "When #task-form is submitted, prevent the page reload. Trim #task-title. Add a new li only if the title is not blank. Clear the input after adding. Write setupDOM(). The page fixture is in Examples.",
        "signature": "setupDOM()",
        "functionName": "setupDOM",
        "dom": true,
        "fixture": "<h2 id=\"heading\">Tasks</h2><form id=\"task-form\"><input id=\"task-title\" aria-label=\"Task title\"><button>Add</button></form><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "tests": [
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": " Read "
              }
            ],
            "expected": {
              "titles": [
                "Read"
              ],
              "input": "",
              "prevented": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": " "
              }
            ],
            "expected": {
              "titles": [],
              "prevented": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "A"
              },
              {
                "type": "submit",
                "value": "B"
              }
            ],
            "expected": {
              "titles": [
                "A",
                "B"
              ],
              "input": "",
              "prevented": true
            }
          }
        ],
        "snippet": "function setupDOM() {\n  // Work with the page here.\n}",
        "answer": "function setupDOM() {\n  document.querySelector(\"#task-form\").addEventListener(\"submit\", event => { event.preventDefault(); const input = document.querySelector(\"#task-title\"); const title = input.value.trim(); if (!title) return; const li = document.createElement(\"li\"); li.textContent = title; document.querySelector(\"#tasks\").append(li); input.value = \"\"; });\n}",
        "lesson": "Tool to try: addEventListener + preventDefault + trim. Run shows your page. Check tests starts with a fresh page for every case and tries clicks or form submissions.",
        "constraints": [
          "DOM exercises change the page; they do not need a return value.",
          "Fixture: #heading, #task-form, #task-title, #tasks (ul), #count.",
          "Use textContent for user text. The preview is separate from the practice app."
        ],
        "hints": [
          "Find the element you need with querySelector.",
          "Try one small change first. For a click or submit, register an event listener.",
          "Use createElement for each new row. Keep the row in a variable so its buttons can change or remove it."
        ],
        "stretch": "Use Run and try the page yourself. Explain which event changes which element."
      },
      {
        "id": "dom-toggle",
        "title": "Mark a task done",
        "prompt": "Render each title as an li. Clicking a task toggles the CSS class done on that li. Clicking twice removes it. Write setupDOM(titles). The page fixture is in Examples.",
        "signature": "setupDOM(titles)",
        "functionName": "setupDOM",
        "dom": true,
        "fixture": "<h2 id=\"heading\">Tasks</h2><form id=\"task-form\"><input id=\"task-title\" aria-label=\"Task title\"><button>Add</button></form><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "tests": [
          {
            "args": [
              [
                "Read",
                "Code"
              ]
            ],
            "actions": [
              {
                "type": "click",
                "selector": "li",
                "index": 0
              }
            ],
            "expected": {
              "titles": [
                "Read",
                "Code"
              ],
              "done": [
                true,
                false
              ]
            }
          },
          {
            "args": [
              [
                "Read"
              ]
            ],
            "actions": [
              {
                "type": "click",
                "selector": "li",
                "index": 0
              },
              {
                "type": "click",
                "selector": "li",
                "index": 0
              }
            ],
            "expected": {
              "done": [
                false
              ]
            }
          }
        ],
        "snippet": "function setupDOM(titles) {\n  // Work with the page here.\n}",
        "answer": "function setupDOM(titles) {\n  const list = document.querySelector(\"#tasks\"); list.replaceChildren(); for (const title of titles) { const li = document.createElement(\"li\"); li.textContent = title; li.addEventListener(\"click\", () => li.classList.toggle(\"done\")); list.append(li); }\n}",
        "lesson": "Tool to try: addEventListener + classList.toggle. Run shows your page. Check tests starts with a fresh page for every case and tries clicks or form submissions.",
        "constraints": [
          "DOM exercises change the page; they do not need a return value.",
          "Fixture: #heading, #task-form, #task-title, #tasks (ul), #count.",
          "Use textContent for user text. The preview is separate from the practice app."
        ],
        "hints": [
          "Find the element you need with querySelector.",
          "Try one small change first. For a click or submit, register an event listener.",
          "Use createElement for each new row. Keep the row in a variable so its buttons can change or remove it."
        ],
        "stretch": "Use Run and try the page yourself. Explain which event changes which element."
      },
      {
        "id": "dom-remove",
        "title": "Delete a task with a button",
        "prompt": "Render each title in an li with a span for the title and a button labeled Delete. Clicking Delete removes only its own li. Write setupDOM(titles). The page fixture is in Examples.",
        "signature": "setupDOM(titles)",
        "functionName": "setupDOM",
        "dom": true,
        "fixture": "<h2 id=\"heading\">Tasks</h2><form id=\"task-form\"><input id=\"task-title\" aria-label=\"Task title\"><button>Add</button></form><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "tests": [
          {
            "args": [
              [
                "Read",
                "Code"
              ]
            ],
            "actions": [
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              }
            ],
            "expected": {
              "labels": [
                "Code"
              ],
              "buttons": [
                "Delete"
              ]
            }
          },
          {
            "args": [
              [
                "Read"
              ]
            ],
            "actions": [
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              }
            ],
            "expected": {
              "labels": [],
              "buttons": []
            }
          }
        ],
        "snippet": "function setupDOM(titles) {\n  // Work with the page here.\n}",
        "answer": "function setupDOM(titles) {\n  const list = document.querySelector(\"#tasks\"); list.replaceChildren(); for (const title of titles) { const li = document.createElement(\"li\"); const span = document.createElement(\"span\"); span.textContent = title; const button = document.createElement(\"button\"); button.textContent = \"Delete\"; button.addEventListener(\"click\", () => li.remove()); li.append(span, button); list.append(li); }\n}",
        "lesson": "Tool to try: createElement + addEventListener + remove. Run shows your page. Check tests starts with a fresh page for every case and tries clicks or form submissions.",
        "constraints": [
          "DOM exercises change the page; they do not need a return value.",
          "Fixture: #heading, #task-form, #task-title, #tasks (ul), #count.",
          "Use textContent for user text. The preview is separate from the practice app."
        ],
        "hints": [
          "Find the element you need with querySelector.",
          "Try one small change first. For a click or submit, register an event listener.",
          "Use createElement for each new row. Keep the row in a variable so its buttons can change or remove it."
        ],
        "stretch": "Use Run and try the page yourself. Explain which event changes which element."
      },
      {
        "id": "dom-crud",
        "title": "Build a tiny task app",
        "prompt": "Wire up the form to create tasks. Show each title in an li span, plus Rename and Delete buttons. Clicking a title toggles done. Rename reads the current input, trims it, and changes only that title if nonblank. Delete removes its row. After every create or delete, #count shows \"Tasks: N\". Keep all titles as plain text. Write setupDOM(). The page fixture is in Examples.",
        "signature": "setupDOM()",
        "functionName": "setupDOM",
        "dom": true,
        "fixture": "<h2 id=\"heading\">Tasks</h2><form id=\"task-form\"><input id=\"task-title\" aria-label=\"Task title\"><button>Add</button></form><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "tests": [
          {
            "args": [],
            "actions": [],
            "expected": {
              "count": "Tasks: 0",
              "labels": []
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": " Read "
              },
              {
                "type": "submit",
                "value": "Code"
              },
              {
                "type": "click",
                "selector": "li span",
                "index": 0
              },
              {
                "type": "input",
                "value": " Study "
              },
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              },
              {
                "type": "click",
                "selector": "li button",
                "index": 3
              }
            ],
            "expected": {
              "labels": [
                "Study"
              ],
              "done": [
                true
              ],
              "count": "Tasks: 1",
              "input": "",
              "prevented": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "<b>Read</b>"
              },
              {
                "type": "input",
                "value": " "
              },
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              }
            ],
            "expected": {
              "labels": [
                "<b>Read</b>"
              ],
              "markup": false,
              "count": "Tasks: 1"
            }
          }
        ],
        "snippet": "function setupDOM() {\n  // Work with the page here.\n}",
        "answer": "function setupDOM() {\n  const list = document.querySelector(\"#tasks\"); const input = document.querySelector(\"#task-title\"); const count = () => { document.querySelector(\"#count\").textContent = `Tasks: ${list.children.length}`; }; count(); document.querySelector(\"#task-form\").addEventListener(\"submit\", event => { event.preventDefault(); const title = input.value.trim(); if (!title) return; const li = document.createElement(\"li\"); const span = document.createElement(\"span\"); span.textContent = title; span.addEventListener(\"click\", () => li.classList.toggle(\"done\")); const rename = document.createElement(\"button\"); rename.textContent = \"Rename\"; rename.addEventListener(\"click\", () => { if (input.value.trim()) { span.textContent = input.value.trim(); input.value = \"\"; } }); const remove = document.createElement(\"button\"); remove.textContent = \"Delete\"; remove.addEventListener(\"click\", () => { li.remove(); count(); }); li.append(span, rename, remove); list.append(li); input.value = \"\"; count(); });\n}",
        "lesson": "Tool to try: combine form events + DOM CRUD. Run shows your page. Check tests starts with a fresh page for every case and tries clicks or form submissions.",
        "constraints": [
          "DOM exercises change the page; they do not need a return value.",
          "Fixture: #heading, #task-form, #task-title, #tasks (ul), #count.",
          "Use textContent for user text. The preview is separate from the practice app."
        ],
        "hints": [
          "Find the element you need with querySelector.",
          "Try one small change first. For a click or submit, register an event listener.",
          "Use createElement for each new row. Keep the row in a variable so its buttons can change or remove it."
        ],
        "stretch": "Use Run and try the page yourself. Explain which event changes which element."
      }
    ]
  }
];
