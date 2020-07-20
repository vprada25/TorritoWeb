import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginView from "./view";
import authService from '../../../services/auth.service'

const Login = () => {
  const [user, setUser] = useState(null);
  

  const getUser = async (name, password) => {
    console.log(name, password);
    setUser({name, password})
   /*  authService.signIn()
      .then(res => console.log(res))
      .catch(err => console.error(err)) */
    

  }

  return <LoginView user={user} getUser={getUser} />;
};

export default Login;
