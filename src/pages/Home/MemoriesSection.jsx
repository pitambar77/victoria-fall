

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <div className=" max-w-[1140px] mx-auto  py-16 relative">
      {/* Heading */}
      <h2 className=" hd text-center text-[30px] mb-14 font-semibold text-[#2e2c2d] tracking-[3px] uppercase ">
        Memories won't make <br className="hidden md:inline" /> themselves
      </h2>

      {/* Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={32}
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
              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 hd text-[#2e2c2d]">
                  <h3 className=" text-lg font-[500] mb-2">{card.title}</h3>
                  <p className="text-[#aca188] text-sm mb-2">{card.location}</p>
                  <p className="font-medium mb-2">{card.days}</p>
                
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
        <Button
         onClick={()=>{
          navigate('/properties-landing');
          // window.scrollTo({ top: 0, behavior: "smooth" })
          window.scrollTo(0,0)
         }}
        >FIND THE PERFECT VILLA</Button>
      </div>
    </div>
  );
}
