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
  return (
    <div className="faqs-bg h-full w-full py-[6%] overflow-hidden flex justify-center items-center">
      <div className="w-[85%]">
        <h2 className="text-3xl font-bold my-[5%]">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-[65%] h-full">
            <div className="w-full h-full z-10">
              {list.map((item, index) => {
                return <Accordion key={index} datas={item} />;
              })}
            </div>
          </div>
          <div className="w-full  lg:w-[35%]">
           <ContactUs/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
