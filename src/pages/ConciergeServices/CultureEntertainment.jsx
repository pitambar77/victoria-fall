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
      title: "Boma Dinner & Drum Show",
      description:
        "A lively night of drums, dancers, bold flavours, and joyful chaos. You eat, you listen, you join the rhythm. Somehow, the evening turns into a memory that feels louder, warmer, and far more personal than expected.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Find-Art.jpeg",
    },
    {
      title: "Traditional Dance Performances",
      description:
        "Colourful costumes, deep drumbeats, and dancers who move with stories older than the town itself. Watching these performances feels like being invited briefly into someone’s heritage—gentle, expressive, and full of honest cultural pride.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Show-time.jpg",
    },
    {
      title: "Simunye Theatre",
      description:
        "In an intimate open-air theatre, puppets, dancers, and music breathe life into Bomani’s journey home. The show feels tender and powerful, reminding you how storytelling can stir something quiet and important inside you.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    },
    {
      title: "Elephant Hills Cultural Show",
      description:
        "Traditional rhythms echo across the resort grounds as performers share dances and instruments passed down through generations. It’s an easy, relaxed way to meet Zimbabwean culture without filters—simple, heartfelt, and surprisingly moving.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    },

    {
      title: "Live Music Performances",
      description:
        "Guitars, drums, soft vocals—live music spills into warm evenings around town. Some nights feel calm, others turn lively, and every performance carries a little spark of Zimbabwe’s spirit that lingers long after the last note.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    },
    {
      title: "Heritage & Cultural Tours",
      description:
        "A deeper look into everyday traditions—ceremonies, dances, stories shared with gentle candor. These tours offer more than observation; they create small moments of connection that stay with you long after the journey ends.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    },
     {
      title: "Spirit of Africa Cultural Show",
      description:
        "At Victoria Falls Hotel, dancers and drummers fill the night with rhythm and story. The show moves gracefully between intensity and softness, giving you a glimpse into a culture carried proudly through generations.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    },
     {
      title: "Community Storytelling Evenings",
      description:
        "A small fire, a quiet circle, and stories passed down through families. Some are funny, some are wise, some are unexpectedly emotional. You listen, feeling time slow down as people share pieces of their lived history.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Antiques-1.jpg",
    },
     {
      title: "Local Art & Craft Showcases",
      description:
        "Artists gather with beadwork, carvings, paintings, and quiet pride. Watching them demonstrate their craft feels intimate—hands shaping memory into something tangible. You leave appreciating how much culture can be held in one handmade piece.",
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
