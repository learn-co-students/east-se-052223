// ✅ Creating & Accessing Objects

// key value pairs that we call properties
// ordering doesn't matter

// creating object literals

//   empty object (no key / value pairs)
const newObj = {
  key: "value",
  key: "value",
  // "key- ": "value"
};

//   object with single property (one key / value pair)

//   object with multiple properties of different data types (multiple key / value pairs)

// accessing object properties

//   bracket notation (in what situations would we need to use this?)

// const name = obj["name"];
// //      can use bracket notation for placeholders
// let potato = "school";
// const school = obj[potato];

//   dot notation (better for readability)
// const age = obj.age;

// const school = obj.school;
// console.log(school);
// console.log(obj);

// school.program = "Software Engineering";
// console.log(school);
// console.log(obj);

// let n = "some school name";
// school.name = n;

// console.log(school);
// console.log(obj);
//   convert object properties and values into an array

// ✅ Modifying Objects

// destructively

//   adding a property

const obj = {
  name: "Emiley",
  age: 28,
  dogs: ["Bailey", "Apollo"],
  school: {
    name: "Flatiron",
  },
};

// obj.hobbies = [];

//   changing a property value
// obj.hobbies = "";
// console.log(obj);

//   removing a property
// delete obj.hobbies;
// console.log(obj);

// nondestructively

//   use the spread operator {...} to create a clone of the original object...

// console.log(obj);

const newObject = {
  ...obj,
  hobbies: "",
};
// newObject.hobbies = [];

// console.log(newObject);
// console.log(obj);

//   ...that you can then modify without altering the original object

// ✅ Iterating Over Objects vs. Arrays

// what is the main distinction between looping and iterating?

//   for...in (iterate over keys of an object)

// for (let key in newObject) {
//   console.log(key);
//   console.log(newObject[key]);
// }

//   for...of (iterate over values of an iterable object (e.g., array, string, etc.))

for (const value of newObject.dogs) {
  console.log(value);
}
