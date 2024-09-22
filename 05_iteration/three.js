// data base value 
// ['','','']  
// [{},{},{}]

// syntax
// for (variable of iterable)
//     statement

// const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

// for of 
let arr=[1,2,3,4];
for(const num of arr){
    // console.log(num);

}


let greeting = "hello yawar"
for (const greet of greeting) {
    // console.log(`Each char is : ${greet}`);
    if (greet==' ') {
        // console.log('sapce detected');
        break
    }
    
    
}

// map
// map is object
// like arrays 
// take unique value 
// follow order
// iteratable


const map=new Map();
// map.set('name','yawar');
// map.set('age','24');
// map.set('address','street-2 new pind pathan colony sukkr');
// console.log(typeof map);

for (const [key,value] of map) {
    // console.log(key,':-',value)
}

// object
// not iteratable

const myarr={
    'gam1':'pubg',
    'game2':'minimilitia',
    'game2':'candycrash',
    'game3':'subway'
    
}

// for (const [key,value] of myarr) {
    // console.log(key,':-',value)
    
// }