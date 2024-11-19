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

function testVar(){
  if(true){
    var x= 10;
  }
  console.log(x);
}

testVar();
  
