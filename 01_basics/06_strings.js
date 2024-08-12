const repoCount=50;
const name=50;

// console.log("Hello my name is"+name+"and my repocount is "+repoCount);
// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);


const gameName="PUBG-YAWAR-COM";
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.toLocaleLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("P"));

const newString=gameName.substring(0,2);
console.log(newString);

const anotherString=gameName.slice(-3,2);
console.log(anotherString);

const toTrimString="    yawar    ";
console.log(toTrimString);
console.log(toTrimString.trim());

// The trim() method of String values removes whitespace from both ends of this string 
// and returns a new string, without modifying the original string.
// To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const url ="https://yawarabbas.com/yawar%20meerani";
console.log(url.replace("%20","-"));
console.log(url.includes("yawarabbas"));

console.log(gameName.split("-"));












