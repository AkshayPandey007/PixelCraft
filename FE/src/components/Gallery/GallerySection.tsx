import { useState } from 'react';
import style from "./Gallery.module.css";
import CloseIcon from "../../assets/Gallery/circle-x.svg"

import image1 from "../../assets/Portfolio/wed.jpeg"
import image5 from "../../assets/try.webp"
import image2 from "../../assets/AboutUs/Image.png"
import image3 from "../../assets/AboutUs/Photo frame 2.png"
import image4 from "../../assets/AboutUs/imgPatnerFrame.png"
import image6 from "../../assets/Carousel/back1.jpeg"
import image7 from "../../assets/Carousel/back2.jpeg"
import image8 from "../../assets/try.webp"
import "./Gallery.css"
const GallerySection = () => {
    const images = [
       
        
        { imageVal: image7, title: "Four Img" },
        { imageVal: image8, title: "Four Img" },
        { imageVal: image1, title: "Four Img" },
        { imageVal: image5, title: "Four Img" },
       
        { imageVal: image2, title: "Four Img" },
        { imageVal: image3, title: "Four Img" },
        { imageVal: image4, title: "Four Img" },
        { imageVal: image6, title: "Four Img" },
        
        
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState("");

 

    return (
        <div className='mt-[112px] bg-[#0B0B0B]'>
        <div className={isOpen ?"model open":"model"}>
            <img src={currentIndex} alt="" />
                <img src={CloseIcon} alt="CloseIcon" onClick={()=>setIsOpen(false)} className='closeIcon'/>
        </div>
        <div className={style.galleryBox}>
            {images.map((img, index) => (
                <div key={index} className={`${style.imageContainer} ${index % 3 === 0 ? style.large : ''}`}>
                    <img
                        src={img.imageVal}
                        alt={img.title}
                        onClick={() =>
                           { 
                            setIsOpen(true)
                            setCurrentIndex(img.imageVal)}}
                        className={style.img}
                        style={{width:'100%'}}
                    />
                </div>
            ))}
            

        </div>
        </div>
    );
};

export default GallerySection;
