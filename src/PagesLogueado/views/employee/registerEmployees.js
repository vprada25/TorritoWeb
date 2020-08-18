import React from "react";
import { Card, Form, Input, Button, Select } from "antd";
import "../../Style/styleRegisterEmployees.css";

import avatar from "../../../assets/imgs/avatar.png";
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
    <div className="site-card-border-less-wrapper-registeremployees">
      <div className="div-h1-registeremployees">
        <h1 className="card-h1-registeremployees">Registrar empleado</h1>
        <img src={avatar} alt="Avatar" />
      </div>

      <Card
        title="Registrar"
        bordered={false}
        style={({ width: 350 }, { height: 360 })}
        className="card"
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="identify"
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
            name="note"
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
            name="gender"
            label="Permisos"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Selecione un permiso"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="female">Registrar</Option>
              <Option value="female">Buscar</Option>
              <Option value="other">Actualizar</Option>
              <Option value="other">Desactivar</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.gender !== currentValues.gender
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("gender") === "other" ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>
          <div className="div-btn-registeremployees">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Registrar
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button type="link" htmlType="button" onClick={onFill}>
               
              </Button>

              <Button type="link" htmlType="button" onClick={onFill}>
               
               </Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Demo;
