// get request to http://localhost:3000/plants/1
// when we get the data back it should be one plant object
// display that plant objects details on the dom
  // find image element with id of plant-image
  // find div element with id of name
  // find div element with id of plant-info
  // find span with id of height
  // find span with id of days-unwatered
  // then update elements with the plant info

  // question about let and const
  // const obj = {
  //   name: "idk"
  // }
  // obj.name = "something else"


// find ul with id of plants
// remove placeholder li from the ul (in js or in the html)
// request to get all the plants http://localhost:3000/plants
// create li for each plant object we get from the request
// add the li to the ul with the id of plants

// do the following steps when the featured plant is rendered
// find button with id of not-watered
// listen for click on the button with id of not-watered
// find span with id of days-unwatered
// we need to know the max number of days can't go past "max_days_unwatered"
// check the current count is less than the max days unwatered

  // increase the number of days unwatered by 1
  // then change the textContent of the span with id of days-unwatered

const BASE_URL = 'http://localhost:3000'
const plantsUl = document.getElementById("plants")
plantsUl.innerHTML = ""

function renderFeaturedPlant(plant) {
  const imageElement = document.getElementById('plant-image')
  const nameElement = document.getElementById('name')
  const descriptionElement = document.querySelector('#plant-info')
  const heightElement = document.getElementById('height')
  const daysUnwateredElement = document.getElementById('days-unwatered')
  
  imageElement.src = plant.image
  imageElement.alt = plant.name
  
  nameElement.textContent = plant.name
  descriptionElement.textContent = plant.description
  heightElement.textContent = plant.height
  daysUnwateredElement.textContent = plant.days_unwatered

  const button = document.getElementById('not-watered')
  button.addEventListener('click', () => {
    if (plant.days_unwatered < plant.max_days_unwatered) {
      // plant.days_unwatered++
      plant.days_unwatered = plant.days_unwatered + 1
      daysUnwateredElement.textContent = plant.days_unwatered
    }
  })

}

function renderOneMenuPlant(plant) {
  const li = document.createElement('li')
  li.textContent = plant.name
  // optional to add styling to li
  // li.classList.add('plant')
  // li.classList.add('item')
  // li.className = "plant item"
  plantsUl.append(li)
}

fetch(BASE_URL + '/plants/1')
  .then((resp) => resp.json() )
  .then((plant) => renderFeaturedPlant(plant))

fetch(BASE_URL + '/plants')
  .then(resp => resp.json())
  .then((allPlants) => allPlants.forEach((plant) => renderOneMenuPlant(plant)))

