import axios from 'axios';
import { CONSTANTS } from '../../types/constants';

const axiosInstance = axios.create({
  baseURL: `${CONSTANTS.URL}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  responseType: 'json',
});

const api = {
  login(username: string, password: string) {
    return axiosInstance.post('/auth/login', { username, password });
  },

  register(firstname:string, lastname:string, username:string, password:string) {
    return axiosInstance.post('/auth/register',  {firstname, lastname, username, password });
  },

  getProfile() {
    return axiosInstance.get('/profile');
  },
};


export default api;
