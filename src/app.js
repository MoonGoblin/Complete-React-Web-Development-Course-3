//import "./utils.js";
import subtract, { square, add } from "./utils.js"; // Not object but import syntax
import isSenior, { isAdult, canDrink } from "./person.js";

// console.log("app.js is running!!!!!");
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 75));

console.log("Is adult? " + isAdult(19));
console.log("Can drink? " + canDrink(19));
console.log("isSenior = " + isSenior(64)); //returns true or false - 65 is first year of senior
// Set up the default export and function
// Grab the default and call it

// This import/export stuff is allowed by webpack