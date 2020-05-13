import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import Todo from './Todo';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
    }
    create(newTask) {
        this.setState({
            todos: [...this.state.todos, newTask],
        });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter((task) => task.id !== id),
        });
    }
    render() {
        const todos = this.state.todos.map((todo) => {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    removeTask={this.remove}
                />
            );
        });
        return (
            <div className='container'>
                <h1>To Do List</h1>
                <ToDoForm createTodo={this.create} />
                <ul>{todos}</ul>
            </div>
        );
    }
}

export default ToDoList;
