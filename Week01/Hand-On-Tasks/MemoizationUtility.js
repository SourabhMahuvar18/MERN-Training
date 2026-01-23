// Memoization = remember the result of a function call which only works on pure functions

// If a function is called again with the same inputs,
// don’t recompute — just return the stored result.

function memoization(fn) {
  const cache = new Map(); // create the cache to store result
  return function (...args) {
    const key = JSON.stringify(args); //convert given args to key
    if (cache.has(key)) {
      //check if for key the result has then return it
      return cache.get(key);
    }
    // else compute the result
    const result = fn.apply(this, args);
    cache.set(key, result); // store the result into cache
    return result; // return that result
  };
}

function slowSquare(n) {
  for (let i = 0; i < 1e9; i++) {}
  return n * n;
}

const fastSquare = memoization(slowSquare);

console.log("results by the memoization : ");
console.log(fastSquare(4)); // slow (computed)
console.log(fastSquare(4))// fast (cached)
console.log(fastSquare(4))// fast

