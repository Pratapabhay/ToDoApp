import axios from 'axios';

export default {
    FETCH_PROJECTS() {
        return axios({
            method: 'get',
            url: 'api/projects',
        })
    },
    
    POST_PROJECT(payload) {
        return axios({
            method: 'post',
            url: 'api/projects',
            data: payload,
        })
    },
    
    DELETE_PROJECT() {
        return axios({
            method: 'delete',
            url: 'api/projects',
        })
    }
    
}
