// Promises flatten nested callbacks into a readable chain code - enable more readability

/*
A Promise represents a value that will be available:

-now
-later
-or never

A promise has 3 states:
pending – still working
 fulfilled – success
rejected – error
*/

// callback hell situation

// function changeColor(color, callback) {
//     setTimeout(() => {
//       console.log(`Changed the color to ${color}`);
//     }, 1000);
// }

// changeColor("red",()=>{
//     changeColor("blue",()=>{
//         changeColor("green",()=>{
//             changeColor("yellow",()=>{
//                 changeColor("pink",()=>{
//                     changeColor("orange");
//                 })
//             })
//         });
//     });
// });

function changeColor(color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!color) {
        reject("must pass a color name ");
      }
      console.log(`Changed the color to ${color}`);
      resolve();
    }, 1000);
  });
}

// handled same situation using promises
// changeColor("red") //this situation is called promise chaining as each callback is returning a promise
//   .then(() => changeColor("green"))
//   .then(() => changeColor("yellow"))
//   .then(() => changeColor("blue"))
//   .then(() => changeColor("pink"))
//   .then(() => changeColor("orange"))
//   .then(() => changeColor("voilet"))
//   .then(() => changeColor("grey"))
//   .catch((err) => {
//     console.log(`error occured ${err}`);
//   });

// async-await = syntactic suger over promises
// these syntax makes it more easier and make async code look like sync code

async function RunChangeColor() {
  try {
    await changeColor("red");
    await changeColor("yellow");
    await changeColor("green");
    await changeColor("blue");
    await changeColor("pink");
    await changeColor("voilet");
    await changeColor("coral");
    await changeColor("orange");
  } catch (error) {
    console.log(error);
  }
}
// RunChangeColor();


// Promise combinators  - 
// Promise.allwdwd
const p1 = Promise.resolve("Task 1 done");
const p2 = Promise.resolve("Task 2 done");
const p3 = Promise.resolve("Task 3 done");

Promise.all([p1, p2, p3])
  .then(results => console.log(results)) // ["Task 1 done", "Task 2 done", "Task 3 done"]
  .catch(err => console.error("Error:", err));


//  Promise.allSettled
const p11 = Promise.resolve("Task 1 done");
const p12 = Promise.reject("Task 2 failed");
const p13 = Promise.resolve("Task 3 done");

Promise.allSettled([p11, p12, p13])
  .then(results => console.log(results));
/*
[
  { status: "fulfilled", value: "Task 1 done" },
  { status: "rejected", reason: "Task 2 failed" },
  { status: "fulfilled", value: "Task 3 done" }
]
*/

// Promise.race = return the result of first promise finish first,eithere success or failure

const p21 = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
const p22 = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));

Promise.race([p21, p22])
  .then(result => console.log(result)); // "Fast"

// Promise.any - return the result of first completed promise, rejects only if all promise failes

const p31 = Promise.reject("Fail 1");
const p32 = Promise.resolve("Success 2");
const p33 = Promise.reject("Fail 3");

Promise.any([p31, p32, p33])
  .then(result => console.log(result)) // "Success 2"
  .catch(err => console.error("All failed:", err));




