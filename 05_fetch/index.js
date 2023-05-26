
/*
    We don't know how long this is going to take!

        ...because of this, fetch returns a "promise" that we can only
        access using a special method called "then"
*/


// a named example of the anonymous function we have in the first .then
const handleResponse = ( r ) => r.json()



fetch( `https://swapi.dev/api/people` )

    /*  the first dot then, were we take the JSON string of text and make it
        the data structure it represents, i.e. array or object */
    .then( ( r ) => r.json() ) // <- same as handleResponse function
    
    .then( ( peopleObj ) => {

        /* it's in this second dot then, that we finally have what we wanted
           to fetch */

        renderAllNames( peopleObj.results )
    } )


function renderAllNames( peopleArray ) {

    peopleArray.forEach( person => {
        console.log( person )
        const newHeader = document.createElement( 'h1' )
        newHeader.textContent = person.name
        document.querySelector( 'body' ).append( newHeader )
        
    } )
    
}
