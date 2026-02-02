function* range(start, end, step = 1) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step > 0) {
    for (let i = start; i < end; i += step) {
      yield i;
    }
  } else {
    for (let i = start; i > end; i += step) {
      yield i;
    }
  }
}

const gen = range(1, 4, 1);

// printing the result
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());



