import React from 'react';
import axios from 'axios';
import { Button, Form, Checkbox, Input } from 'element-react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import * as API from '../services/todoServices';


class AddTodo extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: {
                todo: null,
                isDone: false,
                hasAttachment: false
            },
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTk2Mzc2MiwiZXhwIjoxNTkyMzIzNzYyfQ.hblnUhJGsk94LqUigH4l9Fv2ZEJDtTCNk_J-xnTBV8s",
        }
    }


    addTodo = () => {
        let body = {
            todo: this.state.todo.todo,
            isDone: this.state.todo.isDone,
            hasAttachment: this.state.todo.hasAttachment
        }
        console.log('Adding ToDo');
        API.ADD_TODO(body)
        .then(response => {
            this.props.FETCH_TODOS();
        })
        .catch(err => {
            console.log('Error in Adding todo to database', err);
        })
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
                            onClick={this.addTodo.bind(this)}>
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
        FETCH_TODOS: (payload) => dispatch(actionCreators.fetchTodos(payload)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(AddTodo);
