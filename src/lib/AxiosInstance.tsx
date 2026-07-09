import axios from "axios";


const AxiosInstance = axios.create({
baseURL: 'https://jsonplaceholder.typicode.com/',
timeout: 10000
});

export default AxiosInstance