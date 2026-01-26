// import React, { useContext } from 'react'

// import FacilitiesSection from './FacilitiesSection'
// import ModalGallery from './ModalGallery'

// import MemoriesSection from '../Home/MemoriesSection'
// import TestimonialSection from '../../components/TestimonialSection'
// import Awards from '../../components/Awards'
// import Customize from '../../components/Customize'
// import JoinClubSection from '../../components/JoinClubSection'
// import PropertyLocation from './PropertyLocation'
// import FaqSection from '../../components/FaqItem'
//  import Banner from '../../components/Banner'
// import { DataContext } from '../../context/DataContext'
// import { useParams } from 'react-router-dom'
// import Overview from '../../components/Overview'


// const PropertiesDetails = () => {
//   const { id } = useParams();
  
//   const {properties} = useContext(DataContext);
//   const property = properties.find((p) => p._id === id);
//  if (!property) return <p>Property not found.</p>;
//   return (
//    <>

  
// <Banner
//    imageUrl={`http://localhost:8000${property.bannerImage}`}
//    title={property.name}
//    subtitle={property.subtitle}

//    />
      
// <Overview
//  title={property.name}
//         subtitle={''}
//         description={property.overviewContent}
//    />

//    <FacilitiesSection/>
//    {/* <ModalGallery/> */}
//    <ModalGallery 
//   gallery={property.gallery} 
//   title={`Accommodation at ${property.name}`} 
// />

//  <PropertyLocation/>
//  <FaqSection/>
//    <MemoriesSection/>
//    <TestimonialSection/>
//    <Awards/>
//    <Customize/>
//    <JoinClubSection/>
//    </>
//   )
// }

// export default PropertiesDetails

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


import Banner from '../../components/Banner'
import Overview from '../../components/Overview'
import FacilitiesSection from './FacilitiesSection'
import ModalGallery from './ModalGallery'

import MemoriesSection from '../Home/MemoriesSection'
import TestimonialSection from '../../components/TestimonialSection'
import Awards from '../../components/Awards'
import Customize from '../../components/Customize'
import JoinClubSection from '../../components/JoinClubSection'
import PropertyLocation from './PropertyLocation'
import FaqSection from '../../components/FaqItem'


const PropertiesDetails = () => {

    const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`http://victoria-fall-backend.manoramaseoservice.com/api/properties/${id}`)
      .then(res => setRestaurant(res.data))
      .catch(console.error);
  }, [id]);

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
         title={restaurant.overviewTittle}
        subtitle=''
        description={restaurant.overview}
        />
 
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