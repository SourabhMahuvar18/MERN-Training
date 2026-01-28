// execution phase - this will expalined as
// gloabal execution context
// memeory allocation phase - initially everything is undefined in above code
// for each function its execution phase is created - so above steps are repeated for the called function - memory & execution phase 
// return value is come to global executional context - and than function execution context is deleted

let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,2);
// console.log(result1,result2);

// global EC  -> Memory phase -> execution context

// call stack 
function a() {
  b();
}

function b() {
  c();
}

function c() {
  console.log("Hello");
}

// a();

// callstack here -  push a() -> push b() -> push c().. then 
// pop c() -> pop b() -> pop a()..once function is completely executed then only poped from the stack 
// this is for synchrnous tasks - nothing async

// callbacks with async code
console.log("Start");

setTimeout(function callback() {
  console.log("Timeout done"); // executed once the stack become empty

}, 2000);

console.log("End");





// understanding callbacks 
// basically callbacks are the functions which are passed as argumnets


// Callback Hell happens when:
// You have multiple async operations
// Each one depends on the result of the previous one
// You keep nesting callbacks inside callbacks inside callbacks…

getUser(id, function(user) {
  getOrders(user.id, function(orders) {
    getOrderDetails(orders[0], function(details) {
      processPayment(details, function(result) {
        console.log("Payment done");
        return result;
      });
    });
  });
});

/*
Callback hell occurs when multiple asynchronous operations are nested inside each other using callbacks, leading to deeply indented and unreadable code.
It makes error handling difficult, reduces maintainability, and causes inversion of control.
Promises and async/await were introduced to solve these problems.
*/



