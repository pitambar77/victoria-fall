
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
// import {
//   MdKitchen,
//   MdLocalLaundryService,
//   MdHairDryer,
//   MdOutlineSecurityCamera,
//   MdOutlineNoPhotography,
// } from "react-icons/md";

const FacilitiesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const facilities = [
    { icon: <FaTv />, label: "Kitchen" },
    { icon: <FaTv />, label: "TV" },
    { icon: <FaBaby />, label: "Travel cot – available upon request" },
    { icon: <FaBlender />, label: "Fridge" },
    {
      icon: <FaTv />,
      label: "Carbon monoxide alarm",
      disabled: true,
    },
    { icon: <FaTv />, label: "Wifi" },
    { icon: <FaTv />, label: "Washing machine" },
    { icon: <FaTv />, label: "Hair dryer" },
    { icon: <FaDog />, label: "Pets allowed" },
    {
      icon: <FaTv />,
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
                <FaClock /> Check in
              </p>
              <p className="text-2xl font-semibold text-[#5c5e62]">14:00</p>
            </div>
            <div>
              <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                <FaClock /> Check out
              </p>
              <p className="text-2xl font-semibold text-[#5c5e62]">11:00</p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6 text-[#5c5e62]">
            <p className="text-sm  uppercase font-[500] flex items-center gap-2 mb-2">
              <FaMapMarkerAlt /> Address
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
            <p className=" hd text-[#5c5e62] text-md ">
              From <span className="text-red-600 font-semibold">US$2,959</span>
              /P.P.
            </p>
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
              className={`flex items-center gap-3 ${
                item.disabled ? "opacity-50 line-through" : ""
              }`}
            >
              {item.icon} {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesSection;


