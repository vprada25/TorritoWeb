import React from "react";
import logo from "../../assets/logos/logo3.png";
import branch_one from "../../assets/imgs/cerdo.jpg";
import branch_two from "../../assets/imgs/res.jpg";
import branch_three from "../../assets/imgs/pollo.jpg";
import branch_four from "../../assets/imgs/pescado.jpg";
import sancocho from "../../assets/imgs/sancocho.jpg";
import Footer from "../../components/footer";
import "../../Style/styleinfo.css";

function info() {
  return (
    <div>
      <div className="principal">
        <img src={logo} alt="°1" />
        <div className="images-branchs">
          <img src={branch_one} alt="°1" className="image-branch" />
          <img src={branch_two} alt="°2" className="image-branch" />
          <img src={branch_three} alt="°3" className="image-branch" />
          <img src={branch_four} alt="°4" className="image-branch" />
        </div>
        <div className="info">
          <label className="title">Información</label>
          <em style={{ textAlign: "right", maxWidth: 340 }}>
            En carnicería el Toorito manejamos los mejores precios y la mejor
            calidad de productos con una variedad insuperables.
          </em>
        </div>
      </div>
      <hr className="linea" />
      <div className="body-section">
        <p className="references">
          <em>
            Se apuesta por la innovación y la mejora continua. Trabajamos para
            ofrecer la mejor calidad de todos nuestros productos cárnicos y
            garantizar una perfecta trazabilidad, lo que nos ayuda a satisfacer
            las necesidades y exigencias de nuestros clientes y consumidores.
          </em>
        </p>
        <div>
          <img src={sancocho} alt="°4" className="image-body" />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
export default info;
