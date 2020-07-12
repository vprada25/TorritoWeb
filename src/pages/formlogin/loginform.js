import React from 'react';

import logo from "../../assets/logos/logo3.png";

import "../../Style/stylefomr.css";

import { Link } from "react-router-dom";
function FormLogin() {
    return (
        <div className="raiz">
            <div className="divlogo">
            <img src={logo} alt="logo4" className="raizimg" />
            </div>
            <h1 className="raizh1">Toorito</h1>
            <div className="raizcard">
                <h2>Formulario de registro</h2>
                <form className="raizform">
                    <input type="text" placeholder="nombre" className="raizinput" />
                    <input type="text" placeholder="apellido" className="raizinput" />
                    <input type="text" placeholder="usuario" className="raizinput" />
                    <input type="text" placeholder="correo" className="raizinput" />
                    <input type="password" placeholder="contraseña" className="raizinput" />
                    <input type="password" placeholder="confirmar" className="raizinput" />
                    <input type="text" placeholder="teléfono" className="raizinput" />
                </form>
                <div className="raizdivbtn">
                    <button className="raizbtn">Registrar</button>
                    <Link to="/Login"> <button className="raizbtn">Login</button></Link>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;