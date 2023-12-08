import amazon from "../../asserts/hero/brands-amazon.png";
import lg from "../../asserts/hero/brands-LG.png";
import megmeet from "../../asserts/hero/brands-megmeet.png";
import chimei from "../../asserts/hero/brands-chimei.png";
import waste from "../../asserts/hero/brands-waste.png";

const Brands = () => {
  return (
    <div className="grid align-middle py-2 h-auto  font-f-outfit">
      <p className="py-2 font-light">Who endorse our work</p>

      <div className="flex flex-col md:flex-row  gap-2 h-[60%] items-center">
        <h2 className="font-semibold text-[3rem]">Trusted By:</h2>
        <ul className="flex flex-col md:flex-row w-100 justify-evenly items-center">
          <li className="w-100 md:w-[15%]">
            <img
              src={amazon}
              alt="amazon logo"
              className="object-contain w-full h-full"
            />
          </li>
          <li className="w-100 md:w-[15%]">
            <img
              src={lg}
              alt="LG logo"
              className="object-contain w-100  h-100"
            />
          </li>
          <li className="w-100 md:w-[15%]">
            <img
              src={megmeet}
              alt="meegmeet logo"
              className="object-contain w-100  h-100"
            />
          </li>
          <li className="w-100 md:w-[15%]">
            <img
              src={chimei}
              alt="chimei logo"
              className="object-contain w-100  h-100"
            />
          </li>
          <li className="w-100 md:w-[15%]">
            <img
              src={waste}
              alt="waste logo"
              className="object-contain w-100  h-100"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Brands;
