console.log("App.js is running!");

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

const appRoot = document.getElementById("app");

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
                {/* map over app.options getting back an array of list items 
                (set key and text for each)*/
            
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })

                    //Alternate syntax:
                    //app.options.map((option) => <li key={option}>{option}</li>)
            }
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