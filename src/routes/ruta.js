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
import Productlist from '../PagesLogueado/views/productlist';
import RegisterEmployee from '../PagesLogueado/views/employee/registerEmployee.js';
import ConsultEmployees from '../PagesLogueado/views/employee/ConsultEmployees.js';
import UpdateEmployees from '../PagesLogueado/views/employee/updateEmployees.js'
import DesactivateEmployees from '../PagesLogueado/views/employee/deactivateEmployees.js';
import RegisterProduct from '../PagesLogueado/views/producto/RegisterProduct.js';
import ConsultProduct from '../PagesLogueado/views/producto/consultProduct.js';
import UpdateProduct from '../PagesLogueado/views/producto/UpdateProduct.js';
import DeactivateProduct from '../PagesLogueado/views/producto/desactivateProduc.js';
import SaleOrder from '../PagesLogueado/views/sale/order.js';
import SaleStore from '../PagesLogueado/views/sale/store.js';

//tablas basicas
import TypeDocument from '../TablesBasics/views/TypeDocument/typeDocument';  
export default class Rutas extends Component {
    render() {
        return (
            <div>
                <Router>

                    <Route path="/" exact component={home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/FormLogin" component={FormLogin} />
                    <Route path="/Info" component={info} />
                    <Route path="/ForgetPassword" component={ForgetPassword} />
                    <Route path="/RestorePassword" component={RestorePasswor} />
                    <Route path="/Contact" component={Conctact} />
                    <Route path="/Products" component={Products} />
                    <Route path="/ProductsLogueado" component={ProductsLogueado} />
                    <Route path="/HomeLogueado" component={HomeLogueado} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/ProductList" component={Productlist} />
                    <Route path="/RegisterEmployees" component={RegisterEmployee} />
                    <Route path="/ConsultEmployees" component={ConsultEmployees} />
                    <Route path="/UpdateEmployees" component={UpdateEmployees} />
                    <Route path="/DeactivateEmployees" component={DesactivateEmployees} />
                    <Route path="/RegisterProduct" component={RegisterProduct} />
                    <Route path="/ConsultProduct" component={ConsultProduct} />
                    <Route path="/UpdateProduct" component={UpdateProduct} />
                    <Route path="/DeactivateProduct" component={DeactivateProduct} />
                    <Route path="/SaleOrder" component={SaleOrder} />
                    <Route path="/SaleStore" component={SaleStore} />
                    <Route path="/TypeDocument" component={TypeDocument} />
                </Router>

            </div>
        );
    }
}