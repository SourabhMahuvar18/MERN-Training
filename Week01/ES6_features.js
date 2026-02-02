/*
before template literals
const name = "Sourabh";
const msg = "Hello " + name + ", welcome!";

*/

// template literals ??

// Template literals are ES6 strings defined with backticks that support interpolation with ${},
//  multi-line strings, and embedded expressions.

// const name = "Sourabh";
// const msg = `Hello ${name}, welcome!`;
// console.log(msg);

// A. String interpolation (${})
// You can put any JS expression inside:

const a = 10;
const b = 20;

// console.log(`Sum is ${a + b}`); // "Sum is 30"


// Inside ${} we can write:

// Variables
// Math
// Function calls
// Ternary operators

// Example:

const age = 18;
// console.log(`Status: ${age >= 18 ? "Adult" : "Minor"}`);

//B. Multi-line strings
const text = `
Hello
How are you?
Bye
`;

// console.log(text); // now need of newline character

// C. Preserve formatting and spaces = Whatever you type inside backticks is preserved:
const html = `
  <div>
    <h1>Hello</h1>
  </div>
`;

// console.log(html);

// Destructuring - extracting the values from array & objects in shorter and cleaner way 

// object destructuring
// const user = { name: "Sourabh", age: 25 };
// const { name, age } = user;
// console.log(name); // Sourabh
// console.log(age);  // 25


// renaming while destructure
// const user = { name: "Sourabh", age: 25 };
// const { name: userName, age: userAge } = user;

// console.log(userName); // Sourabh
// console.log(userAge);  // 25


// const user = { name: "Sourabh", age: 25, city: "Delhi" };

// const { name, ...rest } = user;

// console.log(name); // Sourabh
// console.log(rest); // { age: 25, city: "Delhi" }


// Nested Destructuring

const user = {
  name: "Sourabh",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const {
  name,
  address: { city, pin }
} = user;

// console.log(`Hey I'm ${name},from ${city} and pincode : ${pin}`); 

// Spread & rest operator

// Spread = Used to expand an iterable or object into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [...arr1];   // ✅ new copy

arr2.push(4);

// console.log(arr1); // [1,2,3]
// console.log(arr2); // [1,2,3,4]

const newArr = [1,...[2,3],4,5];
// console.log("new array :",newArr);

const user1 = { name: "Sourabh", age: 25 };

const newUser = { ...user1 };

newUser.age = 30;

// console.log(user1.age);    // 25
// console.log(newUser.age); // 3


// rest : It collects multiple values into one array/object.

// function sum(...numbers) {
//   console.log(numbers); // array
// }

// sum(1, 2, 3, 4);
// for of loop - loop to iterate over some iterable data types

// enhaced object litreals ??


// Enhanced object literals are ES6 features that provide shorter and
// more expressive syntax for defining objects, including property shorthand, 
// method shorthand, and computed property names.

const userName = "Sourabh";
const agee = 19;

const userObj = { // enhaced object literals
    userName ,
    agee,
    greet(){
        console.log("hello " ,userName);
    }
}

// console.log(userObj.greet());

const prefix = "user";

const obj = {
  [prefix + "_id"]: 1,
  [prefix + "_name"]: "Sourabh"
};

console.log(obj);
// { user_id: 1, user_name: "Sourabh" }


const myname = "Sourabh";
const myage = 25;
const key = "city";

const myuser = {
  myname,          // shorthand
  myage,           // shorthand
  [key]: "Delhi",// computed property
  greet() {      // method shorthand
    return `Hello ${this.myname},i am object`;
  }
};

console.log(myuser.greet()); // Hello Sourabh
