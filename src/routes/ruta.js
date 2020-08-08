import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Views 


 import FormLogin from '../pages/auth/formlogin';
 import Login from '../pages/auth/login/index.js';
 import home from '../pages/home/principal/home.js'
 import info from '../pages/home/informationPage/index.js'
 import ForgetPassword from '../pages/auth/formRestoreForgetPassword/ForgetPassword.js';
 import RestorePasswor from '../pages/auth/formRestoreForgetPassword/restorePassword.js';
 import Conctact from '../pages/home/informationPage/contact.js';
 import Products from '../pages/home/product/product.js';
 import Profile from '../pages/home/profile/profile.js';
 



//logueados
 import ProductsLogueado from '../PagesLogueado/views/loginproduct';
 import HomeLogueado from '../PagesLogueado/views/homelogueado';
 import RegisterProducts from '../PagesLogueado/views/registerproducts';
 import EmployessList from '../PagesLogueado/views/employeeslist';
export default class Rutas extends Component {
    render() {
        return (
            <div>
                <Router>
                    
                    <Route path="/" exact component={home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/FormLogin" component={FormLogin} />
                    <Route path="/Info" component={info} />
                    <Route path="/ForgetPassword" component={ForgetPassword}/>
                    <Route path="/RestorePassword" component={RestorePasswor}/>
                    <Route path="/Contact" component={Conctact}/>
                    <Route path="/Products" component={Products}/>
                    <Route path="/ProductsLogueado" component={ProductsLogueado}/>
                    <Route path="/HomeLogueado" component={HomeLogueado}/> 
                    <Route path="/Profile" component={Profile}/>
                    <Route path="/RegisterProducts" component={RegisterProducts}/>
                    <Route path="/EmployesRegister" component={EmployessList}/>

                </Router>
                   
            </div>
        );
    }
}