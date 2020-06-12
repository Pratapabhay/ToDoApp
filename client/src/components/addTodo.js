import React from 'react';
import axios from 'axios';
import { Button, Form, Checkbox, Input } from 'element-react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';


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


    onChange(key, value) {
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
                    model = { this.state.todo }
                    labelWidth="120"
                    labelPosition="top">
                    <Form.Item
                        label="ToDo Description"
                        prop="todo">
                        <Input
                            value = { this.state.todo.todo }
                            onChange = { this.onChange.bind(this, 'todo') }>
                        </Input>
                    </Form.Item>

                    <Form.Item
                        label="Has Attachment?"
                        prop="hasAttachment">
                        <Checkbox
                            checked = { this.state.todo.hasAttachment }
                            onChange = { this.onChange.bind(this, 'hasAttachment')}>
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            size="medium"
                            onClick={this.props.ADD_TODO()}>
                            Add Todo
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        storeTodos: state.todos,
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        ADD_TODO: (payload) => dispatch(actionCreators.addTodo(payload)),
        UPDATE_TODO: (payload) => dispatch(actionCreators.updateTodo(payload)),
        DELETE_TODO: (payload) => dispatch(actionCreators.deleteTodo(payload))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(AddTodo);
