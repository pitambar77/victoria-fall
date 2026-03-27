import React from "react";
import { Heart } from "lucide-react";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";

// const PropertyCard = ({ property }) => {
//   return (
//     <div className="flex gap-4 p-4 border-b hover:bg-gray-50">

//       {/* Image Slider */}
//       <div className="w-[300px] h-[200px] relative">
//         <ImageSlider images={property.images} />

//         <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
//           <Heart size={18} />
//         </button>
//       </div>

//       {/* Info */}
//       <div className="flex flex-col flex-1 justify-between">

//         <div>
//           <p className="text-sm text-gray-500">
//             {property.distance} to center
//           </p>

//           <h2 className="text-lg font-semibold">
//             {property.title}
//           </h2>

//           <p className="text-sm text-gray-500">
//             House · Sleeps {property.sleeps} · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
//           </p>
//         </div>

//         <div className="flex justify-between items-end">
//           <div>
//             <span className="bg-green-700 text-white px-2 py-1 rounded text-sm">
//               {property.rating}
//             </span>
//             <span className="ml-2 text-sm">Exceptional</span>
//           </div>

//           <div className="text-right">
//             <p className="text-xl font-semibold">
//               ${property.price}
//             </p>
//             <p className="text-sm text-gray-500">
//               avg per night
//             </p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

const PropertyCard = ({ property }) => {
  return (
    <>
      <Link to={`/property/${property.slug}`}>
        <div className=" hd flex gap-4 border border-gray-300 rounded-xl  mb-4 bg-white shadow-sm">
          {/* Image */}
          <img
            src={property.images[0]}
            className="w-[260px] h-[180px] object-cover rounded-l-xl"
          />

          {/* Info */}
          <div className="flex-1 flex flex-col justify-between p-4">
            <div>
              <p className="hd  text-[#2e2c2d]">
                {property.distance} 
              </p>

              <h2 className="hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide capitalize">
                {property.title}
              </h2>

              <p className="text-[#2e2c2d]  capitalize">
                {property.category} · {property.bedrooms} bedrooms
                · {property.bathrooms} bathrooms
              </p>
            </div>

            <div className="flex justify-between items-end">
              <div className="flex items-center gap-2">
                <span className="bg-[#aca188] text-white px-2 py-1 rounded ">
                  {property.rating}
                </span>
                <span className="">Exceptional</span>
                <span className="text-[#2e2c2d] ">
                  {property.reviews} reviews
                </span>
              </div>

              <div className=" hd text-right">
                <p className="text-[#2e2c2d] font-semibold">
                  $ {property.price}
                </p>
                <p className="text-[#2e2c2d] ">avg per night</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PropertyCard;
