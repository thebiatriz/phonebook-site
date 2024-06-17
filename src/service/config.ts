import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";
//const api = axios.create({baseURL:"/api"})

function apiConfig(baseUrl: string): AxiosRequestConfig{
    return {
        baseURL: baseUrl,
    };
}

function initAxios(config: AxiosRequestConfig, token?: any): AxiosInstance{
    const defineInstance = axios.create(config);
    defineInstance.interceptors.request.use(
        (request: AxiosRequestConfig) => {
            return request;
        },
        (error) => Promise.reject(error)
    );

    defineInstance.interceptors.response.use (
        (response) => response,
        (error: AxiosError) => {
            alert(error);
            return Promise.reject(error);
        }
    );

    return defineInstance;

}

function api(baseURL="/api", token?: any){
    return initAxios(apiConfig(baseURL), token);
}

export default api;

// api.interceptors.request.use(
//     (request) => {
//         return request;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// api.interceptors.response.use(
//     (response) => response, (error) => {alert(error);
//     return Promise.reject(error);}
// );

// export default api;