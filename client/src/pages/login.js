import React, { Component } from 'react';
import { Input, Form, Button } from 'element-react';
import 'element-theme-default';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

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

    handleSubmit(e) {
        e.preventDefault();
        let body = {
            email: this.state.form.email,
            password: this.state.form.password,
        }
        this.refs.form.validate((valid) => {
            if (valid) {
                console.log('submit!');
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/api/auth',
                    data: body
                })
                    .then(res => {
                        const token = res.data;
                        this.setState({
                            token: token,
                            isLoginSuccessful: true,
                        });
                    })
                    .catch((err) => {
                        throw err;
                    })
                console.log(this.state);
            } else {
                console.log('Data is not Valid!!!');
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


