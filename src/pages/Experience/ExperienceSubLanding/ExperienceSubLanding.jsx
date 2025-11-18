import React from "react";
import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import TabSection from "./TabSection";
import WhyBookWithUs from "../ExperienceLanding/WhyBookWithUs";
import PopularExperiences from "../ExperienceLanding/PopularExperiences";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";
import activity from '../../../assets/activity.webp'

const ExperienceSubLanding = () => {
  return (
    <>
      <Banner
        title="Sub landing "
        subtitle="Sub landing Page"
        imageUrl={activity}
      />
      <Overview
        title="Cape Town Activities"
        description="Cape Town often referred to as the Mother City, is a port city on South Africa’s southwest coast, lying in the shadow of the imposing Table Mountain. Imposing views from the flat mountaintop oversee the sweeping views of the city and the harbour towards Robben Island, the once notorious prison that held Nelson Mandela."
      />
      <TabSection/>
      <WhyBookWithUs/>
      <PopularExperiences/>
      <TestimonialSection/>
      <Awards/>
    </>
  );
};

export default ExperienceSubLanding;
