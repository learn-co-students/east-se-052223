// ✅ Understand Static vs. Dynamic Web Applications


  // Static => Fixed, display the same content for each user ( https://www.openbsd.org/ )
  // Dynamic => Display different content for each user, allow for user interation ( https://www.youtube.com/ )


// Review some DOM manipulation

const pokemons = [
  {
    id: 1,
    name: "Bulbasaur",
    img: "./images/bulbasaur.png",
    likes: 4,
  },
  {
    id: 2,
    name: "Ivysaur",
    img: "./images/ivysaur.png",
    likes: 21,
  },
  {
    id: 3,
    name: "Venusaur",
    img: "./images/venasaur.png",
    likes: 7,
  },
  {
    id: 4,
    name: "Charmander",
    img: "./images/charmander.png",
    likes: 20,
  },
  {
    id: 5,
    name: "Charmeleon",
    img: "./images/charmeleon.png",
    likes: 11,
  },
];

// ✅ Handling Click Events
     
  // addEventListener(event, callbackFunction);


  // when would we define callbackFunction as an anonymous function instead
  // of as a function reference?

    // addEventListener("click", () => console.log("Test"));
      // vs. 
    // addEventListener("click", doSomething);

// Add each pokemon to the pokemon container

// querySelector
// getElementById
const container = document.getElementById('poke-container')


// function handleImageClick(event, pokemon) {
//   console.log(event,pokemon)
// }

// for in loop
// forEach method
// pokemons.forEach((onePokemon) => {
//   const image = document.createElement('img')
//   // image.src = onePokemon.img
//   image.setAttribute('src', onePokemon.img)
//   image.alt = onePokemon.name
//   container.append(image)

//   image.addEventListener('click', (event) =>  handleImageClick(event, onePokemon))
// })

pokemons.forEach((onePokemon) => {
  const image = document.createElement('img')
  // image.src = onePokemon.img
  image.setAttribute('src', onePokemon.img)
  image.alt = onePokemon.name
  container.append(image)
  image.addEventListener('click', (event) =>  {
    console.log(event, onePokemon)
  })
})





// if we do not have defer in script need to listen for DOM content to load
// document.addEventListener('DOMContentLoaded', () => {
  //   console.log('domContent Loaded')
  // })

  // BONUS: event bubbling

  // BONUS: event capturing

//              PM LECTURE

// ✅ Handling Submit Events
// ✅ preventDefault
  // forms have specific behaviors by default
  // we don't need that default behavior 
  // the  submit event's preventDefault method allows us to prevent/stop that default behavior

// find form

const form = document.getElementById("poke-form")
// listen for submit event
form.addEventListener('submit', (event) => {
  event.preventDefault() // stop refresh/ default behavior
  // const nameInput = event.target.name
  // const nameInputsValue = nameInput.value

  const name = event.target["name-input"].value
  const image = event.target["img-input"].value

  const imageElement = document.createElement('img')
  imageElement.src = image
  imageElement.alt = name

  container.append(imageElement)

  imageElement.addEventListener('click', () => console.log(clicked))

  event.target.reset()
})