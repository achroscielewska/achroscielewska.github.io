import React from 'react'
import { Grid } from "react-bootstrap";

import Header from "./components/Header";
import Footer from './components/Footer';

import {BrowserRouter, Route, Switch} from "react-router-dom"

import Home from "./scenes/Home";
import Details from "./scenes/Details";

class App  extends  React.Component {
    state = {
        cartItems: []
    }

    render() {
        return (
            <BrowserRouter>
                <Grid>
                    <Header/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/home/details" component={Details}/>

                    </Switch>

                    <Footer/>
                </Grid>
            </BrowserRouter>
        )
    }
}

export default App;