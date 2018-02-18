import React, {Component} from 'react';
import {connect} from 'react-redux';

import './toDo.css';

import {NewToDo} from '../components/NewToDo/NewToDo';
import ToDoList from '../components/ToDoList/ToDoList';

class ToDo extends Component  {

    componentDidMount() {
        this.props.getItemsFromApi(this.getData);
    }

    getData() {
        return dispatch => {
            dispatch({ type: "PENDING" });

            fetch(`http://api.isa-jfdzw1.vipserv.org/todo?user=agnieszka&name=bardzo ważne zadania`)
                .then(rsp => rsp.json())
                .then(data => {
                    dispatch({ type: "SUCCESS", items: data.todo});
                })
                .catch(err => {
                    dispatch({ type: "ERROR" });
                });
        };
    };

    createOrUpdateTodo(toDoList) {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                user: 'agnieszka',
                name: 'bardzo ważne zadania',
                todo: toDoList.map(index => index)
            }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        };

        fetch('http://api.isa-jfdzw1.vipserv.org/todo', options)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.getData();
            });
    };

    render () {
        return (

            <div>
                <h1>To do list</h1>
                <NewToDo/>

                <button className="saveButton"
                        onClick={this.createOrUpdateTodo(this.props.items)}>
                    SAVE LIST
                </button>

                <ToDoList
                    doDoList = {this.props.items}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.toDoItems.items
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getItemsFromApi: (getData) => dispatch(getData())
    };
};

const connectedToDo = connect(mapStateToProps , mapDispatchToProps)(ToDo);

export {connectedToDo as ToDo};