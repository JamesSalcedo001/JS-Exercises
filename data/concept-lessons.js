// Short explanations teach a decision, not just a method name. Existing task IDs stay stable.
const concepts = {
  'api-list': {
    js:'An API client asks a server for data. fetch returns a promise; await waits for its response. Check the status before reading the response body with await response.json(). Here /tasks is an offline practice service with the same request/response idea.',
    py:'An API client asks a server for data. In this offline lab, import practice_api as api and call api.request("GET", "/tasks"). The returned dictionary has status and data keys. This helper is provided for practice; it is not the Python standard library or a real network client.',
    use:'Load a task list when a screen opens.', mistake:'A failed service response is not a successful empty list from the server. Follow the fallback your function promises to return.', plan:'Which status means success, and what should my caller receive if the service fails?'
  },
  'api-one': {
    js:'A resource path combines a collection and an ID, such as /tasks/7. await fetch gets the response; check the status before reading JSON. A 404 is a normal missing-record case to handle.',
    py:'Build a resource path such as /tasks/7, converting the ID to text. In this lab api.request returns a dictionary with status and data; 404 means the record was not found.',
    use:'Load one task for its details screen.', mistake:'A task ID belongs in the path; it is not a list position. Missing records need the specified fallback.', plan:'How does the ID become part of the path, and what does a missing task return?'
  },
  'api-create': {
    js:'POST requests a new record. Validate the title before sending. JSON.stringify turns an object into JSON text; the Content-Type header describes that body to the server. A 201 response means creation succeeded.',
    py:'POST requests a new record. Validate the title before sending. This lab’s api.request helper accepts the body as a dictionary and returns status and data in another dictionary; it handles the practice transport for you.',
    use:'Save a task entered in a form.', mistake:'Do not send a request for invalid blank text. The server chooses the new record’s ID; read it from the response.', plan:'What validation can I do before the request, and which values belong in its body?'
  },
  'api-update': {
    js:'PATCH asks a server to change selected fields of one existing record. Put the ID in the path and the changed fields in a JSON body. Wait for the response and confirm success before using its data.',
    py:'PATCH asks a server to change selected fields. In the offline helper, pass the record path and a dictionary of changes, then check the returned status before reading data.',
    use:'Save a completed checkbox or renamed task.', mistake:'Sending an update is different from knowing it succeeded. Handle a missing record or failed service before continuing.', plan:'Which record am I changing, which field is changing, and how will I know the save worked?'
  },
  'api-delete': {
    js:'DELETE requests removal of one record. A successful 204 response has no body. Check its status; do not call response.json() on that empty response.',
    py:'DELETE requests removal of one record. A successful 204 response has no body. In this helper, check response["status"] and return the requested boolean.',
    use:'Remove a saved task when someone confirms Delete.', mistake:'An empty response body does not mean failure. The status tells you whether deletion succeeded.', plan:'What response proves removal worked, and do I need to read any returned data?'
  },
  'api-workflow': {
    js:'A workflow connects dependent requests. Save the result of creating a record, take its ID into the update request, then read the final list. await and explicit status checks keep later steps from running before their required results exist.',
    py:'A workflow connects dependent requests. Save each helper response, check its status, and use the created record’s ID for the next request. Stop and return the required fallback if an earlier step fails.',
    use:'Create an item, change it, then refresh the visible list.', mistake:'Do not guess the new ID or keep making dependent requests after failure. Each next step needs a successful previous result.', plan:'Which result feeds the next request? At which points must I stop on failure?'
  },
  even: {
    js:'filter visits each item and keeps it when your condition is true. The % operator gives a division remainder: 8 % 2 is 0, so 8 is even. An arrow function like value => condition is a short function that returns the condition.',
    py:'A list comprehension builds a new list. Add an if condition to keep only matching values. The % operator gives a division remainder: 8 % 2 is 0, so 8 is even.',
    use:'Show only available products, passing scores, or records matching a rule.', mistake:'Filtering chooses items; it does not change their values. Zero and negative even numbers still have remainder 0.', plan:'For one item, what yes/no question decides whether to keep it?'
  },
  double: {
    js:'map visits each item and puts the returned value into a new list at the same position. It changes what each item becomes; it does not remove items. You can write a loop and push each changed value instead.',
    py:'A list comprehension can transform each value into one new value. A loop with append does the same job more explicitly. Keep the input list separate from your new result.',
    use:'Convert prices, turn records into labels, or calculate a score for every player.', mistake:'Use one transformed value per input. A yes/no condition alone produces booleans rather than the changed numbers.', plan:'What does one input item become? What should stay the same about the list?'
  },
  total: {
    js:'reduce carries a running result from one item to the next. The accumulator is that result so far; give it an initial value so an empty list has an answer. A loop with total = 0 is also a clear solution.',
    py:'sum adds the values of a sequence, starting at 0 by default. To understand it, trace a loop: start total at 0, then add the current value on each turn.',
    use:'Calculate a cart total, total hours worked, or points earned.', mistake:'Return the final total after all items. Decide the empty-input result before writing the loop.', plan:'What is the starting total, and how does one item change it?'
  },
  clean: {
    js:'trim removes whitespace at the two ends of text. toLowerCase returns a lowercase version. Strings are not changed in place: save or return the new text.',
    py:'strip removes whitespace at the two ends of text. lower returns a lowercase version. Strings are not changed in place: save or return the new text.',
    use:'Normalize a username or search term before comparing it.', mistake:'Cleaning the ends does not remove spaces inside a name. Do not remove meaningful characters unless asked.', plan:'Which parts of the text should change, and which must stay?'
  },
  contains: {
    js:'includes answers whether a list contains a value. It returns true or false, not the matching value or its index. It is useful when you only need a yes/no decision.',
    py:'in checks whether a value belongs to a collection. It produces True or False. On a list, membership may require checking values one by one.',
    use:'Check whether a selected tag or required packing item is present.', mistake:'Match the requested value exactly unless the task asks you to ignore case or clean text.', plan:'Do I need a yes/no answer, an item, or an index?'
  },
  last: {
    js:'pop removes the last item and returns that item. Because it changes the list, make a copy with slice first when the original must stay unchanged.',
    py:'pop removes the last item and returns it. Copy the list first when the original must stay unchanged. An empty list needs a check before pop.',
    use:'Take the latest saved action from an undo stack or the top item from a pile.', mistake:'Removing an item and reading an item are different. Handle the empty list before using the result.', plan:'What changes if I call pop on the original instead of a copy?'
  },
  'even-double': {
    js:'filter first selects the values you want. map then changes each selected value. Save the filtered list in a named variable before mapping it while you are learning.',
    py:'Separate the condition that chooses a value from the expression that changes it. You can use two small loops or comprehensions before combining them.',
    use:'Keep eligible orders, then calculate a display value for each one.', mistake:'A condition about the original value should be checked before transforming it. Check the intermediate list by hand.', plan:'What should the list look like after selection, and after transformation?'
  },
  'word-count': {
    js:'trim checks whether any non-whitespace text remains. split can divide text into words; a whitespace pattern handles repeated spaces, tabs, and newlines.',
    py:'split() without a separator divides text at whitespace and skips repeated whitespace. It returns a list of words; len counts that list.',
    use:'Count words in a note, message, or simple text field.', mistake:'Blank text has zero words. Splitting on one literal space can create empty pieces between repeated spaces.', plan:'What should blank text produce? What about two spaces between words?'
  },
  labels: {
    js:'Break this into three jobs: map text to cleaned labels, filter out empty labels, then join the remaining labels into one string. join returns text, not a list.',
    py:'Clean each label with strip, keep nonempty labels, then join them with the requested separator. A short loop is useful for seeing each intermediate result.',
    use:'Build a readable tags line or a comma-separated list of names.', mistake:'Remove blank labels before joining so they do not leave extra separators.', plan:'Which stages return lists, and which stage finally returns text?'
  },
  cheapest: {
    js:'sort changes the list it is called on. Copy first, sort with a numeric comparator, then slice out the requested count. A comparator tells sort which of two values belongs first.',
    py:'sorted returns a new ordered list. Slicing takes a portion of that list without changing the original. Separate ordering from choosing how many items to return.',
    use:'Choose the lowest prices, earliest dates, or highest scores.', mistake:'JavaScript default sorting compares text representations. Numeric order needs a comparator, and the input must remain unchanged here.', plan:'Do I need all items ordered, or only a portion? Which step could change the input?'
  },
  'positive-total': {
    js:'First select values that pass the rule, then reduce the selected values to one total. Use a starting total of 0. A single loop can do both jobs too.',
    py:'First select values that pass the rule, then sum them. You can also use a loop with a condition and a running total.',
    use:'Add only paid invoices, qualifying points, or positive adjustments.', mistake:'Positive means greater than zero. Keep the selection rule separate from the arithmetic.', plan:'Which values contribute to the total, and what happens if none qualify?'
  },
  unique: {
    js:'A Set remembers distinct values. Adding a repeated primitive value does not create another entry. Converting it back to an array keeps the first occurrence order.',
    py:'A set remembers distinct values, but its iteration order is not the original list order. To preserve order, keep a seen set and append only values not already seen.',
    use:'Keep one copy of each tag or detect whether a value has appeared before.', mistake:'Removing duplicates must not scramble the order in this task. Object/record equality needs more thought than primitive-value equality.', plan:'What will remember what I have seen, and what will keep the output order?'
  },
  names: {
    js:'A record groups named fields such as id and name. Access the field on each record, then map it into a new list. You are extracting one value per record.',
    py:'A dictionary groups named fields such as id and name. Read the required key from each dictionary while building a new list.',
    use:'Turn user records into a list of names for a menu.', mistake:'The input item is a record, not the name itself. Read the correct field before returning it.', plan:'Which field do I need from one record, and what shape is the final result?'
  },
  find: {
    js:'find returns the first item whose condition is true. If none matches, it returns undefined. Use an explicit fallback when your function must return null instead.',
    py:'Visit records one at a time and return the first matching record. If the loop finishes without a match, return None.',
    use:'Open a task by ID or find a selected product in a list.', mistake:'An ID is a stored value, not necessarily the position in the list. Compare the record field with the requested ID.', plan:'What makes one record a match, and what should a missing match return?'
  },
  'all-done': {
    js:'every checks whether each item passes a condition. It can stop on the first failure. An empty list returns true because no item violates the rule.',
    py:'all checks whether every condition result is true. An empty iterable returns True because there is no failing item.',
    use:'Check whether all required steps or checklist items are complete.', mistake:'Every item must pass; one successful item is not enough. Decide how the empty-list rule fits the problem.', plan:'What single failing item would be enough to return false?'
  },
  'any-late': {
    js:'some checks whether at least one item passes a condition. It can stop at the first success. An empty list returns false.',
    py:'any checks whether at least one condition result is true. It can stop at the first success; an empty iterable returns False.',
    use:'Show a warning if any delivery is late or any field is invalid.', mistake:'At least one is different from every item. Check the exact late/not-late boundary.', plan:'What single matching item would be enough to return true?'
  },
  lookup: {
    js:'A lookup stores values under keys so you can ask for a value by ID. Object.fromEntries builds an object from [key, value] pairs. A loop that assigns one key at a time is another option.',
    py:'A lookup dictionary stores values under keys so you can ask for a value by ID. Build one entry per record, using its ID as the key.',
    use:'Read a name by ID without repeatedly scanning a list.', mistake:'Keys identify records; positions can change. Repeated keys overwrite earlier values, so understand the task rules.', plan:'What is the key, and which value should be stored under that key?'
  },
  'open-titles': {
    js:'filter keeps unfinished records. map then extracts each kept record’s title. The intermediate values are still records until the extraction step.',
    py:'Keep unfinished records, then read their title fields. A loop or a conditional comprehension can express these same two decisions.',
    use:'Show just the titles of work still needing attention.', mistake:'Extracting titles too soon loses the done field you need for the condition.', plan:'Which field decides whether to keep a record, and which field belongs in the output?'
  },
  create: {
    js:'Creating means validating new values, choosing an unused ID, and returning a new list with a new record added. Copying the outer list lets you keep the input unchanged.',
    py:'Creating means validating new values, choosing an unused ID, and returning a new list with a new dictionary added. Keep the original list unchanged.',
    use:'Add a task, shopping item, or draft record.', mistake:'An ID is not the same as the list length. Clean and validate text before accepting a new record.', plan:'What must be valid before I create anything? How will I avoid reusing an ID?'
  },
  read: {
    js:'Reading means selecting an existing record without changing it. find can stop at the first matching ID. Return the required missing-value fallback if no match exists.',
    py:'Reading means selecting an existing record without changing it. Compare each stored ID and return the matching dictionary; handle the missing case after the loop.',
    use:'Load the record shown on a details or edit screen.', mistake:'An empty result is not the same as an error in your loop. A missing ID is an expected case to handle.', plan:'How will I tell a match from a missing record?'
  },
  update: {
    js:'map can build a new list where only the matching record is replaced. Spread copies that record’s fields, then your changed field overrides the old value.',
    py:'Build a new list and replace only the matching dictionary with a copied dictionary containing the changed field. Other fields should remain intact.',
    use:'Rename a task or change one setting without replacing unrelated data.', mistake:'Copying only the outer list still shares its record objects. Changing a shared record would also change the input.', plan:'Which record changes, which field changes, and which values must survive?'
  },
  toggle: {
    js:'A toggle flips a boolean: !true becomes false and !false becomes true. Replace only the matching record, copying its other fields.',
    py:'A toggle flips a boolean: not True becomes False and not False becomes True. Copy the matching dictionary and preserve its other fields.',
    use:'Switch a checkbox, saved flag, or enabled setting on and off.', mistake:'Always setting true is not a toggle. Applying the toggle twice should restore the original boolean.', plan:'What changes after the first call? What should a second call restore?'
  },
  delete: {
    js:'filter can remove a record by keeping every record whose ID is different from the requested ID. The result is a new list.',
    py:'Build a new list containing records whose ID differs from the one being deleted. The original list stays unchanged.',
    use:'Remove a task, cart item, or saved entry.', mistake:'Keeping the matching ID does the opposite of deletion. Check the keep-condition on one matching and one nonmatching record.', plan:'What condition means this record should survive?'
  },
  search: {
    js:'Normalize the search term and the field you compare, then filter records whose text includes the term. A blank cleaned query usually matches every record under these task rules.',
    py:'Normalize the query and each compared field, then use membership testing on the text. Filter whole records so their other fields remain available.',
    use:'Filter a task list as someone types a search term.', mistake:'Cleaning only one side still makes the comparison inconsistent. Returning titles instead of records changes the output shape.', plan:'Which text must be normalized, and should the output contain records or just text?'
  },
};

export function conceptFor(exercise, language) {
  const prefix = `practical-${language === 'python' ? 'py' : 'js'}-`;
  if (!exercise.id?.startsWith(prefix)) return null;
  const item = concepts[exercise.id.slice(prefix.length)];
  return item ? { lesson:item[language === 'python' ? 'py' : 'js'], use:item.use, mistake:item.mistake, plan:item.plan } : null;
}

export const dataShapes = {
  list:{title:'Ordered items → array / list',why:'Use a list when order matters and you need to visit each item. Store one entry per item; the index is its position.',js:'const items = ["water", "keys"];\nconst first = items[0];',py:'items = ["water", "keys"]\nfirst = items[0]',jsId:'js-pack',pyId:'py-list'},
  record:{title:'Facts about one thing → object / dictionary',why:'Use named fields for one record, such as a task’s ID, title, and completion flag. A list of records represents many tasks.',js:'const task = { id: 7, title: "Read", done: false };\nconst title = task.title;',py:'task = {"id": 7, "title": "Read", "done": False}\ntitle = task["title"]',jsId:'js-object',pyId:'py-dictionary'},
  lookup:{title:'Find a value by key → lookup',why:'Use a lookup for questions such as “what name belongs to this ID?” An object or dictionary can hold the entries. Keys identify data; list positions only locate it.',js:'const names = { 7: "Ari", 12: "Bo" };\nconst name = names[12];',py:'names = {7: "Ari", 12: "Bo"}\nname = names[12]',jsId:'practical-js-lookup',pyId:'practical-py-lookup'},
  set:{title:'Remember distinct values → set',why:'Use a set for membership and duplicates. A set does not store a separate value under each key. Do not rely on Python set iteration to preserve the original list order.',js:'const seen = new Set(["red", "blue"]);\nconst exists = seen.has("red");',py:'seen = {"red", "blue"}\nexists = "red" in seen',jsId:'practical-js-unique',pyId:'practical-py-unique'},
  stack:{title:'Take the newest item first → stack',why:'A stack is a way to use a list: add to the end, then take from the end. It models undo history or matching the most recent opening bracket. Check for an empty stack before removing an item.',js:'const history = [];\nhistory.push("typed A");\nconst latest = history.pop();',py:'history = []\nhistory.append("typed A")\nlatest = history.pop()',jsId:'path-js-brackets',pyId:'path-py-brackets'},
};
