import React from "react";
import Button from "./Button";
import Overview from "../pages/Home/Overview";
import MemoriesSection from "../pages/Home/MemoriesSection";
import ConciergeServices from "../pages/Home/ConciergeServices";
import ExperiencesSection from "../pages/Home/ExperiencesSection";
import TestimonialSection from "./TestimonialSection";
import Banner from "../components/Banner";
import Awards from "./Awards";
import Customize from "./Customize";
import JoinClubSection from "./JoinClubSection";
import Map from "./Map";
import PositiveImpact from "../pages/Home/PositiveImpact";

const Hero = () => {
  return (
    <>
      <Banner
        imageUrl="../victoria-falls.webp"
        title={"Your Gateway to Victoria Falls"}
        subtitle={`Premium B&B Accommodation with Personalized Concierge Services`}
      />
      {/* <PositiveImpact/> */}
      <Overview />

      <ConciergeServices />
      <MemoriesSection />
      <ExperiencesSection />
      <TestimonialSection />
      <Awards />
      <Customize />
      <JoinClubSection />
      <Map />
    </>
  );
};

export default Hero;
