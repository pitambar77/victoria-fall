
import React from "react";
import Banner from "../../../components/Banner";
import PropertiesCards from "./PropertiesCards";
import Overview from "../../../components/Overview";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";

const PropertiesLanding = () => {


  return (
    <>
      <Banner
        title="Properties "
        subtitle="Private Sunset Cruiseonthe "
        imageUrl="https://static.wixstatic.com/media/12a327_43a1c2429e45453dba913eef8fd04fc5~mv2.jpg/v1/fit/w_2500,h_1330,al_c/12a327_43a1c2429e45453dba913eef8fd04fc5~mv2.jpg"
      />
      <Overview
        title="Private sunset cruise"
        subtitle="on the zimbezi river"
        description="BABOHI is a distinguished lodge exclusively for adults, topped with excellent dining and polished service. This highly modern and inviting retreat displays earthy tones, wooden finishes and warm fabrics that merge with modern coppers, marble finishes and sophisticated hues that allude to the African skies."
      />
      <PropertiesCards />
      <TestimonialSection/>
      <Awards/>
    </>
  );
};

export default PropertiesLanding;