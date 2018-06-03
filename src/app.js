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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

// Chalenge
// Setup options prop for Options component
// Render the length of the array
// Render new p tag for each option (set text, set key)

class Options extends React.Component {
    render() {

        return (
            <div>
                <p>Options component here. The length is {this.props.options.length}</p>
                <Option />
                {
                    this.props.options.map((option) => {
                        return <p key={option}>{option}</p>
                    })
                }
            </div>
        );
    }
}



class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option component here</p>
            </div>
        );
    }
}


class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}





ReactDOM.render(<IndecisionApp />, document.getElementById("app"));