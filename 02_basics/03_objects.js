// singleton
// singleton made from constructor not from literals
// object literals
// Object.create // constructor method, singleton made from it

// const myArr=[0,1,2,3,4];
// console.log(myArr[0]); // 0


// symbol

const mySymbol= Symbol("key123");

const JsUser={
    name:"Yawar",
    // "name":"Yawar" by default
    "full name":"Yawar Abbas",
    age: 21,
    [mySymbol]:"mykey123",
    location:"sukkur",
    email:"yawar-abbas@google.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"] // array
}

// console.log(JsUser.email);
// console.log(JsUser[email]); // error, string error
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser.mySymbol);
// console.log(typeof JsUser[mySymbol]);

JsUser.email="yawar@chatgpt.com";
// Object.freeze(JsUser);
JsUser.email="yawar@microsoft.com";
// console.log(JsUser);

JsUser.greetings=function(){
    console.log("hello js user"); 
}

JsUser.greetingsTwo=function(){
    console.log(`hello, ${this.name}`); 
    // this = same object reference, uses properties under the objectf
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());





