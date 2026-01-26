


import axios from "axios";

// const API_URL = "https://victoria-fall-backend-production.up.railway.app/api/categories";
const API_URL = "http://localhost:8000/api/categories";

export const getCategoriesByDestination = (destinationId) =>
  axios.get(`${API_URL}/${destinationId}`);

export const createCategory = (data) =>
  axios.post(API_URL, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const updateCategory = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

export const deleteCategory = (id) => axios.delete(`${API_URL}/${id}`);
