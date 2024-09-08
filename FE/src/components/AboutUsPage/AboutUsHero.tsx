import backgroundImg from '../../assets/AboutUs/AboutUsPageBG.png'
import chevronRight from '../../assets/Next.svg'
const AboutUsHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      className='pt-[15px] pb-[15px] md:pt-[23px] md:pb-[23px] lg:pt-[162px] lg:pb-[117px] text-[#FFFFFF] flex flex-col items-center'
    >
      <p className='p-2.5 text-[#D71918] text-[16px] md:text-2xl font-bold font-hind leading-[25.62px] md:leading-[38.42px]'>
        Let’s start!
      </p>
      <p className='p-2.5 font-playfair font-bold leading-[21.33px] md:leading-[42.66px] text-[16px] md:text-[48px] text-center'>
        "Crafting Stories Through the Art of Visual Excellence"
      </p>
      <p className='p-2.5 font-playfair font-medium leading-4 md:leading-[32px] text-[12px] md:text-2xl text-center'>
        At PixelCraft, we believe every story deserves to be told with
        creativity and precision.
      </p>
      <button className='flex items-center  font-robotoFlex justify-center border-none text-[#E7E7E7]  rounded-[10px] md:pt-[6px] pr-2 md:pb-[6px] pl-2 gap-[5px] bg-[#D71918] font-bold  text-[12px] leading-[19.21px] md:text-base md:leading-[25.62px] mt-5' style={{boxShadow: "-1px 11px 11.6px 0px #D7191833"}}>
        Learn more
        <img src={chevronRight} alt='chevronRight' className='h-[12px] w-[5px] md:h-[16px] md:w-[10px]'/>{' '}
      </button>
    </div>
  )
}

export default AboutUsHero
