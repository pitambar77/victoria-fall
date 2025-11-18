import React from "react";
import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import ExperienceDestination from "./ExperienceDestination";
import PopularExperiences from "./PopularExperiences";
import WhyBookWithUs from "./WhyBookWithUs";
import Testimonial from '../../../components/TestimonialSection'
import Awards from '../../../components/Awards'
import experiencel from '../../../assets/experiencel.webp'

const ExperienceLanding = () => {
  return (
    <>
      <Banner
        title="cape town"
        subtitle="Private Sunset Cruiseonthe ZambeziRive"
        imageUrl={experiencel}
      />
      <Overview
        title="Victoria Falls Activities"
        subtitle="on the zimbezi river"
        description="Victoria Falls, also known as “Mosi oa-Tunya” (“the smoke that thunders”) by the locals, is located nearly halfway along the 2700 km journey of the Mighty Zambezi River from its source in northwestern Zambia to its entry into the Indian Ocean on the coast of Mozambique. "
      />
      <ExperienceDestination/>
         <WhyBookWithUs/>
      <PopularExperiences/>
      <Testimonial/>
      <Awards/>
   
    </>
  );
};

export default ExperienceLanding;
