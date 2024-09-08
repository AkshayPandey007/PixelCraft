import BrandAdvertise from "../assets/OurServices/brand.gif"
import Camera from "../assets/OurServices/camgif.gif"
import Graphic from "../assets/OurServices/graphic.gif"
import Video from "../assets/OurServices/video.gif"


const OurServices = () => {
  const serviceData = [
    {
      logo: 
       
          Camera 
      
      ,
      serviceTitle: 'Photography',
      serviceDes:
        "Capture life's moments with our professional photography services. Whether it's a wedding, portrait session, or a special event, our skilled",
    },
    {
      
      logo:Video,
    
      serviceTitle: 'Videography',
      serviceDes:
        'Tell your story through motion with our expert videography services. From cinematic wedding films to corporate videos we create high-quality',
    },
    {
      logo:
          Graphic
     ,
      serviceTitle: 'Graphics & Animation',
      serviceDes:
        'Bring your ideas to life with our graphics and animation services. Our creative team designs captivating visuals and animations that enhance',
    },
    {
      logo: 
          BrandAdvertise
     ,
      serviceTitle: 'Brand Advertising',
      serviceDes:
        'Elevate your brand with our comprehensive advertising services. We develop strategic campaigns that highlight your unique value, ',
    },
  ];
    return (
      <div className='max-w-[1440px] mx-auto  bg-[#050505] pt-[27px] pb-[27px] pl-[23px] pr-[23px] md:pl-[76px] md:pr-[76px]'>
        <h3 className=' font-bold text-[20px] leading-[32px] md:leading-[51.23px] md:text-[32px] text-[#FFFFFF] text-center'>
          Our Services
        </h3>
        <div className='max-w-[1292px] w-full mx-auto mt-[62px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[31px]'>
          {serviceData.map((el, ind) => (
            <div
            style={{boxShadow: '0px 4px 4px 0px #FFFFFF26'}}
              key={ind}
              className='cursor-pointer pt-[27px] pl-[13px] pb-[27px] pr-[13px] rounded-[10px]  bg-[#0E0E0E] flex flex-col items-center text-center text-[#FFFFFF] gap-5'
            >
              <div className='text-[#D71918]'>
                <img src={el.logo} alt="" className="w-[34px] h-[34px] md:w-[84px] md:h-[84px]"/>
              </div>
              <h3 className='font-bold leading-[21.33px] md:leading-[32px] text-[16px] md:text-2xl text-[#FFFFFF] text-center'>
                {el.serviceTitle}
              </h3>
              <p className='font-bold text-[12px  ] md:text-base leading-4 md:leading-[22px] text-[#FFFFFF] text-center'>
                {el.serviceDes}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurServices;
  
  
