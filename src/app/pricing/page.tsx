import FrequentQuestionPtwo from "@/components/pricingSections/frequentQuestionPtwo";
import OnlinePrivicy from "@/components/pricingSections/onlinePrivicy";
import PricingTable from "@/components/pricingSections/PricingTable";
import ProtectDevice from "@/components/pricingSections/protect-device";
import TransparentPricing from "@/components/pricingSections/transparent-pricing";


export default function PricingPage() {
    return (
      <div>
        <TransparentPricing></TransparentPricing>
        <PricingTable></PricingTable>
        <ProtectDevice></ProtectDevice>
        <FrequentQuestionPtwo></FrequentQuestionPtwo>
        <OnlinePrivicy></OnlinePrivicy>
        </div>
    );
    }