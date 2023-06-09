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

// Add each pokemon to the pokemon container



// ✅ Handling Click Events
     
  // addEventListener(event, callbackFunction);



  // when would we define callbackFunction as an anonymous function instead
  // of as a function reference?

    // addEventListener("click", () => console.log("Test"));
      // vs. 
    // addEventListener("click", doSomething);

    

  // BONUS: event bubbling

  // BONUS: event capturing





//              PM LECTURE

// ✅ Handling Submit Events

   

// ✅ preventDefault
  // forms have specific behaviors by default
  // we don't need that default behavior 
  // the  submit event's preventDefault method allows us to prevent/stop that default behavior