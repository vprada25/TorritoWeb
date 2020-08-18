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
          <Form.Item label="Segundo nombre" name="seg_nombre" rules={[{ required: false, message: 'Por favor ingrese su segundo nombre' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Primer apellido" name="pri_apellido" rules={[{ required: true, message: 'Por favor ingrese su primer apellido' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Segundo apellido" name="seg_apellido" rules={[{ required: false, message: 'Por favor ingrese su segundo apellido' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Direccion" name="direccion" rules={[{ required: true, message: 'Por favor ingrese su direccion' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Nombre de usuario" name="nom_usuario" rules={[{ required: true, message: 'Por favor ingrese su segundo apellido' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="contraseña" name="contrasena" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label="Tipo de documento" name="fkid_tipo_docu" rules={[{ required: true, message: 'Please seleccione su tipo de documento!' }]}>
            <Select defaultValue=".." style={{ width: 120 }} onChange={handleChange}>
              <Option value="1">C.C</Option>
              <Option value="2">C.E</Option>
              <Option value="3">Otro</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Documento" name="documento" rules={[{ required: true, message: 'Por favor ingrese su documento' }]}>
            <Input />
          </Form.Item>


          <Form.Item label="Rol de usuario" name="fk_id_rol" rules={[{ required: true, message: 'Please seleccione su rol!' }]}>
<<<<<<< HEAD
            <Select defaultValue="" style={{ width: 120 }} onChange={handleChange}>
              <Option value="1">Administrador</Option>
              <Option value="2">Empleado</Option>
              <Option value="3">Cliente</Option>
              <Option value="disabled" disabled>Disabled</Option>
=======
            <Select defaultValue=".." style={{ width: 120 }} onChange={handleChange}>
              <Option value="1">Admin</Option>
              <Option value="2">Empleado</Option>
              <Option value="3.">Cliente</Option>
              <Option value="disabled" disabled>
                Disabled
              </Option>
              <Option value="Yiminghe">yiminghe</Option>
>>>>>>> 02afb9e95863d6467e803d95d2af32df8be75ccd
            </Select>
          </Form.Item>

          <Form.Item label="Tipo Cliente" name="fkid_tipo_cliente" rules={[{ required: true, message: 'Please seleccione su tipo de cliente!' }]}>
            <Select defaultValue=".." style={{ width: 120 }} onChange={handleChange}>
              <Option value="1">Estrella</Option>
              <Option value="2">Promedio</Option>
              <Option value="3">base</Option>
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
