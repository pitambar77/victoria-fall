
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
import Button from "../../../components/Button";

import { resturants } from "../../../data/resturants";
import { useParams } from "react-router-dom";


const ResturantsFacilities = () => {
  const [showAll, setShowAll] = useState(false);

    const { id } = useParams();
  const resturant = resturants.find((r) => r.id.toString() === id);
  
  console.log(resturant)

  if (!resturant) {
    return <div className="p-10 text-center">Resturant not found.</div>;
  }


  const facilities = [
    { icon: <FaTv className=" text-[#ab8c51]"/>, label: "Kitchen" },
    { icon: <FaTv className=" text-[#ab8c51]" />, label: "TV" },
    { icon: <FaBaby className=" text-[#ab8c51]" />, label: "Travel cot – available upon request" },
    { icon: <FaBlender className=" text-[#ab8c51]" />, label: "Fridge" },
    {
      icon: <FaTv className=" text-[#ab8c51]" />,
      label: "Carbon monoxide alarm",
      disabled: true,
    },
    { icon: <FaTv className=" text-[#ab8c51]" />, label: "Wifi" },
    { icon: <FaTv  className=" text-[#ab8c51]" />, label: "Washing machine" },
    { icon: <FaTv className=" text-[#ab8c51]" />, label: "Hair dryer" },
    { icon: <FaDog className=" text-[#ab8c51]" />, label: "Pets allowed" },
    {
      icon: <FaTv className=" text-[#ab8c51]" />,
      label: "Exterior security cameras on property",
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
          <p className="  tracking-[1px] text-[18px]  mb-6">
            In this untamed wilderness, you’ll be met with vibrant hospitality
            and a palpable passion for conservation.
          </p>

          {/* Check-in / Check-out */}
          <div className="flex items-center gap-8 mb-6">
            <div>
              <p className="text-sm uppercase font-[500] flex items-center gap-2">
                <FaClock className="text-[#aca188] " /> Check in
              </p>
              <p className="text-2xl font-semibold text-[#5c5e62]">14:00</p>
            </div>
            <div>
              <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> Check out
              </p>
              <p className="text-2xl font-semibold text-[#5c5e62]">11:00</p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6 text-[#5c5e62]">
            <p className="text-sm  uppercase font-[500] flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-[#aca188]" /> Address
            </p>
            <p className=" hd tracking-[1px]">
              BAOBH at QWABI Private Game Reserve <br />
              QWABI Private Game Reserve <br />
              Bela-Bela, Waterberg, Limpopo, South Africa, 0480
            </p>
          </div>

          {/* CTA & Price */}
          <div className="flex items-center gap-6">
            <Button className="px-6 py-3 bg-[#2e2c2d] text-white text-sm font-medium rounded hover:bg-black transition">
              BOOK NOW
            </Button>
           
          </div>
        </div>

        {/* Right Image */}
        <div>
          {/* <img
            src="https://www.jollyhols.co.uk/park-photos/BLAC/580/LP4350-011.jpg?id=02052024"
            alt="Property"
            className="w-full rounded-xl shadow-lg"
          /> */}
          <img
          src={resturant.image}
          alt={resturant.name}
          className="w-full rounded-md shadow-lg object-cover"
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
              className={`flex items-center gap-3 ${
                item.disabled ? "opacity-50 line-through" : ""
              }`}
            >
           
             <div className="flex items-center gap-3 font-[500]">
                <div className=" flex items-center justify-center w-12 h-12 rounded-full  bg-[#f9f4e8]   transition-all duration-300 hover:bg-gray-100">
                  {item.icon }
                  </div> 
                  <div>
                    {item.label}
                    </div>
                    
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResturantsFacilities;


