Control flow in JavaScript determines the sequence in which code statements are executed. 
By default, JavaScript executes code statements from top to bottom, but control flow 
structures like conditionals, loops, and function calls allow you to influence this sequence.
Here's a detailed explanation with examples:

1. Sequential Execution
By default, JavaScript executes code line by line.
console.log("Step 1"); // Executes first
console.log("Step 2"); // Executes second
console.log("Step 3"); // Executes third

2. Conditional Statements
Conditionals allow your code to make decisions based on conditions.

if Statement
Executes a block of code if the condition is true.
  
let age = 20;
if (age >= 18) {
    console.log("You are an adult."); // Executes if age >= 18
}

if...else Statement
Provides an alternative block if the condition is false.

let time = 15;
if (time < 12) {
    console.log("Good Morning!");
} else {
    console.log("Good Afternoon!");
}

if...else if...else
Checks multiple conditions in sequence.

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}

Ternary Operator
A shorthand for if...else.
  
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

3. Switch Statement
Tests a variable against multiple values.

let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple selected.");
        break;
    case "banana":
        console.log("Banana selected.");
        break;
    default:
        console.log("Unknown fruit.");
}

4. Loops
Loops are used to execute a block of code multiple times.

for Loop
Repeats a block of code a specific number of times.

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

while Loop
Executes as long as the condition is true.

let count = 0;
while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
}

do...while Loop
Executes the block at least once, even if the condition is false.

let num = 0;
do {
    console.log(`Number is ${num}`);
    num++;
} while (num < 2);

for...of Loop
Iterates over iterable objects like arrays.

let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

for...in Loop
Iterates over object properties.

let car = { make: "Toyota", model: "Corolla", year: 2020 };
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}

5. Break and Continue
Control the flow inside loops.

break
Exits the loop entirely.
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log(i);
}

continue
Skips the rest of the loop iteration and moves to the next iteration.
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}

6. Exception Handling
Manages errors gracefully with try...catch.
try {
    let result = 10 / 0; // No error, but result is Infinity
    console.log(result);
    
    JSON.parse("invalid JSON"); // This will throw an error
} catch (error) {
    console.log("An error occurred:", error.message);
} finally {
    console.log("Execution complete.");
}

7. Function Control Flow
Functions allow you to encapsulate code and control the flow with return.
function calculateGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    return "C";
}
console.log(calculateGrade(85)); // Output: B

8. Nested Control Flow
Control flow structures can be nested for complex logic.
let data = [5, 8, 12];

for (let number of data) {
    if (number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}
