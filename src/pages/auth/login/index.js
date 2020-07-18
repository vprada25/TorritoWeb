import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginView from "./view";

const Login = () => {
  const [user, setUser] = useState(null);

  const getUser = async (name, password) => {
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
      console.log(res.data[0]);
      setUser(res);
    });
  };

  return <LoginView user={user} getUser={getUser} />;
};

export default Login;
