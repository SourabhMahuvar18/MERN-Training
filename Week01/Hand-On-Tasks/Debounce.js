function debounce(func, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this,args);          // safer call for the system , preserves the context also using this 
    }, delay);
  };
}

function search(query) {
  console.log(`Searching for query : ${query}`);
}

const searchWithDebounce = debounce(search, 1000);

searchWithDebounce("Ha");
searchWithDebounce("Har");
searchWithDebounce("Hard");
searchWithDebounce("Hard ");
searchWithDebounce("Hard js");



