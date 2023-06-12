const theContainer = document.getElementById( 'container' )

function divMaker( someString ) {
    const newDiv = document.createElement( 'div' )
    newDiv.textContent = someString
    theContainer.append( newDiv ) 
}



const theButton = document.querySelector( 'button' )

theButton.addEventListener( 'click', () => { 
    divMaker( "sebastian's string!" )
} )



const theForm = document.querySelector( 'form' )

function handleNewString( eventObject ) {
    eventObject.preventDefault()
    divMaker( eventObject.target.potato.value )
} 

theForm.addEventListener( 'submit', handleNewString )




fetch( 'http://localhost:3000/cars' )
    .then( r => r.json() )
    .then( carsArray => {

        carsArray.forEach( carObj => {
            /*
            {
                "id": 1,
                "make": "dodge",
                "engine": "v8"
            }
            */
            renderCarSelection( carObj )
        } )

    } )

function renderCarSelection( someCarObj ) {
    const span = document.createElement( 'span' )
    span.innerText = someCarObj.make

    span.addEventListener( 'click', () => renderOneCar( someCarObj ) )

    document.getElementById( 'carmakes' ).append( span )
}

const carDetailsContainer = document.getElementById( 'car-details' )


function renderOneCar( theOneCarObj ) {
    const h2 = document.querySelector( '#carname' )
    h2.textContent = theOneCarObj.make
    const h3 = document.querySelector( '#enginetype' )
    h3.innerText = theOneCarObj.engine
    
}
