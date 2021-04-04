import axios from 'axios';

const transactionsAxios = axios.create({
    baseURL: 'http://localhost:3001/',
});

export default transactionsAxios;