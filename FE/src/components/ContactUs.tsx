import { useState } from "react";
import backgroundImg from "../assets/ContactUs/background.png"
import logo from "../assets/ContactUs/Pixelcraft Production Logo.png"
import ContactUsModal from "./ContactUsModal";
const ContactUs = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="pt-[16px] mt-[30px] pb-[30px] bg-[#050505]">
    <div className=" pt-[11px] pb-[62px] flex flex-col items-center text-center gap-5 text-[#FFFFFF]" style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' 
      }}>
     <div>
        <img src={logo} alt="logo"className="h-[58px] w-[62px] md:w-[138px] md:h-[131px] object-cover" />
     </div>
     <p className="p-2.5 text:[20px] md:text-[36px] leading-[26.66px] md:leading-[48px] font-bold font-playfair">"Connecting Moments, Crafting Memories Together with Pixelcraft"</p>
     <p className="p-2.5 text-[20px] leading-[26.66px] md:text-[32px] md:leading-[42.66px] font-normal font-playfair">Let’s Connect!</p>
     <button className="text-[#E7E7E7] font-hind rounded-[5px] md:rounded-[10px] pt-[5px] pb-[5px] md:pt-2.5 pr-[68px] md:pb-2.5 pl-[68px] bg-[#D71918] font-bold text-base md:text-2xl leading-[25.62px] md:leading-[38.42px] " style={{boxShadow: "-1px 11px 11.6px 0px #D7191833"}} onClick={handleOpen}>
            Contact Us
          </button>
    </div>
    <ContactUsModal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
    </div>
  )
}

export default ContactUs