import axios from 'axios';
 const api = axios.create({
    baseURL:"https://newss-backend.herokuapp.com",
 });

 export default api;