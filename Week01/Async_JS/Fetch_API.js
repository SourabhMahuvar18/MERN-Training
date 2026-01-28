// covering execution types ,fetch method

// sequential execution - Tasks run one after another, each waiting for the previous to finish.
function task(name, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, delay);
  });
}

async function sequential() {
  console.time("sequential");

  await task("Task 1", 1000);
  await task("Task 2", 1000);
  await task("Task 3", 1000);

  console.timeEnd("sequential");
}
sequential();

// parallel execution - Tasks run at the same time, without waiting for each other.

function task(name, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(name);
      resolve();
    }, delay);
  });
}

async function parallel() {
  console.time("parallel");

  const p1 = task("Task 1", 1000);
  const p2 = task("Task 2", 1000);
  const p3 = task("Task 3", 1000);

  await Promise.all([p1, p2, p3]);

  console.timeEnd("parallel");
}

parallel();

// micro task = small tasks scheduled to run right after the current synchronous code finishes, before the event loop continues.
// macro task = Larger tasks scheduled to run in the next event loop tick.

// micro vs macro taks 
console.log("start");

setTimeout(() => { // macro tasks
  console.log("timeout");
}, 0);

Promise.resolve().then(() => { // micro task 
  console.log("promise");
});

console.log("end");


// multiple micro task 
console.log("A");

Promise.resolve().then(() => console.log("B"));
Promise.resolve().then(() => console.log("C"));

setTimeout(() => console.log("D"), 0);

console.log("E");


// micro task inside macrotask
setTimeout(() => {
  console.log("timeout");
  Promise.resolve().then(() => {
    console.log("promise inside timeout");
  });

}, 1000);


// tricky combination

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve()
  .then(() => {
    console.log("3");
    return Promise.resolve("4");
  })
  .then(console.log);

console.log("5"); 


/*
  FETCH API - fetch is a promise-based API to make HTTP requests.

Important = fetch only rejects on network failure, NOT on HTTP errors (404, 500)

FETCH LIFE CYCLE 

        request is sent ->  response headers arrives -> promise resolve with response obj -> read the response by .json(), .text()
*/


let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((respose)=>{
    if(!respose.ok){
        throw new Error(`HTTP Error : ${respose.status}`);
    }
    return respose.json();
  })
  .then( data =>{
    console.log("Response data :");
    console.log(data);
  })
  .catch(err =>{
    console.log(`Error ${err.message}`);
  })
  .finally( ()=>{
    console.log("Data fetching using api is done!");
  })


//   fetch api with async/ await 
async function getUsers(url) {
    try {
        const resposne = await fetch(url);
        if(!resposne.ok){
            throw new Error("HTTP Error " + resposne.status);
        }
        const data = await resposne.json();
        console.log(data);
    } catch (error) {
        console.log("Error",error.message);
    }
}
getUsers(url);


