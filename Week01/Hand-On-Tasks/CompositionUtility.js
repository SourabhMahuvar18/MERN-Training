// composition utility

function add(a, b) {
  return a + b;
}
// function square(val) {
//   return val * val;
// }
// es5 javascript syntax
function composeTwoFunctions(fn1, fn2) {
  return function (a, b) {
    return fn2(fn1(a, b));
  };
}

// es6 javascript syntax
const compose2funtions = (fn1, fn2) => (a, b) => fn2(fn1(a, b));

// const task = compose2funtions(add, square);
// console.log(task(2, 3));        



// compostion function if we want to compose multiple functions 
function compose(...fns){
    return function(value){
        return fns.reduceRight((acc,fn)=> fn(acc), value );
    };
}

const double = x => x * 2;
const square = x => x * x;
const increment = x => x + 1;

const transform = compose(double, square, increment);

// console.log(transform(2));
// Step by step:
// increment(2) = 3
// square(3) = 9
// double(9) = 18

// real world example -> string preprocessor 

const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const removeSpecial = str => str.replace(/[^a-z0-9 ]/gi, '');

const sanitize = compose(removeSpecial, toLowerCase, trim);

console.log(sanitize("  Hello, World! %$#r ")); 
// Output: "hello world"
