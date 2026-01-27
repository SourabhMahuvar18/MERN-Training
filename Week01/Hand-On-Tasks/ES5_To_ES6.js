// converting ES5 code to es6 code 

// var name = "Sourabh";
// var age = 25;

// function greet(user, city) {
//   return "Hello " + user + ", you are " + age + " years old and live in " + city;
// }

// ES6 version
let name = "Sourabh";
let age = 21;
let city = "Bhopal";

const greet = (user, city)=>{
    return `Hello ${user} , you are ${age} years old and live in ${city}`;
}

console.log(greet(name,city));