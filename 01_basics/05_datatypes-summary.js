const score=100;
const scoreValue=100.3;

const isLoggedIn = false;
const outsideTemp= null;  
let userEmail;
const id= Symbol("123");
const anotherId= Symbol("123");

// console.log(id===anotherId);
// const bigNumber=2131231243124421421n;

const names=["Ali","Naseem"];
let Obj={
    name:"yawar",
    age:20,
    city:"sukkur"
}

let myFunction=function(){
    console.log("Hello function");
    
}
// myFunction();

// console.log(typeof names);







// primitive 
// non-primitive/reference type

// 7 types: string, number, boolean, null, symbol, bigint
// Reference (non primitive)

// arrays, objects, functions
// js is dynamically typed 

// Question:
// Is JavaScript a statically or a dynamically typed language?

// Quick answer:
// JavaScript is a dynamically typed language, but TypeScript is a statically typed language.

// Longer answer:
// In dynamically typed languages all type checks are performed in a runtime, only when your 
// program is executing. So this means you can just assign anything you want to the variable and 
// it will work.

//***************************** Memory In JS ******************************** 

// stack(primitive) --> when using stack you get copy and changes be there
// heap(non-primitive) --> when using heap you get copy and changes be in reference

let name1="yawar";
let nameChange=name1;
nameChange="yawarabbas"
// console.log(name1);
// console.log(nameChange);

let userOne={
    email:"user@google.com",
    city:"usercity"
}

let userTwo = userOne;
userTwo.email="yawar@google.com";

// console.log(userOne.email);
// console.log(userTwo.email);





