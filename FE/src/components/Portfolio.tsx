import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Import required modules
import { Autoplay } from 'swiper/modules';
import image1 from "../assets/Portfolio/Portfolio img 1.png"
import image2 from "../assets/Portfolio/Portfolio img 2.png"
import image3 from "../assets/Portfolio/bike.jpeg"
import image4 from "../assets/Portfolio/dal.jpeg"
import image5 from "../assets/Portfolio/wed.jpeg"
import { Link } from 'react-router-dom';

const TestimonialSection = () => {
const imagesArr=[image1,image2,image3,image4,image5]

  return (
    <div className="testimonial-section pt-[30px] pb-[30px] md:pt-[37px] md:pb-[48px] mt-[30px] text-center text-[#FFFFFF] bg-[#070707]">
   
      <p className='p-2.5 text-[20px] md:text-[32px] leading-[32px] md:leading-[51.23px] font-bold  font-hind'>Portfolio Section</p>
      <p className='text-base md:text-2xl leaing-[21.33px] md:leading-[32px] font-medium	 font-playfair'>"A Glimpse into Our World of Captured Moments"</p>
      <div>
           <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2000, // 3 seconds delay between slides
          disableOnInteraction: false, // Continue auto-sliding even after user interaction
        }}
        loop={true} // Loop through the slides
        modules={[Autoplay]} // Only Autoplay module needed
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1.2, 
          },
          480: {
            slidesPerView: 1.5, 
          },
          640: {
            slidesPerView: 2, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
      >
        {imagesArr.map((img,ind) => (
          <SwiperSlide key={ind}>
            <div className='mt-[18px]'>
              <img src={img} alt="img" className='w-[539px] h-[150px] md:h-[284px] object-cover'/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      <Link to="/portfolio"><button className="text-[#E7E7E7] font-hind rounded-[10px] pt-[5px] pb-[5px] pl-[30px] pr-[30px] md:pt-2.5 md:pr-[57px] md:pb-2.5 md:pl-[57px] bg-[#D71918] font-bold md:text-2xl text-base leading-[25.62px] md:leading-[38.42px] mt-[18px]" style={{boxShadow: "-1px 11px 11.6px 0px #D7191833"}}>
            View All
          </button></Link>
    </div>
  );
};

export default TestimonialSection;
