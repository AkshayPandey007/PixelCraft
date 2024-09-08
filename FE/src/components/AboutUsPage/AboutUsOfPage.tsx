import chevronRight from '../../assets/Next.svg'
import ABoutUSImg from "../../assets/AboutUs/Image.png"
const AboutUsOfPage = () => {
  return (
    <div className='pt-[36px] pb-[36px] md:pl-[80px] md:pr-[80px] flex bg-[#0B0B0B] flex-col-reverse gap-[30px] xl:gap-0 xl:flex-row'>
        <div className='md:pl-[31px] bg-[#070707] text-[#FFFFFF] flex flex-col items-center text-center xl:text-start xl:flex-none xl:items-start'>
        <p className='p-2.5 mt-[20px] md:mt-[26px] leading-[30px] md:leading-[48px] text-[20px] md:text-[32px] font-bold font-playfair'>About Us</p>
        <p className='max-w-[724px] p-2.5 font-medium font-playfair text-[16px] md:text-2xl leading-[24px] md:leading-[36px]'>Welcome to PixelCraft, where we believe in the power of visual storytelling. Our passion for creativity and dedication to excellence drives us to capture and create unforgettable moments for our clients. We are a team of talented photographers, videographers, graphic designers, and brand strategists, committed to transforming your vision into stunning visual content.</p>
        <button className='flex items-center mb-[20px] md:mb-[25px]  font-robotoFlex justify-center   text-[#E7E7E7]  rounded-[10px] md:pt-[6px] pr-2 md:pb-[6px] pl-2 gap-[5px] bg-[#D71918] font-bold text-[12px] leading-[19.21px] md:text-base md:leading-[25.62px] mt-5' style={{boxShadow: "-1px 11px 11.6px 0px #D7191833"}}>
            Learn more
            <img src={chevronRight} alt='chevronRight' className='h-[12px] w-[5px] md:h-[16px] md:w-[10px]'/>{' '}
          </button>
      </div>
      <div className='bg-[#070707] flex m-auto xl:m-0 md:pt-[44px] pt-[26px] pb-[26px] pr-[40px] pl-[40px] md:pb-[44px] md:pl-[49px] md:pr-[49px]  w-fit'>
      <img src={ABoutUSImg} alt="ABoutUSImg" className='max-w-[414px] w-full object-cover h-[170px] md:h-[417px] rounded-[10px]'/>
      </div>
    </div>
  )
}

export default AboutUsOfPage