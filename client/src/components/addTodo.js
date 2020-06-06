import React from 'react';
import axios from 'axios';
import { Button, Form, Checkbox, Input } from 'element-react';

class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: {
                todo: null,
                isDone: false,
                hasAttachment: false
            },
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTM1NzAwNCwiZXhwIjoxNTkxNzE3MDA0fQ.QBuCWA7fWwjVMtbZmCdmqi_I4742SoEUHugwWvQVs8I",

        }
    }

    addTodo() {
        let body = {
            todo: this.state.todo.todo,
            isDone: this.state.todo.isDone,
            hasAttachment: this.state.todo.hasAttachment
        }
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/todos',
            headers: {
                'x-auth-token': this.state.token
            },
            data: body
        })
            .then((res) => {
                console.log('Response', res.data);
            })
            .catch((err) => {
                throw err;
            })
    }

    onChange(key, value) {
        console.log(value);
        this.setState({
            todo: Object.assign({}, this.state.todo, { [key]: value })
        });
    }
    render() {
        return (
            <div>
                <Form
                    ref="form"
                    className="en-US"
                    model={this.state.todo}
                    labelWidth="120"
                    labelPosition="top">
                    <Form.Item
                        label="ToDo Description"
                        prop="todo">
                        <Input
                            value={this.state.todo.todo}
                            onChange={this.onChange.bind(this, 'todo')}>
                        </Input>
                    </Form.Item>

                    <Form.Item
                        label="Has Attachment?"
                        prop="hasAttachment">
                        <Checkbox
                            checked={this.state.todo.hasAttachment}
                            onChange={this.onChange.bind(this, 'hasAttachment')}>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            size="medium"
                            onClick={this.addTodo.bind(this)}>
                            Add Todo
                            </Button>
                    </Form.Item>
                </Form>
            </div>
        )

    }
}

export default AddTodo;