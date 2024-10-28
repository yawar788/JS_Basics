const coding =['js','ruby','java']

// coding.forEach(function (val){
// console.log(val);
// })

// coding.forEach((val)=>{
// console.log(val);
// })

// function printMe(num){
//     console.log(num);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arrList)=>{
// console.log(item,index,arrList);

// })


const myCoding=[
    {
        langName:'javascript',
        fileName:'js'
    },
    {
        langName:'cpp',
        fileName:'cpp' 
    },
    {
        langName:'python',
        fileName:'py'
    },
]

myCoding.forEach( (item)=>{
console.log(item.fileName);

})
