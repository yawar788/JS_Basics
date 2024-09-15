// this= refer to current context
// scope k andr jitne bhi variables hen access kr skte ho this use kr k 
// global object in browser i window object


// object-1

const user={
    username:"Yawar Abbas",
    price: 199,
    welcomeMessage:function(){
        // console.log(`${username} , welcome to website`); // without this error
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        

    }
}

// user.welcomeMessage() ; 
// user.username="same" ;
// user.welcomeMessage();

// console.log(this); // {}


// function chae(){
//     let username="yawar";
//     console.log(this.username);
//     // jb function k andr this use kre ge to 
//     // boht sari value ab print hogi 
// }

// chae();


// different ways to write functions

// const chai=function(){
//     let username="yawar";
//     console.log(this.username);
// }

// const chai=()=>{
//     let username="yawar";
//     console.log(this);
// }
// chai();

// const addTwo=(num1,num2)=>{
// return num1+num2;
// }
// const addTwo=(num1,num2)=> num1+num2;
// const addTwo=(num1,num2)=> (num1+num2) ;
const addTwo=(num1,num2)=> ({username:"yawar"}) ;


console.log(addTwo(1,2));
