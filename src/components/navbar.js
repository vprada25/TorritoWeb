import React from 'react';


import "../Style/stylenavbar.css"

export default function Footer() {
  return (
    <div className="Header">

      <div className="Headertitlebos">
        <p className="p2"> Toorito</p>
      </div>

      <div className="HeaderNavList">
        
          <ul className="unavbar">
            <li>
              <a href="/" >Principal</a>
            </li>

            <li>
              <a href="/Login" >Iniciar sesión</a>

            </li>

            <li>
              <a href="/Products" >Productos</a>

              
            </li>

            <li >
              <a href="a" >Redes Sociales</a>
            
            </li>

            <li>
              <a href="/Contact" >Contactános</a>
            </li>
          </ul>
        
      </div>
    </div>
  );
}