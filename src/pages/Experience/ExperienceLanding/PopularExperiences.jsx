import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../../components/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    id: 1,
    title: "Chobe Deluxe Sunset Cruise",
    description:'View the abundant wildlife of the Chobe National Park on a Chobe River Sunset Cruise, providing game viewing from a totally different perspective along the banks of the River.',
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
   
  },
  {
    id: 2,
    title: "Chobe Deluxe Sunset Cruise",
    description:'Celebrate the end of the day as the Sun sinks into the Chobe River while the boat meanders  upstream into the Chobe National Park. Share in the end-of-day ritual.',
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    
  },
  {
    id: 3,
    title: "Chobe Deluxe Sunset Cruise",
    description:'View the abundant wildlife of the Chobe National Park on a Chobe River Sunset Cruise, providing game viewing from a totally different perspective along the banks of the River.',
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    
  },
  {
    id: 4,
   
    title: "Chobe Deluxe Sunset Cruise",
    description:'View the abundant wildlife of the Chobe National Park on a Chobe River Sunset Cruise, providing game viewing from a totally different perspective along the banks of the River.',
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    
  },
  {
    id: 5,
    title: "Chobe Deluxe Sunset Cruise",
    description:'View the abundant wildlife of the Chobe National Park on a Chobe River Sunset Cruise, providing game viewing from a totally different perspective along the banks of the River.',
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    
  },
  {
    id: 6,
    title: "Chobe Deluxe Sunset Cruise",
    description:'View the abundant wildlife of the Chobe National Park on a Chobe River Sunset Cruise, providing game viewing from a totally different perspective along the banks of the River.',
    img: "https://www.victoriafallsriverlodge.com/wp-content/uploads/2024/06/VFRL-Luxury-Tented-Suite-Deck-and-Plunge-Pool-1.jpg",
    
  },
];

export default function PopularExperiences() {

  const navigate = useNavigate();

  return (
    <div className=" max-w-[1140px] mx-auto  py-16 relative">
      {/* Heading */}
      <h2 className=" hd text-center text-[30px] mb-13  font-semibold text-[#2e2c2d] tracking-[3px] uppercase ">
        Our Popular <br className="hidden md:inline" /> Experiences
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
          {activities.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white rounded-md shadow-md overflow-hidden mb-10 ">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-4 hd text-[#2e2c2d] ">
                  <h3 className=" text-lg font-[500] mb-2">{card.title}</h3>
                  <p className="text-[#aca188] text-sm mb-2">{card.description}</p>
                 
                
              <button className=' my-2 text-[#2e2c2d] border  border-[#aca188] hover:border-[#c40] hover:text-[#c40] rounded-[50px] text-[14px] leading-[1.6] capitalize tracking-[3px] font-normal py-[8px] px-[16px]  transition-colors duration-300 cursor-pointer ease-out'>Read more</button>
                   
                    
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
      {/* <div className="text-center mt-10">
        <Button
         onClick={()=>{
          navigate('/properties-landing');
          // window.scrollTo({ top: 0, behavior: "smooth" })
          window.scrollTo(0,0)
         }}
        >FIND THE PERFECT VILLA</Button>
      </div> */}
    </div>
  );
}
