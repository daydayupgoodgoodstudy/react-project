import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from "react-helmet";
import { connect } from 'react-redux';
import { Form, Icon, Input, Button } from 'antd';
import {  Route, Link } from "react-router-dom";
import { login , logout,register } from '../../action/login';
// import 'antd/dist/antd.css'; 
import Cookie from 'react-cookies';
import Canvas from '../../PubilcComponents/canvs.jsx';


const FormItem = Form.Item;

import '../../asset/css/login';


class Login extends React.Component {

    componentWillMount(){
        let { match,history } = this.props;
        if(Cookie.load("access_token")){
            history.push("/home")
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { form , dispatch,history} = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                let output = {
                    username:values.username,
                    password:values.password
                }
                dispatch(login(output,history))
            }
        });
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="Login_page">
                <Canvas />
                <Helmet title="测试网站" />
                {/* <img src="../asset/images/timg.jpeg" alt=""/> */}
                <Form onSubmit={this.handleSubmit}  className="login-form">
                    
                    <FormItem>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                    </FormItem>
                    <FormItem>
                        {/* {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(
                            <Checkbox>Remember me</Checkbox>
                            )} */}
                        {/* <a className="login-form-forgot" href="">Forgot password</a> */}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <Link to="/home">register now!</Link>
                    </FormItem>
                </Form>
            </div>

        );
    }
}

Login = Form.create({})(Login);

function mapStateToProps(state) {
    return {
      num: state.login,
      name:state.login
    }
}

export default  connect()(Login);