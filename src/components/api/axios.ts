import axios from 'axios';

const axiosInstance = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: process.env.REACT_APP_API_URL,
});

export default axiosInstance;
