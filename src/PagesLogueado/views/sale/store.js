import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import "../../Style/styleStore.css";

import avatar from "../../../assets/imgs/Tienda.png";
import Footer from "../../../components/footer.js";
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
            note: '3',
            user: '7000',
            gender: 'efectivo',
        });
    };

    return (
        <div className="div-general1">
            <div className="div-h1">
                <h1 className="store-h1">Tienda</h1>
                <img src={avatar} className="store-img" alt="Avatar" />
            </div>
           

                
                <div className="divstore">
                
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
                            <Option value="male">Carne</Option>
                            <Option value="female">Pollo</Option>
                            <Option value="other">Pescadp</Option>
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


                    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
                        <Form.Item
                            name="note"
                            label="Cantidad:"
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
                            label="Valor:"
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
                                    Comprar
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
                <Footer/>
            </div>
        
    );
};

export default Demo;
