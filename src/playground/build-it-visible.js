console.log("Here I am!");


const appRoot = document.getElementById("app");

let visibility = false;

const changeIt = () => {
   
    visibility = !visibility;
    
    // if (visibility == true) {
    //     visibility = false;
    // } else
    // {
    //     visibility = true;
    // }
    renderMe();
}


const renderMe = () => {
    //JSX - JavaScript XML - a JavaScript syntax "extension" provided by REACT
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={changeIt}>{visibility ? "Hide details" : "Show details"}</button>
            <p>{visibility && (<p>Here is the hidden content!!</p>)}</p>          
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

renderMe();




