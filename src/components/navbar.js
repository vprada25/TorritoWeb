import React from 'react';
import { Link} from 'react-router-dom';

import "../Style/stylenavbar.css"

export default function Footer() {
    return (
        <div className="Header">

        <div className="Headertitlebos">
          <p className="p2"> Toorito</p>
        </div>



        <ul className="HeaderNavList" >
          <li>
            <Link to={"/"} ><p className="styleohome">Principal</p></Link>
          </li>
          <li>
            <p className="styleohome"><Link to={"/Login"} >Iniciar sesión</Link></p>
          </li>
          <li>
            <Link to="/" ><p className="styleohome">Productos</p></Link>
          </li>
          <li>
            <Link to="/Contact" ><p className="styleohome">Contacto</p></Link>
          </li>
        </ul>


      </div>
    );
}