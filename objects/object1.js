//      <---- objects --> 
// core data type 
// used to store collection of data 
// collection of key-value pairs 
// key --> properties
// value --> any data types (function, object)



// exaple-1
const person ={
    name:'Yawar Abbas',
    age:25,
    profession:'engineer'
}
// console.log(person);



// accessing properties
// two ways
// 1. dot notation --> objectName.property
// 2. bracket notation --> objectName['property']

// 1
// console.log(person.name);
// console.log(person.age);
// console.log(person.profession);

// // 2
// console.log(person['name']);
// console.log(person['age']);
// console.log(person['profession']);



// adding and modifying properties
person.country='Pakistan'; // added 
person.age=26;             // modify
// console.log(person);



// deleting properties 
delete person.country;
// console.log(person);



// nested objects
const car ={
    mode:'toyota corolla',
    year:'2020',
    owner:{
        name:'yawar abbas',
        age:25
    }
}
// console.log(car.owner.name);
// console.log(car['owner']['name']);