import { List, ListItem } from '@mui/material';
import termsAndConditionLogo from '../assets/Team and condition icon.svg'
import ContactUs from '../components/ContactUs';

const termsAndConditionData = [
  {
    title: "Collaboration and Communication:",
    items: [
      "We believe in open and honest communication with our clients. From the initial consultation to the final delivery, our team ensures you are informed and involved every step of the way.",
      "Clients are encouraged to share their ideas, preferences, and feedback to help us create a personalized experience that aligns with their vision."
    ],
  },
  {
    title: "Professionalism and Integrity:",
    items: [
      "Our team members adhere to the highest standards of professionalism. We are committed to respecting our clients' time, privacy, and creative vision.",
      "We maintain a friendly and respectful work environment, ensuring a positive experience for everyone involved."
    ],
  },
  {
    title: "Quality Assurance:",
    items: [
      "Every team member is dedicated to delivering the highest quality of work. From capturing the perfect shot to editing with precision, we ensure that every detail is perfected.",
      "We use state-of-the-art equipment and the latest techniques to provide superior results that exceed client expectations."
    ],
  },
  {
    title: "Flexibility and Adaptability:",
    items: [
      "We understand that every project is unique and may require adjustments along the way. Our team is flexible and adaptable, ready to accommodate last-minute changes or specific client needs.",
      "Whether it’s adjusting to weather conditions, rescheduling a shoot, or incorporating new ideas, our team is prepared to handle any situation professionally."
    ],
  },
  {
    title: "Commitment to Deadlines:",
    items: [
      "Timely delivery is a priority for us. We establish clear timelines and deadlines for every project, ensuring that we meet or exceed your expectations.",
      "Our team is committed to punctuality and reliability, providing you with a seamless and efficient experience."
    ],
  },
  {
    title: "Continuous Improvement:",
    items: [
      "Our team is dedicated to learning and growing. We regularly participate in training and workshops to stay updated with industry trends and enhance our skills.",
      "Feedback from clients is invaluable to us. We use it to improve our services and provide an even better experience in future projects."
    ],
  },
];

const TermsAndCondition = () => {
  return (
    <>
    <div className='max-w-[1282px] p-[30px]  mx-auto bg-[#090909] text-[#FFFFFF]'>
      <div className='pt-[30px] mr-[50px] ml-[50px] mx-auto'>
        <div className='flex gap-[5px] justify-center items-center'>
          <img src={termsAndConditionLogo} alt='termsAndConditionLogo' className='w-[30px] h-[30px] md:w-[90px] md:h-[90px]'/>
          <p className='text-[20px] md:text-[48px] font-bold leading-[32px] md:leading-[76.85px] font-hind'>
            Terms and conditions
          </p>
        </div>
        <p className='p-2.5 text-center text-[16px] md:text-2xl font-normal leading-[21.33px] md:leading-[32px] font-playfair mt-[10px]'>
          At PixelCraft, our team is our greatest asset. Comprising talented
          photographers, videographers, designers, and coordinators, each member
          brings a unique set of skills and a passion for creativity. We work
          together seamlessly to turn your vision into reality, delivering
          exceptional results every time. Get to know the faces behind the lens
          and the people who make every project a success.
        </p>
      </div>
      <p className='mt-[30px] text-[20px] md:text-[32px] font-bold font-playfair leading-[26.66px] md:leading-[42.66px] text-center text-[#D71918]'>
        Team Guidelines and Conditions
      </p>
      <div className='mt-[30px] ml-[19px] mr-[19px]  flex flex-col gap-[30px]'>
        {termsAndConditionData.map((section, index) => (
          <div key={index}>
            <p className='text-[16px] md:text-[32px] leading-[21.33px] md:leading-[42.66px] font-bold font-playfair'>
              <span>{index + 1}.</span> {section.title}
            </p>
            <div className='mt-[30px]'>
            <List sx={{ pl: 2, '& li': { position: 'relative', paddingLeft: '12px' } }}>
              {section.items.map((item, itemIndex) => (
                <ListItem
                  key={itemIndex}
                  sx={{
                    display: 'list-item',
                    padding: 0,
                    '&::marker': {
                      content: '"•"', // Default bullet
                      color: 'white', // Bullet color
                      fontSize: '24px', // Bullet size
                    },
                  }}
                >
                  <p  className='text-[13px] md:text-[32px] leading-[17.33px] md:leading-[42.66px] font-normal font-playfair'>{item}</p>
                </ListItem>
              ))}
            </List>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <ContactUs/>
    </>
  )
}

export default TermsAndCondition
