import React from 'react';
import {connect} from 'react-redux';

import './NewToDo.css'

const NewToDo = (props) => {

    let newItemTitle = '';
    let newItemPriority = '';

    const handleClickAdd = () => {
        props.addItem(newItemTitle.value, newItemPriority.value);
    };


    return (
        <div className="newToDo">
            <label>Add new task:</label><br/>
            <input className="textImput" type="text" ref={title => newItemTitle = title} defaultValue="task title"/><br/>
            <label>Priority:</label><br/>
            <select className="select" ref={priority => newItemPriority = priority} defaultValue="task priority">
                <option value="asap">asap</option>
                <option value="important task">important task</option>
                <option value="nice_to_do">nice to do</option>
            </select><br/>
            <button className="addButton" onClick={handleClickAdd}>ADD</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.toDo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (title,priority) => dispatch({
            type: "ADD_TO_DO",
            title,
            priority

        }),
    }
}

const connectedCounter = connect(mapStateToProps, mapDispatchToProps)(NewToDo);

export {connectedCounter as NewToDo};