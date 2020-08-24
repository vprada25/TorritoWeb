import React from "react";
import logo from "../../../assets/logos/logo3.png";
import "../../Style/styleemployeesList.css";
import { Table, Tag, Space } from "antd";

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
    title: "Documento",
    dataIndex: "document",
    key: "price",
  },
  {
    title: "Estado",
    dataIndex: "state",
    key: "state",
  },
];

const data = [
  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    document: 10000,

    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "chuleta de cerdo ",
    document: 20000,
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "Ibericos ",
    document: 32000,
    state: "activo",
  },
];

const EmployeesList = () => (
  <div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="logoproducts">
        <img src={logo} className="logoProductlist" alt="2" />
      </div>
      <div className="titleproducts">
        <h1 className="titleproducts2">Empleados</h1>
      </div>
      <Table className="tab" columns={columns} dataSource={data} />
      <button type="Default" className="trends">
        Tendencia
      </button>
    </div>
  </div>
);

export default EmployeesList;
