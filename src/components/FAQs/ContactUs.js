import userIcon from "../../asserts/contactus/user-icon.svg";
import emailIcon from "../../asserts/contactus/email-icon.svg";

const ContactUs = () => {
  return (
    <div className="h-[25rem] w-full flex justify-center lg:justify-end font-f-outfit">
      <div className="w-[80%] h-full box-border contact-shadow rounded-[31px] p-[8%]">
        <h3 className="font-semibold h-[20%] text-lg">Contact Us</h3>
        <div className="flex flex-col h-[80%] justify-evenly gap-2">
          <div className="h-[20%] w-full relative">
            <input
              type="text"
              className="border text-sm border-gray h-full bg-extl-gray w-full rounded focus:outline-none pl-8 focus:ring-1 focus:ring-yellow focus:border-0"
              placeholder="Your name"
            />
            <img src={userIcon} alt="user" className="absolute top-3 left-2" />
          </div>
          <div className="h-[20%] w-full relative">
            <input
              type="email"
              className="border border-gray bg-extl-gray text-sm h-full w-full rounded focus:outline-none pl-8 focus:ring-1 focus:ring-yellow focus:border-0"
              placeholder="Your email"
            />
            <img src={emailIcon} alt="user" className="absolute top-4 left-2" />
          </div>
          <textarea
            className="border border-gray text-sm py-2 bg-extl-gray h-[40%] rounded focus:outline-none px-2 focus:ring-1 focus:ring-yellow focus:border-0"
            placeholder="Your message"
          ></textarea>
          <div className="h-[20%] w-full flex justify-end align-middle">
            <button className="bg-yellow font-semibold px-4 rounded hover:border hover:border-gray hover:bg-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
