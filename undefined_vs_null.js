// Understanding undefined vs null in JavaScript

// undefined and null are two distinct data types in JavaScript, but they are often confused
// because both represent "nothing" or "absence of a value." Here's an in-depth explanation:
// It represents the absence of an initialized value.

// Key Points:
// Default Value: Variables that are declared but not initialized are automatically assigned 
// // undefined by JavaScript.
// Return Value: Functions return undefined if no value is explicitly returned.
// Unassigned Object Properties: Accessing a non-existent property on an object results in undefined.

// Uninitialized Variables:
// let x; // Declared but not initialized
// console.log(x); // Output: undefined

// Function Without return:
// function noReturn() {}
// console.log(noReturn()); // Output: undefined

// Missing Object Property:
// const person = { name: "Yawar" };
// console.log(person.age); // Output: undefined (age is not defined)

// Array Element Not Assigned:
// const arr = [1, , 3]; // Sparse array
// console.log(arr[1]); // Output: undefined (2nd element is empty)


