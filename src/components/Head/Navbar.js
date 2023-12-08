import { useState } from "react";

const Navbar = ({ isOpen }) => {
  return (
    <>
      <ul
        className={`flex font-f-outfit gap-2  xl:gap-6 text-base 2xl:text-[1.2rem]`}
      >
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
      </ul>
    </>
  );
};

export default Navbar;
