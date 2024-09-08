import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/swiper-bundle.css'
import '../App.css'
import bg1 from '../assets/Carousel/bg.png'
import bg2 from '../assets/Carousel/back1.jpeg'
import bg3 from '../assets/Carousel/back2.jpeg'
import bg4 from '../assets/Carousel/back3.jpeg'
import chevronRight from '../assets/Next.svg'
import { Link } from 'react-router-dom'

const slidesData = [
  {
    background: bg1,
    title: "Welcome to",
    highlight: "PIXELCRAFT",
    description:
      "A We are a dynamic production company specializing in storytelling through visual media. ",
    link: "/about-us",
    showButton: true,  // Only for the first slide
  },
  {
    background: bg2,
    title: "Crafting Timeless",
    highlight: "Memories",
    description:
      "At PixelCraft, we believe that every picture tells a story. Our mission is to transform your special moments into timeless memories with our expert photography services.",
  },
  {
    background: bg3,
    title: "Welcome to",
    highlight: "PIXELCRAFT",
    description:
      "At PixelCraft, we believe that every picture tells a story. Our mission is to transform your special moments into timeless memories with our expert photography services.",
  },
  {
    background: bg4,
    title: "Welcome to",
    highlight: "PIXELCRAFT",
    description:
      "At PixelCraft, we believe that every picture tells a story. Our mission is to transform your special moments into timeless memories with our expert photography services.",
  },
]

const Carousel = () => {
  return (
    <div className='relative overflow-hidden max-w-[1440px] mx-auto h-[200px] md:h-[450px] lg:h-[618px]'>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index} className='relative'>
            <div
              className='swiper-slide-bg bg-cover bg-center h-[200px] md:h-[450px] lg:h-[618px] relative'
              style={{ backgroundImage: `url(${slide.background})` }}
            >
              <div className='text-[#E7E7E7] pt-[15px] pl-[11px] lg:pt-[143px] lg:pl-[71px] md:pt-[65px] md:pl-[64px]'>
                <h1 className='tex-[16px] md:text-[48px] font-playfair leading-[21.33px] md:leading-[63.98px] font-normal md:mb-4 max-w-[424px] md:p-[10px]'>
                  {slide.title}{' '}
                  <p className='text-[24px] md:text-[64px] font-bold leading-[32px] md:leading-[85.31px]'>
                    {slide.highlight}
                  </p>
                </h1>
                <p className='text-[12px] md:text-2xl font-playfair font-normal leading-4 md:leading-[32px] md:max-w-[660px] md:p-[10px] mt-[5px] md:mt-0'>
                  {slide.description}
                </p>
              {slide.showButton && (
                <Link to={slide.link}>
                  <button className='flex items-center font-robotoFlex justify-center  text-[#E7E7E7] mt-[5px] md:mt-[27px] rounded-[10px] pl-[5px] pr-[5px] md:pt-[6px] md:pr-2 md:pb-[6px] md:pl-2 gap-[5px] bg-[#D71918] font-bold text-[12px] md:text-base leading-[19.27px] md:leading-[18.75px]'>
                    Learn more
                    <img src={chevronRight} alt='chevronRight' className='h-[12px] w-[5px] md:h-[16px] md:w-[10px]'/>
                  </button>
                </Link>
              )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel
