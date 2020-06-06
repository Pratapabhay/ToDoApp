import React, { Component } from 'react';
import { Checkbox, Button, Table } from 'element-react';
import axios from 'axios';
import AddTodo from './addTodo'
import { connect } from 'react-redux';

class Todos extends Component {

    constructor(props) {
        super();

        this.state = {
            columns: [
                {
                    type: 'index'
                },
                {
                    label: "Completed",
                    prop: "isDone",
                    width: 200
                },
                {
                    label: "Description",
                    prop: "todo",
                    width: 300
                },
                {
                    label: "Attachment",
                    prop: "hasAttachment",
                    width: 200
                },
                {
                    label: "Actions",
                    width: 200,
                    fixed: 'right',
                    render: (row, column, index) => {
                        return <span>
                            <Button
                                type="text"
                                size="small"
                                onClick={this.deleteTodo.bind(this, index)}>
                                Delete
                            </Button>
                        </span>
                    }
                }
            ],
            todos: [
                {
                    todo: 'Create Login Component',
                    isDone: true,
                    hasAttachment: false
                },
                {
                    todo: 'Create ToDos Component',
                    isDone: false,
                    hasAttachment: false
                },
                {
                    todo: 'Add Routing',
                    isDone: false,
                    hasAttachment: false
                },
                {
                    todo: 'Set Authentication',
                    isDone: false,
                    hasAttachment: false
                },
            ]
        };
    }


    deleteTodo(index) {
        const { todos } = this.state;

        let body = {
            id: todos[index].id,
        }
        axios({
            method: 'delete',
            url: 'http://localhost:5000/api/todos',
            headers: {
                'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTM1NzAwNCwiZXhwIjoxNTkxNzE3MDA0fQ.QBuCWA7fWwjVMtbZmCdmqi_I4742SoEUHugwWvQVs8I"
            },
            data: body,
        })
            .then(res => {
                console.log('Response', res);
                this.fetchTodos();
            })
            .catch((err) => {
                console.log('Here')
                throw err;
            })
    }
    fetchTodos() {
        axios({
            method: 'get',
            url: 'http://localhost:5000/api/todos',
            headers: {
                'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTM1NzAwNCwiZXhwIjoxNTkxNzE3MDA0fQ.QBuCWA7fWwjVMtbZmCdmqi_I4742SoEUHugwWvQVs8I"
            }
        })
            .then(res => {
                const todos = res.data;
                console.log('Response', todos);
                this.setState({
                    todos: todos,
                });
            })
            .catch((err) => {
                console.log('Here')
                throw err;
            })
    }

    addTodo() {

    }

    componentDidMount() {
        this.fetchTodos();
    }

    RenderTodos() {
        return this.state.todos.map(item =>
            <div>
                <Checkbox
                    checked={item.isDone}>
                </Checkbox>
                {item.todo}
            </div>
        )
    }
    render() {

        return (
            <div>
                <Table
                    style={{ width: '100%' }}
                    columns={this.state.columns}
                    data={this.props.storeTodos}
                    border={true}
                    highlightCurrentRow={true}
                    onCurrentChange={item => console.log(item)}
                />
                <AddTodo />
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
        ADD_TODO: () => dispatch({ type: 'ADD_TODO' }),
        UPDATE_TODO: () => dispatch({ type: 'UPDATE_TODO' }),
        DELETE_TODO: () => dispatch({ type: 'DELETE_TODO' })
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Todos);