import React from 'react';

const NewToDo = (props) => {

    let newItemTitle = null;

    const getTodo = (user, todoName) => {
        fetch(`http://api.isa-jfdzw1.vipserv.org/todo?user=${user}&name=${todoName}`)
            .then(response => response.json())
            .then(json => console.log(json));
    }

    const createOrUpdateTodo = () => {
        const user = "agnieszka";
        const todoName = 'bardzo ważne zadania';
        const todo = [{
            title: newItemTitle.value,
            tags: ['praca', 'kurs']
        }];

        const options = {
            method: 'POST',
            body: JSON.stringify({
                user: user,
                name: todoName,
                todo: todo
                }),
            headers: new Headers({ 'Content-Type': 'application/json' })
            };

        fetch('http://api.isa-jfdzw1.vipserv.org/todo', options)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                getTodo(user, todoName);
            });

        }

    return (
        <div>
            <label>Add new to do</label><br/>
            <input type="text" ref={title => newItemTitle = title} defaultValue="title"/><br/>

            <button onClick={createOrUpdateTodo}>ADD</button>
        </div>
    )
}


export default NewToDo;