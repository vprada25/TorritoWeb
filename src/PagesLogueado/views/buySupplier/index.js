import React from "react";
import { Card, Form, Input, Button, Select } from "antd";
import "../../Style/stylebuySupplier.css";


import avatarbuy from "../../../assets/imgs/compraProveedor.png";


const { Option } = Select;
const layout = {
  labelCol: {
    span: 11,
  },
  wrapperCol: {
    span: 4,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
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

/*   const onFill = () => {
    form.setFieldsValue({
      note: "Jorge",
      user: "carnico",
      gender: "male",
    });
  }; */

  return (
    <div className="site-card-border-less-wrapper-buy">
      <div className="div-h1-buy">
        <h1 className="card-h1-buy">Compra Proveedor</h1>
        <img src={avatarbuy} className="buy" alt="Avatarbuy"/>
      </div>

      <Card
        title="Datos"
        bordered={true} 
        style={({ width: 400 }, { height: 430 })}
        
      >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="ID_COM"
            label="ID Compra:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="NOMBRE_PROVEEDOR"
            label="Nombre Proveedor:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="STOCK"
            label="Stock:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="TOTAL"
            label="Total:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="TELEFONO"
            label="Teléfono:"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <div className="div-btn-buy">
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Acentar
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






