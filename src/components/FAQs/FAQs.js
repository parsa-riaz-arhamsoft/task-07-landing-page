import { useState } from "react";
import Accordion from "./Accordion";
import ContactUs from "./ContactUs";
import faqsData from "../../data/faqsData";

const FAQs = () => {
  const [isActive, setIsActive] = useState(0);

  const handleToggleActive = (index) => {
    if (isActive === index) {
      setIsActive(null);
    } else {
      setIsActive(index);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden flex justify-end">
      <div className="absolute h-[100%] bg-extl-gray w-[30%] -z-30"></div>
      <div className="absolute right-[20%] skew-x-[-20deg] h-[100%] bg-extl-gray w-[40%] -z-30"></div>
      <div className="relative faqs-bg h-full w-full  py-[6%] overflow-hidden flex justify-center items-center">
        <div className="w-[85%]">
          <h2 className="text-3xl 2xl:text-5xl font-bold my-[5%]">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col lg:flex-row h-full">
            <div className="w-full lg:w-[65%] h-full">
              <div className="w-full h-full">
                {faqsData.map((item, index) => {
                  return (
                    <div key={index} className="z-10 py-2">
                      <Accordion
                        index={index}
                        item={item}
                        isActive={isActive}
                        handleToggleActive={handleToggleActive}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-full 2xl:h-100 md:my-[4%] lg:my-0 lg:w-[35%]">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
