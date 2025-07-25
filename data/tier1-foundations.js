export const tier1 = {
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
      answer: `const fruits = ["apple", "banana", "cherry", "date", "fig"];\nconsole.log(fruits);`,
      snippet: `const fruits = []`
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
}