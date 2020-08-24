import React from "react";
import "../../Style/styleModuleAdmin.css";
import { Card, Form, Input, Button, Checkbox } from "antd";
import moduleAdmin from "../../../assets/imgs/ModuloAdmin.png";

const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 61 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <h1 className="titlemoduleadmin">Módulo administrador</h1>

      <div className="logoModuleadmin">
        <img
          src={moduleAdmin}
          className="imgadmin"
          alt="moduloAdmin"
        />
      </div>
    <div className="divadmin">
      <Card
        title="Datos"
        bordered={true}
        style={({ width: 200 }, { height: 420 })}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="ID"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Button type="primary" className="searchbutton2" htmlType="submit">
            Buscar
          </Button>

          <Form.Item
            label="Usuario"
            name="user"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input />
          </Form.Item>
          <div>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <Button type="primary" htmlType="submit">
                  Actulizar
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  Reset
                </Button>
              </div>
            </Form.Item>
          </div>
        </Form>
      </Card>
      </div>
    </div>
  );
};
export default Demo;
