import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from "./components/Hero";
import PropertiesDetails from "./pages/Property/PropertiesDetails";
import Layout from "./Layout";
import ExperienceDetails from "./pages/ExperienceDetails/ExperienceDetails";

import PropertiesLanding from "./pages/Property/PrpertiesLanding/PropertiesLanding";
import ExperienceLanding from "./pages/Experience/ExperienceLanding/ExperienceLanding";
import ExperienceSubLanding from "./pages/Experience/ExperienceSubLanding/ExperienceSubLanding";
import ResturantsLanding from "./pages/Resturants/ResturantsLanding/ResturantsLanding";
import ResturantsDetails from "./pages/Resturants/ResturantsDetails/ResturantsDetails";
import DashboardLayout from "./components/DashboardLayout";

//Backend connect

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import RestaurantList from "./pages/Restaurants/RestaurantList";
import RestaurantForm from "./pages/Restaurants/RestaurantForm";
import RestaurantDetails from "./pages/Restaurants/RestaurantDetails";
import PropertyList from "./pages/Properties/PropertyList";
import PropertyForm from "./pages/Properties/PropertyForm";
import PropertyDetails from "./pages/Properties/PropertyDetails";
import ActivityList from "./pages/Activities/ActivityList";
import ActivityForm from "./pages/Activities/ActivityForm";
import DestinationForm from "./pages/Activities/DestinationForm";
import CategoryForm from "./pages/Activities/CategoryForm";
import ActivityDetails from "./pages/Activities/ActivityDetails";
import DestinationList from "./pages/Activities/DestinationList";
import CategoryList from "./pages/Activities/CategoryList";
import DestinationsLanding from "./pages/Activities/DestinationsLanding";
import DestinationDetails from "./pages/Activities/DestinationDetails";
import LuxuryConciergeServices from "./pages/ConciergeServices/LuxuryConciergeServices";
import OwnersApplication from "./pages/OwnersApplication/OwnersApplication";
import ContactUs from "./pages/ContactUs/ContactUs";
import PropertiesBookingForm from "./components/PropertiesBookingForm";
import ActivityExperienceEnquiryForm from "./components/ActivityExperienceEnquiryForm";
import BookingsAdmin from "./components/BookingsAdmin";
import BookingPropertyAdmin from "./components/BookingPropertyAdmin";
import BookingRestaurantAdmin from "./components/BookingRestaurantAdmin";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="properties-details" element={<PropertiesDetails />} />
          <Route path="experience-details" element={<ExperienceDetails />} />
          {/* <Route
            path="experience-details/:id"
            element={<ExperienceDetails />}
          /> */}
          <Route path="/experience-details/:slug" element={<ExperienceDetails />} />

          <Route path="properties-landing" element={<PropertiesLanding />} />
          {/* <Route path=':id' element={<Prodetails/>} /> */}
          <Route path=":id" element={<PropertiesDetails />} />
          <Route path="experience-landing" element={<ExperienceLanding />} /> // added slug here
          <Route
            path="experience-sub-landing"
            element={<ExperienceSubLanding />}
          />
          <Route
            path="experience-sub-landing/:destinationSlug"
            element={<ExperienceSubLanding />}
          />
          <Route path="resturants-landing" element={<ResturantsLanding />} />
          <Route path="resturants-details" element={<ResturantsDetails />} />
          <Route path="resturant/:id" element={<ResturantsDetails />} />
          <Route
            path="luxury-concierge-services"
            element={<LuxuryConciergeServices />}
          />
          <Route path="owners-application" element={<OwnersApplication />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route
            path="properties-booking-form"
            element={<PropertiesBookingForm />}
          />
          <Route
            path="activity-enquiry-form"
            element={<ActivityExperienceEnquiryForm />}
          />

          <Route path="actbooking" element={<BookingsAdmin />} />
          <Route path="property-booking" element={<BookingPropertyAdmin />} />
          <Route
            path="restaurant-booking"
            element={<BookingRestaurantAdmin />}
          />

          {/* Backend dashbord for admin */}

          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurants/new" element={<RestaurantForm />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/restaurants/edit/:id" element={<RestaurantForm />} />

          <Route path="/properties" element={<PropertyList />} />
          <Route path="/properties/new" element={<PropertyForm />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/properties/edit/:id" element={<PropertyForm />} />

          <Route path="/activities" element={<ActivityList />} />
          <Route path="/activities/new" element={<ActivityForm />} />
          <Route path="/activities/edit/:id" element={<ActivityForm />} />
          {/* <Route path="/activities/:id" element={<ActivityDetails/>} /> */}

          <Route path="/destination" element={<DestinationList />} />
          <Route path="/destination/new" element={<DestinationForm />} />

          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/new" element={<CategoryForm />} />

          <Route path="/la" element={<DestinationsLanding />} />
          <Route path="/la/destination/:id" element={<DestinationDetails />} />
          {/* <Route path="/la/activity/:id" element={<ActivityDetails />} /> */}
        </Route>
        <Route path="/dashbord/*" element={<DashboardLayout />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard";
// import RestaurantList from './pages/Restaurants/RestaurantList';
// import RestaurantForm from "./pages/Restaurants/RestaurantForm";
// import RestaurantDetails from "./pages/Restaurants/RestaurantDetails";
// import PropertyList from "./pages/Properties/PropertyList";
// import PropertyForm from "./pages/Properties/PropertyForm";
// import PropertyDetails from "./pages/Properties/PropertyDetails";
// import ActivityList from "./pages/Activities/ActivityList";
// import ActivityForm from "./pages/Activities/ActivityForm";
// import DestinationForm from "./pages/Activities/DestinationForm"
// import CategoryForm from "./pages/Activities/CategoryForm";
// import ActivityDetails from "./pages/Activities/ActivityDetails";
// import DestinationList from "./pages/Activities/DestinationList";
// import CategoryList from './pages/Activities/CategoryList'

// const App = () => (
//   <div className="flex">
//     <Sidebar />
//     <div className="ml-64 flex-1">
//       <Navbar />
//       <div className="p-6">
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/restaurants" element={<RestaurantList />} />
//           <Route path="/restaurants/new" element={<RestaurantForm />} />
//           <Route path="/restaurants/:id" element={<RestaurantDetails />} />
//            <Route path="/restaurants/edit/:id" element={<RestaurantForm />} />

//           <Route path="/properties" element={<PropertyList />} />
//           <Route path="/properties/new" element={<PropertyForm />} />
//           <Route path="/properties/:id" element={<PropertyDetails />} />
//           <Route path="/properties/edit/:id" element={<PropertyForm />} />

//           <Route path="/activities" element={<ActivityList />} />
// <Route path="/activities/new" element={<ActivityForm />} />
// <Route path="/activities/edit/:id" element={<ActivityForm />} />
// <Route path="/activities/:id" element={<ActivityDetails/>} />

// <Route path="/destination" element={<DestinationList/>}/>
// <Route path="/destination/new" element={<DestinationForm/>}/>

// <Route path="/categories" element={<CategoryList/>}/>
// <Route path="/categories/new" element={<CategoryForm/>}/>

//         </Routes>
//       </div>
//     </div>
//   </div>
// );

// export default App;
