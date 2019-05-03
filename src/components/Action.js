import React from 'react'

const Action = (props) => {
    return (
        <div id="action-div">
            <button onClick={props.handleRandomTodo} id="random-button" disabled={!(props.hasItem)}>what to do</button>
        </div>
    );
}
export default Action