// The same concepts in both languages, so syntax does not hide the reasoning.
// Every challenge checks a callable function against several inputs, not printed text.
const problems = [
  {
    slug: "maximum", stage: 4, title: "Find the largest value", jsName: "findMax", pyName: "find_max", params: ["numbers"],
    prompt: "Return the largest number in the list. Return null (JavaScript) or None (Python) for an empty list.",
    lesson: "A running best value lets you inspect a list once. Start from an actual value so an all-negative list works.",
    hints: ["What value should an empty list return?", "Use the first item as your initial best. Compare each remaining item with it.", "Update best only when the current number is larger, then return best after the loop."],
    constraints: ["Numbers are integers; the list may be empty.", "Use a loop rather than a built-in maximum function.", "Aim for O(n) time and O(1) extra space."],
    cases: [[[3, 1, 5]], 5, [[-8, -2, -9]], -2, [[]], null, [[7]], 7, [[4, 4, 4]], 4, [[0, -1]], 0],
    js: "function findMax(numbers) {\n  if (numbers.length === 0) return null;\n  let best = numbers[0];\n  for (const number of numbers) {\n    if (number > best) best = number;\n  }\n  return best;\n}",
    py: "def find_max(numbers):\n    if not numbers:\n        return None\n    best = numbers[0]\n    for number in numbers:\n        if number > best:\n            best = number\n    return best",
    stretch: "Trace the best value on [-8, -2, -9]. Why is starting at zero incorrect?",
  },
  {
    slug: "reverse", stage: 4, title: "Reverse a string yourself", jsName: "reverseText", pyName: "reverse_text", params: ["text"],
    prompt: "Return the characters in reverse order. An empty string should return an empty string.",
    lesson: "Indexing lets you choose the order you visit data. Work out the first index, last index, and stopping condition before coding.",
    hints: ["The last character is at length minus one.", "Walk backward, collecting one character at a time.", "Join the collected characters once at the end."],
    constraints: ["Input uses ASCII characters, including spaces.", "Do not use reverse(), reversed(), or slicing to reverse the text.", "Aim for O(n) time and O(n) extra space."],
    cases: [["code"], "edoc", [""], "", ["a"], "a", ["a b"], "b a", ["level"], "level"],
    js: "function reverseText(text) {\n  const result = [];\n  for (let i = text.length - 1; i >= 0; i--) result.push(text[i]);\n  return result.join(\"\");\n}",
    py: "def reverse_text(text):\n    result = []\n    for i in range(len(text) - 1, -1, -1):\n        result.append(text[i])\n    return \"\".join(result)",
    stretch: "Explain why the loop starts at length minus one, not length. Trace a one-character input.",
  },
  {
    slug: "search", stage: 4, title: "Find the first matching index", jsName: "firstIndex", pyName: "first_index", params: ["numbers", "target"],
    prompt: "Return the index of the first occurrence of target. Return -1 if it is not present.",
    lesson: "A linear search visits values one at a time. An early return stops as soon as the answer is known.",
    hints: ["You need the index, not just the value.", "Visit indices from zero upward and compare the value with target.", "Return an index inside the matching branch; return -1 only after the whole loop."],
    constraints: ["The list is not necessarily sorted; duplicates are allowed.", "Do not use indexOf() or list.index().", "Worst-case time is O(n); extra space is O(1)."],
    cases: [[[4, 2, 4], 4], 0, [[4, 2, 4], 2], 1, [[4, 2], 9], -1, [[], 1], -1, [[-1, 0, 3], 3], 2],
    js: "function firstIndex(numbers, target) {\n  for (let i = 0; i < numbers.length; i++) {\n    if (numbers[i] === target) return i;\n  }\n  return -1;\n}",
    py: "def first_index(numbers, target):\n    for i in range(len(numbers)):\n        if numbers[i] == target:\n            return i\n    return -1",
    stretch: "What changes if the target is first, last, or missing? Count the comparisons for each.",
  },
  {
    slug: "frequency", stage: 5, title: "Count character frequencies", jsName: "countLetters", pyName: "count_letters", params: ["text"],
    prompt: "Return an object (JavaScript) or dictionary (Python) mapping each letter to its count. Return an empty object/dictionary for empty text.",
    lesson: "A frequency map records how many times each value appears. A missing key starts at zero.",
    hints: ["Keep a count under each character's key.", "For each letter, read its current count or zero, then add one.", "Return the map after visiting all characters."],
    constraints: ["Text contains only lowercase English letters.", "Object/dictionary key order does not matter.", "Aim for O(n) time; at most 26 counts are needed."],
    cases: [["banana"], {b: 1, a: 3, n: 2}, [""], {}, ["aaa"], {a: 3}, ["abc"], {a: 1, b: 1, c: 1}, ["z"], {z: 1}],
    js: "function countLetters(text) {\n  const counts = {};\n  for (const letter of text) counts[letter] = (counts[letter] || 0) + 1;\n  return counts;\n}",
    py: "def count_letters(text):\n    counts = {}\n    for letter in text:\n        counts[letter] = counts.get(letter, 0) + 1\n    return counts",
    stretch: "Trace the map after each character of 'banana'. Reuse this idea to count words.",
  },
  {
    slug: "duplicates", stage: 5, title: "Spot a duplicate", jsName: "hasDuplicate", pyName: "has_duplicate", params: ["numbers"],
    prompt: "Return true/True if any number appears more than once; otherwise return false/False.",
    lesson: "A set remembers what you have already seen. Checking membership before adding catches repeated values.",
    hints: ["Can you remember previously visited values?", "If the current number is already in seen, return true/True.", "Otherwise add it. Return false/False after the loop."],
    constraints: ["Numbers are integers; empty and single-item lists contain no duplicates.", "Use a set rather than sorting or nested loops.", "Aim for O(n) expected time and O(n) extra space."],
    cases: [[[1, 2, 1]], true, [[1, 2, 3]], false, [[]], false, [[5]], false, [[0, 0]], true, [[-1, 2, -1]], true],
    js: "function hasDuplicate(numbers) {\n  const seen = new Set();\n  for (const number of numbers) {\n    if (seen.has(number)) return true;\n    seen.add(number);\n  }\n  return false;\n}",
    py: "def has_duplicate(numbers):\n    seen = set()\n    for number in numbers:\n        if number in seen:\n            return True\n        seen.add(number)\n    return False",
    stretch: "Compare a set approach with comparing every pair. How much work does each do for 1,000 numbers?",
  },
  {
    slug: "anagram", stage: 5, title: "Compare two anagrams", jsName: "isAnagram", pyName: "is_anagram", params: ["left", "right"],
    prompt: "Return true/True when both strings contain the same letters with the same counts, in any order.",
    lesson: "Anagrams are equal frequency maps. Matching which letters exist is not enough: their counts must match too.",
    hints: ["Different lengths can immediately return false/False.", "Count the letters in the first string, then consume those counts using the second.", "A missing or exhausted count means failure."],
    constraints: ["Both strings contain lowercase English letters only.", "Use frequency counts rather than sorting.", "Two empty strings are anagrams. Aim for O(n + m) time."],
    cases: [["listen", "silent"], true, ["aab", "abb"], false, ["", ""], true, ["a", ""], false, ["rat", "car"], false, ["aa", "aa"], true],
    js: "function isAnagram(left, right) {\n  if (left.length !== right.length) return false;\n  const counts = {};\n  for (const letter of left) counts[letter] = (counts[letter] || 0) + 1;\n  for (const letter of right) {\n    if (!counts[letter]) return false;\n    counts[letter]--;\n  }\n  return true;\n}",
    py: "def is_anagram(left, right):\n    if len(left) != len(right):\n        return False\n    counts = {}\n    for letter in left:\n        counts[letter] = counts.get(letter, 0) + 1\n    for letter in right:\n        if counts.get(letter, 0) == 0:\n            return False\n        counts[letter] -= 1\n    return True",
    stretch: "Explain why a set of letters cannot distinguish 'aab' from 'abb'.",
  },
  {
    slug: "palindrome", stage: 6, title: "Meet in the middle", jsName: "isPalindrome", pyName: "is_palindrome", params: ["text"],
    prompt: "Return true/True if text reads the same forward and backward. Compare from both ends without building a reversed string.",
    lesson: "Two pointers can shrink the part of a sequence still under consideration. Each matching pair moves you closer to the middle.",
    hints: ["Place one index at each end.", "If the characters differ, stop. Otherwise move both indices inward.", "Continue while left is less than right. If you finish, return true/True."],
    constraints: ["Text contains lowercase English letters only.", "Empty and single-character strings are palindromes.", "Aim for O(n) time and O(1) extra space."],
    cases: [["racecar"], true, ["hello"], false, [""], true, ["a"], true, ["abba"], true, ["abca"], false],
    js: "function isPalindrome(text) {\n  let left = 0, right = text.length - 1;\n  while (left < right) {\n    if (text[left] !== text[right]) return false;\n    left++;\n    right--;\n  }\n  return true;\n}",
    py: "def is_palindrome(text):\n    left = 0\n    right = len(text) - 1\n    while left < right:\n        if text[left] != text[right]:\n            return False\n        left += 1\n        right -= 1\n    return True",
    stretch: "State what the pointers mean at every step. How could you adapt this for spaces and punctuation?",
  },
  {
    slug: "brackets", stage: 6, title: "Match nested brackets", jsName: "validBrackets", pyName: "valid_brackets", params: ["text"],
    prompt: "Return true/True if every opening bracket has the correct closing bracket in the correct order. Empty text is valid.",
    lesson: "A stack processes the most recently opened bracket first. The order matters, not just the total number of each symbol.",
    hints: ["Store opening brackets in a stack.", "A closing bracket must match the last opening bracket; an empty stack cannot match it.", "After the scan, the stack must be empty."],
    constraints: ["Input contains only (, ), [, ], {, and }.", "Use an array/list as a stack with push/append and pop.", "Aim for O(n) time and O(n) extra space."],
    cases: [["([]){}"], true, ["([)]"], false, [""], true, ["("], false, [")("], false, ["{[()]}"], true, ["(()"], false],
    js: "function validBrackets(text) {\n  const stack = [];\n  const pairs = { ')': '(', ']': '[', '}': '{' };\n  for (const ch of text) {\n    if (ch === '(' || ch === '[' || ch === '{') stack.push(ch);\n    else if (stack.length === 0 || stack.pop() !== pairs[ch]) return false;\n  }\n  return stack.length === 0;\n}",
    py: "def valid_brackets(text):\n    stack = []\n    pairs = {')': '(', ']': '[', '}': '{'}\n    for ch in text:\n        if ch in '([{':\n            stack.append(ch)\n        elif not stack or stack.pop() != pairs[ch]:\n            return False\n    return len(stack) == 0",
    stretch: "Why does counting opening and closing brackets fail on '([)]'? Trace the stack instead.",
  },
  {
    slug: "binary-search", stage: 6, title: "Search by halving", jsName: "binarySearch", pyName: "binary_search", params: ["numbers", "target"],
    prompt: "Return the index of target in a sorted list, or -1 if absent. Use binary search rather than scanning every item.",
    lesson: "Sorted data lets you discard half the remaining candidates after each comparison. Updating bounds correctly makes the search terminate.",
    hints: ["Keep inclusive left and right bounds. Inspect the middle index.", "If the middle value is too small, move left to mid + 1; if too large, move right to mid - 1.", "Continue while left <= right; return -1 when the search range is empty."],
    constraints: ["Input is sorted ascending with distinct integers.", "Do not sort or modify the input.", "Aim for O(log n) time and O(1) extra space."],
    cases: [[[1, 3, 5, 7, 9], 7], 3, [[1, 3, 5], 4], -1, [[], 2], -1, [[8], 8], 0, [[8], 7], -1, [[-5, -2, 0, 4], -5], 0, [[1, 2], 2], 1],
    js: "function binarySearch(numbers, target) {\n  let left = 0, right = numbers.length - 1;\n  while (left <= right) {\n    const mid = Math.floor((left + right) / 2);\n    if (numbers[mid] === target) return mid;\n    if (numbers[mid] < target) left = mid + 1;\n    else right = mid - 1;\n  }\n  return -1;\n}",
    py: "def binary_search(numbers, target):\n    left = 0\n    right = len(numbers) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if numbers[mid] == target:\n            return mid\n        if numbers[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1",
    stretch: "Trace a two-element list. Explain why each new bound must exclude the middle item.",
  },
  {
    slug: "two-sum", stage: 7, title: "Find two numbers with a target sum", jsName: "twoSum", pyName: "two_sum", params: ["numbers", "target"],
    prompt: "Return the two indices whose values add to target, earlier index first. Do not reuse an item. Return an empty list if no pair exists.",
    lesson: "For a value x, the needed partner is target - x. Remembering earlier values replaces repeated searches with lookups.",
    hints: ["First describe a correct nested-loop solution on paper.", "As you scan, look for the current value's complement among earlier values.", "Check before storing the current number, so you never use its index twice."],
    constraints: ["Inputs are integers; each test has at most one valid pair.", "Use a map/dictionary. Do not mutate the input.", "Aim for O(n) expected time and O(n) extra space."],
    cases: [[[2, 7, 11, 15], 9], [0, 1], [[3, 2, 4], 6], [1, 2], [[3, 3], 6], [0, 1], [[-3, 5, 2], -1], [0, 2], [[], 1], [], [[5], 10], [], [[0, 0], 0], [0, 1]],
    js: "function twoSum(numbers, target) {\n  const seen = new Map();\n  for (let i = 0; i < numbers.length; i++) {\n    const needed = target - numbers[i];\n    if (seen.has(needed)) return [seen.get(needed), i];\n    if (!seen.has(numbers[i])) seen.set(numbers[i], i);\n  }\n  return [];\n}",
    py: "def two_sum(numbers, target):\n    seen = {}\n    for i in range(len(numbers)):\n        needed = target - numbers[i]\n        if needed in seen:\n            return [seen[needed], i]\n        if numbers[i] not in seen:\n            seen[numbers[i]] = i\n    return []",
    stretch: "Explain the time/space trade-off against a nested loop. Why does [3, 3] require two different indices?",
  },
  {
    slug: "move-zeros", stage: 7, title: "Move zeros without scrambling order", jsName: "moveZeros", pyName: "move_zeros", params: ["numbers"],
    prompt: "Return a new list with all nonzero values in their original order, followed by all zeros. Leave the input unchanged.",
    lesson: "Separate the values you keep from the count you defer. Stable order means equal and unequal nonzero values retain their relative positions.",
    hints: ["Collect nonzero values and count zeros during one scan.", "Append the counted zeros only after all nonzero values.", "An empty input returns an empty result; an all-zero input keeps its original length."],
    constraints: ["Numbers are integers; negatives are nonzero too.", "Do not sort and do not mutate the input.", "Aim for O(n) time and O(n) space for the returned list."],
    cases: [[[0, 1, 0, 3, 12]], [1, 3, 12, 0, 0], [[]], [], [[0, 0]], [0, 0], [[1, 2]], [1, 2], [[0, -1, 0, -2]], [-1, -2, 0, 0]],
    js: "function moveZeros(numbers) {\n  const result = [];\n  let zeros = 0;\n  for (const number of numbers) {\n    if (number === 0) zeros++;\n    else result.push(number);\n  }\n  for (let i = 0; i < zeros; i++) result.push(0);\n  return result;\n}",
    py: "def move_zeros(numbers):\n    result = []\n    zeros = 0\n    for number in numbers:\n        if number == 0:\n            zeros += 1\n        else:\n            result.append(number)\n    for i in range(zeros):\n        result.append(0)\n    return result",
    stretch: "Now sketch an in-place version using a write pointer. Which space cost would that avoid?",
  },
  {
    slug: "window", stage: 7, title: "Find the best fixed-size window", jsName: "maxWindowSum", pyName: "max_window_sum", params: ["numbers", "k"],
    prompt: "Return the largest sum of any k consecutive numbers. Return null/None if k is below 1 or larger than the list length.",
    lesson: "A sliding window reuses the previous sum: subtract the value that leaves and add the one that enters. It avoids summing the same values repeatedly.",
    hints: ["Reject an invalid window size first, then total the first k values.", "Move one place at a time by adding numbers[i] and subtracting numbers[i - k].", "Track the largest window sum, initialized from the first actual window rather than zero."],
    constraints: ["Numbers and k are integers; values may be negative.", "The window is contiguous, not any k items.", "Aim for O(n) time and O(1) extra space."],
    cases: [[[2, 1, 5, 1, 3, 2], 3], 9, [[-4, -2, -7], 2], -6, [[5, 1], 1], 5, [[1, 2, 3], 3], 6, [[], 1], null, [[1], 0], null, [[1, 2], 3], null],
    js: "function maxWindowSum(numbers, k) {\n  if (k < 1 || k > numbers.length) return null;\n  let sum = 0;\n  for (let i = 0; i < k; i++) sum += numbers[i];\n  let best = sum;\n  for (let i = k; i < numbers.length; i++) {\n    sum += numbers[i] - numbers[i - k];\n    if (sum > best) best = sum;\n  }\n  return best;\n}",
    py: "def max_window_sum(numbers, k):\n    if k < 1 or k > len(numbers):\n        return None\n    total = 0\n    for i in range(k):\n        total += numbers[i]\n    best = total\n    for i in range(k, len(numbers)):\n        total += numbers[i] - numbers[i - k]\n        if total > best:\n            best = total\n    return best",
    stretch: "Compare with recomputing every window using a nested loop. Explain the O(n × k) to O(n) improvement.",
  },
];

const analysis = {
  maximum: 'Let n be the list length. best starts at the first value. On [3, 1, 5], it stays 3 for 3 and 1, then becomes 5. One full scan gives O(n) time. Only best and the current number are kept: O(1) extra space.',
  reverse: 'Let n be the text length. For code, indices 3, 2, 1, 0 collect e, d, o, c. The scan and final join each do linear work: O(n) time in total. The collected characters need O(n) auxiliary space, and the returned string needs O(n) output space. Joining once avoids repeatedly rebuilding a growing string.',
  search: 'Let n be the list length. For [4, 2, 4] and target 2, index 0 misses and index 1 matches. A first-item match takes O(1) best-case time. A last or missing match takes O(n) worst-case time. Only an index and current values are needed: O(1) extra space.',
  frequency: 'Let n be the text length. For aba, the counts become {a:1}, then {a:1,b:1}, then {a:2,b:1}. One scan gives O(n) time under the usual constant-time lookup assumption. Here the alphabet is fixed at 26 letters, so at most 26 counts are stored: O(1) space relative to n. With an unbounded alphabet, storage would grow with the number of distinct characters.',
  duplicates: 'Let n be the list length. For [2, 5, 2], store 2, store 5, then find 2 already present and stop. Expected worst-input scan cost is O(n), assuming expected O(1) set operations. The set may hold n distinct values: O(n) extra space. The early match improves some inputs, not the worst-case scan length.',
  anagram: 'Let n and m be the two text lengths. Count the first string, then consume those counts using the second: separate scans add to O(n + m) time under the usual lookup model. For ab and ba, counts a:1,b:1 fall to zero after b then a. Only 26 lowercase-letter counts can exist here, so extra space is O(1) relative to text length.',
  palindrome: 'Let n be the text length. For abba, compare indices (0,3), then (1,2), then stop. At most about n/2 comparisons still means O(n) worst-case time. Two indices need O(1) extra space. This version does not create a reversed string.',
  brackets: 'Let n be the text length. For ([]), push (, push [, pop [ on ], and pop ( on ). Each character is visited once, with amortized constant-time stack operations: O(n) time. A run of n opening brackets can keep n entries: O(n) extra space.',
  'binary-search': 'Let n be the sorted list length. For [1,3,5,7] and target 7: mid index 1 holds 3, so left becomes 2; mid 2 holds 5, so left becomes 3; mid 3 matches 7. Each miss discards roughly half of what remains: O(log n) worst-case time. Only left, right, and mid are kept: O(1) extra space. Sorting an unsorted input first has its own cost.',
  'two-sum': 'Let n be the list length. For [2,7,11] and target 9, first store 2 at index 0. At index 1, the needed partner is 2, already stored: return [0,1]. A full scan is O(n) expected time with expected O(1) dictionary/map operations; up to n earlier entries need O(n) auxiliary space. The returned pair has O(1) output size. A full pair-by-pair search instead takes O(n²) worst-case time but avoids the growing map.',
  'move-zeros': 'Let n be the list length. For [0,1,0,3], collect [1,3], count two zeros, then append them. The first scan has n turns; appending zeros adds at most n more. O(n + n) simplifies to O(n) time. The new returned list has O(n) output space; the counter and loop variables use O(1) auxiliary space excluding that output.',
  window: 'Let n be the list length and k the window width. For [2,1,5,1] and k=3, the first total is 8. Slide once: add the incoming 1 and subtract the outgoing 2, giving 7; best stays 8. Initialization visits k items; the slide visits n-k, so total time is O(n). Only totals and indices are stored: O(1) extra space. Recomputing every valid window costs O((n-k+1) × k), bounded by O(nk).',
};
const levels = {
  4: ["Arrays & strings", "Easy", "Scan, index, and handle empty inputs."],
  5: ["Maps & sets", "Building confidence", "Count values and remember what you have seen."],
  6: ["Problem-solving patterns", "Intermediate bridge", "Use two pointers, a stack, and binary search."],
  7: ["Interview practice", "Intermediate", "Combine patterns and explain time and space costs."],
};
export const problemSections = ["javascript", "python"].flatMap((language) => Object.entries(levels).map(([stageText, [name, level, description]]) => {
  const stage = Number(stageText);
  const python = language === "python";
  return {
    id: `path-${python ? "py" : "js"}-${stage}`, title: `${python ? "Python" : "JavaScript"} ${stage} · ${name}`,
    language, stage, level, description,
    exercises: problems.filter((problem) => problem.stage === stage).map((problem) => {
      const functionName = python ? problem.pyName : problem.jsName;
      const tests = [];
      for (let i = 0; i < problem.cases.length; i += 2) tests.push({ args: problem.cases[i], expected: problem.cases[i + 1] });
      const signature = python ? `def ${functionName}(${problem.params.join(", ")}):` : `function ${functionName}(${problem.params.join(", ")})`;
      return {
        id: `path-${python ? "py" : "js"}-${problem.slug}`, title: problem.title,
        prompt: problem.prompt.replace(/null \(JavaScript\) or None \(Python\)/g, python ? "None" : "null")
          .replace(/null\/None/g, python ? "None" : "null").replace(/true\/True/g, python ? "True" : "true")
          .replace(/false\/False/g, python ? "False" : "false").replace(/object \(JavaScript\) or dictionary \(Python\)/g, python ? "dictionary" : "object")
          .replace(/object\/dictionary/g, python ? "dictionary" : "object"),
        signature, functionName, tests, preserveInput: true,
        lesson: problem.lesson, hints: problem.hints, constraints: problem.constraints, analysis: analysis[problem.slug],
        snippet: python ? `${signature}\n    # Write your approach here.\n    pass\n` : `${signature} {\n  // Write your approach here.\n}\n`,
        answer: python ? problem.py : problem.js, stretch: problem.stretch,
      };
    }),
  };
}));
