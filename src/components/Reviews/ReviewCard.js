import star from "../../assets/hero/star.svg";
import arrowIcon from "../../assets/reviews/arrow-icon.png";

const ReviewCard = ({ review, active, index, handleActive }) => {
  return (
    <div className="h-full w-full">
      <div
        className={`w-full lg:w-[100%] bg-white rounded-[60px] shadow-lg p-2 border border-plan-gray ${
          active === index
            ? "h-full transition duration-1000"
            : "h-[250px] lg:h-[200px] 2xl:h-[300px]"
        }`}
        onMouseEnter={() => {
          handleActive(index);
        }}
        onMouseLeave={() => {
          handleActive(null);
        }}
      >
        <div
          className="h-auto w-[80%] 2xl:w-[60%]
        p-4 m-2 flex flex-col gap-1"
        >
          <div className="w-full h-full 2xl:mx-8">
            <img
              src={review.img}
              alt="trusted client"
              className="h-auto w-[40%] 2xl:w-[50%] object-contain"
            />
          </div>
          <span className="font-semibold 2xl:text-xl 2xl:mx-[20%]">
            {review.name}
          </span>
          <p className="text-yellow font-light text-sm 2xl:text-lg 2xl:mx-[20%]">
            {review.writtenDate}
          </p>
          <span className="flex gap-1 h-auto w-[50%] 2xl:mx-[20%]">
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

        <div className="mx-8 2xl:mx-[15%] w-[80%] flex flex-col justify-center items-center h-full">
          <p
            className={`font-light text-sm 2xl:text-base ${
              active === index
                ? "translate-y-0 -translate-x-0 opacity-100 transition duration-1000"
                : "opacity-0 -translate-x-20 translate-y-20"
            }`}
          >
            {review.review}
          </p>
          <div
            className={`h-[80%] w-[80%] py-4 flex justify-end ${
              active === index
                ? "translate-x-0 opacity-100 transition duration-1000"
                : "opacity-0 translate-x-20"
            }`}
          >
            <img
              src={arrowIcon}
              alt="move next"
              className="w-[20%] h-full object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
