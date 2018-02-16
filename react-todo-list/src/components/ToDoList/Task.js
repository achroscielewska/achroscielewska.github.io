import React from 'react';
import './Task.css'


const Task = (props) => {

    return (


        <div className="Task">
            <p><b>Task:</b> {props.title}</p>
            <p><b>Priority:</b> {props.priority}</p>

            <button className="taskButton">FINISH</button>
            <button className="taskButton">DELETE</button>

        </div>
    )
};


export default Task;
