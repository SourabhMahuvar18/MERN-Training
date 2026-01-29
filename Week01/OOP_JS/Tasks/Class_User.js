// a class which have validation for data storing of user
class User {
  #name;
  #age;
  #email;
  #password;
  constructor(name, age, email, password) {
    // callling the setters
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }

  get UserDetails() {
    return {
      name: this.#name,
      age: this.#age,
      email: this.#email,
    };
  }
  set name(name) {
    if (name.length < 3) {
      console.log(`provided name is too short!`);
      return;
    }
    this.#name = name;
  }
  set age(age) {
    if (age <= 18) {
      console.log(`Age must be 18 or greater!`);
      return;
    }
    this.#age = age;
  }
  set email(email) {
    if (!email.includes("@")) {
      console.log(`Improver email is not accepted`);
      return;
    }
    this.#email = email;
  }

  set password(password) {
    if (password.length < 6) {
      console.log(`password must be minimum of 6 characters!`);
      return;
    }
    this.#password = password;
  }
}

let user1 = new User("Sourabh", 19, "sourabh@gmail.com", "sourabh@1212");
let user2 = new User("shivam", 13, "shivam@gmail.com", "shivam@2212");

// print the user details on console 
console.log(user1.UserDetails);
console.log(user2.UserDetails);
