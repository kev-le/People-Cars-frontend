import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Modal, Input, Form, Select  } from 'antd';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
  
const tailLayout = {
    wrapperCol: { offset: 20, span: 16 },
};

class CarModal extends Component {

  getDropdownOptions = () => {
    let options = []
    if (this.props.peopleList.length > 0) {
      for (const person of this.props.peopleList) {
        options.push({label: person['firstName'] + " " + person['lastName'], value: person.id})
      }
    }

    return options
  }

  render() {
    const options = this.getDropdownOptions()

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
            initialValues={this.props.car}
            name="basic"
            onFinish={this.props.onFinish}
            onFinishFailed={this.props.onFinishFailed}
          >
            <Form.Item
              label="Year"
              name="year"
              rules={[{ required: true, message: 'Please input a year!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Make"
              name="make"
              rules={[{ required: true, message: 'Please input a make!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Model"
              name="model"
              rules={[{ required: true, message: 'Please input a model!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input a price!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Person"
              name="personId"
              rules={[{ required: true, message: 'Please select a person!' }]}
            >
              <Select
                style={{ width: '100%' }}
                placeholder="Please select a person"
                options={options}
              />
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

const mapStateToProps = ({ people }) => ({
  peopleList: people.peopleList
})

export default connect(
  mapStateToProps,
  null
)(CarModal)
