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
            shouldRenderAddTodo: false,
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
            this.onChangeRender(false);
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

    onChangeRender(value) {
        this.setState({
            shouldRenderAddTodo: value
        });
    }

    render() {

        let addTodoForm = 
            <Form
                ref="form"
                type="submit"
                className="en-US"
                model = { this.state.todo }
                labelWidth="120"
                labelPosition="top">
                <Form.Item
                    prop="todo">
                    <Input
                        placeholder="Add Task"
                        value = { this.state.todo.todo }
                        onChange = { this.onChange.bind(this, 'todo') }>
                    </Input>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        size="small"
                        onClick={this.addTodo.bind(this)}>
                        Add Todo
                    </Button>
                    <Button
                        size="small"
                        onClick={this.onChangeRender.bind(this, false)}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>

        let addTodoIcon = 
            <i 
                className="el-icon-plus"
                onClick={this.onChangeRender.bind(this, true)}>
            </i>

        return (
            <div>
                {!this.state.shouldRenderAddTodo && addTodoIcon}
                {this.state.shouldRenderAddTodo && addTodoForm}
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
