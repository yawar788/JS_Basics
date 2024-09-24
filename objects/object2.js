// what is method ?  
// a function stored as a value in an object’s property.
// Since functions in js are first-class citizens,
// they can be assigned to variables, passed as arguments, or used as methods.



// example-1 
let person = {
    name: "Yawar Abbas",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// person.greet();  

// greet is a method of person object
// this --> refer to current object
// allow to access properties inside this method 



// constructor function
// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     this.greet=function(){
//         console.log(`hello my name is ${this.name}`);
        
//     }


// let person1=new Person('yawar',23);
// let person2=new Person('abbas',22);

// person1.greet()
// person2.greet()



// classes es6 syntax
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age
    }

    greet(){
        console.log(`hello my name is ${this.name}`);
        
    }
}

let person1=new Person('yawar',34);
let person2=new Person('abbas',24);

person1.greet();
person2.greet();


