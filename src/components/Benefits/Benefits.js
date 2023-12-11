import assets from "../../asserts/benefits/assets.svg"
import contract from "../../asserts/benefits/contract.svg"
import reports from "../../asserts/benefits/reports.svg"
import security from "../../asserts/benefits/security.svg"
import mobile from "../../asserts/benefits/smartphone.svg"
import innovation from "../../asserts/benefits/Innovation.svg"
import users  from "../../asserts/benefits/users.svg"
import reserve from "../../asserts/benefits/calendar.svg"
import Lottie from "lottie-react"
import bgAnimation from "../../animations/64804.json"
import { useState } from "react"

const Benefits = () => {
    const [isStopped,setIsStopped]=useState(true)
  const data = [
    {
      img: assets,
      title: "Assets",
      description:
        "Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque enean enim.",
    },
    {
      img: contract,
      title: "Contracts and Licenses",
      description:
        "We provide you with the perfect platform to keep your contracts and licenses in the same place, organized in a way that works for you.",
    },
    {
      img: reports,
      title: "Reports",
      description:
        "View predefined reports which include statements about your assets to help clean up your workload.",
    },
    {
      img: security,
      title: "Security",
      description:
        "SSL Encryption protects data as it transfers from your computer, tablet, or smartphone",
    },
    {
      img: mobile,
      title: "Mobile",
      description:
        "You’re constantly on the move, but that shouldn’t affect your asset management.",
    },
    {
      img: innovation,
      title: "Innovation",
      description:
        "We’re continually evolving to meet and exceed customers’ expectations, advances in technology, and the world around us.",
    },
    {
      img: users,
      title: "Users",
      description:
        "Set reminders and alarms for assets that require regular maintenance, assets",
    },
    {
      img: reserve,
      title: "Reserve & Checkout",
      description:
        "Duis mauris augue, efficitur eu arcu sit amet, posuere dignissim neque enean enim.",
    },
  ];
  return (
    <div className="py-[3%] h-full w-full overflow-hidden flex flex-col justify-center items-center text-center gap-8 font-f-outfit">
      <h2 className="text-4xl lg:text-6xl font-semibold text-t-blue">Benefits</h2>
      <p>
        Yovamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices
        quis non mauris.
      </p>
      <div className="w-[85%] h-auto my-5 gap-y-4 flex gap-4 justify-center lg:justify-between items-center flex-wrap">
        {data.map((card,index) => {
          return (
            <div onMouseEnter={()=>setIsStopped(false)} onMouseLeave={()=>setIsStopped(true)} className="relative card-shadow w-[90%] md:w-[48%] lg:w-[32%] py-2 xl:w-[23%] min-h-[19.5rem] max-h-auto flex justify-center items-center rounded-[20px]">
            <div className={`absolute w-[30%] top-4`} >
            <Lottie animationData={bgAnimation} isStopped={isStopped} />
           
            </div>
             <div className="h-[85%] flex flex-col justify-center items-center gap-4 w-[80%]">
              <div className="h-1/3">
              <img src={card.img} alt="alting" className="object-contain w-full h-full" />
              </div>
              <h3 className="text-[1.3rem] font-semibold h-1/3">{card.title}</h3>
              <p className="text-sm h-1/3">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
