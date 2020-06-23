import * as CONSTANTS from '../store/actionsTypes';

const initialState = {
    todos:
    {
        todo: [
            {
                description: 'Create Redux Store for tasks',
                dueDate: '22/12/1990',
                createdBy: 'Abhay'
            },
            {
                description: 'Concatenate redux store',
                dueDate: '22/12/1995',
                createdBy: 'Pratap'
            },
            {
                description: 'Connect tasks with the view',
                dueDate: '22/12/1995',
                createdBy: 'Pratap'
            }
        ],
        inProgress: [
            {
                description: 'Add dummy data to the todos',
                dueDate: '22/12/2000',
                createdBy: 'Rahul'
            },
            {
                description: 'Remove redundant data from the todos',
                dueDate: '22/12/2000',
                createdBy: 'Yadav'
            }
        ],
        completed: [
            {
                description: 'Create store for projects',
                dueDate: '22/12/2000',
                createdBy: 'Agraj'
            },
            {
                description: 'Connect project data to the view',
                dueDate: '22/12/2000',
                createdBy: 'Kisna'
            }
        ]
    },
    projects: [
        {
            id: 1,
            description: 'Project 1',
            createdAt: '22/12/2019'
        },
        {
            id: 2,
            description: 'Project 2',
            createdAt: '10/02/2020'
        },
        {
            id: 3,
            description: 'Project 3',
            createdAt: '2/08/2020'
        }
    ],
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type == CONSTANTS.SET_TASKS) {
        console.log('Refreshed TODOS DISPATCHED', action);
        return Object.assign({}, state, {todos: action.val});
    } else if (action.type == CONSTANTS.FETCH_PROJECTS) {
        console.log('Refreshed Projects DISPATCHED', action);
        return Object.assign({}, state, {projects: action.val});
    } else return state;
}

export default rootReducer;
