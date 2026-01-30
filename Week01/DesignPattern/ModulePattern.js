// Module Pattern is used to encapsulate (hide) private data and expose only what is needed
// hide the unneccesary and show what needed 


// example 
var users = [];
var isLoggedIn = false;

function addUser(user) {
  users.push(user);
}

function login() {
  isLoggedIn = true;
}


let user= {
    name : "ram",
    age:17
}

// addUser(user);
// console.log(users); iikbkn iu  

// login();
// console.log(isLoggedIn);

// here functions are working but there is not data hiding , not securty and data is openly accesible with risk of override 

// using the module pattern 
// module pattern allow us to create only one time use , no multiple call and memeory is created once only immedialtely 

// IIFE + CLOUSRES 
const UserModule = (function () {
  let users = [];
  let isLoggedIn = false;

  function addUser(user) {
    users.push(user);
  }

  function login() {
    isLoggedIn = true;
  }

  return {
    addUser,
    login
  };
})();

UserModule.addUser({ name: "Sourabh" });
UserModule.login();
// console.log(users); // this will not have access to the users object it access the global data 

// now no outsider can access to inner data

// real example 
const Logger = (function () {
  function log(msg) {
    console.log(`[LOG]: ${msg}`);
  }

  function error(msg) {
    console.error(`[ERROR]: ${msg}`);
  }

  return {
    log,
    error
  };
})();

Logger.log("Server started");
Logger.error("DB connection failed");


