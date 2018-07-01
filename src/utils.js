console.log("utils.js is running");

export const square = (x) => x * x;

export const add = (a, b) => a + b;

export default (a, b) => a - b;

// two types of exports
// exports - default export - named exports

// Let's explore named exports
// Curly braces not an object here - but things we want to export

//export { square, add, subtract as default };

// Could also do it this way:
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;