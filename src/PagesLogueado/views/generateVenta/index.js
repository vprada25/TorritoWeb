import React, { useState } from "react";
import "../../Style/styleGenerateventa.css";
import sale from "../../../assets/imgs/Generateventa.png";
import { Form, Row, Col, Input, Button } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

function GenerateSale() {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  const [inputs, setInputs] = useState([
    {
      id: 1,
      value: "",
      name: "Id venta",
      placeholder: "Id venta",
    },
    {
      id: 2,
      value: "",
      name: "Producto",
      placeholder: "Producto",
    },
    {
      id: 3,
      value: "",
      name: "Fecha pedido",
      placeholder: "Fecha pedido",
    },
    {
      id: 4,
      value: "",
      name: "Cantidad",
      placeholder: "Cantidad",
    },
    {
      id: 5,
      value: "",
      name: "Corte",
      placeholder: "Corte",
    },
    {
      id: 6,
      value: "",
      name: "Peso",
      placeholder: "Peso",
    },
    {
      id: 7,
      value: "",
      name: "Valor",
      placeholder: "Valor",
    },
    {
      id: 8,
      value: "",
      name: "Cliente",
      placeholder: "Cliente",
    },
    {
      id: 9,
      value: "",
      name: "Telefono",
      placeholder: "Telefono",
    },

    {
      id: 10,
      value: "",
      name: "Total",
      placeholder: "Total",
    },
  ]);

  const getFields = () => {
    const children = [];
    for (let i = 0; i < inputs.length; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item
            name={inputs[i].name}
            label={inputs[i].name}
            rules={[
              {
                required: true,
                message: "Input something!",
              },
            ]}
          >
            <Input placeholder={inputs[i].placeholder} />
          </Form.Item>
        </Col>
      );
    }
    return children;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div>
      <div className="div-titlesale">
        <h1 className="titlesale">venta</h1>
      </div>
      <div className="imageGeneratesale">
        <img src={sale} className="imagsale" alt="sale" />
      </div>
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          marginTop: 50,
          marginLeft: 50,
          marginRight: 50,
        }}
      >
        <Form
          form={form}
          name="advanced_search"
          className="ant-advanced-search-form"
          onFinish={onFinish}
        >
          <Row gutter={24}>{getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: "right" }}>
              <Button type="primary" htmlType="submit">
                Registrar
              </Button>
              <Button
                style={{ margin: "0 8px" }}
                onClick={() => {
                  form.resetFields();
                }}
              >
                Clear
              </Button>
              <a
                style={{ fontSize: 12 }}
                onClick={() => {
                  setExpand(!expand);
                }}
              >
                {expand ? <UpOutlined /> : <DownOutlined />} Collapse
              </a>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
}

export default GenerateSale;
