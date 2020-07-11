import React from "react";

import logo from "../../assets/logos/logo3.png";

import "../../Style/stylelogin.css";

import { Link } from "react-router-dom";

const LoginView = ({ user, login }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const user_password = document.getElementById('contrasena').value;
    const name = document.getElementById('user_name').value;
    /* login(name, user_password); */
    login();
  };

  return (
    <div className="padre">
      <div className="contenedor-form">
        <div className="logo"></div>
        <img src={logo} alt="logo4" />
        <h1>Toorito</h1>

        <div className="toggle">
          <Link to="/FormLogin">Registro</Link>
        </div>
        <h2>Iniciar Sesión</h2>
        <form action="#" onSubmit={handleSubmit}>
          <input type="text" placeholder="Usuario" id="user_name" required />
          <input
            type="password"
            placeholder="contraseña"
            id="contrasena"
            required
          />
          <div className="divbutton">
            <button type="submit" className="buttonclas">
              Ingresar
            </button>
          </div>
        </form>
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
};

export default LoginView;
