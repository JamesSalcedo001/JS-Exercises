export const sections = [
  {
    title: "Tier 1: Foundations",
    exercises: [
      // Day 1
      {
        prompt: "Print numbers from 1 to 10 using a for loop",
        answer: `for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`
      },
      {
        prompt: "Print even numbers from 0 to 20",
        answer: `for (let i = 0; i <= 20; i += 2) {\n  console.log(i);\n}`
      },
      {
        prompt: "Declare an array of 5 fruit names",
        answer: `const fruits = ["apple", "banana", "cherry", "date", "fig"];\nconsole.log(fruits);`
      },
      {
        prompt: "Print each fruit using a for loop",
        answer: `const fruits = ["apple", "banana", "cherry", "date", "fig"];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}`
      },
      // Day 2
      {
        prompt: "Print numbers from 10 down to 1 using a for loop",
        answer: `for (let i = 10; i >= 1; i--) {\n  console.log(i);\n}`
      },
      {
        prompt: "Print whether each number from 1 to 5 is odd or even",
        answer: `for (let i = 1; i <= 5; i++) {\n  if (i % 2 === 0) {\n    console.log(i + " is even");\n  } else {\n    console.log(i + " is odd");\n  }\n}`
      },
      {
        prompt: "Create an array of 4 animals and log its length",
        answer: `const animals = ["dog", "cat", "fox", "whale"];\nconsole.log(animals.length);`
      },
      {
        prompt: "Log each character in the word 'code'",
        answer: `const word = "code";\nfor (let i = 0; i < word.length; i++) {\n  console.log(word[i]);\n}`
      },
      // Day 3
      {
        prompt: "Use a while loop to print numbers 1 to 5",
        answer: `let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}`
      },
      {
        prompt: "Create a function that returns the square of a number",
        answer: `function square(n) {\n  return n * n;\n}\nconsole.log(square(4));`
      },
      {
        prompt: "Declare an object for a person with name and age",
        answer: `const person = {\n  name: "Sam",\n  age: 30\n};\nconsole.log(person);`
      },
      {
        prompt: "Access the name property from a person object",
        answer: `const person = { name: "Sam", age: 30 };\nconsole.log(person.name);`
      }
    ]
  },
  {
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
      }
    ]
  },
  {
    title: "Tier 3: Mini Challenges",
    exercises: [
      // Day 1
      {
        prompt: "Reverse an array [1, 2, 3, 4] without using .reverse()",
        answer: `const nums = [1, 2, 3, 4];\nconst reversed = [];\nfor (let i = nums.length - 1; i >= 0; i--) {\n  reversed.push(nums[i]);\n}\nconsole.log(reversed);`
      },
      {
        prompt: "Find the largest number in [10, 5, 8, 20]",
        answer: `const nums = [10, 5, 8, 20];\nlet max = nums[0];\nfor (let num of nums) {\n  if (num > max) max = num;\n}\nconsole.log(max);`
      },
      // Day 2
      {
        prompt: "Reverse the string 'hello' without using .reverse()",
        answer: `const str = "hello";\nlet reversed = "";\nfor (let i = str.length - 1; i >= 0; i--) {\n  reversed += str[i];\n}\nconsole.log(reversed);`
      },
      {
        prompt: "Find the smallest number in [13, 4, 99, 2]",
        answer: `const nums = [13, 4, 99, 2];\nlet min = nums[0];\nfor (let num of nums) {\n  if (num < min) min = num;\n}\nconsole.log(min);`
      },
      {
        prompt: "Count how many vowels are in the word 'education'",
        answer: `const word = "education";\nlet count = 0;\nconst vowels = "aeiou";\nfor (let char of word) {\n  if (vowels.includes(char)) count++;\n}\nconsole.log(count);`
      },
      // Day 3
      {
        prompt: "Count how many times the letter 'a' appears in 'banana'",
        answer: `const word = "banana";\nlet count = 0;\nfor (let char of word) {\n  if (char === 'a') count++;\n}\nconsole.log(count);`
      },
      {
        prompt: "Find the index of the largest number in [3, 7, 2, 9]",
        answer: `const nums = [3, 7, 2, 9];\nlet maxIndex = 0;\nfor (let i = 1; i < nums.length; i++) {\n  if (nums[i] > nums[maxIndex]) maxIndex = i;\n}\nconsole.log(maxIndex);`
      }
    ]
  },
  {
    title: "Tier 4: Chaining & Composition",
    exercises: [
      // Day 1
      {
        prompt: "Square all even numbers from [1, 2, 3, 4, 5, 6]",
        answer: `const numbers = [1, 2, 3, 4, 5, 6];\nconst evenSquares = numbers.filter(n => n % 2 === 0).map(n => n ** 2);\nconsole.log(evenSquares);`
      },
      {
        prompt: "Sort names by length: ['Amy', 'Jonathan', 'Li', 'Sebastian']",
        answer: `const names = ['Amy', 'Jonathan', 'Li', 'Sebastian'];\nnames.sort((a, b) => a.length - b.length);\nconsole.log(names);`
      },
      // Day 2
      {
        prompt: "Filter out numbers > 10 and double them: [5, 12, 8, 20]",
        answer: `const nums = [5, 12, 8, 20];\nconst result = nums.filter(n => n > 10).map(n => n * 2);\nconsole.log(result);`
      },
      {
        prompt: "Create array of words with > 3 letters: ['hi', 'code', 'dog', 'JavaScript']",
        answer: `const words = ["hi", "code", "dog", "JavaScript"];\nconst result = words.filter(w => w.length > 3);\nconsole.log(result);`
      },
      // Day 3
      {
        prompt: "Get first letters of each word: ['apple', 'banana', 'cherry']",
        answer: `const words = ['apple', 'banana', 'cherry'];\nconst initials = words.map(w => w[0]);\nconsole.log(initials);`
      },
      {
        prompt: "Filter and uppercase words longer than 3 letters",
        answer: `const words = ["hi", "code", "sun", "developer"];\nconst result = words.filter(w => w.length > 3).map(w => w.toUpperCase());\nconsole.log(result);`
      }
    ]
  },
  {
    title: "Tier 5: Problem Solving",
    exercises: [
      // Day 1
      {
        prompt: "Check if a string is a palindrome",
        answer: `function isPalindrome(str) {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n}\nconsole.log(isPalindrome("racecar"));\nconsole.log(isPalindrome("hello"));`
      },
      {
        prompt: "Merge two sorted arrays [1, 3, 5] and [2, 4, 6]",
        answer: `function mergeSorted(a, b) {\n  return [...a, ...b].sort((x, y) => x - y);\n}\nconsole.log(mergeSorted([1, 3, 5], [2, 4, 6]));`
      },
      // Day 2
      {
        prompt: "Write a function to return factorial of a number (e.g. 5 → 120)",
        answer: `function factorial(n) {\n  let result = 1;\n  for (let i = 2; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}\nconsole.log(factorial(5));`
      },
      {
        prompt: "Check if all elements in [2, 4, 6, 8] are even",
        answer: `const nums = [2, 4, 6, 8];\nconst allEven = nums.every(n => n % 2 === 0);\nconsole.log(allEven);`
      },
      // Day 3
      {
        prompt: "Write a function that reverses any string",
        answer: `function reverseString(str) {\n  return str.split('').reverse().join('');\n}\nconsole.log(reverseString("hello"));`
      },
      {
        prompt: "Check if a number is prime",
        answer: `function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\nconsole.log(isPrime(7));\nconsole.log(isPrime(10));`
      }
    ]
  }
];
