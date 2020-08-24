// First things first.. is our file loading into the browser?
// alert( "DOM EVENTS JS LOADED" );
// console.log( "DOM EVENTS JS LOADED" );
// Normally the above is removed once you know its working.

/**
 * Targetting vis the DOM (Document Object Model) in JavaScript
 */

 const myH2 = document.getElementById( 'target-me');
 console.log( myH2 ); // We can see in the console if we successfully grabbed the element

 // Lets try and grab the proceeding paragraph...
 const myP = document.querySelector( "#target-me + p" ); // Target a <p> DIRECTLY
                                                         // AFTER the element with id="target-me"
console.log( myP );

// Lets grab the hover button
const hoverButton = document.querySelector( "p > button" ); // Remember querySelector grabs the FIRST match only
console.log( hoverButton );

// Lets grab the first span
const firstSpan = document.querySelector( "p > span:nth-child(2) " );
console.log(firstSpan);

// Lets grab the click button
const clickButton = document.querySelector( "p > button:nth-of-type(2)" );
console.log(clickButton);

// Lets grab the second Span
const secondSpan = document.querySelector("p > span:nth-child(4)");
console.log(secondSpan);

/**
 * DOM / ELEMENT Manipulation
 */

 // We can use JavaScript to cupdate / replace the content in elements.
 myH2.textContent = "This H2 was found and updated!";
 console.log("Outputted string into our <h2> element!");

 // We are replacing the existing CSS String.
 myH2.className = 'salmon-text';
 console.log( 'Change the H2 font color to "salmon"');

 /**
  * We can add "listeners" to elements... they "listen" to user actions.
  * When a user action is detected, we can have our JS follow a set of instructions.
  */

  // We can add Event listeners to HTML Element objects.
  /** 
   * There are two arguments to the addEventListener method:
   *  1) The type of event (by name)
   *  2) The instructions (what should run when the event occurs).
   * 
   *     (This means a function)
   * 
   * addEventListener( 'Interaction', Parameters => logic)
   * You must have parameters even if empty ones! 
   */
  console.log(firstSpan.classList)
  hoverButton.addEventListener( 'mouseenter', () => {
    console.log( 'The mouse has entered the button!');
    // Add our class to the list for this element.
    firstSpan.classList.add('salmon-text'); 
    console.log(firstSpan.classList)
  } );
  hoverButton.addEventListener( 'mouseleave', () => {
    console.log( 'The mouse has left the button!');
    // Remove our class from the list for this element.
    firstSpan.classList.remove('salmon-text'); 
    console.log(firstSpan.classList)
  } );

  // Lets listen for a click on the button element
  clickButton.addEventListener( "click", () => {
    console.log("The 'clicked' button was clicked");
    if (secondSpan.classList.contains( 'salmon-text' ))
    {  // If the class is already there, remove it.
      secondSpan.classList.remove( 'salmon-text' );
    }
    else
    {  // If not then add it.
      secondSpan.classList.add( 'salmon-text' );
    }
  } );