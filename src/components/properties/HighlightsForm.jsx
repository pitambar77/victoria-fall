// export default function HighlightsForm({ property, setProperty }) {
//   /* Ensure one highlight exists by default */
//   const highlights =
//     property.highlights?.length > 0
//       ? property.highlights
//       : [{ title: "", description: "", icon: "" }];

//   // const addHighlight = () => {
//   //   setProperty({
//   //     ...property,
//   //     highlights: [
//   //       ...highlights,
//   //       { title: "", description: "", icon: "" },
//   //     ],
//   //   });
//   // };

//   const addHighlight = () => {
//     const lastHighlight = highlights[highlights.length - 1];

//     if (
//       !lastHighlight.title.trim() ||
//       !lastHighlight.description.trim() ||
//       !lastHighlight.icon
//     ) {
//       alert("Please fill the current highlight before adding another.");
//       return;
//     }

//     setProperty({
//       ...property,
//       highlights: [...highlights, { title: "", description: "", icon: "" }],
//     });
//   };

//   const handleChange = (index, field, value) => {
//     const updated = [...highlights];
//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       highlights: updated,
//     });
//   };

//   const handleIcon = (index, file) => {
//     const updated = [...highlights];
//     updated[index].icon = file;

//     setProperty({
//       ...property,
//       highlights: updated,
//     });
//   };

//   const removeHighlight = (index) => {
//     const updated = highlights.filter((_, i) => i !== index);

//     setProperty({
//       ...property,
//       highlights: updated,
//     });
//   };

//   return (
//     <div className="p-6 space-y-6">
//       <h2 className="text-lg font-semibold">Property Highlights</h2>

//       {highlights.map((highlight, i) => (
//         <div
//           key={i}
//           className="border border-gray-200 p-4 rounded-lg space-y-4"
//         >
//           <input
//             className="w-full border border-gray-300 rounded-md p-3 outline-none
//             focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//             placeholder="Highlight Title"
//             value={highlight.title}
//             onChange={(e) => handleChange(i, "title", e.target.value)}
//           />

//           <input
//             className="w-full border border-gray-300 rounded-md p-3 outline-none
//             focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//             placeholder="Highlight Description"
//             value={highlight.description}
//             onChange={(e) => handleChange(i, "description", e.target.value)}
//           />

//           {/* ICON UPLOAD */}
//           <div className="w-[220px]">
//             <label className="text-gray-700 mb-2 block">
//               Upload Highlight Icon
//             </label>

//             <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-2 cursor-pointer hover:border-blue-500 transition overflow-hidden">
//               {highlight.icon ? (
//                 <img
//                   src={URL.createObjectURL(highlight.icon)}
//                   alt="preview"
//                   className="w-16 h-16 object-contain"
//                 />
//               ) : (
//                 <>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-8 h-8 text-gray-400 mb-2"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                     />
//                   </svg>

//                   <span className="text-sm text-gray-500">Click to upload</span>
//                 </>
//               )}

//               <input
//                 type="file"
//                 hidden
//                 onChange={(e) => handleIcon(i, e.target.files[0])}
//               />
//             </label>
//           </div>

//           {/* Remove button */}
//           {highlights.length > 1 && (
//             <div className="flex justify-end">
//               <button
//                 onClick={() => removeHighlight(i)}
//                 className="text-red-500 text-sm hover:text-red-700"
//               >
//                 Remove Highlight
//               </button>
//             </div>
//           )}
//         </div>
//       ))}

//       <button
//         onClick={addHighlight}
//         className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
//       >
//         + Add More Highlights
//       </button>
//     </div>
//   );
// }


import IconPicker from "../../components/IconPicker";

export default function HighlightsForm({ property, setProperty }) {

  const highlights =
    property.highlights?.length > 0
      ? property.highlights
      : [{ title: "", description: "", icon: "" }];

  const addHighlight = () => {
    const lastHighlight = highlights[highlights.length - 1];

    if (
      !lastHighlight.title.trim() ||
      !lastHighlight.description.trim() ||
      !lastHighlight.icon
    ) {
      alert("Please fill the current highlight before adding another.");
      return;
    }

    setProperty({
      ...property,
      highlights: [...highlights, { title: "", description: "", icon: "" }],
    });
  };

  const changeHighlight = (index, field, value) => {
    const updated = [...highlights];
    updated[index][field] = value;

    setProperty({
      ...property,
      highlights: updated,
    });
  };

  const removeHighlight = (index) => {
    const updated = highlights.filter((_, i) => i !== index);

    setProperty({
      ...property,
      highlights: updated,
    });
  };

  const lastHighlight = highlights[highlights.length - 1];

  const canAddHighlight =
    lastHighlight.title.trim() &&
    lastHighlight.description.trim() &&
    lastHighlight.icon;

  return (
    <div className="p-6 space-y-6">

      <h2 className="text-lg font-semibold">Property Highlights</h2>

      {highlights.map((highlight, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >

          {/* TITLE */}

          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            placeholder="Highlight Title"
            value={highlight.title}
            onChange={(e) => changeHighlight(i, "title", e.target.value)}
          />

          {/* DESCRIPTION */}

          <input
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            placeholder="Highlight Description"
            value={highlight.description}
            onChange={(e) =>
              changeHighlight(i, "description", e.target.value)
            }
          />

          {/* ICON SELECT */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Highlight Icon
            </label>

            <IconPicker
              value={highlight.icon}
              onSelect={(iconName) => changeHighlight(i, "icon", iconName)}
            />
          </div>

          {/* REMOVE BUTTON */}

          {highlights.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeHighlight(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove Highlight
              </button>
            </div>
          )}

        </div>
      ))}

      {/* ADD BUTTON */}

      <button
        onClick={addHighlight}
        disabled={!canAddHighlight}
        className={`px-4 py-2 rounded ${
          canAddHighlight
            ? "bg-gray-200 hover:bg-gray-300"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        + Add More Highlights
      </button>

    </div>
  );
}