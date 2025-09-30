import React from 'react'
import Banner from '../../../components/Banner'
import Overview from '../../../components/Overview'
import ResturantsFacilities from './ResturantsFacilities'
import ExperiencesSection from '../../Home/ExperiencesSection'
import TestimonialSection from '../../../components/TestimonialSection'
import Awards from '../../../components/Awards'
import JoinClubSection from '../../../components/JoinClubSection'


const ResturantsDetails = () => {
  return (
    <>
        <Banner
        title='restaurants & bars'
        subtitle='we have an incredible variety of restaurants '
        imageUrl='https://yellowzebrasafaris.com/media/27501/jm_boma.jpg?width=2048&height=1024&format=jpg&v=1da5e0ece56d080'
        
        />
        <Overview
         title='Resturant at'
        subtitle='Cape Town'
        description='Here at Newmark, we have an incredible variety of restaurants and bars across our beautiful properties, from ocean-side dining to city-chic Asian tapas and whimsical bougainvillea-clad courtyards. Find out more information below'
        />
        <ResturantsFacilities/>
     <ExperiencesSection/>
     <TestimonialSection/>
     <Awards/>
     <JoinClubSection/>
    </>
  )
}

export default ResturantsDetails