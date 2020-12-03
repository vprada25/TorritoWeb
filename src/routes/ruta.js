import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Views

import FormLogin from "../pages/auth/formlogin";
import Login from "../pages/auth/login/index.js";
import home from "../pages/home/principal/home.js";
import info from "../pages/home/informationPage/index.js";
import ForgetPassword from "../pages/auth/formRestoreForgetPassword/ForgetPassword.js";
import RestorePasswor from "../pages/auth/formRestoreForgetPassword/restorePassword.js";
import Conctact from "../pages/home/informationPage/contact.js";
import Products from "../pages/home/product/product.js";
import Profile from "../pages/home/profile/profile.js";

//logueados
import ProductsLogueado from "../PagesLogueado/views/loginproduct";
import HomeLogueado from "../PagesLogueado/views/homelogueado";
import Productlist from "../PagesLogueado/views/productlist";
import RegisterEmployee from "../PagesLogueado/views/employee/registerEmployees.js";
import ConsultEmployees from "../PagesLogueado/views/employee/ConsultEmployees.js";
import UpdateEmployees from "../PagesLogueado/views/employee/updateEmployees.js";
import DesactivateEmployees from "../PagesLogueado/views/employee/desactivateEmployees.js";
import RegisterProduct from "../PagesLogueado/views/producto/RegisterProduct.js";
import ConsultProduct from "../PagesLogueado/views/producto/consultProduct.js";
import UpdateProduct from "../PagesLogueado/views/producto/UpdateProduct.js";
import DeactivateProduct from "../PagesLogueado/views/producto/desactivateProduc.js";
import SaleOrder from "../PagesLogueado/views/sale/order.js";
import SaleStore from "../PagesLogueado/views/sale/store.js";
import UserHistory from "../PagesLogueado/views/userhistory/index.js";
import ClienType from "../PagesLogueado/views/clienttype/index.js";
import GenerateSale from "../PagesLogueado/views/generateVenta/index.js";
import BuySupplier from "../PagesLogueado/views/buySupplier/index.js";
import ModuleEmployee from "../PagesLogueado/views/moduleEmployee/index.js";
import ModuleAdmin from "../PagesLogueado/views/moduleAdmin/index.js";
import OrdersBuy from "../PagesLogueado/views/ordersbuy/index.js";
import UpdateCategory from "../PagesLogueado/views/UpdateCategory/index.js";
import EmployeesList from "../PagesLogueado/views/employeesList/index.js";
//tablas basicas
import ModifyCompany from "../TablesBasics/views/modifyCompany/index.js";
//import TypeDocument from '../TablesBasics/views/TypeDocument/typeDocument';
import OrderAdmind from "../PagesLogueado/views/saleAdmin/orderAdmin";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <Route
            path="/DesactivateEmployees"
            component={DesactivateEmployees}
          />
          <Route path="/RegisterProduct" component={RegisterProduct} />
          <Route path="/ConsultProduct" component={ConsultProduct} />
          <Route path="/UpdateProduct" component={UpdateProduct} />
          <Route path="/DesactivateProduct" component={DeactivateProduct} />
          <Route path="/SaleOrder" component={SaleOrder} />
          <Route path="/SaleStore" component={SaleStore} />
          <Route path="/ModifyCompany" component={ModifyCompany} />
          <Route path="/UserHistory" component={UserHistory} />
          <Route path="/ClienType" component={ClienType} />
          <Route path="/GenerateSale" component={GenerateSale} />
          <Route path="/ModuleEmployee" component={ModuleEmployee} />
          <Route path="/ModuleAdmin" component={ModuleAdmin} />
          <Route path="/OrdersBuy" component={OrdersBuy} />
          <Route path="/UpdateCategory" component={UpdateCategory} />
          <Route path="/EmployeesList" component={EmployeesList} />
          {/* <Route path="/TypeDocument" component={TypeDocument}/> */}
          <Route path="/OrderAdmin" component={OrderAdmind} />
          <Route path="/BuySupplier" component={BuySupplier} />
        </Router>
      </div>
    );
  }
}
