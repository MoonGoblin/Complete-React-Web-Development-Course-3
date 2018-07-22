import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }

    // breaking out into a class property instead of binding manually
    // through the constructor function
    handleAddOption = (theValue) => {
        theValue.preventDefault();
        const option = theValue.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error }));

        if (!error) {
            theValue.target.elements.option.value = ""; //wipes input when we get valid data
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" name="option" type="text" />
                    <button className='button'>Add Option</button>
                </form>
            </div>
        );
    }
}
