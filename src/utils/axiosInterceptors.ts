import axios from 'axios';
import apiRoutes from '../api/api';

declare module 'axios' {
  interface AxiosRequestConfig {
    _isRetry: boolean;
  }
}

const axiosApiInstance = axios.create({
  baseURL: 'http://localhost:3333/api/v1',
  _isRetry: false,
});

axiosApiInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosApiInstance.interceptors.response.use(
  (response) => {
    const originalRequest = response.config;
    if (
      originalRequest.url === apiRoutes.auth.register ||
      originalRequest.url === apiRoutes.auth.login
    ) {
      const { access_token, refresh_token } = response.data as {
        access_token: string;
        refresh_token: string;
      };
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('refresh_token', refresh_token);
    }
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axiosApiInstance;
