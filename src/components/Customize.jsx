

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
//     <div className=" max-w-[1140px] mx-auto md:py-20 py-10 px-4 ">
//       <div className="container mx-auto text-center">
//         {/* Header Section */}
//         <h2 className="hd text-center text-xl md:text-[30px] mb-2 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
//           READY TO START YOUR <br/> AFRICAN SAFARI?
//         </h2>
//         <p className=" hd text-[#2e2c2d] capitalize mb-10 text-md flex items-center justify-center">
//           <span className="mr-2 text-sm">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               viewBox="0 0 20 20"
//               fill="#ACA188"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5L7 11h6l-2.133-3.5A1 1 0 0010 7z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </span>
//           Learn how to Customize Your Own Tour?
//         </p>

//         {/* Progress Bar Section */}
//         <div className="flex justify-around items-start relative  ">
//           {/* Connector line */}
//           {/* <div className="absolute top-8 left-[16.666%] right-[16.666%] h-px bg-gray-400 -z-10"></div> */}

//           {/* Mapping through steps */}
//           {steps.map((step) => (
//             <div
//               key={step.id}
//               className="w-1/3 text-center cursor-pointer group "
//               onMouseEnter={() => setHoveredStep(step.id)}
//               onMouseLeave={() => setHoveredStep(null)}
//             >
//               <h3 className=" hd text-[16px] font-semibold text-[#5c5e62] my-[40px]">
//                 {step.title}
//               </h3>
//               {/* This container has a fixed size */}
//               <div className="w-16 h-16 mx-auto mb-4 relative">
//                 {/* The inner circle scales on hover */}

//                 <div
//                   className={`
//                     absolute inset-0 mx-auto my-auto rounded-full flex items-center justify-center
//                     transition-all duration-300
//                     ${
//                       hoveredStep === step.id
//                         ? "w-16 h-16 bg-[#ACA188]"
//                         : "w-6 h-6 bg-[#ACA188]"
//                     }
//                   `}
//                 >
//                   <span
//                     className={`transition-all duration-300 ${
//                       hoveredStep === step.id ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     {step.icon}
//                   </span>
//                 </div>
//               </div>

//               <div>
//                 <p className=" hd text-center text-[#5c5e62] leading-relaxed mb-16 text-sm max-w-xs mx-auto">
//                   {step.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA Button */}
//         <div className="flex justify-center hd">
//           <Button >+12 9999 999 9999</Button>
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
    <div className="max-w-[1140px] mx-auto md:py-20 py-10 px-4">
      <div className="text-center">
        {/* Header */}
        <h2 className="hd text-xl md:text-[30px] mb-2 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
          READY TO START YOUR <br /> AFRICAN SAFARI?
        </h2>
        <p className="hd text-[#2e2c2d] capitalize mb-10 text-md flex  justify-center">
          <span className="mr-2 mt-[1px] text-sm">
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

        {/* Steps Section */}
        <div className="flex flex-col md:flex-row justify-around items-start relative">
          {steps.map((step) => (
            <div
              key={step.id}
              className="w-full md:w-1/3 text-center cursor-pointer group mb-10 md:mb-0"
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
            >
              <h3 className="hd text-[16px] font-semibold text-[#5c5e62] md:my-[40px] my-4">
                {step.title}
              </h3>

              {/* Circle animation */}
              <div className="w-16 h-16 mx-auto mb-4 relative">
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

              <p className="hd text-center text-[#5c5e62] leading-relaxed text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center hd mt-4 md:mt-8">
          <Button>+12 9999 999 9999</Button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
