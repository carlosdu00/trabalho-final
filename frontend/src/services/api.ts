// api.js
import axios from "axios";

// Define a URL base da API
const baseURL = process.env.NEXT_PUBLIC_API_URL;

// Configuração do Axios
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export default api;
