import logo from "../../asserts/logo.svg"
import facebook from "../../asserts/footer/facebook-icon.png"
import twitter from "../../asserts/footer/twitter-icon.png"
import linkedIn from "../../asserts/footer/linkedIn-icon.png"
import google from "../../asserts/footer/google-icon.png"
import pinterest from "../../asserts/footer/pinterest-icon.png"

const Footer = () => {
  return (
<div className="w-full footer-bg h-[18rem] overflow-hidden bg-d-blue flex justify-center items-center">
<div className="w-[80%] md:w-[30%] xl:w-[20%] h-[50%] font-f-outfit text-white flex flex-col justify-between">
<img src={logo} alt="logo here" className="px-4"/>
<p className="text-sm lg:text-base">© 2023 All Rights Reserved AssetRack</p>
<div className="w-full flex justify-evenly h-[25%]">
<img src={facebook} alt="facebook icon" className="h-full w-full object-contain hover:translate-x-1 hover:translate-y-1"/>
<img src={twitter} alt="twitter icon" className="h-full w-full object-contain hover:translate-x-1 hover:translate-y-1"/>
<img src={linkedIn} alt="linkedIn icon" className="h-full w-full object-contain hover:translate-x-1 hover:translate-y-1"/>
<img src={google} alt="google icon" className="h-full w-full object-contain hover:translate-x-1 hover:translate-y-1"/>
<img src={pinterest} alt="pinterest icon" className="h-full w-full object-contain hover:translate-x-1 hover:translate-y-1"/>
</div>
</div>
</div>
  )
}

export default Footer