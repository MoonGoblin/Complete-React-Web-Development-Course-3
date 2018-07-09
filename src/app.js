// Challenge
// Moving the component code
// Setup import/export
// Move the imports to that new file (and setup an import here)

import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.content}
            <p>footer</p>
        </div>
    );
}

const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page</p>
    </div>
);

ReactDOM.render(<Layout content={template} />, document.getElementById("app"));


// *********************************************

class OldSyntax {
    constructor() {
        this.name = "Mike";
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting() {
        return `Hi. My name is ${this.name}.`;
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax.getGreeting());

// ------------
// New syntax with babel plug-in eliminates the 
// need for making a cumbersome constructor function
// however, in our first iteration we haven't yet eliviated the
// need for binding in the constructor function in IndecisionApp
// so we won't be able to completely take the constructor function
// away there yet.

// Now below we are working on fixing the binding problem:

class NewSyntax {
    name = "Jen";
    getGreeting = () => {
        return `Hi. My name is ${this.name}.`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());