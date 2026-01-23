// file containing the main prepration of functions

function displayDate(){
    let now = new Date();
    console.log(`Current data & time : ${now.toLocaleString('en-In')}`);;
}
displayDate();

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const myCar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

// console.log(myCar.make); // "Honda"
myFunc(myCar);
console.log(myCar.make); // "Toyota"

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

// console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30

function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

// console.log(addSquares(2,4));

/* normal function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
*/

// function expresssion or anonymous function
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1); // done 3 line code in just one line using ternary operator
};

// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120

// condition bases functions let myFunc;
let myFunc;
num = 0;
if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}

const obj = {
  name: "Alex",
  greet: function () {
    console.log(this.name);
  },
};
// obj.greet(); // Alex

const obj1 = {
  name: "Alex",
  greet: () => {
    console.log(this.name);
  },
};
// obj1.greet(); // undefined (or global this)

// function show(a ,b) {
//   console.log(arguments);
// }

// arrow function doesn't have arguments so use ...rest paramenter
const show = (...args) => console.log(args);
show(8,9);

// arrow function doesn't have this so it ignore call(), apply(), bind()
const greet = () => console.log(this.name);
greet.call({ name: "Alex" }); // undefined

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

// greet();   // "Hello, Guest!"
// console.log(greet()); // "Hello, Alice!"

function sum(name,...numbers) {
    console.log(name,numbers);
  return numbers.reduce((total, n) => total + n, 0);
}

// sum("Sourabh",1, 2, 3);      // 6
// sum("sourabh",5, 10, 15);    // 30

function displayUser({ name, age }) {
  return `${name} is ${age} years old`;
}

displayUser({ name: "John", age: 25 });

function showDetails({ name, age }) {
  return `Name is : ${name} and age is : ${age}`;
}

let user = {
  name: "Sourabh",
  age: 21,
};
// console.log(showDetails(user));

// function expressions
function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const numbers = [0, 1, 2, 5, 10];
const cubedNumbers = map(function (x) {
  return x * x * x;
}, numbers);

// console.log(`cubed form of numbers ${numbers} is ${cubedNumbers}`); // [0, 1, 8, 125, 1000]


// this is the perfect example of closure and fuction scope where the outer varibles are accesed inside only the inner function and inner 
// varibles are only accesed by the inner function so they are much secure
const createPet = function (name) {
  let gender;

  const pet = {
    setName(newName) {
      name = newName;
    },
    getName() {
      return name;
    },
    getGender() {
      return gender;
    },

    setGender(newGender){
        if(typeof newGender === "string" && (
            newGender.toLowerCase() === "male" ||  newGender.toLowerCase() === "female"
        )){
            gender = newGender;
            console.log(newGender)
        }
    }
  };
  return pet;
};


const pet = createPet("Charlie");
console.log(`Pet name is : ${pet.getName()}`);
pet.setGender("male");
console.log(`${pet.getName()} is ${pet.getGender()}`);



