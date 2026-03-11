import { useState } from "react";

import {
  addGalleryImage,
  updateGalleryImage,
  deleteGalleryImage
} from "../../api/propertiesApi";

export default function GallerySection({ property, setProperty }) {

  const [imageName, setImageName] = useState("");
  const [imageCategory, setImageCategory] = useState("");
  const [file, setFile] = useState(null);

  /* ======================
     ADD IMAGE
  ====================== */

  const uploadImage = async () => {

    const formData = new FormData();

    formData.append("image", file);
    formData.append("imageName", imageName);
    formData.append("imageCategory", imageCategory);

    const res = await addGalleryImage(property._id, formData);

    setProperty(res.data);

    setImageName("");
    setImageCategory("");
    setFile(null);

  };

  /* ======================
     UPDATE IMAGE
  ====================== */

  const updateImage = async (image) => {

    const res = await updateGalleryImage(
      property._id,
      image._id,
      {
        imageName: image.imageName,
        imageCategory: image.imageCategory
      }
    );

    setProperty(res.data);

  };

  /* ======================
     DELETE IMAGE
  ====================== */

  const removeImage = async (imageId) => {

    const res = await deleteGalleryImage(
      property._id,
      imageId
    );

    setProperty(res.data);

  };

  /* ======================
     CHANGE FIELD
  ====================== */

  const changeImage = (index, field, value) => {

    const updated = [...property.gallery];

    updated[index][field] = value;

    setProperty({
      ...property,
      gallery: updated
    });

  };

  return (

    <div className="space-y-8">

      {/* EXISTING IMAGES */}

      <div className="border p-6 rounded space-y-4">

        <h2 className="font-bold text-lg">
          Gallery Images
        </h2>

        {property.gallery?.map((img, i) => (

          <div key={img._id} className="border p-4 rounded space-y-2">

            {img.image && (
              <img
                src={img.image}
                className="w-32 h-20 object-cover rounded"
              />
            )}

            <input
              className="border p-2 w-full"
              value={img.imageName}
              onChange={(e) =>
                changeImage(i, "imageName", e.target.value)
              }
            />

            <select
              className="border p-2 w-full"
              value={img.imageCategory}
              onChange={(e) =>
                changeImage(i, "imageCategory", e.target.value)
              }
            >
              <option value="">Select Category</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Bathroom">Bathroom</option>
              <option value="Pool">Pool</option>
              <option value="Exterior">Exterior</option>
              <option value="Living">Living Area</option>
            </select>

            <div className="flex gap-3">

              <button
                onClick={() => updateImage(img)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Update
              </button>

              <button
                onClick={() => removeImage(img._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* ADD IMAGE */}

      <div className="border p-6 rounded space-y-3">

        <h2 className="font-bold">
          Upload New Image
        </h2>

        <input
          className="border p-2 w-full"
          placeholder="Image Name"
          value={imageName}
          onChange={(e) => setImageName(e.target.value)}
        />

        <select
          className="border p-2 w-full"
          value={imageCategory}
          onChange={(e) => setImageCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Pool">Pool</option>
          <option value="Exterior">Exterior</option>
          <option value="Living">Living Area</option>
        </select>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          onClick={uploadImage}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Upload Image
        </button>

      </div>

    </div>

  );

}