// import { BedDouble, ShowerHead, Toilet, Bath } from "lucide-react";

// export default function RoomsBeds() {
//   const bedrooms = [
//     { name: "Bedroom 1", bed: "1 Twin Bed" },
//     { name: "Bedroom 2", bed: "1 Twin Bed" },
//     { name: "Bedroom 3", bed: "1 King Bed" },
//     { name: "Bedroom 4", bed: "1 King Bed" },
//     { name: "Bedroom 5", bed: "1 Queen Bed" },
//   ];

//   const bathrooms = [
//     {
//       title: "Room 1 en-suite",
//       icons: [Toilet, ShowerHead],
//       text: "Toilet · Shower only",
//     },
//     {
//       title: "Room 2 En-suite",
//       icons: [Toilet, ShowerHead],
//       text: "Toilet · Shower only",
//     },
//     {
//       title: "Room 3 En-suite",
//       icons: [Toilet, ShowerHead],
//       text: "Toilet · Shower only",
//     },
//     {
//       title: "Room 4 and 5 Shared bathroom",
//       icons: [Bath, Toilet, ShowerHead],
//       text: "Bathtub · Toilet · Shower only",
//     },
//   ];

//   return (
//     <div className="hd space-y-10">
//       {/* TITLE */}
//       <div>
//         <h2 className=" hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide uppercase mb-6">
//           Rooms & beds
//         </h2>

//         <p className="hd mt-2 font-[500] text-lg text-[#2e2c2d]">
//           5 bedrooms <span className="text-gray-500">(sleeps 10)</span>
//         </p>
//       </div>

//       {/* BEDROOMS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10">
//         {bedrooms.map((room, i) => (
//           <div key={i} className="space-y-1">
//             <p className="hd font-[500] text-lg text-[#2e2c2d]">{room.name}</p>
//             {/* <div className=" flex">
//               <BedDouble size={20} strokeWidth={1.5} className=" mt-1" />

//               <p className="hd text-[#2e2c2d] mt-1 ml-2">{room.bed}</p>
//             </div> */}

//               <BedDouble size={20} strokeWidth={1.5} color="#a57830"  />

//               <p className="hd text-[#2e2c2d] mt-1 ">{room.bed}</p>

//           </div>
//         ))}
//       </div>

//       {/* DIVIDER */}
//       <div className="border-t border-gray-300"></div>

//       {/* BATHROOM TITLE */}
//       <h3 className="hd font-[500] text-lg text-[#2e2c2d]">4 bathrooms</h3>

//       {/* BATHROOMS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-20">
//         {bathrooms.map((bath, i) => (
//           <div key={i} className="space-y-3">
//             <p className="hd font-[500] text-lg text-[#2e2c2d]">{bath.title}</p>

//             <div className="flex gap-3">
//               {bath.icons.map((Icon, idx) => (
//                 <Icon key={idx} size={30} strokeWidth={1.5} color="#a57830" />
//               ))}
//             </div>

//             <p className="hd text-[#2e2c2d]">{bath.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="border-t border-gray-300"></div>
//     </div>
//   );
// }

import { BedDouble } from "lucide-react";

export default function RoomsBeds({ property }) {
  const bedrooms = property?.rooms || [];
  const bathrooms = property?.bathrooms || [];

  if (!bedrooms.length && !bathrooms.length) return null;

  return (
    <div className="hd space-y-10">
      {/* TITLE */}
      <div>
        <h2 className="hd text-[18px] font-semibold text-[#2e2c2d] tracking-wide uppercase mb-6">
          Rooms & beds
        </h2>

        <p className="hd mt-2 font-[500] text-lg text-[#2e2c2d]">
          {bedrooms.length} bedrooms
          <span className="text-gray-500">
            {" "}
            ({property?.sleeps || 0} sleeps)
          </span>
        </p>
      </div>

      {/* BEDROOMS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-10">
        {bedrooms.map((room) => (
          <div key={room._id} className="space-y-1">
            <p className="hd font-[500] text-lg text-[#2e2c2d]">
              {room.bedroomName}
            </p>

            <img src={room.icon} className="w-6 h-6 object-contain" />

            <p className="hd text-[#2e2c2d] mt-1">{room.bed}</p>
          </div>
        ))}
      </div>

      {/* DIVIDER */}

      <div className="border-t border-gray-300"></div>

      {/* BATHROOM TITLE */}

      <h3 className="hd font-[500] text-lg text-[#2e2c2d]">
        {bathrooms.length} bathrooms
      </h3>

      {/* BATHROOMS */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-20">
        {bathrooms.map((bath) => (
          <div key={bath._id} className="space-y-3">
            <p className="hd font-[500] text-lg text-[#2e2c2d]">
              {bath.bathName}
            </p>

            <div className="flex gap-3">
              {bath.bathdetails?.map((detail) => (
                <img
                  key={detail._id}
                  src={detail.icon}
                  title={detail.name}
                  className="w-7 h-7 object-contain"
                />
              ))}
            </div>

            <p className="hd text-[#2e2c2d]">
              {bath.bathdetails?.map((d) => d.name).join(" · ")}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-300"></div>
    </div>
  );
}
