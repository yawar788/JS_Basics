// method chaining 
// Method chaining is a technique in which multiple methods are
//  called on the same object in a single line. For method chaining
//  to work, each method must return the object itself (this).

let calculator = {
    value: 0,
    add(num) {
        this.value += num;
        return this;  // Returning the object to allow chaining
    },
    subtract(num) {
        this.value -= num;
        return this;
    },
    multiply(num) {
        this.value *= num;
        return this;
    },
    divide(num) {
        this.value /= num;
        return this;
    },
    result() {
        console.log(this.value);
        return this;
    }
};

// calculator.add(10).subtract(3).multiply(2).divide(4).result();  
// By returning this from each method, we enable multiple method calls in a single line.



// Static Methods in Classes
// static methods that are called on the class itself, rather
//  than on instances of the class. These methods are often 
// utility methods that do not need instance-specific data.
class MathUtil{
    static add(a,b){
        return a+b
    }
    static subtract(a,b){
        return a-b
    }
}

// console.log(MathUtil.add(1,3));
// console.log(MathUtil.subtract(1,3));
// Here, add() and subtract() are static methods and are called 
// on the MathUtil class, not on any instance of it.


// Getters and Setters as Methods
let person = {
    firstName: "Yawar",
    lastName: "Abbas",
    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(name) {
        let parts = name.split(" ");
        // console.log(parts);
        
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person.fullName);  // Output: Yawar Abbas
person.fullName = "Ali Khan";
console.log(person.fullName);  // Output: Ali Khan
