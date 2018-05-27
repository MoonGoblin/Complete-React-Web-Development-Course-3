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
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); //stops full page refresh to just handle the event
    
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderMe();
    }
};

const makeZero = () => {
    app.options = [];
    renderMe();
};

//JSX - JavaScript XML - a JavaScript syntax "extension" provided by REACT
const template = (
<div>
    <h1>{app.title}</h1>
    {app.subTitle && <p>{app.subTitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <p>{app.options.length}</p>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    </ol>
    <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
    </form>
</div>
);


// create "Remove All" button above list
// on click -> wipe the array -> rerender

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);

const renderMe = () => {
//JSX - JavaScript XML - a JavaScript syntax "extension" provided by REACT
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <p>{app.options.length}</p>
        <button onClick={makeZero}>Remove All</button>
        <ol>
        <li>Item one</li>
        <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
    );

    ReactDOM.render(template, appRoot);
} ;

renderMe();

// Create a render function that renders the new jsx
// Call it right away
// Call it after options array is added to