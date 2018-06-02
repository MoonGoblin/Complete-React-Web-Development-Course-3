// Use classes to reuse code - its a like a blueprint that creates
// multiple instances - the instances can have unique features.

// Person Class - things same/things unique
// Title it with uppercase first letter by convention

// Challenge
// Setup up constructor to take name and age (default to 0).
// Setup a new method - getDescription - David Rytell is 26 year(s) old.


class Person {
    // Where we define our class
    // Constructor function is called when we make a new instance - don't have to define one, but lose access to data
    // Have to use ES6 arrow function syntax
    // = "Anonymous" is a default value if you don't enter an argument.
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        //return "Hi. I am " + this.name + "!";
        return `Hi. I am ${this.name}`; // From ES6: Called a template name with back-tick
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`
    }

}


const me = new Person("David Rytell", 50);
console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());


//
console.log(me.getDescription());
console.log(other.getDescription());