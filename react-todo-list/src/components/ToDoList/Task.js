import React from 'react';
import {connect} from 'react-redux';

import './Task.css'


const Task = (props) => {

    const handleClickTaskDone = () => {
        props.finised(props.id);

    }
    return (


        <div className="Task">
            <p><b>Task:</b> {props.title}</p>
            <p><b>Priority:</b> {props.priority}</p>
            <p>Finished: <u>{props.finised ? "no":"yes"}</u></p>

            <button className="taskButton" onClick={handleClickTaskDone}>FINISH</button>
            <button className="taskButton">DELETE</button>

        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        finised: (id) => dispatch({
            type: "FINISHED",
            id,
        }),

    }
}


const connectedCounter = connect(null, mapDispatchToProps)(Task);

export {connectedCounter as Task};
