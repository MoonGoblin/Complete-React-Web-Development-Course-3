class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision";
        const subtitle = "Put your life in the hands of a computer";
        const options = ["Thing one", "Thing two", "Thing four"];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options />
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


class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options component here</p>
                <Option />
            </div>
        );
    }
}

// Challenge
// Option -> static test: Option component here
// Will be nested in Options component

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