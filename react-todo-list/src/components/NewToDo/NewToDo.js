import React from 'react';
import {connect} from 'react-redux';

import './NewToDo.css'

const NewToDo = (props) => {

    let newItemTitle = '';

    const handleClickAdd = () => {
        props.addItem(newItemTitle.value);
    };

    return (
        <div className="newToDo">
            <label>Add new task</label><br/>
            <input className="textImput" type="text" ref={title => newItemTitle = title} defaultValue="task title"/><br/>
            <button onClick={handleClickAdd}>ADD</button>
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
        addItem: (title) => dispatch({
            type: "ADD_TO_DO",
            title,
        }),
    }
}

const connectedCounter = connect(mapStateToProps, mapDispatchToProps)(NewToDo);

export {connectedCounter as NewToDo};