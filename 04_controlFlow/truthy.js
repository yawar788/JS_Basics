// const userEmail="y@yawar.ai";
const userEmail=[];


if (userEmail) {
    console.log("got the email");
}else{
    console.log("dont got");
}

// falsy value
// false, 0, -0, BigInt 0n, null, undefined, "", NaN

// truthy values 
// "0", "false", " ", {}, [], function(){}/empty function 

if(userEmail.length===0){
    console.log("Array is empty")
}


const emptyObj={};

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");  
}

// false=='' --> true
// false==0 --> true
// false==0 --> true
// 0=='' --> true


// nullish coalescing operator(??) : null/undefined

let val1l;
// val1=5??10;
// val1=null??10;
// val1=undefined??15;
val1=null??5??10;


console.log(val1);


// ternary operator

// condition?true:false
const iceTeaPice=100;
iceTeaPice<=80?console.log("less"):console.log("greater");


