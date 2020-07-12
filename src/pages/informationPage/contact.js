import React from 'react';

import logo from '../../assets/logos/logo3.png';

import "../../Style/styleContac.css";
function Contact() {
    return (
        <div>
            <div className="general">
                <div className="divlogo">
                    <img src={logo} alt="logo" className="raizimg" />
                </div>
                <div className="generalcontac">
                    
                    <div className="contacconten">
                    <h1 className="contach1">Envianos un mensaje</h1>
                        <input type="text" placeholder="Nombre completo" className="conteninput" required />
                        <input type="text" placeholder="Correo electronico" className="conteninput" required />
                        <textarea placeholder="Escriba aqui"></textarea>
                        <button>Enviar</button>
                    </div>
                    <div className="divIconos"> </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;