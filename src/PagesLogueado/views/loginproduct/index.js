import React, { useState } from "react";
import { Header, NavBar } from "../../../components";
import logo from "../../../assets/logos/logo3.png";
import productos from "../../../assets/imgs/productos.jpg";
import "../../Style/styleLoginProduct.css";

import { useHistory } from 'react-router-dom';

import { data } from "./data";



const LoginProduct = () => {
  const [option, setOption] = useState("Todos");
  const [currentData, setCurrentData] = useState([...data.cerdo, ...data.res,...data.pollo,...data.pescado]);

  const history = useHistory();
  const handleClick = () => history.push('/GenerateSale');

  const handlerChooseOption = (choosed) => {
    const response = chooseRender(choosed);
    setCurrentData(response);
    setOption(choosed);
  };

  const renderContent = () => {
    return (
      <div className="segundo">
        {currentData.map((pro) => (
          <div className="conten2" key={Math.random() * 1000}>
            <img src={pro.image} alt={pro.id} className="chul" onClick={handleClick} />
            <p className="sub1">{pro.nombre}</p>
          </div>
        ))}
      </div>
    );
  };

  const chooseRender = () => {
    switch (option) {
      case "Todos":
        return [...data.cerdo, ...data.res,...data.pollo,...data.pescado];
      case "Cerdo":
        return data.cerdo;
      case "Res":
        return data.res;
      case "Pollo":
        return data.pollo;
      case "Pescado":
        return data.pescado;
      default:
        return [...data.cerdo, ...data.res,...data.pollo,...data.pescado];
    }
  };

  return (
    <div>
      <div className="header">
        <NavBar />
        <div><img src ={productos} alt="°2" className="sub"/> 
        <div className="logo21">
          <img src={logo} alt="°1" className="log" />
          </div>
        </div>
        <div>
          <h2 class="up">Productos</h2>
          
         
        </div>
      </div>
      <Header onSelect={handlerChooseOption} />
      <br />

      {renderContent()}
    </div>
  );
};

export default LoginProduct;
