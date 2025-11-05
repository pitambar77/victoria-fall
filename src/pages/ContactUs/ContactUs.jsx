import React from 'react'
import Banner from '../../components/Banner'
import ContactForm from './ContactForm'
import Information from './Information'

const ContactUs = () => {
  return (
    <>
 <Banner
        title="Contact Us"
        subtitle="For any inquiries, please get in  touch with Victoria Falls Bed & Breakfast"
        imageUrl="https://images.squarespace-cdn.com/content/v1/6095bc3ff03ba677b810d670/1713372587027-KY9QZ2OZXFXKBC9W2AQ9/Elewana+Elsa+1.jpg"
      />
      <Information/>
      <ContactForm/>
      <div>
       <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14702965.655980673!2d23.455574!3d-25.882928!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1760101504871!5m2!1sen!2sus" width="100%" height="550" ></iframe>
      </div>
    </>
  )
}

export default ContactUs