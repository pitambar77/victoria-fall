// import React, { useEffect, useState } from "react";
// import { getProperties } from "../../api/propertyApi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Button from "../../components/Button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";



// export default function MemoriesSection() {

//   const [properties, setProperties] = useState([]);

//   const loadProperties = async () => {
//     const res = await getProperties();
//     setProperties(res.data);
//   };


//   useEffect(() => {
//     loadProperties();
//   }, []);

//   const navigate = useNavigate();

//   return (
//     <div className=" max-w-[1140px] mx-auto py-4  md:py-16 px-4 md:px-6 lg:px-0  relative">
//       {/* Heading */}
//       <h2 className=" hd text-center md:text-[30px] text-[20px] mb-14 font-semibold text-[#2e2c2d] tracking-[3px] uppercase ">
//         Memories won't make <br className="hidden md:inline" /> themselves
//       </h2>

//       {/* Carousel */}
//       <div className="relative">
//         <Swiper
//           modules={[Navigation, Pagination]}
//           spaceBetween={32}
//           slidesPerView={1}
//           navigation={{
//             nextEl: ".custom-next",
//             prevEl: ".custom-prev",
//           }}
//         //   pagination={{ clickable: true }}
//           breakpoints={{
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//         >
//           {properties.map((property) => (
//             <SwiperSlide key={property._id}>
//               <div className="bg-white rounded-md shadow-md overflow-hidden mb-10">
//                 <img
//                   src={property.bannerImage}
//                   alt={property.name}
//                   className="w-full h-[200px] object-cover"
//                 />
//                 <div className="p-4 hd text-[#2e2c2d]">
//                   <h3 className=" text-lg font-[500] capitalize mb-2">{property.name}</h3>
//                   <p className="text-[#aca188] text-sm mb-2 capitalize">{property.address1}</p>
//                   <p className="font-medium mb-2">{"14"} DAYS</p>
                
//                     <p className="text-red-600 ">
//                       <span className=" text-[#5c5e62]">From</span> {property.priceperPerson}{" "}
//                       /P.P.
//                     </p>
//                     {property.quote && (
//                       <a
//                         href="#"
//                         className=" text-orange-600 font-medium text-sm  inline-block"
//                       >
//                         {property.quote} →
//                       </a>
//                     )}
                
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Arrows (floating on left & right) */}
//         <button className="custom-prev absolute   top-1/2  md:-left-0 sm:-left-16 left-0 lg:-left-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300  shadow hover:bg-gray-50 transition">
//           <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
//         </button>

//         <button className="  custom-next absolute   top-1/2  sm:-right-0 right-0 lg:-right-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300  shadow hover:bg-gray-50 transition">
//           <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
//         </button>
//       </div>

//       {/* CTA Button */}
//       <div className="text-center md:mt-10 mt-0">
//         <Button
//          onClick={()=>{
//           navigate('/properties-landing');
//           // window.scrollTo({ top: 0, behavior: "smooth" })
//           window.scrollTo(0,0)
//          }}
//         >FIND THE PERFECT VILLA</Button>
//       </div>
//     </div>
//   );
// }






// import React, { useEffect, useState } from "react";
// import { getProperties } from "../../api/propertyApi";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import Button from "../../components/Button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";

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
//     <div className="max-w-[1140px] mx-auto py-10 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-0 relative">
//       {/* Heading */}
//       <h2 className="hd text-center text-[20px] sm:text-[24px] md:text-[30px] mb-10 md:mb-14 font-semibold text-[#2e2c2d] tracking-[2px] md:tracking-[3px] uppercase leading-snug">
//         Memories won't make
//         <br className="hidden md:inline" /> themselves
//       </h2>

//       {/* Carousel */}
//       <div className="relative group">
//         <Swiper
//           modules={[Navigation, Autoplay]}
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
          
//           breakpoints={{
//             640: { slidesPerView: 1, spaceBetween: 20 },
//             768: { slidesPerView: 2, spaceBetween: 24 },
//             1024: { slidesPerView: 3, spaceBetween: 32 },
            
//           }}
//         >
//           {properties.map((property) => (
//             <SwiperSlide key={property._id}>
//               <div className="bg-white hd rounded-md shadow-md overflow-hidden mb-10 hover:shadow-lg transition-all duration-300">
//                 <img
//                   src={property.bannerImage}
//                   alt={property.name}
//                   className="w-full h-[200px]  object-cover"
//                 />
//                 <div className="p-4 sm:p-5 hd text-[#2e2c2d]">
//                   <h3 className="text-lg sm:text-xl font-[500] capitalize mb-1 sm:mb-2">
//                     {property.name}
//                   </h3>
//                   <p className="text-[#aca188] text-sm mb-2 capitalize">
//                     {property.address1}
//                   </p>
//                   <p className="font-medium mb-2 text-sm sm:text-base">14 DAYS</p>

//                   <p className="text-red-600 text-sm sm:text-base">
//                     <span className="text-[#5c5e62]">From</span>{" "}
//                     {property.priceperPerson} /P.P.
//                   </p>

//                   {property.quote && (
//                     <a
//                       href="#"
//                       className="text-orange-600 font-medium text-sm inline-block mt-2"
//                     >
//                       {property.quote} →
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Custom Navigation Buttons */}
//         <button className="custom-prev absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 md:-left-8 lg:-left-16 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
//           <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
//         </button>

//         <button className="custom-next absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 md:-right-8 lg:-right-16 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
//           <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
//         </button>
//       </div>

//       {/* CTA Button */}
//       <div className="text-center mt-6 sm:mt-8 md:mt-10">
//         <Button
//           onClick={() => {
//             navigate("/properties-landing");
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
      <h2 className="hd text-center text-[20px] sm:text-[24px] md:text-[30px] mb-10 md:mb-14 font-semibold text-[#2e2c2d] tracking-[2px] md:tracking-[3px] uppercase leading-snug">
        Memories won't make
        <br className="hidden md:inline" /> themselves
      </h2>

      {/* Carousel */}
      <div className="relative group">
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
          className="pb-0 sm:pb-4" // Add bottom padding for dots
        >
          {properties.map((property) => (
            <SwiperSlide key={property._id}>
              <div className="bg-white hd rounded-md shadow-md overflow-hidden mb-10 hover:shadow-lg transition-all duration-300">
                <Link to={`/${property._id}`}>
                <img
                  src={property.bannerImage}
                  alt={property.name}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 sm:p-5 hd text-[#2e2c2d]">
                  <h3 className="text-lg sm:text-xl font-[500] capitalize mb-1 sm:mb-2">
                    {property.name}
                  </h3>
                  <p className="text-[#aca188] text-sm mb-2 capitalize">
                    {property.address1}
                  </p>
                  <p className="font-medium mb-2 text-sm sm:text-base">14 DAYS</p>

                  <p className="text-red-600 text-sm sm:text-base">
                    <span className="text-[#5c5e62]">From</span>{" "}
                    {property.priceperPerson} /P.P.
                  </p>

                  {property.quote && (
                    <a
                      href="#"
                      className="text-orange-600 font-medium text-sm inline-block mt-2"
                    >
                      {property.quote} →
                    </a>
                  )}
                </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 md:-left-8 lg:-left-16 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
          <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>

        <button className="custom-next absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 md:-right-8 lg:-right-16 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
          <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-4 sm:mt-4 md:mt-6">
        <Button
          onClick={() => {
            navigate("/properties-landing");
            window.scrollTo(0, 0);
          }}
        >
          FIND THE PERFECT VILLA
        </Button>
      </div>
    </div>
  );
}


