// install -> import -> use
// google npm validator
// dig in documentation to figure out what to import
// the "require" way to import was made popular by nodejs
// here we are using the ES6 version with "import"
// webpack will figure out the relative path of where its from if 
// you name the area in node_modules exactly

import validator from "validator";

// refer to the documentation for all the cool stuf that this give you access to

console.log(validator.isEmail("test"));
console.log(validator.isEmail("test@gmail.com"));


//import "./utils.js";
// import subtract, { square, add } from "./utils.js"; // Not object but import syntax
// import isSenior, { isAdult, canDrink } from "./person.js";

// console.log("app.js is running!!!!!");
// console.log(square(4));
// console.log(add(100, 23));
// console.log(subtract(100, 75));

// console.log("Is adult? " + isAdult(19));
// console.log("Can drink? " + canDrink(19));
// console.log("isSenior = " + isSenior(64)); //returns true or false - 65 is first year of senior
// Set up the default export and function
// Grab the default and call it

// This import/export stuff is allowed by webpack