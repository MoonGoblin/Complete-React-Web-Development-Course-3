import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
    }

    handleAddOption(theValue) {
        theValue.preventDefault();
        const option = theValue.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        if (!error) {
            theValue.target.elements.option.value = ""; //wipes input when we get valid data
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input name="option" type="text" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
