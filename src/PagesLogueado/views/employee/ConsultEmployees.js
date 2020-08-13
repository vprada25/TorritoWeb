import React from "react";
import { Card, Form, Input, Button, Select } from 'antd';
import "../../Style/styleRegisterEmployee.css";
import avatar from "../../../assets/imgs/avatarbus.png";
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

  const onGenderChange = value => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFinish = values => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: '01',
      user: 'Ramos',
      gender: 'JAAO',
    });
  };

  return (

    <div className="site-card-border-less-wrapper">
      <div className="div-h1">
        <h1 className="card-h1">Consultar empleados</h1>
        <img src={avatar} alt="Avatar" />
      </div>

      <Card title="Consult" bordered={false} style={{ width: 350 }, { height: 395 }} className="card">


        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="note"
            label="°Ide"
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
            label="Usuario:"
            rules={[
              {
                required: true,
              },
            ]}
          >

            <Input />
          </Form.Item>




          <div className="div-btn">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Consult
        </Button>
              <Button htmlType="button" onClick={onReset}>
                Reset
        </Button>
              <Button type="link" htmlType="button" onClick={onFill}>
                Ejemplo
        </Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Demo;


