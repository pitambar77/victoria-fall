import React from 'react'
import CultureEntertainment from './CultureEntertainment'
import BeautyWellbeing from './BeautyWellbeing'
import PrivateEvents from './PrivateEvents'
import Banner from '../../components/Banner'
import Overview from '../../components/Overview'
import SectionNavigator from './SectionNavigator'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import TestimonialSection from '../../components/TestimonialSection'
import Awards from '../../components/Awards'
import JoinClubSection from '../../components/JoinClubSection'
import Customize from '../../components/Customize'
import concierge from '../../assets/concierge.webp'

const LuxuryConciergeServices = () => {

     const navigate = useNavigate();

  return (
    <div>
            <Banner
        title="experience a luxury guest  "
        subtitle="Tailor-made services for holidaymakers in the heart of Provence"
        imageUrl={concierge}
      />
      <Overview
        title="Exclusive concierge "
        subtitle="services"
        description="Our mission is to turn your holiday in the victoria falls into an unforgettable experience.
        Let us take away the hassle of planning, booking, shopping, cokking...
        Whatever you need for your stay in Victoria Falls to be 100% stress-free, leave it to us turn your holiday."
      />
      <SectionNavigator/>
        <CultureEntertainment/>
        <BeautyWellbeing/>
        <PrivateEvents/>
<div className=' max-w-[1140px] mx-auto pb-10 md:pb-20 px-4 text-center'>
<Button  onClick={()=>{
          navigate('/');
          // window.scrollTo({ top: 0, behavior: "smooth" })
          window.scrollTo(0,0)
         }}>Book Your Tailor-Made Services</Button>
</div>

<TestimonialSection/>
<Awards/>
<Customize/>
<JoinClubSection/>
    </div>
  )
}

export default LuxuryConciergeServices