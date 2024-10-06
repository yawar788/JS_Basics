// let nums = [1,2,3,4,5];
// // let newNums= nums.map((num)=>num+10);

// let newNums=nums
//                 .map((num)=>num * 10)
//                 .map((num)=>num + 1)
//                 .filter((num)=> num<50)
// console.log(newNums);

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



