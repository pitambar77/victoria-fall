import React from "react";
import Banner from '../../../components/Banner'
import Overview from '../../../components/Overview'
import ResturantsCard from './ResturantsCard'
import PropertyLocation from '../../Property/PropertyLocation'
import TestimonialSection from '../../../components/TestimonialSection'
import Awards from '../../../components/Awards'
import JoinClubSection from '../../../components/JoinClubSection'
import restaurantl from '../../../assets/restaurantl.webp'

const ResturantsLanding = () => {
   
  
  return (
   <>
   <Banner
   title='Resturants '
   subtitle='Most testy food available'
   imageUrl={restaurantl}
   />
   <Overview
   title='Discover our'
   subtitle='restaurants & bars'
   description='Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below'
   />
   <ResturantsCard/>
   <PropertyLocation/>
   <TestimonialSection/>
   <Awards/>
   <JoinClubSection/>
   
   </>
  )
}

export default ResturantsLanding