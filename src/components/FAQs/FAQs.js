import { useState } from "react";
import Accordion from "./Accordion";
import ContactUs from "./ContactUs";

const FAQs = () => {
  const list = [
    {
      question: "Is AssetTiger really free?",
      answer:
        "Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place, you lose productivity, too.",
    },
    {
      question: "Why should I track my assets?",
      answer:
        "Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place, you lose productivity, too.",
    },
    {
      question:
        "What are the essential parts of a first-rate asset management program?",
      answer:
        "Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place, you lose productivity, too.",
    },
    {
      question: "What is the purpose of the mobile application?",
      answer:
        "Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place, you lose productivity, too.",
    },
    {
      question: "Xolor sit amet, consect em dolor sit amet ?.",
      answer:
        "Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place, you lose productivity, too.",
    },
    {
      question: "Norem ipsum dolor sit amet, consect emv ?.",
      answer:
        "Staying on top of your assets saves you time and money. It’s harder to lose or misplace assets when your system tracks every asset’s history and exact location. There’s a huge opportunity cost to finding your lost assets. Without a system in place, you lose productivity, too.",
    },
  ];
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
        <h2 className="text-3xl font-bold my-[5%]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-[65%] h-full">
            <div className="w-full h-full">
              {list.map((item, index) => {
                return (
                  <div className="z-10 py-2">
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
          <div className="w-full md:my-[4%] lg:my-0 lg:w-[35%]">
            <ContactUs />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FAQs;
