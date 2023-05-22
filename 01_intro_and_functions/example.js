


let potato = 'the tasty treat' //can be changed
const meow = 'cat sound' // can not be changed





/*
                                FUNCTIONS!

                                    or

                    A tale of two pairs of parenthesis

        There are TWO WAYS the parenthesis will be used:
            1. The first way
                - where we can declare variables
            
            2. Every other way, i.e. NOT the first way
                - where we can give those variable values
*/


function funStuff( theParam ) { // <--  the first parenthesis
    //console.log( `this got invoked an argument of ${paramOne}` )
    return `this argument was ${ theParam }`
}

//funStuff() // <--- the "other" parenthesis

const first = funStuff( 'adam' )
const second = funStuff( 'emiley' )
const third = funStuff( "all y'all!" )

// console.log( first )
// console.log( second )
// console.log( third )
                                    


/*

                            SCOPE!

                              or

                Who can we see out the peephole!

*/



const globalVariable = 'the globe!' // <----  global scope

function otherStuff() {
    const functionVariable = 'in the function' // <----  function scope

    if( 1 === 1 ) {
        const blockVariable = 'in the code block' // <----  block scope
        console.log( functionVariable )
    }
}


/*
            "callbacks" & "higher order functions"

            all a "higher order" function is, is a function that takes other
            functions as arguments

            all a "callback" is, is a function passed as an argument to 
            another function
*/







/* we're assuming 'someSpell' is going to be a function we can use */
function giveMeTheSpell( aParameterThatBetterBeGivenAFunction ) {
    
    aParameterThatBetterBeGivenAFunction()
}









function theFunctionWeAreGoingToGive() {
    console.log( 'hello world' )
}



// if we don't give giveMeTheSpell a function, it will break.
giveMeTheSpell( theFunctionWeAreGoingToGive )








/*
                The new school "arrow" syntax

*/




// function declaration
function meowTime( thisIsStillTheParameter ) {
    console.log( 'meow')
    return 'all done!'
}

// function expression
const arrowTime = ( thisIsStillTheParameter ) => {
    console.log( 'meow' )
    return 'all done!'
}


// two different ways to write a function

function thePlan() {}

const ourPlan = () => {}



[ 1,2,3,4,5,6 ].forEach( function(n) { console.log( n * 10 ) } )