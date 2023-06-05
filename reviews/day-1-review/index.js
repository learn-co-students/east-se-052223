// .querySelector
// if it has an id => .getElementById
// let can be reassigned
// const cannot be reassigned
const heading1 = document.querySelector('h1')

// function helloWorld(parameter, parameter2) {
//   console.log(parameter, parameter2)
// }
// helloWorld("hello", "world")

// get whats within the opening and closing tag => .textContent or .innerText
// console.log(heading1)
let obj = {
  key: "value",
  anotherKey: "anotherValue",
  reviews: [
    "hello",
    "hi"
  ]
}
const conceptsToStudy = [
 { name: "DOM manipulation"},
 { name: "Event Handling"},
 { name: "array iteration"},
 { name: "accessing attributes in an objects"},
 { name: "maybe fetch"},
]

const currentlyOnDOMNum = parseInt(heading1.textContent)
heading1.textContent = currentlyOnDOMNum + 1

const nowOnDomNum = parseInt(heading1.textContent)
heading1.textContent = nowOnDomNum - 1
// const num = 1
// heading1.append(" " + num.toString())

const ul = document.getElementById('unordered-list')
console.log(ul)
// add elements to ul

// create li and add it to the DOM 3 times
// for (let i = 0; i < 3; i++) {
  // const li = document.createElement('li')
  // li.textContent = "Study DOM manipulation"
  // ul.append(li)
// }
obj.reviews.forEach(function(review) {
  const li = document.createElement('li')
  li.textContent = review
})

conceptsToStudy.forEach(function(concept) {
  const li = document.createElement('li')
  li.textContent = concept.name
  ul.append(li)
})
