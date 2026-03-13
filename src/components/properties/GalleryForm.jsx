// export default function GalleryForm({ property, setProperty }) {
//   /* =====================
//      ADD IMAGE
//   ===================== */

//   const addImage = () => {
//     setProperty({
//       ...property,
//       gallery: [
//         ...property.gallery,
//         {
//           image: "",
//           imageName: "",
//           imageCategory: "",
//         },
//       ],
//     });
//   };

//   /* =====================
//      HANDLE CHANGE
//   ===================== */

//   const handleChange = (index, field, value) => {
//     const updated = [...property.gallery];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       gallery: updated,
//     });
//   };

//   /* =====================
//      REMOVE IMAGE
//   ===================== */

//   const removeImage = (index) => {
//     const updated = property.gallery.filter((_, i) => i !== index);

//     setProperty({
//       ...property,
//       gallery: updated,
//     });
//   };

//   return (
//     <div className="border p-6 space-y-4">
//       <h2 className="text-lg font-semibold">Gallery</h2>

//       {property.gallery.map((item, i) => (
//         <div key={i} className="border p-4 rounded space-y-2">
//           <input
//             className="border p-2 w-full"
//             placeholder="Image Name"
//             value={item.imageName}
//             onChange={(e) => handleChange(i, "imageName", e.target.value)}
//           />

//           {/* <input
//             className="border p-2 w-full"
//             placeholder="Image Category (Bedroom / Pool / Exterior)"
//             value={item.imageCategory}
//             onChange={(e) =>
//               handleChange(i, "imageCategory", e.target.value)
//             }
//           /> */}

//           <select
//             className="border p-2 w-full"
//             value={item.imageCategory}
//             onChange={(e) => handleChange(i, "imageCategory", e.target.value)}
//           >
//             <option value="">Select Category</option>
//             <option value="Bedroom">Bedroom</option>
//             <option value="Bathroom">Bathroom</option>
//             <option value="Pool">Pool</option>
//             <option value="Exterior">Exterior</option>
//             <option value="Living">Living Area</option>
//           </select>

//           <input
//             type="file"
//             onChange={(e) => handleChange(i, "image", e.target.files[0])}
//           />

//           <button
//             onClick={() => removeImage(i)}
//             className="text-red-500 text-sm"
//           >
//             Remove Image
//           </button>
//         </div>
//       ))}

//       <button onClick={addImage} className="bg-gray-200 px-3 py-1 rounded">
//         Add Image
//       </button>
//     </div>
//   );
// }

export default function GalleryForm({ property, setProperty, errors }) {
  /* Ensure one image exists */
  const images =
    property.gallery?.length > 0
      ? property.gallery
      : [
          {
            image: "",
            imageName: "",
            imageCategory: "",
          },
        ];

  /* =====================
     ADD IMAGE
  ===================== */

  const addImage = () => {
    setProperty({
      ...property,
      gallery: [
        ...images,
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
    const updated = [...images];
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
    const updated = images.filter((_, i) => i !== index);

    setProperty({
      ...property,
      gallery: updated,
    });
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold">Gallery</h2>

      {images.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >
          {/* Image Name */}
          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            placeholder="Image Name"
            value={item.imageName}
            onChange={(e) => handleChange(i, "imageName", e.target.value)}
          />

          {/* Image Category */}

          <select
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
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

          {/* IMAGE UPLOAD */}

          <div className="w-[220px]">
            <label className="text-gray-700 mb-2 block">Upload Image</label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
              {item.image ? (
                <img
                  src={URL.createObjectURL(item.image)}
                  alt="preview"
                  className="w-24 h-24 object-cover rounded"
                />
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400 mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
                    />
                  </svg>

                  <span className="text-sm text-gray-500">Click to upload</span>
                </>
              )}

              <input
                type="file"
                hidden
                onChange={(e) => handleChange(i, "image", e.target.files[0])}
              />
            </label>
            {errors?.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Remove Image */}

          {images.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeImage(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>
      ))}

      {/* ADD IMAGE BUTTON */}

      <button
        onClick={addImage}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        + Add Image
      </button>
    </div>
  );
}
