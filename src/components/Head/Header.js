import logo from "../../asserts/logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="px-2 xl:py-[1.5%] w-full flex justify-center items-center h-auto  overflow-hidden gradient text-white text-sm lg:text-base font-f-outfit fixed">
      <div className="h-[80%] w-[90%]  container flex items-center justify-between">
        <div>
          <img src={logo} alt="SSETS Rack logo"/>
        </div>
        <div className="flex gap-6 items-center">
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
