// import axios from "axios";

// const BASE_URL = "http://localhost:8000/api/restaurants";

// export const getRestaurants = () => axios.get(BASE_URL);
// export const getRestaurantById = (id) => axios.get(`${BASE_URL}/${id}`);
// export const createRestaurant = (formData) => axios.post(BASE_URL, formData, { headers: { "Content-Type": "multipart/form-data" }});
// export const updateRestaurant = (id, formData) => axios.put(`${BASE_URL}/${id}`, formData, { headers: { "Content-Type": "multipart/form-data" }});
// export const deleteRestaurant = (id) => axios.delete(`${BASE_URL}/${id}`);
// export const deleteBannerImage = (data) => axios.delete(`${BASE_URL}/banner-image`, { data });
// export const deleteGalleryImage = (data) => axios.delete(`${BASE_URL}/gallery-image`, { data });
// export const addMenuCategory = (data) => axios.post(`${BASE_URL}/menu/category`, data);
// export const updateMenuCategory = (data) => axios.put(`${BASE_URL}/menu/category`, data);
// export const deleteMenuCategory = (data) => axios.delete(`${BASE_URL}/menu/category`, { data });
// export const addMenuItem = (data) => axios.post(`${BASE_URL}/menu/item`, data);
// export const updateMenuItem = (data) => axios.put(`${BASE_URL}/menu/item`, data);
// export const deleteMenuItem = (data) => axios.delete(`${BASE_URL}/menu/item`, { data });


// import axios from "axios";
// const API = "http://localhost:8000/api/restaurants";

// export const getRestaurants = () => axios.get(API);
// export const getRestaurant = (id) => axios.get(`${API}/${id}`);
// export const createRestaurant = (data) => axios.post(API, data);
// export const updateRestaurant = (id, data) => axios.put(`${API}/${id}`, data);
// export const deleteRestaurant = (id) => axios.delete(`${API}/${id}`);


import axios from "axios";

// const API = "http://localhost:8001/api/restaurants";
const API = "http://victoria-fall-backend.manoramaseoservice.com/api/restaurants";

export const getRestaurants = () => axios.get(API);
export const getRestaurant = (id) => axios.get(`${API}/${id}`);
export const createRestaurant = (data) =>
  axios.post(API, data, { headers: { "Content-Type": "multipart/form-data" } });
export const updateRestaurant = (id, data) =>
  axios.put(`${API}/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteRestaurant = (id) => axios.delete(`${API}/${id}`);

export const addMenuCategory = (data) => axios.post(`${API}/menu/category`, data);
export const updateMenuCategory = (data) => axios.put(`${API}/menu/category`, data);
export const deleteMenuCategory = (data) => axios.delete(`${API}/menu/category`, { data });
export const addMenuItem = (data) => axios.post(`${API}/menu/item`, data);
export const updateMenuItem = (data) => axios.put(`${API}/menu/item`, data);
export const deleteMenuItem = (data) => axios.delete(`${API}/menu/item`, { data });
