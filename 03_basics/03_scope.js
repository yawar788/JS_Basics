// nested scope 
// child can access to parents 
// dom = document object model 
// manupulate html webpage by js 
// lind by line execution, means if error the program stop there 
// closure, closure gives access to its outer function 


function one(){

    const user="Yawar";

    function two(){

        const website="youtube";

        console.log(user);

    }  

    // console.log(website);

    // two();

}

one();


if(true){
    const user="Yawar";
    if(user==="Yawar"){
        const website =" youtube";
        // console.log(user + website);
        
    }

    // console.log(website);
    
}

// console.log(user);


// interesting 
console.log(addOne(5));
function addOne(num){
    return num +1;
}



addTwo(5);
const addTwo=function(num){
    return num +2;
}
