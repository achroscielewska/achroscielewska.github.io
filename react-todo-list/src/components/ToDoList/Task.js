import React from 'react';
import './Task.css'


const Task = (props) => {

    return (

        <div className="Task">
            <b>Task:</b> {props.title} <br/>

            <button>FINISH</button>

        </div>
    )
};


export default Task;
