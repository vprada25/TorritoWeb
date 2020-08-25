import React, { useState, useEffect, useRef } from "react";
import {
    Form,
    Input,
    InputNumber,
    Modal,
    Button,
    Avatar,
    Typography,
    Card
} from "antd";
import { SmileOutlined, UserOutlined } from "@ant-design/icons";
import "../../Style/styleUpdateCategory.css";
import category from "../../../assets/imgs/categorias.png";

const layout = {
    labelCol: {
        span: 14,
    },
    wrapperCol: {
        span: 10,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 14,
        span: 1,
    },
};

// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
};

const ModalForm = ({ visible, onCancel }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
    });

    const onOk = () => {
        form.submit();
    };

    return (
        <Modal
            title="Ingresar Datos"
            visible={visible}
            onOk={onOk}
            onCancel={onCancel}
        >
            <Form form={form} layout="vertical" name="userForm">


            <Form.Item
                    name="age"
                    label="ID Categoría"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input style={{width:100}}/>

                <Form.Item
                    name="name"
                    label="Agregar categoría"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                    
                </Form.Item>
            </Form>
        </Modal>
    );
};

const UpdateCategory = () => {
    const [visible, setVisible] = useState(false);

    const showUserModal = () => {
        setVisible(true);
    };

    const hideUserModal = () => {
        setVisible(false);
    };

    const onFinish = (values) => {
        console.log("Finish:", values);
    };

    return (


        <Form.Provider
            onFormFinish={(name, { values, forms }) => {
                if (name === "userForm") {
                    const { basicForm } = forms;
                    const users = basicForm.getFieldValue("users") || [];
                    basicForm.setFieldsValue({
                        users: [...users, values],
                    });
                    setVisible(false);
                }
            }}
        >
            <div className="titleUpdatecategory">
                <h1 className="styleUpdatecategory">Modificar categorías</h1>
            </div>

            <div className="posicionupdatecategory">
                <img src={category} className="imageupdatecategory" alt="category" />
            </div>
            <div className="conten-updatecategory">
                <Card
                    title="Actualizar"
                    bordered={false}
                    style={({ width: 650,height: 300 })}
                    className="card"
                >

                    <Form
                        {...layout}
                        name="basicForm"
                        onFinish={onFinish}
                        style={{ marginTop: 30 }}
                    >
                        <Form.Item
                            name="group"
                            label="Nombre de la categoría"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Lista de categorías"
                            shouldUpdate={(prevValues, curValues) =>
                                prevValues.users !== curValues.users
                            }
                        >
                            {({ getFieldValue }) => {
                                const users = getFieldValue("users") || [];
                                return users.length ? (
                                    <ul>
                                        {users.map((user, index) => (
                                            <li key={index} className="user">
                                                <Avatar icon={<UserOutlined />} />
                                                {user.name} - {user.age}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                        <Typography.Text className="ant-form-text" type="secondary">
                                            ( <SmileOutlined /> Aún no hay categorías. )
                                        </Typography.Text>
                                    );
                            }}
                        </Form.Item>
                        <Form.Item {...tailLayout}>
                        <div style={{ display: "flex", flexDirection: "row" ,alignItems:"center" }}>
                            <Button htmlType="submit" type="primary">
                                Acentar
          </Button>
                            <Button
                                htmlType="button"
                                style={{
                                    margin: "0 8px",
                                }}
                                onClick={showUserModal}
                            >
                                Agregar categoría
          </Button>
          </div>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
            <ModalForm visible={visible} onCancel={hideUserModal} />
        </Form.Provider>

    );
};

export default UpdateCategory;
