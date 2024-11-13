// In JavaScript, strings are sequences of characters used to represent text. 
// They can be defined in three main ways: with double quotes ("), single quotes 
// ('), or backticks (`). Each has unique properties and use cases. Here’s an in-depth look:

// 1. Declaring Strings
let singleQuote = 'Hello, World!';
let doubleQuote = "Hello, World!";
let templateLiteral = `Hello, World!`;

// Differences;
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

// 5. .substring(startIndex, endIndex)
// Similar to .slice(), but doesn’t accept negative indices.

// let str = "JavaScript";
// console.log(str.substring(0, 4)); // "Java"
// console.log(str.substring(4, 10)); // "Script"

// 7. .replace(searchValue, newValue)
// Replaces a specified substring or regular expression with a new 
// substring. It only replaces the first occurrence unless a global (g) flag is used.

// 8. .trim()
// Removes whitespace from both ends of a string.
// let str = "   JavaScript   ";
// console.log(str.trim()); // "JavaScript"

// 9. .split(separator, limit)
// Splits a string into an array of substrings based on a specified separator.

// let str = "JavaScript is versatile";
// console.log(str.split(" ")); // ["JavaScript", "is", "versatile"]

// 10. .concat()
// Joins multiple strings into one.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"

// 11. .repeat(count)
// Repeats the string a specified number of times.
let str = "Hello world";
console.log(str.repeat(4)); // "Hello Hello Hello "

// 12. .startsWith(substring, startIndex) and .endsWith(substring, length)
// Checks if a string starts or ends with a specific substring.

let str = "JavaScript";
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true


// In JavaScript, strings are one of the most essential and frequently used data 
// types, representing sequences of characters. They are immutable, meaning once created, 
// their content cannot be changed. Instead, new strings are created when transformations are applied.

// Defining Strings
// 1. Using Single or Double Quotes
// Single (') and double (") quotes can be used interchangeably for defining strings.
// However, they are literal strings, meaning you cannot easily include expressions
// or multi-line text without escape characters.

let greetingSingle = 'Hello, World!';
let greetingDouble = "Hello, World!";

// 2. Template Literals (Backticks)
// Template literals, enclosed by backticks (`), allow embedding expressions with
// ${expression}, multi-line strings without escape characters, and are ideal for dynamic content.


let name = "Yawar";
let greeting = `Hello, ${name}! Welcome to JavaScript.`; // Embedding variable in string

// String Properties

// .length: Returns the length (number of characters) in the string.
let str = "JavaScript";
console.log(str.length); // 10

// 1. .charAt(index)
// Returns the character at a specified position.
let str = "JavaScript";
console.log(str.charAt(0)); // "J"
console.log(str.charAt(4)); // "S"

// 2. .includes(substring, startIndex)
// Checks if a string contains a specific substring. Returns true or false.
let str = "JavaScript is awesome";
console.log(str.includes("awesome")); // true
console.log(str.includes("Awesome", 10)); // false (case-sensitive)

// 3. .indexOf(substring, startIndex)
// Finds the position of the first occurrence of a substring. Returns -1 if not found.
let str = "JavaScript is versatile";
console.log(str.indexOf("is")); // 11
console.log(str.indexOf("Python")); // -1

// 4. .slice(startIndex, endIndex)
// Extracts part of a string from startIndex to endIndex (not inclusive).
let str = "JavaScript";
console.log(str.slice(0, 4)); // "Java"
console.log(str.slice(4)); // "Script" (from index 4 to end)

// 5. .substring(startIndex, endIndex)
// Similar to .slice(), but doesn’t accept negative indices.
let str = "JavaScript";
console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(4, 10)); // "Script"

// 6. .toUpperCase() and .toLowerCase()
// Converts the entire string to uppercase or lowercase, respectively.

let str = "JavaScript";
console.log(str.toUpperCase()); // "JAVASCRIPT"
console.log(str.toLowerCase()); // "javascript"

// 7. .replace(searchValue, newValue)
// Replaces a specified substring or regular expression with a new substring. 
// It only replaces the first occurrence unless a global (g) flag is used.


let str = "JavaScript is great. JavaScript is popular.";
console.log(str.replace("JavaScript", "JS")); // "JS is great. JavaScript is popular."
console.log(str.replace(/JavaScript/g, "JS")); // "JS is great. JS is popular."

// 8. .trim()
// Removes whitespace from both ends of a string.

let str = "   JavaScript   ";
console.log(str.trim()); // "JavaScript"

// 9. .split(separator, limit)
// Splits a string into an array of substrings based on a specified separator.


let str = "JavaScript is versatile";
console.log(str.split(" ")); // ["JavaScript", "is", "versatile"]

// 10. .concat()
// Joins multiple strings into one.
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // "Hello, World!"

// 11. .repeat(count)
// Repeats the string a specified number of times.
let str = "Hello ";
console.log(str.repeat(3)); // "Hello Hello Hello "

// 12. .startsWith(substring, startIndex) and .endsWith(substring, length)
// Checks if a string starts or ends with a specific substring.

let str = "JavaScript";
console.log(str.startsWith("Java")); // true
console.log(str.endsWith("Script")); // true

// Template Literal Example for Interviews
// Template literals are very useful in real-world scenarios where dynamic content is required:
let user = "Yawar";
let items = 5;
let message = `Hello, ${user}! You have ${items} new notifications.`;
console.log(message); // "Hello, Yawar! You have 5 new notifications."


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



