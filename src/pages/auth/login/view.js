import React from "react";

import { Form, Input, Button, Checkbox } from "antd";

import "../../../Style/stylelogin.css";

import logo from "../../../assets/logos/logo3.png";

import authService from "../../../services/auth.service";

import { useHistory } from "react-router-dom";

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

const LoginView = () => {
  const history = useHistory();
  const onFinish = (values) => {
    console.log("Success:", values);

    authService
      .signIn(values)
      .then((res) => {
        console.log("Datos que se van a enviar al backend");

        console.log(res.data);
        localStorage.setItem('token', JSON.stringify(res.data.accessTocken))
        history.push("/HomeLogueado");
      })
      .catch((error) => console.error(error),alert("e:"));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className ="logologin"><img src={logo} alt="°1" /></div>
      <div className="padre">
        <Form 
          className="subcolor"
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Usuario"
            name="username"
            rules={[{ required: true, message: "Porfavor digite su usuario!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginView;
