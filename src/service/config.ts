import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig} from "axios";
//const api = axios.create({baseURL:"/api"})

function apiConfig(baseUrl: string): AxiosRequestConfig{
    return {
        baseURL: baseUrl,
    };
}

// Função para inicializar o Axios com interceptors e configuração
// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
function initAxios(config: AxiosRequestConfig, token?: any): AxiosInstance{
    const defineInstance = axios.create(config);

    // Interceptores de requisição
    defineInstance.interceptors.request.use(
        (request: InternalAxiosRequestConfig) => {
            return request;
        },
        // Tratamento de erros de requisição
        (error) => Promise.reject(error)
    );

// Interceptores de resposta
    defineInstance.interceptors.response.use (
        (response) => response,
        (error: AxiosError) => {
            alert(error);
            return Promise.reject(error);
        }
    );

    return defineInstance;

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function api(baseURL="/api", token?: any){
    return initAxios(apiConfig(baseURL), token);
}

// export default api;

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