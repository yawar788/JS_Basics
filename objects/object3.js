// Object.create() --> method 
// let personProto = {
//     greet: function() {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// let person1 = Object.create(personProto);
// person1.name = "Yawar Abbas";
// person1.greet();  // Output: Hello, my name is Yawar Abbas



// Iterating Over Object Properties
// for in loop
// let person = {
//     name: "Yawar Abbas",
//     age: 25,
//     profession: "Engineer"
// };

// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }



// Object Destructuring
// allows you to extract properties from an object and assign 
// them to variables in a single step.
// let person = {
//     name: "Yawar Abbas",
//     age: 25,
//     profession: "Engineer"
// };


// console.log(person.name); x x x
// console.log(person.age);  x x x dont need 

// let {name,age}=person;
// console.log(name);
// console.log(age);



// spread operator
// used to copy or merge objects
// let person1 ={name:'yawar',age:'pak',}
// let person2 ={name:'yawar',age:'pak',}

// let mergeObjects={...person1,...person2};
// console.log(mergeObjects);



// Shallow Copy /  Deep Copy
// Shallow Copy: Copies only references to nested objects.
// Deep Copy: Recursively copies all objects.

// let person1 = { name: "Yawar Abbas", address: { city: "Lahore" } };
// let person2 = { ...person1 };

// person2.address.city = "Karachi";
// console.log(person1.address.city);  // Output: Karachi (because it's a shallow copy)

// For deep copy, you would need to use libraries like Lodash
//  or techniques like JSON.parse(JSON.stringify(object))



