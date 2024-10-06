// The reduce() method in JavaScript is a powerful array method that 
// executes a reducer function on each element of the array, resulting in a single output value.

// Syntax 
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// callback: The function to execute on each element in the array.
// accumulator: The accumulated value from the previous iteration 
// (or the initialValue on the first iteration).
// currentValue: The current element in the array being processed.
// index (optional): The index of the current element being processed in the array.
// array (optional): The original array on which reduce() was called.
// initialValue (optional): A value to use as the first argument to the first call of 
// the callback function. If no initial value is supplied, the first element in the array 
// is used as the initial accumulator value, and the iteration starts from the second element.

// sum
// let num = [1,2,3,4,4]
// let sum=num.reduce((acc,cv)=>{
//     return acc+cv
// })

// console.log(sum);

// 1st iteration: accumulator is 0 (initial value), currentValue is 1, so the new accumulator is 1.
// 2nd iteration: accumulator is 1, currentValue is 2, so the new accumulator is 3.
// 3rd iteration: accumulator is 3, currentValue is 3, so the new accumulator is 6.
// 4th iteration: accumulator is 6, currentValue is 4, so the new accumulator is 10.
// 5th iteration: accumulator is 10, currentValue is 5, so the new accumulator is 15.

// max value
// let num =[1,2,3,5,6,6];
// let maxNum=num.reduce((acc,cv)=>Math.max(acc,cv))
// console.log(maxNum);

// flatten array
let UnflattenArray=[[1,2],[,3,4],[5,6]]
let flatArray=UnflattenArray.reduce((acc,cv)=>acc.concat(cv),[])
console.log(flatArray);

// const nestedArrays = [[1, 2], [3, 4], [5, 6]];
// const flatArray = nestedArrays.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]



const myNums = [1,2,3];

// let myTotal=myNums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`)    
//    return acc+currval},0)

// let myTotal=myNums.reduce(function(acc,currval){
//     return acc+currval
// })

// console.log(myTotal);

// let shoppingCart=[
//     {
//         courseName:'js course',
//         prize:199
//     },
//     {
//         courseName:'python course',
//         prize:299
//     },
// ];

// let priceToPay=shoppingCart.reduce((acc,item)=>acc+item.prize,0)
// console.log(priceToPay);


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


