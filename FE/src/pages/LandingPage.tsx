import OurServices from '../components/OurServices'
import AboutUs from '../components/AboutUs'
import TestimonialSection from '../components/Portfolio'
import OurClients from '../components/OurClients'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'
import Carousel from '../components/Carousel'

const LandingPage = () => {
  return (
    <>
    <Carousel/>
    <OurServices/>
    <AboutUs/>
    <TestimonialSection/>
    <OurClients/>
    <Testimonials/>
    <ContactUs/>
  </>
  )
}

export default LandingPage