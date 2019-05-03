import React ,{Component} from 'react'

export default class AddOption extends Component {
    handleAddOption = (e) => {
        e.preventDefault()
        this.props.handleAddOption(e.target.elements.newOption.value)
        e.target.elements.newOption.value = ''
    }
    render () {
        return (
            <form id="form-add" onSubmit={this.handleAddOption}>
                <input id="input-add" type="text" name="newOption" placeholder="add here ..."/>
                <button id="submit-add">add</button>
            </form>
        );
    }
}