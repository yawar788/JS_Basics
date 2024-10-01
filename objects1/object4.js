// Use case: It’s great for converting objects to maps, or looping
//  through an object with both key and value.

// const person = { name: 'John', age: 30, city: 'New York' };
// Object.entries(person).forEach(([key, value]) => {
//     console.log(`${key}: ${value}`);
// });
// Output:
// name: John
// age: 30
// city: New York

// Object.assign()
// This method copies all enumerable own properties from one
//  or more source objects to a target object.

// let target = {a:1,b:2,c:3};
// let source={d:4,e:5};

// let result1 =Object.assign(target,source);
// let result2 = {...target,...source};
// console.log(result2);


// Object.assign() is used for merging objects or creating shallow
//  copies of objects.
// If a property in the target object already exists, it will be
//  overwritten by the properties in the source object(s).


const obj1 = { name: 'Alice', age: 25 };
const obj2 = { age: 30, city: 'Paris' };
const merged = Object.assign({}, obj1, obj2);
console.log(merged); 
// Output: { name: 'Alice', age: 30, city: 'Paris' }
