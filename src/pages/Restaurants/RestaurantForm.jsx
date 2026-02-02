


// import React, { useState, useEffect } from "react";
// import {
//   createRestaurant,
//   getRestaurant,
//   updateRestaurant,
// } from "../../api/restaurantApi";
// import { useNavigate, useParams } from "react-router-dom";
// import MenuManager from "../../components/MenuManager";

// const RestaurantForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     shortTitle: "",
//     resturantType: "",
//     overviewTittle: "",
//     overview: "",
//     subDescription: "",
//     address1: "",
//     address2: "",
//     openingTime: "",
//     closingTime: "",
//     contactNumber: "",
//     priceperPerson: "",
//     bannerImage: null,
//     overviewImage: null,
//     galleryImages: [],
//     menu: [],
//   });

//   const [previewBanner, setPreviewBanner] = useState(null);
//   const [previewOverview, setPreviewOverview] = useState(null);
//   const [previewGallery, setPreviewGallery] = useState([]);
//   const [existingGallery, setExistingGallery] = useState([]);

//   const navigate = useNavigate();
//   const { id } = useParams();
//   const isEdit = Boolean(id);

//   /* ================= FETCH DATA (EDIT MODE) ================= */
//   useEffect(() => {
//     if (!isEdit) return;

//     getRestaurant(id).then((res) => {
//       const data = res.data;

//       setFormData((prev) => ({
//         ...prev,
//         name: data.name || "",
//         shortTitle: data.shortTitle || "",
//         resturantType: data.resturantType || "",
//         overviewTittle: data.overviewTittle || "",
//         overview: data.overview || "",
//         subDescription: data.subDescription || "",
//         address1: data.address1 || "",
//         address2: data.address2 || "",
//         openingTime: data.openingTime || "",
//         closingTime: data.closingTime || "",
//         contactNumber: data.contactNumber || "",
//         priceperPerson: data.priceperPerson || "",
//         menu: data.menu || [],
//       }));

//       if (data.bannerImage) setPreviewBanner(data.bannerImage);
//       if (data.overviewImage) setPreviewOverview(data.overviewImage);
//       if (data.galleryImages?.length) setExistingGallery(data.galleryImages);
//     });
//   }, [id, isEdit]);

//   /* ================= INPUT HANDLER ================= */
//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (files) {
//       if (name === "bannerImage") {
//         setFormData((p) => ({ ...p, bannerImage: files[0] }));
//         setPreviewBanner(URL.createObjectURL(files[0]));
//       }

//       if (name === "overviewImage") {
//         setFormData((p) => ({ ...p, overviewImage: files[0] }));
//         setPreviewOverview(URL.createObjectURL(files[0]));
//       }

//       if (name === "galleryImages") {
//         const selected = Array.from(files);
//         setFormData((p) => ({ ...p, galleryImages: selected }));
//         setPreviewGallery(selected.map((f) => URL.createObjectURL(f)));
//       }
//     } else {
//       setFormData((p) => ({ ...p, [name]: value }));
//     }
//   };

//   /* ================= MENU ================= */
//   const handleMenuChange = (menu) => {
//     setFormData((p) => ({ ...p, menu }));
//   };

//   /* ================= SUBMIT ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const data = new FormData();

//     Object.entries(formData).forEach(([key, value]) => {
//       if (key === "menu") {
//         data.append("menu", JSON.stringify(value));
//       } else if (Array.isArray(value)) {
//         value.forEach((v) => data.append(key, v));
//       } else if (value) {
//         data.append(key, value);
//       }
//     });

//     try {
//       if (isEdit) {
//         await updateRestaurant(id, data);
//         alert("Restaurant updated successfully");
//       } else {
//         await createRestaurant(data);
//         alert("Restaurant created successfully");
//       }
//       navigate("/restaurants");
//     } catch (err) {
//       console.error(err);
//       alert("Failed to save restaurant");
//     }
//   };

//   /* ================= UI ================= */
//   return (
//     <div className="p-6 max-w-4xl">
//       <h2 className="text-xl font-semibold mb-4">
//         {isEdit ? "Edit Restaurant" : "Add Restaurant"}
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-4">

//         <input name="name" value={formData.name} onChange={handleChange}
//           placeholder="Restaurant Name" className="w-full border p-2 rounded" required />

//         <input name="shortTitle" value={formData.shortTitle} onChange={handleChange}
//           placeholder="Short Title" className="w-full border p-2 rounded" />

//         <input name="resturantType" value={formData.resturantType} onChange={handleChange}
//           placeholder="Restaurant Type (Cafe, Fine Dining, etc.)"
//           className="w-full border p-2 rounded" />

//         <input name="overviewTittle" value={formData.overviewTittle} onChange={handleChange}
//           placeholder="Overview Title" className="w-full border p-2 rounded" />

//         <textarea name="overview" value={formData.overview} onChange={handleChange}
//           placeholder="Overview" className="w-full border p-2 rounded" />

//         <textarea name="subDescription" value={formData.subDescription} onChange={handleChange}
//           placeholder="Sub Description" className="w-full border p-2 rounded" />

//         <div className="grid grid-cols-2 gap-4">
//           <input name="address1" value={formData.address1} onChange={handleChange}
//             placeholder="Address 1" className="border p-2 rounded" />
//           <input name="address2" value={formData.address2} onChange={handleChange}
//             placeholder="Address 2" className="border p-2 rounded" />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <input name="openingTime" value={formData.openingTime}
//             onChange={handleChange} placeholder="Opening Time"
//             className="border p-2 rounded" />
//           <input name="closingTime" value={formData.closingTime}
//             onChange={handleChange} placeholder="Closing Time"
//             className="border p-2 rounded" />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <input name="contactNumber" value={formData.contactNumber}
//             onChange={handleChange} placeholder="Contact Number"
//             className="border p-2 rounded" />
//           <input name="priceperPerson" value={formData.priceperPerson}
//             onChange={handleChange} placeholder="Price per Person"
//             className="border p-2 rounded" />
//         </div>

//         {/* Banner */}
//         <input type="file" name="bannerImage" onChange={handleChange} />
//         {previewBanner && <img src={previewBanner} className="w-40 h-24 rounded" />}

//         {/* Overview Image */}
//         <input type="file" name="overviewImage" onChange={handleChange} />
//         {previewOverview && <img src={previewOverview} className="w-40 h-24 rounded" />}

//         {/* Gallery */}
//         <input type="file" name="galleryImages" multiple onChange={handleChange} />
//         <div className="flex gap-2 flex-wrap">
//           {previewGallery.length
//             ? previewGallery.map((img, i) => (
//                 <img key={i} src={img} className="w-24 h-24 rounded object-cover" />
//               ))
//             : existingGallery.map((img, i) => (
//                 <img key={i} src={img} className="w-24 h-24 rounded object-cover" />
//               ))}
//         </div>

//         {/* MENU */}
//         <MenuManager menu={formData.menu} setMenu={handleMenuChange} />

//         <button className="bg-green-600 text-white px-6 py-2 rounded">
//           {isEdit ? "Update" : "Create"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RestaurantForm;


import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api/axiosInstance.js";

import {
  createRestaurant,
  getRestaurant,
  updateRestaurant,
} from "../../api/restaurantApi";

import MenuManager from "../../components/MenuManager";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    shortTitle: "",
    resturantType: "",
    overviewTittle: "",
    overview: "",
    subDescription: "",
    address1: "",
    address2: "",
    openingTime: "",
    closingTime: "",
    contactNumber: "",
    priceperPerson: "",
    bannerImage: null,
    overviewImage: null,
    menu: [],
  });

  const [previewBanner, setPreviewBanner] = useState(null);
  const [previewOverview, setPreviewOverview] = useState(null);
  const [previewGallery, setPreviewGallery] = useState([]);
  const [galleryUploading, setGalleryUploading] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  /* ================= FETCH DATA (EDIT MODE) ================= */
  useEffect(() => {
    if (!isEdit) return;

    getRestaurant(id).then((res) => {
      const data = res.data;

      setFormData({
        name: data.name || "",
        shortTitle: data.shortTitle || "",
        resturantType: data.resturantType || "",
        overviewTittle: data.overviewTittle || "",
        overview: data.overview || "",
        subDescription: data.subDescription || "",
        address1: data.address1 || "",
        address2: data.address2 || "",
        openingTime: data.openingTime || "",
        closingTime: data.closingTime || "",
        contactNumber: data.contactNumber || "",
        priceperPerson: data.priceperPerson || "",
        bannerImage: null,
        overviewImage: null,
        menu: data.menu || [],
      });

      if (data.bannerImage) setPreviewBanner(data.bannerImage);
      if (data.overviewImage) setPreviewOverview(data.overviewImage);
      if (data.galleryImages?.length) setPreviewGallery(data.galleryImages);
    });
  }, [id, isEdit]);

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      if (name === "bannerImage") {
        setFormData({ ...formData, bannerImage: files[0] });
        setPreviewBanner(URL.createObjectURL(files[0]));
      }

      if (name === "overviewImage") {
        setFormData({ ...formData, overviewImage: files[0] });
        setPreviewOverview(URL.createObjectURL(files[0]));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  /* ================= MENU ================= */
  const handleMenuChange = (menu) => {
    setFormData({ ...formData, menu });
  };

  /* ================= SINGLE GALLERY UPLOAD ================= */
  const uploadSingleGalleryImage = async (file) => {
    if (!file || !isEdit) return;

    const fd = new FormData();
    fd.append("galleryImage", file);

    try {
      setGalleryUploading(true);

      const res = await API.post(
        `/restaurants/${id}/gallery-image`,
        fd
      );

      setPreviewGallery(res.data.galleryImages);
    } catch (error) {
      console.error("Gallery upload error:", error);
      alert("Failed to upload image");
    } finally {
      setGalleryUploading(false);
    }
  };

  /* ================= REMOVE GALLERY IMAGE ================= */
  const removeGalleryImage = async (image) => {
    try {
      await API.put(`/restaurants/${id}/gallery-image`, { image });

      setPreviewGallery((prev) => prev.filter((img) => img !== image));
    } catch (error) {
      console.error("Remove gallery image error:", error);
      alert("Failed to remove image");
    }
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (key === "menu") {
        data.append("menu", JSON.stringify(value));
      } else if (value !== null && value !== undefined) {
  data.append(key, value);
}
    });

    try {
      if (isEdit) {
        await updateRestaurant(id, data);
        alert("Restaurant updated successfully");
      } else {
        await createRestaurant(data);
        alert("Restaurant created successfully");
      }
      navigate("/restaurants");
    } catch (error) {
      console.error(error);
      alert("Failed to save restaurant");
    }
  };

  /* ================= UI ================= */
  return (
    <div className="p-6 max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Restaurant" : "Add Restaurant"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Restaurant Name"
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="shortTitle"
          value={formData.shortTitle}
          onChange={handleChange}
          placeholder="Short Title"
          className="w-full border p-2 rounded"
        />

        <input
          name="resturantType"
          value={formData.resturantType}
          onChange={handleChange}
          placeholder="Restaurant Type"
          className="w-full border p-2 rounded"
        />

        <input
          name="overviewTittle"
          value={formData.overviewTittle}
          onChange={handleChange}
          placeholder="Overview Title"
          className="w-full border p-2 rounded"
        />

        <textarea
          name="overview"
          value={formData.overview}
          onChange={handleChange}
          placeholder="Overview"
          className="w-full border p-2 rounded"
        />

        <textarea
          name="subDescription"
          value={formData.subDescription}
          onChange={handleChange}
          placeholder="Sub Description"
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            placeholder="Address 1"
            className="border p-2 rounded"
          />
          <input
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Address 2"
            className="border p-2 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="openingTime"
            value={formData.openingTime}
            onChange={handleChange}
            placeholder="Opening Time"
            className="border p-2 rounded"
          />
          <input
            name="closingTime"
            value={formData.closingTime}
            onChange={handleChange}
            placeholder="Closing Time"
            className="border p-2 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="border p-2 rounded"
          />
          <input
            name="priceperPerson"
            value={formData.priceperPerson}
            onChange={handleChange}
            placeholder="Price per Person"
            className="border p-2 rounded"
          />
        </div>

        {/* Banner */}
        <input type="file" name="bannerImage" onChange={handleChange} />
        {previewBanner && (
          <img src={previewBanner} className="w-40 h-24 rounded object-cover" />
        )}

        {/* Overview Image */}
        <input type="file" name="overviewImage" onChange={handleChange} />
        {previewOverview && (
          <img src={previewOverview} className="w-40 h-24 rounded object-cover" />
        )}

        {/* ===== GALLERY (ONE BY ONE) ===== */}
        <div>
          <label className="block font-medium mb-1">Add Gallery Image</label>

          <input
            type="file"
            accept="image/*"
            disabled={!isEdit || galleryUploading}
            onChange={(e) => uploadSingleGalleryImage(e.target.files[0])}
          />

          {!isEdit && (
            <p className="text-sm text-gray-500">
              Save restaurant first to add gallery images
            </p>
          )}

          <div className="flex gap-4 flex-wrap mt-3">
            {previewGallery.map((img, i) => (
              <div key={i} className="relative">
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-24 h-24 object-cover rounded"
                />
                {isEdit && (
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(img)}
                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* MENU */}
        <MenuManager menu={formData.menu} setMenu={handleMenuChange} />

        <button className="bg-green-600 text-white px-6 py-2 rounded">
          {isEdit ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;
