import axios from "axios";
import CheckToken from "./CheckToken";
import Logout from "./Logout";

const api = axios.create({
    baseURL: "https://hir-atelier.onrender.com"
});

api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
            Logout();
        }
        return Promise.reject(err);
    }
);

export default api;