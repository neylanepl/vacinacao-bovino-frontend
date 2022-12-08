import axios from 'axios';
import { getToken } from "./authencation";

const VacinacaoBovinoAPI = axios.create({
    baseURL: 'http://localhost:8080'
});

VacinacaoBovinoAPI.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const handleGetMethod = async (path, setData) => {
  const result = await VacinacaoBovinoAPI.get(path);
  setData(result.data);
}


export default VacinacaoBovinoAPI;