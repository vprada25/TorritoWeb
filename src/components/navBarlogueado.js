import React from 'react';


import "../PagesLogueado/Style/styleNavbar.css"


export default function navBar() {
    return (
        <div c>
            <div className="Header">

                <div className="Headertitlebost">
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

                            <ul>
                                <li>
                                    <a href="s"> Res</a>
                                </li>

                                <li>
                                    <a href="s"> cerdo</a>
                                </li>

                                <li>
                                    <a href="s">Pollo</a></li>

                                <li>
                                    <a href="f">Pescado</a>
                                </li>

                            </ul>
                        </li>

                        <li >
                            <a href="a" >Redes Sociales</a>
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
                            <a href="/Contact" >Contactános</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    );

}