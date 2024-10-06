// map()
// map() creates a new array by applying a function to every element of the original array.
// It transforms each element in the array but doesn't alter the original array.
// The resulting array has the same length as the original array. 

// const newArray = array.map(callback(currentValue, index, array));

// callback is the function that will be called on each element.
// currentValue: The current element being processed.
// index: The index of the current element.
// array: The array on which map() was called (optional)

// let array=[1,2,3, 4];
// let double = array.map((name=>name*2));
// console.log(double);

// const names = ['Alice', 'Bob', 'Charlie'];
// let upper = names.map((name=>name.toUpperCase()));
// console.log(upper);

// let names=[{firstName:'yawar', lastName:'abbas'},{firstName:'naseem',lastName:'abbas'}]
// let fulnames=names.map(name=>`${name.firstName} : ${name.lastName}`)
// console.log(fulnames);
// let nums = [1,2,3,4,5];
// // let newNums= nums.map((num)=>num+10);

// let newNums=nums
//                 .map((num)=>num * 10)
//                 .map((num)=>num + 1)
//                 .filter((num)=> num<50)
// console.log(newNums);





