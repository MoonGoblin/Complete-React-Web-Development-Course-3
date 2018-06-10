// VisibilityToggle component - define three methods: render, 
// define constructor (bind methods and set up default state)
// method to handle on click handleToggleVisibility
// Single piece of state: visibility -> false, true
// Try to work through issues and refer back to counter example project


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: true
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }


    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
                {this.state.visibility && (<p>Here is the hidden content!!</p>)}                  
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));