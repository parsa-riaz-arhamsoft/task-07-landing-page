import logo from "../../asserts/logo-navy.png";
const PricingComparision = () => {
  return (
    <div className="w-full h-full overflow-hidden flex justify-center items-center">
      <div className="w-[85%] flex flex-col gap-10 justify-center items-center text-white text-center font-f-outfit">
        <div className="grid  gap-8 w-[80%] font-thin">
          <h2 className="text-4xl lg:text-6xl font-semibold">
            Pricing Comparison
          </h2>
          <p>
            AssetsRack is the first fully functional asset management program,
            completely free for first 300 assets.
          </p>
          <p>
            {" "}
            The world’s biggest asset tag retailer, AssetsRack means no more
            paying for other websites’ expensive services. With AssetsRack,
            you’ll get quality, flexibility, and security.
          </p>
        </div>
        <div className="w-full flex flex-wrap gap-2 justify-center items-center lg:justify-between text-black">
          <div className="w-[22rem] h-[32rem] py-[2%] bg-white rounded-[50px]  justify-items-center align-middle text-center border border-green-900">
            <div className="h-[40%] grid justify-items-stretch pt-3">
              <h3 className="font-semibold text-t-blue text-3xl">
                Competitor#1
              </h3>
              <div className="text-center text-sm">
                <p>Smartphone Compatible</p>
                <p>($15 per device per month)</p>
                <p>in addition to yearly price</p>
              </div>
            </div>
            <div className="h-[60%] flex justify-center">
              <div className="bg-plan-gray w-[85%] h-full py-4 grid gap-2 justify-items-center align-middle">
                <h4 className="font-bold">Subscription</h4>
                <div className="p-4 flex justify-center items-center gap-2 bg-white w-[80%] ">
                  <div className="w-1/2 h-full p-2 flex flex-col justify-between border-2 border-r-gray border-t-0 border-b-0 border-l-0">
                    <p className="font-medium text-lg">5</p>
                    <p>Users</p>
                  </div>
                  <div className="w-1/2 h-full p-2 flex flex-col justify-between">
                    <p className="font-medium text-lg">10 GB</p>
                    <p>Cloud Storage</p>
                  </div>
                </div>
                <p className="font-bold">$87,00 / per Year</p>
              </div>
            </div>
          </div>

          <div className="w-[22rem] h-[32rem] py-4 bg-white rounded-[50px]  justify-items-center align-middle text-center border border-green-900">
            <div className="h-[40%] grid justify-items-stretch align-middle ">
              <div className="h-full w-full flex justify-center">
                <img
                  src={logo}
                  alt="logo here"
                  className="object-contain w-[60%] h-full"
                />
              </div>
              <div className="text-center text-sm">
                <p>Smartphone Compatible</p>
                <p>(No Extra Charges)</p>
              </div>
            </div>
            <div className="h-[60%] flex justify-center py-2">
              <div className="bg-d-blue text-white rounded-[34px] w-[85%] h-full py-4 grid gap-2 justify-items-center align-middle">
                <h4 className="font-bold">Subscription</h4>
                <div className="p-4 flex bg-plan-gray text-black justify-center items-center gap-2 w-[80%] ">
                  <div className="w-1/2 h-full p-2 flex flex-col justify-between border-2 border-r-gray border-t-0 border-b-0 border-l-0">
                    <p className="font-medium text-lg">Unlimited</p>
                    <p>Users</p>
                  </div>
                  <div className="w-1/2 h-full p-2 flex flex-col justify-between">
                    <p className="font-medium text-lg">Unlimited</p>
                    <p>Cloud Storage</p>
                  </div>
                </div>
                <p className="font-bold text-yellow">FREE* /for 250 Assets</p>
                <p className="text-xs font-thin">*See Subscription Plans for details</p>
              </div>
            </div>
          </div>

          <div className="w-[22rem] h-[32rem] py-[2%] bg-white rounded-[50px]  justify-items-center align-middle text-center border border-green-900">
            <div className="h-[40%] grid justify-items-stretch pt-3">
              <h3 className="font-semibold text-t-blue text-3xl">
                Competitor #2
              </h3>
             
              <div className="text-center text-sm">
                <p>Smartphone Compatible</p>
                <p>($295/device)</p>
                <p>in addition to yearly price</p>
              </div>
            </div>
            <div className="h-[60%] flex justify-center">
              <div className="bg-plan-gray w-[85%] h-full py-4 grid gap-2 justify-items-center align-middle">
                <h4 className="font-bold">Subscription</h4>
                <div className="p-4 flex justify-center items-center gap-2 bg-white w-[80%] ">
                  <div className="w-1/2 h-full p-2 flex flex-col justify-between border-2 border-r-gray border-t-0 border-b-0 border-l-0">
                    <p className="font-medium text-lg">5</p>
                    <p>Users</p>
                  </div>
                  <div className="w-1/2 h-full p-2 flex flex-col justify-between">
                    <p className="font-medium text-lg">5 GB</p>
                    <p>Cloud Storage</p>
                  </div>
                </div>
                <p className="font-bold">$900 / per Year</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PricingComparision;
