// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const RestaurantForm = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: "",
//     overview: "",
//     subDescription: "",
//     address1: "",
//     openingTime: "",
//     closingTime: "",
//   });
//   const [bannerImage, setBannerImage] = useState(null);
//   const [galleryImages, setGalleryImages] = useState([]);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = new FormData();
//     Object.entries(formData).forEach(([k, v]) => form.append(k, v));
//     if (bannerImage) form.append("bannerImage", bannerImage);
//     for (let img of galleryImages) form.append("galleryImages", img);

//     await axios.post("http://localhost:8000/api/restaurants", form);
//     navigate("/restaurants");
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-4">Add Restaurant</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {["name", "overview", "subDescription", "address1", "openingTime", "closingTime"].map((f) => (
//           <input
//             key={f}
//             type="text"
//             name={f}
//             placeholder={f}
//             value={formData[f]}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         ))}

//         <input type="file" onChange={(e) => setBannerImage(e.target.files[0])} />
//         <input multiple type="file" onChange={(e) => setGalleryImages([...e.target.files])} />

//         <button className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
//       </form>
//     </div>
//   );
// };

// export default RestaurantForm;


// edit buttom

// import React, { useState, useEffect } from "react";
// import {
//   createRestaurant,
//   getRestaurant,
//   updateRestaurant,
// } from "../../api/restaurantApi";
// import { useNavigate, useParams } from "react-router-dom";

// const RestaurantForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     overview: "",
//     subDescription: "",
//     address1: "",
//     address2: "",
//     openingTime: "",
//     closingTime: "",
//     bannerImage: null,
//     galleryImages: [],
//   });
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const isEdit = Boolean(id);

//   useEffect(() => {
//     if (isEdit) {
//       getRestaurant(id).then((res) => setFormData(res.data));
//     }
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setFormData({ ...formData, [name]: name === "galleryImages" ? [...files] : files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (Array.isArray(value)) {
//         value.forEach((v) => data.append(key, v));
//       } else {
//         data.append(key, value);
//       }
//     });

//     if (isEdit) {
//       await updateRestaurant(id, data);
//     } else {
//       await createRestaurant(data);
//     }
//     navigate("/restaurants");
//   };

//   return (
//     <div className="p-6 ml-64 max-w-3xl">
//       <h2 className="text-xl font-semibold mb-4">
//         {isEdit ? "Edit Restaurant" : "Add New Restaurant"}
//       </h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           name="name"
//           placeholder="Restaurant Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <textarea
//           name="overview"
//           placeholder="Overview"
//           value={formData.overview}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           name="subDescription"
//           placeholder="Sub Description"
//           value={formData.subDescription}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//         />
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             name="address1"
//             placeholder="Address 1"
//             value={formData.address1}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//           <input
//             name="address2"
//             placeholder="Address 2"
//             value={formData.address2}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           <input
//             name="openingTime"
//             placeholder="Opening Time"
//             value={formData.openingTime}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//           <input
//             name="closingTime"
//             placeholder="Closing Time"
//             value={formData.closingTime}
//             onChange={handleChange}
//             className="border p-2 rounded"
//           />
//         </div>
//         <div>
//           <label className="block font-medium mb-1">Banner Image</label>
//           <input type="file" name="bannerImage" onChange={handleChange} />
//         </div>
//         <div>
//           <label className="block font-medium mb-1">Gallery Images</label>
//           <input type="file" name="galleryImages" multiple onChange={handleChange} />
//         </div>
//         <button
//           type="submit"
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           {isEdit ? "Update" : "Create"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RestaurantForm;


import React, { useState, useEffect } from "react";
import {
  createRestaurant,
  getRestaurant,
  updateRestaurant,
} from "../../api/restaurantApi";
import { useNavigate, useParams } from "react-router-dom";
import MenuManager from "../../components/MenuManager";

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    overview: "",
    subDescription: "",
    address1: "",
    address2: "",
    openingTime: "",
    closingTime: "",
    contactNumber:"",
    priceperPerson:"",
    bannerImage: null,
    galleryImages: [],
    menu: [],
  });
  const [previewBanner, setPreviewBanner] = useState(null);
  const [previewGallery, setPreviewGallery] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  // ✅ Fetch restaurant data in edit mode
  useEffect(() => {
    if (isEdit) {
      getRestaurant(id).then((res) => {
        const data = res.data;
        setFormData({
          name: data.name || "",
          overview: data.overview || "",
          subDescription: data.subDescription || "",
          address1: data.address1 || "",
          address2: data.address2 || "",
          openingTime: data.openingTime || "",
          closingTime: data.closingTime || "",
          contactNumber:data.contactNumber || "",
      priceperPerson: data.priceperPerson || "",
          bannerImage: null,
          galleryImages: [],
          menu: data.menu || [], // ✅ Load menu data
        });

        // ✅ Set image previews if URLs are returned
        if (data.bannerImage)
          setPreviewBanner(`https://victoria-fall-backend-production.up.railway.app/${data.bannerImage}`);
        if (data.galleryImages)
          setPreviewGallery(
            data.galleryImages.map((img) => `https://victoria-fall-backend-production.up.railway.app/${img}`)
          );
      });
    }
  }, [id, isEdit]);

  // ✅ Handle input and file changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === "bannerImage") {
        setFormData({ ...formData, bannerImage: files[0] });
        setPreviewBanner(URL.createObjectURL(files[0]));
      } else if (name === "galleryImages") {
        const selectedFiles = Array.from(files);
        setFormData({ ...formData, galleryImages: selectedFiles });
        setPreviewGallery(selectedFiles.map((f) => URL.createObjectURL(f)));
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
// menu data
  const handleMenuChange = (newMenu) => {
    setFormData({ ...formData, menu: newMenu });
  };
  // ✅ Submit handler (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // menu added here 

    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value) && key !== "menu" ) {
        value.forEach((v) => data.append(key, v));
      } else if (key === "menu") {
        data.append("menu", JSON.stringify(value));
      } 
      else if (value) {
        data.append(key, value);
      }
    });


    try {
      if (isEdit) {
        await updateRestaurant(id, data);
        alert("Restaurant updated successfully!");
      } else {
        await createRestaurant(data);
        alert("Restaurant created successfully!");
      }
      navigate("/restaurants");
    } catch (error) {
      console.error("Error saving restaurant:", error);
      alert("Error saving restaurant");
    }
  };

  return (
    <div className="p-6  max-w-3xl ">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit Restaurant" : "Add New Restaurant"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Restaurant Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="overview"
          placeholder="Overview"
          value={formData.overview}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="subDescription"
          placeholder="Sub Description"
          value={formData.subDescription}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="grid grid-cols-2 gap-4">
          <input
            name="address1"
            placeholder="Address 1"
            value={formData.address1}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="address2"
            placeholder="Address 2"
            value={formData.address2}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            name="openingTime"
            placeholder="Opening Time"
            value={formData.openingTime}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="closingTime"
            placeholder="Closing Time"
            value={formData.closingTime}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
         <div className="grid grid-cols-2 gap-4">
          <input
            name="contactNumber"
            type="number"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="priceperPerson"
            type="number"
            placeholder="Price per Person"
            value={formData.priceperPerson}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        {/* ✅ Banner image upload + preview */}
        <div>
          <label className="block font-medium mb-1">Banner Image</label>
          <input type="file" name="bannerImage" onChange={handleChange} />
          {previewBanner && (
            <img
              src={previewBanner}
              alt="Banner Preview"
              className="mt-2 w-40 h-24 object-cover rounded"
            />
          )}
        </div>

        {/* ✅ Gallery images upload + preview */}
        <div>
          <label className="block font-medium mb-1">Gallery Images</label>
          <input
            type="file"
            name="galleryImages"
            multiple
            onChange={handleChange}
          />
          <div className="flex gap-2 flex-wrap mt-2">
            {previewGallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i}`}
                className="w-24 h-24 object-cover rounded"
              />
            ))}
          </div>
        </div>
    {/* ✅ Menu Manager Component */}
        <MenuManager menu={formData.menu} setMenu={handleMenuChange} />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {isEdit ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default RestaurantForm;


