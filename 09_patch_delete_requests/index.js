
const topContainer = document.getElementById( 'top-container' )
const mainContainer = document.querySelector( 'main' )

const nameElement = document.getElementById( 'name' )
const bioElement = document.getElementById( 'bio' )


const newCatForm = document.querySelector( '#new-cat' )
newCatForm.addEventListener( 'submit', ( e ) => {
    e.preventDefault()
    const newCat = {
        name: e.target.name.value, 
        bio: e.target.bio.value
    }
    console.log( 'beforeDB:', newCat )
    /*
        There are more requests than just GET!

            GET - retrieve some data
            POST - make something new
            PATCH - change something tha already exists
            DELTE - delete something from the database
    */
    const theSecondArgument = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( newCat )
    }
    //renderSingleTop( newCat ) //<- independent of fetch, i.e. optimistic
    fetch( 'http://localhost:3000/cats', theSecondArgument )
        .then( r => r.json() ) 
        .then( freshCat => {
            renderSingleTop( freshCat ) // <- dependent on a successful fetch
                                        //    i.e. pessimistic
        } )
    /*
        Two different ways to update the DOM after making our POST request:
            optimistic
            pessimistic
    */
} )


const editCatForm = document.querySelector( '#update-cat')

editCatForm.addEventListener( 'submit', e => {
    e.preventDefault()

    const updatedCat = {
        name: e.target.name.value,
        bio: e.target.bio.value
    }

    const theId = document.querySelector( 'main' ).id

   

    fetch( `http://localhost:3000/cats/${theId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( updatedCat )
    } )
        .then( r => r.json() )
        .then( freshCat => {
            renderMain( freshCat )
        } )

} )



const theDeleteButton = document.querySelector( 'button' )

theDeleteButton.addEventListener( 'click', () => {
    
    const theId = document.querySelector( 'main' ).id

    fetch( `http://localhost:3000/cats/${theId}`, {
        method: 'DELETE'
    } )
        .then( () => {
            renderMain({ name: '', bio: '' })
            document.querySelector( `span#cat-${theId}` ).remove()
        } )
} )



fetch( 'http://localhost:3000/cats' )
    .then( r => r.json() )
    .then( cArray => {
        renderTop( cArray )
    } )


function renderTop( catsArray ) {
    catsArray.forEach( renderSingleTop )
}

function renderSingleTop( cat ) {
    const span = document.createElement( 'span' )
    span.innerText = cat.name
    span.id = `cat-${cat.id}`
    span.addEventListener( 'click', () => renderMain( cat ) )
    topContainer.append( span )
}

function renderMain( cat ) {
    document.querySelector( 'main' ).id = cat.id
    nameElement.innerText = cat.name
    bioElement.innerText = cat.bio
}