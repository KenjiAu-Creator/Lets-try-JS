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

  // We can create our own methods!
  // These work like functions but are INSIDE objects
  sayHello() {
    const helloP = document.createElement("P");
    helloP.textContent = `Hello there! I am ${this.name}, nice to meet you!`;
    document.body.appendChild(helloP);
  }

  birthday() {
    this.age++;
    const bDayH2 = document.createElement("H2");
    bDayH2.textContent = `Happy Birthday ${this.name}!`;
    document.body.appendChild(bDayH2);
    const bDayP = document.createElement("P");
    bDayP.textContent = `${this.name} is now ${this.age} years old!`;
    document.body.appendChild(bDayP);
  }

  // Lets output a list of their hobbies...
  outputHobbits() {
    const hobbiesP = document.createElement("P");
    hobbiesP.textContent = `${this.name}'s hobbies include:`
    document.body.appendChild(hobbiesP);
    // List of hobbies.
    const hobbiesUL = document.createElement("UL");

    // For of is used to look through arrays
    // For in is used to check properties in a array

    for (const hobby of this.hobbies)
    {
      const newLI = document.createElement( "LI" );
      newLI.textContent = `${hobby}`;
      hobbiesUL.appendChild( newLI );
    }
    document.body.appendChild(hobbiesUL);
  }
}

// Now we can make an object that FOLLOWS the blueprint.
const jane = new Person(
  "Jane",
  34,
  ["Sewing", "Cross-country Skiing"]
);

console.log(jane);
console.log(typeof (jane));
console.log(jane instanceof Person);

// Run sayHello() method for Jane
jane.sayHello();

console.log(jane.age);
// Happy birthday jane!
jane.birthday();
console.log(jane.age);

const dimitri = new Person(
  "Dimitri",
  41,
  ["Painting", "Driving"]
);

// Accessing properties is the same as always!
console.log(dimitri);
console.log(`My name is ${dimitri.name}. I am ${dimitri.age} years old.`);
// What are Dimitri's hobbies?
dimitri.outputHobbits();