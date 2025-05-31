// export const sections = [
//   {
//     title: "Tier 1: Foundations",
//     exercises: [
//       // Day 1
//       {
//         prompt: "Print numbers from 1 to 10 using a for loop",
//         answer: `for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`
//       },
//       {
//         prompt: "Print even numbers from 0 to 20",
//         answer: `for (let i = 0; i <= 20; i += 2) {\n  console.log(i);\n}`
//       },
//       {
//         prompt: "Declare an array of 5 fruit names",
//         answer: `const fruits = ["apple", "banana", "cherry", "date", "fig"];\nconsole.log(fruits);`
//       },
//       {
//         prompt: "Print each fruit using a for loop",
//         answer: `const fruits = ["apple", "banana", "cherry", "date", "fig"];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}`
//       },
//       // Day 2
//       {
//         prompt: "Print numbers from 10 down to 1 using a for loop",
//         answer: `for (let i = 10; i >= 1; i--) {\n  console.log(i);\n}`
//       },
//       {
//         prompt: "Print whether each number from 1 to 5 is odd or even",
//         answer: `for (let i = 1; i <= 5; i++) {\n  if (i % 2 === 0) {\n    console.log(i + " is even");\n  } else {\n    console.log(i + " is odd");\n  }\n}`
//       },
//       {
//         prompt: "Create an array of 4 animals and log its length",
//         answer: `const animals = ["dog", "cat", "fox", "whale"];\nconsole.log(animals.length);`
//       },
//       {
//         prompt: "Log each character in the word 'code'",
//         answer: `const word = "code";\nfor (let i = 0; i < word.length; i++) {\n  console.log(word[i]);\n}`
//       },
//       // Day 3
//       {
//         prompt: "Use a while loop to print numbers 1 to 5",
//         answer: `let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}`
//       },
//       {
//         prompt: "Create a function that returns the square of a number",
//         answer: `function square(n) {\n  return n * n;\n}\nconsole.log(square(4));`
//       },
//       {
//         prompt: "Declare an object for a person with name and age",
//         answer: `const person = {\n  name: "Sam",\n  age: 30\n};\nconsole.log(person);`
//       },
//       {
//         prompt: "Access the name property from a person object",
//         answer: `const person = { name: "Sam", age: 30 };\nconsole.log(person.name);`
//       },
//       // Day 4
//       {
//         prompt: "Log numbers from 1 to 10, skipping even numbers",
//         answer: `for (let i = 1; i <= 10; i++) {\n  if (i % 2 === 0) continue;\n  console.log(i);\n}`
//       },
//       {
//         prompt: "Create a function that adds two numbers and returns the result",
//         answer: `function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 7));`
//       },
//       {
//         prompt: "Declare an object for a book with title and author",
//         answer: `const book = {\n  title: "1984",\n  author: "George Orwell"\n};\nconsole.log(book);`
//       },
//       {
//         prompt: "Log both the title and author from the book object",
//         answer: `const book = { title: "1984", author: "George Orwell" };\nconsole.log(book.title);\nconsole.log(book.author);`
//       },
//       // Day 5
//       {
//         prompt: "Create a variable called 'score' and set it to 0, then increment it by 5",
//         answer: `let score = 0;\nscore += 5;\nconsole.log(score);`
//       },
//       {
//         prompt: "Use a for loop to print 'Hello' 3 times",
//         answer: `for (let i = 0; i < 3; i++) {\n  console.log("Hello");\n}`
//       },
//       {
//         prompt: "Create a function that multiplies two numbers and returns the result",
//         answer: `function multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(3, 4));`
//       },
//       {
//         prompt: "Log the length of the string 'JavaScript'",
//         answer: `const word = "JavaScript";\nconsole.log(word.length);`
//       },
//       // Day 6
//       {
//         prompt: "Create a function that returns the cube of a number",
//         answer: `function cube(n) {\n  return n * n * n;\n}\nconsole.log(cube(3));`
//       },
//       {
//         prompt: "Declare an array of numbers and log the last element",
//         answer: `const nums = [5, 10, 15];\nconsole.log(nums[nums.length - 1]);`
//       },
//       {
//         prompt: "Use a while loop to print numbers from 5 down to 1",
//         answer: `let i = 5;\nwhile (i >= 1) {\n  console.log(i);\n  i--;\n}`
//       },
//       {
//         prompt: "Log the type of 'true', 42, and 'hello'",
//         answer: `console.log(typeof true);\nconsole.log(typeof 42);\nconsole.log(typeof "hello");`
//       },
//       // Day 7
//       {
//         prompt: "Use a for loop to print each letter in the string 'robot'",
//         answer: `const word = "robot";\nfor (let i = 0; i < word.length; i++) {\n  console.log(word[i]);\n}`
//       },
//       {
//         prompt: "Declare a number variable and check if it’s greater than 100",
//         answer: `const num = 120;\nconsole.log(num > 100);`
//       },
//       {
//         prompt: "Write a function that returns whether a number is positive",
//         answer: `function isPositive(n) {\n  return n > 0;\n}\nconsole.log(isPositive(5));\nconsole.log(isPositive(-3));`
//       },
//       {
//         prompt: "Log the first and last items in an array",
//         answer: `const items = ["a", "b", "c", "d"];\nconsole.log(items[0]);\nconsole.log(items[items.length - 1]);`
//       },
//       // Day 8
//       {
//         prompt: "Declare a string and log its first and last characters",
//         answer: `const word = "JavaScript";\nconsole.log(word[0]);\nconsole.log(word[word.length - 1]);`
//       },
//       {
//         prompt: "Use a do...while loop to print numbers 1 to 3",
//         answer: `let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 3);`
//       },
//       {
//         prompt: "Create a function that returns the absolute value of a number",
//         answer: `function absolute(n) {\n  return n < 0 ? -n : n;\n}\nconsole.log(absolute(-7));`
//       },
//       {
//         prompt: "Create an array of 3 colors and log its second item",
//         answer: `const colors = ["red", "green", "blue"];\nconsole.log(colors[1]);`
//       }




//     ]
//   },
//   {
//     title: "Tier 2: Patterns",
//     exercises: [
//       // Day 1
//       {
//         prompt: "Sum numbers in an array [2, 4, 6, 8]",
//         answer: `const nums = [2, 4, 6, 8];\nlet sum = 0;\nfor (let num of nums) {\n  sum += num;\n}\nconsole.log(sum);`
//       },
//       {
//         prompt: "Make a new array of only even numbers from [1, 2, 3, 4, 5, 6]",
//         answer: `const nums = [1, 2, 3, 4, 5, 6];\nconst evens = [];\nfor (let num of nums) {\n  if (num % 2 === 0) evens.push(num);\n}\nconsole.log(evens);`
//       },
//       // Day 2
//       {
//         prompt: "Count how many numbers in [1, 5, 8, 3, 2] are greater than 4",
//         answer: `const nums = [1, 5, 8, 3, 2];\nlet count = 0;\nfor (let num of nums) {\n  if (num > 4) count++;\n}\nconsole.log(count);`
//       },
//       {
//         prompt: "Create an array of names and log only names that start with 'A'",
//         answer: `const names = ["Alice", "Bob", "Alex", "Charlie"];\nfor (let name of names) {\n  if (name.startsWith("A")) {\n    console.log(name);\n  }\n}`
//       },
//       {
//         prompt: "Log all even numbers between 1 and 20",
//         answer: `for (let i = 1; i <= 20; i++) {\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}`
//       },
//       {
//         prompt: "Print 'Fizz' if divisible by 3, else print the number (1-10)",
//         answer: `for (let i = 1; i <= 10; i++) {\n  if (i % 3 === 0) {\n    console.log("Fizz");\n  } else {\n    console.log(i);\n  }\n}`
//       },
//       // Day 3
//       {
//         prompt: "Log numbers from an array until you hit a number greater than 5",
//         answer: `const nums = [1, 3, 5, 7, 2];\nfor (let num of nums) {\n  if (num > 5) break;\n  console.log(num);\n}`
//       },
//       {
//         prompt: "Push numbers divisible by 3 into a new array",
//         answer: `const nums = [3, 6, 8, 10, 12];\nconst divisibleBy3 = [];\nfor (let num of nums) {\n  if (num % 3 === 0) divisibleBy3.push(num);\n}\nconsole.log(divisibleBy3);`
//       },
//       // Day 4
//       {
//         prompt: "Find the average of numbers in [10, 20, 30]",
//         answer: `const nums = [10, 20, 30];\nconst total = nums.reduce((sum, n) => sum + n, 0);\nconsole.log(total / nums.length);`
//       },
//       {
//         prompt: "Filter numbers in [4, 7, 12, 19] that are less than 10",
//         answer: `const nums = [4, 7, 12, 19];\nconst filtered = nums.filter(n => n < 10);\nconsole.log(filtered);`
//       },
//       // Day 5
//       {
//         prompt: "Double each number in [1, 2, 3]",
//         answer: `const nums = [1, 2, 3];\nfor (let i = 0; i < nums.length; i++) {\n  nums[i] *= 2;\n}\nconsole.log(nums);`
//       },
//       {
//         prompt: "Filter numbers greater than 10 from [4, 11, 15, 7]",
//         answer: `const nums = [4, 11, 15, 7];\nconst result = [];\nfor (let num of nums) {\n  if (num > 10) result.push(num);\n}\nconsole.log(result);`
//       },
//       // Day 6
//       {
//         prompt: "Filter odd numbers from [2, 5, 6, 9, 12]",
//         answer: `const nums = [2, 5, 6, 9, 12];\nconst odds = nums.filter(n => n % 2 !== 0);\nconsole.log(odds);`
//       },
//       {
//         prompt: "Count the number of true values in [true, false, true, true]",
//         answer: `const values = [true, false, true, true];\nlet count = 0;\nfor (let v of values) {\n  if (v === true) count++;\n}\nconsole.log(count);`
//       },
//       // Day 7
//       {
//         prompt: "Count how many numbers are divisible by 4 in [4, 8, 15, 16, 23, 42]",
//         answer: `const nums = [4, 8, 15, 16, 23, 42];\nlet count = 0;\nfor (let n of nums) {\n  if (n % 4 === 0) count++;\n}\nconsole.log(count);`
//       },
//       {
//         prompt: "From an array of booleans, return only the true values",
//         answer: `const flags = [true, false, false, true, true];\nconst trues = flags.filter(f => f);\nconsole.log(trues);`
//       },
//       // Day 8
//       {
//         prompt: "Log all strings in ['a', 3, 'b', 5, 'c']",
//         answer: `const mixed = ['a', 3, 'b', 5, 'c'];\nfor (let item of mixed) {\n  if (typeof item === 'string') console.log(item);\n}`
//       },
//       {
//         prompt: "Filter numbers in [3, 6, 9, 12] that are divisible by 6",
//         answer: `const nums = [3, 6, 9, 12];\nconst result = nums.filter(n => n % 6 === 0);\nconsole.log(result);`
//       }





//     ]
//   },
//   {
//     title: "Tier 3: Mini Challenges",
//     exercises: [
//       // Day 1
//       {
//         prompt: "Reverse an array [1, 2, 3, 4] without using .reverse()",
//         answer: `const nums = [1, 2, 3, 4];\nconst reversed = [];\nfor (let i = nums.length - 1; i >= 0; i--) {\n  reversed.push(nums[i]);\n}\nconsole.log(reversed);`
//       },
//       {
//         prompt: "Find the largest number in [10, 5, 8, 20]",
//         answer: `const nums = [10, 5, 8, 20];\nlet max = nums[0];\nfor (let num of nums) {\n  if (num > max) max = num;\n}\nconsole.log(max);`
//       },
//       // Day 2
//       {
//         prompt: "Reverse the string 'hello' without using .reverse()",
//         answer: `const str = "hello";\nlet reversed = "";\nfor (let i = str.length - 1; i >= 0; i--) {\n  reversed += str[i];\n}\nconsole.log(reversed);`
//       },
//       {
//         prompt: "Find the smallest number in [13, 4, 99, 2]",
//         answer: `const nums = [13, 4, 99, 2];\nlet min = nums[0];\nfor (let num of nums) {\n  if (num < min) min = num;\n}\nconsole.log(min);`
//       },
//       {
//         prompt: "Count how many vowels are in the word 'education'",
//         answer: `const word = "education";\nlet count = 0;\nconst vowels = "aeiou";\nfor (let char of word) {\n  if (vowels.includes(char)) count++;\n}\nconsole.log(count);`
//       },
//       // Day 3
//       {
//         prompt: "Count how many times the letter 'a' appears in 'banana'",
//         answer: `const word = "banana";\nlet count = 0;\nfor (let char of word) {\n  if (char === 'a') count++;\n}\nconsole.log(count);`
//       },
//       {
//         prompt: "Find the index of the largest number in [3, 7, 2, 9]",
//         answer: `const nums = [3, 7, 2, 9];\nlet maxIndex = 0;\nfor (let i = 1; i < nums.length; i++) {\n  if (nums[i] > nums[maxIndex]) maxIndex = i;\n}\nconsole.log(maxIndex);`
//       },
//       // Day 4
//       {
//         prompt: "Capitalize the first letter of 'robot'",
//         answer: `const word = "robot";\nconst capitalized = word[0].toUpperCase() + word.slice(1);\nconsole.log(capitalized);`
//       },
//       {
//         prompt: "Get the initials from 'John Doe'",
//         answer: `const name = "John Doe";\nconst initials = name.split(" ").map(word => word[0]).join("");\nconsole.log(initials);`
//       },
//       // Day 5
//       {
//         prompt: "Find the average of [4, 6, 8]",
//         answer: `const nums = [4, 6, 8];\nlet sum = 0;\nfor (let num of nums) {\n  sum += num;\n}\nconst avg = sum / nums.length;\nconsole.log(avg);`
//       },
//       {
//         prompt: "Return true if the string 'hello' contains the letter 'e'",
//         answer: `const word = "hello";\nconsole.log(word.includes("e"));`
//       },
//       // Day 6
//       {
//         prompt: "Check if the word 'apple' contains the letter 'p'",
//         answer: `const word = "apple";\nconsole.log(word.includes("p"));`
//       },
//       {
//         prompt: "Capitalize all letters in 'robotics'",
//         answer: `const word = "robotics";\nconsole.log(word.toUpperCase());`
//       },
//       // Day 7
//       {
//         prompt: "Write a function that returns the middle element of an odd-length array",
//         answer: `function middle(arr) {\n  return arr[Math.floor(arr.length / 2)];\n}\nconsole.log(middle([1, 3, 5]));`
//       },
//       {
//         prompt: "Find and log the second item from a given array",
//         answer: `const arr = ["x", "y", "z"];\nconsole.log(arr[1]);`
//       },
//       // Day 8
//       {
//         prompt: "Write a function that returns the number of digits in a number",
//         answer: `function digitCount(n) {\n  return n.toString().length;\n}\nconsole.log(digitCount(4567));`
//       },
//       {
//         prompt: "Count how many words are in 'hello world program'",
//         answer: `const sentence = "hello world program";\nconst count = sentence.split(" ").length;\nconsole.log(count);`
//       }





//     ]
//   },
//   {
//     title: "Tier 4: Chaining & Composition",
//     exercises: [
//       // Day 1
//       {
//         prompt: "Square all even numbers from [1, 2, 3, 4, 5, 6]",
//         answer: `const numbers = [1, 2, 3, 4, 5, 6];\nconst evenSquares = numbers.filter(n => n % 2 === 0).map(n => n ** 2);\nconsole.log(evenSquares);`
//       },
//       {
//         prompt: "Sort names by length: ['Amy', 'Jonathan', 'Li', 'Sebastian']",
//         answer: `const names = ['Amy', 'Jonathan', 'Li', 'Sebastian'];\nnames.sort((a, b) => a.length - b.length);\nconsole.log(names);`
//       },
//       // Day 2
//       {
//         prompt: "Filter out numbers > 10 and double them: [5, 12, 8, 20]",
//         answer: `const nums = [5, 12, 8, 20];\nconst result = nums.filter(n => n > 10).map(n => n * 2);\nconsole.log(result);`
//       },
//       {
//         prompt: "Create array of words with > 3 letters: ['hi', 'code', 'dog', 'JavaScript']",
//         answer: `const words = ["hi", "code", "dog", "JavaScript"];\nconst result = words.filter(w => w.length > 3);\nconsole.log(result);`
//       },
//       // Day 3
//       {
//         prompt: "Get first letters of each word: ['apple', 'banana', 'cherry']",
//         answer: `const words = ['apple', 'banana', 'cherry'];\nconst initials = words.map(w => w[0]);\nconsole.log(initials);`
//       },
//       {
//         prompt: "Filter and uppercase words longer than 3 letters",
//         answer: `const words = ["hi", "code", "sun", "developer"];\nconst result = words.filter(w => w.length > 3).map(w => w.toUpperCase());\nconsole.log(result);`
//       },
//       // Day 4
//       {
//         prompt: "Double the odd numbers from [1, 2, 3, 4, 5]",
//         answer: `const nums = [1, 2, 3, 4, 5];\nconst doubledOdds = nums.filter(n => n % 2 !== 0).map(n => n * 2);\nconsole.log(doubledOdds);`
//       },
//       {
//         prompt: "Chain to get squares of numbers > 5 from [2, 5, 8, 12]",
//         answer: `const nums = [2, 5, 8, 12];\nconst result = nums.filter(n => n > 5).map(n => n ** 2);\nconsole.log(result);`
//       },
//       {
//         prompt: "Convert [1, 2, 3, 4] to strings and add '!' to each",
//         answer: `const nums = [1, 2, 3, 4];\nconst result = nums.map(n => n.toString() + "!");\nconsole.log(result);`
//       },
//       {
//         prompt: "From ['Tom', 'Timothy', 'Tina'], get names longer than 3 letters and lowercase them",
//         answer: `const names = ['Tom', 'Timothy', 'Tina'];\nconst result = names.filter(name => name.length > 3).map(name => name.toLowerCase());\nconsole.log(result);`
//       },
//       // Day 6
//       {
//         prompt: "Double and stringify numbers in [1, 2, 3]",
//         answer: `const nums = [1, 2, 3];\nconst result = nums.map(n => (n * 2).toString());\nconsole.log(result);`
//       },
//       {
//         prompt: "Chain filter and map: Get square roots of even numbers from [4, 9, 16, 25]",
//         answer: `const nums = [4, 9, 16, 25];\nconst result = nums.filter(n => n % 2 === 0).map(n => Math.sqrt(n));\nconsole.log(result);`
//       },
//       // Day 7
//       {
//         prompt: "Chain: Double even numbers and convert to string in [1, 2, 3, 4]",
//         answer: `const nums = [1, 2, 3, 4];\nconst result = nums.filter(n => n % 2 === 0).map(n => (n * 2).toString());\nconsole.log(result);`
//       },
//       {
//         prompt: "From ['a', 'ab', 'abc'], keep only length > 1 and uppercase",
//         answer: `const strings = ['a', 'ab', 'abc'];\nconst result = strings.filter(s => s.length > 1).map(s => s.toUpperCase());\nconsole.log(result);`
//       },
//       // Day 8
//       {
//         prompt: "From [2, 4, 5, 6], filter even and triple them",
//         answer: `const nums = [2, 4, 5, 6];\nconst result = nums.filter(n => n % 2 === 0).map(n => n * 3);\nconsole.log(result);`
//       },
//       {
//         prompt: "Convert ['dog', 'cat', 'bird'] to uppercase and reverse each word",
//         answer: `const animals = ["dog", "cat", "bird"];\nconst result = animals.map(a => a.toUpperCase().split('').reverse().join(''));\nconsole.log(result);`
//       }





//     ]
//   },
//   {
//     title: "Tier 5: Problem Solving",
//     exercises: [
//       // Day 1
//       {
//         prompt: "Check if a string is a palindrome",
//         answer: `function isPalindrome(str) {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n}\nconsole.log(isPalindrome("racecar"));\nconsole.log(isPalindrome("hello"));`
//       },
//       {
//         prompt: "Merge two sorted arrays [1, 3, 5] and [2, 4, 6]",
//         answer: `function mergeSorted(a, b) {\n  return [...a, ...b].sort((x, y) => x - y);\n}\nconsole.log(mergeSorted([1, 3, 5], [2, 4, 6]));`
//       },
//       // Day 2
//       {
//         prompt: "Write a function to return factorial of a number (e.g. 5 → 120)",
//         answer: `function factorial(n) {\n  let result = 1;\n  for (let i = 2; i <= n; i++) {\n    result *= i;\n  }\n  return result;\n}\nconsole.log(factorial(5));`
//       },
//       {
//         prompt: "Check if all elements in [2, 4, 6, 8] are even",
//         answer: `const nums = [2, 4, 6, 8];\nconst allEven = nums.every(n => n % 2 === 0);\nconsole.log(allEven);`
//       },
//       // Day 3
//       {
//         prompt: "Write a function that reverses any string",
//         answer: `function reverseString(str) {\n  return str.split('').reverse().join('');\n}\nconsole.log(reverseString("hello"));`
//       },
//       {
//         prompt: "Check if a number is prime",
//         answer: `function isPrime(n) {\n  if (n < 2) return false;\n  for (let i = 2; i <= Math.sqrt(n); i++) {\n    if (n % i === 0) return false;\n  }\n  return true;\n}\nconsole.log(isPrime(7));\nconsole.log(isPrime(10));`
//       },
//       {
//         prompt: "Write a function that returns the sum of digits of a number",
//         answer: `function sumDigits(n) {\n  return n.toString().split('').reduce((sum, d) => sum + Number(d), 0);\n}\nconsole.log(sumDigits(123));`
//       },
//       {
//         prompt: "Check if an array contains duplicates",
//         answer: `function hasDuplicates(arr) {\n  const set = new Set(arr);\n  return set.size !== arr.length;\n}\nconsole.log(hasDuplicates([1, 2, 3, 2]));`
//       },
//       // Day 5
//       {
//         prompt: "Write a function to find the second largest number in [1, 3, 4, 2]",
//         answer: `function secondLargest(arr) {\n  const sorted = [...arr].sort((a, b) => b - a);\n  return sorted[1];\n}\nconsole.log(secondLargest([1, 3, 4, 2]));`
//       },
//       {
//         prompt: "Check if two strings are anagrams (e.g., 'listen' and 'silent')",
//         answer: `function areAnagrams(a, b) {\n  return a.split('').sort().join('') === b.split('').sort().join('');\n}\nconsole.log(areAnagrams("listen", "silent"));\nconsole.log(areAnagrams("hello", "world"));`
//       },
//       // Day 6
//       {
//         prompt: "Write a function to find the factorial of a number recursively",
//         answer: `function factorial(n) {\n  if (n === 0 || n === 1) return 1;\n  return n * factorial(n - 1);\n}\nconsole.log(factorial(5));`
//       },
//       {
//         prompt: "Write a function that returns the longest word in a sentence",
//         answer: `function longestWord(sentence) {\n  const words = sentence.split(" ");\n  let longest = "";\n  for (let word of words) {\n    if (word.length > longest.length) longest = word;\n  }\n  return longest;\n}\nconsole.log(longestWord("JavaScript is awesome"));`
//       },
//       // Day 7
//       {
//         prompt: "Write a function that checks if a string has all unique characters",
//         answer: `function allUnique(str) {\n  const set = new Set(str);\n  return set.size === str.length;\n}\nconsole.log(allUnique("robot"));\nconsole.log(allUnique("hello"));`
//       },
//       {
//         prompt: "Write a function that returns the sum of even numbers in an array",
//         answer: `function sumEven(arr) {\n  return arr.filter(n => n % 2 === 0).reduce((sum, n) => sum + n, 0);\n}\nconsole.log(sumEven([1, 2, 3, 4, 5]));`
//       },
//       // Day 8
//       {
//         prompt: "Write a function that counts how many times a letter appears in a string",
//         answer: `function countLetter(str, letter) {\n  let count = 0;\n  for (let char of str) {\n    if (char === letter) count++;\n  }\n  return count;\n}\nconsole.log(countLetter("banana", "a"));`
//       },
//       {
//         prompt: "Write a function to flatten a nested array one level deep",
//         answer: `function flattenOnce(arr) {\n  return arr.reduce((flat, curr) => flat.concat(curr), []);\n}\nconsole.log(flattenOnce([[1, 2], [3, 4], [5]]));`
//       }





//     ]
//   }
// ];























export const sections = [
  {
    title: "Tier 1: Foundations",
    exercises: [
      {
        prompt: "Create a <p> element with the text 'Hello DOM' and append it to the #dom-output div.",
        answer: `
const p = document.createElement("p");
p.textContent = "Hello DOM";
document.getElementById("dom-output").appendChild(p);
        `.trim()
      }



    ]
  }
];
