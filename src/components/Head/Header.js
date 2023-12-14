import { useState } from "react";
import logo from "../../asserts/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-full bg-gradient">
      <nav className="text-white z-50 fixed top-0 w-full bg-white shadow-sm flex gradient h-[3.5rem] lg:h-[5rem] 2xl:h-[8rem] 2xl:px-4 justify-center items-center">
        <div className="flex lg:w-[90%] xl:w-[90%] w-[90%] justify-between items-center">
          <div className="h-[80%] w-[50%] md:w-[30%] lg:w-auto 2xl:w-[20%] flex justify-between items-center">
            <img
              src={logo}
              className="object-contain h-full w-full"
              alt="Logo"
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
            className={`lg:w-auto lg:grid lg:static absolute z-10 top-[100%] bg-yellow lg:bg-transparent text-d-blue lg:text-white  h-[30rem] right-0 w-[80%]  rounded-l-lg md:h-auto ${
              isOpen ? "visible" : "hidden"
            }`}
          >
            <ul className="h-full  2xl:text-3xl justify-evenly  flex flex-col md:text-navy md:flex-row gap-4 xl:gap-8 items-center md:justify-center font-semibold">
              <li className="px-2 hover:underline underline-offset-8 decoration-2 decoration-purple hover:-translate-y-1">
                Home
              </li>
              <li className="px-2 hover:underline underline-offset-8 decoration-2 decoration-purple hover:-translate-y-1">
                Review
              </li>
              <li className="px-2 hover:underline underline-offset-8 decoration-2 decoration-purple hover:-translate-y-1">
                Features
              </li>
              <li className="px-2 hover:underline underline-offset-8 decoration-2 decoration-purple hover:-translate-y-1">
                Benefits
              </li>
              <li className="px-2 hover:underline underline-offset-8 decoration-2 decoration-purple hover:-translate-y-1">
                Pricing
              </li>
              <li className="px-2 hover:underline underline-offset-8 decoration-2 decoration-purple hover:-translate-y-1">
                Faqs
              </li>
              <li className="px-2 hover:underline underline-offset-8 decoration-2 decoration-purple hover:-translate-y-1">
                Contact
              </li>
              <div className="flex flex-col lg:flex-row gap-2 text-black font-bold">
                <button className="bg-white py-2 2xl:py-4 px-4 2xl:px-6 rounded hover:bg-yellow">
                  Create Account
                </button>
                <button className="bg-purple lg:bg-yellow py-2 2xl:py-4 px-4 2xl:px-6 rounded">
                  Sign in
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
