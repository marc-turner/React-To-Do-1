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
        this.update = this.update.bind(this);
        this.toggleComplete = this.toggleComplete.bind(this);
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
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    toggleComplete(id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    render() {
        const todos = this.state.todos.map((todo) => {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    removeTask={this.remove}
                    updateTask={this.update}
                    toggleTask={this.toggleComplete}
                />
            );
        });
        return (
            <div className='container'>
                <div>
                    <h1>
                        To Do List<span>A React App</span>
                    </h1>
                </div>
                <ul>{todos}</ul>
                <ToDoForm createTodo={this.create} />
            </div>
        );
    }
}

export default ToDoList;
