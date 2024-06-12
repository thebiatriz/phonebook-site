import axios from "axios";
const api = axios.create({baseURL:"/api"})

api.interceptors.request.use(
    (request) => {
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => response, (error) => alert(error)
);

export default api;