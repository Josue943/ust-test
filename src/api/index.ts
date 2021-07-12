import Axios, { AxiosInstance } from 'axios';

const axios: AxiosInstance = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export default axios;
