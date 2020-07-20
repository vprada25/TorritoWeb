import React from "react";

import logo from "../../../assets/logos/logo3.png";

import "../../../Style/stylelogin.css";

import { Link } from "react-router-dom";
import { Input } from "reactstrap";

const LoginView = ({ user, getUser }) => {
  return (
    <div className="padre">
      <div className="contenedor-form">
        <div className="logo"><img src={logo} alt="logo4" /></div>
        
        <h1 className="form-h1">Toorito</h1>

        <div className="toggle">
          <Link to="/FormLogin" className="link-toggle">Registro</Link>
        </div>
        <h2>Iniciar Sesión</h2>
          <Input  type="text" name="username"  placeholder="Nombre de usuario" bsSize="lg" onChange={(e) => getUser(e.target.value)} />
          <Input type="password" name="email"  placeholder="Contraseña" bsSize="lg" onChange={(e) => getUser(e.target.value)}/>
          <div className="divbutton">
           <Link to="/HomeLogueado"> <button type="submit" className="buttonclas">
              Ingresar
            </button>
            </Link>
          </div>
      </div>
      {user && (
        <label>
          Welcome <b>{user.NOM_USUARIO}</b>
        </label>
      )}

      <div className="reset-pastword">
        
          <Link to="/ForgetPassword"><p className="pastword-p">Olvide mi contraseña ? </p></Link>
       
      </div>
    </div>
  );
};

export default LoginView;
