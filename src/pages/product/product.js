import React from "react";
import branch_one from "../../assets/imgs/cerdo.jpg";
import branch_two from "../../assets/imgs/res.jpg";
import branch_three from "../../assets/imgs/pollo.jpg";
import branch_four from "../../assets/imgs/pescado.jpg";
import logo from "../../assets/logos/logo3.png";
import "../../Style/styleProduct.css";

function prod() {
  return (
    <div>
      <div className="pro">
        <label> Productos</label>
        <img src={logo} alt="°1" />
      </div>
      <div className="area">
        <p className="tex">
          <br />
          <br />
          Tierna, sana, sabrosa, natural, un milagro para los sentidos, nuestra
          carne es el esfuerzo
          <br />
          de todo un grupo de trabajo para hacerles la vida un poco más
          agradable ofreciéndoles nuestros mejores productos.
          <br />
          <br />
          <br />
          <div className="imagegroup">
            <div>
              <p className="pork">Cerdo</p>
              <img src={branch_one} alt="°1" className="imagegroups" />
            </div>

            <div>
              <p className="beff">Res</p>
              <img src={branch_two} alt="°2" className="imagegroups" />
            </div>

            <div>
              <p className="chicken">Pollo</p>
              <img src={branch_three} alt="°3" className="imagegroups" />
            </div>

            <div>
              <p className="fish">Pescado</p>
              <img src={branch_four} alt="°4" className="imagegroups" />
            </div>
          </div>
        </p>
        <div className="contacto">
        <div className="contactologo">
          <img
            src={require("../../assets/logos/facebook.png")}
            alt="facebook"
            className="conlog"
          />
          <p className="conlogLp">Facebook</p>
        </div>

        <div className="contactologo">
          <img
            src={require("../../assets/logos/whatsapp.png")}
            alt="whatsapp"
            className="conlog"
          />
          <p className="conlogLp">Whatsapp</p>
        </div>

        <div className="contactologo">
          <img
            src={require("../../assets/logos/instagram.png")}
            alt="instagram"
            className="conlog"
          />
          <p className="conlogLp">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default prod;
