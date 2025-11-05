import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";


const PrivateEvents = () => {
  const items = [
    {
      title: "Ready, set… glow!",
      description:
        "A make-up artist might be just the person you need before a big social event. Our expert uses only high-quality, long-lasting make-up products, achieving a natural-looking beauty look. The Luberon Concierge can plan your make-up session in her studio or at your house whenever you feel like it.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2017/08/makeup_1.png",
    },
    {
      title: "Cutting edge florist",
      description:
        "After training as a Master Florist Craftsman, our favourite floral designer travelled around the country, gaining a unique savoir-faire. In 2017, she opened her first flower shop and quickly won over an international clientele with her audacious and inventive bouquets. Her creativity and talent will bring a touch of magic to your home/event.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2019/03/lb_3-1024x1024.jpg",
    },
    {
      title: "The sound of music",
      description:
        "We work closely with a guitarist and musical director who has played with major artists from the international and French scenes. So whether you want a jazz trio for a cocktail or an orchestra & DJ for a big event, he will take care of the line-up, playlist, sound system and lighting, based on your taste and expectations.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/The-sound-of-music.jpg",
    },
  ];

  return (
    <section id="private-events" className=" py-10 md:py-20  border-gray-100">
      <div className="max-w-[1140px] mx-auto px-4 ">
        <h2 className="hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px]  mb-10 text-center uppercase">
          Private Events
        </h2>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-[#f9f9f7] rounded-md shadow-sm overflow-hidden group">
              <img src={item.img} alt={item.title} className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105" />
              <div className="p-6">
                <h3 className="hd text-lg font-[500] text-[#7a6b57] mb-4 text-center">{item.title}</h3>
                <p className="hd text-[#5c5e62]  text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div> */}

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

export default PrivateEvents;
