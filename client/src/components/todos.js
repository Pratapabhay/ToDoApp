import React, { Component } from 'react';
import { Checkbox } from 'element-react';

class Todos extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
                {this.RenderTodos()};
            </div>
        );
    }
}

export default Todos;