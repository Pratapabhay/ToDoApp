import * as CONSTANTS from './actionsTypes';
import * as API from '../services/todoServices';


function setTodo(response) {
    return {
        type: CONSTANTS.REFRESH_TODOS,
        val: response,
    }
}
export const syncTodos = () => {
    console.log('Synching...');
    return (dispatch) => {
        API.FETCH_TODOS()
        .then(response => {
            dispatch(setTodo(response))
        })
        .catch(err => {
            console.log('Error in Syncing Todos');
        }) 
    }
}

export const addTodo = (payload) => {
    console.log('Adding ToDo');
    API.ADD_TODO(payload)
    .then(response => {
        syncTodos();
    })
    .catch(err => {
        console.log('Error in Adding todo to database', err);
    })
}

export const updateTodo = (payload) => {
    console.log('UPDATING ToDo', payload);
    API.UPDATE_TODO(payload)
    .then(response => {
        syncTodos();
    })
    .catch(err => {
        console.log('Error in Updating todo to database', err);
    })
}

export const deleteTodo = (payload) => {
    console.log('DELETING ToDo', payload);
    API.DELETE_TODO(payload)
    .then(response => {
        syncTodos();
    })
    .catch(err => {
        console.log('Error in deleting todo to database', err);
    })
}

