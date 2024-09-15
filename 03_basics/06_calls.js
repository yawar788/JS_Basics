// js execution context --> how js execute a file

//  code --> runs in two phase
// 1. global/envirinment ec
// 2. function ec 
// 3. eval ec --> apne apn m aik propery hota ha aik global object ki 

// how js code execute runs in two phases 
// 1. memory creation phase = variables/constants ko jaga alot hoti h execute n hoti 
// 2. execution phase
// 

let val1=10;
let val2=12;

function add(num1,num2){
    total=num1+num2;
    return total;
}

let result1=add(val1,val2);
let result2=add(10,32);

// 1. global ec(this)

// first cycle
// 2. memory phase 
// val1 --> undefined
// val2 --> undefined
// add --> defination
// result1 --> undefined
// result2 --> undefined

// second cycle 
// val1 --> 10
// val2 --> 12
// result1 --> 15

// add -->  make separate executin context 
// --> new variable environment + execution thread // ye delete itna krne k bad dlt bhi ho jata h 
// jitni bar function execute utni bar aik new box 
// create hota h jisko bote he new execution context 
// ab is sand box m 1 and 2 repeat kre ge 

// sand box-1 --> result1
// 1. memory phase 
// val1 --> undefined 
// val2 --> undefined
// totol --> undefined 

// 2. eceution phase 
// num1 --> 10
// num2 --> 12
// total --> 22
// an total global/parent executional context me chala jae ga 

// sand box-2 --> result2 --> NVE+thread 
// same process repeat


// callstack
// methods 
// one() , two() , three()
// lifo = last in fost out
 
function one(){
    console.log('one');
    two()
}
function two(){
    console.log('two');
    three()
}
function three(){
    console.log('three');
    
}

one()
two()
three()