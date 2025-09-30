// // src/components/RestaurantPage.jsx
// import React from 'react'; // Assuming MenuItem.jsx is in the same directory
// import MenuItem from '../../../components/MenuItem';
// import Button from '../../../components/Button';

// // Data for the Menu Sections
// const topRatedDishes = [
//   { title: "TENDER OCTOPUS AND FENNEL", price: 25, description: "Citrus, wild rocket condiment." },
//   { title: "WILD MUSHROOM ARANCINI", price: 25, description: "Truffle, fresh lime juice, and orange biscuit" },
//   { title: "PURPLE CORN TOSTADA", price: 36, description: "Roasted sweet corn, chili, lime, and cilantro." },
//   { title: "CRISPY SKIN CHICKEN", price: 36, description: "With charred scallions and dark teriyaki." },
//   { title: "BRUNO'S SCRIBBLE", price: 59, description: "Classico, Spaghetti, Cacio, Guanciale, Culacciona." },
//   { title: "TENDER OCTOPUS AND FENNEL", price: 59, description: "Citrus, wild rocket condiment." },
//   { title: "WILD MUSHROOM ARANCINI", price: 18, description: "Avocado, purple onion, basil." },
//   { title: "TOMMY'S MARGARITA", price: 18, description: "Tequila, fresh lime juice, and orange biscuit" },
//   { title: "FISH & CHIPS", price: 39, description: "Atlantic cod fillet, chips, salad, tartar, lemon." },
//   { title: "PRICKLY PEAR TONIC", price: 18, description: "Prickly Pear, Chamomile, Key Lime, and Tonic" },
// ];

// const seafoodDishes = [
//   { title: "TENDER OCTOPUS AND FENNEL", price: 25, description: "Citrus, wild rocket condiment." },
//   { title: "WILD MUSHROOM ARANCINI", price: 25, description: "Citrus, wild rocket condiment." },
//   { title: "PURPLE CORN TOSTADA", price: 36, description: "Roasted sweet corn, chili, lime, and cilantro." },
//   { title: "CRISPY SKIN CHICKEN", price: 36, description: "With charred scallions and dark teriyaki." },
//   { title: "BRUNO'S SCRIBBLE", price: 59, description: "Classico, Spaghetti, Cacio, Guanciale, Culacciona." },
//   { title: "TENDER OCTOPUS AND FENNEL", price: 59, description: "Citrus, wild rocket condiment." },
//   { title: "WILD MUSHROOM ARANCINI", price: 18, description: "Avocado, purple onion, basil." },
//   { title: "TOMMY'S MARGARITA", price: 18, description: "Tequila, fresh lime juice, and orange biscuit" },
//   { title: "FISH & CHIPS", price: 39, description: "Atlantic cod fillet, chips, salad, tartar, lemon." },
//   { title: "PRICKLY PEAR TONIC", price: 18, description: "Prickly Pear, Chamomile, Key Lime, and Tonic" },
// ];

// const RestaurantsMenu = () => {
//   return (
//     <div className=" hd max-w-[1140px] mx-auto px-4 md:px-0 py-20">
//       {/* MAIN MENU SECTION */}
//       <div className="text-center mb-10">
//         <p className="text-xs  text-[#2e2c2d] tracking-widest uppercase">TOP RATED DISHES</p>
//         <h1 className="hd text-[30px] mb-6 font-[500] text-[#2e2c2d] tracking-[3px] uppercase">MAIN MENU</h1>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">
//         {topRatedDishes.map((item, index) => (
//           <MenuItem
//             key={index}
//             title={item.title}
//             price={item.price}
//             description={item.description}
//           />
//         ))}
//       </div>

//       {/* IMAGE SEPARATOR 1: Shrimp Dish */}
//       <div className="my-10">
//         <img
//           src="https://www.gorillaugandasafaris.com/wp-content/uploads/2025/05/13-Must-Try-Local-Foods-in-Cape-Town-for-Every-Traveler.jpg" // Replace with your image path or a placeholder
//           alt="A delicious shrimp dish"
//           className="w-full  h-[500px] object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       {/* SECONDARY MENU SECTION */}
//       <div className="flex justify-between text-center mb-8 pt-4">
//         <div className="flex-1">
//           <p className="text-xs hd text-gray-500 tracking-widest uppercase border-b border-gray-200 pb-2">FRESH FROM THE OCEAN</p>
//           <h2 className="text-3xl hd text-gray-900 mt-1">SEAFOOD</h2>
//         </div>
//         <div className="flex-1">
//           <p className="text-xs hd text-gray-500 tracking-widest uppercase border-b border-gray-200 pb-2">FOOD OF HEALTH</p>
//           <h2 className="text-3xl hd text-gray-900 mt-1">DESSERTS</h2>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
//         {seafoodDishes.map((item, index) => (
//           <MenuItem
//             key={index}
//             title={item.title}
//             price={item.price}
//             description={item.description}
//           />
//         ))}
//       </div>

//       {/* IMAGE SEPARATOR 2: Egg Toast */}
//       <div className="my-10">
//         <img
//           src="https://iol-prod.appspot.com/image/f26461d40465033da0466e224e74577fb4a628ef/5000" // Replace with your image path or a placeholder
//           alt="Egg on toast with spices"
//           className="w-full h-[500px] object-cover rounded-lg shadow-lg"
//         />
//       </div>

//       {/* TABLE BOOKING SECTION */}
//       <div className="mt-12 text-center">
//         <div className="text-sm font-light text-gray-500 tracking-widest uppercase mb-1">YOUR SPECIAL MOMENT</div>
//         <h2 className="text-4xl font-serif text-gray-900 mb-2">BOOK A TABLE</h2>
//         <p className="text-sm text-gray-500 max-w-md mx-auto mb-8">
//           Book a table online and dine at <span className="font-semibold">basilico restaurant</span> to enjoy the special flavors, cozy space with your family and loved ones!
//         </p>

//         <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
//             {/* Left Image (Dining Area) */}
//             <div className="w-full md:w-1/4">
//                 <div className="relative pt-[130%] rounded-xl overflow-hidden shadow-xl">
//                     <img
//                         src="https://capetown.hotelguide.co.za/images/seafood-cape-town-590x390.jpg" // Replace with your image path or a placeholder
//                         alt="Restaurant dining area"
//                         className="absolute top-0 left-0 w-full h-full object-cover"
//                     />
//                 </div>
//             </div>

//             {/* Booking Form */}
            // <form className="w-full md:w-1/2 p-4">
            //     <div className="grid grid-cols-2 gap-4 mb-4">
            //         <input type="text" placeholder="Name*" className="p-3 border border-gray-300 focus:border-gray-500 rounded-md placeholder-gray-500 text-sm" required />
            //         <input type="email" placeholder="Email*" className="p-3 border border-gray-300 focus:border-gray-500 rounded-md placeholder-gray-500 text-sm" required />
            //         <input type="number" placeholder="Amount of people" className="p-3 border border-gray-300 focus:border-gray-500 rounded-md placeholder-gray-500 text-sm" />
            //         <input type="time" placeholder="Arrival time" className="p-3 border border-gray-300 focus:border-gray-500 rounded-md text-gray-500 text-sm" />
            //         <input type="date" placeholder="18/9/2023" className="p-3 border border-gray-300 focus:border-gray-500 rounded-md text-gray-500 text-sm col-span-2" />
            //     </div>

            //     <Button
            //         type="submit"

            //     >
            //         BOOK YOUR TABLE
            //     </Button>
            // </form>

//             {/* Right Image (Table Setting) */}
//             <div className="w-full md:w-1/4">
//                 <div className="relative pt-[130%] rounded-full overflow-hidden shadow-xl">
//                     <img
//                         src="https://capetown.hotelguide.co.za/images/seafood-cape-town-590x390.jpg" // Replace with your image path or a placeholder
//                         alt="Restaurant table setting"
//                         className="absolute top-0 left-0 w-full h-full object-cover"
//                     />
//                 </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantsMenu;

import React, { useState } from "react";
import Button from "../../../components/Button";

// --- Data Structure for all Menu Tabs ---

// Data for the 'SPERICAL MENU' (from the image)
const SPERICAL_MENU_DATA = [
  {
    name: "TENDER OCTOPUS AND FENNEL",
    description: "Citrus, wild rocket condiment.",
    price: "$25",
  },
  {
    name: "PURPLE CORN TOSTADA",
    description: "Ricotta, goat cheese, beetroot and datterini.",
    price: "$36",
  },
  {
    name: "BRUNO'S SCRIBBLE",
    description: "Culatello, Spalla Cotta, Mortadella, Culacciona.",
    price: "$59",
  },
  {
    name: "WILD MUSHROOM ARANCINI",
    description: "Porcini purée, parmesan, basil.",
    price: "$18",
  },
  {
    name: "CRISPY SKIN CHICKEN",
    description: "Ricotta, radicchio, prosciutto salad, cabernet.",
    price: "$25",
  },
];

// Placeholder data for other tabs
const DRINKS_DATA = [
  {
    name: "The Golden Hour Cocktail",
    description: "Whiskey, vermouth, orange zest, smoked ice.",
    price: "$15",
  },
  {
    name: "Artisan Espresso",
    description: "Single origin beans, double shot.",
    price: "$5",
  },
  {
    name: "Sparkling Rosé",
    description: "Provence, light and crisp.",
    price: "$12",
  },
];

const SEAFOOD_DATA = [
  {
    name: "Seared Scallops",
    description: "Lemon-butter sauce, micro greens.",
    price: "$32",
  },
  {
    name: "Lobster Ravioli",
    description: "Saffron cream sauce, fresh basil.",
    price: "$45",
  },
];

const DESSERTS_DATA = [
  {
    name: "Chocolate Lava Cake",
    description: "Vanilla bean ice cream, raspberry coulis.",
    price: "$14",
  },
  {
    name: "Tiramisu Classico",
    description: "Mascarpone, ladyfingers, cocoa powder.",
    price: "$13",
  },
];

// Map of category names to their respective data
const ALL_MENU_DATA = {
  "SPERICAL MENU": SPERICAL_MENU_DATA,
  DRINKS: DRINKS_DATA,
  SEAFOOD: SEAFOOD_DATA,
  DESSERTS: DESSERTS_DATA,
};

const RestaurantsMenu = () => {
  // State to manage the active tab. Initialize with the first one.
  const [activeTab, setActiveTab] = useState("SPERICAL MENU");

  // Get the data for the currently active tab
  const currentMenuItems = ALL_MENU_DATA[activeTab];

  // Utility classes for easy styling
  const textPrimary = "text-gray-300";
  const textSecondary = "text-gray-500";

  return (
    <section className=" py-20  hd bg-[#f9f9f9]">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-0 text-center">
        {/* Header Section (Same as before) */}
        <p
          className={`text-sm tracking-widest uppercase mb-4 text-[#5c5e62] `}
        >
          TASTE THE BEST THAT SURPRISE YOU
        </p>
        <h2 className="hd text-[30px]  font-semibold text-[#2e2c2d] tracking-[3px] uppercase mb-6">
          OUR SPECIAL MENU
        </h2>
        <p
          className={`hd max-w-2xl mx-auto text-center text-[#5c5e62] tracking-[1px] italic mb-10 `}
        >
          We always give our customers a feeling of peace of mind and comfort when dining at our restaurant
Sed ut perspiciatis unde omnis iste natus error voluptate accusantium
        </p>

        {/* --- Tab Navigation Section --- */}
        <div className="flex justify-center space-x-4 sm:space-x-8 mb-12 uppercase tracking-widest text-sm ">
          {Object.keys(ALL_MENU_DATA).map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)} // Update state on click
              className={`
                  pb-4 cursor-pointer transition duration-300 ease-in-out
                  ${
                    activeTab === tabName // Conditional styling for the active tab
                      ? "font-bold border-b-2 border-[#aca288] text-[#aca288]  "
                      : "   hover:text-[#aca288]"
                  }
                `}
            >
              {tabName}
            </button>
          ))}
        </div>

        {/* Main Content: Images and Menu List (The list now changes dynamically) */}

        {/* --- Menu Items List (Dynamically rendered based on activeTab) --- */}
        <div className=" w-2/3 mx-auto">
          {currentMenuItems.map((item, index) => (
            <div key={index} className="py-4 ">
              <div className="flex justify-between items-center mb-1">
                {/* Dish Name */}
                <span
                  className={`text-lg uppercase tracking-wider font-[500] text-[#2e2c2d] `}
                >
                  {item.name}
                </span>
                <div className="">
                  <div className=" w-50 h-[1px]  bg-[#efdc94] mb-1" />
                  <div className=" w-50 h-[1px]  bg-[#efdc94] " />
                </div>

                {/* <div className=" w-[20%] h-[1px]  bg-[#efdc94]" /> */}
                {/* Price */}
                <span className={`text-lg font-[500] text-[#2e2c2d] `}>{item.price}</span>
              </div>
              {/* Dish Description */}
              <p className={`text-sm ${textSecondary} text-left`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* "View All Menu" Button */}
        <div className="mt-20">
          <Button className="border border-amber-300 py-3 px-8 text-sm tracking-widest uppercase  hover:text-[#0b132a] transition duration-300">
            VIEW ALL MENU
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantsMenu;
