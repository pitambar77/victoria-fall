import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Banner from "../../../components/Banner";
import Overview from "../../../components/Overview";
import ResturantsFacilities from "./ResturantsFacilities";
import ExperiencesSection from "../../Home/ExperiencesSection";
import TestimonialSection from "../../../components/TestimonialSection";
import Awards from "../../../components/Awards";
import JoinClubSection from "../../../components/JoinClubSection";
import Gallery from "../../Resturants/ResturantsDetails/Gallery";
import RestaurantsMenu from "./RestaurantsMenu";
import BookingSection from "./BookingSection";
import { getRestaurantBySlug } from "../../../api/restaurantApi.js";

const ResturantsDetails = () => {
  // const { id } = useParams();
  const { slug } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  // useEffect(() => {
  //   axios.get(`http://victoria-fall-backend.manoramaseoservice.com/api/restaurants/${id}`)
  //     .then(res => setRestaurant(res.data))
  //     .catch(console.error);
  // }, [id]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await getRestaurantBySlug(slug);
        setRestaurant(res.data);
      } catch (err) {
        console.error("Failed to fetch restaurant by slug", err);
      }
    };

    fetchRestaurant();
  }, [slug]);

  console.log(restaurant);

  if (!restaurant) return <p className="p-6">Loading...</p>;

  return (
    <>
      <Banner
        title={restaurant.name}
        subtitle={restaurant.shortTitle}
        imageUrl={restaurant.bannerImage}
      />
      <Overview
        title={restaurant.name}
        subtitle=""
        description={restaurant.overview}
      />
      <ResturantsFacilities />
      <Gallery />
      <RestaurantsMenu menu={restaurant.menu} />
      <BookingSection restaurantData={restaurant.name} />
      <ExperiencesSection />
      <TestimonialSection />
      <Awards />
      <JoinClubSection />
    </>
  );
};

export default ResturantsDetails;
