export const tier3 = {
    title: "Tier 3: Mini Challenges",
    exercises: [
        // Day 1
        {
            prompt: "Reverse an array [1, 2, 3, 4] without using .reverse()",
            answer: `const nums = [1, 2, 3, 4];\nconst reversed = [];\nfor (let i = nums.length - 1; i >= 0; i--) {\n  reversed.push(nums[i]);\n}\nconsole.log(reversed);`,
            snippet: `const nums = [1, 2, 3, 4];`
        },
        {
            prompt: "Find the largest number in [10, 5, 8, 20]",
            answer: `const nums = [10, 5, 8, 20];\nlet max = nums[0];\nfor (let num of nums) {\n  if (num > max) max = num;\n}\nconsole.log(max);`,
            snippet: `const nums = [10, 5, 8, 20];`
        },

        // Day 2
        {
            prompt: "Reverse the string 'hello' without using .reverse()",
            answer: `const str = "hello";\nlet reversed = "";\nfor (let i = str.length - 1; i >= 0; i--) {\n  reversed += str[i];\n}\nconsole.log(reversed);`,
            snippet: `const str = "hello";`
        },
        {
            prompt: "Find the smallest number in [13, 4, 99, 2]",
            answer: `const nums = [13, 4, 99, 2];\nlet min = nums[0];\nfor (let num of nums) {\n  if (num < min) min = num;\n}\nconsole.log(min);`,
            snippet: `const nums = [13, 4, 99, 2];`
        },
        {
            prompt: "Count how many vowels are in the word 'education'",
            answer: `const word = "education";\nlet count = 0;\nconst vowels = "aeiou";\nfor (let char of word) {\n  if (vowels.includes(char)) count++;\n}\nconsole.log(count);`,
            snippet: `const word = "education";`
        },

        // Day 3
        {
            prompt: "Count how many times the letter 'a' appears in 'banana'",
            answer: `const word = "banana";\nlet count = 0;\nfor (let char of word) {\n  if (char === 'a') count++;\n}\nconsole.log(count);`,
            snippet: `const word = "banana";`
        },
        {
            prompt: "Find the index of the largest number in [3, 7, 2, 9]",
            answer: `const nums = [3, 7, 2, 9];\nlet maxIndex = 0;\nfor (let i = 1; i < nums.length; i++) {\n  if (nums[i] > nums[maxIndex]) maxIndex = i;\n}\nconsole.log(maxIndex);`,
            snippet: `const nums = [3, 7, 2, 9];`
        },

        // Day 4
        {
            prompt: "Capitalize the first letter of 'robot'",
            answer: `const word = "robot";\nconst capitalized = word[0].toUpperCase() + word.slice(1);\nconsole.log(capitalized);`,
            snippet: `const word = "robot";`
        },
        {
            prompt: "Get the initials from 'John Doe'",
            answer: `const name = "John Doe";\nconst initials = name.split(" ").map(word => word[0]).join("");\nconsole.log(initials);`,
            snippet: `const name = "John Doe";`
        },

        // Day 5
        {
            prompt: "Find the average of [4, 6, 8]",
            answer: `const nums = [4, 6, 8];\nlet sum = 0;\nfor (let num of nums) {\n  sum += num;\n}\nconst avg = sum / nums.length;\nconsole.log(avg);`,
            snippet: `const nums = [4, 6, 8];`
        },
        {
            prompt: "Return true if the string 'hello' contains the letter 'e'",
            answer: `const word = "hello";\nconsole.log(word.includes("e"));`,
            snippet: `const word = "hello";`
        },
        // Day 6
        {
            prompt: "Check if the word 'apple' contains the letter 'p'",
            answer: `const word = "apple";\nconsole.log(word.includes("p"));`,
            snippet: `const word = "apple";`
        },
        {
            prompt: "Capitalize all letters in 'robotics'",
            answer: `const word = "robotics";\nconsole.log(word.toUpperCase());`,
            snippet: `const word = "robotics";`
        },

        // Day 7
        {
            prompt: "Write a function that returns the middle element of an odd-length array",
            answer: `function middle(arr) {\n  return arr[Math.floor(arr.length / 2)];\n}\nconsole.log(middle([1, 3, 5]));`,
            snippet: `const arr = [1, 3, 5];`
        },
        {
            prompt: "Find and log the second item from a given array",
            answer: `const arr = ["x", "y", "z"];\nconsole.log(arr[1]);`,
            snippet: `const arr = ["x", "y", "z"];`
        },

        // Day 8
        {
            prompt: "Write a function that returns the number of digits in a number",
            answer: `function digitCount(n) {\n  return n.toString().length;\n}\nconsole.log(digitCount(4567));`,
            snippet: `const n = 4567;`
        },
        {
            prompt: "Count how many words are in 'hello world program'",
            answer: `const sentence = "hello world program";\nconst count = sentence.split(" ").length;\nconsole.log(count);`,
            snippet: `const sentence = "hello world program";`
        },

        // Day 9
        {
            prompt: "Reverse the string 'world' manually",
            answer: `const str = "world";\nlet reversed = "";\nfor (let i = str.length - 1; i >= 0; i--) {\n  reversed += str[i];\n}\nconsole.log(reversed);`,
            snippet: `const str = "world";`
        },
        {
            prompt: "Find the largest number in [2, 99, 45, 78]",
            answer: `const nums = [2, 99, 45, 78];\nlet max = nums[0];\nfor (let num of nums) {\n  if (num > max) max = num;\n}\nconsole.log(max);`,
            snippet: `const nums = [2, 99, 45, 78];`
        },
        {
            prompt: "Check if 'code' contains the letter 'd'",
            answer: `const word = "code";\nconsole.log(word.includes("d"));`,
            snippet: `const word = "code";`
        },
        {
            prompt: "Create a string of dashes matching length of 'hello'",
            answer: `const word = "hello";\nlet dashes = "";\nfor (let i = 0; i < word.length; i++) {\n  dashes += "-";\n}\nconsole.log(dashes);`,
            snippet: `const word = "hello";`
        },
        {
            prompt: "Count the number of lowercase letters in 'HelLo'",
            answer: `const word = "HelLo";\nlet count = 0;\nfor (let char of word) {\n  if (char === char.toLowerCase()) count++;\n}\nconsole.log(count);`,
            snippet: `const word = "HelLo";`
        },
        {
            prompt: "Log each digit of the number 1234 separately",
            answer: `const num = 1234;\nconst str = num.toString();\nfor (let char of str) {\n  console.log(char);\n}`,
            snippet: `const num = 1234;`
        },
        {
            prompt: "Capitalize every letter in 'quiz'",
            answer: `const word = "quiz";\nconsole.log(word.toUpperCase());`,
            snippet: `const word = "quiz";`
        },

        // Day 10
        {
            prompt: "Reverse the array ['a', 'b', 'c'] without using .reverse()",
            answer: `const arr = ['a', 'b', 'c'];\nconst reversed = [];\nfor (let i = arr.length - 1; i >= 0; i--) {\n  reversed.push(arr[i]);\n}\nconsole.log(reversed);`,
            snippet: `const arr = ['a', 'b', 'c'];`
        },
        {
            prompt: "Find the smallest number in [9, 4, 7, 1, 10]",
            answer: `const nums = [9, 4, 7, 1, 10];\nlet min = nums[0];\nfor (let num of nums) {\n  if (num < min) min = num;\n}\nconsole.log(min);`,
            snippet: `const nums = [9, 4, 7, 1, 10];`
        },
        {
            prompt: "Count how many consonants are in 'robotics'",
            answer: `const word = "robotics";\nlet count = 0;\nconst vowels = "aeiou";\nfor (let char of word.toLowerCase()) {\n  if (!vowels.includes(char) && /[a-z]/.test(char)) count++;\n}\nconsole.log(count);`,
            snippet: `const word = "robotics";`
        },
        {
            prompt: "Get the last two characters from 'sunshine'",
            answer: `const word = "sunshine";\nconsole.log(word.slice(-2));`,
            snippet: `const word = "sunshine";`
        },
        {
            prompt: "Count how many uppercase letters in 'HeLLoWorLD'",
            answer: `const word = "HeLLoWorLD";\nlet count = 0;\nfor (let char of word) {\n  if (char === char.toUpperCase() && /[A-Z]/.test(char)) count++;\n}\nconsole.log(count);`,
            snippet: `const word = "HeLLoWorLD";`
        },
        {
            prompt: "Check if 'developer' includes the substring 'lop'",
            answer: `const word = "developer";\nconsole.log(word.includes("lop"));`,
            snippet: `const word = "developer";`
        },
        {
            prompt: "Create a string of asterisks with the same length as 'rocket'",
            answer: `const word = "rocket";\nlet stars = "";\nfor (let i = 0; i < word.length; i++) {\n  stars += "*";\n}\nconsole.log(stars);`,
            snippet: `const word = "rocket";`
        },
        {
            prompt: "Capitalize the last letter of 'hello'",
            answer: `const word = "hello";\nconst result = word.slice(0, -1) + word[word.length - 1].toUpperCase();\nconsole.log(result);`,
            snippet: `const word = "hello";`
        },
        {
            prompt: "Log every second character in the string 'fantastic'",
            answer: `const word = "fantastic";\nfor (let i = 1; i < word.length; i += 2) {\n  console.log(word[i]);\n}`,
            snippet: `const word = "fantastic";`
        },
        {
            prompt: "Find the average length of ['dog', 'elephant', 'ant']",
            answer: `const words = ['dog', 'elephant', 'ant'];\nlet total = 0;\nfor (let word of words) {\n  total += word.length;\n}\nconsole.log(total / words.length);`,
            snippet: `const words = ['dog', 'elephant', 'ant'];`
        },

        // Day 11
        {
            prompt: "Reverse the string 'JavaScript' without using .reverse()",
            answer: `const word = "JavaScript";\nlet reversed = "";\nfor (let i = word.length - 1; i >= 0; i--) {\n  reversed += word[i];\n}\nconsole.log(reversed);`,
            snippet: `const word = "JavaScript";`
        },
        {
            prompt: "Count how many vowels are in 'Programming'",
            answer: `const word = "Programming".toLowerCase();\nlet count = 0;\nconst vowels = "aeiou";\nfor (let char of word) {\n  if (vowels.includes(char)) count++;\n}\nconsole.log(count);`,
            snippet: `const word = "Programming";`
        },
        {
            prompt: "Capitalize the first letter of each word in 'hello world program'",
            answer: `const sentence = "hello world program";\nconst result = sentence\n  .split(" ")\n  .map(w => w[0].toUpperCase() + w.slice(1))\n  .join(" ");\nconsole.log(result);`,
            snippet: `const sentence = "hello world program";`
        },
        {
            prompt: "Return true if the string 'level' is a palindrome",
            answer: `const word = "level";\nconst isPalindrome = word === word.split('').reverse().join('');\nconsole.log(isPalindrome);`,
            snippet: `const word = "level";`
        },
        {
            prompt: "Find the longest word in ['hi', 'code', 'developer', 'JS']",
            answer: `const words = ['hi', 'code', 'developer', 'JS'];\nlet longest = words[0];\nfor (let word of words) {\n  if (word.length > longest.length) longest = word;\n}\nconsole.log(longest);`,
            snippet: `const words = ['hi', 'code', 'developer', 'JS'];`
        },
        {
            prompt: "Log all characters in 'function' except vowels",
            answer: `const word = "function";\nconst vowels = "aeiou";\nfor (let char of word) {\n  if (!vowels.includes(char)) console.log(char);\n}`,
            snippet: `const word = "function";`
        },
        {
            prompt: "Check if 'robotics' has any repeating letters",
            answer: `const word = "robotics";\nconst seen = new Set();\nlet hasRepeats = false;\nfor (let char of word) {\n  if (seen.has(char)) {\n    hasRepeats = true;\n    break;\n  }\n  seen.add(char);\n}\nconsole.log(hasRepeats);`,
            snippet: `const word = "robotics";`
        },

        // Day 12
        {
            prompt: "Reverse the string 'JavaScript' manually",
            answer: `const str = "JavaScript";\nlet reversed = "";\nfor (let i = str.length - 1; i >= 0; i--) {\n  reversed += str[i];\n}\nconsole.log(reversed);`,
            snippet: `const str = "JavaScript";`
        },
        {
            prompt: "Find the second smallest number in [3, 1, 4, 2]",
            answer: `const nums = [3, 1, 4, 2];\nconst sorted = [...nums].sort((a, b) => a - b);\nconsole.log(sorted[1]);`,
            snippet: `const nums = [3, 1, 4, 2];`
        },
        {
            prompt: "Capitalize the first and last letter of 'developer'",
            answer: `const word = "developer";\nconst result = word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();\nconsole.log(result);`,
            snippet: `const word = "developer";`
        },
        {
            prompt: "Return true if 'JavaScript' contains the substring 'Script'",
            answer: `const word = "JavaScript";\nconsole.log(word.includes("Script"));`,
            snippet: `const word = "JavaScript";`
        },
        {
            prompt: "Create a string of numbers from 1 to 5 separated by dashes",
            answer: `let str = "";\nfor (let i = 1; i <= 5; i++) {\n  str += i;\n  if (i !== 5) str += "-";\n}\nconsole.log(str);`,
            snippet: `// none — all logic, no input to reuse`
        },
        {
            prompt: "Count how many times the number 2 appears in [1, 2, 2, 3, 2]",
            answer: `const nums = [1, 2, 2, 3, 2];\nlet count = 0;\nfor (let n of nums) {\n  if (n === 2) count++;\n}\nconsole.log(count);`,
            snippet: `const nums = [1, 2, 2, 3, 2];`
        },
        {
            prompt: "Get the middle character of the word 'robotics'",
            answer: `const word = "robotics";\nconst middle = word[Math.floor(word.length / 2)];\nconsole.log(middle);`,
            snippet: `const word = "robotics";`
        },

        // Day 13
        {
            prompt: "Reverse the word 'coding' without using .reverse()",
            answer: `const word = 'coding';\nlet reversed = '';\nfor (let i = word.length - 1; i >= 0; i--) {\n  reversed += word[i];\n}\nconsole.log(reversed);`,
            snippet: `const word = "coding";`
        },
        {
            prompt: "Find the second smallest number in [12, 5, 8, 3, 20]",
            answer: `const nums = [12, 5, 8, 3, 20];\nconst sorted = [...nums].sort((a, b) => a - b);\nconsole.log(sorted[1]);`,
            snippet: `const nums = [12, 5, 8, 3, 20];`
        },
        {
            prompt: "Capitalize the last letter of the word 'develop'",
            answer: `const word = 'develop';\nconst result = word.slice(0, -1) + word[word.length - 1].toUpperCase();\nconsole.log(result);`,
            snippet: `const word = "develop";`
        },
        {
            prompt: "Get the initials of 'Ada Lovelace'",
            answer: `const name = 'Ada Lovelace';\nconst initials = name.split(' ').map(n => n[0]).join('');\nconsole.log(initials);`,
            snippet: `const name = "Ada Lovelace";`
        },
        {
            prompt: "Return true if the word 'function' contains more than 2 vowels",
            answer: `const word = 'function';\nconst vowels = 'aeiou';\nlet count = 0;\nfor (let char of word) {\n  if (vowels.includes(char)) count++;\n}\nconsole.log(count > 2);`,
            snippet: `const word = "function";`
        },
        {
            prompt: "Count how many letters in 'JavaScript123' are alphabetic",
            answer: `const str = 'JavaScript123';\nlet count = 0;\nfor (let char of str) {\n  if (/[a-zA-Z]/.test(char)) count++;\n}\nconsole.log(count);`,
            snippet: `const str = "JavaScript123";`
        },
        {
            prompt: "Check if all characters in 'robot' are lowercase",
            answer: `const word = 'robot';\nconst allLower = word === word.toLowerCase();\nconsole.log(allLower);`,
            snippet: `const word = "robot";`
        },

        // Day 14
        {
            prompt: "Reverse the string 'javascript' without using .reverse()",
            answer: `const word = "javascript";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversed += word[i];
}
console.log(reversed);`,
            snippet: `const word = "javascript";`
        },
        {
            prompt: "Find the second smallest number in [5, 1, 8, 3]",
            answer: `const nums = [5, 1, 8, 3];
const sorted = [...nums].sort((a, b) => a - b);
console.log(sorted[1]);`,
            snippet: `const nums = [5, 1, 8, 3];`
        },
        {
            prompt: "Capitalize the first and last letter of 'example'",
            answer: `const word = "example";
const result = word[0].toUpperCase() + word.slice(1, -1) + word[word.length - 1].toUpperCase();
console.log(result);`,
            snippet: `const word = "example";`
        },
        {
            prompt: "Count how many digits are in the number 987654",
            answer: `const num = 987654;
console.log(num.toString().length);`,
            snippet: `const num = 987654;`
        },
        {
            prompt: "Log each vowel in the word 'education'",
            answer: `const word = "education";
const vowels = "aeiou";
for (let char of word) {
  if (vowels.includes(char)) console.log(char);
}`,
            snippet: `const word = "education";`
        },
        {
            prompt: "Create a new string by removing all vowels from 'developer'",
            answer: `const word = "developer";
const vowels = "aeiou";
let result = "";
for (let char of word) {
  if (!vowels.includes(char)) result += char;
}
console.log(result);`,
            snippet: `const word = "developer";`
        },
        {
            prompt: "Log every third character in 'ABCDEFGHIJK'",
            answer: `const str = "ABCDEFGHIJK";
for (let i = 2; i < str.length; i += 3) {
  console.log(str[i]);
}`,
            snippet: `const str = "ABCDEFGHIJK";`
        },

        // Day 15
        {
            prompt: "Reverse the string 'openai' without using .reverse()",
            answer: `const str = "openai";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);`,
            snippet: `const str = "openai";`
        },
        {
            prompt: "Find the maximum number in [22, 11, 44, 99]",
            answer: `const nums = [22, 11, 44, 99];
let max = nums[0];
for (let num of nums) {
  if (num > max) max = num;
}
console.log(max);`,
            snippet: `const nums = [22, 11, 44, 99];`
        },
        {
            prompt: "Count how many times the letter 'o' appears in 'robot overlord'",
            answer: `const str = "robot overlord";
let count = 0;
for (let char of str) {
  if (char === 'o') count++;
}
console.log(count);`,
            snippet: `const str = "robot overlord";`
        },
        {
            prompt: "Get the second-to-last item in ['apple', 'banana', 'cherry']",
            answer: `const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[fruits.length - 2]);`,
            snippet: `const fruits = ['apple', 'banana', 'cherry'];`
        },
        {
            prompt: "Capitalize the last letter in 'future'",
            answer: `const word = "future";
const result = word.slice(0, -1) + word[word.length - 1].toUpperCase();
console.log(result);`,
            snippet: `const word = "future";`
        },
        {
            prompt: "Check if all characters in 'aaa' are the same",
            answer: `const str = "aaa";
let allSame = true;
for (let i = 1; i < str.length; i++) {
  if (str[i] !== str[0]) {
    allSame = false;
    break;
  }
}
console.log(allSame);`,
            snippet: `const str = "aaa";`
        },
        {
            prompt: "Count the number of digits in the number 2025",
            answer: `const num = 2025;
console.log(num.toString().length);`,
            snippet: `const num = 2025;`
        }

    ]
}