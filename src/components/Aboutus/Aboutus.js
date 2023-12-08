import vedioImg from "../../asserts/aboutus/vedio-img.png";
const Aboutus = () => {
  return (
    <div className="my-[6%] h-full w-full overflow-hidden flex justify-center items-center">
      <div className="flex flex-col md:flex-row h-auto md:h-[23rem] w-[80%] text-center md:text-start justify-center font-f-outfit">
        <div className="w-full md:w-1/2">
          <img src={vedioImg} alt="vedio icon here" className="object-contain h-full w-full"/>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-between md:text-[1.1rem] text-sm">
            <h1 className="text-[2rem] font-semibold">Who is Asserts Rock?</h1>
          <p>
            Phasellus mollis tincidunt semper. Curabitur pharetra tortor nisi,
            ut consectetur risus faucibus in. Donec ac tortor luctus,
            condimentum neque in, congue diam. Morbi faucibus lorem et nunc
            consectetur sagittis. Donec in finibus sem, ac sodales quam. Aliquam
            varius libero vitae dui finibus faucibus.
          </p>
          <p>
            {" "}
            Mivamus aliquet maximus varius. Morbi in est et tortor vulputate
            efficitur non placerat metus. Suspendisse lacinia, lacus non
            vestibulum porta, nisl eros egestas lorem, eget finibus magna arcu
            at odio. Etiam a blandit neque.
          </p>
          <div className="flex gap-2">
            <button className="bg-yellow px-4 py-2 rounded-sm font-semibold">Contact with Experts</button>
            <button className=" border border-light-gray px-2 rounded-sm font-semibold">Join us Today</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
