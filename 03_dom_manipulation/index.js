


/* 1. find a DOM element => .querySelector() 

    Finds the FIRST instance of whatever we're trying to find.
    Takes an argument of a string.  That string can be:
      -the tag name
      -the ID if using a hashtag, e.g.:
        document.querySelector( '#meow' )
      -the class if using a single dot, e.g.:
        document.querySelector( '.meow' )

*/
// const theHeader = document.querySelector( '.meow' )
// console.log( theHeader )




/* 2. find a collection of DOM elements => .querySelectorAll() 
  same rules apply with ids & classes, i.e. dots & hashtags

  const theNodeList = document.querySelectorAll( 'div' )

    A NodeList is *kinda* like an array, but doesn't have all the different
    array methods.

  "for of" is one way to iterate through the node list
  .forEach is another

  Another way to to make an array from the NodeList
  Array.from( theNodeList ).map
                           .filter
                           .find
                           .reduce

                           then any of the array methods will work!  :) 

*/

// const theNodeList = document.querySelectorAll( 'div' )
// console.log( theNodeList )




/* 3. find a DOM element by its ID => .getElementById() */

// const foundElement = document.getElementById( 'first' )

// console.log( foundElement )



/* 4. find a collection of elements by tag name .getElementsByTagName() 

  returns an "HTMLCollection", which is a little less functional than the
  NodeList, can't even call forEach on it.

*/

/* 5. find a collection of elements by class => .getElementsByClassName() 

  also returns HTMLCollection
*/

// const theElements = document.getElementsByClassName( 'meow' )

// console.log( theElements )





/* 6. create a new element => .createElement() 

  takes an argument of a string
  that string better be a valid HTML element

  making a new element like this WILL NOT automaticly put it on the DOM
  we need to append!



*/

const newHeader = document.createElement( 'h2' )
/*
      attributes can be changed with dot notation!

      newHeader.id = 'meow' => <div id="meow" class="funstuff"></div>
*/





/* 7. append an element to the DOM => .append() & .appendChild() 

    append can be called on any DOM element that can have children

    appendChild only takes one argument, where append can take multiple
    then all elements would get appended. e.g.:

      .appendChild( oneElement )

      .append( oneElement, two, three, asMany )

    <div>
      <span></span>
    </div>

*/

// const theDiv = document.getElementById( 'first' )
// const newSpan = document.createElement( 'span' )
// newSpan.textContent = 'a new span!'

// theDiv.append( newSpan )





/* 8. remove an element from the DOM => .remove() 

  can be called on any element on the DOM!
*/

//document.querySelector( 'body' ).remove() // <-- removes everything lol!!



/* 9. change the text inside an element => .textContent & .innerText 

    <div>
      we want to change the text that is inside the element
    </div>

    in general, both are interchangeable, textContent will show newlines
    though
*/

// const someHeader = document.querySelector( 'h1' )

// someHeader.textContent = 'A NEW BUNCH OF TEXT'





/* 10. set the HTML inside an element => .innerHTML 

    kinda DANGERZONE when getting the string from the user

*/

const someDiv = document.createElement( 'div' )


someDiv.innerHTML = `
  <h1>header</h1>
  <span>
    <p></p>
  </span>
  <img/>
`





/*
    BONUS!

  11. see the parent of an element => .parentElement()

  12. see the children of an element => .children
*/