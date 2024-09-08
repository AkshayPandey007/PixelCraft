import chevronRight from '../assets/Next.svg'
import frameOne from "../assets/AboutUs/Photo frame 1.png"
import frameTwo from "../assets/AboutUs/Photo frame 2.png"
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <div className='mt-[30px] flex xl:flex-row flex-col-reverse md:pl-[35px] pl-[20px] pr-[20px] md:pr-[35px] lg:pl-[80px] lg:pr-[80px] xl:pl-0 xl:pr-0'>
      <div className='xl:mt-[55px] xl:mb-[55px] xl:ml-[95px] bg-[#050505] text-[#E7E7E7] max-w-[1292px] xl:max-w-[848px] pt-[31px] pb-[31px]'>
        <p className='font-hind text-[16px] md:text-[32px] leading-[25.62px] md:leading-[52px] xl:ml-[75px] font-bold p-2.5 text-center xl:text-start'>
          About Us
        </p>

        <p className='p-2.5 font-playfair text-[12px] md:text-2xl leading-4 md:leading-[32px] xl:ml-[75px] xl:mr-[70px]  font-semibold	tracking-[0.02em] mt-[30px] text-center xl:text-start'>
          At PixelCraft, we are passionate about the art of photography. Our
          journey began with a simple belief: that every moment is worth
          capturing. We are a team of dedicated photographers and visual
          storytellers who strive to create stunning imagery that speaks to the
          heart.Our mission is to turn your precious moments into lasting
          memories. We believe in the power of a single photograph to evoke
          emotions, tell stories, and preserve the{' '}
        </p>
       <Link to="/about-us"><button className='flex xl:ml-[91px] items-center font-robotoFlex justify-center text-[#E7E7E7] mt-[27px] rounded-[10px] pl-[5px] pr-[5px] md:pt-[6px] md:pr-2 md:pb-[6px] md:pl-2 gap-[5px] bg-[#D71918] font-bold text-[12px] md:text-base leading-[19.21px] md:leading-[25.62px] mx-auto xl:items-start'>
          Learn more
          <img src={chevronRight} alt='chevronRight' className='h-[12px] w-[5px] md:h-[16px] md:w-[10px]'/>{' '}
        </button>
        </Link> 
      </div>
      <div className="relative">
      <img src={frameOne} alt="frameOne" className='h-[200px] max-w-[406px] md:h-[350px] mx-auto relative'/>
      <img src={frameTwo} alt="frameTwo" className='absolute top-[250px] right-[85px] max-w-[406px] max-h-[304px] z-11 hidden xl:block'/>
      </div>
    </div>
  )
}

export default AboutUs




