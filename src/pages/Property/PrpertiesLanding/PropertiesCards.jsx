// src/components/ResortGrid.jsx
import React, { useEffect, useState } from "react";
import { getProperties } from "../../../api/propertyApi";
import { Link } from "react-router-dom";

// const resorts = [
//   {
//     id: 1,
//     country: "South Africa, Bela-Bela, Waterberg",
//     name: "BABOHI at QWABI Private Game Reserve",
//     image:
//       "https://cdn-homfb.nitrocdn.com/qetlunkKTeClpfQiVATTOyJJbvVSTFzJ/assets/images/source/rev-d854626/hukalodge.com/wp-content/uploads/2025/03/Lodge-Banner.jpg",
//     tags: ["SAFARI", "LUXURY", "WELLNESS", "LEISURE", "MICE"],
//   },
//   {
//     id: 2,
//     country: "South Africa, Stellenbosch",
//     name: "Blaauwklippen Manor",
//     image:
//       "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
//     tags: ["FAMILY-FRIENDLY", "LUXURY", "LEISURE"],
//   },
//   {
//     id: 3,
//     country: "Zimbabwe, Batoka Gorge",
//     name: "Bupenyu Lodge",
//     image:
//       "https://campsolutions.com/wp-content/uploads/2020/12/CS-LSL-Cover-01.jpg",
//     tags: ["LUXURY", "WELLNESS", "LEISURE", "ADVENTURE"],
//   },
//   {
//     id: 4,
//     country: "Tanzania, Bububu",
//     name: "Chuini Zanzibar Beach Lodge",
//     image:
//       "https://www.flattopswildernessguides.com/wp-content/uploads/2025/03/FTWGLodge_Exterior5-scaled.jpg",
//     tags: ["BEACH", "LUXURY", "FAMILY-FRIENDLY", "WELLNESS"],
//   },
//   {
//     id: 5,
//     country: "South Africa, Cape Town",
//     name: "Dock House Boutique Hotel",
//     image:
//       "https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/301111549.jpg?k=d69112c7f2420d7eb09fc3e91b2109351cb0b7d6d88c95382d3cc3619da53382&o=",
//     tags: ["LUXURY", "LEISURE", "WELLNESS"],
//   },
//   {
//     id: 6,
//     country: "South Africa, Cape Town",
//     name: "Future Found Sanctuary",
//     image:
//       "https://www.micato.com/wp-content/uploads/2018/09/tarangire-treetops-lodge-5-2.jpg",
//     tags: ["WELLNESS", "LUXURY"],
//   },
//   {
//     id: 7,
//     country: "South Africa, Bela-Bela, Waterberg",
//     name: "BABOHI at BBs",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Cohodas_Lodge_2023.jpg/1200px-Cohodas_Lodge_2023.jpg",
//     tags: ["SAFARI", "LUXURY", "WELLNESS", "LEISURE", "MICE"],
//   },
//   {
//     id: 8,
//     country: "South Africa, Stellenbosch",
//     name: "Blaauwklippen Manor",
//     image:
//       "https://image-tc.galaxy.tf/wijpeg-7zq65isxcjwlcvi5pglqrzi6y/dsc-3202-edit.jpg?width=1920",
//     tags: ["FAMILY-FRIENDLY", "LUXURY", "LEISURE"],
//   },
//   {
//     id: 9,
//     country: "Zimbabwe, Batoka Gorge",
//     name: "Bupenyu Lodge",
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/max1024x768/478328178.jpg?k=d2c6b131ef96967201e3e0a41164526e50fd362db62535abf96bf350a494e318&o=&hp=1",
//     tags: ["LUXURY", "WELLNESS", "LEISURE", "ADVENTURE"],
//   },
//   {
//     id: 10,
//     country: "Tanzania, Bububu",
//     name: "Chuini Zanzibar Beach Lodge",
//     image:
//       "https://symphony.cdn.tambourine.com/mountain-lodge-at-telluride/media/mountainlodgeattelluride-lodgeroom-telluride-colorado-accommodationslodge-rooms3-64fb414946b48.jpg",
//     tags: ["BEACH", "LUXURY", "FAMILY-FRIENDLY", "WELLNESS"],
//   },
//   {
//     id: 11,
//     country: "South Africa, Cape Town",
//     name: "Dock House Boutique Hotel",
//     image:
//       "https://images.adsttc.com/media/images/65d6/5e97/50f9/d16d/9eb0/3357/large_jpg/entebbe-forest-lodge-localworks_4.jpg?1708547773",
//     tags: ["LUXURY", "LEISURE", "WELLNESS"],
//   },
//   {
//     id: 12,
//     country: "South Africa, Cape Town",
//     name: "Future Nagen",
//     image:
//       "https://lakemaryronanlodge.com/wp-content/uploads/2021/02/lodge-cropped.jpg",
//     tags: ["WELLNESS", "LUXURY"],
//   },
//   {
//     id: 13,
//     country: "South Africa, Bela-Bela, Waterberg",
//     name: "BABOHI at QWABI Pjkjjiije",
//     image:
//       "https://cdn-homfb.nitrocdn.com/qetlunkKTeClpfQiVATTOyJJbvVSTFzJ/assets/images/source/rev-d854626/hukalodge.com/wp-content/uploads/2025/03/Lodge-Banner.jpg",
//     tags: ["SAFARI", "LUXURY", "WELLNESS", "LEISURE", "MICE"],
//   },
//   {
//     id: 14,
//     country: "South Africa, Stellenbosch",
//     name: "Blaauwklippen Manor",
//     image:
//       "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
//     tags: ["FAMILY-FRIENDLY", "LUXURY", "LEISURE"],
//   },
//   {
//     id: 15,
//     country: "Zimbabwe, Batoka Gorge",
//     name: "Bupenyu Lodge",
//     image:
//       "https://lakemaryronanlodge.com/wp-content/uploads/2021/02/lodge-cropped.jpg",
//     tags: ["LUXURY", "WELLNESS", "LEISURE", "ADVENTURE"],
//   },
//   {
//     id: 16,
//     country: "Tanzania, Bububu",
//     name: "Chuini Zanzibar Beach Lodge",
//     image:
//       "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
//     tags: ["BEACH", "LUXURY", "FAMILY-FRIENDLY", "WELLNESS"],
//   },
//   {
//     id: 17,
//     country: "South Africa, Cape Town",
//     name: "Dock House Boutique Hotel",
//     image:
//       "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
//     tags: ["LUXURY", "LEISURE", "WELLNESS"],
//   },
//   {
//     id: 18,
//     country: "South Africa, Cape Town",
//     name: "Future Found Sanctuary",
//     image:
//       "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
//     tags: ["WELLNESS", "LUXURY"],
//   },
//   {
//     id: 19,
//     country: "South Africa, Bela-Bela, Waterberg",
//     name: "BABOHI at QWABI Private Game Reserve",
//     image:
//       "https://cdn-homfb.nitrocdn.com/qetlunkKTeClpfQiVATTOyJJbvVSTFzJ/assets/images/source/rev-d854626/hukalodge.com/wp-content/uploads/2025/03/Lodge-Banner.jpg",
//     tags: ["SAFARI", "LUXURY", "WELLNESS", "LEISURE", "MICE"],
//   },
//   {
//     id: 20,
//     country: "South Africa, Stellenbosch",
//     name: "Blaauwklippen Manor",
//     image:
//       "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
//     tags: ["FAMILY-FRIENDLY", "LUXURY", "LEISURE"],
//   },
// ];

const PropertiesCards = () => {

  //Backend instegration start

const [properties, setProperties] = useState([]);

  const loadProperties = async () => {
    const res = await getProperties();
    setProperties(res.data);
  };


  useEffect(() => {
    loadProperties();
  }, []);


 //Backend instegration end

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // how many cards per page

  // Calculate total pages
  const totalPages = Math.ceil(properties.length / cardsPerPage);

  //   const sectionRef = useRef(null);

  // Get current page data
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = properties.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      //  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-[#faf8f1] py-10 md:py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 ">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((resort, index) => (
            <div
              key={`${resort.id}-${index}`}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group "
            >
              <Link to={`/${resort._id}`}>
                {/* Image */}
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={resort.bannerImage}
                    alt={resort.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className=" hd transition-all duration-500 group-hover:-translate-y-4">
                  <div className="p-4 bg-white group-hover:rounded-t-md">
                    <p className="text-[#aca188] text-sm capitalize">{resort.address1}</p>
                    <h3 className="text-[16px] font-[500] text-[#2e2c2d] capitalize mt-1">
                      {resort.name}
                    </h3>
                  <p className=" hd mt-2  text-[12px] font-[500] uppercase text-sky-500 " >{resort.propertyType}</p>
                    {/* Tags */}
                    {/* <div className="mt-2 flex flex-wrap gap-2 text-[12px] font-[500]">
                      {resort.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`${
                            tag === "SAFARI"
                              ? "text-red-500"
                              : tag === "BEACH"
                              ? "text-teal-500"
                              : tag === "WELLNESS"
                              ? "text-sky-500"
                              : tag === "ADVENTURE"
                              ? "text-orange-500"
                              : tag === "FAMILY-FRIENDLY"
                              ? "text-green-600"
                              : "text-gray-800"
                          }`}
                        >
                          {tag}
                          {idx !== resort.tags.length - 1 && " /"}
                        </span>
                      ))}
                    </div> */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="hd flex justify-center items-center mt-10 space-x-2">
          {/* Previous button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188]"
          >
            Prev
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx + 1)}
              className={`px-3 py-1 rounded-md border border-[#aca188] text-sm ${
                currentPage === idx + 1
                  ? "bg-[#aca188] text-white"
                  : "bg-white text-[#2e2c2d]  hover:bg-gray-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          {/* Next button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-md border text-sm disabled:opacity-50 border-[#aca188]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesCards;