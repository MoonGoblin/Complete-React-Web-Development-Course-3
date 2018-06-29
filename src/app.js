//import "./utils.js";
import { square, add } from "./utils.js"; // Not object but import syntax
import { isAdult, canDrink } from "./person.js";

console.log("app.js is running!!!!!");

console.log(square(4));
console.log(add(100, 23));
console.log("Is adult? " + isAdult(19));
console.log("Can drink? " + canDrink(19));
