import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/cl1xqi84f00b4rzpbxbl0w2el-award-trip-expert-2.360x360.png",
  },
  {
    id: 2,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/clisw0fbo2kndmc8i8ythg6tr-vertical-banner-1080-x-1350-v2-tc.0.83.1080.1005.360x360.png",
  },
  {
    id: 3,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/cl1xqi84f00b4rzpbxbl0w2el-award-trip-expert-2.360x360.png",
  },
  {
    id: 4,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/clisw0fbo2kndmc8i8ythg6tr-vertical-banner-1080-x-1350-v2-tc.0.83.1080.1005.360x360.png",
  },
  {
    id: 5,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/cl1xqi84f00b4rzpbxbl0w2el-award-trip-expert-2.360x360.png",
  },
  {
    id: 6,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/clisw0fbo2kndmc8i8ythg6tr-vertical-banner-1080-x-1350-v2-tc.0.83.1080.1005.360x360.png",
  },
  {
    id: 7,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/clisw0fbo2kndmc8i8ythg6tr-vertical-banner-1080-x-1350-v2-tc.0.83.1080.1005.360x360.png",
  },
  {
    id: 8,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/cl1xqi84f00b4rzpbxbl0w2el-award-trip-expert-2.360x360.png",
  },
  {
    id: 9,

    img: "https://newmark-prod.s3.amazonaws.com/attachments/clisw0fbo2kndmc8i8ythg6tr-vertical-banner-1080-x-1350-v2-tc.0.83.1080.1005.360x360.png",
  },
];

const Awards = () => {
  return (
    <div className="px-[12%] pb-20 relative">
      {/* Heading */}
       <div className="flex items-center  mb-14">
        <span className="w-30 h-[1px] bg-[#2e2c2d] mr-6"></span>
        <h2 className="text-xl font-semibold text-[#2e2c2d] tracking-wide uppercase">
          Our Awards
        </h2>
      
      </div>

      {/* Carousel */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination,Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
        // pagination={{ clickable: true,
        //     el: ".custom-pagination",
        //  }}
         autoplay={{
          delay: 3000, // change every 3s
          disableOnInteraction: false,
        }}
        loop={true}
          breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[160px]  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination (adds gap with mt-10) */}
<div className="custom-pagination flex justify-center items-center mt-10"></div>

        {/* Custom Arrows (floating on left & right) */}
        <button className="custom-prev absolute top-1/2 -left-5 z-10 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow hover:bg-gray-50 transition">
          <ChevronLeft size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>

        <button className="custom-next absolute top-1/2 -right-5 z-10 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow hover:bg-gray-50 transition">
          <ChevronRight size={22} strokeWidth={1.5} className="text-gray-700" />
        </button>

        
      </div>
    </div>
   
  );
};

export default Awards;


