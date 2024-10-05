let nums = [1,2,3,4,5];
// let newNums= nums.map((num)=>num+10);

let newNums=nums
                .map((num)=>num * 10)
                .map((num)=>num + 1)
                .filter((num)=> num<50)
console.log(newNums);


