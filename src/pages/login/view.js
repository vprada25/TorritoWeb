import React from "react";

import logo from "../../assets/imgs/logo4.png";

import "../../Style/stylelogin.css";



import {Link} from "react-router-dom";


const LoginView = ({ user }) => (
  <div className="padre">
    <div className="contenedor-form">
      <div className="logo"></div>
      <img src={logo} alt="logo4" />
      <h1>Toorito</h1>

      <div className="toggle">
        <Link to="/FormLogin">Registro</Link>
      </div>
      <h2>Iniciar Sesión</h2>
      <form action="#">
        <input type="text" placeholder="Usuario" required />
        <input type="password" placeholder="contraseña" required />
      </form>
      <button className="buttonclas">Ingresar</button>
    </div>
    {user && (
      <label>
        Welcome <b>{user.NOM_USUARIO}</b>
      </label>
    )}

    <div className="reset-pastword">
      <p>
        <a href="defrgth">Olvide mi contraseña ?</a>
      </p>
    </div>
  </div>
);

export default LoginView;
