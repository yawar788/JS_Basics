// Object.keys()
// This method returns an array of the object’s own enumerable
// property names (keys).

// const car = { brand: 'Toyota', model: 'Camry', year: 2022 };
// console.log(Object.keys(car)); 
// // Output: ["brand", "model", "year"]

// Use case:
// const car ={ brand:'toyota',model:'camry',year:2022}
// Object.keys(car).forEach(key => {
//     console.log(`${key} ${car[key]}`);
    
// });


// Object.values()
// This method returns an array of the object’s own enumerable 
// property values.

// const car = { brand: 'Toyota', model: 'Camry', year: 2022 };
// console.log(Object.values(car)); 
// Output: ["Toyota", "Camry", 2022]


// Use case: This method is particularly useful when you're only
//  interested in the values of an object.

// const score ={math:23,english:20,urdu:20}
// const totalScore=Object.values(score).reduce((total,score)=>total+score,0)
// console.log(totalScore);


// Object.entries()
// This method returns an array of the object’s own enumerable property
// [key, value] pairs

let car ={brand:'toyota',model:'camry',year:2022}
console.log(Object.entries(car));


