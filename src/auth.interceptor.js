// for multiple requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach(prom => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  })
  
  failedQueue = [];
}

const interceptor = (axiosInstance) => (error) => {
    const _axios = axiosInstance;
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
        
        if (isRefreshing) {
            return new Promise(function(resolve, reject) {
            failedQueue.push({resolve, reject})
            }).then(token => {
            originalRequest.headers['Authorization'] = 'Bearer ' + token;
            return _axios.request(originalRequest);
            }).catch(err => {
            return Promise.reject(err);
            })
        }

        originalRequest._retry = true;
        isRefreshing = true;

        const refreshToken = window.localStorage.getItem('refreshToken') || 'refresh123xyz';
        return new Promise((resolve, reject) => {
        window.api.auth.refresh(refreshToken)
            .then(({data}) => {
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('refreshToken', data.refreshToken);
                _axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
                originalRequest.headers['Authorization'] = 'Bearer ' + data.token;
                processQueue(null, data.token);
                resolve(_axios(originalRequest));
            })
            .catch((err) => {
                processQueue(err, null);
                reject(err);
            })
            .then(() => { isRefreshing = false })
        })
    }

    return Promise.reject(error);
};

export default interceptor
