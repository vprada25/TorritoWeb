import React, { Component } from "react";

import "../../../Style/StyleProfile.css";

import { Form, Input, Button, Card, InputNumber } from "antd";

import bunisess from '../../../services/bunises.service';

import userservice from '../../../services/user.service';
/* import Auth from '../../../services/auth.service'; */

import jwt_decode from 'jwt-decode';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const createdCompany = async (values) => {
  let ID_PERSONA = null;
  var user = userservice.getUserInStorage()
  const resuser = await userservice.getUserByUsername(user.username)
  ID_PERSONA = resuser.data.Idpersona;
  Object.assign(values, {ID_PERSONA})
  const rescompany = await bunisess.registerbunisess(values)
  if(rescompany.data.statusCode && rescompany.data.statusCode === 201){
    alert("Has registrado tu compania correctamente")
  }
}



const config = () => {

  const  onFinish = async (values) => {
   await createdCompany(values);


  }

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  /* console.log(Auth.getMenu()); */

  return (

    <div className="root">



      <Card title="Registrar empresa" className="root-card" bordered={false} >


        <div>
          <Form
            className="subcolor"
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item className="form-items"
              label="NIT"
              name="NIT"
              rules={[{ required: true, message: "Porfavor digite su nit de empresa!" }]}
            >
              <Input className="form-input" />
            </Form.Item>

            <Form.Item className="form-items"
              label="Nombre"
              name="NOMBRE_EM"
              rules={[{ required: true, message: "Porfavor digite su nombre de empresa!" }]}
            >
              <Input className="form-input" />
            </Form.Item>

            <Form.Item className="form-items"
              label="Direccion"
              name="DIRECCION"
              rules={[{ required: true, message: "Porfavor digite su direccion!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item className="form-items"
              label="Telefono"
              name="TEL"
              rules={[{ required: true, message: "Porfavor digite su telefono!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Registrar
            </Button>
            </Form.Item>

          </Form>

        </div>
      </Card>
    </div>

  );
}


export default config;


