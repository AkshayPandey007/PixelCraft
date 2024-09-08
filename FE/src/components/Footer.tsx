import logo from "../assets/Footer/Pixelcraft Production Logo.png";
import facebook from "../assets/Footer/facebook.png";
import linkedIn from "../assets/Footer/Icon.png";
import insta from "../assets/Footer/Insta.png";
import youtube from "../assets/Footer/Youtube.png";
import { Link } from "react-router-dom";

const Footer = () => {
    const iconArr = [facebook, linkedIn, youtube, insta];

    return (
        <div className="bg-[#050505] flex flex-col xl:flex-row justify-between px-[80px] pb-[48px]">
            <div>
                <img src={logo} alt="Logo" className="mt-[26px] h-[51px[ w-[54px]" />
                <div className="max-w-[329px] text-[15px] leading-[22.5px] font-normal font-hind text-[#FFFFFF] mt-2">
                    <p>Street: 49/50, 1st Floor, S P Road</p>
                    <p>City: Bangalore, State/province/area: Karnataka</p>
                    <p>Phone number: 08022224851, Zip code: 560002</p>  
                </div>
                <div className="flex gap-2 mt-2">
                    {iconArr.map((el, ind) => (
                        <div key={ind} className="h-[40px] w-[40px] flex justify-center items-center">
                            <img src={el} alt={`icon-${ind}`} className="w-[24px] h-[24px]" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-[47px] flex flex-col sm:flex-row gap-8 justify-between xl:gap-8">
                <div className="max-w-[187px] flex flex-col gap-6 text-start">
                    <p className="font-bold font-hind text-base leading-6 text-[#D71918]">Sections</p>
                    <p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">About Us</p>
                   <Link to="/privacy-policy"> <p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">Privacy Policy</p></Link>
                    <p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">Contact Us</p>
                </div>
                <div className="max-w-[187px] flex flex-col gap-6 text-start">
                    <p className="font-bold font-hind text-base leading-6 text-[#D71918]">Follow Us</p>
                    <p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">Facebook</p>
                    <p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">Instagram</p>
                    <p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">LinkedIn</p>
                </div>
                <div className="max-w-[187px] flex flex-col gap-6 text-start">
                    <p className="font-bold font-hind text-base leading-6 text-[#D71918]">Customer Service</p>
                   <Link to="/faq"><p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">FAQs</p></Link> 
                   <Link to="/terms-and-conditions"> <p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">Terms and conditions</p></Link>
                    <p className="font-medium font-hind text-base leading-6 text-[#FFFFFF] cursor-pointer hover:font-bold">Support</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
