import AshuImg from '../../assets/TeamMembers/img Frame (2).png';
import AbhiImg from '../../assets/TeamMembers/img Frame (3).png';
import SnehaImg from '../../assets/TeamMembers/img Frame (4).png';
import RohitImg from '../../assets/TeamMembers/img Frame (5).png';
import PriyaImg from '../../assets/TeamMembers/img Frame (6).png';
import facebook from '../../assets/Footer/facebook.png';
import linkedIn from '../../assets/Footer/Icon.png';
import insta from '../../assets/Footer/Insta.png';
import youtube from '../../assets/Footer/Youtube.png';

const teamMembers = [
  {
    name: 'Ashutosh Dhyani',
    role: 'CEO, Founder, Head Photographer',
    description:
      "Ashutosh is the visionary behind PixelCraft, bringing his passion for photography and creativity to every project. With over a decade of experience, he specializes in capturing life's most precious moments with a unique artistic touch.",
    img: AshuImg,
    
  },
  {
    name: 'Abhishek Chandola',
    role: 'Co-CEO, Head Filmmaker, Video Editor, Color Grader',
    description:
      "Abhishek is a master storyteller, crafting visually stunning videos that resonate with audiences. His expertise in filmmaking and video editing ensures every frame is a work of art, making memories unforgettable.",
    img: AbhiImg,
    
  },
  {
    name: 'Sneha Verma',
    role: 'Creative Director, Graphic Designer',
    description:
      "Sneha leads the design team with her innovative ideas and keen eye for detail. As a seasoned graphic designer, she brings brands to life through compelling visuals and captivating animations.",
    img: SnehaImg,
    
  },
  {
    name: 'Rohit Singh',
    role: 'Senior Videographer, Drone Specialist',
    description:
      "Rohit is our go-to expert for dynamic video shoots and aerial cinematography. His skills with the camera and drone allow us to capture breathtaking views and create immersive experiences for our clients.",
    img: RohitImg,
    
  },
  {
    name: 'Priya Sharma',
    role: 'Client Relations Manager',
    description:
      "Priya ensures that every client feels valued and understood. Her excellent communication skills and dedication to customer satisfaction make her the friendly face and voice of PixelCraft, building lasting relationships.",
    img: PriyaImg,
    
  },
];

const iconArr = [facebook, linkedIn, youtube, insta];

const AllTeamMembers = () => {
  return (
    <div className='mt-[30px] bg-[#0B0B0B] xl:p-[78px] md:pt-[30px] pb-[30px] pr-[20px] pl-[20px] md:pr-[64px] md:pl-[64px] flex flex-col gap-[30px]'>
      {teamMembers.map((member, index) => (
        <div key={index}>
          {index%2===0 ? (
            <div className='flex xl:flex-row flex-col gap-8'> 
              <div className='max-w-[222px] md:max-w-[406px] block mx-auto   bg-[#0F0F0F]'>
                <img
                  src={member.img}
                  alt={member.name}
                  className='object-cover rounded-[10px]'
                />
                <div className='flex gap-2 mt-2 justify-center'>
                  {iconArr.map((el, ind) => (
                    <div
                      key={ind}
                      className='h-[40px] w-[40px] flex justify-center items-center'
                    >
                      <img
                        src={el}
                        alt={`icon-${ind}`}
                        className='w-[24px] h-[24px] '
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className='max-w-[843px] text-center xl:text-start mx-auto  pt-[30px] pb-[30px] xl:pl-[9px] xl:pr-[9px] text-[#FFFFFF] flex flex-col gap-[30px] bg-[#0F0F0F]'>
                <p className='p-2.5 text-[20px] md:text-[32px] font-bold font-playfair leading-[26.66px] md:leading-[42.66px]'>
                  {member.name}
                </p>
                <p className='p-2.5 text-[16px] md:text-[24px] font-medium font-playfair leading-[21.33px] md:leading-[32px]'>
                  {member.role}
                </p>
                <p className='p-2.5 text-[12px] md:text-[24px] font-medium font-playfair leading-[16px] md:leading-[32px]'>
                  {member.description}
                </p>
              </div>
            </div>
          ) : (
            <div className='flex xl:flex-row flex-col-reverse gap-8'>
              <div className='max-w-[843px] text-center xl:text-start mx-auto pt-[30px] pb-[30px] xl:pl-[9px] xl:pr-[9px] text-[#FFFFFF] flex flex-col gap-[30px] bg-[#0F0F0F]'>
              <p className='p-2.5 text-[20px] md:text-[32px] font-bold font-playfair leading-[26.66px] md:leading-[42.66px]'>
                  {member.name}
                </p>
                <p className='p-2.5 text-[16px] md:text-[24px] font-medium font-playfair leading-[21.33px] md:leading-[32px]'>
                  {member.role}
                </p>
                <p className='p-2.5 text-[12px] md:text-[24px] font-medium font-playfair leading-[16px] md:leading-[32px]'>
                  {member.description}
                </p>
              </div>
              <div className='max-w-[222px] md:max-w-[406px] block mx-auto bg-[#0F0F0F]'>
                <img
                  src={member.img}
                  alt={member.name}
                  className='object-cover rounded-[10px]'
                />
                <div className='flex gap-2 mt-2 justify-center'>
                  {iconArr.map((el, ind) => (
                    <div
                      key={ind}
                      className='h-[40px] w-[40px] flex justify-center items-center'
                    >
                      <img
                        src={el}
                        alt={`icon-${ind}`}
                        className='w-[24px] h-[24px] '
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllTeamMembers;
