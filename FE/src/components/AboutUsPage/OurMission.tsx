import ourMission from '../../assets/Frame.png'
const OurMission = () => {
  return (
    <div className='pt-[30px] md:pl-[67px] md:pr-[67px] pb-[30px] flex flex-col gap-[30px] md:gap-[0] xl:flex-row items-center bg-[#090909]'>
      <div className='w-fit flex mx-auto xl:m-0'>
        <img src={ourMission} alt='' className='m-auto md:h-[482px] h-[176px]' />
      </div>
      <div className='pt-[22px] pb-[22px] md:pt-[25px] md:pb-[25px] pl-[32px] pr-[25px] text-[#FFFFFF] bg-[#0F0F0F] xl:rounded-r-[43px] rounded-b-[43px] rounded-bl-[43px] xl:rounded-l-none'>
        <p className='p-2.5 font-bold font-hind leading-[32px] md:leading-[51.23px] text-[20px] md:text-[32px] text-center xl:text-start'>
          Our Mission
        </p>
        <p className='max-w-[818px] pt-2.5 pl-2.5 pb-2.5 pr-[22px] font-medium font-playfair text-[12px] md:text-2xl leading-[18px] md:leading-[36px]  text-center xl:text-start'>
          At PixelCraft, our mission is to transform moments into lasting
          memories and ideas into captivating visuals. We are dedicated to
          delivering exceptional quality and creativity in every project,
          whether it's through photography, videography, graphics, or brand
          advertising. Our goal is to tell your story in a way that resonates,
          inspires, and leaves a lasting impact. We strive to exceed
          expectations, turning your vision into a beautiful reality.
        </p>
      </div>
    </div>
  )
}

export default OurMission
