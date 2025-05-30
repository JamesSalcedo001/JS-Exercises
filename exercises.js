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
      },
      // Day 4
      {
        prompt: "Log numbers from 1 to 10, skipping even numbers",
        answer: `for (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) continue;\n  console.log(i);\n}`
      },
      {
        prompt: "Create a function that adds two numbers and returns the result",
        answer: `function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 7));`
      },
      {
        prompt: "Declare an object for a book with title and author",
        answer: `const book = {\n  title: "1984",\n  author: "George Orwell"\n};\nconsole.log(book);`
      },
      {
        prompt: "Log both the title and author from the book object",
        answer: `const book = { title: "1984", author: "George Orwell" };\nconsole.log(book.title);\nconsole.log(book.author);`
      },
      // Day 5
      {
        prompt: "Create a variable called 'score' and set it to 0, then increment it by 5",
        answer: `let score = 0;\nscore += 5;\nconsole.log(score);`
      },
      {
        prompt: "Use a for loop to print 'Hello' 3 times",
        answer: `for (let i = 0; i < 3; i++) {\n  console.log("Hello");\n}`
      },
      {
        prompt: "Create a function that multiplies two numbers and returns the result",
        answer: `function multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(3, 4));`
      },
      {
        prompt: "Log the length of the string 'JavaScript'",
        answer: `const word = "JavaScript";\nconsole.log(word.length);`
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
      },
      // Day 4
      {
        prompt: "Capitalize the first letter of 'robot'",
        answer: `const word = "robot";\nconst capitalized = word[0].toUpperCase() + word.slice(1);\nconsole.log(capitalized);`
      },
      {
        prompt: "Get the initials from 'John Doe'",
        answer: `const name = "John Doe";\nconst initials = name.split(" ").map(word => word[0]).join("");\nconsole.log(initials);`
      },
      // Day 5
      {
        prompt: "Find the average of [4, 6, 8]",
        answer: `const nums = [4, 6, 8];\nlet sum = 0;\nfor (let num of nums) {\n  sum += num;\n}\nconst avg = sum / nums.length;\nconsole.log(avg);`
      },
      {
        prompt: "Return true if the string 'hello' contains the letter 'e'",
        answer: `const word = "hello";\nconsole.log(word.includes("e"));`
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
      },
      // Day 4
      {
        prompt: "Double the odd numbers from [1, 2, 3, 4, 5]",
        answer: `const nums = [1, 2, 3, 4, 5];\nconst doubledOdds = nums.filter(n => n % 2 !== 0).map(n => n * 2);\nconsole.log(doubledOdds);`
      },
      {
        prompt: "Chain to get squares of numbers > 5 from [2, 5, 8, 12]",
        answer: `const nums = [2, 5, 8, 12];\nconst result = nums.filter(n => n > 5).map(n => n ** 2);\nconsole.log(result);`
      },
      {
        prompt: "Convert [1, 2, 3, 4] to strings and add '!' to each",
        answer: `const nums = [1, 2, 3, 4];\nconst result = nums.map(n => n.toString() + "!");\nconsole.log(result);`
      },
      {
        prompt: "From ['Tom', 'Timothy', 'Tina'], get names longer than 3 letters and lowercase them",
        answer: `const names = ['Tom', 'Timothy', 'Tina'];\nconst result = names.filter(name => name.length > 3).map(name => name.toLowerCase());\nconsole.log(result);`
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
      },
      {
        prompt: "Write a function that returns the sum of digits of a number",
        answer: `function sumDigits(n) {\n  return n.toString().split('').reduce((sum, d) => sum + Number(d), 0);\n}\nconsole.log(sumDigits(123));`
      },
      {
        prompt: "Check if an array contains duplicates",
        answer: `function hasDuplicates(arr) {\n  const set = new Set(arr);\n  return set.size !== arr.length;\n}\nconsole.log(hasDuplicates([1, 2, 3, 2]));`
      },
      // Day 5
      {
        prompt: "Write a function to find the second largest number in [1, 3, 4, 2]",
        answer: `function secondLargest(arr) {\n  const sorted = [...arr].sort((a, b) => b - a);\n  return sorted[1];\n}\nconsole.log(secondLargest([1, 3, 4, 2]));`
      },
      {
        prompt: "Check if two strings are anagrams (e.g., 'listen' and 'silent')",
        answer: `function areAnagrams(a, b) {\n  return a.split('').sort().join('') === b.split('').sort().join('');\n}\nconsole.log(areAnagrams("listen", "silent"));\nconsole.log(areAnagrams("hello", "world"));`
      }


    ]
  }
];
