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

// 1.2 How undefined Propagates
// If any operation involves undefined, it can lead to unexpected results:
// let a;
// console.log(a + 2); // Output: NaN (undefined coerces into NaN in arithmetic)

// ------------------------------------------- The End Undefined -----------------------------------------------

// null
// Definition:
// null is an intentional assignment that represents the absence of any object value.
// It is used to signify "no value" or "empty object reference."

// Key Characteristics:
// Explicit Assignment: null is not assigned automatically; it must be set by the programmer.
// Type: Its type is object (this is a historical quirk in JavaScript).
// Intentional Absence: Indicates an intentional "empty" state or lack of an object.

// 2.2 Common Patterns Using null
// Lazy Initialization:
// let databaseConnection = null; // Initialize when needed
// if (!databaseConnection) {
//   databaseConnection = connectToDatabase();
// }

// State Management:
// let currentUser = null; // No user is logged in

// Comparison in Truthy/Falsy Context
// Both are falsy, but they behave differently:
// if (!undefined) console.log("undefined is falsy"); // Output: "undefined is falsy"
// if (!null) console.log("null is falsy");          // Output: "null is falsy

// Edge Case:
// console.log(undefined || "default"); // Output: "default"
// console.log(null || "default");      // Output: "default"

// 4. Performance Considerations
// Accessing undefined properties can result in slightly slower performance compared
// to accessing existing properties because JavaScript engines must verify the property’s existence.
// Explicit use of null can help make your code more predictable and easier for optimizations.

// 5. Use Cases in Real-World Applications
// 5.1 APIs and Data Models
// APIs often use null to indicate missing or optional values:
// {
//   "id": 1,
//   "name": null // The name field is intentionally left empty
// }
// undefined is generally not serialized into JSON, making null the preferred choice.

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
//                               with no return.	
// Usability	                    Used for system-level uninitialized 
//                               values	                                Used for developer-assigned "no value"
// Equality	                    undefined == null is true               undefined === null is false 
//                               (loose equality)                        (strict equality)
                              	                      
// Common Use Cases
// Use undefined When:
// Default state of variables (e.g., when a variable hasn’t been assigned).
// Uninitialized object properties or array elements.
  
// Use null When:
// Explicitly clearing a value or resetting a variable.
// Indicating absence of an object reference or result.

// Advanced Considerations
// Type Checking:
// console.log(typeof undefined); // Output: "undefined"
// console.log(typeof null);      // Output: "object" (historical quirk)

// Avoid Misuse of undefined:
// let x;
// x = undefined; // Bad practice, better to use null for intentional emptiness
