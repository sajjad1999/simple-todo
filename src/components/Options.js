import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div id="remove-all-div">
            <div id="remove-all-sub">
                <p id="options-title">Add Your Options Here</p>
                <button onClick={props.handleRemoveAll} disabled={!(props.hasItem)} id="remove-all-button" >remove all</button>
            </div>
            {
                props.list.map((element) => {
                    return <Option key={element} text={element} handleRemoveOne={props.handleRemoveOne} />
                })
            }
        </div>
    );
}

export default Options