import React from "react";

import logo from "../../../assets/logos/logo3.png";

import "../../../Style/stylelogin.css";

import { Link } from "react-router-dom";

const LoginView = ({ user, getUser }) => {
  console.log(user);
  console.log(getUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_password = document.getElementById("user_password").value;
    const name = document.getElementById("user_name").value;
    getUser(name, user_password);
  };

  return (
    <div className="padre">
      <div className="contenedor-form">
        <div className="logo"><img src={logo} alt="logo4" /></div>
        
        <h1 className="form-h1">Toorito</h1>

        <div className="toggle">
          <Link to="/FormLogin" className="link-toggle">Registro</Link>
        </div>
        <h2>Iniciar Sesión</h2>
        <form action="#" onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Usuario" 
          id="user_name" 
          required 
          className="inputlogin"
          />
          <input
            type="password"
            placeholder="contraseña"
            id="user_password"
            required
            className="inputlogin"
          />
          <div className="divbutton">
           <Link to="/HomeLogueado"> <button type="submit" className="buttonclas">
              Ingresar
            </button>
            </Link>
          </div>
        </form>
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
