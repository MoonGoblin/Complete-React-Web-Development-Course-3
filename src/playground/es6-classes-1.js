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
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); //Calls parent class constructor function
        this.major = major;
    }
    hasMajor() {
        return  !!this.major; //We are flipping twice to return true or false that you have it or not
    }
    getDescription() {
        //We are overriding this method that is in the parent class
        let description = super.getDescription();

        if(this.hasMajor()) {
            description = description += ` Their major is ${this.major}.`
        }

        return description;
    }
}


const me = new Student("David Rytell", 50, "Computer Science");
const other = new Student();



//
console.log(me.getDescription());
console.log(other.getDescription());