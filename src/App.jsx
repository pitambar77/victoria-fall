// // import { useState } from "react";

// import "./App.css";

// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
// import Hero from "./components/Hero";
// import Nav from "./components/Nav";
// import Overview from "./pages/Home/Overview";
// import PropertiesDetails from "./pages/Property/PropertiesDetails";
// import Layout from "./Layout";
// import ExperienceDetails from "./pages/ExperienceDetails/ExperienceDetails";

// function App() {

//     const router = createBrowserRouter(
//     createRoutesFromElements(
//       <>
//        <Route path='/' element={<Layout/>}>
//        <Route path='' element={<Hero/>}/>
//        <Route path='properties-details' element={<PropertiesDetails/>}/>
//        <Route path='experience-details' element={<ExperienceDetails/>}/>


//       </Route>

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


import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Hero from "./components/Hero";
import PropertiesDetails from "./pages/Property/PropertiesDetails";
import Layout from "./Layout";
import ExperienceDetails from "./pages/ExperienceDetails/ExperienceDetails";

import PropertiesLanding from "./pages/Property/PrpertiesLanding/PropertiesLanding";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path='properties-details' element={<PropertiesDetails />} />
        <Route path='experience-details' element={<ExperienceDetails />} />
        <Route path='properties-landing' element={<PropertiesLanding/>} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;




// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Register from './components/Register';
// import Login from './components/Login';

// import DashboardLayout from "./components/DashboardLayout";


// export default function App() {
//   return (
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
//  <Router>
//       <DashboardLayout />
//     </Router>
//   );
// }
