import React, { Component } from 'react';
// import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
    }
    removeTask() {
        this.props.removeTask(this.props.id);
    }
    render() {
        return (
            <div className='Todo'>
                <li>{this.props.task}</li>
                <button>edit</button>
                <button onClick={this.removeTask}>x</button>
            </div>
        );
    }
}

export default Todo;
