import React from 'react';
import { Link} from 'react-router-dom';

import "../../Style/stylenavbar.css";

export default function Footer() {
    return (
        <div className="Header">

        <div className="Headertitlebos">
          <p className="p2"> Toorito</p>
        </div>



        <ul className="HeaderNavList" >
          <li>
            <Link to={`/Home`} ><p className="styleohome">Home</p></Link>
          </li>
          <li>
            <p className="styleohome"><Link to={"/Login"} >Login</Link></p>
          </li>
          <li>
            <Link to="/" ><p className="styleohome">Products</p></Link>
          </li>
          <li>
            <Link to="/" ><p className="styleohome">Contac</p></Link>
          </li>
        </ul>


      </div>
    );
}