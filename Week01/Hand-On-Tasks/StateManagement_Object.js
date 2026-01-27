// simple state mangement object which handle states
// Hold the current state

// Allow reading the state → getState

// Allow updating the state → setState

// Notify interested parts when state changes → subscribe

const deepclone = require("./DeepClone.js");

function createStore(initialState) {
  // creating a priivate state which is immutable
  let state = deepclone(initialState);

  // store all listeners
  const listeners = new Set();

  // getstate - return the current state
  function getState() {
    return deepclone(state);
  }

  // handle state updation
  function setState(updator) {
    // 1 - compute next state
    const nextState =
      typeof updator === "function" ? updator(deepclone(state)) : updator;

    // protect immutabilty
    state = deepclone(nextState);

    // notify all listners about state change
    listeners.forEach((listener) => listener(state));
  }

  function subscribe(listener) {
    listeners.add(listener);

    return function unsubscribe() {
      listeners.delete(listener);
    };
  }

  return {
    getState,
    setState,
    subscribe,
  };
}

// lets test it 
const store = createStore({count : 0});

const unsubscribe = store.subscribe((state)=>{
    console.log("State Changed : ", state);
});

store.setState({count : 1}); // normal update into state

store.setState(prev =>({ // functional update - passing function as updator
    ...prev,
    count :prev.count + 1,
}));

unsubscribe();

store.setState({count : 100}); // can not change the state as it is not a listners
