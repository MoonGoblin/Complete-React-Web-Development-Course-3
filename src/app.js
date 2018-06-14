class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.state = {
            options: ["Thing one", "Thing two", "Thing three"]
        };

    }

    // handleDeleteOptions
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }
    
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
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
                <button onClick={this.handlePick} disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        );
    }
}

// Add Remove All button
// Setup handleRemoveAll -> alert some message
// setup onClick to fire the method


class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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