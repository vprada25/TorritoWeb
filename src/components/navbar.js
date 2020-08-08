import React from 'react';
import "../Style/stylenavbarmenu.css";

export default function HomeMenu() {
  
  return (
    <div className="GeneralMenu">

      <div className="Menu-titlebos">
        <p className="titlebos-p2">Toorito</p>
      </div>

      <div className="Menu-list">

        <ul className="list-ul">
          <li className="ul-li">
            <a href="/" className="li-a">Principal</a>
          </li>

          <li className="ul-li">
            <a href="/Login" className="li-a">Iniciar sesión</a>

          </li>

          <li className="ul-li">
            <a href="/Products" className="li-a">Productos</a>


          </li>

          <li className="ul-li">
            <a href="/Contact" className="li-a">Contactános</a>
          </li>
        </ul>

      </div>
    </div>
  );
}