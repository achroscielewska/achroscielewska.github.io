import React, {Component} from 'react';

import {connect} from 'react-redux';

import {NewToDo} from '../components/NewToDo/NewToDo'
import ToDoList from '../components/ToDoList/ToDoList'

class ToDo extends Component  {

    componentDidMount() {
        this.props.getItemsFromApi();
    }

    render () {

        return (

            <div>
                <h1>To do list</h1>
                <NewToDo/>

                <ToDoList
                    doDoList = {this.props.items}
                />

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        items: state.toDoItems.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getItemsFromApi: () => dispatch(getData())
    };
};

const user = "agnieszka";
const todoName = 'bardzo ważne zadania';

const getData = () => {
    return dispatch => {
        dispatch({ type: "PENDING" });

        fetch(`http://api.isa-jfdzw1.vipserv.org/todo?user=${user}&name=${todoName}`)
            .then(rsp => rsp.json())
            .then(data => {
                dispatch({ type: "SUCCESS", items: data.todo });
            })
            .catch(err => {
                dispatch({ type: "ERROR" });
            });
    };
};


const createOrUpdateTodo = () => {

    const options = {
        method: 'POST',
        body: JSON.stringify({
            user: user,
            name: todoName,
            todo: this.props.items
        }),
        headers: new Headers({ 'Content-Type': 'application/json' })
    };

    fetch('http://api.isa-jfdzw1.vipserv.org/todo', options)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            getData();
        });

}


const connectedToDo = connect(mapStateToProps , mapDispatchToProps)(ToDo);

export {connectedToDo as ToDo};