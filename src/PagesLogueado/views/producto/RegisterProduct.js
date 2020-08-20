import React from 'react';
import { Card, Form, Input, Button, Select } from 'antd';

import "../../Style/styleRegisterEmployee.css";

import avatar from "../../../assets/imgs/regisproduct.jpg";

import ProductService from "../../../services/product.service";
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
const createdProducts = async (values) => {
    console.log("Envia la peticion al backen");
    const product = await ProductService.createdProducts(values)
    console.log("Datos obtenidos por el backen", values);
    if (product.data.statusCode === 201) {
        alert("Producto creado correctamente");
    } else {
        alert("Error al crear producto");
    }
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
        ProductService.createdProducts(values).then(res => {
            console.log(res.data);
            console.log("Datos que se envian al backend");
        }).catch(error => console.log( error.response.request._response ),alert("error no se creo el producto"))

    };

    const onReset = () => {
        form.resetFields();
    };

    const onFill = () => {
        form.setFieldsValue({
            note: 'Carne',
            user: '1500',
            gender: 'pollo',
        });
    };

    return (

        <div className="site-card-border-less-wrapper">
            <div className="div-h1">
                <h1 className="card-h1">Registrar Producto</h1>
                <img src={avatar} alt="Avatar" />
            </div>

            <Card title="Register" bordered={false} style={{ width: 350 }, { height: 395 }} className="card">


                <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>


                    <Form.Item
                        name="NOM_PRODUCTO"
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
                        name="PRECIO"
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
                        name="CORTE"
                        label="Corte:"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >

                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="FKID_     CATEGORIA"
                        label="Categoria"
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
                            <Option value="1">Res</Option>
                            <Option value="2">Cerdo</Option>
                            <Option value="3">Pescado</Option>

                        </Select>
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
                        name="ESTADO"
                        label="Estado"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Selecione un estado"
                            onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="ACTIVO">activo</Option>
                            <Option value="inactivo">inactivo</Option>


                        </Select>
                    </Form.Item>


                    <Form.Item
                        name="FKID_UNIDADES"
                        label="unidades:"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            placeholder="Selecione un estado"
                            onChange={onGenderChange}
                            allowClear
                        >
                            <Option value="1">kilo</Option>
                            <Option value="2">libras</Option>


                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="FKID_EMPRESA"
                        label="Empresa:"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >

                        <Input />
                    </Form.Item>

                    <Form.Item name="DESCRIPCION"
                        label="Descripción"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input.TextArea />
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
                                Register
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


