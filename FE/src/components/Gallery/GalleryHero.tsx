import backgroundImg from '../../assets/Gallery/GalleryHeroBG.png'
const GalleryHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
      className='pt-[23px] pb-[23px] md:pt-[57px] md:pb-[57px] lg:pt-[227px] lg:pb-[228px] text-[#FFFFFF] flex flex-col items-center '
    >
      <p className='p-2.5 font-playfair font-bold leading-[21.33px] md:leading-[63.98px] text-[16px] md:text-[48px] max-w-[340px] md:max-w-[809px] lg:max-w-[975px] text-center'>
        Showcasing Creativity, Crafting Excellence
      </p>
      <p className='p-2.5 font-playfair font-normal leading-4 md:leading-[26.66px] text-[12px] md:text-[20px] max-w-[340px] md:max-w-[809px] lg:max-w-[975px] text-center'>
        Our pre-wedding photography captures the romance and excitement of your
        journey together. From candid moments to beautifully posed shots, we
        create timeless images that celebrate your love story before the big
        day.
      </p>
    </div>
  )
}

export default GalleryHero
