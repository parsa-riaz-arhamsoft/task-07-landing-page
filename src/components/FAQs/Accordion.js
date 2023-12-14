import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion = ({ index, item, handleToggleActive, isActive }) => {
  
  return (
    <div className={`${isActive===index?"shadow-sm":"shadow-md"} h-full w-full overflow-hidden  border border-l-0 border-extl-gray bg-white`}>
      <div
        className={`${
          isActive === index ? "border-yellow" : "border-gray"
        } px-2 border-l-4 border-r-1 border-b-1 border-t-1`}
      >
        <div
          onClick={()=>handleToggleActive(index)}
          className="flex justify-between items-center cursor-pointer"
        >
          <div
            className={`${
              isActive === index ? "text-t-blue font-semibold" : "text-black"
            } p-2`}
          >
            {item.question}
          </div>
          {isActive === index ? (
            <FontAwesomeIcon icon={faAngleUp} className="px-2 font-semibold" />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} className="px-2" />
          )}
        </div>
        {isActive === index ? (
          <div
            className={`border-2 border-t-gray border-l-0 border-r-0 border-b-0`}
          >
            <p className="p-2">{item.answer}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Accordion;
