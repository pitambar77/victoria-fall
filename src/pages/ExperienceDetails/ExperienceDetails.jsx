import React from "react";
import Banner from "../../components/Banner";
import Overview from "../../components/Overview";
import FacilitiesSection from "./FacilitiesSection";
import TourDetails from "./TourDetails";
import ExpGallery from "./ExpGallery";
import ExperiencesSection from "../Home/ExperiencesSection";
import TestimonialSection from "../../components/TestimonialSection";
import Awards from "../../components/Awards";
import Customize from "../../components/Customize";
import JoinClubSection from "../../components/JoinClubSection";
import Map from "../../components/Map";

const ExperienceDetails = () => {
  return (
    <>
      <Banner
        title="VictoriaFall"
        subtitle="PrivateSunsetCruiseonthe ZambeziRive"
        imageUrl="https://www.tanzaniatourism.com/images/uploads/Zanzibar_Dhow_Sunset_Cruise_03.jpg"
      />
      <Overview
      title="Private sunset cruise"
      subtitle="on the zimbezi river"
      description="BABOHI is a distinguished lodge exclusively for adults, topped with excellent dining and polished service. This highly modern and inviting retreat displays earthy tones, wooden finishes and warm fabrics that merge with modern coppers, marble finishes and sophisticated hues that allude to the African skies."
    />
    <FacilitiesSection/>
    <TourDetails/>
    <ExpGallery/>
    <ExperiencesSection/>
    <TestimonialSection/>
    <Awards/>
    <Customize/>
    <JoinClubSection/>
    <Map/>
    </>
  );
};

export default ExperienceDetails;
