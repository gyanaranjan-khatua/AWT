import React from 'react'
import Hero from '../Sections/Hero'
import TravelServices from '../Sections/TravelServices'
import ContactSection from '../components/ContactSec'
import AboutContent from '../Sections/AboutContent'
import DestinationShowcase from '../components/Tours'
import Testimonials from '../components/Testimonial'
import Slider from '../Sections/Slider'
import FaqSection from '../Sections//FaqSection'
import Testimonial from '../components/Testimonial'
function Home() {
  return (
    <>
       <Hero /> 
       <TravelServices/>
        <DestinationShowcase/>
     <AboutContent />
     <Slider/>
    <Testimonial/>
    <FaqSection/>
    <ContactSection />
    </>
  )
}

export default Home