// main file were all the other file functions can we used

import {chunk,unique} from './arrays.js';
import {capitalize} from './strings.js';
import {omit,pick}from './objects.js';

// using array functions 
console.log(chunk([1,2,3,5,8,9,7,0,6,2],3));
console.log(unique([1,2,7,3,2,1,2,7,8,9,1,0]));


// using string methods
console.log(capitalize("sourabh"));

const user = {
  id: 1,
  name: "Sourabh",
  email: "sourabh@gmail.com",
  password: "secret",
  role: "admin"
};


// using object methods 
console.log(pick(user, ["id", "name", "email"]));
console.log(omit(user, ["password", "email"]));

