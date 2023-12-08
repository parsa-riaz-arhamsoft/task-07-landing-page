import { useState } from "react";
import logo from "../../asserts/logo.svg";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-10 h-[4rem] lg:h-[4rem] 2xl:h-[5rem] w-full flex justify-center items-center overflow-hidden gradient text-white text-sm lg:text-base font-f-outfit">
      <div className="h-[80%] w-[90%] container flex items-center justify-between">
        <div className="w-1/2 md:w-1/4">
          <img
            src={logo}
            alt="SSETS Rack logo"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="lg:hidden">
          {!isOpen ? (
            <div className="text-[1.5rem]" onClick={() => setIsOpen(true)}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          ) : (
            <div className="text-[1.5rem]" onClick={() => setIsOpen(false)}>
              <FontAwesomeIcon icon={faClose} />
            </div>
          )}
        </div>
        <div
          className={`gap-6 items-center lg:flex ${
            isOpen
              ? "flex flex-col absolute top-10 right-[-6%] w-[80%] md:w-[50%] z-50 h-auto border border-red-900 bg-white"
              : "hidden"
          }`}
        >
          <Navbar />
          <div className="flex gap-2 text-black font-semibold">
            <button className="bg-white py-2 px-4 rounded-sm hover:bg-yellow">
              Create Account
            </button>
            <button className="bg-yellow py-2 px-4 rounded-sm">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
