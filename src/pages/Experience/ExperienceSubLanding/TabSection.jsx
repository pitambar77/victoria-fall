import React, { useState } from "react";

const categories = [
  "FOOD & CULINARY EXPERIENCES",
  "HISTORICAL & CULTURAL TOURS",
  "MARINE ADVENTURES",
  "NATURE & WILDLIFE",
  "PACKAGE DEALS",
  "SCENIC HELICOPTER",
  "WINE ROUTES & TASTING",
  
];

const activities = [
  {
    id: 1,
    category: "FOOD & CULINARY EXPERIENCES",
    title: "Cape Town Culinary – Taste of Africa Tour.",
    price: "From R 1975",
    image:
      "https://media.timeout.com/images/105861701/750/562/image.jpg",
  },
  {
    id: 2,
    category: "FOOD & CULINARY EXPERIENCES",
    title: "Cape Town Culinary – Essentials Tour",
    price: "From R 1975",
    image:
      "https://res.cloudinary.com/hynomj8e0/image/upload/c_fit,w_1200,h_1200/z0ewj8vq4mgai1jncvlq.png",
  },
  {
    id: 3,
    category: "HISTORICAL & CULTURAL TOURS",
    title: "Half Day City and Table Mountain Tour",
    price: "From R 840",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_5yah-Clf5KVy-vtiiJAJrxl8QM4BMYB65g&s",
  },
  {
    id: 4,
    category: "PACKAGE DEALS",
    title: "Best of Cape Full Day Tour",
    price: "From R 2400",
    image:
      "https://www.leeuwenzee.co.za/wp-content/uploads/2023/02/cape-town-events-2023.jpg",
  },
  {
    id: 5,
    category: "HISTORICAL & CULTURAL TOURS",
    title: "Cape Township Tour – Half Day",
    price: "From R 980",
    image:
      "https://s43365.pcdn.co/wp-content/uploads/2025/01/pexels-ajaybhargavguduru-939702.jpg",
  },
     {
    id: 6,
    category: "HISTORICAL & CULTURAL TOURS",
    title: "Cape Township Tour – Half Day",
    price: "From R 980",
    image:
      "https://s43365.pcdn.co/wp-content/uploads/2025/01/pexels-ajaybhargavguduru-939702.jpg",
  },
    {
    id: 7,
    category: "HISTORICAL & CULTURAL TOURS",
    title: "Cape Township Tour – Half Day",
    price: "From R 980",
    image:
      "https://s43365.pcdn.co/wp-content/uploads/2025/01/pexels-ajaybhargavguduru-939702.jpg",
  },
    {
    id: 8,
    category: "HISTORICAL & CULTURAL TOURS",
    title: "Cape Township Tour – Half Day",
    price: "From R 980",
    image:
      "https://s43365.pcdn.co/wp-content/uploads/2025/01/pexels-ajaybhargavguduru-939702.jpg",
  },
    {
    id: 9,
    category: "HISTORICAL & CULTURAL TOURS",
    title: "Cape Township Tour – Half Day",
    price: "From R 980",
    image:
      "https://s43365.pcdn.co/wp-content/uploads/2025/01/pexels-ajaybhargavguduru-939702.jpg",
  },
    {
    id: 10,
    category: "HISTORICAL & CULTURAL TOURS",
    title: "Cape Township Tour – Half Day",
    price: "From R 980",
    image:
      "https://s43365.pcdn.co/wp-content/uploads/2025/01/pexels-ajaybhargavguduru-939702.jpg",
  },
  {
    id: 11,
    category: "FOOD & CULINARY EXPERIENCES",
    title: "Cape Town Culinary – Taste of Africa Tour.",
    price: "From R 1975",
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/16/8a/a4/e3.jpg",
  },
  {
    id: 12,
    category: "FOOD & CULINARY EXPERIENCES",
    title: "Cape Town Culinary – Taste of Africa Tour.",
    price: "From R 1975",
    image:
      "https://www.africaendeavours.com/wp-content/uploads/2016/01/Woodstock-Markets-650x400-food.jpg.jpg",
  },
  {
    id: 13,
    category: "FOOD & CULINARY EXPERIENCES",
    title: "Cape Town Culinary – Taste of Africa Tour.",
    price: "From R 1975",
    image:
      "https://www.goodthingsguy.com/wp-content/uploads/2016/07/Freestyle-Food-241-620x400.jpg",
  },
  {
    id: 14,
    category: "FOOD & CULINARY EXPERIENCES",
    title: "Cape Town Culinary – Taste of Africa Tour.",
    price: "From R 1975",
    image:
      "https://veggiesabroad.com/wp-content/uploads/2024/07/vegan-food-cape-town.jpg",
  },
];

const TabSection = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredActivities = activities.filter(
    (item) => item.category === activeCategory
  );

  return (
    <div className=" bg-amber-50/60 py-20">
      <div className="max-w-[1140px] mx-auto px-4 md:px-0">
        {/* Title */}
         <h2 className=" hd text-center text-[30px] mb-14 font-semibold text-[#2e2c2d] tracking-[3px] uppercase ">
       well come to Cape Town <br className="hidden md:inline" /> Activities
      </h2>
        <p className="hd text-center text-gray-600 ">
          Choose the category/ies of Cape Town Activities to suit your
          preferences, and start booking your memories.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={` hd px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#aca188] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <div className="h-[200px] overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className=" hd transition-all duration-500 group-hover:-translate-y-4">
                  <div className="p-4 bg-white group-hover:rounded-t-md text-center">
                   
                    <h3 className="text-lg font-[500] text-[#2e2c2d] mt-1 uppercase">
                      {activity.title}
                    </h3>
                    <button className=' my-2 text-[#2e2c2d] border  border-[#aca188] rounded-[50px] text-[14px] leading-[1.6] uppercase tracking-[3px] font-normal py-[8px] px-[20px]  transition-colors duration-300 cursor-pointer ease-out'>View Destination</button>
                   
                    
                    
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabSection;

