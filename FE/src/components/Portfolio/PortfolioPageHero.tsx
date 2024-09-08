import backgroundImg from '../../assets/Portfolio/portfolioBG.png'
const PortfolioHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center 70px',
        backgroundAttachment: 'fixed',
      }}
      className='pt-[30px] pb-[30px] md:pl-[27px] md:pr-[27px] lg:pt-[227px] lg:pb-[228px] text-[#FFFFFF] flex flex-col items-center '
    >
      <p className='max-w-[344px] p-2.5 font-playfair font-bold leading-[21.33px] md:leading-[63.98px] text-[16px] md:text-[48px] md:max-w-[975px] text-center'>
      Showcasing Creativity, Crafting Excellence
      </p>
      <p className='max-w-[344px] p-2.5 font-playfair font-normal leading-4 md:leading-[32px] text-[12px] md:text-2xl md:max-w-[975px] text-center'>
      Explore our curated collection of work, where creativity meets precision. Each project in our portfolio reflects our commitment to excellence and our passion for bringing your vision to life.
      </p>
    </div>
  )
}

export default PortfolioHero
