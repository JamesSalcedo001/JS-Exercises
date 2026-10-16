// Count concrete work before naming its growth rate. Same reasoning in both languages.
const lessons = [
  {
    slug:'trace', title:'Write down each running total', params:'numbers',
    prompt:'Start total at 0. Add each number in order. Return a list containing the starting total and the total after each addition. For [2, 4, 1], return [0, 2, 6, 7]. This list is your trace: a record of what changed.',
    lesson:'An algorithm is a set of steps. A trace follows those steps on one small input. Write the value before a line runs, do that line, then write the value after it. Do not jump straight to the final answer.',
    js:'let total = 0;\n  const trace = [0];\n  for (const number of numbers) { total += number; trace.push(total); }\n  return trace;',
    py:'total = 0\n    trace = [0]\n    for number in numbers:\n        total += number\n        trace.append(total)\n    return trace',
    cases:[[[2,4,1]],[0,2,6,7],[[]],[0],[[5,-5]],[0,5,0],[[0]],[0,0]],
    hints:['Keep a running total and a separate trace list that begins with 0.','Inside the loop, add the number first, then append the new total. Return the trace after the loop.'],
    stretch:'On paper, make columns: number, total before, total after. Check [3, -1, 2] before running it.',
    analysis:'There are n additions, so time is O(n). The returned trace holds n + 1 values, so output space is O(n). Apart from that output, total and number take O(1) auxiliary space. We count stored values in the usual fixed-size-number model.'
  },
  {
    slug:'constant', title:'Read one value, however long the list', params:'numbers',
    prompt:'Return the first number, or null (JavaScript) / None (Python) if the list is empty. Read index 0; do not loop. How many list entries must you read if the list has 4 items? What about 4,000?',
    lesson:'Let n mean the number of items in the input. Reading one indexed list entry does the same amount of work as n grows. We call this constant time, written O(1). It means a fixed amount of work, not exactly one instruction or one second.',
    js:'if (numbers.length === 0) return null;\n  return numbers[0];',
    py:'if not numbers:\n        return None\n    return numbers[0]',
    cases:[[[9,2,3]],9,[[]],null,[[-1]],-1,[[0,4]],0],
    hints:['Check whether the list is empty.','Otherwise return the entry at index 0.'],
    stretch:'Explain why checking the length and then reading one index is still O(1), even though that is more than one action.',
    analysis:'Time O(1): the empty check and one indexed read do not grow with n. Extra space O(1): we do not build a new list. The existing input is not counted as extra memory.'
  },
  {
    slug:'visits', title:'Count one walk through a list', params:'numbers',
    prompt:'Use a loop to count how many numbers you visit. Start visits at 0, add 1 for each number, and return visits. Do not return the list length directly. For [7, 7, 7], return 3: values can repeat, but each position is visited.',
    lesson:'Visiting all n items takes n loop turns. If n doubles, the turns double. This is linear time, O(n). Count a useful operation such as visits or comparisons; you do not need to count every machine instruction.',
    js:'let visits = 0;\n  for (const number of numbers) visits += 1;\n  return visits;',
    py:'visits = 0\n    for number in numbers:\n        visits += 1\n    return visits',
    cases:[[[7,7,7]],3,[[]],0,[[1]],1,[[1,2,3,4,5]],5],
    hints:['Declare your counter before the loop.','Increment once inside the loop, then return after it ends.'],
    stretch:'Predict the visit counts for input lengths 4, 8, and 16. Explain why one loop variable does not need n storage slots.',
    analysis:'Time O(n): exactly n visits. Extra space O(1): visits and the current number use a fixed number of slots. A loop is not automatically O(n) space.'
  },
  {
    slug:'two-passes', title:'Two walks are not nested loops', params:'numbers',
    prompt:'Walk through numbers once, adding 1 to visits for every item. After that loop ends, walk through numbers again and keep adding to the same counter. Return visits. Use two separate loops. For three items, return 6.',
    lesson:'Two full walks do n + n = 2n visits. Big O describes growth and drops fixed multipliers: O(2n) simplifies to O(n). It does not mean one pass and two passes have identical real runtimes.',
    js:'let visits = 0;\n  for (const number of numbers) visits += 1;\n  for (const number of numbers) visits += 1;\n  return visits;',
    py:'visits = 0\n    for number in numbers:\n        visits += 1\n    for number in numbers:\n        visits += 1\n    return visits',
    cases:[[[2,4,6]],6,[[]],0,[[5]],2,[[1,2,3,4]],8],
    hints:['Both loops must be at the same indentation level.','Keep the counter between the two loops. Do not reset it.'],
    stretch:'For n = 4, write 4 + 4 = 8. For n = 8, write 8 + 8 = 16. Did doubling n double the work, or quadruple it?',
    analysis:'Time O(n): 2n visits grow linearly. Extra space O(1). Compare the next lesson: putting a complete walk inside another walk multiplies the work.'
  },
  {
    slug:'pairs', title:'A full walk inside every turn', params:'numbers',
    prompt:'Use a loop over numbers. Inside each turn, loop over all of numbers again. Add 1 to pairs for each inner-loop turn. Return pairs. Include pairs with the same position and both orders. For [3, 8], the four pairs are (3,3), (3,8), (8,3), (8,8). Count them; do not store the pairs.',
    lesson:'Each of n outer turns does n inner turns: n × n. This is quadratic time, O(n²). Doubling n makes this work four times as large. Nested loops are not always quadratic; this example is because both loops visit all n items.',
    js:'let pairs = 0;\n  for (const left of numbers) {\n    for (const right of numbers) pairs += 1;\n  }\n  return pairs;',
    py:'pairs = 0\n    for left in numbers:\n        for right in numbers:\n            pairs += 1\n    return pairs',
    cases:[[[3,8]],4,[[]],0,[[3]],1,[[1,2,3]],9],
    hints:['Set pairs to 0 outside both loops.','Increment pairs inside the inner loop. Return only after both loops end.'],
    stretch:'List the nine pairs for [1, 2, 3]. How many pairs for 4 items? For 8? Why is the extra space still constant?',
    analysis:'Time O(n²): n × n visits. Extra space O(1): pairs, left, and right use a fixed number of slots. If we stored all the pairs, that output would instead need O(n²) space.'
  },
  {
    slug:'halving', title:'Keep cutting the work in half', params:'remaining',
    prompt:'remaining is a positive whole number. While it is greater than 1, divide it by 2 and round down. Count the divisions and return that count. For 8: 8 → 4 → 2 → 1, so return 3. For 1, return 0.',
    lesson:'A logarithm answers “how many times can I divide by this base?” Halving needs only one more turn when the starting size doubles. That is O(log n) time. Here n is the starting number, not a list length. This is the idea behind binary search on sorted data.',
    js:'let steps = 0;\n  while (remaining > 1) {\n    remaining = Math.floor(remaining / 2);\n    steps += 1;\n  }\n  return steps;',
    py:'steps = 0\n    while remaining > 1:\n        remaining = remaining // 2\n        steps += 1\n    return steps',
    cases:[[8],3,[1],0,[16],4,[7],2,[2],1],
    hints:['Use a while loop because the number of turns depends on the shrinking value.','JavaScript uses Math.floor(remaining / 2); Python uses remaining // 2.'],
    stretch:'Trace 16 and 32. How many extra turns did doubling need? A loop that subtracts 1 instead would need how many turns?',
    analysis:'Time O(log n): about log₂(n) divisions for n > 1. Extra space O(1): only remaining and steps are kept. Binary search uses the same shrinking idea, but also needs indices, comparisons, and sorted input.'
  },
  {
    slug:'copy', title:'Notice the memory you create', params:'numbers',
    prompt:'Build a new list containing each input number doubled. Use a loop and append one result at a time. Return the new list and leave numbers unchanged. For [2, 5], return [4, 10].',
    lesson:'Time counts how work grows. Space counts how stored data grows. A new list with n results uses O(n) output space. The input already exists; extra space asks what your algorithm creates. Always say whether your space count includes the returned output.',
    js:'const result = [];\n  for (const number of numbers) result.push(number * 2);\n  return result;',
    py:'result = []\n    for number in numbers:\n        result.append(number * 2)\n    return result',
    cases:[[[2,5]],[4,10],[[]],[],[[-2,0,3]],[-4,0,6],[[1]],[2]],
    hints:['Create result before the loop.','Append number times 2 to result. Do not edit numbers itself.'],
    stretch:'Compare this with summing the same list into one total. Both visit n values. Which keeps n results, and which keeps just one?',
    analysis:'Time O(n), using amortized constant-time appends. Output space O(n); auxiliary space excluding that output O(1). If you include the output in extra space, say O(n). Both conventions are used; state yours.'
  },
  {
    slug:'search', title:'Best case and worst case', params:'numbers, target',
    prompt:'Visit numbers from left to right. Count each comparison with target. Stop and return the count at the first match. If no value matches, return the total comparisons made. For [4, 9, 2] and target 4 return 1; for target 2 return 3; for target 8 return 3.',
    lesson:'The same algorithm can do different amounts of work on different inputs. First-item match: constant work, best case O(1). Last-item or missing match: n comparisons, worst case O(n). When discussing complexity, say which case you mean.',
    js:'let comparisons = 0;\n  for (const number of numbers) {\n    comparisons += 1;\n    if (number === target) return comparisons;\n  }\n  return comparisons;',
    py:'comparisons = 0\n    for number in numbers:\n        comparisons += 1\n        if number == target:\n            return comparisons\n    return comparisons',
    cases:[[[4,9,2],4],1,[[4,9,2],2],3,[[4,9,2],8],3,[[],4],0,[[4,4],4],1],
    hints:['Count the comparison before checking whether it matches.','Return from inside the matching branch; otherwise return after the loop.'],
    stretch:'You are ready for “Find the first matching index.” What changes in the return value? What stays the same about the search and its time cost?',
    analysis:'Best-case time O(1); worst-case time O(n). Extra space O(1). Average-case claims need assumptions about where matches occur; we are not assuming a probability distribution here.'
  },
];

export const algorithmSections = ['javascript','python'].map(language => {
  const py = language === 'python', prefix = py ? 'py' : 'js';
  return { id:`algorithm-${prefix}-basics`, language, stage:14, level:'Before DSA',
    title:`${py ? 'Python' : 'JavaScript'} · Trace steps & understand Big O`,
    description:'Start with a tiny trace. Count visits, compare growth, and notice extra memory before solving DSA problems.',
    exercises:lessons.map(item => {
      const functionName = `practice_${item.slug.replaceAll('-','_')}`;
      const signature = py ? `def ${functionName}(${item.params}):` : `function ${functionName}(${item.params})`;
      const tests = [];
      for (let i=0; i<item.cases.length; i+=2) tests.push({args:item.cases[i],expected:item.cases[i+1]});
      return { id:`algorithm-${prefix}-${item.slug}`, title:item.title, prompt:item.prompt, lesson:item.lesson,
        signature,functionName,tests,preserveInput:true, hints:item.hints, constraints:['Use the requested steps: matching output alone does not prove which algorithm you wrote.','Numbers are small integers; use the usual fixed-size-number model when discussing cost.'],
        snippet:py ? `${signature}\n    pass` : `${signature} {\n}`, answer:py ? `${signature}\n    ${item.py}` : `${signature} {\n  ${item.js}\n}`,
        stretch:item.stretch, analysis:item.analysis, minutes:8 };
    }) };
});
