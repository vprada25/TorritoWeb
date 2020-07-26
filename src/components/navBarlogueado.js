import React from "react";

import logo from "../assets/logos/logo3.png";
import "../PagesLogueado/Style/styleNavbar.css";

export default function navBar() {
  return (
    <div>
      <div className="Header">
        <div className="Headertitlebost">
          <div className="conlogin">
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
              <a href="/Login">Iniciar sesión</a>
              <ul>
                <li>
                  <a href="s">empresario</a>
                </li>

                <li>
                  <a href="s">cliente</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/Login">Registrar</a>
              <ul>
                <li>
                  <a href="s">empresario</a>
                </li>

                <li>
                  <a href="s">producto</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/Products">Productos</a>

              <ul>
                <li>
                  <a href="s"> Res</a>
                </li>

                <li>
                  <a href="s"> cerdo</a>
                </li>

                <li>
                  <a href="s">Pollo</a>
                </li>

                <li>
                  <a href="f">Pescado</a>
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
              <a href="/about">Información</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
