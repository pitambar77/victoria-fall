import Map, { Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MapView({
  properties,
  hoveredId,
  setSelectedId,
  setVisibleProperties,
}) {
  const [selectedProperty, setSelectedProperty] = useState(null);

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
      mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
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
        ${selectedProperty?.id === p.id || hoveredId === p.id ? "bg-[#aca188] scale-110" : "bg-blue-600"}
          
      `}
              // onClick={() => scrollToCard(p.id)}
              onClick={() => {
                setSelectedProperty(p);
              }}
            >
              ${p.price}
            </div>

            {/* Pointer */}
            <div
              className={`w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px]
      border-l-transparent border-r-transparent
      ${selectedProperty?.id === p.id || hoveredId === p.id ? "border-t-[#aca188]" : "border-t-blue-600"}
    
     
      `}
            ></div>
          </div>
        </Marker>
      ))}
      {selectedProperty && (
        <Link to={`/propertiesdetails/${selectedProperty.id}`}>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[420px] bg-white rounded-md shadow-md flex overflow-hidden z-20">
            {/* Property Image */}
            <img
              src={selectedProperty.images?.[0]}
              alt={selectedProperty.title}
              className="w-40 h-32 object-cover"
            />

            {/* Content */}
            <div className="p-3 flex flex-col justify-between flex-1">
              <div>
                <p className="hd  text-[#2e2c2d]">
                  {selectedProperty.distance}
                </p>

                <h3 className="hd text-[18px] font-semibold text-[#2e2c2d]  tracking-wide capitalize">
                  {selectedProperty.title}
                </h3>

                <p className="text-[#2e2c2d]  capitalize">
                  Sleeps {selectedProperty.sleeps} ·{selectedProperty.bedrooms}{" "}
                  bedrooms ·{selectedProperty.bathrooms} bathrooms
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-sm">
                  ⭐ {selectedProperty.rating} ({selectedProperty.reviews})
                </div>

                <div className=" hd text-right">
                  <div className="text-[#2e2c2d] font-semibold">
                    ${selectedProperty.price}
                  </div>
                  <div className="text-xs text-gray-500">avg per night</div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-2 right-2 text-gray-500 cursor-pointer hover:text-[#2e2c2d]"
            >
              ✕
            </button>
          </div>
        </Link>
      )}
    </Map>
  );
}
