// import React from "react";
// import Banner from "../../../components/Banner";
// import Overview from "../../../components/Overview";
// import TabSection from "./TabSection";
// import WhyBookWithUs from "../ExperienceLanding/WhyBookWithUs";
// import PopularExperiences from "../ExperienceLanding/PopularExperiences";
// import TestimonialSection from "../../../components/TestimonialSection";
// import Awards from "../../../components/Awards";
// import activity from '../../../assets/activity.webp'

// const ExperienceSubLanding = () => {
//   return (
//     <>
//       <Banner
//         title="Subnn landing "
//         subtitle="Sub landing Page"
//         imageUrl={activity}
//       />
//       <Overview
//         title="Cape Town Activities"
//         description="Cape Town often referred to as the Mother City, is a port city on South Africa’s southwest coast, lying in the shadow of the imposing Table Mountain. Imposing views from the flat mountaintop oversee the sweeping views of the city and the harbour towards Robben Island, the once notorious prison that held Nelson Mandela."
//       />
//       <TabSection/>
//       <WhyBookWithUs/>
//       <PopularExperiences/>
//       <TestimonialSection/>
//       <Awards/>
//     </>
//   );
// };

// export default ExperienceSubLanding;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import Banner from "../../../components/Banner";
// import Overview from "../../../components/Overview";
// import TabSection from "./TabSection";
// import WhyBookWithUs from "../ExperienceLanding/WhyBookWithUs";
// import PopularExperiences from "../ExperienceLanding/PopularExperiences";
// import TestimonialSection from "../../../components/TestimonialSection";
// import Awards from "../../../components/Awards";

// import { getDestinationBySlug } from "../../../api/destinationApi";

// const ExperienceSubLanding = () => {
//   const { destinationSlug } = useParams(); // ✅ FIX
 
//   const [destination, setDestination] = useState(null);

//   useEffect(() => {
//     if (!destinationSlug) return;

//     const fetchDestination = async () => {
//       try {
//         const res = await getDestinationBySlug(destinationSlug);
//         setDestination(res.data);
//       } catch (error) {
//         console.error("Error fetching destination", error);
//       }
//     };

//     fetchDestination();
//   }, [destinationSlug]);

//   if (!destination) return <p>Loading...</p>;

//   return (
//     <>
//       {/* ✅ BANNER FROM API */}
//       <Banner
//         title={destination.name}
//         subtitle={`${destination.name} Activities`}
//         imageUrl={destination.bannerImage}
//       />

//       <Overview
//         title={`${destination.name} Activities`}
//         description={destination.overview}
//       />

//       {/* ✅ Pass destinationId to TabSection */}
//       <TabSection destinationId={destination._id} />

//       <WhyBookWithUs />
//       <PopularExperiences />
//       <TestimonialSection />
//       <Awards />
//     </>
//   );
// };

// export default ExperienceSubLanding;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import TabSection from "./TabSection";
import WhyBookWithUs from "../ExperienceLanding/WhyBookWithUs";
import PopularExperiences from "../ExperienceLanding/PopularExperiences";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";

import { getDestinationBySlug } from "../../../api/destinationApi";


const ExperienceSubLanding = ({ fixedSlug }) => {
  const { destinationSlug } = useParams();

  // ✅ priority: fixedSlug (for victoria-falls-experiences) → URL slug
  const slug = fixedSlug || destinationSlug;

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchDestination = async () => {
      try {
        const res = await getDestinationBySlug(slug);
        setDestination(res.data);
      } catch (error) {
        console.error("Error fetching destination", error);
      }
    };

    fetchDestination();
  }, [slug]);

  if (!destination) return ;

  return (
    <>
      <Banner
        title={destination.name}
        subtitle={`${destination.name} Activities`}
        imageUrl={destination.bannerImage}
      />

      <Overview
        title={`${destination.name} Activities`}
        description={destination.overview}
      />

      <TabSection destinationId={destination._id} />
    

      <WhyBookWithUs />
      {/* <PopularExperiences /> */}
      <TestimonialSection />
      <Awards />
    </>
  );
};

export default ExperienceSubLanding;
