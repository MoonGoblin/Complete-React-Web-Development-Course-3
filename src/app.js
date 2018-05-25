console.log("App.js is running!");

// create app object title/subtitle
// use title/subtitle in the template
// render template

// only render the subtitle (and p tag) if the subtitle exists - logical and operator
// create a new property in app options: ["One", "Two"]
// conditionally render a new p tag - set text on whether or not there are options - 
// if options.length > 0 "Here are your options" else "No options" new paragraph tag below 
// subtitle - ternary operator would be a great fit

const app = {
    title: "Indecision App",
    subTitle: "Put your life in your computer's hands!",
    options: ["One", "Two"]
}


//JSX - JavaScript XML - a JavaScript syntax "extension" provided by REACT
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    </ol>
</div>
);

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne" everytime button is clicked
// Make reset button "reset" - setup reset function - log "reset"

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();