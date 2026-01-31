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
      title: "Intimate Dinner Celebrations",
      description:
        "A private chef, candlelight, and a table set just for you. The evening unfolds slowly—stories, laughter, good food—everything blending into a memory that feels warm long after the last plate is cleared.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2017/08/makeup_1.png",
    },
    {
      title: "Small Wedding Ceremonies",
      description:
        "A quiet space, thoughtful details, and vows spoken above the river’s steady hum. Weddings here feel deeply personal—simple, tender, and free from pressure. Just two people choosing each other, surrounded by gentle nature.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2019/03/lb_3-1024x1024.jpg",
    },
    {
      title: "Birthday Gatherings",
      description:
        "Music, cake, friends drifting in with easy smiles. Birthdays here aren’t extravagant—they’re heartfelt. A mix of familiar comforts and small surprises that make you feel genuinely celebrated, not just acknowledged.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/The-sound-of-music.jpg",
    },
     {
      title: "Corporate Retreats",
      description:
        "Mind-clearing scenery, calm meeting spaces, and moments that encourage honest conversations. Retreats here help teams reconnect without the stiffness of boardrooms. Work feels lighter, ideas feel freer, and people leave a little more aligned.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/The-sound-of-music.jpg",
    },
     {
      title: "Anniversary Dinners",
      description:
        "Soft lighting, a meaningful meal, and a feeling that the world quietly stepped aside for the night. Anniversaries here aren’t grand gestures—they’re gentle reminders of everything you’ve built together.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/The-sound-of-music.jpg",
    },
     {
      title: "Family Reunions",
      description:
        "Long tables, shared meals, children running somewhere in the background. Reunions here feel easy, unforced. People catch up slowly, drifting between stories and silence, rediscovering the comfort of familiar faces.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/The-sound-of-music.jpg",
    },
     {
      title: "Private Sundowner Events",
      description:
        "Golden hour spreads across the landscape as glasses clink softly. A sundowner here feels almost cinematic—warm light, long shadows, and a sense that the day decided to end beautifully just for you.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/The-sound-of-music.jpg",
    },
     {
      title: "Proposal Setups",
      description:
        "The kind of moment that deserves thoughtful planning and quiet magic. We create a setting where nerves soften and emotions speak clearly—flowers, candles, distant water, and just enough space for a heartfelt yes.",
      img: "https://theluberonconcierge.com/wp-content/uploads/2022/09/The-sound-of-music.jpg",
    },
     {
      title: "Group Dining Experiences",
      description:
        "A long table filled with shared dishes and easy conversation. Laughter rises naturally, plates pass around like small gifts, and the whole night settles into something that feels both communal and comforting.",
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
