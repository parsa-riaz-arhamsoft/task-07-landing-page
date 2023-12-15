import benefitsData from "../../data/benefitsData";
import Lottie from "lottie-react";
import bgAnimation from "../../assets/animations/64804.json";

const Benefits = () => {
  return (
    <div className="py-[3%] h-full w-full overflow-hidden flex flex-col justify-center items-center text-center gap-8 font-f-outfit">
      <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold text-t-blue">
        Benefits
      </h2>
      <p className="xl:text-lg">
        Yovamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices
        quis non mauris.
      </p>
      <div className="w-[85%] h-auto my-5 gap-y-4 flex gap-4 justify-center lg:justify-start xl:justify-between items-center flex-wrap">
        {benefitsData.map((card, index) => {
          return (
            <div key={index} className="relative card-shadow w-[90%] md:w-[48%] lg:w-[23%] py-2 xl:w-[23%] min-h-[19.5rem] max-h-auto flex justify-center items-center rounded-[20px]">
              <div
                className={`absolute w-[30%] top-4`}
              >
                <Lottie
                  animationData={bgAnimation}
                />
              </div>
              <div className="h-[85%] flex flex-col justify-center items-center gap-4 w-[80%]">
                <div className="h-1/3">
                  <img
                    src={card.img}
                    alt="benefit describing icon"
                    className="object-contain w-full h-full"
                  />
                </div>
                <h3 className="text-[1.3rem] font-semibold h-1/3">
                  {card.title}
                </h3>
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
