import axios from 'axios';
import LOGIN from './login';
import PROJECTS from './projects';
import TODO from './todo';


const SERVER_URL = 'http://localhost:5000/';

export default {
    LOGIN,
    PROJECTS,
    TODO,

    SET_DATABASE_URL() {
        axios.defaults.baseURL = SERVER_URL;
    },

    SET_TOKEN_HEADER(token) {
        if (token) {
            axios.defaults.headers.common.Authorization = `${token}`;
        }
    },
}


