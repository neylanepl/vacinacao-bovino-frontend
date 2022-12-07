import axios from 'axios';
import { getToken } from "./authencation";

const vacinacaobovino = axios.create({
    baseURL: 'http://localhost:8080'
});

vacinacaobovino.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});