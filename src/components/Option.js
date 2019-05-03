import React from 'react'

const Option = (props) => {
    const removeOne = () => {
        props.handleRemoveOne(props.text)
    } 
    return (
        <div id="option-div">
            <p id="option-text">{props.text}</p>
            <button onClick={removeOne} id="remove-option" >remove</button>
        </div>
    );
}

export default Option