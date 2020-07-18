import React from 'react';

import logo from '../../../assets/logos/logo3.png';

import "../../../Style/styleforgetPassword.css"

function ForgetPassword() {

    return (
        <div className="raiz">
            <div className="raizgeneral">
                <div className="divlogo">
                    <img src={logo} alt="Logo" className="raizimg" />
                </div>
                <h1 className="raizh1">Bienvenido</h1>
                <div className="line"></div>

                <div className="raizdivcontend">
                    <p className="contendp">Porfavor digite su correo para restablecer su contraseña</p>
                    <input type="email" className="contendinput " placeholder="correo@correo.com" required />
                    <button className="raizbtn">Enviar</button>
                </div>

            </div>
        </div>
    );
}

export default ForgetPassword;

