import React from 'react'
import Button from './Button'
import Overview from '../pages/Home/Overview'
import MemoriesSection from '../pages/Home/MemoriesSection'
import ConciergeServices from '../pages/Home/ConciergeServices'
import ExperiencesSection from '../pages/Home/ExperiencesSection'
import TestimonialSection from './TestimonialSection'
import Banner from '../components/Banner'
import Awards from './Awards'
import Customize from './Customize'
import JoinClubSection from './JoinClubSection'
import Map from './Map'
import Footer from './Footer'
import homebanner from '../assets/homebanner.webp'

const Hero = () => {
  return (
    <>
    <Banner
     imageUrl={homebanner}
     title={'Victoria Falls' }
     subtitle={`Trust where to africa's 55 years of experience`}
    />
    <Overview/>
    <MemoriesSection/>
    <ConciergeServices/>
    <ExperiencesSection/>
    <TestimonialSection/>
    <Awards/>
    <Customize/>
    <JoinClubSection/>
    <Map/>
    
    </>
  )
}

export default Hero