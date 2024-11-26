// Understanding advanced topics in JavaScript functions is crucial as they form the
// backbone of the language. Here, we'll delve deep into the following advanced topics:

// 1. Closures
// A closure is a function that retains access to its lexical scope, even when executed 
// outside of its original scope.

// Example:
// javascript
// Copy code
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer Variable: ${outerVariable}`);
//         console.log(`Inner Variable: ${innerVariable}`);
//     };
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');
