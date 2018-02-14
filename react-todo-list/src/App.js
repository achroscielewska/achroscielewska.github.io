import React from 'react';
import thunk from "redux-thunk";

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import reducer from "./reducers";

import {ToDo} from './scenes/ToDo'


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

const App = () => {
    return (
        <Provider store={store}>
          <div>

            <ToDo />

          </div>
        </Provider>

    )
};

export default App;