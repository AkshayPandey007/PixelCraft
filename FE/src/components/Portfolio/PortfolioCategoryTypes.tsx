import preWedding from "../../assets/Portfolio/Photography/preWedding.png"
import postWedding from "../../assets/Portfolio/Photography/postWedding.png"
import party from "../../assets/Portfolio/Photography/party.png"
import baby from "../../assets/Portfolio/Photography/baby.png"
import food from "../../assets/Portfolio/Photography/food.png"
import wildlife from "../../assets/Portfolio/Photography/wildlife.png"
import furniture from "../../assets/Portfolio/Photography/furniture.png"
import family from "../../assets/Portfolio/Photography/family.png"
import events from "../../assets/Portfolio/Photography/events.png"
import { useState } from "react"
import { Link } from "react-router-dom"
const PortfolioCategoryTypes = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const PhotographyData =[
        {
            id:1,
            image:preWedding,
            title:'Pre wedding',
            des:"Capturing the Romance Before the 'I Do's'"
        },
        {
            id:2,
            image:postWedding,
            title:'Post wedding',
            des:"Reliving the Magic of Your Happily Ever After"
        },

        {
            id:3,
            image:party,
            title:'Party',
            des:"Turning Celebrations into Timeless Memories"
        },
        {
            id:4,
            image:baby,
            title:'Baby',
            des:"Precious Moments, Perfectly Captured"
        },
        {
            id:5,
            image:food,
            title:'Food',
            des:"Savor the Flavor, See the Art"
        },
        {
            id:6,
            image:wildlife,
            title:'Wildlife',
            des:"Embracing Nature’s Wild Beauty"
        },
        {
            id:7,
            image:furniture,
            title:'Furniture',
            des:"Showcasing Craftsmanship in Every Detail"
        },
        {
            id:8,
            image:family,
            title:'Family',
            des:"Cherishing Bonds, One Snapshot at a Time"
        },
        {
            id:9,
            image:events,
            title:'Events',
            des:"Highlighting the Energy and Emotion"
        },
    ]
  return (
    <div className="mt-[30px] bg-[#0B0B0B] pt-[52px] pl-[20px] pr-[20px] md:pl-[81px] md:pr-[81px] pb-[81px]">
     <p className="p-2.5 text-[32px] font-hind font-bold leading-[51.23px]  text-[#FFFFFF]">Photography</p>
     <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px]">
     {PhotographyData.map((el,ind)=>(
        <Link to="/gallery" key={ind}>
        <div key={ind} className="h-[160px] md:h-[329px] flex flex-col justify-between cursor-pointer"
        style={{
            backgroundImage: `url(${el.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center',
          }}
          onMouseEnter={() => setHoveredIndex(ind)}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <div></div>
           <div className="text-white p-[15px] text-center bg-[#0F0F0F4D]">
             <p className="text-[16px] md:text-2xl font-playfair font-bold leading-[21.33px] md:leading-[32px]">{el.title}</p>
             <p className="font-playfair font-normal text-[12px] md:text-base leading-4 md:leading-[21.33px] text-center relative">
            <span className="relative inline-block">
              {el.des}
              <span
                 className={`absolute bottom-[-7px] left-0 bg-red-600 h-[2px] transition-all duration-300 ${
                    hoveredIndex === ind ? 'w-full' : 'w-[150px]'
                  }`}
                    style={{
                  height: '3px',
                  marginTop: '5px', 
                }}
              />
            </span>
          </p>
           </div>
        </div>
        </Link>
     ))}
     </div>
    </div>
  )
}

export default PortfolioCategoryTypes