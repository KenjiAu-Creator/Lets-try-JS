// Basic JS object
const myObj = {
  name: "Joe",
  age: 35,
  hobbies: ["Movies", "Pottery"]
};

// Convert the JS object into a string.
// It should fill in missing "" for us.
const myObjString = JSON.stringify(myObj);

console.log(`My name is ${myObj.name}. I am ${myObj.age} years old!`);
console.log(myObj);

// JSON (JavaScript Object Notation)
// Properties MUST be wrapped in double quotes to be considered valid JSON.
// We CANNOT have methods in a JSON string/Object.
const secondPersonString = `{
  "name": "Sarah",
  "age": 29,
  "hobbies": [ "Deep sea fishing", "Cycling" ]
}`;

console.log(secondPersonString);
// Convert a string into regular JS object we can use.
const secondPersonObj = JSON.parse(secondPersonString);
// If the string was properly formatted JSON, it should now be usable!
// It will throw an error if not!
console.log(secondPersonObj);

/**
 * Classes (Blueprints for a "Type" of Object!)
 * Typically PascalCased.
 */

class Person {
  // "constructor" is a reserved method name.
  // The constructor method runs when a new object is
  // being created following this blueprint / class.
  constructor(name = "", age = 0, hobbies = []) {
    // "this" is a keyword that refers to the object
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

// Now we can make an object that FOLLOWS the blueprint.
const jane = new Person(
  "Jane",
  34,
  ["Sewing", "Cross-country Skiing"]
);

console.log( jane );