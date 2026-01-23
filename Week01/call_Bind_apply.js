// function setName(username){
//     this.username = username;
// }

// function createUser(username,email,password){
//     setName.call(this,username);
//     this.email = email;
//     this.password = password;
// }

// const user1 = new createUser("Sourabh","sourabh@meta.com","12#45");
// console.log(user1);

// pure
function calculateTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

// side effect
function checkout(cart) {
  const total = calculateTotal(cart);
  sendToServer(total);
}

function addItem(cart, item) {
  // console.log(typeof cart);
  return [...cart, item];
}

let cart = ["shirt", "facewash", "jeans", "soap", "mobile-covers"];
// console.log(addItem(cart, "choclates"));

// demo of call function - sets the context of this and call it immedialty with separate arguments
const person = {
  name: "Alice",
};

function greet([greeting, punctuation]) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// greet.call(person,"hii","!!");
// greet.call(person, "Hello", "!");

// demo of apply
greet.apply(person, ["Hello", "!"]);


// bind is mainly used of context we have to pre-set and then use it later

const button = {
  label: "Click me",
  click() {
    console.log(this.label);
  },
};

const el = document.querySelector("button");

// Without bind → this = DOM element
el.addEventListener("click", button.click); // undefined

// With bind → this = button object
el.addEventListener("click", button.click.bind(button)); // "Click me"

