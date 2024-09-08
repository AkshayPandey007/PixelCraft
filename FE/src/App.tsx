
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import "./App.css"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PortfolioPage from './pages/PortfolioPage';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FAQPage';
import ScrollToTop from './constants/ScrollToTop';
import MobileNavbar from './components/MobileNavbar';
import TeamMembers from './pages/TeamMembers';
import TermsAndCondition from './pages/TermsAndCondition';
import PrivacyPolicy from './pages/PrivacyPolicy';
const App = () => {
  return (
    <>
   <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    <div className="pt-[125px] md:pt-[165px]">
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/team-members" element={<TeamMembers />} />
      <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      
    </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;
