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

