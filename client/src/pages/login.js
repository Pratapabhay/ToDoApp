import React, { Component } from 'react';
import { Input, Form, Button } from 'element-react';
import 'element-theme-default';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import API from '../services/index';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                email: null,
                password: null
            },
            isLoginSuccessful: false,
            token: null,
            rules: {
                email: [
                    { required: true, message: 'Email is not Valid', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Password is not Valid', trigger: 'change' }
                ]
            }
        }
    }

    saveTokenToLocalStorage(token) {
        localStorage.setItem('Token', token);
    }
    handleSubmit(e) {
        e.preventDefault();
        let body = {
            email: this.state.form.email,
            password: this.state.form.password,
        }
        this.refs.form.validate((valid) => {
            if (valid) {
                API.LOGIN.LOGIN_USER(body)
                .then(res => {
                    const token = res.data;
                    this.saveTokenToLocalStorage(token);
                    API.SET_TOKEN_HEADER(token);
                    this.setState({
                        token: token,
                        isLoginSuccessful: true,
                    });
                })
                .catch((err) => {
                    throw err;
                })
            } else {
                return false;
            }
        });
    };

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }


    render() {

        if (this.state.isLoginSuccessful) {
            return <Redirect to='/' />;
        }

        let centering = {
            height: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        };

        return (
            <div style={centering}>
                <Form
                    ref="form"
                    className="en-US"
                    model={this.state.form}
                    rules={this.state.rules}
                    labelWidth="120"
                    labelPosition="top">
                    <Form.Item
                        label="Email"
                        prop="email">
                        <Input
                            value={this.state.form.email}
                            onChange={this.onChange.bind(this, 'email')}>
                        </Input>
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        prop="password">
                        <Input
                            value={this.state.form.password}
                            onChange={this.onChange.bind(this, 'password')}>
                        </Input>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            size="medium"
                            onClick={this.handleSubmit.bind(this)}>
                            Login
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;


