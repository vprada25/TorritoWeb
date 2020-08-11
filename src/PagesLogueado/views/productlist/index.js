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
    title: "Nombre",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Precio",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Descripción",
    dataIndex: "description",
    key: "description",
  },

  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
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
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    price: 20000,
    description: "zenú",
    stock: "",
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    price: 20000,
    description: "zenú",
    stock: "",
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    price: 20000,
    description: "zenú",
    stock: "",
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    price: 20000,
    description: "zenú",
    stock: "",
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },

  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },

  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "3",
    id: "003",
    name: "ricardo perez samaniego ",
    price: 32000,
    description: "Rica",
    stock: "",
    state: "activo",
  },

  {
    key: "1",
    id: "001",
    name: "lomo ancho",
    price: 10000,
    description: "pietram ",
    stock: "",
    state: "activo",
  },
];

function ProductList() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="logoproducts">
        <img src={logo} alt="°1" />
      </div>
      <div className="titleproducts">
        <h1 className="titleproducts2">Listado de Productos</h1>
      </div>
      <Table className="tab" columns={columns} dataSource={data} />
      <button type="Default" className="trends">
        Tendencia
      </button>
    </div>
  );
}

export default ProductList;
