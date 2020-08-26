// alert("AJAX API JS loaded!"); 

/**
 * AJAX (Asynchronous JavaScript And XML)
 * ============================================================
 * Lets us use JavaScript to request information from separate
 * URLs (mmake separate HTTP/HTTPS requests) post-initial page-
 * load.
 * 
 * Despite AJAX referring to XML, we are /usually/ dealing with
 * JSON--formatted data responses here in 2020.
 * 
 * The modern way to make AJAX requests with JS usually entails
 * use of the built-in "fetch()" function/feature.
 */

// First arguement in "fetch" should be the URL (or resource.)
// If this URL is an API, we refer to this as an "endpoint".
// Look up more on fetch method when you need more parameters in your request.
fetch(`http://api.open-notify.org/astros.json`)
    // Our function returns a JS object (converted from our
    // JSON string that the API provides).
    .then(response => response.json())
    // Look up promises if you want to look up how .then works
    // Lets check to see if our object is here!
    .then(data => {
        //check data... it is an object with properties!
        console.log(data);
        // Grab the people from the object.
        const people = data.people;
        // The array is in the "people" property
        console.log(people); // This should be the array!
        // Lets prep some HTML for output in the browser.
        const peopleUL = document.createElement( "UL" );
        for (const person of people)
        {
            // Set up the element
            const personLI = document.createElement( "LI" );
            // Fill it in with text
            personLI.textContent = `On the craft ${person.craft}, astronaut ${person.name} is present!`
            // Send it into the UL we prepped
            peopleUL.appendChild( personLI );

        }
        // Add the UL to the browser!
        document.body.appendChild(peopleUL);
    });