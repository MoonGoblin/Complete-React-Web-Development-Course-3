// Challenge
// create a person.js file
// two name exports - isAdult(18) - returns true if adult, otherwise false
// canDrink(18) - true if 21 and over, otherwise false
// import isAdult and canDrink
// use both printing result to the console


const isAdult = (age) => {
    if (age > 17) {
        return true;
    } else {
        return false;
    }
};

// Short version:
// const isAdult = (age) => age >= 18;

const canDrink = (age) => {
    if (age > 20) {
        return true;
    } else {
        return false;
    }
};

// Short version:
// const canDrink = (age) => age >= 21;

export { isAdult, canDrink }