// install -> import -> use
// google npm validator
// dig in documentation to figure out what to import
// the "require" way to import was made popular by nodejs
// here we are using the ES6 version with "import"
// webpack will figure out the relative path of where its from if 
// you name the area in node_modules exactly

// google npm react - we will want this
// google npm react-dom - we also want this so we can render our components to the browser
// In terminal:
// yarn add react@16.0.0 react-dom@16.0.0

import React from "react";
import ReactDOM from "react-dom";

//const template = React.createElement('p', {}, 'testing 123'); // (Not using babel yet - no support for JSX yet) We'll fix this soon - we just need to render to screen
const template = <p>testing again, 123!! THIS IS JSX!</p>;
ReactDOM.render(template, document.getElementById('app'));