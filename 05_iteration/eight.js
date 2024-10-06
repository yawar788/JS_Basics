// The filter() method in JavaScript is used to create a new array with 
// all elements that pass a specified test implemented by a provided function.
// filter() is designed to select elements based on certain conditions, 

// syntax
// const newArray = array.filter(callback(currentValue, index, array));
// callback: The function that tests each element of the array.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The original array that filter() was called on.
// newArray: A new array with all elements that pass the test. If no elements pass,
//  it returns an empty array.

// Key Characteristics of filter()
// The filter() method does not mutate the original array but instead creates a new one.
// It returns a new array with only the elements for which the callback function returns true.
// If no elements pass the test, it will return an empty array.

// Example 1: Filtering Numbers Greater Than a Certain Value
// let myNums=[1,2,3,4,4,7];
// let filteredNums=myNums.filter((nums)=>nums>4);
// console.log(filteredNums)
// Explanation: Here, filter() is used to return only the numbers greater than 10.
//  Each element is checked, and only those that satisfy the condition number > 10 
// are included in the new array.

// example-2 filtering even nums 
// const myNums=[1,12,3,4,5,65,5,8]
// const evnNums=myNums.filter((nums)=>nums%2===0);
// console.log(evnNums);

// example-3 filtering odd nums 
// const myNums=[1,12,3,4,5,65,5,8]
// const oddNums=myNums.filter((nums)=>nums%2===1);
// console.log(oddNums);

// Example 4: Filtering an Array of Objects
// const people=[
//     {name:'Yawar', age:24},
//     {name:'ali', age:28},
//     {name:'zaman', age:26}
// ]

// const young=people.filter((person)=>person.age<25)
// console.log(young);

// Example 4: Filtering Unique Elements
// const myNums=[1,2,3,4,4,2,4,2,4,5,6,7,8,8,6];
// const unikNums=myNums.filter((nums,index,array)=>array.indexOf(nums)===index);
// console.log(unikNums);

// Explanation:
//  In this example, filter() is used to create an array of unique numbers.
//  For each element, it checks if the current element’s index is the same as the first
//  occurrence of that element in the array. If it is, the element is included; otherwise,
//  it’s filtered out as a duplicate.

// Example 5: Filtering Falsy Values
// const mixArray=['a','',3,4,'yawr',true,undefined,null,0];
// const truthy =mixArray.filter(Boolean);
// console.log(truthy);

// Explanation: Boolean is a built-in JavaScript function that returns true or false 
// based on whether a value is truthy or falsy. Here, filter() removes all falsy
//  values (0, false, '', null, undefined), leaving only truthy ones.

// Example 6: Filtering Complex Conditions
// const products = [
//     { name: 'Laptop', price: 1000, inStock: true },
//     { name: 'Phone', price: 500, inStock: false },
//     { name: 'Tablet', price: 300, inStock: true },
//     { name: 'Monitor', price: 200, inStock: true }
//   ];

//   const affordableProduct=products.filter((product)=>product.price<=500&&product.inStock);
//   console.log(affordableProduct);

// Explanation: This example shows how filter() can be used with multiple conditions. 
// The callback function checks if a product’s price is 500 or less and if it’s inStock. Only products that meet both conditions are included in the new array.
  
// Example 7: Removing Elements Based on a Condition javascript
// const myNums=[-1,3,5,6,7,9,0,3,-4,-5,-43,-5,-35243,-124,-12,-0,NaN,null,undefined];
// const positiveNums=myNums.filter((nums)=>nums>=0);
// console.log(positiveNums);

// Example 8: Finding Multiple Elements in a String Array
// const fruits=['banana','apple','grapes','pineapple'];
// const wordwithApple=fruits.filter((word)=>word.includes('apple'));
// console.log(wordwithApple);

// Explanation: 
// In this example, the filter() method is used to find 
// all words that contain the substring 'apple'. The .includes() method returns true if the word contains 'apple', so only words matching this condition are included in the result.





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
