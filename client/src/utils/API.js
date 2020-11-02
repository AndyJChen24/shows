/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export default {
    getTitle(searchName) {
        return axios.get(`/api/imdb/title/${searchName}`);
    },
    getTrending() {
        return axios.get('/api/trending');
    },
};