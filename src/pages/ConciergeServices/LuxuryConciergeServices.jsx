// import React, { useEffect, useState } from "react";
// import CultureEntertainment from "./CultureEntertainment";
// import BeautyWellbeing from "./BeautyWellbeing";
// import PrivateEvents from "./PrivateEvents";
// import Banner from "../../components/Banner";
// import Overview from "../../components/Overview";
// import SectionNavigator from "./SectionNavigator";
// import Button from "../../components/Button";
// import { useNavigate, useParams } from "react-router-dom";
// import TestimonialSection from "../../components/TestimonialSection";
// import Awards from "../../components/Awards";
// import JoinClubSection from "../../components/JoinClubSection";
// import Customize from "../../components/Customize";
// import concierge from "../../assets/concierge.webp";
// import ExperienceServices from "./ExperienceServices";


// const LuxuryConciergeServices = () => {
//   const navigate = useNavigate();


//   return (
//     <div>
//       <Banner
//         title="experience a luxury guest  "
//         subtitle="Tailor-made services for holidaymakers in the heart of Provence"
//         imageUrl={concierge}
//       />
//       <Overview
//         title="Exclusive concierge "
//         subtitle="services"
//         description="Our mission is to turn your holiday in the victoria falls into an unforgettable experience.
//         Let us take away the hassle of planning, booking, shopping, cokking...
//         Whatever you need for your stay in Victoria Falls to be 100% stress-free, leave it to us turn your holiday."
//       />
//       <SectionNavigator />
//       <CultureEntertainment />
//       <BeautyWellbeing />
//       <PrivateEvents />
//       <div className=" max-w-[1140px] mx-auto pb-10 md:pb-20 px-4 text-center">
//         <Button
//           onClick={() => {
//             navigate("/");
//             // window.scrollTo({ top: 0, behavior: "smooth" })
//             window.scrollTo(0, 0);
//           }}
//         >
//           Book Your Tailor-Made Services
//         </Button>
//       </div>
//       <ExperienceServices  />

//       <TestimonialSection />
//       <Awards />
//       <Customize />
//       <JoinClubSection />
//     </div>
//   );
// };

// export default LuxuryConciergeServices;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CultureEntertainment from "./CultureEntertainment";
import BeautyWellbeing from "./BeautyWellbeing";
import PrivateEvents from "./PrivateEvents";
import Banner from "../../components/Banner";
import Overview from "../../components/Overview";
import SectionNavigator from "./SectionNavigator";
import Button from "../../components/Button";
import TestimonialSection from "../../components/TestimonialSection";
import Awards from "../../components/Awards";
import JoinClubSection from "../../components/JoinClubSection";
import Customize from "../../components/Customize";
import ExperienceServices from "./ExperienceServices";

import concierge from "../../assets/concierge.webp";
import { getDestinationBySlug } from "../../api/destinationApi";
import MakeYourself from "./MakeYourself";
import FoodHall from "./FoodHall";

const LuxuryConciergeServices = () => {
  const navigate = useNavigate();

  // ✅ HARD-LOCK DESTINATION
  const slug = "victorial-falls";

  const [destination, setDestination] = useState(null);

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const res = await getDestinationBySlug(slug);
        setDestination(res.data);
      } catch (error) {
        console.error("Error fetching destination", error);
      }
    };

    fetchDestination();
  }, []);

  if (!destination) return null;

  return (
    <div>
      <Banner
        title="Luxury Concierge Services"
        subtitle="Tailored Victoria Falls Services"
        imageUrl={concierge}
      />

      <Overview
        title="Exclusive African "
        subtitle="Concierge"
        description="At Where to Africa, our mission is to transform your holiday into a truly unforgettable experience. We take care of every detail so you don’t have to. From planning and bookings to local arrangements, shopping, and in-stay support, we handle the logistics behind the scenes. Whatever you need for a seamless, stress-free stay, our team is here to make it happen. Relax, explore, and enjoy the journey—Where to Africa takes care of the rest."
      />

      <SectionNavigator />
      <MakeYourself/>
      <CultureEntertainment />
      <BeautyWellbeing />
      <PrivateEvents />
      
      <FoodHall/>

      <div className="max-w-[1140px] mx-auto pb-10 md:pb-20 px-4 text-center">
        <Button
          onClick={() => {
            navigate("/contact-us");
            window.scrollTo(0, 0);
          }}
        >
          Book Your Tailor-Made Services
        </Button>
      </div>

      {/* ✅ DESTINATION-BASED EXPERIENCES */}
      <ExperienceServices destinationId={destination._id} />

      <TestimonialSection />
      <Awards />
      <Customize />
      <JoinClubSection />
    </div>
  );
};

export default LuxuryConciergeServices;
