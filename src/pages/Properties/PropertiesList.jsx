


// import { useEffect, useState } from "react";
// import { getProperties } from "../../api/propertiesApi.js";
// import { Link } from "react-router-dom";

// export default function PropertiesList() {

//   const [properties,setProperties] = useState([]);

//   useEffect(()=>{
//     loadProperties();
//   },[])

//   const loadProperties = async ()=>{
//     const res = await getProperties();
//     setProperties(res.data);
//   }

//   return (
//     <div className="p-6">

//       <h1 className="text-2xl font-bold mb-6">
//         Properties
//       </h1>

//       <div className="grid md:grid-cols-3 gap-6">

//         {properties.map((p)=>(
//           <div
//             key={p._id}
//             className="border rounded-lg p-4 hover:shadow-md transition"
//           >

//             <h2 className="font-semibold text-lg">
//               {p.overview?.title || "Untitled Property"}
//             </h2>

//             <p className="text-sm text-gray-500">
//               {p.city}, {p.country}
//             </p>

//             <Link
//               to={`/propt/${p._id}`}
//               className="text-blue-600 text-sm mt-2 inline-block"
//             >
//               Edit Property →
//             </Link>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { getProperties, deleteProperty } from "../../api/propertiesApi.js";
import { Link } from "react-router-dom";

export default function PropertiesList() {

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    const res = await getProperties();
    setProperties(res.data);
  };

  /* ======================
     DELETE PROPERTY
  ====================== */

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm("Delete this property?");

    if (!confirmDelete) return;

    await deleteProperty(id);

    // remove from UI
    setProperties(properties.filter((p) => p._id !== id));

  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">
        Properties
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {properties.map((p) => (

          <div
            key={p._id}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >

            <h2 className="font-semibold text-lg">
              {p.overview?.title || "Untitled Property"}
            </h2>

            <p className="text-sm text-gray-500">
              {p.city}, {p.country}
            </p>

            <div className="flex gap-3 mt-3">

              <Link
                to={`/propt/${p._id}`}
                className="text-blue-600 text-sm"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(p._id)}
                className="text-red-600 text-sm"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}