import React from 'react';

import NewToDo from '../components/NewToDo/NewToDo'
import {ToDoList} from '../components/ToDoList/ToDoList'

const ToDo = () => {
    return (
        <div>
            <h1>To do list</h1>
            <NewToDo />

            <hr/>

            <ToDoList/>

        </div>
    )
};

export default ToDo;