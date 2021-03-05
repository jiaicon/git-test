/**
 * Created by icon on 2021/3/4
 */
import React, {useEffect} from 'react';
import request from '@/utils/request';
import { withRouter } from 'react-router-dom'
import { Card, Form, Input, Button } from 'antd';
import BGParticle from './../../utils/BGParticle';
const bgImg = require('./bg1.jpg');

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const Index = (props) => {
  const onFinish = (values) => {
    request({
      method: 'POST',
      url: `/api/login`,
      data: values,
    }).then(res => {
      if (res) {
        props.history.replace('/admin/user');
      }
    }).catch(e => {
      console.log(e);
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    const background = new BGParticle('backgroundBox');
    background.init();
    return () => {

    }
  }, []);

  return (
    <div style={styles.loginContainer}>
      <Card
        style={styles.loginForm}
      >
        <Form
          {...layout}
          name="login"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="姓名"
            name="name"
            rules={[{ required: true, message: '请输入用户名!' }]}
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
      <div id='backgroundBox' style={styles.backgroundBox} />
    </div>
  )
};

const styles = {
  loginContainer: {
    position: 'relative',
    width: '100%',
    height: '100vh',
  },
  backgroundBox: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${bgImg})`,
    backgroundSize: '100% 100%',
    transition:'all .5s'
  },
  loginForm: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 1,
    width: '30%',
    padding: '50px 20px',
    transform: 'translate(-50%, -50%)'
  }
};

export default withRouter(Index);

