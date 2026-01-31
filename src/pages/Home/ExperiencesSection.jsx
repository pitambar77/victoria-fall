// // src/components/ExperiencesSection.jsx
// import React from "react";
// import { CiHeart } from "react-icons/ci"; // For the heart icon

// const ExperiencesSection = () => {
//   const experiences = [
//     {
//       id: 1,
//       image:
//         "https://www.johansens.com/wp-content/uploads/2019/10/Zimbabwe-Victoria-Falls-River-Lodge-94.jpg", // Placeholder image
//       category: "Nature & Wildlife",
//       title: "Finding Wonder in the Waters of the Okavango Delta",
//       price: "234$",
//       provider: "By Where To Africa",
//     },
//     {
//       id: 2,
//       image:
//         "https://www.johansens.com/wp-content/uploads/2019/10/Zimbabwe-Victoria-Falls-River-Lodge-94.jpg", // Placeholder image
//       category: "Nature & Wildlife",
//       title: "Finding Wonder in the Waters of the Okavango Delta",
//       price: "234$",
//       provider: "By Where To Africa",
//     },
//     {
//       id: 3,
//       image:
//         "https://www.johansens.com/wp-content/uploads/2019/10/Zimbabwe-Victoria-Falls-River-Lodge-94.jpg", // Placeholder image
//       category: "Nature & Wildlife",
//       title: "Finding Wonder in the Waters of the Okavango Delta",
//       price: "234$",
//       provider: "By Where To Africa",
//     },
//     // You can add more experience cards here if needed
//   ];

//   return (
//     <div className="bg-white md:py-20 py-10">
//       <div className="max-w-[1140px] mx-auto hd text-[#2e2c2d] text-center px-4">
//         {/* Title */}
//         <h2 className="hd text-center md:text-[30px] text-[20px] mb-10 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
//           Experiences in Victoria <br className="hidden md:inline" /> Falls
//         </h2>

//         {/* Grid of Experience Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {experiences.map((experience) => (
//             <div
//               key={experience.id}
//               className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200"
//             >
//               {/* Image Section */}
//               <div className="relative h-64">
//                 <img
//                   src={experience.image}
//                   alt={experience.title}
//                   className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
//                 />
//                 {/* Heart Icon */}
//                 <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors">
//                   <CiHeart />
//                 </button>
//               </div>

//               {/* Card Content */}
//               <div className="  text-left">
//                 <div className=" p-6">
//                   <span className=" p-5 hd inline-block bg-[#f9f4e8] text-[#2e2c2d] text-xs  px-3 py-2 rounded-full mb-3">
//                     {experience.category}
//                   </span>
//                 </div>

//                 <h3 className=" px-6  text-md font-semibold text-[#2e2c2d] mb-4 leading-[1.5]">
//                   {experience.title}
//                 </h3>
//                 <div className="flex text-gray-500 text-sm border-t border-gray-200">
//                   <span className="  p-6  text-[#2e2c2d] border-r border-gray-200">
//                     {experience.price} PP
//                   </span>
//                   <span className=" p-6 text-[#2e2c2d] text-left">{experience.provider}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExperiencesSection;


import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { getActivities } from "../../api/activityApi";

const ExperiencesSection = ({ destinationId, currentActivityId }) => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  if (!destinationId) return;

  const fetchRelated = async () => {
    try {
      const res = await getActivities();

      const filtered = res.data.filter(
        (act) =>
          act.destination?._id === destinationId && // ✅ FIX
          act._id !== currentActivityId
      );

      setExperiences(filtered.slice(0, 3));
    } catch (err) {
      console.error("Related activities error:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchRelated();
}, [destinationId, currentActivityId]);

  if (loading || experiences.length === 0) return null;

  return (
    <div className="bg-white md:py-20 py-10">
      <div className="max-w-[1140px] mx-auto text-center px-4">
        <h2 className="hd md:text-[30px] text-[20px] mb-10 font-semibold tracking-[3px] uppercase">
          Related Experiences
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp) => (
            <Link
              key={exp._id}
              to={`/experience-details/${exp.slug}`}
              className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200 group"
            >
              <div className="relative h-64">
                <img
                  src={exp.banner?.[0]?.bannerImage || exp.overviewImage}
                  alt={exp.activityName}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                  <CiHeart />
                </button>
              </div>

              <div className="text-left">
                <div className="p-6">
                  <span className="inline-block bg-[#f9f4e8] text-xs px-3 py-2 rounded-full">
                    {exp.category?.name || "Experience"}
                  </span>
                </div>

                <h3 className="px-6 text-md font-semibold mb-4">
                  {exp.activityName}
                </h3>

                <div className="flex text-sm border-t">
                  <span className="p-6 border-r">
                    ${exp.pricePerPerson} PP
                  </span>
                  <span className="p-6">By Where To Africa</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSection;
