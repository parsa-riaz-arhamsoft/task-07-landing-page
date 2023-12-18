import { useState } from "react";
import brandsData from "../../data/brandsData";

const Brands = () => {
  const [isHovered, setIsHovered] = useState(0);

  const handleHovered = (index) => {
    setIsHovered(index);
  };

  return (
    <div className="py-8 md:py-2 h-auto text-center flex justify-center items-center md:text-start font-f-outfit">
      <div className="lg:w-100 xl:w-[93%]">
        <p className="pt-2 font-light">Who endorse our work</p>
        <div className="flex flex-col md:flex-row  gap-3 h-[60%] items-center">
          <h2 className="font-semibold text-[2rem] whitespace-nowrap lg:text-[3rem]">
            Trusted By:
          </h2>
          <ul className="flex flex-col gap-10 md:gap-4 lg:gap-10 md:flex-row w-full md:justify-evenly items-center">
            {brandsData.map((brand, index) => {
              return (
                <li onMouseEnter={()=>handleHovered(index)} onMouseLeave={()=>handleHovered(0)} key={index} className={`${index===0?"md:w-[15%]":"md:w-[10%]"} w-[50%] ${isHovered===index?"hover:grayscale-0":"grayscale"}`}>
                  <img
                    src={brand.img}
                    alt="LG logo"
                    className="object-contain w-100 h-100"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brands;
