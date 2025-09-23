// // import React from "react";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Navigation, Pagination } from "swiper/modules";
// // import "swiper/css";
// // import "swiper/css/navigation";
// // import "swiper/css/pagination";
// // import Button from "../../components/Button";

// // const cards = [
// //   {
// //     id: 1,
// //     title: "Future Found Sanctuary",
// //     location: "South Africa, Cape Town",
// //     days: "7 DAYS",
// //     price: "US$2,935",
// //     img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
// //     quote: "Request a Quote"
// //   },
// //   {
// //     id: 2,
// //     title: "Geiger’s Camp",
// //     location: "South Africa, Greater Kruger Park",
// //     days: "12 DAYS",
// //     price: "US$8,485",
// //     img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
// //     quote: null
// //   },
// //   {
// //     id: 3,
// //     title: "Victoria & Alfred Hotel",
// //     location: "South Africa, Cape Town",
// //     days: "13 DAYS",
// //     price: "US$6,599",
// //     img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
// //     quote: null
// //   },
// //   {
// //     id: 4,
// //     title: "Luxury Safari Lodge",
// //     location: "South Africa, Kruger Park",
// //     days: "10 DAYS",
// //     price: "US$7,250",
// //     img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
// //     quote: null
// //   },
// //   {
// //     id: 5,
// //     title: "Luxury Safari Lodge",
// //     location: "South Africa, Kruger Park",
// //     days: "10 DAYS",
// //     price: "US$7,250",
// //     img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
// //     quote: null
// //   },
// //   {
// //     id: 6,
// //     title: "Luxury Safari Lodge",
// //     location: "South Africa, Kruger Park",
// //     days: "10 DAYS",
// //     price: "US$7,250",
// //     img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
// //     quote: null
// //   },
// // ];

// // export default function MemoriesSection() {
// //   return (
// //     <div className="px-[10%] py-12">
// //       {/* Heading */}
// //       <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800 mb-10">
// //         Memories won't make themselves.
// //       </h2>

// //       {/* Carousel */}
// //       <Swiper
// //         modules={[Navigation, Pagination]}
// //         spaceBetween={20}
// //         slidesPerView={1}
// //         navigation
// //         pagination={{ clickable: true }}
// //         breakpoints={{
// //           768: { slidesPerView: 2 },
// //           1024: { slidesPerView: 3 },
// //         }}
// //       >
// //         {cards.map((card) => (
// //           <SwiperSlide key={card.id}>
// //             <div className="bg-white rounded-xl shadow-md overflow-hidden">
// //               <img
// //                 src={card.img}
// //                 alt={card.title}
// //                 className="w-full h-56 object-cover"
// //               />
// //               <div className="p-4">
// //                 <h3 className="text-lg font-semibold">{card.title}</h3>
// //                 <p className="text-gray-500 text-sm mb-3">{card.location}</p>
// //                 <p className="font-medium">{card.days}</p>
// //                 <p className="text-red-600 font-semibold">{card.price} /P.P.</p>
// //                 {card.quote && (
// //                   <a
// //                     href="#"
// //                     className="text-sm text-orange-600 font-medium mt-2 inline-block"
// //                   >
// //                     {card.quote} →
// //                   </a>
// //                 )}
// //               </div>
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>

// //       {/* Button */}
// //       <div className="text-center mt-10">
// //         <Button className=" ">
// //           FIND THE PERFECT VILLA
// //         </Button>
// //       </div>
// //     </div>
// //   );
// // }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Future Found Sanctuary",
    location: "South Africa, Cape Town",
    days: "7 DAYS",
    price: "US$2,935",
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    quote: "Request a Quote",
  },
  {
    id: 2,
    title: "Geiger’s Camp",
    location: "South Africa, Greater Kruger Park",
    days: "12 DAYS",
    price: "US$8,485",
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    quote: null,
  },
  {
    id: 3,
    title: "Victoria & Alfred Hotel",
    location: "South Africa, Cape Town",
    days: "13 DAYS",
    price: "US$6,599",
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    quote: null,
  },
  {
    id: 4,
    title: "Luxury Safari Lodge",
    location: "South Africa, Kruger Park",
    days: "10 DAYS",
    price: "US$7,250",
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    quote: null,
  },
  {
    id: 5,
    title: "Exclusive Villa Retreat",
    location: "South Africa, Cape Town",
    days: "8 DAYS",
    price: "US$5,899",
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    quote: null,
  },
  {
    id: 6,
    title: "Mountain View Escape",
    location: "South Africa, Drakensberg",
    days: "9 DAYS",
    price: "US$6,100",
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    quote: null,
  },
];

export default function MemoriesSection() {
  return (
    <div className="px-[10%] py-20 relative">
      {/* Heading */}
      <h2 className=" text-center capitalize text-4xl md:text-5xl font-serif font-light mb-20 text-gray-800">
        Memories won't make themselves
      </h2>

      {/* Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        //   pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-[#aca188] text-sm mb-3">{card.location}</p>
                  <p className="font-medium">{card.days}</p>
                
                    <p className="text-red-600 ">
                      <span className=" text-[#5c5e62]">From</span> {card.price}{" "}
                      /P.P.
                    </p>
                    {card.quote && (
                      <a
                        href="#"
                        className=" text-orange-600 font-medium text-sm  inline-block"
                      >
                        {card.quote} →
                      </a>
                    )}
                
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows (floating on left & right) */}
        <button className="custom-prev absolute top-1/2 -left-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow hover:bg-gray-50 transition">
          <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>

        <button className="custom-next absolute top-1/2 -right-20 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow hover:bg-gray-50 transition">
          <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <Button>FIND THE PERFECT VILLA</Button>
      </div>
    </div>
  );
}
