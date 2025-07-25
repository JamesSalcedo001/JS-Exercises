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
      },
      // Day 6
      {
        prompt: "Create a function that returns the cube of a number",
        answer: `function cube(n) {\n  return n * n * n;\n}\nconsole.log(cube(3));`
      },
      {
        prompt: "Declare an array of numbers and log the last element",
        answer: `const nums = [5, 10, 15];\nconsole.log(nums[nums.length - 1]);`
      },
      {
        prompt: "Use a while loop to print numbers from 5 down to 1",
        answer: `let i = 5;\nwhile (i >= 1) {\n  console.log(i);\n  i--;\n}`
      },
      {
        prompt: "Log the type of 'true', 42, and 'hello'",
        answer: `console.log(typeof true);\nconsole.log(typeof 42);\nconsole.log(typeof "hello");`
      },
      // Day 7
      {
        prompt: "Use a for loop to print each letter in the string 'robot'",
        answer: `const word = "robot";\nfor (let i = 0; i < word.length; i++) {\n  console.log(word[i]);\n}`
      },
      {
        prompt: "Declare a number variable and check if it’s greater than 100",
        answer: `const num = 120;\nconsole.log(num > 100);`
      },
      {
        prompt: "Write a function that returns whether a number is positive",
        answer: `function isPositive(n) {\n  return n > 0;\n}\nconsole.log(isPositive(5));\nconsole.log(isPositive(-3));`
      },
      {
        prompt: "Log the first and last items in an array",
        answer: `const items = ["a", "b", "c", "d"];\nconsole.log(items[0]);\nconsole.log(items[items.length - 1]);`
      },
      // Day 8
      {
        prompt: "Declare a string and log its first and last characters",
        answer: `const word = "JavaScript";\nconsole.log(word[0]);\nconsole.log(word[word.length - 1]);`
      },
      {
        prompt: "Use a do...while loop to print numbers 1 to 3",
        answer: `let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 3);`
      },
      {
        prompt: "Create a function that returns the absolute value of a number",
        answer: `function absolute(n) {\n  return n < 0 ? -n : n;\n}\nconsole.log(absolute(-7));`
      },
      {
        prompt: "Create an array of 3 colors and log its second item",
        answer: `const colors = ["red", "green", "blue"];\nconsole.log(colors[1]);`
      },
      // Day 9
      {
        prompt: "Create a new array with squares of [2, 4, 6]",
        answer: `const nums = [2, 4, 6];\nconst squares = [];\nfor (let num of nums) {\n  squares.push(num * num);\n}\nconsole.log(squares);`
      },
      {
        prompt: "Log each item in ['pen', 'pencil', 'eraser'] with its index",
        answer: `const items = ['pen', 'pencil', 'eraser'];\nfor (let i = 0; i < items.length; i++) {\n  console.log(i + ": " + items[i]);\n}`
      },
      {
        prompt: "Filter numbers less than 50 from [100, 25, 45, 60]",
        answer: `const nums = [100, 25, 45, 60];\nconst result = nums.filter(n => n < 50);\nconsole.log(result);`
      },
      {
        prompt: "Push strings with length > 3 from ['hi', 'hello', 'ok', 'yes']",
        answer: `const words = ['hi', 'hello', 'ok', 'yes'];\nconst result = [];\nfor (let word of words) {\n  if (word.length > 3) result.push(word);\n}\nconsole.log(result);`
      },
      {
        prompt: "Print only positive numbers from [-1, 0, 5, -2, 3]",
        answer: `const nums = [-1, 0, 5, -2, 3];\nfor (let num of nums) {\n  if (num > 0) console.log(num);\n}`
      },
      {
        prompt: "Log numbers from 0 to 10, skipping 5",
        answer: `for (let i = 0; i <= 10; i++) {\n  if (i === 5) continue;\n  console.log(i);\n}`
      },
      {
        prompt: "Create an array of even numbers from 1 to 9",
        answer: `const evens = [];\nfor (let i = 1; i <= 9; i++) {\n  if (i % 2 === 0) evens.push(i);\n}\nconsole.log(evens);`
      },
      {
        prompt: "Log the length of each word in ['cat', 'tiger', 'lion']",
        answer: `const animals = ['cat', 'tiger', 'lion'];\nfor (let word of animals) {\n  console.log(word.length);\n}`
      },
      {
        prompt: "Print all odd numbers from 1 to 10",
        answer: `for (let i = 1; i <= 10; i++) {\n  if (i % 2 !== 0) console.log(i);\n}`
      },
      {
        prompt: "Push uppercase versions of ['hi', 'bye'] to new array",
        answer: `const words = ['hi', 'bye'];\nconst upper = [];\nfor (let word of words) {\n  upper.push(word.toUpperCase());\n}\nconsole.log(upper);`
      },
      // Day 10
      {
        prompt: "Print numbers from 1 to 5 using a while loop",
        answer: `let i = 1;\nwhile (i <= 5) {\n  console.log(i);\n  i++;\n}`
      },
      {
        prompt: "Create an array of three car brands and log the second one",
        answer: `const cars = ["Toyota", "Honda", "Ford"];\nconsole.log(cars[1]);`
      },
      {
        prompt: "Log each character of the word 'logic'",
        answer: `const word = "logic";\nfor (let i = 0; i < word.length; i++) {\n  console.log(word[i]);\n}`
      },
      {
        prompt: "Declare an object for a user with username and isAdmin set to false",
        answer: `const user = {\n  username: "coder123",\n  isAdmin: false\n};\nconsole.log(user);`
      },
      {
        prompt: "Create a function that returns the product of 3 and 4",
        answer: `function product() {\n  return 3 * 4;\n}\nconsole.log(product());`
      },
      {
        prompt: "Log whether a number is greater than 50 (use 75 as an example)",
        answer: `const number = 75;\nconsole.log(number > 50);`
      },
      {
        prompt: "Declare a boolean variable called isStudent and log its type",
        answer: `const isStudent = true;\nconsole.log(typeof isStudent);`
      },
      {
        prompt: "Create an array of 4 animals and use a for loop to log each",
        answer: `const animals = ["cat", "dog", "fox", "elephant"];\nfor (let i = 0; i < animals.length; i++) {\n  console.log(animals[i]);\n}`
      },
      {
        prompt: "Log the length of the string 'JavaScript is fun'",
        answer: `const sentence = "JavaScript is fun";\nconsole.log(sentence.length);`
      },
      {
        prompt: "Use a for loop to print odd numbers from 1 to 9",
        answer: `for (let i = 1; i <= 9; i++) {\n  if (i % 2 !== 0) console.log(i);\n}`
      },
      // Day 11
      {
        prompt: "Declare a string and check if it includes the letter 'z'",
        answer: `const str = "amazing";\nconsole.log(str.includes("z"));`
      },
      {
        prompt: "Log the uppercase version of the string 'robot'",
        answer: `const word = "robot";\nconsole.log(word.toUpperCase());`
      },
      {
        prompt: "Check if the number 42 is greater than 30 and less than 50",
        answer: `const num = 42;\nconsole.log(num > 30 && num < 50);`
      },
      {
        prompt: "Write a function that checks if a string has more than 5 characters",
        answer: `function isLong(str) {\n  return str.length > 5;\n}\nconsole.log(isLong("banana"));`
      },
      {
        prompt: "Declare an object with keys 'name' and 'age' and log the age",
        answer: `const person = { name: "Lena", age: 28 };\nconsole.log(person.age);`
      },
      // Day 12
      {
        prompt: "Print numbers from 1 to 10 using a do...while loop",
        answer: `let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 10);`
      },
      {
        prompt: "Create a function that returns true if a number is negative",
        answer: `function isNegative(n) {\n  return n < 0;\n}\nconsole.log(isNegative(-5));\nconsole.log(isNegative(3));`
      },
      {
        prompt: "Declare an object for a movie with title and year",
        answer: `const movie = {\n  title: "Inception",\n  year: 2010\n};\nconsole.log(movie);`
      },
      {
        prompt: "Log the value of the 'year' key from the movie object",
        answer: `const movie = { title: "Inception", year: 2010 };\nconsole.log(movie.year);`
      },
      {
        prompt: "Log the square of each number in [1, 2, 3]",
        answer: `const nums = [1, 2, 3];\nfor (let n of nums) {\n  console.log(n * n);\n}`
      },
      // Day 13
      {
        prompt: "Print numbers from 1 to 5 using a do...while loop",
        answer: `let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 5);`
      },
      {
        prompt: "Log the result of 8 modulo 3",
        answer: `console.log(8 % 3);`
      },
      {
        prompt: "Declare a string 'developer' and log its second character",
        answer: `const word = "developer";\nconsole.log(word[1]);`
      },
      {
        prompt: "Create an object with keys name and role, and log the role",
        answer: `const person = { name: "Tina", role: "Engineer" };\nconsole.log(person.role);`
      },
      {
        prompt: "Write a function that subtracts two numbers",
        answer: `function subtract(a, b) {\n  return a - b;\n}\nconsole.log(subtract(10, 4));`
      },
      // Day 14
      {
        prompt: "Log numbers from 1 to 5 using a do...while loop",
        answer: `let i = 1;\ndo {\n  console.log(i);\n  i++;\n} while (i <= 5);`
      },
      {
        prompt: "Create an array of 3 fruits and print the first one",
        answer: `const fruits = ["apple", "banana", "cherry"];\nconsole.log(fruits[0]);`
      },
      {
        prompt: "Declare an object with name and favoriteColor properties",
        answer: `const person = {\n  name: "James",\n  favoriteColor: "blue"\n};\nconsole.log(person);`
      },
      {
        prompt: "Write a function that returns whether a number is negative",
        answer: `function isNegative(n) {\n  return n < 0;\n}\nconsole.log(isNegative(-5));\nconsole.log(isNegative(3));`
      },
      {
        prompt: "Use a for loop to print numbers 0 to 4",
        answer: `for (let i = 0; i < 5; i++) {\n  console.log(i);\n}`
      },
      // Day 15
      {
        prompt: "Print all numbers from 1 to 10 using a do...while loop",
        answer: `let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);`
      },
      {
        prompt: "Declare a variable 'language' and assign it 'JavaScript', then log it",
        answer: `const language = "JavaScript";
console.log(language);`
      },
      {
        prompt: "Create an object representing a laptop with brand and RAM (e.g., 16GB)",
        answer: `const laptop = {
  brand: "Apple",
  ram: "16GB"
};
console.log(laptop);`
      },
      {
        prompt: "Log the result of 10 divided by 2",
        answer: `console.log(10 / 2);`
      },
      {
        prompt: "Create an array with numbers 1 to 3 and log the sum",
        answer: `const nums = [1, 2, 3];
const sum = nums[0] + nums[1] + nums[2];
console.log(sum);`
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
  },
  {
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
  },
  {
    title: "Tier 4: Chaining & Composition",
    exercises: [
      // Day 1
      {
        prompt: "Square all even numbers from [1, 2, 3, 4, 5, 6]",
        answer: `const numbers = [1, 2, 3, 4, 5, 6];\nconst evenSquares = numbers.filter(n => n % 2 === 0).map(n => n ** 2);\nconsole.log(evenSquares);`,
        snippet: `const numbers = [1, 2, 3, 4, 5, 6];`
      },
      {
        prompt: "Sort names by length: ['Amy', 'Jonathan', 'Li', 'Sebastian']",
        answer: `const names = ['Amy', 'Jonathan', 'Li', 'Sebastian'];\nnames.sort((a, b) => a.length - b.length);\nconsole.log(names);`,
        snippet: `const names = ['Amy', 'Jonathan', 'Li', 'Sebastian'];`
      },

      // Day 2
      {
        prompt: "Filter out numbers > 10 and double them: [5, 12, 8, 20]",
        answer: `const nums = [5, 12, 8, 20];\nconst result = nums.filter(n => n > 10).map(n => n * 2);\nconsole.log(result);`,
        snippet: `const nums = [5, 12, 8, 20];`
      },
      {
        prompt: "Create array of words with > 3 letters: ['hi', 'code', 'dog', 'JavaScript']",
        answer: `const words = ["hi", "code", "dog", "JavaScript"];\nconst result = words.filter(w => w.length > 3);\nconsole.log(result);`,
        snippet: `const words = ["hi", "code", "dog", "JavaScript"];`
      },

      // Day 3
      {
        prompt: "Get first letters of each word: ['apple', 'banana', 'cherry']",
        answer: `const words = ['apple', 'banana', 'cherry'];\nconst initials = words.map(w => w[0]);\nconsole.log(initials);`,
        snippet: `const words = ['apple', 'banana', 'cherry'];`
      },
      {
        prompt: "Filter and uppercase words longer than 3 letters",
        answer: `const words = ["hi", "code", "sun", "developer"];\nconst result = words.filter(w => w.length > 3).map(w => w.toUpperCase());\nconsole.log(result);`,
        snippet: `const words = ["hi", "code", "sun", "developer"];`
      },

      // Day 4
      {
        prompt: "Double the odd numbers from [1, 2, 3, 4, 5]",
        answer: `const nums = [1, 2, 3, 4, 5];\nconst doubledOdds = nums.filter(n => n % 2 !== 0).map(n => n * 2);\nconsole.log(doubledOdds);`,
        snippet: `const nums = [1, 2, 3, 4, 5];`
      },
      {
        prompt: "Chain to get squares of numbers > 5 from [2, 5, 8, 12]",
        answer: `const nums = [2, 5, 8, 12];\nconst result = nums.filter(n => n > 5).map(n => n ** 2);\nconsole.log(result);`,
        snippet: `const nums = [2, 5, 8, 12];`
      },
      {
        prompt: "Convert [1, 2, 3, 4] to strings and add '!' to each",
        answer: `const nums = [1, 2, 3, 4];\nconst result = nums.map(n => n.toString() + "!");\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3, 4];`
      },
      {
        prompt: "From ['Tom', 'Timothy', 'Tina'], get names longer than 3 letters and lowercase them",
        answer: `const names = ['Tom', 'Timothy', 'Tina'];\nconst result = names.filter(name => name.length > 3).map(name => name.toLowerCase());\nconsole.log(result);`,
        snippet: `const names = ['Tom', 'Timothy', 'Tina'];`
      },

      // Day 6
      {
        prompt: "Double and stringify numbers in [1, 2, 3]",
        answer: `const nums = [1, 2, 3];\nconst result = nums.map(n => (n * 2).toString());\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3];`
      },
      {
        prompt: "Chain filter and map: Get square roots of even numbers from [4, 9, 16, 25]",
        answer: `const nums = [4, 9, 16, 25];\nconst result = nums.filter(n => n % 2 === 0).map(n => Math.sqrt(n));\nconsole.log(result);`,
        snippet: `const nums = [4, 9, 16, 25];`
      },

      // Day 7
      {
        prompt: "Chain: Double even numbers and convert to string in [1, 2, 3, 4]",
        answer: `const nums = [1, 2, 3, 4];\nconst result = nums.filter(n => n % 2 === 0).map(n => (n * 2).toString());\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3, 4];`
      },
      {
        prompt: "From ['a', 'ab', 'abc'], keep only length > 1 and uppercase",
        answer: `const strings = ['a', 'ab', 'abc'];\nconst result = strings.filter(s => s.length > 1).map(s => s.toUpperCase());\nconsole.log(result);`,
        snippet: `const strings = ['a', 'ab', 'abc'];`
      },

      // Day 8
      {
        prompt: "From [2, 4, 5, 6], filter even and triple them",
        answer: `const nums = [2, 4, 5, 6];\nconst result = nums.filter(n => n % 2 === 0).map(n => n * 3);\nconsole.log(result);`,
        snippet: `const nums = [2, 4, 5, 6];`
      },
      {
        prompt: "Convert ['dog', 'cat', 'bird'] to uppercase and reverse each word",
        answer: `const animals = ["dog", "cat", "bird"];\nconst result = animals.map(a => a.toUpperCase().split('').reverse().join(''));\nconsole.log(result);`,
        snippet: `const animals = ["dog", "cat", "bird"];`
      },

      // Day 9
      {
        prompt: "Chain filter + map to double odd numbers in [1, 2, 3, 4, 5]",
        answer: `const nums = [1, 2, 3, 4, 5];\nconst result = nums.filter(n => n % 2 !== 0).map(n => n * 2);\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3, 4, 5];`
      },
      {
        prompt: "Convert numbers to strings in [5, 10, 15]",
        answer: `const nums = [5, 10, 15];\nconst result = nums.map(n => n.toString());\nconsole.log(result);`,
        snippet: `const nums = [5, 10, 15];`
      },
      {
        prompt: "Chain to get first letters of words longer than 3: ['ant', 'bear', 'cat']",
        answer: `const animals = ['ant', 'bear', 'cat'];\nconst result = animals.filter(a => a.length > 3).map(a => a[0]);\nconsole.log(result);`,
        snippet: `const animals = ['ant', 'bear', 'cat'];`
      },
      {
        prompt: "Filter out numbers < 5 and square them: [2, 4, 6, 8]",
        answer: `const nums = [2, 4, 6, 8];\nconst result = nums.filter(n => n < 5).map(n => n ** 2);\nconsole.log(result);`,
        snippet: `const nums = [2, 4, 6, 8];`
      },
      {
        prompt: "Uppercase words with more than 4 letters: ['hi', 'hello', 'yes', 'world']",
        answer: `const words = ['hi', 'hello', 'yes', 'world'];\nconst result = words.filter(w => w.length > 4).map(w => w.toUpperCase());\nconsole.log(result);`,
        snippet: `const words = ['hi', 'hello', 'yes', 'world'];`
      },

      // Day 10
      {
        prompt: "Chain: filter names starting with 'A' and uppercase them",
        answer: `const names = ['Alice', 'Bob', 'Amanda', 'Charlie'];\nconst result = names.filter(n => n.startsWith('A')).map(n => n.toUpperCase());\nconsole.log(result);`,
        snippet: `const names = ['Alice', 'Bob', 'Amanda', 'Charlie'];`
      },
      {
        prompt: "Double all numbers greater than 5 in [3, 6, 8, 2]",
        answer: `const nums = [3, 6, 8, 2];\nconst result = nums.filter(n => n > 5).map(n => n * 2);\nconsole.log(result);`,
        snippet: `const nums = [3, 6, 8, 2];`
      },
      {
        prompt: "Filter words longer than 4 characters and get their lengths",
        answer: `const words = ['hi', 'hello', 'world', 'ok'];\nconst result = words.filter(w => w.length > 4).map(w => w.length);\nconsole.log(result);`,
        snippet: `const words = ['hi', 'hello', 'world', 'ok'];`
      },
      {
        prompt: "Chain: lowercase words and keep only those containing 'a'",
        answer: `const words = ['Apple', 'Banana', 'Cherry', 'Date'];\nconst result = words.map(w => w.toLowerCase()).filter(w => w.includes('a'));\nconsole.log(result);`,
        snippet: `const words = ['Apple', 'Banana', 'Cherry', 'Date'];`
      },
      {
        prompt: "Triple the even numbers in [1, 2, 3, 4, 5, 6]",
        answer: `const nums = [1, 2, 3, 4, 5, 6];\nconst result = nums.filter(n => n % 2 === 0).map(n => n * 3);\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3, 4, 5, 6];`
      },
      {
        prompt: "Filter numbers under 10 and convert to strings",
        answer: `const nums = [4, 12, 8, 15];\nconst result = nums.filter(n => n < 10).map(n => n.toString());\nconsole.log(result);`,
        snippet: `const nums = [4, 12, 8, 15];`
      },
      {
        prompt: "Uppercase only words starting with 'c': ['cat', 'dog', 'cow']",
        answer: `const animals = ['cat', 'dog', 'cow'];\nconst result = animals.filter(a => a.startsWith('c')).map(a => a.toUpperCase());\nconsole.log(result);`,
        snippet: `const animals = ['cat', 'dog', 'cow'];`
      },
      {
        prompt: "Chain: add 1 to odd numbers and get their squares",
        answer: `const nums = [1, 2, 3, 4];\nconst result = nums.filter(n => n % 2 !== 0).map(n => (n + 1) ** 2);\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3, 4];`
      },
      {
        prompt: "Convert strings to their lengths: ['hi', 'hello', 'yes']",
        answer: `const words = ['hi', 'hello', 'yes'];\nconst result = words.map(w => w.length);\nconsole.log(result);`,
        snippet: `const words = ['hi', 'hello', 'yes'];`
      },
      {
        prompt: "Filter numbers divisible by 2 and 3: [6, 9, 12, 15]",
        answer: `const nums = [6, 9, 12, 15];\nconst result = nums.filter(n => n % 2 === 0 && n % 3 === 0);\nconsole.log(result);`,
        snippet: `const nums = [6, 9, 12, 15];`
      },

      // Day 11
      {
        prompt: "Get lowercase words longer than 4 characters: ['Hi', 'Hello', 'World', 'JS']",
        answer: `const words = ['Hi', 'Hello', 'World', 'JS'];\nconst result = words.filter(w => w.length > 4).map(w => w.toLowerCase());\nconsole.log(result);`,
        snippet: `const words = ['Hi', 'Hello', 'World', 'JS'];`
      },
      {
        prompt: "From [5, 12, 8, 3], filter even numbers and square them",
        answer: `const nums = [5, 12, 8, 3];\nconst result = nums.filter(n => n % 2 === 0).map(n => n ** 2);\nconsole.log(result);`,
        snippet: `const nums = [5, 12, 8, 3];`
      },
      {
        prompt: "Filter names starting with 'J' and return their lengths: ['Joe', 'Anna', 'Jack']",
        answer: `const names = ['Joe', 'Anna', 'Jack'];\nconst result = names.filter(name => name.startsWith('J')).map(name => name.length);\nconsole.log(result);`,
        snippet: `const names = ['Joe', 'Anna', 'Jack'];`
      },
      {
        prompt: "Triple odd numbers in [2, 5, 7, 8] and convert to strings",
        answer: `const nums = [2, 5, 7, 8];\nconst result = nums.filter(n => n % 2 !== 0).map(n => (n * 3).toString());\nconsole.log(result);`,
        snippet: `const nums = [2, 5, 7, 8];`
      },
      {
        prompt: "Get initials of long names: ['Amy', 'Jonathan', 'Catherine'] (length > 4)",
        answer: `const names = ['Amy', 'Jonathan', 'Catherine'];\nconst result = names.filter(n => n.length > 4).map(n => n[0]);\nconsole.log(result);`,
        snippet: `const names = ['Amy', 'Jonathan', 'Catherine'];`
      },

      // Day 12
      {
        prompt: "Filter even numbers and square them: [3, 4, 6, 9]",
        answer: `const nums = [3, 4, 6, 9];\nconst result = nums.filter(n => n % 2 === 0).map(n => n ** 2);\nconsole.log(result);`,
        snippet: `const nums = [3, 4, 6, 9];`
      },
      {
        prompt: "Convert ['apple', 'banana', 'kiwi'] to uppercase and get lengths",
        answer: `const fruits = ['apple', 'banana', 'kiwi'];\nconst result = fruits.map(f => f.toUpperCase()).map(f => f.length);\nconsole.log(result);`,
        snippet: `const fruits = ['apple', 'banana', 'kiwi'];`
      },
      {
        prompt: "From [1, 2, 3, 4, 5], double odds and convert to strings",
        answer: `const nums = [1, 2, 3, 4, 5];\nconst result = nums.filter(n => n % 2 !== 0).map(n => (n * 2).toString());\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3, 4, 5];`
      },
      {
        prompt: "Filter strings that include 'o' and capitalize them: ['dog', 'cat', 'owl']",
        answer: `const animals = ['dog', 'cat', 'owl'];\nconst result = animals.filter(a => a.includes('o')).map(a => a.toUpperCase());\nconsole.log(result);`,
        snippet: `const animals = ['dog', 'cat', 'owl'];`
      },
      {
        prompt: "Chain: get lengths of words with more than 2 vowels: ['apple', 'tea', 'sky']",
        answer: `const words = ['apple', 'tea', 'sky'];\nconst vowels = 'aeiou';\nconst result = words.filter(word => {\n  let count = 0;\n  for (let char of word) {\n    if (vowels.includes(char)) count++;\n  }\n  return count > 2;\n}).map(w => w.length);\nconsole.log(result);`,
        snippet: `const words = ['apple', 'tea', 'sky'];`
      },

      // Day 13
      {
        prompt: "Chain filter and map to triple odd numbers in [2, 3, 4, 5]",
        answer: `const nums = [2, 3, 4, 5];\nconst result = nums.filter(n => n % 2 !== 0).map(n => n * 3);\nconsole.log(result);`,
        snippet: `const nums = [2, 3, 4, 5];`
      },
      {
        prompt: "Get lowercase initials of names longer than 3 chars: ['Al', 'Bob', 'Charlie']",
        answer: `const names = ['Al', 'Bob', 'Charlie'];\nconst result = names.filter(name => name.length > 3).map(name => name[0].toLowerCase());\nconsole.log(result);`,
        snippet: `const names = ['Al', 'Bob', 'Charlie'];`
      },
      {
        prompt: "Convert numbers in [1, 2, 3] to strings and add prefix 'ID-'",
        answer: `const nums = [1, 2, 3];\nconst result = nums.map(n => 'ID-' + n.toString());\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3];`
      },
      {
        prompt: "Chain: filter > 4 and get string lengths: ['yes', 'hello', 'amazing', 'ok']",
        answer: `const words = ['yes', 'hello', 'amazing', 'ok'];\nconst result = words.filter(w => w.length > 4).map(w => w.length);\nconsole.log(result);`,
        snippet: `const words = ['yes', 'hello', 'amazing', 'ok'];`
      },
      {
        prompt: "From [10, 20, 30], divide by 2 and stringify",
        answer: `const nums = [10, 20, 30];\nconst result = nums.map(n => (n / 2).toString());\nconsole.log(result);`,
        snippet: `const nums = [10, 20, 30];`
      },

      // Day 14
      {
        prompt: "From [3, 6, 9, 12], double the numbers greater than 5 and convert to strings",
        answer: `const nums = [3, 6, 9, 12];\nconst result = nums.filter(n => n > 5).map(n => (n * 2).toString());\nconsole.log(result);`,
        snippet: `const nums = [3, 6, 9, 12];`
      },
      {
        prompt: "From ['Sam', 'Ann', 'Robert'], keep names longer than 3 characters and lowercase them",
        answer: `const names = ['Sam', 'Ann', 'Robert'];\nconst result = names.filter(name => name.length > 3).map(name => name.toLowerCase());\nconsole.log(result);`,
        snippet: `const names = ['Sam', 'Ann', 'Robert'];`
      },
      {
        prompt: "Square odd numbers and convert to strings: [1, 2, 3, 4]",
        answer: `const nums = [1, 2, 3, 4];\nconst result = nums.filter(n => n % 2 !== 0).map(n => (n ** 2).toString());\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3, 4];`
      },
      {
        prompt: "From ['yes', 'no', 'maybe'], uppercase those with more than 2 letters",
        answer: `const words = ['yes', 'no', 'maybe'];\nconst result = words.filter(w => w.length > 2).map(w => w.toUpperCase());\nconsole.log(result);`,
        snippet: `const words = ['yes', 'no', 'maybe'];`
      },
      {
        prompt: "From [10, 20, 30], filter numbers divisible by 10 and get their halves",
        answer: `const nums = [10, 20, 30];\nconst result = nums.filter(n => n % 10 === 0).map(n => n / 2);\nconsole.log(result);`,
        snippet: `const nums = [10, 20, 30];`
      },

      // Day 15 
      {
        prompt: "Filter odd numbers and square them: [2, 3, 4, 5, 6]",
        answer: `const nums = [2, 3, 4, 5, 6];\nconst result = nums.filter(n => n % 2 !== 0).map(n => n ** 2);\nconsole.log(result);`,
        snippet: `const nums = [2, 3, 4, 5, 6];`
      },
      {
        prompt: "Get lowercase strings longer than 4 chars: ['Hello', 'Yes', 'Programming']",
        answer: `const words = ['Hello', 'Yes', 'Programming'];\nconst result = words.filter(w => w.length > 4).map(w => w.toLowerCase());\nconsole.log(result);`,
        snippet: `const words = ['Hello', 'Yes', 'Programming'];`
      },
      {
        prompt: "Triple numbers greater than 10: [4, 12, 9, 18]",
        answer: `const nums = [4, 12, 9, 18];\nconst result = nums.filter(n => n > 10).map(n => n * 3);\nconsole.log(result);`,
        snippet: `const nums = [4, 12, 9, 18];`
      },
      {
        prompt: "From ['hi', 'robotics', 'no'], keep strings > 2 chars and get their lengths",
        answer: `const words = ['hi', 'robotics', 'no'];\nconst result = words.filter(w => w.length > 2).map(w => w.length);\nconsole.log(result);`,
        snippet: `const words = ['hi', 'robotics', 'no'];`
      },
      {
        prompt: "Filter even numbers and convert to strings: [1, 2, 3, 4, 5]",
        answer: `const nums = [1, 2, 3, 4, 5];\nconst result = nums.filter(n => n % 2 === 0).map(n => n.toString());\nconsole.log(result);`,
        snippet: `const nums = [1, 2, 3, 4, 5];`
      }

    ]
  },
  {
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
];

