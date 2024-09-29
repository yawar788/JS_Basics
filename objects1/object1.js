// objects literals 
// The simplest way to create an object in JavaScript is by using an object 
// literal,where key-value pairs are defined within curly braces {}.

// let person = {
//     name: "Yawar Abbas",
//     age: 25,
//     profession: "Engineer"
// };

// Using the Object() Constructor
// JavaScript also provides the Object constructor for creating objects. 
// It’s not commonly used for simple objects but still worth mentioning.

// let person = new Object();
// person.name='Yawar Abbas';
// person.age=22;
// console.log(person);

// Factory Functions
// A factory function is a function that returns an object, allowing you to
//  create multiple similar objects easily without using a class.

// function createPerson(name,age,profession){
//     return {
//         name:name,
//         age: age,
//         profession:profession,
//         greet(){
//             console.log(`hello this is ${this.name}`);
            
//         }
//     }
// }

// let person1=createPerson('yawar abbas',30,'engineer')
// let person2=createPerson('abbas',10,'student')

// person1.greet();



// Object.create() Method
// Object.create() allows you to create a new object with a specified prototype,
//  allowing a more controlled inheritance model.

// let personPrototype={
//     greet(){
//         console.log(`hello this is ${this.name}`);
        
//     }
// }

// let person=Object.create(personPrototype);
// person.name='Yawar Abbas';
// person.greet()



// Property Descriptors
// Every property in a JavaScript object has associated metadata, known as its property 
// descriptor. The descriptor contains information about:

// value: The property's value.
// writable: Whether the value can be changed.
// enumerable: Whether it can be looped over.
// configurable: Whether the property can be deleted or modified.
// You can retrieve these descriptors using Object.getOwnPropertyDescriptor() and modify
//  them using Object.defineProperty().

// let person ={
//     name:'Yawar'
// }

// let descriptor=Object.getOwnPropertyDescriptor(person,'name');
// // console.log(descriptor);

// Object.defineProperty(person,'name',{
//     // writable=false
//     enumerable:false // name cannot be changed
// })

// // person.name='abbas';  // no effect because writable isf false
// // console.log(person.name); // Yawar

// for (const key in person) {
//     console.log(key);
    
// }


let person = {
    name: "Yawar Abbas",
    age: 25
};

// Adding a non-enumerable property
Object.defineProperty(person, 'profession', {
    value: "Engineer",
    enumerable: false  // This makes 'profession' non-enumerable
});

for (let key in person) {
    console.log(key);  // Outputs only 'name' and 'age', not 'profession'
}

console.log(person.profession);  // Output: Engineer

