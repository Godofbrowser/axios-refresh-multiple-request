import axios from 'axios';
import authInterceptor from './auth.interceptor';
import UsersApi from './api/users';
import AuthApi from './api/auth';

// Our dummy api's base url
const BASE_URL = 'http://127.0.0.1:3001/api/';

// Initial, invalid token
const invalidToken = '123xyz'

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Authorization': 'Bearer '+ invalidToken
    }
})

apiClient.interceptors.response.use(undefined, function (error) {
    alert(error.toString());
    return Promise.reject(error);
})

apiClient.interceptors.response.use(undefined, authInterceptor(apiClient));

window.api = {
    auth: new AuthApi(apiClient),
    users: new UsersApi(apiClient)
}
