// import React, { useEffect, useState } from "react";
// import { getProperties } from "../../api/propertyApi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Button from "../../components/Button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";

// export default function MemoriesSection() {
//   const [properties, setProperties] = useState([]);
//   const navigate = useNavigate();

//   const loadProperties = async () => {
//     const res = await getProperties();
//     setProperties(res.data);
//   };

//   useEffect(() => {
//     loadProperties();
//   }, []);

//   return (
//     <div className="max-w-[1140px] mx-auto py-10 sm:py-14 md:py-16 px-4 relative">
//       {/* Heading */}
//       <h2 className="hd text-center text-[20px] sm:text-[24px] md:text-[30px] mb-10 md:mb-14 font-semibold text-[#2e2c2d] tracking-[2px] md:tracking-[3px] uppercase leading-snug">
//         Memories won't make
//         <br className="hidden md:inline" /> themselves
//       </h2>

//       {/* Carousel */}
//       <div className="relative group">
//         <Swiper
//           modules={[Navigation, Autoplay, Pagination]}
//           spaceBetween={16}
//           slidesPerView={1}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           pagination={{
//             clickable: true,
//             dynamicBullets: true,
//           }}
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 24 },
//             1024: { slidesPerView: 3, spaceBetween: 32 },
//           }}
//           className="pb-0 sm:pb-4" // Add bottom padding for dots
//         >
//           {properties.map((property) => (
//             <SwiperSlide key={property._id}>
//               <div className="bg-white hd rounded-md shadow-md overflow-hidden mb-10 hover:shadow-lg transition-all duration-300">
//                 <Link to={`/properties/${property.slug}`}>
//                   <img
//                     src={property.bannerImage}
//                     alt={property.name}
//                     className="w-full h-[200px] object-cover"
//                   />
//                   <div className="p-4 sm:p-5 hd text-[#2e2c2d]">
//                     <p className="text-[#aca188] text-sm mb-2 capitalize">
//                       {property.address1}
//                     </p>
//                     <h3 className="text-lg sm:text-xl font-[500] capitalize mb-1 sm:mb-2">
//                       {property.name}
//                     </h3>
//                     {/* <p className="font-medium mb-2 text-sm sm:text-base">14 DAYS</p> */}

//                     {/* <p className="text-red-600 text-sm sm:text-base">
//                     <span className="text-[#5c5e62]">From</span>{" "}
//                     {property.priceperPerson} /P.P.
//                   </p> */}

// <p className=" hd mt-2  text-[12px] font-[500] uppercase text-sky-500 ">
//   {property.propertyType}
// </p>

//                     {property.quote && (
//                       <a
//                         href="#"
//                         className="text-orange-600 font-medium text-sm inline-block mt-2"
//                       >
//                         {property.quote} →
//                       </a>
//                     )}
//                   </div>
//                 </Link>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         <button className="custom-prev cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 md:-left-8 lg:-left-16 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-[#e1dfd7] transition opacity-0 group-hover:opacity-100">
//           <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
//         </button>

//         <button className="custom-next cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 md:-right-8 lg:-right-16 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-[#e1dfd7] transition opacity-0 group-hover:opacity-100">
//           <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
//         </button>
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-4 sm:mt-4 md:mt-6">
//         <Button
//           onClick={() => {
//             navigate("/properties");
//             window.scrollTo(0, 0);
//           }}
//         >
//           FIND THE PERFECT VILLA
//         </Button>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { getProperties } from "../../api/propertyApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { GiFamilyHouse } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function MemoriesSection() {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const loadProperties = async () => {
    const res = await getProperties();
    setProperties(res.data);
  };

  useEffect(() => {
    loadProperties();
  }, []);

  return (
    <div className="max-w-[1140px] mx-auto py-10 sm:py-14 md:py-16 px-4 relative">
      {/* Heading */}
      <h2 className="hd text-center text-[20px] sm:text-[24px] md:text-[30px] mb-6 font-semibold text-[#2e2c2d] tracking-[2px] md:tracking-[3px] uppercase leading-snug max-w-2xl mx-auto">
        Discover Your Perfect Luxury Home Away from Home
      </h2>
      <p className=" hd max-w-xl mx-auto md:text-center text-justify text-[#5c5e62]   md:mb-16 mb-0 ">
        Discover a carefully selected collection of unique accommodations in
        Victoria Falls, chosen for their comfort, character, and prime
        locations. Whether you are traveling as a couple, with family, or with
        friends, each property offers the perfect base to explore the wonders of
        Victoria Falls while enjoying personalized services and unforgettable
        experiences.
      </p>

      {/* Carousel */}
      <div className="relative ">
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
          }}
          className="pb-0  sm:pb-4" // Add bottom padding for dots
        >
          {properties.map((property) => (
            <SwiperSlide key={property._id}>
              <Link to={`/properties/${property.slug}`}>
                <div className="relative group overflow-hidden rounded-sm h-[480px]">
                  {/* Image */}
                  <img
                    src={property.bannerImage}
                    alt={property.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white ">
                    {/* Title */}
                    <h3 className=" hd text-lg sm:text-xl font-[500] capitalize mb-1 sm:mb-2">
                      {property.name}
                    </h3>

                    {/* Location */}
                    {/* <p className="hd  text-gray-200 mt-1">
                      <IoLocationSharp /> {property.address1}
                    </p> */}
                    <p className="hd flex items-center gap-2 text-sm text-gray-200 mt-1">
                      <IoLocationSharp className="" />
                      {property.address1}
                    </p>

                    {/* Property Type */}
                    <p className="hd flex items-center gap-2 text-sm text-gray-200 mt-1">
                      <GiFamilyHouse />
                      {property.propertyType}
                    </p>

                    {/* Price */}
                    <p className="hd flex items-center gap-1 text-sm text-gray-200 mt-1">
                      <MdOutlineAttachMoney className=" text-xl" />
                      {property.priceperPerson} per night
                    </p>
                  </div>

                  {/* Arrow Button */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full border border-white flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition">
                    →
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 md:-left-8 lg:-left-16 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-[#e1dfd7] transition opacity-100">
          <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>

        <button className="custom-next cursor-pointer absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 md:-right-8 lg:-right-16 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-[#e1dfd7] transition opacity-100">
          <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-4 sm:mt-4 md:mt-6">
        <Button
          onClick={() => {
            navigate("/properties");
            window.scrollTo(0, 0);
          }}
        >
          FIND THE PERFECT VILLA
        </Button>
      </div>
    </div>
  );
}
