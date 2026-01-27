// symbols and there use cases


const s1 = Symbol();
const s2 = Symbol();

// console.log(s1 === s2); // false 🔥 always unique
// console.log(s1,s2);
const id = Symbol("id");
// console.log(id); // Symbol(id)

// console.log(Symbol("x") === Symbol("x") // false
// );

// symbol key are hidden in for of loop , object().keys, json.stringify()

const secret = Symbol("secret");

const obj = {
  name: "Sourabh",
  [secret]: "hidden",
};

// console.log(Object.keys(obj)); // ["name"]

// for (let key in obj) {
//   console.log(key); // only "name"
// }

// but sometimes you want the same symbol shared globally
const a = Symbol.for("id");
const b = Symbol.for("id");

// console.log(a === b); // true

// iterators & generators

// Iteration = going through elements one by one.
// they can also customize the logic of for...of loop - internal array

// what is iterator ? - An iterator is an object that implements the iterator protocol by having a next() method 
// which returns objects of the form { value, done }, allowing sequential access to values.

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

const iter = makeRangeIterator(1, 12, 2);

let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}

console.log("Iterated over sequence of size:", result.value);
console.log('\n\n');

// done

// interator protocol = An iterator is an object that follows this rule:
// It must have a method:= next() and next() must return an object { value: ..., done: true/false }

// Iterable → has [Symbol.iterator]()
// Iterator → has next()

// generators - speacial functions which can pause execution, resume lator, automatically create iterators

function * generator(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
    yield 12;
    yield 14;
}

const even = generator();

// for(const value of even){
//     console.log(value);
// }
// What is a generator? - A generator is a special function defined with function* that can pause and 
// resume execution using yield, and automatically implements both the iterable and iterator protocols.


const arr = [10, 20, 30];

// for (let i in arr) {
//   console.log(i);       // "0", "1", "2"  (indexes) not values
// //   console.log(arr[i]); // 10, 20, 30
// }

// for(let value of arr){
//     console.log(`Array has ${value}`);
// }

const obj1 = { a: 1, b: 2 };



// Set data structure - A Set stores only unique values — no duplicates.

const set = new Set();

set.add(1);
set.add(2);
set.add(1);

console.log(set); // Set {1, 2}


// What is a Map? = A Map stores key–value pairs where:
// Keys can be ANY type:

// objects
// functions
// numbers
// strings
// Unlike objects

const map = new Map();

map.set("name", "Sourabh");
map.set(1, "one");
map.set({ x: 1 }, "object key");

console.log(map.get("name")); // Sourabh
console.log(map.size);       // 3


// WeakSet

// Similar idea:

// Stores only OBJECTS
// Weak references
// Not iterable
// Auto 
//  const ws = new WeakSet();
//  let object = {name : "hero"};

// ws.add(obj);
// console.log(ws.has);



