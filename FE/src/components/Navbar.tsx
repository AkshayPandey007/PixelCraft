import { useEffect, useState } from 'react';
import NavbarLogo from "../assets/Pixelcraft Production Logo.png";
import { Link, useLocation } from 'react-router-dom';
import ContactUsModal from './ContactUsModal';

const Navbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('Home');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = menuItems.find(item => item.link === currentPath);
    setActiveMenu(activeItem ? activeItem.name : '');
  }, [location.pathname]);

  const menuItems = [
    { name: 'Home',link:"/" },
    { name: 'About Us',link:"/about-us" },
    { name: 'Portfolio',link:"/portfolio" },
  ];

  const handleMenuClick = (menu:any) => {
    setActiveMenu(menu);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-[#0C0C0C] max-w-[1440px] mx-auto mb-[30px]" style={{boxShadow: '0px 4px 4px 0px #FFFFFF26'}}>
    <Link to="/"> <img src={NavbarLogo} alt="NavbarLogo" className="ml-[57px] mt-[9px] mb-[9px] h-[132px] object-cover" /></Link> 
      <div className=" w-[632px] text-white justify-center items-center flex gap-[15px]">
        {menuItems.map((item, index) => (
         <Link key={index} to={item.link}> <div
            
            className={`p-[10px] font-hind leading-[38.42px] text-2xl cursor-pointer ${
              activeMenu === item.name ? 'font-bold' : 'font-normal'
            }`}
            onClick={() => handleMenuClick(item.name)}
          >
            {item.name}
          </div>
          </Link>
        ))}
        <div>
          <button className="text-[#E7E7E7] font-hind rounded-[10px] pt-[6px] pr-2 pb-[6px] pl-2 gap-[5px] bg-[#D71918] font-bold text-2xl leading-[38.42px]" onClick={handleOpen}>
            Contact Us
          </button>
        </div>
      </div>
      <ContactUsModal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
    </div>
  );
};

export default Navbar;
