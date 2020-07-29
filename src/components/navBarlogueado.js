import React from "react";

import logo from "../assets/logos/logo3.png";
import "../PagesLogueado/Style/styleNavbar.css";

export default function navBar() {
  return (
    <div>
      <div className="Header">
        <div className="Headertitlebost">
          <div className="conlogin">
            <div><h1 className="titlehomelogueado">Toorito</h1> </div>
            <div className="logomenu">
              <img src={logo} alt="°1" />{" "}
            </div>
          </div>
        </div>

        <div className="HeaderNavList">
          <ul className="unavbar">
            <li>
              <a href="/">Principal</a>
            </li>

            <li>
              <a href="/Login">inventario</a>
              <ul>
                <li>
                  <a href="RegisterProducts">productos</a>
                </li>

                <li>
                  <a href="EmployessList">empleados</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Login">Administrar</a>
              <ul>
                <li>
                  <a href="s">empleado</a>
                </li>

                <li>
                  <a href="s">producto</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/Products">Comprar Productos</a>

              <ul>
                <li>
                  <a href="ProductsLogueado"> Res</a>
                </li>

                <li>
                  <a href="ProductsLogueado"> cerdo</a>
                </li>

                <li>
                  <a href="ProductsLogueado">Pollo</a>
                </li>

                <li>
                  <a href="ProductsLogueado">Pescado</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="a">Redes Sociales</a>
              <ul>
                <li>
                  <a href="a">Instagram</a>
                </li>

                <li>
                  <a href="a">Whatsapp</a>
                </li>

                <li>
                  <a href="a">Facebook</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/Contact">Contactános</a>
            </li>
            <li>
              <a href="/Info">Información</a>
            </li>
            <div className="color"><button type="Default" className="toclose">Cerrar sesión</button></div>
          </ul>
        </div>
      </div>
    </div>
  );
}
