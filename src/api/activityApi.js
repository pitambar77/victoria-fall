

// import axios from "axios";

// /* ================= AXIOS INSTANCE ================= */

// const API_BASE =
//   import.meta.env.VITE_API_BASE || "http://localhost:8000";

// const api = axios.create({
//   baseURL: `${API_BASE}/api`,
// });

// /* ================= MULTIPART CONFIG ================= */

// // const multipartConfig = {
// //   headers: {
// //     "Content-Type": "multipart/form-data",
// //   },
// // };

// /* ================= FORM DATA HELPER ================= */

// const buildFormData = (data) => {
//   const formData = new FormData();

//   Object.entries(data).forEach(([key, value]) => {
//     if (value === null || value === undefined) return;

//     /* ===== FILE FIELDS ===== */
//  // ✅ Banner image (single file)
//     if (key === "bannerImage" && value instanceof File) {
//       formData.append("bannerImage", value);
//       return;
//     }

//     if (key === "overviewImage" && value instanceof File) {
//       formData.append("overviewImage", value);
//       return;
//     }

//     if (key === "galleryImages" && Array.isArray(value)) {
//       value.forEach((file) => {
//         if (file instanceof File) {
//           formData.append("galleryImages", file);
//         }
//       });
//       return;
//     }

//     /* ===== JSON ARRAY / OBJECT FIELDS ===== */
//     if (
//       [
//         "banner",
//         "overviewInfo",
//         "facilities",
//         "highlights",
//         "fullDescription",
//         "include",
//         "exclude",
//       ].includes(key)
//     ) {
//       formData.append(key, JSON.stringify(value));
//       return;
//     }

//     /* ===== PRIMITIVE VALUES ===== */
//     if (typeof value !== "object") {
//       formData.append(key, String(value));
//     }
//   });

//   return formData;
// };

// /* ================= ACTIVITIES API ================= */

// export const getActivities = () => api.get("/activities");

// export const getActivity = (id) => api.get(`/activities/${id}`);

// // ✅ SLUG BASED FETCH (PUBLIC PAGES)
// export const getActivityBySlug = (slug) =>
//   api.get(`/activities/slug/${slug}`);

// // export const createActivity = (data) =>
// //   api.post("/activities", buildFormData(data), multipartConfig);

// // export const updateActivity = (id, data) =>
// //   api.put(`/activities/${id}`, buildFormData(data), multipartConfig);

// export const createActivity = (data) =>
//   api.post("/activities", buildFormData(data));

// export const updateActivity = (id, data) =>
//   api.put(`/activities/${id}`, buildFormData(data));


// export const deleteActivity = (id) =>
//   api.delete(`/activities/${id}`);

// /* ================= CATEGORIES API ================= */

// export const getCategoriesByDestination = (destinationId) =>
//   api.get(`/categories/${destinationId}`);

// export const createCategory = (data) =>
//   api.post("/categories", buildFormData(data), multipartConfig);

// export const updateCategory = (id, data) =>
//   api.put(`/categories/${id}`, buildFormData(data), multipartConfig);

// export const deleteCategory = (id) =>
//   api.delete(`/categories/${id}`);

// /* ================= DESTINATIONS API ================= */

// export const getDestinations = () => api.get("/destinations");

// export const createDestination = (data) =>
//   api.post("/destinations", buildFormData(data), multipartConfig);

// export const updateDestination = (id, data) =>
//   api.put(`/destinations/${id}`, buildFormData(data), multipartConfig);

// export const deleteDestination = (id) =>
//   api.delete(`/destinations/${id}`);



import axios from "axios";

/* ================= AXIOS INSTANCE ================= */

const API_BASE =
  import.meta.env.VITE_API_BASE || "http://victoria-fall-backend.manoramaseoservice.com";

const api = axios.create({
  baseURL: `${API_BASE}/api`,
});

/* ================= FORM DATA HELPER ================= */

const buildFormData = (data) => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value === null || value === undefined) return;

    /* ===== FILE FIELDS ===== */
    if (key === "bannerImage" && value instanceof File) {
      formData.append("bannerImage", value);
      return;
    }

    if (key === "overviewImage" && value instanceof File) {
      formData.append("overviewImage", value);
      return;
    }

    if (key === "galleryImages" && Array.isArray(value)) {
      value.forEach((file) => {
        if (file instanceof File) {
          formData.append("galleryImages", file);
        }
      });
      return;
    }

    /* ===== JSON FIELDS ===== */
    if (
      [
        "banner",
        "overviewInfo",
        "facilities",
        "highlights",
        "fullDescription",
        "include",
        "exclude",
        "importantInfo", // ✅ ADD THIS
      ].includes(key)
    ) {
      formData.append(key, JSON.stringify(value));
      return;
    }

    /* ===== PRIMITIVE VALUES ===== */
    if (typeof value !== "object") {
      formData.append(key, String(value));
    }
  });

  return formData;
};

/* ================= ACTIVITIES API ================= */

export const getActivities = () => api.get("/activities");

export const getActivity = (id) => api.get(`/activities/${id}`);

// Public (slug-based)
export const getActivityBySlug = (slug) =>
  api.get(`/activities/slug/${slug}`);

export const createActivity = (data) =>
  api.post("/activities", buildFormData(data));

export const updateActivity = (id, data) =>
  api.put(`/activities/${id}`, buildFormData(data));

export const deleteActivity = (id) =>
  api.delete(`/activities/${id}`);

/* ================= CATEGORIES API ================= */

export const getCategoriesByDestination = (destinationId) =>
  api.get(`/categories/${destinationId}`);

export const createCategory = (data) =>
  api.post("/categories", buildFormData(data));

export const updateCategory = (id, data) =>
  api.put(`/categories/${id}`, buildFormData(data));

export const deleteCategory = (id) =>
  api.delete(`/categories/${id}`);

/* ================= DESTINATIONS API ================= */

export const getDestinations = () => api.get("/destinations");

export const createDestination = (data) =>
  api.post("/destinations", buildFormData(data));

export const updateDestination = (id, data) =>
  api.put(`/destinations/${id}`, buildFormData(data));

export const deleteDestination = (id) =>
  api.delete(`/destinations/${id}`);
