import React from 'react';
import reducer from "./reducers";
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import { Grid } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './scenes/Home';
import {Details} from './scenes/Details';

const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Grid>
                    <Header/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/:id" component={Details}/>

                    </Switch>

                    <Footer/>
                </Grid>
            </BrowserRouter>
        </Provider>
    )
};

export default App;