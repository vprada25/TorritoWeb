import React from "react";

import logo from "../../../assets/logos/logo3.png";

import "../../../Style/stylefomr.css";

// import { Link } from "react-router-dom";

class FormLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { getUser } = this.props;
    const name = document.getElementById("name");
    const lastName = document.getElementById("lastName");
    const compayName = document.getElementById("compayName");
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    const confirmPass = document.getElementById("confirmPass");
    const nit = document.getElementById("nit");
    const phone = document.getElementById("phone");

    const isValid =
      name.value !== "" &&
      lastName.value !== "" &&
      compayName.value !== "" &&
      user.value !== "" &&
      pass.value !== "" &&
      confirmPass.value !== "" &&
      nit.value !== "" &&
      phone.value !== "";

    if (isValid) {
      getUser(
        name.value,
        lastName.value,
        compayName.value,
        user.value,
        pass.value,
        confirmPass.value,
        nit.value,
        phone.value
      );
    }
    this.setState({ isValid });
  };

  render() {
    return (
      <div className="raiz">
        <div className="divlogo">
          <img src={logo} alt="logo4" className="raizimg" />
        </div>
        <h1 className="raiz-h1">Toorito</h1>
        <h2 className="raiz-h2">Formulario de registro</h2>
        <div className="raiz-contend">
          <form onSubmit={this.handleSubmit}>
            <label>
              Nombre:
              <input
                type="text"
                placeholder=""
                className="contend-inputs "
                id="name"
              />
            </label>

            <label>
              Apellido:
              <input type="text" className="contend-inputs " id="lastName" />
            </label>

            <label>
              Nombre de empresa:
              <input type="text" className="contend-inputs " id="compayName" />
            </label>

            <label>
              Usuario:
              <input type="text" className="contend-inputs " id="user" />
            </label>

            <label>
              Contraseña:
              <input type="password" className="contend-inputs " id="pass" />
            </label>

            <label>
              Confirmar contraseña:
              <input
                type="password"
                className="contend-inputs "
                id="confirmPass"
              />
            </label>

            <label>
              Nit:
              <input type="text" className="contend-inputs " id="nit" />
            </label>

            <label>
              Teléfono:
              <input type="number" className="contend-inputs " id="phone" />
            </label>

            <label> 
                Rol:
            <select className="combo">

              <option value="Empresa"> Empresa </option>
              <option value="Usuario"> Usuario </option>
            </select>
            </label>

            <div className="contend-buttons">
              <button type="submit" className="buttons-registrar">
                Registrar
              </button>
              <button className="buttons-iniciarsesion">Inciar sesión</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormLogin;
