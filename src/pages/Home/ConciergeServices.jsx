// src/components/ConciergeServices.jsx
import React from "react";
import {
  FaUtensils,
  FaMapMarkedAlt,
  FaHome,
  FaSun,
  FaSpa,
  FaCocktail,
} from "react-icons/fa";
import Button from "../../components/Button";

const ConciergeServices = () => {
  const services = [
    {
      title: "Make Yourself at Home",
      image:
        "https://cdn.mahlatini.com/destinations/zimbabwe/victoria-falls/the-victoria-falls-hotel/_1280x900_crop_center-center_none/the-victoria-falls-hotel-presidential-suite-main-room-1280.jpg",
      icon: <FaHome />,
    },
    {
      title: "Restaurants & Fine Dining",
      image:
        "https://cdn.mahlatini.com/destinations/zimbabwe/victoria-falls/the-victoria-falls-hotel/_1280x900_crop_center-center_none/the-victoria-falls-hotel-presidential-suite-main-room-1280.jpg",
      icon: <FaUtensils />,
    },
    {
      title: "Activities & Experiences",
      image:
        "https://cdn.mahlatini.com/destinations/zimbabwe/victoria-falls/the-victoria-falls-hotel/_1280x900_crop_center-center_none/the-victoria-falls-hotel-presidential-suite-main-room-1280.jpg",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Culture & Entertainment",
      image:
        "https://cdn.mahlatini.com/destinations/zimbabwe/victoria-falls/the-victoria-falls-hotel/_1280x900_crop_center-center_none/the-victoria-falls-hotel-presidential-suite-main-room-1280.jpg",
      icon: <FaCocktail />,
    },
    {
      title: "Beauty & Wellness",
      image:
        "https://cdn.mahlatini.com/destinations/zimbabwe/victoria-falls/the-victoria-falls-hotel/_1280x900_crop_center-center_none/the-victoria-falls-hotel-presidential-suite-main-room-1280.jpg",
      icon: <FaSpa />,
    },
    {
      title: "Private Events",
      image:
        "https://cdn.mahlatini.com/destinations/zimbabwe/victoria-falls/the-victoria-falls-hotel/_1280x900_crop_center-center_none/the-victoria-falls-hotel-presidential-suite-main-room-1280.jpg",
      icon: <FaSun />,
    },
  ];

  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-light mb-20 text-gray-800">
          Exclusive Concierge Services
        </h2>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group h-96"
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

              {/* Content Box */}
              <div className="absolute bottom-6 right-6 left-6 bg-white bg-opacity-80 backdrop-blur-md rounded-lg p-4 flex justify-between items-center shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 text-left">
                  {service.title}
                </h3>
                <span className="text-gray-700 text-2xl">{service.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button>Book Your Tailor-Made Services</Button>
      </div>
    </section>
  );
};

export default ConciergeServices;
