import React from "react";
import { Card, Form, Input, Button, Select } from "antd";

import "../../Style/styleRegisterproducts.css";
/* src\PagesLogueado\Style\styleRegisterproducts.css */

import avatar from "../../../assets/imgs/regisproduct.jpg";
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
      note: "Carne",
      user: "1500",
      gender: "pollo",
    });
  };

  return (
    <div className="site-card-border-less-wrapper-product">
      <div className="div-h1-product">
        <h1 className="card-h1product">Registrar Producto</h1>
        <img src={avatar}  alt="Avatar" />
      </div>

      <Card
        title="Registrar"
        bordered={false}
        style={({ width: 350 }, { height: 510 })}
        className="card"
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="id"
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
            name="name"
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
            name="Price"
            label="Precio:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="Category"
            label="Categoría"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Selecione un tipo"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">Res</Option>
              <Option value="female">Cerdo</Option>
              <Option value="other">Pollo</Option>
              <Option value="other">Pescado</Option>
            </Select>
          </Form.Item>


          <Form.Item
            name="units"
            label="Unidades:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={["user", "introduction"]} label="Descripción">
          <Input.TextArea />
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
          <div className="div-btn-product">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Registrar
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
