import { useEffect, useState } from "react";
import star from "../../asserts/hero/star.svg";
import arrowIcon from "../../asserts/reviews/arrow-icon.png";

const ReviewCard = ({ review, val, index }) => {
    
  const [isShow, setIseShow] = useState(false);

  const handleIsShow = () => {
    setIseShow(!isShow);
  };

  useEffect(() => {
    if (val === index) setIseShow(true);
  }, []);

  return (
    <div
      key={index}
      className="w-[20rem] h-full bg-white  rounded-[60px] overflow-visible review-shadow p-2"
      onMouseEnter={handleIsShow}
      onMouseLeave={handleIsShow}
    >
      <div className="h-auto w-[80%] p-4 m-2 flex flex-col gap-1">
        <img
          src={review.img}
          alt="trusted client"
          className="h-auto w-[40%] object-contain"
        />
        <span className="font-semibold">{review.name}</span>
        <p className="text-yellow font-light text-sm">review.writtenDate</p>
        <span className="flex gap-1 h-auto w-[50%]">
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
      </div>
      {isShow ? (
        <div className="mx-8">
          <p className="font-light text-sm">{review.review}</p>
          <div className="h-[80%] w-full py-4 flex justify-end">
            <img
              src={arrowIcon}
              alt="move next"
              className="w-[20%] h-full object-contain cursor-pointer"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReviewCard;
