import { List, ListItem } from '@mui/material'
import privacyLogo from '../assets/privacy policy icon.svg'
import ContactUs from '../components/ContactUs'

const termsAndConditionData = [
  {
    title: 'Information We Collect:',
    items: [
      'Personal Information: When you contact us, book a session, or sign up for our newsletter, we may collect personal information such as your name, email address, phone number, and any other information you choose to provide.',
      'Payment Information: If you make a purchase or booking through our website, we collect payment details such as credit card information, billing address, and transaction history. Payment information is processed securely through third-party payment processors.',
      'Technical Data: We automatically collect certain technical data when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the date and time of your visit. This information helps us understand how users interact with our site and improve our services.',
      'Cookies: Our website uses cookies and similar tracking technologies to enhance your user experience. Cookies help us remember your preferences, customize content, and analyze website traffic. You can choose to accept or decline cookies through your browser settings.'
    ]
  },
  {
    title: 'How We Use Your Information:',
    items: [
      'To Provide Services: We use the information you provide to deliver the services you request, such as booking photography sessions, processing payments, and responding to inquiries.',

      'To Improve Our Services: We analyze technical data and feedback to improve our website, services, and customer experience.',
      'To Communicate With You: We may use your contact information to send you updates, newsletters, promotional offers, or other communications related to our services. You can opt-out of these communications at any time.',
      'To Comply With Legal Obligations: We may use your information to comply with applicable laws, regulations, and legal processes.'
    ]
  },
  {
    title: ' Sharing Your Information:',
    items: [
      'With Service Providers: We may share your information with third-party service providers who assist us in operating our website, processing payments, delivering services, and analyzing data. These providers are obligated to protect your information and use it only for the purposes for which it was shared.',
      'For Legal Reasons: We may disclose your information if required by law, court order, or government regulations, or if we believe such disclosure is necessary to protect our rights, property, or safety.',
      'Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control of your personal information.'
    ]
  },
  {
    title: 'Security of Your Information:',
    items: [
      'We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security.'
    ]
  },
  {
    title: ' Your Rights and Choices:',
    items: [
      'Access and Correction: You have the right to access and correct any personal information we hold about you. If you believe any information is inaccurate or incomplete, please contact us to update it.',
      'Data Deletion: You may request that we delete your personal information from our systems, subject to legal obligations or legitimate business purposes that may require us to retain it.',
      'Opt-Out: You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in the emails or by contacting us directly.',
      'Cookies: You can control the use of cookies through your browser settings. However, disabling cookies may affect the functionality of our website.'
    ]
  },
  {
    title: 'Third-Party Links:',
    items: [
      'Our website may contain links to third-party websites, products, or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.'
    ]
  },
  {
    title: " Children's Privacy:",
    items: [
      'Our services are not directed at individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected information from a child under 13, we will take steps to delete it as soon as possible.'
    ]
  }
]

const PrivacyPolicy = () => {
  return (
    <>
      <div className='max-w-[1282px] p-[30px]  mx-auto bg-[#090909] text-[#FFFFFF]'>
        <div className='pt-[30px] mr-[50px] ml-[50px] mx-auto'>
          <div className='flex gap-[5px] justify-center items-center'>
            <img
              src={privacyLogo}
              alt='privacyLogo'
              className='w-[30px] h-[30px] md:w-[90px] md:h-[90px]'
            />
            <p className='text-[20px] md:text-[48px] font-bold leading-[32px] md:leading-[76.85px] font-hind'>
              Privacy Policy
            </p>
          </div>
          <p className='p-2.5 text-center text-[16px] md:text-2xl font-normal leading-[21.33px] md:leading-[32px] font-playfair mt-[10px]'>
            At PixelCraft, we are committed to protecting your privacy and
            ensuring that your personal information is handled securely and
            responsibly. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you visit our website
            [www.pixelcraft.com], use our services, or interact with us.
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
                <List
                  sx={{
                    pl: 2,
                    '& li': { position: 'relative', paddingLeft: '12px' }
                  }}
                >
                  {section.items.map((item, itemIndex) => (
                    <ListItem
                      key={itemIndex}
                      sx={{
                        display: 'list-item',
                        padding: 0,
                        '&::marker': {
                          content: '"•"', // Default bullet
                          color: 'white', // Bullet color
                          fontSize: '24px' // Bullet size
                        }
                      }}
                    >
                      <p className='text-[13px] md:text-[32px] leading-[17.33px] md:leading-[42.66px] font-normal font-playfair'>
                        {item}
                      </p>
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContactUs />
    </>
  )
}

export default PrivacyPolicy
