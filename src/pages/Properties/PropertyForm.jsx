import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProperty,
  getProperty,
  updateProperty,
} from "../../api/propertyApi";
import FacilityManager from "../../components/FacilityManager";


const PropertyForm = () => {
  const [formData, setFormData] = useState({
    name: "",
       shortTitle:"",
  propertyType:"",
    overview: "",
    subDescription: "",
    address1: "",
    address2: "",
    checkIn: "",
    checkOut: "",
    contactNumber: "",
    priceperPerson: "",
    bannerImage: null,
    galleryImages: [],
  facilities: [],
  faqs: [],  // ⬅ added here faq
  });
  const [previewBanner, setPreviewBanner] = useState(null);
  const [previewGallery, setPreviewGallery] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  // ✅ Fetch restaurant data in edit mode
  useEffect(() => {
    if (isEdit) {
      getProperty(id).then((res) => {
        const data = res.data;
        setFormData({
          name: data.name || "",
             shortTitle: data.shortTitle || " ",
  propertyType: data.propertyType || " ",
          overview: data.overview || "",
          subDescription: data.subDescription || "",
          address1: data.address1 || " ",

          address2: data.address2 || "",
          checkIn: data.checkIn || "",
          checkOut: data.checkOut || "",
          contactNumber: data.contactNumber || " ",
          priceperPerson: data.priceperPerson || " ",
          bannerImage: null,
          galleryImages: [],
         facilities: data.facilities || [],
        });

        // ✅ Set image previews if URLs are returned
        if (data.bannerImage)
          setPreviewBanner(`https://victoria-fall-backend-production.up.railway.app/api/${data.bannerImage}`);
        if (data.galleryImages)
          setPreviewGallery(
            data.galleryImages.map((img) => `https://victoria-fall-backend-production.up.railway.app/api/${img}`)
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

  // add facility here

  const handleFacilitiesChange = (updatedFacilities) => {
    setFormData({ ...formData, facilities: updatedFacilities });
  };
  
  
  // ✅ Submit handler (Create / Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    // add facility here

    // Object.entries(formData).forEach(([key, value]) => {
    //   if (Array.isArray(value) && key !== "facilities" ) {
    //     value.forEach((v) => data.append(key, v));
    //   }else if (key === "facilities") {
    //     data.append("facilities", JSON.stringify(value));
    //   }
    //    else if (value) {
    //     data.append(key, value);
    //   }
    // });
Object.entries(formData).forEach(([key, value]) => {
  if (Array.isArray(value) && key !== "facilities" && key !== "faqs") {
    value.forEach((v) => data.append(key, v));
  } else if (key === "facilities" || key === "faqs") {
    data.append(key, JSON.stringify(value));  // ⬅ includes faqs
  } else if (value) {
    data.append(key, value);
  }
});

    try {
      if (isEdit) {
        await updateProperty(id, data);
        alert("properties updated successfully!");
      } else {
        await createProperty(data);
        alert("properties created successfully!");
      }
      navigate("/properties");
    } catch (error) {
      console.error("Error saving properties:", error);
      alert("Error saving properties");
    }
  };

  // Add a new FAQ
const handleAddFaq = () => {
  setFormData({
    ...formData,
    faqs: [...formData.faqs, { question: "", answer: "" }],
  });
};

// Update FAQ fields
const handleFaqChange = (index, field, value) => {
  const updatedFaqs = [...formData.faqs];
  updatedFaqs[index][field] = value;
  setFormData({ ...formData, faqs: updatedFaqs });
};

// Remove FAQ
const handleRemoveFaq = (index) => {
  const updatedFaqs = [...formData.faqs];
  updatedFaqs.splice(index, 1);
  setFormData({ ...formData, faqs: updatedFaqs });
};


  return (
    <div className="p-6 max-w-3xl ">
      <h2 className="text-xl font-semibold mb-4">
        {isEdit ? "Edit properties" : "Add New properties"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Property Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
         <input
          name="shortTitle"
          placeholder="Short Title "
          value={formData.shortTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
         <input
          name="propertyType"
          placeholder="Property Type"
          value={formData.propertyType}
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
            name="checkIn"
            placeholder="Check In"
            value={formData.checkIn}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            name="checkOut"
            placeholder="Check Out"
            value={formData.checkOut}
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

          <FacilityManager
          facilities={formData.facilities}
          setFacilities={handleFacilitiesChange}
        />

        {/* FAQ SECTION */}
<div className="space-y-2 border p-4 rounded-md">
  <h3 className="font-semibold text-lg">FAQ Section</h3>

  {formData.faqs.map((faq, index) => (
    <div key={index} className="border p-3 rounded-md space-y-2">
      <input
        type="text"
        placeholder="Question"
        className="w-full border p-2 rounded"
        value={faq.question}
        onChange={(e) => handleFaqChange(index, "question", e.target.value)}
      />
      <textarea
        placeholder="Answer"
        className="w-full border p-2 rounded"
        value={faq.answer}
        onChange={(e) => handleFaqChange(index, "answer", e.target.value)}
      ></textarea>

      <button
        type="button"
        className="text-red-600 underline"
        onClick={() => handleRemoveFaq(index)}
      >
        Remove FAQ
      </button>
    </div>
  ))}

  <button
    type="button"
    className="bg-blue-600 text-white px-3 py-1 rounded"
    onClick={handleAddFaq}
  >
    + Add FAQ
  </button>
</div>


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

export default PropertyForm;


