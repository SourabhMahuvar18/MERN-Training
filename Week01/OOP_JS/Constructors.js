// OOP - pardigm of programming

// classes := they are essentially syntactic suger over js wxisting prototype based inheritance

// under the hood , classes still use prototypes but the syntax looks cleaner and
// more familiar to developers comingfrom classical oop llanguage

// constructors
// before ES6 we define the constructor by these syntax ,which is older

function User(name, age) {
  this.name = name;
  this.age = age;
}
// adding the greet() inside the prototype of any object
User.prototype.greet = function () {
  console.log(`Hello, I am ${this.name}`);
};

const u1 = new User("Amit", 24);
u1.greet();

// newer syntax - ES6
class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, My name is ${this.name}`);
  }
}

const userSourabh = new UserClass("Sourabh kumar", 19);
userSourabh.greet();

console.log(typeof userSourabh); // object
console.log(typeof UserClass);// 
// console.log(userSourabh._proto_);

// js is basically proto type based language, classes is just a new syntax but internally it always runs using the prototype

/*
Syntactic sugar refers to language features that make code easier to read or write, but don’t add new functionality.
*/

