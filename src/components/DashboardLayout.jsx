// // src/components/DashboardLayout.jsx
// import React from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import MainContent from './MainContent'; // This will contain all the dashboard widgets
// import AllRooms from './AllRooms';
// import AddRoom from './AddRoom';
// import EditRoom from './EditRoom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// const DashboardLayout = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-900 text-gray-100">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main content area */}
//       <div className="flex-1 flex flex-col pt-20 pl-64">
//         {/* Header */}
//         <Header />

//         {/* Dynamic Main Content */}
       
//         <main className="flex-1 p-6 overflow-y-auto">
//             <Routes>
//               <Route path="/" element={<MainContent />} />
//               <Route path="/rooms/all" element={<AllRooms />} />
//               <Route path="/rooms/add" element={<AddRoom />} />
//               <Route path="/rooms/edit" element={<EditRoom />} />
//             </Routes>
//           </main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

// src/components/DashboardLayout.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent'; // The main dashboard landing page
import AllRooms from './AllRooms';       // The "All Rooms" table
import AddRoom from './AddRoom';         // The "Add Room" form
import EditRoom from './EditRoom';       // The "Edit Room" form
import AllFacilities from './AllFacilities';
import AddFacility from './AddFacility';

const DashboardLayout = () => {
  return (
     <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col pt-20 pl-64">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Use Routes and Route directly within the main content area */}
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/rooms/all" element={<AllRooms />} />
            <Route path="/rooms/add" element={<AddRoom />} />
           <Route path="/rooms/edit/:id" element={<EditRoom />} /> {/* New Dynamic Route */}
            <Route path="/facilities/all" element={<AllFacilities />} /> {/* New Route */}
              <Route path="/facilities/add" element={<AddFacility />} /> {/* New Route */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;