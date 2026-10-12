// Guided build → debugging → independent challenge. Project IDs are stable saved-work keys.
export const projectSections = [
  {
    "id": "project-profile",
    "title": "1 · Responsive profile page",
    "language": "javascript",
    "kind": "project",
    "projectOrder": 1,
    "description": "HTML, CSS, and a responsive layout. Then build a variation.",
    "level": "Project",
    "exercises": [
      {
        "id": "project-profile-structure",
        "title": "Build one profile card",
        "prompt": "Write HTML and CSS for a profile card: a main area, one article.profile, your name in h1, a short description, two skills in a list, and a labeled email link. Start with the HTML; style it afterward.",
        "answer": "<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; }</style>\n<main>\n  <article class=\"profile\">\n    <h1>Sam Lee</h1>\n    <p>Learning web development, one small project at a time.</p>\n    <ul><li>JavaScript</li><li>Python</li></ul>\n    <a href=\"mailto:sam@example.com\">Contact Sam</a>\n  </article>\n</main>",
        "tests": [
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "A main landmark",
                "kind": "exists",
                "selector": "main"
              },
              {
                "label": "One page heading",
                "kind": "count",
                "selector": "h1",
                "value": 1
              },
              {
                "label": "A profile card",
                "kind": "exists",
                "selector": "article.profile"
              },
              {
                "label": "A named heading",
                "kind": "nonempty",
                "selector": "h1"
              },
              {
                "label": "Two skills",
                "kind": "count",
                "selector": "article li",
                "value": 2
              },
              {
                "label": "Contact uses email",
                "kind": "attributePrefix",
                "selector": "article a",
                "attribute": "href",
                "value": "mailto:"
              },
              {
                "label": "Contact has a readable label",
                "kind": "nonempty",
                "selector": "article a"
              },
              {
                "label": "Fits without horizontal scrolling",
                "kind": "noOverflow",
                "selector": ""
              }
            ],
            "expected": {
              "A main landmark": true,
              "One page heading": true,
              "A profile card": true,
              "A named heading": true,
              "Two skills": true,
              "Contact uses email": true,
              "Contact has a readable label": true,
              "Fits without horizontal scrolling": true
            },
            "width": 320
          }
        ],
        "mode": "guided",
        "guide": [
          "Put the content inside <main>. A card is <article class=\"profile\">...</article>; class gives CSS a name to select.",
          "A heading looks like <h1>Sam</h1>. Add a <p> description, a <ul> with two <li> skills, and <a href=\"mailto:sam@example.com\">Contact Sam</a>.",
          "Inside <style>, try article { padding: 16px; border: 1px solid #ccc; }. Padding is inside space; margin is outside space."
        ],
        "html": true,
        "dom": true,
        "fixture": "",
        "functionName": "",
        "signature": "",
        "snippet": "<main>\n  <article class=\"profile\">\n    <!-- Add your name, description, skills, and contact link. -->\n  </article>\n</main>\n<style>\n  /* Start with readable text and padding. */\n</style>",
        "lesson": "HTML gives content meaning; CSS controls its appearance. Use real headings and links so keyboard and screen-reader users can understand the page.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Predict what changes when you increase padding. Try it. Explain the difference between padding and margin.",
        "preserveInput": false
      },
      {
        "id": "project-profile-layout",
        "title": "Make the layout fit a phone",
        "prompt": "Build a page with one h1 and two article.profile cards inside .profiles. Each card needs h2 and an email link. At 640px the cards sit side by side; at 320px they stack. Keep the page free of horizontal scrolling.",
        "answer": "<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; } .profiles, .products { display: grid; gap: 16px; grid-template-columns: 1fr; } @media (min-width: 600px) { .profiles, .products { grid-template-columns: repeat(2, minmax(0, 1fr)); } }</style>\n<main>\n  <h1>Meet the learners</h1>\n  <div class=\"profiles\">\n    <article class=\"profile\"><h2>Sam Lee</h2><p>Learning JavaScript</p><a href=\"mailto:sam@example.com\">Contact Sam</a></article>\n    <article class=\"profile\"><h2>Ada Ray</h2><p>Learning Python</p><a href=\"mailto:ada@example.com\">Contact Ada</a></article>\n  </div>\n</main>",
        "tests": [
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "A main landmark",
                "kind": "exists",
                "selector": "main"
              },
              {
                "label": "One page heading",
                "kind": "count",
                "selector": "h1",
                "value": 1
              },
              {
                "label": "Two profile cards",
                "kind": "count",
                "selector": "article.profile",
                "value": 2
              },
              {
                "label": "Each card has a heading",
                "kind": "count",
                "selector": "article h2",
                "value": 2
              },
              {
                "label": "Contact links",
                "kind": "count",
                "selector": "article a[href^=\"mailto:\"]",
                "value": 2
              },
              {
                "label": "Fits without horizontal scrolling",
                "kind": "noOverflow",
                "selector": ""
              },
              {
                "label": "Cards are next to each other",
                "kind": "sideBySide",
                "selector": "article.profile"
              }
            ],
            "expected": {
              "A main landmark": true,
              "One page heading": true,
              "Two profile cards": true,
              "Each card has a heading": true,
              "Contact links": true,
              "Fits without horizontal scrolling": true,
              "Cards are next to each other": true
            },
            "width": 640
          },
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "A main landmark",
                "kind": "exists",
                "selector": "main"
              },
              {
                "label": "One page heading",
                "kind": "count",
                "selector": "h1",
                "value": 1
              },
              {
                "label": "Two profile cards",
                "kind": "count",
                "selector": "article.profile",
                "value": 2
              },
              {
                "label": "Each card has a heading",
                "kind": "count",
                "selector": "article h2",
                "value": 2
              },
              {
                "label": "Contact links",
                "kind": "count",
                "selector": "article a[href^=\"mailto:\"]",
                "value": 2
              },
              {
                "label": "Fits without horizontal scrolling",
                "kind": "noOverflow",
                "selector": ""
              },
              {
                "label": "Cards stack on a phone",
                "kind": "stacked",
                "selector": "article.profile"
              }
            ],
            "expected": {
              "A main landmark": true,
              "One page heading": true,
              "Two profile cards": true,
              "Each card has a heading": true,
              "Contact links": true,
              "Fits without horizontal scrolling": true,
              "Cards stack on a phone": true
            },
            "width": 320
          }
        ],
        "mode": "guided",
        "guide": [
          "Keep one h1 for the page; use h2 for each card. Wrap both cards in .profiles.",
          "Use display: grid and gap: 16px. Begin with one column.",
          "Inside @media (min-width: 600px), use two equal columns: repeat(2, minmax(0, 1fr))."
        ],
        "html": true,
        "dom": true,
        "fixture": "",
        "functionName": "",
        "signature": "",
        "snippet": "<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; }</style>\n<main>\n  <article class=\"profile\">\n    <h1>Sam Lee</h1>\n    <p>Learning web development, one small project at a time.</p>\n    <ul><li>JavaScript</li><li>Python</li></ul>\n    <a href=\"mailto:sam@example.com\">Contact Sam</a>\n  </article>\n</main>",
        "lesson": "Start with a phone layout. Add a wider layout only when there is room. A fixed width like 900px will not fit a phone.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false
      },
      {
        "id": "project-profile-debug",
        "title": "Fix the overflowing layout",
        "prompt": "This page is too wide on a phone. Load the broken starter, predict why it overflows, and fix it. Keep two profile cards with headings and email links. They must stack at 320px and sit side by side at 640px.",
        "answer": "<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; } .profiles, .products { display: grid; gap: 16px; grid-template-columns: 1fr; } @media (min-width: 600px) { .profiles, .products { grid-template-columns: repeat(2, minmax(0, 1fr)); } }</style>\n<main>\n  <h1>Meet the learners</h1>\n  <div class=\"profiles\">\n    <article class=\"profile\"><h2>Sam Lee</h2><p>Learning JavaScript</p><a href=\"mailto:sam@example.com\">Contact Sam</a></article>\n    <article class=\"profile\"><h2>Ada Ray</h2><p>Learning Python</p><a href=\"mailto:ada@example.com\">Contact Ada</a></article>\n  </div>\n</main>",
        "tests": [
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "A main landmark",
                "kind": "exists",
                "selector": "main"
              },
              {
                "label": "One page heading",
                "kind": "count",
                "selector": "h1",
                "value": 1
              },
              {
                "label": "Two profile cards",
                "kind": "count",
                "selector": "article.profile",
                "value": 2
              },
              {
                "label": "Each card has a heading",
                "kind": "count",
                "selector": "article h2",
                "value": 2
              },
              {
                "label": "Contact links",
                "kind": "count",
                "selector": "article a[href^=\"mailto:\"]",
                "value": 2
              },
              {
                "label": "Fits without horizontal scrolling",
                "kind": "noOverflow",
                "selector": ""
              },
              {
                "label": "Cards are next to each other",
                "kind": "sideBySide",
                "selector": "article.profile"
              }
            ],
            "expected": {
              "A main landmark": true,
              "One page heading": true,
              "Two profile cards": true,
              "Each card has a heading": true,
              "Contact links": true,
              "Fits without horizontal scrolling": true,
              "Cards are next to each other": true
            },
            "width": 640
          },
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "A main landmark",
                "kind": "exists",
                "selector": "main"
              },
              {
                "label": "One page heading",
                "kind": "count",
                "selector": "h1",
                "value": 1
              },
              {
                "label": "Two profile cards",
                "kind": "count",
                "selector": "article.profile",
                "value": 2
              },
              {
                "label": "Each card has a heading",
                "kind": "count",
                "selector": "article h2",
                "value": 2
              },
              {
                "label": "Contact links",
                "kind": "count",
                "selector": "article a[href^=\"mailto:\"]",
                "value": 2
              },
              {
                "label": "Fits without horizontal scrolling",
                "kind": "noOverflow",
                "selector": ""
              },
              {
                "label": "Cards stack on a phone",
                "kind": "stacked",
                "selector": "article.profile"
              }
            ],
            "expected": {
              "A main landmark": true,
              "One page heading": true,
              "Two profile cards": true,
              "Each card has a heading": true,
              "Contact links": true,
              "Fits without horizontal scrolling": true,
              "Cards stack on a phone": true
            },
            "width": 320
          }
        ],
        "mode": "debug",
        "guide": [
          "Find the fixed width on main and the fixed column widths.",
          "Replace the page width with max-width and fluid columns.",
          "Check the phone size again; keep the wide-screen media rule."
        ],
        "html": true,
        "dom": true,
        "fixture": "",
        "functionName": "",
        "signature": "",
        "snippet": "<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { width: 900px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; } .profiles, .products { display: grid; gap: 16px; grid-template-columns: repeat(2, 400px); } @media (min-width: 600px) { .profiles, .products { grid-template-columns: repeat(2, minmax(0, 1fr)); } }</style>\n<main>\n  <h1>Meet the learners</h1>\n  <div class=\"profiles\">\n    <article class=\"profile\"><h2>Sam Lee</h2><p>Learning JavaScript</p><a href=\"mailto:sam@example.com\">Contact Sam</a></article>\n    <article class=\"profile\"><h2>Ada Ray</h2><p>Learning Python</p><a href=\"mailto:ada@example.com\">Contact Ada</a></article>\n  </div>\n</main>",
        "lesson": "Debugging starts with a prediction: what rule forces the page wider than the screen? Change one rule, then check both sizes.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false
      },
      {
        "id": "project-profile-challenge",
        "title": "Your turn: a tiny product page",
        "prompt": "Build your own mini shop. Use main, one h1, and two article cards inside .products. Each card needs h2, a price in p, and a button with a readable label. Stack the cards at 320px; show two columns at 640px. Buttons do not need shopping behavior yet.",
        "answer": "<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; } .profiles, .products { display: grid; gap: 16px; grid-template-columns: 1fr; } @media (min-width: 600px) { .profiles, .products { grid-template-columns: repeat(2, minmax(0, 1fr)); } }</style>\n<main>\n  <h1>Mini shop</h1>\n  <div class=\"products\">\n    <article><h2>Notebook</h2><p>$5</p><button type=\"button\">Add Notebook to basket</button></article>\n    <article><h2>Pencil</h2><p>$2</p><button type=\"button\">Add Pencil to basket</button></article>\n  </div>\n</main>",
        "tests": [
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "Main landmark",
                "kind": "exists",
                "selector": "main"
              },
              {
                "label": "One page heading",
                "kind": "count",
                "selector": "h1",
                "value": 1
              },
              {
                "label": "Two cards",
                "kind": "count",
                "selector": ".products article",
                "value": 2
              },
              {
                "label": "Two product names",
                "kind": "count",
                "selector": ".products article h2",
                "value": 2
              },
              {
                "label": "Two prices",
                "kind": "count",
                "selector": ".products article p",
                "value": 2
              },
              {
                "label": "Two labeled buttons",
                "kind": "count",
                "selector": ".products article button",
                "value": 2
              },
              {
                "label": "Readable button labels",
                "kind": "allNonempty",
                "selector": ".products article button"
              },
              {
                "label": "Wide layout",
                "kind": "sideBySide",
                "selector": ".products article"
              },
              {
                "label": "Fits screen",
                "kind": "noOverflow",
                "selector": ""
              }
            ],
            "expected": {
              "Main landmark": true,
              "One page heading": true,
              "Two cards": true,
              "Two product names": true,
              "Two prices": true,
              "Two labeled buttons": true,
              "Readable button labels": true,
              "Wide layout": true,
              "Fits screen": true
            },
            "width": 640
          },
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "Phone layout",
                "kind": "stacked",
                "selector": ".products article"
              },
              {
                "label": "Fits screen",
                "kind": "noOverflow",
                "selector": ""
              }
            ],
            "expected": {
              "Phone layout": true,
              "Fits screen": true
            },
            "width": 320
          }
        ],
        "mode": "challenge",
        "guide": [],
        "html": true,
        "dom": true,
        "fixture": "",
        "functionName": "",
        "signature": "",
        "snippet": "",
        "lesson": "Reuse the layout idea, but choose your own product names and styling. Requirements tell you what the page must do; you choose how to build it.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Add a third card. Explain how the grid places it. Try navigating all buttons with Tab.",
        "preserveInput": false
      }
    ]
  },
  {
    "id": "project-shopping",
    "title": "2 · Interactive shopping list",
    "language": "javascript",
    "kind": "project",
    "projectOrder": 2,
    "description": "State, forms, validation, storage, and a packing-list challenge.",
    "level": "Project",
    "exercises": [
      {
        "id": "project-shopping-render",
        "title": "Show a list from data",
        "prompt": "Write setupDOM(titles). Render each title in an li span inside #tasks. Clear old rows first. Show \"Items: N\" in #count. The HTML is provided; your JavaScript connects the data to the page.",
        "answer": "function setupDOM(titles) {\n  const list = document.querySelector(\"#tasks\");\n  list.replaceChildren();\n  for (const title of titles) {\n    const li = document.createElement(\"li\");\n    const span = document.createElement(\"span\");\n    span.textContent = title;\n    li.append(span);\n    list.append(li);\n  }\n  document.querySelector(\"#count\").textContent = `Items: ${titles.length}`;\n}",
        "tests": [
          {
            "args": [
              [
                "Apples",
                "Bread"
              ]
            ],
            "actions": [],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Apples",
                  "Bread"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 2"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
            }
          },
          {
            "args": [
              []
            ],
            "actions": [],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": []
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 0"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
            }
          },
          {
            "args": [
              [
                "<b>Milk</b>"
              ]
            ],
            "actions": [],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "<b>Milk</b>"
                ]
              },
              {
                "label": "Text is not HTML",
                "kind": "absent",
                "selector": "#tasks b"
              }
            ],
            "expected": {
              "Item labels": true,
              "Text is not HTML": true
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "Select #tasks and clear it with replaceChildren().",
          "Loop through titles. Create li and span; set span.textContent and append them.",
          "After the loop, set #count using titles.length."
        ],
        "html": false,
        "dom": true,
        "fixture": "<h2 id=\"heading\">Shopping list</h2><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "functionName": "setupDOM",
        "signature": "setupDOM(...)",
        "snippet": "function setupDOM(titles) {\n  // Select the list, create rows, update the count.\n}",
        "lesson": "Keep data separate from the page. Rendering means turning the current data into visible elements.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false
      },
      {
        "id": "project-shopping-create",
        "title": "Add and delete items",
        "prompt": "Write setupDOM(). Start with an empty list. On form submit, prevent reload, trim the item name, and add a row with its title in a span and a Delete button. Blank input shows \"Enter an item.\" in #message. Keep #count as \"Items: N\" after adding or deleting.",
        "answer": "function setupDOM() {\n  const list = document.querySelector(\"#tasks\");\n  const input = document.querySelector(\"#task-title\");\n  const message = document.querySelector(\"#message\");\n  let items = [];\n  function render() {\n    list.replaceChildren();\n    for (const item of items) {\n      const li = document.createElement(\"li\");\n      const span = document.createElement(\"span\"); span.textContent = item.title;\n      li.append(span);\n      \n      const remove = document.createElement(\"button\"); remove.textContent = \"Delete\";\n      remove.addEventListener(\"click\", () => { items = items.filter(other => other !== item); render(); });\n      li.append(remove); list.append(li);\n    }\n    document.querySelector(\"#count\").textContent = `Items: ${items.length}`;\n    \n  }\n  document.querySelector(\"#task-form\").addEventListener(\"submit\", event => {\n    event.preventDefault();\n    const title = input.value.trim();\n    if (!title) { message.textContent = \"Enter an item.\"; return; }\n    \n    \n    items.push({title, done: false});\n    input.value = \"\"; message.textContent = \"\"; render();\n  });\n  render();\n}",
        "tests": [
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": " Apples "
              },
              {
                "type": "submit",
                "value": "Bread"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Apples",
                  "Bread"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 2"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
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
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": []
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 0"
              },
              {
                "label": "Helpful message",
                "kind": "text",
                "selector": "#message",
                "value": "Enter an item."
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Helpful message": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Apples"
              },
              {
                "type": "submit",
                "value": "Bread"
              },
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Bread"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 1"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "Keep an items array inside setupDOM and write render() to draw it.",
          "In the submit listener, preventDefault, read and trim the input, validate it, then push a new record.",
          "Delete filters out its item, then calls render(). Update the count in render()."
        ],
        "html": false,
        "dom": true,
        "fixture": "<h2 id=\"heading\">Shopping list</h2><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "functionName": "setupDOM",
        "signature": "setupDOM(...)",
        "snippet": "function setupDOM(titles) {\n  const list = document.querySelector(\"#tasks\");\n  list.replaceChildren();\n  for (const title of titles) {\n    const li = document.createElement(\"li\");\n    const span = document.createElement(\"span\");\n    span.textContent = title;\n    li.append(span);\n    list.append(li);\n  }\n  document.querySelector(\"#count\").textContent = `Items: ${titles.length}`;\n}",
        "lesson": "State is the data you keep. Events change state; render updates what the user sees. This is the same idea used by UI frameworks.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false
      },
      {
        "id": "project-shopping-save",
        "title": "Remember the list and packed items",
        "prompt": "Keep the add/delete behavior. Add a labeled checkbox to each li. Toggling it changes done. Save records under \"shopping-items\" with JSON.stringify and practiceStorage.setItem; load them with JSON.parse and getItem. Reloading should keep items and checked states.",
        "answer": "function setupDOM() {\n  const list = document.querySelector(\"#tasks\");\n  const input = document.querySelector(\"#task-title\");\n  const message = document.querySelector(\"#message\");\n  let items = JSON.parse(practiceStorage.getItem(\"shopping-items\") || \"[]\");\n  function render() {\n    list.replaceChildren();\n    for (const item of items) {\n      const li = document.createElement(\"li\");\n      const span = document.createElement(\"span\"); span.textContent = item.title;\n      li.append(span);\n      const check = document.createElement(\"input\");\n      check.type = \"checkbox\"; check.checked = item.done;\n      check.setAttribute(\"aria-label\", \"Packed \" + item.title);\n      check.addEventListener(\"change\", () => { item.done = check.checked; render(); });\n      li.append(check); li.classList.toggle(\"done\", item.done);\n      const remove = document.createElement(\"button\"); remove.textContent = \"Delete\";\n      remove.addEventListener(\"click\", () => { items = items.filter(other => other !== item); render(); });\n      li.append(remove); list.append(li);\n    }\n    document.querySelector(\"#count\").textContent = `Items: ${items.length}`;\n    practiceStorage.setItem(\"shopping-items\", JSON.stringify(items));\n  }\n  document.querySelector(\"#task-form\").addEventListener(\"submit\", event => {\n    event.preventDefault();\n    const title = input.value.trim();\n    if (!title) { message.textContent = \"Enter an item.\"; return; }\n    \n    \n    items.push({title, done: false});\n    input.value = \"\"; message.textContent = \"\"; render();\n  });\n  render();\n}",
        "tests": [
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": " Apples "
              },
              {
                "type": "submit",
                "value": "Bread"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Apples",
                  "Bread"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 2"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
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
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": []
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 0"
              },
              {
                "label": "Helpful message",
                "kind": "text",
                "selector": "#message",
                "value": "Enter an item."
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Helpful message": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Apples"
              },
              {
                "type": "submit",
                "value": "Bread"
              },
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Bread"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 1"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Milk"
              },
              {
                "type": "change",
                "selector": "li input",
                "checked": true
              },
              {
                "type": "reload"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Milk"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 1"
              },
              {
                "label": "Packed stays checked",
                "kind": "checked",
                "selector": "li input",
                "value": true
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Packed stays checked": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Milk"
              },
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              },
              {
                "type": "reload"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": []
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 0"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "Load saved JSON or start with []. The preview supplies practiceStorage; an exported page uses localStorage.",
          "In render, set checkbox.type, checked, and aria-label. On change, update item.done and render again.",
          "Save the current items after each change. Use a reload test to check that deletion is saved too."
        ],
        "html": false,
        "dom": true,
        "fixture": "<h2 id=\"heading\">Shopping list</h2><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "functionName": "setupDOM",
        "signature": "setupDOM(...)",
        "snippet": "function setupDOM() {\n  const list = document.querySelector(\"#tasks\");\n  const input = document.querySelector(\"#task-title\");\n  const message = document.querySelector(\"#message\");\n  let items = [];\n  function render() {\n    list.replaceChildren();\n    for (const item of items) {\n      const li = document.createElement(\"li\");\n      const span = document.createElement(\"span\"); span.textContent = item.title;\n      li.append(span);\n      \n      const remove = document.createElement(\"button\"); remove.textContent = \"Delete\";\n      remove.addEventListener(\"click\", () => { items = items.filter(other => other !== item); render(); });\n      li.append(remove); list.append(li);\n    }\n    document.querySelector(\"#count\").textContent = `Items: ${items.length}`;\n    \n  }\n  document.querySelector(\"#task-form\").addEventListener(\"submit\", event => {\n    event.preventDefault();\n    const title = input.value.trim();\n    if (!title) { message.textContent = \"Enter an item.\"; return; }\n    \n    \n    items.push({title, done: false});\n    input.value = \"\"; message.textContent = \"\"; render();\n  });\n  render();\n}",
        "lesson": "Storage saves text, so JSON turns a list into text and back. Preview storage is a local fixture; reload tests rerun your setup with the saved fixture. Export the page to use real browser localStorage.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false
      },
      {
        "id": "project-shopping-debug",
        "title": "Fix duplicate detection",
        "prompt": "The starter tries to stop duplicates but compares text with records. Fix it so \"Milk\" and \" milk \" count as the same item. Keep the first item, show \"Already on the list.\" for a duplicate, and keep add, delete, checkbox, and saved-data behavior.",
        "answer": "function setupDOM() {\n  const list = document.querySelector(\"#tasks\");\n  const input = document.querySelector(\"#task-title\");\n  const message = document.querySelector(\"#message\");\n  let items = JSON.parse(practiceStorage.getItem(\"shopping-items\") || \"[]\");\n  function render() {\n    list.replaceChildren();\n    for (const item of items) {\n      const li = document.createElement(\"li\");\n      const span = document.createElement(\"span\"); span.textContent = item.title;\n      li.append(span);\n      const check = document.createElement(\"input\");\n      check.type = \"checkbox\"; check.checked = item.done;\n      check.setAttribute(\"aria-label\", \"Packed \" + item.title);\n      check.addEventListener(\"change\", () => { item.done = check.checked; render(); });\n      li.append(check); li.classList.toggle(\"done\", item.done);\n      const remove = document.createElement(\"button\"); remove.textContent = \"Delete\";\n      remove.addEventListener(\"click\", () => { items = items.filter(other => other !== item); render(); });\n      li.append(remove); list.append(li);\n    }\n    document.querySelector(\"#count\").textContent = `Items: ${items.length}`;\n    practiceStorage.setItem(\"shopping-items\", JSON.stringify(items));\n  }\n  document.querySelector(\"#task-form\").addEventListener(\"submit\", event => {\n    event.preventDefault();\n    const title = input.value.trim();\n    if (!title) { message.textContent = \"Enter an item.\"; return; }\n    \n    if (items.some(item => item.title.toLowerCase() === title.toLowerCase())) {\n      message.textContent = \"Already on the list.\"; return;\n    }\n    items.push({title, done: false});\n    input.value = \"\"; message.textContent = \"\"; render();\n  });\n  render();\n}",
        "tests": [
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Milk"
              },
              {
                "type": "submit",
                "value": " milk "
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Milk"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 1"
              },
              {
                "label": "Helpful message",
                "kind": "text",
                "selector": "#message",
                "value": "Already on the list."
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Helpful message": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Milk"
              },
              {
                "type": "submit",
                "value": "Bread"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Milk",
                  "Bread"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 2"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Milk"
              },
              {
                "type": "change",
                "selector": "li input",
                "checked": true
              },
              {
                "type": "reload"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Milk"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 1"
              },
              {
                "label": "Packed stays checked",
                "kind": "checked",
                "selector": "li input",
                "value": true
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Packed stays checked": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Milk"
              },
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              },
              {
                "type": "reload"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": []
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 0"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
            }
          }
        ],
        "mode": "debug",
        "guide": [
          "Predict what includes(title) compares when items contains objects.",
          "Compare each record's title with the new title, both lowercase.",
          "Try a duplicate and a genuinely different item. Check that the first item is preserved."
        ],
        "html": false,
        "dom": true,
        "fixture": "<h2 id=\"heading\">Shopping list</h2><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "functionName": "setupDOM",
        "signature": "setupDOM(...)",
        "snippet": "function setupDOM() {\n  const list = document.querySelector(\"#tasks\");\n  const input = document.querySelector(\"#task-title\");\n  const message = document.querySelector(\"#message\");\n  let items = JSON.parse(practiceStorage.getItem(\"shopping-items\") || \"[]\");\n  function render() {\n    list.replaceChildren();\n    for (const item of items) {\n      const li = document.createElement(\"li\");\n      const span = document.createElement(\"span\"); span.textContent = item.title;\n      li.append(span);\n      const check = document.createElement(\"input\");\n      check.type = \"checkbox\"; check.checked = item.done;\n      check.setAttribute(\"aria-label\", \"Packed \" + item.title);\n      check.addEventListener(\"change\", () => { item.done = check.checked; render(); });\n      li.append(check); li.classList.toggle(\"done\", item.done);\n      const remove = document.createElement(\"button\"); remove.textContent = \"Delete\";\n      remove.addEventListener(\"click\", () => { items = items.filter(other => other !== item); render(); });\n      li.append(remove); list.append(li);\n    }\n    document.querySelector(\"#count\").textContent = `Items: ${items.length}`;\n    practiceStorage.setItem(\"shopping-items\", JSON.stringify(items));\n  }\n  document.querySelector(\"#task-form\").addEventListener(\"submit\", event => {\n    event.preventDefault();\n    const title = input.value.trim();\n    if (!title) { message.textContent = \"Enter an item.\"; return; }\n    \n    if (items.includes(title)) {\n      message.textContent = \"Already on the list.\"; return;\n    }\n    items.push({title, done: false});\n    input.value = \"\"; message.textContent = \"\"; render();\n  });\n  render();\n}",
        "lesson": "A method can be valid syntax and still answer the wrong question. Read the shape of your data before choosing a comparison.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false
      },
      {
        "id": "project-shopping-challenge",
        "title": "Your turn: a packing checklist",
        "prompt": "Build a packing checklist from the provided form. Add a trimmed item name and a positive whole quantity from #quantity. Render each title as \"Name × quantity\" in li span, with a packed checkbox and Delete button. Reject blank names, invalid quantities, and duplicates ignoring case. Use the same messages and storage key as the guided list. Save items, quantities, and packed state across reloads; show \"Items: N\".",
        "answer": "function setupDOM() {\n  const list = document.querySelector(\"#tasks\");\n  const input = document.querySelector(\"#task-title\");\n  const message = document.querySelector(\"#message\");\n  let items = JSON.parse(practiceStorage.getItem(\"shopping-items\") || \"[]\");\n  function render() {\n    list.replaceChildren();\n    for (const item of items) {\n      const li = document.createElement(\"li\");\n      const span = document.createElement(\"span\"); span.textContent = item.title + \" × \" + item.quantity;\n      li.append(span);\n      const check = document.createElement(\"input\");\n      check.type = \"checkbox\"; check.checked = item.done;\n      check.setAttribute(\"aria-label\", \"Packed \" + item.title);\n      check.addEventListener(\"change\", () => { item.done = check.checked; render(); });\n      li.append(check); li.classList.toggle(\"done\", item.done);\n      const remove = document.createElement(\"button\"); remove.textContent = \"Delete\";\n      remove.addEventListener(\"click\", () => { items = items.filter(other => other !== item); render(); });\n      li.append(remove); list.append(li);\n    }\n    document.querySelector(\"#count\").textContent = `Items: ${items.length}`;\n    practiceStorage.setItem(\"shopping-items\", JSON.stringify(items));\n  }\n  document.querySelector(\"#task-form\").addEventListener(\"submit\", event => {\n    event.preventDefault();\n    const title = input.value.trim();\n    if (!title) { message.textContent = \"Enter an item.\"; return; }\n    const quantity = Number(document.querySelector(\"#quantity\").value);\n    if (!Number.isInteger(quantity) || quantity < 1) { message.textContent = \"Use a positive whole quantity.\"; return; }\n    if (items.some(item => item.title.toLowerCase() === title.toLowerCase())) {\n      message.textContent = \"Already on the list.\"; return;\n    }\n    items.push({title, done: false, quantity});\n    input.value = \"\"; message.textContent = \"\"; render();\n  });\n  render();\n}",
        "tests": [
          {
            "args": [],
            "actions": [
              {
                "type": "input",
                "selector": "#quantity",
                "value": "2"
              },
              {
                "type": "submit",
                "value": " Socks "
              },
              {
                "type": "change",
                "selector": "li input",
                "checked": true
              },
              {
                "type": "reload"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Socks × 2"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 1"
              },
              {
                "label": "Packed survives reload",
                "kind": "checked",
                "selector": "li input",
                "value": true
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Packed survives reload": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "input",
                "selector": "#quantity",
                "value": "0"
              },
              {
                "type": "submit",
                "value": "Socks"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": []
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 0"
              },
              {
                "label": "Helpful message",
                "kind": "text",
                "selector": "#message",
                "value": "Use a positive whole quantity."
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Helpful message": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "input",
                "selector": "#quantity",
                "value": "1.5"
              },
              {
                "type": "submit",
                "value": "Socks"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": []
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 0"
              },
              {
                "label": "Helpful message",
                "kind": "text",
                "selector": "#message",
                "value": "Use a positive whole quantity."
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Helpful message": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Socks"
              },
              {
                "type": "submit",
                "value": " socks "
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": [
                  "Socks × 1"
                ]
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 1"
              },
              {
                "label": "Helpful message",
                "kind": "text",
                "selector": "#message",
                "value": "Already on the list."
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true,
              "Helpful message": true
            }
          },
          {
            "args": [],
            "actions": [
              {
                "type": "submit",
                "value": "Socks"
              },
              {
                "type": "click",
                "selector": "li button",
                "index": 0
              },
              {
                "type": "reload"
              }
            ],
            "assertions": [
              {
                "label": "Item labels",
                "kind": "texts",
                "selector": "#tasks li span",
                "value": []
              },
              {
                "label": "Item count",
                "kind": "text",
                "selector": "#count",
                "value": "Items: 0"
              }
            ],
            "expected": {
              "Item labels": true,
              "Item count": true
            }
          }
        ],
        "mode": "challenge",
        "guide": [],
        "html": false,
        "dom": true,
        "fixture": "<h2 id=\"heading\">Shopping list</h2><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><label for=\"quantity\">Quantity</label><input id=\"quantity\" type=\"number\" min=\"1\" value=\"1\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "functionName": "setupDOM",
        "signature": "setupDOM(...)",
        "snippet": "",
        "lesson": "Reuse the state → event → render pattern. The quantity is new: validate it before changing state. Hints remain optional.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [
          "Blank name: \"Enter an item.\" Invalid quantity: \"Use a positive whole quantity.\" Duplicate: \"Already on the list.\"",
          "Use practiceStorage with key \"shopping-items\". The saved records may use your own shape; the tests check behavior.",
          "Set a readable aria-label on the checkbox. Use textContent for all item names."
        ],
        "stretch": "Write one more test idea: what should happen for an empty name, a negative quantity, or deleting the last item?",
        "preserveInput": false
      }
    ]
  },
  {
    "id": "project-api-js",
    "title": "3 · Task API · JavaScript",
    "language": "javascript",
    "kind": "project",
    "projectOrder": 3,
    "description": "Write server-side route decisions offline, then run a real Express + SQLite backend.",
    "level": "Project",
    "backend": true,
    "exercises": [
      {
        "id": "project-api-js-read",
        "title": "Read a server route",
        "prompt": "You are writing the server now. Implement the handler shown below. GET /tasks returns status 200, the list as data, and the unchanged list as tasks. Any other path returns 404 with data {\"error\":\"Route not found\"}. Always return status, data, and tasks. Keep inputs unchanged.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  if (method === \"GET\" && path === \"/tasks\") return {status:200, data:records, tasks:records};\n  return {status:404, data:{error:\"Route not found\"}, tasks:records};\n}",
        "tests": [
          {
            "args": [
              "GET",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": [],
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ],
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/unknown",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "Read method and path: together they say what the client is asking for.",
          "Make a copy of tasks. For GET /tasks, return the list with status 200.",
          "Add a fallback 404 response. The browser calls this handler directly; the real server adapter turns its result into HTTP."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handleRequest",
        "signature": "handleRequest(method, path, body, tasks)",
        "snippet": "function handleRequest(method, path, body, tasks) {\n  // Return {status, data, tasks}. Keep the input records unchanged.\n}",
        "lesson": "The client sends a request. A route handler decides what response to send. The server adapter handles HTTP; your function handles the decision.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true
      },
      {
        "id": "project-api-js-create",
        "title": "Validate and create a task",
        "prompt": "Keep GET /tasks. Add POST /tasks: require a nonblank string title, trim it, assign max existing id + 1 (or 1 for an empty list), and set done false. Return status 201 with the new task as data and the updated list as tasks. Invalid input returns 400 with {\"error\":\"Title is required\"} and unchanged tasks.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const match = /^\\/tasks\\/([1-9]\\d*)$/.exec(path);\n  if (!match) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === Number(match[1]));\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
        "tests": [
          {
            "args": [
              "GET",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": [],
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ],
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/unknown",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " Code "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 201,
              "data": {
                "id": 4,
                "title": "Code",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                },
                {
                  "id": 4,
                  "title": "Code",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": 4
              },
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "Check the body before changing any records: missing, wrong-type, and blank titles are errors.",
          "Build a new task, then append it to a copied list.",
          "Return 201 for creation, 400 for invalid input, and preserve GET behavior."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handleRequest",
        "signature": "handleRequest(method, path, body, tasks)",
        "snippet": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  if (method === \"GET\" && path === \"/tasks\") return {status:200, data:records, tasks:records};\n  return {status:404, data:{error:\"Route not found\"}, tasks:records};\n}",
        "lesson": "Validation belongs on the server even when the page validates too. A caller can send requests without using your form.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true
      },
      {
        "id": "project-api-js-debug",
        "title": "Fix a route that changes its input",
        "prompt": "The starter has a copying bug: editing a task changes the list passed into the handler. Load it and fix the copying. Keep the complete GET, POST, PATCH, and DELETE behavior. Compare an input record before and after a request.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const match = /^\\/tasks\\/([1-9]\\d*)$/.exec(path);\n  if (!match) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === Number(match[1]));\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
        "tests": [
          {
            "args": [
              "GET",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": [],
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ],
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/unknown",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " Code "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 201,
              "data": {
                "id": 4,
                "title": "Code",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                },
                {
                  "id": 4,
                  "title": "Code",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": 4
              },
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks/3",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "Read",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/tasks/9",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Task not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "done": true
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "Read",
                "done": true
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": true
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "title": " New "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "New",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "New",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "done": "yes"
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "id": 9
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "DELETE",
              "/tasks/3",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 204,
              "data": null,
              "tasks": []
            }
          },
          {
            "args": [
              "DELETE",
              "/tasks/9",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Task not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PUT",
              "/tasks",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 405,
              "data": {
                "error": "Method not allowed"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks/3",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 405,
              "data": {
                "error": "Method not allowed"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/tasks/abc",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          }
        ],
        "mode": "debug",
        "guide": [
          "Find where records is created. An alias points to the same list; it is not a copy.",
          "Copy the list and each task record before editing or deleting.",
          "Run update and delete cases. Input preservation checks must pass too."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handleRequest",
        "signature": "handleRequest(method, path, body, tasks)",
        "snippet": "function handleRequest(method, path, body, tasks) {\n  const records = tasks;\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const match = /^\\/tasks\\/([1-9]\\d*)$/.exec(path);\n  if (!match) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === Number(match[1]));\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
        "lesson": "Sharing a reference is different from copying a value. Bugs appear when one part of your code changes data another part still uses.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true
      },
      {
        "id": "project-api-js-challenge",
        "title": "Your turn: complete CRUD routes",
        "prompt": "Build the complete task handler from requirements. Support GET and POST /tasks, plus GET, PATCH, and DELETE /tasks/id. PATCH accepts a nonblank title and/or a boolean done; reject empty bodies, unknown fields, and wrong types. Return the response and updated task list without changing inputs.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const match = /^\\/tasks\\/([1-9]\\d*)$/.exec(path);\n  if (!match) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === Number(match[1]));\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
        "tests": [
          {
            "args": [
              "GET",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": [],
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ],
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/unknown",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " Code "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 201,
              "data": {
                "id": 4,
                "title": "Code",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                },
                {
                  "id": 4,
                  "title": "Code",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": 4
              },
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks/3",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "Read",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/tasks/9",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Task not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "done": true
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "Read",
                "done": true
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": true
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "title": " New "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "New",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "New",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "done": "yes"
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "id": 9
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "DELETE",
              "/tasks/3",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 204,
              "data": null,
              "tasks": []
            }
          },
          {
            "args": [
              "DELETE",
              "/tasks/9",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Task not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PUT",
              "/tasks",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 405,
              "data": {
                "error": "Method not allowed"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks/3",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 405,
              "data": {
                "error": "Method not allowed"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/tasks/abc",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          }
        ],
        "mode": "challenge",
        "guide": [],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handleRequest",
        "signature": "handleRequest(method, path, body, tasks)",
        "snippet": "",
        "lesson": "Use the cases as a small API contract: method, path, body → status, data, saved tasks. After passing, run the real server project and write an extra route test.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [
          "200: read/update. 201: created. 204: deleted with data null/None.",
          "400: {\"error\":\"Title is required\"} for bad creation; {\"error\":\"Invalid update\"} for bad PATCH.",
          "404: {\"error\":\"Route not found\"} for an invalid path; {\"error\":\"Task not found\"} for a missing id.",
          "405: {\"error\":\"Method not allowed\"} for an unsupported method on a valid route.",
          "IDs are positive integers. POST assigns max existing id + 1. Each reply includes status, data, and tasks."
        ],
        "stretch": "Write a test for PATCH with both title and done. Then test the same request against the real server and restart it to check SQLite persistence.",
        "preserveInput": true
      }
    ]
  },
  {
    "id": "project-api-py",
    "title": "3 · Task API · Python",
    "language": "python",
    "kind": "project",
    "projectOrder": 3,
    "description": "Write server-side route decisions offline, then run a real Flask + SQLite backend.",
    "level": "Project",
    "backend": true,
    "exercises": [
      {
        "id": "project-api-py-read",
        "title": "Read a server route",
        "prompt": "You are writing the server now. Implement the handler shown below. GET /tasks returns status 200, the list as data, and the unchanged list as tasks. Any other path returns 404 with data {\"error\":\"Route not found\"}. Always return status, data, and tasks. Keep inputs unchanged.",
        "answer": "def handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n    if method == \"GET\" and path == \"/tasks\":\n        return {\"status\":200, \"data\":records, \"tasks\":records}\n    return {\"status\":404, \"data\":{\"error\":\"Route not found\"}, \"tasks\":records}",
        "tests": [
          {
            "args": [
              "GET",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": [],
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ],
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/unknown",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "Read method and path: together they say what the client is asking for.",
          "Make a copy of tasks. For GET /tasks, return the list with status 200.",
          "Add a fallback 404 response. The browser calls this handler directly; the real server adapter turns its result into HTTP."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handle_request",
        "signature": "handle_request(method, path, body, tasks)",
        "snippet": "def handle_request(method, path, body, tasks):\n    # Return a dictionary with status, data, and tasks.\n    pass",
        "lesson": "The client sends a request. A route handler decides what response to send. The server adapter handles HTTP; your function handles the decision.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true
      },
      {
        "id": "project-api-py-create",
        "title": "Validate and create a task",
        "prompt": "Keep GET /tasks. Add POST /tasks: require a nonblank string title, trim it, assign max existing id + 1 (or 1 for an empty list), and set done false. Return status 201 with the new task as data and the updated list as tasks. Invalid input returns 400 with {\"error\":\"Title is required\"} and unchanged tasks.",
        "answer": "import re\n\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    match = re.match(r\"^/tasks/([1-9]\\d*)$\", path)\n    if not match:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\", \"DELETE\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == int(match.group(1))), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if method == \"DELETE\":\n        records.pop(index)\n        return reply(204, None)\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
        "tests": [
          {
            "args": [
              "GET",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": [],
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ],
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/unknown",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " Code "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 201,
              "data": {
                "id": 4,
                "title": "Code",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                },
                {
                  "id": 4,
                  "title": "Code",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": 4
              },
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "Check the body before changing any records: missing, wrong-type, and blank titles are errors.",
          "Build a new task, then append it to a copied list.",
          "Return 201 for creation, 400 for invalid input, and preserve GET behavior."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handle_request",
        "signature": "handle_request(method, path, body, tasks)",
        "snippet": "def handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n    if method == \"GET\" and path == \"/tasks\":\n        return {\"status\":200, \"data\":records, \"tasks\":records}\n    return {\"status\":404, \"data\":{\"error\":\"Route not found\"}, \"tasks\":records}",
        "lesson": "Validation belongs on the server even when the page validates too. A caller can send requests without using your form.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true
      },
      {
        "id": "project-api-py-debug",
        "title": "Fix a route that changes its input",
        "prompt": "The starter has a copying bug: editing a task changes the list passed into the handler. Load it and fix the copying. Keep the complete GET, POST, PATCH, and DELETE behavior. Compare an input record before and after a request.",
        "answer": "import re\n\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    match = re.match(r\"^/tasks/([1-9]\\d*)$\", path)\n    if not match:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\", \"DELETE\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == int(match.group(1))), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if method == \"DELETE\":\n        records.pop(index)\n        return reply(204, None)\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
        "tests": [
          {
            "args": [
              "GET",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": [],
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ],
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/unknown",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " Code "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 201,
              "data": {
                "id": 4,
                "title": "Code",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                },
                {
                  "id": 4,
                  "title": "Code",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": 4
              },
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks/3",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "Read",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/tasks/9",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Task not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "done": true
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "Read",
                "done": true
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": true
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "title": " New "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "New",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "New",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "done": "yes"
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "id": 9
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "DELETE",
              "/tasks/3",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 204,
              "data": null,
              "tasks": []
            }
          },
          {
            "args": [
              "DELETE",
              "/tasks/9",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Task not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PUT",
              "/tasks",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 405,
              "data": {
                "error": "Method not allowed"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks/3",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 405,
              "data": {
                "error": "Method not allowed"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/tasks/abc",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          }
        ],
        "mode": "debug",
        "guide": [
          "Find where records is created. An alias points to the same list; it is not a copy.",
          "Copy the list and each task record before editing or deleting.",
          "Run update and delete cases. Input preservation checks must pass too."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handle_request",
        "signature": "handle_request(method, path, body, tasks)",
        "snippet": "import re\n\n\ndef handle_request(method, path, body, tasks):\n    records = tasks\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    match = re.match(r\"^/tasks/([1-9]\\d*)$\", path)\n    if not match:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\", \"DELETE\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == int(match.group(1))), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if method == \"DELETE\":\n        records.pop(index)\n        return reply(204, None)\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
        "lesson": "Sharing a reference is different from copying a value. Bugs appear when one part of your code changes data another part still uses.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true
      },
      {
        "id": "project-api-py-challenge",
        "title": "Your turn: complete CRUD routes",
        "prompt": "Build the complete task handler from requirements. Support GET and POST /tasks, plus GET, PATCH, and DELETE /tasks/id. PATCH accepts a nonblank title and/or a boolean done; reject empty bodies, unknown fields, and wrong types. Return the response and updated task list without changing inputs.",
        "answer": "import re\n\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    match = re.match(r\"^/tasks/([1-9]\\d*)$\", path)\n    if not match:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\", \"DELETE\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == int(match.group(1))), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if method == \"DELETE\":\n        records.pop(index)\n        return reply(204, None)\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
        "tests": [
          {
            "args": [
              "GET",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": [],
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ],
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/unknown",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " Code "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 201,
              "data": {
                "id": 4,
                "title": "Code",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                },
                {
                  "id": 4,
                  "title": "Code",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              null,
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "POST",
              "/tasks",
              {
                "title": 4
              },
              []
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Title is required"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/tasks/3",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "Read",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/tasks/9",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Task not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "done": true
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "Read",
                "done": true
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": true
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "title": " New "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 200,
              "data": {
                "id": 3,
                "title": "New",
                "done": false
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "New",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "done": "yes"
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "title": " "
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PATCH",
              "/tasks/3",
              {
                "id": 9
              },
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 400,
              "data": {
                "error": "Invalid update"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "DELETE",
              "/tasks/3",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 204,
              "data": null,
              "tasks": []
            }
          },
          {
            "args": [
              "DELETE",
              "/tasks/9",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Task not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "PUT",
              "/tasks",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 405,
              "data": {
                "error": "Method not allowed"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "POST",
              "/tasks/3",
              {},
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 405,
              "data": {
                "error": "Method not allowed"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          },
          {
            "args": [
              "GET",
              "/tasks/abc",
              null,
              [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            ],
            "expected": {
              "status": 404,
              "data": {
                "error": "Route not found"
              },
              "tasks": [
                {
                  "id": 3,
                  "title": "Read",
                  "done": false
                }
              ]
            }
          }
        ],
        "mode": "challenge",
        "guide": [],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handle_request",
        "signature": "handle_request(method, path, body, tasks)",
        "snippet": "",
        "lesson": "Use the cases as a small API contract: method, path, body → status, data, saved tasks. After passing, run the real server project and write an extra route test.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [
          "200: read/update. 201: created. 204: deleted with data null/None.",
          "400: {\"error\":\"Title is required\"} for bad creation; {\"error\":\"Invalid update\"} for bad PATCH.",
          "404: {\"error\":\"Route not found\"} for an invalid path; {\"error\":\"Task not found\"} for a missing id.",
          "405: {\"error\":\"Method not allowed\"} for an unsupported method on a valid route.",
          "IDs are positive integers. POST assigns max existing id + 1. Each reply includes status, data, and tasks."
        ],
        "stretch": "Write a test for PATCH with both title and done. Then test the same request against the real server and restart it to check SQLite persistence.",
        "preserveInput": true
      }
    ]
  }
];
