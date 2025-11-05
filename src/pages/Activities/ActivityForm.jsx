

// import React, { useState, useEffect } from "react";
// import { createActivity } from "../../api/activityApi";
// import { getDestinations } from "../../api/destinationApi";
// import axios from "axios";

// const ActivityForm = () => {
//   const [destinations, setDestinations] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [formData, setFormData] = useState({
//     destination: "",
//     category: "",
//     activityName: "",
//     overview: "",
//     subDescription: "",
//     pricePerPerson: "",
//     minPerson: "",
//     bannerImage: null,
//     galleryImages: [],
//     //added field
//     facilities: [{ icon: "", title: "", description: "" }],
//     highlights: [""],
//     fullDescription: [""],
//     include: [""],
//     exclude: [""],
//     importantInfo: "",
//   });

//   // Fetch all destinations on mount
//   useEffect(() => {
//     const fetchDestinations = async () => {
//       try {
//         const res = await getDestinations();
//         setDestinations(res.data);
//       } catch (err) {
//         console.error("Error loading destinations:", err);
//       }
//     };
//     fetchDestinations();
//   }, []);

//   // Fetch categories when a destination is selected
//   useEffect(() => {
//     if (!formData.destination) {
//       setCategories([]);
//       setFormData((prev) => ({ ...prev, category: "" }));
//       return;
//     }
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:8000/api/categories/${formData.destination}`
//         );
//         setCategories(res.data);
//       } catch (err) {
//         console.error("Error loading categories:", err);
//       }
//     };
//     fetchCategories();
//   }, [formData.destination]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: files[0] }));
//   };


//   // backend start

//    // Handle array fields (highlights, include, exclude, etc.)
//   const handleArrayChange = (index, field, value) => {
//     setFormData((prev) => {
//       const updated = [...prev[field]];
//       updated[index] = value;
//       return { ...prev, [field]: updated };
//     });
//   };

//   const addArrayField = (field) => {
//     setFormData((prev) => ({
//       ...prev,
//       [field]: [...prev[field], ""],
//     }));
//   };

//   const removeArrayField = (field, index) => {
//     setFormData((prev) => {
//       const updated = prev[field].filter((_, i) => i !== index);
//       return { ...prev, [field]: updated };
//     });
//   };

//   // Handle facilities
//   const handleFacilityChange = (index, key, value) => {
//     setFormData((prev) => {
//       const updatedFacilities = [...prev.facilities];
//       updatedFacilities[index][key] = value;
//       return { ...prev, facilities: updatedFacilities };
//     });
//   };

//   const addFacility = () => {
//     setFormData((prev) => ({
//       ...prev,
//       facilities: [...prev.facilities, { icon: "", title: "", description: "" }],
//     }));
//   };

//   const removeFacility = (index) => {
//     setFormData((prev) => {
//       const updated = prev.facilities.filter((_, i) => i !== index);
//       return { ...prev, facilities: updated };
//     });
//   };

//   // end

//   const handleSubmit = async (e) => {
//   e.preventDefault();

//   // Validate required fields
//   if (!formData.destination || !formData.category || !formData.activityName) {
//     alert("Destination, Category, and Activity Name are required!");
//     return;
//   }

//   try {
//     // Send raw object, API will wrap in FormData
//     await createActivity(formData);

//     alert("✅ Activity created successfully!");
//     setFormData({
//       destination: "",
//       category: "",
//       activityName: "",
//       overview: "",
//       subDescription: "",
//       pricePerPerson: "",
//       minPerson: "",
//       bannerImage: null,
//       galleryImages: [],
//       facilities: [{ icon: "", title: "", description: "" }],
//     highlights: [""],
//     fullDescription: [""],
//     include: [""],
//     exclude: [""],
//     importantInfo: "",
//     });
//     setCategories([]);
//   } catch (error) {
//     console.error("❌ Error saving activity:", error.response?.data || error.message);
//     alert("Failed to create activity. Check console for details.");
//   }
// };


//   return (
//     <form onSubmit={handleSubmit} className="p-6 bg-white rounded-xl shadow-md max-w-3xl mx-auto mt-20">
//       <h2 className="text-xl font-semibold mb-4">Create Activity</h2>

//       <div className="grid grid-cols-2 gap-4">
//         {/* Destination Dropdown */}
//         <div>
//           <label className="block text-sm font-medium">Destination</label>
//           <select
//             name="destination"
//             value={formData.destination}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           >
//             <option value="">Select Destination</option>
//             {destinations.map((d) => (
//               <option key={d._id} value={d._id}>
//                 {d.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Category Dropdown */}
//         <div>
//           <label className="block text-sm font-medium">Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((c) => (
//               <option key={c._id} value={c._id}>
//                 {c.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Activity Name */}
//         <div>
//           <label className="block text-sm font-medium">Activity Name</label>
//           <input
//             type="text"
//             name="activityName"
//             value={formData.activityName}
//             onChange={handleChange}
//             placeholder="Enter activity name"
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>

//         {/* Price Per Person */}
//         <div>
//           <label className="block text-sm font-medium">Price Per Person</label>
//           <input
//             type="number"
//             name="pricePerPerson"
//             value={formData.pricePerPerson}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             required
//           />
//         </div>

//         {/* Minimum Person */}
//         <div>
//           <label className="block text-sm font-medium">Minimum Person</label>
//           <input
//             type="number"
//             name="minPerson"
//             value={formData.minPerson}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>

//         {/* Banner Image */}
//         <div>
//           <label className="block text-sm font-medium">Banner Image</label>
//           <input
//             type="file"
//             name="bannerImage"
//             onChange={handleFileChange}
//             className="w-full border p-2 rounded"
//           />
//         </div>
//       </div>

//       {/* Overview */}
//       <div className="mt-4">
//         <label className="block text-sm font-medium">Overview</label>
//         <textarea
//           name="overview"
//           value={formData.overview}
//           onChange={handleChange}
//           placeholder="Write short overview..."
//           className="w-full border p-2 rounded"
//           rows="3"
//         />
//       </div>

//       {/* Sub Description */}
//       <div className="mt-4">
//         <label className="block text-sm font-medium">Sub Description</label>
//         <textarea
//           name="subDescription"
//           value={formData.subDescription}
//           onChange={handleChange}
//           placeholder="Enter short sub description..."
//           className="w-full border p-2 rounded"
//           rows="3"
//         />
//       </div>
//       {/* Facilities */}
//       <div className="mt-6">
//         <h3 className="font-semibold text-lg mb-2">Facilities</h3>
//         {formData.facilities.map((facility, i) => (
//           <div key={i} className="grid grid-cols-3 gap-2 mb-2">
//             <input
//               type="text"
//               placeholder="Icon URL"
//               value={facility.icon}
//               onChange={(e) => handleFacilityChange(i, "icon", e.target.value)}
//               className="border p-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Title"
//               value={facility.title}
//               onChange={(e) => handleFacilityChange(i, "title", e.target.value)}
//               className="border p-2 rounded"
//             />
//             <input
//               type="text"
//               placeholder="Description"
//               value={facility.description}
//               onChange={(e) => handleFacilityChange(i, "description", e.target.value)}
//               className="border p-2 rounded"
//             />
//             <button
//               type="button"
//               onClick={() => removeFacility(i)}
//               className="text-red-600 text-sm"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={addFacility}
//           className="text-blue-600 text-sm mt-1"
//         >
//           + Add Facility
//         </button>
//       </div>

//       {/* Highlights / Include / Exclude / Full Description */}
//       {["highlights", "fullDescription", "include", "exclude"].map((field) => (
//         <div key={field} className="mt-6">
//           <h3 className="font-semibold capitalize mb-2">{field}</h3>
//           {formData[field].map((val, i) => (
//             <div key={i} className="flex gap-2 mb-2">
//               <input
//                 type="text"
//                 value={val}
//                 onChange={(e) => handleArrayChange(i, field, e.target.value)}
//                 className="w-full border p-2 rounded"
//               />
//               <button
//                 type="button"
//                 onClick={() => removeArrayField(field, i)}
//                 className="text-red-500"
//               >
//                 X
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => addArrayField(field)}
//             className="text-blue-600 text-sm"
//           >
//             + Add {field}
//           </button>
//         </div>
//       ))}

//       {/* Important Info */}
//       <div className="mt-6">
//         <label className="block text-sm font-medium">Important Info</label>
//         <textarea
//           name="importantInfo"
//           value={formData.importantInfo}
//           onChange={handleChange}
//           rows="3"
//           className="w-full border p-2 rounded"
//         />
//       </div>

//       <button
//         type="submit"
//         className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Save Activity
//       </button>
//     </form>
//   );
// };

// export default ActivityForm;


import React, { useState, useEffect } from "react";
import { createActivity } from "../../api/activityApi";
import { getDestinations } from "../../api/destinationApi";
import axios from "axios";

const ActivityForm = () => {
  const [destinations, setDestinations] = useState([]);
  const [categories, setCategories] = useState([]);
  const [previewBanner, setPreviewBanner] = useState(null);
  const [previewGallery, setPreviewGallery] = useState([]);

  const [formData, setFormData] = useState({
    destination: "",
    category: "",
    activityName: "",
    overview: "",
    subDescription: "",
    pricePerPerson: "",
    minPerson: "",
    bannerImage: null,
    galleryImages: [],
    facilities: [{ icon: "", title: "", description: "" }],
    highlights: [""],
    fullDescription: [""],
    include: [""],
    exclude: [""],
    importantInfo: "",
  });

  // ✅ Fetch all destinations on mount
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await getDestinations();
        setDestinations(res.data);
      } catch (err) {
        console.error("Error loading destinations:", err);
      }
    };
    fetchDestinations();
  }, []);

  // ✅ Fetch categories when destination is selected
  useEffect(() => {
    if (!formData.destination) {
      setCategories([]);
      setFormData((prev) => ({ ...prev, category: "" }));
      return;
    }
    const fetchCategories = async () => {
      try {
        const res = await axios.get(
          `https://victoria-fall-backend-production.up.railway.app/api/categories/${formData.destination}`
        );
        setCategories(res.data);
      } catch (err) {
        console.error("Error loading categories:", err);
      }
    };
    fetchCategories();
  }, [formData.destination]);

  // ✅ Handle all input + file changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      if (name === "bannerImage") {
        setFormData((prev) => ({ ...prev, bannerImage: files[0] }));
        setPreviewBanner(URL.createObjectURL(files[0]));
      } else if (name === "galleryImages") {
        const selectedFiles = Array.from(files);
        setFormData((prev) => ({ ...prev, galleryImages: selectedFiles }));
        setPreviewGallery(selectedFiles.map((f) => URL.createObjectURL(f)));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Handle array fields (highlights, include, exclude, etc.)
  const handleArrayChange = (index, field, value) => {
    setFormData((prev) => {
      const updated = [...prev[field]];
      updated[index] = value;
      return { ...prev, [field]: updated };
    });
  };

  const addArrayField = (field) => {
    setFormData((prev) => ({
      ...prev,
      [field]: [...prev[field], ""],
    }));
  };

  const removeArrayField = (field, index) => {
    setFormData((prev) => {
      const updated = prev[field].filter((_, i) => i !== index);
      return { ...prev, [field]: updated };
    });
  };

  // ✅ Handle facilities
  const handleFacilityChange = (index, key, value) => {
    setFormData((prev) => {
      const updatedFacilities = [...prev.facilities];
      updatedFacilities[index][key] = value;
      return { ...prev, facilities: updatedFacilities };
    });
  };

  const addFacility = () => {
    setFormData((prev) => ({
      ...prev,
      facilities: [...prev.facilities, { icon: "", title: "", description: "" }],
    }));
  };

  const removeFacility = (index) => {
    setFormData((prev) => {
      const updated = prev.facilities.filter((_, i) => i !== index);
      return { ...prev, facilities: updated };
    });
  };

  // ✅ Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.destination || !formData.category || !formData.activityName) {
      alert("Destination, Category, and Activity Name are required!");
      return;
    }

    try {
      await createActivity(formData);
      alert("✅ Activity created successfully!");

      setFormData({
        destination: "",
        category: "",
        activityName: "",
        overview: "",
        subDescription: "",
        pricePerPerson: "",
        minPerson: "",
        bannerImage: null,
        galleryImages: [],
        facilities: [{ icon: "", title: "", description: "" }],
        highlights: [""],
        fullDescription: [""],
        include: [""],
        exclude: [""],
        importantInfo: "",
      });
      setPreviewBanner(null);
      setPreviewGallery([]);
      setCategories([]);
    } catch (error) {
      console.error("❌ Error saving activity:", error.response?.data || error.message);
      alert("Failed to create activity. Check console for details.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6  rounded-xl shadow-md max-w-3xl mx-auto"
    >
      <h2 className="text-xl font-semibold mb-4">Create Activity</h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Destination */}
        <div>
          <label className="block text-sm font-medium">Destination</label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Destination</option>
            {destinations.map((d) => (
              <option key={d._id} value={d._id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Activity Name */}
        <div>
          <label className="block text-sm font-medium">Activity Name</label>
          <input
            type="text"
            name="activityName"
            value={formData.activityName}
            onChange={handleChange}
            placeholder="Enter activity name"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Price Per Person */}
        <div>
          <label className="block text-sm font-medium">Price Per Person</label>
          <input
            type="number"
            name="pricePerPerson"
            value={formData.pricePerPerson}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Minimum Person */}
        <div>
          <label className="block text-sm font-medium">Minimum Person</label>
          <input
            type="number"
            name="minPerson"
            value={formData.minPerson}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* ✅ Banner Image */}
        <div>
          <label className="block text-sm font-medium">Banner Image</label>
          <input
            type="file"
            name="bannerImage"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {previewBanner && (
            <img
              src={previewBanner}
              alt="Banner Preview"
              className="mt-2 w-40 h-24 object-cover rounded"
            />
          )}
        </div>

        {/* ✅ Gallery Images */}
        <div>
          <label className="block text-sm font-medium">Gallery Images</label>
          <input
            type="file"
            name="galleryImages"
            multiple
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            {previewGallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i}`}
                className="w-20 h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Overview</label>
        <textarea
          name="overview"
          value={formData.overview}
          onChange={handleChange}
          placeholder="Write short overview..."
          className="w-full border p-2 rounded"
          rows="3"
        />
      </div>

      {/* Sub Description */}
      <div className="mt-4">
        <label className="block text-sm font-medium">Sub Description</label>
        <textarea
          name="subDescription"
          value={formData.subDescription}
          onChange={handleChange}
          placeholder="Enter short sub description..."
          className="w-full border p-2 rounded"
          rows="3"
        />
      </div>

      {/* Facilities */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Facilities</h3>
        {formData.facilities.map((facility, i) => (
          <div key={i} className="grid grid-cols-3 gap-2 mb-2">
            <input
              type="text"
              placeholder="Icon URL"
              value={facility.icon}
              onChange={(e) => handleFacilityChange(i, "icon", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Title"
              value={facility.title}
              onChange={(e) => handleFacilityChange(i, "title", e.target.value)}
              className="border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={facility.description}
              onChange={(e) => handleFacilityChange(i, "description", e.target.value)}
              className="border p-2 rounded"
            />
            <button
              type="button"
              onClick={() => removeFacility(i)}
              className="text-red-600 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addFacility}
          className="text-blue-600 text-sm mt-1"
        >
          + Add Facility
        </button>
      </div>

      {/* Highlights / Include / Exclude / Full Description */}
      {["highlights", "fullDescription", "include", "exclude"].map((field) => (
        <div key={field} className="mt-6">
          <h3 className="font-semibold capitalize mb-2">{field}</h3>
          {formData[field].map((val, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input
                type="text"
                value={val}
                onChange={(e) => handleArrayChange(i, field, e.target.value)}
                className="w-full border p-2 rounded"
              />
              <button
                type="button"
                onClick={() => removeArrayField(field, i)}
                className="text-red-500"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => addArrayField(field)}
            className="text-blue-600 text-sm"
          >
            + Add {field}
          </button>
        </div>
      ))}

      {/* Important Info */}
      <div className="mt-6">
        <label className="block text-sm font-medium">Important Info</label>
        <textarea
          name="importantInfo"
          value={formData.importantInfo}
          onChange={handleChange}
          rows="3"
          className="w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Activity
      </button>
    </form>
  );
};

export default ActivityForm;

