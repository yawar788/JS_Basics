// const temprature=23;
// const userIsLoggedIn=true;

// if (temprature<30) {
//     console.log('temprature less than 50');

// } else  {

//     console.log("temprature is greater than 50");
// }

// console.log("Execute");

// <, >, >=, <=, ==, !=, ===, !==

// var --> always global scope
// let, const --> blocked scope
// const score=200;

// if (score>100) {
//     // var power="fly";
//     const power="fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


// const balance =1000;

// implicit scope
// if(balance>500) console.log("test"),console.log("test2");

// if (balance<500) {
//     console.log("less than 500");
// } else if (balance<750) {
//     console.log("less than 750");
// }else if (balance<900) {
//     console.log("less than 900");
// }else{
//     console.log("less than 1000");
// }


const userIsLoggedIn=true;
const debiCard=true;
const loggedInfromGoogle=false;
const loggedInfromEmail=true;


if(userIsLoggedIn && debiCard){
    console.log('allowed shopping');
}

if(loggedInfromGoogle || loggedInfromEmail){
    console.log("user logged in");
}   