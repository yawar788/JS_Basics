// scopes {}
// if {} increase scope increase 
// let, var, const 
// scope = function, if else 

// var c =300;
var a =300;

// global scope  
// scope is diff in node environment and in browser console  
// mostly var is not used 
// value in block scope should not go outside
// value in global scope is available inside block scope 


if(true){
    let a = 10;
    const b = 20;
    // var c = 30;
    // this is a scope 
    // bolck scope 
    console.log("inner:",a);
       
}

console.log("outside: ",a);
// console.log(b);
// console.log(c);

