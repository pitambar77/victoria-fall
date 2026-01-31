// Fetch according to slug for all destination

// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   getActivities,
//   getCategoriesByDestination,
// } from "../../../api/activityApi";
// import { getDestinationBySlug } from "../../../api/destinationApi";

// const TabSection = () => {
//   // ✅ slug from URL (public)
//   const { destinationSlug } = useParams();

//   // internal IDs
//   const [destinationId, setDestinationId] = useState(null);

//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [activities, setActivities] = useState([]);
//   const [loading, setLoading] = useState(true);

//   /* ================= DESTINATION: slug → id ================= */
//   useEffect(() => {
//     if (!destinationSlug) return;

//     getDestinationBySlug(destinationSlug)
//       .then((res) => setDestinationId(res.data._id))
//       .catch((err) => {
//         console.error("Destination not found:", err);
//         setDestinationId(null);
//       });
//   }, [destinationSlug]);

//   /* ================= FETCH CATEGORIES ================= */
//   useEffect(() => {
//     if (!destinationId) return;

//     const fetchCategories = async () => {
//       try {
//         const res = await getCategoriesByDestination(destinationId);
//         setCategories(res.data || []);
//         if (res.data?.length) {
//           setSelectedCategory(res.data[0]._id); // internal use
//         }
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//         setCategories([]);
//       }
//     };

//     fetchCategories();
//   }, [destinationId]);

//   /* ================= FETCH ACTIVITIES ================= */
//   useEffect(() => {
//     if (!selectedCategory) return;

//     const fetchActivities = async () => {
//       try {
//         setLoading(true);

//         const res = await getActivities();

//         const filtered = res.data.filter((a) => {
//           if (!a.category) return false;
//           return typeof a.category === "string"
//             ? a.category === selectedCategory
//             : a.category._id === selectedCategory;
//         });

//         setActivities(filtered);
//       } catch (err) {
//         console.error("Error fetching activities:", err);
//         setActivities([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchActivities();
//   }, [selectedCategory]);

//   return (
//     <div className="bg-amber-50/60 py-10 md:py-20">
//       <div className="max-w-[1140px] mx-auto px-4 md:px-0">
//         {/* TITLE */}
//         <h2 className="hd text-center text-xl md:text-[30px] mb-6 md:mb-14 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
//           Welcome to Cape Town <br className="hidden md:inline" /> Activities
//         </h2>

//         <p className="hd text-center text-gray-600">
//           Choose the category of activities to suit your preferences.
//         </p>

//         {/* CATEGORY TABS */}
//         <div className="flex flex-wrap justify-center gap-3 mt-10">
//           {categories.map((cat) => (
//             <button
//               key={cat._id}
//               onClick={() => setSelectedCategory(cat._id)}
//               className={`hd px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 selectedCategory === cat._id
//                   ? "bg-[#aca188] text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {cat.name}
//             </button>
//           ))}
//         </div>

//         {/* ACTIVITIES GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-20">
//           {loading ? (
//             <p className="text-center text-gray-500 col-span-full">
//               Loading activities...
//             </p>
//           ) : activities.length === 0 ? (
//             <p className="text-center text-gray-500 col-span-full">
//               No activities available.
//             </p>
//           ) : (
//             activities.map((act) => (
//               <Link
//                 key={act.slug}
//                 to={`/experience-details/${act.slug}`}
//                 className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
//               >
//                 <div className="h-[200px] overflow-hidden">
//                   {act.banner?.[0]?.bannerImage && (
//                     <img
//                       src={act.banner[0].bannerImage}
//                       alt={act.activityName}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                   )}
//                 </div>

//                 <div className="p-4 bg-white text-center">
//                   <h3 className="text-lg font-[500] text-[#2e2c2d] uppercase">
//                     {act.activityName}
//                   </h3>
//                   <p className="text-gray-600 text-sm mt-1">
//                     ${act.pricePerPerson ?? "N/A"} / person
//                   </p>

//                   <div className="mt-3 inline-block border border-[#aca188] rounded-full text-[14px] uppercase tracking-[3px] py-[8px] px-[20px]">
//                     View Activity
//                   </div>
//                 </div>
//               </Link>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabSection;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getActivities,
  getCategoriesByDestination,
} from "../../../api/activityApi";

const TabSection = ({ destinationId }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ================= FETCH CATEGORIES ================= */
  useEffect(() => {
    if (!destinationId) return;

    const fetchCategories = async () => {
      try {
        const res = await getCategoriesByDestination(destinationId);
        setCategories(res.data || []);
        if (res.data?.length) {
          setSelectedCategory(res.data[0]._id);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
      }
    };

    fetchCategories();
  }, [destinationId]);

  /* ================= FETCH ACTIVITIES ================= */
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchActivities = async () => {
      try {
        setLoading(true);
        const res = await getActivities();

        const filtered = res.data.filter((a) =>
          typeof a.category === "string"
            ? a.category === selectedCategory
            : a.category?._id === selectedCategory
        );

        setActivities(filtered);
      } catch (err) {
        console.error("Error fetching activities:", err);
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [selectedCategory]);

  return (
    <div className="bg-amber-50/60 py-10 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4 md:px-0">
        <h2 className="hd text-center text-xl md:text-[30px] mb-6 md:mb-14 font-semibold tracking-[3px] uppercase">
          Activities
        </h2>

        <p className="hd text-center text-gray-600">
          Choose the category of activities to suit your preferences.
        </p>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setSelectedCategory(cat._id)}
              className={`hd px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat._id
                  ? "bg-[#aca188] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* ACTIVITIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-20">
          {loading ? (
            <p className="text-center col-span-full">Loading activities...</p>
          ) : activities.length === 0 ? (
            <p className="text-center col-span-full">
              No activities available.
            </p>
          ) : (
            activities.map((act) => (
              <Link
                key={act.slug}
                to={`${act.slug}`}
                className="bg-white rounded-md shadow-md overflow-hidden group"
              >
                <div className="h-[200px] overflow-hidden">
                  <img
                    src={act.banner?.[0]?.bannerImage || act.overviewImage}
                    alt={act.activityName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-[500] uppercase">
                    {act.activityName}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    ${act.pricePerPerson ?? "N/A"} / person
                  </p>
                  <div className="mt-3 inline-block border rounded-full text-[14px] uppercase py-[8px] px-[20px]">
                    View Activity
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TabSection;

