// import React from "react";

// const CultureEntertainment = () => {
//   const items = [
//     {
//       title: "Art Gallery Tours",
//       description:
//         "We will introduce you to our favourite local artists and artisans. You might even want to take home one of their pieces, such as this superb wire sculpture by Marie Bossée.Each village hosts small workshops where visitors are invited to meet the artists at work. The larger art galleries exhibit their art pieces all year round.",
//       img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Find-Art.jpeg",
//     },
//     {
//       title: "Music & Theatre Events",
//       description:
//         "Throughout the year, Provence welcomes a number of much-anticipated cultural events. The Festival d’Avignon is one of them, which takes place for the most part in the fabulous Cour d’Honneur of the Palais des Papes.You can ask The Luberon Concierge to book your tickets and organise your night out.",
//       img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Show-time.jpg",
//     },
//     {
//       title: "Cultural Heritage Walks",
//       description:
//         "Provence is a worldwide reference for antiques. All year round, antique dealers, flea markets and garage sales attract visitors searching for a piece of furniture or simply happy to browse.The Luberon Concierge can take you antique hunting in large or small groups, in search of the hidden treasures of the Luberon.",
//       img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
//     },
//   ];

//   return (
//     <section id="culture-entertainment" className=" py-10 md:py-20 bg-white ">
//       <div className="max-w-[1140px] mx-auto px-4 ">
//         <h2 className=" hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px]  mb-10 text-center uppercase">
//           Culture & Entertainment
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {items.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-[#f9f9f7] rounded-md shadow-sm overflow-hidden group"
//             >
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="w-full  h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="p-6">
//                 <h3 className=" hd text-lg font-[500] text-[#7a6b57] mb-4 text-center">
//                   {item.title}
//                 </h3>
//                 <p className="hd text-[#5c5e62]  text-sm">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CultureEntertainment;






// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// export default function CultureEntertainment() {
//   const items = [
//     {
//       title: "Art Gallery Tours",
//       description:
//         "We will introduce you to our favourite local artists and artisans. You might even want to take home one of their pieces, such as this superb wire sculpture by Marie Bossée. Each village hosts small workshops where visitors are invited to meet the artists at work. The larger art galleries exhibit their art pieces all year round.",
//       img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Find-Art.jpeg",
//     },
//     {
//       title: "Music & Theatre Events",
//       description:
//         "Throughout the year, Provence welcomes a number of much-anticipated cultural events. The Festival d’Avignon is one of them, which takes place for the most part in the fabulous Cour d’Honneur of the Palais des Papes. You can ask The Luberon Concierge to book your tickets and organise your night out.",
//       img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Show-time.jpg",
//     },
//     {
//       title: "Cultural Heritage Walks",
//       description:
//         "Provence is a worldwide reference for antiques. All year round, antique dealers, flea markets and garage sales attract visitors searching for a piece of furniture or simply happy to browse. The Luberon Concierge can take you antique hunting in large or small groups, in search of the hidden treasures of the Luberon.",
//       img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
//     },
//   ];

//   return (
//     <section id="culture-entertainment" className="py-10 md:py-20 bg-white">
//       <div className="max-w-[1140px] mx-auto px-4 relative">
//         {/* Heading */}
//         <h2 className="hd text-center text-[20px] sm:text-[24px] md:text-[30px] mb-10 md:mb-14 font-semibold text-[#2e2c2d] tracking-[2px] md:tracking-[3px] uppercase leading-snug">
//           Culture & Entertainment
//         </h2>

//         {/* Slider */}
//         <div className="relative group">
//           <Swiper
//             modules={[Navigation, Autoplay, Pagination]}
//             spaceBetween={16}
//             slidesPerView={1}
//             navigation={{
//               nextEl: ".custom-next",
//               prevEl: ".custom-prev",
//             }}
//             pagination={{
//               clickable: true,
//               dynamicBullets: true,
//             }}
//             autoplay={{
//               delay: 3000,
//               disableOnInteraction: false,
//               pauseOnMouseEnter: true,
//             }}
//             breakpoints={{
//               640: { slidesPerView: 1, spaceBetween: 20 },
//               768: { slidesPerView: 2, spaceBetween: 24 },
//               1024: { slidesPerView: 3, spaceBetween: 32 },
//             }}
//             className="pb-10"
//           >
//             {items.map((item, i) => (
//               <SwiperSlide key={i}>
//                 <div className="bg-[#f9f9f7] hd rounded-md shadow-md overflow-hidden mb-10 hover:shadow-lg transition-all duration-300">
//                   <img
//                     src={item.img}
//                     alt={item.title}
//                     className="w-full h-[240px] sm:h-[260px] object-cover"
//                   />
//                   <div className="p-5 text-[#2e2c2d]">
//                     <h3 className="text-lg sm:text-xl font-[500] text-[#7a6b57] mb-3 text-center">
//                       {item.title}
//                     </h3>
//                     <p className="text-[#5c5e62] text-sm text-center">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Custom Navigation Arrows */}
//           <button className="custom-prev absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 md:-left-8 lg:-left-14 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
//             <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
//           </button>

//           <button className="custom-next absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 md:-right-8 lg:-right-14 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
//             <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CultureEntertainment = () => {
  const items = [
    {
      title: "Art Gallery Tours",
      description:
        "We will introduce you to our favourite local artists and artisans. You might even want to take home one of their pieces, such as this superb wire sculpture by Marie Bossée. Each village hosts small workshops where visitors are invited to meet the artists at work. The larger art galleries exhibit their art pieces all year round.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Find-Art.jpeg",
    },
    {
      title: "Music & Theatre Events",
      description:
        "Throughout the year, Provence welcomes a number of much-anticipated cultural events. The Festival d’Avignon is one of them, which takes place for the most part in the fabulous Cour d’Honneur of the Palais des Papes. You can ask The Luberon Concierge to book your tickets and organise your night out.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Show-time.jpg",
    },
    {
      title: "Cultural Heritage Walks",
      description:
        "Provence is a worldwide reference for antiques. All year round, antique dealers, flea markets and garage sales attract visitors searching for a piece of furniture or simply happy to browse. The Luberon Concierge can take you antique hunting in large or small groups, in search of the hidden treasures of the Luberon.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    },
  ];

  return (
    <section id="culture-entertainment" className="py-10 md:py-20 bg-white">
      <div className="max-w-[1140px] mx-auto px-4 relative">
        {/* Heading */}
        <h2 className="hd text-center text-[20px] sm:text-[24px] md:text-[30px] mb-10 md:mb-14 font-semibold text-[#2e2c2d] tracking-[2px] md:tracking-[3px] uppercase leading-snug">
          Culture & Entertainment
        </h2>

        {/* --- Mobile/Tablet Swiper --- */}
        <div className="block lg:hidden relative group">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="pb-10"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#f9f9f7] hd rounded-md shadow-md overflow-hidden mb-10 hover:shadow-lg transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[240px] sm:h-[260px] object-cover"
                  />
                  <div className="p-5 text-[#2e2c2d]">
                    <h3 className="text-lg sm:text-xl font-[500] text-[#7a6b57] mb-3 text-center">
                      {item.title}
                    </h3>
                    <p className="text-[#5c5e62] text-sm text-justify ">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <button className="custom-prev absolute z-10 top-1/2 -translate-y-1/2 left-1 sm:left-2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
            <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
          </button>

          <button className="custom-next absolute z-10 top-1/2 -translate-y-1/2 right-1 sm:right-2 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full border border-gray-300 bg-white/80 shadow hover:bg-gray-100 transition opacity-0 group-hover:opacity-100">
            <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
          </button>
        </div>

        {/* --- Desktop Grid --- */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f9f9f7] rounded-md shadow-sm overflow-hidden group"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="hd text-lg font-[500] text-[#7a6b57] mb-4 text-center">
                  {item.title}
                </h3>
                <p className="hd text-[#5c5e62] text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureEntertainment;
