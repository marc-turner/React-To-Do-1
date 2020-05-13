import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            task: this.props.task,
        };
        this.removeTask = this.removeTask.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }
    removeTask() {
        this.props.removeTask(this.props.id);
    }
    toggleForm(id) {
        this.setState({
            isEditing: !this.state.isEditing,
        });
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.updateTask(this.props.id, this.state.task);
        this.setState({
            isEditing: false,
        });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    handleToggle(e) {
        this.props.toggleTask(this.props.id);
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input
                            type='text'
                            name='task'
                            value={this.state.task}
                            onChange={this.handleChange}
                        />
                        <button>Submit</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div className='Todo'>
                    <li
                        className={this.props.completed ? 'completed' : ''}
                        onClick={this.handleToggle}
                    >
                        {this.props.task}
                    </li>
                    <button onClick={this.toggleForm}>edit</button>
                    <button onClick={this.removeTask}>x</button>
                </div>
            );
        }
        return result;
    }
}

export default Todo;
