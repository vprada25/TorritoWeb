import React, { useState, useEffect } from 'react';
import logo from "../../../assets/logos/logo3.png";
import "../../../Style/stylefomr.css";
import authService from '../../../services/auth.service';
import { Form, Input, Button } from 'antd';
import { Select } from 'antd';
const { Option } = Select;

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

const FormRegister = () => {

  const onFinish = values => {
    console.log('Success:', values);
    
    authService.signUp(values).then(res => {
      console.log("Datos que se van a enviar al backend")

      console.log(res)
    }).catch(error => console.error(error))
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


/*   const handleSubmit = (event) => {
    event.preventDefault();
    // const { getUser } = this.props;
    const pri_nombre = document.getElementById("priname").value;
    const seg_nombre = document.getElementById("segname").value;
    const pri_apellido = document.getElementById("prilastname").value;
    const seg_apellido = document.getElementById("seglastname").value;
    const direccion = document.getElementById("adress").value;
    const nom_usuario = document.getElementById("user").value;
    const contrasena = document.getElementById("password").value;
    const fk_id_rol = document.getElementById("rol").value;
    console.log(fk_id_rol.selectedIndex);

    const isValid =
      pri_nombre.value !== "" &&
      seg_nombre.value !== "" &&
      pri_apellido.value !== "" &&
      seg_apellido.value !== "" &&
      nom_usuario.value !== "" &&
      contrasena.value !== "" &&
      direccion.value !== "" &&
      fk_id_rol.value !== "";

    const values2 = { pri_nombre, seg_nombre, pri_apellido, seg_apellido, direccion, nom_usuario, contrasena, fk_id_rol }

    console.log(values2);
    if (isValid) {
     
    }
  }; */

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
          <Form.Item label="Primer nombre" name="pri_nombre" rules={[{ required: true,  message: 'Por favor ingrese su primer nombre'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="Segundo nombre" name="seg_nombre" rules={[{ required: true,  message: 'Por favor ingrese su segundo nombre'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="Primer apellido" name="pri_apellido" rules={[{ required: true,  message: 'Por favor ingrese su primer apellido'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="Segundo apellido" name="seg_apellido" rules={[{ required: true,  message: 'Por favor ingrese su segundo apellido'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="Nombre de usuario" name="nom_usuario" rules={[{ required: true,  message: 'Por favor ingrese su segundo apellido'}]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!'}]}>
            <Input.Password />
          </Form.Item>
          <Form.Item label="Rol de usuario" name="fk_id_rol" rules={[{ required: true, message: 'Please seleccione su rol!'}]}>
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
        {/*  <form onSubmit={handleSubmit}>
  
          <label>
            Primer Nombre:
              <input
              type="text"
              placeholder=""
              className="contend-inputs "
              id="priname"
            />
          </label>

          <label>
            Segundo Nombre:
              <input
              type="text"
              placeholder=""
              className="contend-inputs "
              id="segname"
            />
          </label>

          <label>
            Apellido:
              <input type="text" className="contend-inputs " id="prilastname" />
          </label>

          <label>
            Segundo Apellido:
              <input type="text" className="contend-inputs " id="seglastname" />
          </label>


          <label>
            Nombre de empresa:
              <input type="text" className="contend-inputs " id="compayName" />
          </label>

          <label>
            Usuario:
              <input type="text" className="contend-inputs " id="user" />
          </label>

          <label>
            Contraseña:
              <input type="password" className="contend-inputs " id="password" />
          </label>


          <label>
            Nit:
              <input type="text" className="contend-inputs " id="nit" />
          </label>

          <label>
            Direccion:
              <input type="text" className="contend-inputs " id="adress" />
          </label>

          <label>
            Rol:
            <select className="combo" id="rol" >
              <option>Elija una opcion</option>
              <option value="1" > Empresa </option>
              <option value="" > Usuario </option>
            </select>
          </label>

          <div className="contend-buttons">
            <button type="submit" className="buttons-registrar">
              Registrar
              </button>
            <button className="buttons-iniciarsesion">Inciar sesión</button>
          </div>
        </form> */}
      </div>
    </div>
  );
}


export default FormRegister;
