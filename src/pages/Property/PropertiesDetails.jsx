import React from 'react'
import Banner from './Banner'
import Overview from './Overview'
import FacilitiesSection from './FacilitiesSection'
import ModalGallery from './ModalGallery'

import MemoriesSection from '../Home/MemoriesSection'
import TestimonialSection from '../../components/TestimonialSection'
import Awards from '../../components/Awards'
import Customize from '../../components/Customize'
import JoinClubSection from '../../components/JoinClubSection'
import PropertyLocation from './PropertyLocation'
import FaqSection from '../../components/FaqItem'
// import Banner from '../../components/Banner'
// import { useParams } from 'react-router-dom'
// import { resorts } from '../../data/resorts'

const PropertiesDetails = () => {
  //     const { id } = useParams();
  // const resort = resorts.find((r) => r.id.toString() === id);

  // if (!resort) {
  //   return <div className="p-10 text-center">Resort not found.</div>;
  // }

  return (
   <>
   <Banner/>
   {/* <Banner
   imageUrl={resort.image}
   title={resort.name}
   subtitle={resort.name}

   /> */}
   <Overview/>
   <FacilitiesSection/>
   <ModalGallery/>
 <PropertyLocation/>
 <FaqSection/>
   <MemoriesSection/>
   <TestimonialSection/>
   <Awards/>
   <Customize/>
   <JoinClubSection/>
   </>
  )
}

export default PropertiesDetails