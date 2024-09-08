import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Avatar } from '@mui/material'
const Testimonials = () => {
  const testimonialData = [
    {
      name: 'Jessica & Mark',
      des: "PixelCraft's team was incredible to work with. They captured our wedding beautifully, and the photos exceeded all our expectations. Highly recommended!",
      content: 'A Wonderful Experience'
    },
    {
      name: 'David',
      des: 'The quality of the photos and videos from PixelCraft is unmatched. Their service was professional, friendly, and attentive to every detail.',
      content: 'Amazing Quality and Service'
    },
    {
      name: 'Samantha K',
      des: "PixelCraft's creativity and expertise truly shine through in their work. They transformed our event into a visual masterpiece. We couldn't be happier.",
      content: 'Exceeded Our Expectations'
    },
    {
      name: 'Akshay',
      des: "PixelCraft's team was incredible to work with. They captured our wedding beautifully, and the photos exceeded all our expectations. Highly recommended! ",
      content: 'A Wonderful Experience'
    }
  ]

  const getAvatarBackgroundColor = (index: any) => {
    const colors = ['#fff', '#D71918', '#fff', '#D71918']
    return colors[index % colors.length]
  }

  const getAvatarColor = (index: any) => {
    const colors = ['#0E0E0E', '#fff', '#0E0E0E', '#fff']
    return colors[index % colors.length]
  }
  return (
    <div className='pt-[41px] pb-[64px] text-center bg-[#050505]'>
      <p className='p-2.5 text-[#FFFFFF] font-bold font-playfair text-[20px] md:text-[32px] leading-[26.66px] md:leading-[42.66px]'>
        "Your Voice, Our Inspiration"
      </p>

      <div>
        <Swiper
          spaceBetween={32}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          loop={true}
          modules={[Autoplay]}
          className='mySwiper'
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            480: {
              slidesPerView: 1.2
            },
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
        >
          <div className=' mt-[60px]'>
            {testimonialData.map((el, ind) => (
              <SwiperSlide key={ind}>
                <div className='relative text-center pt-[26px] mt-[60px] mb-[64px] h-[200px] md:h-[360px] text-[#FFFFFF] bg-[#0E0E0E] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[63px] rounded-br-[63px]'>
                  <p className='text-[12px] md:text-2xl font-bold font-playfair leading-4 md:leading-[32px]'>
                    {el.content}
                  </p>
                  <p className='p-2.5 mt-5 font-playfair text-[10px] md:text-xl font-medium leading-[13.33px] md:leading-[26.66px] align-center'>
                    {el.des}
                  </p>
                  <p className='text-[12px] md:text-base mt-5 font-playfair font-normal	leading-4 md:leading-[21.33px]'>
                    {el.name}
                  </p>
                  <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-[28px] p-[10px] md:p-[28px] rounded-[50%] bg-[#0E0E0E]'>
                    <Avatar
                      sx={{
                        color: getAvatarColor(ind), // Text color of the initial
                        width: {
                          xs: 35,
                          sm: 35,
                          md: 84
                        }, // Avatar size
                        height: {
                          xs: 35,
                          sm: 35,
                          md: 84
                        },
                        fontSize: {
                          xs: 24,
                          sm: 24,
                          md: 48
                        }, // Font size of the initial
                        bgcolor: getAvatarBackgroundColor(ind),
                        fontWeight: '700'
                      }}
                      className='leading-[76.85px] font-hind'
                    >
                      {el.name.charAt(0)} {/* Display the first initial */}
                    </Avatar>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
