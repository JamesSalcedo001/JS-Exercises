export const tier4 = {
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
}