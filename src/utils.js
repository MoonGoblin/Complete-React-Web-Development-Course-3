console.log("utils.js is running");

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

// two types of exports
// exports - default export - named exports

// Let's explore named exports
// Curly braces not an object here - but things we want to export

export { square, add, subtract as default };

// Could also do it this way:
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;