// Basic JS object
const myObj = {
  name: "Joe",
  age: 35,
  hobbies: [ "Movies", "Pottery" ]
};

console.log( `My name is ${myObj.name}. I am ${myObj.age} years old!` );
console.log( myObj );
// JSON (JavaScript Object Notation)
// Properties MUST be wrapped in double quotes to be considered valid JSON.
// We CANNOT have methods in a JSON string/Object.
const secondPersonString = `{
  "name": "Sarah",
  "age": 29,
  "hobbies": [ "Deep sea fishing", "Cycling" ]
}`;

console.log( secondPersonString );
// Convert a string into regular JS object we can use.
const secondPersonObj = JSON.parse( secondPersonString );
// If the string was properly formatted JSON, it should now be usable!
// It will throw an error if not!
console.log( secondPersonObj );