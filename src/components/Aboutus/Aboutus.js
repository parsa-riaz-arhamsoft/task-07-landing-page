import vedioImg from "../../asserts/aboutus/vedio-img.png";

const Aboutus = () => {

  return (
    <div className="py-[6%] h-full w-full overflow-hidden flex justify-center ">
      <div className="flex flex-col md:flex-row h-auto md:h-[23rem] 2xl:h-[35rem] w-[85%] text-center md:text-start font-f-outfit gap-10">
        <div className="w-full h-full md:w-[50%] lg:[40%]">
          <img src={vedioImg} alt="vedio icon here" className="object-fit lg:object-contain h-full w-full"/>
        </div>
        <div className="w-full md:w-[50%] lg:w[60%] flex flex-col justify-evenly lg:text-[1.1rem] 2xl:text-[2rem] font-light 2xl:leading-8 text-sm">
            <h1 className="text-[2rem] md:text-[2rem] 2xl:text-[3rem] py-[5%] lg:py-0 leading-8 font-semibold">Who is Assets Rack?</h1>
          <p className="2xl:py-[2%]">
            Phasellus mollis tincidunt semper. Curabitur pharetra tortor nisi,
            ut consectetur risus faucibus in. Donec ac tortor luctus,
            condimentum neque in, congue diam. Morbi faucibus lorem et nunc
            consectetur sagittis. Donec in finibus sem, ac sodales quam. Aliquam
            varius libero vitae dui finibus faucibus.
          </p>
          <p className="py-5">
            {" "}
            Mivamus aliquet maximus varius. Morbi in est et tortor vulputate
            efficitur non placerat metus. Suspendisse lacinia, lacus non
            vestibulum porta, nisl eros egestas lorem, eget finibus magna arcu
            at odio. Etiam a blandit neque.
          </p>
          <div className="flex justify-center md:justify-start gap-2">
            <button className="bg-yellow px-4 py-2 lg:px-8 lg:py-4 2xl:px-9 2xl:py-7 rounded font-semibold hover:bg-white border border-yellow hover:border-light-gray md:whitespace-nowrap">Contact with Experts</button>
            <button className=" border border-light-gray px-4 lg:px-8 rounded font-semibold md:whitespace-nowrap hover:bg-yellow hover:border-0">Join us Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
