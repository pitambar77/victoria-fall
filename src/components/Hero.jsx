import React from 'react'
import Button from './Button'
import Overview from '../pages/Home/Overview'
import MemoriesSection from '../pages/Home/MemoriesSection'
import ConciergeServices from '../pages/Home/ConciergeServices'
import ExperiencesSection from '../pages/Home/ExperiencesSection'

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
        <h1 className="text-4xl md:text-7xl font-serif font-semibold mb-4 capitalize">
          Victoria Falls
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl  max-w-2xl">
          Trust where to africa's 55 years of experience
        </p>
      </div>
    </div>
    <Overview/>
    <MemoriesSection/>
    <ConciergeServices/>
    <ExperiencesSection/>
    </>
  )
}

export default Hero