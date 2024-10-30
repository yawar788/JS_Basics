// Advanced Methods

// map(): Creates a new array with the results of calling a function on
// every element in the array. This method doesn’t change the original array.
const numbers=[1,2,3,4];
const double=numbers.map((num)=>num*2)

// filter(): Creates a new array with elements that pass a test 
// (provided by a callback function).
const evenNum=numbers.filter((num)=>{
     return num%2===0;
      
});

// reduce(): Reduces an array to a single value by applying a function to each
// element and accumulating the result.
const sum=numbers.reduce((accumulator,currentVal)=>accumulator+currentVal,0);
console.log(sum);

// find(): Returns the first element in the array that satisfies a provided test
// function. Otherwise, it returns undefined.
const found = numbers.find((num)=>num>3);

// findIndex(): Returns the index of the first element in an array that satisfies 
// the provided test function. Returns -1 if no element is found
const index=numbers.findIndex((num)=>num>3);

// every(): Tests whether all elements in the array pass the test implemented 
// by the provided function. Returns true or false.
const allPositive=numbers.every((num)=>num>0);

// some(): Tests whether at least one element in the array passes the test 
// implemented by the provided function.
const hasNegative = numbers.some(num => num < 0); // false

// sort(): Sorts the elements of an array in place and returns the sorted array.
const sorted = numbers.sort((a,b)=>b-a) // sort in descending order
const sorted = numbers.sort((a,b)=>a-b) // sort in descending order 
const sorted = numbers.sort() // sort alphabatically

// flat(): Creates a new array with all sub-array elements concatenated into 
// it recursively up to the specified depth.
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat(2); // [1, 2, 3, 4, 5, 6]

const nested = [1, [2, 3], [4, [5,[2,1,[1,3]],6]]];
const flattened = nested.flat(4); 

// includes(): Determines whether an array includes a certain element, returning true or false.
const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits.includes('banana')); // true

// fill(): Fills all the elements of an array from a start index to an end index with a static value.
const filled = new Array(3).fill(0); // [0, 0, 0]

// copyWithin(): Copies a part of an array to another location within the same array.
const copyWithinExample = [1, 2, 3, 4, 5];
copyWithinExample.copyWithin(1, 3); // [1, 4, 5, 4, 5]

// Array Destructuring: You can unpack values from arrays into variables.
const [first, second] = [1, 2, 3];
console.log(first, second); // 1 2\

// Array Spread Operator (...): Allows expanding an array into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]








