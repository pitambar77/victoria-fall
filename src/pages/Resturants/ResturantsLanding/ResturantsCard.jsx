// src/components/ResortGrid.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const resturants = [
  {
    id: 1,
    country: "South Africa, Bela-Bela, Waterberg",
    name: "BABOHI at QWABI Private Game Reserve",
    image:
      "https://www.top25restaurants.com/media/img/2023/05/worlds-best-restaurant-angsana_si_said-marrakesh_morocco_PLIbnoo.jpg",
   
  },
  {
    id: 2,
    country: "South Africa, Stellenbosch",
    name: "Blaauwklippen Manor",
    image:
      "https://cdn.24.co.za/files/Cms/General/d/9231/86eced7032f743de898b6286cb99e9ae.jpg",
  
  },
  {
    id: 3,
    country: "Zimbabwe, Batoka Gorge",
    name: "Bupenyu Lodge",
    image:
      "https://silverkris.singaporeair.com/wp-content/uploads/2017/09/four-seasons-westcliff-1.jpg",
   
  },
  {
    id: 4,
    country: "Tanzania, Bububu",
    name: "Chuini Zanzibar Beach Lodge",
    image:
      "https://archello.com/thumbs/images/2023/07/26/cooop.-nando--039-s---potchefstroom--south-africa-restaurants-archello.1690336539.9877.jpg?fit=crop&auto=compress",
    
  },
  {
    id: 5,
    country: "South Africa, Cape Town",
    name: "Dock House Boutique Hotel",
    image:
      "https://static.where-e.com/Malaysia/Selangor_State/Out-Of-Africa-Restaurant--Kudu-Bar_1ad3881a137300c5640b8413e3c2d350.jpg",
    
  },
  {
    id: 6,
    country: "South Africa, Cape Town",
    name: "Future Found Sanctuary",
    image:
      "https://www.luxurylifestylemag.co.uk/wp-content/uploads/2025/04/The-Twelve-Apostles-Azure-Restaurant-Terrace-14.jpg",
    
  },
  {
    id: 7,
    country: "South Africa, Bela-Bela, Waterberg",
    name: "BABOHI at BBs",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/4a/9f/de/one-of-many-signature.jpg",
   
  },
  {
    id: 8,
    country: "South Africa, Stellenbosch",
    name: "Blaauwklippen Manor",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/da/95/33/giraffe-manor.jpg?w=700&h=-1&s=1",
   
  },
  {
    id: 9,
    country: "Zimbabwe, Batoka Gorge",
    name: "Bupenyu Lodge",
    image:
      "https://www.few.ae/wp-content/uploads/2025/03/KIZA-Restaurant-Lounge-Dubai-1024x683.jpg",
    
  },
  {
    id: 10,
    country: "Tanzania, Bububu",
    name: "Chuini Zanzibar Beach Lodge",
    image:
      "https://traveltank.com/blog/wp-content/uploads/2022/05/African-food-pic.jpg",
    
  },
  {
    id: 11,
    country: "South Africa, Cape Town",
    name: "Dock House Boutique Hotel",
    image:
      "https://images.squarespace-cdn.com/content/v1/61c48cb8421b7f68f61cea35/965283ef-781e-4d3e-a99d-8060bffffa91/1F5A1502.jpg",
    
  },
  {
    id: 12,
    country: "South Africa, Cape Town",
    name: "Future Nagen",
    image:
      "https://www.few.ae/wp-content/uploads/2025/03/Tribes-Restaurant-Dubai-1024x683.jpg",
    
  },
  {
    id: 13,
    country: "South Africa, Bela-Bela, Waterberg",
    name: "BABOHI at QWABI Pjkjjiije",
    image:
      "https://cdn-homfb.nitrocdn.com/qetlunkKTeClpfQiVATTOyJJbvVSTFzJ/assets/images/source/rev-d854626/hukalodge.com/wp-content/uploads/2025/03/Lodge-Banner.jpg",
    
  },
  {
    id: 14,
    country: "South Africa, Stellenbosch",
    name: "Blaauwklippen Manor",
    image:
      "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
    
  },
  {
    id: 15,
    country: "Zimbabwe, Batoka Gorge",
    name: "Bupenyu Lodge",
    image:
      "https://lakemaryronanlodge.com/wp-content/uploads/2021/02/lodge-cropped.jpg",
   
  },
  {
    id: 16,
    country: "Tanzania, Bububu",
    name: "Chuini Zanzibar Beach Lodge",
    image:
      "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
  
  },
  {
    id: 17,
    country: "South Africa, Cape Town",
    name: "Dock House Boutique Hotel",
    image:
      "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
    
  },
  {
    id: 18,
    country: "South Africa, Cape Town",
    name: "Future Found Sanctuary",
    image:
      "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
    
  },
  {
    id: 19,
    country: "South Africa, Bela-Bela, Waterberg",
    name: "BABOHI at QWABI Private Game Reserve",
    image:
      "https://cdn-homfb.nitrocdn.com/qetlunkKTeClpfQiVATTOyJJbvVSTFzJ/assets/images/source/rev-d854626/hukalodge.com/wp-content/uploads/2025/03/Lodge-Banner.jpg",
   
  },
  {
    id: 20,
    country: "South Africa, Stellenbosch",
    name: "Blaauwklippen Manor",
    image:
      "https://www.togwoteelodge.com/media/601900/togwotee-mountain-lodge_guest-room_002_1000x667.jpg?anchor=center&mode=crop&width=2000&height=1334&rnd=131909119990000000",
    
  },
];

const ResturantsCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9; // how many cards per page

  // Calculate total pages
  const totalPages = Math.ceil(resturants.length / cardsPerPage);

  //   const sectionRef = useRef(null);

  // Get current page data
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = resturants.slice(indexOfFirstCard, indexOfLastCard);

  // Handle page change
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      //  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" bg-[#faf8f1] py-20">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-0 ">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentCards.map((resort, index) => (
            <div
              key={`${resort.id}-${index}`}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group "
            >
              <Link to={`/resturants-details`}>
                {/* Image */}
                <div className="h-[200px] w-full overflow-hidden">
                  <img
                    src={resort.image}
                    alt={resort.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className=" hd text-center transition-all duration-500 group-hover:-translate-y-4">
                  <div className="p-4 bg-white group-hover:rounded-t-md">
                    <p className="text-[#aca188] text-sm">{resort.country}</p>
                    <h3 className="text-[16px] font-[500] text-[#2e2c2d] mt-1">
                      {resort.name}
                    </h3>

                  
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

export default ResturantsCard