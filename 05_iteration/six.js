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

let names=[{firstName:'yawar', lastName:'abbas'},{firstName:'naseem',lastName:'abbas'}]
let fulnames=names.map(name=>`${name.firstName} : ${name.lastName}`)
console.log(fulnames);



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


