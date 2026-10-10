// Small word problems with repeated tools, then CRUD and offline HTTP practice.
export const practicalSections = [
  {
    "id": "practical-js-8",
    "title": "JavaScript 8 · Useful methods · one small step",
    "language": "javascript",
    "stage": 8,
    "level": "Everyday practice",
    "description": "One small job at a time: keep, double, add, clean, find, and pop.",
    "exercises": [
      {
        "id": "practical-js-even",
        "title": "Keep the even numbers",
        "prompt": "You have a list of numbers. Keep only numbers that divide by 2 with no remainder. Keep their original order.",
        "functionName": "practice_even",
        "signature": "practice_even(numbers)",
        "snippet": "function practice_even(numbers) {\n  // Write one small step first.\n}",
        "answer": "function practice_even(numbers) {\n  return numbers.filter(n => n % 2 === 0);\n}",
        "tests": [
          {
            "args": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": [
              2,
              4
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                -2,
                -1,
                0
              ]
            ],
            "expected": [
              -2,
              0
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: filter + %. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "For each number, ask: is number % 2 equal to 0?",
          "Keep the number only when that check is true."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-double",
        "title": "Double each number",
        "prompt": "A game gives double points today. Return a new list with each score multiplied by 2. Keep every score.",
        "functionName": "practice_double",
        "signature": "practice_double(numbers)",
        "snippet": "function practice_double(numbers) {\n  // Write one small step first.\n}",
        "answer": "function practice_double(numbers) {\n  return numbers.map(n => n * 2);\n}",
        "tests": [
          {
            "args": [
              [
                1,
                3
              ]
            ],
            "expected": [
              2,
              6
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                -2,
                0,
                5
              ]
            ],
            "expected": [
              -4,
              0,
              10
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: map. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep the same number of items. Each new item is the old item times 2.",
          "Use map or a comprehension. You are changing values, not removing them."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-total",
        "title": "Add the prices",
        "prompt": "Your basket has these prices. Return the total. An empty basket costs 0.",
        "functionName": "practice_total",
        "signature": "practice_total(prices)",
        "snippet": "function practice_total(prices) {\n  // Write one small step first.\n}",
        "answer": "function practice_total(prices) {\n  return prices.reduce((total, price) => total + price, 0);\n}",
        "tests": [
          {
            "args": [
              [
                4,
                6,
                2
              ]
            ],
            "expected": 12
          },
          {
            "args": [
              []
            ],
            "expected": 0
          },
          {
            "args": [
              [
                0,
                3
              ]
            ],
            "expected": 3
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: reduce. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Start a total at 0. Add each price to it.",
          "reduce needs an initial 0; Python sum already handles an empty list."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-clean",
        "title": "Clean a name",
        "prompt": "Someone typed extra spaces around a name. Remove the outside spaces and make all letters lowercase. Keep spaces inside the name.",
        "functionName": "practice_clean",
        "signature": "practice_clean(text)",
        "snippet": "function practice_clean(text) {\n  // Write one small step first.\n}",
        "answer": "function practice_clean(text) {\n  return text.trim().toLowerCase();\n}",
        "tests": [
          {
            "args": [
              "  SAM Lee  "
            ],
            "expected": "sam lee"
          },
          {
            "args": [
              "   "
            ],
            "expected": ""
          },
          {
            "args": [
              "Ada"
            ],
            "expected": "ada"
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: trim + toLowerCase. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Remove outside spaces first.",
          "Make the cleaned text lowercase, then return it."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-contains",
        "title": "Is an item packed?",
        "prompt": "Return true/True if wanted is in the packing list. Match the text exactly. Otherwise return false/False.",
        "functionName": "practice_contains",
        "signature": "practice_contains(items, wanted)",
        "snippet": "function practice_contains(items, wanted) {\n  // Write one small step first.\n}",
        "answer": "function practice_contains(items, wanted) {\n  return items.includes(wanted);\n}",
        "tests": [
          {
            "args": [
              [
                "hat",
                "book"
              ],
              "hat"
            ],
            "expected": true
          },
          {
            "args": [
              [],
              "hat"
            ],
            "expected": false
          },
          {
            "args": [
              [
                "Hat"
              ],
              "hat"
            ],
            "expected": false
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: includes. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Compare wanted with items in the list.",
          "includes or in does this search for you. Return its true/false result."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-last",
        "title": "Take the last item",
        "prompt": "Copy the list, remove its last item, and return that removed item. Return null/None if the list is empty. The original list must stay unchanged.",
        "functionName": "practice_last",
        "signature": "practice_last(items)",
        "snippet": "function practice_last(items) {\n  // Write one small step first.\n}",
        "answer": "function practice_last(items) {\n  const copy = items.slice(); return copy.length ? copy.pop() : null;\n}",
        "tests": [
          {
            "args": [
              [
                "pen",
                "book"
              ]
            ],
            "expected": "book"
          },
          {
            "args": [
              []
            ],
            "expected": null
          },
          {
            "args": [
              [
                0
              ]
            ],
            "expected": 0
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: slice + pop. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Make a copy first so pop does not change the input.",
          "Check whether the copy is empty. Otherwise pop and return the removed value."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-js-9",
    "title": "JavaScript 9 · Combine small steps",
    "language": "javascript",
    "stage": 9,
    "level": "Everyday practice",
    "description": "Put two or three small steps together. Keep → change → return.",
    "exercises": [
      {
        "id": "practical-js-even-double",
        "title": "Keep, then change",
        "prompt": "Keep the even numbers. Then double each number you kept. Return the new list.",
        "functionName": "practice_even_double",
        "signature": "practice_even_double(numbers)",
        "snippet": "function practice_even_double(numbers) {\n  // Write one small step first.\n}",
        "answer": "function practice_even_double(numbers) {\n  return numbers.filter(n => n % 2 === 0).map(n => n * 2);\n}",
        "tests": [
          {
            "args": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": [
              4,
              8
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                -2,
                0,
                5
              ]
            ],
            "expected": [
              -4,
              0
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: filter → map. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "First build a list of even numbers using % 2.",
          "Double the kept numbers, not every original number."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-word-count",
        "title": "Count the words",
        "prompt": "Count words separated by spaces, tabs, or newlines. Extra spaces do not count as words. Empty text has 0 words.",
        "functionName": "practice_word_count",
        "signature": "practice_word_count(text)",
        "snippet": "function practice_word_count(text) {\n  // Write one small step first.\n}",
        "answer": "function practice_word_count(text) {\n  const clean = text.trim(); return clean ? clean.split(/\\s+/).length : 0;\n}",
        "tests": [
          {
            "args": [
              "  learn   to code  "
            ],
            "expected": 3
          },
          {
            "args": [
              " \t\n "
            ],
            "expected": 0
          },
          {
            "args": [
              "one\ntwo"
            ],
            "expected": 2
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: trim + split. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Remove outside spaces. Split the text into words using whitespace.",
          "Count the resulting words. Watch out: empty text should give 0."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-labels",
        "title": "Make a short label",
        "prompt": "Remove blank words, trim each remaining word, make them lowercase, and join them with a dash. Keep their order.",
        "functionName": "practice_labels",
        "signature": "practice_labels(words)",
        "snippet": "function practice_labels(words) {\n  // Write one small step first.\n}",
        "answer": "function practice_labels(words) {\n  return words.map(w => w.trim().toLowerCase()).filter(w => w.length > 0).join(\"-\");\n}",
        "tests": [
          {
            "args": [
              [
                " Learn ",
                "",
                " CODE "
              ]
            ],
            "expected": "learn-code"
          },
          {
            "args": [
              []
            ],
            "expected": ""
          },
          {
            "args": [
              [
                "  ",
                "JS"
              ]
            ],
            "expected": "js"
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: map → filter → join. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Clean each word. Remove the ones that are empty after cleaning.",
          "Join the remaining words with \"-\" between them."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-cheapest",
        "title": "Pick the cheapest three",
        "prompt": "Return up to three lowest prices in ascending order. Keep duplicate prices. Do not change the original list.",
        "functionName": "practice_cheapest",
        "signature": "practice_cheapest(prices)",
        "snippet": "function practice_cheapest(prices) {\n  // Write one small step first.\n}",
        "answer": "function practice_cheapest(prices) {\n  return [...prices].sort((a, b) => a - b).slice(0, 3);\n}",
        "tests": [
          {
            "args": [
              [
                20,
                3,
                10,
                2
              ]
            ],
            "expected": [
              2,
              3,
              10
            ]
          },
          {
            "args": [
              [
                5,
                5
              ]
            ],
            "expected": [
              5,
              5
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: spread + numeric sort + slice. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Make a sorted copy. JavaScript needs a numeric comparator (a, b) => a - b.",
          "Take items from index 0 up to, but not including, index 3."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-positive-total",
        "title": "Add only positive scores",
        "prompt": "Add only numbers greater than 0. Ignore 0 and negative numbers. Return 0 if none qualify.",
        "functionName": "practice_positive_total",
        "signature": "practice_positive_total(numbers)",
        "snippet": "function practice_positive_total(numbers) {\n  // Write one small step first.\n}",
        "answer": "function practice_positive_total(numbers) {\n  return numbers.filter(n => n > 0).reduce((sum, n) => sum + n, 0);\n}",
        "tests": [
          {
            "args": [
              [
                -1,
                4,
                0,
                3
              ]
            ],
            "expected": 7
          },
          {
            "args": [
              []
            ],
            "expected": 0
          },
          {
            "args": [
              [
                -3,
                -2
              ]
            ],
            "expected": 0
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: filter → reduce. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep only numbers greater than 0.",
          "Add those numbers. Start from 0 so an empty list works."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-unique",
        "title": "Remove repeated tags",
        "prompt": "Return each tag only once, in the order it first appeared. Match text exactly.",
        "functionName": "practice_unique",
        "signature": "practice_unique(tags)",
        "snippet": "function practice_unique(tags) {\n  // Write one small step first.\n}",
        "answer": "function practice_unique(tags) {\n  return [...new Set(tags)];\n}",
        "tests": [
          {
            "args": [
              [
                "js",
                "py",
                "js"
              ]
            ],
            "expected": [
              "js",
              "py"
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                "JS",
                "js"
              ]
            ],
            "expected": [
              "JS",
              "js"
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: Set + spread. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep a set of tags you have already seen.",
          "Add a tag to the result only the first time you see it."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-js-10",
    "title": "JavaScript 10 · Work with records",
    "language": "javascript",
    "stage": 10,
    "level": "Everyday practice",
    "description": "Read a list of people or tasks. Find the fields you need.",
    "exercises": [
      {
        "id": "practical-js-names",
        "title": "Read names from records",
        "prompt": "Each person has a name and an age. Return just their names, in order.",
        "functionName": "practice_names",
        "signature": "practice_names(people)",
        "snippet": "function practice_names(people) {\n  // Write one small step first.\n}",
        "answer": "function practice_names(people) {\n  return people.map(person => person.name);\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "name": "Sam",
                  "age": 20
                },
                {
                  "name": "Jo",
                  "age": 18
                }
              ]
            ],
            "expected": [
              "Sam",
              "Jo"
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                {
                  "name": "",
                  "age": 0
                }
              ]
            ],
            "expected": [
              ""
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: map + property access. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Look at one person record. Which field holds the name?",
          "Visit every person and collect that field into a new list."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-find",
        "title": "Find one task",
        "prompt": "Return the first task with this id. Return null/None when it is missing. A task has id, title, and done.",
        "functionName": "practice_find",
        "signature": "practice_find(tasks, id)",
        "snippet": "function practice_find(tasks, id) {\n  // Write one small step first.\n}",
        "answer": "function practice_find(tasks, id) {\n  return tasks.find(task => task.id === id) ?? null;\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Read",
                  "done": false
                }
              ],
              1
            ],
            "expected": {
              "id": 1,
              "title": "Read",
              "done": false
            }
          },
          {
            "args": [
              [],
              1
            ],
            "expected": null
          },
          {
            "args": [
              [
                {
                  "id": 2,
                  "title": "Code",
                  "done": true
                }
              ],
              1
            ],
            "expected": null
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: find + ??. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Compare each task id with the requested id.",
          "Return the matching record immediately. Return null/None after the search if none matched."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-all-done",
        "title": "Are all tasks done?",
        "prompt": "Return true/True only if every task is done. An empty task list counts as all done.",
        "functionName": "practice_all_done",
        "signature": "practice_all_done(tasks)",
        "snippet": "function practice_all_done(tasks) {\n  // Write one small step first.\n}",
        "answer": "function practice_all_done(tasks) {\n  return tasks.every(task => task.done);\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "done": true
                },
                {
                  "done": false
                }
              ]
            ],
            "expected": false
          },
          {
            "args": [
              [
                {
                  "done": true
                }
              ]
            ],
            "expected": true
          },
          {
            "args": [
              []
            ],
            "expected": true
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: every. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Check the done field of every task.",
          "every/all returns false when any task is unfinished. Empty lists return true."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-any-late",
        "title": "Is any delivery late?",
        "prompt": "Each delivery has late set to true/True or false/False. Return whether at least one delivery is late. An empty list returns false/False.",
        "functionName": "practice_any_late",
        "signature": "practice_any_late(deliveries)",
        "snippet": "function practice_any_late(deliveries) {\n  // Write one small step first.\n}",
        "answer": "function practice_any_late(deliveries) {\n  return deliveries.some(delivery => delivery.late);\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "late": false
                },
                {
                  "late": true
                }
              ]
            ],
            "expected": true
          },
          {
            "args": [
              [
                {
                  "late": false
                }
              ]
            ],
            "expected": false
          },
          {
            "args": [
              []
            ],
            "expected": false
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: some. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Look for one delivery whose late field is true.",
          "some/any returns true as soon as one qualifies. Empty lists return false."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-lookup",
        "title": "Build a name lookup",
        "prompt": "Return an object/dictionary whose keys are the people's string ids and whose values are their names. Ids are unique.",
        "functionName": "practice_lookup",
        "signature": "practice_lookup(people)",
        "snippet": "function practice_lookup(people) {\n  // Write one small step first.\n}",
        "answer": "function practice_lookup(people) {\n  return Object.fromEntries(people.map(person => [person.id, person.name]));\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "id": "a",
                  "name": "Sam"
                },
                {
                  "id": "b",
                  "name": "Jo"
                }
              ]
            ],
            "expected": {
              "a": "Sam",
              "b": "Jo"
            }
          },
          {
            "args": [
              []
            ],
            "expected": {}
          },
          {
            "args": [
              [
                {
                  "id": "x",
                  "name": ""
                }
              ]
            ],
            "expected": {
              "x": ""
            }
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: Object.fromEntries + map. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Each person becomes one key-value pair: id → name.",
          "Collect those pairs in an object/dictionary."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-open-titles",
        "title": "Show unfinished work",
        "prompt": "Keep tasks that are not done. Return their titles in order. This is the data a task-list page needs.",
        "functionName": "practice_open_titles",
        "signature": "practice_open_titles(tasks)",
        "snippet": "function practice_open_titles(tasks) {\n  // Write one small step first.\n}",
        "answer": "function practice_open_titles(tasks) {\n  return tasks.filter(task => !task.done).map(task => task.title);\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "title": "Read",
                  "done": false
                },
                {
                  "title": "Code",
                  "done": true
                }
              ]
            ],
            "expected": [
              "Read"
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                {
                  "title": "Sleep",
                  "done": true
                }
              ]
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: filter → map. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep the unfinished tasks first.",
          "From those records, collect just the titles."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-js-11",
    "title": "JavaScript 11 · Build CRUD helpers",
    "language": "javascript",
    "stage": 11,
    "level": "Everyday practice",
    "description": "Create, read, update, and delete tasks. Then add a search.",
    "exercises": [
      {
        "id": "practical-js-create",
        "title": "Create a task",
        "prompt": "Return a new list with a new task added at the end: id, the trimmed title, and done set to false/False. If the title is blank or the id already exists, return an unchanged copy.",
        "functionName": "practice_create",
        "signature": "practice_create(tasks, id, title)",
        "snippet": "function practice_create(tasks, id, title) {\n  // Write one small step first.\n}",
        "answer": "function practice_create(tasks, id, title) {\n  const clean = title.trim(); if (!clean || tasks.some(t => t.id === id)) return [...tasks]; return [...tasks, {id, title: clean, done: false}];\n}",
        "tests": [
          {
            "args": [
              [],
              1,
              " Read "
            ],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [
              [],
              1,
              " "
            ],
            "expected": []
          },
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Read",
                  "done": false
                }
              ],
              1,
              "New"
            ],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: some + trim + spread. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Trim the title. Reject a blank title or an id already in the list.",
          "Copy the list and add a record with id, title, and done set to false."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-read",
        "title": "Read one task",
        "prompt": "A user opens a task. Return the task with this id, or null/None if missing. This is the Read part of CRUD: Create, Read, Update, Delete.",
        "functionName": "practice_read",
        "signature": "practice_read(tasks, id)",
        "snippet": "function practice_read(tasks, id) {\n  // Write one small step first.\n}",
        "answer": "function practice_read(tasks, id) {\n  return tasks.find(t => t.id === id) ?? null;\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 2,
                  "title": "Code",
                  "done": false
                }
              ],
              2
            ],
            "expected": {
              "id": 2,
              "title": "Code",
              "done": false
            }
          },
          {
            "args": [
              [],
              1
            ],
            "expected": null
          },
          {
            "args": [
              [
                {
                  "id": 2,
                  "title": "Code",
                  "done": false
                }
              ],
              9
            ],
            "expected": null
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: find. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Search by id, not by title or list position.",
          "Return the matching record, or null/None if missing."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-update",
        "title": "Rename a task",
        "prompt": "Return a new list with only the matching task renamed to the trimmed title. Keep its other fields. A blank title or missing id leaves the list unchanged.",
        "functionName": "practice_update",
        "signature": "practice_update(tasks, id, title)",
        "snippet": "function practice_update(tasks, id, title) {\n  // Write one small step first.\n}",
        "answer": "function practice_update(tasks, id, title) {\n  const clean = title.trim(); return tasks.map(t => t.id === id && clean ? {...t, title: clean} : {...t});\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Old",
                  "done": true
                }
              ],
              1,
              " New "
            ],
            "expected": [
              {
                "id": 1,
                "title": "New",
                "done": true
              }
            ]
          },
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Old",
                  "done": false
                }
              ],
              1,
              " "
            ],
            "expected": [
              {
                "id": 1,
                "title": "Old",
                "done": false
              }
            ]
          },
          {
            "args": [
              [],
              9,
              "New"
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: map + spread. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "For each task, make a copy. Change only the matching id.",
          "Replace the copied title only if the trimmed new title is not blank. Keep done and other fields."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-toggle",
        "title": "Toggle a task",
        "prompt": "Return a new list. Flip done only for the matching task: true becomes false, and false becomes true. Keep its id and title.",
        "functionName": "practice_toggle",
        "signature": "practice_toggle(tasks, id)",
        "snippet": "function practice_toggle(tasks, id) {\n  // Write one small step first.\n}",
        "answer": "function practice_toggle(tasks, id) {\n  return tasks.map(t => t.id === id ? {...t, done: !t.done} : {...t});\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Read",
                  "done": false
                }
              ],
              1
            ],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": true
              }
            ]
          },
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Read",
                  "done": true
                }
              ],
              1
            ],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [
              [],
              9
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: map + spread + !. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Copy each task. For the matching id, read its current done value.",
          "Use ! in JavaScript or not in Python to flip that value."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-delete",
        "title": "Delete one task",
        "prompt": "Return a new list without the task with this id. Keep the other tasks in order. A missing id changes nothing.",
        "functionName": "practice_delete_task",
        "signature": "practice_delete_task(tasks, id)",
        "snippet": "function practice_delete_task(tasks, id) {\n  // Write one small step first.\n}",
        "answer": "function practice_delete_task(tasks, id) {\n  return tasks.filter(t => t.id !== id);\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 1
                },
                {
                  "id": 2
                }
              ],
              1
            ],
            "expected": [
              {
                "id": 2
              }
            ]
          },
          {
            "args": [
              [
                {
                  "id": 1
                }
              ],
              9
            ],
            "expected": [
              {
                "id": 1
              }
            ]
          },
          {
            "args": [
              [],
              1
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: filter. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep tasks whose id is different from the requested id.",
          "Filtering returns a new list. Do not remove by list index: an id is not an index."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-search",
        "title": "Search the task list",
        "prompt": "Trim the query and ignore letter case. Return tasks whose titles contain it. A blank query returns all tasks.",
        "functionName": "practice_search",
        "signature": "practice_search(tasks, query)",
        "snippet": "function practice_search(tasks, query) {\n  // Write one small step first.\n}",
        "answer": "function practice_search(tasks, query) {\n  const q = query.trim().toLowerCase(); return tasks.filter(t => t.title.toLowerCase().includes(q));\n}",
        "tests": [
          {
            "args": [
              [
                {
                  "title": "Read JS"
                },
                {
                  "title": "Write Python"
                }
              ],
              " js "
            ],
            "expected": [
              {
                "title": "Read JS"
              }
            ]
          },
          {
            "args": [
              [
                {
                  "title": "Read"
                }
              ],
              " "
            ],
            "expected": [
              {
                "title": "Read"
              }
            ]
          },
          {
            "args": [
              [],
              "x"
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: trim + toLowerCase + filter + includes. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Clean the query by trimming it and making it lowercase.",
          "Lowercase each title too, then check whether it contains the cleaned query."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-js-12",
    "title": "JavaScript 12 · Practice API requests",
    "language": "javascript",
    "stage": 12,
    "level": "Everyday practice",
    "description": "Ask the practice service to read or save tasks. Check whether it worked.",
    "exercises": [
      {
        "id": "practical-js-api-list",
        "title": "Ask for all tasks",
        "prompt": "Ask the practice API for all tasks with GET /tasks. Return the response data. If the status is not 200, return an empty list.",
        "functionName": "practice_api_list",
        "signature": "async practice_api_list()",
        "snippet": "async function practice_api_list() {\n  // Write one small step first.\n}",
        "answer": "async function practice_api_list() {\n  const response = await fetch(\"/tasks\"); return response.status === 200 ? await response.json() : [];\n}",
        "tests": [
          {
            "args": [],
            "expected": [],
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "seed": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "apiStatus": 200,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [],
            "expected": [],
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": []
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "GET asks to read data. 200 means the request worked. 503 means the service is unavailable. JavaScript: await fetch waits for the response; await response.json() reads its data.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Send GET /tasks. JavaScript: await fetch, then await response.json(). Python: api.request returns a dictionary.",
          "Check status before reading data. Return [] for an error status."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-api-one",
        "title": "Ask for one task",
        "prompt": "Ask for GET /tasks/id. Return the task on status 200. Return null/None for a missing task or other error.",
        "functionName": "practice_api_one",
        "signature": "async practice_api_one(id)",
        "snippet": "async function practice_api_one(id) {\n  // Write one small step first.\n}",
        "answer": "async function practice_api_one(id) {\n  const response = await fetch(`/tasks/${id}`); return response.status === 200 ? await response.json() : null;\n}",
        "tests": [
          {
            "args": [
              1
            ],
            "expected": {
              "id": 1,
              "title": "Read",
              "done": false
            },
            "seed": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "apiStatus": 200,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks/1",
                "body": null
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [
              9
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks/9",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [
              1
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks/1",
                "body": null
              }
            ],
            "records": []
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "A path like /tasks/7 asks for task 7. 404 means no matching task was found. JavaScript: await fetch waits for the response; await response.json() reads its data.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Build the path by adding the id to /tasks/.",
          "Send GET. Read the task only on status 200; otherwise return null/None."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-api-create",
        "title": "Send a new task",
        "prompt": "Trim the title. If blank, return null/None without sending a request. Otherwise POST /tasks with a JSON body containing title. Return the new task on status 201, otherwise null/None.",
        "functionName": "practice_api_create",
        "signature": "async practice_api_create(title)",
        "snippet": "async function practice_api_create(title) {\n  // Write one small step first.\n}",
        "answer": "async function practice_api_create(title) {\n  const clean = title.trim(); if (!clean) return null; const response = await fetch(\"/tasks\", {method:\"POST\", headers:{\"Content-Type\":\"application/json\"}, body:JSON.stringify({title:clean})}); return response.status === 201 ? await response.json() : null;\n}",
        "tests": [
          {
            "args": [
              " Read "
            ],
            "expected": {
              "id": 1,
              "title": "Read",
              "done": false
            },
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Read"
                }
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [
              " "
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 200,
            "requests": [],
            "records": []
          },
          {
            "args": [
              "Read"
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Read"
                }
              }
            ],
            "records": []
          },
          {
            "args": [
              " Next "
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              }
            ],
            "apiStatus": 200,
            "expected": {
              "id": 5,
              "title": "Next",
              "done": false
            },
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Next"
                }
              }
            ],
            "records": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": false
              }
            ]
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "POST asks to create a record. The body contains the new values. 201 means a new record was created. JavaScript: await fetch waits for the response; await response.json() reads its data.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Trim the title and return early if blank.",
          "Send POST with a body containing title. JavaScript serializes it with JSON.stringify. Check for status 201."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-api-update",
        "title": "Save a finished task",
        "prompt": "PATCH /tasks/id with a JSON body containing done: true/True. Return the changed task on status 200, otherwise null/None.",
        "functionName": "practice_api_update",
        "signature": "async practice_api_update(id)",
        "snippet": "async function practice_api_update(id) {\n  // Write one small step first.\n}",
        "answer": "async function practice_api_update(id) {\n  const response = await fetch(`/tasks/${id}`, {method:\"PATCH\", headers:{\"Content-Type\":\"application/json\"}, body:JSON.stringify({done:true})}); return response.status === 200 ? await response.json() : null;\n}",
        "tests": [
          {
            "args": [
              1
            ],
            "expected": {
              "id": 1,
              "title": "Read",
              "done": true
            },
            "seed": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "apiStatus": 200,
            "requests": [
              {
                "method": "PATCH",
                "path": "/tasks/1",
                "body": {
                  "done": true
                }
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Read",
                "done": true
              }
            ]
          },
          {
            "args": [
              9
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "PATCH",
                "path": "/tasks/9",
                "body": {
                  "done": true
                }
              }
            ],
            "records": []
          },
          {
            "args": [
              1
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "PATCH",
                "path": "/tasks/1",
                "body": {
                  "done": true
                }
              }
            ],
            "records": []
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "PATCH changes selected fields on an existing record. Send done, not a whole replacement task. JavaScript: await fetch waits for the response; await response.json() reads its data.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Build /tasks/id and send PATCH with done set to true.",
          "Check for status 200 before returning the response data."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-api-delete",
        "title": "Remove a saved task",
        "prompt": "DELETE /tasks/id. Return true/True only when the response status is 204. A missing task returns false/False. Do not try to read JSON from a 204 response: it has no body.",
        "functionName": "practice_api_delete",
        "signature": "async practice_api_delete(id)",
        "snippet": "async function practice_api_delete(id) {\n  // Write one small step first.\n}",
        "answer": "async function practice_api_delete(id) {\n  const response = await fetch(`/tasks/${id}`, {method:\"DELETE\"}); return response.status === 204;\n}",
        "tests": [
          {
            "args": [
              1
            ],
            "expected": true,
            "seed": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "apiStatus": 200,
            "requests": [
              {
                "method": "DELETE",
                "path": "/tasks/1",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [
              9
            ],
            "expected": false,
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "DELETE",
                "path": "/tasks/9",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [
              1
            ],
            "expected": false,
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "DELETE",
                "path": "/tasks/1",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [
              4
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": false
              }
            ],
            "apiStatus": 200,
            "expected": true,
            "requests": [
              {
                "method": "DELETE",
                "path": "/tasks/4",
                "body": null
              }
            ],
            "records": [
              {
                "id": 5,
                "title": "Next",
                "done": false
              }
            ]
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "DELETE removes a record. 204 means it worked and there is no response body. JavaScript: await fetch waits for the response; await response.json() reads its data.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Build /tasks/id and send DELETE.",
          "Compare the status with 204. This response has no JSON body."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-js-api-workflow",
        "title": "Create, finish, then read",
        "prompt": "Use three requests in order: POST a trimmed title, PATCH the returned id to done, then GET /tasks. Return the final list. Return [] immediately if any request fails. A blank title returns [] without requests.",
        "functionName": "practice_api_workflow",
        "signature": "async practice_api_workflow(title)",
        "snippet": "async function practice_api_workflow(title) {\n  // Write one small step first.\n}",
        "answer": "async function practice_api_workflow(title) {\n  const clean = title.trim(); if (!clean) return []; const created = await fetch(\"/tasks\", {method:\"POST\", headers:{\"Content-Type\":\"application/json\"}, body:JSON.stringify({title:clean})}); if (created.status !== 201) return []; const task = await created.json(); const updated = await fetch(`/tasks/${task.id}`, {method:\"PATCH\", headers:{\"Content-Type\":\"application/json\"}, body:JSON.stringify({done:true})}); if (updated.status !== 200) return []; const response = await fetch(\"/tasks\"); return response.status === 200 ? await response.json() : [];\n}",
        "tests": [
          {
            "args": [
              " Code "
            ],
            "expected": [
              {
                "id": 1,
                "title": "Code",
                "done": true
              }
            ],
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Code"
                }
              },
              {
                "method": "PATCH",
                "path": "/tasks/1",
                "body": {
                  "done": true
                }
              },
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Code",
                "done": true
              }
            ]
          },
          {
            "args": [
              " "
            ],
            "expected": [],
            "seed": [],
            "apiStatus": 200,
            "requests": [],
            "records": []
          },
          {
            "args": [
              "Code"
            ],
            "expected": [],
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Code"
                }
              }
            ],
            "records": []
          },
          {
            "args": [
              " Next "
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              }
            ],
            "apiStatus": 200,
            "expected": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": true
              }
            ],
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Next"
                }
              },
              {
                "method": "PATCH",
                "path": "/tasks/5",
                "body": {
                  "done": true
                }
              },
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": true
              }
            ]
          },
          {
            "args": [
              "Next"
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              }
            ],
            "apiStatus": 503,
            "failAt": 2,
            "expected": [],
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Next"
                }
              },
              {
                "method": "PATCH",
                "path": "/tasks/5",
                "body": {
                  "done": true
                }
              }
            ],
            "records": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": false
              }
            ]
          },
          {
            "args": [
              "Next"
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              }
            ],
            "apiStatus": 503,
            "failAt": 3,
            "expected": [],
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Next"
                }
              },
              {
                "method": "PATCH",
                "path": "/tasks/5",
                "body": {
                  "done": true
                }
              },
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": true
              }
            ]
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "The next step needs the result of the previous step. Save each response in a variable and check whether it worked before continuing. JavaScript: await fetch waits for the response; await response.json() reads its data.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Create first, then read the new id from the response. Stop if creation failed.",
          "Patch that id to done, stop on failure, then GET the final list. Keep the steps in separate variables."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-py-8",
    "title": "Python 8 · Useful methods · one small step",
    "language": "python",
    "stage": 8,
    "level": "Everyday practice",
    "description": "One small job at a time: keep, double, add, clean, find, and pop.",
    "exercises": [
      {
        "id": "practical-py-even",
        "title": "Keep the even numbers",
        "prompt": "You have a list of numbers. Keep only numbers that divide by 2 with no remainder. Keep their original order.",
        "functionName": "practice_even",
        "signature": "practice_even(numbers)",
        "snippet": "def practice_even(numbers):\n    pass",
        "answer": "def practice_even(numbers):\n    return [n for n in numbers if n % 2 == 0]",
        "tests": [
          {
            "args": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": [
              2,
              4
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                -2,
                -1,
                0
              ]
            ],
            "expected": [
              -2,
              0
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: list comprehension + %. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "For each number, ask: is number % 2 equal to 0?",
          "Keep the number only when that check is true."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-double",
        "title": "Double each number",
        "prompt": "A game gives double points today. Return a new list with each score multiplied by 2. Keep every score.",
        "functionName": "practice_double",
        "signature": "practice_double(numbers)",
        "snippet": "def practice_double(numbers):\n    pass",
        "answer": "def practice_double(numbers):\n    return [n * 2 for n in numbers]",
        "tests": [
          {
            "args": [
              [
                1,
                3
              ]
            ],
            "expected": [
              2,
              6
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                -2,
                0,
                5
              ]
            ],
            "expected": [
              -4,
              0,
              10
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: list comprehension. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep the same number of items. Each new item is the old item times 2.",
          "Use map or a comprehension. You are changing values, not removing them."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-total",
        "title": "Add the prices",
        "prompt": "Your basket has these prices. Return the total. An empty basket costs 0.",
        "functionName": "practice_total",
        "signature": "practice_total(prices)",
        "snippet": "def practice_total(prices):\n    pass",
        "answer": "def practice_total(prices):\n    return sum(prices)",
        "tests": [
          {
            "args": [
              [
                4,
                6,
                2
              ]
            ],
            "expected": 12
          },
          {
            "args": [
              []
            ],
            "expected": 0
          },
          {
            "args": [
              [
                0,
                3
              ]
            ],
            "expected": 3
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: sum. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Start a total at 0. Add each price to it.",
          "reduce needs an initial 0; Python sum already handles an empty list."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-clean",
        "title": "Clean a name",
        "prompt": "Someone typed extra spaces around a name. Remove the outside spaces and make all letters lowercase. Keep spaces inside the name.",
        "functionName": "practice_clean",
        "signature": "practice_clean(text)",
        "snippet": "def practice_clean(text):\n    pass",
        "answer": "def practice_clean(text):\n    return text.strip().lower()",
        "tests": [
          {
            "args": [
              "  SAM Lee  "
            ],
            "expected": "sam lee"
          },
          {
            "args": [
              "   "
            ],
            "expected": ""
          },
          {
            "args": [
              "Ada"
            ],
            "expected": "ada"
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: strip + lower. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Remove outside spaces first.",
          "Make the cleaned text lowercase, then return it."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-contains",
        "title": "Is an item packed?",
        "prompt": "Return true/True if wanted is in the packing list. Match the text exactly. Otherwise return false/False.",
        "functionName": "practice_contains",
        "signature": "practice_contains(items, wanted)",
        "snippet": "def practice_contains(items, wanted):\n    pass",
        "answer": "def practice_contains(items, wanted):\n    return wanted in items",
        "tests": [
          {
            "args": [
              [
                "hat",
                "book"
              ],
              "hat"
            ],
            "expected": true
          },
          {
            "args": [
              [],
              "hat"
            ],
            "expected": false
          },
          {
            "args": [
              [
                "Hat"
              ],
              "hat"
            ],
            "expected": false
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: in. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Compare wanted with items in the list.",
          "includes or in does this search for you. Return its true/false result."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-last",
        "title": "Take the last item",
        "prompt": "Copy the list, remove its last item, and return that removed item. Return null/None if the list is empty. The original list must stay unchanged.",
        "functionName": "practice_last",
        "signature": "practice_last(items)",
        "snippet": "def practice_last(items):\n    pass",
        "answer": "def practice_last(items):\n    copy = items[:]\n    return copy.pop() if copy else None",
        "tests": [
          {
            "args": [
              [
                "pen",
                "book"
              ]
            ],
            "expected": "book"
          },
          {
            "args": [
              []
            ],
            "expected": null
          },
          {
            "args": [
              [
                0
              ]
            ],
            "expected": 0
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: slice + pop. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Make a copy first so pop does not change the input.",
          "Check whether the copy is empty. Otherwise pop and return the removed value."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-py-9",
    "title": "Python 9 · Combine small steps",
    "language": "python",
    "stage": 9,
    "level": "Everyday practice",
    "description": "Put two or three small steps together. Keep → change → return.",
    "exercises": [
      {
        "id": "practical-py-even-double",
        "title": "Keep, then change",
        "prompt": "Keep the even numbers. Then double each number you kept. Return the new list.",
        "functionName": "practice_even_double",
        "signature": "practice_even_double(numbers)",
        "snippet": "def practice_even_double(numbers):\n    pass",
        "answer": "def practice_even_double(numbers):\n    return [n * 2 for n in numbers if n % 2 == 0]",
        "tests": [
          {
            "args": [
              [
                1,
                2,
                3,
                4
              ]
            ],
            "expected": [
              4,
              8
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                -2,
                0,
                5
              ]
            ],
            "expected": [
              -4,
              0
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: comprehension with if. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "First build a list of even numbers using % 2.",
          "Double the kept numbers, not every original number."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-word-count",
        "title": "Count the words",
        "prompt": "Count words separated by spaces, tabs, or newlines. Extra spaces do not count as words. Empty text has 0 words.",
        "functionName": "practice_word_count",
        "signature": "practice_word_count(text)",
        "snippet": "def practice_word_count(text):\n    pass",
        "answer": "def practice_word_count(text):\n    return len(text.split())",
        "tests": [
          {
            "args": [
              "  learn   to code  "
            ],
            "expected": 3
          },
          {
            "args": [
              " \t\n "
            ],
            "expected": 0
          },
          {
            "args": [
              "one\ntwo"
            ],
            "expected": 2
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: split + len. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Remove outside spaces. Split the text into words using whitespace.",
          "Count the resulting words. Watch out: empty text should give 0."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-labels",
        "title": "Make a short label",
        "prompt": "Remove blank words, trim each remaining word, make them lowercase, and join them with a dash. Keep their order.",
        "functionName": "practice_labels",
        "signature": "practice_labels(words)",
        "snippet": "def practice_labels(words):\n    pass",
        "answer": "def practice_labels(words):\n    return \"-\".join(w.strip().lower() for w in words if w.strip())",
        "tests": [
          {
            "args": [
              [
                " Learn ",
                "",
                " CODE "
              ]
            ],
            "expected": "learn-code"
          },
          {
            "args": [
              []
            ],
            "expected": ""
          },
          {
            "args": [
              [
                "  ",
                "JS"
              ]
            ],
            "expected": "js"
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: strip + lower + join. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Clean each word. Remove the ones that are empty after cleaning.",
          "Join the remaining words with \"-\" between them."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-cheapest",
        "title": "Pick the cheapest three",
        "prompt": "Return up to three lowest prices in ascending order. Keep duplicate prices. Do not change the original list.",
        "functionName": "practice_cheapest",
        "signature": "practice_cheapest(prices)",
        "snippet": "def practice_cheapest(prices):\n    pass",
        "answer": "def practice_cheapest(prices):\n    return sorted(prices)[:3]",
        "tests": [
          {
            "args": [
              [
                20,
                3,
                10,
                2
              ]
            ],
            "expected": [
              2,
              3,
              10
            ]
          },
          {
            "args": [
              [
                5,
                5
              ]
            ],
            "expected": [
              5,
              5
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: sorted + slice. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Make a sorted copy. JavaScript needs a numeric comparator (a, b) => a - b.",
          "Take items from index 0 up to, but not including, index 3."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-positive-total",
        "title": "Add only positive scores",
        "prompt": "Add only numbers greater than 0. Ignore 0 and negative numbers. Return 0 if none qualify.",
        "functionName": "practice_positive_total",
        "signature": "practice_positive_total(numbers)",
        "snippet": "def practice_positive_total(numbers):\n    pass",
        "answer": "def practice_positive_total(numbers):\n    return sum(n for n in numbers if n > 0)",
        "tests": [
          {
            "args": [
              [
                -1,
                4,
                0,
                3
              ]
            ],
            "expected": 7
          },
          {
            "args": [
              []
            ],
            "expected": 0
          },
          {
            "args": [
              [
                -3,
                -2
              ]
            ],
            "expected": 0
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: sum + comprehension. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep only numbers greater than 0.",
          "Add those numbers. Start from 0 so an empty list works."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-unique",
        "title": "Remove repeated tags",
        "prompt": "Return each tag only once, in the order it first appeared. Match text exactly.",
        "functionName": "practice_unique",
        "signature": "practice_unique(tags)",
        "snippet": "def practice_unique(tags):\n    pass",
        "answer": "def practice_unique(tags):\n    seen = set()\n    result = []\n    for tag in tags:\n        if tag not in seen:\n            seen.add(tag)\n            result.append(tag)\n    return result",
        "tests": [
          {
            "args": [
              [
                "js",
                "py",
                "js"
              ]
            ],
            "expected": [
              "js",
              "py"
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                "JS",
                "js"
              ]
            ],
            "expected": [
              "JS",
              "js"
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: set membership + append. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep a set of tags you have already seen.",
          "Add a tag to the result only the first time you see it."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-py-10",
    "title": "Python 10 · Work with records",
    "language": "python",
    "stage": 10,
    "level": "Everyday practice",
    "description": "Read a list of people or tasks. Find the fields you need.",
    "exercises": [
      {
        "id": "practical-py-names",
        "title": "Read names from records",
        "prompt": "Each person has a name and an age. Return just their names, in order.",
        "functionName": "practice_names",
        "signature": "practice_names(people)",
        "snippet": "def practice_names(people):\n    pass",
        "answer": "def practice_names(people):\n    return [person[\"name\"] for person in people]",
        "tests": [
          {
            "args": [
              [
                {
                  "name": "Sam",
                  "age": 20
                },
                {
                  "name": "Jo",
                  "age": 18
                }
              ]
            ],
            "expected": [
              "Sam",
              "Jo"
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                {
                  "name": "",
                  "age": 0
                }
              ]
            ],
            "expected": [
              ""
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: comprehension + dictionary access. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Look at one person record. Which field holds the name?",
          "Visit every person and collect that field into a new list."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-find",
        "title": "Find one task",
        "prompt": "Return the first task with this id. Return null/None when it is missing. A task has id, title, and done.",
        "functionName": "practice_find",
        "signature": "practice_find(tasks, id)",
        "snippet": "def practice_find(tasks, id):\n    pass",
        "answer": "def practice_find(tasks, id):\n    for task in tasks:\n        if task[\"id\"] == id:\n            return task\n    return None",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Read",
                  "done": false
                }
              ],
              1
            ],
            "expected": {
              "id": 1,
              "title": "Read",
              "done": false
            }
          },
          {
            "args": [
              [],
              1
            ],
            "expected": null
          },
          {
            "args": [
              [
                {
                  "id": 2,
                  "title": "Code",
                  "done": true
                }
              ],
              1
            ],
            "expected": null
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: loop + early return. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Compare each task id with the requested id.",
          "Return the matching record immediately. Return null/None after the search if none matched."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-all-done",
        "title": "Are all tasks done?",
        "prompt": "Return true/True only if every task is done. An empty task list counts as all done.",
        "functionName": "practice_all_done",
        "signature": "practice_all_done(tasks)",
        "snippet": "def practice_all_done(tasks):\n    pass",
        "answer": "def practice_all_done(tasks):\n    return all(task[\"done\"] for task in tasks)",
        "tests": [
          {
            "args": [
              [
                {
                  "done": true
                },
                {
                  "done": false
                }
              ]
            ],
            "expected": false
          },
          {
            "args": [
              [
                {
                  "done": true
                }
              ]
            ],
            "expected": true
          },
          {
            "args": [
              []
            ],
            "expected": true
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: all. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Check the done field of every task.",
          "every/all returns false when any task is unfinished. Empty lists return true."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-any-late",
        "title": "Is any delivery late?",
        "prompt": "Each delivery has late set to true/True or false/False. Return whether at least one delivery is late. An empty list returns false/False.",
        "functionName": "practice_any_late",
        "signature": "practice_any_late(deliveries)",
        "snippet": "def practice_any_late(deliveries):\n    pass",
        "answer": "def practice_any_late(deliveries):\n    return any(delivery[\"late\"] for delivery in deliveries)",
        "tests": [
          {
            "args": [
              [
                {
                  "late": false
                },
                {
                  "late": true
                }
              ]
            ],
            "expected": true
          },
          {
            "args": [
              [
                {
                  "late": false
                }
              ]
            ],
            "expected": false
          },
          {
            "args": [
              []
            ],
            "expected": false
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: any. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Look for one delivery whose late field is true.",
          "some/any returns true as soon as one qualifies. Empty lists return false."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-lookup",
        "title": "Build a name lookup",
        "prompt": "Return an object/dictionary whose keys are the people's string ids and whose values are their names. Ids are unique.",
        "functionName": "practice_lookup",
        "signature": "practice_lookup(people)",
        "snippet": "def practice_lookup(people):\n    pass",
        "answer": "def practice_lookup(people):\n    return {person[\"id\"]: person[\"name\"] for person in people}",
        "tests": [
          {
            "args": [
              [
                {
                  "id": "a",
                  "name": "Sam"
                },
                {
                  "id": "b",
                  "name": "Jo"
                }
              ]
            ],
            "expected": {
              "a": "Sam",
              "b": "Jo"
            }
          },
          {
            "args": [
              []
            ],
            "expected": {}
          },
          {
            "args": [
              [
                {
                  "id": "x",
                  "name": ""
                }
              ]
            ],
            "expected": {
              "x": ""
            }
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: dictionary comprehension. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Each person becomes one key-value pair: id → name.",
          "Collect those pairs in an object/dictionary."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-open-titles",
        "title": "Show unfinished work",
        "prompt": "Keep tasks that are not done. Return their titles in order. This is the data a task-list page needs.",
        "functionName": "practice_open_titles",
        "signature": "practice_open_titles(tasks)",
        "snippet": "def practice_open_titles(tasks):\n    pass",
        "answer": "def practice_open_titles(tasks):\n    return [task[\"title\"] for task in tasks if not task[\"done\"]]",
        "tests": [
          {
            "args": [
              [
                {
                  "title": "Read",
                  "done": false
                },
                {
                  "title": "Code",
                  "done": true
                }
              ]
            ],
            "expected": [
              "Read"
            ]
          },
          {
            "args": [
              []
            ],
            "expected": []
          },
          {
            "args": [
              [
                {
                  "title": "Sleep",
                  "done": true
                }
              ]
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: comprehension with if. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep the unfinished tasks first.",
          "From those records, collect just the titles."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-py-11",
    "title": "Python 11 · Build CRUD helpers",
    "language": "python",
    "stage": 11,
    "level": "Everyday practice",
    "description": "Create, read, update, and delete tasks. Then add a search.",
    "exercises": [
      {
        "id": "practical-py-create",
        "title": "Create a task",
        "prompt": "Return a new list with a new task added at the end: id, the trimmed title, and done set to false/False. If the title is blank or the id already exists, return an unchanged copy.",
        "functionName": "practice_create",
        "signature": "practice_create(tasks, id, title)",
        "snippet": "def practice_create(tasks, id, title):\n    pass",
        "answer": "def practice_create(tasks, id, title):\n    clean = title.strip()\n    if not clean or any(t[\"id\"] == id for t in tasks):\n        return tasks[:]\n    return tasks + [{\"id\": id, \"title\": clean, \"done\": False}]",
        "tests": [
          {
            "args": [
              [],
              1,
              " Read "
            ],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [
              [],
              1,
              " "
            ],
            "expected": []
          },
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Read",
                  "done": false
                }
              ],
              1,
              "New"
            ],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: any + strip + list copy. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Trim the title. Reject a blank title or an id already in the list.",
          "Copy the list and add a record with id, title, and done set to false."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-read",
        "title": "Read one task",
        "prompt": "A user opens a task. Return the task with this id, or null/None if missing. This is the Read part of CRUD: Create, Read, Update, Delete.",
        "functionName": "practice_read",
        "signature": "practice_read(tasks, id)",
        "snippet": "def practice_read(tasks, id):\n    pass",
        "answer": "def practice_read(tasks, id):\n    for task in tasks:\n        if task[\"id\"] == id:\n            return task\n    return None",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 2,
                  "title": "Code",
                  "done": false
                }
              ],
              2
            ],
            "expected": {
              "id": 2,
              "title": "Code",
              "done": false
            }
          },
          {
            "args": [
              [],
              1
            ],
            "expected": null
          },
          {
            "args": [
              [
                {
                  "id": 2,
                  "title": "Code",
                  "done": false
                }
              ],
              9
            ],
            "expected": null
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: loop + return. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Search by id, not by title or list position.",
          "Return the matching record, or null/None if missing."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-update",
        "title": "Rename a task",
        "prompt": "Return a new list with only the matching task renamed to the trimmed title. Keep its other fields. A blank title or missing id leaves the list unchanged.",
        "functionName": "practice_update",
        "signature": "practice_update(tasks, id, title)",
        "snippet": "def practice_update(tasks, id, title):\n    pass",
        "answer": "def practice_update(tasks, id, title):\n    result = []\n    for task in tasks:\n        copy = dict(task)\n        if task[\"id\"] == id and title.strip():\n            copy[\"title\"] = title.strip()\n        result.append(copy)\n    return result",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Old",
                  "done": true
                }
              ],
              1,
              " New "
            ],
            "expected": [
              {
                "id": 1,
                "title": "New",
                "done": true
              }
            ]
          },
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Old",
                  "done": false
                }
              ],
              1,
              " "
            ],
            "expected": [
              {
                "id": 1,
                "title": "Old",
                "done": false
              }
            ]
          },
          {
            "args": [
              [],
              9,
              "New"
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: loop + dict copy. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "For each task, make a copy. Change only the matching id.",
          "Replace the copied title only if the trimmed new title is not blank. Keep done and other fields."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-toggle",
        "title": "Toggle a task",
        "prompt": "Return a new list. Flip done only for the matching task: true becomes false, and false becomes true. Keep its id and title.",
        "functionName": "practice_toggle",
        "signature": "practice_toggle(tasks, id)",
        "snippet": "def practice_toggle(tasks, id):\n    pass",
        "answer": "def practice_toggle(tasks, id):\n    result = []\n    for task in tasks:\n        copy = dict(task)\n        if task[\"id\"] == id:\n            copy[\"done\"] = not task[\"done\"]\n        result.append(copy)\n    return result",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Read",
                  "done": false
                }
              ],
              1
            ],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": true
              }
            ]
          },
          {
            "args": [
              [
                {
                  "id": 1,
                  "title": "Read",
                  "done": true
                }
              ],
              1
            ],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [
              [],
              9
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: dict copy + not. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Copy each task. For the matching id, read its current done value.",
          "Use ! in JavaScript or not in Python to flip that value."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-delete",
        "title": "Delete one task",
        "prompt": "Return a new list without the task with this id. Keep the other tasks in order. A missing id changes nothing.",
        "functionName": "practice_delete_task",
        "signature": "practice_delete_task(tasks, id)",
        "snippet": "def practice_delete_task(tasks, id):\n    pass",
        "answer": "def practice_delete_task(tasks, id):\n    return [t for t in tasks if t[\"id\"] != id]",
        "tests": [
          {
            "args": [
              [
                {
                  "id": 1
                },
                {
                  "id": 2
                }
              ],
              1
            ],
            "expected": [
              {
                "id": 2
              }
            ]
          },
          {
            "args": [
              [
                {
                  "id": 1
                }
              ],
              9
            ],
            "expected": [
              {
                "id": 1
              }
            ]
          },
          {
            "args": [
              [],
              1
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: comprehension with if. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Keep tasks whose id is different from the requested id.",
          "Filtering returns a new list. Do not remove by list index: an id is not an index."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-search",
        "title": "Search the task list",
        "prompt": "Trim the query and ignore letter case. Return tasks whose titles contain it. A blank query returns all tasks.",
        "functionName": "practice_search",
        "signature": "practice_search(tasks, query)",
        "snippet": "def practice_search(tasks, query):\n    pass",
        "answer": "def practice_search(tasks, query):\n    q = query.strip().lower()\n    return [t for t in tasks if q in t[\"title\"].lower()]",
        "tests": [
          {
            "args": [
              [
                {
                  "title": "Read JS"
                },
                {
                  "title": "Write Python"
                }
              ],
              " js "
            ],
            "expected": [
              {
                "title": "Read JS"
              }
            ]
          },
          {
            "args": [
              [
                {
                  "title": "Read"
                }
              ],
              " "
            ],
            "expected": [
              {
                "title": "Read"
              }
            ]
          },
          {
            "args": [
              [],
              "x"
            ],
            "expected": []
          }
        ],
        "preserveInput": true,
        "api": false,
        "lesson": "Tool to try: strip + lower + in. First say what goes in, what comes out, and what changes. Write one step, then check it.",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "These tools are suggestions. A correct loop is welcome too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Clean the query by trimming it and making it lowercase.",
          "Lowercase each title too, then check whether it contains the cleaned query."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  },
  {
    "id": "practical-py-12",
    "title": "Python 12 · Practice API requests",
    "language": "python",
    "stage": 12,
    "level": "Everyday practice",
    "description": "Ask the practice service to read or save tasks. Check whether it worked.",
    "exercises": [
      {
        "id": "practical-py-api-list",
        "title": "Ask for all tasks",
        "prompt": "Ask the practice API for all tasks with GET /tasks. Return the response data. If the status is not 200, return an empty list.",
        "functionName": "practice_api_list",
        "signature": "practice_api_list()",
        "snippet": "import practice_api as api\n\ndef practice_api_list():\n    pass",
        "answer": "import practice_api as api\n\ndef practice_api_list():\n    response = api.request(\"GET\", \"/tasks\")\n    return response[\"data\"] if response[\"status\"] == 200 else []",
        "tests": [
          {
            "args": [],
            "expected": [],
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [],
            "expected": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "seed": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "apiStatus": 200,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [],
            "expected": [],
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": []
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "GET asks to read data. 200 means the request worked. 503 means the service is unavailable. Python: import practice_api as api. api.request returns a dictionary; read response[\"status\"] and response[\"data\"].",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Send GET /tasks. JavaScript: await fetch, then await response.json(). Python: api.request returns a dictionary.",
          "Check status before reading data. Return [] for an error status."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-api-one",
        "title": "Ask for one task",
        "prompt": "Ask for GET /tasks/id. Return the task on status 200. Return null/None for a missing task or other error.",
        "functionName": "practice_api_one",
        "signature": "practice_api_one(id)",
        "snippet": "import practice_api as api\n\ndef practice_api_one(id):\n    pass",
        "answer": "import practice_api as api\n\ndef practice_api_one(id):\n    response = api.request(\"GET\", \"/tasks/\" + str(id))\n    return response[\"data\"] if response[\"status\"] == 200 else None",
        "tests": [
          {
            "args": [
              1
            ],
            "expected": {
              "id": 1,
              "title": "Read",
              "done": false
            },
            "seed": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "apiStatus": 200,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks/1",
                "body": null
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [
              9
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks/9",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [
              1
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "GET",
                "path": "/tasks/1",
                "body": null
              }
            ],
            "records": []
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "A path like /tasks/7 asks for task 7. 404 means no matching task was found. Python: import practice_api as api. api.request returns a dictionary; read response[\"status\"] and response[\"data\"].",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Build the path by adding the id to /tasks/.",
          "Send GET. Read the task only on status 200; otherwise return null/None."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-api-create",
        "title": "Send a new task",
        "prompt": "Trim the title. If blank, return null/None without sending a request. Otherwise POST /tasks with a JSON body containing title. Return the new task on status 201, otherwise null/None.",
        "functionName": "practice_api_create",
        "signature": "practice_api_create(title)",
        "snippet": "import practice_api as api\n\ndef practice_api_create(title):\n    pass",
        "answer": "import practice_api as api\n\ndef practice_api_create(title):\n    clean = title.strip()\n    if not clean:\n        return None\n    response = api.request(\"POST\", \"/tasks\", {\"title\": clean})\n    return response[\"data\"] if response[\"status\"] == 201 else None",
        "tests": [
          {
            "args": [
              " Read "
            ],
            "expected": {
              "id": 1,
              "title": "Read",
              "done": false
            },
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Read"
                }
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ]
          },
          {
            "args": [
              " "
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 200,
            "requests": [],
            "records": []
          },
          {
            "args": [
              "Read"
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Read"
                }
              }
            ],
            "records": []
          },
          {
            "args": [
              " Next "
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              }
            ],
            "apiStatus": 200,
            "expected": {
              "id": 5,
              "title": "Next",
              "done": false
            },
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Next"
                }
              }
            ],
            "records": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": false
              }
            ]
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "POST asks to create a record. The body contains the new values. 201 means a new record was created. Python: import practice_api as api. api.request returns a dictionary; read response[\"status\"] and response[\"data\"].",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Trim the title and return early if blank.",
          "Send POST with a body containing title. JavaScript serializes it with JSON.stringify. Check for status 201."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-api-update",
        "title": "Save a finished task",
        "prompt": "PATCH /tasks/id with a JSON body containing done: true/True. Return the changed task on status 200, otherwise null/None.",
        "functionName": "practice_api_update",
        "signature": "practice_api_update(id)",
        "snippet": "import practice_api as api\n\ndef practice_api_update(id):\n    pass",
        "answer": "import practice_api as api\n\ndef practice_api_update(id):\n    response = api.request(\"PATCH\", \"/tasks/\" + str(id), {\"done\": True})\n    return response[\"data\"] if response[\"status\"] == 200 else None",
        "tests": [
          {
            "args": [
              1
            ],
            "expected": {
              "id": 1,
              "title": "Read",
              "done": true
            },
            "seed": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "apiStatus": 200,
            "requests": [
              {
                "method": "PATCH",
                "path": "/tasks/1",
                "body": {
                  "done": true
                }
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Read",
                "done": true
              }
            ]
          },
          {
            "args": [
              9
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "PATCH",
                "path": "/tasks/9",
                "body": {
                  "done": true
                }
              }
            ],
            "records": []
          },
          {
            "args": [
              1
            ],
            "expected": null,
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "PATCH",
                "path": "/tasks/1",
                "body": {
                  "done": true
                }
              }
            ],
            "records": []
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "PATCH changes selected fields on an existing record. Send done, not a whole replacement task. Python: import practice_api as api. api.request returns a dictionary; read response[\"status\"] and response[\"data\"].",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Build /tasks/id and send PATCH with done set to true.",
          "Check for status 200 before returning the response data."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-api-delete",
        "title": "Remove a saved task",
        "prompt": "DELETE /tasks/id. Return true/True only when the response status is 204. A missing task returns false/False. Do not try to read JSON from a 204 response: it has no body.",
        "functionName": "practice_api_delete",
        "signature": "practice_api_delete(id)",
        "snippet": "import practice_api as api\n\ndef practice_api_delete(id):\n    pass",
        "answer": "import practice_api as api\n\ndef practice_api_delete(id):\n    response = api.request(\"DELETE\", \"/tasks/\" + str(id))\n    return response[\"status\"] == 204",
        "tests": [
          {
            "args": [
              1
            ],
            "expected": true,
            "seed": [
              {
                "id": 1,
                "title": "Read",
                "done": false
              }
            ],
            "apiStatus": 200,
            "requests": [
              {
                "method": "DELETE",
                "path": "/tasks/1",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [
              9
            ],
            "expected": false,
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "DELETE",
                "path": "/tasks/9",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [
              1
            ],
            "expected": false,
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "DELETE",
                "path": "/tasks/1",
                "body": null
              }
            ],
            "records": []
          },
          {
            "args": [
              4
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": false
              }
            ],
            "apiStatus": 200,
            "expected": true,
            "requests": [
              {
                "method": "DELETE",
                "path": "/tasks/4",
                "body": null
              }
            ],
            "records": [
              {
                "id": 5,
                "title": "Next",
                "done": false
              }
            ]
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "DELETE removes a record. 204 means it worked and there is no response body. Python: import practice_api as api. api.request returns a dictionary; read response[\"status\"] and response[\"data\"].",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Build /tasks/id and send DELETE.",
          "Compare the status with 204. This response has no JSON body."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      },
      {
        "id": "practical-py-api-workflow",
        "title": "Create, finish, then read",
        "prompt": "Use three requests in order: POST a trimmed title, PATCH the returned id to done, then GET /tasks. Return the final list. Return [] immediately if any request fails. A blank title returns [] without requests.",
        "functionName": "practice_api_workflow",
        "signature": "practice_api_workflow(title)",
        "snippet": "import practice_api as api\n\ndef practice_api_workflow(title):\n    pass",
        "answer": "import practice_api as api\n\ndef practice_api_workflow(title):\n    clean = title.strip()\n    if not clean:\n        return []\n    created = api.request(\"POST\", \"/tasks\", {\"title\": clean})\n    if created[\"status\"] != 201:\n        return []\n    updated = api.request(\"PATCH\", \"/tasks/\" + str(created[\"data\"][\"id\"]), {\"done\": True})\n    if updated[\"status\"] != 200:\n        return []\n    response = api.request(\"GET\", \"/tasks\")\n    return response[\"data\"] if response[\"status\"] == 200 else []",
        "tests": [
          {
            "args": [
              " Code "
            ],
            "expected": [
              {
                "id": 1,
                "title": "Code",
                "done": true
              }
            ],
            "seed": [],
            "apiStatus": 200,
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Code"
                }
              },
              {
                "method": "PATCH",
                "path": "/tasks/1",
                "body": {
                  "done": true
                }
              },
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": [
              {
                "id": 1,
                "title": "Code",
                "done": true
              }
            ]
          },
          {
            "args": [
              " "
            ],
            "expected": [],
            "seed": [],
            "apiStatus": 200,
            "requests": [],
            "records": []
          },
          {
            "args": [
              "Code"
            ],
            "expected": [],
            "seed": [],
            "apiStatus": 503,
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Code"
                }
              }
            ],
            "records": []
          },
          {
            "args": [
              " Next "
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              }
            ],
            "apiStatus": 200,
            "expected": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": true
              }
            ],
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Next"
                }
              },
              {
                "method": "PATCH",
                "path": "/tasks/5",
                "body": {
                  "done": true
                }
              },
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": true
              }
            ]
          },
          {
            "args": [
              "Next"
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              }
            ],
            "apiStatus": 503,
            "failAt": 2,
            "expected": [],
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Next"
                }
              },
              {
                "method": "PATCH",
                "path": "/tasks/5",
                "body": {
                  "done": true
                }
              }
            ],
            "records": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": false
              }
            ]
          },
          {
            "args": [
              "Next"
            ],
            "seed": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              }
            ],
            "apiStatus": 503,
            "failAt": 3,
            "expected": [],
            "requests": [
              {
                "method": "POST",
                "path": "/tasks",
                "body": {
                  "title": "Next"
                }
              },
              {
                "method": "PATCH",
                "path": "/tasks/5",
                "body": {
                  "done": true
                }
              },
              {
                "method": "GET",
                "path": "/tasks",
                "body": null
              }
            ],
            "records": [
              {
                "id": 4,
                "title": "Earlier",
                "done": false
              },
              {
                "id": 5,
                "title": "Next",
                "done": true
              }
            ]
          }
        ],
        "preserveInput": true,
        "api": true,
        "lesson": "The next step needs the result of the previous step. Save each response in a variable and check whether it worked before continuing. Python: import practice_api as api. api.request returns a dictionary; read response[\"status\"] and response[\"data\"].",
        "constraints": [
          "Keep the inputs unchanged. Return the answer; printing alone does not count.",
          "This is an offline practice API, not a live server. JavaScript uses fetch; Python uses the provided practice_api module. Each test starts with fresh tasks. Requests and saved records are checked too."
        ],
        "hints": [
          "Try the first example by hand. What should you keep, change, or return?",
          "Create first, then read the new id from the response. Stop if creation failed.",
          "Patch that id to done, stop on failure, then GET the final list. Keep the steps in separate variables."
        ],
        "stretch": "Change one input. Predict the result before you run it."
      }
    ]
  }
];
