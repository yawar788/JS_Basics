// Object.freeze()
// This method freezes an object, preventing new properties from being added, 
// existing properties from being removed, and values of existing properties from being changed.

const obj = { name: 'Alice', age: 25 };
Object.freeze(obj);
obj.age = 30; // This will not change the age property
console.log(obj.age); 
// Output: 25
// Object.freeze() is useful for creating immutable objects.

const config = { apiUrl: 'https://example.com', timeout: 5000 };
Object.freeze(config);
config.timeout = 3000; // This line will have no effect
console.log(config.timeout); 
// Output: 5000


// Object.seal()
// This method seals an object, preventing new properties from being added 
// and marking all existing properties as non-configurable. However, values 
// of existing properties can still be modified.

const obj = { name: 'Alice', age: 25 };
Object.seal(obj);
obj.age = 30; // Modifies the age
delete obj.name; // Fails silently or throws an error in strict mode
console.log(obj); 
// Output: { name: "Alice", age: 30 }
// Use case: You might use Object.seal() when you want to ensure that no 
// new properties are added to an object but still allow modification of existing properties.


// Object.create()
// This method creates a new object, using an existing object as the prototype 
// of the newly created object.

const personPrototype = { greet() { console.log('Hello!'); } };
const john = Object.create(personPrototype);
john.name = 'John';
console.log(john.greet()); 
// Output: "Hello!"


const carPrototype = { start() { console.log('Car started'); } };
const myCar = Object.create(carPrototype);
myCar.model = 'Camry';
myCar.start(); 
// Output: "Car started"


// Object.is()
// This method determines whether two values are the same value
//  (similar to === but with a few differences, such as treating NaN as equal to NaN).

console.log(Object.is(NaN, NaN)); // Output: true
console.log(Object.is(0, -0));    // Output: false
console.log(Object.is(5, 5));     // Output: true
// Object.is() is particularly useful when you need precise equality
//  checks, especially with special cases like NaN and -0.