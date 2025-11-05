// const TabSection = () => {
//   const [activeCategory, setActiveCategory] = useState(categories[0]);

//   const filteredActivities = activities.filter(
//     (item) => item.category === activeCategory
//   );

//   const navigate = useNavigate();

//   return (
//     <div className=" bg-amber-50/60 py-20">
//       <div className="max-w-[1140px] mx-auto px-4 md:px-0">
//         {/* Title */}
// <h2 className=" hd text-center text-[30px] mb-14 font-semibold text-[#2e2c2d] tracking-[3px] uppercase ">
//   well come to Cape Town <br className="hidden md:inline" /> Activities
// </h2>
// <p className="hd text-center text-gray-600 ">
//   Choose the category/ies of Cape Town Activities to suit your
//   preferences, and start booking your memories.
// </p>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mt-10">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => setActiveCategory(cat)}
//               className={` hd px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 activeCategory === cat
//                   ? "bg-[#aca188] text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
//           {filteredActivities.map((activity) => (
//             <div
//               key={activity.id}
//               className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
//             >
//               <div className="h-[200px] overflow-hidden">
//                 <img
//                   src={activity.image}
//                   alt={activity.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>

//               <div className=" hd transition-all duration-500 group-hover:-translate-y-4">
//                 <div className="p-4 bg-white group-hover:rounded-t-md text-center">
//                   <h3 className="text-lg font-[500] text-[#2e2c2d] mt-1 uppercase">
//                     {activity.title}
//                   </h3>
//                   <button
//                   onClick={()=>{
//                     navigate('/experience-details')
//                     window.scrollTo(0,0)
//                   }}
//                   className=" my-2 text-[#2e2c2d] border  border-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[8px] px-[20px]  transition-colors duration-300 cursor-pointer ease-out">
//                     View Destination
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TabSection;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  getActivities,
  getCategoriesByDestination,
} from "../../../api/activityApi";

const TabSection = () => {
  const { id } = useParams(); // destination ID from URL
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activities, setActivities] = useState([]);

  const navigate = useNavigate();

  // --- Fetch categories for this destination
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategoriesByDestination(id);
        setCategories(res.data);
        if (res.data.length > 0) setSelectedCategory(res.data[0]._id);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategories([]);
      }
    };
    fetchCategories();
  }, [id]);

  // --- Fetch all activities and filter by selected category
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchActivities = async () => {
      try {
        const res = await getActivities();
        const filtered = res.data.filter((a) => {
          if (!a.category) return false;
          return typeof a.category === "string"
            ? a.category === selectedCategory
            : a.category._id === selectedCategory;
        });
        setActivities(filtered);
      } catch (err) {
        console.error("Error fetching activities:", err);
        setActivities([]);
      }
    };

    fetchActivities();
  }, [selectedCategory]);

  return (
    <div className=" bg-amber-50/60 py-10 md:py-20 ">
      <div className="max-w-[1140px] mx-auto px-4 md:px-0">
        {/* Title */}
        <h2 className=" hd text-center text-xl md:text-[30px] mb-6 md:mb-14 font-semibold text-[#2e2c2d] tracking-[3px] uppercase ">
          well come to Cape Town <br className="hidden md:inline" /> Activities
        </h2>
        <p className="hd text-center text-gray-600 ">
          Choose the category/ies of Cape Town Activities to suit your
          preferences, and start booking your memories.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setSelectedCategory(cat._id)}
              className={`hd px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat._id
                  ? "bg-[#aca188] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-20">
          {activities.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No activities available.
            </p>
          ) : (
            activities.map((act) => (
              <Link
                key={act._id}
                to={`/experience-details/${act._id}`}
                className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="h-[200px] overflow-hidden">
                  {act.bannerImage && (
                    <img
                      src={act.bannerImage}
                      alt={act.activityName}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="hd transition-all duration-500 group-hover:-translate-y-4">
                  <div className="p-4 bg-white group-hover:rounded-t-md text-center">
                    <h3 className="text-lg font-[500] text-[#2e2c2d] mt-1 uppercase">
                      {act.activityName}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      ₹{act.pricePerPerson} / person
                    </p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        navigate(`/experience-details/${act._id}`);
                        window.scrollTo(0, 0);
                      }}
                      className="my-2 text-[#2e2c2d] border border-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[8px] px-[20px] transition-colors duration-300 cursor-pointer ease-out"
                    >
                      View Activity
                    </button>
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
