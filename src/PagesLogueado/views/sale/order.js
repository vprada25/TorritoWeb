import React from 'react';
import { Card, Form, Input, Button, Select } from 'antd';
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


