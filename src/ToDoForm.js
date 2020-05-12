import React, { Component } from 'react';
import Todo from './Todo';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            item: '',
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor='item'>Todo Item</label>
                    <input
                        type='text'
                        name='item'
                        value={this.state.item}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
                <Todo />
            </div>
        );
    }
}

export default TodoForm;
