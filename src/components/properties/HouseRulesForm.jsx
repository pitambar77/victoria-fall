// import React from "react";

// const HouseRulesForm = ({ property, setProperty }) => {
//   /* ======================
//      META CHANGE
//   ====================== */

//   const handleMetaChange = (e) => {
//     setProperty({
//       ...property,
//       houserule: {
//         ...property.houserule,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   /* ======================
//      ADD RULE
//   ====================== */

//   const addRule = () => {
//     setProperty({
//       ...property,
//       houserule: {
//         ...property.houserule,
//         rule: [
//           ...property.houserule.rule,
//           {
//             title: "",
//             description: "",
//             icon: "",
//           },
//         ],
//       },
//     });
//   };

//   /* ======================
//      CHANGE RULE
//   ====================== */

//   const changeRule = (index, field, value) => {
//     const updated = [...property.houserule.rule];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       houserule: {
//         ...property.houserule,
//         rule: updated,
//       },
//     });
//   };

//   /* ======================
//      REMOVE RULE
//   ====================== */

//   const removeRule = (index) => {
//     const updated = property.houserule.rule.filter((_, i) => i !== index);

//     setProperty({
//       ...property,
//       houserule: {
//         ...property.houserule,
//         rule: updated,
//       },
//     });
//   };

//   return (
//     <div className="border p-6 space-y-6">
//       <h2 className="text-lg font-semibold">House Rules</h2>

//       {/* ================= META ================= */}

//       <div className="space-y-2">
//         <input
//           className="border p-2 w-full"
//           name="checkIn"
//           placeholder="Check In Time"
//           value={property.houserule.checkIn}
//           onChange={handleMetaChange}
//         />

//         <input
//           className="border p-2 w-full"
//           name="checkOut"
//           placeholder="Check Out Time"
//           value={property.houserule.checkOut}
//           onChange={handleMetaChange}
//         />

//         <textarea
//           className="border p-2 w-full"
//           name="content"
//           placeholder="House Rules Description"
//           value={property.houserule.content}
//           onChange={handleMetaChange}
//         />
//       </div>

//       {/* ================= RULE LIST ================= */}

//       <div className="space-y-4">
//         <h3 className="font-medium">Rules</h3>

//         {property.houserule.rule.map((rule, i) => (
//           <div key={i} className="border p-4 rounded space-y-2">
//             <input
//               className="border p-2 w-full"
//               placeholder="Rule Title"
//               value={rule.title}
//               onChange={(e) => changeRule(i, "title", e.target.value)}
//             />

//             <input
//               className="border p-2 w-full"
//               placeholder="Description"
//               value={rule.description}
//               onChange={(e) => changeRule(i, "description", e.target.value)}
//             />

//             <input
//               type="file"
//               onChange={(e) => changeRule(i, "icon", e.target.files[0])}
//             />

//             <button
//               onClick={() => removeRule(i)}
//               className="text-red-500 text-sm"
//             >
//               Remove Rule
//             </button>
//           </div>
//         ))}

//         <button onClick={addRule} className="bg-gray-200 px-3 py-1 rounded">
//           Add Rule
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HouseRulesForm;

import React from "react";

const HouseRulesForm = ({ property, setProperty, errors }) => {
  /* Ensure one rule exists */
  const rules =
    property.houserule.rule?.length > 0
      ? property.houserule.rule
      : [{ title: "", description: "", icon: "" }];

  /* ======================
     META CHANGE
  ====================== */

  const handleMetaChange = (e) => {
    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* ======================
     ADD RULE
  ====================== */

  const addRule = () => {
    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: [...rules, { title: "", description: "", icon: "" }],
      },
    });
  };

  /* ======================
     CHANGE RULE
  ====================== */

  const changeRule = (index, field, value) => {
    const updated = [...rules];
    updated[index][field] = value;

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: updated,
      },
    });
  };

  /* ======================
     REMOVE RULE
  ====================== */

  const removeRule = (index) => {
    const updated = rules.filter((_, i) => i !== index);

    setProperty({
      ...property,
      houserule: {
        ...property.houserule,
        rule: updated,
      },
    });
  };

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-xl font-semibold">House Rules</h2>

      {/* ================= META ================= */}

      <div className="space-y-4">
        <input
          className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.checkIn
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
          name="checkIn"
          placeholder="Check In Time *"
          value={property.houserule.checkIn}
          onChange={handleMetaChange}
        />

        {errors?.checkIn && (
          <p className="text-red-500 text-sm">{errors.checkIn}</p>
        )}
        <input
          className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.checkOut
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
          name="checkOut"
          placeholder="Check Out Time *"
          value={property.houserule.checkOut}
          onChange={handleMetaChange}
        />

        {errors?.checkOut && (
          <p className="text-red-500 text-sm">{errors.checkOut}</p>
        )}

        <textarea
          className="w-full border border-gray-300 rounded-md p-3 outline-none
          focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
          name="content"
          placeholder="House Rules Description"
          value={property.houserule.content}
          onChange={handleMetaChange}
        />
      </div>

      {/* ================= RULE LIST ================= */}

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Rules</h3>

        {rules.map((rule, i) => (
          <div
            key={i}
            className="border border-gray-200 p-4 rounded-lg space-y-4"
          >
            <input
              // className="w-full border border-gray-300 rounded-md p-3 outline-none
              // focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.title
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
              placeholder="Rule Title"
              value={rule.title}
              onChange={(e) => changeRule(i, "title", e.target.value)}
            />

 {errors?.title && (
          <p className="text-red-500 text-sm">{errors.title}</p>
        )}

            <input
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Description"
              value={rule.description}
              onChange={(e) => changeRule(i, "description", e.target.value)}
            />

            {/* ICON UPLOAD */}

            <div className="w-[220px]">
              <label className="text-gray-700 mb-2 block">
                Upload Rule Icon
              </label>

              <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition overflow-hidden">
                {rule.icon ? (
                  <img
                    src={URL.createObjectURL(rule.icon)}
                    alt="preview"
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-sm text-gray-500">Click to upload</span>
                )}

                <input
                  type="file"
                  hidden
                  onChange={(e) => changeRule(i, "icon", e.target.files[0])}
                />
              </label>
            </div>

            {/* REMOVE RULE */}

            {rules.length > 1 && (
              <div className="flex justify-end">
                <button
                  onClick={() => removeRule(i)}
                  className="text-red-500 text-sm hover:text-red-700"
                >
                  Remove Rule
                </button>
              </div>
            )}
          </div>
        ))}

        {/* ADD RULE BUTTON */}

        <button
          onClick={addRule}
          className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
        >
          + Add Rule
        </button>
      </div>
    </div>
  );
};

export default HouseRulesForm;
