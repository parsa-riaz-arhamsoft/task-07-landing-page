import Lottie from "lottie-react";
import star from "../../asserts/hero/star.svg";
import doubleArrows from "../../asserts/hero/double-arrows.svg";
import roketBg from "../../asserts/hero/roket-bg.png";
import rocket from "../../animations/Rocket.json";
import report from "../../animations/report.json";
import Brands from "./Brands";

const Hero = () => {
  return (
    <div className="h-auto w-full overflow-hidden drop-shadow">
      <div className="h-auto w-full md:h-[28rem] lg:h-[35rem] xl:h-[40rem] 2xl:h-[60rem] gradient text-white flex justify-center items-center">
        <div className="w-[100%] h-[100%] flex flex-col md:flex-row items-center justify-center bg-mask">
          <div className="h-[100%] w-[85%] lg:w-[90%] xl:w-[85%] mt-[8rem] md:mt-0 flex flex-col-reverse md:flex-row items-center justify-between font-f-outfit text-center md:text-start">
            <div className="h-[70%] pt-[20%] md:pt-0 w-100 flex justify-center flex-col">
              <div className="leading-[40px] lg:leading-[65px] 2xl:leading-[100px] py-[8%]">
                <p className="text-[1.5rem] lg:text-[2.8rem] xl:text-[2.8rem] 2xl:text-[5rem] text-yellow font-thin uppercase">
                  Over 25,000 active
                </p>
                <p className="text-[3rem] md:text-[3rem] lg:text-[5rem] 2xl:text-[9rem] font-bold uppercase">
                  Accounts.
                </p>
              </div>
              <p className="font-light 2xl:text-[2rem]">
                Manage up to 250 Assets for FREE*.
              </p>
              <p className="font-light 2xl:text-[2rem]">
                Guaranteed best prices for cloud-based asset management!
              </p>
              <div className="flex flex-col lg:flex-row items-center md:items-start gap-2 py-8 2xl:py-[9%] font-light 2xl:text-[2rem]">
                <span className="flex gap-1 h-full">
                  <img
                    src={star}
                    alt="rating star"
                    className="object-contain w-full h-full"
                  />
                  <img
                    src={star}
                    alt="rating star"
                    className="object-contain w-full h-full"
                  />
                  <img
                    src={star}
                    alt="rating star"
                    className="object-contain w-full h-full"
                  />
                  <img
                    src={star}
                    alt="rating star"
                    className="object-contain w-full h-full"
                  />
                  <img
                    src={star}
                    alt="rating star"
                    className="object-contain w-full h-full"
                  />
                </span>
                <p>Rated 5-Star by Independent Users</p>
              </div>
            </div>
            <div className="py-4 lg:h-[70%] h-[27%] md:h-auto absolute top-10  md:static">
              <img
                src={doubleArrows}
                alt="two arrows showing here"
                className="object-contain h-full w-100"
              />
            </div>
            <div className="h-full py-4 flex justify-center items-center overflow-hidden">
              <div className="w-[70%] 2xl:w-[100%] relative">
                <div className="absolute h-[100%] w-[70%] top-[-40%] right-[6%] z-20">
                  <Lottie animationData={rocket} />
                </div>
                <div className="absolute h-[100%] w-[70%] top-[-30%] right-[12%] z-10">
                  <Lottie animationData={report} />
                </div>
                <img
                  src={roketBg}
                  alt="rocket background giving a sense of space"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[4%] brands-mask">
        <Brands />
      </div>
    </div>
  );
};

export default Hero;
