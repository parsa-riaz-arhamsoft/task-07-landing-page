import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Accordion = (props) => {
    const [item, setItem]=useState(props.datas)
    const [isActive, setIsActive]=useState(false)
    const handleToggleActive=()=>{
       setIsActive(!isActive)
    }
    useEffect(()=>{
console.log(props.datas)
    },[])
  return (
    <div className="h-full w-full overflow-hidden">
      <div className={`border-gray px-2 shadow-md border-l-4 border-r-1 border-b-1 border-t-1 group ${item.active===true?'is-active':''}`}>
        <div onClick={handleToggleActive} className="flex justify-between items-center ">
          <div className="p-2 group-[.is-active]:font-bold">{item.question}</div>
          <FontAwesomeIcon icon={faAngleDown}  className="px-2 group-[is-active]:rotate-[270deg]"/>
        </div>
        <div className={`${isActive===true?"block p-2":"hidden"}border-2  border-t-gray border-l-0 border-r-0 border-b-0`}>
          <p>
         {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
