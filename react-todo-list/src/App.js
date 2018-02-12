import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from "./reducers";

import ToDo from './scenes/ToDo'


const store = createStore(reducer);

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