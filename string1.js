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

// Common Methods:
// .toUpperCase(): Converts to uppercase.
// .toLowerCase(): Converts to lowercase.
// .includes(substring): Checks if a substring is present.
// .indexOf(substring): Returns the position of the first occurrence.
// .slice(start, end): Extracts a part of a string.
// .replace(search, replacement): Replaces text.

let sentence = "JavaScript is versatile.";
console.log(sentence.toUpperCase()); // "JAVASCRIPT IS VERSATILE."
console.log(sentence.includes("versatile")); // true
console.log(sentence.indexOf("JavaScript")); // 0
console.log(sentence.slice(0, 10)); // "JavaScript"
console.log(sentence.replace("versatile", "powerful")); // "JavaScript is powerful."







