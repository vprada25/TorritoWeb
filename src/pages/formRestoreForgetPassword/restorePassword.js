import React from 'react';

import "../../Style/stylerestorePassword.css"

import logo from '../../assets/logos/logo3.png';
function restorePassword() {
    return (
        <div className="generalraiz">
            <div className="generalg">
                <div className="divlogo">
                    <img src={logo} alt="Logo" className="raizimg" />
                </div>
                <h1 className="generalh1">Restablecer Contraseña</h1>
                <div className="generalcontendiv">
                    <p className="generalp">Digite su contraseña</p>
                    <form >
                        <input type="password" placeholder="contraseña" className="generalinput" />
                        <input type="password" placeholder="Confirme su contraseña" className="generalinput" />
                        <button className="generalbtn">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default restorePassword;