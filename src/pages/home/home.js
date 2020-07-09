import React from 'react';

import logo from '../../assets/imgs/logo4.png';

import "../../Style/stylehome.css";

function Menu() {
  return (
    <div className="raiz">




      <div className="Bodycont">

        <div className="Bodycontitle"><h1>Bienvenidos a Carnicería el  Toorito</h1></div>
        <div className="image">
            <img src={logo} alt="°1" />
            <p>Toorito!</p>
          </div>
        
        <div className="BodycontText"><p>En nuestra carnicería disponemos de personal altamente cualificado y especializado, que le podrán informar lo mejor posible de nuestros productos  brindando una atención rápida y de calidad.</p></div>
        <div className="BodyButton"><button type="Default" className="ButtonFind">GET STARTED</button></div>
      </div>

    </div>
  );

}
export default Menu;

