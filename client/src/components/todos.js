import React, { Component } from 'react';
import { Checkbox, Button, Table } from 'element-react';
import axios from 'axios';
import AddTodo from './addTodo'
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';


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
                                onClick={this.props.DELETE_TODO}>
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
        this.props.DELETE_TODO(body);
    }

    componentDidMount() {
        this.props.FETCH_TODOS();
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
        UPDATE_TODO: (payload) => dispatch(actionCreators.updateTodo(payload)),
        DELETE_TODO: (payload) => dispatch(actionCreators.deleteTodo(payload)),
        FETCH_TODOS: () => dispatch(actionCreators.syncTodos())
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Todos);