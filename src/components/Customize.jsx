// import React, { useState } from 'react';

// const Customize = () => {
//   const [hoveredStep, setHoveredStep] = useState(null);

//   const steps = [
//     {
//       id: 1,
//       title: "Get A Personalised Plan",
//       description: "A complete day by day itinerary based on your specific needs & preferences",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8 text-white"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: "Customize It",
//       description: "Refine your plan. Select your destinations, accommodation & activities, we will find the best routes, prices & schedules",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8 text-white"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h3v-3a1 1 0 112 0v3h2v-3a1 1 0 112 0v3h3a1 1 0 00.707-1.707L15 11.586V8a6 6 0 00-6-6z" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: "Confirm & Start Packing",
//       description: "Everything in one place. Everyone on the same page.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8 text-white"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h3v-3a1 1 0 112 0v3h2v-3a1 1 0 112 0v3h3a1 1 0 00.707-1.707L15 11.586V8a6 6 0 00-6-6z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-16 px-4 font-sans">
//       <div className="container mx-auto text-center">
//         {/* Header Section */}
//         <h2 className="text-4xl font-light text-gray-800 tracking-wide mb-2">
//           READY TO START YOUR AFRICAN SAFARI?
//         </h2>
//         <p className="text-gray-600 mb-12 flex items-center justify-center">
//           <span className="mr-2 text-xl">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5L7 11h6l-2.133-3.5A1 1 0 0010 7z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </span>
//           LEARN HOW TO CUSTOMIZE YOUR OWN TOUR?
//         </p>

//         {/* Progress Bar Section */}
//         <div className="flex justify-around items-start relative mb-12">
//           {/* Connector line */}
//           <div className="absolute top-8 left-[16.666%] right-[16.666%] h-px bg-gray-400 -z-10"></div>

//           {/* Mapping through steps */}
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="w-1/3 text-center cursor-pointer group"
//               onMouseEnter={() => setHoveredStep(step.id)}
//               onMouseLeave={() => setHoveredStep(null)}
//             >
//               <div className={`
//                 mx-auto mb-4 rounded-full flex items-center justify-center
//                 transition-all duration-300
//                 ${hoveredStep === step.id ? 'w-16 h-16 bg-orange-500' : 'w-8 h-8 bg-gray-400'}
//               `}>
//                 <span className={`transition-all duration-300 ${hoveredStep === step.id ? 'opacity-100' : 'opacity-0'}`}>
//                   {step.icon}
//                 </span>
//               </div>
//               <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                 {step.title}
//               </h3>
//               <p className="text-sm text-gray-500 max-w-xs mx-auto">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="flex justify-center">
//           <button className="bg-gray-400 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-gray-500 transition duration-300 flex items-center">
//             <span className="mr-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.103 6.103l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-11a3 3 0 01-3-3V3z" />
//               </svg>
//             </span>
//             +27 11 465 6623
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Customize;
// import React, { useState } from "react";
// import Button from "./Button";

// const Customize = () => {
//   const [hoveredStep, setHoveredStep] = useState(null);

//   const steps = [
//     {
//       id: 1,
//       title: "Get A Personalised Plan",
//       description:
//         "A complete day by day itinerary based on your specific needs & preferences",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8 text-white"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: "Customize It",
//       description:
//         "Refine your plan. Select your destinations, accommodation & activities, we will find the best routes, prices & schedules",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8 text-white"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h3v-3a1 1 0 112 0v3h2v-3a1 1 0 112 0v3h3a1 1 0 00.707-1.707L15 11.586V8a6 6 0 00-6-6z" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: "Confirm & Start Packing",
//       description: "Everything in one place. Everyone on the same page.",
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8 text-white"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//         >
//           <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h3v-3a1 1 0 112 0v3h2v-3a1 1 0 112 0v3h3a1 1 0 00.707-1.707L15 11.586V8a6 6 0 00-6-6z" />
//         </svg>
//       ),
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-16 px-4 font-sans">
//       <div className="container mx-auto text-center">
//         {/* Header Section */}
//         <h2 className="text-4xl font-light text-gray-800 tracking-wide mb-2">
//           READY TO START YOUR AFRICAN SAFARI?
//         </h2>
//         <p className="text-gray-600 mb-12 flex items-center justify-center">
//           <span className="mr-2 text-xl">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5L7 11h6l-2.133-3.5A1 1 0 0010 7z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </span>
//           LEARN HOW TO CUSTOMIZE YOUR OWN TOUR?
//         </p>

//         {/* Progress Bar Section */}
//         <div className="flex justify-around items-start relative mb-12">
//           {/* Connector line */}
//           <div className="absolute top-8 left-[16.666%] right-[16.666%] h-px bg-gray-400 -z-10"></div>

//           {/* Mapping through steps */}
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="w-1/3 text-center cursor-pointer group"
//               onMouseEnter={() => setHoveredStep(step.id)}
//               onMouseLeave={() => setHoveredStep(null)}
//             >
//               {/* Icon container with all transitions */}

//               <div
//                 className={`
//                 mx-auto mb-4 rounded-full flex items-center justify-center
//                 transition-all duration-300
//                 ${
//                   hoveredStep === step.id
//                     ? "w-16 h-16 bg-[#ACA188] "
//                     : "w-6 h-6 bg-[#ACA188]"
//                 }
//               `}
//               >
//                 <span
//                   className={`transition-all duration-300 ${
//                     hoveredStep === step.id ? "opacity-100" : "opacity-0"
//                   }`}
//                 >
//                   {step.icon}
//                 </span>
//               </div>

//               <div>
//                 <h3 className="text-lg font-semibold text-gray-700 mb-2">
//                   {step.title}
//                 </h3>
//                 <p className="text-sm text-gray-500 max-w-xs mx-auto">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="flex justify-center">
//           <Button>+12 9999 999 9999</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Customize;

import React, { useState } from "react";
import Button from "./Button";

const Customize = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Get A Personalised Plan",
      description:
        "A complete day by day itinerary based on your specific needs & preferences",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Customize It",
      description:
        "Refine your plan. Select your destinations, accommodation & activities, we will find the best routes, prices & schedules",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h3v-3a1 1 0 112 0v3h2v-3a1 1 0 112 0v3h3a1 1 0 00.707-1.707L15 11.586V8a6 6 0 00-6-6z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Confirm & Start Packing",
      description: "Everything in one place. Everyone on the same page.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h3v-3a1 1 0 112 0v3h2v-3a1 1 0 112 0v3h3a1 1 0 00.707-1.707L15 11.586V8a6 6 0 00-6-6z" />
        </svg>
      ),
    },
  ];

  return (
    <div className=" max-w-[1140px] mx-auto py-20 ">
      <div className="container mx-auto text-center">
        {/* Header Section */}
        <h2 className="hd text-center text-[30px] mb-2 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
          READY TO START YOUR <br/> AFRICAN SAFARI?
        </h2>
        <p className=" hd text-[#2e2c2d] capitalize mb-10 text-md flex items-center justify-center">
          <span className="mr-2 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="#ACA188"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5L7 11h6l-2.133-3.5A1 1 0 0010 7z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Learn how to Customize Your Own Tour?
        </p>

        {/* Progress Bar Section */}
        <div className="flex justify-around items-start relative ">
          {/* Connector line */}
          {/* <div className="absolute top-8 left-[16.666%] right-[16.666%] h-px bg-gray-400 -z-10"></div> */}

          {/* Mapping through steps */}
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-1/3 text-center cursor-pointer group"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <h3 className=" hd text-[16px] font-semibold text-[#5c5e62] my-[40px]">
                {step.title}
              </h3>
              {/* This container has a fixed size */}
              <div className="w-16 h-16 mx-auto mb-4 relative">
                {/* The inner circle scales on hover */}

                <div
                  className={`
                    absolute inset-0 mx-auto my-auto rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${
                      hoveredStep === step.id
                        ? "w-16 h-16 bg-[#ACA188]"
                        : "w-6 h-6 bg-[#ACA188]"
                    }
                  `}
                >
                  <span
                    className={`transition-all duration-300 ${
                      hoveredStep === step.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {step.icon}
                  </span>
                </div>
              </div>

              <div>
                <p className=" hd text-center text-[#5c5e62] leading-relaxed mb-16 text-sm max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center hd">
          <Button >+12 9999 999 9999</Button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
