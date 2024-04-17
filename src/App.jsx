import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const onFinish = (values) => {
  console.log(values);
};

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  }}>
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        width: '400px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '10px', // Add border radius of 10px
        boxShadow: '0 0 10px rgba(0,0,0,0.1)', // Add a subtle shadow
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'name']}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[
          {
            type: 'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'Password']} label="Password">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'Message']} label="Message">
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default App;
