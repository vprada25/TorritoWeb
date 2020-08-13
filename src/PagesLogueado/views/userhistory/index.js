import React from "react";
import logo from "../../../assets/logos/logo3.png";
import "../../Style/styleuserhistory.css";
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
    title: "Fecha de creación",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Fecha de actualización",
    dataIndex: "description",
    key: "description",
  },

  {
    title: "Fecha de desactivación",
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

    }
];

function UserHistory() {
    return (
      <div>
         <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="logohistory">
          <img src={logo} alt="°1" />
        </div>
        <div className="titlehistory">
          <h1 className="titlehistory2">Historias de Usuario</h1>
        </div>
        <Table className="tab2" columns={columns} dataSource={data} />
      </div>
      </div>
    );
  }

  export default UserHistory;