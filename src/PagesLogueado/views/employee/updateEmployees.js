import React from "react";
import { Card, Form, Input, Button, Select } from "antd";
import "../../Style/styleUpdateemployees.css";

import avatar from "../../../assets/imgs/avatarautualizar.png";
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

const Demo = () => {
  const [form] = Form.useForm();

  const onGenderChange = (value) => {
    switch (value) {
      case "male":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        return;

      case "female":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        return;

      case "other":
        form.setFieldsValue({
          note: "Hi there!",
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: "Jorge",
      user: "carnico",
      gender: "male",
    });
  };

  return (
    <div className="site-card-border-less-wrapper-updateemployess">
      <div className="div-h1-updateemployess">
        <h1 className="card-h1-updateemployess">Actualizar empleado</h1>
        <img src={avatar} className="logoupdateemployees" alt="Avatar"/>
      </div>

      <Card
        title="Actualizar"
        bordered={false}
        style={({ width: 350 }, { height: 360 })}
        className="card"
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="note"
            label="ID:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="user"
            label="Nombre:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="user"
            label="Usuario:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Teléfono:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div className="div-btn-updateemployess">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Actualizar
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>

              <Button htmlType="button" onClick={onReset}>
                
              </Button>
              
              <Button htmlType="button" onClick={onReset}>
                
              </Button>

            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Demo;
