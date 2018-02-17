import React from 'react';
import {connect} from 'react-redux';

import './Task.css'


const Task = (props) => {

    const handleClickTaskDone = () => {
        props.finished(props.id);

    };

    const handleClickDeleteTask = () => {
        props.remove(props.id);

    };

    return (

        <div className="Task">
            <p><b>Task:</b> {props.title}</p>
            <p><b>Priority:</b> {props.priority}</p>
            <p>Finished: <u>{props.isFinished ? "yes":"no"}</u></p>

            <button className="taskButton" onClick={handleClickTaskDone}>{props.isFinished ? "REOPEN":"FINISH"}</button>
            <button className="taskButton" onClick={handleClickDeleteTask}>DELETE</button>

        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        finished: (id) => dispatch({
            type: "FINISHED",
            id,
        }),
        remove: (id) => dispatch({
            type: "REMOVE",
            id,
        }),

    }
};


const connectedCounter = connect(null, mapDispatchToProps)(Task);

export {connectedCounter as Task};
