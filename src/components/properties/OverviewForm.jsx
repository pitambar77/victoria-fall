// export default function OverviewForm({ property, setProperty }) {
//   const change = (e) => {
//     setProperty({
//       ...property,
//       overview: {
//         ...property.overview,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   const addParagraph = () => {
//     setProperty({
//       ...property,
//       overview: {
//         ...property.overview,
//         description: [
//           ...(property.overview?.description || []),
//           { type: "paragraph", content: "" },
//         ],
//       },
//     });
//   };

//   return (
//     <div className=" p-2 space-y-3">
//       <h2 className="font-semibold mb-6 text-xl">Overview</h2>

//       {/* <input
//         name="title"
//         placeholder="Property Name"
//         required
//         className="border border-gray-400 rounded-sm p-2 w-full outline-[#c1b296] outline-1"
//         onChange={change}
//       /> */}

//       {/* <div className="relative w-full">
//         <input
//           name="title"
//           required
//           onChange={change}
//           className="peer w-full border border-gray-300 rounded-md p-3 pt-5 outline-none
//     focus:border-[#c1b296] focus:ring-1 focus:ring-[#c1b296]"
//         />

//         <label
//           className="absolute left-3 top-2 text-gray-500 text-sm
//     peer-placeholder-shown:top-3
//     peer-placeholder-shown:text-base
//     peer-focus:top-1
//     peer-focus:text-xs
//     transition-all duration-200"
//         >
//           Property Name
//         </label>
//       </div> */}

//       <div className="relative w-full">
//         <input
//           name="title"
//           placeholder="Property Name"
//           required
//           onChange={change}
//           className="w-full border border-gray-300 rounded-md p-3 outline-none
//     focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition-all duration-200"
//         />
//       </div>

//       <input
//         name="subTitle"
//         placeholder="Property sub title"
//         className="w-full border border-gray-300 rounded-md p-3 outline-none
//     focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition-all duration-200"
//         onChange={change}
//       />

//       <textarea
//         name="landingsubcontent"
//         placeholder="Landing Content"
//         className="w-full border border-gray-300 rounded-md p-3 outline-none
//     focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition-all duration-200"
//         onChange={change}
//       />

//       {/* Render Paragraphs */}
//       {property.overview?.description?.map((block, index) => (
//         <textarea
//           key={index}
//           value={block.content}
//           placeholder=" Property Content"
//           className="w-full border border-gray-300 rounded-md p-3 outline-none
//     focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition-all duration-200"
//           onChange={(e) => {
//             const updated = [...property.overview.description];
//             updated[index].content = e.target.value;

//             setProperty({
//               ...property,
//               overview: {
//                 ...property.overview,
//                 description: updated,
//               },
//             });
//           }}
//         />
//       ))}

//       <button
//         onClick={addParagraph}
//         className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded-sm px-3 py-1"
//       >
//         Add Paragraph content
//       </button>
//     </div>
//   );
// }

export default function OverviewForm({ property, setProperty, errors }) {
  const change = (e) => {
    setProperty({
      ...property,
      overview: {
        ...property.overview,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* ADD PARAGRAPH */
  const addParagraph = () => {
    setProperty({
      ...property,
      overview: {
        ...property.overview,
        description: [
          ...(property.overview?.description || []),
          { type: "paragraph", content: "" },
        ],
      },
    });
  };

  /* REMOVE PARAGRAPH */
  const removeParagraph = (index) => {
    const updated = [...property.overview.description];
    updated.splice(index, 1);

    setProperty({
      ...property,
      overview: {
        ...property.overview,
        description: updated,
      },
    });
  };

  /* Ensure one paragraph exists */
  const paragraphs =
    property.overview?.description?.length > 0
      ? property.overview.description
      : [{ type: "paragraph", content: "" }];

  return (
    <div className="p-2 space-y-4">
      <h2 className="font-semibold mb-6 text-xl">Overview</h2>
      {/* Property Name */}
      <input
        name="title"
        placeholder="Property Name*"
        required
        value={property.overview.title || ""}
        onChange={change}
        // className="w-full border border-gray-300 rounded-md p-3 outline-none focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
        className={`w-full border rounded-md p-3 outline-none transition
  ${
    errors?.title
      ? "border-red-500 focus:ring-red-200"
      : "border-gray-300 focus:border-[#c1b296] focus:ring-[#c1b296]/40"
  }`}
      />
      {errors?.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      {/* Subtitle */}
      <input
        name="subTitle"
        placeholder="Property Sub Title"
        value={property.overview.subTitle || ""}
        onChange={change}
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />
      {/* Landing Content */}
      <textarea
        name="landingsubcontent"
        placeholder="Landing Content"
        value={property.overview.landingsubcontent || ""}
        onChange={change}
        className="w-full border border-gray-300 rounded-md p-3 outline-none
        focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
      />
      {/* {paragraphs.map((block, index) => (
        <div key={index} className="relative">

          <textarea
            value={block.content}
            placeholder={`Property short content ${index + 1}`}
            className="w-full border border-gray-300 rounded-md p-3 outline-none
            focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            onChange={(e) => {
              const updated = [...paragraphs];
              updated[index].content = e.target.value;

              setProperty({
                ...property,
                overview: {
                  ...property.overview,
                  description: updated,
                },
              });
            }}
          />

     
          {paragraphs.length > 1 && (
            <button
              type="button"
              onClick={() => removeParagraph(index)}
              className="absolute top-2 right-2 text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          )}

        </div>
      ))} */}

      {paragraphs.map((block, index) => (
        <div key={index} className="space-y-2">
          <textarea
            value={block.content}
            placeholder={`Property short content ${index + 1}`}
            className="w-full border border-gray-300 rounded-md p-3 outline-none
      focus:border-[#c1b296] focus:ring-2 focus:ring-[#c1b296]/40 transition"
            onChange={(e) => {
              const updated = [...paragraphs];
              updated[index].content = e.target.value;

              setProperty({
                ...property,
                overview: {
                  ...property.overview,
                  description: updated,
                },
              });
            }}
          />

          {/* Remove Button */}
          {paragraphs.length > 1 && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => removeParagraph(index)}
                className="text-red-500 text-sm hover:text-red-700 transition"
              >
                Remove content
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Add Paragraph */}
      <button
        type="button"
        onClick={addParagraph}
        className="bg-gray-200 hover:bg-gray-300 cursor-pointer rounded px-3 py-1"
      >
        + Add More Content
      </button>
    </div>
  );
}
