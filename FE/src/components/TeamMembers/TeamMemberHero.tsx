import backgroundImg from '../../assets/AboutUs/AboutUsPageBG.png'
import chevronRight from '../../assets/Next.svg'
const TeamMemberHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      className='pt-[15px] pb-[15px] pl-[17px] pr-[13px] md:pt-[13px] md:pb-[13px] md:pl-[44px] md:pr-[44px] lg:pt-[102px] lg:pb-[102px] lg:pl-[254px] lg:pr-[254px] text-[#FFFFFF] flex flex-col items-center'
    >
      <p className='p-2.5 text-[#D71918] text-[16px] md:text-2xl font-bold font-hind leading-[25.62px] md:leading-[38.42px]'>
        Let’s start!
      </p>
      <p className='p-2.5 font-playfair font-bold leading-[21.33px] md:leading-[42.66px] text-[16px] md:text-[48px] text-center'>
      Meet the Creative Minds Behind the Lens
      </p>
      <p className='p-2.5 font-playfair font-medium leading-4 md:leading-[32px] text-[12px] md:text-2xl text-center'>
      Our team is the heart of PixelCraft, blending creativity, passion, and expertise to bring your vision to life. From photographers and videographers to designers and strategists, each member plays a vital role in crafting unforgettable experiences. Get to know the talented individuals who make every project a masterpiece, ensuring that every moment is captured beautifully and every idea is brought to life with perfection.
      </p>
    </div>
  )
}

export default TeamMemberHero
