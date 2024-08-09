import axios from 'axios';

// Create Instance
const instance = axios.create({
    baseURL: 'http://localhost:3000/api'
});

// Adding a Token to each request
instance.interceptors.request.use(consfig => {
    consfig.headers.Authorization = window.localStorage.getItem('token');
    return consfig;
});

export default instance;