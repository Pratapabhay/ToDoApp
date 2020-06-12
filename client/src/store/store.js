import * as CONSTANTS from '../store/actionsTypes';


const initialState = {
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
        }
    ]
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type == CONSTANTS.REFRESH_TODOS) {
        console.log('Refreshed TODOS DISPATCHED', action);
        return Object.assign({}, state, action.val);
    } else return state;
}

export default rootReducer;
