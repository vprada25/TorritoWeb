import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginView from "./view";

const data = {
  nom_usuario: "carlo95",
  contrasena: "1234",
};

const Login = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios({
      method: "post",
      url: "http://localhost:5000/auth",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        nom_usuario: "carlo95",
        contrasena: "1234",
      },
    }).then((res) => {
      console.log(res.data);
      setUser(res.data[0]);
    });

    /* fetch("http://localhost:5000/auth", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response)); */
  }, []);

  return <LoginView user={user} />;
};

export default Login;
