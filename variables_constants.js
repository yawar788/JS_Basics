// Variables and Constants in JavaScript: var, let, and const

// Introduction
// In JavaScript, variables are used to store data that can be referenced
// and manipulated later. There are three ways to declare variables: var,
// let, and const. Each has unique behavior based on scope (global, block,
// or local), hoisting, and immutability.

// 1. var (Function Scope or Global Scope)
// Characteristics:
// 1. Function Scope: Variables declared with var are scoped to the function 
//    in which they are defined. If declared outside a function, they are global.

// 2. Re-declaration Allowed: You can re-declare a variable declared with var.
// 3. Hoisting: Variables declared with var are hoisted to the top of their scope 
//    but are initialized to undefined.

// Example 1: Function Scope
// function testVar() {
//     if (true) {
//         var x = 10; // Scoped to the entire function
//     }
//     console.log(x); // Output: 10
// }
// testVar();

// Example 2: Hoisting
// console.log(a); // Output: undefined (hoisted)
// var a = 5;

// Example 3: Global Scope
// var globalVar = "I am global";
// function display() {
//     console.log(globalVar); // Accesses global variable
// }
// display();

// 2. let (Block Scope)
// Characteristics:
// Block Scope: let variables are limited to the block {} in which they are declared.
// Re-declaration Not Allowed: You cannot re-declare a variable in the same scope with let.
// Hoisting: Variables declared with let are hoisted but are not initialized until they 
// are encountered (Temporal Dead Zone).

// Example 1: Block Scope
// if (true) {
    // let y = 20; // Scoped to this block
    // console.log(y); // Output: 20
// }
// console.log(y); // ReferenceError: y is not defined

// Example 2: Temporal Dead Zone
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
// let z = 30;

// Example 3: Re-declaration Not Allowed
// let value = 10;
// let value = 20; // SyntaxError: Identifier 'value' has already been declared

