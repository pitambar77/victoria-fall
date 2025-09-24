import React from 'react'
import Banner from './Banner'
import Overview from './Overview'
import FacilitiesSection from './FacilitiesSection'
import ModalGallery from './ModalGallery'
import Map from '../../components/Map'
import MemoriesSection from '../Home/MemoriesSection'
import TestimonialSection from '../../components/TestimonialSection'
import Awards from '../../components/Awards'
import Customize from '../../components/Customize'
import JoinClubSection from '../../components/JoinClubSection'
import PropertyLocation from './PropertyLocation'

const PropertiesDetails = () => {
  return (
   <>
   <Banner/>
   <Overview/>
   <FacilitiesSection/>
   <ModalGallery/>
 <PropertyLocation/>
   <MemoriesSection/>
   <TestimonialSection/>
   <Awards/>
   <Customize/>
   <JoinClubSection/>
   </>
  )
}

export default PropertiesDetails