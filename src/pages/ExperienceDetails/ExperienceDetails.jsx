// import React, { useEffect, useState } from "react";
// import Banner from "../../components/Banner";
// import Overview from "../../components/Overview";
// import FacilitiesSection from "./FacilitiesSection";
// import TourDetails from "./TourDetails";
// import ExpGallery from "./ExpGallery";
// import ExperiencesSection from "../Home/ExperiencesSection";
// import TestimonialSection from "../../components/TestimonialSection";
// import Awards from "../../components/Awards";
// import Customize from "../../components/Customize";
// import JoinClubSection from "../../components/JoinClubSection";
// import Map from "../../components/Map";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const ExperienceDetails = () => {

//     const { slug } = useParams();
//   const [activity, setActivity] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/activities/${slug}`)
//       .then((res) => setActivity(res.data))
//       .catch(console.error);
//   }, [slug]);

//   if (!activity) {
//     return <p className="p-6 text-center">Loading...</p>;
//   }

//   const bannerData = activity.banner?.[0];

//   return (
//     <>
//        <Banner
//         title={bannerData?.title || activity.activityName}
//         subtitle={bannerData?.subTitle || ""}
//         imageUrl={bannerData?.bannerImage || activity.overviewImage}
//       />

//       {/* ✅ OVERVIEW */}
//       <Overview
//         title={activity.overviewInfo[0].title}
//         subtitle={ ""}
//         description={activity.overview}
//       />

//       <FacilitiesSection />
//       <TourDetails />
//       <ExpGallery />
//       <ExperiencesSection />
//       <TestimonialSection />
//       <Awards />
//       <Customize />
//       <JoinClubSection />
//       <Map />
//     </>
//   );
// };

// export default ExperienceDetails;

// working Code

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivityBySlug } from "../../api/activityApi";

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

// const ExperienceDetails = () => {
//   const { slug } = useParams();
//   const [activity, setActivity] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getActivityBySlug(slug)
//       .then((res) => setActivity(res.data))
//       .catch(console.error)
//       .finally(() => setLoading(false));
//   }, [slug]);

//   if (loading) {
//     return <p className="p-6 text-center">Loading...</p>;
//   }

//   if (!activity) {
//     return <p className="p-6 text-center">Activity not found</p>;
//   }

//   const bannerData = activity.banner?.[0];

//   return (
//     <>
//       <Banner
//         title={bannerData?.title || activity.activityName}
//         subtitle={bannerData?.subTitle || ""}
//         imageUrl={bannerData?.bannerImage || activity.overviewImage}
//       />

//       {/* ✅ OVERVIEW */}
//       <Overview
//         title={activity.overviewInfo?.[0]?.title || ""}
//         subtitle=""
//         description={activity.overviewInfo?.[0]?.description || ""}
//       />

//       <FacilitiesSection  />
//       <TourDetails  />
//       <ExpGallery  />
//       <ExperiencesSection />
//       <TestimonialSection />
//       <Awards />
//       <Customize />
//       <JoinClubSection />
//       <Map />
//     </>
//   );
// };

// export default ExperienceDetails;

const ExperienceDetails = () => {
  const { slug } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActivityBySlug(slug)
      .then((res) => setActivity(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (!activity) return <p className="p-6 text-center">Activity not found</p>;

  const bannerData = activity.banner?.[0];

  return (
    <>
      <Banner
        title={bannerData?.title || activity.activityName}
        subtitle={bannerData?.subTitle || ""}
        imageUrl={bannerData?.bannerImage || activity.overviewImage}
      />

      <Overview
        title={activity.overviewInfo?.[0]?.title || ""}
        description={activity.overviewInfo?.[0]?.description || ""}
      />

      <FacilitiesSection />
      <TourDetails />
      <ExpGallery />

      {/* ✅ PASS destinationId + current activity id */}
      <ExperiencesSection
        destinationId={activity.destination?._id} // ✅ FIX HERE
        currentActivityId={activity._id}
      />

      <TestimonialSection />
      <Awards />
      <Customize />
      <JoinClubSection />
      <Map />
    </>
  );
};

export default ExperienceDetails;
