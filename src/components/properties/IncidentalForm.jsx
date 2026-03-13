// import React from "react";

// const IncidentalForm = ({ property, setProperty }) => {
//   const addBlock = () => {
//     setProperty({
//       ...property,
//       incidental: {
//         ...property.incidental,
//         description: [
//           ...property.incidental.description,
//           {
//             type: "paragraph",
//             content: "",
//           },
//         ],
//       },
//     });
//   };

//   const changeBlock = (index, field, value) => {
//     const updated = [...property.incidental.description];

//     updated[index][field] = value;

//     setProperty({
//       ...property,
//       incidental: {
//         ...property.incidental,
//         description: updated,
//       },
//     });
//   };

//   const removeBlock = (index) => {
//     const updated = property.incidental.description.filter(
//       (_, i) => i !== index,
//     );

//     setProperty({
//       ...property,
//       incidental: {
//         ...property.incidental,
//         description: updated,
//       },
//     });
//   };

//   return (
//     <div className="border p-6 space-y-4">
//       <h2 className="text-lg font-semibold">Incidental Information</h2>

//       {property.incidental.description.map((block, i) => (
//         <div key={i} className="border p-4 space-y-2">
//           <select
//             value={block.type}
//             onChange={(e) => changeBlock(i, "type", e.target.value)}
//           >
//             <option value="header">Header</option>
//             <option value="paragraph">Paragraph</option>
//             <option value="list">List</option>
//           </select>

//           {block.type === "list" ? (
//             <textarea
//               className="border p-2 w-full"
//               placeholder="Enter list items separated by comma"
//               value={block.content}
//               onChange={(e) =>
//                 changeBlock(i, "content", e.target.value.split(","))
//               }
//             />
//           ) : (
//             <textarea
//               className="border p-2 w-full"
//               placeholder="Content"
//               value={block.content}
//               onChange={(e) => changeBlock(i, "content", e.target.value)}
//             />
//           )}

//           <button onClick={() => removeBlock(i)} className="text-red-500">
//             Remove
//           </button>
//         </div>
//       ))}

//       <button onClick={addBlock} className="bg-gray-200 px-3 py-1 rounded">
//         Add Block
//       </button>
//     </div>
//   );
// };

// export default IncidentalForm;

import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const IncidentalForm = ({ property, setProperty }) => {
  /* Ensure one block exists */
  const blocks =
    property.incidental.description?.length > 0
      ? property.incidental.description
      : [{ type: "paragraph", content: "" }];

  /* ======================
     ADD BLOCK
  ====================== */

  const addBlock = () => {
    setProperty({
      ...property,
      incidental: {
        ...property.incidental,
        description: [
          ...blocks,
          {
            type: "paragraph",
            content: "",
          },
        ],
      },
    });
  };

  /* ======================
     CHANGE BLOCK
  ====================== */

  const changeBlock = (index, field, value) => {
    const updated = [...blocks];
    updated[index][field] = value;

    setProperty({
      ...property,
      incidental: {
        ...property.incidental,
        description: updated,
      },
    });
  };

  /* ======================
     REMOVE BLOCK
  ====================== */

  const removeBlock = (index) => {
    const updated = blocks.filter((_, i) => i !== index);

    setProperty({
      ...property,
      incidental: {
        ...property.incidental,
        description: updated,
      },
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-semibold">Incidental Information</h2>

      {blocks.map((block, i) => (
        <div
          key={i}
          className="border border-gray-200 p-4 rounded-lg space-y-4"
        >
          {/* BLOCK TYPE */}
          {/* <select
            className=" border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            value={block.type}
            onChange={(e) => changeBlock(i, "type", e.target.value)}
          >
            <option value="header">Header</option>
            <option value="paragraph">Paragraph</option>
            <option value="list">List</option>
          </select> */}

          <div className="relative w-full">
            <select
              className="w-full border border-gray-300 rounded-md p-3 pr-10 appearance-none outline-none
    focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition bg-white"
              value={block.type}
              onChange={(e) => changeBlock(i, "type", e.target.value)}
            >
              <option value="header">Header</option>
              <option value="paragraph">Paragraph</option>
              <option value="list">List</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>

          {/* CONTENT FIELD */}

          {block.type === "list" ? (
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Enter list items separated by comma"
              value={
                Array.isArray(block.content)
                  ? block.content.join(", ")
                  : block.content
              }
              onChange={(e) =>
                changeBlock(i, "content", e.target.value.split(","))
              }
            />
          ) : (
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 outline-none
              focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
              placeholder="Content"
              value={block.content}
              onChange={(e) => changeBlock(i, "content", e.target.value)}
            />
          )}

          {/* REMOVE BUTTON */}

          {blocks.length > 1 && (
            <div className="flex justify-end">
              <button
                onClick={() => removeBlock(i)}
                className="text-red-500 text-sm hover:text-red-700"
              >
                Remove Block
              </button>
            </div>
          )}
        </div>
      ))}

      {/* ADD BLOCK */}

      <button
        onClick={addBlock}
        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
      >
        + Add Block
      </button>
    </div>
  );
};

export default IncidentalForm;
