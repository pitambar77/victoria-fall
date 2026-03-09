

// import React from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// const properties = [
//   { lat: -17.9243, lng: 25.856, price: 167 },
//   { lat: -17.921, lng: 25.85, price: 287 },
// ];

// const MapView = () => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "YOUR_API_KEY",
//   });

//   if (!isLoaded) return <div>Loading Map...</div>;

//   return (
//     <GoogleMap
//       zoom={13}
//       center={{ lat: -17.9243, lng: 25.856 }}
//       mapContainerClassName="w-full h-full"
//     >
//       {properties.map((p, i) => (
//         <Marker
//           key={i}
//           position={{ lat: p.lat, lng: p.lng }}
//           label={`$${p.price}`}
//         />
//       ))}
//     </GoogleMap>
//   );
// };

// export default MapView;

// import { GoogleMap, OverlayView, useLoadScript } from "@react-google-maps/api";

// const MapView = ({ properties }) => {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "YOUR_GOOGLE_MAP_KEY",
//   });

//   if (!isLoaded) return <div>Loading Map...</div>;

//   return (
//     <GoogleMap
//       zoom={13}
//       center={{ lat: -17.9243, lng: 25.856 }}
//       mapContainerClassName="w-full h-full"
//     >
//       {properties.map((p) => (
//         <OverlayView
//           key={p.id}
//           position={{ lat: p.lat, lng: p.lng }}
//           mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
//         >
//           <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
//             ${p.price}
//           </div>
//         </OverlayView>
//       ))}
//     </GoogleMap>
//   );
// };

// export default MapView;

import { GoogleMap, OverlayView, useLoadScript } from "@react-google-maps/api";

const properties = [
{
  id: "1",
  price: 500,
  lat: -17.9243,
  lng: 25.856
},
{
  id: "2",
  price: 600,
  lat: -17.92,
  lng: 25.85
}
];

export default function MapView() {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAP_KEY",
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      zoom={13}
      center={{ lat: -17.9243, lng: 25.856 }}
      mapContainerClassName="w-full h-full"
    >

      {properties.map((p) => (
        <OverlayView
          key={p.id}
          position={{ lat: p.lat, lng: p.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
            ${p.price}
          </div>
        </OverlayView>
      ))}

    </GoogleMap>
  );
}
