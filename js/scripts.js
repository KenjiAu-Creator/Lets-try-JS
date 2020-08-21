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
const myNaN       = NaN;       // "Not a number" so when math goes wrong...
const myTrueBool  = true;      // Booleans can either be TRUE or FALSE.
const myFalseBool = false;     // Note: CAPS do matter. Must be lowercase.
const myNull      = null;      // A defined / existing variable with no assigned value.
const myUndefined = undefined; // The variable does not exist.
const myArray     = [          // Arrays can store multiple pieces of data (including other arrays)
  myString,
  myInteger,
  myFloat,
  myNan,
  myTrueBool,
  myFalseBool,
  myNull,
  myUndefined
];
