import React, {Component } from 'react';
import {connect} from 'react-redux';

import Task from './Task';

class ToDoList extends Component {

    componentDidMount() {
        this.props.getItemsFromApi();
    }

    render() {
        console.log(this.props.items)

        return (
            <ol>

                {this.props.items.map((item,id) => (
                    <Task key={id}
                          id={id}
                          title= {item.title}
                    />
                ))}
            </ol>
        );
    }
}

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

const connectedToDoList = connect(mapStateToProps , mapDispatchToProps)(ToDoList);

export {connectedToDoList as ToDoList};
