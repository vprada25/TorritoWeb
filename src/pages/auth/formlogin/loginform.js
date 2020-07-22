import React, { useState, useEffect } from 'react';

import logo from "../../../assets/logos/logo3.png";

import "../../../Style/stylefomr.css";

import { user as userAction } from '../../../services/user/userActions';

import { useSelector, useDispatch } from 'react-redux'

// import { Link } from "react-router-dom";


const FormLogin = () => {

  //const {user} = useSelector(state => state.userAction);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    // const { getUser } = this.props;
    const pri_nombre = document.getElementById("priname").value;
    const seg_nombre = document.getElementById("segname").value;
    const pri_apellido = document.getElementById("prilastname").value;
    const seg_apellido = document.getElementById("seglastname").value;
    const direccion = document.getElementById("adress").value;
    const nom_usuario = document.getElementById("user").value;
    const contrasena = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;
    console.log(rol.selectedIndex);

    const isValid =
      pri_nombre.value !== "" &&
      seg_nombre.value !== "" &&
      pri_apellido.value!=="" &&
      seg_apellido.value!=="" &&
      nom_usuario.value !== "" &&
      contrasena.value !== "" &&
      direccion.value !== "" &&
      rol.value !== "";

    const values2 = { pri_nombre, seg_nombre, pri_apellido, seg_apellido,direccion,nom_usuario,contrasena, rol }

    console.log(values2);
    if (isValid) {

      dispatch(userAction.createUser(values2))


    }

  };



  return (
    <div className="raiz">
      <div className="divlogo">
        <img src={logo} alt="logo4" className="raizimg" />
      </div>
      <h1 className="raiz-h1">Toorito</h1>
      <h2 className="raiz-h2">Formulario de registro</h2>
      <div className="raiz-contend">
        <form onSubmit={handleSubmit}>

          <label>
            Primer Nombre:
              <input
              type="text"
              placeholder=""
              className="contend-inputs "
              id="priname"
            />
          </label>

          <label>
            Segundo Nombre:
              <input
              type="text"
              placeholder=""
              className="contend-inputs "
              id="segname"
            />
          </label>

          <label>
            Apellido:
              <input type="text" className="contend-inputs " id="prilastname" />
          </label>

          <label>
            Segundo Apellido:
              <input type="text" className="contend-inputs " id="seglastname" />
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
              <input type="password" className="contend-inputs " id="password" />
          </label>


          <label>
            Nit:
              <input type="text" className="contend-inputs " id="nit" />
          </label>

          <label>
            Direccion:
              <input type="text" className="contend-inputs " id="adress" />
          </label>

          <label>
            Rol:
            <select className="combo" id="rol" >
              <option>Elija una opcion</option>
              <option value="1" > Empresa </option>
              <option value="" > Usuario </option>
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


export default FormLogin;
