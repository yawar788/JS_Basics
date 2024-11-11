// In JavaScript, strings are sequences of characters used to represent text. 
// They can be defined in three main ways: with double quotes ("), single quotes 
// ('), or backticks (`). Each has unique properties and use cases. Here’s an in-depth look:

// 1. Declaring Strings
let singleQuote = 'Hello, World!';
let doubleQuote = "Hello, World!";
let templateLiteral = `Hello, World!`;

// Differences:
// Single and Double Quotes: Used interchangeably for basic strings. They can contain 
// escape characters like \n (newline) and \' or \" for quotes inside quotes.
// Backticks (Template Literals): Allow multi-line strings and embedding expressions.

// 2. Escape Sequences
// Special characters can be included with escape sequences:

// \n: Newline
// \t: Tab
// \\: Backslash
// \" or \': Double or single quotes inside strings
// let escaped = 'He said, "Hello!"\nWelcome to JavaScript.';

// 3. Template Literals (Backticks)
// Template literals allow for embedded expressions with ${expression} 
// and span multiple lines without needing escape characters.

// let name = "Yawar";
// let greeting = `Hello, ${name}!
// Welcome to JavaScript.`; // Multi-line string with embedded variable
// console.log(greeting)

// 4. String Properties and Methods
// Length: .length gives the number of characters in a string.

// let text = "JavaScript";
// console.log(text.length); // 10

// 1. .charAt(index)
// Returns the character at a specified position.

// let str = "JavaScript";
// console.log(str.charAt(0)); // "J"
// console.log(str.charAt(4)); // "S"

// 2. .includes(substring, startIndex)
// Checks if a string contains a specific substring. Returns true or false.

// let str = "JavaScript is awesome";
// console.log(str.includes("awesome")); // true
// console.log(str.includes("Awesome", 10)); // false (case-sensitive)

// 3. .indexOf(substring)
// Finds the position of the first occurrence of a substring. Returns -1 if not found.

// let str = "JavaScript is versatile";
// console.log(str.indexOf("is")); // 11
// console.log(str.indexOf("Python")); // -1

// 4. .slice(startIndex, endIndex)
// Extracts part of a string from startIndex to endIndex (not inclusive).
// let str = "JavaScript";
// console.log(str.slice(0, 4)); // "Java"
// onsole.log(str.slice(4)); // "Script" (from index 4 to end)


// Common Methods:
// .toUpperCase(): Converts to uppercase.
// .toLowerCase(): Converts to lowercase.
// .includes(substring): Checks if a substring is present.
// .indexOf(substring): Returns the position of the first occurrence.
// .slice(start, end): Extracts a part of a string.
// .replace(search, replacement): Replaces text.

// let sentence = "JavaScript is versatile.";
// console.log(sentence.toUpperCase()); // "JAVASCRIPT IS VERSATILE."
// console.log(sentence.includes("versatile")); // true
// console.log(sentence.indexOf("JavaScript")); // 0
// console.log(sentence.slice(0, 10)); // "JavaScript"
// console.log(sentence.replace("versatile", "powerful")); // "JavaScript is powerful."

// 5. Multi-line Strings
// Using backticks simplifies writing multi-line strings without \n.

// let multiLine = `This is
// a multi-line
// string.`;

// 6. Concatenation
// Strings can be combined with + or by using template literals.

// let firstName = "Yawar";
// let lastName = "Abbas";
// console.log(firstName + " " + lastName); // "Yawar Abbas"
// console.log(`${firstName} ${lastName}`); // "Yawar Abbas"



