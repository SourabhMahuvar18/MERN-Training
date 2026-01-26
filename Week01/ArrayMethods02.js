// Continue the array practice for advance concepts

let arr = [10, 20, 30];

let [a, b, c] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

let arr2 = [10, 20, 30, 40];

let [first, , third] = arr2;

// console.log(first); // 10
// console.log(third); // 30

let arr3 = [1, 2, 3, 4];

let [one, ...rest] = arr;

// console.log(one); // 1
// console.log(rest);  // [2, 3, 4]


// method chaining - passing output of one method into another method
let nums = [1, 2, 3, 4, 5];

let sum = nums
  .filter(n => n % 2 === 0)   // [2, 4] - filter even
  .map(n => n * 2)            // [4, 8] - double the value of even 
  .reduce((acc, n) => acc + n, 0); // sum the final values

console.log(sum); // 12


let users = [
  { name: "A", age: 17 },
  { name: "B", age: 22 },
  { name: "C", age: 30 }
];

let adultName = users
  .filter(user => user.age >= 18)
  .find(user => user.name.startsWith("C"));

console.log(adultName); // { name: "C", age: 30 }

// flatmap in chaining 
let sentences = ["hello world", "js is fun"];

let words = sentences
  .flatMap(s => s.split(" "))
  .filter(word => word.length > 2);

console.log(words);
// ["hello", "world", "fun"]



