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
import ExperienceLanding from "./pages/Experience/ExperienceLanding/ExperienceLanding";
import ExperienceSubLanding from "./pages/Experience/ExperienceSubLanding/ExperienceSubLanding";
import ResturantsLanding from "./pages/Resturants/ResturantsLanding/ResturantsLanding";
import ResturantsDetails from "./pages/Resturants/ResturantsDetails/ResturantsDetails";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path='properties-details' element={<PropertiesDetails />} />
        <Route path='experience-details' element={<ExperienceDetails />} />
        <Route path='properties-landing' element={<PropertiesLanding/>} />
        {/* <Route path=':id' element={<Prodetails/>} /> */}
<Route path=':id' element={<PropertiesDetails />} />
<Route path="experience-landing" element={<ExperienceLanding/>}/>
<Route path="experience-sub-landing" element={<ExperienceSubLanding/>}/>
<Route path="resturants-landing" element={<ResturantsLanding/>}/>
<Route path="resturants-details" element={<ResturantsDetails/>}/>
<Route path='/restrant/:id' element={<ResturantsDetails />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

