// for in loop

const myobj={
    js:'javascript',
    cpp:'c++',
    swift:'swift by apple'
}

for (const key in myobj) {
    // console.log(`${key} short for ${myobj[key]}`);
    
}

// array
const programing=['rb','py','cpp','js']

for (const key in programing) {
    // console.log(`${programing[key]}`);
    
}




const map=new Map();
map.set('name','yawar');
map.set('age','24');
map.set('address','street-2 new pind pathan colony sukkr');
// console.log(typeof map);

for (const key in map) {
   console.log(key);
   
}