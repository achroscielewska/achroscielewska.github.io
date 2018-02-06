import React from 'react';

import classes from './index.css';

import {Liczniki} from './scenes/Liczniki';
import Todo from './scenes/Todo';
import reducer from "./reducers";

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <div className={classes.Container}>
                <Todo />
            </div>
        </Provider>
    )
};

export default App;