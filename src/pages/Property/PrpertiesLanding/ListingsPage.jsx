import React from "react";
import PropertyList from "./PropertyList";
// import MapView from "./MapView";
import FiltersBar from "./FiltersBar";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const ListingsPage = () => {
  return (
    <>
      <Header />
      <div className=" h-screen max-w-[1140px] mx-auto mt-2 pb-20 px-4 sm:px-6 lg:px-0 flex flex-col">
        {/* Filters */}
        <div className=" ">
          <FiltersBar />
        </div>

        <div className="grid grid-cols-12 h-full py-4 ">
          {/* LEFT LIST */}
          <div className="col-span-7 overflow-y-auto pr-4">
            <PropertyList />
          </div>

          {/* RIGHT MAP */}
          <div className="col-span-5">
            {/* <MapView /> */}
          </div>
        </div>
      </div>

      <TestimonialSection />
      <Awards />
      <Footer/>
    </>
  );
};

export default ListingsPage;
