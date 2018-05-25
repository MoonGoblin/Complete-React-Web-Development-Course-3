// arguments object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

const add2 = (a, b) => {
    //console.log(arguments); //arrow functions do not give you access to arguments in functions  
    return a + b;
}

console.log(add(55,1));
console.log(add2(50,75));


// this keyword - no longer bound with arrow functions

const user = {
    name: "Dave",
    cities: ['San Diego', "New York", "Dublin"],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        const that = this; //work around for binding issue

        this.cities.forEach(function(city) {
            console.log(that.name + " has lived in " + city);
        });
    }
};

user.printPlacesLived();


const user2 = {
    name: "Dave",
    cities: ['Disneyland', "New York", "Dublin"],
    printPlacesLived: function () {
        // console.log(this.name);
        // console.log(this.cities);

        // return this.cities.map((city) => {
        //     return this.name + " has lived in " + city + "!";
        // });

        return this.cities.map((city) => this.name + " has lived in " + city + "!");
 
        //return cityMessages;

        //this not bound in arrow function so will take on this of parent function
        // this.cities.forEach((city) => {
        //     console.log(this.name + " has lived in " + city);
        // });
    }

};

console.log(user2.printPlacesLived());

// Challenge area

const multiplier = {
    // array of numbers
    numbers: [1, 2, 3],
    
    // single number - multiplyBy

    myMultiplier: 2,

    // get array back multiplied by second item
    // multiply - return a new array where the numbers have been multiplied

    multiply: function () {
        return this.numbers.map((eachNumber) => this.myMultiplier * eachNumber );
    }

};

console.log(multiplier.multiply());