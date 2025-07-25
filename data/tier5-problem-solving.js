export const tier5 = {
    title: "Tier 5: Problem Solving",
    exercises: [
        // Day 1
        {
            prompt: "Check if a string is a palindrome",
            answer: `function isPalindrome(str) {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n}\nconsole.log(isPalindrome("racecar"));\nconsole.log(isPalindrome("hello"));`,
            snippet: `const str = "racecar";`
        },
        {
            prompt: "Merge two sorted arrays [1, 3, 5] and [2, 4, 6]",
            answer: `function mergeSorted(a, b) {\n  return [...a, ...b].sort((x, y) => x - y);\n}\nconsole.log(mergeSorted([1, 3, 5], [2, 4, 6]));`,
            snippet: `const a = [1, 3, 5], b = [2, 4, 6];`
        },

        // Day 2
        {
            prompt: "Write a function to return factorial of a number (e.g. 5 → 120)",
            answer: `function factorial(n) {\n  let result = 1;\n  for (let i = 2; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}\nconsole.log(factorial(5));`,
            snippet: `const n = 5;`
        },
        {
            prompt: "Check if all elements in [2, 4, 6, 8] are even",
            answer: `const nums = [2, 4, 6, 8];\nconst allEven = nums.every(n => n % 2 === 0);\nconsole.log(allEven);`,
            snippet: `const nums = [2, 4, 6, 8];`
        },

        // Day 3
        {
            prompt: "Write a function that reverses any string",
            answer: `function reverseString(str) {\n  return str.split('').reverse().join('');\n}\nconsole.log(reverseString("hello"));`,
            snippet: `const str = "hello";`
        },
        {
            prompt: "Check if a number is prime",
            answer: `function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\nconsole.log(isPrime(7));\nconsole.log(isPrime(10));`,
            snippet: `const n = 7;`
        },
        {
            prompt: "Write a function that returns the sum of digits of a number",
            answer: `function sumDigits(n) {\n  return n.toString().split('').reduce((sum, d) => sum + Number(d), 0);\n}\nconsole.log(sumDigits(123));`,
            snippet: `const n = 123;`
        },
        {
            prompt: "Check if an array contains duplicates",
            answer: `function hasDuplicates(arr) {\n  const set = new Set(arr);\n  return set.size !== arr.length;\n}\nconsole.log(hasDuplicates([1, 2, 3, 2]));`,
            snippet: `const arr = [1, 2, 3, 2];`
        },

        // Day 5
        {
            prompt: "Write a function to find the second largest number in [1, 3, 4, 2]",
            answer: `function secondLargest(arr) {\n  const sorted = [...arr].sort((a, b) => b - a);\n  return sorted[1];\n}\nconsole.log(secondLargest([1, 3, 4, 2]));`,
            snippet: `const arr = [1, 3, 4, 2];`
        },
        {
            prompt: "Check if two strings are anagrams (e.g., 'listen' and 'silent')",
            answer: `function areAnagrams(a, b) {\n  return a.split('').sort().join('') === b.split('').sort().join('');\n}\nconsole.log(areAnagrams("listen", "silent"));\nconsole.log(areAnagrams("hello", "world"));`,
            snippet: `const a = "listen", b = "silent";`
        },

        // Day 6
        {
            prompt: "Write a function to find the factorial of a number recursively",
            answer: `function factorial(n) {\n  if (n === 0 || n === 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));`,
            snippet: `const n = 5;`
        },
        {
            prompt: "Write a function that returns the longest word in a sentence",
            answer: `function longestWord(sentence) {\n  const words = sentence.split(" ");\n  let longest = "";\n  for (let word of words) {\n    if (word.length > longest.length) longest = word;\n  }\n  return longest;\n}\nconsole.log(longestWord("JavaScript is awesome"));`,
            snippet: `const sentence = "JavaScript is awesome";`
        },

        // Day 7
        {
            prompt: "Write a function that checks if a string has all unique characters",
            answer: `function allUnique(str) {\n  const set = new Set(str);\n  return set.size === str.length;\n}\nconsole.log(allUnique("robot"));\nconsole.log(allUnique("hello"));`,
            snippet: `const str = "robot";`
        },
        {
            prompt: "Write a function that returns the sum of even numbers in an array",
            answer: `function sumEven(arr) {\n  return arr.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);\n}\nconsole.log(sumEven([1, 2, 3, 4, 5]));`,
            snippet: `const arr = [1, 2, 3, 4, 5];`
        },

        // Day 8
        {
            prompt: "Write a function that counts how many times a letter appears in a string",
            answer: `function countLetter(str, letter) {\n  let count = 0;\n  for (let char of str) {\n    if (char === letter) count++;\n  }\n  return count;\n}\nconsole.log(countLetter("banana", "a"));`,
            snippet: `const str = "banana", letter = "a";`
        },
        {
            prompt: "Write a function to flatten a nested array one level deep",
            answer: `function flattenOnce(arr) {\n  return arr.reduce((flat, curr) => flat.concat(curr), []);\n}\nconsole.log(flattenOnce([[1, 2], [3, 4], [5]]));`,
            snippet: `const arr = [[1, 2], [3, 4], [5]];`
        },

        // Day 9
        {
            prompt: "Write a function to count digits in a number",
            answer: `function countDigits(n) {\n  return n.toString().length;\n}\nconsole.log(countDigits(12345));`,
            snippet: `const n = 12345;`
        },
        {
            prompt: "Check if two words have the same letters (ignore order)",
            answer: `function sameLetters(a, b) {\n  return a.split('').sort().join('') === b.split('').sort().join('');\n}\nconsole.log(sameLetters("abc", "cab"));\nconsole.log(sameLetters("hi", "bye"));`,
            snippet: `const a = "abc", b = "cab";`
        },
        {
            prompt: "Find the sum of all numbers in [1, 2, 3, 4, 5] using reduce",
            answer: `const nums = [1, 2, 3, 4, 5];\nconst sum = nums.reduce((acc, val) => acc + val, 0);\nconsole.log(sum);`,
            snippet: `const nums = [1, 2, 3, 4, 5];`
        },

        // Day 10
        {
            prompt: "Write a function that returns the factorial of a number using recursion",
            answer: `function factorial(n) {\n  if (n === 0 || n === 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));`,
            snippet: `const n = 5;`
        },
        {
            prompt: "Write a function to reverse the words in a sentence",
            answer: `function reverseWords(sentence) {\n  return sentence.split(" ").reverse().join(" ");\n}\nconsole.log(reverseWords("hello world program"));`,
            snippet: `const sentence = "hello world program";`
        },
        {
            prompt: "Check if two strings are anagrams of each other",
            answer: `function areAnagrams(a, b) {\n  return a.split('').sort().join('') === b.split('').sort().join('');\n}\nconsole.log(areAnagrams("listen", "silent"));\nconsole.log(areAnagrams("hello", "world"));`,
            snippet: `const a = "listen", b = "silent";`
        },
        {
            prompt: "Write a function that returns the count of vowels in a string",
            answer: `function countVowels(str) {\n  const vowels = 'aeiouAEIOU';\n  let count = 0;\n  for (let char of str) {\n    if (vowels.includes(char)) count++;\n  }\n  return count;\n}\nconsole.log(countVowels("education"));`,
            snippet: `const str = "education";`
        },
        {
            prompt: "Flatten a nested array completely (deep flatten)",
            answer: `function flattenDeep(arr) {\n  return arr.flat(Infinity);\n}\nconsole.log(flattenDeep([1, [2, [3, [4]]]]));`,
            snippet: `const arr = [1, [2, [3, [4]]]];`
        },
        {
            prompt: "Write a function that returns the first non-repeating character in a string",
            answer: `function firstUniqueChar(str) {\n  for (let char of str) {\n    if (str.indexOf(char) === str.lastIndexOf(char)) return char;\n  }\n  return null;\n}\nconsole.log(firstUniqueChar("swiss"));`,
            snippet: `const str = "swiss";`
        },
        {
            prompt: "Write a function that returns true if a number is a power of 2",
            answer: `function isPowerOfTwo(n) {\n  return n > 0 && (n & (n - 1)) === 0;\n}\nconsole.log(isPowerOfTwo(8));\nconsole.log(isPowerOfTwo(10));`,
            snippet: `const n = 8;`
        },
        {
            prompt: "Return the intersection of two arrays",
            answer: `function intersection(a, b) {\n  return a.filter(x => b.includes(x));\n}\nconsole.log(intersection([1, 2, 3], [2, 3, 4]));`,
            snippet: `const a = [1, 2, 3], b = [2, 3, 4];`
        },
        {
            prompt: "Find the longest word in a sentence",
            answer: `function longestWord(sentence) {\n  return sentence.split(" ").reduce((a, b) => a.length > b.length ? a : b);\n}\nconsole.log(longestWord("JavaScript is incredibly fun"));`,
            snippet: `const sentence = "JavaScript is incredibly fun";`
        },
        {
            prompt: "Write a function that sums all even numbers in a nested array",
            answer: `function sumEvenNested(arr) {\n  let sum = 0;\n  for (let item of arr.flat(Infinity)) {\n    if (typeof item === 'number' && item % 2 === 0) sum += item;\n  }\n  return sum;\n}\nconsole.log(sumEvenNested([1, [2, 3, [4, 5, [6]]]]));`,
            snippet: `const arr = [1, [2, 3, [4, 5, [6]]]];`
        },

        // Day 11
        {
            prompt: "Write a function that checks if two strings are rotations of each other",
            answer: `function areRotations(a, b) {\n  return a.length === b.length && (a + a).includes(b);\n}\nconsole.log(areRotations("abcd", "cdab"));\nconsole.log(areRotations("abcd", "acbd"));`,
            snippet: `const a = "abcd", b = "cdab";`
        },
        {
            prompt: "Write a function to count how many times each letter appears in 'robotics'",
            answer: `function letterFrequency(str) {\n  const freq = {};\n  for (let char of str) {\n    freq[char] = (freq[char] || 0) + 1;\n  }\n  return freq;\n}\nconsole.log(letterFrequency("robotics"));`,
            snippet: `const str = "robotics";`
        },
        {
            prompt: "Write a function that removes duplicate values from an array",
            answer: `function removeDuplicates(arr) {\n  return [...new Set(arr)];\n}\nconsole.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));`,
            snippet: `const arr = [1, 2, 2, 3, 4, 4, 5];`
        },

        // Day 12
        {
            prompt: "Write a function to check if all elements in an array are unique",
            answer: `function allUnique(arr) {\n  return new Set(arr).size === arr.length;\n}\nconsole.log(allUnique([1, 2, 3]));\nconsole.log(allUnique([1, 2, 2]));`,
            snippet: `const arr = [1, 2, 3];`
        },
        {
            prompt: "Write a function that returns the most frequent element in an array",
            answer: `function mostFrequent(arr) {\n  const count = {};\n  let maxItem = arr[0];\n  for (let item of arr) {\n    count[item] = (count[item] || 0) + 1;\n    if (count[item] > count[maxItem]) maxItem = item;\n  }\n  return maxItem;\n}\nconsole.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]));`,
            snippet: `const arr = [1, 2, 2, 3, 3, 3, 4];`
        },
        {
            prompt: "Write a function that returns the first repeated character in a string",
            answer: `function firstRepeatedChar(str) {\n  const seen = new Set();\n  for (let char of str) {\n    if (seen.has(char)) return char;\n    seen.add(char);\n  }\n  return null;\n}\nconsole.log(firstRepeatedChar("acbbcd"));\nconsole.log(firstRepeatedChar("abcdef"));`,
            snippet: `const str = "acbbcd";`
        },

        // Day 13
        {
            prompt: "Write a function that returns the number of words in a sentence",
            answer: `function wordCount(sentence) {\n  return sentence.trim().split(/\\s+/).length;\n}\nconsole.log(wordCount("Hello world from JavaScript"));`,
            snippet: `const sentence = "Hello world from JavaScript";`
        },
        {
            prompt: "Write a function that checks if a number is a perfect square",
            answer: `function isPerfectSquare(n) {\n  return Number.isInteger(Math.sqrt(n));\n}\nconsole.log(isPerfectSquare(16));\nconsole.log(isPerfectSquare(18));`,
            snippet: `const n = 16;`
        },
        {
            prompt: "Return the count of each letter in a string as an object",
            answer: `function letterFrequency(str) {\n  const freq = {};\n  for (let char of str) {\n    if (char.match(/[a-z]/i)) {\n      freq[char] = (freq[char] || 0) + 1;\n    }\n  }\n  return freq;\n}\nconsole.log(letterFrequency("banana"));`,
            snippet: `const str = "banana";`
        },

        // Day 14
        {
            prompt: "Write a function to count how many times each character appears in a string",
            answer: `function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}
console.log(charFrequency("hello world"));`,
            snippet: `const str = "hello world";`
        },
        {
            prompt: "Write a function to get the unique values from an array",
            answer: `function getUnique(arr) {
  return [...new Set(arr)];
}
console.log(getUnique([1, 2, 2, 3, 4, 4]));`,
            snippet: `const arr = [1, 2, 2, 3, 4, 4];`
        },
        {
            prompt: "Write a function that finds the mode (most frequent value) in an array",
            answer: `function findMode(arr) {
  const count = {};
  let max = 0, mode = null;
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > max) {
      max = count[num];
      mode = num;
    }
  }
  return mode;
}
console.log(findMode([1, 2, 2, 3, 3, 3, 4]));`,
            snippet: `const arr = [1, 2, 2, 3, 3, 3, 4];`
        },

        // Day 15
        {
            prompt: "Write a function that returns the most frequent number in an array",
            answer: `function mostFrequent(arr) {
  const counts = {};
  let maxCount = 0;
  let mostCommon = null;
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mostCommon = num;
    }
  }
  return mostCommon;
}
console.log(mostFrequent([1, 3, 3, 7, 2, 3, 1]));`,
            snippet: `const arr = [1, 3, 3, 7, 2, 3, 1];`
        },
        {
            prompt: "Write a function that removes duplicates from an array",
            answer: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));`,
            snippet: `const arr = [1, 2, 2, 3, 4, 4, 5];`
        },
        {
            prompt: "Write a function that checks if two arrays are equal (same elements, same order)",
            answer: `function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2], [2, 1]));`,
            snippet: `const a = [1, 2, 3], b = [1, 2, 3];`
        }

    ]
}