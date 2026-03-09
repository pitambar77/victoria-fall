import Amenities from "./Amenities";
import BookingSidebar from "./Components/BookingSidebar";
import Highlights from "./Components/Highlights";

import MapSection from "./Components/MapSection";

import FAQ from "./Components/FAQ";
import HouseRules from "./HouseRules";

import Gallery from "./Components/Gallery";
import RoomsBeds from "./RoomsBeds";
import SpacesSection from "./SpacesSection";
import PropertyHeader from "./PropertyHeader";
import PropertyStats from "./Components/PropertyStats";
import PropertyTabs from "./Components/PropertyTabs";
import MemoriesSection from "../Home/MemoriesSection";
import TestimonialSection from "../../components/TestimonialSection";
import Awards from "../../components/Awards";
import Customize from "../../components/Customize";
import JoinClubSection from "../../components/JoinClubSection";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Footer from "../../components/Footer";

export default function PropertyDetailsPage() {
  return (
    <div>
      <Header />
      <div className=" hd max-w-[1200px] mx-auto px-4 py-6">
        <div className=" flex">
          <Link
            to="/properties-landing"
            className="flex items-center gap-2 hover:underline text-[#ab8c51]"
          >
            <GoArrowLeft />
            <span>See all Properties</span>
          </Link>
          <div></div>
        </div>
      </div>
      {/* Gallery */}
      <div className="max-w-[1200px] mx-auto px-4 ">
        <Gallery />
      </div>

      {/* Sticky Tabs */}
      <PropertyTabs />

      {/* Page Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          <div className="space-y-10">
            <section id="overview">
              <PropertyHeader />
            </section>

            <Highlights />
            <PropertyStats />

            <section id="amenities">
              <Amenities />
            </section>

            <section id="location">
              <MapSection />
            </section>

            <RoomsBeds />
            <SpacesSection />

            <section id="policies">
              <HouseRules />
            </section>
          </div>

          <BookingSidebar />
        </div>
      </div>
      <MemoriesSection />
      <TestimonialSection />
      <Awards />
      <Customize />
      <JoinClubSection />
      <Footer />
    </div>
  );
}
