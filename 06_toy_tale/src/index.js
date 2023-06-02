let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});




const container = document.getElementById('toy-collection')
// Create an event listener that gives users the ability to click a button to "like" a toy. When the button is clicked, the number of likes should be updated to the DOM


// add click event listeners to the buttons in the cards
// when click happens
  // find the current number of likes
  // increase likes by 1
  // update DOM with new likes 

function renderToy(toy) {
  const card = document.createElement('div')
  const nameHeading = document.createElement('h2')
  const image = document.createElement('img')
  const likesParagraph = document.createElement('p')
  const button = document.createElement('button')

  nameHeading.innerText = toy.name
  image.src = toy.image
  image.alt = toy.name
  image.className = 'toy-avatar'
  likesParagraph.textContent = `${toy.likes} likes`
  button.textContent = 'Like'

  card.append(nameHeading)
  card.append(image)
  card.append(likesParagraph)
  card.append(button)

  container.append(card)

  button.addEventListener('click', (event) => {
    toy.likes = toy.likes + 1
    likesParagraph.textContent = `${toy.likes} likes`
  })
}

fetch('http://localhost:3000/toys')
  .then((response) => response.json())
  .then(allToyData => {
    allToyData.forEach(renderToy)

  })


// Hook up a form that enables users to add new toys. Create an event listener so that, when the form is submitted, a new card showing the toy is added to the DOM
// be able to add toys to the DOM from the form

// find the form
// listen for submit on form
// when submitted
  // get info/data from form inputs
  // put new Toy on dom in card

const form = document.getElementById('toy-form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const name = event.target.name.value
  const imageUrl = event.target.image.value

  const newToy = {
    name: name,
    image: imageUrl,
    likes: 0
  }

  renderToy(newToy)
})


