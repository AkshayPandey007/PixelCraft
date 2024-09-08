
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


const FaqGetInTouch = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const faqData = [
    {
      que: 'What Service Are You Interested In?',
      ans: 'At PixelCraft, we offer professional photography and videography services tailored to your needs, including portrait sessions, event coverage, and more.',
    },
    {
      que: 'What’s the Best Way to Contact You?',
      ans: 'Our pricing is customized based on the scope and nature of the project. Please contact us for a detailed quote.',
    },
    {
      que: 'Do You Have Any Specific Ideas or Requirements?',
      ans: 'PixelCraft is based in Melbourne, Australia, but we are available for travel to various locations.',
    },
    {
      que: 'What’s Your Message?',
      ans: 'You can book a session by contacting us directly through our website or by calling our office.',
    }
  ]
  return (
    <div>
      <div
        className='mt-[30px] pt-[30px] pb-[30px] md:pt-[50px] md:pr-[50px] lg:pt-[68px] pl-[45px] pr-[45px] lg:pb-[68px]  text-[#FFFFFF] bg-[#090909]'
      >
        <div className=' flex flex-col xl:flex-row justify-center items-center gap-[30px]'>
         
         
              <p className='p-2.5 font-bold font-hind text-[20px] md:text-[48px] leading-[32px] md:leading-[76.85px]'>
              GET IN TOUCH
              </p>
         


          <div className="max-w-[864px] mt-[30px] mx-auto">
          {faqData.map((faq, index) => (
              <CustomAccordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} >
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

export default FaqGetInTouch
