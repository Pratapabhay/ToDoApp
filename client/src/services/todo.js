import axios from 'axios';

export default {

    FETCH_TODOS() {
        return axios({
            method: 'get',
            url: '/api/todos',
        })
    },
    
    FETCH_PROJECTS() {
        return axios({
            method: 'get',
            url: '/api/todos',
        })
    },
    
    DELETE_TODO(payload) {
        console.log('DELETING TODO')
        return axios({
            method: 'delete',
            url: '/api/todos',
            data: payload,
        })
    },
    
    ADD_TODO(payload) {
        return axios({
            method: 'post',
            url: '/api/todos',
            data: payload
        })
    },
    
    UPDATE_TODO(payload) {
        return axios({
            method: 'update',
            url: '/api/todos',
            data: payload
        })
    }
}
