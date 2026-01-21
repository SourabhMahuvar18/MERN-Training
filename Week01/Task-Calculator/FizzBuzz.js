// fizzbuzz program for the multiple solutions
/*
if number is multiple of 3 -> Fizz
if number is multiple of 5 -> Buzz
if number is multiple of both 3 & 5 -> FizzBuzz
*/

function fizzBuzz(n){
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
}

fizzBuzz(1000);