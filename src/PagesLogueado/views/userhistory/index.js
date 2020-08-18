import React from "react";
import logo from "../../../assets/logos/logo3.png";
import "../../Style/styleuserhistory.css";
import { Link } from "react-router-dom";
import history from "../../../assets/imgs/historiaUsuario.png";
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
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Fecha de actualización",
    dataIndex: "dateupdate",
    key: "dateupdate",
  },

  {
    title: "Fecha de desactivación",
    dataIndex: "datedelete",
    key: "datedelete",
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
    name: "Isabella gomez ",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },

  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },

  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },
  {
    key: "2",
    id: "002",
    name: "Duvan camilo pedroza",
    date: "16/08/2020",
    dateupdate: "",
    datedelete: "",
    state: "activo",
  },

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
          <div className="imagehistory">
            <img src={history} alt="history" />
          </div>
        </div>

        <Table className="tab2" columns={columns} dataSource={data} />

        <div className="return">
          <Link to="/HomeLogueado">
            {" "}
            <button type="Default" className="returnfind">
              Volver 
            </button>
          </Link>
        </div>
        <div><h1><br/></h1></div>
      </div>
    </div>
  );
}

export default UserHistory;
