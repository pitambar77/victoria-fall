import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function ModalGallery({
  title,
  images = [],
  buttonText = "VIEW ACCOMMODATION →",
  showButton = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) {
    return <p className="p-6">No images available.</p>;
  }

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
    <section className="max-w-[1140px] mx-auto py-10 md:py-20 px-4">
      {/* Heading & Desktop Link */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-8">
        {title && (
          <h2 className="hd text-xl md:text-[30px] font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
            {title}
          </h2>
        )}

        {/* Desktop Button */}
        {showButton && (
          <Link to='/restaurants' className="hidden md:block hd text-sm font-medium text-[#4d4a2f] hover:underline">
            {buttonText}
          </Link>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Large main image */}
        {images[0] && (
          <div>
            <img
              src={images[0]}
              alt="main"
              className="rounded-md shadow-lg w-full h-[300px] md:h-[556px] object-cover"
            />
          </div>
        )}

        {/* Right-side grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          {images[1] && (
            <img
              src={images[1]}
              alt="gallery-1"
              className="rounded-md shadow-lg w-full h-[150px] md:h-[258px] object-cover"
            />
          )}
          {images[2] && (
            <img
              src={images[2]}
              alt="gallery-2"
              className="rounded-md shadow-lg w-full h-[150px] md:h-[258px] object-cover"
            />
          )}

          {/* Overlay image */}
          {images[3] && (
            <div
              onClick={() => openGallery(3)}
              className="relative col-span-2 cursor-pointer"
            >
              <img
                src={images[3]}
                alt="gallery-3"
                className="rounded-md shadow-lg w-full h-[150px] md:h-[258px] object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-60 rounded-md flex items-center justify-center">
                <span className="text-white font-medium text-lg">
                  VIEW GALLERY →
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Mobile Button */}
      {showButton && (
        <div className="md:hidden mt-10 text-center">
          <Button>{buttonText}</Button>
        </div>
      )}

      {/* Modal Slideshow */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] px-4">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-10 right-10 text-white text-3xl cursor-pointer hover:text-red-500"
          >
            <X />
          </button>

          <div className="relative w-full max-w-4xl flex items-center justify-center px-4">
            {/* Prev */}
            <button
              onClick={prevSlide}
              className="absolute left-4 text-white p-3 bg-black/40 rounded-full hover:bg-black/70"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <img
              src={images[current]}
              alt={`slide-${current}`}
              className="rounded-md max-h-[80vh] w-auto object-contain shadow-lg"
            />

            {/* Next */}
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
  );
}
