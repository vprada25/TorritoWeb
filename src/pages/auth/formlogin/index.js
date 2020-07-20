
import React from "react";
import axios from "axios";
import SignUPView from "./loginform.js";

function GetSingUp() {
  const registerUser = async (
    name,
    lastName,
    companyName,
    userName,
    pass,
    nit,
    phone,
    rol
  ) => {
    await axios({
      method: "post",
      url: "http://localhost:5000/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        id_usuario: 12,
        nom_usuario: `${name} ${lastName}`,
        contrasena: pass,
        fk_id_rol: rol,
        person: {
          id_persona: 12,
          pri_nombre: 'mamamamama',
          seg_nombre:'mamamamama',
          pri_apellido:'mamamamama',
          seg_apellido:'mamamamama',
          direccion:'mamamamama',
          sexo:'mamamamama',
        },
      },
    }).then((res) => {
      console.log(res.data[0]);
    });
  };

  return <SignUPView getUser={registerUser} />;
}

export default GetSingUp;

