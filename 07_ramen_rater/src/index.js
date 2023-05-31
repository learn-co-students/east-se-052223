




const ramensURL = 'http://localhost:3000/ramens'

const topContainer = document.getElementById( 'ramen-menu' )
const nameElement = document.querySelector( '.name' )
const imageElement = document.querySelector( '.detail-image' )
const restaurantElement = document.querySelector( '.restaurant' )
const ratingElement = document.getElementById( 'rating-display' )
const commentElement = document.getElementById( 'comment-display' )
const theForm = document.getElementById( 'new-ramen' )


theForm.addEventListener( 'submit', e => {
    e.preventDefault()
    const newRamenObj = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }
    renderSingleTop( newRamenObj )
} )


fetch( ramensURL )
    .then( r => r.json() )
    .then( theArrayOfRamenObjects => {
        renderTopMenu( theArrayOfRamenObjects )
    } )


function renderTopMenu( ramensArray ) {
    ramensArray.forEach( ramenObject => { 
        renderSingleTop( ramenObject )
    } )
}

function renderSingleTop( oneRamenObj ) { 
    const img = document.createElement( 'img' )
    img.src = oneRamenObj.image
    img.addEventListener( 'click', () => renderMain( oneRamenObj ) )
    topContainer.append( img )
}

function renderMain( thatRamenObj ) {
    nameElement.innerText = thatRamenObj.name
    imageElement.src = thatRamenObj.image
    restaurantElement.textContent = thatRamenObj.restaurant
    ratingElement.innerText = thatRamenObj.rating
    commentElement.innerText = thatRamenObj.comment
}
