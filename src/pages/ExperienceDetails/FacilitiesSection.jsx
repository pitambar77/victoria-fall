import { useState } from "react";
import {
  FaClock,
  FaMapMarkerAlt,
  FaWifi,
  FaTv,
  FaBaby,
  FaDog,
  FaBlender,
} from "react-icons/fa";
import Button from "../../components/Button";

const FacilitiesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const facilities = [
    {
      icon: <FaTv className=" text-[#ab8c51]" />,
      label: "Free cancellation",
      description: "Cancel up to 24 hours in advance for a full refund",
    },
    {
      icon: <FaTv  className=" text-[#ab8c51]"/>,
      label: "Pickup included",
      description:
        "You can be picked up from your accommodation in Victoria Falls Town.",
    },
    {
      icon: <FaBaby  className=" text-[#ab8c51]"/>,
      label: "Duration 2 hours",
      description: "You can be picked up from your",
    },
    {
      icon: <FaBlender className=" text-[#ab8c51]" />,
      label: "Small group",
      description: "Cancel up to 24 hours in advance for a full refund",
    },
    {
      icon: <FaTv className=" text-[#ab8c51]" />,
      label: "Carbon monoxide alarm",
      description: "Cancel up to 24 hours in advance for a full refund",
      disabled: true,
    },
    {
      icon: <FaTv className=" text-[#ab8c51]" />,
      label: "Free cancellation",
      description: "Cancel up to 24 hours in advance for a full refund",
    },
    {
      icon: <FaTv className=" text-[#ab8c51]" />,
      label: "Pickup included",
      description:
        "You can be picked up from your accommodation in Victoria Falls Town.",
    },
    {
      icon: <FaBaby className=" text-[#ab8c51]" />,
      label: "Duration 2 hours",
      description: "You can be picked up from your",
    },
    {
      icon: <FaBlender className=" text-[#ab8c51]" />,
      label: "Small group",
      description: "Cancel up to 24 hours in advance for a full refund",
    },
  ];

  // Limit to first 6 if not expanded
  const visibleFacilities = showAll ? facilities : facilities.slice(0, 6);

  return (
    <div className="  bg-[#f9f9f9] py-20 ">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-[1140px] mx-auto">
        {/* Left Content */}
        <div className=" hd text-[#5c5e62] ">
          <h2 className=" hd text-[30px]  font-semibold text-[#2e2c2d] tracking-[2px] mb-6 uppercase">
            Private sunset cruise on the zimbezi river
          </h2>
          <p className="  tracking-[1px] text-[18px]  mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi
            architecto ullam sapiente, dolorum porro blanditiis aliquam nulla
            aut eaque fugit iure aperiam incidunt!
          </p>

          {/* Check-in / Check-out */}
          <div className="flex items-center  justify-between mb-6">
            <div className=" w-[50%]">
              <p className="  flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> $ 170 per person
              </p>
            </div>
            <div className=" w-[50%]">
              <p className=" text-[#5c5e62] text-left border-l border-[#5c5e62]/50 pl-5 flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> 07.00 daily
              </p>
            </div>
          </div>
          <div className="flex items-center  justify-between mb-10">
            <div className=" w-[50%]">
              <p className="  flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> 11 hours
              </p>
            </div>
            <div className=" w-[50%]">
              <p className=" text-[#5c5e62] text-left border-l border-[#5c5e62]/50 pl-5 flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> Min pax:2
              </p>
            </div>
          </div>

          {/* CTA & Price */}
          <div className="flex items-center gap-6">
            <Button className="px-6 py-3 bg-[#2e2c2d] text-white text-sm font-medium rounded hover:bg-black transition">
              send enquiry
            </Button>
            <Button className="px-6 py-3 bg-[#2e2c2d] text-white text-sm font-medium rounded hover:bg-black transition">
              BOOK ONLINe
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div>
          <img
            src="https://www.jollyhols.co.uk/park-photos/BLAC/580/LP4350-011.jpg?id=02052024"
            alt="Property"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Divider */}
      {/* <div className="border-t mt-12 mb-8"></div> */}

      {/* Services and Facilities */}
      <div className="mt-12 mb-8 max-w-[1140px] mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center  ">
            <span className="w-30 h-[1px] bg-[#2e2c2d] mr-6"></span>
            <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase">
              Services and Facilities
            </h2>
          </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className=" hd text-sm uppercase tracking-wide text-[#2e2c2d]  hover:underline cursor-pointer"
          >
            {showAll ? "View Less ↑" : "View All →"}
          </button>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3  gap-6 hd text-[18px] text-[#2e2c2d] ">
          {visibleFacilities.map((item, index) => (
            <div
              key={index}
              className={` ${item.disabled ? "opacity-50 line-through" : ""}`}
            >
              <div className="flex items-center gap-3 font-[500]">
                <div className=" flex items-center justify-center w-12 h-12 rounded-full  bg-[#f9f4e8]   transition-all duration-300 hover:bg-gray-100">
                  {item.icon }
                  </div> 
                  <div>
                    {item.label}
                    </div>
                    
              </div>
         <p className=" pl-14 text-sm">{item.description}</p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;
