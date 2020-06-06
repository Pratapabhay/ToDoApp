import { createStore } from 'redux';



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
    if (action.type == 'ADD_TODO') {

    } else if (action.type == 'UPDATE_TODO') {

    } else if (action.type == 'DELETE_TODO') {

    } else return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());


// Actions
store.dispatch({ type: 'ADD_TODO' });
store.dispatch({ type: 'UPDATE_TODO' });
store.dispatch({ type: 'DELETE_TODO' });

export default rootReducer;
