import React, { Component } from 'react';
import { Input, Form, Button } from 'element-react';
import 'element-theme-default';
import axios from 'axios';
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: null,
                email: null,
                password: null,
            },
            token: null,
            rules: {
                name: [
                    { required: true, message: 'Username', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: 'Email', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Password', trigger: 'change' }
                ]
            }
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        let body = {
            name: this.state.form.name,
            email: this.state.form.email,
            password: this.state.form.password,
        }
        this.refs.form.validate((valid) => {
            if (valid) {
                console.log('submit!');
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/api/users',
                    data: body
                })
                    .then(res => {
                        const token = res.data;
                        this.setState({
                            form: Object.assign({}, this.state.token, { token: token })
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
        console.log(key, value)
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }


    render() {
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
                        label="Name"
                        prop="name">
                        <Input
                            value={this.state.form.name}
                            onChange={this.onChange.bind(this, 'name')}>
                        </Input>
                    </Form.Item>

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
                            Sign Up
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;


