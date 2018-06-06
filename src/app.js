class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Thing one", "Thing two", "Thing four"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}


class Header extends React.Component {
    render() {

        console.log(this.props);
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert("Here's handlePick!");

    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// setup onClick to fire the method


class Options extends React.Component {
    constructor(props) {
        //props get passed into constructor functions in Reactx
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this); //this will do the this binding for whereever we call this method
    }

    handleRemoveAll() {
        console.log(this.props.options);
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <p>Options component here. The length is {this.props.options.length}</p>
                <Option />
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

// 1. Setup the form with text input and submit button
// 2. Wire up onSubmit
// 3. Define method - handleAddOption -> fetch the value typed -> if value, then alert

class AddOption extends React.Component {
    handleAddOption(theValue) {
        theValue.preventDefault();
        const option = theValue.target.elements.option.value.trim();

        if (option) {        
            alert("You did it!!");
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));