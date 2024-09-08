import client1 from '../assets/OurClient/Client 1.png'
import client2 from '../assets/OurClient/Client 2.png'
import client3 from '../assets/OurClient/Client 3.png'
import client4 from '../assets/OurClient/Client 4.png'
import client5 from '../assets/OurClient/Client 5.png'
import client6 from '../assets/OurClient/Client 6.png'
import clientBg from '../assets/OurClient/backkk.png'
const OurClients = () => {
  const clientArr = [client1, client2, client3, client4, client5, client6]
  return (
    <div
      className='pt-[62px] pb-[142px] text-[#FFFFFF] text-center'
      style={{
        backgroundImage: `url(${clientBg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <p className='p-2.5 text-[32px] leading-[51.23px] font-bold  font-hind'>
        Our Clients
      </p>
      <p className='text-2xl leading-[32px] font-medium font-playfair'>
        "Trusted by Visionaries, Loved by Many"
      </p>
      <div className='mt-5 mr-[90px] ml-[90px] mx-auto grid grid-cols-6 gap-[92px] items-center'>
        {clientArr.map((el, ind) => (
          <div key={ind} className='flex justify-center'>
            <img src={el} alt='' className='max-h-[103px]' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurClients
