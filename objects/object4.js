// understanding method in objects
// methods are functions that are stored asa value in object propety
// 
//  let person ={
//     name:'yawar',
//     age:12,
//     greet:function(){
//         console.log(`hello my name is ${this.name} `);
        
//     }
//  }

//  person.greet();

//  Here, greet is a method of the person object.
//  this keyword refers to the current object (person),
//  allowing you to access the object’s properties inside the method.


// this Keyword in Methods
// The this keyword plays an essential role in methods. It refers to 
// the object that is executing the method. The value of this depends on the
//  context in which the method is invoked.

let car = {
    model: "Toyota",
    year: 2020,
    describe: function() {
        console.log("This car is a " + this.year + " " +this.model);
    }
};

// car.describe();  // Output: This car is a 2020 Toyota
// However, this can behave differently in certain situations (like in event
// handlers or with arrow functions), as discussed later.



// add method 
let person = {
    name: "Yawar Abbas"
};

// Adding a method after the object is created
person.sayHello = function() {
    console.log("Hello, I am " + this.name);
};

// person.sayHello();  // Output: Hello, I am Yawar Abbas
// console.log(person);

