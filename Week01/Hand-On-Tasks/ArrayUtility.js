/*
It’s just a collection of small pure s that:
Take an array as input
Return a new transformed array / object
Never mutate the original array

Rule: Always return a new value and keep functions predictable.

function : 
    unique,chunk,flatten,groupby
*/

const ArrayUtility = {
  // unique funtion implementation
  unique(inputArr) {
    const seen = new Set();
    inputArr.forEach((element) => {
      if (!seen.has(element)) {
        seen.add(element);
      }
    });
    let answerArr = [...seen];
    return answerArr;
  },

  // chunk  implementation
  chunk(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  },

  //  flatten  implementation
  flatten(arr) {
    const result = [];
    for (const item of arr) {
      // if elemnet is subarray then call flatten for that input again and add them
      if (Array.isArray(item)) {
        result.push(...flatten(item));
      } else {
        result.push(item);
      }
    }
    return result;
  },

  // groupBy implementation
  groupBy(arr, fn) {
    let result = {};
    for (let item of arr) {
      const key = fn(item);

      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(item);
    }
    return result;
  },
};

// testing the utility functions

// unique function test
console.log(
  "\nunique function test " +
    ArrayUtility.unique([1, 2, 4, 9, 7, 3, 4, 2, 1, 0, 7, 9]),
);

// chunk function test
console.log(
  "\nchunk function test " + ArrayUtility.chunk([1, 2, 4, 9, 7, 5, 7, 2, 0], 2),
);

// flatten function test
console.log(
  "\nflatten function test " +
    ArrayUtility.flatten([1, 2, (3)[(4, [4, 6, 7], [2, [3, 9], 7, 0, [2]])]]),
);

// groupBy function test
const numbers = [1, 2, 3, 4, 5, 6];

const grouped1 = ArrayUtility.groupBy(numbers, (n) =>
  n % 2 === 0 ? "even" : "odd",
);

console.log("\ngroupBy function test ");
console.log(grouped1);

// How does the groupBy works ??

// Answer  = I iterate over the array, compute a grouping key using a callback function, use an object as a hash map where each key maps to an array, 
// initialize the group if it doesn’t exist, and push the item into the corresponding group. Finally, I return the grouped object.
