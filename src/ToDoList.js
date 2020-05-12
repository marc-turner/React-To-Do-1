import React, { Component } from 'react';
import ToDoForm from './ToDoForm';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{ item: 'Go Shopping' }],
        };
        this.addItem = this.addItem.bind(this);
    }
    addItem() {
        //
    }
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <ToDoForm />
            </div>
        );
    }
}

export default ToDoList;
