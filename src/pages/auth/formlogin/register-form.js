import React, { useState, useEffect } from 'react';
import logo from "../../../assets/logos/logo3.png";
import "../../../Style/stylefomr.css";
import authService from '../../../services/auth.service';
import { Form, Input, Button } from 'antd';
import { Select } from 'antd';
import { useHistory } from "react-router-dom";
const { Option } = Select;

const layout = {
  labelCol: {
    span: 9,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 9,
    span: 16,
  },
};

const FormRegister = () => {
  const history = useHistory();
  const onFinish = values => {
    console.log('Success:', values);

    authService.signUp(values).then(res => {
      console.log("Datos que se van a enviar al backend")
      console.log(res.data)
      history.push("/HomeLogueado");
    }).catch(error => console.error(error))

  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="raiz">
      <div className="divlogo">
        <img src={logo} alt="logo4" className="raizimg" />
      </div>
      <h1 className="raiz-h1">Toorito</h1>
      <h2 className="raiz-h2">Formulario de registro</h2>
      <div className="raiz-contend">
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label="Primer nombre" name="pri_nombre" rules={[{ required: true, message: 'Por favor ingrese su primer nombre' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Segundo nombre" name="seg_nombre" rules={[{ required: true, message: 'Por favor ingrese su segundo nombre' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Primer apellido" name="pri_apellido" rules={[{ required: true, message: 'Por favor ingrese su primer apellido' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Segundo apellido" name="seg_apellido" rules={[{ required: true, message: 'Por favor ingrese su segundo apellido' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Direccion" name="direccion" rules={[{ required: true, message: 'Por favor ingrese su direccion' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Nombre de usuario" name="nom_usuario" rules={[{ required: true, message: 'Por favor ingrese su segundo apellido' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="contrasena" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>
          
          <Form.Item label="Rol de usuario" name="fk_id_rol" rules={[{ required: true, message: 'Please seleccione su rol!' }]}>
            <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
              <Option value="1">Admin</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="lddd">Otra cosa</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Enviar
        </Button>
          </Form.Item>
        </Form>

      </div>
    </div>
  );
}


export default FormRegister;
