import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Views 


import FormLogin from '../pages/formlogin/loginform.js';
import Login from '../pages/login';
import home from '../pages/home/home'
import info from '../pages/information'



export default class Rutas extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/" exact component={Login} />
                    <Route path="/Login" component={home} />
                    <Route path="/FormLogin" component={FormLogin} />
                    <Route path="/info" component={info} />
                </Router>
            </div>
        );
    }
}