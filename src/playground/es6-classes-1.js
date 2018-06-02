// Use classes to reuse code - its a like a blueprint that creates
// multiple instances - the instances can have unique features.

// Person Class - things same/things unique
// Title it with uppercase first letter by convention

class Person {
    // Where we define our class
    // Constructor function is called when we make a new instance - don't have to define one, but lose access to data
    // Have to use ES6 arrow function syntax
    // = "Anonymous" is a default value if you don't enter an argument.
    constructor(name = "Anonymous") {
        this.name = name;
    }

    getGreeting() {
        //return "Hi. I am " + this.name + "!";
        return `Hi. I am ${this.name}`; // From ES6: Called a template name with back-tick
    }

}


const me = new Person("David Rytell");

console.log(me.getGreeting());

const other = new Person();
console.log(other.getGreeting());
