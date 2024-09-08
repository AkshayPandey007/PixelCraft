import ContactUs from "../components/ContactUs"
import FaqGetInTouch from "../components/FAQ/FaqGetInTouch"
import FaqHero from "../components/FAQ/FaqHero"
import FaqServiceQuestion from "../components/FAQ/FaqServiceQuestion"

const FAQPage = () => {
  return (
    <div>
      <FaqHero/>
      <FaqServiceQuestion/>
      <FaqGetInTouch/>
      <ContactUs/>
    </div>
  )
}

export default FAQPage