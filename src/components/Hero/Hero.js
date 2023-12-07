import star from "../../asserts/hero/star.svg";
import doubleArrows from "../../asserts/hero/double-arrows.svg";
import roketBg from "../../asserts/hero/roket-bg.png";
const Hero = () => {
  return (
    <div className=" h-auto  lg:h-screen gradient text-white flex justify-center items-center">
      <div className="flex h-[70%] w-[90%] items-center">
        <div className="w-2/5">
          <div className="leading-[70px] py-[8%]">
            <p className="text-[3rem] text-yellow font-thin uppercase">
              Over 25,000 active
            </p>
            <p className="text-[6rem]">Accounts.</p>
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
        <div className="w-1/5 h-full py-4">
          <img
            src={doubleArrows}
            alt="two arrows showing here"
            className="object-contain h-full w-100"
          />
        </div>
        <div className="w-2/5 h-full py-4">
          <img
            src={roketBg}
            alt="roket background giving sense of space"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
