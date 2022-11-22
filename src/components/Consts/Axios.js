// import axios from "axios";

// const api = axios.create({
//   baseURl: 'https://jsonplaceholder.typicode.com',
//   // headers: {
//   //   "Access-Control-Allow-Origin": "*"
//   // },
// });



import axios from 'axios';

const api = axios.create();

api.interceptors.request.use((config) => config, (error) => Promise.reject(error));

api.interceptors.response.use((response) => response, (error) => Promise.reject(error));

export default api;

