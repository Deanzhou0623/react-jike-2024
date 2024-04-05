import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'



// return the login info to backend
const onFinish = (values) => {
  console.log('Success:', values);
};

const Login = () => {
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          validateTrigger="onBlur"
          onFinish={onFinish}
        >
          <Form.Item
            //mutiple condtions check 1.phone number 2.valid phone number
            name="mobile"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
              //2.check if it is valid phone number
              {
                pattern: /^1[3-9]\d{9}/,
                message: 'Please enter a valid phone number ',
              },
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: 'Please input your code!',
              },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login