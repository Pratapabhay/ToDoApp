import React, { Component } from 'react';
import { Input, Form, Button } from 'element-react';
import 'element-theme-default';
class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: null,
                password: null
            },
            rules: {
                username: [
                    { required: true, message: 'Username', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Password', trigger: 'change' }
                ]
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                console.log('submit!');
                console.log(this.state);
            } else {
                console.log('error submit!!');
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
                        label="Username"
                        prop="username">
                        <Input
                            value={this.state.form.username}
                            onChange={this.onChange.bind(this, 'username')}>
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


