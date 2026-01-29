// What is a Prototype ?
// every object has hidden property callled prototype - [[prototype]]
// this prototype is another object from whcih it can inherit properties

// console.log(this)

const user = {
  name: "Sourabh",
  age: 19,
  isSignedIn: true,
  getdetails: function () {
    // console.log(`username : ${this.name}`);
    console.log(this);
  },
};

// console.log(user.name);
// user.getdetails();

function UserInfo(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new UserInfo("User1", 11, true);
const userTwo = new UserInfo("User2", 9, false);

// console.log(userOne);
// console.log(userTwo);

// const person = {
//     name : "Sourabh"
// }

// console.log(person.toString());

// console.log(person.__proto__ === Object.prototype); // true


// linking new function to the prototype.
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log("Hi " + this.name);
// };

// const p1 = new Person("Sourabh");
// console.log(p1);
// console.log(Person);


// in the ES6 the developer introduced a new syntax called classes so  that using prototype based OOP and constructor is become more 
// readable and simpler to use 

// JS classes are syntactic sugar over prototypes, not true class-based like Java or C++.
class Person{
  constructor(name){
    this.name = name;
  }
  sayHi() {
    console.log(`Hi ${this.name}`);
  }
}

const person = new Person("Sourabh");
// console.log(person.name);


/*
The constructor() method:
  Runs automatically when object is created
  Used to initialize properties

  rules:
    Only one constructor allowed
    If you don’t write one → JS creates a default constructor
*/ 

class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

const car1 = new Car("BMW", 2024);
// console.log(car1.brand);   // BMW

// methods : function which are defined inside the class, can be used by object and they automatically adeed to the prototype
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

const calc = new Calculator();
// console.log(calc.add(5, 3)); // 8


// Static methods - Static methods & properties belong to the class itself, not to objects (instances).
//  Called using ClassName, not by object.

class MathUtility{
  static add(a,b){
    return a + b;
  }
  static square(x){
    return x * x;
  }
  static sqareRoot(x){
    return Math.sqrt(x);
  }
}

// console.log(MathUtility.square(8));
// console.log(MathUtility.add());


// Getter &  setter
class User {
  constructor(name) {
    this._name = name;   // convention: _ means internal
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 3) {
      console.log("Name too short!");
      return;
    }
    this._name = value;
  }
}

const u1 = new User("Raj");

// console.log(u1.name);  // Raj  -> getter called

// u1.name = "A";         // setter called -> Name too short!
u1.name = "Sourabh";

// console.log(u1.name);  // Sourabh


// getter without setter - readonly property 
class Circle {
  constructor(r) {
    this.r = r;
  }

  get diameter() {
    return this.r * 2;
  }
}

const c1 = new Circle(5);
// console.log(c1.diameter); // 10

c1.diameter = 20; // ❌ Cannot set (ignored / error in strict mode)
// console.log(c1.diameter);

// static + getter + setter 
class BankAccount {
  static bankName = "SBI";

  #balance = 0; //private property 

  constructor(owner) {
    this.owner = owner;
  }

  get balance() {
    return `Curent account balance : ${this.#balance}`;
  }

  set balance(amount) {
    if (amount < 0) {
      console.log("Invalid deposit");
      return;
    }
    this.#balance  += amount;
  }

  static getBankName() {
    return `Bank Name : ${this.bankName}`;
  }
}

const acc1 = new BankAccount("Sourabh");

// acc1.balance = 500;
// console.log(acc1.balance);
// acc1.balance = 100;
// console.log(acc1.balance);

// console.log(BankAccount.getBankName());

// super keyword - calls the parent constructor during the inheritance 
class humman {
  constructor(name) {
    this.name = name;
  }
  walk(){
    console.log(`${this.name} is walking !`);
  }
}

class Student extends humman {
  constructor(name, grade) {
    super(name);     // calls Person constructor
    super.walk();
    this.grade = grade;
  }
}

const s1 = new Student("Sourabh", "A");
// console.log(`${s1.name} have grade ${s1.grade}`);


// mixin concepts - 

const canWalk = {
  walk() {
    console.log("Walking...");
  }
};

const canSwim = {
  swim() {
    console.log("Swimming...");
  }
};

class Human {}

Object.assign(Human.prototype, canWalk, canSwim);

const h1 = new Human();
h1.walk();
h1.swim();





