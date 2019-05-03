import React, {Component} from 'react'
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'

export default class Parent extends Component {
    state = {
        title: 'TODO APP',
        subtitle: 'Manage Your Works',
        options: ['start learning','practice a lot']
    }

    handleRemoveAll = () => {
        this.setState(() => ({options: []}))
    }
    handleRemoveOne = (item) => {
        this.setState((preState) => ({options: preState.options.filter((arg) => arg !== item)}))
    }
    handleAddOption = (item) => {
        if(!item) {
            alert('please enter a(an) todo')
        }else if(this.state.options.includes(item)) {
            alert('this todo already exists')
        }else{
        this.setState((preState) => ({options: preState.options.concat(item)}))
        }
    }
    handleRandomTodo = () => {
        const randomIndex = Math.floor(Math.random() * this.state.options.length)
        alert(this.state.options[randomIndex])
    }
    render() {
        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle} />
                <Action hasItem={this.state.options.length > 0} handleRandomTodo={this.handleRandomTodo} />
                <div id="main-div">
                    <Options list={this.state.options} hasItem={this.state.options.length > 0} handleRemoveAll={this.handleRemoveAll} handleRemoveOne={this.handleRemoveOne} />
                    <AddOption handleAddOption={this.handleAddOption} />
                </div>
            </div>
        );
    }
}