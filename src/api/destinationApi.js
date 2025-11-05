import axios from "axios";

const API = "https://victoria-fall-backend-production.up.railway.app/api/destinations";

// ✅ Create Destination
export const createDestination = (data) =>
  axios.post(API, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// ✅ Get All Destinations
export const getDestinations = () => axios.get(API);

// ✅ Get Single Destination
export const getDestination = (id) => axios.get(`${API}/${id}`);

// ✅ Update Destination
export const updateDestination = (id, data) =>
  axios.put(`${API}/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

// ✅ Delete Destination
export const deleteDestination = (id) => axios.delete(`${API}/${id}`);
