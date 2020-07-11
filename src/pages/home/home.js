import React from "react";

import logo from "../../assets/logos/logo3.png";

import "../../Style/stylehome.css";

import Nabvar from "../partials/navbar";
import Footer from "../partials/footer";

function Menu() {
  return (
    <div>
      <Nabvar />
      <div className="Bodycont">
        <div className="Bodycontitle">
          <h1>Bienvenidos a Carnicería el Toorito</h1>
        </div>
        <div className="image">
          <img src={logo} alt="°1" />
          <p className="sub"><i></i>Toorito!</p>
        </div>

        <div className="BodycontText">
          <p className="contenido">
            En nuestra carnicería disponemos de personal altamente cualificado y
            especializado, que le podrán informar lo mejor posible de nuestros 
            productos brindando una atención rápida y de calidad.
          </p>
        </div>
        <div className="BodyButton">
          <button type="Default" className="ButtonFind">
           Empezar
          </button>
        </div>
      </div>

      <h1 className="containerh1">Productos</h1>
      <div className="containeretiqueteP">
        <p className="containeretiquetePp">

        <strong>En nuestro catálogo de productos te ofrecemos productos frescos y con los estándares más altos de calidad, 
          ofrecemos tres tipos de carnes.</strong> 
          
        </p>
      </div>

      <div className="containerimagesCarnes">
        <div className="containerimagesCarnesip">
          <img
            src={require("../../assets/imgs/res.jpg")}
            alt="Carne"
            className="containerimagesCarnesipimg"
          />
          <p className="containerimagesCarnesipEp">Res</p>
        </div>
        <div className="containerimagesCarnesip">
          <img
            src={require("../../assets/imgs/pollo.jpg")}
            alt=""
            className="containerimagesCarnesipimg"
          />
          <p className="containerimagesCarnesipEp">Pollo</p>
        </div>
        <div className="containerimagesCarnesip">
          <img
            src={require("../../assets/imgs/pescado.jpg")}
            alt=""
            className="containerimagesCarnesipimg"
          />
          <p className="containerimagesCarnesipEp">Pescado </p>
        </div>
      </div>

      <h1 className="containerh1">Contactos</h1>
      <div className="containeretiqueteP">
        <p className="containeretiquetePp">
        <strong>Pueden contactarnos en cualquiera de
        nuestras redes sociales o directamente al whatsapp...</strong>
        </p>
      </div>
      <div className="containerconctato">
        <div className="containerconctatologo">
          <img
            src={require("../../assets/logos/facebook.png")}
            alt="facebook"
            className="containerconctatologolog"
          />
          <p className="containerconctatologoLp">Facebook</p>
        </div>
        <div className="containerconctatologo">
          <img
            src={require("../../assets/logos/whatsapp.png")}
            alt="whatsapp"
            className="containerconctatologolog"
          />
          <p className="containerconctatologoLp">Whatsapp</p>
        </div>
        <div className="containerconctatologo">
          <img
            src={require("../../assets/logos/instagram.png")}
            alt="instagram"
            className="containerconctatologolog"
          />
          <p className="containerconctatologoLp">Instagram</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Menu;
