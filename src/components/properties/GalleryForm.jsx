export default function GalleryForm({ property, setProperty }) {
  /* =====================
     ADD IMAGE
  ===================== */

  const addImage = () => {
    setProperty({
      ...property,
      gallery: [
        ...property.gallery,
        {
          image: "",
          imageName: "",
          imageCategory: "",
        },
      ],
    });
  };

  /* =====================
     HANDLE CHANGE
  ===================== */

  const handleChange = (index, field, value) => {
    const updated = [...property.gallery];

    updated[index][field] = value;

    setProperty({
      ...property,
      gallery: updated,
    });
  };

  /* =====================
     REMOVE IMAGE
  ===================== */

  const removeImage = (index) => {
    const updated = property.gallery.filter((_, i) => i !== index);

    setProperty({
      ...property,
      gallery: updated,
    });
  };

  return (
    <div className="border p-6 space-y-4">
      <h2 className="text-lg font-semibold">Gallery</h2>

      {property.gallery.map((item, i) => (
        <div key={i} className="border p-4 rounded space-y-2">
          <input
            className="border p-2 w-full"
            placeholder="Image Name"
            value={item.imageName}
            onChange={(e) => handleChange(i, "imageName", e.target.value)}
          />

          {/* <input
            className="border p-2 w-full"
            placeholder="Image Category (Bedroom / Pool / Exterior)"
            value={item.imageCategory}
            onChange={(e) =>
              handleChange(i, "imageCategory", e.target.value)
            }
          /> */}

          <select
            className="border p-2 w-full"
            value={item.imageCategory}
            onChange={(e) => handleChange(i, "imageCategory", e.target.value)}
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
            onChange={(e) => handleChange(i, "image", e.target.files[0])}
          />

          <button
            onClick={() => removeImage(i)}
            className="text-red-500 text-sm"
          >
            Remove Image
          </button>
        </div>
      ))}

      <button onClick={addImage} className="bg-gray-200 px-3 py-1 rounded">
        Add Image
      </button>
    </div>
  );
}
