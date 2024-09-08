import faqImg from '../../assets/faq/faqBG.jpg'
import faqLogo from '../../assets/faq/faq 1.svg'
import dropdown from "../../assets/faq/chevron-down.svg"
import dropup from "../../assets/faq/chevron-up.svg"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { useState } from 'react';

const CustomAccordion = styled(Accordion)({
  backgroundColor: '#090909',
  color: '#FFFFFF',
  boxShadow: 'none',
  borderBottom: '1px solid #FFFFFF',
});

const CustomAccordionSummary = styled(AccordionSummary)({
  color: '#FFFFFF',
  '& .MuiAccordionSummary-expandIcon': {
    color: '#FFFFFF',
  },
});

const CustomAccordionDetails = styled(AccordionDetails)({
  color: '#FFFFFF',
  fontSize: '16px',
});


const FaqHero = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const faqData = [
    {
      que: 'What services do you offer at PixelCraft?',
      ans: 'At PixelCraft, we offer professional photography and videography services tailored to your needs, including portrait sessions, event coverage, and more.',
    },
    {
      que: 'What is your pricing structure?',
      ans: 'Our pricing is customized based on the scope and nature of the project. Please contact us for a detailed quote.',
    },
    {
      que: 'Where are you located?',
      ans: 'PixelCraft is based in Melbourne, Australia, but we are available for travel to various locations.',
    },
    {
      que: 'How can I book a session with PixelCraft?',
      ans: 'You can book a session by contacting us directly through our website or by calling our office.',
    }
  ]
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${faqImg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',

        }}
        className='pt-[30px] pb-[30px] pr-[20px] pl-[20px] md:pt-[145px] md:pb-[145px] md:pr-[64px] md:pl-[64px] lg:pt-[129px] lg:pr-[90px] lg:pb-[129px] lg:pl-[90px] text-[#FFFFFF]'
      >
        <div className='bg-[#090909] p-2.5 md:pt-[30px] md:pr-[41px] md:pb-[30px] md:pl-[41px]'>
          <div className='flex gap-[5px] justify-center items-center'>
            <img src={faqLogo} alt='faqLogo' className='h-[30px] w-[30px] md:h-[90px] md:w-[90px]' />
            <div>
              <p className='font-bold font-hind text-2xl md:text-[48px] leading-[38.42px] md:leading-[76.85px]'>
                Frequently Asked
              </p>
              <p className='font-bold font-hind text-base md:text-[32px] leading-[25.62px] md:leading-[51.23px]'>
                Questions
              </p>
            </div>
          </div>

          <p className='p-2.5 text-center mt-[30px] text-base md:text-2xl font-medium leading-[21.33px] md:leading-[32px] font-playfair'>
            Welcome to the PixelCraft FAQ page! Here, we’ve compiled answers to
            some of the most common questions we receive about our services.
            Whether you’re curious about our photography sessions, videography,
            or our booking process, you’ll find the information you need right
            here. If you have any other questions, feel free to reach out to us
            directly!
          </p>


          <div className="max-w-[864px] mt-[30px] mx-auto">
          {faqData.map((faq, index) => (
              <CustomAccordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                <CustomAccordionSummary
                  expandIcon={<img src={expanded === `panel${index}` ? dropup : dropdown} alt="expand-icon" className='color-white w-[31px] md:w-[44px]'/>}
                >
                  <p className='font-hind text-base leading-[25.62px] md:text-[32px] md:leading-[42.66px] font-normal'>{faq.que}</p>
                </CustomAccordionSummary>
                <CustomAccordionDetails>
                  <p className='font-playfair text-[12px] md:text-2xl font-medium md:leading-[32px] leading-4'>{faq.ans}</p>
                </CustomAccordionDetails>
              </CustomAccordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqHero
