import axios from "axios";

const API = "http://localhost:8001/api/property";

export const getProperties = () => axios.get(API);

export const getProperty = (id) =>
  axios.get(`${API}/${id}`);

export const createProperty = (data) =>
  axios.post(API, data);

export const deleteProperty = (id) =>
  axios.delete(`${API}/${id}`);

export const updateOverviewMeta = (id, data) =>
  axios.put(`${API}/${id}/overview/meta`, data);

export const addHighlight = (id, formData) =>
  axios.post(`${API}/${id}/highlights`, formData);

export const addGalleryImage = (id, formData) =>
  axios.post(`${API}/${id}/gallery`, formData);