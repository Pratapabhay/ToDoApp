import React, { Component } from 'react';
import { Checkbox, Button, Table } from 'element-react';
import axios from 'axios';
import AddTodo from './addTodo'
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';
import * as API from '../services/todoServices';

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
            ]
        };
    }

    deleteTodo(index) {
        const todos = this.props.storeTodos;
        
        let body = {
            id: todos[index]._id,
        }
        API.DELETE_TODO(body)
        .then(response => {
            this.props.FETCH_TODOS();
        })
        .catch(err => {
            console.log('Error in deleting todo to database', err);
        })
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
                {this.props.storeTodos.map((todo, index) => (
                    <li key={index}>
                        <Checkbox
                            checked={todo.isDone}>
                        </Checkbox>
                    {todo.todo}
                    </li>
                ))}
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
        FETCH_TODOS: (payload) => dispatch(actionCreators.fetchTodos(payload)),
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Todos);