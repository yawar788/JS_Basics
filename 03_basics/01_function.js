// function - some lines of code close in pacakage 
// takes copies and use it

// defination
// function sayMyname(){

// console.log("a");
// console.log("b");
// console.log("b");
// console.log("a");
// console.log("s");
// }

// sayMyname -->  reference
// sayMyname() // --> execution


// add two nums 

// function addTwoNum(num1,num2){
// console.log(num1+num2);

// }

// function addTwoNum(num1,num2){
//    let result =num1+num2;
//    return result;
//    return num1+num2;
// if return then value can be save in varizle 
    // console.log("yawar"); // not execute
    
    // }

// addTwoNum(1,2);

// const result=addTwoNum(1,4);
// console.log("result:",result); // undefined   

function LoginUserMessage(username="sam"){
    // if(username===undefined){
    //     console.log("Please enter a username");
    //     return // no code execute after it 
    // }

    if(!username){
        console.log("Please enter a username");
        return // no code execute after it 
    }
    return `${username} just logged in `
} 

// console.log(LoginUserMessage("Yawar"));
console.log(LoginUserMessage());

 

