// alert( "Hello, World ");

// This is a single-line comment. Starts with //

/**
 * This is a multi-line comment.
 * It looks much the same as 
 * what we used in CSS!
 */

 /**
  * Assignments / variables
  */
// Variables declared with the "var" keyword are considered "function-scoped."
// Typically we aboid using var, in favor of new declaration keywords.
var myFirstVariable = "Hello";

// Variables declared with the "let" keyword, are considered "block-scoped."
// "let" variables can be re-assigned later in the program.
let mySecondVariable = "World";

// Variables declared with "const" keyword are considered "block-scoped"
// "const" variables can not be re-assigned later in the program.
const myThirdVariable = myFirstVariable + ", " + mySecondVariable;
                      // Concatenation character is the "+" sign.
                      // It glues strings together
/**
 * Data Types
 */
const myString    = "This is a string";
const myInteger   = 42;        // Ints and Floats are techincally the same data-type in JS.
const myFloat     = 16.782;    // The datatype is simply called "Number"
// const myNaN       = NaN;       // "Not a number" so when math goes wrong...
const myTrueBool  = true;      // Booleans can either be TRUE or FALSE.
const myFalseBool = false;     // Note: CAPS do matter. Must be lowercase.
const myNull      = null;      // A defined / existing variable with no assigned value.
const myUndefined = undefined; // The variable does not exist.
const myArray     = [          // Arrays can store multiple pieces of data (including other arrays)
  myString,
  myInteger,
  myFloat,
  // myNan,
  myTrueBool,
  myFalseBool,
  myNull,
  myUndefined
];

/**
 * Writing to the console.
 */
console.log(" Hello to the browser console!" );
console.log( myArray ); // We can output variables and their contents.
console.log( 10 % 3); // We can also just throw in an expressions and see what is evaluates to

/**
 * Concatenation and/vs. template literals
 */
// Standard concatenation with strings.
 const myName = "Kenji";
 const concattedString = "Hello, "+ myName + "!";
 console.log(concattedString);

 // Watch out for this gotcha! Number addition vs. concatenation.
 // They use the same operator: "+"
console.log( 3 + 3 ); // (Number) 6
console.log( 3 + "3"); // (String) "33" - This was a concatenation
console.log(3 + 3 + "3"); // (string) "63".

console.log(3 + 3 + Number("3")); // We can use the Number() function to convert string to a number.
console.log( String(3) + "3");    // We can use the String() function to convert a number to a string.

console.log( parseInt( 38.957 ) ); // Parse Int will chop the decimal off. It will not round
console.log( parseFloat( 38.957 ) ); // Parse Float will try to keep the decimal

// CONCATENATION
// const concattedString = "Hello, "+ myName + "!";

// TEMPLATE LITERAL EQUIVALENT:
const templateLiteralString = `Hello ${myName}!`;
console.log(templateLiteralString);

// Back-tick strings are white-space sensitive! This means new lines and spaces are maintained.
console.log(`
This is a string in back-ticks (\`).
It is white-space and new-line sensitive!
Great for formatting your outputs.

===

An example of a use for a template literal could be...
Our array: myArray is ${myArray.length} items long.
Its fourth index includes the value: ${myArray[4]}
`);

/** 
 * Loops in JavaScript
 */

 console.log("WHITE LOOP PRACTICE:\n");
 let myWhileIterator = 5;
 while( myWhileIterator > 0) // Repeats the code block so long as the condition evaluates to (Bool) true
 {
  console.log( myWhileIterator);
  myWhileIterator --;
 }

 console.log("FOR OF LOOP PRACTICE:\n");
 const myForArray = ["Wal-Mart", "Best-Buy", "SuperStore", "SafeWay"];
 for ( const arrayItem of myForArray)
 {  // for ... of loop works as a for each array.
    /** We don't need to set a termination condition. We also get a great way for accessing the value 
     * form each iteration, based on the name we specify before the "of" keyword
     */
    console.log( `This array item in our loop contains: ${arrayItem}`);
 }

 console.log("FOR LOOP PRACTICE:\n");
 for ( let myForIterator = -5; myForIterator < 30; myForIterator += 10 )
 {
   /**
    * for loops have 3 parts:
    * ASSIGNMENT; EXIT CONDITION (LOOP RUNS WHILE TRUE); ITERATION
    */
   console.log(`This iteration of our for loop's value is ${myForIterator}`);
 }

 /**
  * Functions in JavaScript
  */

  function myAdditionFunction ( num1 = 0, num2 = 0 ) 
  {
    return Number(num1) + Number(num2);
  }
  const add2And4 = myAdditionFunction(2,4);
  console.log(add2And4);

  // Fat-arrow function syntacx as an alternative.
  /**
   * 1) const / let for our declaration...
   * 2) the name of our function.
   * 3) assignment operator...
   * 4) Parenthesis "()" with any parameters inside.
   * 5) "fat arrow" marking the beginning of function logic.
   * 6) Two options:
   *    i)  What follows the fat arrow will simply be returned from the function.
   *    ii) We can use curly braces to manage larger instruction sets, which will give us more control over 
   *        when / how we return from the function
   * NOTE: The "this" keyword is not overwritten when using fat arrow functions,
   *       like it would be with a traditional funciton.
   * NOTE: When we set up a fuinction using an assignment, it is not "hoisted"
   *       You cannot call upon it before its delcaration. Traditional fuinctions are hoisted 
   *       and can be access anywhere in the program if in accessible scope.
   */

   const myDivisionFunction = ( num1, num2 ) => num1 / num2; // See 6.1

   const myMultiplyFunction = ( num1 = 0, num2 = 0) => {     // See: 6.ii
     const product = num1 * num2;
     return product; 
   };

   console.log("myAdd(5,5): " + myAdditionFunction(5,5));  // 10
   console.log("myDivision(8,2): " + myDivisionFunction(8,2));  // 4
   console.log("myMultiply(3,5): " + myMultiplyFunction(3,5));  // 15

   /**
    * JavaScript Objects
    */

    const myPersonInfoArray = [
      "Henry",
      38,
      ["Skydiving", "Programming", "Mountain Climbing"]
    ];

    console.log( "Person as an array:");
    console.log(myPersonInfoArray);
    console.log( `Name is: ${myPersonInfoArray[0]}`);

    const myObject = {
      name: "Henry",
      age: 38,
      hobbies: ["Skydiving", "Programming", "Mountain Climbing"]
    };
    console.log( "Person as an object:");
    console.log(myObject);
    console.log( `Name is: ${myObject.name}. Age is: ${myObject.age}`);
