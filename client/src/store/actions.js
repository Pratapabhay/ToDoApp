import * as CONSTANTS from './actionsTypes';
import * as API from '../services/todoServices';


function setTodo(response) {
    return {
        type: CONSTANTS.REFRESH_TODOS,
        val: response,
    }
}
export const fetchTodos = () => {
    console.log('Synching Projects...');
    return (dispatch) => {
        API.FETCH_TODOS()
        .then(response => {
            dispatch(setTodo(response.data))
        })
        .catch(err => {
            console.log('Error in Syncing Todos');
        }) 
    }
}

function setProjects(response) {
    return {
        type: CONSTANTS.FETCH_PROJECTS,
        val: response,
    }
}

export const fetchProjects = () => {
    console.log('Synching Projects...');
    return (dispatch) => {
        API.FETCH_PROJECTS()
        .then(response => {
            dispatch(setProjects(response.data))
        })
        .catch(err => {
            console.log('Error in Syncing Projects');
        })
    }
}

