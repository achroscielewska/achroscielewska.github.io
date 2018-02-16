import React from 'react';

import {Task} from './Task';

const ToDoList = (props) => {

        return (
            <ol>
                {props.doDoList.map((item,id) => (
                    <Task key={id}
                          id={id}
                          title= {item.title}
                          priority={item.priority}
                          finised={item.finised}
                    />
                ))}
            </ol>
        );
}


export default ToDoList;
