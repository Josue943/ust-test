import Axios, { AxiosInstance } from 'axios';

const axios: AxiosInstance = Axios.create({
  baseURL: 'http://api.openweathermap.org/data/2.5',
});

export default axios;
