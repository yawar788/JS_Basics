// 1. String
// Represents textual data enclosed in quotes ("", '', or backticks ``).

// Example:

// let name = "Yawar";
// console.log(name); // Output: Yawar
// 2. Number
// Represents numeric values, including integers and floating-point numbers.

// Example:

// let age = 25;       // Integer
// let height = 5.9;   // Floating-point
// console.log(age, height); // Output: 25 5.9
// 3. Boolean
// Represents one of two values: true or false.

// Example:

// let isStudent = true;
// console.log(isStudent); // Output: true
// 4. Undefined
// A variable that has been declared but not assigned a value is undefined.

// Example:

// let city;
// console.log(city); // Output: undefined
// 5. Null
// Represents the intentional absence of any value. It is an object type but used as a primitive.

// Example:

// let job = null;
// console.log(job); // Output: null
// 6. Symbol
// Introduced in ES6, Symbol is a unique and immutable value, often used as object property keys.

// Example:

// let id = Symbol("uniqueID");
// console.log(id); // Output: Symbol(uniqueID)
// 7. BigInt
// Introduced in ES2020, BigInt is used for numbers larger than Number.MAX_SAFE_INTEGER.

// Example:

// let bigNumber = 123456789012345678901234567890n;
// console.log(bigNumber); // Output: 123456789012345678901234567890n

// Key Characteristics of Primitives:
// Immutability: Their value cannot be changed (but the variable holding it can be reassigned).

// let a = "hello";
// a[0] = "H"; // This has no effect
// console.log(a); // Output: hello

// Comparison: Compared by value, not by reference.
// console.log(5 === 5); // Output: true
// console.log("abc" === "abc"); // Output: true
