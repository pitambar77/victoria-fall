// import React from "react";

// const AreaForm = ({ property, setProperty }) => {
//   /* =====================
//      BASIC AREA FIELDS
//   ===================== */

//   const handleChange = (e) => {
//     setProperty({
//       ...property,
//       area: {
//         ...property.area,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   /* =====================
//      RELATED ACTIVITIES
//   ===================== */

//   const addActivity = () => {
//     setProperty({
//       ...property,
//       area: {
//         ...property.area,
//         relatedactivity: [
//           ...property.area.relatedactivity,
//           {
//             title: "",
//             shortDescription: "",
//             icon: "",
//           },
//         ],
//       },
//     });
//   };

//   const changeActivity = (index, field, value) => {
//     const updated = [...property.area.relatedactivity];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       area: {
//         ...property.area,
//         relatedactivity: updated,
//       },
//     });
//   };

//   const removeActivity = (index) => {
//     const updated = property.area.relatedactivity.filter((_, i) => i !== index);

//     setProperty({
//       ...property,
//       area: {
//         ...property.area,
//         relatedactivity: updated,
//       },
//     });
//   };

//   return (
//     <div className="border p-6 space-y-6">
//       <h2 className="text-lg font-semibold">Explore the area</h2>

//       {/* LOCATION NAME */}

//       <input
//         className="border p-2 w-full"
//         name="locationname"
//         placeholder="Location Name"
//         value={property.area.locationname}
//         onChange={handleChange}
//       />

//       {/* MAP LINK */}

//       <input
//         className="border p-2 w-full"
//         name="maplink"
//         placeholder="Google Map Link"
//         value={property.area.maplink}
//         onChange={handleChange}
//       />

//       {/* RELATED ACTIVITIES */}

//       <div className="space-y-4">
//         <h3 className="font-medium">Related Activities</h3>

//         {property.area.relatedactivity.map((activity, i) => (
//           <div key={i} className="border p-4 rounded space-y-2">
//             <input
//               className="border p-2 w-full"
//               placeholder="Activity Title"
//               value={activity.title}
//               onChange={(e) => changeActivity(i, "title", e.target.value)}
//             />

//             <input
//               className="border p-2 w-full"
//               placeholder="Short Description"
//               value={activity.shortDescription}
//               onChange={(e) =>
//                 changeActivity(i, "shortDescription", e.target.value)
//               }
//             />

//             {/* <div className="flex flex-col gap-1">
//               <label className="text-sm font-medium">Upload Icon</label>
//               <input
//                 type="file"
//                 onChange={(e) => changeActivity(i, "icon", e.target.files[0])}
//                 className=" border p-2 rounded w-1/4"
//               />
//             </div> */}
//             <div className="w-[220px]">
//               <label className=" text-gray-700 mb-2 block">
//                 Upload Activity Icon
//               </label>

//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-2 cursor-pointer hover:border-blue-500 transition overflow-hidden">
//                 {property.area.relatedactivity[i]?.icon ? (
//                   <img
//                     src={URL.createObjectURL(
//                       property.area.relatedactivity[i].icon,
//                     )}
//                     alt="preview"
//                     className="w-26 h-26 object-contain"
//                   />
//                 ) : (
//                   <>
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="w-8 h-8 text-gray-400 mb-2"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                       />
//                     </svg>

//                     <span className="text-sm text-gray-500">
//                       Click to upload
//                     </span>
//                   </>
//                 )}

//                 <input
//                   type="file"
//                   hidden
//                   onChange={(e) => changeActivity(i, "icon", e.target.files[0])}
//                 />
//               </label>
//             </div>

//             <button
//               onClick={() => removeActivity(i)}
//               className="text-red-500 text-sm"
//             >
//               Remove Activity
//             </button>
//           </div>
//         ))}

//         <button onClick={addActivity} className="bg-gray-200 px-3 py-1 rounded">
//           Add More Activity
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AreaForm;

import React from "react";
import IconPicker from "../../components/IconPicker";

const AreaForm = ({ property, setProperty }) => {
  /* Ensure one activity exists */
  const activities =
    property.area.relatedactivity?.length > 0
      ? property.area.relatedactivity
      : [{ title: "", shortDescription: "", icon: "" }];

  /* =====================
     BASIC AREA FIELDS
  ===================== */

  const handleChange = (e) => {
    setProperty({
      ...property,
      area: {
        ...property.area,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* =====================
     RELATED ACTIVITIES
  ===================== */

  // const addActivity = () => {
  //   setProperty({
  //     ...property,
  //     area: {
  //       ...property.area,
  //       relatedactivity: [
  //         ...activities,
  //         {
  //           title: "",
  //           shortDescription: "",
  //           icon: "",
  //         },
  //       ],
  //     },
  //   });
  // };

  const addActivity = () => {
    const lastActivity = activities[activities.length - 1];

    // Check if required fields are filled
    if (
      !lastActivity.title.trim() ||
      !lastActivity.shortDescription.trim() ||
      !lastActivity.icon
    ) {
      alert("Please fill all activity fields before adding a new one.");
      return;
    }

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: [
          ...activities,
          {
            title: "",
            shortDescription: "",
            icon: "",
          },
        ],
      },
    });
  };

  const changeActivity = (index, field, value) => {
    const updated = [...activities];
    updated[index][field] = value;

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated,
      },
    });
  };

  const removeActivity = (index) => {
    const updated = activities.filter((_, i) => i !== index);

    setProperty({
      ...property,
      area: {
        ...property.area,
        relatedactivity: updated,
      },
    });
  };

  const lastActivity = activities[activities.length - 1];
  const isLastActivityFilled =
    lastActivity.title.trim() &&
    lastActivity.shortDescription.trim() &&
    lastActivity.icon;

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold">Explore the Near by Area</h2>

      {/* LOCATION NAME */}

      <input
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        name="locationname"
        placeholder="Location Name"
        value={property.area.locationname}
        onChange={handleChange}
      />

      {/* MAP LINK */}

      <input
      type="url"
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        name="maplink"
        placeholder="Google Map Link"
        value={property.area.maplink}
        onChange={handleChange}
      />

      {/* RELATED ACTIVITIES */}

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Related Activities</h3>

        {activities.map((activity, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            {/* Activity Title */}
            <input
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Activity Name"
              value={activity.title}
              onChange={(e) => changeActivity(i, "title", e.target.value)}
            />

            {/* Short Description */}
            <input
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Short Description"
              value={activity.shortDescription}
              onChange={(e) =>
                changeActivity(i, "shortDescription", e.target.value)
              }
            />

            {/* ICON UPLOAD */}

            {/* <div className="w-[220px]">
              <label className="text-gray-700 mb-2 block">
                Upload Activity Icon
              </label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                {activity.icon ? (
                  <img
                    src={URL.createObjectURL(activity.icon)}
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
                  onChange={(e) => changeActivity(i, "icon", e.target.files[0])}
                />
              </label>
            </div> */}

            {/* ICON SELECT */}

            <div>
              <label className="block mb-2 text-sm font-medium">
                Select Activity Icon
              </label>

              <IconPicker
                value={activity.icon}
                onSelect={(iconName) => changeActivity(i, "icon", iconName)}
              />
            </div>

            {/* Remove Button */}

            {activities.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeActivity(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Activity
                </button>
              </div>
            )}
          </div>
        ))}

        {/* ADD BUTTON */}

        {/* <button
          onClick={addActivity}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add More Activity
        </button> */}

        <button
          onClick={addActivity}
          disabled={!isLastActivityFilled}
          className={`px-4 py-2 rounded ${
            isLastActivityFilled
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          + Add More Activity
        </button>
      </div>
    </div>
  );
};

export default AreaForm;
