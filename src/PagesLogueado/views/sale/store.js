import React,{ useState }   from 'react';
import { Form, Input, Button, Select,Table, Radio, Divider } from 'antd';
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

const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'cantidad',
      dataIndex: 'age',
    },
    {
      title: 'Corte',
      dataIndex: 'address',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Carne',
      age: 3,
      address: 'lomo',
    },
    {
      key: '2',
      name: 'pollo',
      age: 5,
      address: 'Pernil',
    },
    {
      key: '3',
      name: 'carne',
      age: 5,
      address: 'pierna',
    },
    {
      key: '4',
      name: 'Pescado',
      age: 99,
      address: 'Robalo',
    },
  ]; // rowSelection object indicates the need for row selection
  
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };


const Demo = () => {
    const [form] = Form.useForm();
    const [selectionType, setSelectionType] = useState('checkbox');
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

            <div className="div-table">
                <Radio.Group
                    onChange={({ target: { value } }) => {
                        setSelectionType(value);
                    }}
                    value={selectionType}
                >
                    <Radio value="checkbox">Checkbox</Radio>
                   
                </Radio.Group>

                <Divider />

                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={data}
                />
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
                        label="Telefono:"
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

                        </Form.Item>
                    </div>
                </Form>
            </div>
            <Footer />
        </div>

    );
};

export default Demo;
