// In JavaScript, non-primitive data types are types that are not immutable and are used to store
// collections of data or more complex entities. Unlike primitive types (like numbers, strings, etc.),
// non-primitive data types are dynamic and mutable, meaning you can modify their contents without 
// reassigning the variable.

// Here are the non-primitive data types in JavaScript:

// // 1. Objects
// // Definition: Objects are collections of key-value pairs where the keys are strings 
// // (or symbols) and the values can be any data type.
// Usage: Used to group related data and functions.
  
// Syntax:
// const person = {
//     name: "Yawar Abbas",
//     age: 25,
//     greet: function() {
//         console.log("Hello!");
//     }
// };
// console.log(person.name); // "Yawar Abbas"
// person.greet(); // "Hello!"

// 2. Arrays
// Definition: Arrays are ordered collections of values. These values can be of any data type.
// Usage: Useful for storing lists of data.
  
// Syntax:
// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[0]); // "apple"
// fruits.push("date"); // Add a new element
// console.log(fruits); // ["apple", "banana", "cherry", "date"]

// 3. Functions
// Definition: Functions in JavaScript are objects that encapsulate reusable code.
// Usage: Used to define reusable blocks of code that can be executed multiple times.
  
// Syntax:
// function greet(name) {
//     return `Hello, ${name}!`;
// }

// Calling the Function:
// console.log(greet("Yawar")); // "Hello, Yawar!"

// 4. Dates
// Definition: JavaScript provides a built-in Date object to work with dates and times.
// Usage: Useful for handling time and date operations.
  
// Syntax:
// const today = new Date();
// console.log(today); // Current date and time

// 5. Regular Expressions
// Definition: Regular expressions (RegExp) are objects that describe patterns in strings.
// Usage: Used for searching and manipulating strings based on patterns.
  
// Syntax:
// const regex = /hello/i;
// const result = regex.test("Hello world!");
// console.log(result); // true

// 6. Maps and WeakMaps
// Definition:
// Maps: Collections of key-value pairs where keys can be any data type.
// WeakMaps: Similar to Maps, but keys must be objects and are weakly referenced.
// Usage: Useful for storing and managing key-value pairs.
  
// Syntax:
// const map = new Map();
// map.set("name", "Yawar");
// console.log(map.get("name")); // "Yawar"

// 7. Sets and WeakSets
// Definition:
// Sets: Collections of unique values.
// WeakSets: Similar to Sets, but only stores objects and references are weak.
// Usage: Useful for ensuring unique items in a collection.
  
// Syntax:
// const set = new Set([1, 2, 3, 3]);
// console.log(set); // Set { 1, 2, 3 }

// Key Characteristics of Non-Primitive Data Types
// Dynamic in Nature: Can be modified (e.g., add or delete properties in objects or elements in arrays).
// Reference Type: Non-primitive types are stored and compared by reference, not by value.

// const obj1 = { a: 1 };
// const obj2 = obj1;
// obj2.a = 2;
// console.log(obj1.a); // 2 (obj1 and obj2 point to the same object)
