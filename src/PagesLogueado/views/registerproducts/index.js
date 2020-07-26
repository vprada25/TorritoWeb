import React from "react";

import "../../Style/styleregisterproducts.css";

import { Form, Input, Button, Row, Col } from "antd";

import logo from "../../../assets/logos/logo3.png";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function registerPro() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <React.Fragment>
      <div>
        <div className="titlerp">
          {" "}
          <img src={logo} alt="°1" /> <h1>Registrar productos</h1>{" "}
        </div>
      </div>

      <Form
        className="run"
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          className="rul"
          name={["user", "id"]}
          label="ID"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "name"]}
          label="Nombre"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Row gutter={100}>
          <Col span={10}>
            <Form.Item
              className="rul1"
              name={["user", "stock"]}
              label="stock"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item
             
              name={["user", "state"]}
              label="estado"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={100}>
          <Col span={10}>
            <Form.Item className="rul1"
             
              name={["user", "category"]}
              label="Categoría"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={9}>
            <Form.Item
              name={["user", "unit"]}
              label="Unidad de medida"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item name={["user", "introduction"]} label="Descripción">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Registrar
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
}
export default registerPro;
