import React from "react";
import { Card, Form, Input, Button, Select } from "antd";
import "../../Style/styleConsultproducts.css";
import avatar from "../../../assets/imgs/consultarroduct.png";
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
      note: "01",
      user: "Torso",
      gender: "res",
    });
  };

  return (
    <div className="site-card-border-less-wrapper-consultproduct">
      <div className="div-h1-consul">
        <h1 className="card-h1-consul">Consultar Producto</h1>
        <img src={avatar} className="logoconsultProduct" alt="Avatar" />
      </div>
      
      <Card
        title="Consultar"
        bordered={false}
        style={({ width: 350 }, { height: 365 })}
        className="card"
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="note"
            label="ID"
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
            name="gender"
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
            name="gender"
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

          <div className="div-btn-productconsul ">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Consultar
              </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Demo;
