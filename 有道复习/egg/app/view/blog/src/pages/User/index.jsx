/**
 * Created by icon on 2021/3/5
 */
import React, {useEffect, useRef} from 'react';
import request from '@/utils/request';
import {Card, Button, Form, Input} from "antd";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const Index = (props) => {
  const [form] = Form.useForm();
  const ref = useRef();
  useEffect(() => {
    request({
      method: 'GET',
      url: '/api/user'
    }).then(res => {
      ref.current=res;
      form.setFieldsValue({...res})
    }).catch(err => {});
    return () => {

    }
  }, []);

  const onFinish = (values) => {
    request({
      method: 'PUT',
      url: `/api/user/${ref.current.id}`,
      data: {
        ...values,
      },
    }).then(res => {
      console.log(res);
    }).catch(e => {
      console.log(e);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card>
      <Form
        {...layout}
        form={form}
        name="login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="姓名"
          name="name"

          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="手机号"
          name="phone"
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
};

export default Index;

