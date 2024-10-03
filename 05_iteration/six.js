// map()
// ap() creates a new array by applying a function to every element of the original array.
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


// reduce()
// What it does:
// reduce() executes a reducer function (that you provide) on each element of the array, 
// resulting in a single output value (e.g., sum, product, or concatenated string).
// Unlike map() and filter(), it doesn't return an array, but rather a single value
//  (number, object, array, string, etc.).

// const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed.
// initialValue (optional): The initial value to use as the accumulator in the 
// first iteration. If omitted, the first element of the array is used as the initial value.

// let numbers = [1,2,3,4];
// let sum = numbers.reduce((acc,num)=>sum+val,0)
// console.log(sum);
// Summing values: You can sum up all the numbers in an array using reduce().

// const prices = [29.99, 19.99, 4.99];
// let totalprize=prices.reduce((total,price)=> total+price,0);
// console.log(totalprize);

// Flattening an array: You can use reduce() to flatten a multi-dimensional array.
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// let flatten=nestedArray.reduce((acc,curr)=>acc.concat(curr));
// console.log(flatten);

// count 
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCount); 
// Output: { apple: 3, banana: 2, orange: 1 }

// Creating a unique array: You can use reduce() to filter out duplicate
//  items in an array.
const numbers = [1, 2, 3, 4, 3, 2, 1];
const uniqueNumbers = numbers.reduce((acc, num) => {
  if (!acc.includes(num)) acc.push(num);
  return acc;
}, []);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4]


// const coding =['js','ruby','java']

// for each return nothing
// const val=coding.forEach( (item)=>{
// // console.log(item);
// return item;

// })
// console.log(val);

// filter 
// const myNums=[1,2,,3,4,5,6,7,8];
// const newNums=myNums.filter( (num)=> num<4 )
// console.log(newNums);

// for each
// const myNums=[1,2,,3,4,5,6,7,8];
// const newNums=[];
// myNums.forEach( (num)=>{
//     if (num>4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// let books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

 

//   let newBooks=books.filter( (bk)=>bk.genre ==='History')


//  newBooks=books.filter( (bk)=>
//   bk.publish >2000 && bk.genre==='History'
// )
// console.log(newBooks);


