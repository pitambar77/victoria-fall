// src/components/ConciergeServices.jsx
import React from "react";
import { FaSun, FaSpa, FaCocktail } from "react-icons/fa";
import { RxHome } from "react-icons/rx";
import { MdNordicWalking } from "react-icons/md";

import { LuUtensils } from "react-icons/lu";

import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";

const ConciergeServices = () => {

  const navigate = useNavigate();

  const services = [
    {
      title: "Make Yourself at Home",

      image:
        "https://m.ahstatic.com/is/image/accorhotels/met_p_a007-82:8by10?fmt=jpg&op_usm=1.75,0.3,2,0&resMode=sharp2&iccEmbed=true&icc=sRGB&dpr=on,1.5&wid=335&hei=418&qlt=80",
      icon: <RxHome />,
      url:'/properties'
    },
    {
      title: "Restaurants & Fine Dining",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/54/46/dd/restaurant-dining-space.jpg?w=600&h=600&s=1",
      icon: <LuUtensils />,
      url:'/restaurant'
    },
    {
      title: "Activities & Experiences",
      image:
        "https://www.roadaffair.com/wp-content/uploads/2018/09/paragliding-cape-town-south-africa-shutterstock_706168156.jpg",
      icon: <MdNordicWalking/>,
      url:'/victoria-falls-experiences'
    },
    {
      title: "Culture & Entertainment",
      image:
        "https://weguideafricansafaris.com/wp-content/uploads/2025/09/8-days-tanzania-mid-range-tours.jpg",
      icon: <FaCocktail />,
      url:'/luxury-concierge-services'
    },
    {
      title: "Beauty & Wellness",
      image:
        "https://www.go2africa.com/wp-content/uploads/2019/05/botswana-safari-spa-chobe-chilwero.jpg",
      icon: <FaSpa />,
      url:'/luxury-concierge-services'
    },
    {
      title: "Private Events",
      image:
        "https://natureresponsiblesafari-kenya.com/wp-content/uploads/2021/04/honeymoon-safari-1.jpg",
      icon: <FaSun />,
      url:'/luxury-concierge-services'
    },
  ];

  return (
    <section className="bg-[#f9f4e8] md:py-20 py-10">
      <div className="max-w-[1140px] mx-auto px-4  text-center">
        {/* Title */}
        <h2 className="hd text-center md:text-[30px] text-[20px] mb-10 font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
          Exclusive Concierge <br className="hidden md:inline" /> Services
        </h2>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-md overflow-hidden shadow-lg group h-[460px]"
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
              <Link to={`${service.url}`} onClick={() => window.scrollTo(0, 0)}  >
              <div className="absolute bottom-6 cursor-pointer right-6 left-6 bg-white bg-opacity-80 backdrop-blur-md rounded-md p-4 flex justify-between items-center shadow-md">
                <h3 className=" hd text-[16px]  text-[#2e2c2d] text-left">
                  {service.title}
                </h3>
                <span className="text-[#2e2c2d] text-md">{service.icon}</span>
              </div>
              </Link>
              
            </div>
          ))}
        </div>

        {/* Button */}
        <Button  onClick={()=>{
          navigate('/contact-us');
          // window.scrollTo({ top: 0, behavior: "smooth" })
          window.scrollTo(0,0)
         }}>Book Your Tailor-Made Services</Button>
      </div>
    </section>
  );
};

export default ConciergeServices;
