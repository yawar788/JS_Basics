// array

// The Array object, storing a collection of multiple items 
// under a single variable name

// resizable, mix data types.
// array elements can be accessed using nonnegative integers 
// zero-indexed
// copy = shallow, deep 

 let myArr =[0,1,2,3,4,5];

 let myHeroes= ["Tony Shark","Iron Man"];
 let myArr2= new Array(1,2,3,4);
 //  console.log(myArr[3]);

//  copies
//  shallow copy = properties share the same reference point 
//  deep copy = does not share the same reference point 

 // array methods
// myArr.push(6); // add value 
// myArr.push(7);
// myArr.pop(); // removes last value
// myArr.unshift(9); // add value to start 
// myArr.shift();
// console.log(myArr.includes(9)); // return type boolean 
// console.log(myArr.indexOf(9)); // if not a value at given index -1
// console.log(myArr.indexOf(3)); 
// console.log(myArr);

// let newArr= myArr.join(); // join() = bind and also convert in strings
// console.log(myArr);
// console.log(typeof newArr);

// slice, splice    
console.log("A ", myArr);

let mynew1=myArr.slice(1,3);

console.log(mynew1);
console.log("B ", myArr);

const mynew2= myArr.splice(1,3);
console.log("C ",myArr);
console.log(mynew2);





 
