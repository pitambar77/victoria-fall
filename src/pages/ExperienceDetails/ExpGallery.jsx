import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Gallery from '../../components/Gallery'

export default function ModalGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [restaurant, setRestaurant] = useState(null);
const [activity, setActivity] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://victoria-fall-backend-production.up.railway.app/api/activities/${id}`)
      .then((res) => setActivity(res.data))
      .catch(console.error);
  }, [id]);

  if (!activity) return <p className="p-6">Loading...</p>;
  if (!activity.galleryImages || activity.galleryImages.length === 0)
    return <p className="p-6">No images available.</p>;

  const images = activity.galleryImages; // ✅ use backend images

 

  return (
    // <section className="max-w-[1140px] mx-auto py-20">
    //   {/* Heading & Link */}
    //   <div className="flex justify-between items-center mb-8">
    //     <h2 className="hd text-[30px] font-semibold text-[#2e2c2d] tracking-[3px] uppercase">
    //       {restaurant.activityName}
    //     </h2>
    //     <button className="hd text-sm font-medium text-[#4d4a2f] hover:underline">
    //       VIEW ACCOMMODATION →
    //     </button>
    //   </div>

    //   {/* Image Grid */}
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //     {/* Large main image */}
    //     <div>
    //       <img
    //         src={images[0]}
    //         alt="main"
    //         className="rounded-md shadow-lg w-full h-[556px] object-cover"
    //       />
    //     </div>

    //     {/* Right-side grid */}
    //     <div className="grid grid-cols-2 gap-8">
    //       {images[1] && (
    //         <img
    //           src={images[1]}
    //           alt="gallery-1"
    //           className="rounded-md shadow-lg w-full h-[258px] object-cover"
    //         />
    //       )}
    //       {images[2] && (
    //         <img
    //           src={images[2]}
    //           alt="gallery-2"
    //           className="rounded-md shadow-lg w-full h-[258px] object-cover"
    //         />
    //       )}

    //       {/* Bottom overlay image */}
    //       {images[3] && (
    //         <div
    //           onClick={() => openGallery(3)}
    //           className="relative md:col-span-2 cursor-pointer"
    //         >
    //           <img
    //             src={images[3]}
    //             alt="gallery-3"
    //             className="rounded-md shadow-lg w-full h-[258px] object-cover"
    //           />
    //           <div className="absolute inset-0 bg-black opacity-60 rounded-md flex items-center justify-center">
    //             <span className="text-white font-medium text-lg">
    //               VIEW GALLERY →
    //             </span>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   {/* Modal Slideshow */}
    //   {isOpen && (
    //     <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]">
    //       {/* Close Button */}
    //       <button
    //         onClick={() => setIsOpen(false)}
    //         className="absolute top-10 right-10 text-white text-3xl cursor-pointer hover:text-red-500"
    //       >
    //         <X />
    //       </button>

    //       <div className="relative w-full max-w-4xl flex items-center justify-center">
    //         {/* Prev Button */}
    //         <button
    //           onClick={prevSlide}
    //           className="absolute left-4 text-white p-3 bg-black/40 rounded-full hover:bg-black/70"
    //         >
    //           <ChevronLeft size={28} />
    //         </button>

    //         {/* Image */}
    //         <img
    //           src={images[current]}
    //           alt={`slide-${current}`}
    //           className="rounded-md max-h-[80vh] w-auto object-contain shadow-lg"
    //         />

    //         {/* Next Button */}
    //         <button
    //           onClick={nextSlide}
    //           className="absolute right-4 text-white p-3 bg-black/40 rounded-full hover:bg-black/70"
    //         >
    //           <ChevronRight size={28} />
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </section>
    <div>
      <Gallery
      title={activity.activityName}
        images={activity.galleryImages}
        buttonText="VIEW ACCOMMODATION →"
        showButton={true}
      />
    </div>
  );
}
