/*
A deep clone utility is a function that:

Takes any JavaScript value as input (object, array, primitive, etc.)

Returns a completely independent copy of it

Ensures nested objects/arrays are also copied, not referenced

Keeps primitives like numbers, strings, booleans as-is

Optionally handles special types like Date, Map, Set, etc.
*/

function deepClone(input, map = new WeakMap()) {
  // step1 if any premitive type then just return them as it as
  if (typeof input !== "object" || input == null) {
    return input;
  }
  // handle exception data types - date, regex
  if (input instanceof Date) {
    return new Date(input);
  }
  if (input instanceof RegExp) {
    return new RegExp(input);
  }

  // Step 4.1: if already cloned, return it
  if (map.has(input)) {
    return map.get(input);
  }

  // step2 if array or object then create empty container for that of that type
  const result = Array.isArray(input) ? [] : {};

  // Step 4.2: store in map BEFORE recursion
  map.set(input, result);

  // step3 copy values recursively
  for (const key in input) {
    if (input.hasOwnProperty(key)) {
      result[key] = deepClone(input[key], map);
    }
  }
  return result;
}

// // currently works for only object and array - simple test case
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(obj);
console.log(clone);
console.log(clone.b === obj.b );
// false  sdSkgjkkkkkj jkj

// const a = {};
// a.self = a;

// const clone = deepClone(a);
// clone.self === clone; // true

export default deepClone;
