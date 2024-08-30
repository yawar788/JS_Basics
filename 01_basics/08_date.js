// Date 

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(1970,0,23);
// let myCreatedDate = new Date(1970,0,23,5,3);
// let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("01-01-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp= Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);

// `` string interpolation
// `${newDate.getDay()} and the time is`

newDate.toLocaleDateString("default",{
    weekday:"narrow",
    timezone: '' 
})





