// import { useState } from "react";

import "./App.css";

// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Hero from "./components/Hero";
// import Nav from "./components/Nav";

// function App() {

//     const router = createBrowserRouter(
//     createRoutesFromElements(
//       <>
//        <Route path="/" element={<Nav/>}/>
//        <Route path="" element={<Hero/>}/>

//       </>
//     )
//   )
//   return (
//     <>
//       <RouterProvider router={router}/>
    
//     </>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

import DashboardLayout from "./components/DashboardLayout";


export default function App() {
  return (
//     <BrowserRouter>
//       {/* <div className="min-h-screen bg-white flex items-start justify-center p-6">
//         <div className="w-full max-w-xl"> */}
//           {/* <div className="mb-6 flex items-center gap-6">
//             <Link to="/login" className="text-gray-500">Log In</Link>
//             <Link to="/register" className="text-red-500 border-b-2 border-red-200 pb-2">Register</Link>
//           </div> */}
// <DashboardLayout/>
//           <Routes>
            
//             {/* <Route path="/" element={<DashboardLayout/>} /> */}
//             {/* <Route path="/rooms/all" element={<AllRooms />} />
//               <Route path="/rooms/add" element={<AddRoom />} />
//               <Route path="/rooms/edit" element={<EditRoom />} /> */}
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         {/* </div>
//       </div> */}
//     </BrowserRouter>
 <Router>
      <DashboardLayout />
    </Router>
  );
}
