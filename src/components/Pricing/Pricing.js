import PricingComparision from "./PricingComparision"
import SubscriptionPlans from "./SubscriptionPlans"

const Pricing=()=> {
  return (
    <div className="h-full w-full bg-d-blue py-[4%] pricing-bg">
        <div className="py-[6%]">
            <PricingComparision/>
        </div>
        <div className="py-[6%]">
            <SubscriptionPlans/>
        </div>
    </div>
  )
}

export default Pricing