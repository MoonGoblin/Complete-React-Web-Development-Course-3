class Header extends React.Component {
    render() {
        return (
            <div>
            <h1>Indecision</h1>
            <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}


// Challenge
// Options class will contain a list of all the available options
// Options -> render static text - "Options component here"

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options component here</p>
            </div>
        );
    }
}

// Add Option Component - will have our form
// AddOption -> static text - AddOption component here

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}


const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);



ReactDOM.render(jsx, document.getElementById("app"));