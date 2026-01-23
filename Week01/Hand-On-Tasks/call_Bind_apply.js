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
console.log(addItem(cart, "choclates"));
