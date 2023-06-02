
const topContainer = document.getElementById( 'top-container' )
const mainContainer = document.querySelector( 'main' )

const nameElement = document.getElementById( 'name' )
const bioElement = document.getElementById( 'bio' )

fetch( 'http://localhost:3000/cats' )
    .then( r => r.json() )
    .then( renderTop )

function renderTop( cats ) {
    cats.forEach( cat => {
        const span = document.createElement( 'span' )
        span.innerText = cat.name
        span.addEventListener( 'click', () => renderMain( cat ) )
        topContainer.append( span )
    } )
}

function renderMain( cat ) {
    nameElement.innerText = cat.name
    bioElement.innerText = cat.bio
}