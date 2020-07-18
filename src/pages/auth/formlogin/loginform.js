import React from 'react';

import logo from "../../../assets/logos/logo3.png";

import "../../../Style/stylefomr.css";

// import { Link } from "react-router-dom";
class FormLogin extends React.Component {




    render() {

        return (
            <div className="raiz">
                <div className="divlogo">
                    <img src={logo} alt="logo4" className="raizimg" />
                </div>
                <h1 className="raiz-h1">Toorito</h1>
                <h2 className="raiz-h2">Formulario de registro</h2>
                <div className="raiz-contend">
                    <form >
                        <label>
                            Nombre:
          <input type="text" placeholder="" className="contend-inputs " />
                        </label>

                        <label>
                            Apellido:
          <input type="text" className="contend-inputs " />
                        </label>

                        <label>
                            Nombre de empresa:
          <input type="text" className="contend-inputs " />
                        </label>

                        <label>
                            Usuario:
          <input type="text" className="contend-inputs " />
                        </label>

                        <label>
                            Contraseña:
          <input type="password" className="contend-inputs " />
                        </label>

                        <label>
                            Confirmar contraseña:
          <input type="password" className="contend-inputs " />
                        </label>

                        <label>
                            Nit:
          <input type="text" className="contend-inputs " />
                        </label>

                        <label>
                            Telefono:
          <input type="number" className="contend-inputs " />
                        </label>
                        <div className="contend-buttons">

                            <button className="buttons-registrar">Registrar</button>
                            <button className="buttons-iniciarsesion">Inciar sesión</button>
                        </div>
                    </form>
                </div>
            </div>
            // <div className="raiz">
            //     <div className="divlogo">
            //         <img src={logo} alt="logo4" className="raizimg" />
            //     </div>
            //     <h1 className="raiz-h1">Toorito</h1>
            //     <div className="raizcard">
            //         <h2 className="raiz-h2">Formulario de registro</h2>
            //         <div className="raiz-contend">
            //             <form onSubmit={this.handleSubmit}>
            //                 <label>
            //                     Nombre:
            //                         <input type="text" value={this.state.value} onChange={this.handleChange} />
            //                 </label>
            //                 <input type="text" placeholder="nombre" className="inputs" required />
            //                 <input type="text" placeholder="apellido" className="inputs" required />
            //                 <input type="text" placeholder="Nombre de la empresa" className="inputs" required />
            //                 <input type="text" placeholder="usuario" className="inputs" required />
            //                 <input type="email" placeholder="correo" className="inputs" required />
            //                 <input type="password" placeholder="contraseña" className="inputs" required />
            //                 <input type="password" placeholder="confirmar constraseña" className="inputs" required />
            //                 <input type="text" placeholder="nit" className="inputs" required />
            //                 <input type="number" placeholder="teléfono" className="inputs" required />


            //             </form>
            //         </div>
            //         <div className="raizdivbtn">
            //             <button className="raizbtn">Registrar</button>
            //             <Link to="/Login"> <button className="raizbtn">Login</button></Link>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default FormLogin;