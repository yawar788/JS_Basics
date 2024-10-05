// let nums = [1,2,3,4,5];
// // let newNums= nums.map((num)=>num+10);

// let newNums=nums
//                 .map((num)=>num * 10)
//                 .map((num)=>num + 1)
//                 .filter((num)=> num<50)
// console.log(newNums);

const myNums = [1,2,3];

// let myTotal=myNums.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`)    
//    return acc+currval},0)

// let myTotal=myNums.reduce(function(acc,currval){
//     return acc+currval
// })

// console.log(myTotal);

let shoppingCart=[
    {
        courseName:'js course',
        prize:199
    },
    {
        courseName:'python course',
        prize:299
    },
];

let priceToPay=shoppingCart.reduce((acc,item)=>acc+item.prize,0)
console.log(priceToPay);



