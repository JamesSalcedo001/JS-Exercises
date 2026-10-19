const literal = (value, py) => {
  if (!py) return JSON.stringify(value);
  if (value === null) return 'None';
  if (typeof value === 'boolean') return value ? 'True' : 'False';
  if (Array.isArray(value)) return '[' + value.map(v=>literal(v,true)).join(', ') + ']';
  if (value && typeof value === 'object') return '{' + Object.entries(value).map(([k,v])=>JSON.stringify(k)+': '+literal(v,true)).join(', ') + '}';
  return JSON.stringify(value);
};
export function taskGuide(exercise, language) {
  const py=language==='python', test=exercise.tests?.[0];
  const call=test && exercise.functionName ? `${exercise.functionName}(${test.args.map(v=>literal(v,py)).join(', ')})` : '';
  const contract=exercise.html ? 'Build the HTML/CSS page described below. Run previews it; Check tests inspects your markup and layout.'
    :exercise.dom ? `Write ${exercise.signature || 'setupDOM()'}. Run creates the supplied page and calls your function. Check tests tries real form and click actions. You do not need to return a value.`
    :test ? `Write ${py ? 'def' : exercise.api ? 'async function' : 'function'} ${exercise.functionName} with the parameters shown below. Return the result; the checker supplies the inputs and calls your function. You do not need to print or call it yourself.`
    :'Write a complete program using the starting values below. Print the requested output. The checker runs your whole program; it does not supply these variables for you.';
  const example=exercise.dom ? 'Run previews the page. Check tests inspects the page after the actions listed in Examples; it does not expect a returned value.' : call ? `${call} → ${literal(test.expected,py)}` + (exercise.api ? `\nOffline service starting records: ${literal(test.seed || [],py)}\nService status for this example: ${test.apiStatus || 200}` : '') : exercise.expected ? `Expected printed output:\n${exercise.expected}` : '';
  const focus=exercise.html ? `For “${exercise.title}”, which elements must the page contain, and which elements go inside others? Sketch that structure before writing markup.` : exercise.dom ? 'Which element or record changes after one action?'
    :test ? `For ${call}, what should the result be? Which small steps connect the inputs to that result?`
    :`Using the given values, how will you produce ${JSON.stringify(exercise.expected)}? Name the calculation or decision before writing code.`;
  const reflection=exercise.html ? `For “${exercise.title}”, explain one required element and why you put it there. If you changed layout, name the CSS rule and what you expect on a narrow screen.` : exercise.dom ? `For “${exercise.title}”, pick one action from Examples. What was on the page before it, which handler ran, and what changed afterward?`
    :test ? `Trace ${call} by hand. What changes during each step, and why does the final result equal ${literal(test.expected,py)}?`
    :`Explain how your variables and operations produce ${JSON.stringify(exercise.expected)}. Change one starting value on paper: what would print instead?`;
  const worked=exercise.dom ? `For “${exercise.title}”, name the element or record before changing it. Example note: “The page starts with ___. After ${test?.actions?.[0] ? JSON.stringify(test.actions[0]) : 'my setup runs'}, I expect ___.”`
    : test ? `Example note: “For ${call}, the required result is ${literal(test.expected,py)}. I will track ___ after each step and check that the final value matches.”`
    : `Example note: “The requested printed result is ${JSON.stringify(exercise.expected)}. My starting values are the ones above. I will calculate or compare ___ before printing.”`;
  return {contract,example,focus,reflection,setup:exercise.snippet || '',worked};
}
// Distinct study paths keep different goals together. All IDs and the complete route stay stable.
export const studyPaths = {
  all:{title:'Full guided path',description:'Follow the complete recommended order, or pick one focused path below.',match:()=>true},
  basics:{title:'1 · Core coding: values, decisions & loops',description:'Start here. Learn to write a small program, repeat steps, and use functions.',match:s=>s.stage>=1&&s.stage<=3},
  tools:{title:'2 · Everyday data: methods & records',description:'Choose, change, combine, and look up data. Build on loops and functions.',match:s=>[8,9,10].includes(s.stage)},
  pages:{title:'3 · Browser pages & interactive apps (JS)',description:'Build a page from scratch, learn DOM events, then build a shopping list. JavaScript only.',match:s=>['project-profile','practical-js-13','project-shopping'].includes(s.id)},
  api:{title:'4 · CRUD & API routes',description:'Start with record helpers, send API requests, then build server routes.',match:s=>[11,12].includes(s.stage)||s.backend},
  algorithms:{title:'5 · Tracing, data structures & DSA',description:'Begin with tracing and Big O, then work towards maps, stacks, search, and combined problems.',match:s=>s.stage===14||(s.stage>=4&&s.stage<=7)},
};

const examples = {
  even:['const values = [5, 8, 11];\nconsole.log(values.filter(value => value % 2 === 0)); // [8]', 'values = [5, 8, 11]\nprint([value for value in values if value % 2 == 0])  # [8]'],
  double:['console.log([3, 5].map(value => value * 10)); // [30, 50]','print([value * 10 for value in [3, 5]])  # [30, 50]'],
  total:['const total = [2, 9].reduce((soFar, value) => soFar + value, 0);\nconsole.log(total); // 11','total = sum([2, 9])\nprint(total)  # 11'],
  clean:['console.log("  HELLO  ".trim().toLowerCase()); // "hello"','print("  HELLO  ".strip().lower())  # hello'],
  contains:['console.log(["tea", "water"].includes("tea")); // true','print("tea" in ["tea", "water"])  # True'],
  last:['const original = [3, 7];\nconst copy = original.slice();\nconsole.log(copy.pop()); // 7; original stays [3, 7]','original = [3, 7]\ncopy = original[:]\nprint(copy.pop())  # 7; original stays [3, 7]'],
  'even-double':['const kept = [1, 4, 9].filter(value => value > 3);\nconsole.log(kept.map(value => value + 1)); // [5, 10]','kept = [value for value in [1, 4, 9] if value > 3]\nprint([value + 1 for value in kept])  # [5, 10]'],
  'word-count':['console.log("  two   words ".trim().split(/\\s+/).length); // 2','print(len("  two   words ".split()))  # 2'],
  labels:['const words = [" A ", "", " B"].map(word => word.trim());\nconsole.log(words.filter(Boolean).join(" / ")); // "A / B"','words = [word.strip() for word in [" A ", "", " B"]]\nprint(" / ".join(word for word in words if word))  # A / B'],
  cheapest:['const prices = [20, 3, 11];\nconsole.log([...prices].sort((a, b) => a - b).slice(0, 2)); // [3, 11]','prices = [20, 3, 11]\nprint(sorted(prices)[:2])  # [3, 11]'],
  'positive-total':['const kept = [-5, 2, 6].filter(value => value > 0);\nconsole.log(kept.reduce((total, value) => total + value, 0)); // 8','kept = [value for value in [-5, 2, 6] if value > 0]\nprint(sum(kept))  # 8'],
  unique:['console.log([...new Set(["a", "b", "a"])]); // ["a", "b"]','seen = set()\nresult = []\nfor value in ["a", "b", "a"]:\n    if value not in seen:\n        seen.add(value)\n        result.append(value)\nprint(result)  # ["a", "b"]'],
  names:['const users = [{name: "Ari"}, {name: "Bo"}];\nconsole.log(users.map(user => user.name)); // ["Ari", "Bo"]','users = [{"name": "Ari"}, {"name": "Bo"}]\nprint([user["name"] for user in users])  # ["Ari", "Bo"]'],
  find:['const tasks = [{id: 9, title: "Read"}];\nconsole.log(tasks.find(task => task.id === 9)); // the record','tasks = [{"id": 9, "title": "Read"}]\nfound = next((task for task in tasks if task["id"] == 9), None)\nprint(found)  # the record'],
  'all-done':['console.log([true, false].every(value => value)); // false','print(all([True, False]))  # False'],
  'any-late':['console.log([false, true].some(value => value)); // true','print(any([False, True]))  # True'],
  lookup:['const pairs = [[7, "Ari"], [9, "Bo"]];\nconst names = Object.fromEntries(pairs);\nconsole.log(names[9]); // "Bo"','names = dict([(7, "Ari"), (9, "Bo")])\nprint(names[9])  # Bo'],
  'open-titles':['const tasks = [{title: "Read", done: false}];\nconsole.log(tasks.filter(task => !task.done).map(task => task.title)); // ["Read"]','tasks = [{"title": "Read", "done": False}]\nprint([task["title"] for task in tasks if not task["done"]])  # ["Read"]'],
  create:['const old = [{id: 4}];\nconst added = [...old, {id: 5}]; // old is unchanged','old = [{"id": 4}]\nadded = old + [{"id": 5}]  # old is unchanged'],
  read:['const records = [{id: 4}, {id: 8}];\nconsole.log(records.find(record => record.id === 8)); // {id: 8}','records = [{"id": 4}, {"id": 8}]\nfor record in records:\n    if record["id"] == 8:\n        print(record)  # {"id": 8}'],
  update:['const task = {id: 4, title: "Old"};\nconst changed = {...task, title: "New"}; // task is unchanged','task = {"id": 4, "title": "Old"}\nchanged = {**task, "title": "New"}  # task is unchanged'],
  toggle:['const done = false;\nconsole.log(!done); // true','done = False\nprint(not done)  # True'],
  delete:['console.log([{id: 4}, {id: 8}].filter(record => record.id !== 4)); // [{id: 8}]','records = [{"id": 4}, {"id": 8}]\nprint([record for record in records if record["id"] != 4])  # [{"id": 8}]'],
  search:['console.log("Read a book".toLowerCase().includes("BOOK".toLowerCase())); // true','print("BOOK".lower() in "Read a book".lower())  # True'],
};
export function reviewExample(exercise, language, section) {
  const py=language==='python';
  if(section.backend) return py ? 'def example_route(method, path):\n    if method == "GET" and path == "/health":\n        return {"status": 200, "data": {"ready": True}}\n    return {"status": 404, "data": {"error": "Not found"}}\nprint(example_route("GET", "/health"))' : 'function exampleRoute(method, path) {\n  if (method === "GET" && path === "/health") {\n    return {status: 200, data: {ready: true}};\n  }\n  return {status: 404, data: {error: "Not found"}};\n}\nconsole.log(exampleRoute("GET", "/health"));';
  if(exercise.html) return '<!doctype html>\n<html lang="en">\n<head><meta name="viewport" content="width=device-width, initial-scale=1"><title>Note</title></head>\n<body><main><h1>My note</h1><p>A small page starts with meaningful elements.</p></main></body>\n</html>';
  if(exercise.dom) return '// Given a page containing: <p id="notice">Old text</p>\nconst notice = document.querySelector("#notice");\nnotice.textContent = "Saved";\n// The page now shows Saved. This changes a page; it does not return data.';
  const key=exercise.id?.replace(/^practical-(js|py)-/, '');
  if(examples[key]) return examples[key][py?1:0];
  if(exercise.api) return py ? 'import practice_api as api\nresponse = api.request("GET", "/tasks/9")\nif response["status"] == 200:\n    task = response["data"]\n# This is the offline lab helper, not a real network client.' : 'async function loadExample() {\n  const response = await fetch("/tasks/9");\n  if (response.status === 200) return await response.json();\n  return null;\n}\n// Offline here: fetch talks to the local practice service.';
  if(['js-budget','py-water'].includes(exercise.id)) return py ? 'starting = 12\nspent = 5\nremaining = starting - spent\nprint(remaining)  # 7' : 'const starting = 12;\nconst spent = 5;\nconst remaining = starting - spent;\nconsole.log(remaining); // 7';
  if(['js-message','py-text'].includes(exercise.id)) return py ? 'name = "Ari"\nmessage = f"Hello, {name}."\nprint(message)  # Hello, Ari.' : 'const name = "Ari";\nconst message = `Hello, ${name}.`;\nconsole.log(message); // Hello, Ari.';
  if(section.stage===1) return py ? 'coins = 6\nif coins >= 5:\n    print("Enough")\nelse:\n    print("Save more")' : 'const coins = 6;\nif (coins >= 5) {\n  console.log("Enough");\n} else {\n  console.log("Save more");\n}';
  if(section.stage===2) return py ? 'total = 0\nfor value in [3, 6]:\n    total += value\nprint(total)  # 9' : 'let total = 0;\nfor (const value of [3, 6]) total += value;\nconsole.log(total); // 9';
  if(section.stage===3) return py ? 'def add_fee(price):\n    return price + 2\nprint(add_fee(5))  # 7' : 'function addFee(price) { return price + 2; }\nconsole.log(addFee(5)); // 7';
  if(section.stage===4) return py ? 'items = ["a", "b"]\nfor index in range(len(items)):\n    print(index, items[index])  # 0 a, then 1 b' : 'const items = ["a", "b"];\nfor (let index = 0; index < items.length; index++) {\n  console.log(index, items[index]); // 0 a, then 1 b\n}';
  if(section.stage===5 || section.stage===7) return py ? 'scores = {"Ari": 4, "Bo": 7}\nprint(scores.get("Ari", 0))  # 4\nprint(scores.get("Cy", 0))  # 0: default for a missing key' : 'const scores = new Map([["Ari", 4], ["Bo", 7]]);\nconsole.log(scores.get("Ari") ?? 0); // 4\nconsole.log(scores.get("Cy") ?? 0); // 0: missing key fallback';
  if(section.stage===14 || exercise.id?.endsWith('binary-search')) return py ? 'remaining = 8\nwhile remaining > 1:\n    remaining = remaining // 2\n    print(remaining)  # 4, then 2, then 1' : 'let remaining = 8;\nwhile (remaining > 1) {\n  remaining = Math.floor(remaining / 2);\n  console.log(remaining); // 4, then 2, then 1\n}';
  if(section.stage===6) return py ? 'stack = []\nstack.append("first")\nstack.append("second")\nprint(stack.pop())  # second: most recent comes out first' : 'const stack = [];\nstack.push("first");\nstack.push("second");\nconsole.log(stack.pop()); // second: most recent comes out first';
  return '';
}
