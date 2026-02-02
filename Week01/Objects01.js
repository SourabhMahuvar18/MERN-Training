// litral pattern for creating the objects 

const mySym = Symbol("symbol");
// const user = {
//   name: "Alice",
//   greet() {
//     console.log(`Hi, I'm ${this.name}`);
//   }
// };

// user.greet();

// factory function pattern- function create the objects
// function createUser(name) {
//   return {
//     name,
//     greet() {
//       console.log(`Hi, I'm ${name}`);
//     }
//   };
// }

// const user1 = createUser("Alice");
// const user2 = createUser("Bob");
// user1.greet();

const key = "email";

const newuser = {
  name: "Alex",
  [key]: "alex@mail.com"
};

// console.log(newuser.email); // alex@mail.com

// const user = {
//   name: "Alex",
//   address: { city: "Berlin" }
// };

// const copy = { ...user }; // making shallow copy 
// copy.address.city = "Paris";// reflects the changes

// const deepCopy = structuredClone(user);
// deepCopy.address.city = "Bhopal";
// console.log(user);
// console.log(deepCopy);


// 'use strict';
// const user = {
//   name: "Alex",
//   age: 25
// };

// Object.freeze(user);

// user.age = 30;     // ❌ ignored
// user.email = "";  // ❌ ignored
// delete user.name; // ❌ ignored

// console.log(user);

// optional chaining 
const user = {
  name: "Alex",
  address: {
    city: "Delhi"
  }
};

console.log(user.address?.city); // "Delhi"
console.log(user.profile?.age);  // undefined (NO ERROR)
