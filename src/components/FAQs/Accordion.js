import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Accordion = (props) => {
  const [item, setItem] = useState(props.datas);
  const [isActive, setIsActive] = useState(false);

  const handleToggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="h-full w-full overflow-hidden py-2">
      <div
        className={`${isActive?"border-yellow":"border-gray"} px-2 shadow-md border-l-4 border-r-1 border-b-1 border-t-1`}
      >
        <div
          onClick={handleToggleActive}
          className="flex justify-between items-center cursor-pointer"
        >
          <div className={`${isActive?"text-t-blue font-semibold":"text-black"} p-2`}>{item.question}</div>
          {isActive ? (
            <FontAwesomeIcon icon={faAngleUp} className="px-2 font-semibold" />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} className="px-2" />
          )}
        </div>
        {isActive ? (
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
