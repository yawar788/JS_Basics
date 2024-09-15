// IIFE --> immediately invoke function expression
// iife name is prometed by ban alman 

// normal function
// function chae(){
//     console.log(`DB CONNECTED`);
// }
// chae()

// iffe = function immediately invoke also dont pollute wth global scope
// iife
(function chae(){
    // named iife
    console.log("DB CONNECTED");
})();  // special case for ; context(value) ko rokne k lye use ;

( (name) =>{
    // unnamed iife 
    console.log(`DB CONNECTED TWO ${name}`);
})("Yawar")

