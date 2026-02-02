import React from 'react'
import Banner from '../../components/Banner'
import Overview from './Overview'
import Services from './Services'
import OwnerApplicationForm from './OwnerApplicationForm'
import conl from '../../assets/owner-banner.webp'


const OwnersApplication = () => {
  return (
    <>
    <Banner 
     title="Owners Application"
        subtitle="victoria falls bed & breakfast"
        imageUrl={conl}
  
    />
    <Overview/>
    <Services/>
    <OwnerApplicationForm/>
   </>
  )
}

export default OwnersApplication