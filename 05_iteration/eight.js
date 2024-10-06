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
let myNums=[1,2,3,4,4,7];
let filteredNums=myNums.filter((nums)=>nums>4);
console.log(filteredNums)



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
