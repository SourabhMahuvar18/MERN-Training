// printing loop based patterns

// let obj1 = { name: "Alex" };
// let obj2 = obj1;

// console.log(obj1.name);
// obj2.name = "Sam";

// console.log(obj1.name); // "Sam" because object is a mutable(refernce) data type

// console.log("5" + 2 )     // "52" (number → string)
// console.log("5" - 2 )     // 3   (string → numbe)
// console.log(true + 1 )    // 2
// console.log(false == 0)   // true

// let value = undefined;
// const result = value ?? "default"; // type coalescing

// console.log(result);

/*
1 - outer loop - count number on lines
2 - inner loop - focus on the columns &  connect them somehow to rows
3 - what ever you are printing , print them inside inner for loop
4 - observe symmetry (optional step)                                 
*/

// ****
// ****
// ****
// ****
let n = 5;
for (let i = 0; i < 4; i++) {
    let row = ""
    for (let j = 0; j < 4; j++) {
       row += " *"
    }
    console.log(row);
}

// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
    let row = ""
    for (let j = 0; j < i; j++) {
        row += " *";        
    }
    console.log(row);   
}

/* another pattern

              *
             ***
            *****
           *******
*/

/*
 1
 22
 333
 4444
 55555

*/

for (let i = 0; i <= n; i++) {
    let row = "";
   for (let j = 0; j < i; j++) {
     row += String(i+ " ");
   }
   console.log(row);
}


// single number pattern 
for (let i = 0; i <= n; i++) {
    let value = 1;
    let row = "";
   for (let j = 0; j < i; j++) {
     row += String(value + " ");
   }
   console.log(row);
}
console.log("\n\n");


function printDiamond(n) {
  // Upper half
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }

  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}

printDiamond(4);

console.log("\n\n");


// Floyd’s Triangle
/*
1 
2 3 
4 5 6 
7 8 9 10eer4
*/

let num = 1;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}

console.log("\n\n");

// inverted pyramid

/*

*********
 *******
  *****
   ***
    *

*/


for (let i = n; i >= 1; i--) {
  let row = "";

  for (let space = 1; space <= n - i; space++) {
    row += " ";
  }

  for (let star = 1; star <= 2 * i - 1; star++) {
    row += "*";
  }

  console.log(row);
}



127565



