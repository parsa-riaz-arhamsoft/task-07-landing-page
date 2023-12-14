import client1 from "../../asserts/reviews/client1.png";
import client2 from "../../asserts/reviews/client2.png";
import client3 from "../../asserts/reviews/client3.png";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/swiper-bundle.css";

const Reviews = () => {
  const reviews = [
    {
      img: client1,
      name: "Gabrielle",
      writtenDate: "Mar.25,2019",
      stars: 5,
      review:
        "Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…",
    },
    {
      img: client2,
      name: "Gabrielle",
      writtenDate: "Mar.25,2019",
      stars: 5,
      review:
        "Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…",
    },
    {
      img: client3,
      name: "Albert-Roi",
      writtenDate: "Mar.25,2019",
      stars: 5,
      review:
        "Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…",
    },
    {
      img: client2,
      name: "Gabrielle",
      writtenDate: "Mar.25,2019",
      stars: 5,
      review:
        "Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…",
    },
    {
      img: client1,
      name: "Gabrielle",
      writtenDate: "Mar.25,2019",
      stars: 5,
      review:
        "Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…",
    },
    {
      img: client3,
      name: "Gabrielle",
      writtenDate: "Mar.25,2019",
      stars: 5,
      review:
        "Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…",
    },
    {
      img: client3,
      name: "Gabrielle",
      writtenDate: "Mar.25,2019",
      stars: 5,
      review:
        "Donec varius lorem risus, a mattis magna aliquet nec. Aliquam in tincidunts Integer ut vestibulum leo, a hendr nec varius lorem risus, a mattis magna aliquet erit nibis magna aliquh…",
    },
  ];

  const [active, setActive] = useState(1);

  const pagination = {
    el: ".my-custom-pagination-div",
    clickable: true,
    renderbullet: (index, classname) => {
      return '<span class="' + classname + '">' + (index + 1) + "</span>";
    },
  };
  const handleChange = (swiper) => {
    const currentIndex = swiper.realIndex;
    console.log(`active slide` + currentIndex);
    setActive(currentIndex + 1);
  };

  useEffect(() => {
    console.log(active);
  }, [active]);
  const swiperStyles = {
    backgroundColor: "transparent",
  };
  return (
    <div className="py-[4%] w-full h-full flex justify-center  items-center font-f-outfit">
      <div className="w-full lg:w-[85%] flex flex-col justify-center lg:justify-start lg:flex-row">
        <div className="w-full lg:w-[22%] h-full flex flex-col justify-center lg:justify-start text-center lg:text-start gap-[10%] overflow-visible z-10">
          <div className="flex flex-col justify-between gap-4 h-full w-full">
            <div className="leading-[70px] 2xl:leading-[100px]">
              <h2 className="text-base xl:text-lg 2xl:text-2xl text-yellow">Reviews</h2>
              <p className="text-[2rem] md:text-[3rem] xl:text-[3.5rem] 2xl:text-[5rem] font-thin whitespace-nowrap">
                Clients Words
              </p>
              <p className="whitespace-nowrap text-[4rem] xl:text-[6rem] 2xl:text-[8rem] font-semibold text-t-blue">
                About us
              </p>
            </div>
            <span className="order-2 lg:order-1 p-2 relative flex justify-center lg:justify-start gap-1 py-8 w-100">
              <div class="my-custom-pagination-div"></div>
            </span>
            <div className="order-1 lg:order-2 py-[4%] lg:py-[16%]">
              <button className="border border-light-gray text-black font-semibold x-8 py-4 xl:px-8  lg:px-4 lg:py-2 xl:py-4 rounded hover:bg-yellow hover:border-yellow">
                Check All Reviews
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[80%] w-full xl:w-[80%] flex flex-col justify-center items-center h-auto lg:h-[30rem] rounded-[80px]">
          <div className="w-full h-full reviews-bg bg-extl-gray rounded-[80px] flex justify-center items-center flex-col">
            <div className="h-1/2 lg:h-[40%] m-4 lg:m-0 flex text-center lg:text-start justify-center lg:justify-end items-center">
              <p className="w-full lg:w-[70%] mx-8 font-light">
                Phasellus mollis tincidunt semper. Curabitur pharetra tortor
                nisi, ut consectetur risus faucibus in. Donec ac tortor luctus,
                condimentum neque.
              </p>
            </div>
            <div className=" w-[90%] mt-[8%] lg:mt-[0%] m-[4px] lg:w-[85%] xl:w-[96%] h-1/2 overflow-visible flex justify-center items-start mx-[2%]">
              <Swiper
                spaceBetween={5}
                slidesPerView={3}
                style={swiperStyles}
                modules={[Pagination]}
                pagination={pagination}
                className="mySwiper"
                onSlideChange={handleChange}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1000: {
                    spaceBetween:10,
                    slidesPerView: 2,
                  },
                  1400:{
                    slidesPerView:3
                  }
                }}
              >
                {reviews.map((review, index) => {
                  return (
                    <SwiperSlide>
                      <ReviewCard
                        index={index}
                        review={review}
                        active={active}
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
