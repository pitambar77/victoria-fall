// import { useState } from "react";
// import {
//   addHighlight,
//   updateHighlight,
//   deleteHighlight
// } from "../../api/propertiesApi";

// export default function HighlightsSection({ property, setProperty }) {

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [icon, setIcon] = useState(null);

//   /* ========================
//      ADD HIGHLIGHT
//   ======================== */

//   const submit = async () => {
//     try {

//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("description", description);
//       formData.append("icon", icon);

//       const res = await addHighlight(property._id, formData);

//       setProperty(res.data);

//       setTitle("");
//       setDescription("");
//       setIcon(null);

//       alert("Highlight added ✅");

//     } catch (err) {
//       console.error(err);
//     }
//   };

//   /* ========================
//      UPDATE HIGHLIGHT
//   ======================== */

//   const handleUpdate = async (highlight) => {

//     try {

//       const formData = new FormData();

//       formData.append("title", highlight.title);
//       formData.append("description", highlight.description);

//       if (highlight.newIcon) {
//         formData.append("icon", highlight.newIcon);
//       }

//       const res = await updateHighlight(
//         property._id,
//         highlight._id,
//         formData
//       );

//       setProperty(res.data);

//       alert("Highlight updated ✅");

//     } catch (err) {
//       console.error(err);
//     }
//   };

//   /* ========================
//      DELETE HIGHLIGHT
//   ======================== */

//   const handleDelete = async (highlightId) => {

//     try {

//       const res = await deleteHighlight(property._id, highlightId);
//       setProperty(res.data);

//     } catch (err) {
//       console.error(err);
//     }
//   };

//   /* ========================
//      CHANGE FIELD
//   ======================== */

//   const changeHighlight = (index, field, value) => {

//     const updated = [...property.highlights];
//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       highlights: updated
//     });
//   };

//   const changeIcon = (index, file) => {

//     const updated = [...property.highlights];
//     updated[index].newIcon = file;

//     setProperty({
//       ...property,
//       highlights: updated
//     });
//   };

//   return (

//     <div className="space-y-8">

//       {/* EXISTING HIGHLIGHTS */}

//       <div className="bg-white p-6 rounded-lg space-y-6">

//         <h2 className="text-xl font-semibold">
//           Existing Highlights
//         </h2>

//         {property.highlights?.map((highlight, i) => (

//           <div
//             key={highlight._id}
//             className="border border-gray-200 p-4 rounded-lg space-y-4"
//           >

//             <input
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//               value={highlight.title}
//               onChange={(e) =>
//                 changeHighlight(i, "title", e.target.value)
//               }
//               placeholder="Highlight Title"
//             />

//             <input
//               className="w-full border border-gray-300 rounded-md p-3 outline-none
//               focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//               value={highlight.description}
//               onChange={(e) =>
//                 changeHighlight(i, "description", e.target.value)
//               }
//               placeholder="Highlight Description"
//             />

//             {/* ICON UPLOAD */}

//             <div className="w-[180px]">

//               <label className="text-gray-700 mb-2 block">
//                 Upload Icon
//               </label>

//               <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition">

//                 {highlight.newIcon ? (

//                   <img
//                     src={URL.createObjectURL(highlight.newIcon)}
//                     className="w-16 h-16 object-contain"
//                   />

//                 ) : highlight.icon ? (

//                   <img
//                     src={highlight.icon}
//                     className="w-16 h-16 object-contain"
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
//                   onChange={(e) =>
//                     changeIcon(i, e.target.files[0])
//                   }
//                 />

//               </label>

//             </div>

//             {/* ACTION BUTTONS */}

//             <div className="flex gap-3">

//               <button
//                 onClick={() => handleUpdate(highlight)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
//               >
//                 Update
//               </button>

//               <button
//                 onClick={() => handleDelete(highlight._id)}
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//               >
//                 Delete
//               </button>

//             </div>

//           </div>

//         ))}

//       </div>

//       {/* ADD NEW HIGHLIGHT */}

//       <div className="bg-white p-6 rounded-lg space-y-4">

//         <h2 className="text-xl font-semibold">
//           Add Highlight
//         </h2>

//         <input
//           className="w-full border border-gray-300 rounded-md p-3 outline-none
//           focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         <input
//           className="w-full border border-gray-300 rounded-md p-3 outline-none
//           focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         {/* ICON UPLOAD */}

//         <div className="w-[180px]">

//           <label className="text-gray-700 mb-2 block">
//             Upload Icon
//           </label>

//           <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-4 cursor-pointer hover:border-blue-500 transition">

//             {icon ? (

//               <img
//                 src={URL.createObjectURL(icon)}
//                 className="w-16 h-16 object-contain"
//               />

//             ) : (

//               <>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-8 h-8 text-gray-400 mb-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6L16 6a4 4 0 010 8h-1M12 12v9m0-9l-3 3m3-3l3 3"
//                   />
//                 </svg>

//                 <span className="text-sm text-gray-500">
//                   Click to upload
//                 </span>
//               </>
//             )}

//             <input
//               type="file"
//               hidden
//               onChange={(e) => setIcon(e.target.files[0])}
//             />

//           </label>

//         </div>

//         <button
//           onClick={submit}
//           className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded"
//         >
//           Add Highlight
//         </button>

//       </div>

//     </div>
//   );
// }

import { useState, useEffect } from "react";
import IconPicker from "../../components/IconPicker";
import {
  addHighlight,
  updateHighlight,
  deleteHighlight,
} from "../../api/propertiesApi";

export default function HighlightsSection({ property, setProperty }) {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    if (!property) return;

    const list =
      property.highlights?.length > 0
        ? property.highlights
        : [{ title: "", description: "", icon: "" }];

    setHighlights(list);
  }, [property]);

  /* =========================
     CHANGE FIELD
  ========================= */

  const changeHighlight = (index, field, value) => {
    const updated = [...highlights];
    updated[index][field] = value;
    setHighlights(updated);
  };

  /* =========================
     ADD HIGHLIGHT
  ========================= */

  const addHighlightRow = () => {
    const last = highlights[highlights.length - 1];

    if (!last.title.trim() || !last.description.trim() || !last.icon) {
      alert("Please complete current highlight first");
      return;
    }

    setHighlights([...highlights, { title: "", description: "", icon: "" }]);
  };

  /* =========================
     SAVE SINGLE HIGHLIGHT
  ========================= */

  // const saveHighlight = async (highlight, index) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("title", highlight.title);
  //     formData.append("description", highlight.description);
  //     formData.append("icon", highlight.icon);

  //     let res;

  //     if (highlight._id) {
  //       res = await updateHighlight(property._id, highlight._id, formData);
  //     } else {
  //       res = await addHighlight(property._id, formData);
  //     }

  //     setProperty(res.data);
  //     alert("Highlight saved ✅");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  const saveHighlight = async (highlight) => {
    try {
      const payload = {
        title: highlight.title,
        description: highlight.description,
        icon: highlight.icon,
      };

      let res;

      if (highlight._id) {
        res = await updateHighlight(property._id, highlight._id, payload);
      } else {
        res = await addHighlight(property._id, payload);
      }

      setProperty(res.data);

      // ⭐ IMPORTANT
      setHighlights(res.data.highlights);

      alert("Highlight saved ✅");
    } catch (err) {
      console.error(err);
    }
  };

  /* =========================
     REMOVE HIGHLIGHT
  ========================= */

  const removeHighlight = async (index) => {
    const highlight = highlights[index];

    try {
      if (highlight._id) {
        await deleteHighlight(property._id, highlight._id);
      }

      const updated = highlights.filter((_, i) => i !== index);

      setHighlights(updated);

      setProperty({
        ...property,
        highlights: updated,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg space-y-6">
      <h2 className="text-xl font-semibold">Property Highlights</h2>

      {highlights.map((highlight, i) => (
        <div
          key={highlight._id || i}
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
            onChange={(e) => changeHighlight(i, "description", e.target.value)}
          />

          {/* ICON PICKER */}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Highlight Icon
            </label>

            <IconPicker
              value={highlight.icon}
              onSelect={(iconName) => changeHighlight(i, "icon", iconName)}
            />
          </div>

          {/* ACTION BUTTONS */}

          <div className="flex justify-between pt-2">
            {highlights.length > 1 && (
              <button
                onClick={() => removeHighlight(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove
              </button>
            )}

            <button
              onClick={() => saveHighlight(highlight, i)}
              className="bg-[#aca288] hover:bg-[#9a9077] text-white px-4 py-1 rounded"
            >
              Save
            </button>
          </div>
        </div>
      ))}

      {/* ADD BUTTON */}

      <button
        onClick={addHighlightRow}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        + Add More Highlights
      </button>
    </div>
  );
}
