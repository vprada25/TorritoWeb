import React, { Component } from 'react';

import { Skeleton, Switch, Card, Avatar, Form, Input, Button } from 'antd';


import "../../style/styleDocument.css";
const { Meta } = Card;

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

class typeDocument extends Component {
  state = {
    loading: true,
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };

   

  render() {
    const { loading } = this.state;

    return (
      <>
        <Switch checked={!loading} onChange={this.onChange} />
        <div className="div-card">
          <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
            <h1>Actualizar Informacion</h1>
            {/* <Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
            /> */}
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
             
            >
              <Form.Item
                label="Nit"
                name="Nit"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor digite su nit',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Nombre Empresa"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Porfavor digite su nombre',
                  },
                ]}
              >
                <Input />
              </Form.Item>


              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Actualizar
        </Button>
              </Form.Item>
            </Form>

          </Card>
        </div>

      </>
    );
  }
}

export default typeDocument;