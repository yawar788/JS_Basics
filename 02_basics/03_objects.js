// singleton
// object literals
// Object.create // constructor method, also make singleton

// symbol

const mySymbol= Symbol("key123");

const JsUser={
    name:"Yawar",
    "full name":"Yawar Abbas",
    age: 21,
    [mySymbol]:"mykey123",
    location:"sukkur",
    email:"yawar-abbas@google.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"]
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
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());





