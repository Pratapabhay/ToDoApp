import axios from 'axios';

export default {

    FETCH_TODOS(payload) {
        return axios({
            method: 'get',
            url: `/api/todos?projectId=${payload}`,
        })
    },
    
    DELETE_TODO(payload) {
        return axios({
            method: 'delete',
            url: '/api/todos',
            data: payload,
        })
    },
    
    ADD_TODO(payload, projectId) {
        return axios({
            method: 'post',
            url: `/api/todos?projectId=${payload}`,
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
