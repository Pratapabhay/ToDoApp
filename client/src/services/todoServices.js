import axios from 'axios';

export const FETCH_TODOS = () => {
    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/todos',
        headers: {
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTk2Mzc2MiwiZXhwIjoxNTkyMzIzNzYyfQ.hblnUhJGsk94LqUigH4l9Fv2ZEJDtTCNk_J-xnTBV8s"
        }
    })
}

export const DELETE_TODO = (payload) => {
    console.log('DELETING TODO')
    return axios({
        method: 'delete',
        url: 'http://localhost:5000/api/todos',
        headers: {
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTk2Mzc2MiwiZXhwIjoxNTkyMzIzNzYyfQ.hblnUhJGsk94LqUigH4l9Fv2ZEJDtTCNk_J-xnTBV8s"
        },
        data: payload,
    })
}

export const ADD_TODO = (payload) => {
    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/todos',
        headers: {
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTk2Mzc2MiwiZXhwIjoxNTkyMzIzNzYyfQ.hblnUhJGsk94LqUigH4l9Fv2ZEJDtTCNk_J-xnTBV8s"
        },
        data: payload
    })
}

export const UPDATE_TODO = (payload) => {
    return axios({
        method: 'update',
        url: 'http://localhost:5000/api/todos',
        headers: {
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTk2Mzc2MiwiZXhwIjoxNTkyMzIzNzYyfQ.hblnUhJGsk94LqUigH4l9Fv2ZEJDtTCNk_J-xnTBV8s"
        },
        data: payload
    })
}