// Data transformation pipleine is basically methdod chaining with some proper handling

// basic example practice
// const users = [
//   { id: 1, name: "Alice", age: 17, active: true },
//   { id: 2, name: "Bob", age: 25, active: false },
//   { id: 3, name: "Charlie", age: 30, active: true },
//   { id: 4, name: "Dave", age: 15, active: true },
// ];

// // find all the active user who are adults (18+)

// let result = users
//   .filter((user) => user.active == true)
//   .filter((user) => user.age > 18)
  
// console.log(result);

/*
From the data below, calculate the total amount spent by active users who are 18 years or older, considering only completed orders.
*/

const users = [
  {
    id: 1,
    name: "Alice",
    age: 22,
    active: true,
    orders: [
      { id: 101, amount: 120, status: "completed" },
      { id: 102, amount: 80, status: "pending" }
    ]
  },
  {
    id: 2,
    name: "Bob",
    age: 17,
    active: true,
    orders: [
      { id: 103, amount: 50, status: "completed" }
    ]
  },
  {
    id: 3,
    name: "Charlie",
    age: 30,
    active: false,
    orders: [
      { id: 104, amount: 200, status: "completed" },
      { id: 105, amount: 150, status: "completed" }
    ]
  },
  {
    id: 4,
    name: "Dave",
    age: 25,
    active: true,
    orders: [
      { id: 106, amount: 90, status: "completed" }
    ]
  }
];

let result = users
    .filter((activeuser)=> activeuser.age >= 18) // gives us the array of only active users
    .flatMap((user)=> user.orders) // flatten the array return a array containing only order objects
    .filter((order)=>order.status === "completed") // filter out all order which are completed
    .reduce((sum,order) => sum + order.amount,0); // sum the amount of completed orders

console.log(`Sum of All users order which are completed is =  ${result}`);
    
