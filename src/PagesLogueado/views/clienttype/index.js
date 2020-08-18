import React from "react";
import logo from "../../../assets/logos/logo3.png";
import "../../Style/styleclienttype.css";
import { Link } from "react-router-dom";
import typeclient from "../../../assets/imgs/tipoClientes.png";
import { Table, Tag, Space, Select } from "antd";

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tipo de Cliente",
    dataIndex: "price",
    key: "price",
    render: (text) => <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
    <Option value="Estrella">Estrella</Option>
    <Option value="Promedio">Promedio</Option>
    <Option value="Estandar">Estandar</Option>
  </Select>,
  },
];

const data = [
  {
    key: "1",
    id: "001",
    name: "juan david pedroza",
    
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    
  },
  {
    key: "3",
    id: "003",
    name: "juan david pedroza",
    
  },
  {
    key: "3",
    id: "003",
    name: "juan david pedroza",
    
  },
  {
    key: "3",
    id: "003",
    name: "juan david pedroza",
    
  }

];

function ClienType() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="logoclient">
          <img src={logo} alt="°1" />
        </div>
        <div className="titleclient">
          <h1 className="titleclient2">Tipos de clientes</h1>
          <div className="imagetypeclient">
            <img src={typeclient} alt="typeclient" />
          </div>
        </div>
        <Table className="tabclient" columns={columns} dataSource={data} />
        <div className="return2">
          <Link to="/HomeLogueado">
            {" "}
            <button type="Default" className="returnfind2">
              Volver
            </button>
          </Link>
        </div>
        <div><h1><br/></h1></div>
      </div>
    </div>
  );
}

export default ClienType;
