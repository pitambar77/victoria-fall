import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    id: 1,
    text: "Fine rooms and woodwork, spacious breakfast room and excellent staff... The location was perfect, a few steps from the station with a very helpful booking office and a short walk to enjoy the river and explore the old streets.",
    author: "TUMI",
  },
  {
    id: 2,
    text: "Amazing hospitality, beautiful views, and unforgettable experiences. Highly recommend this place for anyone looking to relax and recharge.",
    author: "ANNA",
  },
  {
    id: 3,
    text: "The service was outstanding, and the ambiance was exactly what we hoped for. Truly a home away from home.",
    author: "MICHAEL",
  },
];

export default function TestimonialSection() {
  return (
    <div className="px-[12%] py-20 relative bg-white">
      {/* Heading */}
      <div className="flex items-center  mb-14">
        <span className="w-30 h-[1px] bg-[#2e2c2d] mr-6"></span>
        <h2 className="text-xl font-semibold text-[#2e2c2d] tracking-wide uppercase">
          What Our Clients Say
        </h2>
      
      </div>

      {/* Swiper */}
      <div className="relative max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation={{
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev",
          }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="text-center px-6">
                <div className="text-4xl text-left text-[#0c2b39] leading-none  mb-4"><RiDoubleQuotesL/></div>
                <p className="italic font-serif text-xl text-[#2e2c2d] mb-6">
                  {item.text}
                </p>
                <div className="flex space-x-2 mb-4">
                  <span className="w-10  h-[2px] bg-[#2e2c2d]"></span>
                </div>
                <p className=" text-left font-semibold uppercase  text-sm tracking-wide text-[#2e2c2d]">
                  {item.author}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Arrows */}
        <button className="testimonial-prev absolute top-1/2 -left-16 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#0c2b39] text-white shadow hover:bg-[#123b4d] transition">
          <ChevronLeft size={22} strokeWidth={2} />
        </button>

        <button className="testimonial-next absolute top-1/2 -right-16 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-[#0c2b39] text-white shadow hover:bg-[#123b4d] transition">
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
