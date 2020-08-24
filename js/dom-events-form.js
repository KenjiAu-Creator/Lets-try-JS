// alert( "DOM Events Form Script Loaded" );

// Let's grab our form.. it can listen for "submit"
const helloForm = document.querySelector( "form" );
console.log( helloForm );

// Let's grab our form field, so that we can access its field value.
const nameField = document.getElementById("your-name");
console.log( nameField);

// Lets grab our list, so we can output hellos to the user!
const helloList = document.querySelector( '#hello-list');
console.log(helloList);

/**
 * Event Listener: form Submit
 */

/**
 * eventListener passes an argument to our function... an event object!
 * The actual user input is not submitted to the event listener here
 * We will grab the input in the form in the logic after the "listener" 
 * activated.
 */
 helloForm.addEventListener('submit', ( event ) => {
   event.preventDefault();   // Stop the form from submitting!!
                             // We don't want a new page load!
  console.log(event);        // The full event object
  console.log(event.target); // Gets the element that the event occurred on.

  // How do we get our "value" from our form field?
  const name = nameField.value;
  console.log(name);

  // How do I make a new LI element?
  const newLI = document.createElement( "LI" ); // We want a <li>
  console.log(newLI); // Notice it is not in the page yet!
  // *** When we create an element, it is not automatically added. We have to tell it
  //  where and when to enter the webpage

  // How do I insert a value/text into the LI element?
  newLI.textContent = `Hello, ${name}!`;
  console.log(newLI.textContent); // Test that it was successfully assigned.
  console.log(newLI); // Alternatively just look at the whole object and look at the field.

  // How do I add the LI element to the page (or, our list?)
  helloList.appendChild( newLI ); // append the LI element as a child to the helloList
 } );