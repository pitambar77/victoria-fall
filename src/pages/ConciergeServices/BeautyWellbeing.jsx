import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";


const BeautyWellbeing = () => {
  const items = [
    {
      title: "Spa & Massage",
      description:
        "Whether you would like a make-up session in preparation for an event, a manicure, a new haircut or a session with a beautician, we will introduce you to qualified professionals.Meet them at their salon, or have them come to you and get started by your pool! Our team will work with them to meet your expectations.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/Yes-we-care.jpg",
    },
    {
      title: "Yoga & Meditation",
      description:
        "Our trainers design tailor-made sessions in groups or individually.Thai boxing, muscle strengthening, cardio, and stretching are some of the many activities that they can suggest for your workout routine.At home or at the gym, let the adrenaline kick in.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2017/08/t1-897x1024.jpg",
    },
    {
      title: "Personal Training",
      description:
        "From a holistic and intuitive massage (shiatsu, Californian, Hawaiian, Swedish) to a relaxing massage with essential oils and soft music, choose whatever works for you at your villa or in one of the local spas. Deep tissue massages are also available, and great after an intense sports session.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/pexels-cottonbro-3998013.jpg",
    },
    {
      title: "Yes we care",
      description:
        "The Luberon Concierge has teamed up with a wonderful yoga instructor. She teaches traditional Hatha yoga classes inspired by one of the great Indian masters who introduced yoga to the West.You can also attend her Vinyasa and Kundalini classes, at home or outdoors, in the most beautiful spots of the Luberon.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2019/01/yoga_2.jpg",
    },
    {
      title: "Let your hair down",
      description:
        "You want to look your best when going out or socialising during your holiday.We can send a hair stylist to your house or book your appointment at the hair salon if you wish.We work with hand-picked hairdressers and colour technicians, whose services we use ourselves",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/10/let-your-hair-down.jpg",
    },
    {
      title: "Live in the moment",
      description:
        "Mindfulness and meditation practices are proven ways of reducing stress and increasing well-being.Meditating might already be part of your self-care routine, or it may be uncharted territory to you. Either way, make the most of your holiday: retrain your mind to settle into the present moment with one of our experienced teachers.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/10/living-in-the-moment.jpg",
    },
  ];

  return (
    <section id="beauty-wellbeing" className="py-10 md:py-20 bg-[#f9f9f7]">
      <div className="max-w-[1140px] mx-auto px-4 ">
        <h2 className="hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px]  mb-10 text-center uppercase">
          Beauty & Well-being
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

export default BeautyWellbeing;
