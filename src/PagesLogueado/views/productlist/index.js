import React from "react";
import logo from "../../../assets/logos/logo3.png";
import "../../Style/styleproductlist.css";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Nombre Completo",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Edad",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Empresa",
    dataIndex: "address",
    key: "address",
  },

  {
    title: "Desempeño",
    dataIndex: "comments",
    key: "comments"
  },

  
];

const data = [
  { 
    key: "1",
    id:"001",
    name: "Juan carlos urresty",
    age: 32,
    address: "pietram ",
    comments:""
   
  },
  {
    key: "2",
    id:"002",
    name: "Duvan camilo pedroza",
    age: 42,
    address: "zenú",
     comments:""
    
   
  },
  {
    key: "3",
    id:"003",
    name: "ricardo perez samaniego ",
    age: 32,
    address: "Rica",
    comments:""
    
  },
];

function ProductList() {
  return (
    <div>
      <div className="logoemployees">
        <img src={logo} alt="°1" />
      </div>
      <div className="titleemployees">
        <h1 className="titleemployees2">Listado de Productos</h1>
      </div>
      <Table className="tab" columns={columns} dataSource={data} />
    </div>
  );
}

export default ProductList;
