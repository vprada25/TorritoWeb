import React from 'react';

import logo from "../../assets/imgs/logo4.png";

import "../../Style/stylefomr.css";
function FormLogin() {
    return (
        <div className="raiz">
            <h1 className="raizh1">Toorito</h1>
            <img src={logo} alt="logo4" className="raizimg" />
            <div className="raizcard">
                <h2>Form Registre</h2>
                <form className="raizform">
                <input type="text" placeholder="nombre" className="raizinput"/>
                <input type="text" placeholder="apellido" className="raizinput"/>
                <input type="text" placeholder="usuario" className="raizinput"/>
                <input type="text" placeholder="correo" className="raizinput"/>
                <input type="text" placeholder="contraseña" className="raizinput"/>
                <input type="text" placeholder="confirmar con" className="raizinput"/>
                <input type="text" placeholder="telefono" className="raizinput"/>
                </form>
                <div className="raizdivbtn">
                    <button className="raizbtn">Registrar</button>
                </div>
            </div>
        </div>
    );
}

export default FormLogin;