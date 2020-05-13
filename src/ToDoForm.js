import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const newTask = { ...this.state, id: uuidv4() };
        this.props.createTodo(newTask);
        this.setState({
            task: '',
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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task'>Todo Item</label>
                    <input
                        type='text'
                        name='task'
                        id='task'
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;
