export const tier2 = {
    title: "Tier 2: Patterns",
    exercises: [
        // Day 1
        {
            prompt: "Sum numbers in an array [2, 4, 6, 8]",
            answer: `const nums = [2, 4, 6, 8];\nlet sum = 0;\nfor (let num of nums) {\n  sum += num;\n}\nconsole.log(sum);`
        },
        {
            prompt: "Make a new array of only even numbers from [1, 2, 3, 4, 5, 6]",
            answer: `const nums = [1, 2, 3, 4, 5, 6];\nconst evens = [];\nfor (let num of nums) {\n  if (num % 2 === 0) evens.push(num);\n}\nconsole.log(evens);`
        },
        // Day 2
        {
            prompt: "Count how many numbers in [1, 5, 8, 3, 2] are greater than 4",
            answer: `const nums = [1, 5, 8, 3, 2];\nlet count = 0;\nfor (let num of nums) {\n  if (num > 4) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Create an array of names and log only names that start with 'A'",
            answer: `const names = ["Alice", "Bob", "Alex", "Charlie"];\nfor (let name of names) {\n  if (name.startsWith("A")) {\n    console.log(name);\n  }\n}`
        },
        {
            prompt: "Log all even numbers between 1 and 20",
            answer: `for (let i = 1; i <= 20; i++) {\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}`
        },
        {
            prompt: "Print 'Fizz' if divisible by 3, else print the number (1-10)",
            answer: `for (let i = 1; i <= 10; i++) {\n  if (i % 3 === 0) {\n    console.log("Fizz");\n  } else {\n    console.log(i);\n  }\n}`
        },
        // Day 3
        {
            prompt: "Log numbers from an array until you hit a number greater than 5",
            answer: `const nums = [1, 3, 5, 7, 2];\nfor (let num of nums) {\n  if (num > 5) break;\n  console.log(num);\n}`
        },
        {
            prompt: "Push numbers divisible by 3 into a new array",
            answer: `const nums = [3, 6, 8, 10, 12];\nconst divisibleBy3 = [];\nfor (let num of nums) {\n  if (num % 3 === 0) divisibleBy3.push(num);\n}\nconsole.log(divisibleBy3);`
        },
        // Day 4
        {
            prompt: "Find the average of numbers in [10, 20, 30]",
            answer: `const nums = [10, 20, 30];\nconst total = nums.reduce((sum, n) => sum + n, 0);\nconsole.log(total / nums.length);`
        },
        {
            prompt: "Filter numbers in [4, 7, 12, 19] that are less than 10",
            answer: `const nums = [4, 7, 12, 19];\nconst filtered = nums.filter(n => n < 10);\nconsole.log(filtered);`
        },
        // Day 5
        {
            prompt: "Double each number in [1, 2, 3]",
            answer: `const nums = [1, 2, 3];\nfor (let i = 0; i < nums.length; i++) {\n  nums[i] *= 2;\n}\nconsole.log(nums);`
        },
        {
            prompt: "Filter numbers greater than 10 from [4, 11, 15, 7]",
            answer: `const nums = [4, 11, 15, 7];\nconst result = [];\nfor (let num of nums) {\n  if (num > 10) result.push(num);\n}\nconsole.log(result);`
        },
        // Day 6
        {
            prompt: "Filter odd numbers from [2, 5, 6, 9, 12]",
            answer: `const nums = [2, 5, 6, 9, 12];\nconst odds = nums.filter(n => n % 2 !== 0);\nconsole.log(odds);`
        },
        {
            prompt: "Count the number of true values in [true, false, true, true]",
            answer: `const values = [true, false, true, true];\nlet count = 0;\nfor (let v of values) {\n  if (v === true) count++;\n}\nconsole.log(count);`
        },
        // Day 7
        {
            prompt: "Count how many numbers are divisible by 4 in [4, 8, 15, 16, 23, 42]",
            answer: `const nums = [4, 8, 15, 16, 23, 42];\nlet count = 0;\nfor (let n of nums) {\n  if (n % 4 === 0) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "From an array of booleans, return only the true values",
            answer: `const flags = [true, false, false, true, true];\nconst trues = flags.filter(f => f);\nconsole.log(trues);`
        },
        // Day 8
        {
            prompt: "Log all strings in ['a', 3, 'b', 5, 'c']",
            answer: `const mixed = ['a', 3, 'b', 5, 'c'];\nfor (let item of mixed) {\n  if (typeof item === 'string') console.log(item);\n}`
        },
        {
            prompt: "Filter numbers in [3, 6, 9, 12] that are divisible by 6",
            answer: `const nums = [3, 6, 9, 12];\nconst result = nums.filter(n => n % 6 === 0);\nconsole.log(result);`
        },
        // Day 9
        {
            prompt: "Reverse the string 'world' manually",
            answer: `const str = "world";\nlet reversed = "";\nfor (let i = str.length - 1; i >= 0; i--) {\n  reversed += str[i];\n}\nconsole.log(reversed);`
        },
        {
            prompt: "Find the largest number in [2, 99, 45, 78]",
            answer: `const nums = [2, 99, 45, 78];\nlet max = nums[0];\nfor (let num of nums) {\n  if (num > max) max = num;\n}\nconsole.log(max);`
        },
        {
            prompt: "Check if 'code' contains the letter 'd'",
            answer: `const word = "code";\nconsole.log(word.includes("d"));`
        },
        {
            prompt: "Create a string of dashes matching length of 'hello'",
            answer: `const word = "hello";\nlet dashes = "";\nfor (let i = 0; i < word.length; i++) {\n  dashes += "-";\n}\nconsole.log(dashes);`
        },
        {
            prompt: "Count the number of lowercase letters in 'HelLo'",
            answer: `const word = "HelLo";\nlet count = 0;\nfor (let char of word) {\n  if (char === char.toLowerCase()) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Log each digit of the number 1234 separately",
            answer: `const num = 1234;\nconst str = num.toString();\nfor (let char of str) {\n  console.log(char);\n}`
        },
        {
            prompt: "Capitalize every letter in 'quiz'",
            answer: `const word = "quiz";\nconsole.log(word.toUpperCase());`
        },
        // Day 10
        {
            prompt: "Sum all numbers in [10, 20, 30, 40]",
            answer: `const nums = [10, 20, 30, 40];\nlet sum = 0;\nfor (let num of nums) {\n  sum += num;\n}\nconsole.log(sum);`
        },
        {
            prompt: "Filter numbers divisible by 5 from [3, 5, 10, 14, 25]",
            answer: `const nums = [3, 5, 10, 14, 25];\nconst result = nums.filter(n => n % 5 === 0);\nconsole.log(result);`
        },
        {
            prompt: "Log all strings longer than 4 characters from ['hat', 'banana', 'car', 'elephant']",
            answer: `const words = ['hat', 'banana', 'car', 'elephant'];\nfor (let word of words) {\n  if (word.length > 4) console.log(word);\n}`
        },
        {
            prompt: "Count how many numbers in [5, 15, 25, 35] are greater than 10",
            answer: `const nums = [5, 15, 25, 35];\nlet count = 0;\nfor (let num of nums) {\n  if (num > 10) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Print 'Yes' for even numbers and 'No' for odd in [1, 2, 3, 4]",
            answer: `const nums = [1, 2, 3, 4];\nfor (let n of nums) {\n  console.log(n % 2 === 0 ? "Yes" : "No");\n}`
        },
        {
            prompt: "Create a new array with double the values from [1, 4, 6]",
            answer: `const nums = [1, 4, 6];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled);`
        },
        {
            prompt: "Log all names in ['Alice', 'Bob', 'Charlie'] that start with 'C'",
            answer: `const names = ["Alice", "Bob", "Charlie"];\nfor (let name of names) {\n  if (name.startsWith("C")) console.log(name);\n}`
        },
        {
            prompt: "Count how many values are greater than 100 in [50, 120, 80, 200]",
            answer: `const nums = [50, 120, 80, 200];\nlet count = 0;\nfor (let num of nums) {\n  if (num > 100) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Create an array of booleans indicating if each number is even in [2, 5, 8]",
            answer: `const nums = [2, 5, 8];\nconst bools = nums.map(n => n % 2 === 0);\nconsole.log(bools);`
        },
        {
            prompt: "Filter all numbers in [3, 7, 10, 12, 14] that are less than 10",
            answer: `const nums = [3, 7, 10, 12, 14];\nconst result = nums.filter(n => n < 10);\nconsole.log(result);`
        },
        // Day 11 
        {
            prompt: "Count how many times 'e' appears in 'elephant'",
            answer: `const word = "elephant";\nlet count = 0;\nfor (let char of word) {\n  if (char === 'e') count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Log each word in the sentence 'Code is fun'",
            answer: `const sentence = "Code is fun";\nconst words = sentence.split(" ");\nfor (let word of words) {\n  console.log(word);\n}`
        },
        {
            prompt: "Check if the word 'JavaScript' contains the letter 'J'",
            answer: `const word = "JavaScript";\nconsole.log(word.includes("J"));`
        },
        {
            prompt: "Create an array of word lengths from ['hi', 'code', 'world']",
            answer: `const words = ['hi', 'code', 'world'];\nconst lengths = words.map(w => w.length);\nconsole.log(lengths);`
        },
        {
            prompt: "Filter words with length > 3 from ['do', 'learn', 'run', 'code']",
            answer: `const words = ['do', 'learn', 'run', 'code'];\nconst result = words.filter(w => w.length > 3);\nconsole.log(result);`
        },
        {
            prompt: "Log only capital letters from 'HeLLoWorLD'",
            answer: `const word = "HeLLoWorLD";\nfor (let char of word) {\n  if (char === char.toUpperCase() && /[A-Z]/.test(char)) {\n    console.log(char);\n  }\n}`
        },
        {
            prompt: "Count how many words in ['hi', 'yes', 'no', 'okay'] have 3 letters",
            answer: `const words = ['hi', 'yes', 'no', 'okay'];\nlet count = 0;\nfor (let word of words) {\n  if (word.length === 3) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Replace all spaces in 'I love JS' with dashes",
            answer: `const sentence = "I love JS";\nconst result = sentence.replace(/ /g, "-");\nconsole.log(result);`
        },
        {
            prompt: "Log all characters in 'banana' except the letter 'a'",
            answer: `const word = "banana";\nfor (let char of word) {\n  if (char !== 'a') console.log(char);\n}`
        },
        {
            prompt: "Check if the string 'hello world' contains the word 'world'",
            answer: `const sentence = "hello world";\nconsole.log(sentence.includes("world"));`
        },
        // Day 12
        {
            prompt: "Count how many numbers are divisible by 5 in [5, 10, 14, 20, 22]",
            answer: `const nums = [5, 10, 14, 20, 22];\nlet count = 0;\nfor (let num of nums) {\n  if (num % 5 === 0) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Filter out negative numbers from [-3, 4, -1, 5, 0]",
            answer: `const nums = [-3, 4, -1, 5, 0];\nconst positives = nums.filter(n => n >= 0);\nconsole.log(positives);`
        },
        {
            prompt: "Create a new array with only strings from [1, 'a', 3, 'b', true]",
            answer: `const mixed = [1, 'a', 3, 'b', true];\nconst strings = mixed.filter(item => typeof item === 'string');\nconsole.log(strings);`
        },
        {
            prompt: "Print numbers from 1 to 20 that are divisible by both 2 and 3",
            answer: `for (let i = 1; i <= 20; i++) {\n  if (i % 2 === 0 && i % 3 === 0) {\n    console.log(i);\n  }\n}`
        },
        {
            prompt: "Print 'Even' or 'Odd' for each number in [4, 7, 10, 13]",
            answer: `const nums = [4, 7, 10, 13];\nfor (let n of nums) {\n  console.log(n % 2 === 0 ? "Even" : "Odd");\n}`
        },
        {
            prompt: "Create a new array with triple values from [2, 4, 6]",
            answer: `const nums = [2, 4, 6];\nconst tripled = nums.map(n => n * 3);\nconsole.log(tripled);`
        },
        {
            prompt: "Push only numbers > 50 into a new array from [20, 55, 80, 30]",
            answer: `const nums = [20, 55, 80, 30];\nconst result = [];\nfor (let n of nums) {\n  if (n > 50) result.push(n);\n}\nconsole.log(result);`
        },
        {
            prompt: "Count how many items in ['car', 12, 'bus', true, 'bike'] are strings",
            answer: `const items = ['car', 12, 'bus', true, 'bike'];\nlet count = 0;\nfor (let item of items) {\n  if (typeof item === 'string') count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Log each number squared from [1, 3, 5, 7]",
            answer: `const nums = [1, 3, 5, 7];\nfor (let n of nums) {\n  console.log(n * n);\n}`
        },
        {
            prompt: "Filter words with length exactly 4 from ['blue', 'red', 'gray', 'black']",
            answer: `const words = ['blue', 'red', 'gray', 'black'];\nconst result = words.filter(word => word.length === 4);\nconsole.log(result);`
        },
        // Day 13
        {
            prompt: "Count how many words are longer than 3 letters in ['hi', 'code', 'sun', 'robot']",
            answer: `const words = ['hi', 'code', 'sun', 'robot'];\nlet count = 0;\nfor (let word of words) {\n  if (word.length > 3) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Push all positive numbers from [-2, 3, -1, 5] into a new array",
            answer: `const nums = [-2, 3, -1, 5];\nconst positives = [];\nfor (let num of nums) {\n  if (num > 0) positives.push(num);\n}\nconsole.log(positives);`
        },
        {
            prompt: "Log all odd numbers between 10 and 20",
            answer: `for (let i = 10; i <= 20; i++) {\n  if (i % 2 !== 0) console.log(i);\n}`
        },
        {
            prompt: "Check if the array [1, 2, 3] contains the number 2",
            answer: `const arr = [1, 2, 3];\nconsole.log(arr.includes(2));`
        },
        {
            prompt: "Push strings containing the letter 'o' from ['cat', 'dog', 'lion']",
            answer: `const animals = ['cat', 'dog', 'lion'];\nconst result = [];\nfor (let word of animals) {\n  if (word.includes('o')) result.push(word);\n}\nconsole.log(result);`
        },
        {
            prompt: "Log the index of each item in ['a', 'b', 'c']",
            answer: `const letters = ['a', 'b', 'c'];\nfor (let i = 0; i < letters.length; i++) {\n  console.log(i);\n}`
        },
        {
            prompt: "Count how many numbers are less than 10 in [15, 3, 7, 20]",
            answer: `const nums = [15, 3, 7, 20];\nlet count = 0;\nfor (let n of nums) {\n  if (n < 10) count++;\n}\nconsole.log(count);`
        },
        {
            prompt: "Log all words from ['robot', 'ai', 'tech'] that start with 't'",
            answer: `const words = ['robot', 'ai', 'tech'];\nfor (let word of words) {\n  if (word.startsWith('t')) console.log(word);\n}`
        },
        {
            prompt: "Push only numbers divisible by 4 from [2, 4, 8, 10]",
            answer: `const nums = [2, 4, 8, 10];\nconst result = [];\nfor (let num of nums) {\n  if (num % 4 === 0) result.push(num);\n}\nconsole.log(result);`
        },
        {
            prompt: "Count the number of vowels in 'javascript'",
            answer: `const word = 'javascript';\nconst vowels = 'aeiou';\nlet count = 0;\nfor (let char of word) {\n  if (vowels.includes(char)) count++;\n}\nconsole.log(count);`
        },
        // Day 14
        {
            prompt: "Sum all numbers in [3, 6, 9, 12]",
            answer: `const nums = [3, 6, 9, 12];
let sum = 0;
for (let num of nums) {
  sum += num;
}
console.log(sum);`
        },
        {
            prompt: "Create a new array of names starting with 'J': ['Jim', 'Amy', 'Jack', 'Sam']",
            answer: `const names = ['Jim', 'Amy', 'Jack', 'Sam'];
const result = names.filter(n => n.startsWith('J'));
console.log(result);`
        },
        {
            prompt: "Count how many numbers are odd in [2, 5, 7, 8, 11]",
            answer: `const nums = [2, 5, 7, 8, 11];
let count = 0;
for (let num of nums) {
  if (num % 2 !== 0) count++;
}
console.log(count);`
        },
        {
            prompt: "Filter out all false values from [true, false, true, false, true]",
            answer: `const bools = [true, false, true, false, true];
const result = bools.filter(b => b);
console.log(result);`
        },
        {
            prompt: "Create an array of string lengths: ['hi', 'hello', 'ok']",
            answer: `const words = ['hi', 'hello', 'ok'];
const lengths = words.map(w => w.length);
console.log(lengths);`
        },
        {
            prompt: "Print numbers from 10 to 20 that are divisible by 3",
            answer: `for (let i = 10; i <= 20; i++) {
  if (i % 3 === 0) console.log(i);
}`
        },
        {
            prompt: "Create an array of numbers squared: [1, 2, 3, 4]",
            answer: `const nums = [1, 2, 3, 4];
const squares = nums.map(n => n * n);
console.log(squares);`
        },
        {
            prompt: "Count how many strings are longer than 3 characters in ['hi', 'tree', 'oak', 'maple']",
            answer: `const words = ['hi', 'tree', 'oak', 'maple'];
let count = 0;
for (let word of words) {
  if (word.length > 3) count++;
}
console.log(count);`
        },
        {
            prompt: "Log all numbers in [5, 10, 15, 20] that are divisible by 5",
            answer: `const nums = [5, 10, 15, 20];
for (let num of nums) {
  if (num % 5 === 0) console.log(num);
}`
        },
        {
            prompt: "Push only the negative numbers from [-2, 3, -5, 0, 8]",
            answer: `const nums = [-2, 3, -5, 0, 8];
const result = [];
for (let num of nums) {
  if (num < 0) result.push(num);
}
console.log(result);`
        },
        // Day 15
        {
            prompt: "Log only numbers greater than 10 from [5, 12, 8, 21]",
            answer: `const nums = [5, 12, 8, 21];
for (let num of nums) {
  if (num > 10) console.log(num);
}`
        },
        {
            prompt: "Count how many words have more than 4 letters in ['hi', 'hello', 'world', 'yes']",
            answer: `const words = ['hi', 'hello', 'world', 'yes'];
let count = 0;
for (let word of words) {
  if (word.length > 4) count++;
}
console.log(count);`
        },
        {
            prompt: "Filter numbers divisible by 4 from [4, 7, 8, 12]",
            answer: `const nums = [4, 7, 8, 12];
const result = nums.filter(n => n % 4 === 0);
console.log(result);`
        },
        {
            prompt: "Create a new array with the first letter of each word in ['apple', 'banana', 'cherry']",
            answer: `const words = ['apple', 'banana', 'cherry'];
const initials = words.map(word => word[0]);
console.log(initials);`
        },
        {
            prompt: "Print 'Even' or 'Odd' for numbers 1 to 5",
            answer: `for (let i = 1; i <= 5; i++) {
  console.log(i % 2 === 0 ? "Even" : "Odd");
}`
        },
        {
            prompt: "Push all true values from [true, false, true, false] into a new array",
            answer: `const bools = [true, false, true, false];
const result = [];
for (let b of bools) {
  if (b === true) result.push(b);
}
console.log(result);`
        },
        {
            prompt: "Log all lowercase letters in the string 'HeLLo'",
            answer: `const word = "HeLLo";
for (let char of word) {
  if (char === char.toLowerCase() && /[a-z]/.test(char)) {
    console.log(char);
  }
}`
        },
        {
            prompt: "Push all odd numbers from [3, 6, 9, 10] to a new array",
            answer: `const nums = [3, 6, 9, 10];
const odds = [];
for (let n of nums) {
  if (n % 2 !== 0) odds.push(n);
}
console.log(odds);`
        },
        {
            prompt: "Count how many vowels are in ['apple', 'orange', 'grape']",
            answer: `const words = ['apple', 'orange', 'grape'];
let count = 0;
const vowels = "aeiou";
for (let word of words) {
  for (let char of word) {
    if (vowels.includes(char)) count++;
  }
}
console.log(count);`
        },
        {
            prompt: "Log numbers from [1, 2, 3, 4, 5] skipping the number 3",
            answer: `const nums = [1, 2, 3, 4, 5];
for (let n of nums) {
  if (n === 3) continue;
  console.log(n);
}`
        }

    ]
}