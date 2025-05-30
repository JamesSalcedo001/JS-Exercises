export const sections = [
  {
    title: "Tier 1: Foundations",
    exercises: [
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
      }
    ]
  },
  {
    title: "Tier 2: Patterns",
    exercises: [
      {
        prompt: "Sum numbers in an array [2, 4, 6, 8]",
        answer: `const nums = [2, 4, 6, 8];\nlet sum = 0;\nfor (let num of nums) {\n  sum += num;\n}\nconsole.log(sum);`
      },
      {
        prompt: "Make a new array of only even numbers from [1, 2, 3, 4, 5, 6]",
        answer: `const nums = [1, 2, 3, 4, 5, 6];\nconst evens = [];\nfor (let num of nums) {\n  if (num % 2 === 0) evens.push(num);\n}\nconsole.log(evens);`
      }
    ]
  },
  {
    title: "Tier 3: Mini Challenges",
    exercises: [
      {
        prompt: "Reverse an array [1, 2, 3, 4] without using .reverse()",
        answer: `const nums = [1, 2, 3, 4];\nconst reversed = [];\nfor (let i = nums.length - 1; i >= 0; i--) {\n  reversed.push(nums[i]);\n}\nconsole.log(reversed);`
      },
      {
        prompt: "Find the largest number in [10, 5, 8, 20]",
        answer: `const nums = [10, 5, 8, 20];\nlet max = nums[0];\nfor (let num of nums) {\n  if (num > max) max = num;\n}\nconsole.log(max);`
      }
    ]
  },
  {
    title: "Tier 4: Chaining & Composition",
    exercises: [
      {
        prompt: "Square all even numbers from [1, 2, 3, 4, 5, 6]",
        answer: `const numbers = [1, 2, 3, 4, 5, 6];\nconst evenSquares = numbers.filter(n => n % 2 === 0).map(n => n ** 2);\nconsole.log(evenSquares);`
      },
      {
        prompt: "Sort names by length: ['Amy', 'Jonathan', 'Li', 'Sebastian']",
        answer: `const names = ['Amy', 'Jonathan', 'Li', 'Sebastian'];\nnames.sort((a, b) => a.length - b.length);\nconsole.log(names);`
      }
    ]
  },
  {
    title: "Tier 5: Problem Solving",
    exercises: [
      {
        prompt: "Check if a string is a palindrome",
        answer: `function isPalindrome(str) {\n  const reversed = str.split('').reverse().join('');\n  return str === reversed;\n}\nconsole.log(isPalindrome("racecar"));\nconsole.log(isPalindrome("hello"));`
      },
      {
        prompt: "Merge two sorted arrays [1, 3, 5] and [2, 4, 6]",
        answer: `function mergeSorted(a, b) {\n  return [...a, ...b].sort((x, y) => x - y);\n}\nconsole.log(mergeSorted([1, 3, 5], [2, 4, 6]));`
      }
    ]
  }
];
