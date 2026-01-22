// utilty function which checks the type of any value

function checkType(value) {
  let type = Object.prototype.toString.call(value); //[object datatype] which is string
  return type.slice(8, -1); //displayes only type "Array", "Object","Null"
}

console.log(checkType("hello"));     // String
console.log(checkType(42));          // Number
console.log(checkType([1,2,3]));     // Array
console.log(checkType({a:1}));       // Object
console.log(checkType(null));        // Null
console.log(checkType(undefined));   // Undefined
console.log(checkType(() => {}));    // Function
console.log(checkType(new Date()));  // Date
        
