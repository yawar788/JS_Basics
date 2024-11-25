// In JavaScript, operators are symbols or keywords that perform operations on values (operands).
// Operators are used to manipulate variables, compare values, and perform calculations. Let's 
// explore the different types of operators in JavaScript with detailed examples:

// 1. Arithmetic Operators
// These operators are used to perform basic arithmetic on numbers.

// Operator	Description	Example
// +	Addition	5 + 3 // 8
// -	Subtraction	5 - 3 // 2
// *	Multiplication	5 * 3 // 15
// /	Division	6 / 2 // 3
// %	Modulus (Remainder)	5 % 2 // 1
// **	Exponentiation	2 ** 3 // 8

// let a = 10, b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.3333...
// console.log(a % b); // 1
// console.log(a ** b); // 1000

// 2. Assignment Operators
// Used to assign values to variables.

// Operator	Description	Example
// =	Assigns a value	x = 10
// +=	Adds and assigns	x += 5 // x = x + 5
// -=	Subtracts and assigns	x -= 5 // x = x - 5
// *=	Multiplies and assigns	x *= 5 // x = x * 5
// /=	Divides and assigns	x /= 5 // x = x / 5
// %=	Modulus and assigns	x %= 5 // x = x % 5

// let x = 10;
// x += 5;  // x = 15
// x *= 2;  // x = 30
// x -= 10; // x = 20
// x /= 4;  // x = 5
// console.log(x); // 5

// 3. Comparison Operators
// These operators compare two values and return a boolean (true or false).

// Operator	Description	Example
// ==	Equal to (value only)	5 == '5' // true
// ===	Strict equal to (value & type)	5 === '5' // false
// !=	Not equal to	5 != '5' // false
// !==	Strict not equal to	5 !== '5' // true
// >	Greater than	5 > 3 // true
// <	Less than	5 < 3 // false
// >=	Greater than or equal to	5 >= 5 // true
// <=	Less than or equal to	5 <= 3 // false

// let num1 = 10, num2 = "10";
// console.log(num1 == num2);  // true (value is the same)
// console.log(num1 === num2); // false (type is different)
// console.log(num1 > 5);      // true
// console.log(num1 <= 10);    // true
// console.log(num1 !== num2); // true

// 4. Logical Operators
// Used to combine conditional statements.

// Operator	Description	Example
// &&	Logical AND (both true)	(x > 5 && x < 15)
// `		`
// !	Logical NOT (inverts boolean value)	!(x > 5)
// let a = 10, b = 20;
// console.log(a > 5 && b > 15);  // true
// console.log(a > 15 || b > 15); // true
// console.log(!(a > 5));         // false
// 5. Bitwise Operators
// These operators perform bit-level operations.

// Operator	Description	Example
// &	AND	5 & 1 // 1
// `	`	OR
// ^	XOR	5 ^ 1 // 4
// ~	NOT	~5 // -6
// <<	Left shift	5 << 1 // 10
// >>	Right shift	5 >> 1 // 2

// console.log(5 & 1);  // 1
// console.log(5 | 1);  // 5
// console.log(5 ^ 1);  // 4
// console.log(~5);     // -6
// console.log(5 << 1); // 10
// console.log(5 >> 1); // 2

// 6. Ternary Operator
// The only conditional operator that takes three operands.

// Operator	Description	Example
// condition ? expr1 : expr2	Returns expr1 if the condition is true, otherwise returns expr2.	x > 5 ? "Yes" : "No"
// let age = 18;
// let result = age >= 18 ? "Eligible to vote" : "Not eligible";
// console.log(result); // Eligible to vote

// 7. Unary Operators
// Operate on a single operand.

// Operator	Description	Example
// +	Converts operand to a number	+"5" // 5
// -	Negates the operand	-5 // -5
// ++	Increment by 1	x++ // x = x+1
// --	Decrement by 1	x-- // x = x-1
// typeof	Returns the type of the operand	typeof "5" // string
// delete	Removes a property	delete obj.prop

// let x = 5;
// console.log(++x);       // 6 (pre-increment)
// console.log(x--);       // 6 (post-decrement)
// console.log(typeof x);  // number

// 8. Special Operators
// a) typeof
// Used to determine the type of a variable or expression.

// console.log(typeof 42);           // "number"
// console.log(typeof "Hello");      // "string"
// console.log(typeof true);         // "boolean"
// console.log(typeof undefined);    // "undefined"
// console.log(typeof null);         // "object" (special case)
// console.log(typeof {});           // "object"
// console.log(typeof function(){}); // "function"
// b) instanceof
// Checks if an object is an instance of a specific class or constructor.

// let arr = [1, 2, 3];
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true
// c) delete
// Used to delete a property from an object.

// let obj = { name: "John", age: 30 };
// delete obj.age;
// console.log(obj); // { name: "John" }
