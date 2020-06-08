import { createStore } from 'redux';
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../store/actions';


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
    if (action.type == ADD_TODO) {
        console.log('ADD TODO Dispatched', action);
        return state;
    } else if (action.type == UPDATE_TODO) {

    } else if (action.type == DELETE_TODO) {
        console.log('Delete TODO', action.val);
        return state;
    } else return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// // Actions
// store.dispatch({ type: 'ADD_TODO' });
// store.dispatch({ type: 'UPDATE_TODO' });
// store.dispatch({ type: 'DELETE_TODO' });

export default rootReducer;
