// Challenge
// Moving the component code
// Setup import/export
// Move the imports to that new file (and setup an import here)

import React from "react";
import ReactDOM from "react-dom";
import IndecisionApp from "./components/IndecisionApp";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

class OldSyntax {
    constructor() {
        this.name = "Mike";
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

// ------------
// New syntax with babel plug-in eliminates the 
// need for making a cumbersome constructor function
// however, in our first iteration we haven't yet eliviated the
// need for binding in the constructor function in IndecisionApp
// so we won't be able to completely take the constructor function
// away there yet.

class NewSyntax {
    name = "Jen";
}

const newSyntax = new NewSyntax();
console.log(newSyntax);