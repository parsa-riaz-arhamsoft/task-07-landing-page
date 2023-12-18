import vedioImg from "../../assets/about-us/vedio-img.png";
import playIcon from "../../assets/about-us/play-icon.svg";

const AboutUs = () => {
  return (
    <div className="my-[160px] h-full w-full overflow-hidden flex justify-center">
      <div className="flex flex-col md:flex-row lg:justify-between h-auto md:h-[23rem] 2xl:h-[35rem] w-[85%] text-center md:text-start font-f-outfit ">
        <div className="relative w-[676px] h-[476px]">
          <img
            src={vedioImg}
            alt="vedio icon here"
            className="object-contain h-full w-full"
          />
          <div className="absolute w-[80px] h-[80px] bg-black/50 flex justify-center items-center rounded-full top-[35%] right-[40%] md:top-[40%] lg:top-[200px] lg:right-[280px]">
            <img
              src={playIcon}
              alt="play button"
              className="object-contain w-[27px] h-[37px]"
            />
          </div>
        </div>
        <div className="w-[885px] flex flex-col font-light 2xl:leading-8 text-[24px]">
          <h1 className="text-[44px] font-semibold">
            Who is Assets Rack?
          </h1>
          <p className="mt-[34px]">
            Phasellus mollis tincidunt semper. Curabitur pharetra tortor nisi,
            ut consectetur risus faucibus in. Donec ac tortor luctus,
            condimentum neque in, congue diam. Morbi faucibus lorem et nunc
            consectetur sagittis. Donec in finibus sem, ac sodales quam. Aliquam
            varius libero vitae dui finibus faucibus.
          </p>
          <p className="my-[34px]">
            {" "}
            Mivamus aliquet maximus varius. Morbi in est et tortor vulputate
            efficitur non placerat metus. Suspendisse lacinia, lacus non
            vestibulum porta, nisl eros egestas lorem, eget finibus magna arcu
            at odio. Etiam a blandit neque.
          </p>
          <div className="flex text-[18px] justify-center md:justify-start gap-2">
            <button className="bg-yellow w-[230px] h-[63px] rounded font-semibold hover:bg-white border border-yellow hover:border-light-gray md:whitespace-nowrap">
              Contact with Experts
            </button>
            <button className="border border-light-gray w-[168px] h-[63px] rounded font-semibold md:whitespace-nowrap hover:bg-yellow hover:border-0">
              Join us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
