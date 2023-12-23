import axios from 'axios'
import { parseCookies } from 'nookies';
import { config } from 'react-transition-group';

const BASE_URL = 'http://localhost:3333/api';
const $api = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})
$api.interceptors.request.use((config) => {
    config.headers.Authorization = 'Bearer '+ localStorage.getItem('assessToken')
    return config;
})
export default $api;