class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ["Thing one", "Thing two", "Thing three"]
        };

    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    // Challenge
    // handlePick - pass down to Action and setup onClick - bind here
    // it will randomly pick an option and alert it. (Reuse the onMakeDecision method 
    // in jsx-indecision.js file)
    // Down below you can remove the method handlePick which we won't be using anymore.
    // You should be able to click on "What should I do" you should be getting an
    // alert with the actual randomly chosen option text.
    
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
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


    render() {
        return (
            <div>
                <button onClick={this.props.handlePick} disabled={!this.props.hasOptions}>
                    What should I do?
                </button>
            </div>
        );
    }
}



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