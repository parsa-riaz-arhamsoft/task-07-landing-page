import Lottie from "lottie-react";
import bgAnimation from "../../assets/animations/64804.json";

const SubscriptionPlans = () => {
  return (
    <div className="w-ful h-full font-f-outfit overflow-hidden grid justify-items-center align-middle">
      <div className="w-[90%] font-thin h-full grid text-center justify-items-center align-middle gap-y-8 text-white">
        <h2 className="text-4xl lg:text-6xl 2xl:text-8xl font-semibold">
          Subscription Plans
        </h2>
        <p className="2xl:text-2xl">
          Effective January 1, 2022. Subscription is annual, fixed to the
          calendar year. Late Subscription will be prorated within the first
          year.
        </p>
        <div className="w-full 2xl:w-[85%] flex flex-row justify-center xl:justify-start flex-wrap gap-2">
          <div className="subs-card-gradient overflow-hidden rounded-[20px] h-[28rem] 2xl:h-[50rem] w-[12rem]  lg:w-[16%] ">
            <div className="bg-sky relative h-[30%] leading-[15px] flex justify-center items-center text-sm uppercase font-thin">
            <div className="bg-sky h-[80%] 2xl:text-2xl w-full z-30 flex justify-center items-center text-center  flex-col">
              <p>Upto</p>
              <p className="text-3xl 2xl:text-6xl font-semibold">300</p>
              <p>Assets</p>
            </div>
            <div className="absolute z-10 bottom-[-23%] bg-sky w-full skew-y-[18deg] h-[45%]"></div>
            </div>
            <div className="h-[50%] text-sm  flex gap-2 justify-center items-center flex-col 2xl:text-2xl">
              <p>Subscription Plan</p>
              <p>ARS-Free</p>
              <p className="text-2xl 2xl:text-5xl font-bold">FREE</p>
            </div>
          </div>
          <div className="overflow-hidden bg-white text-black rounded-[20px] h-[28rem] 2xl:h-[50rem] w-[12rem]  lg:w-[16%] 2xl:text-2xl">
            <div className="relative bg-yellow shadow-md leading-[15px] text-sm uppercase h-[30%] flex justify-center items-center text-center flex-col font-normal 2xl:text-2xl">
              <div className="z-10">
                <p>Upto</p>
                <p className="text-3xl 2xl:text-6xl font-semibold">300</p>
                <p>Assets</p>
              </div>
              <div className="absolute w-[45%]">
                <Lottie animationData={bgAnimation} />
              </div>
            </div>
            <div className="h-[30%] flex flex-col justify-evenly items-center font-normal">
              <p>Subscription Plan</p>
              <p className="text-xs 2xl:text-sm font-bold">ARS-500</p>
              <p className="text-lg 2xl:text-xl font-semibold">$120/Year</p>
            </div>
            <div className="border-2 border-b-gray border-t-0 border-r-0 border-l-0 h-[0%] w-[85%]  flex justify-center items-center ml-4">
              <span className="flex relative">
                <p className="bg-d-blue h-[20px] w-[20px] p-3 2xl:p-5 rounded-full"></p>
                <span className="absolute z-10  font-bold top-0 right-1 2xl:right-2 p-b text-white bottom-4">
                  or
                </span>
              </span>
            </div>
            <div className="h-[35%] pt-3 2xl:pt-7 font-normal flex flex-col justify-between items-center ">
              <p>Buy Asset Tags Worth</p>
              <p className="text-lg 2xl:text-xl font-bold">$150/Year</p>
              <button className="bg-d-blue px-8 py-2  text-white rounded-full">
                Buy Tags
              </button>
            </div>
          </div>
          <div className="overflow-hidden bg-white text-black rounded-[20px] h-[28rem] 2xl:h-[50rem] w-[12rem]  lg:w-[16%] 2xl:text-2xl">
            <div className="relative bg-yellow shadow-md leading-[15px] text-sm uppercase h-[30%] flex justify-center items-center text-center flex-col font-normal 2xl:text-2xl">
              <div className="z-10">
                <p>Upto</p>
                <p className="text-3xl 2xl:text-6xl font-semibold">300</p>
                <p>Assets</p>
              </div>
              <div className="absolute w-[45%]">
                <Lottie animationData={bgAnimation} />
              </div>
            </div>
            <div className="h-[30%] flex flex-col justify-evenly items-center font-normal">
              <p>Subscription Plan</p>
              <p className="text-xs 2xl:text-sm font-bold">ARS-500</p>
              <p className="text-lg 2xl:text-xl font-semibold">$120/Year</p>
            </div>
            <div className="border-2 border-b-gray border-t-0 border-r-0 border-l-0 h-[0%] w-[85%]  flex justify-center items-center ml-4">
              <span className="flex relative">
                <p className="bg-d-blue h-[20px] w-[20px] p-3 2xl:p-5 rounded-full"></p>
                <span className="absolute z-10  font-bold top-0 right-1 2xl:right-2 p-b text-white bottom-4">
                  or
                </span>
              </span>
            </div>
            <div className="h-[35%] pt-3 2xl:pt-7 font-normal flex flex-col justify-between items-center ">
              <p>Buy Asset Tags Worth</p>
              <p className="text-lg 2xl:text-xl font-bold">$150/Year</p>
              <button className="bg-d-blue px-8 py-2  text-white rounded-full">
                Buy Tags
              </button>
            </div>
          </div>
          <div className="overflow-hidden bg-white text-black rounded-[20px] h-[28rem] 2xl:h-[50rem] w-[12rem]  lg:w-[16%] 2xl:text-2xl">
            <div className="relative bg-yellow shadow-md leading-[15px] text-sm uppercase h-[30%] flex justify-center items-center text-center flex-col font-normal 2xl:text-2xl">
              <div className="z-10">
                <p>Upto</p>
                <p className="text-3xl 2xl:text-6xl font-semibold">300</p>
                <p>Assets</p>
              </div>
              <div className="absolute w-[45%]">
                <Lottie animationData={bgAnimation} />
              </div>
            </div>
            <div className="h-[30%] flex flex-col justify-evenly items-center font-normal">
              <p>Subscription Plan</p>
              <p className="text-xs 2xl:text-sm font-bold">ARS-500</p>
              <p className="text-lg 2xl:text-xl font-semibold">$120/Year</p>
            </div>
            <div className="border-2 border-b-gray border-t-0 border-r-0 border-l-0 h-[0%] w-[85%]  flex justify-center items-center ml-4">
              <span className="flex relative">
                <p className="bg-d-blue h-[20px] w-[20px] p-3 2xl:p-5 rounded-full"></p>
                <span className="absolute z-10  font-bold top-0 right-1 2xl:right-2 p-b text-white bottom-4">
                  or
                </span>
              </span>
            </div>
            <div className="h-[35%] pt-3 2xl:pt-7 font-normal flex flex-col justify-between items-center ">
              <p>Buy Asset Tags Worth</p>
              <p className="text-lg 2xl:text-xl font-bold">$150/Year</p>
              <button className="bg-d-blue px-8 py-2  text-white rounded-full">
                Buy Tags
              </button>
            </div>
          </div>
          <div className="overflow-hidden bg-white text-black rounded-[20px] h-[28rem] 2xl:h-[50rem] w-[12rem]  lg:w-[16%] 2xl:text-2xl">
            <div className="relative bg-yellow shadow-md leading-[15px] text-sm uppercase h-[30%] flex justify-center items-center text-center flex-col font-normal 2xl:text-2xl">
              <div className="z-10">
                <p>Upto</p>
                <p className="text-3xl 2xl:text-6xl font-semibold">300</p>
                <p>Assets</p>
              </div>
              <div className="absolute w-[45%]">
                <Lottie animationData={bgAnimation} />
              </div>
            </div>
            <div className="h-[30%] flex flex-col justify-evenly items-center font-normal">
              <p>Subscription Plan</p>
              <p className="text-xs 2xl:text-sm font-bold">ARS-500</p>
              <p className="text-lg 2xl:text-xl font-semibold">$120/Year</p>
            </div>
            <div className="border-2 border-b-gray border-t-0 border-r-0 border-l-0 h-[0%] w-[85%]  flex justify-center items-center ml-4">
              <span className="flex relative">
                <p className="bg-d-blue h-[20px] w-[20px] p-3 2xl:p-5 rounded-full"></p>
                <span className="absolute z-10  font-bold top-0 right-1 2xl:right-2 p-b text-white bottom-4">
                  or
                </span>
              </span>
            </div>
            <div className="h-[35%] pt-3 2xl:pt-7 font-normal flex flex-col justify-between items-center ">
              <p>Buy Asset Tags Worth</p>
              <p className="text-lg 2xl:text-xl font-bold">$150/Year</p>
              <button className="bg-d-blue px-8 py-2  text-white rounded-full">
                Buy Tags
              </button>
            </div>
          </div>
          <div className="overflow-hidden bg-white text-black rounded-[20px] h-[28rem] 2xl:h-[50rem] w-[12rem]  lg:w-[16%] 2xl:text-2xl">
            <div className="relative bg-yellow shadow-md leading-[15px] text-sm uppercase h-[30%] flex justify-center items-center text-center flex-col font-normal 2xl:text-2xl">
              <div className="z-10">
                <p>Upto</p>
                <p className="text-3xl 2xl:text-6xl font-semibold">300</p>
                <p>Assets</p>
              </div>
              <div className="absolute w-[45%]">
                <Lottie animationData={bgAnimation} />
              </div>
            </div>
            <div className="h-[30%] flex flex-col justify-evenly items-center font-normal">
              <p>Subscription Plan</p>
              <p className="text-xs 2xl:text-sm font-bold">ARS-500</p>
              <p className="text-lg 2xl:text-xl font-semibold">$120/Year</p>
            </div>
            <div className="border-2 border-b-gray border-t-0 border-r-0 border-l-0 h-[0%] w-[85%]  flex justify-center items-center ml-4">
              <span className="flex relative">
                <p className="bg-d-blue h-[20px] w-[20px] p-3 2xl:p-5 rounded-full"></p>
                <span className="absolute z-10  font-bold top-0 right-1 2xl:right-2 p-b text-white bottom-4">
                  or
                </span>
              </span>
            </div>
            <div className="h-[35%] pt-3 2xl:pt-7 font-normal flex flex-col justify-between items-center ">
              <p>Buy Asset Tags Worth</p>
              <p className="text-lg 2xl:text-xl font-bold">$150/Year</p>
              <button className="bg-d-blue px-8 py-2  text-white rounded-full">
                Buy Tags
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
