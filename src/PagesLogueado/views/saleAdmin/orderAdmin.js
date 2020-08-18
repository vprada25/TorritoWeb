import React from "react";

import { Form, Input, Button, Checkbox } from "antd";

import "../../Style/styleOrderAdmin.css";
const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 12,
    span: 36,
  },
};

const Demo = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="div-imageh1">
        <h1 className="titleorder">Pedidos</h1>
        <img src={require("../../../assets/imgs/orderAdmin.png")} alt="Image" />
      </div>
      <div className="div-contendG">
        <div className="cotend-div1">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Id"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Producto"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Fecha Orden"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Cantidad"
              name="cant"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>

<<<<<<< HEAD
        <div className="cotend-div2">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Corte"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Peso"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="CLiente"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Subtotal"
              name="subtotal"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="total"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input />

              <Form.Item {...tailLayout}>
          <div className="boton-pedidos">  
          <Button type="primary" htmlType="submit">
            Enviar
          </Button></div>
        </Form.Item>
            </Form.Item>
          </Form>
=======
                        <Form.Item
                            label="total"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </div>
                <div className="contend-btn">
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Generar
          </Button>
                </Form.Item>
                </div>
            </div>
>>>>>>> 02afb9e95863d6467e803d95d2af32df8be75ccd
        </div>
      </div>
    </div>
  );
};

export default Demo;
