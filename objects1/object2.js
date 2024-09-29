// Prototypes and Inheritance
// JavaScript uses a prototype-based inheritance model. Every object in JavaScript has
//  an internal link to another object called a prototype. Objects can inherit properties
//  and methods from their prototypes.

// A. Prototype Chain
// When you access a property of an object, JavaScript first looks for that property
//  on the object itself. If it doesn't find it, it looks for it in the object's prototype,
//  and so on, forming a prototype chain.

// let animal1 ={
//     eat(){
//         console.log(`eating`);
        
//     }
// }

// let dog = Object.create(animal1);
// dog.bark=function(){
//     console.log(`barking`);
    
// }

// dog.eat();  // Output: Eating (inherited from animal)
// dog.bark();  // Output: Barking

// Here, dog inherits the eat method from animal through the prototype chain.
// B. __proto__ vs prototype
// __proto__: Refers to an object's actual prototype. You can use it to access or 
// modify the prototype of an instance.
// prototype: Refers to the prototype property of a constructor function. This is 
// used when creating new instances.


// function Animal(){};
EvalError,
// Animal.prototype.eat=function(){
//     console.log(`eating`);
    
// }

// let dog = new Animal();
// dog.eat()
// dog has access to the eat method through Animal.prototype.