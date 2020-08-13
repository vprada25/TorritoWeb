import React from 'react';
import { Card, Form, Input, Button, Select, Tabs } from 'antd';
import "../../Style/styleOrder.css";

import avatar from "../../../assets/imgs/pedido.jpg";
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

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

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
            note: 'jaao',
            user: '3698888',
            direccion: 'calle 3a #12-16',
            gender: 'efectivo',
        });
    };

    return (
        <div className="div-general">
            <div className="div-h1">
                <h1 className="card-h1">Pedidos</h1>
                <img src={avatar} alt="Avatar" />
            </div>
            <div className="site-card-border-less-wrapper">


                <div className="divcard">
                    <div className="div-tabs">
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Producto" key="1">
                                <ol>
                                    <li className="tabs-li">Carne</li>
                                    <li className="tabs-li">Pollo</li>
                                    <li className="tabs-li">Res</li>
                                </ol>
                            </TabPane>

                            <TabPane tab="Cantidad" key="2">
                                <ol>
                                    <li className="tabs-li">3</li>
                                    <li className="tabs-li">5</li>
                                    <li className="tabs-li">7</li>
                                </ol>
                            </TabPane>

                            <TabPane tab="Corte" key="4">
                                <ol>
                                    <li className="tabs-li">Pierna</li>
                                    <li className="tabs-li">Pechuga</li>
                                    <li className="tabs-li">Salmon</li>
                                </ol>
                            </TabPane>
                            <TabPane tab="Valor" key="3">
                                <ol>
                                    <li className="tabs-li">7000</li>
                                    <li className="tabs-li">3000</li>
                                    <li className="tabs-li">3000</li>
                                </ol>
                            </TabPane>

                            <TabPane tab="Total" key="5">
                                <p className="p-total">13000</p>
                            </TabPane>

                        </Tabs>
                    </div>
                    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                        <Form.Item
                            name="note"
                            label="User:"
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
                            label="Tel:"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >

                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="direccion"
                            label="Dirección:"
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
                            label="Forma Pago"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Select
                                placeholder="Selecione una forma de pago"
                                onChange={onGenderChange}
                                allowClear
                            >
                                <Option value="male">Efectivo</Option>
                                <Option value="female">Targeta</Option>
                                <Option value="other">Consignación</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                        >
                            {({ getFieldValue }) =>
                                getFieldValue('gender') === 'other' ? (
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
                        <div className="div-btn">
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    pedido
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
                </div>
            </div>
        </div>
    );
};

export default Demo;


