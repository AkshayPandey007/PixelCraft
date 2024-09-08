import AshuImg from "../../assets/AboutUs/img Frame.png"
import AshuPatnerImg from "../../assets/AboutUs/imgPatnerFrame.png"
import { Link } from 'react-router-dom'
const OurTeam = () => {
  return (
    <div className="pt-[14px] pb-[14px] md:pt-[60px] md:pb-[60px] lg:pt-[75px] mt-[30px] lg:pb-[75px] bg-[#090909] flex flex-col xl:flex-row gap-[32px] items-center justify-between pl-[23px] pr-[23px] sm:pl-[81px] sm:pr-[81px]">
      <div className="max-w-[766px] xl:max-w-[411px] xl:text-start flex flex-col items-center xl:items-start text-center">
      <p className="p-2.5 text-[#D71918] mt-[5px] leading-[32px] md:leading-[38.42px] text-[20px] md:text-2xl font-bold font-hind">Our Team</p>
      <p className="p-2.5 text-[#FFFFFF] mt-[5px] leading-[21.33px] md:leading-[42.66px] text-[16px] md:text-[32px] tracking-[2%] font-bold font-playfair">United by Passion, Driven by Creativity</p>
      <p className="p-2.5 text-[#FFFFFF] mt-[5px] text-[12px] md:text-2xl font-medium font-playfair leading-4 md:leading-[32px]">At PixelCraft, our team is the heart of everything we do. Comprised of passionate photographers, visionary videographers, creative graphic designers, and strategic brand experts,</p>
     <Link to="/team-members"><button className='flex items-center  font-roboto Flex justify-center   text-[#E7E7E7]  rounded-[10px] md:pt-2.5 md:pb-2.5 md:pl-12 md:pr-12 pt-[5px] pb-[5px] pl-[30px] pr-[30px] gap-[5px] bg-[#D71918] font-bold text-base md:text-2xl leading-[25.62px] md:leading-[38px] mt-[5px]' style={{boxShadow: "-1px 11px 11.6px 0px #D7191833"}}>
            View all
          </button></Link> 
      </div>
      <div className='flex gap-[32px] md:flex-row sm:flex-row flex-col'>
      <div className='bg-[#0F0F0F] text-center w-fit' style={{boxShadow: '0px 4px 4px 0px #FFFFFF26'}} >
        <div>
        <img src={AshuImg} alt="AshuImg" className='w-full max-w-full h-[200px] md:h-[309px] rounded-[10px] object-cover'/>
        </div>
        <p className='p-2.5 font-playfair leading-[21.33px] md:leading-[32px] text-[16px] md:text-2xl font-bold'>Ashutosh Dhyani</p>
        <p className='p-2.5 font-playfair leading-4 md:leading-[26.66px] text-[12px] md:text-xl font-semibold'>CEO, Founder, Head Photographer</p>
        <p className='p-2.5 font-playfair leading-4 md:leading-[21.33px] text-[12px] md:text-base font-medium'>Ashutosh Dhyani is the visionary behind PixelCraft, combining his passion for photography with his entrepreneurial spirit.</p>
      </div>
      <div className='bg-[#0F0F0F] text-center w-fit' style={{boxShadow: '0px 4px 4px 0px #FFFFFF26'}} >
        <img src={AshuPatnerImg} alt="AshuPatnerImg" className='w-full max-w-full h-[200px] md:h-[309px] rounded-[10px] object-cover'/>
        <p className='p-2.5 font-playfair leading-[21.33px] md:leading-[32px] text-[16px] md:text-2xl font-bold'>Abhishek Chandola</p>
        <p className='p-2.5 font-playfair leading-4 md:leading-[26.66px] text-[12px] md:text-xl font-semibold'>Co-CEO, Head Filmmaker, Video Editor,</p>
        <p className='p-2.5 font-playfair leading-4 md:leading-[21.33px] text-[12px] md:text-base font-medium'>Abhishek Chandola is the creative force behind PixelCraft’s videography, known for his cinematic approach and eye for detail</p>
      </div>
      </div>
    </div>
  )
}

export default OurTeam