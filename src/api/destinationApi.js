// import axios from "axios";

// // const API = "https://victoria-fall-backend-production.up.railway.app/api/destinations";
// const API = "http://localhost:8000/api/destinations";


// // ✅ Create Destination
// export const createDestination = (data) =>
//   axios.post(API, data, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

// // ✅ Get All Destinations
// export const getDestinations = () => axios.get(API);

// // ✅ Get Single Destination
// export const getDestination = (id) => axios.get(`${API}/${id}`);

// // ✅ Update Destination
// export const updateDestination = (id, data) =>
//   axios.put(`${API}/${id}`, data, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });

// // ✅ Delete Destination
// export const deleteDestination = (id) => axios.delete(`${API}/${id}`);



import axios from "axios";

// const API = "https://victoria-fall-backend-production.up.railway.app/api/destinations";
const API = "https://victoria-fall-backend.manoramaseoservice.com/api/destinations";

/* ================= CREATE ================= */
export const createDestination = (data) =>
  axios.post(API, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

/* ================= READ ================= */

// ✅ Get All Destinations
export const getDestinations = () => axios.get(API);

// ✅ Get Destination by ID (admin/edit use)
export const getDestination = (id) => axios.get(`${API}/${id}`);

// ✅ Get Destination by SLUG (public pages)
export const getDestinationBySlug = (slug) =>
  axios.get(`${API}/slug/${slug}`);

/* ================= UPDATE ================= */
export const updateDestination = (id, data) =>
  axios.put(`${API}/${id}`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

/* ================= DELETE ================= */
export const deleteDestination = (id) => axios.delete(`${API}/${id}`);
