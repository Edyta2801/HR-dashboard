import axios from 'axios';
// import { CONSTANTS } from '../../types/constants';

// const token = window.localStorage.getItem('access_token');
const API_URL = 'http://localhost:9595/app';
// const API_KEY = window.localStorage.getItem('access_token');
const API_KEY = `Bearer ${process.env.REACT_APP_API_KEY}`;

const axiosInstance = axios.create({
  // baseURL: `${CONSTANTS.URL}`,
  // baseURL: API_URL,
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${process.env.REACT_APP}`,
    // Authorization: `Bearer ${API_KEY}`,
    // Authorization: `Bearer ${token}`,
    Authorization: API_KEY,
  },
  responseType: 'json',
});

const api = {
  login(username: string, password: string) {
    return axiosInstance.post('/auth/login', { username, password });
  },

  register(
    firstname: string,
    lastname: string,
    username: string,
    password: string,
  ) {
    return axiosInstance.post('/app/auth/register', {
      firstname,
      lastname,
      username,
      password,
    });
  },

  getProfile() {
    return axiosInstance.get('/app/profile');
  },
};

export default api;
