// Javascript based calculator

// For taking user input in console
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculator(number_1, number_2, operator) {
  switch (operator) {
    case "+":
      return number_1 + number_2;
    case "-":
      return number_1 - number_2;
    case "*":
      return number_1 * number_2;
    case "/":
      return number_1 / number_2;
    case "%":
      return number_1 % number_2;
    default:
      return "You selected invalid operator !";
  }
}

let number_1, number_2, operator;
rl.question("Enter First Number : ", (num1) => {
  rl.question("Enter Second Number : ", (num2) => {
    rl.question("Enter operator : ", (op) => {
        number_1 = num1;
        number_2 = num2;
        operator = op;
        // after all input we call the calculator function
        console.log(number_1+" " + operator +" "+  number_2 +" is : "+calculator(number_1,number_2,operator));
        // close the 
        rl.close();
    });
  });
});


