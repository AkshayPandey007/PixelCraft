import { useState } from 'react';

const PortfolioCategoryOption = () => {
  const [selectedOption, setSelectedOption] = useState('Photography');
  const categoryOptions = ["Photography", "Videography", "Graphics & Animation", "Brand Advertising"];

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
  };

  return (
    <div className="mt-[30px] pt-[30px] pb-[30px] pr-[30px] pl-[30px] md:pt-[56px] md:pb-[56px] md:pl-[66px] md:pr-[66px] lg:pl-[80px] lg:pr-[80px] grid grid-cols-2 gap-[30px] bg-[#070707]">
      {categoryOptions.map((option, index) => (
        <button
          key={index}
          className={`pt-[10px] pb-[10px] pl-[21px] pr-[21px] md:pt-0 md:pb-0 md:pl-0 md:pr-0 md:h-[148px] rounded-[10px] font-hind font-bold text-[16px] sm:text-[20px] md:text-[36px] leading-[32px] md:leading-[57.64px] text-cemter transition-colors duration-300 ${
            selectedOption === option ? 'bg-[#D71918] text-white' : 'bg-[#0F0F0F] text-white'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default PortfolioCategoryOption;
