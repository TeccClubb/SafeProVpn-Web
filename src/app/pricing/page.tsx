import React, { FC } from "react";
import FrequentQuestionPtwo from "@/components/pricingSections/frequentQuestionPtwo";
import OnlinePrivicy from "@/components/pricingSections/onlinePrivicy";
import PricingTable from "@/components/pricingSections/PricingTable";
import ProtectDevice from "@/components/pricingSections/protect-device";
import PricingSection from "@/components/SafeProVpn-home/PricingSection";

const PricingPage: FC = async () => (
  <>
    <PricingSection
      heading={
        <>
          Simple, Transparent <span className="text-primary">Pricing</span>
        </>
      }
      description="Choose the plan that works best for you. All plans include full access to our premium features, no-logs policy, and military-grade encryption."
    />
    <PricingTable />
    <ProtectDevice />
    <FrequentQuestionPtwo />
    <OnlinePrivicy />
  </>
);

export default PricingPage;
