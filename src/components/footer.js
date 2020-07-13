import React from 'react';

import "../Style/stylefooter.css";

export default function Footer() {
    return (
        <div className="containerfoot">

            <footer class="raizfooter">
                < p className="containerp">Copyright &copy; {new Date().getFullYear()}  Carnes, todos los derechos reservados.</p>
            </footer>
        </div >
    );
}