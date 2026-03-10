// // import { GoogleMap, OverlayView, useLoadScript } from "@react-google-maps/api";

// // const properties = [
// // {
// //   id: "1",
// //   price: 500,
// //   lat: -17.9243,
// //   lng: 25.856
// // },
// // {
// //   id: "2",
// //   price: 600,
// //   lat: -17.92,
// //   lng: 25.85
// // }
// // ];

// // export default function MapView() {

// //   const { isLoaded } = useLoadScript({
// //     googleMapsApiKey: "YOUR_GOOGLE_MAP_KEY",
// //   });

// //   if (!isLoaded) return <div>Loading Map...</div>;

// //   return (
// //     <GoogleMap
// //       zoom={13}
// //       center={{ lat: -17.9243, lng: 25.856 }}
// //       mapContainerClassName="w-full h-full"
// //     >

// //       {properties.map((p) => (
// //         <OverlayView
// //           key={p.id}
// //           position={{ lat: p.lat, lng: p.lng }}
// //           mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
// //         >
// //           <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
// //             ${p.price}
// //           </div>
// //         </OverlayView>
// //       ))}

// //     </GoogleMap>
// //   );
// // }

// import Map, { Marker } from "react-map-gl/mapbox";
// import "mapbox-gl/dist/mapbox-gl.css";

// // const properties = [
// //   {
// //     id: "1",
// //     price: 500,
// //     lat: -17.9243,
// //     lng: 25.856
// //   },
// //   {
// //     id: "2",
// //     price: 600,
// //     lat: -17.92,
// //     lng: 25.85
// //   }
// // ];

// export default function MapView({ properties }) {
//   return (
//     <Map
//       mapboxAccessToken="pk.eyJ1IjoiY2hpa3VtaWt1MTk5OCIsImEiOiJjbTllYWJxbWkwN3FjMmtzY2NtNWt4M2ZvIn0.f5bWLkFFrjEptWjqXFbF9Q"
//       initialViewState={{
//         latitude: -17.9243,
//         longitude: 25.856,
//         zoom: 12,
//       }}
//       style={{ width: "100%", height: "100%" }}
//       mapStyle="mapbox://styles/mapbox/streets-v12"
//     >
//       {properties.map((p, i) => {

//         const latOffset = p.lat + (i * 0.001);
//         const lngOffset = p.lng + (i * 0.001);

//         return (
//           <Marker key={p.id} latitude={latOffset} longitude={lngOffset}>
//             <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
//               ${p.price}
//             </div>
//           </Marker>
//         );
//       })}
//     </Map>
//   );
// }

// // export default function MapView({ properties }) {
// //   return (
// //     <Map
// //       mapboxAccessToken="pk.eyJ1IjoiY2hpa3VtaWt1MTk5OCIsImEiOiJjbTllYWJxbWkwN3FjMmtzY2NtNWt4M2ZvIn0.f5bWLkFFrjEptWjqXFbF9Q"
// //       initialViewState={{
// //         latitude: -17.9243,
// //         longitude: 25.856,
// //         zoom: 13,
// //       }}
// //       style={{ width: "100%", height: "100%" }}
// //       mapStyle="mapbox://styles/mapbox/streets-v12"
// //     >
// //       {/* {properties.map((p) => (
// //         <Marker
// //           key={p.id}
// //           latitude={p.lat}
// //           longitude={p.lng}
// //         >
// //           <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
// //             ${p.price}
// //           </div>
// //         </Marker>
// //       ))} */}
// //       {properties.map((p) => (
// //         <Marker key={p.id} latitude={p.lat} longitude={p.lng}>
// //           <div className="bg-blue-600 text-white px-3 py-1 rounded-full font-semibold shadow-md">
// //             ${p.price}
// //           </div>
// //         </Marker>
// //       ))}
// //     </Map>
// //   );
// // }

import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

export default function MapView({
  properties,
  hoveredId,
  setSelectedId,
  setVisibleProperties,
}) {
  const handleMove = (e) => {
    const bounds = e.target.getBounds();

    const visible = properties.filter((p) => bounds.contains([p.lng, p.lat]));

    setVisibleProperties(visible);
  };

  const scrollToCard = (id) => {
    const el = document.getElementById(`property-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiY2hpa3VtaWt1MTk5OCIsImEiOiJjbTllYWJxbWkwN3FjMmtzY2NtNWt4M2ZvIn0.f5bWLkFFrjEptWjqXFbF9Q"
      initialViewState={{
        latitude: -17.9243,
        longitude: 25.856,
        zoom: 11,
      }}
      onMoveEnd={handleMove}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v12"
    >
      {properties.map((p) => (
        // <Marker key={p.id} latitude={p.lat} longitude={p.lng}>
        //   <div
        //     onClick={() => scrollToCard(p.id)}
        //     className={`px-3 py-1 rounded-full font-semibold shadow-md cursor-pointer transition
        //       ${
        //         hoveredId === p.id
        //           ? "bg-[#aca188] text-white scale-110"
        //           : "bg-blue-600 text-white"
        //       }
        //     `}
        //   >
        //     ${p.price}
        //   </div>
        // </Marker>
        <Marker key={p.id} latitude={p.lat} longitude={p.lng}>
          <div className="relative flex flex-col items-center cursor-pointer">
            {/* Price bubble */}
            <div
              className={`px-3 py-1 rounded-full font-semibold shadow-md text-white transition
        ${hoveredId === p.id ? "bg-[#aca188] scale-110" : "bg-blue-600"}
      `}
              onClick={() => scrollToCard(p.id)}
            >
              ${p.price}
            </div>

            {/* Pointer */}
            <div
              className={`w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px]
      border-l-transparent border-r-transparent
      ${hoveredId === p.id ? "border-t-[#aca188]" : "border-t-blue-600"}
      `}
            ></div>
          </div>
        </Marker>
      ))}
    </Map>
  );
}
