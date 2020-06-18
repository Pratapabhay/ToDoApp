import axios from 'axios';

export default {

    CHECK_AUTH() {
        return axios({
            method: 'get',
            url: 'api/auth',
        })
    },

    LOGIN_USER(payload) {
        console.log(payload)
        return axios({
            method: 'post',
            url: 'api/auth',
            data: payload,
        })
    },

    REGISTER_USER(payload) {
        return axios({
            method: 'post',
            url: 'api/auth',
            data: payload,
        })
    }
} 
