
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


const FaqServiceQuestion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const faqData = [
    {
      que: 'What types of photography do you specialize in?',
      ans: 'At PixelCraft, we offer professional photography and videography services tailored to your needs, including portrait sessions, event coverage, and more.',
    },
    {
      que: 'What videography services do you offer?',
      ans: 'Our pricing is customized based on the scope and nature of the project. Please contact us for a detailed quote.',
    },
    {
      que: 'What kind of graphics and animation services do you offer?',
      ans: 'PixelCraft is based in Melbourne, Australia, but we are available for travel to various locations.',
    },
    {
      que: 'Can you help create a brand advertising campaign?',
      ans: 'You can book a session by contacting us directly through our website or by calling our office.',
    }
  ]
  return (
    <div>
      <div
        className='mt-[30px] pt-[30px] pb-[30px] pl-[37px] pr-[37px]  lg:pt-[68px] md:pr-[129px] lg:pb-[68px] md:pl-[129px] text-[#FFFFFF] bg-[#090909]'
      >
        <div className=''>
          <div className='flex gap-[5px] justify-center items-center'>
         
              <p className='font-bold font-hind text-[20px] md:text-[48px] leading-[32px] md:leading-[76.85px]'>
              Services Questions
              </p>
         
          </div>

          <p className='p-2.5 text-center mt-[30px] text-base md:text-2xl font-medium leading-[25.62px] md:leading-[32px] font-playfair'>
          Experience creativity and professionalism with our range of photography, videography, graphics, and advertising services.
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

export default FaqServiceQuestion
