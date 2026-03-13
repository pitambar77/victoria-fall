// export default function AmenitiesForm({ property, setProperty }) {
//   /* ======================
//      BASIC AMENITIES
//   ====================== */

//   const addBasicAmenity = () => {
//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         basic: [...property.aminities.basic, { aminityName: "", icon: "" }],
//       },
//     });
//   };

//   const changeBasic = (index, field, value) => {
//     const updated = [...property.aminities.basic];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         basic: updated,
//       },
//     });
//   };

//   const removeBasic = (index) => {
//     const updated = property.aminities.basic.filter((_, i) => i !== index);

//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         basic: updated,
//       },
//     });
//   };

//   /* ======================
//      ADDITIONAL AMENITIES
//   ====================== */

//   const addAdditionalAmenity = () => {
//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         additional: [
//           ...property.aminities.additional,
//           { aminityName: "", icon: "" },
//         ],
//       },
//     });
//   };

//   const changeAdditional = (index, field, value) => {
//     const updated = [...property.aminities.additional];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         additional: updated,
//       },
//     });
//   };

//   const removeAdditional = (index) => {
//     const updated = property.aminities.additional.filter((_, i) => i !== index);

//     setProperty({
//       ...property,
//       aminities: {
//         ...property.aminities,
//         additional: updated,
//       },
//     });
//   };

//   return (
//     <div className="border p-6 space-y-6">
//       {/* ================= BASIC ================= */}

//       <div>
//         <h2 className="text-lg font-semibold mb-3">Basic Amenities</h2>

//         {property.aminities.basic.map((amenity, i) => (
//           <div key={i} className="flex gap-3 mb-2">
//             <input
//               className="border p-2 flex-1"
//               placeholder="Amenity Name"
//               value={amenity.aminityName}
//               onChange={(e) => changeBasic(i, "aminityName", e.target.value)}
//             />

//             {/* <input
//               type="file"
//               onChange={(e) =>
//                 changeBasic(i, "icon", e.target.files[0])
//               }
//             /> */}

//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-medium">Upload Icon</label>

//               <input
//                 type="file"
//                 onChange={(e) => changeBasic(i, "icon", e.target.files[0])}
//                 className="border p-2 rounded"
//               />

//               {property.aminities.basic[i]?.icon && (
//                 <span className="text-xs text-gray-500">
//                   {property.aminities.basic[i].icon.name}
//                 </span>
//               )}
//             </div>

//             <button onClick={() => removeBasic(i)} className="text-red-500">
//               Remove
//             </button>
//           </div>
//         ))}

//         <button
//           onClick={addBasicAmenity}
//           className="bg-gray-200 px-3 py-1 rounded"
//         >
//           Add More Basic Amenity
//         </button>
//       </div>

//       {/* ================= ADDITIONAL ================= */}

//       <div>
//         <h2 className="text-lg font-semibold mb-3">Additional Amenities</h2>

//         {property.aminities.additional.map((amenity, i) => (
//           <div key={i} className="flex gap-3 mb-2">
//             <input
//               className="border p-2 flex-1"
//               placeholder="Amenity Name"
//               value={amenity.aminityName}
//               onChange={(e) =>
//                 changeAdditional(i, "aminityName", e.target.value)
//               }
//             />

//             <div className="flex flex-col gap-1">
//               <label className="text-sm font-medium">Upload Icon</label>
//               <input
//                 type="file"
//                 onChange={(e) => changeAdditional(i, "icon", e.target.files[0])}
//                 className="border p-2 rounded"
//               />
//             </div>

//             <button
//               onClick={() => removeAdditional(i)}
//               className="text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         ))}

//         <button
//           onClick={addAdditionalAmenity}
//           className="bg-gray-200 px-3 py-1 rounded"
//         >
//           Add More Additional Amenity
//         </button>
//       </div>
//     </div>
//   );
// }

export default function AmenitiesForm({ property, setProperty }) {
  /* DEFAULT DATA */
  const basicAmenities =
    property.aminities.basic?.length > 0
      ? property.aminities.basic
      : [{ aminityName: "", icon: "" }];

  const additionalAmenities =
    property.aminities.additional?.length > 0
      ? property.aminities.additional
      : [{ aminityName: "", icon: "" }];

  /* ======================
     BASIC AMENITIES
  ====================== */

  const addBasicAmenity = () => {
    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: [...basicAmenities, { aminityName: "", icon: "" }],
      },
    });
  };

  const changeBasic = (index, field, value) => {
    const updated = [...basicAmenities];
    updated[index][field] = value;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: updated,
      },
    });
  };

  const removeBasic = (index) => {
    const updated = basicAmenities.filter((_, i) => i !== index);

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        basic: updated,
      },
    });
  };

  /* ======================
     ADDITIONAL AMENITIES
  ====================== */

  const addAdditionalAmenity = () => {
    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: [...additionalAmenities, { aminityName: "", icon: "" }],
      },
    });
  };

  const changeAdditional = (index, field, value) => {
    const updated = [...additionalAmenities];
    updated[index][field] = value;

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: updated,
      },
    });
  };

  const removeAdditional = (index) => {
    const updated = additionalAmenities.filter((_, i) => i !== index);

    setProperty({
      ...property,
      aminities: {
        ...property.aminities,
        additional: updated,
      },
    });
  };

  return (
    <div className="p-6 space-y-10">
      {/* ================= BASIC ================= */}

      <div>
        <h2 className="text-lg font-semibold mb-4">Basic Amenities</h2>

        {basicAmenities.map((amenity, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-4 mb-4"
          >
            <input
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Amenity Name"
              value={amenity.aminityName}
              onChange={(e) => changeBasic(i, "aminityName", e.target.value)}
            />

            {/* ICON UPLOAD */}
            <div className="w-[220px]">
              <label className="text-gray-700 mb-2 block">
                Upload Amenity Icon
              </label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                {amenity.icon ? (
                  <img
                    src={URL.createObjectURL(amenity.icon)}
                    alt="preview"
                    className="w-16 h-16 object-contain"
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

                    <span className="text-sm text-gray-500">
                      Click to upload
                    </span>
                  </>
                )}

                <input
                  type="file"
                  hidden
                  onChange={(e) => changeBasic(i, "icon", e.target.files[0])}
                />
              </label>
            </div>

            {basicAmenities.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeBasic(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Amenity
                </button>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={addBasicAmenity}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add More Basic Amenity
        </button>
      </div>

      {/* ================= ADDITIONAL ================= */}

      <div>
        <h2 className="text-lg font-semibold mb-4">Additional Amenities</h2>

        {additionalAmenities.map((amenity, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-4 mb-4"
          >
            <input
              className=" w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Amenity Name"
              value={amenity.aminityName}
              onChange={(e) =>
                changeAdditional(i, "aminityName", e.target.value)
              }
            />

            {/* ICON UPLOAD */}
            <div className="w-[220px]">
              <label className="text-gray-700 mb-2 block">
                Upload Amenity Icon
              </label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                {amenity.icon ? (
                  <img
                    src={URL.createObjectURL(amenity.icon)}
                    alt="preview"
                    className="w-16 h-16 object-contain"
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
                    <span className="text-sm text-gray-500">
                      Click to upload
                    </span>
                  </>
                )}

                <input
                  type="file"
                  hidden
                  onChange={(e) =>
                    changeAdditional(i, "icon", e.target.files[0])
                  }
                />
              </label>
            </div>

            {additionalAmenities.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeAdditional(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Amenity
                </button>
              </div>
            )}
          </div>
        ))}

        <button
          onClick={addAdditionalAmenity}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add More Additional Amenity
        </button>
      </div>
    </div>
  );
}
