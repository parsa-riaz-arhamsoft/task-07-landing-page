import client1 from "../../asserts/reviews/client1.png";
import client2 from "../../asserts/reviews/client2.png";
import client3 from "../../asserts/reviews/client3.png";
import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

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
  ];

  const [val, setVal] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [active, setActive] = useState(0);
  const [number, setNumber] = useState(0);
  const [endIndex,setEndIndex]=useState(3)
  const array = [];

  useEffect(() => {
    if (reviews.length % 3 > 0) {
      let length = parseInt(reviews.length / 3 + 1);
      setNumber(length);
    } else {
      let length = parseInt(reviews.length / 3);
      setNumber(length);
    }
  }, []);

  useEffect(()=>{
   
  },[active,endIndex,startIndex,number])

  for (let i = 0; i < number; i++) {
    array.push(0);
  }

  const handleIndexes = (index) => {
    setActive(index);
    setStartIndex(index * 3);
    setVal(index* 3 + 1)
    if(index===0){
      setEndIndex(3)
    }else{
      setEndIndex(val+2)
    }
  };

  return (
    <div className="py-[4%] w-full h-full flex justify-center  items-center font-f-outfit">
      <div className="w-full lg:w-[85%] flex flex-col justify-center lg:justify-start lg:flex-row">
        <div className="w-full lg:w-[22%] h-full flex flex-col justify-center lg:justify-start text-center lg:text-start gap-[10%] overflow-visible z-10">
          <div className="flex flex-col justify-between gap-4 h-full w-full">
            <div className="leading-[70px]">
              <h2 className="text-base text-yellow">Reviews</h2>
              <p className="text-[2rem] lg:text-[3.5rem] font-thin whitespace-nowrap">
                Clients Words
              </p>
              <p className="whitespace-nowrap text-[4rem] lg:text-[6rem] font-semibold text-t-blue">
                About us
              </p>
            </div>
            <span className="flex justify-center lg:justify-start gap-1 py-8">
              {array.map((val, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => handleIndexes(index)}
                    className={`${
                      active === index ? "bg-black" : "bg-gray"
                    } h-[14px] w-[14px] p-2 rounded-full`}
                  ></p>
                );
              })}
            </span>
            <div className="py-[4%] lg:py-[16%]">
              <button className="border border-light-gray text-black font-semibold px-8 py-4 rounded hover:bg-yellow hover:border-yellow">
                Check All Reviews
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[80%] rounded-[80px]">
          <div className="w-full h-full reviews-bg bg-extl-gray rounded-[80px]">
            <div className="h-full lg:h-[40%] flex text-center lg:text-start justify-center lg:justify-end items-center">
              <p className="w-full lg:w-[70%] mx-8 font-light">
                Phasellus mollis tincidunt semper. Curabitur pharetra tortor
                nisi, ut consectetur risus faucibus in. Donec ac tortor luctus,
                condimentum neque.
              </p>
            </div>
            <div className="w-full overflow-visible flex justify-center items-start">
              {/* <div className=" w-[90%] flex gap-4 overflow-visible">
                {reviews.slice(startIndex, endIndex).map((review, index) => {
                  console.log(`mapping ${startIndex}`)
                  return <ReviewCard index={index} review={review} val={val} />;
                })}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
