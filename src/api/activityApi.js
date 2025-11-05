

import axios from "axios";

const API = "https://victoria-fall-backend-production.up.railway.app/api/activities";

// ✅ Main CRUD
export const getActivities = () => axios.get(API);
export const getActivity = (id) => axios.get(`${API}/${id}`);

// export const getActivityById = (id) => axios.get(`${API}/${id}`);



// Helper to build FormData safely
const buildFormData = (data) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return; // keep 0 and empty string

    if (key === "bannerImage") {
      formData.append(key, value);
    } else if (key === "galleryImages" && Array.isArray(value)) {
      value.forEach((file) => formData.append(key, file));
    } else if (["facilities", "highlights", "fullDescription", "include", "exclude"].includes(key)) {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
};

// Create Activity
export const createActivity = (data) => {
  const formData = buildFormData(data);
  return axios.post(API, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Update Activity
export const updateActivity = (id, data) => {
  const formData = buildFormData(data);
  return axios.put(`${API}/${id}`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// Delete Activity
export const deleteActivity = (id) => axios.delete(`${API}/${id}`);

// ✅ Category CRUD
export const getCategoriesByDestination = (destinationId) =>
  axios.get(`https://victoria-fall-backend-production.up.railway.app/api/categories/${destinationId}`);
export const createCategory = (data) =>
  axios.post("https://victoria-fall-backend-production.up.railway.app/api/categories", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateCategory = (id, data) =>
  axios.put(`https://victoria-fall-backend-production.up.railway.app/api/categories/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteCategory = (id) =>
  axios.delete(`https://victoria-fall-backend-production.up.railway.app/api/categories/${id}`);

// ✅ Destination CRUD
export const getDestinations = () =>
  axios.get("https://victoria-fall-backend-production.up.railway.app/api/destinations");
export const createDestination = (data) =>
  axios.post("https://victoria-fall-backend-production.up.railway.app/api/destinations", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const updateDestination = (id, data) =>
  axios.put(`https://victoria-fall-backend-production.up.railway.app/api/destinations/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteDestination = (id) =>
  axios.delete(`https://victoria-fall-backend-production.up.railway.app/api/destinations/${id}`);
