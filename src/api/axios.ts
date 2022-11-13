import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        Accept: "application/json",
    }
})
instance.defaults.withCredentials = true;

export default instance;