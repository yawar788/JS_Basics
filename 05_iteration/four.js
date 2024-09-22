// for in loop

const myobj={
    js:'javascript',
    cpp:'c++',
    swift:'swift by apple'
}

for (const key in myobj) {
    console.log(`${key} short for ${myobj[key]}`);
    
}

// array
const myArr=['rb','py','cpp','js']

for (const key in myArr) {
    console.log(`${myArr[key]}`);
    
}