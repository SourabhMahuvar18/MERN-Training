// exploring the array methods

//--------------------------------------------------mutating methods--------------------------------------------------------------------------//

let arr = [1, 2, 3];
// console.log(`original array : ${arr}`);

// arr.push(4, 5);
// console.log(arr); // [1, 2, 3, 4, 5]

// let removedElem = arr.pop();
// console.log(arr);

let val = arr.shift();
// console.log(`Array : ${arr} after removing ${val}`);

let val2 = arr.unshift(0);
// console.log(`Array : ${arr} after adding ${val}`);

// splice method - can do anything regarding the arrays {add, remove replace}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1

// arr2.splice(1, 2);
// console.log(arr2); // [1, 4, 5]

// // Insert elements at index 1 without removing
// arr2.splice(1, 0, 2, 3);
// console.log(arr2); // [1, 2, 3, 4, 5]

// // Replace 1 element at index 3
// arr2.splice(3, 1, 99);
// console.log(arr2); // [1, 2, 3, 99, 5]

// array.splice(1,0,88);

// // array.splice(8,1,);
// console.log(`Array after changes : ${array}`);
// array.splice(2);
// console.log(`Array after changes : ${array}`);

//--------------------------------------------------non mutating methods--------------------------------------------------------------------------//

// methods which doesn't change the original array, but they return a new array instead

let nums = [1, 2, 3, 4, 5];

let doubled = nums.map((n) => n * 2);
// console.log(doubled);
// console.log(`Original Array : `, nums);

let evens = nums.filter((n) => n % 2 == 0);
// console.log(evens);

let sum = nums.reduce((sum, n) => sum + n, 0);
// console.log(`sum of nums array : ${sum}`);

let firstEven = nums.find((n) => n % 2 === 0); // find and return first elemnet that match the conditon
// console.log(firstEven); // 2

let index = nums.findIndex((n) => n > 3);

// console.log(index); // 3, return -1 if not found anything according to condition

let hasEven = nums.some((n) => n % 2 === 0);

// console.log(hasEven); // true

let allPositive = nums.every((n) => n > 0);

// console.log(allPositive); // true

// other methods
// flat - flatten the array according to given depth
let arr3 = [1, 2, [3, 4], [5, [6]]];
// console.log(arr3.flat(3));
// console.log(arr3);


let nums1 = [1, 2, 3];

let result = nums1.flatMap(n => [n, n * 2]);

// console.log(result);
// [1, 2, 2, 4, 3, 6]

let nums4 = [10, 20, 30];

console.log(nums4.includes(20));// true
nums4.includes(40); // false
console.log(nums4.indexOfkjj(20));


