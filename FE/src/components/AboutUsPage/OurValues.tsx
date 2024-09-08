import OurValuesBG from "../../assets/OurValues/OurValueBG.jpeg"
import creativity from "../../assets/OurValues/Creativity.svg"
import passion from "../../assets/OurValues/Passion.png"
import quality from "../../assets/OurValues/Quality.png"
import satisfaction from "../../assets/OurValues/Customer Satisfaction.png"
const OurValues = () => {
  const OveraValuesBox =[

    {
      icon:creativity,
      title:'Creativity',
      about:'We approach every project with fresh eyes and innovative ideas, ensuring each piece of work is unique and captivating.'
    },
    {
      icon:quality,
      title:'Quality',
      about:'We are committed to providing the highest quality in every aspect of our work, from initial concept to final delivery.'
    },
    {
      icon:passion,
      title:'Passion',
      about:'Photography, videography, and design are not just our professions; they are our passions. We pour our hearts into every project.'
    },
    {
      icon:satisfaction,
      title:'Customer Satisfaction',
      about:'Your satisfaction is our top priority. We work closely with our clients to understand their vision and exceed their expectations.'
    },
  ] 
  return (
    <div style={{
      backgroundImage: `url(${OurValuesBG})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed' 
    }} className="pt-[27px] pb-[27px] pl-[23px] pr-[23px] md:pl-[76px] md:pr-[76px] text-center text-[#FFFFFF] mt-[30px]">
    <p className="leading-[32px] md:leading-[51.23px] text-[20px] md:text-[32px] font-bold font-hind">Our Values</p>
    <div className="mt-[62px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[31px]">
    {OveraValuesBox.map((el,ind)=>(
      <div className="rounded-[10px] pt-5 pl-[13px] pb-5 pr-[13px] flex flex-col gap-[20px] text-center text-[#FFFFFF] items-center bg-[#0E0E0E]" key={ind} style={{boxShadow: '0px 4px 4px 0px #FFFFFF26'}}>
          <img src={el.icon} alt="icon" className="h-[45px]"/>
          <p className="pt-2.5 pl-[28px] pb-2.5 pr-[28px] font-bold font-playfair leading-[21.33px] md:leading-[32px] text-[16px] md:text-2xl">{el.title}</p>
          <p className="font-medium font-playfair text-[12px] md:text-base leading-4 md:leading-[21.33px] ">{el.about}</p>
      </div>
    ))}
    </div>
    </div>
  )
}

export default OurValues