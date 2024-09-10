// nested scope 
// child can access to parents 


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

funcion addOne(num){
    
}