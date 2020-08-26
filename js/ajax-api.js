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
        const peopleUL = document.createElement("UL");
        for (const person of people) {
            // Set up the element
            const personLI = document.createElement("LI");
            // Fill it in with text
            personLI.textContent = `On the craft ${person.craft}, astronaut ${person.name} is present!`
            // Send it into the UL we prepped
            peopleUL.appendChild(personLI);

        }
        // Add the UL to the browser!
        document.body.appendChild(peopleUL);
    })
    // We can listen to the above for an error. "Catch" it in the act!
    .catch(error => { // It is a good idea to utput it when debugging
        console.log(error);
    });

/**
 * Lets see about grabbing live data based on a timer!
 */
// My code below:
// const latDD = document.getElementById("lat")
// const longDD = document.getElementById("long")

// fetch("http://api.open-notify.org/iss-now.json")
//     .then(response => response.json())
//     .then(data => {
//         const shipPosition = data.iss_position;
//         latDD.innerHTML = shipPosition.latitude;
//         longDD.innerHTML = shipPosition.longitude;
//     });

// Classes code below:
const latDD = document.getElementById("lat")
const longDD = document.getElementById("long")
const updateLatLong = () => {
    // First things first, grab the data
    fetch("http://api.open-notify.org/iss-now.json")
        .then( response => {return response.json(); } )
        .then(data => { // Check if the data came through
            console.log ( data );
            // Grab our latitude and longitude from the object
            const shipPosition = data.iss_position;
            const lat = shipPosition.latitude;
            const long = shipPosition.longitude;
            // Update the elements in the DOM.
            latDD.textContent = lat;
            longDD.textContent = long;
        })
        // catch the error if one comes up from requesting the API
        .catch(error => { console.log(error) });
}
updateLatLong(); // Runs! It updates the DOM, yay!

// Add a repeating "timer" so that this function can repeat.
// Make sure your function doesn't have braces
setInterval( updateLatLong, 1500 );  // Repeat "updateLatLong" every 1. seconds (1500 ms)