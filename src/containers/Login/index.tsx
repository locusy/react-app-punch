import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import axios from 'axios'
import { Signin } from './../../fetch/api'
import { setItem } from './../../utils/localStorage'
import "./style.css"
const FormItem = Form.Item;

class Login extends React.Component<any, any>{
  constructor(props){
    super(props);
    this.state = {
      number: 1
    }
  }
  handleSubmit = (e: any): void => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log(values)
        const params = {
          "code": values.userName,
          "password": values.password
        }
        Signin(params).then((res: any) => {
            if(res.data.code != 200) {
              throw res.data.msg;
            };
            let loginTime = new Date();
            setItem('accessToken', res.data.payload.accessToken);
            setItem('refreshToken', res.data.payload.refreshToken);
            setItem('expireTime', res.data.payload.expireIn);
            setItem('username', params.code);
            setItem('password', params.password);
            setItem('loginTime', loginTime);
            this.props.history.push("/home")
          }
        )
        .catch((error) => {
          console.log(error)
        })
      }else {
        return false
      }
    });
  }

  componentWillMount() {
    // 请求数据
    // console.log('componentWillMount')
  }

  componentDidMount() {
    // DOM操作
    // console.log('componentDidMount')
  }

  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps')
  }

  shouldComponentUpdate(newProps, newState) {
    // 优化性能
    // console.log('shouldComponentUpdate')
    if(newState.number < 2)return true;
    return false
  }

  componentWillUpdate() {
    // console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount')
  }

  public render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-wrap">
        <Form className="login-form">
          <div className="login-name">登录</div>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名' }],
            })(
              <Input prefix={<Icon type="user" />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码' }],
            })(
              <Input prefix={<Icon type="lock" />} type="password" placeholder="密码" />
            )}
          </FormItem>
          <FormItem>
            {/* {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>记住密码</Checkbox>
            )} */}
            <a className="login-form-forgot" href="">忘记密码?</a>
            <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Login)