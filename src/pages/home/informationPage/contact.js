import React from 'react';

import logo from '../../../assets/logos/logo3.png';

import 'antd/dist/antd.css';

import {FacebookOutlined,WhatsAppOutlined,InstagramOutlined } from '@ant-design/icons';

import "../../../Style/styleContac.css";
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
                        <textarea placeholder="Escriba aqui" className="contentextarea"></textarea>
                        <button className="contenbtn">Enviar</button>
                    </div>
                    <div className="divIconos"> 
                     <FacebookOutlined className="iconsfacebook" /> 
                     <WhatsAppOutlined className="iconswhatsapp" />
                     <InstagramOutlined className="iconsinstagram" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;