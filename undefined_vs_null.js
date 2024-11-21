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
let x; // Declared but not initialized
console.log(x); // Output: undefined

// Function Without return:
function noReturn() {}
console.log(noReturn()); // Output: undefined

// Optional Function Parameters:
function greet(name) {
  console.log(name); // Output: undefined if no argument is passed
}
greet();

// Missing Object Property:
const person = { name: "Yawar" };
console.log(person.age); // Output: undefined (age is not defined)

// Array Element Not Assigned:
const arr = [1, , 3]; // Sparse array
console.log(arr[1]); // Output: undefined (2nd element is empty)

// null
// Definition:
// null is an intentional assignment that represents the absence of any object value.
// It is used to signify "no value" or "empty object reference."

// Key Characteristics:
// Explicit Assignment: null is not assigned automatically; it must be set by the programmer.
// Type: Its type is object (this is a historical quirk in JavaScript).
// Intentional Absence: Indicates an intentional "empty" state or lack of an object.

// Example 1: Explicit Assignment
let myVar = null;
console.log(myVar); // Output: null

// Example 2: Clearing Object References
let user = { name: "Yawar" };
console.log(user); // Output: { name: "Yawar" }

user = null; // Clearing the reference
console.log(user); // Output: null

// Example 3: Resetting a Variable
let selectedItem = "Book";
console.log(selectedItem); // Output: Book

selectedItem = null; // Resetting the value
console.log(selectedItem); // Output: null

// Example 4: Function Returning null
function getNothing() {
  return null;
}
console.log(getNothing()); // Output: null


// Comparison: undefined vs null
// Key Differences
// Feature	                      undefined	                               null
// Definition	                  Automatically assigned by JavaScript.	   Explicitly assigned by the programmer.
// Type	                        undefined	                               object (quirk of JavaScript).
// Purpose	                      Represents an uninitialized variable     Represents an intentional absence of a value.
//                               or missing value.	 
// Default                       Behavior	Assigned by JavaScript to      Requires explicit assignment.
//                               uninitialized variables, missing 
//                               properties, or function calls 
//                                 with no return.	

