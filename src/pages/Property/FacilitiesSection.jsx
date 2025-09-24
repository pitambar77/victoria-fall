
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
    <div className="bg-[#f9f9f9] py-20 px-[12%]">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <div>
          <p className="text-gray-700 text-lg mb-6">
            In this untamed wilderness, you’ll be met with vibrant hospitality
            and a palpable passion for conservation.
          </p>

          {/* Check-in / Check-out */}
          <div className="flex items-center gap-8 mb-6">
            <div>
              <p className="text-sm uppercase text-gray-500 flex items-center gap-2">
                <FaClock /> Check in
              </p>
              <p className="text-2xl font-semibold text-gray-800">14:00</p>
            </div>
            <div>
              <p className="text-sm uppercase text-gray-500 flex items-center gap-2">
                <FaClock /> Check out
              </p>
              <p className="text-2xl font-semibold text-gray-800">11:00</p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 uppercase flex items-center gap-2">
              <FaMapMarkerAlt /> Address
            </p>
            <p className="text-gray-700 leading-relaxed">
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
            <p className="text-gray-700 text-lg">
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
      <div className="mt-12 mb-8">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center  ">
        <span className="w-30 h-[1px] bg-[#2e2c2d] mr-6"></span>
        <h2 className="text-xl font-semibold text-[#2e2c2d] tracking-wide uppercase">
          Services and Facilities
        </h2>
      
      </div>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm uppercase tracking-wide text-gray-600 hover:underline cursor-pointer"
          >
            {showAll ? "View Less ↑" : "View All →"}
          </button>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-700">
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


