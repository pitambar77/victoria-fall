import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://victoria-fall-backend-production.up.railway.app/api", // your backend URL
  baseURL: "http://localhost:8000/api"
});

export default axiosInstance;
