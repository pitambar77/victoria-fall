import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
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
import PropertiesBookingForm from "../../components/PropertiesBookingForm";
import { IoIosClose } from "react-icons/io";

const FacilitiesSection = () => {
  //backend start

  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios
      .get(`http://victoria-fall-backend.manoramaseoservice.com/api/properties/${id}`)
      .then((res) => setRestaurant(res.data))
      .catch(console.error);
  }, [id]);

  if (!restaurant) return <p className="p-6">Loading...</p>;

  //backend end

  // const [showAll, setShowAll] = useState(false);

  //   const { id } = useParams();
  // const resort = resorts.find((r) => r.id.toString() === id);

  // if (!resort) {
  //   return <div className="p-10 text-center">Resort not found.</div>;
  // }

  // const facilities = [
  //   { icon: <FaTv className=" text-[#ab8c51]"/>, label: "Kitchen" },
  //   { icon: <FaTv className=" text-[#ab8c51]" />, label: "TV" },
  //   { icon: <FaBaby className=" text-[#ab8c51]" />, label: "Travel cot – available upon request" },
  //   { icon: <FaBlender className=" text-[#ab8c51]" />, label: "Fridge" },
  //   {
  //     icon: <FaTv className=" text-[#ab8c51]" />,
  //     label: "Carbon monoxide alarm",
  //     disabled: true,
  //   },
  //   { icon: <FaTv className=" text-[#ab8c51]" />, label: "Wifi" },
  //   { icon: <FaTv  className=" text-[#ab8c51]" />, label: "Washing machine" },
  //   { icon: <FaTv className=" text-[#ab8c51]" />, label: "Hair dryer" },
  //   { icon: <FaDog className=" text-[#ab8c51]" />, label: "Pets allowed" },
  //   {
  //     icon: <FaTv className=" text-[#ab8c51]" />,
  //     label: "Exterior security cameras on property",
  //   },
  // ];

  const facilities = restaurant.facilities;

  // Limit to first 6 if not expanded
  const visibleFacilities = showAll ? facilities : facilities.slice(0, 6);

  return (
    <div className="  bg-[#f9f9f9] py-10 md:py-20  ">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-[1140px] mx-auto px-4">
        {/* Left Content */}
        <div className=" hd text-[#5c5e62] ">
          <p className="  tracking-[1px] text-[18px]  mb-6">
            {restaurant.subDescription}
          </p>

          {/* Check-in / Check-out */}
          <div className="flex items-center gap-8 mb-6">
            <div>
              <p className="text-sm uppercase font-[500] flex items-center gap-2">
                <FaClock className="text-[#aca188] " /> Check in
              </p>
              <p className="text-lg font-semibold text-[#5c5e62]">
                {restaurant.checkIn}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                <FaClock className="text-[#aca188]" /> Check out
              </p>
              <p className="text-lg font-semibold text-[#5c5e62]">
                {restaurant.checkOut}
              </p>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6 text-[#5c5e62]">
            <p className="text-sm  uppercase font-[500] flex items-center gap-2 mb-2">
              <FaMapMarkerAlt className="text-[#aca188]" /> Address
            </p>
            <p className=" hd capitalize tracking-[1px]">
              {restaurant.address1} <br />
              {restaurant.address2}
            </p>
          </div>

          {/* CTA & Price */}
          <div className="flex items-center gap-6">
            <Button
              onClick={() => setShowForm(true)}
              className="px-6 py-3 bg-[#2e2c2d] text-white text-sm font-medium rounded hover:bg-black transition"
            >
              BOOK NOW
            </Button>
            <p className=" hd text-[#5c5e62] text-md ">
              From{" "}
              <span className="text-[#f25922] font-semibold">
                {restaurant.priceperPerson}
              </span>
              /P.P.
            </p>
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
            src={restaurant.overviewImage}
            alt={restaurant.name}
            className="w-full rounded-md shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Divider */}
      {/* <div className="border-t mt-12 mb-8"></div> */}

      {/* Services and Facilities */}
      <div className="mt-12 mb-2 md:mb-8 max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="flex items-center  ">
            <span className=" hidden md:block w-30 h-[1px] bg-[#2e2c2d] mr-6"></span>
            <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase">
              Services and Facilities
            </h2>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => setShowAll(!showAll)}
              className=" hd text-sm uppercase tracking-wide text-[#2e2c2d]  hover:underline cursor-pointer"
            >
              {showAll ? "View Less ↑" : "View All →"}
            </button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4  md:gap-6 hd text-[18px] text-[#2e2c2d] ">
          {visibleFacilities.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 ${
                item.disabled ? "opacity-50 line-through" : ""
              }`}
            >
              <div className="flex items-center gap-3 font-[500]">
                <div className=" flex items-center justify-center w-12 h-12 rounded-full  bg-[#f9f4e8]   transition-all duration-300 hover:bg-gray-100">
                  <img src={item.icon} alt="" />
                </div>
                <div>{item.facilityName}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Mobile button below gallery */}
              <div className="md:hidden mt-10 text-center">
                 <Button
              onClick={() => setShowAll(!showAll)}
              className=" hd text-sm uppercase tracking-wide text-[#2e2c2d]  hover:underline cursor-pointer"
            >
              {showAll ? "View Less ↑" : "View All →"}
            </Button>
              </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0  z-[9999] flex items-center justify-center bg-black/80 hd p-6 md:p-10">
          <div className="relative w-full md:w-[80%] max-w-[1140px] mx-auto bg-white  rounded-md animate-slide-down-fade p-6 md:p-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowForm(false)}
              className="absolute cursor-pointer top-0  md:top-2 right-0 md:right-2  text-[#2e2c2d] hover:text-[#c40]  font-[500] text-[32px]  transform duration-500 w-10 h-10 flex items-center justify-center "
            >
              {/* × */}
              <IoIosClose />
            </button>
            <div className=" text-center mb-4 rounded-t-lg">
              <h3 className="hd text-xl md:text-[24px] font-[500] text-[#2e2c2d] capitalize mt-1">
                {restaurant.name}
              </h3>
              <div className="border-t mt-4  border-[#aca188] w-full mx-auto " />
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 ">
              <div className=" ">
                <img
                  src={restaurant.bannerImage}
                  alt={restaurant.name}
                  className="w-[600px] h-[200px] md:h-[400px] rounded-md shadow-lg object-cover"
                />
                <div className="flex items-center gap-8 mb-6 mt-4">
                  <div className=" flex">
                    <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                      <FaClock className="text-[#aca188] " /> Check in :
                    </p>
                    <p className="text-sm font-semibold text-[#5c5e62]">
                      {restaurant.checkIn}{" "}
                    </p>
                  </div>
                  <div className=" flex ">
                    <p className="text-sm uppercase font-[500] text-[#5c5e62] flex items-center gap-2">
                      <FaClock className="text-[#aca188]" /> Check out :
                    </p>
                    <p className="text-sm font-semibold text-[#5c5e62]">
                      {restaurant.checkOut}{" "}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className=" mb-0 md:mb-6 text-[#5c5e62]">
                  <p className="text-sm  uppercase font-[500] flex items-center gap-2 mb-2">
                    <FaMapMarkerAlt className="text-[#aca188]" /> Address
                  </p>
                  <p className=" hd capitalize tracking-[1px]">
                    {restaurant.address1} <br />
                    {restaurant.address2}
                  </p>
                </div>
              </div>
              <div>
                <PropertiesBookingForm propertyName={restaurant.name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilitiesSection;
