// export default function OverviewForm({property,setProperty}){

//   const change = (e)=>{
//     setProperty({
//       ...property,
//       overview:{
//         ...property.overview,
//         [e.target.name]:e.target.value
//       }
//     })
//   }

//   return(

//     <div className="border p-6">

//       <h2 className="font-bold mb-4">
//         Overview
//       </h2>

//       <input
//         name="title"
//         placeholder="Title"
//         onChange={change}
//       />

//       <input
//         name="subTitle"
//         placeholder="Subtitle"
//         onChange={change}
//       />

//       <textarea
//         name="landingsubcontent"
//         placeholder="Landing Content"
//         onChange={change}
//       />

//     </div>

//   )
// }


export default function OverviewForm({ property, setProperty }) {

  const change = (e) => {
    setProperty({
      ...property,
      overview: {
        ...property.overview,
        [e.target.name]: e.target.value
      }
    });
  };

  const addParagraph = () => {
    setProperty({
      ...property,
      overview: {
        ...property.overview,
        description: [
          ...(property.overview?.description || []),
          { type: "paragraph", content: "" }
        ]
      }
    });
  };

  return (
    <div className="border p-6 space-y-3">

      <h2 className="font-bold">Overview</h2>

      <input
        name="title"
        placeholder="Title"
        className="border p-2 w-full"
        onChange={change}
      />

      <input
        name="subTitle"
        placeholder="Subtitle"
        className="border p-2 w-full"
        onChange={change}
      />

      <textarea
        name="landingsubcontent"
        placeholder="Landing Content"
        className="border p-2 w-full"
        onChange={change}
      />

      <button
        onClick={addParagraph}
        className="bg-gray-200 px-3 py-1"
      >
        Add Paragraph
      </button>

      {/* Render Paragraphs */}
      {property.overview?.description?.map((block, index) => (
        <textarea
          key={index}
          value={block.content}
          placeholder="Paragraph"
          className="border p-2 w-full"
          onChange={(e) => {
            const updated = [...property.overview.description];
            updated[index].content = e.target.value;

            setProperty({
              ...property,
              overview: {
                ...property.overview,
                description: updated
              }
            });
          }}
        />
      ))}

    </div>
  );
}