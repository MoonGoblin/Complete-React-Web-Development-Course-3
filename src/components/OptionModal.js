import React from 'react';
import  Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal 
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption} // allows escape key and clicking background to remove modal
        contentLabel="Selected Option">

        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption} >Okay</button>
    </Modal>
    );

export default OptionModal;

// Create a new event handler in IndecisionApp that clears the selectedOption state (sets back to undefined)
// Pass that into OptionModal
// Call it on button click