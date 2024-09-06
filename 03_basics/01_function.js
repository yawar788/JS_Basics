// function-part 1
// function - some lines of code close in pacakage 
// takes copies and use it

// defination

// 1
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

// 2
// function addTwoNum(num1,num2){
// console.log(num1+num2);
// }

// 3
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

// 4
// function LoginUserMessage(username="sam"){
    // if(username===undefined){
    //     console.log("Please enter a username");
    //     return // no code execute after it 
    // }

    // 5
    // if(!username){
    //     console.log("Please enter a username");
    //     return // no code execute after it 
    // }
    // return `${username} just logged in `
// } 

// console.log(LoginUserMessage("Yawar"));
// console.log(LoginUserMessage());

// function-part 2
// shopping cart --> multiple items added in cart concept 
// rest operator 

// rest / spread operator --> ...
// diff --> depend on use case 
// 6 
// function calculateCartPrice(val1,val2,val3,...num1){
//     return num1;
// }

// console.log(calculateCartPrice(22,22,333,2));
// object 
const user={
    name: "Yawar Abbas",
    prices:200
}

function handleObject(anyObject){
    console.log(`usernmae is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    name:"Alice",
    price:344
}); // direct pass object 


// array 
const myNewArr=[1,2,3,4,5];
function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue([4,3,4,5])); // direct array pass 





