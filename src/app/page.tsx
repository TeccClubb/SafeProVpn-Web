import React, { FC } from "react";
import VPNPromo from "@/components/SafeProVpn-home/securePrivacy";
import WhyChooseSection from "@/components/SafeProVpn-home/WhyChooseSection";
import SecureEveryClickSection from "@/components/SafeProVpn-home/secure-every-click";
import SafeProWork from "@/components/SafeProVpn-home/safePro-work";
import AvailableDevices from "@/components/SafeProVpn-home/available-devices";
import UsersRemarksSection from "@/components/SafeProVpn-home/UsersRemarksSection";
import PricingSection from "@/components/SafeProVpn-home/PricingSection";
import FrequentlyQuestion from "@/components/SafeProVpn-home/frequently-question";

const HomePage: FC = () => (
  <>
    <VPNPromo />
    <WhyChooseSection />
    <SecureEveryClickSection />
    <SafeProWork />
    <AvailableDevices />
    <UsersRemarksSection />
    <PricingSection
      heading="Simple Pricing, Powerful Protection"
      description="Choose a plan that fits your needs. Whether you're browsing at home or on the go, Safe Pro keeps your data private and your connection secure—always."
    />
    <FrequentlyQuestion />
  </>
);

export default HomePage;
