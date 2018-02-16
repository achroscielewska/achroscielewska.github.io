import React from 'react';
import './Task.css'


const Task = (props) => {

    return (

        <div className="Task">
            <b>Task:</b> {props.title} <br/>

            <button>FINISH</button>
            <button>DELETE</button>

        </div>
    )
};


export default Task;
