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
    phone
  ) => {
    await axios({
      method: "post",
      url: "http://localhost:5000/auth/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        /* id_usuario, */
        nom_usuario: `${name} ${lastName}`,
        contrasena: pass,
        fk_id_rol: 1,
        person: 7,
      },
    }).then((res) => {
      console.log(res.data[0]);
    });
  };

  return <SignUPView getUser={registerUser} />;
}

export default GetSingUp;
