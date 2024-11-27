// Advanced Functions 
// Understanding advanced topics in JavaScript functions is crucial as they form the
// backbone of the language. Here, we'll delve deep into the following advanced topics:

// 1. Closures
// A closure is a function that retains access to its lexical scope, even when executed 
// outside of its original scope.

// Example:
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer Variable: ${outerVariable}`);
//         console.log(`Inner Variable: ${innerVariable}`);
//     };
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');


// 2. Higher-Order Functions
// Functions that can take other functions as arguments or return functions are called 
// higher-order functions.

// Example:
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10

// Explanation:
// multiplyBy returns a function, making it a higher-order function. This enables 
// dynamic behavior customization.
