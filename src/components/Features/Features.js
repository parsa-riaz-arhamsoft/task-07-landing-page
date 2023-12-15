import { useState } from "react";
import featureImage from "../../assets/features/feature-img.png";

const Features = () => {
  const [feature, setFeature] = useState("Unlimited User");

  const handleFeature = (f) => {
    setFeature(f);
  };

  return (
    <div className="h-full w-full overflow-hidden py-[8%] lg:py-[15%] xl:py-[8%] flex justify-center items-center text-center font-f-outfit">
      <div className="w-[95%] lg:w-[85%] xl:w-[85%] flex flex-col gap-8">
        <h2 className="text-4xl lg:text-6xl 2xl:text-7xl font-semibold text-t-blue">
          Features
        </h2>
        <p className="2xl:text-lg">
          Vivamus eget aliquam dui. Integer eu arcu vel arcu suscipit ultrices
          quis non mauris.
        </p>
        <ul className="p-3 lg:border rounded-xl lg:rounded-full w-100 h-[20rem] md:h-[10rem] lg:h-auto flex flex-col md:flex-row md:flex-wrap md:justify-evenly justify-evenly lg:justify-evenly md:gap-10 lg:gap-0 items-center lg:text-xs text-sm xl:text-sm 2xl:text-xl 2xl:py-6 border">
          <li
            onClick={() => {
              handleFeature("Unlimited User");
            }}
            className="bg-d-blue text-white py-3 px-5 rounded-full"
          >
            Unlimited User
          </li>
          <li
            onClick={() => {
              handleFeature(" Unlimited Custom Reports");
            }}
            className="hover:bg-d-blue hover:text-white hover:py-3 hover:px-5 hover:rounded-full cursor-pointer"
          >
            Unlimited Custom Reports
          </li>
          <li
            onClick={() => {
              handleFeature("Cloud-based");
            }}
            className="hover:bg-d-blue cursor-pointer hover:text-white hover:py-3 hover:px-5 hover:rounded-full"
          >
            Cloud-based
          </li>
          <li
            onClick={() => {
              handleFeature("Configurable Email Alerts");
            }}
            className="hover:bg-d-blue cursor-pointer hover:text-white hover:py-3 hover:px-5 hover:rounded-full"
          >
            Configurable Email Alerts
          </li>
          <li
            onClick={() => {
              handleFeature("Barcode Scanning");
            }}
            className="hover:bg-d-blue cursor-pointer hover:text-white hover:py-3 hover:px-5 hover:rounded-full"
          >
            Barcode Scanning
          </li>
          <li
            onClick={() => {
              handleFeature("Maintenance Scheduling");
            }}
            className="hover:bg-d-blue cursor-pointer hover:text-white hover:py-3 hover:px-5 hover:rounded-full"
          >
            Maintenance Scheduling
          </li>
          <li
            onClick={() => {
              handleFeature("Check-in & check-out Features");
            }}
            className="hover:bg-d-blue cursor-pointer hover:text-white hover:py-3 hover:px-5 hover:rounded-full"
          >
            Check-in & check-out Features
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-start  gap-2 text-center lg:text-start mt-[4%]">
          <div className="w-100 lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:justify-evenly 2xl:justify-center gap-6 2xl:gap-[8%]">
            <h3 className="text-2xl md:text-5xl lg:text-4xl 2xl:text-[3rem] font-semibold md:my-[4%] xl:my-0 text-t-blue">
              {feature}
            </h3>
            <p className="2xl:text-2xl w-[80%] lg:w-auto">
              Unlimited users at no additional charge. Make your system as
              broad, or as narrow, as you need. Each user can have their own
              unique level of access ranging from limited viewing to full
              administrator. AssetTiger is designed as a convenient solution for
              everyone in your organization.
            </p>
            <p className="2xl:text-2xl w-[80%] lg:w-auto">
              {" "}
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. In auctor egestas dolor et
              iaculis. Suspendisse et ipsum consectetur, elementum enim et,
              dignissim risus. Phasellus id diam erat. Pellentesque hendrerit
              sem sit amet odio sodales, at placerat metus gravida. Duis
              venenatis quam eget ligula euismod vulputate.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center features-bg mx-[4%]">
            <img
              src={featureImage}
              alt="feature representative"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
