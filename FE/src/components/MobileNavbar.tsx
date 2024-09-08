import { useEffect, useState } from 'react';
import NavbarLogo from "../assets/Pixelcraft Production Logo.png";
import { Link, useLocation } from 'react-router-dom';
import MenuLogo from "../assets/Menu.svg";
import { Drawer, List, ListItem, IconButton } from '@mui/material';
import CloseIcon from "../assets/Gallery/circle-x.svg"
import facebook from "../assets/Footer/facebook.png";
import linkedIn from "../assets/Footer/Icon.png";
import insta from "../assets/Footer/Insta.png";
import youtube from "../assets/Footer/Youtube.png";
import ContactUsModal from './ContactUsModal';

const MobileNavbar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('Home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const iconArr = [facebook, linkedIn, youtube, insta];

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = menuItems.find(item => item.link === currentPath);
    setActiveMenu(activeItem ? activeItem.name : '');
  }, [location.pathname]);

  const menuItems = [
    { name: 'Home', link: "/" },
    { name: 'About Us', link: "/about-us" },
    { name: 'Portfolio', link: "/portfolio" },
  ];

  const handleMenuClick = (menu:any) => {
    setActiveMenu(menu);
    setIsDrawerOpen(false); // Close the drawer after selecting a menu item
  };

  useEffect(() => {
    // Function to check screen size and close drawer if above 'md'
    const handleResize = () => {
      if (window.matchMedia('(min-width: 768px)').matches) {
        setIsDrawerOpen(false);
      }
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-[#0C0C0C] max-w-[1440px] mx-auto mb-[30px] pt-[25px] pb-[25px] pl-[28px] pr-[38px]" style={{boxShadow: '0px 4px 4px 0px #FFFFFF26'}}>
      <Link to="/"> <img src={NavbarLogo} alt="NavbarLogo" className="h-[62px] w-[65px] object-cover" /></Link>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <img src={MenuLogo} alt='MenuLogo' className='cursor-pointer'/>
      </IconButton>
      
      
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}
         PaperProps={{ 
            sx: { 
              backgroundColor: '#050505', 
              width: '264px',
            //   position:'relative'
            } 
          }}
        >
            <IconButton
            onClick={() => setIsDrawerOpen(false)}
            style={{display:'flex',justifyContent:'right',marginTop:'20px',paddingRight:'20px'}}
          >
            <img src={CloseIcon} alt="Close"/>
          </IconButton>
        <List >
          {menuItems.map((item) => (
            <ListItem button key={item.name} onClick={() => handleMenuClick(item.name)}>
              <Link to={item.link} >
                <p className={`p-2.5 text-2xl leading-[38.42px] font-bold font-hind text-[#FFFFFF] mb-[30px] 
                    ${
              activeMenu === item.name ? 'bg-[#D71918] rounded-[10px]' : ''
            }
                    `}>{item.name}</p>
              </Link>
            </ListItem>
          ))}
          <ListItem>
           <button className="text-[#E7E7E7] font-hind rounded-[10px] p-2.5 gap-[5px] bg-[#D71918] font-bold text-2xl leading-[38.42px]" onClick={()=>{
            setIsDrawerOpen(false)
            handleOpen()
           }}>
            Contact Us
          </button>
          </ListItem>
          <ListItem>
          <div className="flex gap-2 mt-[30px]">
                    {iconArr.map((el, ind) => (
                        <div key={ind} className="h-[40px] w-[40px] flex justify-center items-center">
                            <img src={el} alt={`icon-${ind}`} className="w-[24px] h-[24px]" />
                        </div>
                    ))}
                </div>
          </ListItem>
        </List>
      </Drawer>
       <ContactUsModal open={open} handleOpen={handleOpen} handleClose={handleClose}/>
    </div>
  );
};

export default MobileNavbar;
