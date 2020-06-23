import * as CONSTANTS from './actionsTypes';
import API from '../services/index';

function setProjects(response) {
    return {
        type: CONSTANTS.FETCH_PROJECTS,
        val: response,
    }
}

export const fetchProjects = () => {
    console.log('Synching Projects...', API);
    return (dispatch) => {
        API.PROJECTS.FETCH_PROJECTS()
        .then(response => {
            dispatch(setProjects(response.data))
        })
        .catch(err => {
            console.log('Error in Syncing Projects');
        })
    }
}


function setTasks(response) {
    return {
        type: CONSTANTS.SET_TASKS,
        val: response,
    }
}

export const fetchTasks = (payload) => {
    console.log('Synching Tasks for project ID...', payload);
    return (dispatch) => {
        API.TODO.FETCH_TODOS(payload)
        .then(response => {
            dispatch(setTasks(response.data))
        })
        .catch(err => {
            console.log('Error in Syncing Projects');
        })
    }
}

