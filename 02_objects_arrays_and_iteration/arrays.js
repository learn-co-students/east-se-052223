// ✅ Creating / Accessing Arrays

//   what are arrays?

//  storing collection of data
//  making a list
//  elements are data in arrays
//  index starts at 0

//   define an array with several values
//   can contain a mix of data types
//   what is the technical term for these individual items?

// const firstArry = [1, "string", {}];
// const lastElement = firstArry[2];

// count items in an array

// console.log(firstArry.length);
// const length = firstArry.length - 1;
// const lastElement = firstArry[length];
// console.log(lastElement);

//   access elements in an array
//   array elements must be accessed with nonnegative integers as indexes
//   start at 0 index

// ✅ Modifying Arrays

// arrays are resizable
// adding elements to an array

//   add element to end of array

// firstArray.push("world");

//   add element to beginning of array

// firstArray.unshift("HI");

// removing elements from an array

//   remove last element and return that element
// const removedElement = firstArray.pop();
// console.log(removedElement);

//   remove first element and return that element

// const firstElementRemoved = firstArray.shift();
// console.log(firstArray, firstElementRemoved);

//   return the element at the index provided in a new array

// const newArry = firstArray.slice(1);

//   return all elements where index >= 0 and index < 2
// const newArry = firstArray.slice(0, 2);
// console.log(newArry);
// console.log(firstArray);

//   starting at index 1, return 2 elements

//   add elements where others are removed

// firstArray.splice(1, 2, "HI", "Hey", "another");

// console.log(firstArray);

// ✅ Iterating Through Arrays

//   looping over arrays

//   for loop
// for (let i = 0; i < firstArray.length; i++) {
//   console.log(firstArray[i]);
//   console.log(i);
// }
//   do while loop
// let i = 0;
// do {
//   console.log(firstArray[i]);
//   i++;
// } while (i < firstArray.length);

//   for...of loop

// for (const element of firstArray) {
//   console.log(element);
// }

//   while loop

// while(condition) {

// }

// ✅ Array Iteration Methods

//   What are callback functions?
const firstArray = ["hello", ",", "World", "blah"];
console.log(firstArray);

//   .forEach()
// returns undefined

// function callbackFunct(element, index, array) {
//   const withExclammation = element + "!";
//   return withExclammation;
// }

// const forEachReturns = firstArray.forEach(callbackFunct);

// console.log(forEachReturns);

//   .map()
// returns a new array

// const whatMapReturns = firstArray.map((element) => {
//   const withExclammation = element + "!";
//   return withExclammation;
// });

const whatMapReturns = firstArray.map((element) => element + "!");
console.log(whatMapReturns);

//   .filter()

//   .find()
