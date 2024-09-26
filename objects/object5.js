// Built-in JavaScript Object Methods
//  JavaScript provides several built-in methods for working with objects,
//  arrays, strings, and other data types.

let numbers=[1,2,4,5];
// numbers.push(7);
// numbers.pop();
// numbers.shift();
// numbers.unshift(0);
// console.log(numbers);


// exaples of string methods
// let text = "Hello, world!";
// console.log(text.toUpperCase());  // Output: HELLO, WORLD!
// console.log(text.lowerCase());
// console.log(text.indexOf("world"));  // Output: 7
// console.log(text.slice(0, 5));  // Output: Hello



// Arrow Functions as Methods
// Arrow functions have a different behavior with this. Unlike regular functions,
// arrow functions don’t have their own this. Instead, they inherit this from the surrounding context.

// let person = {
//     name: "Yawar Abbas",
//     greet: () => {
//         console.log("Hello, my name is " + this.name);  // `this` is not bound to the `person` object here
//     }
// };

// person.greet();  // Output: Hello, my name is undefined
// this example, this.name is undefined because arrow functions don't bind their own this.
//  Instead, it refers to the surrounding lexical context, which is usually the global object in non-strict mode.



// Method Binding
// In JavaScript, the value of this inside a method can sometimes become "lost" when the 
// method is passed as a reference. To ensure that this remains bound to the correct object, you can use the bind() method.
let person = {
    name: "Yawar Abbas",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

let greetCopy = person.greet;
// greetCopy();  // Output: Hello, my name is undefined (lost `this` binding)

let boundGreet = person.greet.bind(person);
// boundGreet();  // Output: Hello, my name is Yawar Abbas

// The bind() method returns a new function where this is permanently
//  bound to the specified object (person in this case).







