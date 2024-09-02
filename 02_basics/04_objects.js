const tinderUser = new Object();
// const tinderUser={}
// console.log(tinderUser);

tinderUser.Id=1322;
tinderUser.name="sammy";
tinderUser.IsLoggedIn=false;
// console.log(tinderUser);

const regularUser={
    gmail:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Yawar",
            lastName:"Abbas"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj4={5:"a",6:"b"};

// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2,obj4);

// spread
// const obj3={...obj1,...obj2,...obj4} // no need target {}
// console.log(obj3);

// database values

const UsersDatabase=[
    {
        ID: 1,
        email:"y@gmail.com"
    },
    {
        ID: 1,
        email:"a@gmail.com"
    }, {
        ID: 1,
        email:"b@gmail.com"
    }, {
        ID: 1,
        email:"c@gmail.com"
    }, {
        ID: 1,
        email:"d@gmail.com"
    },
];

UsersDatabase[1].email;
// console.log(tinderUser);
// console.log(UsersDatabase[1].email);

// console.log(Object.keys(tinderUser)); // array, use loop 
// console.log(Object.values(tinderUser));  
// console.log(Object.entries(tinderUser)); // array inside array
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



// destructuring 

const course={
    courseName:"JS In Urdu",
    price:"999",
    courseInstructor:"Yawar Abbas"
}

// course.courseInstructor

const {courseInstructor:instructor}=course;
// console.log(courseInstructor);
console.log(instructor);

// const navbar=(props.company)=>{

// }

const navbar=({company})=>{

}
// {} --> used for destructuring
navbar(company="yawar")


// api values 
// before --> xml
// after --> json 

// json 

// {
//     "name":"Yawar Abbas",
//     "coursename":"JS in urdu",
//     "price":"free"
// }

// api 
// array form
// json formatter
// api in json format
// api randome 
[
    {},
    {},
    {},
    {}
]

