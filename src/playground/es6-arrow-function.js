// const square = function (x) {   
//     return x * x;
// };

// // const squareArrow = (x) => {
// //     return x * x;
// // };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(95));



// Challenge - use arrow functions
// getFirstName - same as in es6-let-const.js
// getFirstName("Mike Smith") -> Mike
// Create regular arrow function
// Create arrow function using shorthand syntax


const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
};

console.log("Here's the first name with long arrow function: ", getFirstName("David Ryell"));

const getFirstNameShort = (fullName) => fullName.split(" ")[0];

console.log("Here's the first name with the short arrow function: ", getFirstNameShort("David Rytell"));
