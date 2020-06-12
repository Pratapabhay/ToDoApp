import axios from 'axios';

export const FETCH_TODOS = () => {
    return axios({
        method: 'get',
        url: 'http://localhost:5000/api/todos',
        headers: {
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTM1NzAwNCwiZXhwIjoxNTkxNzE3MDA0fQ.QBuCWA7fWwjVMtbZmCdmqi_I4742SoEUHugwWvQVs8I"
        }
    })
        // .then(res => {
        //     const todos = res.data;
        //     console.log('Response', todos);
        //     return todos;
        // })
        // .catch((err) => {
        //     console.log('Here')
        //     throw err;
        // })
}

export const DELETE_TODO = (payload) => {
    axios({
        method: 'delete',
        url: 'http://localhost:5000/api/todos',
        headers: {
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTM1NzAwNCwiZXhwIjoxNTkxNzE3MDA0fQ.QBuCWA7fWwjVMtbZmCdmqi_I4742SoEUHugwWvQVs8I"
        },
        data: payload,
    })
        .then(res => {
            console.log('Response', res);
            return res.data;
        })
        .catch((err) => {
            console.log(`Error in Deleting Todo with id ${payload}`);
            throw err;
        })

}

export const ADD_TODO = (payload) => {

    return axios({
        method: 'post',
        url: 'http://localhost:5000/api/todos',
        headers: {
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTM1NzAwNCwiZXhwIjoxNTkxNzE3MDA0fQ.QBuCWA7fWwjVMtbZmCdmqi_I4742SoEUHugwWvQVs8I"
        },
        data: payload
    })
        // .then((res) => {
        //     console.log('Response', res.data);
        //     return res.data;
        // })
        // .catch((err) => {
        //     throw err;
        // })
}

export const UPDATE_TODO = (payload) => {
    // @paylaod 
    // body: { id: todoID }
    axios({
        method: 'update',
        url: 'http://localhost:5000/api/todos',
        headers: {
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWVkYTIxZDg3ZjdlYzAwNGZiZGQ5ZWRmIn0sImlhdCI6MTU5MTM1NzAwNCwiZXhwIjoxNTkxNzE3MDA0fQ.QBuCWA7fWwjVMtbZmCdmqi_I4742SoEUHugwWvQVs8I"
        },
        data: payload
    })
        .then((res) => {
            console.log('Response', res.data);
            return res.data;
        })
        .catch((err) => {
            throw err;
        })
}