import React from 'react'
import Button from './Button'
import Overview from '../pages/Home/Overview'
import MemoriesSection from '../pages/Home/MemoriesSection'
import ConciergeServices from '../pages/Home/ConciergeServices'
import ExperiencesSection from '../pages/Home/ExperiencesSection'
import TestimonialSection from './TestimonialSection'

import Awards from './Awards'
import Customize from './Customize'
import JoinClubSection from './JoinClubSection'
import Map from './Map'
import Footer from './Footer'

const Hero = () => {
  return (
    <>
    
    <div className="relative h-screen">
      
      {/* Background Image */}
      <img
        src="https://www.discoverafrica.com/wp-content/uploads/wetu/112812/klrs47094.jpg"
        alt="Couple looking at a sunset over hills by a pool"
        className="absolute inset-0 w-full h-full object-cover"
      />
<div className="absolute inset-0 bg-black opacity-40"></div>
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-8 md:p-16 lg:p-32">
        <h1 className="hd leading-[1.6] text-4xl md:text-[60px] tracking-[5px] font-[600] mb-4 uppercase">
          Victoria Falls
        </h1>
        <p className=" hd font-[500] text-sm tracking-[5px] max-w-3xl uppercase">
          Trust where to africa's 55 years <br/> of experience
        </p>
      </div>
    </div>
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