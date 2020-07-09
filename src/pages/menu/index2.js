import React from 'react';
import logo from "../../assets/imgs/logo4.png";



import "./estilos2.css";


function Menu() {
    return (
    <div className="raiz">
        <h2 class="uppercase opacity-zero show animated fadeInDown" data-animate="fadeInDown" data-delay="0">Bienvenidos a Carnicería el  Toorito </h2>
        <img src={logo} alt="logo4" className="raizimg" />
        <h3 class="uppercase opacity-zero show animated fadeInDown" data-animate="fadeInDown" data-delay="0"><b>¿Quiénes somos? </b></h3>
        <h4 class="uppercase opacity-zero show animated fadeInDown" data-animate="fadeInDown" data-delay="0"><p>En nuestra <b>carnicería</b> disponemos de personal altamente cualificado y especializado,</p> que le podrán informar lo mejor posible de nuestros <b>productos</b> brindando una atención rápida y de calidad.</h4>
    </div>
    
    
       
    );
}
export default Menu;
