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
        {/* <Route path=':id' element={<Prodetails/>} /> */}
<Route path=':id' element={<PropertiesDetails />} />

      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

