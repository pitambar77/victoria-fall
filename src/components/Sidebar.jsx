// // src/components/Sidebar.jsx
// import React, { useState } from 'react';
// import { FaHome, FaBook, FaBed, FaUsers, FaCalendarAlt, FaTasks, FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import { HiOutlineSquares2X2 } from 'react-icons/hi2'; // For the 'Apps' icon
// import { MdOutlineDashboard } from 'react-icons/md'; // More suitable dashboard icon
// import { Link, NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   const [isBookingOpen, setIsBookingOpen] = useState(false);
 
//   const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
//   const [isAppsOpen, setIsAppsOpen] = useState(false);
//   const [isRoomsOpen, setIsRoomsOpen] = useState(true);

//   const MenuItem = ({ icon, text, path, hasChildren, isOpen, toggleOpen }) => (
//     <div>
//       <div
//         className={`flex items-center justify-between p-3 rounded-md text-gray-300 hover:bg-gray-700 transition-colors duration-200 cursor-pointer ${isOpen ? 'bg-gray-700' : ''}`}
//         onClick={toggleOpen}
//       >
//         <div className="flex items-center">
//           <span className="mr-3 text-lg">{icon}</span>
//           <span className="text-sm font-medium">{text}</span>
//         </div>
//         {hasChildren && (isOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />)}
//       </div>
//       {isOpen && hasChildren && (
//         <div className="ml-8 mt-1 space-y-1">
//           {/* Placeholder for actual child items. In a real app, these would be dynamic */}
//           <div className="text-gray-400 hover:text-gray-100 cursor-pointer p-2 text-sm">Child Item 1</div>
//           <div className="text-gray-400 hover:text-gray-100 cursor-pointer p-2 text-sm">Child Item 2</div>
//         </div>
//       )}
//     </div>
//   );

//    const NavSubLink = ({ text, path }) => (
//     <NavLink
//       to={path}
//       className={({ isActive }) => `flex items-center p-2 text-sm rounded-md transition-colors duration-200
//         ${isActive ? 'text-white font-semibold bg-gray-700' : 'text-gray-400 hover:text-gray-100'}`}
//     >
//       <span className="ml-4 mr-2 text-xs">●</span>
//       {text}
//     </NavLink>
//   );
//   const navItems = [
//     // { name: 'Home', path: '/', icon: <MdOutlineDashboard /> },
//     { name: 'Booking', icon: <FaBook />, subLinks: ['All Bookings', 'New Booking'] },
//     { name: 'Rooms', icon: <FaBed />, subLinks: ['All Rooms', 'Add Room', 'Edit Room'] },
//     {
//         name:'Facilities', icon: <FaBed/>
//     }
//     // ... (other items)
//   ];

//   return (
//     <div className="w-64 bg-gray-800 shadow-xl flex flex-col py-6 px-4 fixed top-0 left-0 h-full">
//       {/* Logo */}
//       <div className="flex items-center mb-10 pl-2">
       
//         <img src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png" alt="" className=' w-30'/>
       
//         {/* <button className="ml-auto text-gray-400 hover:text-gray-100">
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
//         </button> */}
//       </div>

//       {/* User Profile */}
//       <div className="flex items-center mb-8 px-2">
//         <img
//           src="https://randomuser.me/api/portraits/women/68.jpg" // Placeholder image
//           alt="Emily Smith"
//           className="w-12 h-12 rounded-full border-2 border-gray-600"
//         />
//         <div className="ml-3">
//           <p className="font-semibold text-gray-100">Emily Smith</p>
//           <p className="text-xs text-gray-400">Property Owner</p>
//         </div>
//       </div>

//       {/* Main Navigation */}
//       {/* <nav className="flex-1 space-y-2">
//         <p className="text-xs uppercase text-gray-500 mb-2 pl-2">Main</p>
//         <NavLinkItem icon={<MdOutlineDashboard />} text="Home" path="/" isActive={true} />
        
//         <MenuItem icon={<FaBook />} text="Booking" hasChildren isOpen={isBookingOpen} toggleOpen={() => setIsBookingOpen(!isBookingOpen)} />
//         <MenuItem icon={<FaBed />} text="Rooms" hasChildren isOpen={isRoomsOpen} toggleOpen={() => setIsRoomsOpen(!isRoomsOpen)} />
//         <MenuItem icon={<FaUsers />} text="Staff" hasChildren isOpen={isDepartmentsOpen} toggleOpen={() => setIsDepartmentsOpen(!isDepartmentsOpen)} />
//         <MenuItem icon={<HiOutlineSquares2X2 />} text="Departments" hasChildren isOpen={isDepartmentsOpen} toggleOpen={() => setIsDepartmentsOpen(!isDepartmentsOpen)} />

//         <p className="text-xs uppercase text-gray-500 mb-2 mt-6 pl-2">Apps</p>
//         <NavLinkItem icon={<FaCalendarAlt />} text="Calendar" path="/calendar" badge="NEW" />
//         <NavLinkItem icon={<FaTasks />} text="Task" path="/tasks" />
//       </nav> */}
//       <nav className="flex-1 space-y-2">
//         <p className="text-xs uppercase text-gray-500 mb-2 pl-2">Main</p>
//         <NavLinkItem icon={<MdOutlineDashboard />} text="Home" path="/" isActive={true} />

//         {/* Dynamic menu items with sub-links */}
//         {/* {navItems.map((item, index) => (
//           <div key={index}>
//             <MenuItem
//               icon={item.icon}
//               text={item.name}
//               hasChildren={!!item.subLinks}
//               isOpen={item.name === 'Rooms' ? isRoomsOpen : false} // Control which menu is open
//               toggleOpen={() => {
//                 if (item.name === 'Rooms') setIsRoomsOpen(!isRoomsOpen);
//                 // Add logic for other menus if needed
//               }}
//             />
//             {item.subLinks && item.name === 'Rooms' && isRoomsOpen && (
//               <div className="ml-8 mt-1 space-y-1">
//                 <NavSubLink text="All Rooms" path="/rooms/all" />
//                 <NavSubLink text="Add Room" path="/rooms/add" />
//                 <NavSubLink text="Edit Room" path="/rooms/edit" />
//               </div>
//             )}
//           </div>
//         ))} */}
//         {/* Rooms menu item */}
//         <div onClick={() => setIsRoomsOpen(!isRoomsOpen)}>
//           <div className="flex items-center justify-between p-3 rounded-md text-gray-300 hover:bg-gray-700 cursor-pointer">
//             <div className="flex items-center">
//               <span className="mr-3 text-lg"><FaBed /></span>
//               <span className="text-sm font-medium">Rooms</span>
//             </div>
//             {isRoomsOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
//           </div>
//         </div>
        
//         {/* Rooms sub-links, only rendered if isRoomsOpen is true */}
//         {isRoomsOpen && (
//           <div className="ml-8 mt-1 space-y-1">
//             <NavSubLink text="All Rooms" path="/rooms/all" />
//             <NavSubLink text="Add Room" path="/rooms/add" />
//             {/* <NavSubLink text="Edit Room" path="/rooms/edit" /> */}
//           </div>
//         )}
//       </nav>
//     </div>
//   );
// };

// // Helper component for static NavLinks without children
// const NavLinkItem = ({ icon, text, path, isActive = false, badge = null }) => (
//   <a href={path} className={`flex items-center p-3 rounded-md text-gray-300 hover:bg-gray-700 transition-colors duration-200 ${isActive ? 'bg-blue-600 text-white' : ''}`}>
//     <span className="mr-3 text-lg">{icon}</span>
//     <span className="text-sm font-medium">{text}</span>
//     {badge && (
//       <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
//         {badge}
//       </span>
//     )}
//   </a>
// );

// export default Sidebar;


// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { FaHome, FaBook, FaBed, FaUsers, FaCalendarAlt, FaTasks, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiOutlineSquares2X2 } from 'react-icons/hi2';
import { MdOutlineDashboard } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { BiBuildingHouse } from 'react-icons/bi'; // A suitable icon for Facilities

const Sidebar = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isDepartmentsOpen, setIsDepartmentsOpen] = useState(false);
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(true);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false); // New state for Facilities

  const NavSubLink = ({ text, path }) => (
    <NavLink
      to={path}
      className={({ isActive }) => `flex items-center p-2 text-sm rounded-md transition-colors duration-200
        ${isActive ? 'text-white font-semibold bg-gray-700' : 'text-gray-400 hover:text-gray-100'}`}
    >
      <span className="ml-4 mr-2 text-xs">●</span>
      {text}
    </NavLink>
  );

  return (
    <div className="w-64 bg-gray-800 shadow-xl flex flex-col py-6 px-4 fixed top-0 left-0 h-full">
      {/* Logo */}
      <div className="flex items-center mb-10 pl-2">
        <img src="https://whereto.africa/wp-content/uploads/2020/06/whereto-logo.png" alt="" className='w-30'/>
      </div>

      {/* User Profile */}
      <div className="flex items-center mb-8 px-2">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Emily Smith"
          className="w-12 h-12 rounded-full border-2 border-gray-600"
        />
        <div className="ml-3">
          <p className="font-semibold text-gray-100">Emily Smith</p>
          <p className="text-xs text-gray-400">Property Owner</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-2">
        <p className="text-xs uppercase text-gray-500 mb-2 pl-2">Main</p>
        
        <NavLink
          to="/"
          className={({ isActive }) => `flex items-center p-3 rounded-md text-gray-300 hover:bg-gray-700 transition-colors duration-200
            ${isActive ? 'bg-gray-700 text-white' : ''}`}
        >
          <span className="mr-3 text-lg"><MdOutlineDashboard /></span>
          <span className="text-sm font-medium">Home</span>
        </NavLink>

        {/* Rooms menu item */}
        <div onClick={() => setIsRoomsOpen(!isRoomsOpen)}>
          <div className="flex items-center justify-between p-3 rounded-md text-gray-300 hover:bg-gray-700 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-3 text-lg"><FaBed /></span>
              <span className="text-sm font-medium">Rooms</span>
            </div>
            {isRoomsOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
          </div>
        </div>
        
        {/* Rooms sub-links */}
        {isRoomsOpen && (
          <div className="ml-8 mt-1 space-y-1">
            <NavSubLink text="All Rooms" path="/rooms/all" />
            <NavSubLink text="Add Room" path="/rooms/add" />
          </div>
        )}

        {/* Facilities menu item */}
        <div onClick={() => setIsFacilitiesOpen(!isFacilitiesOpen)}>
          <div className="flex items-center justify-between p-3 rounded-md text-gray-300 hover:bg-gray-700 cursor-pointer">
            <div className="flex items-center">
              <span className="mr-3 text-lg"><BiBuildingHouse /></span>
              <span className="text-sm font-medium">Facilities</span>
            </div>
            {isFacilitiesOpen ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
          </div>
        </div>
        
        {/* Facilities sub-links */}
        {isFacilitiesOpen && (
          <div className="ml-8 mt-1 space-y-1">
            <NavSubLink text="All Facilities" path="/facilities/all" />
            <NavSubLink text="Add Facility" path="/facilities/add" />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;