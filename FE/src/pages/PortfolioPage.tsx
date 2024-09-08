import ContactUs from "../components/ContactUs"
import PortfolioCategoryOption from "../components/Portfolio/PortfolioCategoryOption"
import PortfolioCategoryTypes from "../components/Portfolio/PortfolioCategoryTypes"
import PortfolioHero from "../components/Portfolio/PortfolioPageHero"

const PortfolioPage = () => {
  return (
    <div>
        <PortfolioHero/>
        <PortfolioCategoryOption/>
        <PortfolioCategoryTypes/>
        <ContactUs/>
    </div>
  )
}

export default PortfolioPage