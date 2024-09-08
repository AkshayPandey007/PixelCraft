import AboutUsHero from '../components/AboutUsPage/AboutUsHero'
import AboutUsOfPage from '../components/AboutUsPage/AboutUsOfPage'
import OurMission from '../components/AboutUsPage/OurMission'
import OurTeam from '../components/AboutUsPage/OurTeam'
import OurValues from '../components/AboutUsPage/OurValues'
import ContactUs from '../components/ContactUs'

const AboutUsPage = () => {
  return (
    <div className='text-white'>
        <AboutUsHero/>
        <OurTeam/>
        <AboutUsOfPage/>
        <OurValues/>
        <OurMission/>
        <ContactUs/>
    </div>
  )
}

export default AboutUsPage