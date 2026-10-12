// Incremental projects. Stable IDs preserve work; continuesFrom carries checked code only.
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
        "id": "project-profile-document",
        "title": "Create a page document",
        "prompt": "Start with a complete HTML document: doctype, html with lang=\"en\", head, and body. In head, add UTF-8 charset, a viewport meta tag, and a title. In body, add main with one h1. This is the file your card will live in.",
        "answer": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n</head>\n<body>\n<main><h1>My first page</h1></main>\n</body>\n</html>",
        "tests": [
          {
            "args": [],
            "actions": [],
            "width": 320,
            "assertions": [
              {
                "label": "Modern HTML document",
                "kind": "doctype",
                "selector": ""
              },
              {
                "label": "Page language",
                "kind": "sourceAttribute",
                "selector": "html",
                "attribute": "lang",
                "value": "en"
              },
              {
                "label": "UTF-8 characters",
                "kind": "sourceAttribute",
                "selector": "meta[charset]",
                "attribute": "charset",
                "value": "utf-8"
              },
              {
                "label": "Phone viewport",
                "kind": "sourceExists",
                "selector": "meta[name=\"viewport\"][content*=\"width=device-width\"]"
              },
              {
                "label": "A tab title",
                "kind": "sourceNonempty",
                "selector": "head title"
              },
              {
                "label": "Visible main content",
                "kind": "nonempty",
                "selector": "main h1"
              }
            ],
            "expected": {
              "Modern HTML document": true,
              "Page language": true,
              "UTF-8 characters": true,
              "Phone viewport": true,
              "A tab title": true,
              "Visible main content": true
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "<!doctype html> tells the browser to use modern HTML. Wrap the page in <html lang=\"en\">...</html> for its language.",
          "Inside <head>, add <meta charset=\"utf-8\">, <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">, and <title>My first page</title>. Viewport makes a phone use its real screen width.",
          "Put visible content inside <body>: <main><h1>My first page</h1></main>. Keep this document and add your card in the next step."
        ],
        "html": true,
        "dom": true,
        "fixture": "",
        "functionName": "",
        "signature": "",
        "snippet": "",
        "lesson": "The title labels the browser tab; h1 labels the page itself. Charset makes characters readable. Viewport is part of making a page work on a phone.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Predict what changes when you increase padding. Try it. Explain the difference between padding and margin.",
        "preserveInput": false,
        "why": "A page needs a document around its content. The head describes it to the browser; the body holds what the reader sees."
      },
      {
        "id": "project-profile-structure",
        "title": "Build one profile card",
        "prompt": "Keep your document head and main. Replace the placeholder heading with article.profile: your name in h1, a description in p, two skills in ul/li, and an email link. Leave styling for the next step.",
        "answer": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n</head>\n<body>\n<main>\n  <article class=\"profile\">\n    <h1>Sam Lee</h1>\n    <p>Learning web development, one small project at a time.</p>\n    <ul><li>JavaScript</li><li>Python</li></ul>\n    <a href=\"mailto:sam@example.com\">Contact Sam</a>\n  </article>\n</main>\n</body>\n</html>",
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
          "Use closing tags: <h1>Your name</h1>. Run to see the plain page; next we will add CSS."
        ],
        "html": true,
        "dom": true,
        "fixture": "",
        "functionName": "",
        "signature": "",
        "snippet": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n<style>\n  /* Start with readable text and padding. */\n</style>\n</head>\n<body>\n<main>\n  <article class=\"profile\">\n    <!-- Add your name, description, skills, and contact link. -->\n  </article>\n</main>\n\n</body>\n</html>",
        "lesson": "HTML gives content meaning; CSS controls its appearance. Use real headings and links so keyboard and screen-reader users can understand the page.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Predict what changes when you increase padding. Try it. Explain the difference between padding and margin.",
        "preserveInput": false,
        "why": "HTML gives content meaning; CSS controls its appearance. Use real headings and links so keyboard and screen-reader users can understand the page.",
        "continuesFrom": "project-profile-document"
      },
      {
        "id": "project-profile-style",
        "title": "Give your card space",
        "prompt": "Keep your HTML. Add a style block: give article at least 16px of padding and a border at least 1px wide. Make the card fit a phone without horizontal scrolling.",
        "answer": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; }</style>\n</head>\n<body>\n\n<main>\n  <article class=\"profile\">\n    <h1>Sam Lee</h1>\n    <p>Learning web development, one small project at a time.</p>\n    <ul><li>JavaScript</li><li>Python</li></ul>\n    <a href=\"mailto:sam@example.com\">Contact Sam</a>\n  </article>\n</main>\n</body>\n</html>",
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
              },
              {
                "label": "Space inside the card",
                "kind": "computedMin",
                "selector": "article",
                "property": "paddingTop",
                "value": 16
              },
              {
                "label": "A visible border",
                "kind": "computedMin",
                "selector": "article",
                "property": "borderTopWidth",
                "value": 1
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
              "Fits without horizontal scrolling": true,
              "Space inside the card": true,
              "A visible border": true
            },
            "width": 320
          }
        ],
        "mode": "guided",
        "guide": [
          "Add a <style> block inside head. CSS selects an element, then sets properties inside braces. Keep your body content.",
          "Try article { padding: 16px; border: 1px solid #ccc; }. Keep your existing card content.",
          "Use * { box-sizing: border-box; } and main { max-width: 800px; margin: auto; }. Run at phone size."
        ],
        "html": true,
        "dom": true,
        "fixture": "",
        "functionName": "",
        "signature": "",
        "snippet": "",
        "lesson": "Padding is inside space. A border surrounds it. max-width allows a wide page to shrink; a fixed width does not.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Predict what changes when you increase padding. Try it. Explain the difference between padding and margin.",
        "preserveInput": false,
        "continuesFrom": "project-profile-structure",
        "why": "You already wrote meaningful HTML. Now CSS makes that same content readable."
      },
      {
        "id": "project-profile-layout",
        "title": "Make the layout fit a phone",
        "prompt": "Build a page with one h1 and two article.profile cards inside .profiles. Each card needs h2 and an email link. At 640px the cards sit side by side; at 320px they stack. Keep the page free of horizontal scrolling.",
        "answer": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; } .profiles, .products { display: grid; gap: 16px; grid-template-columns: 1fr; } @media (min-width: 600px) { .profiles, .products { grid-template-columns: repeat(2, minmax(0, 1fr)); } }</style>\n</head>\n<body>\n\n<main>\n  <h1>Meet the learners</h1>\n  <div class=\"profiles\">\n    <article class=\"profile\"><h2>Sam Lee</h2><p>Learning JavaScript</p><a href=\"mailto:sam@example.com\">Contact Sam</a></article>\n    <article class=\"profile\"><h2>Ada Ray</h2><p>Learning Python</p><a href=\"mailto:ada@example.com\">Contact Ada</a></article>\n  </div>\n</main>\n</body>\n</html>",
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
        "snippet": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; }</style>\n</head>\n<body>\n\n<main>\n  <article class=\"profile\">\n    <h1>Sam Lee</h1>\n    <p>Learning web development, one small project at a time.</p>\n    <ul><li>JavaScript</li><li>Python</li></ul>\n    <a href=\"mailto:sam@example.com\">Contact Sam</a>\n  </article>\n</main>\n</body>\n</html>",
        "lesson": "Start with a phone layout. Add a wider layout only when there is room. A fixed width like 900px will not fit a phone.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false,
        "continuesFrom": "project-profile-style",
        "why": "One card already works. Now you will repeat that structure and choose how the two cards fit."
      },
      {
        "id": "project-profile-debug",
        "title": "Fix the overflowing layout",
        "prompt": "This page is too wide on a phone. Load the broken starter, predict why it overflows, and fix it. Keep two profile cards with headings and email links. They must stack at 320px and sit side by side at 640px.",
        "answer": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; } .profiles, .products { display: grid; gap: 16px; grid-template-columns: 1fr; } @media (min-width: 600px) { .profiles, .products { grid-template-columns: repeat(2, minmax(0, 1fr)); } }</style>\n</head>\n<body>\n\n<main>\n  <h1>Meet the learners</h1>\n  <div class=\"profiles\">\n    <article class=\"profile\"><h2>Sam Lee</h2><p>Learning JavaScript</p><a href=\"mailto:sam@example.com\">Contact Sam</a></article>\n    <article class=\"profile\"><h2>Ada Ray</h2><p>Learning Python</p><a href=\"mailto:ada@example.com\">Contact Ada</a></article>\n  </div>\n</main>\n</body>\n</html>",
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
        "snippet": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { width: 900px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; } .profiles, .products { display: grid; gap: 16px; grid-template-columns: repeat(2, 400px); } @media (min-width: 600px) { .profiles, .products { grid-template-columns: repeat(2, minmax(0, 1fr)); } }</style>\n</head>\n<body>\n\n<main>\n  <h1>Meet the learners</h1>\n  <div class=\"profiles\">\n    <article class=\"profile\"><h2>Sam Lee</h2><p>Learning JavaScript</p><a href=\"mailto:sam@example.com\">Contact Sam</a></article>\n    <article class=\"profile\"><h2>Ada Ray</h2><p>Learning Python</p><a href=\"mailto:ada@example.com\">Contact Ada</a></article>\n  </div>\n</main>\n</body>\n</html>",
        "lesson": "Debugging starts with a prediction: what rule forces the page wider than the screen? Change one rule, then check both sizes.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false,
        "why": "Fix the demonstrated bug."
      },
      {
        "id": "project-profile-challenge",
        "title": "Your turn: a tiny product page",
        "prompt": "Build your own mini shop. Use main, one h1, and two article cards inside .products. Each card needs h2, a price in p, and a button with a readable label. Stack the cards at 320px; show two columns at 640px. Buttons do not need shopping behavior yet.",
        "answer": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My first page</title>\n<style>* { box-sizing: border-box; } body { font-family: system-ui; margin: 0; padding: 24px; } main { max-width: 800px; margin: auto; } article { padding: 20px; border: 1px solid #ccc; border-radius: 12px; } a, button { display: inline-block; padding: 8px; } .profiles, .products { display: grid; gap: 16px; grid-template-columns: 1fr; } @media (min-width: 600px) { .profiles, .products { grid-template-columns: repeat(2, minmax(0, 1fr)); } }</style>\n</head>\n<body>\n\n<main>\n  <h1>Mini shop</h1>\n  <div class=\"products\">\n    <article><h2>Notebook</h2><p>$5</p><button type=\"button\">Add Notebook to basket</button></article>\n    <article><h2>Pencil</h2><p>$2</p><button type=\"button\">Add Pencil to basket</button></article>\n  </div>\n</main>\n</body>\n</html>",
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
        "preserveInput": false,
        "why": "Use the pieces you have practiced to build a variation independently."
      }
    ],
    "prerequisites": []
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
        "id": "project-shopping-markup",
        "title": "Build the shopping form",
        "prompt": "Create a new page using the document structure you learned. In body, add h1#heading, form#task-form, label for=\"task-title\", input#task-title, an Add item button, p#message with role=\"status\", ul#tasks, and p#count. These IDs connect your HTML to JavaScript in later steps.",
        "answer": "<!doctype html>\n<html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Shopping list</title>\n<style>*{box-sizing:border-box}body{font-family:system-ui;margin:0;padding:16px}input,button{font:inherit;padding:8px;min-height:44px}label{display:block}input{max-width:100%}</style>\n</head><body><main>\n<h1 id=\"heading\">Shopping list</h1><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p></main></body></html>",
        "tests": [
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "A form",
                "kind": "exists",
                "selector": "#task-form"
              },
              {
                "label": "A named input",
                "kind": "exists",
                "selector": "#task-title"
              },
              {
                "label": "Connected label",
                "kind": "attribute",
                "selector": "label",
                "attribute": "for",
                "value": "task-title"
              },
              {
                "label": "A submit button",
                "kind": "exists",
                "selector": "#task-form button"
              },
              {
                "label": "A list",
                "kind": "exists",
                "selector": "ul#tasks"
              },
              {
                "label": "A count",
                "kind": "exists",
                "selector": "#count"
              },
              {
                "label": "A heading",
                "kind": "exists",
                "selector": "#heading"
              },
              {
                "label": "Accessible feedback",
                "kind": "attribute",
                "selector": "#message",
                "attribute": "role",
                "value": "status"
              },
              {
                "label": "Fits a phone",
                "kind": "noOverflow",
                "selector": ""
              }
            ],
            "expected": {
              "A form": true,
              "A named input": true,
              "Connected label": true,
              "A submit button": true,
              "A list": true,
              "A count": true,
              "A heading": true,
              "Accessible feedback": true,
              "Fits a phone": true
            },
            "width": 320
          }
        ],
        "mode": "guided",
        "guide": [
          "Start with <form id=\"task-form\">. Give its input id=\"task-title\" and connect <label for=\"task-title\">Item name</label>.",
          "Add a button inside the form. Add an empty ul#tasks and p#count after the form.",
          "Add h1#heading and p#message with role=\"status\". IDs are labels your JavaScript uses to find one element. For phone use, add input, button { font-size: 16px; min-height: 44px; } in a style block."
        ],
        "html": true,
        "dom": true,
        "fixture": "",
        "functionName": "",
        "signature": "",
        "snippet": "",
        "lesson": "A form groups inputs. A label explains an input. HTML IDs connect your page to event listeners and rendering.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Predict what changes when you increase padding. Try it. Explain the difference between padding and margin.",
        "preserveInput": false,
        "why": "You will build the page before adding behavior. There is no hidden form to guess about."
      },
      {
        "id": "project-shopping-events",
        "title": "Connect one event",
        "prompt": "Use the form you just built. Write setupDOM(). Start #count at \"Clicks: 0\". Each form submission increases it by one. Prevent the page reload. This small event test comes before adding items.",
        "answer": "function setupDOM() {\n  let clicks = 0;\n  const output = document.querySelector(\"#count\");\n  output.textContent = \"Clicks: 0\";\n  document.querySelector(\"#task-form\").addEventListener(\"submit\", event => {\n    event.preventDefault();\n    clicks += 1;\n    output.textContent = \"Clicks: \" + clicks;\n  });\n}",
        "tests": [
          {
            "args": [],
            "actions": [],
            "assertions": [
              {
                "label": "Initial count",
                "kind": "text",
                "selector": "#count",
                "value": "Clicks: 0"
              }
            ],
            "expected": {
              "Initial count": true
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
              }
            ],
            "assertions": [
              {
                "label": "Two form events",
                "kind": "text",
                "selector": "#count",
                "value": "Clicks: 2"
              }
            ],
            "expected": {
              "Two form events": true
            }
          }
        ],
        "mode": "guided",
        "guide": [
          "Find #task-form and #count with document.querySelector. Keep a clicks variable starting at 0.",
          "Add a submit listener. Call event.preventDefault() so the browser does not navigate away.",
          "Increase clicks and set output.textContent. Run and press Add item yourself."
        ],
        "html": false,
        "dom": true,
        "fixture": "<h2 id=\"heading\">Shopping list</h2><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "functionName": "setupDOM",
        "signature": "setupDOM(...)",
        "snippet": "",
        "lesson": "An event is something the user does. A listener is the function you register to react. Updating text shows that your code ran.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": false,
        "markupFrom": "project-shopping-markup",
        "why": "Your HTML is ready. First prove that one user action can change one value."
      },
      {
        "id": "project-shopping-render",
        "title": "Show a list from data",
        "prompt": "Write setupDOM(titles). Render each title in an li span inside #tasks. Clear old rows first. Show \"Items: N\" in #count. The HTML is provided; your JavaScript connects the data to the page. The form will add items in the next step; this step only draws the supplied list.",
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
          "Replace the click-demo listener with setupDOM(titles). Select #tasks and clear it. Keep your form HTML; the next step will connect it to item data.",
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
        "preserveInput": false,
        "continuesFrom": "project-shopping-events",
        "markupFrom": "project-shopping-events",
        "why": "The click demo changed one value. Now render a list and show the number of items."
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
          "Move your existing DOM loop into a render() function. Keep an items array inside setupDOM(). Each item is now a record: {title, done: false}; render item.title.",
          "Keep the submit listener you practiced: preventDefault, trim and validate the input, then push({title, done: false}) and call render().",
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
        "preserveInput": false,
        "continuesFrom": "project-shopping-render",
        "markupFrom": "project-shopping-render",
        "why": "Your form event and list rendering each work. Now combine them: an event changes records, then render redraws the list."
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
        "preserveInput": false,
        "continuesFrom": "project-shopping-create",
        "markupFrom": "project-shopping-create",
        "why": "Storage saves text, so JSON turns a list into text and back. Preview storage is a local fixture; reload tests rerun your setup with the saved fixture. Export the page to use real browser localStorage."
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
        "preserveInput": false,
        "markupFrom": "project-shopping-save",
        "why": "Fix the demonstrated bug."
      },
      {
        "id": "project-shopping-quantity",
        "title": "Add and validate a quantity",
        "prompt": "Keep your working list. Add label/input#quantity to your HTML (type=\"number\", min=\"1\", value=\"1\"). Read its value with Number(...). Accept only positive whole numbers. Show each label as \"Name × quantity\", and save the quantity with each item.",
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
        "mode": "guided",
        "guide": [
          "In Edit your page HTML, add a label and <input id=\"quantity\" type=\"number\" min=\"1\" value=\"1\"> inside the form.",
          "An input value is text. Convert it with Number, then require Number.isInteger(quantity) and quantity > 0. Invalid values show \"Use a positive whole quantity.\".",
          "Save quantity in the item record. Render title + \" × \" + quantity, and keep checkbox, delete, duplicate validation, and storage behavior."
        ],
        "html": false,
        "dom": true,
        "fixture": "<h2 id=\"heading\">Shopping list</h2><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><label for=\"quantity\">Quantity</label><input id=\"quantity\" type=\"number\" min=\"1\" value=\"1\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p>",
        "functionName": "setupDOM",
        "signature": "setupDOM(...)",
        "snippet": "",
        "lesson": "HTML constraints help the user, but JavaScript must also validate before changing state. Saved records need to include every value you want to restore.",
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
        "preserveInput": false,
        "markupFrom": "project-shopping-debug",
        "continuesFrom": "project-shopping-debug",
        "why": "A name and checkbox already work. Quantity adds one new field to the same form and records.",
        "markupAnswer": "<!doctype html>\n<html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>Shopping list</title>\n<style>*{box-sizing:border-box}body{font-family:system-ui;margin:0;padding:16px}input,button{font:inherit;padding:8px;min-height:44px}label{display:block}input{max-width:100%}</style>\n</head><body><main>\n<h1 id=\"heading\">Shopping list</h1><form id=\"task-form\"><label for=\"task-title\">Item name</label><input id=\"task-title\"><label for=\"quantity\">Quantity</label><input id=\"quantity\" type=\"number\" min=\"1\" value=\"1\"><button>Add item</button></form><p id=\"message\" role=\"status\"></p><ul id=\"tasks\"></ul><p id=\"count\"></p></main></body></html>"
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
        "preserveInput": false,
        "markupFrom": "project-shopping-quantity",
        "why": "Use the pieces you have practiced to build a variation independently."
      }
    ],
    "prerequisites": [
      "flight-js-project",
      "practical-js-10"
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
        "id": "project-api-js-response",
        "title": "Build a response first",
        "prompt": "Start with an empty function. For now, every call returns status 200, data {\"message\":\"API ready\"}, and the unchanged tasks list. This is the shape your later routes will return. The next step will use method and path to choose a response.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  return {status: 200, data: {message: \"API ready\"}, tasks};\n}",
        "tests": [
          {
            "args": [
              "GET",
              "/health",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": {
                "message": "API ready"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/health",
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
                "message": "API ready"
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
          "The four inputs are method (the action), path (the address), body (new values), and tasks (stored records).",
          "Return an object/dictionary with status, data, and tasks. 200 means the request worked.",
          "Call the function with an empty tasks list. Predict the response before checking."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handleRequest",
        "signature": "handleRequest(method, path, body, tasks)",
        "snippet": "",
        "lesson": "A route decision is a function: request information goes in, a reply comes out. Later Express or Flask will translate between this function and real HTTP. The reply is an internal contract: the HTTP adapter sends data to the client, and keeps tasks as server state.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "why": "Status says whether the action worked. Data is the reply the client sees. Tasks is the list the server keeps; the adapter saves it."
      },
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
        "preserveInput": true,
        "continuesFrom": "project-api-js-response",
        "why": "Replace the temporary welcome response with a decision based on method and path."
      },
      {
        "id": "project-api-js-create",
        "title": "Validate and create a task",
        "prompt": "Keep GET /tasks. Add POST /tasks: require a nonblank string title, trim it, assign max existing id + 1 (or 1 for an empty list), and set done false. Return status 201 with the new task as data and the updated list as tasks. Invalid input returns 400 with {\"error\":\"Title is required\"} and unchanged tasks.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  return reply(404, {error: \"Route not found\"});\n}",
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
        "snippet": "",
        "lesson": "Validation belongs on the server even when the page validates too. A caller can send requests without using your form.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "continuesFrom": "project-api-js-read",
        "why": "Reading does not change data. Now validate new data before adding a record."
      },
      {
        "id": "project-api-js-id",
        "title": "Find a record by its ID",
        "prompt": "Keep GET and POST /tasks. Add GET /tasks/id. Read the positive integer after /tasks/, find the record with that id, and return it with 200. A missing record returns 404 {\"error\":\"Task not found\"}; an invalid path returns 404 {\"error\":\"Route not found\"}.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const parts = path.split(\"/\");\n  const idText = parts[2] || \"\";\n  const id = Number(idText);\n  if (parts.length !== 3 || parts[0] !== \"\" || parts[1] !== \"tasks\" || !Number.isInteger(id) || id < 1 || String(id) !== idText) return reply(404, {error: 'Route not found'});\n  if (!['GET'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === id);\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  return reply(405, {error: \"Method not allowed\"});\n}",
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
        "mode": "guided",
        "guide": [
          "Split the job into two questions: is this a valid /tasks/id path, and does that id exist?",
          "Use path.split(\"/\") to separate the address. Check that it is /tasks/ followed by a positive whole-number ID; convert that text to a number. In Python, check digits before calling int.",
          "Find the record by id, not by list position. Return it if found; otherwise return the missing-task error."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handleRequest",
        "signature": "handleRequest(method, path, body, tasks)",
        "snippet": "",
        "lesson": "A path identifies the resource. A list index identifies a position, which can change after deletion. IDs should keep identifying the same record.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "continuesFrom": "project-api-js-create",
        "why": "You can read all records. Now pick one record without confusing its ID with its list position."
      },
      {
        "id": "project-api-js-update",
        "title": "Validate and update one record",
        "prompt": "Keep your read and create routes. Add PATCH /tasks/id. Accept a nonblank title and/or boolean done. Reject an empty body, unknown fields, and wrong types with 400 {\"error\":\"Invalid update\"}. Change only the matching copied record; return it with 200.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const parts = path.split(\"/\");\n  const idText = parts[2] || \"\";\n  const id = Number(idText);\n  if (parts.length !== 3 || parts[0] !== \"\" || parts[1] !== \"tasks\" || !Number.isInteger(id) || id < 1 || String(id) !== idText) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === id);\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
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
        "mode": "guided",
        "guide": [
          "Reuse the ID lookup you already wrote. PATCH needs an existing record.",
          "Validate every requested field before changing anything. A string such as \"yes\" is not a boolean.",
          "Update the copied record and return it. Keep its id and any fields the request did not change."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handleRequest",
        "signature": "handleRequest(method, path, body, tasks)",
        "snippet": "",
        "lesson": "PATCH changes selected fields, not the whole record. Validate first so a rejected request leaves data untouched.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "continuesFrom": "project-api-js-id",
        "why": "The ID lookup already works. Reuse it to change one record safely."
      },
      {
        "id": "project-api-js-delete",
        "title": "Delete and return an empty reply",
        "prompt": "Keep all earlier routes. Add DELETE /tasks/id. Remove only the matching record from the copied list and return status 204, data null/None, and the remaining tasks. A missing record still returns the missing-task error.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const parts = path.split(\"/\");\n  const idText = parts[2] || \"\";\n  const id = Number(idText);\n  if (parts.length !== 3 || parts[0] !== \"\" || parts[1] !== \"tasks\" || !Number.isInteger(id) || id < 1 || String(id) !== idText) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === id);\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
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
        "mode": "guided",
        "guide": [
          "Reuse the same path validation and ID lookup.",
          "Remove the matching record from the copied list; keep every other record.",
          "Return 204 with no data. Clients must not try to read JSON from an empty 204 response."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handleRequest",
        "signature": "handleRequest(method, path, body, tasks)",
        "snippet": "",
        "lesson": "Deleting combines two skills you have built: find one ID, then update the collection. The HTTP adapter will turn data null/None into an empty body.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "continuesFrom": "project-api-js-update",
        "why": "Lookup and update are in place. Deletion adds one branch using those same pieces."
      },
      {
        "id": "project-api-js-debug",
        "title": "Fix a route that changes its input",
        "prompt": "The starter has a copying bug: editing a task changes the list passed into the handler. Load it and fix the copying. Keep the complete GET, POST, PATCH, and DELETE behavior. Compare an input record before and after a request.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const parts = path.split(\"/\");\n  const idText = parts[2] || \"\";\n  const id = Number(idText);\n  if (parts.length !== 3 || parts[0] !== \"\" || parts[1] !== \"tasks\" || !Number.isInteger(id) || id < 1 || String(id) !== idText) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === id);\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
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
        "snippet": "function handleRequest(method, path, body, tasks) {\n  const records = tasks;\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const parts = path.split(\"/\");\n  const idText = parts[2] || \"\";\n  const id = Number(idText);\n  if (parts.length !== 3 || parts[0] !== \"\" || parts[1] !== \"tasks\" || !Number.isInteger(id) || id < 1 || String(id) !== idText) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === id);\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
        "lesson": "Sharing a reference is different from copying a value. Bugs appear when one part of your code changes data another part still uses.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "why": "You have built each route. Now find a copying bug that breaks more than one route."
      },
      {
        "id": "project-api-js-challenge",
        "title": "Your turn: complete CRUD routes",
        "prompt": "Rebuild your complete task handler from blank: list, create, read one, update, and delete. Use the behavior you have built in the earlier steps. Examples lists the contract and errors. Keep the inputs unchanged.",
        "answer": "function handleRequest(method, path, body, tasks) {\n  const records = tasks.map(task => ({...task}));\n  const reply = (status, data) => ({status, data, tasks: records});\n  if (path === '/tasks') {\n    if (method === 'GET') return reply(200, records.map(task => ({...task})));\n    if (method !== 'POST') return reply(405, {error: 'Method not allowed'});\n    if (!body || Array.isArray(body) || typeof body.title !== 'string' || !body.title.trim()) return reply(400, {error: 'Title is required'});\n    const task = {id: Math.max(0, ...records.map(task => task.id)) + 1, title: body.title.trim(), done: false};\n    records.push(task);\n    return reply(201, {...task});\n  }\n  const parts = path.split(\"/\");\n  const idText = parts[2] || \"\";\n  const id = Number(idText);\n  if (parts.length !== 3 || parts[0] !== \"\" || parts[1] !== \"tasks\" || !Number.isInteger(id) || id < 1 || String(id) !== idText) return reply(404, {error: 'Route not found'});\n  if (!['GET', 'PATCH', 'DELETE'].includes(method)) return reply(405, {error: 'Method not allowed'});\n  const index = records.findIndex(task => task.id === id);\n  if (index < 0) return reply(404, {error: 'Task not found'});\n  if (method === 'GET') return reply(200, {...records[index]});\n  if (method === 'DELETE') { records.splice(index, 1); return reply(204, null); }\n  if (!body || typeof body !== 'object' || Array.isArray(body) || !Object.keys(body).length || Object.keys(body).some(key => !['title', 'done'].includes(key))) return reply(400, {error: 'Invalid update'});\n  if ('title' in body && (typeof body.title !== 'string' || !body.title.trim())) return reply(400, {error: 'Invalid update'});\n  if ('done' in body && typeof body.done !== 'boolean') return reply(400, {error: 'Invalid update'});\n  if ('title' in body) records[index].title = body.title.trim();\n  if ('done' in body) records[index].done = body.done;\n  return reply(200, {...records[index]});\n}\n",
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
        "preserveInput": true,
        "why": "Use the pieces you have practiced to build a variation independently."
      }
    ],
    "prerequisites": [
      "flight-js-project",
      "practical-js-10",
      "practical-js-11"
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
        "id": "project-api-py-response",
        "title": "Build a response first",
        "prompt": "Start with an empty function. For now, every call returns status 200, data {\"message\":\"API ready\"}, and the unchanged tasks list. This is the shape your later routes will return. The next step will use method and path to choose a response.",
        "answer": "def handle_request(method, path, body, tasks):\n    return {\"status\": 200, \"data\": {\"message\": \"API ready\"}, \"tasks\": tasks}",
        "tests": [
          {
            "args": [
              "GET",
              "/health",
              null,
              []
            ],
            "expected": {
              "status": 200,
              "data": {
                "message": "API ready"
              },
              "tasks": []
            }
          },
          {
            "args": [
              "GET",
              "/health",
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
                "message": "API ready"
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
          "The four inputs are method (the action), path (the address), body (new values), and tasks (stored records).",
          "Return an object/dictionary with status, data, and tasks. 200 means the request worked.",
          "Call the function with an empty tasks list. Predict the response before checking."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handle_request",
        "signature": "handle_request(method, path, body, tasks)",
        "snippet": "",
        "lesson": "A route decision is a function: request information goes in, a reply comes out. Later Express or Flask will translate between this function and real HTTP. The reply is an internal contract: the HTTP adapter sends data to the client, and keeps tasks as server state.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "why": "Status says whether the action worked. Data is the reply the client sees. Tasks is the list the server keeps; the adapter saves it."
      },
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
        "preserveInput": true,
        "continuesFrom": "project-api-py-response",
        "why": "Replace the temporary welcome response with a decision based on method and path."
      },
      {
        "id": "project-api-py-create",
        "title": "Validate and create a task",
        "prompt": "Keep GET /tasks. Add POST /tasks: require a nonblank string title, trim it, assign max existing id + 1 (or 1 for an empty list), and set done false. Return status 201 with the new task as data and the updated list as tasks. Invalid input returns 400 with {\"error\":\"Title is required\"} and unchanged tasks.",
        "answer": "\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    return reply(404, {\"error\": \"Route not found\"})",
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
        "snippet": "",
        "lesson": "Validation belongs on the server even when the page validates too. A caller can send requests without using your form.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "continuesFrom": "project-api-py-read",
        "why": "Reading does not change data. Now validate new data before adding a record."
      },
      {
        "id": "project-api-py-id",
        "title": "Find a record by its ID",
        "prompt": "Keep GET and POST /tasks. Add GET /tasks/id. Read the positive integer after /tasks/, find the record with that id, and return it with 200. A missing record returns 404 {\"error\":\"Task not found\"}; an invalid path returns 404 {\"error\":\"Route not found\"}.",
        "answer": "\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    parts = path.split(\"/\")\n    id_text = parts[2] if len(parts) == 3 else \"\"\n    if len(parts) != 3 or parts[0] != \"\" or parts[1] != \"tasks\" or not id_text or any(c not in \"0123456789\" for c in id_text):\n        return reply(404, {\"error\": \"Route not found\"})\n    wanted = int(id_text)\n    if wanted < 1 or str(wanted) != id_text:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == wanted), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    return reply(405, {\"error\": \"Method not allowed\"})",
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
        "mode": "guided",
        "guide": [
          "Split the job into two questions: is this a valid /tasks/id path, and does that id exist?",
          "Use path.split(\"/\") to separate the address. Check that it is /tasks/ followed by a positive whole-number ID; convert that text to a number. In Python, check digits before calling int.",
          "Find the record by id, not by list position. Return it if found; otherwise return the missing-task error."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handle_request",
        "signature": "handle_request(method, path, body, tasks)",
        "snippet": "",
        "lesson": "A path identifies the resource. A list index identifies a position, which can change after deletion. IDs should keep identifying the same record.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "continuesFrom": "project-api-py-create",
        "why": "You can read all records. Now pick one record without confusing its ID with its list position."
      },
      {
        "id": "project-api-py-update",
        "title": "Validate and update one record",
        "prompt": "Keep your read and create routes. Add PATCH /tasks/id. Accept a nonblank title and/or boolean done. Reject an empty body, unknown fields, and wrong types with 400 {\"error\":\"Invalid update\"}. Change only the matching copied record; return it with 200.",
        "answer": "\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    parts = path.split(\"/\")\n    id_text = parts[2] if len(parts) == 3 else \"\"\n    if len(parts) != 3 or parts[0] != \"\" or parts[1] != \"tasks\" or not id_text or any(c not in \"0123456789\" for c in id_text):\n        return reply(404, {\"error\": \"Route not found\"})\n    wanted = int(id_text)\n    if wanted < 1 or str(wanted) != id_text:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == wanted), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
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
        "mode": "guided",
        "guide": [
          "Reuse the ID lookup you already wrote. PATCH needs an existing record.",
          "Validate every requested field before changing anything. A string such as \"yes\" is not a boolean.",
          "Update the copied record and return it. Keep its id and any fields the request did not change."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handle_request",
        "signature": "handle_request(method, path, body, tasks)",
        "snippet": "",
        "lesson": "PATCH changes selected fields, not the whole record. Validate first so a rejected request leaves data untouched.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "continuesFrom": "project-api-py-id",
        "why": "The ID lookup already works. Reuse it to change one record safely."
      },
      {
        "id": "project-api-py-delete",
        "title": "Delete and return an empty reply",
        "prompt": "Keep all earlier routes. Add DELETE /tasks/id. Remove only the matching record from the copied list and return status 204, data null/None, and the remaining tasks. A missing record still returns the missing-task error.",
        "answer": "\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    parts = path.split(\"/\")\n    id_text = parts[2] if len(parts) == 3 else \"\"\n    if len(parts) != 3 or parts[0] != \"\" or parts[1] != \"tasks\" or not id_text or any(c not in \"0123456789\" for c in id_text):\n        return reply(404, {\"error\": \"Route not found\"})\n    wanted = int(id_text)\n    if wanted < 1 or str(wanted) != id_text:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\", \"DELETE\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == wanted), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if method == \"DELETE\":\n        records.pop(index)\n        return reply(204, None)\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
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
        "mode": "guided",
        "guide": [
          "Reuse the same path validation and ID lookup.",
          "Remove the matching record from the copied list; keep every other record.",
          "Return 204 with no data. Clients must not try to read JSON from an empty 204 response."
        ],
        "html": false,
        "dom": false,
        "fixture": "",
        "functionName": "handle_request",
        "signature": "handle_request(method, path, body, tasks)",
        "snippet": "",
        "lesson": "Deleting combines two skills you have built: find one ID, then update the collection. The HTTP adapter will turn data null/None into an empty body.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "continuesFrom": "project-api-py-update",
        "why": "Lookup and update are in place. Deletion adds one branch using those same pieces."
      },
      {
        "id": "project-api-py-debug",
        "title": "Fix a route that changes its input",
        "prompt": "The starter has a copying bug: editing a task changes the list passed into the handler. Load it and fix the copying. Keep the complete GET, POST, PATCH, and DELETE behavior. Compare an input record before and after a request.",
        "answer": "\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    parts = path.split(\"/\")\n    id_text = parts[2] if len(parts) == 3 else \"\"\n    if len(parts) != 3 or parts[0] != \"\" or parts[1] != \"tasks\" or not id_text or any(c not in \"0123456789\" for c in id_text):\n        return reply(404, {\"error\": \"Route not found\"})\n    wanted = int(id_text)\n    if wanted < 1 or str(wanted) != id_text:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\", \"DELETE\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == wanted), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if method == \"DELETE\":\n        records.pop(index)\n        return reply(204, None)\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
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
        "snippet": "\n\ndef handle_request(method, path, body, tasks):\n    records = tasks\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    parts = path.split(\"/\")\n    id_text = parts[2] if len(parts) == 3 else \"\"\n    if len(parts) != 3 or parts[0] != \"\" or parts[1] != \"tasks\" or not id_text or any(c not in \"0123456789\" for c in id_text):\n        return reply(404, {\"error\": \"Route not found\"})\n    wanted = int(id_text)\n    if wanted < 1 or str(wanted) != id_text:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\", \"DELETE\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == wanted), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if method == \"DELETE\":\n        records.pop(index)\n        return reply(204, None)\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
        "lesson": "Sharing a reference is different from copying a value. Bugs appear when one part of your code changes data another part still uses.",
        "hints": [
          "Try the first requirement alone. Use the preview or a small input to see what happens.",
          "Look at the example cases. What must change, and what must stay the same?",
          "Break the job into small functions. Read the guided steps again, then retry the part you are stuck on."
        ],
        "constraints": [],
        "stretch": "Trace one input or click. Explain what changes, then try from blank.",
        "preserveInput": true,
        "why": "You have built each route. Now find a copying bug that breaks more than one route."
      },
      {
        "id": "project-api-py-challenge",
        "title": "Your turn: complete CRUD routes",
        "prompt": "Rebuild your complete task handler from blank: list, create, read one, update, and delete. Use the behavior you have built in the earlier steps. Examples lists the contract and errors. Keep the inputs unchanged.",
        "answer": "\n\ndef handle_request(method, path, body, tasks):\n    records = [dict(task) for task in tasks]\n\n    def reply(status, data):\n        return {\"status\": status, \"data\": data, \"tasks\": records}\n\n    if path == \"/tasks\":\n        if method == \"GET\":\n            return reply(200, [dict(task) for task in records])\n        if method != \"POST\":\n            return reply(405, {\"error\": \"Method not allowed\"})\n        if not isinstance(body, dict) or not isinstance(body.get(\"title\"), str) or not body[\"title\"].strip():\n            return reply(400, {\"error\": \"Title is required\"})\n        task = {\"id\": max([0] + [t[\"id\"] for t in records]) + 1, \"title\": body[\"title\"].strip(), \"done\": False}\n        records.append(task)\n        return reply(201, dict(task))\n    parts = path.split(\"/\")\n    id_text = parts[2] if len(parts) == 3 else \"\"\n    if len(parts) != 3 or parts[0] != \"\" or parts[1] != \"tasks\" or not id_text or any(c not in \"0123456789\" for c in id_text):\n        return reply(404, {\"error\": \"Route not found\"})\n    wanted = int(id_text)\n    if wanted < 1 or str(wanted) != id_text:\n        return reply(404, {\"error\": \"Route not found\"})\n    if method not in [\"GET\", \"PATCH\", \"DELETE\"]:\n        return reply(405, {\"error\": \"Method not allowed\"})\n    index = next((i for i, task in enumerate(records) if task[\"id\"] == wanted), -1)\n    if index == -1:\n        return reply(404, {\"error\": \"Task not found\"})\n    if method == \"GET\":\n        return reply(200, dict(records[index]))\n    if method == \"DELETE\":\n        records.pop(index)\n        return reply(204, None)\n    if not isinstance(body, dict) or not body or any(key not in [\"title\", \"done\"] for key in body):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body and (not isinstance(body[\"title\"], str) or not body[\"title\"].strip()):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"done\" in body and not isinstance(body[\"done\"], bool):\n        return reply(400, {\"error\": \"Invalid update\"})\n    if \"title\" in body:\n        records[index][\"title\"] = body[\"title\"].strip()\n    if \"done\" in body:\n        records[index][\"done\"] = body[\"done\"]\n    return reply(200, dict(records[index]))\n",
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
        "preserveInput": true,
        "why": "Use the pieces you have practiced to build a variation independently."
      }
    ],
    "prerequisites": [
      "flight-py-project",
      "practical-py-10",
      "practical-py-11"
    ]
  }
];
