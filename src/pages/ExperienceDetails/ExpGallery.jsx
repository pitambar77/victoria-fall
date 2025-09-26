import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; // icons
import Button from "../../components/Button";

const images = [
  "https://new.slickrock.com/wp-content/uploads/2024/05/belize-private-island-115.jpg",
  "https://www.jasper-park-lodge.com/content/uploads/2022/11/Dine-Orso-Gallery-_DSF4881-Enhanced.jpg",
  "https://cdn.shortpixel.ai/spai/q_glossy+ret_img+to_auto/www.discoverafrica.com/wp-content/uploads/2014/01/Jock-Safari-Lodge-Guest-Experience-8-Medium.jpg",
  "https://www.jasper-park-lodge.com/content/uploads/2022/11/Dine-Orso-Gallery-_DSF4881-Enhanced.jpg",
  "https://cdn0.hitched.co.uk/article/7377/3_2/1280/jpg/127737-aardvark-safaris-view-of-romantic-bath-overlooking-a-game-reserve.jpeg",
  "https://www.andbeyond.com/wp-content/uploads/sites/5/Image-9-C-SEAN-FANDAM.jpg",
];

export default function ExpGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openGallery = (index) => {
    setCurrent(index);
    setIsOpen(true);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className=" bg-[#faf8f1] py-20">

 

    <section className=" max-w-[1140px] mx-auto ">
      {/* Heading & Link */}
      <div className="flex justify-between items-center mb-8">
        <h2 className=" hd text-[30px]  font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
          Making a difference
        </h2>
        <button className=" hd text-sm font-medium text-[#4d4a2f] hover:underline">
          VIEW ACCOMMODATION →
        </button>
      </div>

      {/* Image Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Large image */}
        <div className="">
          <img
            src={images[0]}
            alt="accommodation"
            className="rounded-md shadow-lg w-[100%] h-[556px] object-cover "
          />
        </div>

        {/* Right column images */}
        <div className="grid grid-cols-2 gap-8 ">
          <img
            src={images[1]}
            alt="bathroom"
            className="rounded-md shadow-lg w-[100%] h-[258px] object-cover "
          />
          <img
            src={images[2]}
            alt="balcony"
            className="rounded-md shadow-lg w-[100%] h-[258px] object-cover "
          />
          {/* Bottom image with overlay */}
          <div
            onClick={() => openGallery(3)}
            className="relative md:col-span-2 cursor-pointer"
          >
            <img
              src={images[3]}
              alt="gallery"
              className="rounded-md shadow-lg w-[100%] h-[258px] object-cover"
            />
            <div className="absolute inset-0  bg-black opacity-60 rounded-md flex items-center justify-center">
              <span className="text-white font-medium text-lg">
                VIEW GALLERY →
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-16">
  <Button>Send Enquiry</Button>
  <Button>Booking now</Button>
</div>

      {/* Modal Slideshow */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-999">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-40 text-white text-3xl cursor-pointer hover:text-red-500"
          >
            <X />
          </button>

          <div className="relative w-full max-w-4xl flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 text-white p-3 bg-black/40 rounded-full hover:bg-black/70"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <img
              src={images[current]}
              alt="slideshow"
              className="rounded-md max-h-[80vh] w-auto object-contain shadow-lg"
            />

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 text-white p-3 bg-black/40 rounded-full hover:bg-black/70"
            >
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </section>
       </div>
  );
}
