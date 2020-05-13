import React, { Component } from "react";
import {Router, Link, Route, Switch} from "react-router-dom";
import history from '../history';
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";

class Routes extends React.Component {
    render() {
        return(
            <Router history={history}>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;