// Immedialtly invoked executed functions

// (function () {
//   console.log("IIFE executed!-Normal");
// })();


// (()=>{
//     console.log("IIFE executed!-Arrow");
    
// })(); // <- imediately funtion called

// real life scenarios for the IIEF
const result = (function () {
  const secret = 42;
  return secret * 2;
})();

// console.log(result); // 84


// higher order functions - functions which can take another funtion as argument or returns a function as return value 


// taking dfunction as argument
function greet(fn) {
  fn();
}

// greet(() => console.log("Hello!")); 

// returning a function 

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
// console.log("Double of given number : "+double(5)); // 10


// IIEF as HOF
const counter = (function () {
  let count = 0;

  return function () {
    return ++count;
  };
})();

console.log(counter()); // 1
console.log(counter()); // 2


