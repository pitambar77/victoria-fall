import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "victoria-fall-backend.manoramaseoservice.com/api", // your backend URL
  // baseURL: "http://localhost:8000/api"
});

export default axiosInstance;
