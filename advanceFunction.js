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

// 5. IIFE (Immediately Invoked Function Expressions)
// An IIFE is a function that runs immediately after it is defined.

// Example:
(function () {
    console.log('This is an IIFE!');
})();

// Explanation:
// Useful for creating isolated scopes to prevent variable pollution.


// 6. Recursion
// Recursion is when a function calls itself.

// Example:
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Explanation:
// The function keeps calling itself with smaller values until a base condition is met.
