export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = (payload) => {
    console.log('Action', payload);
    return (dispatch) => {
        setTimeout(() => {
            dispatch({
                type: ADD_TODO,
                val: payload
            })
        }, 2000);
    }
}

export const updateTodo = (payload) => {
    return {
        type: UPDATE_TODO,
        val: payload
    }
}

export const deleteTodo = (payload) => {

    return {
        type: DELETE_TODO,
        val: payload
    }
}

