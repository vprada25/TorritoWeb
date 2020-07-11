import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginView from "./view";

function Login() {
  const [user, setUser] = useState(null);

  function login {
    console.log("Login llamado");
  };

  /* const getUser = async (name, password) =>
    await axios({
      method: "post",
      url: "http://localhost:5000/auth",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        nom_usuario: name,
        contrasena: password,
      },
    }).then((res) => {
      console.log(res.data);
      setUser(res.data[0]);
    }); */

  return <LoginView user={user} login={login} />;
}

export default Login;
