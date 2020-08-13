import React from "react";
import logo from "../../../assets/logos/logo3.png";
import "../../Style/styleclienttype.css";
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
    title: "Tipo de Cliente",
    dataIndex: "price",
    key: "price",
  },
];

const data = [


    {

    }
];

function ClienType() {
    return (
      <div>
         <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="logohistory">
          <img src={logo} alt="°1" />
        </div>
        <div className="titlehistory">
          <h1 className="titlehistory2">Tipos de clientes</h1>
        </div>
        <Table className="tab2" columns={columns} dataSource={data} />
      </div>
      </div>
    );
  }

  export default ClienType;