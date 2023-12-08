import Lottie from "lottie-react";
import star from "../../asserts/hero/star.svg";
import doubleArrows from "../../asserts/hero/double-arrows.svg";
import roketBg from "../../asserts/hero/roket-bg.png";
import rocket from "../../animations/Rocket.json";
import report from "../../animations/report.json"
import Brands from "./Brands";

const Hero = () => {

  return (
    <div className="h-auto w-full overflow-hidden drop-shadow">
    <div className=" h-auto md:h-[40rem]  lg:h-[40rem] xl:h-[40rem] 2xl:text-[50rem] gradient text-white flex justify-center items-center">
      <div className="w-[100%] h-[100%] flex flex-col md:flex-row items-center justify-center bg-mask">
      <div className="h-[100%] w-[90%] flex flex-col md:flex-row items-center">
        <div className="h-[70%] w-100 flex justify-center flex-col">
          <div className="leading-[70px] lg:leading-[60px] 2xl:leading-[90px] py-[8%]">
            <p className="text-[2.3rem] lg:text-[2.4rem] xl:text-[2.5rem] 2xl:text-[4rem] text-yellow font-thin uppercase">
              Over 25,000 active
            </p> 
            <p className="text-[4rem] md:text-[6rem] lg:text-[5rem] 2xl:text-[8rem] font-bold">Accounts.</p>
          </div>
          <p className="font-light">Manage up to 250 Assets for FREE*.</p>
          <p className="font-light">
            Guaranteed best prices fr cloud based asset management !
          </p>
          <div className="flex gap-2 py-8 font-light">
            <span className="flex gap-1 ">
              <img src={star} alt="rating star" />
              <img src={star} alt="rating star" />
              <img src={star} alt="rating star" />
              <img src={star} alt="rating star" />
              <img src={star} alt="rating star" />
            </span>
            <p>Rated 5-Star by Independent Users</p>
          </div>
        </div>
        <div className="py-4 h-[70%]">
          <img
            src={doubleArrows}
            alt="two arrows showing here"
            className="object-contain h-full w-100"
          />
        </div>
        <div className="h-full py-4 flex justify-center items-center overflow-hidden">
          <div className="w-[70%] relative">
          <div className="absolute h-[100%] w-[70%] top-[-40%] right-[6%] z-20">
          <Lottie animationData={rocket}/>
          </div>
          <div className="absolute h-[100%] w-[70%] top-[-30%] right-[12%] z-10">
          <Lottie animationData={report}/>
          </div>
          <img
            src={roketBg}
            alt="roket background giving sense of space"
            className="object-contain w-full h-full"
          />
          </div>
        </div>
        </div>
      </div>
    </div>
    <div className="px-[4%] brands-mask">
      <Brands/>
    </div>
    </div>
  );
};

export default Hero;
