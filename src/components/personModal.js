import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal, Input, Form  } from 'antd';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
  
const tailLayout = {
    wrapperCol: { offset: 20, span: 16 },
};

class PersonModal extends Component {

  render() {
    return (
        <Modal
          title={this.props.title}
          visible={this.props.visible}
          onCancel={this.props.onCancel}
          footer={null}
          destroyOnClose
        >
          <Form
            {...layout}
            initialValues={this.props.person}
            name="basic"
            onFinish={this.props.onFinish}
            onFinishFailed={this.props.onFinishFailed}
          >
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true, message: 'Please input a first name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please input a last name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ type:'email', required: true, message: 'Please input an email!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="id"
              hidden
            >
              <Input />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
    )
  }
}


export default connect(
  null,
  null
)(PersonModal)
