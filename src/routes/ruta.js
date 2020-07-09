import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Views 


import FormLogin from '../pages/formlogin/loginform.js';
import Login from '../pages/login/view.js';
import home from '../pages/home/home.js'


export default class Rutas extends Component {
    render() {
        return (
            <div>
                <Router>

                    <Route path="/" exact component={home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/FormLogin" component={FormLogin} />
                </Router>
            </div>
        );
    }
}