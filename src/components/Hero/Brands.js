import amazon from "../../assets/hero/brands-amazon.png";
import lg from "../../assets/hero/brands-LG.png";
import megmeet from "../../assets/hero/brands-megmeet.png";
import chimei from "../../assets/hero/brands-chimei.png";
import waste from "../../assets/hero/brands-waste.png";

const Brands = () => {
  return (
    <div className="py-8 md:py-2 h-auto text-center flex justify-center items-center md:text-start font-f-outfit">
     <div className="lg:w-100 xl:w-[93%]">
      <p className="pt-2 font-light">Who endorse our work</p>
      <div className="flex flex-col md:flex-row  gap-3 h-[60%] items-center">
        <h2 className="font-semibold text-[2rem] whitespace-nowrap lg:text-[3rem]">
          Trusted By:
        </h2>
        <ul className="flex flex-col gap-10 md:gap-4 lg:gap-10 md:flex-row w-full md:justify-evenly items-center">
          <li className="w-[80%] md:w-[15%]">
            <img
              src={amazon}
              alt="amazon logo"
              className="object-contain w-full h-full"
            />
          </li>
          <li className="w-[50%] md:w-[10%] grayscale hover:grayscale-0">
            <img
              src={lg}
              alt="LG logo"
              className="object-contain w-100 h-100"
            />
          </li>
          <li className="h-[80%] md:w-[15%] grayscale hover:grayscale-0">
            <img
              src={megmeet}
              alt="meegmeet logo"
              className="object-contain w-100 h-100"
            />
          </li>
          <li className="h-[80%] md:w-[15%] grayscale hover:grayscale-0">
            <img
              src={chimei}
              alt="chimei logo"
              className="object-contain w-100 h-100"
            />
          </li>
          <li className="h-[80%] md:w-[15%] grayscale hover:grayscale-0">
            <img
              src={waste}
              alt="waste logo"
              className="object-contain w-100 h-100"
            />
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Brands;
