// src/components/ExperiencesSection.jsx
import React from "react";
import { CiHeart } from "react-icons/ci"; // For the heart icon

const ExperiencesSection = () => {
  const experiences = [
    {
      id: 1,
      image:
        "https://www.johansens.com/wp-content/uploads/2019/10/Zimbabwe-Victoria-Falls-River-Lodge-94.jpg", // Placeholder image
      category: "Nature & Wildlife",
      title: "Finding Wonder in the Waters of the Okavango Delta",
      price: "234$",
      provider: "By Where To Africa",
    },
    {
      id: 2,
      image:
        "https://www.johansens.com/wp-content/uploads/2019/10/Zimbabwe-Victoria-Falls-River-Lodge-94.jpg", // Placeholder image
      category: "Nature & Wildlife",
      title: "Finding Wonder in the Waters of the Okavango Delta",
      price: "234$",
      provider: "By Where To Africa",
    },
    {
      id: 3,
      image:
        "https://www.johansens.com/wp-content/uploads/2019/10/Zimbabwe-Victoria-Falls-River-Lodge-94.jpg", // Placeholder image
      category: "Nature & Wildlife",
      title: "Finding Wonder in the Waters of the Okavango Delta",
      price: "234$",
      provider: "By Where To Africa",
    },
    // You can add more experience cards here if needed
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-[1140px] mx-auto hd text-[#2e2c2d] text-center">
        {/* Title */}
        <h2 className="hd text-center text-[30px] mb-10 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
          Experiences in Victoria <br className="hidden md:inline" /> Falls
        </h2>

        {/* Grid of Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="bg-white rounded-md shadow-md overflow-hidden border border-gray-200"
            >
              {/* Image Section */}
              <div className="relative h-64">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                {/* Heart Icon */}
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md text-gray-700 hover:text-red-500 transition-colors">
                  <CiHeart />
                </button>
              </div>

              {/* Card Content */}
              <div className="  text-left">
                <div className=" p-6">
                  <span className=" p-5 hd inline-block bg-[#f9f4e8] text-[#2e2c2d] text-xs  px-3 py-2 rounded-full mb-3">
                    {experience.category}
                  </span>
                </div>

                <h3 className=" px-6  text-md font-semibold text-[#2e2c2d] mb-4 leading-[1.5]">
                  {experience.title}
                </h3>
                <div className="flex text-gray-500 text-sm border-t border-gray-200">
                  <span className="  p-6  text-[#2e2c2d] border-r border-gray-200">
                    {experience.price} PP
                  </span>
                  <span className=" p-6 text-[#2e2c2d] text-left">{experience.provider}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesSection;
