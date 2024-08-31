const marvel_heros=["Marvel", "Thor","Iron Man"];
const dc_heros=["Batman", "Superman","flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);

// spread operator values

const allNewHeros=[...marvel_heros,...dc_heros];
// console.log(typeof allNewHeros);

const array1=[1,2,3,[4,5,6],7,[7,6,[4,5]]];
const array2=array1.flat(Infinity);
// console.log(array2);

// console.log(Array.isArray("Yawar Abbas"));
// console.log(Array.from("Yawar Abbas"));
// console.log(Array.from({name:"Yawar Abbas"})); // interesting 

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));






