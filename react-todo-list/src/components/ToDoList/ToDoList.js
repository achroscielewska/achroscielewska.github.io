import React from 'react';

import {Task} from './Task';

const ToDoList = (props) => {

    return (

        <ol>
            {props.doDoList.map((item, id) => (
                <Task key={id}
                      id={item.id}
                      title={item.title}
                      priority={item.priority}
                      isFinished={item.isFinished}
                />
            ))}
        </ol>

    );
};

export default ToDoList;
